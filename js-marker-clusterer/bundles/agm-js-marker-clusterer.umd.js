(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@agm/core'), require('rxjs'), require('js-marker-clusterer')) :
    typeof define === 'function' && define.amd ? define('@agm/js-marker-clusterer', ['exports', '@angular/core', '@agm/core', 'rxjs', 'js-marker-clusterer'], factory) :
    (global = global || self, factory((global.ngmaps = global.ngmaps || {}, global.ngmaps.jsMarkerClusterer = {}), global.ng.core, global.ngmaps.core, global.rxjs));
}(this, function (exports, core, core$1, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var ClusterManager = /** @class */ (function (_super) {
        __extends(ClusterManager, _super);
        function ClusterManager(_mapsWrapper, _zone) {
            var _this = _super.call(this, _mapsWrapper, _zone) || this;
            _this._mapsWrapper = _mapsWrapper;
            _this._zone = _zone;
            _this._clustererInstance = new Promise(function (resolver) {
                _this._resolver = resolver;
            });
            return _this;
        }
        ClusterManager.prototype.init = function (options) {
            var _this = this;
            this._mapsWrapper.getNativeMap().then(function (map) {
                var clusterer = new MarkerClusterer(map, [], options);
                _this._resolver(clusterer);
            });
        };
        ClusterManager.prototype.getClustererInstance = function () {
            return this._clustererInstance;
        };
        ClusterManager.prototype.addMarker = function (marker) {
            var clusterPromise = this.getClustererInstance();
            var markerPromise = this._mapsWrapper
                .createMarker({
                position: {
                    lat: marker.latitude,
                    lng: marker.longitude,
                },
                label: marker.label,
                draggable: marker.draggable,
                icon: marker.iconUrl,
                opacity: marker.opacity,
                visible: marker.visible,
                zIndex: marker.zIndex,
                title: marker.title,
                clickable: marker.clickable,
            }, false);
            Promise
                .all([clusterPromise, markerPromise])
                .then(function (_a) {
                var _b = __read(_a, 2), cluster = _b[0], marker = _b[1];
                return cluster.addMarker(marker);
            });
            this._markers.set(marker, markerPromise);
        };
        ClusterManager.prototype.deleteMarker = function (marker) {
            var _this = this;
            var m = this._markers.get(marker);
            if (m == null) {
                // marker already deleted
                return Promise.resolve();
            }
            return m.then(function (m) {
                _this._zone.run(function () {
                    m.setMap(null);
                    _this.getClustererInstance().then(function (cluster) {
                        cluster.removeMarker(m);
                        _this._markers.delete(marker);
                    });
                });
            });
        };
        ClusterManager.prototype.clearMarkers = function () {
            return this.getClustererInstance().then(function (cluster) {
                cluster.clearMarkers();
            });
        };
        ClusterManager.prototype.setGridSize = function (c) {
            this.getClustererInstance().then(function (cluster) {
                cluster.setGridSize(c.gridSize);
            });
        };
        ClusterManager.prototype.setMaxZoom = function (c) {
            this.getClustererInstance().then(function (cluster) {
                cluster.setMaxZoom(c.maxZoom);
            });
        };
        ClusterManager.prototype.setStyles = function (c) {
            this.getClustererInstance().then(function (cluster) {
                cluster.setStyles(c.styles);
            });
        };
        ClusterManager.prototype.setZoomOnClick = function (c) {
            this.getClustererInstance().then(function (cluster) {
                if (c.zoomOnClick !== undefined) {
                    cluster.zoomOnClick_ = c.zoomOnClick;
                }
            });
        };
        ClusterManager.prototype.setAverageCenter = function (c) {
            this.getClustererInstance().then(function (cluster) {
                if (c.averageCenter !== undefined) {
                    cluster.averageCenter_ = c.averageCenter;
                }
            });
        };
        ClusterManager.prototype.setImagePath = function (c) {
            this.getClustererInstance().then(function (cluster) {
                if (c.imagePath !== undefined) {
                    cluster.imagePath_ = c.imagePath;
                }
            });
        };
        ClusterManager.prototype.setMinimumClusterSize = function (c) {
            this.getClustererInstance().then(function (cluster) {
                if (c.minimumClusterSize !== undefined) {
                    cluster.minimumClusterSize_ = c.minimumClusterSize;
                }
            });
        };
        ClusterManager.prototype.setImageExtension = function (c) {
            this.getClustererInstance().then(function (cluster) {
                if (c.imageExtension !== undefined) {
                    cluster.imageExtension_ = c.imageExtension;
                }
            });
        };
        ClusterManager.prototype.createClusterEventObservable = function (eventName) {
            var _this = this;
            return rxjs.Observable.create(function (observer) {
                _this._zone.runOutsideAngular(function () {
                    _this._clustererInstance.then(function (m) {
                        m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                    });
                });
            });
        };
        ClusterManager.prototype.setCalculator = function (c) {
            this.getClustererInstance().then(function (cluster) {
                if (typeof c.calculator === 'function') {
                    cluster.setCalculator(c.calculator);
                }
            });
        };
        ClusterManager.ctorParameters = function () { return [
            { type: core$1.GoogleMapsAPIWrapper },
            { type: core.NgZone }
        ]; };
        ClusterManager = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [core$1.GoogleMapsAPIWrapper, core.NgZone])
        ], ClusterManager);
        return ClusterManager;
    }(core$1.MarkerManager));

    /**
     * AgmMarkerCluster clusters map marker if they are near together
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
     *      <agm-marker-cluster>
     *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     *        </agm-marker>
     *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
     *        </agm-marker>
     *      </agm-marker-cluster>
     *    </agm-map>
     *  `
     * })
     * ```
     */
    var AgmMarkerCluster = /** @class */ (function () {
        function AgmMarkerCluster(_clusterManager) {
            this._clusterManager = _clusterManager;
            this.clusterClick = new core.EventEmitter();
            this._observableSubscriptions = [];
        }
        /** @internal */
        AgmMarkerCluster.prototype.ngOnDestroy = function () {
            this._clusterManager.clearMarkers();
            this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        /** @internal */
        AgmMarkerCluster.prototype.ngOnChanges = function (changes) {
            if (changes['gridSize']) {
                this._clusterManager.setGridSize(this);
            }
            if (changes['maxZoom']) {
                this._clusterManager.setMaxZoom(this);
            }
            if (changes['zoomOnClick']) {
                this._clusterManager.setZoomOnClick(this);
            }
            if (changes['averageCenter']) {
                this._clusterManager.setAverageCenter(this);
            }
            if (changes['minimumClusterSize']) {
                this._clusterManager.setMinimumClusterSize(this);
            }
            if (changes['imagePath']) {
                this._clusterManager.setImagePath(this);
            }
            if (changes['imageExtension']) {
                this._clusterManager.setImageExtension(this);
            }
            if (changes['calculator']) {
                this._clusterManager.setCalculator(this);
            }
            if (changes['styles']) {
                this._clusterManager.setStyles(this);
            }
        };
        AgmMarkerCluster.prototype._addEventListeners = function () {
            var _this = this;
            var handlers = [
                {
                    name: 'clusterclick',
                    handler: function () { return _this.clusterClick.emit(); },
                },
            ];
            handlers.forEach(function (obj) {
                var os = _this._clusterManager.createClusterEventObservable(obj.name).subscribe(obj.handler);
                _this._observableSubscriptions.push(os);
            });
        };
        /** @internal */
        AgmMarkerCluster.prototype.ngOnInit = function () {
            this._addEventListeners();
            this._clusterManager.init({
                gridSize: this.gridSize,
                maxZoom: this.maxZoom,
                zoomOnClick: this.zoomOnClick,
                averageCenter: this.averageCenter,
                minimumClusterSize: this.minimumClusterSize,
                styles: this.styles,
                imagePath: this.imagePath,
                imageExtension: this.imageExtension,
                calculator: this.calculator,
            });
        };
        AgmMarkerCluster.ctorParameters = function () { return [
            { type: ClusterManager }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], AgmMarkerCluster.prototype, "gridSize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], AgmMarkerCluster.prototype, "maxZoom", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AgmMarkerCluster.prototype, "zoomOnClick", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], AgmMarkerCluster.prototype, "averageCenter", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], AgmMarkerCluster.prototype, "minimumClusterSize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], AgmMarkerCluster.prototype, "styles", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Function)
        ], AgmMarkerCluster.prototype, "calculator", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AgmMarkerCluster.prototype, "imagePath", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], AgmMarkerCluster.prototype, "imageExtension", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], AgmMarkerCluster.prototype, "clusterClick", void 0);
        AgmMarkerCluster = __decorate([
            core.Directive({
                selector: 'agm-marker-cluster',
                providers: [
                    ClusterManager,
                    { provide: core$1.MarkerManager, useExisting: ClusterManager },
                    core$1.InfoWindowManager,
                ],
            }),
            __metadata("design:paramtypes", [ClusterManager])
        ], AgmMarkerCluster);
        return AgmMarkerCluster;
    }());

    var AgmJsMarkerClustererModule = /** @class */ (function () {
        function AgmJsMarkerClustererModule() {
        }
        AgmJsMarkerClustererModule = __decorate([
            core.NgModule({
                imports: [core$1.AgmCoreModule],
                declarations: [AgmMarkerCluster],
                exports: [AgmMarkerCluster],
            })
        ], AgmJsMarkerClustererModule);
        return AgmJsMarkerClustererModule;
    }());

    exports.AgmJsMarkerClustererModule = AgmJsMarkerClustererModule;
    exports.AgmMarkerCluster = AgmMarkerCluster;
    exports.ClusterManager = ClusterManager;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=agm-js-marker-clusterer.umd.js.map
