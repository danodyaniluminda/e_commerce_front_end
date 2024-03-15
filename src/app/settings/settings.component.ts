import { Component } from '@angular/core';
import {AdminHeaderComponent} from "../header/admin-header/admin-header.component";
import {SidenavComponent} from "../layout/sidenav/sidenav.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    AdminHeaderComponent,
    SidenavComponent,
    RouterLink
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
