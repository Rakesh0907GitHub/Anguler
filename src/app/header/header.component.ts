import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showNotifications: boolean = false;
  showSettings: boolean = false;
  notifications = [
    { image: 'assets/male1.jpg', text: 'You have a new message',time: '13 min ago' },
    { image: 'assets/spotify.png', text: 'Your profile was updated' ,time: '1 day ago'},
    { image: 'assets/db4.png', text: 'New sign-in ' ,time: '13 hrs ago'}
  ];

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showSettings = false; // Close settings pop-up if open
  }
  toggleSettings() {
    this.showSettings = !this.showSettings;
    this.showNotifications = false; // Close notifications pop-up if open
  }

  closeSettings() {
    this.showSettings = false;
  }
}
