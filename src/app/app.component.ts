import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector là tên component để gọi trên file HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
}
