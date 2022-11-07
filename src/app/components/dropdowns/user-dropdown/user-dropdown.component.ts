import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { createPopper } from "@popperjs/core";
import { CreateSessionDto } from "src/app/models/dto/create-session.dto";
import { DeleteSessionDto } from "src/app/models/dto/delete-session.dto";
import { AccountService } from "src/app/services/account.service";
import { LoginAuthService } from "src/app/services/login-auth.service";

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
})
export class UserDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;

  approved = false;
  login = false;
  reqToken = '';
  userName = '';
  img = '';
  session = new CreateSessionDto();

  constructor(private route: ActivatedRoute, private router: Router, private authService: LoginAuthService, private accountService: AccountService) { }

  ngOnInit() {
    if (localStorage.getItem('session_id') != null) {
      this.login = true;
      this.accountService.getAccountDetails().subscribe(resp => {
        this.userName = resp.username;
        this.img = `https://www.themoviedb.org/t/p/w150_and_h150_face${resp.avatar.tmdb.avatar_path}`;
      });
    }

    this.route.queryParams.subscribe((qParams) => {
      const ap = qParams['approved'];
      const rToken = qParams['request_token'];
      this.approved = ap == 'true' ? true : false;

      if (this.approved) {
        this.session.request_token = rToken;
        this.authService.createSession(this.session).subscribe(resp => {
          this.login = true;
          localStorage.setItem('session_id', resp.session_id);
          //console.log('Session id: ' + resp.session_id);

          this.accountService.getAccountDetails().subscribe(resp => {
            this.userName = resp.username;
            this.img = `https://www.themoviedb.org/t/p/w150_and_h150_face${resp.avatar.tmdb.avatar_path}`;
          });
          window.location.href = `http://localhost:4200/admin/dashboard`;
        });
      }
    });
  }

  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }

  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  requestToken() {
    this.authService.createRequestToken().subscribe(resp => {
      this.reqToken = resp.request_token;
      console.log(this.reqToken);
      window.location.href = `https://www.themoviedb.org/authenticate/${this.reqToken}?redirect_to=http://localhost:4200/admin/dashboard`;
    });
  }

  closeSession() {
    let deleteSessionDto = new DeleteSessionDto();
    if (localStorage.getItem('session_id') != null) {
      deleteSessionDto.session_id = localStorage.getItem('session_id')!;
      this.authService.deleteSession(deleteSessionDto).subscribe(resp => {
        if (resp.success) {
          localStorage.removeItem('session_id');
          this.login = false;
          window.location.href = `http://localhost:4200/admin/dashboard`;
        }
      });
    }
  }
}
