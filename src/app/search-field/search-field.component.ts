import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less'],
})
export class SearchFieldComponent implements OnInit {
  filterForm = new FormGroup({
    filterCriteria: new FormControl('', { nonNullable: true }),
  });

  constructor(private service: ImagesService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.service.updateFilter(this.filterForm.controls.filterCriteria.value);
  }
}
