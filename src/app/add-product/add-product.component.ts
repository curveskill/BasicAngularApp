import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm:FormGroup;
  isSubmitted:boolean = false;
  isSubmitDisabled:boolean = false;
  constructor(private http:HttpClient, private toastr:ToastrService,private router:Router) {
    this.productForm = new FormGroup({
      title: new FormControl("",[Validators.required])
    })
  }

  ngOnInit(): void {
  }
get f(){
  return this.productForm.controls
}

addNewProduct(){
  this.isSubmitted = true;
  if(this.productForm.invalid) return
  this.isSubmitDisabled = true;

  const payload:any = this.productForm.value;
  //make api call to create product
  setTimeout(()=>{
    this.http.post("https://dummyjson.com/products/add",payload).subscribe((res:any)=>{
    console.log(res);
    if(res){
      this.toastr.success("Product added successfully","Success");
      this.isSubmitDisabled = false;
      this.router.navigate(['/product-with-api']);
    }else{
      this.isSubmitDisabled = false;
      this.toastr.error("Error Occure","Error");
    }
  })
  },5000)
}
}
