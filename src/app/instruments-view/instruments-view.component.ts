import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from '../services/instruments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-instruments-view',
  templateUrl: './instruments-view.component.html',
  styleUrls: ['./instruments-view.component.scss']
})
export class InstrumentsViewComponent implements OnInit {

  instrumentsSubscription: Subscription;
  instruments: any[];

  constructor(
    private instrumentsService: InstrumentsService
  ) { }

  ngOnInit(): void {
    this.instrumentsSubscription =
      this.instrumentsService.instrumentsSubject.subscribe(
        (instruments: any[]) => {
          this.instruments = instruments;
        }
      );
    this.instrumentsService.emitInstrumentsSubject();
  }

}
