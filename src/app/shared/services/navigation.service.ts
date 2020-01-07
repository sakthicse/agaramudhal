import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}



@Injectable()
export class NavigationService {

  plainMenu: IMenuItem[] = [
    {
      name: 'Home',
      type: 'link',
      icon: 'home',
      state: 'resources/home'
    },
    {
      name: 'About Us',
      type: 'dropDown',
      icon: 'group',
      state: 'resources/about-us',
      sub: [
        { name: 'Approvals & Registrations', state: 'approval-registration', icon: 'assets/images/approved.png' },
        { name: 'Founding', state: 'founding', icon: 'assets/images/founding.png' },
        { name: 'Trustee Details', state: 'trustee-details' },
        { name: 'Tax Benefits', state: 'tax-benefits', icon: 'assets/images/tax1.png' },
        { name: 'Vision & Mission', state: 'vision-mission', icon: 'assets/images/vision-mission-1.png' }
      ]
    },
    {
      name: 'Projects',
      type: 'dropDown',
      icon: 'group_work',
      state: 'resources/projects',
      sub: [
        { name: 'Siruthamur', state: 'project-one' },
        { name: 'Velampalayam', state: 'project-two' },
        { name: 'Singililan Kombai', state: 'project-three'}
      ]
    },
    {
      name: 'Donate',
      type: 'link',
      icon: 'money',
      state: 'resources/donate'
    },
    {
      name: 'FAQ',
      type: 'link',
      icon: 'accessibility',
      state: 'resources/faq'
    },
    {
      name: 'Contact-Us',
      type: 'link',
      icon: 'contact_support',
      state: 'resources/contact-us'
    }
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.plainMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  constructor() {}

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.

  publishNavigationChange(menuType: string) {
    // switch (menuType) {
    //   case "separator-menu":
    //     this.menuItems.next(this.separatorMenu);
    //     break;
    //   case "icon-menu":
    //     this.menuItems.next(this.iconMenu);
    //     break;
    //   default:
    //     this.menuItems.next(this.plainMenu);
    // }
  }
}
