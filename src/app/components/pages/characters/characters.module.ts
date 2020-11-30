import { NgModule } from '@angular/core';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterComponent } from '../characters/character.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const myComponents = [
  CharacterDetailComponent,
  CharacterListComponent,
  CharacterComponent,
];

@NgModule({
  declarations: [...myComponents],
  imports: [RouterModule, BrowserModule, FormsModule, CommonModule],
  exports: [...myComponents],
})
export class CharactersModule {}
