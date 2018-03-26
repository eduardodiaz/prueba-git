import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  presURL = 'https://comprasapp-355e0.firebaseio.com/presupuestos.json';
  preURL = 'https://comprasapp-355e0.firebaseio.com/presupuestos';

  constructor(private http: Http) { }

  //para crear un presupuesto
  postPrespuesto(presupuesto: any){
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'ContentType': 'application/json'
    });

    return this.http.post( this.presURL, newpres, {headers})
    .map( res => {
      console.log(res.json());
      return res.json();
    })
  }

  //para recuperar los presupuestos y colocarlos en lista
  getPresupuestos(){
    return this.http.get(this.presURL)
      .map(
        res => res.json()
      )
  }

  //para recuperar un presupuesto en concreto por ID
  getPresupuesto(id$: string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());

  }

  //para actualizar dicho presupuesto obtenido por ID
  putPresupuesto(presupuesto: any, id$: string){
    const newpre = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    //ruta para acceder a un determinado registro
    const url = `${this.preURL}/${id$}.json`;

    return this.http.put(url, newpre, {headers})
      .map ( res => {
        console.log(res.json());
        return res.json();
      })
  }

  delPresupuesto(id$: string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url)
            .map( res => res.json() );

  }
  
}

