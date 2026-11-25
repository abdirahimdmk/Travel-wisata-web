import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxToggleActionDirective } from 'igniteui-angular';

@Component({
  selector: 'app-in-app',
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent, IgxAvatarComponent, RouterOutlet, RouterLink],
  templateUrl: './in-app.component.html',
  styleUrls: ['./in-app.component.scss']
})
export class InAppComponent {
  constructor(
    public router: Router,
  ) {}


  public stringToNumber(value: string): number {
    return parseFloat(value);
  }

  public isActive(path: string): boolean {
    const exactMatch: IsActiveMatchOptions = {
        paths: 'exact',
        matrixParams: 'ignored',
        queryParams: 'ignored',
        fragment: 'ignored'
    }
    return this.router.isActive(path, exactMatch);
  }
}
