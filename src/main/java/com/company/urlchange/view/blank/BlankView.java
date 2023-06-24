package com.company.urlchange.view.blank;


import com.company.urlchange.service.Helper;
import com.company.urlchange.view.addbook.AddBook;
import com.company.urlchange.view.deletebook.DeleteBook;
import com.company.urlchange.view.main.MainView;

import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.page.History;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.router.Location;
import com.vaadin.flow.router.QueryParameters;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.internal.RouteUtil;
import com.vaadin.flow.server.VaadinRequest;
import com.vaadin.flow.server.VaadinService;
import elemental.json.JsonValue;
import elemental.json.impl.JreJsonString;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.Dialogs;
import io.jmix.flowui.action.DialogAction;
import io.jmix.flowui.view.*;
import org.eclipse.persistence.oxm.json.JsonArrayBuilderResult;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Route(value = "blank-view", layout = MainView.class)
@ViewController("BlankView")
@ViewDescriptor("blank-view.xml")
public class BlankView extends StandardView {
    @Autowired
    private Dialogs dialogs;

    @Autowired
    private DialogWindows dialogWindows;

    @Subscribe
    public void onInit(final InitEvent event) {

        Button button = new Button("Click Me!");
        button.getStyle().set("background-color", "red");
        button.getStyle().set("color", "white");
        button.setId("openModal");

        button.addClickListener(listener -> {

//            Page page = getUI().get().getPage();
            String referer = VaadinService.getCurrentRequest().getHeader("referer");
            getUI().get().getPage().getHistory().replaceState(null,referer + "?name=Shum-bola");

            openViewAddBook();
        });

        getContent().add(button);

        String url = VaadinService.getCurrentRequest().getHeader("referer");

        Map<String, String> headers = Helper.getHeaders(url);

        if (headers.containsKey("name")) {
            openViewAddBook();
        }
        if (headers.containsKey("bookId")) {
            openViewDeleteBook();
        }

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

                    getUI().get().getPage().getHistory().replaceState(null,url);
                })
                .open();
    }

}