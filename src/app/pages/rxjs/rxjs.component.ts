import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs : Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    // {
    //   next: valor => console.log('Subs', valor),
    //   error :error => console.warn('Error',error),
    //   complete: ()=> console.log('Obs terminado')}
    // );

   this.intervalSubs = this.retornaIntervalo()
    .subscribe(console.log)
  }

  retornaIntervalo(): Observable<number>{

    return interval(500)
                        .pipe(
                          take(10),
                          map( (valor:number) => valor +1 ),
                          filter(valor=> valor % 2 === 0),
                        );
  }

  retornaObservable(): Observable<number>{
    let i=0;
   return new Observable<number>( (observe)=>{
      const intervalo = setInterval(() => {
        observe.next(i);
        i++;
        if (i === 4){
          clearInterval(intervalo);
          observe.complete();
        }
        if (i === 2){
          observe.error('i Llegó el error');
        }
      },1000);

    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
