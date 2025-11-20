import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      address: 'HaYarkon 99, Tel Aviv',
      pricePerNight: 620,
      isAvailable: true,
      imageUrl: 'https://example.com/images/property1.jpg',
      description: 'Spacious 2BR apartment near the beach.'
    },
    {
      id: 2,
      address: 'King George 17, Jerusalem',
      pricePerNight: 480,
      isAvailable: false,
      imageUrl: 'https://example.com/images/property2.jpg',
      description: 'Quiet 1BR apartment close to city center.'
    }
  ];

  getAll(): Property[] {
    return this.properties;
  }

  search(term: string): Property[] {
    if (!term) return this.properties;
    const lower = term.toLowerCase();
    return this.properties.filter(p =>
      p.address.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
    );
  }

  filterAvailable(onlyAvailable: boolean): Property[] {
    return onlyAvailable
      ? this.properties.filter(p => p.isAvailable)
      : this.properties;
  }

  sortByPrice(descending: boolean): Property[] {
    return [...this.properties].sort((a, b) =>
      descending ? b.pricePerNight - a.pricePerNight : a.pricePerNight - b.pricePerNight
    );
  }

  query(term: string, onlyAvailable: boolean, descending: boolean): Property[] {
    let result = this.getAll();

    if (term)
      result = result.filter(p =>
        p.address.toLowerCase().includes(term.toLowerCase()) ||
        p.description.toLowerCase().includes(term.toLowerCase())
      );

    if (onlyAvailable)
      result = result.filter(p => p.isAvailable);

    result = result.sort((a, b) =>
      descending ? b.pricePerNight - a.pricePerNight : a.pricePerNight - b.pricePerNight
    );

    return result;
  }
}
