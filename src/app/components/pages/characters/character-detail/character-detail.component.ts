import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Character } from 'src/app/shared/interface/character.interface';
import { TrackHttpError } from 'src/app/shared/models/trackHttpError';
import { CharacterService } from 'src/app/shared/services/character.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character$: Observable<Character | TrackHttpError>;

  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack(): void {
    this.location.back();
  }
}
