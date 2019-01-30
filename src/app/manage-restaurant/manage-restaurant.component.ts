import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OwnerService } from '../services/owner.service';
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-manage-restaurant',
  templateUrl: './manage-restaurant.component.html',
  styleUrls: ['./manage-restaurant.component.scss']
})
export class ManageRestaurantComponent implements OnInit, AfterViewInit {
  categories: any;
  selectedCategories: any[];
  selectedMenu: any;

  constructor(public auth: AuthService, public owner: OwnerService, private api: ApiService, private loader: LoaderService) { }

  ngOnInit() {
    this.resetMenuModal();
    this.selectedCategories = [];
    this.owner.loadRestaurant();
    this.api.getCategories().subscribe(
      (res: any) => {
        this.categories = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngAfterViewInit() {
    this.loader.showLoader('Initialisation');
    setTimeout(() => {
      this.loader.hideLoader();
      this.initView();
    }, 1000);
  }

  initView() {
    M.FormSelect.init(document.querySelectorAll('select'));
    M.Modal.init(document.querySelectorAll('.modal'));
  }

  removeCategory(category: any) {
    this.owner.removeCategory(category.id).subscribe(
      (res: any) => {
        this.owner.reloadRestaurant();
        M.toast({ html: res.data.message });
      },
      err => {
        if (err.error.data.message !== undefined) {
          M.toast({ html: err.error.data.message });
        } else {
          console.log(err);
        }
      }
    );
  }

  openCategoriesModal() {
    let modal = M.Modal.init(document.getElementById('categoriesModal'));
    modal.open();
  }

  checkCategorie(categorie: any) {
    if (this.selectedCategories.includes(categorie)) {
      this.selectedCategories.forEach((item, index) => {
        if (item.id === categorie.id) {
          this.selectedCategories.splice(index, 1);
        }
      });
    } else {
      this.selectedCategories.push(categorie);
    }
  }

  onCategoriesAdd() {
    this.loader.showLoader();
    this.owner.addCategories(this.selectedCategories).subscribe(
      (res: any) => {
        M.toast({ html: res.data.message });
        this.owner.reloadRestaurant();
      },
      err => {
        this.loader.hideLoader();
        this.selectedCategories = new Array<any>();
        if (err.error.data.message !== undefined) {
          M.toast({ html: err.error.data.message });
        } else {
          console.log(err);
        }
      },

      () => {
        this.loader.hideLoader();
        this.selectedCategories = new Array<any>();
      }
    );
  }

  contains(category: any) {
    return this.selectedCategories.includes(category);
  }


  alreadyAdded(category: any) {
    if (this.owner.restaurant.categories !== undefined && this.owner.restaurant !== undefined) {
      return this.owner.hasCategory(category);
    } else {
      return false;
    }
  }


  openMenuModal(menu: any = null) {
    if (menu !== null) {
      this.selectedMenu = menu;
    }
    let modal = M.Modal.init(document.getElementById('menuModal'));
    modal.open();
  }


  resetMenuModal() {
    this.selectedMenu = { id: null, name: '', description: '', price: '', category: {} };
  }

  menuSubmit() {
    this.loader.showLoader();
    this.owner.createOrUpdateMenu(this.selectedMenu).subscribe(
      (res: any) => {
        M.toast({ html: res.data.message });
        this.owner.reloadRestaurant();
        this.resetMenuModal();
      },
      err => {
        this.loader.hideLoader();
        if (err.error.data.message !== undefined) {
          M.toast({ html: err.error.data.message });
        } else {
          console.log(err);
        }
      },

      () => {
        this.loader.hideLoader();
      }
    );
  }

}
