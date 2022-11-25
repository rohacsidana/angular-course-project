import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  @Output() lastClick = new EventEmitter<string>();

  onSelect(btn) {
    console.log(btn);

   this.lastClick.emit(btn);
  }
}
