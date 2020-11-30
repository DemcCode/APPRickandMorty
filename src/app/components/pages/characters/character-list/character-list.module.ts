import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharacterComponent } from '../character.component';

@NgModule({
  declarations: [CharacterListComponent, CharacterComponent],
  imports: [CommonModule, CharacterListRoutingModule],
})
export class CharacterListModule {}
