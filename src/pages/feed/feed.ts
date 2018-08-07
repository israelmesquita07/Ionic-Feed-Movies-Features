import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public obj = {
    titulo:"Israel Mesquita",
    data:"November 5, 1955",
    descricao:"Criado um app incrível!!",
    likes:312,
    comments:254,
    hora:6
  };

  public lista_filmes = new Array<any>();


  public nome_usuario:string =  "Israel do Código";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoovieProvider
    ) {
  }

  public somaDeDoisNUmeros(num1:number, num2:number):void{
    alert(num1+num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(data=>{
      const response = JSON.parse((data as any)._body);
      this.lista_filmes = response.results;
      console.log(response);
    }, error=>{
      console.log(error);
    });
  }

}
