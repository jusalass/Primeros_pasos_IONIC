import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonInput, IonItem, IonList, IonCard, IonButton, IonTitle,IonToast   } from '@ionic/angular/standalone';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonInput, IonItem, IonList, IonCard, IonButton,IonTitle, IonToast]
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



    if (this.mail === 'juan@correo.cl' && this.pass === '123456') {
      let navigationExtras:NavigationExtras = {
        state: {user: this.mail}
      }
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.isToastOpen = true;
    }
  }

}
