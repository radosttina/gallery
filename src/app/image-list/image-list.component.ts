import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageListComponent implements OnInit {
  filteredImages$ = this.service.filteredImages$;
  constructor(private service: ImagesService) {}

  ngOnInit(): void {}
}
