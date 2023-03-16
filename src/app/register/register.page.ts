import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  reg: any = {}
  result: any = {}

  constructor(
    public http: HttpClient,
    public route: NavController,
    public gb: GlobalService
  ) { }

  ngOnInit() {
  }

  goRegister() {
    // Validasi
    if (!this.reg.name) {
      this.gb.notif("Name Can't Empty !", 'warning')
      return
    }

    if (!this.reg.email) {
      this.gb.notif("Email Can't Empty !", 'warning')
      return
    }

    if (!this.gb.validateEmail(this.reg.email)) {
      this.gb.notif("Email Invalid !", 'warning')
      return
    }

    if (!this.reg.password) {
      this.gb.notif("Password Can't Empty !", 'warning')
      return
    }

    // Progress Bar
    this.gb.show_loading();

    let headers: any = new HttpHeaders()
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    this.http.post(this.gb.API_URL + "register", JSON.stringify(this.reg), headers).toPromise()
      .then(res => {
        this.result = res
        this.gb.hide_loading() // Sembunyikan Loading
        console.log(res)

        if (this.result.error == 0) {
          this.route.navigateBack('/') // Success Register Login

          // Langsung Ke Tab / Sudah dianggap Login
          // localStorage.setItem("login", JSON.stringify(this.result.data))
          // this.route.navigateRoot('tabs/tab1')

          this.gb.notif(this.result.mess, "success")
        } else {
          this.gb.notif(this.result.mess, "danger")
        }

      })

    console.log(this.reg)
  }

}
