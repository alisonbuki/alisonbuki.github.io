import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Game } from '.././classes/game';

declare var babylonjs;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  title = 'my portfolio';

  ngAfterViewInit() {
    let game = new Game('render-canvas');
    game.createScene();
    game.animate();
  }
}
