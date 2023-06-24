package com.company.urlchange.view.modal;


import com.company.urlchange.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.DialogMode;
import io.jmix.flowui.view.StandardView;
import io.jmix.flowui.view.ViewController;
import io.jmix.flowui.view.ViewDescriptor;

@Route(value = "ModalView", layout = MainView.class)
@ViewController("ModalView")
@ViewDescriptor("modal-view.xml")
@DialogMode(width = "800px", height = "600px", closeOnEsc = true, resizable = true)
public class ModalView extends StandardView {
}