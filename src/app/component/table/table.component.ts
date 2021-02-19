import {Component} from '@angular/core';
import {DataHttpService} from '../../service/http-service/data.http-service';
import {LoginService} from '../../service/http-service/login.http-service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  dataList: any[];

  constructor(private dataService: DataHttpService,
              public loginService: LoginService) {
    loginService.fetchLogin$.subscribe(() => {
      this.getData();
    });
    loginService.fetchLogout$.subscribe(() => {
      this.clearTable();
    });
  }

  public getData(): void {
    this.dataService.getData().subscribe((response) => {
      this.dataList = response;
    }, (error) => {
      this.clearTable();
    });
  }

  public clearTable(): void {
    this.dataList = [];
  }

}
