import {Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

export abstract class MultiselectDropdown {
    @Input() 
    set value (value) {
        this._value = value;
        this.setDefaultValue()
    }
    get value() {
        return this._value;
    }
    _value
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    public setDefaultValue() {
        if (this.value == null) {
            this.selectedItems = null
        }
        else {
            let info = this.value != null ? this.getInfoById(this.value) : null;
            if (info != null) {
                this.selectedItems = [info];
            }
        }
        this.unfocusOnChange()
    }

    public getInfoById(id) {
        for (let i = 0; i < this.dropdownList.length; i++) {
            if (this.dropdownList[i].id == id) {
                return this.dropdownList[i]
            }
        }
    }

    abstract getSelector();

    unfocusOnChange() {
        // @WORKAROUND: there is no other way bind elements click!
        let interval = setInterval(function(selector) {
            let element = $(selector);
            if (element.length > 0) {
                element.click(function() {
                    $('html').click();
                })
                clearInterval(interval);
            }
        }, 500, this.getSelector())
    }

}
