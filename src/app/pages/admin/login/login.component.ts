import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
// loginObj:any = {
//   userName: '',
//   password: '',
// }
loginObj = { userName: '', password: '' };
constructor(private router: Router, private authService: AuthService, ){}

onLogin(){
  // if (this.loginObj.userName =="amir" && this.loginObj.password == 123456)
  // {
  //   this.router.navigateByUrl('/cart')
  // }else{
  //   alert('invalid credentials')
  // }

//   if (this.authService.login(this.loginObj.userName, this.loginObj.password)) {
//     this.router.navigateByUrl('/cart');
//   } else {
//     alert('Invalid credentials');
//   }
}
}






