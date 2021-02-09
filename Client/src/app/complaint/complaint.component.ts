import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service";
import { ComplaintModel } from "../mycomplaint/mycomplaint.model";
import { Router } from '@angular/router';   
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  constructor( private homeService: HomeService, private router: Router ) { }

  complaint: ComplaintModel[];
  
 
  listcomplaint(complaint){
    localStorage.setItem("complaintId", complaint._id.toString());
    this.router.navigate(["/editcomplaint"]);
  }
  

  ngOnInit(): void {
     
     this.homeService.getComplaint().subscribe((data)=>{
      this.complaint=JSON.parse(JSON.stringify(data));
      console.log(this.complaint);
    })
  }

}

 
 