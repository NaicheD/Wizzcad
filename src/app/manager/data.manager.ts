export class DataManager {

  constructor() {
  }

  public buildData(dataList: any[]): any[] {
    let resultDataList: any[] = [];
    dataList = this.cleanAllData(dataList);

    for (let i = 0; i < dataList.length; i++) {
      let data = dataList[i];
      if (data.forms.length > 1) {
        // TODO supprimer
        console.log('voir index ' + i);
      }
      if (data.forms && data.forms.length) {
        resultDataList.push(data.forms[0]);
      }
    }

    return resultDataList;
  }

  public cleanAllData(dataList: any[]): any[] {
    const dataModelList: any[] = [];

    for (let i = 0; i < dataList.length; i++) {
      let data = this.cleanData(dataList[i]);
      if (data.forms && data.forms instanceof Array) {
        data.forms = this.cleanAllData(data.forms);
      }
      if (data.model && data.model instanceof Array) {
        data.model = this.cleanAllData(data.model);
      }
      if (data.type && data.forms instanceof Array) {
        data.type = this.cleanAllData(data.type);
      }
      dataModelList.push(data);
    }
    return dataModelList;
  }

  private cleanData(data: any): any {
    delete data.autoCreatedAt;
    delete data.autoUpdatedAt;
    delete data.createdAt;
    delete data.createdById;
    delete data.updatedAt;
    delete data.updatedById;
    return data;
  }
}
