package com.company.urlchange.config;

import com.company.urlchange.view.addbook.AddBook;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.server.VaadinService;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.view.StandardView;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.StringJoiner;
import java.util.function.Consumer;

public class UrlChanger {
    private final DialogWindows dialogWindows;

    public UrlChanger(List<UrlChangerConfig> configs, DialogWindows dialogWindows) {
        this.dialogWindows = dialogWindows;
        for (UrlChangerConfig config : configs) {
            go(config);
        }
    }

    public UrlChanger(UrlChangerConfig config, DialogWindows dialogWindows) {
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
                openViewAddBook(config);

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

    private void openViewAddBook(UrlChangerConfig config) {

        dialogWindows.view(config.getView(), config.getOpenViewInDialog())
                .withAfterCloseListener(afterCloseEvent -> close(config))
                .open();
    }

    private void close(UrlChangerConfig config) {
        String referer = VaadinService.getCurrentRequest().getHeader("referer");
        for (Map.Entry<String, String> stringStringEntry : config.getQueryParams().entrySet()) {
            referer = referer.replaceAll(stringStringEntry.getKey() + "=" + stringStringEntry.getValue() + "&?", "");
        }
        String clearedUrl = referer;
        config.getButton().getUI().ifPresent(ui -> ui.getPage().getHistory().pushState(null, clearedUrl));
    }


}
