import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OwnerService } from '../services/owner.service';
import { ApiService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-manage-restaurant',
  templateUrl: './manage-restaurant.component.html',
  styleUrls: ['./manage-restaurant.component.scss']
})
export class ManageRestaurantComponent implements OnInit {
  categories: any;
  selectedCategories: any[];

  constructor(public auth: AuthService, public owner: OwnerService, private api: ApiService, private loader: LoaderService) { }

  ngOnInit() {
    this.selectedCategories = [];
    this.owner.loadRestaurant();
    M.Modal.init(document.getElementById('categoriesModal'));
    this.api.getCategories().subscribe(
      (res: any) => {
        this.categories = res.data;
      },
      err => {
        console.log(err);
      }
    );
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
    return this.selectedCategories.includes(category)
  }

}
