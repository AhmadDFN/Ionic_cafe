import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: any = {}
  result: any = {}

  constructor(
    public route: NavController,
    public http: HttpClient,
    public gb: GlobalService
  ) { }

  ngOnInit() {
  }

  goLogin() {
    // Validation
    if (!this.login.email) {
      this.gb.notif("Email tidak boleh Kosong !", "danger")
      return
    }

    if (!this.gb.validateEmail(this.login.email)) {
      this.gb.notif("Email tidak valid !", "danger")
      return
    }

    if (!this.login.password) {
      this.gb.notif("Password tidak boleh Kosong !", "danger")
      return
    }

    // Loading
    this.gb.show_loading()

    // Header
    let headers: any = new HttpHeaders()
    headers.append('Access-Control-Allow-Origin', '*')
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')

    // Send login information
    this.http.post(this.gb.API_URL + "login", JSON.stringify(this.login), headers).toPromise()
      .then(res => {
        this.result = res // Data response JSON
        this.gb.hide_loading() // Hide Loading
        if (this.result.error == 0) {
          localStorage.setItem("login", JSON.stringify(this.result.data.user))
          localStorage.setItem("member", JSON.stringify(this.result.data.member))
          this.route.navigateRoot("tabs/tab1") // Jika Berhasil Login diarahkan ke tab1
          this.gb.notif(this.result.mess, "success") // Notifikasi
        } else {
          this.gb.notif(this.result.mess, "danger") // Notifikasi
        }
      })

    console.log(this.login)

  }

  goRegistrasi() {
    this.route.navigateForward('register')
  }

}
