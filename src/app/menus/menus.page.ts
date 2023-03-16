import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage {
  menus: any;
  categories: any;
  search: any;

  constructor(
    public http: HttpClient,
    public route: NavController,
    public gb: GlobalService
  ) {}

  ionViewDidEnter() {
    this.getMenu();
    this.getCategory();
  }

  getMenu(id_cat: any = '') {
    this.http
      .get(this.gb.API_URL + 'menus/' + id_cat)
      .toPromise()
      .then((res) => {
        this.menus = res;
        console.log(res);
      });
  }

  getCategory() {
    this.http
      .get(this.gb.API_URL + 'category')
      .toPromise()
      .then((res) => {
        this.categories = res;
        console.log(res);
      });
  }

  goDetailMenu(mn: any) {
    this.route.navigateForward(['smenu', { data: JSON.stringify(mn) }]);
  }
}
