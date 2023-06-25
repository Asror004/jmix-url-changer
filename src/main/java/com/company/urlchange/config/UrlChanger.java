package com.company.urlchange.config;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.server.VaadinService;

import java.util.List;
import java.util.Map;
import java.util.StringJoiner;

public class UrlChanger {
    public UrlChanger(List<UrlChangerConfig> configs){

    }

    public UrlChanger(UrlChangerConfig config){
        go(config);
    }

    private void go(UrlChangerConfig config) {
        Button button = config.getButton();
        button.addClickListener(listener -> button.getUI().ifPresent(ui -> {
            Page page = ui.getPage();
            String referer = VaadinService.getCurrentRequest().getHeader("referer");

            page.getHistory().replaceState(null, getUrl(config.getQueryParams(), referer));

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
}
