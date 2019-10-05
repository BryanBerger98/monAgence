import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monAgence';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCNkhqsSK3Bs_6pvaKIMYtaAklfJBKujWo',
      authDomain: 'monagence-7bcc4.firebaseapp.com',
      databaseURL: 'https://monagence-7bcc4.firebaseio.com',
      projectId: 'monagence-7bcc4',
      storageBucket: 'monagence-7bcc4.appspot.com',
      messagingSenderId: '1087915112888',
      appId: '1:1087915112888:web:1704635fd5c88e7d59774d'
    };
    firebase.initializeApp(firebaseConfig);
  }

}
