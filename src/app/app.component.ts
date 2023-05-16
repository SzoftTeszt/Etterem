import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from './base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Étterem';
  adat?:string;
  isAdmin:boolean=false;
  tomb:any=["key","nev", "ar"];
  ujEtel:any={};
  etelek:any=[];

  constructor(private base:BaseService){
    // this.adat="cica";
    this.base.getAll().snapshotChanges()
    .pipe(
      map((valtozo:any)=>
        valtozo.map((c:any)=>({key:c.payload.key, ...c.payload.val()})
        ))).subscribe({
        next:adat=>{this.etelek=adat; console.log("Frissítés!")},
        error:err=>console.log(err)
      })    
  }

  addFood(body:any){
    this.base.add(body)
    .then(()=>console.log("Könyv hozzáadva"))
    .catch((err)=>console.log(err))
}
deleteBook(body:any){
    this.base.delete(body.key)
    .then(()=>console.log("Könyv törölve"))
    .catch((err)=>console.log(err))
}

updateBook(body:any){
    this.base.update(body.key, body)
    .then(()=>console.log("Könyv módosítva"))
    .catch((err)=>console.log(err))
}

  nyuszi(){
    this.adat="Nyúl";
  }
  setAdmin(){
    this.isAdmin = !this.isAdmin;
  }
}
