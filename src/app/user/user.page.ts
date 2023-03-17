import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  result: any = {};
  user: any = {};

  constructor(
    public http: HttpClient,
    public route: NavController,
    public gb: GlobalService
  ) {
    this.getUser();
  }

  ngOnInit() {}
  ionViewDidEnter() {
    this.getUser();
  }

  getUser() {
    let data = localStorage.getItem('login');
    this.user = data ? JSON.parse(data) : null;
  }

  async saveUser() {
    console.log(JSON.stringify(this.user));
    //Show Loading
    this.gb.show_loading();

    let headers: any = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    await this.http
      .post(this.gb.API_URL + 'user', JSON.stringify(this.user), headers)
      .toPromise()
      .then((res) => {
        this.result = res;
        if (this.result.error == '0') {
          //If Request Success
          localStorage.setItem('login', JSON.stringify(this.result.data.user)); //update data login
          this.gb.notif(this.result.mess, 'success', 2000);
        } else {
          this.gb.notif(this.result.mess, 'danger', 2000);
        }

        //Hide Loading
        this.gb.hide_loading();

        console.log(this.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
