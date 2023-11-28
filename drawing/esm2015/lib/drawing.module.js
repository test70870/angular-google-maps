import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { AgmDrawingManager } from './directives/drawing-manager';
import { AgmDrawingManagerTrigger } from './directives/drawing-manager-trigger';
import * as ɵngcc0 from '@angular/core';
export class AgmDrawingModule {
}
AgmDrawingModule.ɵfac = function AgmDrawingModule_Factory(t) { return new (t || AgmDrawingModule)(); };
AgmDrawingModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: AgmDrawingModule });
AgmDrawingModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[AgmCoreModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AgmDrawingModule, [{
        type: NgModule,
        args: [{
                imports: [AgmCoreModule],
                declarations: [AgmDrawingManager, AgmDrawingManagerTrigger],
                exports: [AgmDrawingManager, AgmDrawingManagerTrigger]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AgmDrawingModule, { declarations: function () { return [AgmDrawingManager, AgmDrawingManagerTrigger]; }, imports: function () { return [AgmCoreModule]; }, exports: function () { return [AgmDrawingManager, AgmDrawingManagerTrigger]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2luZy5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2RyYXdpbmcvc3JjL2xpYi9kcmF3aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBT2hGLE1BQU0sT0FBTyxnQkFBZ0I7QUFDN0I7NENBTkMsUUFBUSxTQUFDLGtCQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDeEIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUM7R0FDM0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUMsZUFDdkQ7Ozs7Ozs7OzsrVUFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWdtRHJhd2luZ01hbmFnZXIgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhd2luZy1tYW5hZ2VyJztcbmltcG9ydCB7IEFnbURyYXdpbmdNYW5hZ2VyVHJpZ2dlciB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcmF3aW5nLW1hbmFnZXItdHJpZ2dlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtBZ21Db3JlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQWdtRHJhd2luZ01hbmFnZXIsIEFnbURyYXdpbmdNYW5hZ2VyVHJpZ2dlcl0sXG4gIGV4cG9ydHM6IFtBZ21EcmF3aW5nTWFuYWdlciwgQWdtRHJhd2luZ01hbmFnZXJUcmlnZ2VyXSxcbn0pXG5leHBvcnQgY2xhc3MgQWdtRHJhd2luZ01vZHVsZSB7XG59XG4iXX0=