import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit {

  @Input() name: string;

  @Input() type: string;

  @Input() imgSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

  getName() {
    return this.name;
  }

}
