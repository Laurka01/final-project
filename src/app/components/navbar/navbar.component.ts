import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Artist } from 'artist';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  template: `<p>rthrt</p>`,
  styleUrls: ['./navbar.component.scss'],
  providers:[SpotifyService]
})
export class NavbarComponent {
  searchStr:string;
  searchRes : Artist[];
  constructor(private _spotifyService:SpotifyService){}

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
          console.log(res.artists.items);
          this.searchRes = res.artists.items;
        })
  }

}
