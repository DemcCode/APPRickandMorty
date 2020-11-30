import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeComponent } from '../episodes/episode.component';
import { RouterModule } from '@angular/router';

const myComponents = [
  EpisodeDetailComponent,
  EpisodeListComponent,
  EpisodeComponent,
];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents],
})
export class EpisodesModule {}
