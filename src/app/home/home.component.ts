import { Component, OnInit } from '@angular/core';
import { InfyscrollService } from '../infyscroll.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';



declare var jquery:any;
declare var $ :any;


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(public page: InfyscrollService) {}

	ngOnInit() {
		this.page.initilizer();
		$(document).ready(() => {
			$('.modal').modal();
		});
	}
	scrollHandler(e) {
		if (e === 'bottom') {
			this.page.nextBatch();
		}
	}
}
