import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomersComponent } from './customers/customers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomersComponent],
  templateUrl: './app.html'
})
export class App {

}