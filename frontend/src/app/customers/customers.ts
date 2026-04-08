import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.html'
})
export class CustomersComponent {

  customers: any[] = [];

  customer: any = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    createdDate: new Date()
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((res: any) => {
      this.customers = res;
    });
  }

  addCustomer() {
    this.customerService.addCustomer(this.customer).subscribe(() => {
      this.getCustomers();
      this.clearForm();
    });
  }

  editCustomer(c: any) {
    this.customer = { ...c };
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(() => {
      this.getCustomers();
      this.clearForm();
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.getCustomers();
    });
  }

  clearForm() {
    this.customer = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      createdDate: new Date()
    };
  }

}