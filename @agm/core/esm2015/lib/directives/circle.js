import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CircleManager } from '../services/managers/circle-manager';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../services/managers/circle-manager';
export class AgmCircle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new EventEmitter();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new EventEmitter();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new EventEmitter();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new EventEmitter();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new EventEmitter();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        // tslint:enable: no-string-literal
        this._updateCircleOptionsChanges(changes);
    }
    _updateCircleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmCircle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragstart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager.createEventObservable(eventName, this).subscribe((value) => {
                switch (eventName) {
                    case 'radius_changed':
                        this._manager.getRadius(this).then((radius) => eventEmitter.emit(radius));
                        break;
                    case 'center_changed':
                        this._manager.getCenter(this).then((center) => eventEmitter.emit({ lat: center.lat(), lng: center.lng() }));
                        break;
                    default:
                        eventEmitter.emit(value);
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(s => s.unsubscribe());
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds() { return this._manager.getBounds(this); }
    getCenter() { return this._manager.getCenter(this); }
}
AgmCircle.ɵfac = function AgmCircle_Factory(t) { return new (t || AgmCircle)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.CircleManager)); };
AgmCircle.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmCircle, selectors: [["agm-circle"]], inputs: { clickable: "clickable", draggable: ["circleDraggable", "draggable"], editable: "editable", radius: "radius", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", latitude: "latitude", longitude: "longitude", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", zIndex: "zIndex" }, outputs: { centerChange: "centerChange", circleClick: "circleClick", circleDblClick: "circleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", radiusChange: "radiusChange", rightClick: "rightClick" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
AgmCircle._mapOptions = [
    'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
    'visible', 'zIndex', 'clickable',
];
AgmCircle.ctorParameters = () => [
    { type: CircleManager }
];
AgmCircle.propDecorators = {
    latitude: [{ type: Input }],
    longitude: [{ type: Input }],
    clickable: [{ type: Input }],
    draggable: [{ type: Input, args: ['circleDraggable',] }],
    editable: [{ type: Input }],
    fillColor: [{ type: Input }],
    fillOpacity: [{ type: Input }],
    radius: [{ type: Input }],
    strokeColor: [{ type: Input }],
    strokeOpacity: [{ type: Input }],
    strokePosition: [{ type: Input }],
    strokeWeight: [{ type: Input }],
    visible: [{ type: Input }],
    zIndex: [{ type: Input }],
    centerChange: [{ type: Output }],
    circleClick: [{ type: Output }],
    circleDblClick: [{ type: Output }],
    drag: [{ type: Output }],
    dragEnd: [{ type: Output }],
    dragStart: [{ type: Output }],
    mouseDown: [{ type: Output }],
    mouseMove: [{ type: Output }],
    mouseOut: [{ type: Output }],
    mouseOver: [{ type: Output }],
    mouseUp: [{ type: Output }],
    radiusChange: [{ type: Output }],
    rightClick: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmCircle, [{
        type: Directive,
        args: [{
                selector: 'agm-circle'
            }]
    }], function () { return [{ type: ɵngcc1.CircleManager }]; }, { clickable: [{
            type: Input
        }], draggable: [{
            type: Input,
            args: ['circleDraggable']
        }], editable: [{
            type: Input
        }], radius: [{
            type: Input
        }], strokePosition: [{
            type: Input
        }], strokeWeight: [{
            type: Input
        }], visible: [{
            type: Input
        }], centerChange: [{
            type: Output
        }], circleClick: [{
            type: Output
        }], circleDblClick: [{
            type: Output
        }], drag: [{
            type: Output
        }], dragEnd: [{
            type: Output
        }], dragStart: [{
            type: Output
        }], mouseDown: [{
            type: Output
        }], mouseMove: [{
            type: Output
        }], mouseOut: [{
            type: Output
        }], mouseOver: [{
            type: Output
        }], mouseUp: [{
            type: Output
        }], radiusChange: [{
            type: Output
        }], rightClick: [{
            type: Output
        }], latitude: [{
            type: Input
        }], longitude: [{
            type: Input
        }], fillColor: [{
            type: Input
        }], fillOpacity: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeOpacity: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9jaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7O0FBS3BFLE1BQU0sT0FBTyxTQUFTO0FBQUcsSUFxSnZCLFlBQW9CLFFBQXVCO0FBQUksUUFBM0IsYUFBUSxHQUFSLFFBQVEsQ0FBZTtBQUFDLFFBMUk1QztBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsY0FBUyxHQUFHLElBQUksQ0FBQztBQUM1QixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBRSwyQ0FBMkM7QUFDN0MsUUFBNEIsY0FBUyxHQUFHLEtBQUssQ0FBQztBQUM5QyxRQUNFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFXLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFXRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQVcsV0FBTSxHQUFHLENBQUMsQ0FBQztBQUN0QixRQVdFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFXLG1CQUFjLEdBQTRDLFFBQVEsQ0FBQztBQUM5RSxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxpQkFBWSxHQUFHLENBQUMsQ0FBQztBQUM1QixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxZQUFPLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBTUU7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFZLGlCQUFZLEdBQTRDLElBQUksWUFBWSxFQUE2QixDQUFDO0FBQ2xILFFBQ0U7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFZLGdCQUFXLEdBQXlDLElBQUksWUFBWSxFQUEwQixDQUFDO0FBQzNHLFFBQ0U7QUFDRjtB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QWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjO0FBQ2hHLElBQUksU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXO0FBQ3BDLENBQUcsQ0FBQyxBQWpKQztBQUFDO0VBSEwsU0FBUyxTQUFDLHBCQUc4QixZQUxoQyxhQUFhO0FBQUc7T0FHdkIsUUFBUSxFQUFFLGpCQUhnQjtBQUdKLGVBQ3ZCLGZBSndELHVCQVN0RCxLQUFLO0FBQUssd0JBS1YsS0FBSztBQUFLLHdCQUtWLEtBQUs7QUFBSyx3QkFNVixLQUFLLFNBQUMsaUJBQWlCO0FBQU8sdUJBTTlCLEtBQUs7QUFBSyx3QkFLVixLQUFLO0FBQUssMEJBS1YsS0FBSztBQUFLLHFCQUtWLEtBQUs7QUFBSywwQkFLVixLQUFLO0FBQUssNEJBS1YsS0FBSztBQUFLLDZCQU1WLEtBQUs7QUFBSywyQkFLVixLQUFLO0FBQUssc0JBS1YsS0FBSztBQUFLLHFCQUtWLEtBQUs7QUFBSywyQkFLVixNQUFNO0FBQUssMEJBS1gsTUFBTTtBQUFLLDZCQUtYLE1BQU07QUFBSyxtQkFNWCxNQUFNO0FBQUssc0JBS1gsTUFBTTtBQUFLLHdCQUtYLE1BQU07QUFBSyx3QkFLWCxNQUFNO0FBQUssd0JBS1gsTUFBTTtBQUFLLHVCQUtYLE1BQU07QUFBSyx3QkFLWCxNQUFNO0FBQUssc0JBS1gsTUFBTTtBQUFLLDJCQUtYLE1BQU07QUFBSyx5QkFLWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDaXJjbGVNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvY2lyY2xlLW1hbmFnZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tY2lyY2xlJyxcbn0pXG5leHBvcnQgY2xhc3MgQWdtQ2lyY2xlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgbGF0aXR1ZGUgcG9zaXRpb24gb2YgdGhlIGNpcmNsZSAocmVxdWlyZWQpLlxuICAgKi9cbiAgQElucHV0KCkgbGF0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGNsaWNrYWJsZSBwb3NpdGlvbiBvZiB0aGUgY2lyY2xlIChyZXF1aXJlZCkuXG4gICAqL1xuICBASW5wdXQoKSBsb25naXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBDaXJjbGUgaGFuZGxlcyBtb3VzZSBldmVudHMuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSBjbGlja2FibGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGRyYWcgdGhpcyBjaXJjbGUgb3ZlciB0aGUgbWFwLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdjaXJjbGVEcmFnZ2FibGUnKSBkcmFnZ2FibGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiBlZGl0IHRoaXMgY2lyY2xlIGJ5IGRyYWdnaW5nIHRoZSBjb250cm9sIHBvaW50cyBzaG93biBhdFxuICAgKiB0aGUgY2VudGVyIGFuZCBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2Ugb2YgdGhlIGNpcmNsZS4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBASW5wdXQoKSBlZGl0YWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsbCBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZCBjb2xvcnMuXG4gICAqL1xuICBASW5wdXQoKSBmaWxsQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGZpbGwgb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wLlxuICAgKi9cbiAgQElucHV0KCkgZmlsbE9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHJhZGl1cyBpbiBtZXRlcnMgb24gdGhlIEVhcnRoJ3Mgc3VyZmFjZS5cbiAgICovXG4gIEBJbnB1dCgpIHJhZGl1cyA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWQgY29sb3JzLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjBcbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSBwb3NpdGlvbi4gRGVmYXVsdHMgdG8gQ0VOVEVSLlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIG5vdCBzdXBwb3J0ZWQgb24gSW50ZXJuZXQgRXhwbG9yZXIgOCBhbmQgZWFybGllci5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZVBvc2l0aW9uOiBrZXlvZiB0eXBlb2YgZ29vZ2xlLm1hcHMuU3Ryb2tlUG9zaXRpb24gPSAnQ0VOVEVSJztcblxuICAvKipcbiAgICogVGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbHMuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VXZWlnaHQgPSAwO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgY2lyY2xlIGlzIHZpc2libGUgb24gdGhlIG1hcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIHZpc2libGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgekluZGV4IGNvbXBhcmVkIHRvIG90aGVyIHBvbHlzLlxuICAgKi9cbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgY2lyY2xlJ3MgY2VudGVyIGlzIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2VudGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWw+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgZW1pdHRlciBnZXRzIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGNpcmNsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBjaXJjbGVDbGljazogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAT3V0cHV0KCkgY2lyY2xlRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyByZXBlYXRlZGx5IGZpcmVkIHdoaWxlIHRoZSB1c2VyIGRyYWdzIHRoZSBjaXJjbGUuXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIGRyYWc6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VuZDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgRE9NIG1vdXNlZG93biBldmVudCBpcyBmaXJlZCBvbiB0aGUgY2lyY2xlLlxuICAgKi9cbiAgQE91dHB1dCgpIG1vdXNlRG93bjogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZW1vdmUgZXZlbnQgaXMgZmlyZWQgb24gdGhlIGNpcmNsZS5cbiAgICovXG4gIEBPdXRwdXQoKSBtb3VzZU1vdmU6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBjaXJjbGUgbW91c2VvdXQuXG4gICAqL1xuICBAT3V0cHV0KCkgbW91c2VPdXQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCBvbiBjaXJjbGUgbW91c2VvdmVyLlxuICAgKi9cbiAgQE91dHB1dCgpIG1vdXNlT3ZlcjogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZXVwIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAT3V0cHV0KCkgbW91c2VVcDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIGNpcmNsZSdzIHJhZGl1cyBpcyBjaGFuZ2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHJhZGl1c0NoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBjaXJjbGUgaXMgcmlnaHQtY2xpY2tlZCBvbi5cbiAgICovXG4gIEBPdXRwdXQoKSByaWdodENsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBfY2lyY2xlQWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcblxuICBwcml2YXRlIHN0YXRpYyBfbWFwT3B0aW9uczogc3RyaW5nW10gPSBbXG4gICAgJ2ZpbGxDb2xvcicsICdmaWxsT3BhY2l0eScsICdzdHJva2VDb2xvcicsICdzdHJva2VPcGFjaXR5JywgJ3N0cm9rZVBvc2l0aW9uJywgJ3N0cm9rZVdlaWdodCcsXG4gICAgJ3Zpc2libGUnLCAnekluZGV4JywgJ2NsaWNrYWJsZScsXG4gIF07XG5cbiAgcHJpdmF0ZSBfZXZlbnRTdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21hbmFnZXI6IENpcmNsZU1hbmFnZXIpIHt9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9tYW5hZ2VyLmFkZENpcmNsZSh0aGlzKTtcbiAgICB0aGlzLl9jaXJjbGVBZGRlZFRvTWFuYWdlciA9IHRydWU7XG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuICAgIGlmICghdGhpcy5fY2lyY2xlQWRkZWRUb01hbmFnZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGU6IG5vLXN0cmluZy1saXRlcmFsXG4gICAgaWYgKGNoYW5nZXNbJ2xhdGl0dWRlJ10gfHwgY2hhbmdlc1snbG9uZ2l0dWRlJ10pIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0Q2VudGVyKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snZWRpdGFibGUnXSkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXRFZGl0YWJsZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2RyYWdnYWJsZSddKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldERyYWdnYWJsZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ3Zpc2libGUnXSkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXRWaXNpYmxlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1sncmFkaXVzJ10pIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0UmFkaXVzKHRoaXMpO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIHRoaXMuX3VwZGF0ZUNpcmNsZU9wdGlvbnNDaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2lyY2xlT3B0aW9uc0NoYW5nZXMoY2hhbmdlczoge1twcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuICAgIGNvbnN0IG9wdGlvbnM6IHtbcHJvcE5hbWU6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgICBjb25zdCBvcHRpb25LZXlzID1cbiAgICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGsgPT4gQWdtQ2lyY2xlLl9tYXBPcHRpb25zLmluZGV4T2YoaykgIT09IC0xKTtcbiAgICBvcHRpb25LZXlzLmZvckVhY2goKGspID0+IHsgb3B0aW9uc1trXSA9IGNoYW5nZXNba10uY3VycmVudFZhbHVlOyB9KTtcblxuICAgIGlmIChvcHRpb25LZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGV2ZW50czogTWFwPHN0cmluZywgRXZlbnRFbWl0dGVyPGFueT4+ID0gbmV3IE1hcDxzdHJpbmcsIEV2ZW50RW1pdHRlcjxhbnk+PigpO1xuICAgIGV2ZW50cy5zZXQoJ2NlbnRlcl9jaGFuZ2VkJywgdGhpcy5jZW50ZXJDaGFuZ2UpO1xuICAgIGV2ZW50cy5zZXQoJ2NsaWNrJywgdGhpcy5jaXJjbGVDbGljayk7XG4gICAgZXZlbnRzLnNldCgnZGJsY2xpY2snLCB0aGlzLmNpcmNsZURibENsaWNrKTtcbiAgICBldmVudHMuc2V0KCdkcmFnJywgdGhpcy5kcmFnKTtcbiAgICBldmVudHMuc2V0KCdkcmFnZW5kJywgdGhpcy5kcmFnRW5kKTtcbiAgICBldmVudHMuc2V0KCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydCk7XG4gICAgZXZlbnRzLnNldCgnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd24pO1xuICAgIGV2ZW50cy5zZXQoJ21vdXNlbW92ZScsIHRoaXMubW91c2VNb3ZlKTtcbiAgICBldmVudHMuc2V0KCdtb3VzZW91dCcsIHRoaXMubW91c2VPdXQpO1xuICAgIGV2ZW50cy5zZXQoJ21vdXNlb3ZlcicsIHRoaXMubW91c2VPdmVyKTtcbiAgICBldmVudHMuc2V0KCdtb3VzZXVwJywgdGhpcy5tb3VzZVVwKTtcbiAgICBldmVudHMuc2V0KCdyYWRpdXNfY2hhbmdlZCcsIHRoaXMucmFkaXVzQ2hhbmdlKTtcbiAgICBldmVudHMuc2V0KCdyaWdodGNsaWNrJywgdGhpcy5yaWdodENsaWNrKTtcblxuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudEVtaXR0ZXIsIGV2ZW50TmFtZSkgPT4ge1xuICAgICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgICAgdGhpcy5fbWFuYWdlci5jcmVhdGVFdmVudE9ic2VydmFibGU8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oZXZlbnROYW1lLCB0aGlzKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICBjYXNlICdyYWRpdXNfY2hhbmdlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5nZXRSYWRpdXModGhpcykudGhlbigocmFkaXVzKSA9PiBldmVudEVtaXR0ZXIuZW1pdChyYWRpdXMpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnY2VudGVyX2NoYW5nZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZXIuZ2V0Q2VudGVyKHRoaXMpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChjZW50ZXIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEVtaXR0ZXIuZW1pdCh7bGF0OiBjZW50ZXIubGF0KCksIGxuZzogY2VudGVyLmxuZygpfSBhcyBnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5fbWFuYWdlci5yZW1vdmVDaXJjbGUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgTGF0TG5nQm91bmRzIG9mIHRoaXMgQ2lyY2xlLlxuICAgKi9cbiAgZ2V0Qm91bmRzKCk6IFByb21pc2U8Z29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzPiB7IHJldHVybiB0aGlzLl9tYW5hZ2VyLmdldEJvdW5kcyh0aGlzKTsgfVxuXG4gIGdldENlbnRlcigpOiBQcm9taXNlPGdvb2dsZS5tYXBzLkxhdExuZz4geyByZXR1cm4gdGhpcy5fbWFuYWdlci5nZXRDZW50ZXIodGhpcyk7IH1cbn1cbiJdfQ==