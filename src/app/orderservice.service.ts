import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  private apiurl = "http://localhost:8085/order/getCustAddress/";
  private orderListUrl = "http://localhost:8085/order/getOrderListForAdmin?";
  private orderDetailUrl = "http://localhost:8085/order/getOrderDetail?";
  
  constructor(private http: HttpClient) { }

  getCustomerAddress(custId: number) {
      return this.http.get(this.apiurl+custId);
  }

  getOrderList(custId: number, startDate: String, endDate: String){
     var ss = '';
    if(custId != null && custId !=0)
        ss = ss + 'createdBy='+custId;
    
    if(startDate != null){
      if(ss!='')ss=ss+'&startDate='+startDate;
      else ss=ss+'startDate='+startDate;
    }
    
    if(endDate != null){
      if(ss!='')ss=ss+'&endDate='+endDate;
      else ss=ss+'endDate='+endDate;
    }      
    return this.http.get(this.orderListUrl+ss);
  }

getOrderDetail(orderId: number) {
    return this.http.get(this.orderDetailUrl+orderId);
}
}
