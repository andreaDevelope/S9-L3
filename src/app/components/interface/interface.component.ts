import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss'
})
export class InterfaceComponent {


}
export interface ipost{
  id:number;
  title:string;
  body:string;
  userId:number;
  tags:string[];
  active:boolean;
}



