
import {Component} from "@angular/core";

@Component({
	selector: 'quickstart-app',
	templateUrl: './templates/quickstart-app.php'
})

//export class AppComponent {      // class
//	navCollapse = true;           // state variable (property)
//
//	toggleCollapse() {            // method
//		this.navCollapse = !this.navCollapse;
//	}
//}

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}