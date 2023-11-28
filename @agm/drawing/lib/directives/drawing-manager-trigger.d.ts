import { AgmMap } from '@agm/core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { AgmDrawingManager } from './drawing-manager';
import * as ɵngcc0 from '@angular/core';
export declare class AgmDrawingManagerTrigger implements AfterViewInit, OnDestroy {
    private _agmMap;
    /** The drawing manager to be attached to this trigger. */
    drawingManager: AgmDrawingManager;
    constructor(_agmMap: AgmMap);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AgmDrawingManagerTrigger, [{ host: true; }]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<AgmDrawingManagerTrigger, "agm-map[agmDrawingManager]", ["matDrawingManagerTrigger"], { "drawingManager": "agmDrawingManager"; }, {}, never>;
}

//# sourceMappingURL=drawing-manager-trigger.d.ts.map