import { Component } from '@angular/core';
import { FavoriteComponentEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  post = {
    title: 'Angular App',
    isSelected: true
  }

  onFavChange(isFavorite: FavoriteComponentEventArgs){
    console.log(isFavorite);
  }

  
  
}
