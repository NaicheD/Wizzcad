import {NgModule} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

const primeNgModuleList: any[] = [
  TableModule,
  ButtonModule,
  InputTextModule,
  PasswordModule,
  ProgressBarModule,
  FileUploadModule
];

@NgModule({
  imports: primeNgModuleList,
  exports: primeNgModuleList
})
export class PrimengModule {

}
