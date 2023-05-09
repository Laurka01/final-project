import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators"; 
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //private apiUrl = environment.apiUrl;
  private searchUrl:string;
  private artistUrl:string;
  constructor(private httpClient:HttpClient) { 
  }
  searchMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type='+type+'&limit=5&access_token=BQB5dx6s1J27JTi4lp5sK7P8E_L5XchaYlOLWCuUivquT76TD-ySd3HThaBELaIK7-6zxlGtAxGDE-8s-JwDorMZvyxdb37BFCf84dtP7YuLRU69gqVkBApxSYnhbk_PwjQ8Z78g6WORkKp7NQ6iwmyGqL9Np8SBxkiCGBSzHGwCdOocrUK2D4d8LayQ99lHPb9StMJb9A4vexeYuL87MdHibGFJaKPtS_xKS4Eqo3qIrNK2qyZPbR44NHiYOJ3CifC_m3CC2EXuxL23KxVe24LjkqcrDNJE6BAyYn8hoN27UnmngZfCkqu_duQQmFskLcz4f5-Zf3d8NcyAd1R6uVNsNQyPCA';
    return this.httpClient.get(this.searchUrl)
        .pipe(map((res: any) => res
        ));
  }
  getArtist(id:string){
    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id+'?access_token=BQB5dx6s1J27JTi4lp5sK7P8E_L5XchaYlOLWCuUivquT76TD-ySd3HThaBELaIK7-6zxlGtAxGDE-8s-JwDorMZvyxdb37BFCf84dtP7YuLRU69gqVkBApxSYnhbk_PwjQ8Z78g6WORkKp7NQ6iwmyGqL9Np8SBxkiCGBSzHGwCdOocrUK2D4d8LayQ99lHPb9StMJb9A4vexeYuL87MdHibGFJaKPtS_xKS4Eqo3qIrNK2qyZPbR44NHiYOJ3CifC_m3CC2EXuxL23KxVe24LjkqcrDNJE6BAyYn8hoN27UnmngZfCkqu_duQQmFskLcz4f5-Zf3d8NcyAd1R6uVNsNQyPCA';
    return this.httpClient.get(this.artistUrl)
        .pipe(map((res: any) => res
        ));
        
  }
}  

