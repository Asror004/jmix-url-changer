package com.company.urlchange.view.user;

import com.company.urlchange.entity.User;
import com.company.urlchange.view.main.MainView;
import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "users", layout = MainView.class)
@ViewController("User.list")
@ViewDescriptor("user-list-view.xml")
@LookupComponent("usersDataGrid")
@DialogMode(width = "50em")
public class UserListView extends StandardListView<User> {
}