import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forex-card',
  templateUrl: './forex-card.component.html',
  styleUrls: ['./forex-card.component.sass']
})
export class ForexCardComponent implements OnInit {

  @Input() controls: boolean;
  @Input() accountDetails: any;
  constructor() { }

  ngOnInit() {
  }

}
