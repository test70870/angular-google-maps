import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { PolygonManager } from '../services/managers/polygon-manager';
/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
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
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: LatLngLiteral[] = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: LatLngLiteral[][] = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../services/managers/polygon-manager';
export class AgmPolygon {
    constructor(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new EventEmitter();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new EventEmitter();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new EventEmitter();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new EventEmitter();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new EventEmitter();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new EventEmitter();
        /**
         * This event is fired after Polygon first path changes.
         */
        this.polyPathsChange = new EventEmitter();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    ngAfterContentInit() {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    }
    ngOnChanges(changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    }
    _init() {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.polyClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.polyDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.polyDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.polyDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.polyDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.polyMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.polyMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.polyMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.polyMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.polyMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.polyRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polygonManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polygonManager.createPathEventObservable(this)
            .then(paths$ => {
            const os = paths$.subscribe(pathEvent => this.polyPathsChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    _updatePolygonOptions(changes) {
        return Object.keys(changes)
            .filter(k => AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
    getPath() {
        return this._polygonManager.getPath(this);
    }
    getPaths() {
        return this._polygonManager.getPaths(this);
    }
}
AgmPolygon.ɵfac = function AgmPolygon_Factory(t) { return new (t || AgmPolygon)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.PolygonManager)); };
AgmPolygon.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmPolygon, selectors: [["agm-polygon"]], inputs: { clickable: "clickable", draggable: ["polyDraggable", "draggable"], editable: "editable", geodesic: "geodesic", paths: "paths", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex" }, outputs: { polyClick: "polyClick", polyDblClick: "polyDblClick", polyDrag: "polyDrag", polyDragEnd: "polyDragEnd", polyDragStart: "polyDragStart", polyMouseDown: "polyMouseDown", polyMouseMove: "polyMouseMove", polyMouseOut: "polyMouseOut", polyMouseOver: "polyMouseOver", polyMouseUp: "polyMouseUp", polyRightClick: "polyRightClick", polyPathsChange: "polyPathsChange" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible',
];
AgmPolygon.ctorParameters = () => [
    { type: PolygonManager }
];
AgmPolygon.propDecorators = {
    clickable: [{ type: Input }],
    draggable: [{ type: Input, args: ['polyDraggable',] }],
    editable: [{ type: Input }],
    fillColor: [{ type: Input }],
    fillOpacity: [{ type: Input }],
    geodesic: [{ type: Input }],
    paths: [{ type: Input }],
    strokeColor: [{ type: Input }],
    strokeOpacity: [{ type: Input }],
    strokeWeight: [{ type: Input }],
    visible: [{ type: Input }],
    zIndex: [{ type: Input }],
    polyClick: [{ type: Output }],
    polyDblClick: [{ type: Output }],
    polyDrag: [{ type: Output }],
    polyDragEnd: [{ type: Output }],
    polyDragStart: [{ type: Output }],
    polyMouseDown: [{ type: Output }],
    polyMouseMove: [{ type: Output }],
    polyMouseOut: [{ type: Output }],
    polyMouseOver: [{ type: Output }],
    polyMouseUp: [{ type: Output }],
    polyRightClick: [{ type: Output }],
    polyPathsChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmPolygon, [{
        type: Directive,
        args: [{
                selector: 'agm-polygon'
            }]
    }], function () { return [{ type: ɵngcc1.PolygonManager }]; }, { clickable: [{
            type: Input
        }], draggable: [{
            type: Input,
            args: ['polyDraggable']
        }], editable: [{
            type: Input
        }], geodesic: [{
            type: Input
        }], paths: [{
            type: Input
        }], polyClick: [{
            type: Output
        }], polyDblClick: [{
            type: Output
        }], polyDrag: [{
            type: Output
        }], polyDragEnd: [{
            type: Output
        }], polyDragStart: [{
            type: Output
        }], polyMouseDown: [{
            type: Output
        }], polyMouseMove: [{
            type: Output
        }], polyMouseOut: [{
            type: Output
        }], polyMouseOver: [{
            type: Output
        }], polyMouseUp: [{
            type: Output
        }], polyRightClick: [{
            type: Output
        }], polyPathsChange: [{
            type: Output
        }], fillColor: [{
            type: Input
        }], fillOpacity: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeOpacity: [{
            type: Input
        }], strokeWeight: [{
            type: Input
        }], visible: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvcG9seWdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUF3QixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRzlILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUd0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFJSCxNQUFNLE9BQU8sVUFBVTtBQUFHLElBc0p4QixZQUFvQixlQUErQjtBQUFJLFFBQW5DLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtBQUFDLFFBckpwRDtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsY0FBUyxHQUFHLElBQUksQ0FBQztBQUM1QixRQUNFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLDJDQUEyQztBQUM3QyxRQUEwQixjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVDLFFBQ0U7QUFDRjtBQUNNO0FBRUEsV0FERDtBQUNMLFFBQVcsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQVlFO0FBQ0Y7QUFDTTtBQUNNO0FBQ007QUFDTTtBQUVBLFdBRG5CO0FBQ0wsUUFBVyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQ0U7QUFDRjtBQUNNO0FBQ007QUFDTTtBQUNNO0FBQ007QUFDTTtBQUNN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LElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdkYsWUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDN0YsWUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDakcsWUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBOEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDckcsWUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBOEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDckcsWUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBOEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkcsWUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBOEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDckcsWUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBOEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJ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LEFBaEpDO0FBQUM7RUFITCxTQUFTLFNBQUMscEJBRytCLFlBdkRqQyxjQUFjO0FBQUc7TUFxRHhCLFFBQVEsRUFBRSxhQUFhLDdCQXJESTtjQXNENUIsZEF0RDBELHdCQTJEeEQsS0FBSztBQUFLLHdCQU9WLEtBQUssU0FBQyxlQUFlO0FBQU8sdUJBTTVCLEtBQUs7QUFBSyx3QkFNVixLQUFLO0FBQUssMEJBS1YsS0FBSztBQUFLLHVCQVNWLEtBQUs7QUFBSyxvQkFhVixLQUFLO0FBQUssMEJBUVYsS0FBSztBQUFLLDRCQUtWLEtBQUs7QUFBSywyQkFLVixLQUFLO0FBQUssc0JBS1YsS0FBSztBQUFLLHFCQUtWLEtBQUs7QUFBSyx3QkFLVixNQUFNO0FBQUssMkJBS1gsTUFBTTtBQUFLLHVCQUtYLE1BQU07QUFBSywwQkFLWCxNQUFNO0FBQUssNEJBS1gsTUFBTTtBQUFLLDRCQUtYLE1BQU07QUFBSyw0QkFLWCxNQUFNO0FBQUssMkJBS1gsTUFBTTtBQUFLLDRCQUtYLE1BQU07QUFBSywwQkFLWCxNQUFNO0FBQUssNkJBS1gsTUFBTTtBQUFLLDhCQUtYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUG9seWdvbk1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9tYW5hZ2Vycy9wb2x5Z29uLW1hbmFnZXInO1xuaW1wb3J0IHsgTVZDRXZlbnQgfSBmcm9tICcuLi91dGlscy9tdmNhcnJheS11dGlscyc7XG5cbi8qKlxuICogQWdtUG9seWdvbiByZW5kZXJzIGEgcG9seWdvbiBvbiBhIHtAbGluayBBZ21NYXB9XG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgYWdtLW1hcCB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLXBvbHlnb24gW3BhdGhzXT1cInBhdGhzXCI+XG4gKiAgICAgIDwvYWdtLXBvbHlnb24+XG4gKiAgICA8L2FnbS1tYXA+XG4gKiAgYFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBNeU1hcENtcCB7XG4gKiAgIGxhdDogbnVtYmVyID0gMDtcbiAqICAgbG5nOiBudW1iZXIgPSAwO1xuICogICB6b29tOiBudW1iZXIgPSAxMDtcbiAqICAgcGF0aHM6IExhdExuZ0xpdGVyYWxbXSA9IFtcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfVxuICogICBdXG4gKiAgIC8vIE5lc3RpbmcgcGF0aHMgd2lsbCBjcmVhdGUgYSBob2xlIHdoZXJlIHRoZXkgb3ZlcmxhcDtcbiAqICAgbmVzdGVkUGF0aHM6IExhdExuZ0xpdGVyYWxbXVtdID0gW1tcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMjAgfSxcbiAqICAgICB7IGxhdDogMTAsIGxuZzogMTAgfSxcbiAqICAgICB7IGxhdDogMCwgIGxuZzogMTAgfVxuICogICBdLCBbXG4gKiAgICAgeyBsYXQ6IDAsIGxuZzogMTUgfSxcbiAqICAgICB7IGxhdDogMCwgbG5nOiAyMCB9LFxuICogICAgIHsgbGF0OiA1LCBsbmc6IDIwIH0sXG4gKiAgICAgeyBsYXQ6IDUsIGxuZzogMTUgfSxcbiAqICAgICB7IGxhdDogMCwgbG5nOiAxNSB9XG4gKiAgIF1dXG4gKiB9XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLXBvbHlnb24nLFxufSlcbmV4cG9ydCBjbGFzcyBBZ21Qb2x5Z29uIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBQb2x5Z29uIGhhbmRsZXMgbW91c2UgZXZlbnRzLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2thYmxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBkcmFnIHRoaXMgc2hhcGUgb3ZlciB0aGUgbWFwLiBUaGUgZ2VvZGVzaWNcbiAgICogcHJvcGVydHkgZGVmaW5lcyB0aGUgbW9kZSBvZiBkcmFnZ2luZy4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgncG9seURyYWdnYWJsZScpIGRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyBzaGFwZSBieSBkcmFnZ2luZyB0aGUgY29udHJvbFxuICAgKiBwb2ludHMgc2hvd24gYXQgdGhlIHZlcnRpY2VzIGFuZCBvbiBlYWNoIHNlZ21lbnQuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgQElucHV0KCkgZWRpdGFibGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGZpbGwgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWRcbiAgICogbmFtZWQgY29sb3JzLlxuICAgKi9cbiAgQElucHV0KCkgZmlsbENvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmaWxsIG9wYWNpdHkgYmV0d2VlbiAwLjAgYW5kIDEuMFxuICAgKi9cbiAgQElucHV0KCkgZmlsbE9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmUgaW50ZXJwcmV0ZWQgYXMgZ2VvZGVzaWMgYW5kIHdpbGxcbiAgICogZm9sbG93IHRoZSBjdXJ2YXR1cmUgb2YgdGhlIEVhcnRoLiBXaGVuIGZhbHNlLCBlZGdlcyBvZiB0aGUgcG9seWdvbiBhcmVcbiAgICogcmVuZGVyZWQgYXMgc3RyYWlnaHQgbGluZXMgaW4gc2NyZWVuIHNwYWNlLiBOb3RlIHRoYXQgdGhlIHNoYXBlIG9mIGFcbiAgICogZ2VvZGVzaWMgcG9seWdvbiBtYXkgYXBwZWFyIHRvIGNoYW5nZSB3aGVuIGRyYWdnZWQsIGFzIHRoZSBkaW1lbnNpb25zXG4gICAqIGFyZSBtYWludGFpbmVkIHJlbGF0aXZlIHRvIHRoZSBzdXJmYWNlIG9mIHRoZSBlYXJ0aC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoKSBnZW9kZXNpYyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgb3JkZXJlZCBzZXF1ZW5jZSBvZiBjb29yZGluYXRlcyB0aGF0IGRlc2lnbmF0ZXMgYSBjbG9zZWQgbG9vcC5cbiAgICogVW5saWtlIHBvbHlsaW5lcywgYSBwb2x5Z29uIG1heSBjb25zaXN0IG9mIG9uZSBvciBtb3JlIHBhdGhzLlxuICAgKiAgQXMgYSByZXN1bHQsIHRoZSBwYXRocyBwcm9wZXJ0eSBtYXkgc3BlY2lmeSBvbmUgb3IgbW9yZSBhcnJheXMgb2ZcbiAgICogTGF0TG5nIGNvb3JkaW5hdGVzLiBQYXRocyBhcmUgY2xvc2VkIGF1dG9tYXRpY2FsbHk7IGRvIG5vdCByZXBlYXQgdGhlXG4gICAqIGZpcnN0IHZlcnRleCBvZiB0aGUgcGF0aCBhcyB0aGUgbGFzdCB2ZXJ0ZXguIFNpbXBsZSBwb2x5Z29ucyBtYXkgYmVcbiAgICogZGVmaW5lZCB1c2luZyBhIHNpbmdsZSBhcnJheSBvZiBMYXRMbmdzLiBNb3JlIGNvbXBsZXggcG9seWdvbnMgbWF5XG4gICAqIHNwZWNpZnkgYW4gYXJyYXkgb2YgYXJyYXlzLiBBbnkgc2ltcGxlIGFycmF5cyBhcmUgY29udmVydGVkIGludG8gQXJyYXlzLlxuICAgKiBJbnNlcnRpbmcgb3IgcmVtb3ZpbmcgTGF0TG5ncyBmcm9tIHRoZSBBcnJheSB3aWxsIGF1dG9tYXRpY2FsbHkgdXBkYXRlXG4gICAqIHRoZSBwb2x5Z29uIG9uIHRoZSBtYXAuXG4gICAqL1xuICBASW5wdXQoKSBwYXRoczogZ29vZ2xlLm1hcHMuTGF0TG5nW10gfCBnb29nbGUubWFwcy5MYXRMbmdbXVtdIHxcbiAgICAgIGdvb2dsZS5tYXBzLk1WQ0FycmF5PGdvb2dsZS5tYXBzLkxhdExuZz4gfCBnb29nbGUubWFwcy5NVkNBcnJheTxnb29nbGUubWFwcy5NVkNBcnJheTxnb29nbGUubWFwcy5MYXRMbmc+PiB8XG4gICAgICBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsW10gfCBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsW11bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkXG4gICAqIG5hbWVkIGNvbG9ycy5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxzLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBwb2x5Z29uIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSB6SW5kZXggY29tcGFyZWQgdG8gb3RoZXIgcG9seXMuXG4gICAqL1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seUNsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gZGJsY2xpY2sgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seURibENsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBwb2x5Z29uLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlEcmFnOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgcG9seWdvbi5cbiAgICovXG4gIEBPdXRwdXQoKSBwb2x5RHJhZ0VuZDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBwb2x5Z29uLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vkb3duIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBQb2x5Z29uLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlNb3VzZURvd246IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb24uXG4gICAqL1xuICBAT3V0cHV0KCkgcG9seU1vdXNlTW92ZTogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gUG9seWdvbiBtb3VzZW91dC5cbiAgICovXG4gIEBPdXRwdXQoKSBwb2x5TW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIG9uIFBvbHlnb24gbW91c2VvdmVyLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlNb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZSB0aGUgRE9NIG1vdXNldXAgZXZlbnQgaXMgZmlyZWQgb24gdGhlIFBvbHlnb25cbiAgICovXG4gIEBPdXRwdXQoKSBwb2x5TW91c2VVcDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgUG9seWdvbiBpcyByaWdodC1jbGlja2VkIG9uLlxuICAgKi9cbiAgQE91dHB1dCgpIHBvbHlSaWdodENsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBhZnRlciBQb2x5Z29uIGZpcnN0IHBhdGggY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSBwb2x5UGF0aHNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1WQ0V2ZW50PGdvb2dsZS5tYXBzLkxhdExuZ1tdIHwgZ29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbFtdPj4oKTtcblxuICBwcml2YXRlIHN0YXRpYyBfcG9seWdvbk9wdGlvbnNBdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnY2xpY2thYmxlJywgJ2RyYWdnYWJsZScsICdlZGl0YWJsZScsICdmaWxsQ29sb3InLCAnZmlsbE9wYWNpdHknLCAnZ2VvZGVzaWMnLCAnaWNvbicsICdtYXAnLFxuICAgICdwYXRocycsICdzdHJva2VDb2xvcicsICdzdHJva2VPcGFjaXR5JywgJ3N0cm9rZVdlaWdodCcsICd2aXNpYmxlJywgJ3pJbmRleCcsICdkcmFnZ2FibGUnLFxuICAgICdlZGl0YWJsZScsICd2aXNpYmxlJyxcbiAgXTtcblxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuICBwcml2YXRlIF9wb2x5Z29uQWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb2x5Z29uTWFuYWdlcjogUG9seWdvbk1hbmFnZXIpIHsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICghdGhpcy5fcG9seWdvbkFkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9wb2x5Z29uQWRkZWRUb01hbmFnZXIpIHtcbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wb2x5Z29uTWFuYWdlci5zZXRQb2x5Z29uT3B0aW9ucyh0aGlzLCB0aGlzLl91cGRhdGVQb2x5Z29uT3B0aW9ucyhjaGFuZ2VzKSk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0KCkge1xuICAgIHRoaXMuX3BvbHlnb25NYW5hZ2VyLmFkZFBvbHlnb24odGhpcyk7XG4gICAgdGhpcy5fcG9seWdvbkFkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXG4gICAgICB7IG5hbWU6ICdjbGljaycsIGhhbmRsZXI6IChldjogZ29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQpID0+IHRoaXMucG9seUNsaWNrLmVtaXQoZXYpIH0sXG4gICAgICB7IG5hbWU6ICdkYmxjbGljaycsIGhhbmRsZXI6IChldjogZ29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQpID0+IHRoaXMucG9seURibENsaWNrLmVtaXQoZXYpIH0sXG4gICAgICB7IG5hbWU6ICdkcmFnJywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5Nb3VzZUV2ZW50KSA9PiB0aGlzLnBvbHlEcmFnLmVtaXQoZXYpIH0sXG4gICAgICB7IG5hbWU6ICdkcmFnZW5kJywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5Nb3VzZUV2ZW50KSA9PiB0aGlzLnBvbHlEcmFnRW5kLmVtaXQoZXYpIH0sXG4gICAgICB7IG5hbWU6ICdkcmFnc3RhcnQnLCBoYW5kbGVyOiAoZXY6IGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQpID0+IHRoaXMucG9seURyYWdTdGFydC5lbWl0KGV2KSB9LFxuICAgICAgeyBuYW1lOiAnbW91c2Vkb3duJywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudCkgPT4gdGhpcy5wb2x5TW91c2VEb3duLmVtaXQoZXYpIH0sXG4gICAgICB7IG5hbWU6ICdtb3VzZW1vdmUnLCBoYW5kbGVyOiAoZXY6IGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLnBvbHlNb3VzZU1vdmUuZW1pdChldikgfSxcbiAgICAgIHsgbmFtZTogJ21vdXNlb3V0JywgaGFuZGxlcjogKGV2OiBnb29nbGUubWFwcy5Qb2x5TW91c2VFdmVudCkgPT4gdGhpcy5wb2x5TW91c2VPdXQuZW1pdChldikgfSxcbiAgICAgIHsgbmFtZTogJ21vdXNlb3ZlcicsIGhhbmRsZXI6IChldjogZ29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQpID0+IHRoaXMucG9seU1vdXNlT3Zlci5lbWl0KGV2KSB9LFxuICAgICAgeyBuYW1lOiAnbW91c2V1cCcsIGhhbmRsZXI6IChldjogZ29vZ2xlLm1hcHMuUG9seU1vdXNlRXZlbnQpID0+IHRoaXMucG9seU1vdXNlVXAuZW1pdChldikgfSxcbiAgICAgIHsgbmFtZTogJ3JpZ2h0Y2xpY2snLCBoYW5kbGVyOiAoZXY6IGdvb2dsZS5tYXBzLlBvbHlNb3VzZUV2ZW50KSA9PiB0aGlzLnBvbHlSaWdodENsaWNrLmVtaXQoZXYpIH0sXG4gICAgXTtcbiAgICBoYW5kbGVycy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGNvbnN0IG9zID0gdGhpcy5fcG9seWdvbk1hbmFnZXIuY3JlYXRlRXZlbnRPYnNlcnZhYmxlKG9iai5uYW1lLCB0aGlzKS5zdWJzY3JpYmUob2JqLmhhbmRsZXIpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKG9zKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3BvbHlnb25NYW5hZ2VyLmNyZWF0ZVBhdGhFdmVudE9ic2VydmFibGUodGhpcylcbiAgICAudGhlbihwYXRocyQgPT4ge1xuICAgICAgY29uc3Qgb3MgPSBwYXRocyQuc3Vic2NyaWJlKHBhdGhFdmVudCA9PiB0aGlzLnBvbHlQYXRoc0NoYW5nZS5lbWl0KHBhdGhFdmVudCkpO1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKG9zKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBvbHlnb25PcHRpb25zKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiBnb29nbGUubWFwcy5Qb2x5Z29uT3B0aW9ucyB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGNoYW5nZXMpXG4gICAgICAuZmlsdGVyKGsgPT4gQWdtUG9seWdvbi5fcG9seWdvbk9wdGlvbnNBdHRyaWJ1dGVzLmluZGV4T2YoaykgIT09IC0xKVxuICAgICAgLnJlZHVjZSgob2JqOiBhbnksIGs6IHN0cmluZykgPT4ge1xuICAgICAgICBvYmpba10gPSBjaGFuZ2VzW2tdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9wb2x5Z29uTWFuYWdlci5kZWxldGVQb2x5Z29uKHRoaXMpO1xuICAgIC8vIHVuc3Vic2NyaWJlIGFsbCByZWdpc3RlcmVkIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaCgocykgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIGdldFBhdGgoKTogUHJvbWlzZTxnb29nbGUubWFwcy5MYXRMbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLl9wb2x5Z29uTWFuYWdlci5nZXRQYXRoKHRoaXMpO1xuICB9XG5cbiAgZ2V0UGF0aHMoKTogUHJvbWlzZTxnb29nbGUubWFwcy5MYXRMbmdbXVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvbHlnb25NYW5hZ2VyLmdldFBhdGhzKHRoaXMpO1xuICB9XG59XG4iXX0=