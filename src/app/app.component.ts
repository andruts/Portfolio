import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    open = false;
    drawerType = 'temporary';
    headerType = 'header';
    title = 'portfolio';
    type = 'short';
    prominent = false;
    dense = false;

    toggleDrawer() {
        this.open = !this.open;
    }

    get toolbarSpacer() { return this.headerType === 'spacer'; }
    get toolbarHeader() { return this.headerType === 'header'; }

    ngOnInit(): void {
    }
    constructor() { }
}
