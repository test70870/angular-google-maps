import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
/**
 * Manages all KML Layers for a Google Map instance.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './../google-maps-api-wrapper';
export class KmlLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer) {
        const newLayer = this._wrapper.getNativeMap().then(m => {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex,
            });
        });
        this._layers.set(layer, newLayer);
    }
    setOptions(layer, options) {
        this._layers.get(layer).then(l => l.setOptions(options));
    }
    deleteKmlLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new Observable((observer) => {
            this._layers.get(layer).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
}
KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) { return new (t || KmlLayerManager)(ɵngcc0.ɵɵinject(ɵngcc1.GoogleMapsAPIWrapper), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
KmlLayerManager.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: KmlLayerManager, factory: KmlLayerManager.ɵfac });
KmlLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(KmlLayerManager, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.GoogleMapsAPIWrapper }, { type: ɵngcc0.NgZone }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia21sLWxheWVyLW1hbmFnZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9tYW5hZ2Vycy9rbWwtbGF5ZXItbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXBFO0FBQ0E7QUFDQSxHQUFHOzs7QUFFSCxNQUFNLE9BQU8sZUFBZTtBQUM1QixJQUdFLFlBQW9CLFFBQThCLEVBQVUsS0FBYTtBQUFJLFFBQXpELGFBQVEsR0FBUixRQUFRLENBQXNCO0FBQUMsUUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0FBQUMsUUFIbEUsWUFBTyxHQUNYLElBQUksR0FBRyxFQUE4QyxDQUFDO0FBQzVELElBQzhFLENBQUM7QUFDL0UsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsV0FBVyxDQUFDLEtBQWtCO0FBQ2hDLFFBQUksTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDM0QsWUFBTSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEMsZ0JBQVEsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO0FBQ2xDLGdCQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2QsZ0JBQVEsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtBQUNoRCxnQkFBUSxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7QUFDNUMsZ0JBQVEsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtBQUN0RCxnQkFBUSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7QUFDdEIsZ0JBQVEsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO0FBQzVCLGFBQU8sQ0FBQyxDQUFDO0FBQ1QsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLElBQUUsQ0FBQztBQUNILElBQ0UsVUFBVSxDQUFDLEtBQWtCLEVBQUUsT0FBb0M7QUFDckUsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDN0QsSUFBRSxDQUFDO0FBQ0gsSUFDRSxjQUFjLENBQUMsS0FBa0I7QUFDbkMsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDckMsWUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JCLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLHFCQUFxQixDQUFJLFNBQWlCLEVBQUUsS0FBa0I7QUFBSSxRQUNoRSxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsUUFBcUIsRUFBRSxFQUFFO0FBQ3BELFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBdUIsRUFBRSxFQUFFO0FBQy9ELGdCQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRixZQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNIOzJDQTlDQyxVQUFVOzJIQUNUO0FBQUM7QUFDVSxZQVBKLG9CQUFvQjtBQUFJLFlBSlosTUFBTTtBQUFHOzs7OEdBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtS21sTGF5ZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMva21sLWxheWVyJztcbmltcG9ydCB7IEdvb2dsZU1hcHNBUElXcmFwcGVyIH0gZnJvbSAnLi8uLi9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5cbi8qKlxuICogTWFuYWdlcyBhbGwgS01MIExheWVycyBmb3IgYSBHb29nbGUgTWFwIGluc3RhbmNlLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS21sTGF5ZXJNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfbGF5ZXJzOiBNYXA8QWdtS21sTGF5ZXIsIFByb21pc2U8Z29vZ2xlLm1hcHMuS21sTGF5ZXI+PiA9XG4gICAgICBuZXcgTWFwPEFnbUttbExheWVyLCBQcm9taXNlPGdvb2dsZS5tYXBzLkttbExheWVyPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93cmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgcHJpdmF0ZSBfem9uZTogTmdab25lKSB7fVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IEtNTCBMYXllciB0byB0aGUgbWFwLlxuICAgKi9cbiAgYWRkS21sTGF5ZXIobGF5ZXI6IEFnbUttbExheWVyKSB7XG4gICAgY29uc3QgbmV3TGF5ZXIgPSB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4obSA9PiB7XG4gICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkttbExheWVyKHtcbiAgICAgICAgY2xpY2thYmxlOiBsYXllci5jbGlja2FibGUsXG4gICAgICAgIG1hcDogbSxcbiAgICAgICAgcHJlc2VydmVWaWV3cG9ydDogbGF5ZXIucHJlc2VydmVWaWV3cG9ydCxcbiAgICAgICAgc2NyZWVuT3ZlcmxheXM6IGxheWVyLnNjcmVlbk92ZXJsYXlzLFxuICAgICAgICBzdXBwcmVzc0luZm9XaW5kb3dzOiBsYXllci5zdXBwcmVzc0luZm9XaW5kb3dzLFxuICAgICAgICB1cmw6IGxheWVyLnVybCxcbiAgICAgICAgekluZGV4OiBsYXllci56SW5kZXgsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9sYXllcnMuc2V0KGxheWVyLCBuZXdMYXllcik7XG4gIH1cblxuICBzZXRPcHRpb25zKGxheWVyOiBBZ21LbWxMYXllciwgb3B0aW9uczogZ29vZ2xlLm1hcHMuS21sTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5fbGF5ZXJzLmdldChsYXllcikudGhlbihsID0+IGwuc2V0T3B0aW9ucyhvcHRpb25zKSk7XG4gIH1cblxuICBkZWxldGVLbWxMYXllcihsYXllcjogQWdtS21sTGF5ZXIpIHtcbiAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKGwgPT4ge1xuICAgICAgbC5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLl9sYXllcnMuZGVsZXRlKGxheWVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBLbWxMYXllciBhcyBhbiBPYnNlcnZhYmxlXG4gICAqL1xuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGxheWVyOiBBZ21LbWxMYXllcik6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XG4gICAgICB0aGlzLl9sYXllcnMuZ2V0KGxheWVyKS50aGVuKChtOiBnb29nbGUubWFwcy5LbWxMYXllcikgPT4ge1xuICAgICAgICBtLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgKGU6IFQpID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQoZSkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=