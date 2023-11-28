import { Directive, Input } from '@angular/core';
/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 */
import * as ɵngcc0 from '@angular/core';
export class AgmPolylineIcon {
    ngOnInit() {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    }
}
AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) { return new (t || AgmPolylineIcon)(); };
AgmPolylineIcon.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmPolylineIcon, selectors: [["agm-icon-sequence"]], inputs: { fixedRotation: "fixedRotation", offset: "offset", repeat: "repeat", anchorX: "anchorX", anchorY: "anchorY", fillColor: "fillColor", fillOpacity: "fillOpacity", path: "path", rotation: "rotation", scale: "scale", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight" } });
AgmPolylineIcon.propDecorators = {
    fixedRotation: [{ type: Input }],
    offset: [{ type: Input }],
    repeat: [{ type: Input }],
    anchorX: [{ type: Input }],
    anchorY: [{ type: Input }],
    fillColor: [{ type: Input }],
    fillOpacity: [{ type: Input }],
    path: [{ type: Input }],
    rotation: [{ type: Input }],
    scale: [{ type: Input }],
    strokeColor: [{ type: Input }],
    strokeOpacity: [{ type: Input }],
    strokeWeight: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmPolylineIcon, [{
        type: Directive,
        args: [{ selector: 'agm-polyline agm-icon-sequence' }]
    }], null, { fixedRotation: [{
            type: Input
        }], offset: [{
            type: Input
        }], repeat: [{
            type: Input
        }], anchorX: [{
            type: Input
        }], anchorY: [{
            type: Input
        }], fillColor: [{
            type: Input
        }], fillOpacity: [{
            type: Input
        }], path: [{
            type: Input
        }], rotation: [{
            type: Input
        }], scale: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], strokeOpacity: [{
            type: Input
        }], strokeWeight: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUtaWNvbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvcG9seWxpbmUtaWNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxNQUFNLE9BQU8sZUFBZTtBQUFHLElBc0Y3QixRQUFRO0FBQUssUUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO0FBQzNCLFlBQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ3hELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDsyQ0E1RkMsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFO0lBQWdDLEVBQUMsaWJBQ2xEO0FBQUM7QUFBbUMsNEJBT3RDLEtBQUs7QUFBSyxxQkFPVixLQUFLO0FBQUsscUJBT1YsS0FBSztBQUFLLHNCQVFWLEtBQUs7QUFBSyxzQkFRVixLQUFLO0FBQUssd0JBTVYsS0FBSztBQUFLLDBCQUtWLEtBQUs7QUFBSyxtQkFNVixLQUFLO0FBQUssdUJBT1YsS0FBSztBQUFLLG9CQU9WLEtBQUs7QUFBSywwQkFNVixLQUFLO0FBQUssNEJBS1YsS0FBSztBQUFLLDJCQUtWLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBZ21Qb2x5bGluZUljb24gZW5hYmxlcyB0byBhZGQgcG9seWxpbmUgc2VxdWVuY2VzIHRvIGFkZCBhcnJvd3MsIGNpcmNsZSxcbiAqIG9yIGN1c3RvbSBpY29ucyBlaXRoZXIgYWxvbmcgdGhlIGVudGlyZSBsaW5lLCBvciBpbiBhIHNwZWNpZmljIHBhcnQgb2YgaXQuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvc2hhcGVzI3BvbHlsaW5lX2N1c3RvbWl6ZVxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGBodG1sXG4gKiAgICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwibGF0XCIgW2xvbmdpdHVkZV09XCJsbmdcIiBbem9vbV09XCJ6b29tXCI+XG4gKiAgICAgIDxhZ20tcG9seWxpbmU+XG4gKiAgICAgICAgICA8YWdtLWljb24tc2VxdWVuY2UgW2ZpeGVkUm90YXRpb25dPVwidHJ1ZVwiIFtwYXRoXT1cIidGT1JXQVJEX09QRU5fQVJST1cnXCI+XG4gKiAgICAgICAgICA8L2FnbS1pY29uLXNlcXVlbmNlPlxuICogICAgICA8L2FnbS1wb2x5bGluZT5cbiAqICAgIDwvYWdtLW1hcD5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ2FnbS1wb2x5bGluZSBhZ20taWNvbi1zZXF1ZW5jZSd9KVxuZXhwb3J0IGNsYXNzIEFnbVBvbHlsaW5lSWNvbiBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBlYWNoIGljb24gaW4gdGhlIHNlcXVlbmNlIGhhcyB0aGUgc2FtZSBmaXhlZCByb3RhdGlvbiByZWdhcmRsZXNzIG9mIHRoZVxuICAgKiBhbmdsZSBvZiB0aGUgZWRnZSBvbiB3aGljaCBpdCBsaWVzLiBEZWZhdWx0cyB0byBgZmFsc2VgLCBpbiB3aGljaCBjYXNlIGVhY2ggaWNvblxuICAgKiBpbiB0aGUgc2VxdWVuY2UgaXMgcm90YXRlZCB0byBhbGlnbiB3aXRoIGl0cyBlZGdlLlxuICAgKi9cbiAgQElucHV0KCkgZml4ZWRSb3RhdGlvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGRpc3RhbmNlIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBsaW5lIGF0IHdoaWNoIGFuIGljb24gaXMgdG8gYmUgcmVuZGVyZWQuIFRoaXNcbiAgICogZGlzdGFuY2UgbWF5IGJlIGV4cHJlc3NlZCBhcyBhIHBlcmNlbnRhZ2Ugb2YgbGluZSdzIGxlbmd0aCAoZS5nLiAnNTAlJykgb3IgaW4gcGl4ZWxzXG4gICAqIChlLmcuICc1MHB4JykuIERlZmF1bHRzIHRvICcxMDAlJy5cbiAgICovXG4gIEBJbnB1dCgpIG9mZnNldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgYmV0d2VlbiBjb25zZWN1dGl2ZSBpY29ucyBvbiB0aGUgbGluZS4gVGhpcyBkaXN0YW5jZSBtYXkgYmUgZXhwcmVzc2VkIGFzXG4gICAqIGEgcGVyY2VudGFnZSBvZiB0aGUgbGluZSdzIGxlbmd0aCAoZS5nLiAnNTAlJykgb3IgaW4gcGl4ZWxzIChlLmcuICc1MHB4JykuIFRvIGRpc2FibGVcbiAgICogcmVwZWF0aW5nIG9mIHRoZSBpY29uLCBzcGVjaWZ5ICcwJy4gRGVmYXVsdHMgdG8gJzAnLlxuICAgKi9cbiAgQElucHV0KCkgcmVwZWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvc2l0aW9uIG9mIHRoZSBzeW1ib2wgcmVsYXRpdmUgdG8gdGhlIHBvbHlsaW5lLiBUaGUgY29vcmRpbmF0ZVxuICAgKiBvZiB0aGUgc3ltYm9sJ3MgcGF0aCBpcyB0cmFuc2xhdGVkIF9sZWZ0XyBieSB0aGUgYW5jaG9yJ3MgeCBjb29yZGluYXRlLiBCeSBkZWZhdWx0LCBhXG4gICAqIHN5bWJvbCBpcyBhbmNob3JlZCBhdCAoMCwgMCkuIFRoZSBwb3NpdGlvbiBpcyBleHByZXNzZWQgaW4gdGhlIHNhbWUgY29vcmRpbmF0ZSBzeXN0ZW0gYXMgdGhlXG4gICAqIHN5bWJvbCdzIHBhdGguXG4gICAqL1xuICBASW5wdXQoKSBhbmNob3JYOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHBvc2l0aW9uIG9mIHRoZSBzeW1ib2wgcmVsYXRpdmUgdG8gdGhlIHBvbHlsaW5lLiBUaGUgY29vcmRpbmF0ZVxuICAgKiBvZiB0aGUgc3ltYm9sJ3MgcGF0aCBpcyB0cmFuc2xhdGVkIF91cF8gYnkgdGhlIGFuY2hvcidzIHkgY29vcmRpbmF0ZS4gQnkgZGVmYXVsdCwgYVxuICAgKiBzeW1ib2wgaXMgYW5jaG9yZWQgYXQgKDAsIDApLiBUaGUgcG9zaXRpb24gaXMgZXhwcmVzc2VkIGluIHRoZSBzYW1lIGNvb3JkaW5hdGUgc3lzdGVtIGFzIHRoZVxuICAgKiBzeW1ib2wncyBwYXRoLlxuICAgKi9cbiAgQElucHV0KCkgYW5jaG9yWTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgc3ltYm9sJ3MgZmlsbCBjb2xvci4gQWxsIENTUzMgY29sb3JzIGFyZSBzdXBwb3J0ZWQgZXhjZXB0IGZvciBleHRlbmRlZCBuYW1lZFxuICAgKiBjb2xvcnMuIERlZmF1bHRzIHRvIHRoZSBzdHJva2UgY29sb3Igb2YgdGhlIGNvcnJlc3BvbmRpbmcgcG9seWxpbmUuXG4gICAqL1xuICBASW5wdXQoKSBmaWxsQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIGZpbGwgb3BhY2l0eS4gRGVmYXVsdHMgdG8gMC5cbiAgICovXG4gIEBJbnB1dCgpIGZpbGxPcGFjaXR5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBwYXRoLCB3aGljaCBpcyBhIGJ1aWx0LWluIHN5bWJvbCBwYXRoLCBvciBhIGN1c3RvbSBwYXRoIGV4cHJlc3NlZCB1c2luZ1xuICAgKiBTVkcgcGF0aCBub3RhdGlvbi4gUmVxdWlyZWQuXG4gICAqL1xuICBASW5wdXQoKSBwYXRoOiBrZXlvZiB0eXBlb2YgZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aCB8IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSB0aGUgc3ltYm9sLCBleHByZXNzZWQgY2xvY2t3aXNlIGluIGRlZ3JlZXMuXG4gICAqIERlZmF1bHRzIHRvIDAuIEEgc3ltYm9sIHdoZXJlIGBmaXhlZFJvdGF0aW9uYCBpcyBgZmFsc2VgIGlzIHJvdGF0ZWQgcmVsYXRpdmUgdG9cbiAgICogdGhlIGFuZ2xlIG9mIHRoZSBlZGdlIG9uIHdoaWNoIGl0IGxpZXMuXG4gICAqL1xuICBASW5wdXQoKSByb3RhdGlvbjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IGJ5IHdoaWNoIHRoZSBzeW1ib2wgaXMgc2NhbGVkIGluIHNpemUuIERlZmF1bHRzIHRvIHRoZSBzdHJva2Ugd2VpZ2h0XG4gICAqIG9mIHRoZSBwb2x5bGluZTsgYWZ0ZXIgc2NhbGluZywgdGhlIHN5bWJvbCBtdXN0IGxpZSBpbnNpZGUgYSBzcXVhcmUgMjIgcGl4ZWxzIGluXG4gICAqIHNpemUgY2VudGVyZWQgYXQgdGhlIHN5bWJvbCdzIGFuY2hvci5cbiAgICovXG4gIEBJbnB1dCgpIHNjYWxlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBzdHJva2UgY29sb3IuIEFsbCBDU1MzIGNvbG9ycyBhcmUgc3VwcG9ydGVkIGV4Y2VwdCBmb3IgZXh0ZW5kZWQgbmFtZWRcbiAgICogY29sb3JzLiBEZWZhdWx0cyB0byB0aGUgc3Ryb2tlIGNvbG9yIG9mIHRoZSBwb2x5bGluZS5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZUNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzeW1ib2wncyBzdHJva2Ugb3BhY2l0eS4gRGVmYXVsdHMgdG8gdGhlIHN0cm9rZSBvcGFjaXR5IG9mIHRoZSBwb2x5bGluZS5cbiAgICovXG4gIEBJbnB1dCgpIHN0cm9rZU9wYWNpdHk6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIHN5bWJvbCdzIHN0cm9rZSB3ZWlnaHQuIERlZmF1bHRzIHRvIHRoZSBzY2FsZSBvZiB0aGUgc3ltYm9sLlxuICAgKi9cbiAgQElucHV0KCkgc3Ryb2tlV2VpZ2h0OiBudW1iZXI7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGF0aCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ljb24gU2VxdWVuY2UgcGF0aCBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgfVxufVxuIl19