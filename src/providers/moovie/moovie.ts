import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseUrl = "https://api.themoviedb.org/3";
  private chaveAPI ="XXXXX";
  private urlAPI = this.baseUrl+"/movie/latest?api_key="+this.chaveAPI;
  
  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }
   
  public getLatestMovies() {
    console.log(this.urlAPI);
    return this.http.get(this.urlAPI);
  }

}
