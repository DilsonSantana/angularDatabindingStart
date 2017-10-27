import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('inputName') name: ElementRef;
  @ViewChild('inputBPName') content: ElementRef;
  // newServerName = 'server';
  // newServerContent = 'This is Just!';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(inputServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputServerName.value,
      serverContent: this.content.nativeElement.value
    });
  }

  onAddBlueprint(inputServerName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: inputServerName.value,
      serverContent: this.content.nativeElement.value
    });
  }

}
