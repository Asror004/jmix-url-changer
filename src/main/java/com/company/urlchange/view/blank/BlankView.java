package com.company.urlchange.view.blank;


import com.company.urlchange.config.UrlChanger;
import com.company.urlchange.config.UrlChangerConfig;
import com.company.urlchange.service.Helper;
import com.company.urlchange.view.addbook.AddBook;
import com.company.urlchange.view.deletebook.DeleteBook;
import com.company.urlchange.view.main.MainView;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinService;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.view.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

@Route(value = "blank-view", layout = MainView.class)
@ViewController("BlankView")
@ViewDescriptor("blank-view.xml")
public class BlankView extends StandardView {
    @Autowired
    private DialogWindows dialogWindows;

    @Subscribe
    public void onInit(final InitEvent event) {
        Button button = new Button("Click Me!");
        button.getStyle().set("background-color", "red");
        button.getStyle().set("color", "white");
        button.setId("openModal");

        Consumer<Button> consumer = btn -> btn.getStyle().set("background-color", "green");

        HashMap<String, String> queryParams = new HashMap<>() {{
            put("userId", "2");
            put("username", "boob");
        }};

        UrlChangerConfig config = new UrlChangerConfig(button, consumer, queryParams, this, AddBook.class);

        new UrlChanger(config, dialogWindows);

        getContent().add(button);













//        String url = VaadinService.getCurrentRequest().getHeader("referer");
//
//        Map<String, String> headers = Helper.getHeaders(url);
//
//        if (headers.containsKey("name")) {
//            openViewAddBook();
//        }
//        if (headers.containsKey("bookId")) {
//            openViewDeleteBook();
//        }
    }
    
    


    private void openViewAddBook() {

        dialogWindows.view(this, AddBook.class)
                .withAfterCloseListener(afterCloseEvent -> {
                    String url = VaadinService.getCurrentRequest().getHeader("referer");
                    url = url.substring(0, url.indexOf("?"));
                    getUI().get().getPage().getHistory().replaceState(null, url);
                })
                .open();
    }

    private void openViewDeleteBook() {

        dialogWindows.view(this, DeleteBook.class)
                .withAfterCloseListener(afterCloseEvent -> {
                    String url = VaadinService.getCurrentRequest().getHeader("referer");

                    url = url.substring(0, url.lastIndexOf("&"));

                    getUI().get().getPage().getHistory().replaceState(null, url);
                })
                .open();
    }

}