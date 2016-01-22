System.register(['angular2/platform/browser', 'angular2/http', 'rxjs/add/operator/map', './services/animal.service', './app.component'], function(exports_1) {
    var browser_1, http_1, animal_service_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (animal_service_1_1) {
                animal_service_1 = animal_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, animal_service_1.AnimalService]);
        }
    }
});
//# sourceMappingURL=boot.js.map