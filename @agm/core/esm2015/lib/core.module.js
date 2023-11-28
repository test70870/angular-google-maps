import { NgModule } from '@angular/core';
import { AgmBicyclingLayer } from './directives/bicycling-layer';
import { AgmCircle } from './directives/circle';
import { AgmDataLayer } from './directives/data-layer';
import { AgmFitBounds } from './directives/fit-bounds';
import { AgmInfoWindow } from './directives/info-window';
import { AgmKmlLayer } from './directives/kml-layer';
import { AgmFullscreenControl, AgmMap, AgmMapTypeControl, AgmPanControl, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmZoomControl } from './directives/map';
import { AgmMarker } from './directives/marker';
import { AgmPolygon } from './directives/polygon';
import { AgmPolyline } from './directives/polyline';
import { AgmPolylineIcon } from './directives/polyline-icon';
import { AgmPolylinePoint } from './directives/polyline-point';
import { AgmRectangle } from './directives/rectangle';
import { AgmTransitLayer } from './directives/transit-layer';
import { LazyMapsAPILoader, LAZY_MAPS_API_CONFIG } from './services/maps-api-loader/lazy-maps-api-loader';
import { MapsAPILoader } from './services/maps-api-loader/maps-api-loader';
import { BROWSER_GLOBALS_PROVIDERS } from './utils/browser-globals';
/**
 * @internal
 */
import * as ɵngcc0 from '@angular/core';
export function coreDirectives() {
    return [
        AgmBicyclingLayer,
        AgmCircle,
        AgmDataLayer,
        AgmFitBounds,
        AgmFullscreenControl,
        AgmInfoWindow,
        AgmKmlLayer,
        AgmMap,
        AgmMapTypeControl,
        AgmMarker,
        AgmPanControl,
        AgmPolygon,
        AgmPolyline,
        AgmPolylineIcon,
        AgmPolylinePoint,
        AgmRectangle,
        AgmRotateControl,
        AgmScaleControl,
        AgmStreetViewControl,
        AgmTransitLayer,
        AgmZoomControl,
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
export class AgmCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: [
                ...BROWSER_GLOBALS_PROVIDERS, { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig },
            ],
        };
    }
}
AgmCoreModule.ɵfac = function AgmCoreModule_Factory(t) { return new (t || AgmCoreModule)(); };
AgmCoreModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: AgmCoreModule });
AgmCoreModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmCoreModule, [{
        type: NgModule,
        args: [{ declarations: coreDirectives(), exports: coreDirectives() }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AgmCoreModule, { declarations: [AgmBicyclingLayer,
        AgmCircle,
        AgmDataLayer,
        AgmFitBounds,
        AgmFullscreenControl,
        AgmInfoWindow,
        AgmKmlLayer,
        AgmMap,
        AgmMapTypeControl,
        AgmMarker,
        AgmPanControl,
        AgmPolygon,
        AgmPolyline,
        AgmPolylineIcon,
        AgmPolylinePoint,
        AgmRectangle,
        AgmRotateControl,
        AgmScaleControl,
        AgmStreetViewControl,
        AgmTransitLayer,
        AgmZoomControl], exports: [AgmBicyclingLayer,
        AgmCircle,
        AgmDataLayer,
        AgmFitBounds,
        AgmFullscreenControl,
        AgmInfoWindow,
        AgmKmlLayer,
        AgmMap,
        AgmMapTypeControl,
        AgmMarker,
        AgmPanControl,
        AgmPolygon,
        AgmPolyline,
        AgmPolylineIcon,
        AgmPolylinePoint,
        AgmRectangle,
        AgmRotateControl,
        AgmScaleControl,
        AgmStreetViewControl,
        AgmTransitLayer,
        AgmZoomControl] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzSyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQWtDLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDMUksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXBFO0FBQ0E7QUFDQSxHQUFHOztBQUNILE1BQU0sVUFBVSxjQUFjO0FBQzlCLElBQUUsT0FBTztBQUNULFFBQUksaUJBQWlCO0FBQ3JCLFFBQUksU0FBUztBQUNiLFFBQUksWUFBWTtBQUNoQixRQUFJLFlBQVk7QUFDaEIsUUFBSSxvQkFBb0I7QUFDeEIsUUFBSSxhQUFhO0FBQ2pCLFFBQUksV0FBVztBQUNmLFFBQUksTUFBTTtBQUNWLFFBQUksaUJBQWlCO0FBQ3JCLFFBQUksU0FBUztBQUNiLFFBQUksYUFBYTtBQUNqQixRQUFJLFVBQVU7QUFDZCxRQUFJLFdBQVc7QUFDZixRQUFJLGVBQWU7QUFDbkIsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxZQUFZO0FBQ2hCLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksZUFBZTtBQUNuQixRQUFJLG9CQUFvQjtBQUN4QixRQUFJLGVBQWU7QUFDbkIsUUFBSSxjQUFjO0FBQ2xCLEtBQUcsQ0FBQztBQUNKLENBQUM7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsTUFBTSxPQUFPLGFBQWE7QUFDMUIsSUFBRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBd0Q7QUFBSSxRQUN6RSxPQUFPO0FBQ1gsWUFBTSxRQUFRLEVBQUUsYUFBYTtBQUM3QixZQUFNLFNBQVMsRUFBRTtBQUNqQixnQkFBUSxHQUFHLHlCQUF5QixFQUFFLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUM7QUFDM0YsZ0JBQVEsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO0FBQzFFLGFBQU87QUFDUCxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSDt5Q0FkQyxRQUFRLFNBQUMsRUFBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUU7SUFBTyxFQUFFLGNBQWMsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUNoRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdtQmljeWNsaW5nTGF5ZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYmljeWNsaW5nLWxheWVyJztcbmltcG9ydCB7IEFnbUNpcmNsZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9jaXJjbGUnO1xuaW1wb3J0IHsgQWdtRGF0YUxheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtbGF5ZXInO1xuaW1wb3J0IHsgQWdtRml0Qm91bmRzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpdC1ib3VuZHMnO1xuaW1wb3J0IHsgQWdtSW5mb1dpbmRvdyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmZvLXdpbmRvdyc7XG5pbXBvcnQgeyBBZ21LbWxMYXllciB9IGZyb20gJy4vZGlyZWN0aXZlcy9rbWwtbGF5ZXInO1xuaW1wb3J0IHsgQWdtRnVsbHNjcmVlbkNvbnRyb2wsIEFnbU1hcCwgQWdtTWFwVHlwZUNvbnRyb2wsIEFnbVBhbkNvbnRyb2wsIEFnbVJvdGF0ZUNvbnRyb2wsIEFnbVNjYWxlQ29udHJvbCwgQWdtU3RyZWV0Vmlld0NvbnRyb2wsIEFnbVpvb21Db250cm9sIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hcCc7XG5pbXBvcnQgeyBBZ21NYXJrZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWFya2VyJztcbmltcG9ydCB7IEFnbVBvbHlnb24gfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWdvbic7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wb2x5bGluZSc7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZUljb24gfSBmcm9tICcuL2RpcmVjdGl2ZXMvcG9seWxpbmUtaWNvbic7XG5pbXBvcnQgeyBBZ21Qb2x5bGluZVBvaW50IH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BvbHlsaW5lLXBvaW50JztcbmltcG9ydCB7IEFnbVJlY3RhbmdsZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgQWdtVHJhbnNpdExheWVyIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyYW5zaXQtbGF5ZXInO1xuXG5pbXBvcnQgeyBMYXp5TWFwc0FQSUxvYWRlciwgTGF6eU1hcHNBUElMb2FkZXJDb25maWdMaXRlcmFsLCBMQVpZX01BUFNfQVBJX0NPTkZJRyB9IGZyb20gJy4vc2VydmljZXMvbWFwcy1hcGktbG9hZGVyL2xhenktbWFwcy1hcGktbG9hZGVyJztcbmltcG9ydCB7IE1hcHNBUElMb2FkZXIgfSBmcm9tICcuL3NlcnZpY2VzL21hcHMtYXBpLWxvYWRlci9tYXBzLWFwaS1sb2FkZXInO1xuXG5pbXBvcnQgeyBCUk9XU0VSX0dMT0JBTFNfUFJPVklERVJTIH0gZnJvbSAnLi91dGlscy9icm93c2VyLWdsb2JhbHMnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29yZURpcmVjdGl2ZXMoKSB7XG4gIHJldHVybiBbXG4gICAgQWdtQmljeWNsaW5nTGF5ZXIsXG4gICAgQWdtQ2lyY2xlLFxuICAgIEFnbURhdGFMYXllcixcbiAgICBBZ21GaXRCb3VuZHMsXG4gICAgQWdtRnVsbHNjcmVlbkNvbnRyb2wsXG4gICAgQWdtSW5mb1dpbmRvdyxcbiAgICBBZ21LbWxMYXllcixcbiAgICBBZ21NYXAsXG4gICAgQWdtTWFwVHlwZUNvbnRyb2wsXG4gICAgQWdtTWFya2VyLFxuICAgIEFnbVBhbkNvbnRyb2wsXG4gICAgQWdtUG9seWdvbixcbiAgICBBZ21Qb2x5bGluZSxcbiAgICBBZ21Qb2x5bGluZUljb24sXG4gICAgQWdtUG9seWxpbmVQb2ludCxcbiAgICBBZ21SZWN0YW5nbGUsXG4gICAgQWdtUm90YXRlQ29udHJvbCxcbiAgICBBZ21TY2FsZUNvbnRyb2wsXG4gICAgQWdtU3RyZWV0Vmlld0NvbnRyb2wsXG4gICAgQWdtVHJhbnNpdExheWVyLFxuICAgIEFnbVpvb21Db250cm9sLFxuICBdO1xufVxuXG4vKipcbiAqIFRoZSBhbmd1bGFyLWdvb2dsZS1tYXBzIGNvcmUgbW9kdWxlLiBDb250YWlucyBhbGwgRGlyZWN0aXZlcy9TZXJ2aWNlcy9QaXBlc1xuICogb2YgdGhlIGNvcmUgbW9kdWxlLiBQbGVhc2UgdXNlIGBBZ21Db3JlTW9kdWxlLmZvclJvb3QoKWAgaW4geW91ciBhcHAgbW9kdWxlLlxuICovXG5ATmdNb2R1bGUoe2RlY2xhcmF0aW9uczogY29yZURpcmVjdGl2ZXMoKSwgZXhwb3J0czogY29yZURpcmVjdGl2ZXMoKX0pXG5leHBvcnQgY2xhc3MgQWdtQ29yZU1vZHVsZSB7XG4gIC8qKlxuICAgKiBQbGVhc2UgdXNlIHRoaXMgbWV0aG9kIHdoZW4geW91IHJlZ2lzdGVyIHRoZSBtb2R1bGUgYXQgdGhlIHJvb3QgbGV2ZWwuXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChsYXp5TWFwc0FQSUxvYWRlckNvbmZpZz86IExhenlNYXBzQVBJTG9hZGVyQ29uZmlnTGl0ZXJhbCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWdtQ29yZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWdtQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5CUk9XU0VSX0dMT0JBTFNfUFJPVklERVJTLCB7cHJvdmlkZTogTWFwc0FQSUxvYWRlciwgdXNlQ2xhc3M6IExhenlNYXBzQVBJTG9hZGVyfSxcbiAgICAgICAge3Byb3ZpZGU6IExBWllfTUFQU19BUElfQ09ORklHLCB1c2VWYWx1ZTogbGF6eU1hcHNBUElMb2FkZXJDb25maWd9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=