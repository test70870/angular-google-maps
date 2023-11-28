import { isPlatformServer } from '@angular/common';
import { Component, ContentChildren, Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Output, PLATFORM_ID } from '@angular/core';
import { FitBoundsService } from '../services/fit-bounds';
import { GoogleMapsAPIWrapper } from '../services/google-maps-api-wrapper';
import { CircleManager } from '../services/managers/circle-manager';
import { InfoWindowManager } from '../services/managers/info-window-manager';
import { LayerManager } from '../services/managers/layer-manager';
import { MarkerManager } from '../services/managers/marker-manager';
import { PolygonManager } from '../services/managers/polygon-manager';
import { PolylineManager } from '../services/managers/polyline-manager';
import { RectangleManager } from '../services/managers/rectangle-manager';
import { DataLayerManager } from './../services/managers/data-layer-manager';
import { KmlLayerManager } from './../services/managers/kml-layer-manager';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../services/google-maps-api-wrapper';
import * as ɵngcc2 from '../services/fit-bounds';

const _c0 = ["*"];
export class AgmMapControl {
}
AgmMapControl.ɵfac = function AgmMapControl_Factory(t) { return new (t || AgmMapControl)(); };
AgmMapControl.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmMapControl, inputs: { position: "position" } });
AgmMapControl.propDecorators = {
    position: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmMapControl, [{
        type: Directive
    }], null, { position: [{
            type: Input
        }] }); })();
export class AgmFullscreenControl extends AgmMapControl {
    getOptions() {
        return {
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmFullscreenControl.ɵfac = /*@__PURE__*/ function () { let ɵAgmFullscreenControl_BaseFactory; return function AgmFullscreenControl_Factory(t) { return (ɵAgmFullscreenControl_BaseFactory || (ɵAgmFullscreenControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AgmFullscreenControl)))(t || AgmFullscreenControl); }; }();
AgmFullscreenControl.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmFullscreenControl, selectors: [["agm-fullscreen-control"]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmFullscreenControl }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmFullscreenControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-fullscreen-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmFullscreenControl }]
            }]
    }], null, null); })();
export class AgmMapTypeControl extends AgmMapControl {
    getOptions() {
        return {
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
                style: this.style && google.maps.MapTypeControlStyle[this.style],
                mapTypeIds: this.mapTypeIds && this.mapTypeIds.map(mapTypeId => google.maps.MapTypeId[mapTypeId]),
            },
        };
    }
}
AgmMapTypeControl.ɵfac = /*@__PURE__*/ function () { let ɵAgmMapTypeControl_BaseFactory; return function AgmMapTypeControl_Factory(t) { return (ɵAgmMapTypeControl_BaseFactory || (ɵAgmMapTypeControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AgmMapTypeControl)))(t || AgmMapTypeControl); }; }();
AgmMapTypeControl.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmMapTypeControl, selectors: [["agm-map-type-control"]], inputs: { mapTypeIds: "mapTypeIds", style: "style" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmMapTypeControl }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
AgmMapTypeControl.propDecorators = {
    mapTypeIds: [{ type: Input }],
    style: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmMapTypeControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-map-type-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmMapTypeControl }]
            }]
    }], null, { mapTypeIds: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
export class AgmPanControl extends AgmMapControl {
    getOptions() {
        return {
            panControl: true,
            panControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmPanControl.ɵfac = /*@__PURE__*/ function () { let ɵAgmPanControl_BaseFactory; return function AgmPanControl_Factory(t) { return (ɵAgmPanControl_BaseFactory || (ɵAgmPanControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AgmPanControl)))(t || AgmPanControl); }; }();
AgmPanControl.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmPanControl, selectors: [["agm-pan-control"]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmPanControl }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmPanControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-pan-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmPanControl }]
            }]
    }], null, null); })();
export class AgmRotateControl extends AgmMapControl {
    getOptions() {
        return {
            rotateControl: true,
            rotateControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmRotateControl.ɵfac = /*@__PURE__*/ function () { let ɵAgmRotateControl_BaseFactory; return function AgmRotateControl_Factory(t) { return (ɵAgmRotateControl_BaseFactory || (ɵAgmRotateControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AgmRotateControl)))(t || AgmRotateControl); }; }();
AgmRotateControl.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmRotateControl, selectors: [["agm-rotate-control"]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmRotateControl }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmRotateControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-rotate-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmRotateControl }]
            }]
    }], null, null); })();
export class AgmScaleControl extends AgmMapControl {
    getOptions() {
        return {
            scaleControl: true,
        };
    }
}
AgmScaleControl.ɵfac = /*@__PURE__*/ function () { let ɵAgmScaleControl_BaseFactory; return function AgmScaleControl_Factory(t) { return (ɵAgmScaleControl_BaseFactory || (ɵAgmScaleControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AgmScaleControl)))(t || AgmScaleControl); }; }();
AgmScaleControl.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmScaleControl, selectors: [["agm-scale-control"]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmScaleControl }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmScaleControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-scale-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmScaleControl }]
            }]
    }], null, null); })();
export class AgmStreetViewControl extends AgmMapControl {
    getOptions() {
        return {
            streetViewControl: true,
            streetViewControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmStreetViewControl.ɵfac = /*@__PURE__*/ function () { let ɵAgmStreetViewControl_BaseFactory; return function AgmStreetViewControl_Factory(t) { return (ɵAgmStreetViewControl_BaseFactory || (ɵAgmStreetViewControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AgmStreetViewControl)))(t || AgmStreetViewControl); }; }();
AgmStreetViewControl.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmStreetViewControl, selectors: [["agm-street-view-control"]], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmStreetViewControl }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmStreetViewControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-street-view-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmStreetViewControl }]
            }]
    }], null, null); })();
export class AgmZoomControl extends AgmMapControl {
    getOptions() {
        return {
            zoomControl: true,
            zoomControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
                style: this.style && google.maps.ZoomControlStyle[this.style],
            },
        };
    }
}
AgmZoomControl.ɵfac = /*@__PURE__*/ function () { let ɵAgmZoomControl_BaseFactory; return function AgmZoomControl_Factory(t) { return (ɵAgmZoomControl_BaseFactory || (ɵAgmZoomControl_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AgmZoomControl)))(t || AgmZoomControl); }; }();
AgmZoomControl.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmZoomControl, selectors: [["agm-zoom-control"]], inputs: { style: "style" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: AgmMapControl, useExisting: AgmZoomControl }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
AgmZoomControl.propDecorators = {
    style: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmZoomControl, [{
        type: Directive,
        args: [{
                selector: 'agm-map agm-zoom-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmZoomControl }]
            }]
    }], null, { style: [{
            type: Input
        }] }); })();
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
export class AgmMap {
    constructor(_elem, _mapsWrapper, 
    // tslint:disable-next-line: ban-types
    _platformId, _fitBoundsService, _zone) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */
        this.fitBounds = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'ROADMAP';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */
        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */
        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        // tslint:disable-next-line: max-line-length
        this.mapClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new EventEmitter();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new EventEmitter();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new EventEmitter();
        /**
         * This event is fired when the mapTypeId property changes.
         */
        this.mapTypeIdChange = new EventEmitter();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new EventEmitter();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new EventEmitter();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new EventEmitter();
        /**
         * This event is fired when the visible tiles have finished loading.
         */
        this.tilesLoaded = new EventEmitter();
    }
    /** @internal */
    ngAfterContentInit() {
        if (isPlatformServer(this._platformId)) {
            // The code is running on the server, do nothing
            return;
        }
        // todo: this should be solved with a new component and a viewChild decorator
        const container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    }
    _initMapInstance(el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            mapTypeId: this.mapTypeId.toLocaleLowerCase(),
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction,
        })
            .then(() => this._mapsWrapper.getNativeMap())
            .then(map => this.mapReady.emit(map));
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleTilesLoadedEvent();
        this._handleIdleEvent();
        this._handleControlChange();
    }
    /** @internal */
    ngOnDestroy() {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    }
    /* @internal */
    ngOnChanges(changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    }
    _updateMapOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmMap._mapOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter = true) {
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise((resolve) => {
            setTimeout(() => {
                return this._mapsWrapper.triggerMapEvent('resize').then(() => {
                    if (recenter) {
                        this.fitBounds != null ? this._fitBounds() : this._setCenter();
                    }
                    resolve();
                });
            });
        });
    }
    _updatePosition(changes) {
        // tslint:disable: no-string-literal
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // tslint:enable: no-string-literal
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    }
    _setCenter() {
        const newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    }
    _fitBounds() {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                this._updateBounds(this.fitBounds, this.fitBoundsPadding);
        }
    }
    _subscribeToFitBoundsUpdates() {
        this._zone.runOutsideAngular(() => {
            this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(b => {
                this._zone.run(() => this._updateBounds(b, this.fitBoundsPadding));
            });
        });
    }
    _updateBounds(bounds, padding) {
        if (!bounds) {
            return;
        }
        if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            const newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);
            return;
        }
        this._mapsWrapper.fitBounds(bounds, padding);
    }
    _isLatLngBoundsLiteral(bounds) {
        return bounds != null && bounds.extend === undefined;
    }
    _handleMapCenterChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
            this._mapsWrapper.getCenter().then((center) => {
                this.latitude = center.lat();
                this.longitude = center.lng();
                this.centerChange.emit({ lat: this.latitude, lng: this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleBoundsChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
            this._mapsWrapper.getBounds().then((bounds) => { this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapTypeIdChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
            this._mapsWrapper.getMapTypeId().then((mapTypeId) => { this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapZoomChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
            this._mapsWrapper.getZoom().then((z) => {
                this.zoom = z;
                this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleIdleEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => { this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    }
    _handleTilesLoadedEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(() => this.tilesLoaded.emit(void 0));
        this._observableSubscriptions.push(s);
    }
    _handleMapMouseEvents() {
        const events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(e => {
            const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(([event]) => {
                // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
                if (event.placeId && !this.showDefaultInfoWindow) {
                    event.stop();
                }
                e.emitter.emit(event);
            });
            this._observableSubscriptions.push(s);
        });
    }
    _handleControlChange() {
        this._setControls();
        this.mapControls.changes.subscribe(() => this._setControls());
    }
    _setControls() {
        const controlOptions = {
            fullscreenControl: !this.disableDefaultUI,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: !this.disableDefaultUI,
            zoomControl: !this.disableDefaultUI,
        };
        this._mapsWrapper.getNativeMap().then(() => {
            this.mapControls.forEach(control => Object.assign(controlOptions, control.getOptions()));
            this._mapsWrapper.setMapOptions(controlOptions);
        });
    }
}
AgmMap.ɵfac = function AgmMap_Factory(t) { return new (t || AgmMap)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.GoogleMapsAPIWrapper), ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FitBoundsService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
AgmMap.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AgmMap, selectors: [["agm-map"]], contentQueries: function AgmMap_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, AgmMapControl, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mapControls = _t);
    } }, inputs: { longitude: "longitude", latitude: "latitude", zoom: "zoom", draggable: ["mapDraggable", "draggable"], disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", keyboardShortcuts: "keyboardShortcuts", styles: "styles", usePanning: "usePanning", fitBounds: "fitBounds", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", showDefaultInfoWindow: "showDefaultInfoWindow", gestureHandling: "gestureHandling", tilt: "tilt", minZoom: "minZoom", maxZoom: "maxZoom", controlSize: "controlSize", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", fitBoundsPadding: "fitBoundsPadding", restriction: "restriction" }, outputs: { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady", tilesLoaded: "tilesLoaded" }, features: [ɵngcc0.ɵɵProvidersFeature([
            CircleManager,
            DataLayerManager,
            DataLayerManager,
            FitBoundsService,
            GoogleMapsAPIWrapper,
            InfoWindowManager,
            KmlLayerManager,
            LayerManager,
            MarkerManager,
            PolygonManager,
            PolylineManager,
            RectangleManager,
        ]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]], template: function AgmMap_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"] });
/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'styles', 'zoom', 'minZoom', 'maxZoom', 'mapTypeId', 'clickableIcons',
    'gestureHandling', 'tilt', 'restriction',
];
AgmMap.ctorParameters = () => [
    { type: ElementRef },
    { type: GoogleMapsAPIWrapper },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: FitBoundsService },
    { type: NgZone }
];
AgmMap.propDecorators = {
    longitude: [{ type: Input }],
    latitude: [{ type: Input }],
    zoom: [{ type: Input }],
    minZoom: [{ type: Input }],
    maxZoom: [{ type: Input }],
    controlSize: [{ type: Input }],
    draggable: [{ type: Input, args: ['mapDraggable',] }],
    disableDoubleClickZoom: [{ type: Input }],
    disableDefaultUI: [{ type: Input }],
    scrollwheel: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    draggableCursor: [{ type: Input }],
    draggingCursor: [{ type: Input }],
    keyboardShortcuts: [{ type: Input }],
    styles: [{ type: Input }],
    usePanning: [{ type: Input }],
    fitBounds: [{ type: Input }],
    fitBoundsPadding: [{ type: Input }],
    mapTypeId: [{ type: Input }],
    clickableIcons: [{ type: Input }],
    showDefaultInfoWindow: [{ type: Input }],
    gestureHandling: [{ type: Input }],
    tilt: [{ type: Input }],
    restriction: [{ type: Input }],
    mapClick: [{ type: Output }],
    mapRightClick: [{ type: Output }],
    mapDblClick: [{ type: Output }],
    centerChange: [{ type: Output }],
    boundsChange: [{ type: Output }],
    mapTypeIdChange: [{ type: Output }],
    idle: [{ type: Output }],
    zoomChange: [{ type: Output }],
    mapReady: [{ type: Output }],
    tilesLoaded: [{ type: Output }],
    mapControls: [{ type: ContentChildren, args: [AgmMapControl,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmMap, [{
        type: Component,
        args: [{
                selector: 'agm-map',
                providers: [
                    CircleManager,
                    DataLayerManager,
                    DataLayerManager,
                    FitBoundsService,
                    GoogleMapsAPIWrapper,
                    InfoWindowManager,
                    KmlLayerManager,
                    LayerManager,
                    MarkerManager,
                    PolygonManager,
                    PolylineManager,
                    RectangleManager,
                ],
                template: `
              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>
              <div class='agm-map-content'>
                <ng-content></ng-content>
              </div>
  `,
                styles: [`
    .agm-map-container-inner {
      width: inherit;
      height: inherit;
    }
    .agm-map-content {
      display:none;
    }
  `]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.GoogleMapsAPIWrapper }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc2.FitBoundsService }, { type: ɵngcc0.NgZone }]; }, { longitude: [{
            type: Input
        }], latitude: [{
            type: Input
        }], zoom: [{
            type: Input
        }], draggable: [{
            type: Input,
            args: ['mapDraggable']
        }], disableDoubleClickZoom: [{
            type: Input
        }], disableDefaultUI: [{
            type: Input
        }], scrollwheel: [{
            type: Input
        }], keyboardShortcuts: [{
            type: Input
        }], styles: [{
            type: Input
        }], usePanning: [{
            type: Input
        }], fitBounds: [{
            type: Input
        }], mapTypeId: [{
            type: Input
        }], clickableIcons: [{
            type: Input
        }], showDefaultInfoWindow: [{
            type: Input
        }], gestureHandling: [{
            type: Input
        }], tilt: [{
            type: Input
        }], mapClick: [{
            type: Output
        }], mapRightClick: [{
            type: Output
        }], mapDblClick: [{
            type: Output
        }], centerChange: [{
            type: Output
        }], boundsChange: [{
            type: Output
        }], mapTypeIdChange: [{
            type: Output
        }], idle: [{
            type: Output
        }], zoomChange: [{
            type: Output
        }], mapReady: [{
            type: Output
        }], tilesLoaded: [{
            type: Output
        }], minZoom: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], controlSize: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], draggableCursor: [{
            type: Input
        }], draggingCursor: [{
            type: Input
        }], fitBoundsPadding: [{
            type: Input
        }], restriction: [{
            type: Input
        }], mapControls: [{
            type: ContentChildren,
            args: [AgmMapControl]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF3QixNQUFNLEVBQUUsV0FBVyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc5TSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7O0FBSzNFLE1BQU0sT0FBZ0IsYUFBYTtBQUNuQzt5Q0FGQyxTQUFTO3VIQUNSO0FBQUM7QUFBaUMsdUJBQ2pDLEtBQUs7QUFBSTs7Ozs7b0JBQUU7QUFRZCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFB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S1YsS0FBSztVQXRITCxlQU9GLHpCQStHWSw2QkFNVixLQUFLO0FBQUssb0NBUVYsS0FBSztBQUFLLDhCQVVWLEtBQUs7QUFBSyxtQkFnQlYsS0FBSztBQUFLLDBCQU1WLEtBQUs7QUFBSyx1QkFtQlYsTUFBTTtBQUFLLDRCQU1YLE1BQU07QUFBSywwQkFNWCxNQUFNO0FBQUssMkJBS1gsTUFBTTtBQUFLLDJCQUtYLE1BQU07QUFBSyw4QkFLWCxNQUFNO0FBQUssbUJBS1gsTUFBTTtBQUFLLHlCQUtYLE1BQU07QUFBSyx1QkFNWCxNQUFNO0FBQUssMEJBS1gsTUFBTTtBQUFLLDBCQUVYLGVBQWUsU0FBQyxhQUFhO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3V0cHV0LCBQTEFURk9STV9JRCwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRml0Qm91bmRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZpdC1ib3VuZHMnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc0FQSVdyYXBwZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9nb29nbGUtbWFwcy1hcGktd3JhcHBlcic7XG5pbXBvcnQgeyBDaXJjbGVNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXInO1xuaW1wb3J0IHsgSW5mb1dpbmRvd01hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9pbmZvLXdpbmRvdy1tYW5hZ2VyJztcbmltcG9ydCB7IExheWVyTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2xheWVyLW1hbmFnZXInO1xuaW1wb3J0IHsgTWFya2VyTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL21hcmtlci1tYW5hZ2VyJztcbmltcG9ydCB7IFBvbHlnb25NYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcG9seWdvbi1tYW5hZ2VyJztcbmltcG9ydCB7IFBvbHlsaW5lTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3BvbHlsaW5lLW1hbmFnZXInO1xuaW1wb3J0IHsgUmVjdGFuZ2xlTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL3JlY3RhbmdsZS1tYW5hZ2VyJztcbmltcG9ydCB7IERhdGFMYXllck1hbmFnZXIgfSBmcm9tICcuLy4uL3NlcnZpY2VzL21hbmFnZXJzL2RhdGEtbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQgeyBLbWxMYXllck1hbmFnZXIgfSBmcm9tICcuLy4uL3NlcnZpY2VzL21hbmFnZXJzL2ttbC1sYXllci1tYW5hZ2VyJztcblxuZXhwb3J0IHR5cGUgQ29udHJvbFBvc2l0aW9uID0ga2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbjtcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdtTWFwQ29udHJvbCB7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBDb250cm9sUG9zaXRpb247XG4gIGFic3RyYWN0IGdldE9wdGlvbnMoKTogUGFydGlhbDxnb29nbGUubWFwcy5NYXBPcHRpb25zPjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcCBhZ20tZnVsbHNjcmVlbi1jb250cm9sJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBBZ21NYXBDb250cm9sLCB1c2VFeGlzdGluZzogQWdtRnVsbHNjcmVlbkNvbnRyb2wgfV0sXG59KVxuZXhwb3J0IGNsYXNzIEFnbUZ1bGxzY3JlZW5Db250cm9sIGV4dGVuZHMgQWdtTWFwQ29udHJvbCB7XG4gIGdldE9wdGlvbnMoKTogUGFydGlhbDxnb29nbGUubWFwcy5NYXBPcHRpb25zPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiB0cnVlLFxuICAgICAgZnVsbHNjcmVlbkNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uICYmIGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcCBhZ20tbWFwLXR5cGUtY29udHJvbCcsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQWdtTWFwQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEFnbU1hcFR5cGVDb250cm9sIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21NYXBUeXBlQ29udHJvbCBleHRlbmRzIEFnbU1hcENvbnRyb2wge1xuICBASW5wdXQoKSBtYXBUeXBlSWRzOiAoa2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLk1hcFR5cGVJZClbXTtcbiAgQElucHV0KCkgc3R5bGU6IGtleW9mIHR5cGVvZiBnb29nbGUubWFwcy5NYXBUeXBlQ29udHJvbFN0eWxlO1xuXG4gIGdldE9wdGlvbnMoKTogUGFydGlhbDxnb29nbGUubWFwcy5NYXBPcHRpb25zPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcFR5cGVDb250cm9sOiB0cnVlLFxuICAgICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uICYmIGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXSxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGUgJiYgZ29vZ2xlLm1hcHMuTWFwVHlwZUNvbnRyb2xTdHlsZVt0aGlzLnN0eWxlXSxcbiAgICAgICAgbWFwVHlwZUlkczogdGhpcy5tYXBUeXBlSWRzICYmIHRoaXMubWFwVHlwZUlkcy5tYXAobWFwVHlwZUlkID0+IGdvb2dsZS5tYXBzLk1hcFR5cGVJZFttYXBUeXBlSWRdKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFwIGFnbS1wYW4tY29udHJvbCcsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQWdtTWFwQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEFnbVBhbkNvbnRyb2wgfV0sXG59KVxuZXhwb3J0IGNsYXNzIEFnbVBhbkNvbnRyb2wgZXh0ZW5kcyBBZ21NYXBDb250cm9sIHtcbiAgZ2V0T3B0aW9ucygpOiBQYXJ0aWFsPGdvb2dsZS5tYXBzLk1hcE9wdGlvbnM+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFuQ29udHJvbDogdHJ1ZSxcbiAgICAgIHBhbkNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uICYmIGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFwIGFnbS1yb3RhdGUtY29udHJvbCcsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQWdtTWFwQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEFnbVJvdGF0ZUNvbnRyb2wgfV0sXG59KVxuZXhwb3J0IGNsYXNzIEFnbVJvdGF0ZUNvbnRyb2wgZXh0ZW5kcyBBZ21NYXBDb250cm9sIHtcbiAgZ2V0T3B0aW9ucygpOiBQYXJ0aWFsPGdvb2dsZS5tYXBzLk1hcE9wdGlvbnM+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcm90YXRlQ29udHJvbDogdHJ1ZSxcbiAgICAgIHJvdGF0ZUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uICYmIGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFwIGFnbS1zY2FsZS1jb250cm9sJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBBZ21NYXBDb250cm9sLCB1c2VFeGlzdGluZzogQWdtU2NhbGVDb250cm9sIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21TY2FsZUNvbnRyb2wgZXh0ZW5kcyBBZ21NYXBDb250cm9se1xuICBnZXRPcHRpb25zKCk6IFBhcnRpYWw8Z29vZ2xlLm1hcHMuTWFwT3B0aW9ucz4ge1xuICAgIHJldHVybiB7XG4gICAgICBzY2FsZUNvbnRyb2w6IHRydWUsXG4gICAgfTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFwIGFnbS1zdHJlZXQtdmlldy1jb250cm9sJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBBZ21NYXBDb250cm9sLCB1c2VFeGlzdGluZzogQWdtU3RyZWV0Vmlld0NvbnRyb2wgfV0sXG59KVxuZXhwb3J0IGNsYXNzIEFnbVN0cmVldFZpZXdDb250cm9sIGV4dGVuZHMgQWdtTWFwQ29udHJvbCB7XG4gIGdldE9wdGlvbnMoKTogUGFydGlhbDxnb29nbGUubWFwcy5NYXBPcHRpb25zPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0cnVlLFxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uICYmIGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFwIGFnbS16b29tLWNvbnRyb2wnLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFnbU1hcENvbnRyb2wsIHVzZUV4aXN0aW5nOiBBZ21ab29tQ29udHJvbCB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQWdtWm9vbUNvbnRyb2wgZXh0ZW5kcyBBZ21NYXBDb250cm9se1xuICBASW5wdXQoKSBzdHlsZToga2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGU7XG4gIGdldE9wdGlvbnMoKTogUGFydGlhbDxnb29nbGUubWFwcy5NYXBPcHRpb25zPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uICYmIGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXSxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGUgJiYgZ29vZ2xlLm1hcHMuWm9vbUNvbnRyb2xTdHlsZVt0aGlzLnN0eWxlXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEFnbU1hcCByZW5kZXJzIGEgR29vZ2xlIE1hcC5cbiAqICoqSW1wb3J0YW50IG5vdGUqKjogVG8gYmUgYWJsZSBzZWUgYSBtYXAgaW4gdGhlIGJyb3dzZXIsIHlvdSBoYXZlIHRvIGRlZmluZSBhIGhlaWdodCBmb3IgdGhlXG4gKiBlbGVtZW50IGBhZ20tbWFwYC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgc2VsZWN0b3I6ICdteS1tYXAtY21wJyxcbiAqICBzdHlsZXM6IFtgXG4gKiAgICBhZ20tbWFwIHtcbiAqICAgICAgaGVpZ2h0OiAzMDBweDtcbiAqICAgIH1cbiAqIGBdLFxuICogIHRlbXBsYXRlOiBgXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhZ20tbWFwJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ2lyY2xlTWFuYWdlcixcbiAgICBEYXRhTGF5ZXJNYW5hZ2VyLFxuICAgIERhdGFMYXllck1hbmFnZXIsXG4gICAgRml0Qm91bmRzU2VydmljZSxcbiAgICBHb29nbGVNYXBzQVBJV3JhcHBlcixcbiAgICBJbmZvV2luZG93TWFuYWdlcixcbiAgICBLbWxMYXllck1hbmFnZXIsXG4gICAgTGF5ZXJNYW5hZ2VyLFxuICAgIE1hcmtlck1hbmFnZXIsXG4gICAgUG9seWdvbk1hbmFnZXIsXG4gICAgUG9seWxpbmVNYW5hZ2VyLFxuICAgIFJlY3RhbmdsZU1hbmFnZXIsXG4gIF0sXG4gIHN0eWxlczogW2BcbiAgICAuYWdtLW1hcC1jb250YWluZXItaW5uZXIge1xuICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgfVxuICAgIC5hZ20tbWFwLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2FnbS1tYXAtY29udGFpbmVyLWlubmVyIHNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXItaW5uZXInPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhZ20tbWFwLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFnbU1hcCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBsb25naXR1ZGUgdGhhdCBkZWZpbmVzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcC5cbiAgICovXG4gIEBJbnB1dCgpIGxvbmdpdHVkZSA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXRpdHVkZSB0aGF0IGRlZmluZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwLlxuICAgKi9cbiAgQElucHV0KCkgbGF0aXR1ZGUgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLiBUaGUgZGVmYXVsdCB6b29tIGxldmVsIGlzIDguXG4gICAqL1xuICBASW5wdXQoKSB6b29tID0gODtcblxuICAvKipcbiAgICogVGhlIG1pbmltYWwgem9vbSBsZXZlbCBvZiB0aGUgbWFwIGFsbG93ZWQuIFdoZW4gbm90IHByb3ZpZGVkLCBubyByZXN0cmljdGlvbnMgdG8gdGhlIHpvb20gbGV2ZWxcbiAgICogYXJlIGVuZm9yY2VkLlxuICAgKi9cbiAgQElucHV0KCkgbWluWm9vbTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW1hbCB6b29tIGxldmVsIG9mIHRoZSBtYXAgYWxsb3dlZC4gV2hlbiBub3QgcHJvdmlkZWQsIG5vIHJlc3RyaWN0aW9ucyB0byB0aGUgem9vbSBsZXZlbFxuICAgKiBhcmUgZW5mb3JjZWQuXG4gICAqL1xuICBASW5wdXQoKSBtYXhab29tOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBjb250cm9sIHNpemUgZm9yIHRoZSBkZWZhdWx0IG1hcCBjb250cm9scy4gT25seSBnb3Zlcm5zIHRoZSBjb250cm9scyBtYWRlIGJ5IHRoZSBNYXBzIEFQSSBpdHNlbGZcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRyb2xTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMvZGlzYWJsZXMgaWYgbWFwIGlzIGRyYWdnYWJsZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdtYXBEcmFnZ2FibGUnKSBkcmFnZ2FibGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzL2Rpc2FibGVzIHpvb20gYW5kIGNlbnRlciBvbiBkb3VibGUgY2xpY2suIEVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVEb3VibGVDbGlja1pvb20gPSBmYWxzZTtcblxuICAvKipcbiAgICogRW5hYmxlcy9kaXNhYmxlcyBhbGwgZGVmYXVsdCBVSSBvZiB0aGUgR29vZ2xlIG1hcC4gUGxlYXNlIG5vdGU6IFdoZW4gdGhlIG1hcCBpcyBjcmVhdGVkLCB0aGlzXG4gICAqIHZhbHVlIGNhbm5vdCBnZXQgdXBkYXRlZC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVEZWZhdWx0VUkgPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgZmFsc2UsIGRpc2FibGVzIHNjcm9sbHdoZWVsIHpvb21pbmcgb24gdGhlIG1hcC4gVGhlIHNjcm9sbHdoZWVsIGlzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIHNjcm9sbHdoZWVsID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ29sb3IgdXNlZCBmb3IgdGhlIGJhY2tncm91bmQgb2YgdGhlIE1hcCBkaXYuIFRoaXMgY29sb3Igd2lsbCBiZSB2aXNpYmxlIHdoZW4gdGlsZXMgaGF2ZSBub3RcbiAgICogeWV0IGxvYWRlZCBhcyB0aGUgdXNlciBwYW5zLiBUaGlzIG9wdGlvbiBjYW4gb25seSBiZSBzZXQgd2hlbiB0aGUgbWFwIGlzIGluaXRpYWxpemVkLlxuICAgKi9cbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9yIHVybCBvZiB0aGUgY3Vyc29yIHRvIGRpc3BsYXkgd2hlbiBtb3VzaW5nIG92ZXIgYSBkcmFnZ2FibGUgbWFwLiBUaGlzIHByb3BlcnR5IHVzZXNcbiAgICogdGhlIGNzcyAgKiBjdXJzb3IgYXR0cmlidXRlIHRvIGNoYW5nZSB0aGUgaWNvbi4gQXMgd2l0aCB0aGUgY3NzIHByb3BlcnR5LCB5b3UgbXVzdCBzcGVjaWZ5IGF0XG4gICAqIGxlYXN0IG9uZSBmYWxsYmFjayBjdXJzb3IgdGhhdCBpcyBub3QgYSBVUkwuIEZvciBleGFtcGxlOlxuICAgKiBbZHJhZ2dhYmxlQ3Vyc29yXT1cIid1cmwoaHR0cDovL3d3dy5leGFtcGxlLmNvbS9pY29uLnBuZyksIGF1dG87J1wiXG4gICAqL1xuICBASW5wdXQoKSBkcmFnZ2FibGVDdXJzb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG5hbWUgb3IgdXJsIG9mIHRoZSBjdXJzb3IgdG8gZGlzcGxheSB3aGVuIHRoZSBtYXAgaXMgYmVpbmcgZHJhZ2dlZC4gVGhpcyBwcm9wZXJ0eSB1c2VzIHRoZVxuICAgKiBjc3MgY3Vyc29yIGF0dHJpYnV0ZSB0byBjaGFuZ2UgdGhlIGljb24uIEFzIHdpdGggdGhlIGNzcyBwcm9wZXJ0eSwgeW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdFxuICAgKiBvbmUgZmFsbGJhY2sgY3Vyc29yIHRoYXQgaXMgbm90IGEgVVJMLiBGb3IgZXhhbXBsZTpcbiAgICogW2RyYWdnaW5nQ3Vyc29yXT1cIid1cmwoaHR0cDovL3d3dy5leGFtcGxlLmNvbS9pY29uLnBuZyksIGF1dG87J1wiXG4gICAqL1xuICBASW5wdXQoKSBkcmFnZ2luZ0N1cnNvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiBmYWxzZSwgcHJldmVudHMgdGhlIG1hcCBmcm9tIGJlaW5nIGNvbnRyb2xsZWQgYnkgdGhlIGtleWJvYXJkLiBLZXlib2FyZCBzaG9ydGN1dHMgYXJlXG4gICAqIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICovXG4gIEBJbnB1dCgpIGtleWJvYXJkU2hvcnRjdXRzID0gdHJ1ZTtcblxuICAvKipcbiAgICogU3R5bGVzIHRvIGFwcGx5IHRvIGVhY2ggb2YgdGhlIGRlZmF1bHQgbWFwIHR5cGVzLiBOb3RlIHRoYXQgZm9yIFNhdGVsbGl0ZS9IeWJyaWQgYW5kIFRlcnJhaW5cbiAgICogbW9kZXMsIHRoZXNlIHN0eWxlcyB3aWxsIG9ubHkgYXBwbHkgdG8gbGFiZWxzIGFuZCBnZW9tZXRyeS5cbiAgICovXG4gIEBJbnB1dCgpIHN0eWxlczogZ29vZ2xlLm1hcHMuTWFwVHlwZVN0eWxlW10gPSBbXTtcblxuICAvKipcbiAgICogV2hlbiB0cnVlIGFuZCB0aGUgbGF0aXR1ZGUgYW5kL29yIGxvbmdpdHVkZSB2YWx1ZXMgY2hhbmdlcywgdGhlIEdvb2dsZSBNYXBzIHBhblRvIG1ldGhvZCBpc1xuICAgKiB1c2VkIHRvXG4gICAqIGNlbnRlciB0aGUgbWFwLiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBcbiAgICovXG4gIEBJbnB1dCgpIHVzZVBhbm5pbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgdmlld3BvcnQgdG8gY29udGFpbiB0aGUgZ2l2ZW4gYm91bmRzLlxuICAgKiBJZiB0aGlzIG9wdGlvbiB0byBgdHJ1ZWAsIHRoZSBib3VuZHMgZ2V0IGF1dG9tYXRpY2FsbHkgY29tcHV0ZWQgZnJvbSBhbGwgZWxlbWVudHMgdGhhdCB1c2UgdGhlIHtAbGluayBBZ21GaXRCb3VuZHN9IGRpcmVjdGl2ZS5cbiAgICovXG4gIEBJbnB1dCgpIGZpdEJvdW5kczogZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzTGl0ZXJhbCB8IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUGFkZGluZyBhbW91bnQgZm9yIHRoZSBib3VuZHMuXG4gICAqL1xuICBASW5wdXQoKSBmaXRCb3VuZHNQYWRkaW5nOiBudW1iZXIgfCBnb29nbGUubWFwcy5QYWRkaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbWFwIG1hcFR5cGVJZC4gRGVmYXVsdHMgdG8gJ3JvYWRtYXAnLlxuICAgKi9cbiAgQElucHV0KCkgbWFwVHlwZUlkOiBrZXlvZiB0eXBlb2YgZ29vZ2xlLm1hcHMuTWFwVHlwZUlkID0gJ1JPQURNQVAnO1xuXG4gIC8qKlxuICAgKiBXaGVuIGZhbHNlLCBtYXAgaWNvbnMgYXJlIG5vdCBjbGlja2FibGUuIEEgbWFwIGljb24gcmVwcmVzZW50cyBhIHBvaW50IG9mIGludGVyZXN0LFxuICAgKiBhbHNvIGtub3duIGFzIGEgUE9JLiBCeSBkZWZhdWx0IG1hcCBpY29ucyBhcmUgY2xpY2thYmxlLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2thYmxlSWNvbnMgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hcCBpY29uIHJlcHJlc2VudHMgYSBwb2ludCBvZiBpbnRlcmVzdCwgYWxzbyBrbm93biBhcyBhIFBPSS5cbiAgICogV2hlbiBtYXAgaWNvbnMgYXJlIGNsaWNrYWJsZSBieSBkZWZhdWx0LCBhbiBpbmZvIHdpbmRvdyBpcyBkaXNwbGF5ZWQuXG4gICAqIFdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gZmFsc2UsIHRoZSBpbmZvIHdpbmRvdyB3aWxsIG5vdCBiZSBzaG93biBidXQgdGhlIGNsaWNrIGV2ZW50XG4gICAqIHdpbGwgc3RpbGwgZmlyZVxuICAgKi9cbiAgQElucHV0KCkgc2hvd0RlZmF1bHRJbmZvV2luZG93ID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhpcyBzZXR0aW5nIGNvbnRyb2xzIGhvdyBnZXN0dXJlcyBvbiB0aGUgbWFwIGFyZSBoYW5kbGVkLlxuICAgKiBBbGxvd2VkIHZhbHVlczpcbiAgICogLSAnY29vcGVyYXRpdmUnIChUd28tZmluZ2VyIHRvdWNoIGdlc3R1cmVzIHBhbiBhbmQgem9vbSB0aGUgbWFwLiBPbmUtZmluZ2VyIHRvdWNoIGdlc3R1cmVzIGFyZSBub3QgaGFuZGxlZCBieSB0aGUgbWFwLilcbiAgICogLSAnZ3JlZWR5JyAgICAgIChBbGwgdG91Y2ggZ2VzdHVyZXMgcGFuIG9yIHpvb20gdGhlIG1hcC4pXG4gICAqIC0gJ25vbmUnICAgICAgICAoVGhlIG1hcCBjYW5ub3QgYmUgcGFubmVkIG9yIHpvb21lZCBieSB1c2VyIGdlc3R1cmVzLilcbiAgICogLSAnYXV0bycgICAgICAgIFtkZWZhdWx0XSAoR2VzdHVyZSBoYW5kbGluZyBpcyBlaXRoZXIgY29vcGVyYXRpdmUgb3IgZ3JlZWR5LCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgcGFnZSBpcyBzY3JvbGxhYmxlIG9yIG5vdC5cbiAgICovXG4gIEBJbnB1dCgpIGdlc3R1cmVIYW5kbGluZzogZ29vZ2xlLm1hcHMuR2VzdHVyZUhhbmRsaW5nT3B0aW9ucyA9ICdhdXRvJztcblxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHRoZSBhdXRvbWF0aWMgc3dpdGNoaW5nIGJlaGF2aW9yIGZvciB0aGUgYW5nbGUgb2YgaW5jaWRlbmNlIG9mXG4gICAgICogdGhlIG1hcC4gVGhlIG9ubHkgYWxsb3dlZCB2YWx1ZXMgYXJlIDAgYW5kIDQ1LiBUaGUgdmFsdWUgMCBjYXVzZXMgdGhlIG1hcFxuICAgICAqIHRvIGFsd2F5cyB1c2UgYSAwwrAgb3ZlcmhlYWQgdmlldyByZWdhcmRsZXNzIG9mIHRoZSB6b29tIGxldmVsIGFuZFxuICAgICAqIHZpZXdwb3J0LiBUaGUgdmFsdWUgNDUgY2F1c2VzIHRoZSB0aWx0IGFuZ2xlIHRvIGF1dG9tYXRpY2FsbHkgc3dpdGNoIHRvXG4gICAgICogNDUgd2hlbmV2ZXIgNDXCsCBpbWFnZXJ5IGlzIGF2YWlsYWJsZSBmb3IgdGhlIGN1cnJlbnQgem9vbSBsZXZlbCBhbmRcbiAgICAgKiB2aWV3cG9ydCwgYW5kIHN3aXRjaCBiYWNrIHRvIDAgd2hlbmV2ZXIgNDXCsCBpbWFnZXJ5IGlzIG5vdCBhdmFpbGFibGVcbiAgICAgKiAodGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvcikuIDQ1wrAgaW1hZ2VyeSBpcyBvbmx5IGF2YWlsYWJsZSBmb3JcbiAgICAgKiBzYXRlbGxpdGUgYW5kIGh5YnJpZCBtYXAgdHlwZXMsIHdpdGhpbiBzb21lIGxvY2F0aW9ucywgYW5kIGF0IHNvbWUgem9vbVxuICAgICAqIGxldmVscy4gTm90ZTogZ2V0VGlsdCByZXR1cm5zIHRoZSBjdXJyZW50IHRpbHQgYW5nbGUsIG5vdCB0aGUgdmFsdWVcbiAgICAgKiBzcGVjaWZpZWQgYnkgdGhpcyBvcHRpb24uIEJlY2F1c2UgZ2V0VGlsdCBhbmQgdGhpcyBvcHRpb24gcmVmZXIgdG9cbiAgICAgKiBkaWZmZXJlbnQgdGhpbmdzLCBkbyBub3QgYmluZCgpIHRoZSB0aWx0IHByb3BlcnR5OyBkb2luZyBzbyBtYXkgeWllbGRcbiAgICAgKiB1bnByZWRpY3RhYmxlIGVmZmVjdHMuIChEZWZhdWx0IG9mIEFHTSBpcyAwIChkaXNhYmxlZCkuIEVuYWJsZSBpdCB3aXRoIHZhbHVlIDQ1LilcbiAgICAgKi9cbiAgQElucHV0KCkgdGlsdCA9IDA7XG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgZm9yIHJlc3RyaWN0aW5nIHRoZSBib3VuZHMgb2YgdGhlIG1hcC5cbiAgICogVXNlciBjYW5ub3QgcGFuIG9yIHpvb20gYXdheSBmcm9tIHJlc3RyaWN0ZWQgYXJlYS5cbiAgICovXG4gIEBJbnB1dCgpIHJlc3RyaWN0aW9uOiBnb29nbGUubWFwcy5NYXBSZXN0cmljdGlvbjtcblxuICAvKipcbiAgICogTWFwIG9wdGlvbiBhdHRyaWJ1dGVzIHRoYXQgY2FuIGNoYW5nZSBvdmVyIHRpbWVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9tYXBPcHRpb25zQXR0cmlidXRlczogc3RyaW5nW10gPSBbXG4gICAgJ2Rpc2FibGVEb3VibGVDbGlja1pvb20nLCAnc2Nyb2xsd2hlZWwnLCAnZHJhZ2dhYmxlJywgJ2RyYWdnYWJsZUN1cnNvcicsICdkcmFnZ2luZ0N1cnNvcicsXG4gICAgJ2tleWJvYXJkU2hvcnRjdXRzJywgJ3N0eWxlcycsICd6b29tJywgJ21pblpvb20nLCAnbWF4Wm9vbScsICdtYXBUeXBlSWQnLCAnY2xpY2thYmxlSWNvbnMnLFxuICAgICdnZXN0dXJlSGFuZGxpbmcnLCAndGlsdCcsICdyZXN0cmljdGlvbicsXG4gIF07XG5cbiAgcHJpdmF0ZSBfb2JzZXJ2YWJsZVN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrIG9uIGFcbiAgICogbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcbiAgQE91dHB1dCgpIG1hcENsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudCB8IGdvb2dsZS5tYXBzLkljb25Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudCB8IGdvb2dsZS5tYXBzLkljb25Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgcmlnaHQtY2xpY2tzIG9uIHRoZSBtYXAgKGJ1dCBub3Qgd2hlbiB0aGV5IGNsaWNrXG4gICAqIG9uIGEgbWFya2VyIG9yIGluZm9XaW5kb3cpLlxuICAgKi9cbiAgQE91dHB1dCgpIG1hcFJpZ2h0Q2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGRvdWJsZS1jbGlja3Mgb24gdGhlIG1hcCAoYnV0IG5vdCB3aGVuIHRoZXkgY2xpY2tcbiAgICogb24gYSBtYXJrZXIgb3IgaW5mb1dpbmRvdykuXG4gICAqL1xuICBAT3V0cHV0KCkgbWFwRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGlzIGZpcmVkIHdoZW4gdGhlIG1hcCBjZW50ZXIgY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSBjZW50ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsPiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB2aWV3cG9ydCBib3VuZHMgaGF2ZSBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGJvdW5kc0NoYW5nZTogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcz4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcz4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtYXBUeXBlSWQgcHJvcGVydHkgY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSBtYXBUeXBlSWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5NYXBUeXBlSWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5NYXBUeXBlSWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgbWFwIGJlY29tZXMgaWRsZSBhZnRlciBwYW5uaW5nIG9yIHpvb21pbmcuXG4gICAqL1xuICBAT3V0cHV0KCkgaWRsZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHpvb20gbGV2ZWwgaGFzIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgem9vbUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBnb29nbGUgbWFwIGlzIGZ1bGx5IGluaXRpYWxpemVkLlxuICAgKiBZb3UgZ2V0IHRoZSBnb29nbGUubWFwcy5NYXAgaW5zdGFuY2UgYXMgYSByZXN1bHQgb2YgdGhpcyBFdmVudEVtaXR0ZXIuXG4gICAqL1xuICBAT3V0cHV0KCkgbWFwUmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdmlzaWJsZSB0aWxlcyBoYXZlIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAqL1xuICBAT3V0cHV0KCkgdGlsZXNMb2FkZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAQ29udGVudENoaWxkcmVuKEFnbU1hcENvbnRyb2wpIG1hcENvbnRyb2xzOiBRdWVyeUxpc3Q8QWdtTWFwQ29udHJvbD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9tYXBzV3JhcHBlcjogR29vZ2xlTWFwc0FQSVdyYXBwZXIsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIF9wbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJvdGVjdGVkIF9maXRCb3VuZHNTZXJ2aWNlOiBGaXRCb3VuZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZVxuICApIHt9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5fcGxhdGZvcm1JZCkpIHtcbiAgICAgIC8vIFRoZSBjb2RlIGlzIHJ1bm5pbmcgb24gdGhlIHNlcnZlciwgZG8gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0b2RvOiB0aGlzIHNob3VsZCBiZSBzb2x2ZWQgd2l0aCBhIG5ldyBjb21wb25lbnQgYW5kIGEgdmlld0NoaWxkIGRlY29yYXRvclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWdtLW1hcC1jb250YWluZXItaW5uZXInKTtcbiAgICB0aGlzLl9pbml0TWFwSW5zdGFuY2UoY29udGFpbmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRNYXBJbnN0YW5jZShlbDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9tYXBzV3JhcHBlci5jcmVhdGVNYXAoZWwsIHtcbiAgICAgIGNlbnRlcjoge2xhdDogdGhpcy5sYXRpdHVkZSB8fCAwLCBsbmc6IHRoaXMubG9uZ2l0dWRlIHx8IDB9LFxuICAgICAgem9vbTogdGhpcy56b29tLFxuICAgICAgbWluWm9vbTogdGhpcy5taW5ab29tLFxuICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgY29udHJvbFNpemU6IHRoaXMuY29udHJvbFNpemUsXG4gICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0aGlzLmRpc2FibGVEZWZhdWx0VUksXG4gICAgICBkaXNhYmxlRG91YmxlQ2xpY2tab29tOiB0aGlzLmRpc2FibGVEb3VibGVDbGlja1pvb20sXG4gICAgICBzY3JvbGx3aGVlbDogdGhpcy5zY3JvbGx3aGVlbCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgZHJhZ2dhYmxlQ3Vyc29yOiB0aGlzLmRyYWdnYWJsZUN1cnNvcixcbiAgICAgIGRyYWdnaW5nQ3Vyc29yOiB0aGlzLmRyYWdnaW5nQ3Vyc29yLFxuICAgICAga2V5Ym9hcmRTaG9ydGN1dHM6IHRoaXMua2V5Ym9hcmRTaG9ydGN1dHMsXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgICAgbWFwVHlwZUlkOiB0aGlzLm1hcFR5cGVJZC50b0xvY2FsZUxvd2VyQ2FzZSgpLFxuICAgICAgY2xpY2thYmxlSWNvbnM6IHRoaXMuY2xpY2thYmxlSWNvbnMsXG4gICAgICBnZXN0dXJlSGFuZGxpbmc6IHRoaXMuZ2VzdHVyZUhhbmRsaW5nLFxuICAgICAgdGlsdDogdGhpcy50aWx0LFxuICAgICAgcmVzdHJpY3Rpb246IHRoaXMucmVzdHJpY3Rpb24sXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX21hcHNXcmFwcGVyLmdldE5hdGl2ZU1hcCgpKVxuICAgICAgLnRoZW4obWFwID0+IHRoaXMubWFwUmVhZHkuZW1pdChtYXApKTtcblxuICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMuX2hhbmRsZU1hcENlbnRlckNoYW5nZSgpO1xuICAgIHRoaXMuX2hhbmRsZU1hcFpvb21DaGFuZ2UoKTtcbiAgICB0aGlzLl9oYW5kbGVNYXBNb3VzZUV2ZW50cygpO1xuICAgIHRoaXMuX2hhbmRsZUJvdW5kc0NoYW5nZSgpO1xuICAgIHRoaXMuX2hhbmRsZU1hcFR5cGVJZENoYW5nZSgpO1xuICAgIHRoaXMuX2hhbmRsZVRpbGVzTG9hZGVkRXZlbnQoKTtcbiAgICB0aGlzLl9oYW5kbGVJZGxlRXZlbnQoKTtcbiAgICB0aGlzLl9oYW5kbGVDb250cm9sQ2hhbmdlKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLmZvckVhY2goKHMpID0+IHMudW5zdWJzY3JpYmUoKSk7XG5cbiAgICAvLyByZW1vdmUgYWxsIGxpc3RlbmVycyBmcm9tIHRoZSBtYXAgaW5zdGFuY2VcbiAgICB0aGlzLl9tYXBzV3JhcHBlci5jbGVhckluc3RhbmNlTGlzdGVuZXJzKCk7XG4gICAgaWYgKHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fZml0Qm91bmRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyogQGludGVybmFsICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLl91cGRhdGVNYXBPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgICB0aGlzLl91cGRhdGVQb3NpdGlvbihjaGFuZ2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1hcE9wdGlvbnNDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBvcHRpb25zOiB7W3Byb3BOYW1lOiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgY29uc3Qgb3B0aW9uS2V5cyA9XG4gICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoayA9PiBBZ21NYXAuX21hcE9wdGlvbnNBdHRyaWJ1dGVzLmluZGV4T2YoaykgIT09IC0xKTtcbiAgICBvcHRpb25LZXlzLmZvckVhY2goKGspID0+IHsgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlOyB9KTtcbiAgICB0aGlzLl9tYXBzV3JhcHBlci5zZXRNYXBPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGEgcmVzaXplIGV2ZW50IG9uIHRoZSBnb29nbGUgbWFwIGluc3RhbmNlLlxuICAgKiBXaGVuIHJlY2VudGVyIGlzIHRydWUsIHRoZSBvZiB0aGUgZ29vZ2xlIG1hcCBnZXRzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IGxhdC9sbmcgdmFsdWVzIG9yIGZpdEJvdW5kcyB2YWx1ZSB0byByZWNlbnRlciB0aGUgbWFwLlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGdldHMgcmVzb2x2ZWQgYWZ0ZXIgdGhlIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAqL1xuICB0cmlnZ2VyUmVzaXplKHJlY2VudGVyOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE5vdGU6IFdoZW4gd2Ugd291bGQgdHJpZ2dlciB0aGUgcmVzaXplIGV2ZW50IGFuZCBzaG93IHRoZSBtYXAgaW4gdGhlIHNhbWUgdHVybiAod2hpY2ggaXMgYVxuICAgIC8vIGNvbW1vbiBjYXNlIGZvciB0cmlnZ2VyaW5nIGEgcmVzaXplIGV2ZW50KSwgdGhlbiB0aGUgcmVzaXplIGV2ZW50IHdvdWxkIG5vdFxuICAgIC8vIHdvcmsgKHRvIHNob3cgdGhlIG1hcCksIHNvIHdlIHRyaWdnZXIgdGhlIGV2ZW50IGluIGEgdGltZW91dC5cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFwc1dyYXBwZXIudHJpZ2dlck1hcEV2ZW50KCdyZXNpemUnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBpZiAocmVjZW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZml0Qm91bmRzICE9IG51bGwgPyB0aGlzLl9maXRCb3VuZHMoKSA6IHRoaXMuX3NldENlbnRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQb3NpdGlvbihjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gPT0gbnVsbCAmJiBjaGFuZ2VzWydsb25naXR1ZGUnXSA9PSBudWxsICYmXG4gICAgICAgICFjaGFuZ2VzWydmaXRCb3VuZHMnXSkge1xuICAgICAgLy8gbm8gcG9zaXRpb24gdXBkYXRlIG5lZWRlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlOiBuby1zdHJpbmctbGl0ZXJhbFxuXG4gICAgLy8gd2UgcHJlZmVyIGZpdEJvdW5kcyBpbiBjaGFuZ2VzXG4gICAgaWYgKCdmaXRCb3VuZHMnIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2ZpdEJvdW5kcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5sYXRpdHVkZSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXMubG9uZ2l0dWRlICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZXRDZW50ZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldENlbnRlcigpIHtcbiAgICBjb25zdCBuZXdDZW50ZXIgPSB7XG4gICAgICBsYXQ6IHRoaXMubGF0aXR1ZGUsXG4gICAgICBsbmc6IHRoaXMubG9uZ2l0dWRlLFxuICAgIH07XG4gICAgaWYgKHRoaXMudXNlUGFubmluZykge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIucGFuVG8obmV3Q2VudGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuc2V0Q2VudGVyKG5ld0NlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZml0Qm91bmRzKCkge1xuICAgIHN3aXRjaCAodGhpcy5maXRCb3VuZHMpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlVG9GaXRCb3VuZHNVcGRhdGVzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgaWYgKHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgIHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgIHRoaXMuX2ZpdEJvdW5kc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZUJvdW5kcyh0aGlzLmZpdEJvdW5kcywgdGhpcy5maXRCb3VuZHNQYWRkaW5nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdWJzY3JpYmVUb0ZpdEJvdW5kc1VwZGF0ZXMoKSB7XG4gICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9maXRCb3VuZHNTdWJzY3JpcHRpb24gPSB0aGlzLl9maXRCb3VuZHNTZXJ2aWNlLmdldEJvdW5kcyQoKS5zdWJzY3JpYmUoYiA9PiB7XG4gICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHRoaXMuX3VwZGF0ZUJvdW5kcyhiLCB0aGlzLmZpdEJvdW5kc1BhZGRpbmcpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91cGRhdGVCb3VuZHMoYm91bmRzOiBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMgfCBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHNMaXRlcmFsLCBwYWRkaW5nPzogbnVtYmVyIHwgZ29vZ2xlLm1hcHMuUGFkZGluZykge1xuICAgIGlmICghYm91bmRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc0xhdExuZ0JvdW5kc0xpdGVyYWwoYm91bmRzKSAmJiB0eXBlb2YgZ29vZ2xlICE9PSAndW5kZWZpbmVkJyAmJiBnb29nbGUgJiYgZ29vZ2xlLm1hcHMgJiYgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKSB7XG4gICAgICBjb25zdCBuZXdCb3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBuZXdCb3VuZHMudW5pb24oYm91bmRzKTtcbiAgICAgIGJvdW5kcyA9IG5ld0JvdW5kcztcbiAgICB9XG4gICAgaWYgKHRoaXMudXNlUGFubmluZykge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIucGFuVG9Cb3VuZHMoYm91bmRzLCBwYWRkaW5nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuZml0Qm91bmRzKGJvdW5kcywgcGFkZGluZyk7XG4gIH1cblxuICBwcml2YXRlIF9pc0xhdExuZ0JvdW5kc0xpdGVyYWwoYm91bmRzOiBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMgfCBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHNMaXRlcmFsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGJvdW5kcyAhPSBudWxsICYmIChib3VuZHMgYXMgYW55KS5leHRlbmQgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1hcENlbnRlckNoYW5nZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgnY2VudGVyX2NoYW5nZWQnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0Q2VudGVyKCkudGhlbigoY2VudGVyOiBnb29nbGUubWFwcy5MYXRMbmcpID0+IHtcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGNlbnRlci5sYXQoKTtcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSBjZW50ZXIubG5nKCk7XG4gICAgICAgIHRoaXMuY2VudGVyQ2hhbmdlLmVtaXQoe2xhdDogdGhpcy5sYXRpdHVkZSwgbG5nOiB0aGlzLmxvbmdpdHVkZX0gYXMgZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQm91bmRzQ2hhbmdlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50KCdib3VuZHNfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRCb3VuZHMoKS50aGVuKFxuICAgICAgICAoYm91bmRzOiBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMpID0+IHsgdGhpcy5ib3VuZHNDaGFuZ2UuZW1pdChib3VuZHMpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFwVHlwZUlkQ2hhbmdlKCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50KCdtYXB0eXBlaWRfY2hhbmdlZCcpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXBzV3JhcHBlci5nZXRNYXBUeXBlSWQoKS50aGVuKFxuICAgICAgICAobWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQpID0+IHsgdGhpcy5tYXBUeXBlSWRDaGFuZ2UuZW1pdChtYXBUeXBlSWQpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFwWm9vbUNoYW5nZSgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgnem9vbV9jaGFuZ2VkJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcHNXcmFwcGVyLmdldFpvb20oKS50aGVuKCh6OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy56b29tID0gejtcbiAgICAgICAgdGhpcy56b29tQ2hhbmdlLmVtaXQoeik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlSWRsZUV2ZW50KCkge1xuICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50KCdpZGxlJykuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4geyB0aGlzLmlkbGUuZW1pdCh2b2lkIDApOyB9KTtcbiAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVGlsZXNMb2FkZWRFdmVudCgpIHtcbiAgICBjb25zdCBzID0gdGhpcy5fbWFwc1dyYXBwZXIuc3Vic2NyaWJlVG9NYXBFdmVudCgndGlsZXNsb2FkZWQnKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB0aGlzLnRpbGVzTG9hZGVkLmVtaXQodm9pZCAwKSxcbiAgICApO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNYXBNb3VzZUV2ZW50cygpIHtcbiAgICB0eXBlIEV2ZW50ID0geyBuYW1lOiAncmlnaHRjbGljaycgfCAnY2xpY2snIHwgJ2RibGNsaWNrJywgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+IH07XG5cbiAgICBjb25zdCBldmVudHM6IEV2ZW50W10gPSBbXG4gICAgICB7bmFtZTogJ2NsaWNrJywgZW1pdHRlcjogdGhpcy5tYXBDbGlja30sXG4gICAgICB7bmFtZTogJ3JpZ2h0Y2xpY2snLCBlbWl0dGVyOiB0aGlzLm1hcFJpZ2h0Q2xpY2t9LFxuICAgICAge25hbWU6ICdkYmxjbGljaycsIGVtaXR0ZXI6IHRoaXMubWFwRGJsQ2xpY2t9LFxuICAgIF07XG5cbiAgICBldmVudHMuZm9yRWFjaChlID0+IHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzLl9tYXBzV3JhcHBlci5zdWJzY3JpYmVUb01hcEV2ZW50KGUubmFtZSkuc3Vic2NyaWJlKFxuICAgICAgICAoW2V2ZW50XSkgPT4ge1xuICAgICAgICAgIC8vIHRoZSBwbGFjZUlkIHdpbGwgYmUgdW5kZWZpbmVkIGluIGNhc2UgdGhlIGV2ZW50IHdhcyBub3QgYW4gSWNvbk1vdXNlRXZlbnQgKGdvb2dsZSB0eXBlcylcbiAgICAgICAgICBpZiAoIChldmVudCBhcyBnb29nbGUubWFwcy5JY29uTW91c2VFdmVudCkucGxhY2VJZCAmJiAhdGhpcy5zaG93RGVmYXVsdEluZm9XaW5kb3cpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5lbWl0dGVyLmVtaXQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLnB1c2gocyk7XG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlQ29udHJvbENoYW5nZSgpIHtcbiAgICB0aGlzLl9zZXRDb250cm9scygpO1xuICAgIHRoaXMubWFwQ29udHJvbHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc2V0Q29udHJvbHMoKSk7XG4gIH1cblxuICBfc2V0Q29udHJvbHMoKSB7XG4gICAgY29uc3QgY29udHJvbE9wdGlvbnM6IFBhcnRpYWw8Z29vZ2xlLm1hcHMuTWFwT3B0aW9ucz4gPSB7XG4gICAgICBmdWxsc2NyZWVuQ29udHJvbDogIXRoaXMuZGlzYWJsZURlZmF1bHRVSSxcbiAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgIHBhbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgcm90YXRlQ29udHJvbDogZmFsc2UsXG4gICAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6ICF0aGlzLmRpc2FibGVEZWZhdWx0VUksXG4gICAgICB6b29tQ29udHJvbDogIXRoaXMuZGlzYWJsZURlZmF1bHRVSSxcbiAgICB9O1xuXG4gICAgdGhpcy5fbWFwc1dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm1hcENvbnRyb2xzLmZvckVhY2goY29udHJvbCA9PiBPYmplY3QuYXNzaWduKGNvbnRyb2xPcHRpb25zLCBjb250cm9sLmdldE9wdGlvbnMoKSkpO1xuICAgICAgdGhpcy5fbWFwc1dyYXBwZXIuc2V0TWFwT3B0aW9ucyhjb250cm9sT3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==