import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})

export class FontSizeComponent implements OnInit {

  constructor() { }

  fontSize = 14;

  onChange(value: number): void {
    this.fontSize = value;
  }

  ngOnInit(): void {
  }

}
