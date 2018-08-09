import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {
 
  private config = {
    showSlide: false,
    name: "",
    username: ""
  };


  constructor() {
    
  }
   
  //Recupera os dados do locaStorage
  getConfigData():any{
    return localStorage.getItem("config");
  }

  //Grava os dados no locaStorage
  setConfigData(showSlide?: boolean, name?:string, username?:string){

    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if (showSlide) {
      config.showSlide = showSlide;
    }

    if (name) {
      config.name = name;
    }

    if (username) {
      config.username = username;
    }

    localStorage.setItem("config", JSON.stringify(config));

  }

}
