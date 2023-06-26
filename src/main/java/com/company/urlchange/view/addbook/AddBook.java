package com.company.urlchange.view.addbook;


import com.company.urlchange.config.UrlChanger;
import com.company.urlchange.config.UrlChangerConfig;
import com.company.urlchange.service.Helper;
import com.company.urlchange.view.deletebook.DeleteBook;
import com.company.urlchange.view.main.MainView;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinService;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.view.*;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

@Route(value = "add-book", layout = MainView.class)
@ViewController("AddBook")
@ViewDescriptor("add-book.xml")
@DialogMode(width = "800px", height = "600px", resizable = true, closeOnEsc = true)
public class AddBook extends StandardView {
    private final DialogWindows dialogWindows;

    public AddBook(DialogWindows dialogWindows) {
        this.dialogWindows = dialogWindows;
    }

    @Subscribe
    public void onInit(final InitEvent event) {

        Button button = new Button("Click Me!");
        button.getStyle().set("background-color", "red");
        button.getStyle().set("color", "white");
        button.setId("openModal");


        getContent().add(button);

        Consumer<Button> consumer = btn -> btn.getStyle().set("background-color", "green");

        HashMap<String, String> queryParams = new HashMap<>() {{
            put("bookId", "2");
            put("user", "boob");
        }};

        UrlChangerConfig deleteBookConf = new UrlChangerConfig(button, consumer, queryParams, this, DeleteBook.class);
        new UrlChanger(deleteBookConf,dialogWindows);
    }

}