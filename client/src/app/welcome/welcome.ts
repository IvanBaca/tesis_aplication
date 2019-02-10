import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'welcome',
  templateUrl: 'welcome.html',
  styleUrls: ['welcome.scss']
})

export class WelcomeComponent implements OnInit {
    ngOnInit(): void {
        console.log("Pagina de bienvenida");
    }

  
}
