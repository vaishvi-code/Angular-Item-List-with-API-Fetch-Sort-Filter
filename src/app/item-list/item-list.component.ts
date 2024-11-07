import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  searchText: string = '';
  sortOption: string = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.filteredItems = data;
    });
  }

  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  sortItems() {
    if (this.sortOption === 'asc') {
      this.filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortOption === 'desc') {
      this.filteredItems.sort((a, b) => b.title.localeCompare(a.title));
    }
  }
}


