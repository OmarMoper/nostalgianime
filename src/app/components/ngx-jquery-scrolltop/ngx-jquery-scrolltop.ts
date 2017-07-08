import {Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'ngx-jquery-scrolltop',
  styleUrls: ['./ngx-jquery-scrolltop.scss'],
  template: `
  <div class="scroll-top"><img src="assets/img/caret-arrow-up.png" /></div>
  `
})
export class JqueryScrollTopComponent implements OnInit {
    ngOnInit() {
        this.scrollTopButton()
        this.hideButtonBeforeScroll()
    }
    
    hideButtonBeforeScroll() {
        $(window).scroll(function () {
            var element = $('.scroll-top');
            if ($(window).scrollTop() > 100) {
                element.fadeIn();
            } else {
                element.fadeOut();
            }
        });
    }

    scrollTopButton() {
        var element = jQuery('.scroll-top');
        element.click(function() {
            $('html, body').animate({
                   scrollTop: 0
               }, 200);
        })

    }
}

