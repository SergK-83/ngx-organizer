import { Component } from '@angular/core';
import {DateService} from '../shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  date = this.dateService.date;

  constructor(
    private dateService: DateService
  ) { }

  go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
