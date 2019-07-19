import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { timingSafeEqual } from 'crypto';

export interface IUser {
    name: string;
    age: number;
}

export interface IStore {
    users: IUser[];
}

const initialState: IStore = {
    users: [
        { name: 'zohar', age: 20 },
        { name: 'chen', age: 5 },
    ]
};

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private readonly _store = new BehaviorSubject<IStore>(initialState);

    // Expose the observable$ part of the _store subject (read only stream)
    readonly store$ = this._store.asObservable();


    // the getter will return the last value emitted in _todos subject
    get store(): IStore {
        return this._store.getValue();
    }

    get users(): IUser[] {
        return this.store.users;
    }

    // assigning a value to this.todos will push it onto the observable 
    // and down to all of its subsribers (ex: this.todos = [])
    set store(val: IStore) {
        this._store.next(val);
    }

    addUser(user: IUser) {
        this.store = {
            ...this.store,
            users: this.store.users.concat(user)
        }
    }

}
