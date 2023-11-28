import { AgmMap } from '@agm/core';
import { Directive, Host, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@agm/core';
export class AgmDrawingManagerTrigger {
    constructor(_agmMap) {
        this._agmMap = _agmMap;
    }
    ngAfterViewInit() {
        this._agmMap.mapReady.pipe(first()).subscribe(map => this.drawingManager.setMap(map));
    }
    ngOnDestroy() {
        this._agmMap.mapReady.pipe(first()).subscribe(() => this.drawingManager.setMap(null));
    }
}
AgmDrawingManagerTrigger.ɵfac = function AgmDrawingManagerTrigger_Factory(t) { return new (t || AgmDrawingManagerTrigger)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.AgmMap, 1)); };
AgmDrawingManagerTrigger.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AgmDrawingManagerTrigger, selectors: [["agm-map", "agmDrawingManager", ""]], inputs: { drawingManager: ["agmDrawingManager", "drawingManager"] }, exportAs: ["matDrawingManagerTrigger"] });
AgmDrawingManagerTrigger.ctorParameters = () => [
    { type: AgmMap, decorators: [{ type: Host }] }
];
AgmDrawingManagerTrigger.propDecorators = {
    drawingManager: [{ type: Input, args: ['agmDrawingManager',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmDrawingManagerTrigger, [{
        type: Directive,
        args: [{
                selector: 'agm-map[agmDrawingManager]',
                exportAs: 'matDrawingManagerTrigger'
            }]
    }], function () { return [{ type: ɵngcc1.AgmMap, decorators: [{
                type: Host
            }] }]; }, { drawingManager: [{
            type: Input,
            args: ['agmDrawingManager']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2luZy1tYW5hZ2VyLXRyaWdnZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2RyYXdpbmcvc3JjL2xpYi9kaXJlY3RpdmVzL2RyYXdpbmctbWFuYWdlci10cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFpQixTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU92QyxNQUFNLE9BQU8sd0JBQXdCO0FBQUcsSUFNdEMsWUFBNEIsT0FBZTtBQUM3QyxRQUQ4QixZQUFPLEdBQVAsT0FBTyxDQUFRO0FBQUMsSUFDNUMsQ0FBQztBQUNILElBQ0UsZUFBZTtBQUFLLFFBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUYsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQ2IsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMxRixJQUFFLENBQUM7QUFDSDtvREFwQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSw0QkFBNEIsa0JBQ3RDLFFBQVEsRUFBRTtVQUEwQixlQUNyQyxrUEFDSTtBQUFDO0FBQWtELFlBVC9DLE1BQU0sdUJBZUEsSUFBSTtBQUFNO0FBQUc7QUFHViw2QkFMZixLQUFLLFNBQUMsbUJBQW1CO0FBQU07Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdtTWFwIH0gZnJvbSAnQGFnbS9jb3JlJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZ21EcmF3aW5nTWFuYWdlciB9IGZyb20gJy4vZHJhd2luZy1tYW5hZ2VyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYWdtLW1hcFthZ21EcmF3aW5nTWFuYWdlcl0nLFxuICBleHBvcnRBczogJ21hdERyYXdpbmdNYW5hZ2VyVHJpZ2dlcicsXG59KVxuZXhwb3J0IGNsYXNzIEFnbURyYXdpbmdNYW5hZ2VyVHJpZ2dlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveXtcblxuICAvKiogVGhlIGRyYXdpbmcgbWFuYWdlciB0byBiZSBhdHRhY2hlZCB0byB0aGlzIHRyaWdnZXIuICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYWdtRHJhd2luZ01hbmFnZXInKSBkcmF3aW5nTWFuYWdlcjogQWdtRHJhd2luZ01hbmFnZXI7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIF9hZ21NYXA6IEFnbU1hcCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2FnbU1hcC5tYXBSZWFkeS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZShtYXAgPT4gdGhpcy5kcmF3aW5nTWFuYWdlci5zZXRNYXAobWFwKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9hZ21NYXAubWFwUmVhZHkucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kcmF3aW5nTWFuYWdlci5zZXRNYXAobnVsbCkpO1xuICB9XG59XG4iXX0=