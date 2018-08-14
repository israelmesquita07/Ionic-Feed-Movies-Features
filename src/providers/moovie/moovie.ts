import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseUrl = "https://api.themoviedb.org/3";
  private chaveAPI = "dfefa0dcb9ee40d95a920753d6e62a44";
  private languageUrl = "&language=pt-BR";
  private urlAPI = this.baseUrl+"/movie/popular?api_key="+this.chaveAPI+this.languageUrl;
  
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
   
   //get method implementation
  public getLatestMovies() {
    return this.http.get(this.urlAPI);
  }

  public getLatestMovieDetalhes(filmeID) {
    return this.http.get(this.baseUrl+`/movie/${filmeID}?api_key=`+this.chaveAPI+this.languageUrl);
  }

}
