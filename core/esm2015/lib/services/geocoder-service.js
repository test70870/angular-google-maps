import { Injectable } from '@angular/core';
import { bindCallback, Observable, of, ReplaySubject, throwError } from 'rxjs';
import { map, multicast, switchMap } from 'rxjs/operators';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import * as i0 from "@angular/core";
import * as i1 from "./maps-api-loader/maps-api-loader";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './maps-api-loader/maps-api-loader';
export class AgmGeocoder {
    constructor(loader) {
        const connectableGeocoder$ = new Observable(subscriber => {
            loader.load().then(() => subscriber.next());
        })
            .pipe(map(() => this._createGeocoder()), multicast(new ReplaySubject(1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits
        this.geocoder$ = connectableGeocoder$;
    }
    geocode(request) {
        return this.geocoder$.pipe(switchMap((geocoder) => this._getGoogleResults(geocoder, request)));
    }
    _getGoogleResults(geocoder, request) {
        const geocodeObservable = bindCallback(geocoder.geocode);
        return geocodeObservable(request).pipe(switchMap(([results, status]) => {
            if (status === google.maps.GeocoderStatus.OK) {
                return of(results);
            }
            return throwError(status);
        }));
    }
    _createGeocoder() {
        return new google.maps.Geocoder();
    }
}
AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) { return new (t || AgmGeocoder)(ɵngcc0.ɵɵinject(ɵngcc1.MapsAPILoader)); };
AgmGeocoder.ɵprov = i0.ɵɵdefineInjectable({ factory: function AgmGeocoder_Factory() { return new AgmGeocoder(i0.ɵɵinject(i1.MapsAPILoader)); }, token: AgmGeocoder, providedIn: "root" });
AgmGeocoder.ctorParameters = () => [
    { type: MapsAPILoader }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmGeocoder, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.MapsAPILoader }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvY29kZXItc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL2dlb2NvZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUF5QixVQUFVLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFO0FBRUE7OztBQUFBLE1BQU0sT0FBTyxXQUFXO0FBQ3hCLElBRUUsWUFBWSxNQUFxQjtBQUNuQyxRQUFJLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDN0QsWUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELFFBQUksQ0FBQyxDQUFDO0FBQ04sYUFBTyxJQUFJLENBQ0gsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUNqQyxTQUFTLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDZSxDQUFDO0FBQ3ZELFFBQ0ksb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQywwQkFBMEI7QUFDOUQsUUFBSSx5REFBeUQ7QUFDN0QsUUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO0FBQzFDLElBQUUsQ0FBQztBQUNILElBQ0UsT0FBTyxDQUFDLE9BQW9DO0FBQUksUUFDOUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQ25FLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNVLGlCQUFpQixDQUFDLFFBQThCLEVBQUUsT0FBb0M7QUFDL0YsUUFDRyxNQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0QsUUFBSSxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDcEMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRTtBQUN0QyxZQUFRLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRTtBQUN0RCxnQkFBVSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixhQUFTO0FBQ1QsWUFDUSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQyxRQUFNLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNVLGVBQWU7QUFDekIsUUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN0QyxJQUFFLENBQUM7QUFDSDs2SEFBQztBQUNELDBMQTFDSztBQUFDO0VBREwsVUFBVSxTQUFDLEVBQUUsdkJBRUUsWUFKUCxhQUFhO0FBQUc7RUFFRCxFQUFFLE1BQU0sRUFBRTs7OzhFQUZQO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiaW5kQ2FsbGJhY2ssIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIFJlcGxheVN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbXVsdGljYXN0LCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXBzQVBJTG9hZGVyIH0gZnJvbSAnLi9tYXBzLWFwaS1sb2FkZXIvbWFwcy1hcGktbG9hZGVyJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBZ21HZW9jb2RlciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBnZW9jb2RlciQ6IE9ic2VydmFibGU8Z29vZ2xlLm1hcHMuR2VvY29kZXI+O1xuXG4gIGNvbnN0cnVjdG9yKGxvYWRlcjogTWFwc0FQSUxvYWRlcikge1xuICAgIGNvbnN0IGNvbm5lY3RhYmxlR2VvY29kZXIkID0gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XG4gICAgICBsb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4gc3Vic2NyaWJlci5uZXh0KCkpO1xuICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHRoaXMuX2NyZWF0ZUdlb2NvZGVyKCkpLFxuICAgICAgICBtdWx0aWNhc3QobmV3IFJlcGxheVN1YmplY3QoMSkpLFxuICAgICAgKSBhcyBDb25uZWN0YWJsZU9ic2VydmFibGU8Z29vZ2xlLm1hcHMuR2VvY29kZXI+O1xuXG4gICAgY29ubmVjdGFibGVHZW9jb2RlciQuY29ubmVjdCgpOyAvLyBpZ25vcmUgdGhlIHN1YnNjcmlwdGlvblxuICAgIC8vIHNpbmNlIHdlIHdpbGwgcmVtYWluIHN1YnNjcmliZWQgdGlsbCBhcHBsaWNhdGlvbiBleGl0c1xuXG4gICAgdGhpcy5nZW9jb2RlciQgPSBjb25uZWN0YWJsZUdlb2NvZGVyJDtcbiAgfVxuXG4gIGdlb2NvZGUocmVxdWVzdDogZ29vZ2xlLm1hcHMuR2VvY29kZXJSZXF1ZXN0KTogT2JzZXJ2YWJsZTxnb29nbGUubWFwcy5HZW9jb2RlclJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2VvY29kZXIkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGdlb2NvZGVyKSA9PiB0aGlzLl9nZXRHb29nbGVSZXN1bHRzKGdlb2NvZGVyLCByZXF1ZXN0KSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0R29vZ2xlUmVzdWx0cyhnZW9jb2RlcjogZ29vZ2xlLm1hcHMuR2VvY29kZXIsIHJlcXVlc3Q6IGdvb2dsZS5tYXBzLkdlb2NvZGVyUmVxdWVzdCk6XG4gICAgICAgT2JzZXJ2YWJsZTxnb29nbGUubWFwcy5HZW9jb2RlclJlc3VsdFtdPiB7XG4gICAgY29uc3QgZ2VvY29kZU9ic2VydmFibGUgPSBiaW5kQ2FsbGJhY2soZ2VvY29kZXIuZ2VvY29kZSk7XG4gICAgcmV0dXJuIGdlb2NvZGVPYnNlcnZhYmxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKFtyZXN1bHRzLCBzdGF0dXNdKSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkdlb2NvZGVyU3RhdHVzLk9LKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3Ioc3RhdHVzKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUdlb2NvZGVyKCkge1xuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgfVxufVxuIl19