import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarOpen = true; // Sidebar is open by default

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
