import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoovieProvider {

  private baseUrl = "https://api.themoviedb.org/3";
  private chaveAPI = "dfefa0dcb9ee40d95a920753d6e62a44";
  private languageUrl = "&language=pt-BR";
  
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
   
   //get method implementation
  public getLatestMovies(page = 1) {
    return this.http.get(this.baseUrl+`/movie/popular?page=${page}&api_key=`+this.chaveAPI+this.languageUrl);
  }

  public getLatestMovieDetalhes(filmeID) {
    return this.http.get(this.baseUrl+`/movie/${filmeID}?api_key=`+this.chaveAPI+this.languageUrl);
  }

}
