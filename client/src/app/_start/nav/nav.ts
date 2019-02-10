import { Component, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
//import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavItem } from 'src/app/_models/navItem';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.html',
  styleUrls: ['nav.scss']
})
export class NavComponent implements OnInit {
  fillerNav = Array.from({ length: 50 }, (_, i) => `Alumnos ${i + 1}`);
  mobileQuery: MediaQueryList;
  navItems: NavItem[] = [
    { name: "Estudiantes", icon:"map",route:'/student'},
    { name: "Bienvenida", icon:"map",route:'/'}
    
  
  ];

  private _mobileQueryListener: () => void;
  constructor(
    media: MediaMatcher,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef, ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}



