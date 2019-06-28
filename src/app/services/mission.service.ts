import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MissionService {
  // Creating protecting observables type subject to subscribe them between different components
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  // Creating public observables within the flow of the previous
  public missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  public missionConfirmed$ = this.missionConfirmedSource.asObservable();

  constructor() { }
  // Service message commands
  //method next emit a new value to the subscribers
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }
  //method next emit a new value to the subscribers
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}
