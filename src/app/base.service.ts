import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Etel } from 'src/etel';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private dbPath="/etelek";
  konyvekRef: AngularFireList<Etel>
  constructor(private db:AngularFireDatabase) {
    this.konyvekRef= db.list(this.dbPath);
   }

  getAll(){
    return this.konyvekRef;
  }

  add(konyv:any){
    return this.konyvekRef.push(konyv);
  }

  update(key:string, value:any){
    return this.konyvekRef.update(key,value);
  }
  delete(key:string){
    return this.konyvekRef.remove(key);
  }

  deleteAll(){
    return this.konyvekRef.remove();
  }

}

