import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { usuariosService } from '../clientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  constructor(
    private navCtrl: NavController,
    private service: usuariosService
  ) {}

  showLogin() {
    this.navCtrl.navigateForward('login');
  }

  enviando(form: NgForm) {
    const dadosUsuario = form.value;
    this.service.criar('usuarios', dadosUsuario).subscribe(response => {
      console.log('Novo usuário criado:', response);
      this.navCtrl.navigateForward('/tela-principal');
    });
  }
  
  
}
