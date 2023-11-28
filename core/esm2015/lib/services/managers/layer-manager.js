import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../google-maps-api-wrapper';
export class LayerManager {
    constructor(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    /**
     * Adds a transit layer to a map instance.
     * @param layer - a TransitLayer object
     * @param _options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer) {
        const newLayer = this._wrapper.createTransitLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param layer - a bicycling layer object
     * @param _options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer) {
        const newLayer = this._wrapper.createBicyclingLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param layer - the layer to delete
     */
    deleteLayer(layer) {
        return this._layers.get(layer).then(currentLayer => {
            currentLayer.setMap(null);
            this._layers.delete(layer);
        });
    }
}
LayerManager.ɵfac = function LayerManager_Factory(t) { return new (t || LayerManager)(ɵngcc0.ɵɵinject(ɵngcc1.GoogleMapsAPIWrapper)); };
LayerManager.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: LayerManager, factory: LayerManager.ɵfac });
LayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LayerManager, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.GoogleMapsAPIWrapper }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItbWFuYWdlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL21hbmFnZXJzL2xheWVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0gsTUFBTSxPQUFPLFlBQVk7QUFDekIsSUFHSSxZQUFvQixRQUE4QjtBQUFJLFFBQWxDLGFBQVEsR0FBUixRQUFRLENBQXNCO0FBQUMsUUFIM0MsWUFBTyxHQUNYLElBQUksR0FBRyxFQUF1RyxDQUFDO0FBQ3ZILElBQ3lELENBQUM7QUFDMUQsSUFDSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUksZUFBZSxDQUFDLEtBQXNCO0FBQUksUUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzVELFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLElBQUksQ0FBQztBQUNMLElBQ0k7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJLGlCQUFpQixDQUFDLEtBQXdCO0FBQUksUUFDMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQzlELFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLElBQUksQ0FBQztBQUNMLElBQ0k7QUFDSjtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUksV0FBVyxDQUFDLEtBQTBDO0FBQUksUUFDdEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDM0QsWUFBWSxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNYLElBQUksQ0FBQztBQUNMO3dDQXZDQyxVQUFVO2tIQUNUO0FBQUM7QUFDVSxZQVJKLG9CQUFvQjtBQUFHOzs7cUZBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFnbUJpY3ljbGluZ0xheWVyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9iaWN5Y2xpbmctbGF5ZXInO1xuaW1wb3J0IHsgQWdtVHJhbnNpdExheWVyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90cmFuc2l0LWxheWVyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi4vZ29vZ2xlLW1hcHMtYXBpLXdyYXBwZXInO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBUcmFuc2l0IGFuZCBCaWN5Y2xpbmcgTGF5ZXJzIGZvciBhIEdvb2dsZSBNYXAgaW5zdGFuY2UuXG4gKi9cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExheWVyTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBfbGF5ZXJzOiBNYXA8QWdtVHJhbnNpdExheWVyIHwgQWdtQmljeWNsaW5nTGF5ZXIsIFByb21pc2U8Z29vZ2xlLm1hcHMuVHJhbnNpdExheWVyIHwgZ29vZ2xlLm1hcHMuQmljeWNsaW5nTGF5ZXI+PiA9XG4gICAgICAgIG5ldyBNYXA8QWdtVHJhbnNpdExheWVyIHwgQWdtQmljeWNsaW5nTGF5ZXIsIFByb21pc2U8Z29vZ2xlLm1hcHMuVHJhbnNpdExheWVyIHwgZ29vZ2xlLm1hcHMuQmljeWNsaW5nTGF5ZXI+PigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdHJhbnNpdCBsYXllciB0byBhIG1hcCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSBhIFRyYW5zaXRMYXllciBvYmplY3RcbiAgICAgKiBAcGFyYW0gX29wdGlvbnMgLSBUcmFuc2l0TGF5ZXJPcHRpb25zIG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgYWRkVHJhbnNpdExheWVyKGxheWVyOiBBZ21UcmFuc2l0TGF5ZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmNyZWF0ZVRyYW5zaXRMYXllcigpO1xuICAgICAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJpY3ljbGluZyBsYXllciB0byBhIG1hcCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSBhIGJpY3ljbGluZyBsYXllciBvYmplY3RcbiAgICAgKiBAcGFyYW0gX29wdGlvbnMgLSBCaWN5Y2xpbmdMYXllciBvcHRpb25zXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZEJpY3ljbGluZ0xheWVyKGxheWVyOiBBZ21CaWN5Y2xpbmdMYXllcik6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdMYXllciA9IHRoaXMuX3dyYXBwZXIuY3JlYXRlQmljeWNsaW5nTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5fbGF5ZXJzLnNldChsYXllciwgbmV3TGF5ZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSBtYXAgbGF5ZXJcbiAgICAgKiBAcGFyYW0gbGF5ZXIgLSB0aGUgbGF5ZXIgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlTGF5ZXIobGF5ZXI6IEFnbVRyYW5zaXRMYXllciB8IEFnbUJpY3ljbGluZ0xheWVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGN1cnJlbnRMYXllciA9PiB7XG4gICAgICAgICAgICBjdXJyZW50TGF5ZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5fbGF5ZXJzLmRlbGV0ZShsYXllcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==