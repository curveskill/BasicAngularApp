import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  params:any = {};
  productForm:FormGroup;
  isSubmitted:boolean = false;
  isSubmitDisabled:boolean = false;
  constructor(private http:HttpClient, private toastr:ToastrService,private router:Router, private aRoute:ActivatedRoute) {
    this.productForm = new FormGroup({
      title: new FormControl("",[Validators.required])
    });

    this.aRoute.params.subscribe((res:any)=>{
      this.params = res;
      console.log(this.params);
      this.updateProductFormControl(this.params.id);
    })
  }

  ngOnInit(): void {
  }
get f(){
  return this.productForm.controls
}

updateProductFormControl(id:number){
  this.http.get(`https://dummyjson.com/products/${id}`).subscribe((res:any)=>{
    if(res){
      //update form control
      this.productForm.patchValue({
        title: res.title
      })
    }
  })
}

updateProduct(){
  this.isSubmitted = true;
  if(this.productForm.invalid) return
  this.isSubmitDisabled = true;
  const payload:any = this.productForm.value;
  //make api call to create product
  this.http.put(`https://dummyjson.com/products/${this.params.id}`,payload).subscribe((res:any)=>{
    console.log(res);
    if(res){
      this.toastr.success("Product updated successfully","Success");
      this.isSubmitDisabled = false;
      this.router.navigate(['/product-with-api']);
    }else{
      this.isSubmitDisabled = false;
      this.toastr.error("Error Occure","Error");
    }
  })
}
}
