import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TrackHttpError } from '../models/trackHttpError';
import { Episode } from '../interface/episode.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  searchEpisodes(
    query = '',
    page = 200
  ): Observable<Episode[] | TrackHttpError> {
    const filter = `${environment.baseUrlAPI}/episode/?name=${query}&page=${page}`;
    return this.http
      .get<Episode[]>(filter)
      .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetails(id: number) {
    return this.http
      .get<Episode>(`${environment.baseUrlAPI}/episode/${id}`)
      .pipe(catchError((err) => this.handleHttpError(err)));
  }

  private handleHttpError(
    error: HttpErrorResponse
  ): Observable<TrackHttpError> {
    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }
}
