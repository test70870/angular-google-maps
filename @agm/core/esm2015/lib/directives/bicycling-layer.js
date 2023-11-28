import { Directive, Input } from '@angular/core';
import { LayerManager } from '../services/managers/layer-manager';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../services/managers/layer-manager';
let layerId = 0;
/*
 * This directive adds a bicycling layer to a google map instance
 * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
 * */
export class AgmBicyclingLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show bicycling layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addBicyclingLayer(this);
        this._addedToManager = true;
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmBicyclingLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
}
AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) { return new (t || AgmBicyclingLayer)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LayerManager)); };
AgmBicyclingLayer.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmBicyclingLayer, selectors: [["agm-bicycling-layer"]], inputs: { visible: "visible" } });
AgmBicyclingLayer.ctorParameters = () => [
    { type: LayerManager }
];
AgmBicyclingLayer.propDecorators = {
    visible: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmBicyclingLayer, [{
        type: Directive,
        args: [{
                selector: 'agm-bicycling-layer'
            }]
    }], function () { return [{ type: ɵngcc1.LayerManager }]; }, { visible: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmljeWNsaW5nLWxheWVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9iaWN5Y2xpbmctbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBRWxFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUVoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBSUwsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBUzdCLFlBQXFCLFFBQXNCO0FBQUksUUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBYztBQUFDLFFBUnBDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLFFBQVksUUFBRyxHQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNqRCxRQUNJO0FBQ0o7QUFDSSxXQUFHO0FBQ1AsUUFBYSxZQUFPLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQ21ELENBQUM7QUFDcEQsSUFDSSxRQUFRO0FBQ1osUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDbEMsWUFBWSxPQUFPO0FBQ25CLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUMsUUFBUSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztBQUNwQyxJQUFJLENBQUM7QUFDTCxJQUNJLGdCQUFnQjtBQUNwQixJQUFJLEVBQUUsS0FBYSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLElBQ0ksZ0JBQWdCO0FBQ3BCLElBQUksUUFBUSxLQUFhLE9BQU8scUJBQXFCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0UsSUFDSSxnQkFBZ0I7QUFDcEIsSUFBSSxXQUFXO0FBQ2YsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxJQUFJLENBQUM7QUFDTDs2Q0FoQ0MsU0FBUyxTQUFDLGtCQUNQLFFBQVEsRUFBRSxxQkFBcUIsZUFDbEM7bUtBQ0k7QUFBQztBQUEyQyxZQVh4QyxZQUFZO0FBQUc7QUFBRztBQUFxQyxzQkFrQjNELEtBQUs7QUFBSTs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllck1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9sYXllci1tYW5hZ2VyJztcblxubGV0IGxheWVySWQgPSAwO1xuXG4vKlxuICogVGhpcyBkaXJlY3RpdmUgYWRkcyBhIGJpY3ljbGluZyBsYXllciB0byBhIGdvb2dsZSBtYXAgaW5zdGFuY2VcbiAqIDxhZ20tYmljeWNsaW5nLWxheWVyIFt2aXNpYmxlXT1cInRydWV8ZmFsc2VcIj4gPGFnbS1iaWN5Y2xpbmctbGF5ZXI+XG4gKiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdhZ20tYmljeWNsaW5nLWxheWVyJyxcbn0pXG5leHBvcnQgY2xhc3MgQWdtQmljeWNsaW5nTGF5ZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcbiAgICBwcml2YXRlIF9hZGRlZFRvTWFuYWdlciA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lkOiBzdHJpbmcgPSAobGF5ZXJJZCsrKS50b1N0cmluZygpO1xuXG4gICAgLyoqXG4gICAgICogSGlkZS9zaG93IGJpY3ljbGluZyBsYXllclxuICAgICAqL1xuICAgIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgX21hbmFnZXI6IExheWVyTWFuYWdlciApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWFuYWdlci5hZGRCaWN5Y2xpbmdMYXllcih0aGlzKTtcbiAgICAgICAgdGhpcy5fYWRkZWRUb01hbmFnZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faWQ7IH1cblxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gYEFnbUJpY3ljbGluZ0xheWVyLSR7dGhpcy5faWQudG9TdHJpbmcoKX1gOyB9XG5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX21hbmFnZXIuZGVsZXRlTGF5ZXIodGhpcyk7XG4gICAgfVxuXG59XG4iXX0=