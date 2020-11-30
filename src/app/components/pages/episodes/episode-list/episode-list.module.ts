import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeListRoutingModule } from './episode-list-routing.module';
import { EpisodeListComponent } from './episode-list.component';

@NgModule({
  declarations: [EpisodeListComponent],
  imports: [CommonModule, EpisodeListRoutingModule],
})
export class EpisodeListModule {}
