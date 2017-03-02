import { Component, ElementRef, Input, Output, EventEmitter, Renderer, HostBinding } from '@angular/core';
import { Subject } from 'rxjs/Rx';
declare var Hammer: any;


@Component({
    selector: 'custom-keyboard',
    templateUrl: 'custom-keyboard.html'
})
export class CustomKeyBoard {

    // Inputs
    @Input() keysMain: string[];
    @Input() keysSecondary: Array<string>;

    @Input() set width(v: any)
    {
        let isPercent = String(v).indexOf('%') > -1 ? true : false;
        this.m_width = parseInt(v) + (isPercent ? '%' : 'px');
    }

    @HostBinding('class.visible') @Input() visible: boolean = true;

    // Outputs
    @Output() cKClickEmit: EventEmitter<any> = new EventEmitter();

    
    // Component reference
    private static m_component: CustomKeyBoard = null;

    // Variables
    private m_width: string;
    private m_main_column_nb;
    private m_secondary_column_nb;
    public zoom: number = 1;

    // Observables for subscribers to get the events
    private static m_clickObs: any = new Subject();
    private static m_showObs: any = new Subject();
    private static M_hideObs: any = new Subject();
    
    constructor(public el: ElementRef, public renderer: Renderer) {
        CustomKeyBoard.m_component = this;
        this.m_main_column_nb = 3;
        this.m_secondary_column_nb = 2;
    }

    ngOnInit() {
        this.resize();
    }

    static get onCKClick() {
        return this.m_clickObs;
    }

    static get onCKShow() {
        return this.m_showObs;
    }

    static get onCKHide() {
        return this.M_hideObs;
    }

      
    public cKClick(event, key: any)
    {
        CustomKeyBoard.onCKClick.next(key);
        this.cKClickEmit.emit(key);
    }

    public onWindowResize(event)
    {
        this.resize();        
    }

    static show(callback: Function = () => { })
    {
        console.log("show()");
        if (this.m_component && !this.m_component.visible)
        {
            this.m_component.visible = true;
            setTimeout(() => {
                callback();
                CustomKeyBoard.onCKShow.next(); },
                150);
        }
    }

    static hide(callback: Function = () => { })
    {
        if (this.m_component && this.m_component.visible)
        {
            this.m_component.visible = false;
            setTimeout(() => {
                callback();
                CustomKeyBoard.onCKHide.next(); },
                150);
        }
    }

    static destroy(callback: Function = (success: boolean) => { })
    {
        if (this.m_component)
        {
            this.m_component.el.nativeElement.remove();
            this.m_component = null;
            callback(true);
        }
        else
        {
            callback(true);
        }
    }

    private resize()
    {
        let referenceHeight = 300;
        let currentHeight = window.screen.height;
        this.zoom = referenceHeight >= (currentHeight/2)? 0.5 : 1;//currentHeight / referenceHeight;
    }
}


export interface CustomKeyBoardOptions
{
    align?: string;
    width?: any;
    visible?: boolean;
}
