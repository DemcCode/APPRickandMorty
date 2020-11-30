import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character-list',
    pathMatch: 'full',
  },
  {
    path: 'character-list',
    loadChildren: () =>
      import(
        './components/pages/characters/character-list/character-list.module'
      ).then((m) => m.CharacterListModule),
  },
  {
    path: 'character-detail/:id',
    loadChildren: () =>
      import(
        './components/pages/characters/character-detail/character-detail.module'
      ).then((m) => m.CharacterDetailModule),
  },
  {
    path: 'episode-list',
    loadChildren: () =>
      import(
        './components/pages/episodes/episode-list/episode-list.module'
      ).then((m) => m.EpisodeListModule),
  },
  {
    path: 'episode-detail/:id',
    loadChildren: () =>
      import(
        './components/pages/episodes/episode-detail/episode-detail.module'
      ).then((m) => m.EpisodeDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
