import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonInput, IonItem, IonList, IonCard, IonButton, IonTitle   } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonInput, IonItem, IonList, IonCard, IonButton,IonTitle  ]
})
export class LoginPage implements OnInit {

  mail: string = '';
  pass: string = '';
  isToastOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  login() {
    console.log(this.mail);
    console.log(this.pass);

    if (this.mail === 'jesus.vargas@tinet.cl' && this.pass === '123456') {
      this.router.navigateByUrl('/home');
    } else {
      this.isToastOpen = true;
    }
  }

}
