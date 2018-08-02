import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  response: any;
  message: string;

  constructor(private webService: WebService) {
    // console.log(this.webService.games);
  }

  async ngOnInit() {
    try {
      this.response = await this.webService.getGames();
      this.webService.games = this.response.games;
    } catch (error) {
      this.message = 'Unable to get games';
    }
  }
}
