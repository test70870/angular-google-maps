import { Directive, EventEmitter, Input, isDevMode, NgZone, Output } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class AgmDrawingManager {
    constructor(_zone) {
        this._zone = _zone;
        /**
         * This event is fired when the user has finished drawing a circle.
         */
        this.circleComplete = new EventEmitter();
        /**
         * This event is fired when the user has finished drawing a marker.
         */
        this.markerComplete = new EventEmitter();
        /**
         * This event is fired when the user has finished drawing an overlay of any
         * type.
         */
        this.overlayComplete = new EventEmitter();
        /**
         * This event is fired when the user has finished drawing a polygon.
         */
        this.polygonComplete = new EventEmitter();
        /**
         * This event is fired when the user has finished drawing a polyline.
         */
        this.polylineComplete = new EventEmitter();
        /**
         * This event is fired when the user has finished drawing a rectangle.
         */
        this.rectangleComplete = new EventEmitter();
        this.eventSubscriptions = [];
    }
    setMap(map) {
        if (!google.maps.drawing && isDevMode()) {
            console.error('Cannot use drawing manager if drawing library is not ' +
                'loaded. To fix, add libraries: [\'drawing\'] to the ' +
                'lazyMapsAPILoaderConfig you passed to AgmCoreModule.forRoot');
            return;
        }
        if (map && !this.drawingManager) {
            this.drawingManager = new google.maps.drawing.DrawingManager({
                map,
                circleOptions: this.circleOptions,
                markerOptions: this.markerOptions,
                polygonOptions: this.polygonOptions,
                polylineOptions: this.polylineOptions,
                rectangleOptions: this.rectangleOptions,
                drawingControl: this.drawingControl,
                drawingControlOptions: this.drawingControlOptions,
                drawingMode: this.drawingMode,
            });
            this.initEvents(this.drawingManager);
        }
        else if (!map && this.drawingManager) {
            this.drawingManager.setMap(null);
        }
        // else do nothing
    }
    initEvents(drawingManager) {
        this.eventSubscriptions.push(this.createMvcObservable('circlecomplete', drawingManager)
            .subscribe(circle => this._zone.run(() => this.circleComplete.next(circle))));
        this.eventSubscriptions.push(this.createMvcObservable('markercomplete', drawingManager)
            .subscribe(marker => this._zone.run(() => this.markerComplete.next(marker))));
        this.eventSubscriptions.push(this.createMvcObservable('polygoncomplete', drawingManager)
            .subscribe(polygon => this._zone.run(() => this.polygonComplete.next(polygon))));
        this.eventSubscriptions.push(this.createMvcObservable('polylinecomplete', drawingManager)
            .subscribe(polyline => this._zone.run(() => this.polylineComplete.next(polyline))));
        this.eventSubscriptions.push(this.createMvcObservable('overlaycomplete', drawingManager)
            .subscribe(overlayevent => this._zone.run(() => this.overlayComplete.next(overlayevent))));
        this.eventSubscriptions.push(this.createMvcObservable('rectanglecomplete', drawingManager)
            .subscribe(rectangle => this._zone.run(() => this.rectangleComplete.next(rectangle))));
    }
    createMvcObservable(eventName, mvcObject) {
        return fromEventPattern(handler => mvcObject.addListener(eventName, (event) => handler.apply(null, [event])), (_handler, evListener) => evListener.remove());
    }
    ngOnChanges(changes) {
        if (!this.drawingManager) {
            return;
        }
        const options = Object.entries(changes)
            .map(([prop, change]) => [prop, change.currentValue])
            .reduce((obj, [propName, propValue]) => {
            obj[propName] = propValue;
            return obj;
        }, {});
        this.drawingManager.setOptions(options);
    }
    ngOnDestroy() {
        this.eventSubscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
AgmDrawingManager.ɵfac = function AgmDrawingManager_Factory(t) { return new (t || AgmDrawingManager)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
AgmDrawingManager.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmDrawingManager, selectors: [["agm-drawing-manager"]], inputs: { drawingControl: "drawingControl", drawingMode: "drawingMode", drawingControlOptions: "drawingControlOptions", circleOptions: "circleOptions", markerOptions: "markerOptions", polygonOptions: "polygonOptions", polylineOptions: "polylineOptions", rectangleOptions: "rectangleOptions" }, outputs: { circleComplete: "circleComplete", markerComplete: "markerComplete", overlayComplete: "overlayComplete", polygonComplete: "polygonComplete", polylineComplete: "polylineComplete", rectangleComplete: "rectangleComplete" }, exportAs: ["agmDrawingManager"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
AgmDrawingManager.ctorParameters = () => [
    { type: NgZone }
];
AgmDrawingManager.propDecorators = {
    drawingControl: [{ type: Input }],
    drawingMode: [{ type: Input }],
    drawingControlOptions: [{ type: Input }],
    circleOptions: [{ type: Input }],
    markerOptions: [{ type: Input }],
    polygonOptions: [{ type: Input }],
    polylineOptions: [{ type: Input }],
    rectangleOptions: [{ type: Input }],
    circleComplete: [{ type: Output }],
    markerComplete: [{ type: Output }],
    overlayComplete: [{ type: Output }],
    polygonComplete: [{ type: Output }],
    polylineComplete: [{ type: Output }],
    rectangleComplete: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmDrawingManager, [{
        type: Directive,
        args: [{
                selector: 'agm-drawing-manager',
                exportAs: 'agmDrawingManager'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }]; }, { circleComplete: [{
            type: Output
        }], markerComplete: [{
            type: Output
        }], overlayComplete: [{
            type: Output
        }], polygonComplete: [{
            type: Output
        }], polylineComplete: [{
            type: Output
        }], rectangleComplete: [{
            type: Output
        }], drawingControl: [{
            type: Input
        }], drawingMode: [{
            type: Input
        }], drawingControlOptions: [{
            type: Input
        }], circleOptions: [{
            type: Input
        }], markerOptions: [{
            type: Input
        }], polygonOptions: [{
            type: Input
        }], polylineOptions: [{
            type: Input
        }], rectangleOptions: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2luZy1tYW5hZ2VyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9kcmF3aW5nL3NyYy9saWIvZGlyZWN0aXZlcy9kcmF3aW5nLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXdCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUFFLGdCQUFnQixFQUE0QixNQUFNLE1BQU0sQ0FBQzs7QUFNbEUsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBZ0cvQixZQUFvQixLQUFhO0FBQ25DLFFBRHNCLFVBQUssR0FBTCxLQUFLLENBQVE7QUFBQyxRQW5DbEM7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFZLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7QUFDcEUsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVksbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztBQUNwRSxRQUNFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFZLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQTRDLENBQUM7QUFDM0YsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVksb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztBQUN0RSxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBWSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBd0IsQ0FBQztBQUN4RSxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBWSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztBQUMxRSxRQUNVLHVCQUFrQixHQUFtQixFQUFFLENBQUM7QUFDbEQsSUFJRSxDQUFDO0FBQ0gsSUFDRSxNQUFNLENBQUMsR0FBb0I7QUFDN0IsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFP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IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBpc0Rldk1vZGUsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50UGF0dGVybiwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1kcmF3aW5nLW1hbmFnZXInLFxuICBleHBvcnRBczogJ2FnbURyYXdpbmdNYW5hZ2VyJyxcbn0pXG5leHBvcnQgY2xhc3MgQWdtRHJhd2luZ01hbmFnZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveXtcblxuICAvKipcbiAgICogVGhlIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGRyYXdpbmcgY29udHJvbC4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgZHJhd2luZ0NvbnRyb2w6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBEcmF3aW5nTWFuYWdlcidzIGRyYXdpbmcgbW9kZSwgd2hpY2ggZGVmaW5lcyB0aGUgdHlwZSBvZiBvdmVybGF5IHRvIGJlXG4gICAqIGFkZGVkIG9uIHRoZSBtYXAuIEEgZHJhd2luZyBtb2RlIG9mIG51bGwgbWVhbnMgdGhhdCB0aGUgdXNlciBjYW4gaW50ZXJhY3RcbiAgICogd2l0aCB0aGUgbWFwIGFzIG5vcm1hbCwgYW5kIGNsaWNrcyBkbyBub3QgZHJhdyBhbnl0aGluZy5cbiAgICovXG4gIEBJbnB1dCgpIGRyYXdpbmdNb2RlOiBnb29nbGUubWFwcy5kcmF3aW5nLk92ZXJsYXlUeXBlIHwgbnVsbDtcblxuICAvKipcbiAgICogVGhlIGRpc3BsYXkgb3B0aW9ucyBmb3IgdGhlIGRyYXdpbmcgY29udHJvbC5cbiAgICpcbiAgICovXG4gIEBJbnB1dCgpIGRyYXdpbmdDb250cm9sT3B0aW9uczogZ29vZ2xlLm1hcHMuZHJhd2luZy5EcmF3aW5nQ29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgdG8gYXBwbHkgdG8gYW55IG5ldyBjaXJjbGVzIGNyZWF0ZWQgd2l0aCB0aGlzIERyYXdpbmdNYW5hZ2VyLlxuICAgKiBUaGUgYGNlbnRlcmAgYW5kIGByYWRpdXNgIHByb3BlcnRpZXMgYXJlIGlnbm9yZWQsIGFuZCB0aGUgYG1hcGAgcHJvcGVydHkgb2YgYVxuICAgKiBuZXcgY2lyY2xlIGlzIGFsd2F5cyBzZXQgdG8gdGhlIERyYXdpbmdNYW5hZ2VyJ3MgbWFwLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgY2lyY2xlT3B0aW9uczogZ29vZ2xlLm1hcHMuQ2lyY2xlT3B0aW9ucztcblxuICAvKipcbiAgICogT3B0aW9ucyB0byBhcHBseSB0byBhbnkgbmV3IG1hcmtlcnMgY3JlYXRlZCB3aXRoIHRoaXMgRHJhd2luZ01hbmFnZXIuXG4gICAqIFRoZSBgcG9zaXRpb25gIHByb3BlcnR5IGlzIGlnbm9yZWQsIGFuZCB0aGUgYG1hcGAgcHJvcGVydHkgb2YgYSBuZXcgbWFya2VyXG4gICAqIGlzIGFsd2F5cyBzZXQgdG8gdGhlIERyYXdpbmdNYW5hZ2VyJ3MgbWFwLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgbWFya2VyT3B0aW9uczogZ29vZ2xlLm1hcHMuTWFya2VyT3B0aW9ucztcblxuICAvKipcbiAgICogT3B0aW9ucyB0byBhcHBseSB0byBhbnkgbmV3IHBvbHlnb25zIGNyZWF0ZWQgd2l0aCB0aGlzIERyYXdpbmdNYW5hZ2VyLlxuICAgKiBUaGUgYHBhdGhzYCBwcm9wZXJ0eSBpcyBpZ25vcmVkLCBhbmQgdGhlIG1hcCBwcm9wZXJ0eSBvZiBhIG5ldyBwb2x5Z29uIGlzXG4gICAqIGFsd2F5cyBzZXQgdG8gdGhlIERyYXdpbmdNYW5hZ2VyJ3MgbWFwLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgcG9seWdvbk9wdGlvbnM6IGdvb2dsZS5tYXBzLlBvbHlnb25PcHRpb25zO1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIHRvIGFwcGx5IHRvIGFueSBuZXcgcG9seWxpbmVzIGNyZWF0ZWQgd2l0aCB0aGlzIERyYXdpbmdNYW5hZ2VyLlxuICAgKiBUaGUgYHBhdGhgIHByb3BlcnR5IGlzIGlnbm9yZWQsIGFuZCB0aGUgbWFwIHByb3BlcnR5IG9mIGEgbmV3IHBvbHlsaW5lIGlzXG4gICAqIGFsd2F5cyBzZXQgdG8gdGhlIERyYXdpbmdNYW5hZ2VyJ3MgbWFwLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgcG9seWxpbmVPcHRpb25zOiBnb29nbGUubWFwcy5Qb2x5bGluZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgdG8gYXBwbHkgdG8gYW55IG5ldyByZWN0YW5nbGVzIGNyZWF0ZWQgd2l0aCB0aGlzIERyYXdpbmdNYW5hZ2VyLlxuICAgKiBUaGUgYGJvdW5kc2AgcHJvcGVydHkgaXMgaWdub3JlZCwgYW5kIHRoZSBtYXAgcHJvcGVydHkgb2YgYSBuZXcgcmVjdGFuZ2xlXG4gICAqIGlzIGFsd2F5cyBzZXQgdG8gdGhlIERyYXdpbmdNYW5hZ2VyJ3MgbWFwLlxuICAgKlxuICAgKi9cbiAgQElucHV0KCkgcmVjdGFuZ2xlT3B0aW9uczogZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlT3B0aW9ucztcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIGhhcyBmaW5pc2hlZCBkcmF3aW5nIGEgY2lyY2xlLlxuICAgKi9cbiAgQE91dHB1dCgpIGNpcmNsZUNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5DaXJjbGU+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBoYXMgZmluaXNoZWQgZHJhd2luZyBhIG1hcmtlci5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXJrZXJDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTWFya2VyPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgaGFzIGZpbmlzaGVkIGRyYXdpbmcgYW4gb3ZlcmxheSBvZiBhbnlcbiAgICogdHlwZS5cbiAgICovXG4gIEBPdXRwdXQoKSBvdmVybGF5Q29tcGxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLmRyYXdpbmcuT3ZlcmxheUNvbXBsZXRlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBoYXMgZmluaXNoZWQgZHJhd2luZyBhIHBvbHlnb24uXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seWdvbkNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5Z29uPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgaGFzIGZpbmlzaGVkIGRyYXdpbmcgYSBwb2x5bGluZS5cbiAgICovXG4gIEBPdXRwdXQoKSBwb2x5bGluZUNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5bGluZT4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIGhhcyBmaW5pc2hlZCBkcmF3aW5nIGEgcmVjdGFuZ2xlLlxuICAgKi9cbiAgQE91dHB1dCgpIHJlY3RhbmdsZUNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5SZWN0YW5nbGU+KCk7XG5cbiAgcHJpdmF0ZSBldmVudFN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBkcmF3aW5nTWFuYWdlcjogZ29vZ2xlLm1hcHMuZHJhd2luZy5EcmF3aW5nTWFuYWdlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b25lOiBOZ1pvbmUpIHtcbiAgfVxuXG4gIHNldE1hcChtYXA6IGdvb2dsZS5tYXBzLk1hcCkge1xuICAgIGlmICghZ29vZ2xlLm1hcHMuZHJhd2luZyAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IHVzZSBkcmF3aW5nIG1hbmFnZXIgaWYgZHJhd2luZyBsaWJyYXJ5IGlzIG5vdCAnICtcbiAgICAgICAgJ2xvYWRlZC4gVG8gZml4LCBhZGQgbGlicmFyaWVzOiBbXFwnZHJhd2luZ1xcJ10gdG8gdGhlICcgK1xuICAgICAgICAnbGF6eU1hcHNBUElMb2FkZXJDb25maWcgeW91IHBhc3NlZCB0byBBZ21Db3JlTW9kdWxlLmZvclJvb3QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1hcCAmJiAhdGhpcy5kcmF3aW5nTWFuYWdlcikge1xuICAgICAgdGhpcy5kcmF3aW5nTWFuYWdlciA9IG5ldyBnb29nbGUubWFwcy5kcmF3aW5nLkRyYXdpbmdNYW5hZ2VyKHtcbiAgICAgICAgICBtYXAsXG4gICAgICAgICAgY2lyY2xlT3B0aW9uczogdGhpcy5jaXJjbGVPcHRpb25zLFxuICAgICAgICAgIG1hcmtlck9wdGlvbnM6IHRoaXMubWFya2VyT3B0aW9ucyxcbiAgICAgICAgICBwb2x5Z29uT3B0aW9uczogdGhpcy5wb2x5Z29uT3B0aW9ucyxcbiAgICAgICAgICBwb2x5bGluZU9wdGlvbnM6IHRoaXMucG9seWxpbmVPcHRpb25zLFxuICAgICAgICAgIHJlY3RhbmdsZU9wdGlvbnM6IHRoaXMucmVjdGFuZ2xlT3B0aW9ucyxcbiAgICAgICAgICBkcmF3aW5nQ29udHJvbDogdGhpcy5kcmF3aW5nQ29udHJvbCxcbiAgICAgICAgICBkcmF3aW5nQ29udHJvbE9wdGlvbnM6IHRoaXMuZHJhd2luZ0NvbnRyb2xPcHRpb25zLFxuICAgICAgICAgIGRyYXdpbmdNb2RlOiB0aGlzLmRyYXdpbmdNb2RlLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmluaXRFdmVudHModGhpcy5kcmF3aW5nTWFuYWdlcik7XG4gICAgfSBlbHNlIGlmICghbWFwICYmIHRoaXMuZHJhd2luZ01hbmFnZXIpIHtcbiAgICAgIHRoaXMuZHJhd2luZ01hbmFnZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cbiAgICAvLyBlbHNlIGRvIG5vdGhpbmdcbiAgfVxuXG4gIGluaXRFdmVudHMoZHJhd2luZ01hbmFnZXI6IGdvb2dsZS5tYXBzLmRyYXdpbmcuRHJhd2luZ01hbmFnZXIpIHtcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jcmVhdGVNdmNPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLkNpcmNsZT4oJ2NpcmNsZWNvbXBsZXRlJywgZHJhd2luZ01hbmFnZXIpXG4gICAgICAuc3Vic2NyaWJlKGNpcmNsZSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLmNpcmNsZUNvbXBsZXRlLm5leHQoY2lyY2xlKSkpXG4gICAgKTtcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jcmVhdGVNdmNPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLk1hcmtlcj4oJ21hcmtlcmNvbXBsZXRlJywgZHJhd2luZ01hbmFnZXIpXG4gICAgICAuc3Vic2NyaWJlKG1hcmtlciA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLm1hcmtlckNvbXBsZXRlLm5leHQobWFya2VyKSkpXG4gICAgKTtcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jcmVhdGVNdmNPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLlBvbHlnb24+KCdwb2x5Z29uY29tcGxldGUnLCBkcmF3aW5nTWFuYWdlcilcbiAgICAgIC5zdWJzY3JpYmUocG9seWdvbiA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLnBvbHlnb25Db21wbGV0ZS5uZXh0KHBvbHlnb24pKSlcbiAgICApO1xuICAgIHRoaXMuZXZlbnRTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmNyZWF0ZU12Y09ic2VydmFibGU8Z29vZ2xlLm1hcHMuUG9seWxpbmU+KCdwb2x5bGluZWNvbXBsZXRlJywgZHJhd2luZ01hbmFnZXIpXG4gICAgICAuc3Vic2NyaWJlKHBvbHlsaW5lID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IHRoaXMucG9seWxpbmVDb21wbGV0ZS5uZXh0KHBvbHlsaW5lKSkpXG4gICAgKTtcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jcmVhdGVNdmNPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLmRyYXdpbmcuT3ZlcmxheUNvbXBsZXRlRXZlbnQ+KCdvdmVybGF5Y29tcGxldGUnLCBkcmF3aW5nTWFuYWdlcilcbiAgICAgIC5zdWJzY3JpYmUob3ZlcmxheWV2ZW50ID0+IHRoaXMuX3pvbmUucnVuKCgpID0+IHRoaXMub3ZlcmxheUNvbXBsZXRlLm5leHQob3ZlcmxheWV2ZW50KSkpXG4gICAgKTtcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jcmVhdGVNdmNPYnNlcnZhYmxlPGdvb2dsZS5tYXBzLlJlY3RhbmdsZT4oJ3JlY3RhbmdsZWNvbXBsZXRlJywgZHJhd2luZ01hbmFnZXIpXG4gICAgICAuc3Vic2NyaWJlKHJlY3RhbmdsZSA9PiB0aGlzLl96b25lLnJ1bigoKSA9PiB0aGlzLnJlY3RhbmdsZUNvbXBsZXRlLm5leHQocmVjdGFuZ2xlKSkpXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZU12Y09ic2VydmFibGU8RT4oZXZlbnROYW1lOiBzdHJpbmcsIG12Y09iamVjdDogZ29vZ2xlLm1hcHMuTVZDT2JqZWN0KTogT2JzZXJ2YWJsZTxFPiB7XG4gICAgcmV0dXJuIGZyb21FdmVudFBhdHRlcm4oXG4gICAgICBoYW5kbGVyID0+IG12Y09iamVjdC5hZGRMaXN0ZW5lcihldmVudE5hbWUsXG4gICAgICAgIChldmVudD86IEUpID0+IGhhbmRsZXIuYXBwbHkobnVsbCwgW2V2ZW50XSkpLFxuICAgICAgKF9oYW5kbGVyLCBldkxpc3RlbmVyOiBnb29nbGUubWFwcy5NYXBzRXZlbnRMaXN0ZW5lcikgPT4gZXZMaXN0ZW5lci5yZW1vdmUoKVxuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRyYXdpbmdNYW5hZ2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpXG4gICAgLm1hcCgoW3Byb3AsIGNoYW5nZV0pID0+IFtwcm9wLCBjaGFuZ2UuY3VycmVudFZhbHVlXSlcbiAgICAucmVkdWNlKChvYmo6IGFueSwgW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiB7XG4gICAgICBvYmpbcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LCB7fSk7XG4gICAgdGhpcy5kcmF3aW5nTWFuYWdlci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbn1cbiJdfQ==