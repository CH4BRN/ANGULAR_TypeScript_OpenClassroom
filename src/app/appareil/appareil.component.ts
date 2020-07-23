import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string = 'Machine';
  @Input() appareilStatus: string = 'éteint';
  @Input() id: number;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getName(): string {
    return this.appareilName;
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

  onDelete() {
    console.log("Delete");
    this.appareilService.deleteOne(this.index);
  }
}
