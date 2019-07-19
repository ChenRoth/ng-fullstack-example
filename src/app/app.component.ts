import { Component } from '@angular/core';
import { StoreService } from './store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'ng-fullstack-example';

    constructor(public storeService: StoreService) { }

    addUser() {
        this.storeService.addUser({
            name: 'oren',
            age: 15
        });
    }
}
