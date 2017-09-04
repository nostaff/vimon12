"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var ToastCmp = (function () {
    function ToastCmp(_viewCtrl, _config, _elementRef, params, renderer) {
        this._viewCtrl = _viewCtrl;
        this._config = _config;
        this._elementRef = _elementRef;
        this.dismissTimeout = undefined;
        renderer.setElementClass(_elementRef.nativeElement, "toast-" + _config.get('mode'), true);
        this.d = params.data;
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(function (cssClass) {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++toastIds);
        if (this.d.message) {
            this.hdrId = 'toast-hdr-' + this.id;
        }
    }
    ToastCmp.prototype.ngAfterViewInit = function () {
        var _this = this;
        // if there's a `duration` set, automatically dismiss.
        if (this.d.duration) {
            this.dismissTimeout = setTimeout(function () {
                _this.dismiss('backdrop');
            }, this.d.duration);
        }
        this.enabled = true;
    };
    ToastCmp.prototype.ionViewDidEnter = function () {
        var activeElement = document.activeElement;
        if (activeElement) {
            activeElement.blur();
        }
        var focusableEle = this._elementRef.nativeElement.querySelector('button');
        if (focusableEle) {
            focusableEle.focus();
        }
    };
    ToastCmp.prototype.cbClick = function () {
        if (this.enabled) {
            this.dismiss('close');
        }
    };
    ToastCmp.prototype.dismiss = function (role) {
        clearTimeout(this.dismissTimeout);
        this.dismissTimeout = undefined;
        return this._viewCtrl.dismiss(null, role, { disableApp: false });
    };
    ToastCmp = __decorate([
        core_1.Component({
            selector: 'ion-toast',
            template: '<div class="toast-wrapper" ' +
                '[class.toast-bottom]="d.position === \'bottom\'" ' +
                '[class.toast-middle]="d.position === \'middle\'" ' +
                '[class.toast-top]="d.position === \'top\'"> ' +
                '<div class="toast-container"> ' +
                '<div class="toast-message" id="{{hdrId}}" *ngIf="d.message">{{d.message}}</div> ' +
                '<button ion-button clear class="toast-button" *ngIf="d.showCloseButton" (click)="cbClick()"> ' +
                '{{ d.closeButtonText || \'Close\' }} ' +
                '</button> ' +
                '</div> ' +
                '</div>',
            host: {
                'role': 'dialog',
                '[attr.aria-labelledby]': 'hdrId',
                '[attr.aria-describedby]': 'descId',
            },
        })
    ], ToastCmp);
    return ToastCmp;
}());
exports.ToastCmp = ToastCmp;
var toastIds = -1;
