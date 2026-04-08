import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:7136/api/customers';

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCustomer(customer: any) {
    return this.http.post(this.apiUrl, customer);
  }

  updateCustomer(customer: any) {
    return this.http.put(`${this.apiUrl}/${customer.id}`, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}