import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {

  collapseShow = "hidden";
  login = false;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('session_id') != null) {
      this.login = true;
    };
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}