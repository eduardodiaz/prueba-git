import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //metodo para conectarnos con firebase
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBcmqAA5uk3pVQ1ECvdcIWAECPMAvvrG-4",
      authDomain: "comprasapp-355e0.firebaseapp.com"
    })
  }
  title = 'app';
}
