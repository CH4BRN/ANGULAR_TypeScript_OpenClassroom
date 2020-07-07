import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      appareilName: 'Akai mpc',
      appareilStatus: 'éteint'
    },
    {
      appareilName: 'Akai fire',
      appareilStatus: 'éteint'
    },
    {
      appareilName: 'Launchkey 49',
      appareilStatus: 'éteint'
    },
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }
}
