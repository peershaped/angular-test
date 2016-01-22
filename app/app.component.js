System.register(['angular2/core', 'rxjs/add/operator/map', 'angular2/common', './services/animal.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, animal_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (animal_service_1_1) {
                animal_service_1 = animal_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_animalservice) {
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
                AppComponent.prototype.ngOnInit = function () {
                    this.getAnimals();
                };
                AppComponent.prototype.getAnimals = function () {
                    this.animals = this._animalservice.getAnimals();
                    console.log(this.animals);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>My First Angular 2 App</h1>\n                <p>Test</p>\n                {{ animals }}\n                <li *ngFor=\"#animal of animals\">\n                  {{ animal.name }}\n                </li>\n                ",
                        //viewProviders: [AnimalService],
                        directives: [common_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [animal_service_1.AnimalService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map