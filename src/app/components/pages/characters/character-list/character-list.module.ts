import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';
import { CharacterComponent } from '../character.component';

@NgModule({
  declarations: [CharacterListComponent, CharacterComponent],
  imports: [CommonModule, CharacterListRoutingModule, InfiniteScrollModule],
})
export class CharacterListModule {}
