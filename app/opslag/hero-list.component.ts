import {Component,OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component'
import {HeroService} from './hero.service';

@Component({
    selector:   'my-app',
    template:   `<h1>{{title}}</h1>
                <h2>My Heroes</h2>
                <ul class="heroes">
                    <li *ngFor="#hero of heroes"
                        (click)="onSelect(hero)"
                        [class.selected]="hero === selectedHero">
                      <span class="badge">{{hero.id}}</span> {{hero.name}}
                    </li>
                </ul>
                <my-hero-detail [hero]="selectedHero"></my-hero-detail>`,
    styles:     [`
                  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
                  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
                  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
                  .heroes .badge {
                    font-size: small;
                    color: white;
                    padding: 0.1em 0.7em;
                    background-color: #FF00FF;
                    line-height: 1em;
                    position: relative;
                    left: -1px;
                    top: -1px;
                  }
                  .selected { background-color: #EEE; color: #FF00FF; }
                `],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})



export class AppComponent {
    public title = 'Grande tour of Heroes';
    public heroes;
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}