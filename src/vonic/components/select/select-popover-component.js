"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/** @hidden */
var SelectPopover = (function () {
    function SelectPopover(navParams, viewController) {
        this.navParams = navParams;
        this.viewController = viewController;
    }
    Object.defineProperty(SelectPopover.prototype, "value", {
        get: function () {
            var checkedOption = this.options.find(function (option) { return option.checked; });
            return checkedOption ? checkedOption.value : undefined;
        },
        set: function (value) {
            var checkedOption = this.options.find(function (option) { return option.value === value; });
            if (checkedOption && checkedOption.handler) {
                checkedOption.handler();
            }
            this.viewController.dismiss(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectPopover.prototype.ngOnInit = function () {
        this.options = this.navParams.data.options;
    };
    SelectPopover = __decorate([
        core_1.Component({
            template: "\n    <ion-list radio-group [(ngModel)]=\"value\">\n      <ion-item *ngFor=\"let option of options\">\n        <ion-label>{{option.text}}</ion-label>\n        <ion-radio [checked]=\"option.checked\" [value]=\"option.value\" [disabled]=\"option.disabled\"></ion-radio>\n      </ion-item>\n    </ion-list>\n  "
        })
    ], SelectPopover);
    return SelectPopover;
}());
exports.SelectPopover = SelectPopover;
