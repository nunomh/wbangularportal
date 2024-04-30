import { Component } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  testEnv: string | undefined;
  
  constructor(private _apiConnect: ApiConnectionService) {
    
  }

  ngOnInit() { this.startPage() }

  async startPage() {
    this.testEnv = environment.test;
    let resp = await this._apiConnect.getItems('https://wbapi.onrender.com/api/test');
    console.log(resp)


  }

}
