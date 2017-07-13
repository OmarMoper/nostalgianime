import {Component, ViewChild} from '@angular/core';
import {HamburguerComponent} from './components/hamburguer/hamburguer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    @ViewChild(HamburguerComponent) hamburguer: HamburguerComponent;

    public onHamburguerOpen() {
        this.openSidebarMenu();
        this.showPageOverlay();
    }

    public onOverlayClick() {
        this.hideSidebar();
    }

    public onHamburguerClose() {
        this.hideSidebar();
    }

    public hideSidebar() {
        this.closeSidebarMenu();
        this.hidePageOverLay();
        this.hamburguer.color = 'black';
        this.hamburguer.icon = 'bars';
    }

    public openSidebarMenu() {
        $('.sidebar-menu').css('width', '220px');
    }

    public closeSidebarMenu() {
        $('.sidebar-menu').css('width', '0px');
    }
    
    public showPageOverlay() {
        $('.page-overlay').fadeIn();
    }

    public hidePageOverLay() {
        $('.page-overlay').fadeOut();
    }
}
