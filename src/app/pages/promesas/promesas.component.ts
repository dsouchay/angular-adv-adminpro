import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

   ngOnInit(): void {
    this.getUsuarios().then(usuarios => console.log(usuarios));
  //   const promesa = new Promise(( resolve, reject) => {
  //     if ( false){
  //       resolve ('Fast');
  //     } else {
  //       reject( 'learn more');
  //     }
  //   });
  //   promesa.then((a)=>{
  //     console.log('first ' + a);
  //   }).catch((e )=>{
  //     console.log('error ' + e);
  //   })
  //   console.log(' Last');
   }

  getUsuarios(){
    return new Promise ( resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp=> resp.json())
      .then(body =>resolve(body.data));
    })
  }

}
