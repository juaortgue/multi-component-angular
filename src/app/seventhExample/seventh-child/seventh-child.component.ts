import { Component, OnInit, Input } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seventh-child',
  templateUrl: './seventh-child.component.html',
  styleUrls: ['./seventh-child.component.scss']
})
export class SeventhChildComponent implements OnInit {
  
  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
  }

  ngOnInit() {
    this.subscription = this.missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });
  }
  
 
  
 
  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
 
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
