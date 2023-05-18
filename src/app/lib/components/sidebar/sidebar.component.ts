import { Component } from '@angular/core';

@Component({
  selector: 'jrd-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  theme: 'light' | 'dark' = 'dark';

  ngOnInit() {
    document.body.setAttribute('data-bs-theme', this.theme);
  }

  onCheckboxChange(e: any) {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', this.theme);
  }
}
