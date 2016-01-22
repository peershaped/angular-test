import {bootstrap}    from 'angular2/platform/browser'
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {AnimalService} from './services/animal.service'
import {AppComponent} from './app.component'

bootstrap(AppComponent,[HTTP_PROVIDERS, AnimalService]);