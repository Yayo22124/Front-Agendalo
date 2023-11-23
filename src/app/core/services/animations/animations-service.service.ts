import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationsServiceService {
  static slideInFromRight = trigger('slideInFromRight', [
    state('void', style({ transform: 'translateX(100%)' })),
    transition(':enter', [
      animate('700ms ease-out', style({ transform: 'translateX(0)' })),
    ]),
  ]);

  constructor() {}
}
