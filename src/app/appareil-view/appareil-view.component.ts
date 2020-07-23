import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  constructor(
    private appareilService: AppareilService,
    private authService: AuthService) {
    this.isAuth = authService.isAuth
  }


  isAuth = false

  appareils: any[]
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });


  @Input() id: number;

  ngOnInit(): void {
    this.appareilSubscription =
      this.appareilService.appareilsSubject.subscribe(
        (appareils: any[]) => {
          this.appareils = appareils;
        }
      );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    console.log('On allume tout !');
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    //  Confirm permet d'afficher une fenetre de confirmation
    if (confirm('Etes vous sûr de vouloir éteindre tous les appareils ?')) {
      console.log('On eteint tout !');
      this.appareilService.switchOffAll();
    } else {
      return null;
    }

  }

}
