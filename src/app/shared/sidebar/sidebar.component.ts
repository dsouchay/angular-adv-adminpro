import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`.has-arrow.waves-effect.waves-dark.active {
    background-color: transparent;
    }`
    ]
})
export class SidebarComponent implements OnInit {
  itemsMenu: any[];

  constructor( private sidebarService: SidebarService) {
    this.itemsMenu = this.sidebarService.menu;

  }

  ngOnInit(): void {
  }

}
