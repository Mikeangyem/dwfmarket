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
    this.product_service.getProducts().subscribe(
      res => {
        for (let i = res.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i+1));
          const temp = res[i];
          res[i] = res[j];
          res[j] = temp
        }

        if (res.length > 3) {
          this.products = res.slice(0, 3);
        } else {
          this.products = res;
        }

        for (let i = 0; i < this.products.length; i++) {
          this.getProductImage(this.products[i].id_product);
        }
      },
      err => console.log(err)
      )
  }

  getProductImage(id_product: number){
    this.product_image_service.getProductImages(id_product).subscribe(
      res => {
        this.images.push(res[0]);
        console.log(this.images);
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

}
