import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ServerComponent implements OnInit{
  @Input('srvElement') element: { type:string, name:string, content: string }

  ngOnInit(){
  }
}
