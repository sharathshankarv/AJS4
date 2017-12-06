import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{

  @Input('is-Favorite') isSelected: boolean;
  @Output() change = new EventEmitter();

  toggleFavorite(){
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected});
  }

}

export interface FavoriteComponentEventArgs{
  newValue : boolean;
}