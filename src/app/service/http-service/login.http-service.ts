import {isNullOrUndefined} from 'util';
import {Observable, Subject} from 'rxjs';

import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  public token: string;
  public userName: string;

  fetchLogin$: Observable<any>;
  fetchLoginSource = new Subject<any>();

  fetchLogout$: Observable<any>;
  fetchLogoutSource = new Subject<any>();

  public get isLogged(): boolean {
    return !isNullOrUndefined(this.token);
  }

  constructor() {
    this.fetchLogin$ = this.fetchLoginSource.asObservable();
    this.fetchLogout$ = this.fetchLogoutSource.asObservable();
    this.token = localStorage.getItem('token');
  }

  public login(userName: string, password: string): Observable<any> {
    const logIn$ = new Observable(logInObserver => {

      const logInNow = () => {
        // TODO faire un appel
        if (userName === 'UsernameFull' && password === 'full') {
          this.userName = userName;
          this.token = 'eyE5WddlEJJz2PZesrMFwmqr9IKkelkN';
        } else if (userName === 'UsernameEmpty' && password === 'Empty') {
          this.userName = userName;
          this.token = '9hxpqopIpy46K29Kx4XWjw0KQRCDhx0E';
        }

        if (this.isLogged) {
          localStorage.setItem('token', this.token);
          this.fetchLoginSource.next();
        }
        logInObserver.complete();
      };

      if (this.isLogged) {
        this.logout().subscribe(logInNow);
      } else {
        logInNow();
      }
    });
    return logIn$;
  }

  public logout(): Observable<any> {
    const logout$ = new Observable(logoutObserver => {
      this.token = null;
      localStorage.removeItem('token');
      this.fetchLogoutSource.next();
    });
    return logout$;
  }
}
