//Using Angular version 2.0.0-alpha.37

import {Component, View} from 'angular2/core';
import {HTTP_BINDINGS, Http} from 'angular2/http';

@Component({
    selector: 'appp',
    bindings: [HTTP_BINDINGS],
    template: `
    <div>
      <h1>People</h1>
      <ul>
        <li *NgFor="#person of people">
          {{person.name}}
        </li>
      </ul>
    </div>
  `,
})

export class Appp {
    people: Object[];
    constructor(http:Http) {
        http.get('people.json').toRx().subscribe(res => {
            this.people = res.json();
        });
    }
    active:boolean = false;
    toggleActiveState() {
        this.active = !this.active;
    }
}

//bootstrap(App)
//    .catch(err => console.error(err));