import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `<input
    #inputSearch
    autofocus
    type="search"
    class="form-control-lg"
    placeholder="Search...."
    (keyup)="onSearchCharacter(inputSearch.value)"
  />`,
  styles: ['input {width:100%}'],
})
export class FormSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearchCharacter(value: string) {
    if (value && value.length > 2) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }

  onSearchEpisode(value: string) {
    if (value && value.length > 2) {
      this.router.navigate(['/episode-list'], {
        queryParams: { q: value },
      });
    }
  }
}
