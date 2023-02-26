import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';



export interface dataModel{
  titulo:string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})
export class BreadcrumbComponent implements OnDestroy {
  titulo: string = '';
  tituloSub$: Subscription;

  constructor( private router: Router) {
    this.tituloSub$ = this.getArgumentosRuta()
                      .subscribe(({titulo})=>{
                        this.titulo = titulo;
                        document.title = ` Admin Pro - ${titulo}`;
                      });

   }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getArgumentosRuta():Observable<Data>{
   return this.router.events.pipe(
      filter( (e: any) => e instanceof ActivationEnd),
      filter ((e: ActivationEnd) => (e as ActivationEnd).snapshot.firstChild === null),
      map((e: ActivationEnd) => (e as ActivationEnd).snapshot.data)
    )
  }

}
