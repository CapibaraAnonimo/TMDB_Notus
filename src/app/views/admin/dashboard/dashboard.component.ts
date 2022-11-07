import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  login = false;
  
  constructor() {}

  ngOnInit() {
    if (localStorage.getItem('session_id') != null) {
      this.login = true;
    };
  }
}
