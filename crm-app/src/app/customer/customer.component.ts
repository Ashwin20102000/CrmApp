import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrmService, Details } from '../crm.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  customer:Details[]=[]
  manager:Details[]=[]
  managermessages:any=[]
  showForm = false;
  showFeed = false;
  formGroup:FormGroup;
  constructor(public crmService:CrmService,public fb:FormBuilder) {
    this.formGroup = this.fb.group
    ({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      manager:'Manohar'
    });

   }
  ngOnInit(): void {
     this.crmService
    .getManagerMessage()
    .subscribe(reply => { 
      console.log(reply);
      (this.managermessages = reply)
    });
    this.crmService.getCustomer().subscribe(reply => (this.customer = reply.customer));
    //this.crmService.getManagerMessage().subscribe(reply => (this.managermessages = reply.managermessage));
    }
  save() {
    if (!this.formGroup.valid) {
      console.log(this.formGroup);
      alert('form is not valid');
      return;
    } else {
        this.crmService.postCustomer(this.formGroup.value).subscribe(reply => {
        this.customer = reply.customer;
        this.formGroup.reset();
        this.showForm = false;
        this.crmService
        .getManagerMessage()
        .subscribe(reply => { 
        console.log(reply);
        (this.managermessages = reply)
        });
        this.crmService.getCustomer().subscribe(reply => (this.customer = reply.customer));
      });
      }
      // window.location.reload(true); 
      console.log(this.customer)
  }
}
