import { Component } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor(private _apiConnect: ApiConnectionService) {
    
  }

  ngOnInit() { this.startPage() }

  async startPage() {
    let resp = await this._apiConnect.getItems( environment.API_SERVER_URL + '/api/test');
    console.log(resp)
 

  }

}
