import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class AnimalService {

    public _http;
    public data;
    public items;

    constructor(http: Http)
    {
        this._http = http;
    }

    getAnimal() {
        return this._http.get('people.json')
            .map(res => res.json())
            .subscribe (
                data => this.data = data
            );
    }

    getAnimals() {
        return this._http.get('people.json')
            .map(res => res.json())
            .subscribe(
                data => this.items = data,
                () => {
                    return this.items
                }
                //() => console.log(this.items)
            );
    }
}