import {Component} from '@angular/core';
import {DataHttpService} from '../../service/http-service/data.http-service';
import {LoginService} from '../../service/http-service/login.http-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userName: string;
  password: string;

  data: any;

  constructor(private dataService: DataHttpService,
              public loginService: LoginService) {
  }

  login() {
    this.loginService.login(this.userName, this.password).subscribe();
    this.userName = null;
    this.password = null;
  }

  logout() {
    this.userName = null;
    this.password = null;
    this.loginService.logout().subscribe();
  }

  public testCall(): void {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    }, (error) => {
      this.data = error;
    });
  }

}
