import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';

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
    nextLocale: string = '';
    languages: Record<string, string> = {
      'es' : 'en-US',
      'en' : 'es'
    }

    toggleDrawer() {
        this.open = !this.open;
    }

    get toolbarSpacer() { return this.headerType === 'spacer'; }
    get toolbarHeader() { return this.headerType === 'header'; }

    ngOnInit(): void {  
      
      this.nextLocale = this.languages[this.locale.split('-')[0]];
      
    }
    constructor(@Inject(LOCALE_ID) public locale: string) { }
}
