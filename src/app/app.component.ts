import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'forex';
  public signoutFlag: boolean = true;
  constructor(private route: Router) {
    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.signoutFlag = false;
        } else {
          this.signoutFlag = true;
        }
      }

    });
  }
}
