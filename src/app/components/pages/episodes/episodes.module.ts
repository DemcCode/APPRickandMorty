import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { RouterModule } from '@angular/router';

const myComponents = [EpisodeDetailComponent, EpisodeListComponent];

@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule],
  exports: [...myComponents],
})
export class EpisodesModule {}
