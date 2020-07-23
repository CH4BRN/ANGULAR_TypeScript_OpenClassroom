import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, from, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//Implementation de OnInit
export class AppComponent implements OnInit, OnDestroy {
  // Appelée quand un component est détruit
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe;
  }


  secondes: number;
  counterSubscription: Subscription;

  //  Recuperation des données depuis le service.
  ngOnInit() {
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log("An error occured! : " + error);
      },
      () => {
        console.log("Observable complete.");
      }
    )
  }
}
