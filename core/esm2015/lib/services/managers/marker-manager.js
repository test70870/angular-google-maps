import { __awaiter } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './../google-maps-api-wrapper';
export class MarkerManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    convertAnimation(uiAnim) {
        return __awaiter(this, void 0, void 0, function* () {
            if (uiAnim === null) {
                return null;
            }
            else {
                return this._mapsWrapper.getNativeMap().then(() => google.maps.Animation[uiAnim]);
            }
        });
    }
    deleteMarker(markerDirective) {
        const markerPromise = this._markers.get(markerDirective);
        if (markerPromise == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return markerPromise.then((marker) => {
            return this._zone.run(() => {
                marker.setMap(null);
                this._markers.delete(markerDirective);
            });
        });
    }
    updateMarkerPosition(marker) {
        return this._markers.get(marker).then((m) => m.setPosition({ lat: marker.latitude, lng: marker.longitude }));
    }
    updateTitle(marker) {
        return this._markers.get(marker).then((m) => m.setTitle(marker.title));
    }
    updateLabel(marker) {
        return this._markers.get(marker).then((m) => { m.setLabel(marker.label); });
    }
    updateDraggable(marker) {
        return this._markers.get(marker).then((m) => m.setDraggable(marker.draggable));
    }
    updateIcon(marker) {
        return this._markers.get(marker).then((m) => m.setIcon(marker.iconUrl));
    }
    updateOpacity(marker) {
        return this._markers.get(marker).then((m) => m.setOpacity(marker.opacity));
    }
    updateVisible(marker) {
        return this._markers.get(marker).then((m) => m.setVisible(marker.visible));
    }
    updateZIndex(marker) {
        return this._markers.get(marker).then((m) => m.setZIndex(marker.zIndex));
    }
    updateClickable(marker) {
        return this._markers.get(marker).then((m) => m.setClickable(marker.clickable));
    }
    updateAnimation(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const m = yield this._markers.get(marker);
            m.setAnimation(yield this.convertAnimation(marker.animation));
        });
    }
    addMarker(marker) {
        const markerPromise = new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            return this._mapsWrapper.createMarker({
                position: { lat: marker.latitude, lng: marker.longitude },
                label: marker.label,
                draggable: marker.draggable,
                icon: marker.iconUrl,
                opacity: marker.opacity,
                visible: marker.visible,
                zIndex: marker.zIndex,
                title: marker.title,
                clickable: marker.clickable,
                animation: yield this.convertAnimation(marker.animation),
            }).then(resolve);
        }));
        this._markers.set(marker, markerPromise);
    }
    getNativeMarker(marker) {
        return this._markers.get(marker);
    }
    createEventObservable(eventName, marker) {
        return new Observable(observer => {
            this._markers.get(marker).then(m => m.addListener(eventName, e => this._zone.run(() => observer.next(e))));
        });
    }
}
MarkerManager.ɵfac = function MarkerManager_Factory(t) { return new (t || MarkerManager)(ɵngcc0.ɵɵinject(ɵngcc1.GoogleMapsAPIWrapper), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
MarkerManager.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: MarkerManager, factory: MarkerManager.ɵfac });
MarkerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MarkerManager, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.GoogleMapsAPIWrapper }, { type: ɵngcc0.NgZone }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLW1hbmFnZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9tYW5hZ2Vycy9tYXJrZXItbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUlsQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBR3BFLE1BQU0sT0FBTyxhQUFhO0FBQzFCLElBR0UsWUFBc0IsWUFBa0MsRUFBWSxLQUFhO0FBQUksUUFBL0QsaUJBQVksR0FBWixZQUFZLENBQXNCO0FBQUMsUUFBVyxVQUFLLEdBQUwsS0FBSyxDQUFRO0FBQUMsUUFIeEUsYUFBUSxHQUNkLElBQUksR0FBRyxFQUEwQyxDQUFDO0FBQ3hELElBQ3NGLENBQUM7QUFDdkYsSUFDUSxnQkFBZ0IsQ0FBQyxNQUFpRDtBQUMxRTtBQUdHLFlBSEMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQ3pCLGdCQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLGFBQUs7QUFBQyxpQkFBSztBQUNYLGdCQUFNLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN4RixhQUFLO0FBQ0wsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNILElBQ0UsWUFBWSxDQUFDLGVBQTBCO0FBQUksUUFDekMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0QsUUFBSSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7QUFDL0IsWUFBTSx5QkFBeUI7QUFDL0IsWUFBTSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQixTQUFLO0FBQ0wsUUFBSSxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUU7QUFDN0QsWUFBTSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtBQUNqQyxnQkFBUSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLGdCQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzlDLFlBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRSxvQkFBb0IsQ0FBQyxNQUFpQjtBQUFJLFFBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNqQyxDQUFDLENBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNqRyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxNQUFpQjtBQUFJLFFBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMvRixJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxNQUFpQjtBQUFJLFFBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBcUIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRyxJQUFFLENBQUM7QUFDSCxJQUNFLGVBQWUsQ0FBQyxNQUFpQjtBQUFJLFFBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUN2RyxJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVUsQ0FBQyxNQUFpQjtBQUFJLFFBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNoRyxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxNQUFpQjtBQUFJLFFBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNuRyxJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxNQUFpQjtBQUFJLFFBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNuRyxJQUFFLENBQUM7QUFDSCxJQUNFLFlBQVksQ0FBQyxNQUFpQjtBQUFJLFFBQ2hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFB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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBZ21NYXJrZXIgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMvbWFya2VyJztcblxuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hcmtlck1hbmFnZXIge1xuICBwcm90ZWN0ZWQgX21hcmtlcnM6IE1hcDxBZ21NYXJrZXIsIFByb21pc2U8Z29vZ2xlLm1hcHMuTWFya2VyPj4gPVxuICAgICAgbmV3IE1hcDxBZ21NYXJrZXIsIFByb21pc2U8Z29vZ2xlLm1hcHMuTWFya2VyPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX21hcHNXcmFwcGVyOiBHb29nbGVNYXBzQVBJV3JhcHBlciwgcHJvdGVjdGVkIF96b25lOiBOZ1pvbmUpIHt9XG5cbiAgYXN5bmMgY29udmVydEFuaW1hdGlvbih1aUFuaW06IGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5BbmltYXRpb24gfCBudWxsKSB7XG4gICAgaWYgKHVpQW5pbSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYXBzV3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKCgpID0+IGdvb2dsZS5tYXBzLkFuaW1hdGlvblt1aUFuaW1dKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVNYXJrZXIobWFya2VyRGlyZWN0aXZlOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtYXJrZXJQcm9taXNlID0gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyRGlyZWN0aXZlKTtcbiAgICBpZiAobWFya2VyUHJvbWlzZSA9PSBudWxsKSB7XG4gICAgICAvLyBtYXJrZXIgYWxyZWFkeSBkZWxldGVkXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiBtYXJrZXJQcm9taXNlLnRoZW4oKG1hcmtlcjogZ29vZ2xlLm1hcHMuTWFya2VyKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICB0aGlzLl9tYXJrZXJzLmRlbGV0ZShtYXJrZXJEaXJlY3RpdmUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZXJQb3NpdGlvbihtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oXG4gICAgICAgIChtOiBnb29nbGUubWFwcy5NYXJrZXIpID0+IG0uc2V0UG9zaXRpb24oe2xhdDogbWFya2VyLmxhdGl0dWRlLCBsbmc6IG1hcmtlci5sb25naXR1ZGV9KSk7XG4gIH1cblxuICB1cGRhdGVUaXRsZShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IGdvb2dsZS5tYXBzLk1hcmtlcikgPT4gbS5zZXRUaXRsZShtYXJrZXIudGl0bGUpKTtcbiAgfVxuXG4gIHVwZGF0ZUxhYmVsKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogZ29vZ2xlLm1hcHMuTWFya2VyKSA9PiB7IG0uc2V0TGFiZWwobWFya2VyLmxhYmVsKTsgfSk7XG4gIH1cblxuICB1cGRhdGVEcmFnZ2FibGUobWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKChtOiBnb29nbGUubWFwcy5NYXJrZXIpID0+IG0uc2V0RHJhZ2dhYmxlKG1hcmtlci5kcmFnZ2FibGUpKTtcbiAgfVxuXG4gIHVwZGF0ZUljb24obWFya2VyOiBBZ21NYXJrZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKChtOiBnb29nbGUubWFwcy5NYXJrZXIpID0+IG0uc2V0SWNvbihtYXJrZXIuaWNvblVybCkpO1xuICB9XG5cbiAgdXBkYXRlT3BhY2l0eShtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IGdvb2dsZS5tYXBzLk1hcmtlcikgPT4gbS5zZXRPcGFjaXR5KG1hcmtlci5vcGFjaXR5KSk7XG4gIH1cblxuICB1cGRhdGVWaXNpYmxlKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogZ29vZ2xlLm1hcHMuTWFya2VyKSA9PiBtLnNldFZpc2libGUobWFya2VyLnZpc2libGUpKTtcbiAgfVxuXG4gIHVwZGF0ZVpJbmRleChtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrZXJzLmdldChtYXJrZXIpLnRoZW4oKG06IGdvb2dsZS5tYXBzLk1hcmtlcikgPT4gbS5zZXRaSW5kZXgobWFya2VyLnpJbmRleCkpO1xuICB9XG5cbiAgdXBkYXRlQ2xpY2thYmxlKG1hcmtlcjogQWdtTWFya2VyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcikudGhlbigobTogZ29vZ2xlLm1hcHMuTWFya2VyKSA9PiBtLnNldENsaWNrYWJsZShtYXJrZXIuY2xpY2thYmxlKSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVBbmltYXRpb24obWFya2VyOiBBZ21NYXJrZXIpIHtcbiAgICBjb25zdCBtID0gYXdhaXQgdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKTtcbiAgICBtLnNldEFuaW1hdGlvbihhd2FpdCB0aGlzLmNvbnZlcnRBbmltYXRpb24obWFya2VyLmFuaW1hdGlvbikpO1xuICB9XG5cbiAgYWRkTWFya2VyKG1hcmtlcjogQWdtTWFya2VyKSB7XG4gICAgY29uc3QgbWFya2VyUHJvbWlzZSA9IG5ldyBQcm9taXNlPGdvb2dsZS5tYXBzLk1hcmtlcj4oYXN5bmMgKHJlc29sdmUpID0+XG4gICAgIHRoaXMuX21hcHNXcmFwcGVyLmNyZWF0ZU1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiB7bGF0OiBtYXJrZXIubGF0aXR1ZGUsIGxuZzogbWFya2VyLmxvbmdpdHVkZX0sXG4gICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgIGRyYWdnYWJsZTogbWFya2VyLmRyYWdnYWJsZSxcbiAgICAgICAgaWNvbjogbWFya2VyLmljb25VcmwsXG4gICAgICAgIG9wYWNpdHk6IG1hcmtlci5vcGFjaXR5LFxuICAgICAgICB2aXNpYmxlOiBtYXJrZXIudmlzaWJsZSxcbiAgICAgICAgekluZGV4OiBtYXJrZXIuekluZGV4LFxuICAgICAgICB0aXRsZTogbWFya2VyLnRpdGxlLFxuICAgICAgICBjbGlja2FibGU6IG1hcmtlci5jbGlja2FibGUsXG4gICAgICAgIGFuaW1hdGlvbjogYXdhaXQgdGhpcy5jb252ZXJ0QW5pbWF0aW9uKG1hcmtlci5hbmltYXRpb24pLFxuICAgICAgfSkudGhlbihyZXNvbHZlKSk7XG4gICAgdGhpcy5fbWFya2Vycy5zZXQobWFya2VyLCBtYXJrZXJQcm9taXNlKTtcbiAgfVxuXG4gIGdldE5hdGl2ZU1hcmtlcihtYXJrZXI6IEFnbU1hcmtlcik6IFByb21pc2U8Z29vZ2xlLm1hcHMuTWFya2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcmtlcnMuZ2V0KG1hcmtlcik7XG4gIH1cblxuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VCBleHRlbmRzIChnb29nbGUubWFwcy5Nb3VzZUV2ZW50IHwgdm9pZCk+KFxuICAgICAgZXZlbnROYW1lOiBnb29nbGUubWFwcy5NYXJrZXJNb3VzZUV2ZW50TmFtZXMgfCBnb29nbGUubWFwcy5NYXJrZXJDaGFuZ2VPcHRpb25FdmVudE5hbWVzLFxuICAgICAgbWFya2VyOiBBZ21NYXJrZXIpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgdGhpcy5fbWFya2Vycy5nZXQobWFya2VyKS50aGVuKG0gPT5cbiAgICAgICAgbS5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGUgPT4gdGhpcy5fem9uZS5ydW4oKCkgPT4gb2JzZXJ2ZXIubmV4dChlKSkpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=