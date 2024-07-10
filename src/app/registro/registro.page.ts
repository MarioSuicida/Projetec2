import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
//  registerForm: FormGroup;

  constructor(
 //   private fb: FormBuilder,
    private navCtrl: NavController
  ) {
  //  this.registerForm = this.fb.group({
    //  name: ['', [Validators.required]],
      //email: ['', [Validators.required, Validators.email]],
     // password: ['', [Validators.required, Validators.minLength(6)]],
      //confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  //  }, {
   //   validator: this.matchingPasswords('password', 'confirmPassword')
   // });
  }

  showLogin(){
    this.navCtrl.navigateForward('login')
  }

  ngOnInit() {}

 // matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
 //   return (group: FormGroup) => {
 //     const password = group.controls[passwordKey];
//      const confirmPassword = group.controls[confirmPasswordKey];
//      if (password.value !== confirmPassword.value) {
//        return confirmPassword.setErrors({ notEquivalent: true });
//      } else {
//        return confirmPassword.setErrors(null);
//      }
//    };
//  }

 // onSubmit() {
 //   if (this.registerForm.valid) {
  //    const { name, email, password } = this.registerForm.value;
      // Enviar os dados para o backend ou processá-los conforme necessário.
  //    console.log('Registrando:', { name, email, password });
      // Navegar para outra página após o registro
    //  this.navCtrl.navigateForward('/home');
   // }
//  }
}

