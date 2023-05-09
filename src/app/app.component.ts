import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';

//import {HTTP_PROVIDERS} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div>
  <h1>Маршрутизация в Angular 15</h1>
  <router-outlet></router-outlet>
</div>`,
  providers:[HttpClientModule, SpotifyService]
})
export class AppComponent {
  title = 'my_proj';
}
