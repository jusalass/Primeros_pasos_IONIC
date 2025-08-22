import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterLink } from '@angular/router';
import {  IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonContent, RouterModule, IonButton],
})
export class HomePage {

  mail: String = ""
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe((params) =>{
      if (this.router.getCurrentNavigation()?.extras?.state?.['user']){
        this.mail = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        alert(this.mail)
      }
    })
  }
}
