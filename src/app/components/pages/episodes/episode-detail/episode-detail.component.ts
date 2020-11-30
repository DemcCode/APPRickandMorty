import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/shared/interface/episode.interface';
import { Observable } from 'rxjs';
import { EpisodeService } from 'src/app/shared/services/episode.service';
import { TrackHttpError } from 'src/app/shared/models/trackHttpError';
import { take } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css'],
})
export class EpisodeDetailComponent implements OnInit {
  episode$: Observable<Episode | TrackHttpError>;

  constructor(
    private route: ActivatedRoute,
    private episodeSvc: EpisodeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.episode$ = this.episodeSvc.getDetails(id);
    });
  }

  onGoBack(): void {
    this.location.back();
  }
}
