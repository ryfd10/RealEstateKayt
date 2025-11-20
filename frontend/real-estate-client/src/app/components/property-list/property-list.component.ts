import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];

  // Filters
  searchTerm: string = '';
  onlyAvailable: boolean = false;
  sortDescending: boolean = false;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.properties = this.propertyService.query(
      this.searchTerm,
      this.onlyAvailable,
      this.sortDescending
    );
  }

  onFilterChange(): void {
    this.loadProperties();
  }
}
