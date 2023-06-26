package com.company.urlchange.config;

import com.company.urlchange.service.Helper;
import com.company.urlchange.view.addbook.AddBook;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.server.VaadinService;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.builder.WindowBuilder;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.StringJoiner;
import java.util.function.Consumer;

public class UrlChanger {
    private final DialogWindows dialogWindows;

    public UrlChanger(List<UrlChangerConfig> configs, DialogWindows dialogWindows) {
        this.dialogWindows = dialogWindows;
        goConfigList(configs);
    }

    public UrlChanger(UrlChangerConfig config, DialogWindows dialogWindows) {
        this.dialogWindows = dialogWindows;
        go(config);
    }

    private void goConfigList(List<UrlChangerConfig> configs){
        for (UrlChangerConfig config : configs) {
            go(config);
        }
    }

    private void go(UrlChangerConfig config) {
        Button button = config.getButton();

        button.addClickListener(listener -> button.getUI().ifPresent(ui -> {
            Page page = ui.getPage();
            String referer = VaadinService.getCurrentRequest().getHeader("referer");

            page.getHistory().replaceState(null, getUrl(config.getQueryParams(), referer));

            if (Objects.nonNull(config.getOpenViewInDialog()))
                openDialogView(config);

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
            sj.add(key + "=" + queryParams.get(key));
        }

        return referer + sj;
    }

    private void openDialogView(UrlChangerConfig config) {

        getWindowBuilder(config.getView(), config.getOpenViewInDialog())
                .withAfterCloseListener(afterCloseEvent -> close(config.getQueryParams(), config.getButton()))
                .open();
    }

    private WindowBuilder<? extends StandardView> getWindowBuilder(StandardView view, Class<? extends StandardView> openView) {
        return dialogWindows.view(view, openView);
    }

    private void close(Map<String, String> queryParams, Button button) {
        String referer = VaadinService.getCurrentRequest().getHeader("referer");
        for (Map.Entry<String, String> stringStringEntry : queryParams.entrySet()) {
            referer = referer.replaceAll(stringStringEntry.getKey() + "=" + stringStringEntry.getValue() + "&?", "");
        }
        String clearedUrl = referer;
        button.getUI().ifPresent(ui -> ui.getPage().getHistory().pushState(null, clearedUrl));
    }

    public void initViews(StandardView view, List<ViewWithParameters> openViews){
        String url = VaadinService.getCurrentRequest().getHeader("referer");
        Map<String, String> headers = Helper.getHeaders(url);

        for (ViewWithParameters openView : openViews) {
            for (String key : openView.getQueryParams().keySet()) {
                if (headers.containsKey(key)) {
                    getWindowBuilder(view, openView.getOpenView()).withAfterCloseListener(closeEvent ->
                            close(openView.getQueryParams(), ));
                }
            }
        }
    }

}
