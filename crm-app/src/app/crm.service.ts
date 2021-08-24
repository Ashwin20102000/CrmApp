import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Details{
  "id":any;
  "name":string;
  "manager":string
}
@Injectable({providedIn: 'root'})
export class CrmService {
  // serverApiUrl = 'https://crm-app-11.herokuapp.com'
  serverApiUrl = 'http://127.0.0.1:8000'
  constructor(public http:HttpClient) {}
  getCustomer():Observable<{customer:Details[]}>{
    return this.http.get(this.serverApiUrl+'/customer') as Observable<{customer:Details[]}>
  }

  postCustomer(customer:Details):Observable<{customer:Details[]}>{
    return this.http.post(this.serverApiUrl+'/customer',{
      customer
    }) as Observable<{
      customer:Details[]
    }>;
  }
  getManager():Observable<{manager:Details[]}>{
    return this.http.get(this.serverApiUrl+'/manager') as Observable<{manager:Details[]}>
  }

  postManager(manager:Details):Observable<{manager:Details[]}>{
    return this.http.post(this.serverApiUrl+'/manager',{
      manager
    }) as Observable<{
      manager:Details[]
    }>;
  }

  getManagerMessage():Observable<{managermessage:Details[]}>{
    return this.http.get(this.serverApiUrl+'/managermessage') as Observable<
    {managermessage:Details[]}
    >
  }

  postManagerMessage(managermessage:Details):Observable<{managermessage:Details[]}>{
    return this.http.post(this.serverApiUrl+'/managermessage',{
      managermessage
    }) as Observable<{
      managermessage:Details[] 
    }>;
  }


  getCustomerMessage():Observable<{customermessage:Details[]}>{
    return this.http.get(this.serverApiUrl+'/customermessage') as Observable<
    {customermessage:Details[]}
    >
  }

  postCustomerMessage(customermessage:Details):Observable<{customermessage:Details[]}>{
    return this.http.post(this.serverApiUrl+'/customermessage',{
      customermessage
    }) as Observable<{
      customermessage:Details[] 
    }>;
  }
 

  
}

