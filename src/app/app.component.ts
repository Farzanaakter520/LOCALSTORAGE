import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'localStorage';
}

export class User{
  name: string;
  age: number;
  phone: string;
  address: string;
  email:string;

  constructor(name: string, age:number, phone:string, address:string, email:string){
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
    this.email = email;
  }
}