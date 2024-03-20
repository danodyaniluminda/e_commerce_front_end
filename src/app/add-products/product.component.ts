import {Component, OnInit} from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {ProductData, SAMPLE_ADDED_PRODUCT_DATA} from "./product-model.component";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-products',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent implements OnInit{
popup_header: any;
addEditProductForm: any;
  add_product: boolean = false;
  edit_product: any;
  addEditProduct: any;
  all_product_data: ProductData[] = SAMPLE_ADDED_PRODUCT_DATA;
  uploadedFiles: File[] = [];


  constructor(private formBuilder: FormBuilder, private router: Router, private product_service: ProductService) { }

  ngOnInit() {
    this.addEditProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      uploadPhoto: ['', [Validators.required, this.validateMaxUploads.bind(this)]],
      productDesc: ['', Validators.required],
      buyPrice: ['', Validators.required],
      sellPrice: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      brand: ['', Validators.required],
      size: ['', Validators.required],
      color: ['', Validators.required],
      returnPeriod: ['', Validators.required],
      itemLocation: ['', Validators.required],
      discount: ['', Validators.required],
      specification: ['', Validators.required],
      features: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required],
      length: ['', Validators.required],
      serialNumber: ['', Validators.required],
      hsCode: ['', Validators.required],
      status: ['', Validators.required]
    })
    this.getAllProduct()
  }

  get rf() { return this.addEditProductForm.controls; }

  //Fetch products from back end
  getAllProduct() {
    // this.product_service.allProduct().subscribe(data => {
    //   this.all_product_data = data;
    // }, error => {
    //   console.log("My error", error);
    // })
  }


  // Popup windows enable for add new producs
  addProductPopup() {
    this.add_product = true;
    this.edit_product = false;
    this.popup_header = "Add New Product";
    this.addEditProductForm.reset();
    console.log("Working Button")

    const modelDiv = document.getElementById('addEditProductModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    }

  }

  //Disable popup window
  closeModal() {
    const modalDiv = document.getElementById('addEditProductModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }

    // Reset the form and flags
    this.addEditProductForm.reset();
    this.addEditProduct = false;
    this.edit_product = false;
  }
  //Perform Add new products
  addNewProduct() {
    this.addEditProduct = true;
    if (this.addEditProductForm.valid) {
      // Perform add-products to back end
      const newProductData = this.addEditProductForm.value;
      console.log('New Product Data:', newProductData);

      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'New add-products added successfully!',
      });
      const modelDiv = document.getElementById('addEditProductModal');
      if(modelDiv!= null) {
        modelDiv.style.display = 'none';
      }

      // After adding the add-products, you might want to reset the form
      this.addEditProductForm.reset();
    } else {
      // If the form is not valid, display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill in all required fields.',
      });
    }


  }

  editProductPopup(id: number) {

  }

  editProduct(product_data: any) {
    this.edit_product = true;
    const modelDiv = document.getElementById('addEditProductModal');
    if(modelDiv!= null) {
      modelDiv.style.display = 'block';
    }
    this.popup_header = "Edit Product";
    this.addEditProductForm.patchValue({
      name: product_data.name,
      uploadPhoto: product_data.uploadPhoto,
      productDesc: product_data.productDesc,
      buyPrice: product_data.buyPrice,
      sellPrice: product_data.sellPrice,
      category: product_data.category,
      subCategory: product_data.subCategory,
      status: product_data.status,
      brand: product_data.brand,
      color: product_data.color,
      size: product_data.size ,
      returnPeriod: product_data.returnPeriod,
      itemLocation: product_data.itemLocation,
      discount: product_data.discount,
      specification: product_data.specification,
      features: product_data.features,
      width: product_data.width,
      height: product_data.height,
      length: product_data.length,
      serialNumber: product_data.serialNumber,
      hsCode: product_data.hsCode
    });
  }

  updateProduct(): void {
    this.addEditProduct = true;
    if (this.addEditProductForm.valid) {
      // Perform logic to update the add-products on the backend
      const updatedProductData = this.addEditProductForm.value;
      console.log('Updated Product Data:', updatedProductData);

      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Product updated successfully!',
      });

      // Close the modal
      const modalDiv = document.getElementById('addEditProductModal');
      if (modalDiv != null) {
        modalDiv.style.display = 'none';
      }

      // Reset the form and flags
      this.addEditProductForm.reset();
      this.addEditProduct = false;
      this.edit_product = false;
    } else {
      // If the form is not valid, display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill in all required fields.',
      });
    }}

  deleteProduct(productId: number): void {

    console.log('Deleting add-products with ID:', productId);
    //
    // // Display confirmation message using SweetAlert
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You will not be able to recover this add-products!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'No, cancel!',
    //   reverseButtons: true
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     // Perform the actual deletion
    //     // Assuming you have a service method to delete the add-products
    //     this.product_service.deleteProduct(productId).subscribe(
    //       () => {
    //         // On successful deletion
    //         Swal.fire(
    //           'Deleted!',
    //           'Product has been deleted.',
    //           'success'
    //         );
    //         // Optionally, you may refresh the add-products list after deletion
    //         this.getAllProduct();
    //       },
    //       (error) => {
    //         // On error during deletion
    //         Swal.fire(
    //           'Error!',
    //           'Failed to delete add-products.',
    //           'error'
    //         );
    //       }
    //     );
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     Swal.fire(
    //       'Cancelled',
    //       'Your add-products is safe :)',
    //       'info'
    //     );
    //   }
    // });
  }
  goToDashboard(): void {
    this.router.navigate(['/admin-dashboard']); // Change '/dashboard' to the actual route of your dashboard
  }
// Upload image lesthan 5

  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 5) {
      // Clear previously selected files
      event.target.value = null;
      // Display error message or handle accordingly
      return;
    }
    // Clear previously selected files
    this.uploadedFiles = [];
    // Add selected files to the uploadedFiles array
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push(files[i]);
    }
  }

  validateMaxUploads(control: any) {
    const files: File[] = control.value;
    if (files && files.length > 5) {
      return { maxUploadsExceeded: true };
    }
    return null;
  }

  get uploadPhoto() {
    return this.addEditProductForm.get('uploadPhoto');
  }

  onSubmit() {
    if (this.addEditProductForm.valid) {
      // Handle form submission
      console.log('Form submitted successfully');
    }
  }



  }




