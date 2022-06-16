import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.sass'],
  animations: [
    trigger('redBlue',[
      state('red', style({
        height: '300px',
        width: '300px',
        opacity: 1,
        backgroundColor: 'red'
      })),
      state('blue', style({
        height: '200px',
        width: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      transition('red => blue', [
        animate('10s')
      ]),
      transition('blue => red', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class AnimationComponent implements OnInit {
  isRed = true;
  toggle(){
    this.isRed = !this.isRed;
  }

  ngOnInit(): void {
  }

}
