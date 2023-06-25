package com.company.urlchange.config;

import com.vaadin.flow.component.button.Button;

import java.util.Map;
import java.util.function.Consumer;

public class UrlChangerConfig {
    private Button button;
    private Consumer<Button> consumer;
    private Map<String, String> queryParams;

    public UrlChangerConfig(Button button, Consumer<Button> consumer, Map<String, String> queryParams) {
        this.button = button;
        this.consumer = consumer;
        this.queryParams = queryParams;
    }

    public Button getButton() {
        return button;
    }

    public void setButton(Button button) {
        this.button = button;
    }

    public Consumer<Button> getConsumer() {
        return consumer;
    }

    public void setConsumer(Consumer<Button> consumer) {
        this.consumer = consumer;
    }

    public Map<String, String> getQueryParams() {
        return queryParams;
    }

    public void setQueryParams(Map<String, String> queryParams) {
        this.queryParams = queryParams;
    }
}
