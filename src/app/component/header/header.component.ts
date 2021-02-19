import {Component} from '@angular/core';
import {DataHttpService} from '../../service/http-service/data.http-service';
import {LoginService} from '../../service/http-service/login.http-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName: string;
  password: string;

  data: any;

  constructor(public loginService: LoginService) {
  }

  public login(): void {
    this.loginService.login(this.userName, this.password).subscribe();
    this.userName = null;
    this.password = null;
  }

  public logout(): void {
    this.userName = null;
    this.password = null;
    this.loginService.logout().subscribe();
  }

}
