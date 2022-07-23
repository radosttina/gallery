import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less'],
})
export class ImageComponent implements OnInit {
  @Input() title: string = '';
  @Input() url: string = '';
  @Input() tags: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
