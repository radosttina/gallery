import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageListComponent implements OnInit {
  images$ = this.service.images$;
  constructor(private service: ImagesService) {}

  ngOnInit(): void {}
}
