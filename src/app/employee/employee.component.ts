import { Component, OnInit } from '@angular/core';
import { employee } from '../data/employee.module';
import { NgForm , NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  copyemployee : employee = {
    fname:null,
    lname:null,
    email:null,
    contact:null,
    add:null,
    unm:null,
    pwd:null,
    gender:null,
    qualification:null,
    experience:null,
    c:true


  };
  employee : employee={ ...this.copyemployee};

  constructor(private dataservice : DataService) { }

  ngOnInit(){
  }

  onsubmit(form : NgForm) {
    console.log('in onSubmit: ',form.valid);
    this.dataservice.postUserSettingsForm(this.employee).subscribe(
      result => console.log('success:',result),
      error => console.log('error:',error)
    );
  }

}
