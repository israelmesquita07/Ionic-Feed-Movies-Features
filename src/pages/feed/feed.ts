import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";
import { FilmeDetalhesPage } from "../filme-detalhes/filme-detalhes";

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
  public page = 1;
  public infiniteScroll;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  public nome_usuario:string =  "Israel do Código";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
    ) { }

  doRefresh(refresher) {
      this.refresher = refresher;
      this.isRefreshing = true;
      this.carregarFilmes();
    }

  abrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Filmes..."
    });
    this.loader.present();
  }

  fecharCarregando(){
    this.loader.dismiss();
  }

  abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
  }

  public somaDeDoisNUmeros(num1:number, num2:number):void{
    alert(num1+num2);
  }

  public doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  ionViewDidEnter(){
    this.carregarFilmes();
  }

  carregarFilmes(newpage: boolean = false) {
    this.abrirCarregando();
    this.movieProvider.getLatestMovies(this.page).subscribe(data=>{
      const response = JSON.parse((data as any)._body);

      if (newpage) {
        this.lista_filmes = this.lista_filmes.concat(response.results);
        this.infiniteScroll.complete();
      } else {
        this.lista_filmes = response.results;
      }
      this.fecharCarregando();

      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }, error=>{
      console.log(error);
      this.fecharCarregando();
      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
  }

}
