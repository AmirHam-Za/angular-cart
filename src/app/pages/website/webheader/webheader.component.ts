import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-webheader',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './webheader.component.html',
  styleUrl: './webheader.component.css'
})
export class WebheaderComponent {

}
