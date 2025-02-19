import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{
  
  u:User = new User('',0, '', '', '');
  isUpdate = false;

constructor(private router:Router){
  const nav = this.router.getCurrentNavigation();
  if(nav?.extras.state && nav.extras.state['user']){
    this.u = nav.extras.state['user'];
    this.isUpdate = true;
  }
}
  //ngOnInit(): void {
  //    console.log('formComponent');
//
  //    localStorage.setItem('name','john');
  //    localStorage.setItem('age','25');
  //    localStorage.setItem('phone','01236549874');
  //    localStorage.setItem('address','62no. road RayerBag');
  //    localStorage.setItem('email','john62@gmail.com');
  //}

  onSubmit(){
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    if(this.isUpdate){
      users = users.map(user =>(user.phone == this.u.phone ? this.u : user));
    }else{
      users.push(this.u);
    }



    localStorage.setItem('users', JSON.stringify(users));

    this.u = new User('',0, '', '', '');
    alert('User added successfully!');
    this.router.navigate(['/list']);
  }
}
