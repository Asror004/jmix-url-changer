package com.company.urlchange.config;

import com.company.urlchange.view.addbook.AddBook;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.server.VaadinService;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.view.StandardView;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.StringJoiner;

public class UrlChanger {
    private final DialogWindows dialogWindows;

    public UrlChanger(List<UrlChangerConfig> configs, DialogWindows dialogWindows){
        this.dialogWindows = dialogWindows;
    }

    public UrlChanger(UrlChangerConfig config, DialogWindows dialogWindows){
        this.dialogWindows = dialogWindows;
        go(config);
    }

    private void go(UrlChangerConfig config) {
        Button button = config.getButton();
        button.addClickListener(listener -> button.getUI().ifPresent(ui -> {
            Page page = ui.getPage();
            String referer = VaadinService.getCurrentRequest().getHeader("referer");

            page.getHistory().replaceState(null, getUrl(config.getQueryParams(), referer));

            if (Objects.nonNull(config.getOpenViewInDialog()))
                openViewAddBook(config.getView(), config.getOpenViewInDialog());

            config.getConsumer().accept(button);
        }));
    }

    private String getUrl(Map<String, String> queryParams, String referer) {
        if (!referer.contains("?"))
            referer += "?";
        else
            referer += "&";

        StringJoiner sj = new StringJoiner("&");

        for (String key : queryParams.keySet()) {
            sj.add(key+"="+queryParams.get(key));
        }

        return referer+sj;
    }

    private void openViewAddBook(StandardView view, Class<? extends StandardView> openView) {

        dialogWindows.view(view, openView)
                .withAfterCloseListener(afterCloseEvent -> close())
                .open();
    }

    private void close(){

    }

}
