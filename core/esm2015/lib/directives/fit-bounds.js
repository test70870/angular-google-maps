import { Directive, Input, Self } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { FitBoundsAccessor, FitBoundsService } from '../services/fit-bounds';
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../services/fit-bounds';
export class AgmFitBounds {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new Subject();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    ngOnChanges() {
        this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(distinctUntilChanged((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), takeUntil(this._destroyed$))
            .subscribe(details => this._updateBounds(details));
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */
    _updateBounds(newFitBoundsDetails) {
        // either visibility will change, or location, so remove the old one anyway
        if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here
        }
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    }
}
AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) { return new (t || AgmFitBounds)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FitBoundsAccessor, 2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FitBoundsService)); };
AgmFitBounds.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmFitBounds, selectors: [["", "agmFitBounds", ""]], inputs: { agmFitBounds: "agmFitBounds" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
AgmFitBounds.ctorParameters = () => [
    { type: FitBoundsAccessor, decorators: [{ type: Self }] },
    { type: FitBoundsService }
];
AgmFitBounds.propDecorators = {
    agmFitBounds: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmFitBounds, [{
        type: Directive,
        args: [{
                selector: '[agmFitBounds]'
            }]
    }], function () { return [{ type: ɵngcc1.FitBoundsAccessor, decorators: [{
                type: Self
            }] }, { type: ɵngcc1.FitBoundsService }]; }, { agmFitBounds: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml0LWJvdW5kcy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvZml0LWJvdW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0MsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBSUgsTUFBTSxPQUFPLFlBQVk7QUFBRyxJQVUxQixZQUMyQixrQkFBcUMsRUFDN0MsaUJBQW1DO0FBQ3RELFFBRjJCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7QUFBQyxRQUM5QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0FBQUMsUUFYdkQ7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQVcsaUJBQVksR0FBRyxJQUFJLENBQUM7QUFDL0IsUUFDVSxnQkFBVyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQzNELFFBQVUsNEJBQXVCLEdBQTRCLElBQUksQ0FBQztBQUNsRSxJQUlLLENBQUM7QUFDTixJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxXQUFXO0FBQ2IsUUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLGtCQUFrQjtBQUMzQixhQUFPLG9CQUFvQixFQUFFO0FBQzdCLGFBQU8sSUFBSSxDQUNILG9CQUFvQixDQUNsQixDQUFDLENBQW1CLEVBQUUsQ0FBbUIsRUFBRSxFQUFFLENBQzNDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUNqRSxFQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzVCO0FBQ1AsYUFBTyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDekQsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFFSCxNQUREO0FBQ0osSUFBVSxhQUFhLENBQUMsbUJBQXNDO0FBQzlELFFBQUksMkVBQTJFO0FBQy9FLFFBQUksSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7QUFDdEMsWUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25GLFlBQU0sa0ZBQWtGO0FBQ3hGLFlBQU0sMkVBQTJFO0FBQ2pGLFNBQUs7QUFDTCxRQUNJLElBQUksbUJBQW1CLEVBQUU7QUFDN0IsWUFBTSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsbUJBQW1CLENBQUM7QUFDekQsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtBQUN2QyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO0FBQ3BDLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUUsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLFdBQVc7QUFDYixRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDNUIsUUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2hDLFFBQUksSUFBSSxJQUFJLENBQUMsdUJBQXVCLEtBQUssSUFBSSxFQUFFO0FBQy9DLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7d0NBN0VDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCLGVBQzNCOzZNQUNJO0FBQUM7QUFBc0MsWUFYbkMsaUJBQWlCLHVCQXNCckIsSUFBSTtBQUFPLFlBdEI4QixnQkFBZ0I7QUFBRztBQUFHO0FBRWpFLDJCQWNBLEtBQUs7QUFBSTs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRml0Qm91bmRzQWNjZXNzb3IsIEZpdEJvdW5kc0RldGFpbHMsIEZpdEJvdW5kc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maXQtYm91bmRzJztcblxuLyoqXG4gKiBBZGRzIHRoZSBnaXZlbiBkaXJlY3RpdmUgdG8gdGhlIGF1dG8gZml0IGJvdW5kcyBmZWF0dXJlIHdoZW4gdGhlIHZhbHVlIGlzIHRydWUuXG4gKiBUbyBtYWtlIGl0IHdvcmsgd2l0aCB5b3UgY3VzdG9tIEFHTSBjb21wb25lbnQsIHlvdSBhbHNvIGhhdmUgdG8gaW1wbGVtZW50IHRoZSB7QGxpbmsgRml0Qm91bmRzQWNjZXNzb3J9IGFic3RyYWN0IGNsYXNzLlxuICogQGV4YW1wbGVcbiAqIDxhZ20tbWFya2VyIFthZ21GaXRCb3VuZHNdPVwidHJ1ZVwiPjwvYWdtLW1hcmtlcj5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FnbUZpdEJvdW5kc10nLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21GaXRCb3VuZHMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIElmIHRoZSB2YWx1ZSBpcyB0cnVlLCB0aGUgZWxlbWVudCBnZXRzIGFkZGVkIHRvIHRoZSBib3VuZHMgb2YgdGhlIG1hcC5cbiAgICogRGVmYXVsdDogdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIGFnbUZpdEJvdW5kcyA9IHRydWU7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2xhdGVzdEZpdEJvdW5kc0RldGFpbHM6IEZpdEJvdW5kc0RldGFpbHMgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIHByaXZhdGUgcmVhZG9ubHkgX2ZpdEJvdW5kc0FjY2Vzc29yOiBGaXRCb3VuZHNBY2Nlc3NvcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9maXRCb3VuZHNTZXJ2aWNlOiBGaXRCb3VuZHNTZXJ2aWNlLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlQm91bmRzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9maXRCb3VuZHNBY2Nlc3NvclxuICAgICAgLmdldEZpdEJvdW5kc0RldGFpbHMkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChcbiAgICAgICAgICAoeDogRml0Qm91bmRzRGV0YWlscywgeTogRml0Qm91bmRzRGV0YWlscykgPT5cbiAgICAgICAgICAgIHgubGF0TG5nLmxhdCA9PT0geS5sYXRMbmcubGF0ICYmIHgubGF0TG5nLmxuZyA9PT0geS5sYXRMbmcubG5nLFxuICAgICAgICApLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkJCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGRldGFpbHMgPT4gdGhpcy5fdXBkYXRlQm91bmRzKGRldGFpbHMpKTtcbiAgfVxuXG4gIC8qXG4gICBFaXRoZXIgdGhlIGxvY2F0aW9uIGNoYW5nZWQsIG9yIHZpc2libGUgc3RhdHVzIGNoYW5nZWQuXG4gICBQb3NzaWJsZSBzdGF0ZSBjaGFuZ2VzIGFyZVxuICAgaW52aXNpYmxlIC0+IHZpc2libGVcbiAgIHZpc2libGUgLT4gaW52aXNpYmxlXG4gICB2aXNpYmxlIC0+IHZpc2libGUgKG5ldyBsb2NhdGlvbilcbiAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlQm91bmRzKG5ld0ZpdEJvdW5kc0RldGFpbHM/OiBGaXRCb3VuZHNEZXRhaWxzKSB7XG4gICAgLy8gZWl0aGVyIHZpc2liaWxpdHkgd2lsbCBjaGFuZ2UsIG9yIGxvY2F0aW9uLCBzbyByZW1vdmUgdGhlIG9sZCBvbmUgYW55d2F5XG4gICAgaWYgKHRoaXMuX2xhdGVzdEZpdEJvdW5kc0RldGFpbHMpIHtcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1NlcnZpY2UucmVtb3ZlRnJvbUJvdW5kcyh0aGlzLl9sYXRlc3RGaXRCb3VuZHNEZXRhaWxzLmxhdExuZyk7XG4gICAgICAvLyBkb24ndCBzZXQgbGF0ZXN0Rml0Qm91bmRzRGV0YWlscyB0byBudWxsLCBiZWNhdXNlIHdlIGNhbiB0b2dnbGUgdmlzaWJpbGl0eSBmcm9tXG4gICAgICAvLyB0cnVlIC0+IGZhbHNlIC0+IHRydWUsIGluIHdoaWNoIGNhc2Ugd2Ugc3RpbGwgbmVlZCBvbGQgdmFsdWUgY2FjaGVkIGhlcmVcbiAgICB9XG5cbiAgICBpZiAobmV3Rml0Qm91bmRzRGV0YWlscykge1xuICAgICAgdGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscyA9IG5ld0ZpdEJvdW5kc0RldGFpbHM7XG4gICAgfVxuICAgIGlmICghdGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5hZ21GaXRCb3VuZHMgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2ZpdEJvdW5kc1NlcnZpY2UuYWRkVG9Cb3VuZHModGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscy5sYXRMbmcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgICBpZiAodGhpcy5fbGF0ZXN0Rml0Qm91bmRzRGV0YWlscyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZml0Qm91bmRzU2VydmljZS5yZW1vdmVGcm9tQm91bmRzKHRoaXMuX2xhdGVzdEZpdEJvdW5kc0RldGFpbHMubGF0TG5nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==