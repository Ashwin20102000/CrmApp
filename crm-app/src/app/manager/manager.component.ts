import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrmService, Details } from '../crm.service';
import { CustomerComponent } from '../customer/customer.component';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  manager:Details[]=[]
  viewForm = false;
  showFeed=false
  viewSelectForm = false;
  formGroup:FormGroup;
  ManagerGroup:FormGroup = new FormGroup({})
  customerId=""
  selectedManager=""
  customers:Details[]=[]
  customermessage:any=[]
  managermessage:any=[]
  reviewmessages=[{name:"",message:""}]
  review:any=[]
  selectedCustomer:Details={
    "id":"",
    "name":"",
    "manager":""
  };
   constructor(public crmService:CrmService,public fb:FormBuilder) {
    this.formGroup = this.fb.group
    ({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });

   }
  ngOnInit(): void {
    this.crmService
    .getManager()
    .subscribe(reply => (this.manager = reply.manager));
    this.crmService
    .getCustomer()
    .subscribe(reply => (this.customers = reply.customer));

    this.crmService
    .getCustomerMessage()
    .subscribe(reply => (this.customermessage = reply));
    this.crmService
    .getManagerMessage()
    .subscribe(reply => (this.managermessage = reply));
   }
  save() {
    console.log("asad")
    if (!this.formGroup.valid) {
      console.log(this.formGroup);
      alert('form is not valid');
      return;
    }

     else {
        this.crmService.postManager(this.formGroup.value).subscribe(reply => {
          console.log(this.formGroup.value)
          this.manager = reply.manager;
          this.formGroup.reset();
          this.viewForm = false;
        });
        this.crmService
    .getManager()
    .subscribe(reply => (this.manager = reply.manager));
    this.crmService
    .getCustomer()
    .subscribe(reply => (this.customers = reply.customer));

    this.crmService
    .getCustomerMessage()
    .subscribe(reply => (this.customermessage = reply));
    this.crmService
    .getManagerMessage()
    .subscribe(reply => (this.managermessage = reply));
      }
      console.log(this.manager)
    }
    saveName(id:string){
      this.customerId=id
      let manager = this.manager.filter(e=>(e.id==id))
      this.selectedManager=manager[0].name
      this.viewSelectForm=false
      this.ManagerGroup.value.id=this.selectedCustomer.id
      this.ManagerGroup.value.name=this.selectedCustomer.name
      this.ManagerGroup.value.manager=this.selectedManager
      console.log(this.ManagerGroup.value)
    }
    addCustomer(cust:Details){
      this.selectedCustomer.id=cust.id
      this.selectedCustomer.name=cust.name
    }
}


