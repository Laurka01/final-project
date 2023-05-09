import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Artist } from 'artist';
import { Album } from 'album';
import { ActivatedRoute } from '@angular/router';
import { map} from "rxjs/operators"; 

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  template: `<p>rthrt</p>`,
  styleUrls: ['./artist.component.scss'],
  providers:[SpotifyService]
})
export class ArtistComponent implements OnInit{
    id:string;
    artist: Artist[];
    albums: Album[];
    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute
        ){}
    ngOnInit(): void {
        this._route.params
            .pipe(map(params => params['id']))
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                        console.log(artist)
                    })
            })
    }
}