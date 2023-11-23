import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class HomePageComponent {
  constructor() {}

  ngOnInit(): void {}
}
