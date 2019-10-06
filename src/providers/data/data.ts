import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Data {

  constructor(public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data){
    this.storage.set('todos', data);
  }
}
