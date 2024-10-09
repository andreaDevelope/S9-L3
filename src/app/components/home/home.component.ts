import { Component } from '@angular/core';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngOnInit(){
    fetch('../../../assets/allegato/db.json')
    .then(response=> response.json())
    .then(data=> console.log(data))
  }
}
