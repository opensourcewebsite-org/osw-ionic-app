import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'osw-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private menuCtrl: MenuController, private navCtrl: NavController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(1)])]
    });
  }

  doLogin() {
    // if (this.formGroup.valid) {
    //   const { email, password } = this.formGroup.getRawValue();
    //   console.log('Email: ', email);
    //   console.log('Password: ', password);

    //   // submit
    // }
    this.navCtrl.navigateRoot('/contacts');
  }

}
