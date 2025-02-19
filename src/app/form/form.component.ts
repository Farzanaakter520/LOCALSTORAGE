import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app.component';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  
  u:User = new User('',0, '', '', '');
  ngOnInit(): void {
      console.log('formComponent');

      localStorage.setItem('name','john');
      localStorage.setItem('age','25');
      localStorage.setItem('phone','01236549874');
      localStorage.setItem('address','62no. road RayerBag');
      localStorage.setItem('email','john62@gmail.com');
  }

  onSubmit(){
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.u);

    localStorage.setItem('users', JSON.stringify(users));

    this.u = new User('',0, '', '', '');
    alert('User added successfully!');
  }
}
