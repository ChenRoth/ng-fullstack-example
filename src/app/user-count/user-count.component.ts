import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
    selector: 'app-user-count',
    templateUrl: './user-count.component.html',
    styleUrls: ['./user-count.component.css']
})
export class UserCountComponent implements OnInit {

    constructor(public storeService: StoreService) { }

    ngOnInit() {
    }

}
