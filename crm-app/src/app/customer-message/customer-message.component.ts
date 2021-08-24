import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrmService, Details } from '../crm.service';

@Component({
  selector: 'app-customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.css']
})
export class CustomerMessageComponent implements OnInit {
  customermessage:Details[]=[]
  viewForm=true;
  formGroup:FormGroup;
  constructor(public crmService:CrmService,public fb:FormBuilder) {
    this.formGroup = this.fb.group
    ({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    this.crmService
    .getCustomerMessage()
    .subscribe(reply => (this.customermessage = reply.customermessage));
  }
  save() {
    if (!this.formGroup.valid) {
      console.log(this.formGroup);
      alert('form is not valid');
      return;
    }
     else {
        this.crmService.postCustomerMessage(this.formGroup.value).subscribe(reply => {
          console.log(this.formGroup.value)
          this.customermessage = reply.customermessage;
          this.formGroup.reset();
        });
      }
      console.log(this.customermessage)
      window.location.reload(true); 
    }

}
