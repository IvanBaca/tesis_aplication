import { NgModule } from "@angular/core";
import {StudentComponent} from "./show/student"
import { StudentRoutingModule } from './student.routing';
import { StudentDetailsComponent } from './details/student-details';

@NgModule({
    declarations:[
        StudentComponent,
        StudentDetailsComponent
    ],
    imports:[
        StudentRoutingModule
    ],
    exports:[

    ],
    providers:[
        
    ],
    entryComponents:[
        
    ]
}) export class StudentModule { }