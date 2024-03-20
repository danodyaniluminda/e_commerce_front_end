import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DashboardService} from "../service/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  dayOptions: number[] = Array.from({length: 365}, (_, i) => i);
  hourOptions: number[] = Array.from({length: 25}, (_, i) => i);
  minuteOptions: number[] = Array.from({length: 60}, (_, i) => i);
  secondOptions: number[] = Array.from({length: 60}, (_, i) => i);

  constructor(public dashboardService: DashboardService) {
  }

  toggleImageVisibility() {
    this.dashboardService.toggleVisibility();
  }

  toggleBanner_2(){
    this.dashboardService.toggleVisibilityBanner_2();
  }

  toggleCategory(){
    this.dashboardService.isCategory();
  }

  toggleFlashSale(){
    this.dashboardService.isFlashSale();
  }

  toggleNewProducts(){
    this.dashboardService.isNewProducts();
  }

  toggleHotDeal(){
    this.dashboardService.isHotDeal();
  }

  submitTime() {
    const timeData = {
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds
    };
    // console.log(timeData)
    this.dashboardService.flashSaleUpdate(timeData);
  }

  ngOnInit(): void {
  }


}
