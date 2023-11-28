import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { MarkerManager } from './marker-manager';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../google-maps-api-wrapper';
import * as ɵngcc2 from './marker-manager';
export class InfoWindowManager {
    constructor(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    deleteInfoWindow(infoWindow) {
        const iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then((i) => {
            return this._zone.run(() => {
                i.close();
                this._infoWindows.delete(infoWindow);
            });
        });
    }
    setPosition(infoWindow) {
        return this._infoWindows.get(infoWindow).then((i) => i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude,
        }));
    }
    setZIndex(infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then((i) => i.setZIndex(infoWindow.zIndex));
    }
    open(infoWindow) {
        return this._infoWindows.get(infoWindow).then((w) => {
            if (infoWindow.hostMarker != null) {
                return this._markerManager.getNativeMarker(infoWindow.hostMarker).then((marker) => {
                    return this._mapsWrapper.getNativeMap().then((map) => w.open(map, marker));
                });
            }
            return this._mapsWrapper.getNativeMap().then((map) => w.open(map));
        });
    }
    close(infoWindow) {
        return this._infoWindows.get(infoWindow).then((w) => w.close());
    }
    setOptions(infoWindow, options) {
        return this._infoWindows.get(infoWindow).then((i) => i.setOptions(options));
    }
    addInfoWindow(infoWindow) {
        const options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan,
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        const infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    }
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    createEventObservable(eventName, infoWindow) {
        return new Observable((observer) => {
            this._infoWindows.get(infoWindow).then((i) => {
                i.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
}
InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) { return new (t || InfoWindowManager)(ɵngcc0.ɵɵinject(ɵngcc1.GoogleMapsAPIWrapper), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(ɵngcc2.MarkerManager)); };
InfoWindowManager.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: InfoWindowManager, factory: InfoWindowManager.ɵfac });
InfoWindowManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: NgZone },
    { type: MarkerManager }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InfoWindowManager, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.GoogleMapsAPIWrapper }, { type: ɵngcc0.NgZone }, { type: ɵngcc2.MarkerManager }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby13aW5kb3ctbWFuYWdlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL21hbmFnZXJzL2luZm8td2luZG93LW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUk1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHakQsTUFBTSxPQUFPLGlCQUFpQjtBQUM5QixJQUdFLFlBQ1ksWUFBa0MsRUFBVSxLQUFhLEVBQ3pELGNBQTZCO0FBQUksUUFEakMsaUJBQVksR0FBWixZQUFZLENBQXNCO0FBQUMsUUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0FBQUMsUUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWU7QUFBQyxRQUxsQyxpQkFBWSxHQUNoQixJQUFJLEdBQUcsRUFBa0QsQ0FBQztBQUNoRSxJQUc4QyxDQUFDO0FBQy9DLElBQ0UsZ0JBQWdCLENBQUMsVUFBeUI7QUFBSSxRQUM1QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0RCxRQUFJLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUN6QixZQUFNLDhCQUE4QjtBQUNwQyxZQUFNLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQy9CLFNBQUs7QUFDTCxRQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQXlCLEVBQUUsRUFBRTtBQUN0RCxZQUFNLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ2pDLGdCQUFRLENB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b20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaW5mby13aW5kb3cnO1xuXG5pbXBvcnQgeyBHb29nbGVNYXBzQVBJV3JhcHBlciB9IGZyb20gJy4uL2dvb2dsZS1tYXBzLWFwaS13cmFwcGVyJztcbmltcG9ydCB7IE1hcmtlck1hbmFnZXIgfSBmcm9tICcuL21hcmtlci1tYW5hZ2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluZm9XaW5kb3dNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfaW5mb1dpbmRvd3M6IE1hcDxBZ21JbmZvV2luZG93LCBQcm9taXNlPGdvb2dsZS5tYXBzLkluZm9XaW5kb3c+PiA9XG4gICAgICBuZXcgTWFwPEFnbUluZm9XaW5kb3csIFByb21pc2U8Z29vZ2xlLm1hcHMuSW5mb1dpbmRvdz4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgICAgIHByaXZhdGUgX21hcmtlck1hbmFnZXI6IE1hcmtlck1hbmFnZXIpIHt9XG5cbiAgZGVsZXRlSW5mb1dpbmRvdyhpbmZvV2luZG93OiBBZ21JbmZvV2luZG93KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaVdpbmRvdyA9IHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KTtcbiAgICBpZiAoaVdpbmRvdyA9PSBudWxsKSB7XG4gICAgICAvLyBpbmZvIHdpbmRvdyBhbHJlYWR5IGRlbGV0ZWRcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGlXaW5kb3cudGhlbigoaTogZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgaS5jbG9zZSgpO1xuICAgICAgICB0aGlzLl9pbmZvV2luZG93cy5kZWxldGUoaW5mb1dpbmRvdyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvd3MuZ2V0KGluZm9XaW5kb3cpLnRoZW4oKGk6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3cpID0+IGkuc2V0UG9zaXRpb24oe1xuICAgICAgbGF0OiBpbmZvV2luZG93LmxhdGl0dWRlLFxuICAgICAgbG5nOiBpbmZvV2luZG93LmxvbmdpdHVkZSxcbiAgICB9KSk7XG4gIH1cblxuICBzZXRaSW5kZXgoaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdylcbiAgICAgICAgLnRoZW4oKGk6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3cpID0+IGkuc2V0WkluZGV4KGluZm9XaW5kb3cuekluZGV4KSk7XG4gIH1cblxuICBvcGVuKGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faW5mb1dpbmRvd3MuZ2V0KGluZm9XaW5kb3cpLnRoZW4oKHcpID0+IHtcbiAgICAgIGlmIChpbmZvV2luZG93Lmhvc3RNYXJrZXIgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFya2VyTWFuYWdlci5nZXROYXRpdmVNYXJrZXIoaW5mb1dpbmRvdy5ob3N0TWFya2VyKS50aGVuKChtYXJrZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwKSA9PiB3Lm9wZW4obWFwLCBtYXJrZXIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwKSA9PiB3Lm9wZW4obWFwKSk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZShpbmZvV2luZG93OiBBZ21JbmZvV2luZG93KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2luZm9XaW5kb3dzLmdldChpbmZvV2luZG93KS50aGVuKCh3KSA9PiB3LmNsb3NlKCkpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhpbmZvV2luZG93OiBBZ21JbmZvV2luZG93LCBvcHRpb25zOiBnb29nbGUubWFwcy5JbmZvV2luZG93T3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9pbmZvV2luZG93cy5nZXQoaW5mb1dpbmRvdykudGhlbigoaTogZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdykgPT4gaS5zZXRPcHRpb25zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIGFkZEluZm9XaW5kb3coaW5mb1dpbmRvdzogQWdtSW5mb1dpbmRvdykge1xuICAgIGNvbnN0IG9wdGlvbnM6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3dPcHRpb25zID0ge1xuICAgICAgY29udGVudDogaW5mb1dpbmRvdy5jb250ZW50LFxuICAgICAgbWF4V2lkdGg6IGluZm9XaW5kb3cubWF4V2lkdGgsXG4gICAgICB6SW5kZXg6IGluZm9XaW5kb3cuekluZGV4LFxuICAgICAgZGlzYWJsZUF1dG9QYW46IGluZm9XaW5kb3cuZGlzYWJsZUF1dG9QYW4sXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGluZm9XaW5kb3cubGF0aXR1ZGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBpbmZvV2luZG93LmxvbmdpdHVkZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIG9wdGlvbnMucG9zaXRpb24gPSB7bGF0OiBpbmZvV2luZG93LmxhdGl0dWRlLCBsbmc6IGluZm9XaW5kb3cubG9uZ2l0dWRlfTtcbiAgICB9XG4gICAgY29uc3QgaW5mb1dpbmRvd1Byb21pc2UgPSB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVJbmZvV2luZG93KG9wdGlvbnMpO1xuICAgIHRoaXMuX2luZm9XaW5kb3dzLnNldChpbmZvV2luZG93LCBpbmZvV2luZG93UHJvbWlzZSk7XG4gIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGVzIGEgR29vZ2xlIE1hcHMgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBJbmZvV2luZG93IGFzIGFuIE9ic2VydmFibGVcbiAgICAqL1xuICBjcmVhdGVFdmVudE9ic2VydmFibGU8VD4oZXZlbnROYW1lOiBzdHJpbmcsIGluZm9XaW5kb3c6IEFnbUluZm9XaW5kb3cpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgdGhpcy5faW5mb1dpbmRvd3MuZ2V0KGluZm9XaW5kb3cpLnRoZW4oKGk6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3cpID0+IHtcbiAgICAgICAgaS5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChlOiBUKSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiBvYnNlcnZlci5uZXh0KGUpKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19