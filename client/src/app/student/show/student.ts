import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'student-show',
  templateUrl: 'student.html',
  styleUrls: ['student.scss']
})

export class StudentComponent implements OnInit {
    ngOnInit(): void {
        console.log("Hola");
    }

  
}
