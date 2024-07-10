import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController ) { 
    
  }

  showRegistro(){
    this.navCtrl.navigateForward('registro')
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Aqui  adicionar a lógica de autenticação
      console.log('Username:', username);
      console.log('Password:', password);
      // Navegue para a próxima página ou exiba uma mensagem de sucesso
      this.navCtrl.navigateForward('/tela-principal');
    }
  }

}
