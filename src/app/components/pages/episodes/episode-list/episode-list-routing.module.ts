import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeListComponent } from './episode-list.component';

const routes: Routes = [{ path: '', component: EpisodeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeListRoutingModule { }
