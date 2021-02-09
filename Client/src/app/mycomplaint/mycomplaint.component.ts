import { Component, OnInit,OnDestroy } from '@angular/core';
import {HomeService } from '../home.service';
import {Router} from '@angular/router';
import { ComplaintModel } from "./mycomplaint.model";


@Component({
  selector: 'app-mycomplaint',
  templateUrl: './mycomplaint.component.html',
  styleUrls: ['./mycomplaint.component.css']
})
export class MyComplaintComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }
  ComplaintItem= new ComplaintModel(null,null,null,null,null,null,null,null,null,null,null);
  
  ngOnInit(): void {
  }
  addComplaint(){
    this.homeService.newComplaint(this.ComplaintItem);
    console.log("called");
    alert("Successfully Added ");
    this.router.navigate(["/complaint"]);
  }

}