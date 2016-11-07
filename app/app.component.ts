
import {Component} from "@angular/core";

@Component({
	selector: 'quickstart-app',
	templateUrl: './templates/quickstart-app.php'
})

export class AppComponent {      // class
	navCollapse = true;           // state variable (property)

	toggleCollapse() {            // method
		this.navCollapse = !this.navCollapse;
	}
}