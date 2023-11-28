import { Directive, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FitBoundsAccessor } from '../services/fit-bounds';
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
import * as ɵngcc0 from '@angular/core';
export class AgmPolylinePoint {
    constructor() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this.positionChanged.emit({
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude,
            });
        }
        // tslint:enable: no-string-literal
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this.positionChanged.pipe(startWith({ lat: this.latitude, lng: this.longitude }), map(position => ({ latLng: position })));
    }
}
AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) { return new (t || AgmPolylinePoint)(); };
AgmPolylinePoint.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmPolylinePoint, selectors: [["agm-polyline-point"]], inputs: { latitude: "latitude", longitude: "longitude" }, outputs: { positionChanged: "positionChanged" }, features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmPolylinePoint) },
        ]), ɵngcc0.ɵɵNgOnChangesFeature] });
AgmPolylinePoint.ctorParameters = () => [];
AgmPolylinePoint.propDecorators = {
    latitude: [{ type: Input }],
    longitude: [{ type: Input }],
    positionChanged: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmPolylinePoint, [{
        type: Directive,
        args: [{
                selector: 'agm-polyline-point',
                providers: [
                    { provide: FitBoundsAccessor, useExisting: forwardRef(() => AgmPolylinePoint) },
                ]
            }]
    }], function () { return []; }, { positionChanged: [{
            type: Output
        }], latitude: [{
            type: Input
        }], longitude: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtcG9pbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9kaXJlY3RpdmVzL3BvbHlsaW5lLXBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQU9ILE1BQU0sT0FBTyxnQkFBZ0I7QUFBRyxJQWdCOUI7QUFBZ0IsUUFMaEI7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFZLG9CQUFlLEdBQTRDLElBQUksWUFBWSxFQUE2QixDQUFDO0FBQ3JILElBQ2lCLENBQUM7QUFDbEIsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFBSSxRQUNwQyxvQ0FBb0M7QUFDeEMsUUFBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDckQsWUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztBQUNoQyxnQkFBUSxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtBQUNuRixnQkFBUSxHQUFHLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztBQUN0RixhQUFPLENBQUMsQ0FBQztBQUNULFNBQUs7QUFDTCxRQUFJLG1DQUFtQztBQUN2QyxJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQjtBQUNsQixJQUFFLG9CQUFvQjtBQUFLLFFBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQzlCLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsRUFDcEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQ3RDLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSDs0Q0ExQ0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtNQUFvQixrQkFDOUIsU0FBUyxFQUFFLHNCQUNULEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxtQkFDOUUsZUFDRjs7NENBQ0k7QUFBQztBQUE0QztBQUUxQyx1QkFFTCxLQUFLO0FBQUssd0JBS1YsS0FBSztBQUFLLDhCQUtWLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZpdEJvdW5kc0FjY2Vzc29yLCBGaXRCb3VuZHNEZXRhaWxzIH0gZnJvbSAnLi4vc2VydmljZXMvZml0LWJvdW5kcyc7XG5cbi8qKlxuICogQWdtUG9seWxpbmVQb2ludCByZXByZXNlbnRzIG9uZSBlbGVtZW50IG9mIGEgcG9seWxpbmUgd2l0aGluIGEgIHtAbGlua1xuICogQWdtUG9seWxpbmV9XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1wb2x5bGluZS1wb2ludCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBGaXRCb3VuZHNBY2Nlc3NvciwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQWdtUG9seWxpbmVQb2ludCl9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21Qb2x5bGluZVBvaW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBGaXRCb3VuZHNBY2Nlc3NvciB7XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIHBvaW50LlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGxhdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBsb25naXR1ZGUgcG9zaXRpb24gb2YgdGhlIHBvaW50O1xuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHBvc2l0aW9uIG9mIHRoZSBwb2ludCBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvc2l0aW9uQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYW55IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICBpZiAoY2hhbmdlc1snbGF0aXR1ZGUnXSB8fCBjaGFuZ2VzWydsb25naXR1ZGUnXSkge1xuICAgICAgdGhpcy5wb3NpdGlvbkNoYW5nZWQuZW1pdCh7XG4gICAgICAgIGxhdDogY2hhbmdlc1snbGF0aXR1ZGUnXSA/IGNoYW5nZXNbJ2xhdGl0dWRlJ10uY3VycmVudFZhbHVlIDogdGhpcy5sYXRpdHVkZSxcbiAgICAgICAgbG5nOiBjaGFuZ2VzWydsb25naXR1ZGUnXSA/IGNoYW5nZXNbJ2xvbmdpdHVkZSddLmN1cnJlbnRWYWx1ZSA6IHRoaXMubG9uZ2l0dWRlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRzbGludDplbmFibGU6IG5vLXN0cmluZy1saXRlcmFsXG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGdldEZpdEJvdW5kc0RldGFpbHMkKCk6IE9ic2VydmFibGU8Rml0Qm91bmRzRGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uQ2hhbmdlZC5waXBlKFxuICAgICAgc3RhcnRXaXRoKHtsYXQ6IHRoaXMubGF0aXR1ZGUsIGxuZzogdGhpcy5sb25naXR1ZGV9KSxcbiAgICAgIG1hcChwb3NpdGlvbiA9PiAoe2xhdExuZzogcG9zaXRpb259KSlcbiAgICApO1xuICB9XG59XG4iXX0=