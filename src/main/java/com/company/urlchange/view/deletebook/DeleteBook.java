package com.company.urlchange.view.deletebook;


import com.company.urlchange.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.DialogMode;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "DeleteBook", layout = MainView.class)
@ViewController("DeleteBook")
@ViewDescriptor("delete-book.xml")
@DialogMode(width = "600px", height = "400px", resizable = true)
public class DeleteBook extends StandardView {
}