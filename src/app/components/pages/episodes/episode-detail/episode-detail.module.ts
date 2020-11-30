import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeDetailRoutingModule } from './episode-detail-routing.module';
import { EpisodeDetailComponent } from './episode-detail.component';

@NgModule({
  declarations: [EpisodeDetailComponent],
  imports: [CommonModule, EpisodeDetailRoutingModule],
})
export class EpisodeDetailModule {}
