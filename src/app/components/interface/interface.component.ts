import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss'
})
export class InterfaceComponent {
  ngOnInit(){
    fetch('../../../assets/allegato/db.json')
    .then(response=> response.json())
    .then(data=> console.log(data))
  }

}
export interface ipost{
  id:number;
  title:string;
  body:string;
  userId:number;
  tags:string[];
  active:boolean;
}



