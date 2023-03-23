import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() text!: string ;
  @Input() color!: string;

  constructor() {}
  ngOnInit(): void {
    
  }
}
