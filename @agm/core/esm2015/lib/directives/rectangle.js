import { Directive, EventEmitter, Input, Output, } from '@angular/core';
import { RectangleManager } from '../services/managers/rectangle-manager';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../services/managers/rectangle-manager';
export class AgmRectangle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */
        this.editable = false;
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
         * Whether this rectangle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */
        this.boundsChange = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleClick = new EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleDblClick = new EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new EventEmitter();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */
        this.dragEnd = new EventEmitter();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */
        this.dragStart = new EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */
        this.mouseDown = new EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */
        this.mouseMove = new EventEmitter();
        /**
         * This event is fired on rectangle mouseout.
         */
        this.mouseOut = new EventEmitter();
        /**
         * This event is fired on rectangle mouseover.
         */
        this.mouseOver = new EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */
        this.mouseUp = new EventEmitter();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */
        this.rightClick = new EventEmitter();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
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
        // tslint:enable: no-string-literal
        this._updateRectangleOptionsChanges(changes);
    }
    _updateRectangleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmRectangle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach(k => {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager
                .createEventObservable(eventName, this)
                .subscribe(value => {
                switch (eventName) {
                    case 'bounds_changed':
                        this._manager.getBounds(this).then(bounds => eventEmitter.emit({
                            north: bounds.getNorthEast().lat(),
                            east: bounds.getNorthEast().lng(),
                            south: bounds.getSouthWest().lat(),
                            west: bounds.getSouthWest().lng(),
                        }));
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
        this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds() {
        return this._manager.getBounds(this);
    }
}
AgmRectangle.ɵfac = function AgmRectangle_Factory(t) { return new (t || AgmRectangle)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.RectangleManager)); };
AgmRectangle.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmRectangle, selectors: [["agm-rectangle"]], inputs: { clickable: "clickable", draggable: ["rectangleDraggable", "draggable"], editable: "editable", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", north: "north", east: "east", south: "south", west: "west", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", zIndex: "zIndex" }, outputs: { boundsChange: "boundsChange", rectangleClick: "rectangleClick", rectangleDblClick: "rectangleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", rightClick: "rightClick" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
AgmRectangle._mapOptions = [
    'fillColor',
    'fillOpacity',
    'strokeColor',
    'strokeOpacity',
    'strokePosition',
    'strokeWeight',
    'visible',
    'zIndex',
    'clickable',
];
AgmRectangle.ctorParameters = () => [
    { type: RectangleManager }
];
AgmRectangle.propDecorators = {
    north: [{ type: Input }],
    east: [{ type: Input }],
    south: [{ type: Input }],
    west: [{ type: Input }],
    clickable: [{ type: Input }],
    draggable: [{ type: Input, args: ['rectangleDraggable',] }],
    editable: [{ type: Input }],
    fillColor: [{ type: Input }],
    fillOpacity: [{ type: Input }],
    strokeColor: [{ type: Input }],
    strokeOpacity: [{ type: Input }],
    strokePosition: [{ type: Input }],
    strokeWeight: [{ type: Input }],
    visible: [{ type: Input }],
    zIndex: [{ type: Input }],
    boundsChange: [{ type: Output }],
    rectangleClick: [{ type: Output }],
    rectangleDblClick: [{ type: Output }],
    drag: [{ type: Output }],
    dragEnd: [{ type: Output }],
    dragStart: [{ type: Output }],
    mouseDown: [{ type: Output }],
    mouseMove: [{ type: Output }],
    mouseOut: [{ type: Output }],
    mouseOver: [{ type: Output }],
    mouseUp: [{ type: Output }],
    rightClick: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmRectangle, [{
        type: Directive,
        args: [{
                selector: 'agm-rectangle'
            }]
    }], function () { return [{ type: ɵngcc1.RectangleManager }]; }, { clickable: [{
            type: Input
        }], draggable: [{
            type: Input,
            args: ['rectangleDraggable']
        }], editable: [{
            type: Input
        }], strokePosition: [{
            type: Input
        }], strokeWeight: [{
            type: Input
        }], visible: [{
            type: Input
        }], boundsChange: [{
            type: Output
        }], rectangleClick: [{
            type: Output
        }], rectangleDblClick: [{
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
        }], rightClick: [{
            type: Output
        }], north: [{
            type: Input
        }], east: [{
            type: Input
        }], south: [{
            type: Input
        }], west: [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdGFuZ2xlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvZGlyZWN0aXZlcy9yZWN0YW5nbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBSzFFLE1BQU0sT0FBTyxZQUFZO0FBQUcsSUFzSzFCLFlBQW9CLFFBQTBCO0FBQUksUUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7QUFBQyxRQWpKL0M7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUFXLGNBQVMsR0FBRyxJQUFJLENBQUM7QUFDNUIsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsMkNBQTJDO0FBQzdDLFFBQStCLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDakQsUUFDRTtBQUNGO0FBQ007QUFFQSxXQUREO0FBQ0wsUUFBVyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBcUJFO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFXLG1CQUFjLEdBQTRDLFFBQVEsQ0FBQztBQUM5RSxRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxpQkFBWSxHQUFHLENBQUMsQ0FBQztBQUM1QixRQUNFO0FBQ0Y7QUFFQSxXQURLO0FBQ0wsUUFBVyxZQUFPLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBTUU7QUFDRjtBQUVBLFdBREs7QUFDTCxRQUNFLGlCQUFZLEdBQWtELElBQUksWUFBWSxFQUUzRSxDQUFDO0FBQ04sUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQ0UsbUJBQWMsR0FBeUMsSUFBSSxZQUFZLEVBQTBCLENBQUM7QUFDcEcsUUFDRTtBQUNGO0FBRUEsV0FESztBQUNMLFFBQ0Usc0JBQWlCLEdBQXlDLElBQUksWUFBWSxFQUEwQixD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LEtBQUssU0FBQyxvQkFBb0I7QUFBTyx1QkFNakMsS0FBSztBQUFLLHdCQUtWLEtBQUs7QUFBSywwQkFLVixLQUFLO0FBQUssMEJBS1YsS0FBSztBQUFLLDRCQUtWLEtBQUs7QUFBSyw2QkFNVixLQUFLO0FBQUssMkJBS1YsS0FBSztBQUFLLHNCQUtWLEtBQUs7QUFBSyxxQkFLVixLQUFLO0FBQUssMkJBS1YsTUFBTTtBQUNQLDZCQU9DLE1BQU07QUFDUCxnQ0FLQyxNQUFNO0FBQ1AsbUJBTUMsTUFBTTtBQUFLLHNCQUtYLE1BQU07QUFBSyx3QkFLWCxNQUFNO0FBQ1Asd0JBS0MsTUFBTTtBQUNQLHdCQUtDLE1BQU07QUFDUCx1QkFLQyxNQUFNO0FBQUssd0JBS1gsTUFBTTtBQUNQLHNCQUtDLE1BQU07QUFBSyx5QkFLWCxNQUFNO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZWN0YW5nbGVNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvbWFuYWdlcnMvcmVjdGFuZ2xlLW1hbmFnZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhZ20tcmVjdGFuZ2xlJyxcbn0pXG5leHBvcnQgY2xhc3MgQWdtUmVjdGFuZ2xlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgbm9ydGggcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZSAocmVxdWlyZWQpLlxuICAgKi9cbiAgQElucHV0KCkgbm9ydGg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGVhc3QgcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZSAocmVxdWlyZWQpLlxuICAgKi9cbiAgQElucHV0KCkgZWFzdDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc291dGggcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZSAocmVxdWlyZWQpLlxuICAgKi9cbiAgQElucHV0KCkgc291dGg6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHdlc3QgcG9zaXRpb24gb2YgdGhlIHJlY3RhbmdsZSAocmVxdWlyZWQpLlxuICAgKi9cbiAgQElucHV0KCkgd2VzdDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGlzIFJlY3RhbmdsZSBoYW5kbGVzIG1vdXNlIGV2ZW50cy4gRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIEBJbnB1dCgpIGNsaWNrYWJsZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gZHJhZyB0aGlzIHJlY3RhbmdsZSBvdmVyIHRoZSBtYXAuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3JlY3RhbmdsZURyYWdnYWJsZScpIGRyYWdnYWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuIGVkaXQgdGhpcyByZWN0YW5nbGUgYnkgZHJhZ2dpbmcgdGhlIGNvbnRyb2wgcG9pbnRzIHNob3duIGF0XG4gICAqIHRoZSBjZW50ZXIgYW5kIGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSBvZiB0aGUgcmVjdGFuZ2xlLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgpIGVkaXRhYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBmaWxsIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkIGNvbG9ycy5cbiAgICovXG4gIEBJbnB1dCgpIGZpbGxDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsbCBvcGFjaXR5IGJldHdlZW4gMC4wIGFuZCAxLjAuXG4gICAqL1xuICBASW5wdXQoKSBmaWxsT3BhY2l0eTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3Ryb2tlIGNvbG9yLiBBbGwgQ1NTMyBjb2xvcnMgYXJlIHN1cHBvcnRlZCBleGNlcHQgZm9yIGV4dGVuZGVkIG5hbWVkIGNvbG9ycy5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugb3BhY2l0eSBiZXR3ZWVuIDAuMCBhbmQgMS4wXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2UgcG9zaXRpb24uIERlZmF1bHRzIHRvIENFTlRFUi5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBub3Qgc3VwcG9ydGVkIG9uIEludGVybmV0IEV4cGxvcmVyIDggYW5kIGVhcmxpZXIuXG4gICAqL1xuICBASW5wdXQoKSBzdHJva2VQb3NpdGlvbjoga2V5b2YgdHlwZW9mIGdvb2dsZS5tYXBzLlN0cm9rZVBvc2l0aW9uID0gJ0NFTlRFUic7XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxzLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlV2VpZ2h0ID0gMDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIHJlY3RhbmdsZSBpcyB2aXNpYmxlIG9uIHRoZSBtYXAuIERlZmF1bHRzIHRvIHRydWUuXG4gICAqL1xuICBASW5wdXQoKSB2aXNpYmxlID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIHpJbmRleCBjb21wYXJlZCB0byBvdGhlciBwb2x5cy5cbiAgICovXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHJlY3RhbmdsZSdzIGlzIGNoYW5nZWQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgYm91bmRzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzTGl0ZXJhbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc0xpdGVyYWxcbiAgPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGVtaXR0ZXIgZ2V0cyBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSByZWN0YW5nbGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVjdGFuZ2xlQ2xpY2s6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBlbWl0dGVyIGdldHMgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcmVjdGFuZ2xlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlY3RhbmdsZURibENsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgcmVwZWF0ZWRseSBmaXJlZCB3aGlsZSB0aGUgdXNlciBkcmFncyB0aGUgcmVjdGFuZ2xlLlxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSBkcmFnOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciBzdG9wcyBkcmFnZ2luZyB0aGUgcmVjdGFuZ2xlLlxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyB0aGUgcmVjdGFuZ2xlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRyYWdTdGFydDogRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIERPTSBtb3VzZWRvd24gZXZlbnQgaXMgZmlyZWQgb24gdGhlIHJlY3RhbmdsZS5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBtb3VzZURvd246IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2Vtb3ZlIGV2ZW50IGlzIGZpcmVkIG9uIHRoZSByZWN0YW5nbGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgbW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gcmVjdGFuZ2xlIG1vdXNlb3V0LlxuICAgKi9cbiAgQE91dHB1dCgpIG1vdXNlT3V0OiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgZXZlbnQgaXMgZmlyZWQgb24gcmVjdGFuZ2xlIG1vdXNlb3Zlci5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBtb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBET00gbW91c2V1cCBldmVudCBpcyBmaXJlZCBvbiB0aGUgcmVjdGFuZ2xlLlxuICAgKi9cbiAgQE91dHB1dCgpIG1vdXNlVXA6IEV2ZW50RW1pdHRlcjxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4oKTtcblxuICAvKipcbiAgICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSByZWN0YW5nbGUgaXMgcmlnaHQtY2xpY2tlZCBvbi5cbiAgICovXG4gIEBPdXRwdXQoKVxuICByaWdodENsaWNrOiBFdmVudEVtaXR0ZXI8Z29vZ2xlLm1hcHMuTW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPGdvb2dsZS5tYXBzLk1vdXNlRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBfcmVjdGFuZ2xlQWRkZWRUb01hbmFnZXIgPSBmYWxzZTtcblxuICBwcml2YXRlIHN0YXRpYyBfbWFwT3B0aW9uczogc3RyaW5nW10gPSBbXG4gICAgJ2ZpbGxDb2xvcicsXG4gICAgJ2ZpbGxPcGFjaXR5JyxcbiAgICAnc3Ryb2tlQ29sb3InLFxuICAgICdzdHJva2VPcGFjaXR5JyxcbiAgICAnc3Ryb2tlUG9zaXRpb24nLFxuICAgICdzdHJva2VXZWlnaHQnLFxuICAgICd2aXNpYmxlJyxcbiAgICAnekluZGV4JyxcbiAgICAnY2xpY2thYmxlJyxcbiAgXTtcblxuICBwcml2YXRlIF9ldmVudFN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFuYWdlcjogUmVjdGFuZ2xlTWFuYWdlcikge31cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX21hbmFnZXIuYWRkUmVjdGFuZ2xlKHRoaXMpO1xuICAgIHRoaXMuX3JlY3RhbmdsZUFkZGVkVG9NYW5hZ2VyID0gdHJ1ZTtcbiAgICB0aGlzLl9yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICBpZiAoIXRoaXMuX3JlY3RhbmdsZUFkZGVkVG9NYW5hZ2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlOiBuby1zdHJpbmctbGl0ZXJhbFxuICAgIGlmIChcbiAgICAgIGNoYW5nZXNbJ25vcnRoJ10gfHxcbiAgICAgIGNoYW5nZXNbJ2Vhc3QnXSB8fFxuICAgICAgY2hhbmdlc1snc291dGgnXSB8fFxuICAgICAgY2hhbmdlc1snd2VzdCddXG4gICAgKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldEJvdW5kcyh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2VkaXRhYmxlJ10pIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0RWRpdGFibGUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydkcmFnZ2FibGUnXSkge1xuICAgICAgdGhpcy5fbWFuYWdlci5zZXREcmFnZ2FibGUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgIHRoaXMuX21hbmFnZXIuc2V0VmlzaWJsZSh0aGlzKTtcbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZTogbm8tc3RyaW5nLWxpdGVyYWxcbiAgICB0aGlzLl91cGRhdGVSZWN0YW5nbGVPcHRpb25zQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVJlY3RhbmdsZU9wdGlvbnNDaGFuZ2VzKGNoYW5nZXM6IHtcbiAgICBbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZTtcbiAgfSkge1xuICAgIGNvbnN0IG9wdGlvbnM6IGdvb2dsZS5tYXBzLlJlY3RhbmdsZU9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKFxuICAgICAgayA9PiBBZ21SZWN0YW5nbGUuX21hcE9wdGlvbnMuaW5kZXhPZihrKSAhPT0gLTEsXG4gICAgKTtcbiAgICBvcHRpb25LZXlzLmZvckVhY2goayA9PiB7XG4gICAgICBvcHRpb25zW2tdID0gY2hhbmdlc1trXS5jdXJyZW50VmFsdWU7XG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9uS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9tYW5hZ2VyLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBldmVudHM6IE1hcDxzdHJpbmcsIEV2ZW50RW1pdHRlcjxhbnk+PiA9IG5ldyBNYXA8XG4gICAgICBzdHJpbmcsXG4gICAgICBFdmVudEVtaXR0ZXI8YW55PlxuICAgID4oKTtcbiAgICBldmVudHMuc2V0KCdib3VuZHNfY2hhbmdlZCcsIHRoaXMuYm91bmRzQ2hhbmdlKTtcbiAgICBldmVudHMuc2V0KCdjbGljaycsIHRoaXMucmVjdGFuZ2xlQ2xpY2spO1xuICAgIGV2ZW50cy5zZXQoJ2RibGNsaWNrJywgdGhpcy5yZWN0YW5nbGVEYmxDbGljayk7XG4gICAgZXZlbnRzLnNldCgnZHJhZycsIHRoaXMuZHJhZyk7XG4gICAgZXZlbnRzLnNldCgnZHJhZ2VuZCcsIHRoaXMuZHJhZ0VuZCk7XG4gICAgZXZlbnRzLnNldCgnZHJhZ1N0YXJ0JywgdGhpcy5kcmFnU3RhcnQpO1xuICAgIGV2ZW50cy5zZXQoJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duKTtcbiAgICBldmVudHMuc2V0KCdtb3VzZW1vdmUnLCB0aGlzLm1vdXNlTW92ZSk7XG4gICAgZXZlbnRzLnNldCgnbW91c2VvdXQnLCB0aGlzLm1vdXNlT3V0KTtcbiAgICBldmVudHMuc2V0KCdtb3VzZW92ZXInLCB0aGlzLm1vdXNlT3Zlcik7XG4gICAgZXZlbnRzLnNldCgnbW91c2V1cCcsIHRoaXMubW91c2VVcCk7XG4gICAgZXZlbnRzLnNldCgncmlnaHRjbGljaycsIHRoaXMucmlnaHRDbGljayk7XG5cbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnRFbWl0dGVyLCBldmVudE5hbWUpID0+IHtcbiAgICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICB0aGlzLl9tYW5hZ2VyXG4gICAgICAgICAgLmNyZWF0ZUV2ZW50T2JzZXJ2YWJsZTxnb29nbGUubWFwcy5Nb3VzZUV2ZW50PihldmVudE5hbWUsIHRoaXMpXG4gICAgICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICBjYXNlICdib3VuZHNfY2hhbmdlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlci5nZXRCb3VuZHModGhpcykudGhlbihib3VuZHMgPT5cbiAgICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgbm9ydGg6IGJvdW5kcy5nZXROb3J0aEVhc3QoKS5sYXQoKSxcbiAgICAgICAgICAgICAgICAgICAgZWFzdDogYm91bmRzLmdldE5vcnRoRWFzdCgpLmxuZygpLFxuICAgICAgICAgICAgICAgICAgICBzb3V0aDogYm91bmRzLmdldFNvdXRoV2VzdCgpLmxhdCgpLFxuICAgICAgICAgICAgICAgICAgICB3ZXN0OiBib3VuZHMuZ2V0U291dGhXZXN0KCkubG5nKCksXG4gICAgICAgICAgICAgICAgICB9IGFzIGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc0xpdGVyYWwpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZXZlbnRTdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMuX2V2ZW50U3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgdGhpcy5fbWFuYWdlci5yZW1vdmVSZWN0YW5nbGUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgTGF0TG5nQm91bmRzIG9mIHRoaXMgUmVjdGFuZ2xlLlxuICAgKi9cbiAgZ2V0Qm91bmRzKCk6IFByb21pc2U8Z29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZXIuZ2V0Qm91bmRzKHRoaXMpO1xuICB9XG59XG4iXX0=