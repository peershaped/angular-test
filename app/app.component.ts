import {Component, OnInit} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {NgFor} from 'angular2/common';
import {AnimalService} from './services/animal.service';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
                <p>Test</p>
                {{ animals }}
                <li *ngFor="#animal of animals">
                  {{ animal.name }}
                </li>
                `,
    //viewProviders: [AnimalService],
    directives: [NgFor]
})

export class AppComponent {

    public animals:Array<any>;
    public _animalservice;

    constructor(_animalservice: AnimalService) {
        this._animalservice = _animalservice;
    //    //http.get('http://localhost:3001/api/random-quote')
    //    http.get('people.json')
    //        // Call map on the response observable to get the parsed people object
    //        .map(res => res.json())
    //        //// Subscribe to the observable to get the parsed people object and attach it to the
    //        .subscribe(
    //            data => this.bla = data,
    //            () => console.log('Random Quote Complete')
    //        );
    }

    ngOnInit() {
        this.getAnimals();
    }

    getAnimals()
    {
        this.animals = this._animalservice.getAnimals();
        console.log(this.animals);
    }

}