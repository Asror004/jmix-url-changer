package com.company.urlchange.view.addbook;


import com.company.urlchange.service.Helper;
import com.company.urlchange.view.deletebook.DeleteBook;
import com.company.urlchange.view.main.MainView;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.page.Page;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinService;
import io.jmix.flowui.DialogWindows;
import io.jmix.flowui.view.*;

import java.util.Map;

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

        button.addClickListener(listener -> {
            String referer = VaadinService.getCurrentRequest().getHeader("referer");
            getUI().get().getPage().getHistory().replaceState(null,referer + "&bookId=1");

            openViewDeleteBook();
        });

        getContent().add(button);

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