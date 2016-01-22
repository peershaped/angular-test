//Using Angular version 2.0.0-alpha.37
System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Appp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Appp = (function () {
                function Appp(http) {
                    var _this = this;
                    this.active = false;
                    http.get('people.json').toRx().subscribe(function (res) {
                        _this.people = res.json();
                    });
                }
                Appp.prototype.toggleActiveState = function () {
                    this.active = !this.active;
                };
                Appp = __decorate([
                    core_1.Component({
                        selector: 'appp',
                        bindings: [http_1.HTTP_BINDINGS],
                        template: "\n    <div>\n      <h1>People</h1>\n      <ul>\n        <li *NgFor=\"#person of people\">\n          {{person.name}}\n        </li>\n      </ul>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Appp);
                return Appp;
            })();
            exports_1("Appp", Appp);
        }
    }
});
//bootstrap(App)
//    .catch(err => console.error(err)); 
//# sourceMappingURL=appp.component.js.map