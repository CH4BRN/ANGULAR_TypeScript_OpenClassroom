import { Subject } from 'rxjs';

export class InstrumentsService{

  instrumentsSubject = new Subject<any[]>();

  private instruments = [
    {
      id: 1,
      name: 'Doublebass',
      type: 'Strings',
      imgSrc: 'assets/img/Double-Bass-Shop.jpg'
    },
    {
      id: 2,
      name: 'Saxophone',
      type: 'Woods',
      imgSrc: 'assets/img/sax.jpg'
    }
  ];

  emitInstrumentsSubject() {
    this.instrumentsSubject.next(this.instruments.slice());
  }
}