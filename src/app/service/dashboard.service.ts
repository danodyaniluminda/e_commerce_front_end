import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  isImageVisible: boolean = true;
  isBanner_2: boolean = true;
  categoryVisible: boolean = true;
  flashSaleVisible: boolean = true;
  newProductVisible: boolean = true;
  hotDealVisible: boolean = true;
  timeData: any;

  private STORAGE_KEY_IMAGE = 'image_visibility';
  private STORAGE_KEY_BANNER_2 = 'banner_2_visibility';
  private STORAGE_KEY_CATEGORY ='category';
  private STORAGE_KEY_FLASH ='flash_sale';
  private STORAGE_KEY_NEW_PRODUCTS ='new_product';
  private STORAGE_KEY_HOT_DEAL ='hot_deal';
  public STORAGE_KEY_FLASH_COUNT ='flash_count';



  constructor() {
    // Retrieve visibility state from local storage or default to true
    const storedValueImage = localStorage.getItem(this.STORAGE_KEY_IMAGE);
    this.isImageVisible = storedValueImage !== null ? JSON.parse(storedValueImage) : true;

    const storedValueBanner_2 = localStorage.getItem(this.STORAGE_KEY_BANNER_2);
    this.isBanner_2 = storedValueBanner_2 !== null ? JSON.parse(storedValueBanner_2) : true;

    const storedValueCategory = localStorage.getItem(this.STORAGE_KEY_CATEGORY);
    this.categoryVisible = storedValueCategory !== null ? JSON.parse(storedValueCategory) : true;

    const storedValueFlash = localStorage.getItem(this.STORAGE_KEY_FLASH);
    this.flashSaleVisible = storedValueFlash !== null ? JSON.parse(storedValueFlash) : true;

    const storedValueProduct = localStorage.getItem(this.STORAGE_KEY_NEW_PRODUCTS);
    this.newProductVisible = storedValueProduct !== null ? JSON.parse(storedValueProduct) : true;

    const storedValueHotDeal = localStorage.getItem(this.STORAGE_KEY_HOT_DEAL);
    this.hotDealVisible = storedValueHotDeal !== null ? JSON.parse(storedValueHotDeal) : true;



    // Retrieve flash sale data from local storage
    const storedFlashSaleData = localStorage.getItem(this.STORAGE_KEY_FLASH);
    this.timeData = storedFlashSaleData !== null ? JSON.parse(storedFlashSaleData) : null;
  }

  toggleVisibility() {
    this.isImageVisible = !this.isImageVisible;
    // Store visibility state in local storage
    localStorage.setItem(this.STORAGE_KEY_IMAGE, JSON.stringify(this.isImageVisible));
  }

  toggleVisibilityBanner_2() {
    this.isBanner_2 = !this.isBanner_2;
    // Store visibility state in local storage
    localStorage.setItem(this.STORAGE_KEY_BANNER_2, JSON.stringify(this.isBanner_2));
  }

  isCategory() {
    this.categoryVisible = !this.categoryVisible;
    // Store visibility state in local storage
    localStorage.setItem(this.STORAGE_KEY_CATEGORY, JSON.stringify(this.categoryVisible));
  }

  isFlashSale() {
    this.flashSaleVisible = !this.flashSaleVisible;
    // Store visibility state in local storage
    localStorage.setItem(this.STORAGE_KEY_FLASH, JSON.stringify(this.flashSaleVisible));
  }

  isNewProducts() {
    this.newProductVisible = !this.newProductVisible;
    // Store visibility state in local storage
    localStorage.setItem(this.STORAGE_KEY_NEW_PRODUCTS, JSON.stringify(this.newProductVisible));
  }
  isHotDeal() {
    this.hotDealVisible = !this.hotDealVisible;
    // Store visibility state in local storage
    localStorage.setItem(this.STORAGE_KEY_HOT_DEAL, JSON.stringify(this.hotDealVisible));
  }


  flashSaleUpdate(timeData: any) {
    console.log(timeData);
    // Store flash sale data in local storage
    localStorage.setItem(this.STORAGE_KEY_FLASH_COUNT, JSON.stringify(timeData));
    // Update timeData property
    this.timeData = timeData;
  }

  getTimeData(): Observable<any> {
    // Return observable of time data
    return of(this.timeData);
  }
}
