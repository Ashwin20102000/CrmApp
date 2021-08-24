import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrmService, Details } from '../crm.service';
import { ManagerComponent } from '../manager/manager.component';
@Component({
  selector: 'app-manager-message',
  templateUrl: './manager-message.component.html',
  styleUrls: ['./manager-message.component.css']
})
export class ManagerMessageComponent implements OnInit {
  managermessage:Details[]=[]
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
    .getManagerMessage()
    .subscribe(reply => (this.managermessage = reply.managermessage));
  }
  save() {
    console.log("asad")
    if (!this.formGroup.valid) {
      console.log(this.formGroup);
      alert('form is not valid');
      return;
    }
     else {
      // this.managermessage= [...this.managermessage,this.formGroup.value]
        this.crmService.postManagerMessage(this.formGroup.value).subscribe(reply => {
          console.log(this.formGroup.value)
          this.managermessage = reply.managermessage
          this.formGroup.reset();
        });
      }
      console.log(this.managermessage)
      window.location.reload(true); 
    }

}
