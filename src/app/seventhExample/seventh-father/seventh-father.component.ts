import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';
import { Subject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-seventh-father',
  templateUrl: './seventh-father.component.html',
  styleUrls: ['./seventh-father.component.scss']
})
export class SeventhFatherComponent implements OnInit {

  subscriptionMissionConfirmed: Subscription;
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) { }

  ngOnInit() {
    this.subscriptionMissionConfirmed= this.missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  ngOnDestroy(): void {
    this.subscriptionMissionConfirmed.unsubscribe();
  }
  
  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
