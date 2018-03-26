import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProveedoresService {

  provURL = 'https://comprasapp-355e0.firebaseio.com/proveedores.json';
  proURL = 'https://comprasapp-355e0.firebaseio.com/proveedores';



  
  constructor(private http: Http) { }

   //para crear un proveedor
   postProveedor(proveedor: any){
    const newpres = JSON.stringify(proveedor);
    const headers = new Headers({
      'ContentType': 'application/json'
    });

    return this.http.post( this.provURL, newpres, {headers})
    .map( res => {
      console.log(res.json());
      return res.json();
    })
  }

  //para recuperar los presupuestos y colocarlos en lista
  getProveedores(){
    return this.http.get(this.provURL)
      .map(
        res => res.json()
      )
  }

  //para recuperar un presupuesto en concreto por ID
  getProveedor(id$: string){
    const url = `${this.proURL}/${id$}.json`;
    return this.http.get(url)
      .map( res => res.json());

  }
  

    //para actualizar dicho presupuesto obtenido por ID
    putProveedor(proveedor: any, id$: string){
      const newpre = JSON.stringify(proveedor);
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
  
      //ruta para acceder a un determinado registro
      const url = `${this.proURL}/${id$}.json`;
  
      return this.http.put(url, newpre, {headers})
        .map ( res => {
          console.log(res.json());
          return res.json();
        })
    }

    delPresupuesto(id$: string){
      const url = `${this.proURL}/${id$}.json`;
      return this.http.delete(url)
              .map( res => res.json() );
  
    }
  

}
