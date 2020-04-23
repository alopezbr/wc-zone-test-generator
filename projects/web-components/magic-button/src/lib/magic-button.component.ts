import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-magic-button',
  templateUrl: './magic-button.component.html',
  styleUrls: [
    './magic-button.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicButtonComponent implements OnInit {
  @Input() title: string;
  @Output() onMagic = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    const event = {
      clicked: true,
      magic: 'Abracadabra!'
    };
    this.onMagic.emit(event);
  }
}
