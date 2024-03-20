import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import {Product, HOME_PRODUCT_DATA} from "./home-product.mode";
import {SAMPLE_USER_DATA, UserData} from "../users/user.model";
import {CartService} from "../service/cart.service";
import {Router} from "@angular/router";
import {DashboardService} from "../service/dashboard.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('categories') categories!: ElementRef; // Definite assignment assertion
  @ViewChild('productsContainer') productsContainer!: ElementRef;
  @ViewChild('container') containerRef!: ElementRef;

  categoriesList: any[] = [];
  scrollAmount = 1000;
  autoScrollInterval = 3000;
  autoScrollTimer: any;
  autoTransitionInterval: any;
  currentImageIndex = 0;
  images: string[] = ['./../../../assets/img/shop01.jpg', './../../../assets/img/shop02.jpg', './../../../assets/img/shop03.jpg'];
  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
  products: Product[] = HOME_PRODUCT_DATA;
  countdown: string = '';
  public timeDataSubscription: Subscription;

  constructor(private router: Router, public dashboardService: DashboardService) { }


  ngOnInit() {
    console.log(this.countdown);
    this.getTimeData();

    // Subscribe to changes in time data
    this.timeDataSubscription = this.dashboardService.getTimeData().subscribe((timeData: any) => {
      this.updateCountdown(timeData);
    });
    this.startAutoScroll();
    this.categoriesList = [
      { name: 'Category 1', icon: 'fa fa-home fa-3x' },
      { name: 'Category 2', icon: 'fa fa-heart fa-3x' },
      { name: 'Category 3', icon: 'fa fa-bell fa-3x' },
      { name: 'Category 1', icon: 'fa fa-male fa-3x' },
      { name: 'Category 2', icon: 'fa fa-female fa-3x' },
      { name: 'Category 3', icon: 'fa fa-music fa-3x' },
      { name: 'Category 1', icon: 'fa fa-home fa-3x' },
      { name: 'Category 2', icon: 'fa fa-heart fa-3x' },
      { name: 'Category 3', icon: 'fa fa-music fa-3x' },
      { name: 'Category 1', icon: 'fa fa-home fa-3x' },
      { name: 'Category 2', icon: 'fa fa-heart fa-3x' },
      { name: 'Category 3', icon: 'fa fa-music fa-3x' },
      { name: 'Category 1', icon: 'fa fa-home fa-3x' },
      { name: 'Category 2', icon: 'fa fa-heart fa-3x' },
      { name: 'Category 3', icon: 'fa fa-music fa-3x' },
    ];

    this.setCurrentImage();
    this.startAutoTransition();

    document.addEventListener('keydown', this.handleArrowKeys);

    const countDownDate = new Date("Mar 24, 2024 23:59:59").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        // You can handle what to do when the countdown is expired
      }
    }, 1000);
  }

  ngOnDestroy() {

  }

  setCurrentImage() {
    this.currentImageIndex = Math.max(0, Math.min(this.currentImageIndex, this.images.length - 1));
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.setCurrentImage();
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.setCurrentImage();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }

  startAutoTransition() {
    this.autoTransitionInterval = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  handleArrowKeys = (event: KeyboardEvent) => {
    const container: HTMLElement = this.productsContainer.nativeElement;

    if (event.key === 'ArrowLeft') {
      container.scrollLeft -= 100;
    }

    if (event.key === 'ArrowRight') {
      container.scrollLeft += 100;
    }
  }

  startAutoScroll() {
    this.autoScrollTimer = setInterval(() => {
      const container = this.categories.nativeElement;
      container.scrollLeft += this.scrollAmount;
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollLeft = 0; // Reset scroll position to the beginning
      }
    }, this.autoScrollInterval);
  }

  scrollLeft() {
    this.containerRef.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.containerRef.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  }
  shopNow(product: any) {
    // Logic for shopping now, assuming product has an ID property
    this.router.navigate(['/product', product.id]);
  }

  updateCountdown(timeData: any): void {
    // Calculate countdown based on time data
    const endTime = new Date(timeData.endTime).getTime();
    const now = new Date().getTime();
    let timeDifference = endTime - now;

    if (timeDifference <= 0) {
      this.countdown = 'Sale ended';
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      timeDifference %= (1000 * 60 * 60 * 24);
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }

  getTimeData() {
    const timeDataString = localStorage.getItem(this.dashboardService.STORAGE_KEY_FLASH_COUNT);
    if (timeDataString !== null) {
      const timeData = JSON.parse(timeDataString);
      if (timeData) {
        this.days = timeData.days;
        this.hours = timeData.hours;
        this.minutes = timeData.minutes;
        this.seconds = timeData.seconds;

        console.log('Days:', this.days);
        console.log('Hours:', this.hours);
        console.log('Minutes:', this.minutes);
        console.log('Seconds:', this.seconds);
      }
    }
  }





}
