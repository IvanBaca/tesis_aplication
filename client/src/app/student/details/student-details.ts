import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'student-show',
  templateUrl: 'student-details.html',
  styleUrls: ['student-details.scss']
})

export class StudentDetailsComponent implements OnInit {
  
  private param: any;
  id:number;
  ngOnInit(): void {
      console.log("Hola");
  }
  constructor(
    private route: ActivatedRoute,
    ){
      this.param = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        console.log("Id recibido: " + this.id);
      })
  }
  
}
