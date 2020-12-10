import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/10/0/DV2802_Nepali-Momo_s4x3.jpg.rend.hgtvcom.756.567.suffix/1515644556794.jpeg'),
    new Recipe('A test Recipe', 'this is simply a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/10/0/DV2802_Nepali-Momo_s4x3.jpg.rend.hgtvcom.756.567.suffix/1515644556794.jpeg')
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
