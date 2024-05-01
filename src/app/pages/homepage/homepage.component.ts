import { Component } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { environment } from '../../../environments/environment.development';
import { Test } from '../../interfaces/test';

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
    await this._apiConnect.getApiTest().subscribe(
      (response: Test) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('endpoint done')
    );

    await this._apiConnect.getApiTest().subscribe(
      {
        next: (response) => console.log(response),
        error: (error) => console.error(error),
        complete: () => console.info('complete')
      }
    );
  }

}
