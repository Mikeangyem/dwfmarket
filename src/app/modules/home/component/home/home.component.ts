import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product/_model/product';
import { ProductImage } from '../../../product/_model/productImage';
import { Category } from '../../../product/_model/category';
import { ProductService } from '../../../product/_service/product.service';
import { ProductImageService } from '../../../product/_service/product-image.service';
import { CategoryService } from '../../../product/_service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  images: ProductImage[] = [];

  category: Category = new Category();

  category_button = "";
  
  constructor(
    private product_service: ProductService,
    private product_image_service: ProductImageService,
    private category_service: CategoryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getRandProducts();
  }

  getRandProducts() {
    this.product_service.getProductsRandom().subscribe(
      res => {
        this.products = res;

        for (let i = 0; i < this.products.length; i++) {
          this.getProductImage(this.products[i].id_product);
        }

        this.category_button = "Selección";
        this.getCategories();
      },
      err => console.log(err)
      )
  }

  getProductImage(id_product: number){
    this.product_image_service.getProductImages(id_product).subscribe(
      res => {
        this.images.push(res[0]);
        //console.log(this.images);
      },
      err => console.log(err)
    )
  }

  getImage(id_product: number) {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].id_product == id_product) {
        return this.images[i].image;
      }
    }

    return "";
  }

  productDetail(gtin: string){
    this.router.navigate(['product-detail/'+gtin]);
  }

  getCategories() {
    this.category_service.getCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => console.log(err)
      )
  }

  getCategory(id_category: number) {
    this.category_service.getCategory(id_category).subscribe(
      res => {
        this.category = res;
        this.category_button = this.category.category;
      },
      err => console.log(err)
    )
  }

  getProductsCategory(id_category: number) {
    this.category = new Category();
    this.product_service.getProductsCategory(id_category).subscribe(
      res => {
        this.products = res;

        for (let i = 0; i < this.products.length; i++) {
          this.getProductImage(this.products[i].id_product);
        }

        this.getCategory(id_category);
      },
      err => console.log(err)
      )
  }

}
