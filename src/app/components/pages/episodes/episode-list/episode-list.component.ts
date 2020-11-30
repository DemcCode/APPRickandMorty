import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Episode } from 'src/app/shared/interface/episode.interface';
import { filter, take } from 'rxjs/operators';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { TrackHttpError } from '../../../../shared/models/trackHttpError';
import { EpisodeService } from 'src/app/shared/services/episode.service';

type RequesInfo = {
  next: string;
};

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[] = [];
  info: RequesInfo = {
    next: null,
  };

  showGoUpButton = false;
  private pageNum = 1;
  private query: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private episodeSvc: EpisodeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.getEpisodesByQuery();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void {
    if (this.info.next) {
      this.pageNum++;
      this.getDataFromService();
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.episodes = [];
        this.pageNum = 1;
        this.getEpisodesByQuery();
      });
  }

  private getEpisodesByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
      this.query = params['q'];
      this.getDataFromService();
    });
  }

  private getDataFromService(): void {
    this.episodeSvc
      .searchEpisodes(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe(
        (res: any) => {
          if (res?.results?.length) {
            console.log(res.results);

            const { info, results } = res;
            this.episodes = [...this.episodes, ...results];
            this.info = info;
          } else {
            this.episodes = [];
          }
        },
        (error: TrackHttpError) => console.log(error.friendlyMessage)
      );
  }
}
