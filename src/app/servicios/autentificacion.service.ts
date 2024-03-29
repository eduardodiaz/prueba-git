import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AutentificacionService {

  constructor(private router: Router, 
              private activatedRouter: ActivatedRoute) { }

  registroUsuario(userdata){
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
        .catch(error => {
          console.log(error);
        });
  }

  inicioSesion(userdata){
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(
        error => {
          console.log(error);
        }
        
      )
  }

  isAuthenticated(){
    const user = firebase.auth().currentUser;
    if(user){
      return true;
    } else {
      return false;
    }
  }

  logout(){
    firebase.auth().signOut();
  }
}
