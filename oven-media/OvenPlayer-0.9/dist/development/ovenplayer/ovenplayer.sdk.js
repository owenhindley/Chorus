/*! OvenPlayerv0.9.750 | (c)2019 AirenSoft Co., Ltd. | MIT license (https://github.com/AirenSoft/OvenPlayerPrivate/blob/master/LICENSE) | Github : https://github.com/AirenSoft/OvenPlayer */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ovenplayer.sdk": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~2ec193ac":"ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~2ec193ac","ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf":"ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf","ovenplayer.provider.DashProvider":"ovenplayer.provider.DashProvider","ovenplayer.provider.HlsProvider":"ovenplayer.provider.HlsProvider","ovenplayer.provider.Html5":"ovenplayer.provider.Html5","ovenplayer.provider.WebRTCProvider":"ovenplayer.provider.WebRTCProvider","ovenplayer.provider.RtmpProvider":"ovenplayer.provider.RtmpProvider","smiparser":"smiparser","vendors~downloader":"vendors~downloader","downloader":"downloader","vttparser":"vttparser"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/ovenplayer.sdk.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/js/api/Api.js":
/*!***************************!*\
  !*** ./src/js/api/Api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Manager = __webpack_require__(/*! api/caption/Manager */ "./src/js/api/caption/Manager.js");

var _Manager2 = _interopRequireDefault(_Manager);

var _Configurator = __webpack_require__(/*! api/Configurator */ "./src/js/api/Configurator.js");

var _Configurator2 = _interopRequireDefault(_Configurator);

var _EventEmitter = __webpack_require__(/*! api/EventEmitter */ "./src/js/api/EventEmitter.js");

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _LazyCommandExecutor = __webpack_require__(/*! api/LazyCommandExecutor */ "./src/js/api/LazyCommandExecutor.js");

var _LazyCommandExecutor2 = _interopRequireDefault(_LazyCommandExecutor);

var _Manager3 = __webpack_require__(/*! api/media/Manager */ "./src/js/api/media/Manager.js");

var _Manager4 = _interopRequireDefault(_Manager3);

var _Manager5 = __webpack_require__(/*! api/playlist/Manager */ "./src/js/api/playlist/Manager.js");

var _Manager6 = _interopRequireDefault(_Manager5);

var _Controller = __webpack_require__(/*! api/provider/Controller */ "./src/js/api/provider/Controller.js");

var _Controller2 = _interopRequireDefault(_Controller);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

var _version = __webpack_require__(/*! version */ "./src/js/version.js");

var _ApiExpansions = __webpack_require__(/*! api/ApiExpansions */ "./src/js/api/ApiExpansions.js");

var _browser = __webpack_require__(/*! utils/browser */ "./src/js/utils/browser.js");

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @brief   This object connects UI to the provider.
 * @param   {object}    container  dom element
 *
 * */

var Api = function Api(container) {
    var that = {};
    (0, _EventEmitter2["default"])(that);

    console.log("[[OvenPlayer]] v." + _version.version);
    OvenPlayerConsole.log("API loaded.");

    var playlistManager = (0, _Manager6["default"])(that);
    var providerController = (0, _Controller2["default"])();
    var userAgentObject = (0, _browser.analUserAgent)();
    var mediaManager = (0, _Manager4["default"])(container, userAgentObject);
    var currentProvider = "";
    var playerConfig = "";
    var lazyQueue = "";
    var captionManager = "";

    var webrtcRetry = false;
    var WEBRTC_RETRY_COUNT = 240;
    var webrtcRetryCount = 240;
    var webrtcRetryInterval = 500;
    var webrtcRetryTimer = null;

    var runNextPlaylist = function runNextPlaylist(index) {
        OvenPlayerConsole.log("runNextPlaylist");
        var nextPlaylistIndex = index; // || playlistManager.getCurrentPlaylistIndex() + 1;
        var playlist = playlistManager.getPlaylist();
        var hasNextPlaylist = playlist[nextPlaylistIndex] ? true : false;
        //init source index
        playerConfig.setSourceIndex(0);

        //set Golbal Volume info
        playerConfig.setVolume(currentProvider.getVolume());

        if (hasNextPlaylist) {
            //that.pause();
            lazyQueue = (0, _LazyCommandExecutor2["default"])(that, ['play', 'seek', 'stop']);
            playlistManager.setCurrentPlaylist(nextPlaylistIndex);
            initProvider();

            if (!playerConfig.isAutoStart()) {
                //Anyway nextplaylist runs autoStart!.
                that.play();
            }
        } else {
            //All Playlist Ended.
            that.trigger(_constants.ALL_PLAYLIST_ENDED, null);
        }
    };
    var initProvider = function initProvider(lastPlayPosition) {
        var pickQualityFromSource = function pickQualityFromSource(sources) {
            var quality = 0;
            if (sources) {
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]["default"]) {
                        quality = i;
                    }
                    if (playerConfig.getSourceIndex() === i) {
                        return i;
                    }
                    /*if (playerConfig.getSourceLabel() && sources[i].label === playerConfig.getSourceLabel() ) {
                        return i;
                    }*/
                }
            }
            return quality;
        };

        return providerController.loadProviders(playlistManager.getCurrentPlayList()).then(function (Providers) {

            if (Providers.length < 1) {
                throw _constants.ERRORS.codes[_constants.INIT_UNSUPPORT_ERROR];
            }

            if (currentProvider) {
                currentProvider.destroy();
                currentProvider = null;
            }
            if (captionManager) {
                captionManager.destroy();
                captionManager = null;
            }
            captionManager = (0, _Manager2["default"])(that, playlistManager.getCurrentPlaylistIndex());
            OvenPlayerConsole.log("API : init() captions");

            var currentSourceIndex = pickQualityFromSource(playlistManager.getCurrentSources());
            var providerName = Providers[currentSourceIndex]["name"];
            OvenPlayerConsole.log("API : init() provider", providerName);
            //Init Provider.
            currentProvider = Providers[currentSourceIndex].provider(mediaManager.createMedia(providerName, playerConfig), playerConfig, playlistManager.getCurrentAdTag());

            if (providerName === _constants.PROVIDER_RTMP) {
                //If provider type is RTMP, we accepts RtmpExpansion.
                _extends(that, (0, _ApiExpansions.ApiRtmpExpansion)(currentProvider));
            }

            //This passes the event created by the Provider to API.
            currentProvider.on("all", function (name, data) {

                that.trigger(name, data);

                if (name === _constants.PLAYER_PLAY) {
                    clearInterval(webrtcRetryTimer);
                    webrtcRetry = false;
                    webrtcRetryCount = WEBRTC_RETRY_COUNT;
                }

                //Auto switching next source when player load failed by amiss source.
                //data.code === PLAYER_FILE_ERROR
                if (name === _constants.ERROR || name === _constants.NETWORK_UNSTABLED) {

                    if (data) {
                        console.log(data.code, playerConfig.getConfig().autoFallback, name);
                    } else {
                        console.log(playerConfig.getConfig().autoFallback, name);
                    }

                    if (data.code === _constants.PLAYER_WEBRTC_UNEXPECTED_DISCONNECT || !playerConfig.getConfig().autoFallback && data.code === _constants.PLAYER_WEBRTC_NETWORK_SLOW) {
                        console.log('retry', webrtcRetryCount);
                        webrtcRetry = true;
                        webrtcRetryCount = WEBRTC_RETRY_COUNT;
                        webrtcRetryTimer = setTimeout(function () {

                            that.setCurrentSource(playerConfig.getSourceIndex());
                            webrtcRetryCount--;
                        }, webrtcRetryInterval);

                        return;
                    }

                    if (webrtcRetry && webrtcRetryCount > 0) {
                        console.log('retry', webrtcRetryCount);
                        webrtcRetryTimer = setTimeout(function () {

                            that.setCurrentSource(playerConfig.getSourceIndex());
                            webrtcRetryCount--;
                        }, webrtcRetryInterval);

                        return;
                    }

                    if (webrtcRetry && webrtcRetryCount <= 0) {

                        clearInterval(webrtcRetryTimer);
                        webrtcRetry = false;
                        webrtcRetryCount = WEBRTC_RETRY_COUNT;
                    }

                    //let currentSourceIndex = that.getCurrentSource();
                    if (playerConfig.getConfig().autoFallback && playerConfig.getSourceIndex() + 1 < that.getSources().length) {
                        //this sequential has available source.
                        that.pause();
                        that.setCurrentSource(playerConfig.getSourceIndex() + 1);
                    }
                }
            });
        }).then(function () {

            //provider's preload() have to made Promise. Cuz it overcomes 'flash loading timing problem'.
            currentProvider.preload(playlistManager.getCurrentSources(), lastPlayPosition).then(function () {

                that.trigger(_constants.READY);

                lazyQueue.flush();
                //This is no reason to exist anymore.
                lazyQueue.destroy();
            })["catch"](function (error) {
                lazyQueue.off();
                if (error && error.code && _constants.ERRORS.codes[error.code]) {
                    that.trigger(_constants.ERROR, _constants.ERRORS.codes[error.code]);
                } else {
                    var tempError = _constants.ERRORS.codes[_constants.INIT_UNKNWON_ERROR];
                    tempError.error = error;
                    that.trigger(_constants.ERROR, tempError);
                }
            });
        })["catch"](function (error) {
            //INIT ERROR
            if (error && error.code && _constants.ERRORS.codes[error.code]) {
                that.trigger(_constants.ERROR, _constants.ERRORS.codes[error.code]);
            } else {
                var tempError = _constants.ERRORS.codes[_constants.INIT_UNKNWON_ERROR];
                tempError.error = error;
                that.trigger(_constants.ERROR, tempError);
            }

            //xxx : If you init empty sources. (I think this is strange case.)
            //This works for this case.
            //player = OvenPlayer.create("elId", {});
            //player.load(soruces);
            lazyQueue.off();
            //lazyQueue.removeAndExcuteOnce("load");
        });
    };

    /**
     * API 초기화 함수
     * init
     * @param      {object} options player initial option value.
     * @returns
     **/
    that.init = function (options) {
        //It collects the commands and executes them at the time when they are executable.
        lazyQueue = (0, _LazyCommandExecutor2["default"])(that, ['load', 'play', 'pause', 'seek', 'stop', 'getDuration', 'getPosition', 'getVolume', 'getMute', 'getBuffer', 'getState', 'getQualityLevels']);
        options.mediaContainer = container;
        options.browser = userAgentObject;
        playerConfig = (0, _Configurator2["default"])(options, that);
        OvenPlayerConsole.log("API : init()");
        OvenPlayerConsole.log("API : init() config : ", playerConfig);

        //Not working : SyntaxError: "ERRORS.codes" is read-only
        _constants.ERRORS.codes = playerConfig.getSystemText().api.error;
        //Cool
        //ERRORS.codes.push(playerConfig.getSystemText());

        playlistManager.initPlaylist(playerConfig.getPlaylist(), playerConfig);
        OvenPlayerConsole.log("API : init() sources : ", playlistManager.getCurrentSources());

        initProvider();
    };
    that.getProviderName = function () {
        if (currentProvider) {
            return currentProvider.getName();
        } else {
            return null;
        }
    };
    that.getConfig = function () {
        OvenPlayerConsole.log("API : getConfig()", playerConfig.getConfig());
        return playerConfig.getConfig();
    };
    that.getBrowser = function () {

        return playerConfig.getBrowser();
    };
    that.setTimecodeMode = function (isShow) {
        OvenPlayerConsole.log("API : setTimecodeMode()", isShow);
        playerConfig.setTimecodeMode(isShow);
    };
    that.isTimecodeMode = function () {
        OvenPlayerConsole.log("API : isTimecodeMode()");
        return playerConfig.isTimecodeMode();
    };
    that.getFramerate = function () {
        OvenPlayerConsole.log("API : getFramerate()");
        return currentProvider.getFramerate();
    };
    that.seekFrame = function (frameCount) {
        if (!currentProvider) {
            return null;
        }
        OvenPlayerConsole.log("API : seekFrame()", frameCount);
        return currentProvider.seekFrame(frameCount);
    };

    that.getDuration = function () {
        if (!currentProvider) {
            return null;
        }
        OvenPlayerConsole.log("API : getDuration()", currentProvider.getDuration());
        return currentProvider.getDuration();
    };
    that.getPosition = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : getPosition()", currentProvider.getPosition());
        return currentProvider.getPosition();
    };
    that.getVolume = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : getVolume()", currentProvider.getVolume());
        return currentProvider.getVolume();
    };
    that.setVolume = function (volume) {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : setVolume() " + volume);
        currentProvider.setVolume(volume);
    };
    that.setMute = function (state) {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : setMute() " + state);
        return currentProvider.setMute(state);
    };
    that.getMute = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : getMute() " + currentProvider.getMute());
        return currentProvider.getMute();
    };
    that.load = function (playlist) {
        OvenPlayerConsole.log("API : load() ", playlist);
        lazyQueue = (0, _LazyCommandExecutor2["default"])(that, ['play', 'seek', 'stop']);

        if (playlist) {
            if (currentProvider) {
                currentProvider.setCurrentQuality(0);
            }
            playlistManager.initPlaylist(playlist, playerConfig);
        }
        return initProvider();
    };
    that.play = function () {
        if (!currentProvider) {
            return null;
        }
        OvenPlayerConsole.log("API : play() ");
        currentProvider.play();
    };
    that.pause = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : pause() ");
        currentProvider.pause();
    };
    that.seek = function (position) {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : seek() " + position);
        currentProvider.seek(position);
    };
    that.setPlaybackRate = function (playbackRate) {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : setPlaybackRate() ", playbackRate);
        return currentProvider.setPlaybackRate(playerConfig.setPlaybackRate(playbackRate));
    };
    that.getPlaybackRate = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : getPlaybackRate() ", currentProvider.getPlaybackRate());
        return currentProvider.getPlaybackRate();
    };

    that.getPlaylist = function () {
        OvenPlayerConsole.log("API : getPlaylist() ", playlistManager.getPlaylist());
        return playlistManager.getPlaylist();
    };
    that.getCurrentPlaylist = function () {
        OvenPlayerConsole.log("API : getCurrentPlaylist() ", playlistManager.getCurrentPlaylistIndex());
        return playlistManager.getCurrentPlaylistIndex();
    };
    that.setCurrentPlaylist = function (index) {
        OvenPlayerConsole.log("API : setCurrentPlaylist() ", index);
        runNextPlaylist(index);
    };

    that.getSources = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : getSources() ", currentProvider.getSources());
        return currentProvider.getSources();
    };
    that.getCurrentSource = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : getCurrentSource() ", currentProvider.getCurrentSource());
        return currentProvider.getCurrentSource();
    };
    that.setCurrentSource = function (index) {

        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : setCurrentSource() ", index);

        var sources = currentProvider.getSources();
        var currentSource = sources[currentProvider.getCurrentSource()];
        var newSource = sources[index];
        var lastPlayPosition = currentProvider.getPosition();
        var isSameProvider = providerController.isSameProvider(currentSource, newSource);
        // provider.serCurrentQuality -> playerConfig setting -> load
        var resultSourceIndex = currentProvider.setCurrentSource(index, isSameProvider);

        if (!newSource) {
            return null;
        }

        OvenPlayerConsole.log("API : setCurrentQuality() isSameProvider", isSameProvider);

        //switching between streams on HLS. wth? https://video-dev.github.io/hls.js/latest/docs/API.html#final-step-destroying-switching-between-streams
        if (!isSameProvider || currentProvider.getName() === _constants.PROVIDER_HLS) {
            lazyQueue = (0, _LazyCommandExecutor2["default"])(that, ['play', 'seek']);
            initProvider(lastPlayPosition);
        }

        return resultSourceIndex;
    };

    that.getQualityLevels = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : getQualityLevels() ", currentProvider.getQualityLevels());
        return currentProvider.getQualityLevels();
    };
    that.getCurrentQuality = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : getCurrentQuality() ", currentProvider.getCurrentQuality());
        return currentProvider.getCurrentQuality();
    };
    that.setCurrentQuality = function (qualityIndex) {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : setCurrentQuality() ", qualityIndex);

        return currentProvider.setCurrentQuality(qualityIndex);
    };
    that.isAutoQuality = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : isAutoQuality()");
        return currentProvider.isAutoQuality();
    };
    that.setAutoQuality = function (isAuto) {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : setAutoQuality() ", isAuto);
        return currentProvider.setAutoQuality(isAuto);
    };

    that.getCaptionList = function () {
        if (!captionManager) {
            return null;
        }
        OvenPlayerConsole.log("API : getCaptionList() ", captionManager.getCaptionList());
        return captionManager.getCaptionList();
    };
    that.getCurrentCaption = function () {
        if (!captionManager) {
            return null;
        }
        OvenPlayerConsole.log("API : getCurrentCaption() ", captionManager.getCurrentCaption());
        return captionManager.getCurrentCaption();
    };
    that.setCurrentCaption = function (index) {
        if (!captionManager) {
            return null;
        }
        OvenPlayerConsole.log("API : setCurrentCaption() ", index);
        captionManager.setCurrentCaption(index);
    };
    that.addCaption = function (track) {
        if (!captionManager) {
            return null;
        }
        OvenPlayerConsole.log("API : addCaption() ");
        return captionManager.addCaption(track);
    };
    that.removeCaption = function (index) {
        if (!captionManager) {
            return null;
        }
        OvenPlayerConsole.log("API : removeCaption() ", index);
        return captionManager.removeCaption(index);
    };

    that.getBuffer = function () {
        if (!currentProvider) {
            return null;
        }
        OvenPlayerConsole.log("API : getBuffer() ", currentProvider.getBuffer());
        currentProvider.getBuffer();
    };
    that.getState = function () {
        if (!currentProvider) {
            return null;
        }
        OvenPlayerConsole.log("API : getState() ", currentProvider.getState());
        return currentProvider.getState();
    };
    that.stop = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : stop() ");
        currentProvider.stop();
    };
    that.remove = function () {
        if (!currentProvider) {
            return null;
        }

        OvenPlayerConsole.log("API : remove() ");
        lazyQueue.destroy();
        if (captionManager) {
            captionManager.destroy();
            captionManager = null;
        }

        if (currentProvider) {
            currentProvider.destroy();
            currentProvider = null;
        }

        if (mediaManager) {
            mediaManager.destroy();
            mediaManager = null;
        }
        providerController = null;
        playlistManager = null;
        playerConfig = null;
        lazyQueue = null;

        that.trigger(_constants.DESTROY);
        that.off();

        OvenPlayerConsole.log("API : remove() - lazyQueue, currentProvider, providerController, playlistManager, playerConfig, api event destroed. ");
        OvenPlayerSDK.removePlayer(that.getContainerId());
        if (OvenPlayerSDK.getPlayerList().length === 0) {
            OvenPlayerConsole.log("OvenPlayerSDK.playerList", OvenPlayerSDK.getPlayerList());
        }
    };

    that.getVersion = function () {
        return "v." + _version.version;
    };

    return that;
};

exports["default"] = Api;

/***/ }),

/***/ "./src/js/api/ApiExpansions.js":
/*!*************************************!*\
  !*** ./src/js/api/ApiExpansions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hoho on 2018. 8. 24..
 */

var ApiRtmpExpansion = exports.ApiRtmpExpansion = function ApiRtmpExpansion(currentProvider) {
    return {
        externalCallbackCreep: function externalCallbackCreep(result) {
            if (result.name && result.data) {
                return currentProvider.triggerEventFromExternal(result.name, result.data);
            } else {
                return null;
            }
        }
    };
};

/***/ }),

/***/ "./src/js/api/Configurator.js":
/*!************************************!*\
  !*** ./src/js/api/Configurator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @brief   This initializes the input options.
 * @param   options
 *
 * */
var Configurator = function Configurator(options, provider) {

    var composeSourceOptions = function composeSourceOptions(options) {
        var Defaults = {
            mediaContainer: "",
            playbackRates: [2, 1.5, 1, 0.5, 0.25],
            playbackRate: 1,
            mute: false,
            volume: 100,
            loop: false,
            controls: true,
            autoStart: false,
            autoFallback: true,
            timecode: true,
            sourceIndex: 0,
            browser: "",
            hidePlaylistIcon: false,
            rtmpBufferTime: 1,
            rtmpBufferTimeMax: 3,
            adClient: "googleima",
            currentProtocolOnly: false,
            systemText: null,
            lang: "en"
        };
        var serialize = function serialize(val) {
            if (val === undefined) {
                return null;
            }
            if (typeof val === 'string' && val.length < 6) {
                var lowercaseVal = val.toLowerCase();
                if (lowercaseVal === 'true') {
                    return true;
                }
                if (lowercaseVal === 'false') {
                    return false;
                }
                if (!isNaN(Number(val)) && !isNaN(parseFloat(val))) {
                    return Number(val);
                }
            }
            return val;
        };
        var deserialize = function deserialize(options) {
            Object.keys(options).forEach(function (key) {
                if (key === 'id') {
                    return;
                }
                options[key] = serialize(options[key]);
            });
        };

        deserialize(options);
        var config = _extends({}, Defaults, options);
        var userCustumSystemText = [];
        if (config.systemText) {
            userCustumSystemText = _underscore2["default"].isArray(config.systemText) ? config.systemText : [config.systemText];
        }

        for (var i = 0; i < userCustumSystemText.length; i++) {
            if (userCustumSystemText[i].lang) {
                var currentSystemText = _underscore2["default"].findWhere(_constants.SYSTEM_TEXT, { "lang": userCustumSystemText[i].lang });
                if (currentSystemText) {
                    //validate & update
                    _extends(currentSystemText, userCustumSystemText[i]);
                } else {
                    //create
                    currentSystemText = _underscore2["default"].findWhere(_constants.SYSTEM_TEXT, { "lang": "en" });
                    currentSystemText.lang = userCustumSystemText[i].lang;
                    _constants.SYSTEM_TEXT.push(_extends(userCustumSystemText[i], currentSystemText));
                }
            }
        }
        config.systemText = _underscore2["default"].findWhere(_constants.SYSTEM_TEXT, { "lang": config.lang });

        var playbackRates = config.playbackRates;

        playbackRates = playbackRates.filter(function (rate) {
            return _underscore2["default"].isNumber(rate) && rate >= 0.25 && rate <= 4;
        }).map(function (rate) {
            return Math.round(rate * 4) / 4;
        });

        if (playbackRates.indexOf(1) < 0) {
            playbackRates.push(1);
        }
        playbackRates.sort();

        config.playbackRates = playbackRates;

        config.rtmpBufferTime = config.rtmpBufferTime > 10 ? 10 : config.rtmpBufferTime;
        config.rtmpBufferTimeMax = config.rtmpBufferTimeMax > 50 ? 50 : config.rtmpBufferTimeMax;

        if (config.playbackRates.indexOf(config.playbackRate) < 0) {
            config.playbackRate = 1;
        }

        var configPlaylist = config.playlist;
        if (!configPlaylist) {
            var obj = _underscore2["default"].pick(config, ['title', 'description', 'type', 'image', 'file', 'sources', 'tracks', 'host', 'application', 'stream', 'adTagUrl']);

            config.playlist = [obj];
        } else if (_underscore2["default"].isArray(configPlaylist.playlist)) {
            config.feedData = configPlaylist;
            config.playlist = configPlaylist.playlist;
        }

        delete config.duration;
        return config;
    };
    OvenPlayerConsole.log("Configurator loaded.", options);
    var spec = composeSourceOptions(options);

    //spec.isFullscreen = false; //IE 11 can't check current fullscreen state.

    var that = {};
    that.getConfig = function () {
        return spec;
    };
    that.getAdClient = function () {
        return spec.adClient;
    };
    that.setConfig = function (config, value) {
        spec[config] = value;
    };

    that.getContainer = function () {
        return spec.mediaContainer;
    };
    /*that.isFullscreen = () => {
        return spec.isFullscreen;
    }
    that.setFullscreen = (isFullscreen) => {
        return spec.isFullscreen = isFullscreen;
    }*/

    that.getPlaybackRate = function () {
        return spec.playbackRate;
    };
    that.setPlaybackRate = function (playbackRate) {
        spec.playbackRate = playbackRate;
        return playbackRate;
    };

    that.getQualityLabel = function () {
        return spec.qualityLabel;
    };
    that.setQualityLabel = function (newLabel) {
        spec.qualityLabel = newLabel;
    };

    that.isCurrentProtocolOnly = function () {
        return spec.currentProtocolOnly;
    };
    /*that.getSourceLabel = () => {
        return spec.sourceLabel;
    };
    that.setSourceLabel = (newLabel) => {
        spec.sourceLabel = newLabel;
    };*/

    that.getSourceIndex = function () {
        return spec.sourceIndex;
    };
    that.setSourceIndex = function (index) {
        spec.sourceIndex = index;
    };
    that.setTimecodeMode = function (timecode) {
        if (spec.timecode !== timecode) {
            spec.timecode = timecode;
            provider.trigger(_constants.CONTENT_TIME_MODE_CHANGED, timecode);
        }
    };
    that.isTimecodeMode = function () {
        return spec.timecode;
    };
    that.getRtmpBufferTime = function () {
        return spec.rtmpBufferTime;
    };
    that.getRtmpBufferTimeMax = function () {
        return spec.rtmpBufferTimeMax;
    };

    that.isMute = function () {
        return spec.mute;
    };
    that.getVolume = function () {
        return spec.volume;
    };
    that.setVolume = function (volume) {
        spec.volume = volume;
    };
    that.isLoop = function () {
        return spec.loop;
    };
    that.isAutoStart = function () {
        return spec.autoStart;
    };
    that.isControls = function () {
        return spec.controls;
    };

    that.getPlaybackRates = function () {
        return spec.playbackRates;
    };
    that.getBrowser = function () {
        return spec.browser;
    };
    that.getSystemText = function () {
        return spec.systemText;
    };
    that.getLanguage = function () {
        return spec.lang;
    };

    that.getPlaylist = function () {
        return spec.playlist;
    };
    that.setPlaylist = function (playlist) {
        if (_underscore2["default"].isArray(playlist)) {
            spec.playlist = playlist;
        } else {
            spec.playlist = [playlist];
        }
        return spec.playlist;
    };

    return that;
};

exports["default"] = Configurator;

/***/ }),

/***/ "./src/js/api/EventEmitter.js":
/*!************************************!*\
  !*** ./src/js/api/EventEmitter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hoho on 2018. 7. 3..
 */

/**
 * @brief   This module provide custom events.
 * @param   object    An object that requires custom events.
 *
 * */

var EventEmitter = function EventEmitter(object) {
    var that = object;
    var _events = [];

    var triggerEvents = function triggerEvents(events, args, context) {
        var i = 0;
        var length = events.length;
        for (i = 0; i < length; i++) {
            var event = events[i];
            event.listener.apply(event.context || context, args);
        }
    };

    that.on = function (name, listener, context) {
        (_events[name] || (_events[name] = [])).push({ listener: listener, context: context });
        return that;
    };
    that.trigger = function (name) {
        if (!_events) {
            return false;
        }
        var args = [].slice.call(arguments, 1);
        var events = _events[name];
        var allEvents = _events.all;

        if (events) {
            triggerEvents(events, args, that);
        }
        if (allEvents) {
            triggerEvents(allEvents, arguments, that);
        }
    };
    that.off = function (name, listener, context) {
        if (!_events) {
            return false;
        }

        if (!name && !listener && !context) {
            _events = [];
            return that;
        }

        var names = name ? [name] : Object.keys(_events);

        for (var i = 0, l = names.length; i < l; i++) {
            name = names[i];
            var events = _events[name];
            if (events) {
                var retain = _events[name] = [];
                if (listener || context) {
                    for (var j = 0, k = events.length; j < k; j++) {
                        var event = events[j];
                        if (listener && listener !== event.listener && listener !== event.listener.listener && listener !== event.listener._listener || context && context !== event.context) {
                            retain.push(event);
                        }
                    }
                }
                if (!retain.length) {
                    delete _events[name];
                }
            }
        }
        return that;
    };
    that.once = function (name, listener, context) {
        var count = 0;
        var onceCallback = function onceCallback() {
            if (count++) {
                return;
            }
            that.off(name, onceCallback);
            listener.apply(that, arguments);
        };
        onceCallback._listener = listener;
        return that.on(name, onceCallback, context);
    };

    return that;
};

exports["default"] = EventEmitter;

/***/ }),

/***/ "./src/js/api/LazyCommandExecutor.js":
/*!*******************************************!*\
  !*** ./src/js/api/LazyCommandExecutor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @brief   This executes the input commands at a specific point in time.
 * @param   instance
 * @param   queuedCommands
 * */
var LazyCommandExecutor = function LazyCommandExecutor(instance, queuedCommands) {
    var commandQueue = [];
    var undecoratedMethods = {};
    var executeMode = false;
    var that = {};
    OvenPlayerConsole.log("LazyCommandExecutor loaded.");
    queuedCommands.forEach(function (command) {
        var method = instance[command];
        undecoratedMethods[command] = method || function () {};

        instance[command] = function () {
            var args = Array.prototype.slice.call(arguments, 0);
            if (!executeMode) {
                //commandQueue.push({ command, args });
                that.addQueue(command, args);
            } else {
                executeQueuedCommands();
                if (method) {
                    method.apply(that, args);
                }
            }
        };
    });
    var executeQueuedCommands = function executeQueuedCommands() {
        while (commandQueue.length > 0) {
            var _commandQueue$shift = commandQueue.shift(),
                command = _commandQueue$shift.command,
                args = _commandQueue$shift.args;

            (undecoratedMethods[command] || instance[command]).apply(instance, args);
        }
    };

    that.setExecuteMode = function (mode) {
        executeMode = mode;
        OvenPlayerConsole.log("LazyCommandExecutor : setExecuteMode()", mode);
    };
    that.getUndecoratedMethods = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : getUndecoratedMethods()", undecoratedMethods);
        return undecoratedMethods;
    };
    that.getQueue = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : getQueue()", getQueue);
        return commandQueue;
    };
    that.addQueue = function (command, args) {
        OvenPlayerConsole.log("LazyCommandExecutor : addQueue()", command, args);
        commandQueue.push({ command: command, args: args });
    };

    that.flush = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : flush()");
        executeQueuedCommands();
    };
    that.empty = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : empty()");
        commandQueue.length = 0;
    };
    that.off = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : off()");
        queuedCommands.forEach(function (command) {
            var method = undecoratedMethods[command];
            if (method) {
                instance[command] = method;
                delete undecoratedMethods[command];
            }
        });
    };

    //Run once at the end
    that.removeAndExcuteOnce = function (command_) {
        var commandQueueItem = _underscore2["default"].findWhere(commandQueue, { command: command_ });
        OvenPlayerConsole.log("LazyCommandExecutor : removeAndExcuteOnce()", command_);
        commandQueue.splice(_underscore2["default"].findIndex(commandQueue, { command: command_ }), 1);

        var method = undecoratedMethods[command_];
        if (method) {
            OvenPlayerConsole.log("removeCommand()");
            if (commandQueueItem) {
                (method || instance[command_]).apply(instance, commandQueueItem.args);
            }
            instance[command_] = method;
            delete undecoratedMethods[command_];
        }
    };

    that.destroy = function () {
        OvenPlayerConsole.log("LazyCommandExecutor : destroy()");
        that.off();
        that.empty();
    };
    return that;
};

exports["default"] = LazyCommandExecutor;

/***/ }),

/***/ "./src/js/api/SupportChecker.js":
/*!**************************************!*\
  !*** ./src/js/api/SupportChecker.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validator = __webpack_require__(/*! utils/validator */ "./src/js/utils/validator.js");

var _browser = __webpack_require__(/*! utils/browser */ "./src/js/utils/browser.js");

/**
 * @brief   This finds the provider that matches the input source.
 * @param
 * */

var SupportChecker = function SupportChecker() {
    var that = {};
    OvenPlayerConsole.log("SupportChecker loaded.");
    var userAgentObject = (0, _browser.analUserAgent)();

    var supportList = [{
        name: 'html5',
        checkSupport: function checkSupport(source) {
            var MimeTypes = {
                aac: 'audio/mp4',
                mp4: 'video/mp4',
                f4v: 'video/mp4',
                m4v: 'video/mp4',
                mov: 'video/mp4',
                mp3: 'audio/mpeg',
                mpeg: 'audio/mpeg',
                ogv: 'video/ogg',
                ogg: 'video/ogg',
                oga: 'video/ogg',
                vorbis: 'video/ogg',
                webm: 'video/webm',
                f4a: 'video/aac',
                m3u8: 'application/vnd.apple.mpegurl',
                m3u: 'application/vnd.apple.mpegurl',
                hls: 'application/vnd.apple.mpegurl'
            };

            var video = function () {
                return document.createElement('video');
            }();
            if (!video.canPlayType) {
                return false;
            }

            var file = source.file;
            var type = source.type;

            if (!type) {
                return false;
            }
            var mimeType = source.mimeType || MimeTypes[type];

            if ((0, _validator.isHls)(file, type) && userAgentObject.browser === "Microsoft Edge") {
                //Edge supports hls native but that's sucks.
                return false;
            }

            if ((0, _validator.isRtmp)(file, type)) {
                return false;
            }

            if ((0, _validator.isWebRTC)(file, type)) {
                return false;
            }

            if (!mimeType) {
                return false;
            }

            return !!video.canPlayType(mimeType);
        }
    }, {
        name: 'webrtc',
        checkSupport: function checkSupport(source) {
            var video = function () {
                return document.createElement('video');
            }();
            if (!video.canPlayType) {
                return false;
            }
            if ((0, _validator.isRtmp)(file, type)) {
                return false;
            }

            var file = source.file;
            var type = source.type;

            if ((0, _validator.isWebRTC)(file, type)) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: 'dash',
        checkSupport: function checkSupport(source) {
            var file = source.file;

            var type = source.type;
            if ((0, _validator.isRtmp)(file, type)) {
                return false;
            }

            if (typeof (window.MediaSource || window.WebKitMediaSource) === "function" && (0, _validator.isDash)(file, type)) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: 'hls',
        checkSupport: function checkSupport(source) {
            var video = function () {
                return document.createElement('video');
            }();
            var file = source.file;
            var type = source.type;
            if ((0, _validator.isRtmp)(file, type)) {
                return false;
            }

            //this method from hls.js
            var isHlsSupport = function isHlsSupport() {
                function getMediaSource() {
                    if (typeof window !== 'undefined') {
                        return window.MediaSource || window.WebKitMediaSource;
                    }
                }
                var mediaSource = getMediaSource();
                var sourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
                var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');

                // if SourceBuffer is exposed ensure its API is valid
                // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible
                var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
                return !!isTypeSupported && !!sourceBufferValidAPI;
            };
            //Remove this '!!video.canPlayType('application/vnd.apple.mpegurl')' if you want to use hlsjs.
            //Yes I need hlsjs. 2019-06-12 && !!video.canPlayType('application/vnd.apple.mpegurl');
            return isHlsSupport();
        }
    }, {
        name: 'rtmp',
        checkSupport: function checkSupport(source) {
            var file = source.file;
            var type = source.type;
            function testFlash() {

                var support = false;

                //IE only
                if ("ActiveXObject" in window) {

                    try {
                        support = !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    } catch (e) {
                        support = false;
                    }

                    //W3C, better support in legacy browser
                } else {

                    support = !!navigator.mimeTypes['application/x-shockwave-flash'];
                }

                return support;
            }
            function checkSupport() {
                if (userAgentObject.browser === "Microsoft Edge" || userAgentObject.os === "Android" || userAgentObject.os === "iOS" || userAgentObject.browser === "Safari") {
                    return false;
                } else {
                    return true;
                }
            }
            if ((0, _validator.isRtmp)(file, type) && testFlash() && checkSupport()) {
                return true;
            } else {
                return false;
            }
        }
    }];

    that.findProviderNameBySource = function (soruce_) {
        OvenPlayerConsole.log("SupportChecker : findProviderNameBySource()", soruce_);
        var source = soruce_ === Object(soruce_) ? soruce_ : {};
        for (var i = 0; i < supportList.length; i++) {
            if (supportList[i].checkSupport(source)) {
                return supportList[i].name;
            }
        }
    };
    that.findProviderNamesByPlaylist = function (playlistItem) {
        OvenPlayerConsole.log("SupportChecker : findProviderNamesByPlaylist()", playlistItem);
        var supportNames = [];
        /*for (let i = playlist_.length; i--;) {
          }*/
        var item = playlistItem;

        if (item && item.sources) {
            for (var j = 0; j < item.sources.length; j++) {
                var source = item.sources[j];
                if (source) {
                    var supported = that.findProviderNameBySource(source);
                    if (supported) {
                        supportNames.push(supported);
                    }
                }
            }

            return supportNames;
        }
        return null;
    };
    return that;
};

exports["default"] = SupportChecker;

/***/ }),

/***/ "./src/js/api/caption/Loader.js":
/*!**************************************!*\
  !*** ./src/js/api/caption/Loader.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SrtParser = __webpack_require__(/*! api/caption/parser/SrtParser */ "./src/js/api/caption/parser/SrtParser.js");

var _SrtParser2 = _interopRequireDefault(_SrtParser);

var _vttCue = __webpack_require__(/*! utils/captions/vttCue */ "./src/js/utils/captions/vttCue.js");

var _vttCue2 = _interopRequireDefault(_vttCue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import Request from "utils/downloader";

/**
 * Created by hoho on 2018. 7. 4..
 */
var Loader = function Loader() {
    var that = {};

    var convertToVTTCues = function convertToVTTCues(cues) {
        return cues.map(function (cue) {
            return new _vttCue2["default"](cue.start, cue.end, cue.text);
        });
    };
    //language : for SMI format.
    that.load = function (track, language, successCallback, errorCallback) {

        var requestOptions = {
            method: "GET",
            url: track.file,
            encoding: null
        };

        loadRequestDownloder().then(function (Request) {
            Request(requestOptions, function (error, response, body) {
                if (error) {
                    errorCallback(error);
                } else {
                    var cues = [];
                    var vttCues = [];

                    if (body.indexOf('WEBVTT') >= 0) {
                        OvenPlayerConsole.log("WEBVTT LOADED");
                        loadVttParser().then(function (WebVTT) {
                            var parser = new WebVTT.Parser(window, WebVTT.StringDecoder());
                            vttCues = [];
                            parser.oncue = function (cue) {
                                vttCues.push(cue);
                            };
                            parser.onflush = function () {
                                //delete track.xhr;
                                successCallback(vttCues);
                            };
                            // Parse calls onflush internally
                            parser.parse(body);
                        })["catch"](function (error) {
                            //delete track.xhr;
                            errorCallback(error);
                        });
                    } else if (body.indexOf('SAMI') >= 0) {
                        OvenPlayerConsole.log("SAMI LOADED");
                        loadSmiParser().then(function (SmiParser) {
                            var parsedData = SmiParser(body, { fixedLang: language });
                            vttCues = convertToVTTCues(parsedData.result);
                            successCallback(vttCues);
                        })["catch"](function (error) {
                            //delete track.xhr;
                            errorCallback(error);
                        });
                    } else {
                        OvenPlayerConsole.log("SRT LOADED");
                        cues = (0, _SrtParser2["default"])(body);
                        vttCues = convertToVTTCues(cues);
                        successCallback(vttCues);
                    }
                }
            });
        })["catch"](function (error) {
            //delete track.xhr;
            errorCallback(error);
        });
    };

    return that;
};
function loadRequestDownloder() {
    return Promise.all(/*! require.ensure | downloader */[__webpack_require__.e("vendors~downloader"), __webpack_require__.e("downloader")]).then((function (require) {
        return __webpack_require__(/*! utils/downloader */ "./src/js/utils/downloader.js")["default"];
    }).bind(null, __webpack_require__)).catch(function (err) {
        console.log(err);
    });
};
function loadVttParser() {
    return __webpack_require__.e(/*! require.ensure | vttparser */ "vttparser").then((function (require) {
        return __webpack_require__(/*! api/caption/parser/VttParser */ "./src/js/api/caption/parser/VttParser.js")["default"];
    }).bind(null, __webpack_require__)).catch(function (err) {
        console.log(err);
    });
}
function loadSmiParser() {
    return __webpack_require__.e(/*! require.ensure | smiparser */ "smiparser").then((function (require) {
        return __webpack_require__(/*! api/caption/parser/SmiParser */ "./src/js/api/caption/parser/SmiParser.js")["default"];
    }).bind(null, __webpack_require__)).catch(function (err) {
        console.log(err);
    });
}
exports["default"] = Loader;

/***/ }),

/***/ "./src/js/api/caption/Manager.js":
/*!***************************************!*\
  !*** ./src/js/api/caption/Manager.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Loader = __webpack_require__(/*! api/caption/Loader */ "./src/js/api/caption/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isSupport = function isSupport(kind) {
    return kind === 'subtitles' || kind === 'captions';
}; /**
    * Created by hoho on 2018. 5. 17..
    */


var Manager = function Manager(api, playlistIndex) {

    var that = {};
    var captionList = [];
    var currentCaptionIndex = -1;

    var captionLoader = (0, _Loader2["default"])();
    var isFisrtLoad = true;
    var isShowing = false;

    OvenPlayerConsole.log("Caption Manager >> ", playlistIndex);

    var bindTrack = function bindTrack(track, vttCues) {
        track.data = vttCues || [];
        track.name = track.label || track.name || track.language;
        track.id = function (track, tracksCount) {
            var trackId;
            var prefix = track.kind || 'cc';
            if (track["default"] || track.defaulttrack) {
                trackId = 'default';
            } else {
                trackId = track.id || prefix + tracksCount;
            }
            if (isFisrtLoad) {
                //This execute only on. and then use flushCaptionList(lastCaptionIndex);
                changeCurrentCaption(captionList.length || 0);
                isFisrtLoad = false;
            }
            return trackId;
        }(track, captionList.length);

        captionList.push(track);
        return track.id;
    };
    var changeCurrentCaption = function changeCurrentCaption(index) {
        currentCaptionIndex = index;
        api.trigger(_constants.CONTENT_CAPTION_CHANGED, currentCaptionIndex);
    };
    if (api.getConfig().playlist && api.getConfig().playlist.length > 0) {
        var playlist = api.getConfig().playlist[playlistIndex];

        if (playlist && playlist.tracks && playlist.tracks.length > 0) {
            var _loop = function _loop(i) {
                var track = playlist.tracks[i];

                if (isSupport(track.kind) && !_underscore2["default"].findWhere(track, { file: track.file })) {
                    //that.flushCaptionList(currentCaptionIndex);
                    captionLoader.load(track, track.lang, function (vttCues) {
                        if (vttCues && vttCues.length > 0) {
                            var captionId = bindTrack(track, vttCues);
                        }
                    }, function (error) {
                        var tempError = _constants.ERRORS.codes[_constants.PLAYER_CAPTION_ERROR];
                        tempError.error = error;
                        api.trigger(_constants.ERROR, tempError);
                    });
                }
            };

            for (var i = 0; i < playlist.tracks.length; i++) {
                _loop(i);
            }
        }
    }

    api.on(_constants.CONTENT_TIME, function (meta) {
        var position = meta.position;
        if (currentCaptionIndex > -1 && captionList[currentCaptionIndex]) {
            var currentCues = _underscore2["default"].filter(captionList[currentCaptionIndex].data, function (cue) {
                return position >= cue.startTime && (!cue.endTime || position) <= cue.endTime;
            });
            if (currentCues && currentCues.length > 0) {
                api.trigger(_constants.CONTENT_CAPTION_CUE_CHANGED, currentCues[0]);
            }
        }
    });
    that.flushCaptionList = function (lastCaptionIndex) {
        captionList = [];
        changeCurrentCaption(lastCaptionIndex);
        //currentCaptionIndex = lastCaptionIndex;
    };
    that.getCaptionList = function () {
        return captionList || [];
    };
    that.getCurrentCaption = function () {
        return currentCaptionIndex;
    };
    that.setCurrentCaption = function (_index) {
        if (_index > -2 && _index < captionList.length) {
            changeCurrentCaption(_index);
        } else {
            return null;
        }
    };
    that.addCaption = function (track) {
        if (isSupport(track.kind) && !_underscore2["default"].findWhere(captionLoader, { file: track.file })) {
            captionLoader.load(track, function (vttCues) {
                if (vttCues && vttCues.length > 0) {
                    bindTrack(track, vttCues);
                }
            }, function (error) {
                var tempError = errors[_constants.PLAYER_CAPTION_ERROR];
                tempError.error = error;
                api.trigger(_constants.ERROR, tempError);
            });
        }
    };
    that.removeCaption = function (index) {
        if (index > -1 && index < captionList.length) {
            captionList.splice(index, 1);
            return captionList;
        } else {
            return null;
        }
    };
    that.destroy = function () {
        captionList = [];
        captionLoader = null;
        api.off(_constants.CONTENT_TIME, null, that);
    };

    return that;
};

exports["default"] = Manager;

/***/ }),

/***/ "./src/js/api/caption/parser/SrtParser.js":
/*!************************************************!*\
  !*** ./src/js/api/caption/parser/SrtParser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _strings = __webpack_require__(/*! utils/strings */ "./src/js/utils/strings.js");

function _entry(data) {
    var entry = {};
    var array = data.split('\r\n');
    if (array.length === 1) {
        array = data.split('\n');
    }
    var idx = 1;
    if (array[0].indexOf(' --> ') > 0) {
        idx = 0;
    }
    if (array.length > idx + 1 && array[idx + 1]) {
        // This line contains the start and end.
        var line = array[idx];
        var index = line.indexOf(' --> ');
        if (index > 0) {
            entry.start = (0, _strings.hmsToSecond)(line.substr(0, index));
            entry.end = (0, _strings.hmsToSecond)(line.substr(index + 5));
            entry.text = array.slice(idx + 1).join('\r\n');
        }
    }
    return entry;
} /**
   * Created by hoho on 2018. 5. 29..
   */


var SrtParser = function SrtParser(data) {
    var captions = [];

    data = (0, _strings.trim)(data);

    var list = data.split('\r\n\r\n');
    if (list.length === 1) {
        list = data.split('\n\n');
    }

    for (var i = 0; i < list.length; i++) {
        if (list[i] === 'WEBVTT') {
            continue;
        }
        var entry = _entry(list[i]);
        if (entry.text) {
            captions.push(entry);
        }
    }

    return captions;
};

exports['default'] = SrtParser;

/***/ }),

/***/ "./src/js/api/constants.js":
/*!*********************************!*\
  !*** ./src/js/api/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// STATE
var STATE_BUFFERING = exports.STATE_BUFFERING = "buffering";
var STATE_IDLE = exports.STATE_IDLE = "idle";
var STATE_COMPLETE = exports.STATE_COMPLETE = "complete";
var STATE_PAUSED = exports.STATE_PAUSED = "paused";
var STATE_PLAYING = exports.STATE_PLAYING = "playing";
var STATE_ERROR = exports.STATE_ERROR = "error";
var STATE_LOADING = exports.STATE_LOADING = "loading";
var STATE_STALLED = exports.STATE_STALLED = "stalled";

var STATE_AD_LOADING = exports.STATE_AD_LOADING = "adLoading";
var STATE_AD_LOADED = exports.STATE_AD_LOADED = "adLoaded";
var STATE_AD_PLAYING = exports.STATE_AD_PLAYING = "adPlaying";
var STATE_AD_PAUSED = exports.STATE_AD_PAUSED = "adPaused";
var STATE_AD_COMPLETE = exports.STATE_AD_COMPLETE = "adComplete";
var STATE_AD_ERROR = exports.STATE_AD_ERROR = "adError";
var PLAYER_AD_CLICK = exports.PLAYER_AD_CLICK = "adclick";

// PROVIDER
var PROVIDER_HTML5 = exports.PROVIDER_HTML5 = "html5";
var PROVIDER_WEBRTC = exports.PROVIDER_WEBRTC = "webrtc";
var PROVIDER_DASH = exports.PROVIDER_DASH = "dash";
var PROVIDER_HLS = exports.PROVIDER_HLS = "hls";
var PROVIDER_RTMP = exports.PROVIDER_RTMP = "rtmp";

// EVENTS
var CONTENT_COMPLETE = exports.CONTENT_COMPLETE = STATE_COMPLETE;
var READY = exports.READY = "ready";
var DESTROY = exports.DESTROY = "destroy";
var CONTENT_SEEK = exports.CONTENT_SEEK = "seek";
var CONTENT_BUFFER_FULL = exports.CONTENT_BUFFER_FULL = "bufferFull";
var DISPLAY_CLICK = exports.DISPLAY_CLICK = "displayClick";
var CONTENT_LOADED = exports.CONTENT_LOADED = "loaded";
var PLAYLIST_CHANGED = exports.PLAYLIST_CHANGED = "playlistChanged";
var CONTENT_SEEKED = exports.CONTENT_SEEKED = "seeked";
var ALL_PLAYLIST_ENDED = exports.ALL_PLAYLIST_ENDED = "allPlaylistEnded";
var NETWORK_UNSTABLED = exports.NETWORK_UNSTABLED = "unstableNetwork";

var ERROR = exports.ERROR = "error";

// STATE OF PLAYER
var PLAYER_STATE = exports.PLAYER_STATE = "stateChanged";
var PLAYER_COMPLETE = exports.PLAYER_COMPLETE = STATE_COMPLETE;
var PLAYER_PAUSE = exports.PLAYER_PAUSE = "pause";
var PLAYER_PLAY = exports.PLAYER_PLAY = "play";

var PLAYER_CLICKED = exports.PLAYER_CLICKED = "clicked";
var PLAYER_RESIZED = exports.PLAYER_RESIZED = "resized";
var PLAYER_LOADING = exports.PLAYER_LOADING = "loading";
var PLAYER_FULLSCREEN_REQUEST = exports.PLAYER_FULLSCREEN_REQUEST = "fullscreenRequested";
var PLAYER_FULLSCREEN_CHANGED = exports.PLAYER_FULLSCREEN_CHANGED = "fullscreenChanged";
var PLAYER_WARNING = exports.PLAYER_WARNING = "warning";

var AD_CHANGED = exports.AD_CHANGED = "adChanged";
var AD_TIME = exports.AD_TIME = "adTime";
var CONTENT_BUFFER = exports.CONTENT_BUFFER = "bufferChanged";
var CONTENT_TIME = exports.CONTENT_TIME = "time";
var CONTENT_RATE_CHANGE = exports.CONTENT_RATE_CHANGE = "ratechange";
var CONTENT_VOLUME = exports.CONTENT_VOLUME = "volumeChanged";
var CONTENT_MUTE = exports.CONTENT_MUTE = "mute";
var CONTENT_META = exports.CONTENT_META = "metaChanged";
var CONTENT_SOURCE_CHANGED = exports.CONTENT_SOURCE_CHANGED = "sourceChanged";
var CONTENT_LEVEL_CHANGED = exports.CONTENT_LEVEL_CHANGED = "qualityLevelChanged";
var PLAYBACK_RATE_CHANGED = exports.PLAYBACK_RATE_CHANGED = "playbackRateChanged";
var CONTENT_CAPTION_CUE_CHANGED = exports.CONTENT_CAPTION_CUE_CHANGED = "cueChanged";
var CONTENT_CAPTION_CHANGED = exports.CONTENT_CAPTION_CHANGED = "captionChanged";
var CONTENT_TIME_MODE_CHANGED = exports.CONTENT_TIME_MODE_CHANGED = "timeDisplayModeChanged";
var OME_P2P_MODE = exports.OME_P2P_MODE = "p2pMode";

var AD_CLIENT_GOOGLEIMA = exports.AD_CLIENT_GOOGLEIMA = "googleima";
var AD_CLIENT_VAST = exports.AD_CLIENT_VAST = "vast";

var INIT_UNKNWON_ERROR = exports.INIT_UNKNWON_ERROR = 100;
var INIT_UNSUPPORT_ERROR = exports.INIT_UNSUPPORT_ERROR = 101;
var INIT_RTMP_SETUP_ERROR = exports.INIT_RTMP_SETUP_ERROR = 102;
var INIT_DASH_UNSUPPORT = exports.INIT_DASH_UNSUPPORT = 103;
var INIT_ADS_ERROR = exports.INIT_ADS_ERROR = 104;
var INIT_DASH_NOTFOUND = exports.INIT_DASH_NOTFOUND = 105;
var INIT_HLSJS_NOTFOUND = exports.INIT_HLSJS_NOTFOUND = 106;
var PLAYER_UNKNWON_ERROR = exports.PLAYER_UNKNWON_ERROR = 300;
var PLAYER_UNKNWON_OPERATION_ERROR = exports.PLAYER_UNKNWON_OPERATION_ERROR = 301;
var PLAYER_UNKNWON_NEWWORK_ERROR = exports.PLAYER_UNKNWON_NEWWORK_ERROR = 302;
var PLAYER_UNKNWON_DECODE_ERROR = exports.PLAYER_UNKNWON_DECODE_ERROR = 303;
var PLAYER_FILE_ERROR = exports.PLAYER_FILE_ERROR = 304;
var PLAYER_CAPTION_ERROR = exports.PLAYER_CAPTION_ERROR = 305;
var PLAYER_WEBRTC_WS_ERROR = exports.PLAYER_WEBRTC_WS_ERROR = 501;
var PLAYER_WEBRTC_ADD_ICECANDIDATE_ERROR = exports.PLAYER_WEBRTC_ADD_ICECANDIDATE_ERROR = 502;
var PLAYER_WEBRTC_SET_REMOTE_DESC_ERROR = exports.PLAYER_WEBRTC_SET_REMOTE_DESC_ERROR = 503;
var PLAYER_WEBRTC_CREATE_ANSWER_ERROR = exports.PLAYER_WEBRTC_CREATE_ANSWER_ERROR = 504;
var PLAYER_WEBRTC_SET_LOCAL_DESC_ERROR = exports.PLAYER_WEBRTC_SET_LOCAL_DESC_ERROR = 505;
var PLAYER_WEBRTC_NETWORK_SLOW = exports.PLAYER_WEBRTC_NETWORK_SLOW = 510;
var PLAYER_WEBRTC_UNEXPECTED_DISCONNECT = exports.PLAYER_WEBRTC_UNEXPECTED_DISCONNECT = 511;

var WARN_MSG_MUTEDPLAY = exports.WARN_MSG_MUTEDPLAY = "Please touch here to turn on the sound.";

var UI_ICONS = exports.UI_ICONS = {
    volume_mute: "volume-mute",
    op_warning: "op-warning"
};

var ERRORS = exports.ERRORS = { codes: "" };

var SYSTEM_TEXT = exports.SYSTEM_TEXT = [{
    "lang": "en",
    "ui": {
        "context": "About OvenPlayer",
        "controls": {
            "live": "live",
            "low_latency_live": "low latency live",
            "low_latency_p2p": "low latency p2p"
        },
        "playlist": "Playlist",
        "setting": {
            "title": "Settings",
            "speed": "Speed",
            "source": "Source",
            "quality": "Quality",
            "caption": "Caption",
            "display": "Display"
        }
    },
    "api": {
        "message": {
            "muted_play": "Please touch here to turn on the sound."
        },
        "error": {
            100: {
                "code": 100,
                "message": "Can not load due to unknown reasons.",
                "reason": "Can not load due to unknown reasons."
            },
            101: {
                "code": 101,
                "message": "Can not load due to unsupported media.",
                "reason": "Can not load due to unsupported media."
            },
            102: {
                "code": 102,
                "message": "Flash fetching process aborted. </br><a href='http://www.adobe.com/go/getflashplayer' target='_self'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'></a>",
                "reason": "It looks like not found swf or your environment is localhost."
            },
            103: {
                "code": 103,
                "message": "Can not load due to dashjs. Please check the lastest version.",
                "reason": "dash.js version is old. Please check the lastest."
            },
            104: {
                "code": 104,
                "message": "Can not load due to google ima for Ads. ",
                "reason": "Please check the google ima library."
            },
            105: {
                "code": 105,
                "message": "Can not find the dashjs. Please check the dashjs.",
                "reason": "Not found dashjs."
            },
            106: {
                "code": 106,
                "message": "Can not find the hlsjs. Please check the hlsjs.",
                "reason": "Not found hlsjs."
            },
            300: {
                "code": 300,
                "message": "Can not play due to unknown reasons.",
                "reason": "Can not play due to unknown reasons."
            },
            301: {
                "code": 301,
                "message": "Fetching process aborted by user.",
                "reason": "Fetching process aborted by user."
            },
            302: {
                "code": 302,
                "message": "Some of the media could not be downloaded due to a network error.",
                "reason": "Error occurred when downloading."
            },
            303: {
                "code": 303,
                "message": "Unable to load media. This may be due to a server or network error, or due to an unsupported format.",
                "reason": "Error occurred when decoding."
            },
            304: {
                "code": 304,
                "message": "Media playback has been canceled. It looks like your media is corrupted or your browser does not support the features your media uses.",
                "reason": "Media playback not supported."
            },
            305: {
                "code": 305,
                "message": "Can not load captions due to unknown reasons.",
                "reason": "Can not load captions due to unknown reasons."
            },
            501: {
                "code": 501,
                "message": "Connection with low-latency(OME) server failed.",
                "reason": "WebSocket connection failed."
            },
            502: {
                "code": 502,
                "message": "Connection with low-latency(OME) server failed.",
                "reason": "WebRTC addIceCandidate failed."
            },
            503: {
                "code": 503,
                "message": "Connection with low-latency(OME) server failed.",
                "reason": "WebRTC setRemoteDescription failed."
            },
            504: {
                "code": 504,
                "message": "Connection with low-latency(OME) server failed.",
                "reason": "WebRTC peer createOffer failed."
            },
            505: {
                "code": 505,
                "message": "Connection with low-latency(OME) server failed.",
                "reason": "WebRTC setLocalDescription failed."
            },
            510: {
                "code": 510,
                "message": "Network connection is unstable. Check the network connection.",
                "reason": "Network is slow."
            },
            511: {
                "code": 511,
                "message": "Connection with low-latency(OME) terminated unexpectedly.",
                "reason": "Unexpected end of connection."
            }
        }
    }
}, {
    "lang": "ko",
    "ui": {
        "context": "오븐플레이어에 관하여",
        "controls": {
            "live": "라이브",
            "low_latency_live": "초저지연 라이브",
            "low_latency_p2p": "초저지연 P2P"
        },
        "playlist": "플레이리스트",
        "setting": {
            "title": "설정",
            "speed": "재생 속도",
            "source": "소스",
            "quality": "품질",
            "caption": "자막",
            "display": "표시"
        }
    },
    "api": {
        "message": {
            "muted_play": "눌러서 소리 켜기"
        },
        "error": {
            100: {
                "code": 100,
                "message": "알 수 없는 이유로 로드 할 수 없습니다.",
                "reason": "알 수 없는 이유로 로드 할 수 없습니다."
            },
            101: {
                "code": 101,
                "message": "지원되지 않는 미디어로 인해 로드 할 수 없습니다.",
                "reason": "Can not load due to unsupported media."
            },
            102: {
                "code": 102,
                "message": "플레시 로드가 중단 되었습니다. </br><a href='http://www.adobe.com/go/getflashplayer' target='_self'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'></a>",
                "reason": "It looks like not found swf or your environment is localhost."
            },
            103: {
                "code": 103,
                "message": "DashJS로 인해 로드 할 수 없습니다. dashjs 버전을 확인해주세요.",
                "reason": "dash.js version is old. Please check the lastest."
            },
            104: {
                "code": 104,
                "message": "Google IMA 라이브러리가 없어 로드 할 수 없습니다.",
                "reason": "Please check the google ima library."
            },
            105: {
                "code": 105,
                "message": "DashJS 라이브러리가 없어 로드 할 수 없습니다.",
                "reason": "Not found dashjs."
            },
            106: {
                "code": 106,
                "message": "HLSJS 라이브러리가 없어 로드 할 수 없습니다.",
                "reason": "Not found hlsjs."
            },
            300: {
                "code": 300,
                "message": "알 수 없는 이유로 재생할 수 없습니다.",
                "reason": "Can not play due to unknown reasons."
            },
            301: {
                "code": 301,
                "message": "사용자에 의한 프로세스 중단.",
                "reason": "Fetching process aborted by user."
            },
            302: {
                "code": 302,
                "message": "네트워크 오류로 인해 일부 미디어를 다운로드 할 수 없습니다.",
                "reason": "Error occurred when downloading."
            },
            303: {
                "code": 303,
                "message": "미디어를로드 할 수 없습니다. 서버 또는 네트워크 오류 또는 지원되지 않는 형식으로 인해 발생할 수 있습니다.",
                "reason": "Error occurred when decoding."
            },
            304: {
                "code": 304,
                "message": "미디어 재생이 취소되었습니다. 미디어가 손상되었거나 브라우저가 미디어에서 사용하는 기능을 지원하지 않는 것 같습니다.",
                "reason": "Media playback not supported."
            },
            305: {
                "code": 305,
                "message": "알 수 없는 이유로 자막을 로드 할 수 없습니다.",
                "reason": "Can not load captions due to unknown reasons."
            },
            501: {
                "code": 501,
                "message": "웹소켓 연결 실패",
                "reason": "WebSocket connection failed."
            },
            502: {
                "code": 502,
                "message": "저지연(OME) 서버와 연결에 실패했습니다.",
                "reason": "WebRTC addIceCandidate failed."
            },
            503: {
                "code": 503,
                "message": "저지연(OME) 서버와 연결에 실패했습니다.",
                "reason": "WebRTC setRemoteDescription failed."
            },
            504: {
                "code": 504,
                "message": "저지연(OME) 서버와 연결에 실패했습니다.",
                "reason": "WebRTC peer createOffer failed."
            },
            505: {
                "code": 505,
                "message": "저지연(OME) 서버와 연결에 실패했습니다.",
                "reason": "WebRTC setLocalDescription failed."
            },
            510: {
                "code": 510,
                "message": "네트워크 연결이 불안정합니다. 네트워크 연결을 확인하십시오.",
                "reason": "Network is slow."
            }
        }
    }
}];

/***/ }),

/***/ "./src/js/api/media/Manager.js":
/*!*************************************!*\
  !*** ./src/js/api/media/Manager.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browser = __webpack_require__(/*! utils/browser */ "./src/js/utils/browser.js");

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

var _likeA$ = __webpack_require__(/*! utils/likeA$.js */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

var _webpack = __webpack_require__(/*! utils/webpack */ "./src/js/utils/webpack.js");

var _version = __webpack_require__(/*! version */ "./src/js/version.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//ToDo : Restructuring

var Manager = function Manager(container, browserInfo) {
    var that = {};
    var SWFPath = (0, _webpack.getScriptPath)('ovenplayer.js') + "OvenPlayerFlash.swf?v=" + _version.version;
    var rootId = container.getAttribute("data-parent-id");
    var $container = (0, _likeA$2["default"])(container);
    var videoElement = "";

    OvenPlayerConsole.log("MediaManager loaded. browser : ", browserInfo);

    var createHtmlVideo = function createHtmlVideo(isLoop) {
        videoElement = document.createElement('video');
        videoElement.setAttribute('disableremoteplayback', '');
        videoElement.setAttribute('webkit-playsinline', 'true');
        videoElement.setAttribute('playsinline', 'true');
        if (isLoop) {
            videoElement.setAttribute('loop', '');
        }
        $container.append(videoElement);

        return videoElement;
    };
    var createFlashVideo = function createFlashVideo(isLoop, bufferTime, bufferTimeMax) {
        var movie = void 0,
            flashvars = void 0,
            allowscriptaccess = void 0,
            allowfullscreen = void 0,
            quality = void 0,
            name = void 0,
            menu = void 0,
            qual = void 0,
            bgcolor = void 0,
            loop = void 0,
            wmode = void 0;
        OvenPlayerConsole.log("MediaManager Flash buffer setting : ", bufferTime, bufferTimeMax);
        movie = document.createElement('param');
        movie.setAttribute('name', 'movie');
        movie.setAttribute('value', SWFPath);

        flashvars = document.createElement('param');
        flashvars.setAttribute('name', 'flashvars');
        //playerId is to use SWF for ExternalInterface.call().
        flashvars.setAttribute('value', "playerId=" + rootId + "&bufferTime=" + bufferTime + "&bufferMaxTime=" + bufferTimeMax);

        allowscriptaccess = document.createElement('param');
        allowscriptaccess.setAttribute('name', 'allowscriptaccess');
        allowscriptaccess.setAttribute('value', 'always');

        allowfullscreen = document.createElement('param');
        allowfullscreen.setAttribute('name', 'allowfullscreen');
        allowfullscreen.setAttribute('value', 'true');

        quality = document.createElement('param');
        quality.setAttribute('name', 'quality');
        quality.setAttribute('value', 'height');

        name = document.createElement('param');
        name.setAttribute('name', 'name');
        name.setAttribute('value', rootId + "-flash");

        menu = document.createElement('param');
        menu.setAttribute('name', 'menu');
        menu.setAttribute('value', 'false');

        qual = document.createElement('param');
        qual.setAttribute('name', 'quality');
        qual.setAttribute('value', 'high');

        bgcolor = document.createElement('param');
        bgcolor.setAttribute('name', 'bgcolor');
        bgcolor.setAttribute('value', '#000000');

        wmode = document.createElement('param');
        wmode.setAttribute('name', 'wmode');
        wmode.setAttribute('value', 'opaque');

        /*let allowButton = `<a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player"></a>`;
        message = document.createElement("div");
        message.innerHTML = allowButton;*/

        if (isLoop) {
            loop = document.createElement('param');
            loop.setAttribute('name', 'loop');
            loop.setAttribute('value', 'true');
        }

        videoElement = document.createElement('object');
        videoElement.setAttribute('id', rootId + "-flash");
        videoElement.setAttribute('name', rootId + "-flash");
        videoElement.setAttribute('width', '100%');
        videoElement.setAttribute('height', '100%');
        videoElement.setAttribute('scale', 'default');
        videoElement.setAttribute('wmode', 'opaque');

        if (browserInfo.browser === "Microsoft Internet Explorer" && browserInfo.browserMajorVersion <= 9) {
            videoElement.setAttribute('classid', 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000');
            videoElement.appendChild(movie);
        } else {
            videoElement.setAttribute('data', SWFPath);
            videoElement.setAttribute('type', 'application/x-shockwave-flash');
        }
        if (isLoop) {
            videoElement.appendChild(loop);
        }

        videoElement.appendChild(wmode);
        videoElement.appendChild(bgcolor);
        videoElement.appendChild(qual);
        videoElement.appendChild(allowfullscreen);
        videoElement.appendChild(allowscriptaccess);
        videoElement.appendChild(flashvars);
        //videoElement.appendChild(message);

        $container.append(videoElement);

        return videoElement;
    };

    that.createMedia = function (providerName, playerConfig) {
        if (providerName === _constants.PROVIDER_RTMP) {
            if (videoElement) {
                that.empty();
            }
            return createFlashVideo(playerConfig.isLoop(), playerConfig.getRtmpBufferTime(), playerConfig.getRtmpBufferTimeMax());
        } else {
            if (videoElement) {
                //that.empty();
                //reuse video element.
                //becuase playlist is auto next playing.
                //Only same video element does not require User Interaction Error.
                //ToDo : refactoring
                return videoElement;
            } else {
                return createHtmlVideo(playerConfig.isLoop());
            }
        }
    };

    that.createAdContainer = function () {
        var adContainer = document.createElement('div');
        adContainer.setAttribute('class', 'op-ads');
        $container.append(adContainer);

        return adContainer;
    };

    that.empty = function () {
        OvenPlayerConsole.log("MediaManager removeElement()");
        $container.removeChild(videoElement);
        videoElement = null;
    };

    that.destroy = function () {
        $container.removeChild();
        $container = null;
        videoElement = null;
        rootId = null;
    };

    return that;
}; /**
    * @brief   미디어 엘리먼트를 관리하는 객체. 현재는 하는 일이 많지 않다.
    * @param   {element}   container   dom element
    *
    * */
exports["default"] = Manager;

/***/ }),

/***/ "./src/js/api/playlist/Manager.js":
/*!****************************************!*\
  !*** ./src/js/api/playlist/Manager.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

var _validator = __webpack_require__(/*! utils/validator */ "./src/js/utils/validator.js");

var _strings = __webpack_require__(/*! ../../utils/strings */ "./src/js/utils/strings.js");

var _SupportChecker = __webpack_require__(/*! ../SupportChecker */ "./src/js/api/SupportChecker.js");

var _SupportChecker2 = _interopRequireDefault(_SupportChecker);

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @brief   This manages Playlist or Sources.
 * @param
 *
 * */
var Manager = function Manager(provider) {
    var that = {};
    var currentPlaylistItem = [];
    var spec = {
        playlist: [],
        currentIndex: 0
    };
    var supportChecker = (0, _SupportChecker2["default"])();

    OvenPlayerConsole.log("PlaylistManager loaded.");

    var makePrettySource = function makePrettySource(source_) {
        if (!source_ || !source_.file && !(source_.host || source_.application || source_.stream)) {
            return;
        }

        var source = _extends({}, { 'default': false }, source_);
        source.file = (0, _strings.trim)('' + source.file);

        if (source.host && source.application && source.stream) {
            source.file = source.host + "/" + source.application + "/stream/" + source.stream;
            delete source.host;
            delete source.application;
            delete source.stream;
        }

        var mimetypeRegEx = /^[^/]+\/(?:x-)?([^/]+)$/;

        if (mimetypeRegEx.test(source.type)) {
            // if type is given as a mimetype
            source.mimeType = source.type;
            source.type = source.type.replace(mimetypeRegEx, '$1');
        }

        if ((0, _validator.isRtmp)(source.file)) {
            source.type = 'rtmp';
        } else if ((0, _validator.isWebRTC)(source.file)) {
            source.type = 'webrtc';
        } else if ((0, _validator.isDash)(source.file, source.type)) {
            source.type = 'dash';
        } else if (!source.type) {
            source.type = (0, _strings.extractExtension)(source.file);
        }

        if (source.lowLatency) {
            source.lowLatency = source.lowLatency;
        }

        if (!source.type) {
            return;
        }

        // normalize types
        switch (source.type) {
            case 'm3u8':
            case 'vnd.apple.mpegurl':
                source.type = 'hls';
                break;
            case 'm4a':
                source.type = 'aac';
                break;
            case 'smil':
                source.type = 'rtmp';
                break;
            default:
                break;
        }

        Object.keys(source).forEach(function (key) {
            if (source[key] === '') {
                delete source[key];
            }
        });

        return source;
    };

    that.initPlaylist = function (playlist, playerConfig) {

        OvenPlayerConsole.log("PlaylistManager setPlaylist() ", playlist);
        var prettiedPlaylist = (_underscore2["default"].isArray(playlist) ? playlist : [playlist]).map(function (item) {
            if (!_underscore2["default"].isArray(item.tracks)) {
                delete item.tracks;
            }
            var playlistItem = _extends({}, {
                sources: [],
                tracks: [],
                title: ""
            }, item);

            if (playlistItem.sources === Object(playlistItem.sources) && !_underscore2["default"].isArray(playlistItem.sources)) {
                playlistItem.sources = [makePrettySource(playlistItem.sources)];
            }

            if (!_underscore2["default"].isArray(playlistItem.sources) || playlistItem.sources.length === 0) {
                playlistItem.sources = [makePrettySource(playlistItem)];
            }

            if (!_underscore2["default"].isArray(playlistItem.sources) || playlistItem.sources.length === 0) {
                if (item.levels) {
                    playlistItem.sources = item.levels;
                } else {
                    playlistItem.sources = [makePrettySource(item)];
                }
            }

            for (var i = 0; i < playlistItem.sources.length; i++) {
                var source = playlistItem.sources[i];
                var prettySource = "";
                if (!source) {
                    continue;
                }

                var defaultSource = source["default"];
                if (defaultSource) {
                    source["default"] = defaultSource.toString() === 'true';
                } else {
                    source["default"] = false;
                }

                // If the source doesn't have a label, number it
                if (!playlistItem.sources[i].label) {
                    playlistItem.sources[i].label = playlistItem.sources[i].type + "-" + i.toString();
                }

                prettySource = makePrettySource(playlistItem.sources[i]);
                if (supportChecker.findProviderNameBySource(prettySource)) {
                    playlistItem.sources[i] = prettySource;
                } else {
                    playlistItem.sources[i] = null;
                }
            }

            playlistItem.sources = playlistItem.sources.filter(function (source) {
                return !!source;
            });

            if (!playlistItem.title && playlistItem.sources[0] && playlistItem.sources[0].label) {
                playlistItem.title = playlistItem.sources[0].label;
            }

            // default 가 없을때 webrtc가 있다면 webrtc default : true로 자동 설정
            /*let haveDefault = _.find(playlistItem.sources, function(source){return source.default == true;});
            let webrtcSource = [];
            if(!haveDefault){
                webrtcSource = _.find(playlistItem.sources, function(source){return source.type == "webrtc";});
                if(webrtcSource){
                    webrtcSource.default = true;
                }
            }*/

            function extractOnlyOneProtocol(sources) {
                if (!!sources) {
                    var highPriorityType = playlistItem.sources[0].type;

                    return _underscore2["default"].filter(sources, { type: highPriorityType });
                }
            }

            if (playerConfig.isCurrentProtocolOnly()) {
                playlistItem.sources = extractOnlyOneProtocol(playlistItem.sources);
            }

            if (!_underscore2["default"].isArray(playlistItem.tracks)) {
                playlistItem.tracks = [];
            }
            if (_underscore2["default"].isArray(playlistItem.captions)) {
                playlistItem.tracks = playlistItem.tracks.concat(playlistItem.captions);
                delete playlistItem.captions;
            }

            playlistItem.tracks = playlistItem.tracks.map(function (track) {
                if (!track || !track.file) {
                    return false;
                }
                return _extends({}, {
                    'kind': 'captions',
                    'default': false
                }, track);
            }).filter(function (track) {
                return !!track;
            });
            return playlistItem;
        }).filter(function (item) {
            return item.sources && item.sources.length > 0;
        }) || [];
        spec.playlist = prettiedPlaylist;
        return prettiedPlaylist;
    };
    that.getPlaylist = function () {
        OvenPlayerConsole.log("PlaylistManager getPlaylist() ", spec.playlist);
        return spec.playlist;
    };
    that.getCurrentPlayList = function () {
        if (spec.playlist[spec.currentIndex]) {
            return spec.playlist[spec.currentIndex];
        } else {
            return [];
        }
    };
    that.getCurrentPlaylistIndex = function () {
        return spec.currentIndex;
    };
    that.setCurrentPlaylist = function (index) {
        if (spec.playlist[index]) {
            spec.currentIndex = index;
            provider.trigger(_constants.PLAYLIST_CHANGED, spec.currentIndex);
        }
        return spec.currentIndex;
    };
    that.getCurrentSources = function () {
        if (spec.playlist[spec.currentIndex]) {
            OvenPlayerConsole.log("PlaylistManager getCurrentSources() ", spec.playlist[spec.currentIndex].sources);
            return spec.playlist[spec.currentIndex].sources;
        } else {
            return null;
        }
    };
    that.getCurrentAdTag = function () {
        if (spec.playlist[spec.currentIndex]) {
            return spec.playlist[spec.currentIndex].adTagUrl || "";
        }
    };

    return that;
};

exports["default"] = Manager;

/***/ }),

/***/ "./src/js/api/provider/Controller.js":
/*!*******************************************!*\
  !*** ./src/js/api/provider/Controller.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SupportChecker = __webpack_require__(/*! api/SupportChecker */ "./src/js/api/SupportChecker.js");

var _SupportChecker2 = _interopRequireDefault(_SupportChecker);

var _ApiExpansions = __webpack_require__(/*! api/ApiExpansions */ "./src/js/api/ApiExpansions.js");

var _constants = __webpack_require__(/*! api/constants */ "./src/js/api/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @brief   This manages provider.
 * @param
 * */
var Controller = function Controller() {
    var supportChacker = (0, _SupportChecker2["default"])();
    var Providers = {};

    var that = {};
    OvenPlayerConsole.log("ProviderController loaded.");

    var registeProvider = function registeProvider(name, provider) {
        if (Providers[name]) {
            return;
        }
        OvenPlayerConsole.log("ProviderController _registerProvider() ", name);
        Providers[name] = provider;
    };

    var ProviderLoader = {
        html5: function html5() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.Html5 */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~2ec193ac"), __webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"), __webpack_require__.e("ovenplayer.provider.Html5")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/html5/providers/Html5 */ "./src/js/api/provider/html5/providers/Html5.js")["default"];
                registeProvider(_constants.PROVIDER_HTML5, provider);
                return { name: _constants.PROVIDER_HTML5, provider: provider };
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        },
        webrtc: function webrtc() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.WebRTCProvider */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~2ec193ac"), __webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"), __webpack_require__.e("ovenplayer.provider.WebRTCProvider")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/html5/providers/WebRTC */ "./src/js/api/provider/html5/providers/WebRTC.js")["default"];
                registeProvider(_constants.PROVIDER_WEBRTC, provider);
                return { name: _constants.PROVIDER_WEBRTC, provider: provider };
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        },
        dash: function dash() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.DashProvider */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~2ec193ac"), __webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"), __webpack_require__.e("ovenplayer.provider.DashProvider")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/html5/providers/Dash */ "./src/js/api/provider/html5/providers/Dash.js")["default"];
                registeProvider(_constants.PROVIDER_DASH, provider);
                return { name: _constants.PROVIDER_DASH, provider: provider };
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        },
        hls: function hls() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.HlsProvider */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~2ec193ac"), __webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf"), __webpack_require__.e("ovenplayer.provider.HlsProvider")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/html5/providers/Hls */ "./src/js/api/provider/html5/providers/Hls.js")["default"];
                registeProvider(_constants.PROVIDER_HLS, provider);
                return { name: _constants.PROVIDER_HLS, provider: provider };
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        },
        rtmp: function rtmp() {
            return Promise.all(/*! require.ensure | ovenplayer.provider.RtmpProvider */[__webpack_require__.e("ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~2ec193ac"), __webpack_require__.e("ovenplayer.provider.RtmpProvider")]).then((function (require) {
                var provider = __webpack_require__(/*! api/provider/flash/providers/Rtmp */ "./src/js/api/provider/flash/providers/Rtmp.js")["default"];
                registeProvider(_constants.PROVIDER_RTMP, provider);
                return { name: _constants.PROVIDER_RTMP, provider: provider };
            }).bind(null, __webpack_require__)).catch(function (err) {
                throw new Error('Network error');
            });
        }
    };

    that.loadProviders = function (playlistItem) {
        var supportedProviderNames = supportChacker.findProviderNamesByPlaylist(playlistItem);
        OvenPlayerConsole.log("ProviderController loadProviders() ", supportedProviderNames);
        if (!supportedProviderNames) {
            return Promise.reject(_constants.ERRORS.codes[_constants.INIT_UNSUPPORT_ERROR]);
        } else {
            return Promise.all(supportedProviderNames.filter(function (providerName) {
                return !!ProviderLoader[providerName];
            }).map(function (providerName) {
                return ProviderLoader[providerName]();
            }));
        }
    };

    that.findByName = function (name) {
        OvenPlayerConsole.log("ProviderController findByName() ", name);
        return Providers[name];
    };

    that.getProviderBySource = function (source) {
        var supportedProviderName = supportChacker.findProviderNameBySource(source);
        OvenPlayerConsole.log("ProviderController getProviderBySource() ", supportedProviderName);
        return that.findByName(supportedProviderName);
    };

    that.isSameProvider = function (currentSource, newSource) {
        OvenPlayerConsole.log("ProviderController isSameProvider() ", supportChacker.findProviderNameBySource(currentSource), supportChacker.findProviderNameBySource(newSource));
        return supportChacker.findProviderNameBySource(currentSource) === supportChacker.findProviderNameBySource(newSource);
    };

    return that;
};

exports["default"] = Controller;

/***/ }),

/***/ "./src/js/ovenplayer.sdk.js":
/*!**********************************!*\
  !*** ./src/js/ovenplayer.sdk.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkAndGetContainerElement = undefined;

var _Api = __webpack_require__(/*! api/Api */ "./src/js/api/Api.js");

var _Api2 = _interopRequireDefault(_Api);

var _validator = __webpack_require__(/*! utils/validator */ "./src/js/utils/validator.js");

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

var _likeA$ = __webpack_require__(/*! utils/likeA$ */ "./src/js/utils/likeA$.js");

var _likeA$2 = _interopRequireDefault(_likeA$);

var _webpack = __webpack_require__(/*! utils/webpack */ "./src/js/utils/webpack.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

__webpack_require__.p = (0, _webpack.getScriptPath)('ovenplayer.sdk.js');

/**
 * Main OvenPlayerSDK object
 */
var OvenPlayerSDK = window.OvenPlayerSDK = {};

var playerList = OvenPlayerSDK.playerList = [];

var checkAndGetContainerElement = exports.checkAndGetContainerElement = function checkAndGetContainerElement(container) {
    if (!container) {

        // TODO(rock): Should cause an error.
        return null;
    }

    var containerElement = null;

    if (typeof container === 'string') {

        containerElement = document.getElementById(container);
    } else if (container.nodeType) {

        containerElement = container;
    } else {
        // TODO(rock): Should cause an error.
        return null;
    }

    return containerElement;
};

/**
 * Create player instance and return it.
 *
 * @param      {string | dom element} container  Id of container element or container element
 * @param      {object} options  The options
 */
OvenPlayerSDK.create = function (container, options) {

    var containerElement = checkAndGetContainerElement(container);

    var playerInstance = (0, _Api2['default'])(containerElement);
    playerInstance.init(options);

    playerList.push(playerInstance);

    return playerInstance;
};

/**
 * Gets the player instance list.
 *
 * @return     {array}  The player list.
 */
OvenPlayerSDK.getPlayerList = function () {

    return playerList;
};

/**
 * Gets the player instance by container id.
 *
 * @param      {string}  containerId  The container identifier
 * @return     {obeject | null}  The player instance.
 */
OvenPlayerSDK.getPlayerByContainerId = function (containerId) {

    for (var i = 0; i < playerList.length; i++) {

        if (playerList[i].getContainerId() === containerId) {

            return playerList[i];
        }
    }

    return null;
};

/**
 * Gets the player instance by index.
 *
 * @param      {number}  index   The index
 * @return     {object | null}  The player instance.
 */
OvenPlayerSDK.getPlayerByIndex = function (index) {

    var playerInstance = playerList[index];

    if (playerInstance) {

        return playerInstance;
    } else {

        return null;
    }
};

/**
 * Remove the player instance by playerId.
 *
 * @param      {playerId}  id
 * @return     {null}
 */
OvenPlayerSDK.removePlayer = function (playerId) {
    for (var i = 0; i < playerList.length; i++) {

        if (playerList[i].getContainerId() === playerId) {

            playerList.splice(i, 1);
        }
    }
};

/**
 * Generate webrtc source for player source type.
 *
 * @param      {Object | Array}  source   webrtc source
 * @return     {Array}  Player source Object.
 */
OvenPlayerSDK.generateWebrtcUrls = function (sources) {
    return (_underscore2['default'].isArray(sources) ? sources : [sources]).map(function (source, index) {
        if (source.host && (0, _validator.isWebRTC)(source.host) && source.application && source.stream) {
            return { file: source.host + "/" + source.application + "/" + source.stream, type: "webrtc", label: source.label ? source.label : "webrtc-" + (index + 1) };
        }
    });
};

/**
 * Whether show the player core log or not.
 *
 * @param      {boolean}  boolean   run debug mode or not.
 * @return     {boolean}  run debug mode or not.
 */
OvenPlayerSDK.debug = function (isDebugMode) {
    if (isDebugMode) {
        window.OvenPlayerConsole = { log: window['console']['log'] };
    } else {
        window.OvenPlayerConsole = { log: function log() {} };
    }
    return isDebugMode;
};

exports['default'] = OvenPlayerSDK;

/***/ }),

/***/ "./src/js/utils/browser.js":
/*!*********************************!*\
  !*** ./src/js/utils/browser.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hoho on 2018. 8. 24..
 */

var getBrowserLanguage = exports.getBrowserLanguage = function getBrowserLanguage() {
    var nav = window.navigator,
        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
        i = void 0,
        language = void 0;

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
        for (i = 0; i < nav.languages.length; i++) {
            language = nav.languages[i];
            if (language && language.length) {
                return language;
            }
        }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]];
        if (language && language.length) {
            return language;
        }
    }

    return null;
};
var analUserAgent = exports.analUserAgent = function analUserAgent() {
    var unknown = '-';

    // screen
    var screenSize = '';
    if (screen.width) {
        var width = screen.width ? screen.width : '';
        var height = screen.height ? screen.height : '';
        screenSize += '' + width + " x " + height;
    }

    // browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var isWebview = false;
    var nameOffset = void 0,
        verOffset = void 0,
        ix = void 0;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 4);
    }
    //삼성 브라우저
    else if ((verOffset = nAgt.indexOf('SamsungBrowser')) != -1) {
            browser = 'SamsungBrowser';
            version = nAgt.substring(verOffset + 15);
        }
        // Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
                browser = 'Microsoft Edge';
                version = nAgt.substring(verOffset + 5);
            }
            // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                    browser = 'Microsoft Internet Explorer';
                    version = nAgt.substring(verOffset + 5);

                    //win7 IE11 userAgent is ugly....
                    if (nAgt.indexOf('Trident/') !== -1 && nAgt.indexOf('rv:') !== -1) {
                        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
                    }
                }
                // Chrome
                else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                        browser = 'Chrome';
                        version = nAgt.substring(verOffset + 7);
                    } else if ((verOffset = nAgt.indexOf('CriOS')) != -1) {
                        //iphone - chrome
                        browser = 'Chrome';
                        version = nAgt.substring(verOffset + 6);
                    }
                    // Firefox
                    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                            browser = 'Firefox';
                            version = nAgt.substring(verOffset + 8);
                        } else if ((verOffset = nAgt.indexOf('FxiOS')) != -1) {
                            browser = 'Firefox';
                            version = nAgt.substring(verOffset + 6);
                        }
                        // Safari
                        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                                browser = 'Safari';
                                version = nAgt.substring(verOffset + 7);
                                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                                    version = nAgt.substring(verOffset + 8);
                                }
                            }

                            // MSIE 11+
                            else if (nAgt.indexOf('Trident/') !== -1) {
                                    browser = 'Microsoft Internet Explorer';
                                    version = nAgt.substring(nAgt.indexOf('rv:') + 3);
                                }
                                // Other browsers
                                else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                                        browser = nAgt.substring(nameOffset, verOffset);
                                        version = nAgt.substring(verOffset + 1);
                                        if (browser.toLowerCase() == browser.toUpperCase()) {
                                            browser = navigator.appName;
                                        }
                                    }
    if (nAgt.indexOf(' wv') > 0) {
        isWebview = true;
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    var cookieEnabled = navigator.cookieEnabled ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = document.cookie.indexOf('testcookie') != -1 ? true : false;
    }

    // system
    var os = unknown;
    var clientStrings = [{ s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ }, { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ }, { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ }, { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ }, { s: 'Windows Vista', r: /Windows NT 6.0/ }, { s: 'Windows Server 2003', r: /Windows NT 5.2/ }, { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ }, { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ }, { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ }, { s: 'Windows 98', r: /(Windows 98|Win98)/ }, { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ }, { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { s: 'Windows CE', r: /Windows CE/ }, { s: 'Windows 3.11', r: /Win16/ }, { s: 'Android', r: /Android/ }, { s: 'Open BSD', r: /OpenBSD/ }, { s: 'Sun OS', r: /SunOS/ }, { s: 'Linux', r: /(Linux|X11)/ }, { s: 'iOS', r: /(iPhone|iPad|iPod)/ }, { s: 'Mac OS X', r: /Mac OS X/ }, { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { s: 'QNX', r: /QNX/ }, { s: 'UNIX', r: /UNIX/ }, { s: 'BeOS', r: /BeOS/ }, { s: 'OS/2', r: /OS\/2/ }, { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    return {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        ua: nAgt,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled
    };
};

/***/ }),

/***/ "./src/js/utils/captions/vttCue.js":
/*!*****************************************!*\
  !*** ./src/js/utils/captions/vttCue.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VTTCue = window.VTTCue;

var autoKeyword = "auto";
var directionSetting = {
    "": true,
    "lr": true,
    "rl": true
};
var alignSetting = {
    "start": true,
    "middle": true,
    "end": true,
    "left": true,
    "right": true
};

function findDirectionSetting(value) {
    if (typeof value !== "string") {
        return false;
    }
    var dir = directionSetting[value.toLowerCase()];
    return dir ? value.toLowerCase() : false;
}

function findAlignSetting(value) {
    if (typeof value !== "string") {
        return false;
    }
    var align = alignSetting[value.toLowerCase()];
    return align ? value.toLowerCase() : false;
}

function extend(obj) {
    var i = 1;
    for (; i < arguments.length; i++) {
        var cobj = arguments[i];
        for (var p in cobj) {
            obj[p] = cobj[p];
        }
    }

    return obj;
}
if (!VTTCue) {
    VTTCue = function VTTCue(startTime, endTime, text) {
        var cue = this;
        var isIE8 = /MSIE\s8\.0/.test(navigator.userAgent);
        var baseObj = {};

        if (isIE8) {
            cue = document.createElement('custom');
        } else {
            baseObj.enumerable = true;
        }

        /**
         * Shim implementation specific properties. These properties are not in
         * the spec.
         */

        // Lets us know when the VTTCue's data has changed in such a way that we need
        // to recompute its display state. This lets us compute its display state
        // lazily.
        cue.hasBeenReset = false;

        /**
         * VTTCue and TextTrackCue properties
         * http://dev.w3.org/html5/webvtt/#vttcue-interface
         */

        var _id = "";
        var _pauseOnExit = false;
        var _startTime = startTime;
        var _endTime = endTime;
        var _text = text;
        var _region = null;
        var _vertical = "";
        var _snapToLines = true;
        var _line = "auto";
        var _lineAlign = "start";
        var _position = 50;
        var _positionAlign = "middle";
        var _size = 50;
        var _align = "middle";

        Object.defineProperty(cue, "id", extend({}, baseObj, {
            get: function get() {
                return _id;
            },
            set: function set(value) {
                _id = "" + value;
            }
        }));

        Object.defineProperty(cue, "pauseOnExit", extend({}, baseObj, {
            get: function get() {
                return _pauseOnExit;
            },
            set: function set(value) {
                _pauseOnExit = !!value;
            }
        }));

        Object.defineProperty(cue, "startTime", extend({}, baseObj, {
            get: function get() {
                return _startTime;
            },
            set: function set(value) {
                if (typeof value !== "number") {
                    throw new TypeError("Start time must be set to a number.");
                }
                _startTime = value;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "endTime", extend({}, baseObj, {
            get: function get() {
                return _endTime;
            },
            set: function set(value) {
                if (typeof value !== "number") {
                    throw new TypeError("End time must be set to a number.");
                }
                _endTime = value;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "text", extend({}, baseObj, {
            get: function get() {
                return _text;
            },
            set: function set(value) {
                _text = "" + value;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "region", extend({}, baseObj, {
            get: function get() {
                return _region;
            },
            set: function set(value) {
                _region = value;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "vertical", extend({}, baseObj, {
            get: function get() {
                return _vertical;
            },
            set: function set(value) {
                var setting = findDirectionSetting(value);
                // Have to check for false because the setting an be an empty string.
                if (setting === false) {
                    throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _vertical = setting;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "snapToLines", extend({}, baseObj, {
            get: function get() {
                return _snapToLines;
            },
            set: function set(value) {
                _snapToLines = !!value;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "line", extend({}, baseObj, {
            get: function get() {
                return _line;
            },
            set: function set(value) {
                if (typeof value !== "number" && value !== autoKeyword) {
                    throw new SyntaxError("An invalid number or illegal string was specified.");
                }
                _line = value;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "lineAlign", extend({}, baseObj, {
            get: function get() {
                return _lineAlign;
            },
            set: function set(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                    throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _lineAlign = setting;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "position", extend({}, baseObj, {
            get: function get() {
                return _position;
            },
            set: function set(value) {
                if (value < 0 || value > 100) {
                    throw new Error("Position must be between 0 and 100.");
                }
                _position = value;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "positionAlign", extend({}, baseObj, {
            get: function get() {
                return _positionAlign;
            },
            set: function set(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                    throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _positionAlign = setting;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "size", extend({}, baseObj, {
            get: function get() {
                return _size;
            },
            set: function set(value) {
                if (value < 0 || value > 100) {
                    throw new Error("Size must be between 0 and 100.");
                }
                _size = value;
                this.hasBeenReset = true;
            }
        }));

        Object.defineProperty(cue, "align", extend({}, baseObj, {
            get: function get() {
                return _align;
            },
            set: function set(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                    throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _align = setting;
                this.hasBeenReset = true;
            }
        }));

        /**
         * Other <track> spec defined properties
         */

        // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
        cue.displayState = undefined;

        if (isIE8) {
            return cue;
        }
    };

    /**
     * VTTCue methods
     */

    VTTCue.prototype.getCueAsHTML = function () {
        // Assume WebVTT.convertCueToDOMTree is on the global.
        return WebVTT.convertCueToDOMTree(window, this.text);
    };
};

exports["default"] = VTTCue;

/***/ }),

/***/ "./src/js/utils/likeA$.js":
/*!********************************!*\
  !*** ./src/js/utils/likeA$.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = __webpack_require__(/*! utils/underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @brief   It was replace jquery's selector. It Often used by OvenTemplate. (/view/engine/OvenTemplate.js)
 * @param   selectorOrElement  string or element
 *
 * */

var La$ = function La$(selectorOrElement) {
    var that = {};
    var returnNode = function returnNode($element, selector) {
        var nodeList = $element.querySelectorAll(selector);
        if (nodeList.length > 1) {
            return nodeList;
        } else {
            return nodeList[0];
        }
    };

    var $element = "";

    if (_underscore2["default"].isElement(selectorOrElement) || _underscore2["default"].every(selectorOrElement, function (item) {
        return _underscore2["default"].isElement(item);
    })) {
        $element = selectorOrElement;
    } else if (selectorOrElement === "document") {
        $element = document;
    } else if (selectorOrElement === "window") {
        $element = window;
    } else {
        $element = returnNode(document, selectorOrElement);
    }

    if (!$element) {
        return null;
    }

    /*EFFECTS*/

    that.show = function () {
        $element.style.display = 'block';
    };

    that.hide = function () {
        $element.style.display = 'none';
    };

    /*ELEMENTS*/

    that.addClass = function (name) {
        if ($element.classList) {
            $element.classList.add(name);
        } else {
            var classNames = $element.className.split(" ");
            if (classNames.indexOf(name) === -1) {
                $element.className += " " + name;
            }
        }
    };

    that.after = function (htmlString) {
        $element.insertAdjacentHTML('afterend', htmlString);
    };

    that.append = function (htmlString) {
        $element.appendChild(htmlString);
    };

    that.before = function (htmlString) {
        $element.insertAdjacentHTML('beforebegin', htmlString);
    };

    that.children = function () {
        return $element.children || [];
    };

    //The contains() method returns a Boolean value indicating whether a node is a descendant of a specified node.
    //A descendant can be a child, grandchild, great-grandchild, and so on.
    that.contains = function (elChild) {
        return $element !== elChild && $element.contains(elChild);
    };

    that.empty = function () {
        $element.innerHTML = "";
    };

    that.find = function (selector) {
        return La$(returnNode($element, selector));
    };

    that.css = function (name, value) {
        if (value) {
            if ($element.length > 0) {
                $element.forEach(function (element) {
                    element.style[name] = value;
                });
            } else {
                $element.style[name] = value;
            }
        } else {
            return $element.style[name];
        }
    };

    that.removeClass = function (name) {
        if ($element.classList) {
            $element.classList.remove(name);
        } else {
            $element.className = $element.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    that.removeAttribute = function (attrName) {
        $element.removeAttribute(attrName);
    };

    /*that.append = (htmlCode) =>{
        $element.innerHTML += htmlCode;
    };*/

    that.text = function (text) {
        //IE8+
        if (text === undefined) {
            return $element.textContent;
        } else {
            $element.textContent = text;
        }
    };
    that.html = function (htmlString) {
        $element.innerHTML = htmlString;
    };
    that.hasClass = function (name) {
        //IE8+
        if ($element.classList) {
            return $element.classList.contains(name);
        } else {
            return new RegExp('(^| )' + name + '( |$)', 'gi').test($element.name);
        }
    };

    that.is = function ($targetElement) {
        /*var matches = function(el, selector) {
            return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
        };
         matches(el, '.my-class');*/
        return $element === $targetElement;
    };

    that.offset = function () {
        //IE8+
        var rect = $element.getBoundingClientRect();

        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
    };

    that.width = function () {
        //IE8+
        return $element.clientWidth;
    };

    that.height = function () {
        //IE8+
        return $element.clientHeight;
    };

    that.attr = function (attr) {
        return $element.getAttribute(attr);
    };

    that.replace = function (html) {
        $element.replaceWith(html);
    };

    that.remove = function () {
        if ($element.length > 1) {
            $element.parentElement.removeChild($element);
        } else {
            $element.remove();
        }
    };

    that.removeChild = function (element) {
        if (element) {
            $element.removeChild(element);
        } else {
            while ($element.hasChildNodes()) {
                $element.removeChild($element.firstChild);
            }
        }
    };

    that.get = function () {
        return $element;
    };

    that.closest = function (selectorString) {
        var closestElement = $element.closest(selectorString);
        if (closestElement) {
            return La$(closestElement);
        } else {
            return null;
        }
    };

    return that;
}; /**
    * Created by hoho on 2018. 7. 23..
    */
exports["default"] = La$;

/***/ }),

/***/ "./src/js/utils/strings.js":
/*!*********************************!*\
  !*** ./src/js/utils/strings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractExtension = undefined;
exports.trim = trim;
exports.naturalHms = naturalHms;
exports.hmsToSecond = hmsToSecond;

var _underscore = __webpack_require__(/*! ./underscore */ "./src/js/utils/underscore.js");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function trim(string) {
    return string ? string.replace(/^\s+|\s+$/g, '') : "";
}

/**
 * extractExtension
 *
 * @param      {string} path for url
 * @return     {string}  Extension
 */
var extractExtension = exports.extractExtension = function extractExtension(path) {
    if (!path || path.substr(0, 4) == 'rtmp') {
        return "";
    }
    function getAzureFileFormat(path) {
        var extension = "";
        if (/[(,]format=mpd-/i.test(path)) {
            extension = 'mpd';
        } else if (/[(,]format=m3u8-/i.test(path)) {
            extension = 'm3u8';
        }
        return extension;
    }

    var azuredFormat = getAzureFileFormat(path);
    if (azuredFormat) {
        return azuredFormat;
    }
    path = path.split('?')[0].split('#')[0];
    if (path.lastIndexOf('.') > -1) {
        return path.substr(path.lastIndexOf('.') + 1, path.length).toLowerCase();
    } else {
        return "";
    }
};

/**
 * naturalHms
 *
 * @param      {number | string}  second  The second
 * @return     {string}  formatted String
 */
function naturalHms(second) {
    var secNum = parseInt(second, 10);
    if (!second) {
        return "00:00";
    }
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - hours * 3600) / 60);
    var seconds = secNum - hours * 3600 - minutes * 60;

    //if (hours > 0) {minutes = "0"+minutes;}
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (hours > 0) {
        return hours + ':' + minutes + ':' + seconds;
    } else {
        return minutes + ':' + seconds;
    }
}

function hmsToSecond(str, frameRate) {
    if (!str) {
        return 0;
    }
    if (_underscore2['default'].isNumber(str) && !_underscore2['default'].isNaN(str)) {
        return str;
    }
    str = str.replace(',', '.');
    var arr = str.split(':');
    var arrLength = arr.length;
    var sec = 0;
    if (str.slice(-1) === 's') {
        sec = parseFloat(str);
    } else if (str.slice(-1) === 'm') {
        sec = parseFloat(str) * 60;
    } else if (str.slice(-1) === 'h') {
        sec = parseFloat(str) * 3600;
    } else if (arrLength > 1) {
        var secIndex = arrLength - 1;
        if (arrLength === 4) {
            if (frameRate) {
                sec = parseFloat(arr[secIndex]) / frameRate;
            }
            secIndex -= 1;
        }
        sec += parseFloat(arr[secIndex]);
        sec += parseFloat(arr[secIndex - 1]) * 60;
        if (arrLength >= 3) {
            sec += parseFloat(arr[secIndex - 2]) * 3600;
        }
    } else {
        sec = parseFloat(str);
    }
    if (_underscore2['default'].isNaN(sec)) {
        return 0;
    }
    return sec;
}

/***/ }),

/***/ "./src/js/utils/underscore.js":
/*!************************************!*\
  !*** ./src/js/utils/underscore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function () {
  var n = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self.self === self && self || "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global.global === global && global || this || {},
      r = n._,
      e = Array.prototype,
      o = Object.prototype,
      s = "undefined" != typeof Symbol ? Symbol.prototype : null,
      u = e.push,
      c = e.slice,
      p = o.toString,
      i = o.hasOwnProperty,
      t = Array.isArray,
      a = Object.keys,
      l = Object.create,
      f = function f() {},
      h = function h(n) {
    return n instanceof h ? n : this instanceof h ? void (this._wrapped = n) : new h(n);
  }; false || exports.nodeType ? n._ = h : ( true && !module.nodeType && module.exports && (exports = module.exports = h), exports._ = h), h.VERSION = "1.9.1";var v,
      y = function y(u, i, n) {
    if (void 0 === i) return u;switch (null == n ? 3 : n) {case 1:
        return function (n) {
          return u.call(i, n);
        };case 3:
        return function (n, r, t) {
          return u.call(i, n, r, t);
        };case 4:
        return function (n, r, t, e) {
          return u.call(i, n, r, t, e);
        };}return function () {
      return u.apply(i, arguments);
    };
  },
      d = function d(n, r, t) {
    return h.iteratee !== v ? h.iteratee(n, r) : null == n ? h.identity : h.isFunction(n) ? y(n, r, t) : h.isObject(n) && !h.isArray(n) ? h.matcher(n) : h.property(n);
  };h.iteratee = v = function v(n, r) {
    return d(n, r, 1 / 0);
  };var g = function g(u, i) {
    return i = null == i ? u.length - 1 : +i, function () {
      for (var n = Math.max(arguments.length - i, 0), r = Array(n), t = 0; t < n; t++) {
        r[t] = arguments[t + i];
      }switch (i) {case 0:
          return u.call(this, r);case 1:
          return u.call(this, arguments[0], r);case 2:
          return u.call(this, arguments[0], arguments[1], r);}var e = Array(i + 1);for (t = 0; t < i; t++) {
        e[t] = arguments[t];
      }return e[i] = r, u.apply(this, e);
    };
  },
      m = function m(n) {
    if (!h.isObject(n)) return {};if (l) return l(n);f.prototype = n;var r = new f();return f.prototype = null, r;
  },
      b = function b(r) {
    return function (n) {
      return null == n ? void 0 : n[r];
    };
  },
      j = function j(n, r) {
    return null != n && i.call(n, r);
  },
      x = function x(n, r) {
    for (var t = r.length, e = 0; e < t; e++) {
      if (null == n) return;n = n[r[e]];
    }return t ? n : void 0;
  },
      _ = Math.pow(2, 53) - 1,
      A = b("length"),
      w = function w(n) {
    var r = A(n);return "number" == typeof r && 0 <= r && r <= _;
  };h.each = h.forEach = function (n, r, t) {
    var e, u;if (r = y(r, t), w(n)) for (e = 0, u = n.length; e < u; e++) {
      r(n[e], e, n);
    } else {
      var i = h.keys(n);for (e = 0, u = i.length; e < u; e++) {
        r(n[i[e]], i[e], n);
      }
    }return n;
  }, h.map = h.collect = function (n, r, t) {
    r = d(r, t);for (var e = !w(n) && h.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
      var a = e ? e[o] : o;i[o] = r(n[a], a, n);
    }return i;
  };var O = function O(c) {
    return function (n, r, t, e) {
      var u = 3 <= arguments.length;return function (n, r, t, e) {
        var u = !w(n) && h.keys(n),
            i = (u || n).length,
            o = 0 < c ? 0 : i - 1;for (e || (t = n[u ? u[o] : o], o += c); 0 <= o && o < i; o += c) {
          var a = u ? u[o] : o;t = r(t, n[a], a, n);
        }return t;
      }(n, y(r, e, 4), t, u);
    };
  };h.reduce = h.foldl = h.inject = O(1), h.reduceRight = h.foldr = O(-1), h.find = h.detect = function (n, r, t) {
    var e = (w(n) ? h.findIndex : h.findKey)(n, r, t);if (void 0 !== e && -1 !== e) return n[e];
  }, h.filter = h.select = function (n, e, r) {
    var u = [];return e = d(e, r), h.each(n, function (n, r, t) {
      e(n, r, t) && u.push(n);
    }), u;
  }, h.reject = function (n, r, t) {
    return h.filter(n, h.negate(d(r)), t);
  }, h.every = h.all = function (n, r, t) {
    r = d(r, t);for (var e = !w(n) && h.keys(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;if (!r(n[o], o, n)) return !1;
    }return !0;
  }, h.some = h.any = function (n, r, t) {
    r = d(r, t);for (var e = !w(n) && h.keys(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;if (r(n[o], o, n)) return !0;
    }return !1;
  }, h.contains = h.includes = h.include = function (n, r, t, e) {
    return w(n) || (n = h.values(n)), ("number" != typeof t || e) && (t = 0), 0 <= h.indexOf(n, r, t);
  }, h.invoke = g(function (n, t, e) {
    var u, i;return h.isFunction(t) ? i = t : h.isArray(t) && (u = t.slice(0, -1), t = t[t.length - 1]), h.map(n, function (n) {
      var r = i;if (!r) {
        if (u && u.length && (n = x(n, u)), null == n) return;r = n[t];
      }return null == r ? r : r.apply(n, e);
    });
  }), h.pluck = function (n, r) {
    return h.map(n, h.property(r));
  }, h.where = function (n, r) {
    return h.filter(n, h.matcher(r));
  }, h.findWhere = function (n, r) {
    return h.find(n, h.matcher(r));
  }, h.max = function (n, e, r) {
    var t,
        u,
        i = -1 / 0,
        o = -1 / 0;if (null == e || "number" == typeof e && "object" != _typeof(n[0]) && null != n) for (var a = 0, c = (n = w(n) ? n : h.values(n)).length; a < c; a++) {
      null != (t = n[a]) && i < t && (i = t);
    } else e = d(e, r), h.each(n, function (n, r, t) {
      u = e(n, r, t), (o < u || u === -1 / 0 && i === -1 / 0) && (i = n, o = u);
    });return i;
  }, h.min = function (n, e, r) {
    var t,
        u,
        i = 1 / 0,
        o = 1 / 0;if (null == e || "number" == typeof e && "object" != _typeof(n[0]) && null != n) for (var a = 0, c = (n = w(n) ? n : h.values(n)).length; a < c; a++) {
      null != (t = n[a]) && t < i && (i = t);
    } else e = d(e, r), h.each(n, function (n, r, t) {
      ((u = e(n, r, t)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u);
    });return i;
  }, h.shuffle = function (n) {
    return h.sample(n, 1 / 0);
  }, h.sample = function (n, r, t) {
    if (null == r || t) return w(n) || (n = h.values(n)), n[h.random(n.length - 1)];var e = w(n) ? h.clone(n) : h.values(n),
        u = A(e);r = Math.max(Math.min(r, u), 0);for (var i = u - 1, o = 0; o < r; o++) {
      var a = h.random(o, i),
          c = e[o];e[o] = e[a], e[a] = c;
    }return e.slice(0, r);
  }, h.sortBy = function (n, e, r) {
    var u = 0;return e = d(e, r), h.pluck(h.map(n, function (n, r, t) {
      return { value: n, index: u++, criteria: e(n, r, t) };
    }).sort(function (n, r) {
      var t = n.criteria,
          e = r.criteria;if (t !== e) {
        if (e < t || void 0 === t) return 1;if (t < e || void 0 === e) return -1;
      }return n.index - r.index;
    }), "value");
  };var k = function k(o, r) {
    return function (e, u, n) {
      var i = r ? [[], []] : {};return u = d(u, n), h.each(e, function (n, r) {
        var t = u(n, r, e);o(i, n, t);
      }), i;
    };
  };h.groupBy = k(function (n, r, t) {
    j(n, t) ? n[t].push(r) : n[t] = [r];
  }), h.indexBy = k(function (n, r, t) {
    n[t] = r;
  }), h.countBy = k(function (n, r, t) {
    j(n, t) ? n[t]++ : n[t] = 1;
  });var S = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray = function (n) {
    return n ? h.isArray(n) ? c.call(n) : h.isString(n) ? n.match(S) : w(n) ? h.map(n, h.identity) : h.values(n) : [];
  }, h.size = function (n) {
    return null == n ? 0 : w(n) ? n.length : h.keys(n).length;
  }, h.partition = k(function (n, r, t) {
    n[t ? 0 : 1].push(r);
  }, !0), h.first = h.head = h.take = function (n, r, t) {
    return null == n || n.length < 1 ? null == r ? void 0 : [] : null == r || t ? n[0] : h.initial(n, n.length - r);
  }, h.initial = function (n, r, t) {
    return c.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
  }, h.last = function (n, r, t) {
    return null == n || n.length < 1 ? null == r ? void 0 : [] : null == r || t ? n[n.length - 1] : h.rest(n, Math.max(0, n.length - r));
  }, h.rest = h.tail = h.drop = function (n, r, t) {
    return c.call(n, null == r || t ? 1 : r);
  }, h.compact = function (n) {
    return h.filter(n, Boolean);
  };var M = function M(n, r, t, e) {
    for (var u = (e = e || []).length, i = 0, o = A(n); i < o; i++) {
      var a = n[i];if (w(a) && (h.isArray(a) || h.isArguments(a))) {
        if (r) for (var c = 0, l = a.length; c < l;) {
          e[u++] = a[c++];
        } else M(a, r, t, e), u = e.length;
      } else t || (e[u++] = a);
    }return e;
  };h.flatten = function (n, r) {
    return M(n, r, !1);
  }, h.without = g(function (n, r) {
    return h.difference(n, r);
  }), h.uniq = h.unique = function (n, r, t, e) {
    h.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = d(t, e));for (var u = [], i = [], o = 0, a = A(n); o < a; o++) {
      var c = n[o],
          l = t ? t(c, o, n) : c;r && !t ? (o && i === l || u.push(c), i = l) : t ? h.contains(i, l) || (i.push(l), u.push(c)) : h.contains(u, c) || u.push(c);
    }return u;
  }, h.union = g(function (n) {
    return h.uniq(M(n, !0, !0));
  }), h.intersection = function (n) {
    for (var r = [], t = arguments.length, e = 0, u = A(n); e < u; e++) {
      var i = n[e];if (!h.contains(r, i)) {
        var o;for (o = 1; o < t && h.contains(arguments[o], i); o++) {}o === t && r.push(i);
      }
    }return r;
  }, h.difference = g(function (n, r) {
    return r = M(r, !0, !0), h.filter(n, function (n) {
      return !h.contains(r, n);
    });
  }), h.unzip = function (n) {
    for (var r = n && h.max(n, A).length || 0, t = Array(r), e = 0; e < r; e++) {
      t[e] = h.pluck(n, e);
    }return t;
  }, h.zip = g(h.unzip), h.object = function (n, r) {
    for (var t = {}, e = 0, u = A(n); e < u; e++) {
      r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
    }return t;
  };var F = function F(i) {
    return function (n, r, t) {
      r = d(r, t);for (var e = A(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i) {
        if (r(n[u], u, n)) return u;
      }return -1;
    };
  };h.findIndex = F(1), h.findLastIndex = F(-1), h.sortedIndex = function (n, r, t, e) {
    for (var u = (t = d(t, e, 1))(r), i = 0, o = A(n); i < o;) {
      var a = Math.floor((i + o) / 2);t(n[a]) < u ? i = a + 1 : o = a;
    }return i;
  };var E = function E(i, o, a) {
    return function (n, r, t) {
      var e = 0,
          u = A(n);if ("number" == typeof t) 0 < i ? e = 0 <= t ? t : Math.max(t + u, e) : u = 0 <= t ? Math.min(t + 1, u) : t + u + 1;else if (a && t && u) return n[t = a(n, r)] === r ? t : -1;if (r != r) return 0 <= (t = o(c.call(n, e, u), h.isNaN)) ? t + e : -1;for (t = 0 < i ? e : u - 1; 0 <= t && t < u; t += i) {
        if (n[t] === r) return t;
      }return -1;
    };
  };h.indexOf = E(1, h.findIndex, h.sortedIndex), h.lastIndexOf = E(-1, h.findLastIndex), h.range = function (n, r, t) {
    null == r && (r = n || 0, n = 0), t || (t = r < n ? -1 : 1);for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, n += t) {
      u[i] = n;
    }return u;
  }, h.chunk = function (n, r) {
    if (null == r || r < 1) return [];for (var t = [], e = 0, u = n.length; e < u;) {
      t.push(c.call(n, e, e += r));
    }return t;
  };var N = function N(n, r, t, e, u) {
    if (!(e instanceof r)) return n.apply(t, u);var i = m(n.prototype),
        o = n.apply(i, u);return h.isObject(o) ? o : i;
  };h.bind = g(function (r, t, e) {
    if (!h.isFunction(r)) throw new TypeError("Bind must be called on a function");var u = g(function (n) {
      return N(r, u, t, this, e.concat(n));
    });return u;
  }), h.partial = g(function (u, i) {
    var o = h.partial.placeholder,
        a = function a() {
      for (var n = 0, r = i.length, t = Array(r), e = 0; e < r; e++) {
        t[e] = i[e] === o ? arguments[n++] : i[e];
      }for (; n < arguments.length;) {
        t.push(arguments[n++]);
      }return N(u, a, this, this, t);
    };return a;
  }), (h.partial.placeholder = h).bindAll = g(function (n, r) {
    var t = (r = M(r, !1, !1)).length;if (t < 1) throw new Error("bindAll must be passed function names");for (; t--;) {
      var e = r[t];n[e] = h.bind(n[e], n);
    }
  }), h.memoize = function (e, u) {
    var i = function i(n) {
      var r = i.cache,
          t = "" + (u ? u.apply(this, arguments) : n);return j(r, t) || (r[t] = e.apply(this, arguments)), r[t];
    };return i.cache = {}, i;
  }, h.delay = g(function (n, r, t) {
    return setTimeout(function () {
      return n.apply(null, t);
    }, r);
  }), h.defer = h.partial(h.delay, h, 1), h.throttle = function (t, e, u) {
    var i,
        o,
        a,
        c,
        l = 0;u || (u = {});var f = function f() {
      l = !1 === u.leading ? 0 : h.now(), i = null, c = t.apply(o, a), i || (o = a = null);
    },
        n = function n() {
      var n = h.now();l || !1 !== u.leading || (l = n);var r = e - (n - l);return o = this, a = arguments, r <= 0 || e < r ? (i && (clearTimeout(i), i = null), l = n, c = t.apply(o, a), i || (o = a = null)) : i || !1 === u.trailing || (i = setTimeout(f, r)), c;
    };return n.cancel = function () {
      clearTimeout(i), l = 0, i = o = a = null;
    }, n;
  }, h.debounce = function (t, e, u) {
    var i,
        o,
        a = function a(n, r) {
      i = null, r && (o = t.apply(n, r));
    },
        n = g(function (n) {
      if (i && clearTimeout(i), u) {
        var r = !i;i = setTimeout(a, e), r && (o = t.apply(this, n));
      } else i = h.delay(a, e, this, n);return o;
    });return n.cancel = function () {
      clearTimeout(i), i = null;
    }, n;
  }, h.wrap = function (n, r) {
    return h.partial(r, n);
  }, h.negate = function (n) {
    return function () {
      return !n.apply(this, arguments);
    };
  }, h.compose = function () {
    var t = arguments,
        e = t.length - 1;return function () {
      for (var n = e, r = t[e].apply(this, arguments); n--;) {
        r = t[n].call(this, r);
      }return r;
    };
  }, h.after = function (n, r) {
    return function () {
      if (--n < 1) return r.apply(this, arguments);
    };
  }, h.before = function (n, r) {
    var t;return function () {
      return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
    };
  }, h.once = h.partial(h.before, 2), h.restArguments = g;var I = !{ toString: null }.propertyIsEnumerable("toString"),
      T = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
      B = function B(n, r) {
    var t = T.length,
        e = n.constructor,
        u = h.isFunction(e) && e.prototype || o,
        i = "constructor";for (j(n, i) && !h.contains(r, i) && r.push(i); t--;) {
      (i = T[t]) in n && n[i] !== u[i] && !h.contains(r, i) && r.push(i);
    }
  };h.keys = function (n) {
    if (!h.isObject(n)) return [];if (a) return a(n);var r = [];for (var t in n) {
      j(n, t) && r.push(t);
    }return I && B(n, r), r;
  }, h.allKeys = function (n) {
    if (!h.isObject(n)) return [];var r = [];for (var t in n) {
      r.push(t);
    }return I && B(n, r), r;
  }, h.values = function (n) {
    for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) {
      e[u] = n[r[u]];
    }return e;
  }, h.mapObject = function (n, r, t) {
    r = d(r, t);for (var e = h.keys(n), u = e.length, i = {}, o = 0; o < u; o++) {
      var a = e[o];i[a] = r(n[a], a, n);
    }return i;
  }, h.pairs = function (n) {
    for (var r = h.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) {
      e[u] = [r[u], n[r[u]]];
    }return e;
  }, h.invert = function (n) {
    for (var r = {}, t = h.keys(n), e = 0, u = t.length; e < u; e++) {
      r[n[t[e]]] = t[e];
    }return r;
  }, h.functions = h.methods = function (n) {
    var r = [];for (var t in n) {
      h.isFunction(n[t]) && r.push(t);
    }return r.sort();
  };var R = function R(c, l) {
    return function (n) {
      var r = arguments.length;if (l && (n = Object(n)), r < 2 || null == n) return n;for (var t = 1; t < r; t++) {
        for (var e = arguments[t], u = c(e), i = u.length, o = 0; o < i; o++) {
          var a = u[o];l && void 0 !== n[a] || (n[a] = e[a]);
        }
      }return n;
    };
  };h.extend = R(h.allKeys), h.extendOwn = h.assign = R(h.keys), h.findKey = function (n, r, t) {
    r = d(r, t);for (var e, u = h.keys(n), i = 0, o = u.length; i < o; i++) {
      if (r(n[e = u[i]], e, n)) return e;
    }
  };var q,
      K,
      z = function z(n, r, t) {
    return r in t;
  };h.pick = g(function (n, r) {
    var t = {},
        e = r[0];if (null == n) return t;h.isFunction(e) ? (1 < r.length && (e = y(e, r[1])), r = h.allKeys(n)) : (e = z, r = M(r, !1, !1), n = Object(n));for (var u = 0, i = r.length; u < i; u++) {
      var o = r[u],
          a = n[o];e(a, o, n) && (t[o] = a);
    }return t;
  }), h.omit = g(function (n, t) {
    var r,
        e = t[0];return h.isFunction(e) ? (e = h.negate(e), 1 < t.length && (r = t[1])) : (t = h.map(M(t, !1, !1), String), e = function e(n, r) {
      return !h.contains(t, r);
    }), h.pick(n, e, r);
  }), h.defaults = R(h.allKeys, !0), h.create = function (n, r) {
    var t = m(n);return r && h.extendOwn(t, r), t;
  }, h.clone = function (n) {
    return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n;
  }, h.tap = function (n, r) {
    return r(n), n;
  }, h.isMatch = function (n, r) {
    var t = h.keys(r),
        e = t.length;if (null == n) return !e;for (var u = Object(n), i = 0; i < e; i++) {
      var o = t[i];if (r[o] !== u[o] || !(o in u)) return !1;
    }return !0;
  }, q = function q(n, r, t, e) {
    if (n === r) return 0 !== n || 1 / n == 1 / r;if (null == n || null == r) return !1;if (n != n) return r != r;var u = typeof n === "undefined" ? "undefined" : _typeof(n);return ("function" === u || "object" === u || "object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) && K(n, r, t, e);
  }, K = function K(n, r, t, e) {
    n instanceof h && (n = n._wrapped), r instanceof h && (r = r._wrapped);var u = p.call(n);if (u !== p.call(r)) return !1;switch (u) {case "[object RegExp]":case "[object String]":
        return "" + n == "" + r;case "[object Number]":
        return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;case "[object Date]":case "[object Boolean]":
        return +n == +r;case "[object Symbol]":
        return s.valueOf.call(n) === s.valueOf.call(r);}var i = "[object Array]" === u;if (!i) {
      if ("object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r))) return !1;var o = n.constructor,
          a = r.constructor;if (o !== a && !(h.isFunction(o) && o instanceof o && h.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in r) return !1;
    }e = e || [];for (var c = (t = t || []).length; c--;) {
      if (t[c] === n) return e[c] === r;
    }if (t.push(n), e.push(r), i) {
      if ((c = n.length) !== r.length) return !1;for (; c--;) {
        if (!q(n[c], r[c], t, e)) return !1;
      }
    } else {
      var l,
          f = h.keys(n);if (c = f.length, h.keys(r).length !== c) return !1;for (; c--;) {
        if (l = f[c], !j(r, l) || !q(n[l], r[l], t, e)) return !1;
      }
    }return t.pop(), e.pop(), !0;
  }, h.isEqual = function (n, r) {
    return q(n, r);
  }, h.isEmpty = function (n) {
    return null == n || (w(n) && (h.isArray(n) || h.isString(n) || h.isArguments(n)) ? 0 === n.length : 0 === h.keys(n).length);
  }, h.isElement = function (n) {
    return !(!n || 1 !== n.nodeType);
  }, h.isArray = t || function (n) {
    return "[object Array]" === p.call(n);
  }, h.isObject = function (n) {
    var r = typeof n === "undefined" ? "undefined" : _typeof(n);return "function" === r || "object" === r && !!n;
  }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (r) {
    h["is" + r] = function (n) {
      return p.call(n) === "[object " + r + "]";
    };
  }), h.isArguments(arguments) || (h.isArguments = function (n) {
    return j(n, "callee");
  });var D = n.document && n.document.childNodes; true && "object" != (typeof Int8Array === "undefined" ? "undefined" : _typeof(Int8Array)) && "function" != typeof D && (h.isFunction = function (n) {
    return "function" == typeof n || !1;
  }), h.isFinite = function (n) {
    return !h.isSymbol(n) && isFinite(n) && !isNaN(parseFloat(n));
  }, h.isNaN = function (n) {
    return h.isNumber(n) && isNaN(n);
  }, h.isBoolean = function (n) {
    return !0 === n || !1 === n || "[object Boolean]" === p.call(n);
  }, h.isNull = function (n) {
    return null === n;
  }, h.isUndefined = function (n) {
    return void 0 === n;
  }, h.has = function (n, r) {
    if (!h.isArray(r)) return j(n, r);for (var t = r.length, e = 0; e < t; e++) {
      var u = r[e];if (null == n || !i.call(n, u)) return !1;n = n[u];
    }return !!t;
  }, h.noConflict = function () {
    return n._ = r, this;
  }, h.identity = function (n) {
    return n;
  }, h.constant = function (n) {
    return function () {
      return n;
    };
  }, h.noop = function () {}, h.property = function (r) {
    return h.isArray(r) ? function (n) {
      return x(n, r);
    } : b(r);
  }, h.propertyOf = function (r) {
    return null == r ? function () {} : function (n) {
      return h.isArray(n) ? x(r, n) : r[n];
    };
  }, h.matcher = h.matches = function (r) {
    return r = h.extendOwn({}, r), function (n) {
      return h.isMatch(n, r);
    };
  }, h.times = function (n, r, t) {
    var e = Array(Math.max(0, n));r = y(r, t, 1);for (var u = 0; u < n; u++) {
      e[u] = r(u);
    }return e;
  }, h.random = function (n, r) {
    return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1));
  }, h.now = Date.now || function () {
    return new Date().getTime();
  };var L = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
      P = h.invert(L),
      W = function W(r) {
    var t = function t(n) {
      return r[n];
    },
        n = "(?:" + h.keys(r).join("|") + ")",
        e = RegExp(n),
        u = RegExp(n, "g");return function (n) {
      return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n;
    };
  };h.escape = W(L), h.unescape = W(P), h.result = function (n, r, t) {
    h.isArray(r) || (r = [r]);var e = r.length;if (!e) return h.isFunction(t) ? t.call(n) : t;for (var u = 0; u < e; u++) {
      var i = null == n ? void 0 : n[r[u]];void 0 === i && (i = t, u = e), n = h.isFunction(i) ? i.call(n) : i;
    }return n;
  };var C = 0;h.uniqueId = function (n) {
    var r = ++C + "";return n ? n + r : r;
  }, h.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };var J = /(.)^/,
      U = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
      V = /\\|'|\r|\n|\u2028|\u2029/g,
      $ = function $(n) {
    return "\\" + U[n];
  };h.template = function (i, n, r) {
    !n && r && (n = r), n = h.defaults({}, n, h.templateSettings);var t,
        e = RegExp([(n.escape || J).source, (n.interpolate || J).source, (n.evaluate || J).source].join("|") + "|$", "g"),
        o = 0,
        a = "__p+='";i.replace(e, function (n, r, t, e, u) {
      return a += i.slice(o, u).replace(V, $), o = u + n.length, r ? a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : t ? a += "'+\n((__t=(" + t + "))==null?'':__t)+\n'" : e && (a += "';\n" + e + "\n__p+='"), n;
    }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";try {
      t = new Function(n.variable || "obj", "_", a);
    } catch (n) {
      throw n.source = a, n;
    }var u = function u(n) {
      return t.call(this, n, h);
    },
        c = n.variable || "obj";return u.source = "function(" + c + "){\n" + a + "}", u;
  }, h.chain = function (n) {
    var r = h(n);return r._chain = !0, r;
  };var G = function G(n, r) {
    return n._chain ? h(r).chain() : r;
  };h.mixin = function (t) {
    return h.each(h.functions(t), function (n) {
      var r = h[n] = t[n];h.prototype[n] = function () {
        var n = [this._wrapped];return u.apply(n, arguments), G(this, r.apply(h, n));
      };
    }), h;
  }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (r) {
    var t = e[r];h.prototype[r] = function () {
      var n = this._wrapped;return t.apply(n, arguments), "shift" !== r && "splice" !== r || 0 !== n.length || delete n[0], G(this, n);
    };
  }), h.each(["concat", "join", "slice"], function (n) {
    var r = e[n];h.prototype[n] = function () {
      return G(this, r.apply(this._wrapped, arguments));
    };
  }), h.prototype.value = function () {
    return this._wrapped;
  }, h.prototype.valueOf = h.prototype.toJSON = h.prototype.value, h.prototype.toString = function () {
    return String(this._wrapped);
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return h;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/js/utils/validator.js":
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDash = exports.isHls = exports.isWebRTC = exports.isRtmp = undefined;

var _strings = __webpack_require__(/*! utils/strings */ "./src/js/utils/strings.js");

var isRtmp = exports.isRtmp = function isRtmp(file, type) {
    if (file) {
        return file.indexOf('rtmp:') == 0 || type == 'rtmp';
    }
};
var isWebRTC = exports.isWebRTC = function isWebRTC(file, type) {
    if (file) {
        return file.indexOf('ws:') === 0 || file.indexOf('wss:') === 0 || type === 'webrtc';
    }
    return false;
};
var isHls = exports.isHls = function isHls(file, type) {
    if (file) {
        return type === 'hls' || type === 'm3u8' || type === 'application/vnd.apple.mpegurl' || (0, _strings.extractExtension)(file) == 'm3u8';
    }
};
var isDash = exports.isDash = function isDash(file, type) {
    if (file) {
        return type === 'mpd' || type === 'dash' || type === 'application/dash+xml' || (0, _strings.extractExtension)(file) == 'mpd';
    }
};

/***/ }),

/***/ "./src/js/utils/webpack.js":
/*!*********************************!*\
  !*** ./src/js/utils/webpack.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * utils for webpack
 */

var getScriptPath = exports.getScriptPath = function getScriptPath(scriptName) {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].src;
        if (src) {
            var index = src.lastIndexOf('/' + scriptName);
            if (index >= 0) {
                return src.substr(0, index + 1);
            }
        }
    }
    return '';
};

/***/ }),

/***/ "./src/js/version.js":
/*!***************************!*\
  !*** ./src/js/version.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hoho on 2018. 6. 29..
 */
var version = exports.version = '0.9.750-2019102211-localbuild';

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvQXBpRXhwYW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL0NvbmZpZ3VyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL0xhenlDb21tYW5kRXhlY3V0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9TdXBwb3J0Q2hlY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL2NhcHRpb24vTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvY2FwdGlvbi9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvY2FwdGlvbi9wYXJzZXIvU3J0UGFyc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcGkvbWVkaWEvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBpL3BsYXlsaXN0L01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9wcm92aWRlci9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9vdmVucGxheWVyLnNkay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY2FwdGlvbnMvdnR0Q3VlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9saWtlQSQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3N0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3VuZGVyc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvd2VicGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmVyc2lvbi5qcyJdLCJuYW1lcyI6WyJBcGkiLCJjb250YWluZXIiLCJ0aGF0IiwiY29uc29sZSIsImxvZyIsInZlcnNpb24iLCJPdmVuUGxheWVyQ29uc29sZSIsInBsYXlsaXN0TWFuYWdlciIsInByb3ZpZGVyQ29udHJvbGxlciIsInVzZXJBZ2VudE9iamVjdCIsIm1lZGlhTWFuYWdlciIsImN1cnJlbnRQcm92aWRlciIsInBsYXllckNvbmZpZyIsImxhenlRdWV1ZSIsImNhcHRpb25NYW5hZ2VyIiwid2VicnRjUmV0cnkiLCJXRUJSVENfUkVUUllfQ09VTlQiLCJ3ZWJydGNSZXRyeUNvdW50Iiwid2VicnRjUmV0cnlJbnRlcnZhbCIsIndlYnJ0Y1JldHJ5VGltZXIiLCJydW5OZXh0UGxheWxpc3QiLCJpbmRleCIsIm5leHRQbGF5bGlzdEluZGV4IiwicGxheWxpc3QiLCJnZXRQbGF5bGlzdCIsImhhc05leHRQbGF5bGlzdCIsInNldFNvdXJjZUluZGV4Iiwic2V0Vm9sdW1lIiwiZ2V0Vm9sdW1lIiwic2V0Q3VycmVudFBsYXlsaXN0IiwiaW5pdFByb3ZpZGVyIiwiaXNBdXRvU3RhcnQiLCJwbGF5IiwidHJpZ2dlciIsIkFMTF9QTEFZTElTVF9FTkRFRCIsImxhc3RQbGF5UG9zaXRpb24iLCJwaWNrUXVhbGl0eUZyb21Tb3VyY2UiLCJzb3VyY2VzIiwicXVhbGl0eSIsImkiLCJsZW5ndGgiLCJnZXRTb3VyY2VJbmRleCIsImxvYWRQcm92aWRlcnMiLCJnZXRDdXJyZW50UGxheUxpc3QiLCJ0aGVuIiwiUHJvdmlkZXJzIiwiRVJST1JTIiwiY29kZXMiLCJJTklUX1VOU1VQUE9SVF9FUlJPUiIsImRlc3Ryb3kiLCJnZXRDdXJyZW50UGxheWxpc3RJbmRleCIsImN1cnJlbnRTb3VyY2VJbmRleCIsImdldEN1cnJlbnRTb3VyY2VzIiwicHJvdmlkZXJOYW1lIiwicHJvdmlkZXIiLCJjcmVhdGVNZWRpYSIsImdldEN1cnJlbnRBZFRhZyIsIlBST1ZJREVSX1JUTVAiLCJvbiIsIm5hbWUiLCJkYXRhIiwiUExBWUVSX1BMQVkiLCJjbGVhckludGVydmFsIiwiRVJST1IiLCJORVRXT1JLX1VOU1RBQkxFRCIsImNvZGUiLCJnZXRDb25maWciLCJhdXRvRmFsbGJhY2siLCJQTEFZRVJfV0VCUlRDX1VORVhQRUNURURfRElTQ09OTkVDVCIsIlBMQVlFUl9XRUJSVENfTkVUV09SS19TTE9XIiwic2V0VGltZW91dCIsInNldEN1cnJlbnRTb3VyY2UiLCJnZXRTb3VyY2VzIiwicGF1c2UiLCJwcmVsb2FkIiwiUkVBRFkiLCJmbHVzaCIsImVycm9yIiwib2ZmIiwidGVtcEVycm9yIiwiSU5JVF9VTktOV09OX0VSUk9SIiwiaW5pdCIsIm9wdGlvbnMiLCJtZWRpYUNvbnRhaW5lciIsImJyb3dzZXIiLCJnZXRTeXN0ZW1UZXh0IiwiYXBpIiwiaW5pdFBsYXlsaXN0IiwiZ2V0UHJvdmlkZXJOYW1lIiwiZ2V0TmFtZSIsImdldEJyb3dzZXIiLCJzZXRUaW1lY29kZU1vZGUiLCJpc1Nob3ciLCJpc1RpbWVjb2RlTW9kZSIsImdldEZyYW1lcmF0ZSIsInNlZWtGcmFtZSIsImZyYW1lQ291bnQiLCJnZXREdXJhdGlvbiIsImdldFBvc2l0aW9uIiwidm9sdW1lIiwic2V0TXV0ZSIsInN0YXRlIiwiZ2V0TXV0ZSIsImxvYWQiLCJzZXRDdXJyZW50UXVhbGl0eSIsInNlZWsiLCJwb3NpdGlvbiIsInNldFBsYXliYWNrUmF0ZSIsInBsYXliYWNrUmF0ZSIsImdldFBsYXliYWNrUmF0ZSIsImdldEN1cnJlbnRQbGF5bGlzdCIsImdldEN1cnJlbnRTb3VyY2UiLCJjdXJyZW50U291cmNlIiwibmV3U291cmNlIiwiaXNTYW1lUHJvdmlkZXIiLCJyZXN1bHRTb3VyY2VJbmRleCIsIlBST1ZJREVSX0hMUyIsImdldFF1YWxpdHlMZXZlbHMiLCJnZXRDdXJyZW50UXVhbGl0eSIsInF1YWxpdHlJbmRleCIsImlzQXV0b1F1YWxpdHkiLCJzZXRBdXRvUXVhbGl0eSIsImlzQXV0byIsImdldENhcHRpb25MaXN0IiwiZ2V0Q3VycmVudENhcHRpb24iLCJzZXRDdXJyZW50Q2FwdGlvbiIsImFkZENhcHRpb24iLCJ0cmFjayIsInJlbW92ZUNhcHRpb24iLCJnZXRCdWZmZXIiLCJnZXRTdGF0ZSIsInN0b3AiLCJyZW1vdmUiLCJERVNUUk9ZIiwiT3ZlblBsYXllclNESyIsInJlbW92ZVBsYXllciIsImdldENvbnRhaW5lcklkIiwiZ2V0UGxheWVyTGlzdCIsImdldFZlcnNpb24iLCJBcGlSdG1wRXhwYW5zaW9uIiwiZXh0ZXJuYWxDYWxsYmFja0NyZWVwIiwicmVzdWx0IiwidHJpZ2dlckV2ZW50RnJvbUV4dGVybmFsIiwiQ29uZmlndXJhdG9yIiwiY29tcG9zZVNvdXJjZU9wdGlvbnMiLCJEZWZhdWx0cyIsInBsYXliYWNrUmF0ZXMiLCJtdXRlIiwibG9vcCIsImNvbnRyb2xzIiwiYXV0b1N0YXJ0IiwidGltZWNvZGUiLCJzb3VyY2VJbmRleCIsImhpZGVQbGF5bGlzdEljb24iLCJydG1wQnVmZmVyVGltZSIsInJ0bXBCdWZmZXJUaW1lTWF4IiwiYWRDbGllbnQiLCJjdXJyZW50UHJvdG9jb2xPbmx5Iiwic3lzdGVtVGV4dCIsImxhbmciLCJzZXJpYWxpemUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJsb3dlcmNhc2VWYWwiLCJ0b0xvd2VyQ2FzZSIsImlzTmFOIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsImRlc2VyaWFsaXplIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJjb25maWciLCJ1c2VyQ3VzdHVtU3lzdGVtVGV4dCIsIl8iLCJpc0FycmF5IiwiY3VycmVudFN5c3RlbVRleHQiLCJmaW5kV2hlcmUiLCJTWVNURU1fVEVYVCIsInB1c2giLCJmaWx0ZXIiLCJpc051bWJlciIsInJhdGUiLCJtYXAiLCJNYXRoIiwicm91bmQiLCJpbmRleE9mIiwic29ydCIsImNvbmZpZ1BsYXlsaXN0Iiwib2JqIiwicGljayIsImZlZWREYXRhIiwiZHVyYXRpb24iLCJzcGVjIiwiZ2V0QWRDbGllbnQiLCJzZXRDb25maWciLCJ2YWx1ZSIsImdldENvbnRhaW5lciIsImdldFF1YWxpdHlMYWJlbCIsInF1YWxpdHlMYWJlbCIsInNldFF1YWxpdHlMYWJlbCIsIm5ld0xhYmVsIiwiaXNDdXJyZW50UHJvdG9jb2xPbmx5IiwiQ09OVEVOVF9USU1FX01PREVfQ0hBTkdFRCIsImdldFJ0bXBCdWZmZXJUaW1lIiwiZ2V0UnRtcEJ1ZmZlclRpbWVNYXgiLCJpc011dGUiLCJpc0xvb3AiLCJpc0NvbnRyb2xzIiwiZ2V0UGxheWJhY2tSYXRlcyIsImdldExhbmd1YWdlIiwic2V0UGxheWxpc3QiLCJFdmVudEVtaXR0ZXIiLCJvYmplY3QiLCJfZXZlbnRzIiwidHJpZ2dlckV2ZW50cyIsImV2ZW50cyIsImFyZ3MiLCJjb250ZXh0IiwiZXZlbnQiLCJsaXN0ZW5lciIsImFwcGx5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiYWxsRXZlbnRzIiwiYWxsIiwibmFtZXMiLCJsIiwicmV0YWluIiwiaiIsImsiLCJfbGlzdGVuZXIiLCJvbmNlIiwiY291bnQiLCJvbmNlQ2FsbGJhY2siLCJMYXp5Q29tbWFuZEV4ZWN1dG9yIiwiaW5zdGFuY2UiLCJxdWV1ZWRDb21tYW5kcyIsImNvbW1hbmRRdWV1ZSIsInVuZGVjb3JhdGVkTWV0aG9kcyIsImV4ZWN1dGVNb2RlIiwiY29tbWFuZCIsIm1ldGhvZCIsIkFycmF5IiwicHJvdG90eXBlIiwiYWRkUXVldWUiLCJleGVjdXRlUXVldWVkQ29tbWFuZHMiLCJzaGlmdCIsInNldEV4ZWN1dGVNb2RlIiwibW9kZSIsImdldFVuZGVjb3JhdGVkTWV0aG9kcyIsImdldFF1ZXVlIiwiZW1wdHkiLCJyZW1vdmVBbmRFeGN1dGVPbmNlIiwiY29tbWFuZF8iLCJjb21tYW5kUXVldWVJdGVtIiwic3BsaWNlIiwiZmluZEluZGV4IiwiU3VwcG9ydENoZWNrZXIiLCJzdXBwb3J0TGlzdCIsImNoZWNrU3VwcG9ydCIsInNvdXJjZSIsIk1pbWVUeXBlcyIsImFhYyIsIm1wNCIsImY0diIsIm00diIsIm1vdiIsIm1wMyIsIm1wZWciLCJvZ3YiLCJvZ2ciLCJvZ2EiLCJ2b3JiaXMiLCJ3ZWJtIiwiZjRhIiwibTN1OCIsIm0zdSIsImhscyIsInZpZGVvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2FuUGxheVR5cGUiLCJmaWxlIiwidHlwZSIsIm1pbWVUeXBlIiwid2luZG93IiwiTWVkaWFTb3VyY2UiLCJXZWJLaXRNZWRpYVNvdXJjZSIsImlzSGxzU3VwcG9ydCIsImdldE1lZGlhU291cmNlIiwibWVkaWFTb3VyY2UiLCJzb3VyY2VCdWZmZXIiLCJTb3VyY2VCdWZmZXIiLCJXZWJLaXRTb3VyY2VCdWZmZXIiLCJpc1R5cGVTdXBwb3J0ZWQiLCJzb3VyY2VCdWZmZXJWYWxpZEFQSSIsImFwcGVuZEJ1ZmZlciIsInRlc3RGbGFzaCIsInN1cHBvcnQiLCJBY3RpdmVYT2JqZWN0IiwiZSIsIm5hdmlnYXRvciIsIm1pbWVUeXBlcyIsIm9zIiwiZmluZFByb3ZpZGVyTmFtZUJ5U291cmNlIiwic29ydWNlXyIsImZpbmRQcm92aWRlck5hbWVzQnlQbGF5bGlzdCIsInBsYXlsaXN0SXRlbSIsInN1cHBvcnROYW1lcyIsIml0ZW0iLCJzdXBwb3J0ZWQiLCJMb2FkZXIiLCJjb252ZXJ0VG9WVFRDdWVzIiwiY3VlcyIsIlZUVEN1ZSIsImN1ZSIsInN0YXJ0IiwiZW5kIiwidGV4dCIsImxhbmd1YWdlIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsInJlcXVlc3RPcHRpb25zIiwidXJsIiwiZW5jb2RpbmciLCJsb2FkUmVxdWVzdERvd25sb2RlciIsIlJlcXVlc3QiLCJyZXNwb25zZSIsImJvZHkiLCJ2dHRDdWVzIiwibG9hZFZ0dFBhcnNlciIsInBhcnNlciIsIldlYlZUVCIsIlBhcnNlciIsIlN0cmluZ0RlY29kZXIiLCJvbmN1ZSIsIm9uZmx1c2giLCJwYXJzZSIsImxvYWRTbWlQYXJzZXIiLCJwYXJzZWREYXRhIiwiU21pUGFyc2VyIiwiZml4ZWRMYW5nIiwicmVxdWlyZSIsImVyciIsImlzU3VwcG9ydCIsImtpbmQiLCJNYW5hZ2VyIiwicGxheWxpc3RJbmRleCIsImNhcHRpb25MaXN0IiwiY3VycmVudENhcHRpb25JbmRleCIsImNhcHRpb25Mb2FkZXIiLCJpc0Zpc3J0TG9hZCIsImlzU2hvd2luZyIsImJpbmRUcmFjayIsImxhYmVsIiwiaWQiLCJ0cmFja3NDb3VudCIsInRyYWNrSWQiLCJwcmVmaXgiLCJkZWZhdWx0dHJhY2siLCJjaGFuZ2VDdXJyZW50Q2FwdGlvbiIsIkNPTlRFTlRfQ0FQVElPTl9DSEFOR0VEIiwidHJhY2tzIiwiY2FwdGlvbklkIiwiUExBWUVSX0NBUFRJT05fRVJST1IiLCJDT05URU5UX1RJTUUiLCJtZXRhIiwiY3VycmVudEN1ZXMiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwiQ09OVEVOVF9DQVBUSU9OX0NVRV9DSEFOR0VEIiwiZmx1c2hDYXB0aW9uTGlzdCIsImxhc3RDYXB0aW9uSW5kZXgiLCJfaW5kZXgiLCJlcnJvcnMiLCJfZW50cnkiLCJlbnRyeSIsImFycmF5Iiwic3BsaXQiLCJpZHgiLCJsaW5lIiwic3Vic3RyIiwiam9pbiIsIlNydFBhcnNlciIsImNhcHRpb25zIiwibGlzdCIsIlNUQVRFX0JVRkZFUklORyIsIlNUQVRFX0lETEUiLCJTVEFURV9DT01QTEVURSIsIlNUQVRFX1BBVVNFRCIsIlNUQVRFX1BMQVlJTkciLCJTVEFURV9FUlJPUiIsIlNUQVRFX0xPQURJTkciLCJTVEFURV9TVEFMTEVEIiwiU1RBVEVfQURfTE9BRElORyIsIlNUQVRFX0FEX0xPQURFRCIsIlNUQVRFX0FEX1BMQVlJTkciLCJTVEFURV9BRF9QQVVTRUQiLCJTVEFURV9BRF9DT01QTEVURSIsIlNUQVRFX0FEX0VSUk9SIiwiUExBWUVSX0FEX0NMSUNLIiwiUFJPVklERVJfSFRNTDUiLCJQUk9WSURFUl9XRUJSVEMiLCJQUk9WSURFUl9EQVNIIiwiQ09OVEVOVF9DT01QTEVURSIsIkNPTlRFTlRfU0VFSyIsIkNPTlRFTlRfQlVGRkVSX0ZVTEwiLCJESVNQTEFZX0NMSUNLIiwiQ09OVEVOVF9MT0FERUQiLCJQTEFZTElTVF9DSEFOR0VEIiwiQ09OVEVOVF9TRUVLRUQiLCJQTEFZRVJfU1RBVEUiLCJQTEFZRVJfQ09NUExFVEUiLCJQTEFZRVJfUEFVU0UiLCJQTEFZRVJfQ0xJQ0tFRCIsIlBMQVlFUl9SRVNJWkVEIiwiUExBWUVSX0xPQURJTkciLCJQTEFZRVJfRlVMTFNDUkVFTl9SRVFVRVNUIiwiUExBWUVSX0ZVTExTQ1JFRU5fQ0hBTkdFRCIsIlBMQVlFUl9XQVJOSU5HIiwiQURfQ0hBTkdFRCIsIkFEX1RJTUUiLCJDT05URU5UX0JVRkZFUiIsIkNPTlRFTlRfUkFURV9DSEFOR0UiLCJDT05URU5UX1ZPTFVNRSIsIkNPTlRFTlRfTVVURSIsIkNPTlRFTlRfTUVUQSIsIkNPTlRFTlRfU09VUkNFX0NIQU5HRUQiLCJDT05URU5UX0xFVkVMX0NIQU5HRUQiLCJQTEFZQkFDS19SQVRFX0NIQU5HRUQiLCJPTUVfUDJQX01PREUiLCJBRF9DTElFTlRfR09PR0xFSU1BIiwiQURfQ0xJRU5UX1ZBU1QiLCJJTklUX1JUTVBfU0VUVVBfRVJST1IiLCJJTklUX0RBU0hfVU5TVVBQT1JUIiwiSU5JVF9BRFNfRVJST1IiLCJJTklUX0RBU0hfTk9URk9VTkQiLCJJTklUX0hMU0pTX05PVEZPVU5EIiwiUExBWUVSX1VOS05XT05fRVJST1IiLCJQTEFZRVJfVU5LTldPTl9PUEVSQVRJT05fRVJST1IiLCJQTEFZRVJfVU5LTldPTl9ORVdXT1JLX0VSUk9SIiwiUExBWUVSX1VOS05XT05fREVDT0RFX0VSUk9SIiwiUExBWUVSX0ZJTEVfRVJST1IiLCJQTEFZRVJfV0VCUlRDX1dTX0VSUk9SIiwiUExBWUVSX1dFQlJUQ19BRERfSUNFQ0FORElEQVRFX0VSUk9SIiwiUExBWUVSX1dFQlJUQ19TRVRfUkVNT1RFX0RFU0NfRVJST1IiLCJQTEFZRVJfV0VCUlRDX0NSRUFURV9BTlNXRVJfRVJST1IiLCJQTEFZRVJfV0VCUlRDX1NFVF9MT0NBTF9ERVNDX0VSUk9SIiwiV0FSTl9NU0dfTVVURURQTEFZIiwiVUlfSUNPTlMiLCJ2b2x1bWVfbXV0ZSIsIm9wX3dhcm5pbmciLCJicm93c2VySW5mbyIsIlNXRlBhdGgiLCJyb290SWQiLCJnZXRBdHRyaWJ1dGUiLCIkY29udGFpbmVyIiwidmlkZW9FbGVtZW50IiwiY3JlYXRlSHRtbFZpZGVvIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiY3JlYXRlRmxhc2hWaWRlbyIsImJ1ZmZlclRpbWUiLCJidWZmZXJUaW1lTWF4IiwibW92aWUiLCJmbGFzaHZhcnMiLCJhbGxvd3NjcmlwdGFjY2VzcyIsImFsbG93ZnVsbHNjcmVlbiIsIm1lbnUiLCJxdWFsIiwiYmdjb2xvciIsIndtb2RlIiwiYnJvd3Nlck1ham9yVmVyc2lvbiIsImFwcGVuZENoaWxkIiwiY3JlYXRlQWRDb250YWluZXIiLCJhZENvbnRhaW5lciIsInJlbW92ZUNoaWxkIiwiY3VycmVudFBsYXlsaXN0SXRlbSIsImN1cnJlbnRJbmRleCIsInN1cHBvcnRDaGVja2VyIiwibWFrZVByZXR0eVNvdXJjZSIsInNvdXJjZV8iLCJob3N0IiwiYXBwbGljYXRpb24iLCJzdHJlYW0iLCJtaW1ldHlwZVJlZ0V4IiwidGVzdCIsInJlcGxhY2UiLCJsb3dMYXRlbmN5IiwicHJldHRpZWRQbGF5bGlzdCIsInRpdGxlIiwibGV2ZWxzIiwicHJldHR5U291cmNlIiwiZGVmYXVsdFNvdXJjZSIsInRvU3RyaW5nIiwiZXh0cmFjdE9ubHlPbmVQcm90b2NvbCIsImhpZ2hQcmlvcml0eVR5cGUiLCJjb25jYXQiLCJhZFRhZ1VybCIsIkNvbnRyb2xsZXIiLCJzdXBwb3J0Q2hhY2tlciIsInJlZ2lzdGVQcm92aWRlciIsIlByb3ZpZGVyTG9hZGVyIiwiaHRtbDUiLCJFcnJvciIsIndlYnJ0YyIsImRhc2giLCJydG1wIiwic3VwcG9ydGVkUHJvdmlkZXJOYW1lcyIsIlByb21pc2UiLCJyZWplY3QiLCJmaW5kQnlOYW1lIiwiZ2V0UHJvdmlkZXJCeVNvdXJjZSIsInN1cHBvcnRlZFByb3ZpZGVyTmFtZSIsIl9fd2VicGFja19wdWJsaWNfcGF0aF9fIiwicGxheWVyTGlzdCIsImNoZWNrQW5kR2V0Q29udGFpbmVyRWxlbWVudCIsImNvbnRhaW5lckVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5vZGVUeXBlIiwiY3JlYXRlIiwicGxheWVySW5zdGFuY2UiLCJnZXRQbGF5ZXJCeUNvbnRhaW5lcklkIiwiY29udGFpbmVySWQiLCJnZXRQbGF5ZXJCeUluZGV4IiwicGxheWVySWQiLCJnZW5lcmF0ZVdlYnJ0Y1VybHMiLCJkZWJ1ZyIsImlzRGVidWdNb2RlIiwiZ2V0QnJvd3Nlckxhbmd1YWdlIiwibmF2IiwiYnJvd3Nlckxhbmd1YWdlUHJvcGVydHlLZXlzIiwibGFuZ3VhZ2VzIiwiYW5hbFVzZXJBZ2VudCIsInVua25vd24iLCJzY3JlZW5TaXplIiwic2NyZWVuIiwid2lkdGgiLCJoZWlnaHQiLCJuVmVyIiwiYXBwVmVyc2lvbiIsIm5BZ3QiLCJ1c2VyQWdlbnQiLCJhcHBOYW1lIiwibWFqb3JWZXJzaW9uIiwicGFyc2VJbnQiLCJpc1dlYnZpZXciLCJuYW1lT2Zmc2V0IiwidmVyT2Zmc2V0IiwiaXgiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRvVXBwZXJDYXNlIiwibW9iaWxlIiwiY29va2llRW5hYmxlZCIsImNvb2tpZSIsImNsaWVudFN0cmluZ3MiLCJzIiwiciIsImNzIiwib3NWZXJzaW9uIiwiZXhlYyIsImJyb3dzZXJWZXJzaW9uIiwidWEiLCJjb29raWVzIiwiYXV0b0tleXdvcmQiLCJkaXJlY3Rpb25TZXR0aW5nIiwiYWxpZ25TZXR0aW5nIiwiZmluZERpcmVjdGlvblNldHRpbmciLCJkaXIiLCJmaW5kQWxpZ25TZXR0aW5nIiwiYWxpZ24iLCJleHRlbmQiLCJjb2JqIiwicCIsImlzSUU4IiwiYmFzZU9iaiIsImVudW1lcmFibGUiLCJoYXNCZWVuUmVzZXQiLCJfaWQiLCJfcGF1c2VPbkV4aXQiLCJfc3RhcnRUaW1lIiwiX2VuZFRpbWUiLCJfdGV4dCIsIl9yZWdpb24iLCJfdmVydGljYWwiLCJfc25hcFRvTGluZXMiLCJfbGluZSIsIl9saW5lQWxpZ24iLCJfcG9zaXRpb24iLCJfcG9zaXRpb25BbGlnbiIsIl9zaXplIiwiX2FsaWduIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJUeXBlRXJyb3IiLCJzZXR0aW5nIiwiU3ludGF4RXJyb3IiLCJkaXNwbGF5U3RhdGUiLCJnZXRDdWVBc0hUTUwiLCJjb252ZXJ0Q3VlVG9ET01UcmVlIiwiTGEkIiwic2VsZWN0b3JPckVsZW1lbnQiLCJyZXR1cm5Ob2RlIiwiJGVsZW1lbnQiLCJzZWxlY3RvciIsIm5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImlzRWxlbWVudCIsImV2ZXJ5Iiwic2hvdyIsInN0eWxlIiwiZGlzcGxheSIsImhpZGUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZXMiLCJjbGFzc05hbWUiLCJhZnRlciIsImh0bWxTdHJpbmciLCJpbnNlcnRBZGphY2VudEhUTUwiLCJiZWZvcmUiLCJjaGlsZHJlbiIsImNvbnRhaW5zIiwiZWxDaGlsZCIsImlubmVySFRNTCIsImZpbmQiLCJjc3MiLCJlbGVtZW50IiwicmVtb3ZlQ2xhc3MiLCJSZWdFeHAiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhdHRyTmFtZSIsInRleHRDb250ZW50IiwiaHRtbCIsImhhc0NsYXNzIiwiaXMiLCIkdGFyZ2V0RWxlbWVudCIsIm9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxUb3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiYXR0ciIsInJlcGxhY2VXaXRoIiwicGFyZW50RWxlbWVudCIsImhhc0NoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwiY2xvc2VzdCIsInNlbGVjdG9yU3RyaW5nIiwiY2xvc2VzdEVsZW1lbnQiLCJ0cmltIiwibmF0dXJhbEhtcyIsImhtc1RvU2Vjb25kIiwic3RyaW5nIiwiZXh0cmFjdEV4dGVuc2lvbiIsInBhdGgiLCJnZXRBenVyZUZpbGVGb3JtYXQiLCJleHRlbnNpb24iLCJhenVyZWRGb3JtYXQiLCJzZWNvbmQiLCJzZWNOdW0iLCJob3VycyIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJzdHIiLCJmcmFtZVJhdGUiLCJhcnIiLCJhcnJMZW5ndGgiLCJzZWMiLCJzZWNJbmRleCIsIm4iLCJzZWxmIiwiZ2xvYmFsIiwibyIsIlN5bWJvbCIsInUiLCJjIiwiaGFzT3duUHJvcGVydHkiLCJ0IiwiYSIsImYiLCJoIiwiX3dyYXBwZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiVkVSU0lPTiIsInYiLCJ5IiwiZCIsIml0ZXJhdGVlIiwiaWRlbnRpdHkiLCJpc0Z1bmN0aW9uIiwiaXNPYmplY3QiLCJtYXRjaGVyIiwicHJvcGVydHkiLCJnIiwibWF4IiwibSIsImIiLCJ4IiwicG93IiwiQSIsInciLCJlYWNoIiwiY29sbGVjdCIsIk8iLCJyZWR1Y2UiLCJmb2xkbCIsImluamVjdCIsInJlZHVjZVJpZ2h0IiwiZm9sZHIiLCJkZXRlY3QiLCJmaW5kS2V5Iiwic2VsZWN0IiwibmVnYXRlIiwic29tZSIsImFueSIsImluY2x1ZGVzIiwiaW5jbHVkZSIsInZhbHVlcyIsImludm9rZSIsInBsdWNrIiwid2hlcmUiLCJtaW4iLCJzaHVmZmxlIiwic2FtcGxlIiwicmFuZG9tIiwiY2xvbmUiLCJzb3J0QnkiLCJjcml0ZXJpYSIsImdyb3VwQnkiLCJpbmRleEJ5IiwiY291bnRCeSIsIlMiLCJ0b0FycmF5IiwiaXNTdHJpbmciLCJtYXRjaCIsInNpemUiLCJwYXJ0aXRpb24iLCJmaXJzdCIsImhlYWQiLCJ0YWtlIiwiaW5pdGlhbCIsImxhc3QiLCJyZXN0IiwidGFpbCIsImRyb3AiLCJjb21wYWN0IiwiQm9vbGVhbiIsIk0iLCJpc0FyZ3VtZW50cyIsImZsYXR0ZW4iLCJ3aXRob3V0IiwiZGlmZmVyZW5jZSIsInVuaXEiLCJ1bmlxdWUiLCJpc0Jvb2xlYW4iLCJ1bmlvbiIsImludGVyc2VjdGlvbiIsInVuemlwIiwiemlwIiwiRiIsImZpbmRMYXN0SW5kZXgiLCJzb3J0ZWRJbmRleCIsIkUiLCJyYW5nZSIsImNlaWwiLCJjaHVuayIsIk4iLCJiaW5kIiwicGFydGlhbCIsInBsYWNlaG9sZGVyIiwiYmluZEFsbCIsIm1lbW9pemUiLCJjYWNoZSIsImRlbGF5IiwiZGVmZXIiLCJ0aHJvdHRsZSIsImxlYWRpbmciLCJub3ciLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImRlYm91bmNlIiwid3JhcCIsImNvbXBvc2UiLCJyZXN0QXJndW1lbnRzIiwiSSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiVCIsIkIiLCJjb25zdHJ1Y3RvciIsImFsbEtleXMiLCJtYXBPYmplY3QiLCJwYWlycyIsImludmVydCIsImZ1bmN0aW9ucyIsIm1ldGhvZHMiLCJSIiwiZXh0ZW5kT3duIiwiYXNzaWduIiwicSIsIksiLCJ6Iiwib21pdCIsIlN0cmluZyIsImRlZmF1bHRzIiwidGFwIiwiaXNNYXRjaCIsInZhbHVlT2YiLCJwb3AiLCJpc0VxdWFsIiwiaXNFbXB0eSIsIkQiLCJjaGlsZE5vZGVzIiwiSW50OEFycmF5IiwiaXNGaW5pdGUiLCJpc1N5bWJvbCIsImlzTnVsbCIsImlzVW5kZWZpbmVkIiwiaGFzIiwibm9Db25mbGljdCIsImNvbnN0YW50Iiwibm9vcCIsInByb3BlcnR5T2YiLCJtYXRjaGVzIiwidGltZXMiLCJEYXRlIiwiZ2V0VGltZSIsIkwiLCJQIiwiVyIsImVzY2FwZSIsInVuZXNjYXBlIiwiQyIsInVuaXF1ZUlkIiwidGVtcGxhdGVTZXR0aW5ncyIsImV2YWx1YXRlIiwiaW50ZXJwb2xhdGUiLCJKIiwiVSIsIlYiLCIkIiwidGVtcGxhdGUiLCJ2YXJpYWJsZSIsIkZ1bmN0aW9uIiwiY2hhaW4iLCJfY2hhaW4iLCJHIiwibWl4aW4iLCJ0b0pTT04iLCJkZWZpbmUiLCJpc1J0bXAiLCJpc1dlYlJUQyIsImlzSGxzIiwiaXNEYXNoIiwiZ2V0U2NyaXB0UGF0aCIsInNjcmlwdE5hbWUiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzcmMiLCJfX1ZFUlNJT05fXyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLGlEQUF5QyxzNEJBQXM0QjtBQUMvNkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUF3QixrQ0FBa0M7QUFDMUQsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxr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QU8sRUFBUDtBQUNILENBWk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDs7O0FBR08sSUFBTWhCLDRCQUFVbTJCLCtCQUFoQixDIiwiZmlsZSI6Im92ZW5wbGF5ZXIuc2RrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJvdmVucGxheWVyLnNka1wiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wib3ZlbnBsYXllci5wcm92aWRlci5EYXNoUHJvdmlkZXJ+b3ZlbnBsYXllci5wcm92aWRlci5IbHNQcm92aWRlcn5vdmVucGxheWVyLnByb3ZpZGVyLkh0bWw1fm92ZW5wbGF5ZX4yZWMxOTNhY1wiOlwib3ZlbnBsYXllci5wcm92aWRlci5EYXNoUHJvdmlkZXJ+b3ZlbnBsYXllci5wcm92aWRlci5IbHNQcm92aWRlcn5vdmVucGxheWVyLnByb3ZpZGVyLkh0bWw1fm92ZW5wbGF5ZX4yZWMxOTNhY1wiLFwib3ZlbnBsYXllci5wcm92aWRlci5EYXNoUHJvdmlkZXJ+b3ZlbnBsYXllci5wcm92aWRlci5IbHNQcm92aWRlcn5vdmVucGxheWVyLnByb3ZpZGVyLkh0bWw1fm92ZW5wbGF5ZX43YWZkNjhjZlwiOlwib3ZlbnBsYXllci5wcm92aWRlci5EYXNoUHJvdmlkZXJ+b3ZlbnBsYXllci5wcm92aWRlci5IbHNQcm92aWRlcn5vdmVucGxheWVyLnByb3ZpZGVyLkh0bWw1fm92ZW5wbGF5ZX43YWZkNjhjZlwiLFwib3ZlbnBsYXllci5wcm92aWRlci5EYXNoUHJvdmlkZXJcIjpcIm92ZW5wbGF5ZXIucHJvdmlkZXIuRGFzaFByb3ZpZGVyXCIsXCJvdmVucGxheWVyLnByb3ZpZGVyLkhsc1Byb3ZpZGVyXCI6XCJvdmVucGxheWVyLnByb3ZpZGVyLkhsc1Byb3ZpZGVyXCIsXCJvdmVucGxheWVyLnByb3ZpZGVyLkh0bWw1XCI6XCJvdmVucGxheWVyLnByb3ZpZGVyLkh0bWw1XCIsXCJvdmVucGxheWVyLnByb3ZpZGVyLldlYlJUQ1Byb3ZpZGVyXCI6XCJvdmVucGxheWVyLnByb3ZpZGVyLldlYlJUQ1Byb3ZpZGVyXCIsXCJvdmVucGxheWVyLnByb3ZpZGVyLlJ0bXBQcm92aWRlclwiOlwib3ZlbnBsYXllci5wcm92aWRlci5SdG1wUHJvdmlkZXJcIixcInNtaXBhcnNlclwiOlwic21pcGFyc2VyXCIsXCJ2ZW5kb3JzfmRvd25sb2FkZXJcIjpcInZlbmRvcnN+ZG93bmxvYWRlclwiLFwiZG93bmxvYWRlclwiOlwiZG93bmxvYWRlclwiLFwidnR0cGFyc2VyXCI6XCJ2dHRwYXJzZXJcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknKTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL292ZW5wbGF5ZXIuc2RrLmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IENhcHRpb25NYW5hZ2VyIGZyb20gXCJhcGkvY2FwdGlvbi9NYW5hZ2VyXCI7XG5pbXBvcnQgQ29uZmlndXJhdG9yIGZyb20gXCJhcGkvQ29uZmlndXJhdG9yXCI7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJhcGkvRXZlbnRFbWl0dGVyXCI7XG5pbXBvcnQgTGF6eUNvbW1hbmRFeGVjdXRvciBmcm9tIFwiYXBpL0xhenlDb21tYW5kRXhlY3V0b3JcIjtcbmltcG9ydCBNZWRpYU1hbmFnZXIgZnJvbSBcImFwaS9tZWRpYS9NYW5hZ2VyXCI7XG5pbXBvcnQgUGxheWxpc3RNYW5hZ2VyIGZyb20gXCJhcGkvcGxheWxpc3QvTWFuYWdlclwiO1xuaW1wb3J0IFByb3ZpZGVyQ29udHJvbGxlciBmcm9tIFwiYXBpL3Byb3ZpZGVyL0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7UkVBRFksIEVSUk9SUywgRVJST1IsIENPTlRFTlRfVElNRV9NT0RFX0NIQU5HRUQsIElOSVRfVU5LTldPTl9FUlJPUiwgSU5JVF9VTlNVUFBPUlRfRVJST1IsIERFU1RST1ksIFBMQVlFUl9QTEFZLCBORVRXT1JLX1VOU1RBQkxFRCwgUExBWUVSX1dFQlJUQ19ORVRXT1JLX1NMT1csIFBMQVlFUl9XRUJSVENfVU5FWFBFQ1RFRF9ESVNDT05ORUNULFxuICAgIFBMQVlFUl9GSUxFX0VSUk9SLCBQUk9WSURFUl9EQVNILCBQUk9WSURFUl9ITFMsIFBST1ZJREVSX1dFQlJUQywgUFJPVklERVJfSFRNTDUsIFBST1ZJREVSX1JUTVAsIEFMTF9QTEFZTElTVF9FTkRFRH0gZnJvbSBcImFwaS9jb25zdGFudHNcIjtcbmltcG9ydCB7dmVyc2lvbn0gZnJvbSAndmVyc2lvbic7XG5pbXBvcnQge0FwaVJ0bXBFeHBhbnNpb259IGZyb20gJ2FwaS9BcGlFeHBhbnNpb25zJztcbmltcG9ydCB7YW5hbFVzZXJBZ2VudH0gZnJvbSBcInV0aWxzL2Jyb3dzZXJcIjtcbmltcG9ydCBMQSQgZnJvbSAndXRpbHMvbGlrZUEkJztcblxuLyoqXG4gKiBAYnJpZWYgICBUaGlzIG9iamVjdCBjb25uZWN0cyBVSSB0byB0aGUgcHJvdmlkZXIuXG4gKiBAcGFyYW0gICB7b2JqZWN0fSAgICBjb250YWluZXIgIGRvbSBlbGVtZW50XG4gKlxuICogKi9cblxuY29uc3QgQXBpID0gZnVuY3Rpb24oY29udGFpbmVyKXtcbiAgICBjb25zdCB0aGF0ID0ge307XG4gICAgRXZlbnRFbWl0dGVyKHRoYXQpO1xuXG5cbiAgICBjb25zb2xlLmxvZyhcIltbT3ZlblBsYXllcl1dIHYuXCIrIHZlcnNpb24pO1xuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSBsb2FkZWQuXCIpO1xuXG4gICAgbGV0IHBsYXlsaXN0TWFuYWdlciA9IFBsYXlsaXN0TWFuYWdlcih0aGF0KTtcbiAgICBsZXQgcHJvdmlkZXJDb250cm9sbGVyID0gUHJvdmlkZXJDb250cm9sbGVyKCk7XG4gICAgbGV0IHVzZXJBZ2VudE9iamVjdCA9IGFuYWxVc2VyQWdlbnQoKTtcbiAgICBsZXQgbWVkaWFNYW5hZ2VyID0gTWVkaWFNYW5hZ2VyKGNvbnRhaW5lciwgdXNlckFnZW50T2JqZWN0KTtcbiAgICBsZXQgY3VycmVudFByb3ZpZGVyID0gXCJcIjtcbiAgICBsZXQgcGxheWVyQ29uZmlnID0gXCJcIjtcbiAgICBsZXQgbGF6eVF1ZXVlID0gXCJcIjtcbiAgICBsZXQgY2FwdGlvbk1hbmFnZXIgPSBcIlwiO1xuXG4gICAgbGV0IHdlYnJ0Y1JldHJ5ID0gZmFsc2U7XG4gICAgY29uc3QgV0VCUlRDX1JFVFJZX0NPVU5UID0gMjQwO1xuICAgIGxldCB3ZWJydGNSZXRyeUNvdW50ID0gMjQwO1xuICAgIGxldCB3ZWJydGNSZXRyeUludGVydmFsID0gNTAwO1xuICAgIGxldCB3ZWJydGNSZXRyeVRpbWVyID0gbnVsbDtcblxuXG4gICAgY29uc3QgcnVuTmV4dFBsYXlsaXN0ID0gZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJydW5OZXh0UGxheWxpc3RcIik7XG4gICAgICAgIGxldCBuZXh0UGxheWxpc3RJbmRleCA9IGluZGV4OyAvLyB8fCBwbGF5bGlzdE1hbmFnZXIuZ2V0Q3VycmVudFBsYXlsaXN0SW5kZXgoKSArIDE7XG4gICAgICAgIGxldCBwbGF5bGlzdCA9IHBsYXlsaXN0TWFuYWdlci5nZXRQbGF5bGlzdCgpO1xuICAgICAgICBsZXQgaGFzTmV4dFBsYXlsaXN0ID0gcGxheWxpc3RbbmV4dFBsYXlsaXN0SW5kZXhdPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIC8vaW5pdCBzb3VyY2UgaW5kZXhcbiAgICAgICAgcGxheWVyQ29uZmlnLnNldFNvdXJjZUluZGV4KDApO1xuXG4gICAgICAgIC8vc2V0IEdvbGJhbCBWb2x1bWUgaW5mb1xuICAgICAgICBwbGF5ZXJDb25maWcuc2V0Vm9sdW1lKGN1cnJlbnRQcm92aWRlci5nZXRWb2x1bWUoKSk7XG5cbiAgICAgICAgaWYoaGFzTmV4dFBsYXlsaXN0KXtcbiAgICAgICAgICAgIC8vdGhhdC5wYXVzZSgpO1xuICAgICAgICAgICAgbGF6eVF1ZXVlID0gTGF6eUNvbW1hbmRFeGVjdXRvcih0aGF0LCBbJ3BsYXknLCdzZWVrJywnc3RvcCddKTtcbiAgICAgICAgICAgIHBsYXlsaXN0TWFuYWdlci5zZXRDdXJyZW50UGxheWxpc3QobmV4dFBsYXlsaXN0SW5kZXgpO1xuICAgICAgICAgICAgaW5pdFByb3ZpZGVyKCk7XG5cblxuICAgICAgICAgICAgaWYoIXBsYXllckNvbmZpZy5pc0F1dG9TdGFydCgpKXtcbiAgICAgICAgICAgICAgICAvL0FueXdheSBuZXh0cGxheWxpc3QgcnVucyBhdXRvU3RhcnQhLlxuICAgICAgICAgICAgICAgIHRoYXQucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vQWxsIFBsYXlsaXN0IEVuZGVkLlxuICAgICAgICAgICAgdGhhdC50cmlnZ2VyKEFMTF9QTEFZTElTVF9FTkRFRCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGluaXRQcm92aWRlciA9IGZ1bmN0aW9uKGxhc3RQbGF5UG9zaXRpb24pe1xuICAgICAgICBjb25zdCBwaWNrUXVhbGl0eUZyb21Tb3VyY2UgPSAoc291cmNlcykgPT57XG4gICAgICAgICAgICB2YXIgcXVhbGl0eSA9IDA7XG4gICAgICAgICAgICBpZiAoc291cmNlcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlc1tpXS5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyQ29uZmlnLmdldFNvdXJjZUluZGV4KCkgPT09IGkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvKmlmIChwbGF5ZXJDb25maWcuZ2V0U291cmNlTGFiZWwoKSAmJiBzb3VyY2VzW2ldLmxhYmVsID09PSBwbGF5ZXJDb25maWcuZ2V0U291cmNlTGFiZWwoKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcXVhbGl0eTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcHJvdmlkZXJDb250cm9sbGVyLmxvYWRQcm92aWRlcnMocGxheWxpc3RNYW5hZ2VyLmdldEN1cnJlbnRQbGF5TGlzdCgpKS50aGVuKFByb3ZpZGVycyA9PiB7XG5cbiAgICAgICAgICAgIGlmKFByb3ZpZGVycy5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUlMuY29kZXNbSU5JVF9VTlNVUFBPUlRfRVJST1JdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjdXJyZW50UHJvdmlkZXIpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNhcHRpb25NYW5hZ2VyKXtcbiAgICAgICAgICAgICAgICBjYXB0aW9uTWFuYWdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgY2FwdGlvbk1hbmFnZXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FwdGlvbk1hbmFnZXIgPSBDYXB0aW9uTWFuYWdlcih0aGF0LCBwbGF5bGlzdE1hbmFnZXIuZ2V0Q3VycmVudFBsYXlsaXN0SW5kZXgoKSk7XG4gICAgICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBpbml0KCkgY2FwdGlvbnNcIik7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50U291cmNlSW5kZXggPSBwaWNrUXVhbGl0eUZyb21Tb3VyY2UocGxheWxpc3RNYW5hZ2VyLmdldEN1cnJlbnRTb3VyY2VzKCkpO1xuICAgICAgICAgICAgbGV0IHByb3ZpZGVyTmFtZSA9IFByb3ZpZGVyc1tjdXJyZW50U291cmNlSW5kZXhdW1wibmFtZVwiXTtcbiAgICAgICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGluaXQoKSBwcm92aWRlclwiLCBwcm92aWRlck5hbWUpO1xuICAgICAgICAgICAgLy9Jbml0IFByb3ZpZGVyLlxuICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyID0gIFByb3ZpZGVyc1tjdXJyZW50U291cmNlSW5kZXhdLnByb3ZpZGVyKFxuICAgICAgICAgICAgICAgIG1lZGlhTWFuYWdlci5jcmVhdGVNZWRpYShwcm92aWRlck5hbWUsIHBsYXllckNvbmZpZyksXG4gICAgICAgICAgICAgICAgcGxheWVyQ29uZmlnLFxuICAgICAgICAgICAgICAgIHBsYXlsaXN0TWFuYWdlci5nZXRDdXJyZW50QWRUYWcoKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYocHJvdmlkZXJOYW1lID09PSBQUk9WSURFUl9SVE1QKXtcbiAgICAgICAgICAgICAgICAvL0lmIHByb3ZpZGVyIHR5cGUgaXMgUlRNUCwgd2UgYWNjZXB0cyBSdG1wRXhwYW5zaW9uLlxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhhdCwgQXBpUnRtcEV4cGFuc2lvbihjdXJyZW50UHJvdmlkZXIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9UaGlzIHBhc3NlcyB0aGUgZXZlbnQgY3JlYXRlZCBieSB0aGUgUHJvdmlkZXIgdG8gQVBJLlxuICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyLm9uKFwiYWxsXCIsIGZ1bmN0aW9uKG5hbWUsIGRhdGEpe1xuXG4gICAgICAgICAgICAgICAgdGhhdC50cmlnZ2VyKG5hbWUsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYobmFtZSA9PT0gUExBWUVSX1BMQVkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3ZWJydGNSZXRyeVRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgd2VicnRjUmV0cnkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgd2VicnRjUmV0cnlDb3VudCA9IFdFQlJUQ19SRVRSWV9DT1VOVDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0F1dG8gc3dpdGNoaW5nIG5leHQgc291cmNlIHdoZW4gcGxheWVyIGxvYWQgZmFpbGVkIGJ5IGFtaXNzIHNvdXJjZS5cbiAgICAgICAgICAgICAgICAvL2RhdGEuY29kZSA9PT0gUExBWUVSX0ZJTEVfRVJST1JcbiAgICAgICAgICAgICAgICBpZiggbmFtZSA9PT0gRVJST1IgfHwgbmFtZSA9PT0gTkVUV09SS19VTlNUQUJMRUQgKXtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5jb2RlLCBwbGF5ZXJDb25maWcuZ2V0Q29uZmlnKCkuYXV0b0ZhbGxiYWNrLCBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyQ29uZmlnLmdldENvbmZpZygpLmF1dG9GYWxsYmFjaywgbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvZGUgPT09IFBMQVlFUl9XRUJSVENfVU5FWFBFQ1RFRF9ESVNDT05ORUNUXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoIXBsYXllckNvbmZpZy5nZXRDb25maWcoKS5hdXRvRmFsbGJhY2sgJiYgZGF0YS5jb2RlID09PSBQTEFZRVJfV0VCUlRDX05FVFdPUktfU0xPVykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXRyeScsIHdlYnJ0Y1JldHJ5Q291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VicnRjUmV0cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VicnRjUmV0cnlDb3VudCA9IFdFQlJUQ19SRVRSWV9DT1VOVDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYnJ0Y1JldHJ5VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0Q3VycmVudFNvdXJjZShwbGF5ZXJDb25maWcuZ2V0U291cmNlSW5kZXgoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VicnRjUmV0cnlDb3VudCAtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHdlYnJ0Y1JldHJ5SW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAod2VicnRjUmV0cnkgJiYgd2VicnRjUmV0cnlDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXRyeScsIHdlYnJ0Y1JldHJ5Q291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VicnRjUmV0cnlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRDdXJyZW50U291cmNlKHBsYXllckNvbmZpZy5nZXRTb3VyY2VJbmRleCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJydGNSZXRyeUNvdW50IC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgd2VicnRjUmV0cnlJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZWJydGNSZXRyeSAmJiB3ZWJydGNSZXRyeUNvdW50IDw9IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3ZWJydGNSZXRyeVRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYnJ0Y1JldHJ5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJydGNSZXRyeUNvdW50ID0gV0VCUlRDX1JFVFJZX0NPVU5UO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9sZXQgY3VycmVudFNvdXJjZUluZGV4ID0gdGhhdC5nZXRDdXJyZW50U291cmNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllckNvbmZpZy5nZXRDb25maWcoKS5hdXRvRmFsbGJhY2sgJiYgcGxheWVyQ29uZmlnLmdldFNvdXJjZUluZGV4KCkrMSA8IHRoYXQuZ2V0U291cmNlcygpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgc2VxdWVudGlhbCBoYXMgYXZhaWxhYmxlIHNvdXJjZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0Q3VycmVudFNvdXJjZShwbGF5ZXJDb25maWcuZ2V0U291cmNlSW5kZXgoKSsxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pLnRoZW4oKCk9PntcblxuICAgICAgICAgICAgLy9wcm92aWRlcidzIHByZWxvYWQoKSBoYXZlIHRvIG1hZGUgUHJvbWlzZS4gQ3V6IGl0IG92ZXJjb21lcyAnZmxhc2ggbG9hZGluZyB0aW1pbmcgcHJvYmxlbScuXG4gICAgICAgICAgICBjdXJyZW50UHJvdmlkZXIucHJlbG9hZChwbGF5bGlzdE1hbmFnZXIuZ2V0Q3VycmVudFNvdXJjZXMoKSwgbGFzdFBsYXlQb3NpdGlvbikudGhlbihmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgdGhhdC50cmlnZ2VyKFJFQURZKTtcblxuICAgICAgICAgICAgICAgIGxhenlRdWV1ZS5mbHVzaCgpO1xuICAgICAgICAgICAgICAgIC8vVGhpcyBpcyBubyByZWFzb24gdG8gZXhpc3QgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBsYXp5UXVldWUuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsYXp5UXVldWUub2ZmKCk7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IgJiYgZXJyb3IuY29kZSAmJiBFUlJPUlMuY29kZXNbZXJyb3IuY29kZV0pe1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRyaWdnZXIoRVJST1IsIEVSUk9SUy5jb2Rlc1tlcnJvci5jb2RlXSk7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcEVycm9yID0gRVJST1JTLmNvZGVzW0lOSVRfVU5LTldPTl9FUlJPUl07XG4gICAgICAgICAgICAgICAgICAgIHRlbXBFcnJvci5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnRyaWdnZXIoRVJST1IsIHRlbXBFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgLy9JTklUIEVSUk9SXG4gICAgICAgICAgICBpZihlcnJvciAmJiBlcnJvci5jb2RlICYmIEVSUk9SUy5jb2Rlc1tlcnJvci5jb2RlXSl7XG4gICAgICAgICAgICAgICAgdGhhdC50cmlnZ2VyKEVSUk9SLCBFUlJPUlMuY29kZXNbZXJyb3IuY29kZV0pO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wRXJyb3IgPSBFUlJPUlMuY29kZXNbSU5JVF9VTktOV09OX0VSUk9SXTtcbiAgICAgICAgICAgICAgICB0ZW1wRXJyb3IuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB0aGF0LnRyaWdnZXIoRVJST1IsIHRlbXBFcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8veHh4IDogSWYgeW91IGluaXQgZW1wdHkgc291cmNlcy4gKEkgdGhpbmsgdGhpcyBpcyBzdHJhbmdlIGNhc2UuKVxuICAgICAgICAgICAgLy9UaGlzIHdvcmtzIGZvciB0aGlzIGNhc2UuXG4gICAgICAgICAgICAvL3BsYXllciA9IE92ZW5QbGF5ZXIuY3JlYXRlKFwiZWxJZFwiLCB7fSk7XG4gICAgICAgICAgICAvL3BsYXllci5sb2FkKHNvcnVjZXMpO1xuICAgICAgICAgICAgbGF6eVF1ZXVlLm9mZigpO1xuICAgICAgICAgICAgLy9sYXp5UXVldWUucmVtb3ZlQW5kRXhjdXRlT25jZShcImxvYWRcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIEFQSSDstIjquLDtmZQg7ZWo7IiYXG4gICAgICogaW5pdFxuICAgICAqIEBwYXJhbSAgICAgIHtvYmplY3R9IG9wdGlvbnMgcGxheWVyIGluaXRpYWwgb3B0aW9uIHZhbHVlLlxuICAgICAqIEByZXR1cm5zXG4gICAgICoqL1xuICAgIHRoYXQuaW5pdCA9IChvcHRpb25zKSA9PntcbiAgICAgICAgLy9JdCBjb2xsZWN0cyB0aGUgY29tbWFuZHMgYW5kIGV4ZWN1dGVzIHRoZW0gYXQgdGhlIHRpbWUgd2hlbiB0aGV5IGFyZSBleGVjdXRhYmxlLlxuICAgICAgICBsYXp5UXVldWUgPSBMYXp5Q29tbWFuZEV4ZWN1dG9yKHRoYXQsIFtcbiAgICAgICAgICAgICdsb2FkJywncGxheScsJ3BhdXNlJywnc2VlaycsJ3N0b3AnLCAnZ2V0RHVyYXRpb24nLCAnZ2V0UG9zaXRpb24nLCAnZ2V0Vm9sdW1lJ1xuICAgICAgICAgICAgLCAnZ2V0TXV0ZScsICdnZXRCdWZmZXInLCAnZ2V0U3RhdGUnICwgJ2dldFF1YWxpdHlMZXZlbHMnXG4gICAgICAgIF0pO1xuICAgICAgICBvcHRpb25zLm1lZGlhQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICBvcHRpb25zLmJyb3dzZXIgPSB1c2VyQWdlbnRPYmplY3Q7XG4gICAgICAgIHBsYXllckNvbmZpZyA9IENvbmZpZ3VyYXRvcihvcHRpb25zLCB0aGF0KTtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogaW5pdCgpXCIpO1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBpbml0KCkgY29uZmlnIDogXCIsIHBsYXllckNvbmZpZyk7XG5cbiAgICAgICAgLy9Ob3Qgd29ya2luZyA6IFN5bnRheEVycm9yOiBcIkVSUk9SUy5jb2Rlc1wiIGlzIHJlYWQtb25seVxuICAgICAgICBFUlJPUlMuY29kZXMgPSBwbGF5ZXJDb25maWcuZ2V0U3lzdGVtVGV4dCgpLmFwaS5lcnJvcjtcbiAgICAgICAgLy9Db29sXG4gICAgICAgIC8vRVJST1JTLmNvZGVzLnB1c2gocGxheWVyQ29uZmlnLmdldFN5c3RlbVRleHQoKSk7XG5cbiAgICAgICAgcGxheWxpc3RNYW5hZ2VyLmluaXRQbGF5bGlzdChwbGF5ZXJDb25maWcuZ2V0UGxheWxpc3QoKSwgcGxheWVyQ29uZmlnKTtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogaW5pdCgpIHNvdXJjZXMgOiBcIiAsIHBsYXlsaXN0TWFuYWdlci5nZXRDdXJyZW50U291cmNlcygpKTtcblxuICAgICAgICBpbml0UHJvdmlkZXIoKTtcbiAgICB9O1xuICAgIHRoYXQuZ2V0UHJvdmlkZXJOYW1lID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50UHJvdmlkZXIpe1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5nZXROYW1lKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB0aGF0LmdldENvbmZpZyA9ICgpID0+IHtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0Q29uZmlnKClcIiwgcGxheWVyQ29uZmlnLmdldENvbmZpZygpKTtcbiAgICAgICAgcmV0dXJuIHBsYXllckNvbmZpZy5nZXRDb25maWcoKTtcbiAgICB9O1xuICAgIHRoYXQuZ2V0QnJvd3NlciA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gcGxheWVyQ29uZmlnLmdldEJyb3dzZXIoKTtcbiAgICB9O1xuICAgIHRoYXQuc2V0VGltZWNvZGVNb2RlID0gKGlzU2hvdykgPT57XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHNldFRpbWVjb2RlTW9kZSgpXCIsIGlzU2hvdyk7XG4gICAgICAgIHBsYXllckNvbmZpZy5zZXRUaW1lY29kZU1vZGUoaXNTaG93KTtcbiAgICB9O1xuICAgIHRoYXQuaXNUaW1lY29kZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGlzVGltZWNvZGVNb2RlKClcIik7XG4gICAgICAgIHJldHVybiBwbGF5ZXJDb25maWcuaXNUaW1lY29kZU1vZGUoKTtcbiAgICB9O1xuICAgIHRoYXQuZ2V0RnJhbWVyYXRlID0gKCkgPT4ge1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRGcmFtZXJhdGUoKVwiKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5nZXRGcmFtZXJhdGUoKTtcbiAgICB9O1xuICAgIHRoYXQuc2Vla0ZyYW1lID0gKGZyYW1lQ291bnQpID0+IHtcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzZWVrRnJhbWUoKVwiLCBmcmFtZUNvdW50KTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5zZWVrRnJhbWUoZnJhbWVDb3VudCk7XG4gICAgfTtcblxuICAgIHRoYXQuZ2V0RHVyYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybiBudWxsO31cbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0RHVyYXRpb24oKVwiLCBjdXJyZW50UHJvdmlkZXIuZ2V0RHVyYXRpb24oKSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuZ2V0RHVyYXRpb24oKTtcbiAgICB9O1xuICAgIHRoYXQuZ2V0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybiBudWxsO31cblxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRQb3NpdGlvbigpXCIsIGN1cnJlbnRQcm92aWRlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5nZXRQb3NpdGlvbigpO1xuICAgIH07XG4gICAgdGhhdC5nZXRWb2x1bWUgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybiBudWxsO31cblxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRWb2x1bWUoKVwiLCBjdXJyZW50UHJvdmlkZXIuZ2V0Vm9sdW1lKCkpO1xuICAgICAgICByZXR1cm4gY3VycmVudFByb3ZpZGVyLmdldFZvbHVtZSgpO1xuICAgIH07XG4gICAgdGhhdC5zZXRWb2x1bWUgPSAodm9sdW1lKSA9PiB7XG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybiBudWxsO31cblxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzZXRWb2x1bWUoKSBcIiArIHZvbHVtZSk7XG4gICAgICAgIGN1cnJlbnRQcm92aWRlci5zZXRWb2x1bWUodm9sdW1lKTtcbiAgICB9O1xuICAgIHRoYXQuc2V0TXV0ZSA9IChzdGF0ZSkgPT4ge1xuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm4gbnVsbDt9XG5cbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogc2V0TXV0ZSgpIFwiICsgc3RhdGUpO1xuICAgICAgICByZXR1cm4gY3VycmVudFByb3ZpZGVyLnNldE11dGUoc3RhdGUpO1xuICAgIH07XG4gICAgdGhhdC5nZXRNdXRlID0gKCkgPT4ge1xuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm4gbnVsbDt9XG5cbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0TXV0ZSgpIFwiICsgY3VycmVudFByb3ZpZGVyLmdldE11dGUoKSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuZ2V0TXV0ZSgpO1xuICAgIH07XG4gICAgdGhhdC5sb2FkID0gKHBsYXlsaXN0KSA9PiB7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGxvYWQoKSBcIiwgcGxheWxpc3QpO1xuICAgICAgICBsYXp5UXVldWUgPSBMYXp5Q29tbWFuZEV4ZWN1dG9yKHRoYXQsIFsncGxheScsJ3NlZWsnLCdzdG9wJ10pO1xuXG4gICAgICAgIGlmKHBsYXlsaXN0KXtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRQcm92aWRlcil7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyLnNldEN1cnJlbnRRdWFsaXR5KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWxpc3RNYW5hZ2VyLmluaXRQbGF5bGlzdChwbGF5bGlzdCwgcGxheWVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdFByb3ZpZGVyKCk7XG5cbiAgICB9O1xuICAgIHRoYXQucGxheSA9ICgpID0+IHtcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBwbGF5KCkgXCIpO1xuICAgICAgICBjdXJyZW50UHJvdmlkZXIucGxheSgpO1xuICAgIH1cbiAgICB0aGF0LnBhdXNlID0gKCkgPT4ge1xuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm4gbnVsbDt9XG5cbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogcGF1c2UoKSBcIik7XG4gICAgICAgIGN1cnJlbnRQcm92aWRlci5wYXVzZSgpO1xuICAgIH07XG4gICAgdGhhdC5zZWVrID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybiBudWxsO31cblxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzZWVrKCkgXCIrIHBvc2l0aW9uKTtcbiAgICAgICAgY3VycmVudFByb3ZpZGVyLnNlZWsocG9zaXRpb24pO1xuICAgIH07XG4gICAgdGhhdC5zZXRQbGF5YmFja1JhdGUgPSAocGxheWJhY2tSYXRlKSA9PntcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHNldFBsYXliYWNrUmF0ZSgpIFwiLCBwbGF5YmFja1JhdGUpO1xuICAgICAgICByZXR1cm4gY3VycmVudFByb3ZpZGVyLnNldFBsYXliYWNrUmF0ZShwbGF5ZXJDb25maWcuc2V0UGxheWJhY2tSYXRlKHBsYXliYWNrUmF0ZSkpO1xuICAgIH07XG4gICAgdGhhdC5nZXRQbGF5YmFja1JhdGUgPSAoKSA9PntcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGdldFBsYXliYWNrUmF0ZSgpIFwiLCBjdXJyZW50UHJvdmlkZXIuZ2V0UGxheWJhY2tSYXRlKCkpO1xuICAgICAgICByZXR1cm4gY3VycmVudFByb3ZpZGVyLmdldFBsYXliYWNrUmF0ZSgpO1xuICAgIH07XG5cbiAgICB0aGF0LmdldFBsYXlsaXN0ID0gKCkgPT4ge1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRQbGF5bGlzdCgpIFwiLCBwbGF5bGlzdE1hbmFnZXIuZ2V0UGxheWxpc3QoKSk7XG4gICAgICAgIHJldHVybiBwbGF5bGlzdE1hbmFnZXIuZ2V0UGxheWxpc3QoKTtcbiAgICB9O1xuICAgIHRoYXQuZ2V0Q3VycmVudFBsYXlsaXN0ID0gKCkgPT4ge1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRDdXJyZW50UGxheWxpc3QoKSBcIiwgcGxheWxpc3RNYW5hZ2VyLmdldEN1cnJlbnRQbGF5bGlzdEluZGV4KCkpO1xuICAgICAgICByZXR1cm4gcGxheWxpc3RNYW5hZ2VyLmdldEN1cnJlbnRQbGF5bGlzdEluZGV4KCk7XG4gICAgfTtcbiAgICB0aGF0LnNldEN1cnJlbnRQbGF5bGlzdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzZXRDdXJyZW50UGxheWxpc3QoKSBcIiwgaW5kZXgpO1xuICAgICAgICBydW5OZXh0UGxheWxpc3QoaW5kZXgpO1xuICAgIH07XG5cbiAgICB0aGF0LmdldFNvdXJjZXMgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybiBudWxsO31cblxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRTb3VyY2VzKCkgXCIsIGN1cnJlbnRQcm92aWRlci5nZXRTb3VyY2VzKCkpO1xuICAgICAgICByZXR1cm4gY3VycmVudFByb3ZpZGVyLmdldFNvdXJjZXMoKTtcbiAgICB9O1xuICAgIHRoYXQuZ2V0Q3VycmVudFNvdXJjZSA9ICgpID0+e1xuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm4gbnVsbDt9XG5cbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0Q3VycmVudFNvdXJjZSgpIFwiLCBjdXJyZW50UHJvdmlkZXIuZ2V0Q3VycmVudFNvdXJjZSgpKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5nZXRDdXJyZW50U291cmNlKCk7XG4gICAgfTtcbiAgICB0aGF0LnNldEN1cnJlbnRTb3VyY2UgPSAoaW5kZXgpID0+e1xuXG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybiBudWxsO31cblxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzZXRDdXJyZW50U291cmNlKCkgXCIsIGluZGV4KTtcblxuICAgICAgICBsZXQgc291cmNlcyA9IGN1cnJlbnRQcm92aWRlci5nZXRTb3VyY2VzKCk7XG4gICAgICAgIGxldCBjdXJyZW50U291cmNlID0gc291cmNlc1tjdXJyZW50UHJvdmlkZXIuZ2V0Q3VycmVudFNvdXJjZSgpXTtcbiAgICAgICAgbGV0IG5ld1NvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgICBsZXQgbGFzdFBsYXlQb3NpdGlvbiA9IGN1cnJlbnRQcm92aWRlci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgaXNTYW1lUHJvdmlkZXIgPSBwcm92aWRlckNvbnRyb2xsZXIuaXNTYW1lUHJvdmlkZXIoY3VycmVudFNvdXJjZSwgbmV3U291cmNlKTtcbiAgICAgICAgLy8gcHJvdmlkZXIuc2VyQ3VycmVudFF1YWxpdHkgLT4gcGxheWVyQ29uZmlnIHNldHRpbmcgLT4gbG9hZFxuICAgICAgICBsZXQgcmVzdWx0U291cmNlSW5kZXggPSBjdXJyZW50UHJvdmlkZXIuc2V0Q3VycmVudFNvdXJjZShpbmRleCwgaXNTYW1lUHJvdmlkZXIpO1xuXG4gICAgICAgIGlmKCFuZXdTb3VyY2Upe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzZXRDdXJyZW50UXVhbGl0eSgpIGlzU2FtZVByb3ZpZGVyXCIsIGlzU2FtZVByb3ZpZGVyKTtcblxuICAgICAgICAvL3N3aXRjaGluZyBiZXR3ZWVuIHN0cmVhbXMgb24gSExTLiB3dGg/IGh0dHBzOi8vdmlkZW8tZGV2LmdpdGh1Yi5pby9obHMuanMvbGF0ZXN0L2RvY3MvQVBJLmh0bWwjZmluYWwtc3RlcC1kZXN0cm95aW5nLXN3aXRjaGluZy1iZXR3ZWVuLXN0cmVhbXNcbiAgICAgICAgaWYoIWlzU2FtZVByb3ZpZGVyIHx8IGN1cnJlbnRQcm92aWRlci5nZXROYW1lKCkgPT09IFBST1ZJREVSX0hMUyl7XG4gICAgICAgICAgICBsYXp5UXVldWUgPSBMYXp5Q29tbWFuZEV4ZWN1dG9yKHRoYXQsIFsncGxheScsJ3NlZWsnXSk7XG4gICAgICAgICAgICBpbml0UHJvdmlkZXIobGFzdFBsYXlQb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0U291cmNlSW5kZXg7XG4gICAgfTtcblxuXG5cbiAgICB0aGF0LmdldFF1YWxpdHlMZXZlbHMgPSAoKSA9PntcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGdldFF1YWxpdHlMZXZlbHMoKSBcIiwgY3VycmVudFByb3ZpZGVyLmdldFF1YWxpdHlMZXZlbHMoKSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuZ2V0UXVhbGl0eUxldmVscygpO1xuICAgIH07XG4gICAgdGhhdC5nZXRDdXJyZW50UXVhbGl0eSA9ICgpID0+e1xuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm4gbnVsbDt9XG5cbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogZ2V0Q3VycmVudFF1YWxpdHkoKSBcIiwgY3VycmVudFByb3ZpZGVyLmdldEN1cnJlbnRRdWFsaXR5KCkpO1xuICAgICAgICByZXR1cm4gY3VycmVudFByb3ZpZGVyLmdldEN1cnJlbnRRdWFsaXR5KCk7XG4gICAgfTtcbiAgICB0aGF0LnNldEN1cnJlbnRRdWFsaXR5ID0gKHF1YWxpdHlJbmRleCkgPT57XG4gICAgICAgIGlmKCFjdXJyZW50UHJvdmlkZXIpe3JldHVybiBudWxsO31cblxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBzZXRDdXJyZW50UXVhbGl0eSgpIFwiLCBxdWFsaXR5SW5kZXgpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuc2V0Q3VycmVudFF1YWxpdHkocXVhbGl0eUluZGV4KTtcbiAgICB9O1xuICAgIHRoYXQuaXNBdXRvUXVhbGl0eSA9ICgpID0+IHtcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGlzQXV0b1F1YWxpdHkoKVwiKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5pc0F1dG9RdWFsaXR5KCk7XG4gICAgfTtcbiAgICB0aGF0LnNldEF1dG9RdWFsaXR5ID0gKGlzQXV0bykgPT4ge1xuICAgICAgICBpZighY3VycmVudFByb3ZpZGVyKXtyZXR1cm4gbnVsbDt9XG5cbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQVBJIDogc2V0QXV0b1F1YWxpdHkoKSBcIiwgaXNBdXRvKTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci5zZXRBdXRvUXVhbGl0eShpc0F1dG8pO1xuICAgIH1cblxuICAgIHRoYXQuZ2V0Q2FwdGlvbkxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGlmKCFjYXB0aW9uTWFuYWdlcil7cmV0dXJuIG51bGw7fVxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRDYXB0aW9uTGlzdCgpIFwiLCBjYXB0aW9uTWFuYWdlci5nZXRDYXB0aW9uTGlzdCgpKTtcbiAgICAgICAgcmV0dXJuIGNhcHRpb25NYW5hZ2VyLmdldENhcHRpb25MaXN0KCk7XG4gICAgfVxuICAgIHRoYXQuZ2V0Q3VycmVudENhcHRpb24gPSAoKSA9PiB7XG4gICAgICAgIGlmKCFjYXB0aW9uTWFuYWdlcil7cmV0dXJuIG51bGw7fVxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRDdXJyZW50Q2FwdGlvbigpIFwiLCBjYXB0aW9uTWFuYWdlci5nZXRDdXJyZW50Q2FwdGlvbigpKTtcbiAgICAgICAgcmV0dXJuIGNhcHRpb25NYW5hZ2VyLmdldEN1cnJlbnRDYXB0aW9uKCk7XG4gICAgfVxuICAgIHRoYXQuc2V0Q3VycmVudENhcHRpb24gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYoIWNhcHRpb25NYW5hZ2VyKXtyZXR1cm4gbnVsbDt9XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHNldEN1cnJlbnRDYXB0aW9uKCkgXCIsIGluZGV4KTtcbiAgICAgICAgY2FwdGlvbk1hbmFnZXIuc2V0Q3VycmVudENhcHRpb24oaW5kZXgpO1xuICAgIH1cbiAgICB0aGF0LmFkZENhcHRpb24gPSAodHJhY2spID0+IHtcbiAgICAgICAgaWYoIWNhcHRpb25NYW5hZ2VyKXtyZXR1cm4gbnVsbDt9XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IGFkZENhcHRpb24oKSBcIilcbiAgICAgICAgcmV0dXJuIGNhcHRpb25NYW5hZ2VyLmFkZENhcHRpb24odHJhY2spO1xuICAgIH1cbiAgICB0aGF0LnJlbW92ZUNhcHRpb24gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgaWYoIWNhcHRpb25NYW5hZ2VyKXtyZXR1cm4gbnVsbDt9XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHJlbW92ZUNhcHRpb24oKSBcIiwgaW5kZXgpXG4gICAgICAgIHJldHVybiBjYXB0aW9uTWFuYWdlci5yZW1vdmVDYXB0aW9uKGluZGV4KTtcbiAgICB9XG5cbiAgICB0aGF0LmdldEJ1ZmZlciA9ICgpID0+IHtcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRCdWZmZXIoKSBcIiwgY3VycmVudFByb3ZpZGVyLmdldEJ1ZmZlcigpKTtcbiAgICAgICAgY3VycmVudFByb3ZpZGVyLmdldEJ1ZmZlcigpO1xuICAgIH07XG4gICAgdGhhdC5nZXRTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJBUEkgOiBnZXRTdGF0ZSgpIFwiLCBjdXJyZW50UHJvdmlkZXIuZ2V0U3RhdGUoKSk7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvdmlkZXIuZ2V0U3RhdGUoKTtcbiAgICB9O1xuICAgIHRoYXQuc3RvcCA9ICgpID0+IHtcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHN0b3AoKSBcIik7XG4gICAgICAgIGN1cnJlbnRQcm92aWRlci5zdG9wKCk7XG4gICAgfTtcbiAgICB0aGF0LnJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYoIWN1cnJlbnRQcm92aWRlcil7cmV0dXJuIG51bGw7fVxuXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHJlbW92ZSgpIFwiKTtcbiAgICAgICAgbGF6eVF1ZXVlLmRlc3Ryb3koKTtcbiAgICAgICAgaWYoY2FwdGlvbk1hbmFnZXIpe1xuICAgICAgICAgICAgY2FwdGlvbk1hbmFnZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgY2FwdGlvbk1hbmFnZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudFByb3ZpZGVyKXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlci5kZXN0cm95KCk7XG4gICAgICAgICAgICBjdXJyZW50UHJvdmlkZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobWVkaWFNYW5hZ2VyKXtcbiAgICAgICAgICAgIG1lZGlhTWFuYWdlci5kZXN0cm95KCk7XG4gICAgICAgICAgICBtZWRpYU1hbmFnZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHByb3ZpZGVyQ29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIHBsYXlsaXN0TWFuYWdlciA9IG51bGw7XG4gICAgICAgIHBsYXllckNvbmZpZyA9IG51bGw7XG4gICAgICAgIGxhenlRdWV1ZSA9IG51bGw7XG5cbiAgICAgICAgdGhhdC50cmlnZ2VyKERFU1RST1kpO1xuICAgICAgICB0aGF0Lm9mZigpO1xuXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkFQSSA6IHJlbW92ZSgpIC0gbGF6eVF1ZXVlLCBjdXJyZW50UHJvdmlkZXIsIHByb3ZpZGVyQ29udHJvbGxlciwgcGxheWxpc3RNYW5hZ2VyLCBwbGF5ZXJDb25maWcsIGFwaSBldmVudCBkZXN0cm9lZC4gXCIpO1xuICAgICAgICBPdmVuUGxheWVyU0RLLnJlbW92ZVBsYXllcih0aGF0LmdldENvbnRhaW5lcklkKCkpO1xuICAgICAgICBpZihPdmVuUGxheWVyU0RLLmdldFBsYXllckxpc3QoKS5sZW5ndGggID09PSAwKXtcbiAgICAgICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIk92ZW5QbGF5ZXJTREsucGxheWVyTGlzdFwiLCAgT3ZlblBsYXllclNESy5nZXRQbGF5ZXJMaXN0KCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoYXQuZ2V0VmVyc2lvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFwidi5cIit2ZXJzaW9uO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhhdDtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBBcGk7XG5cblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gOC4gMjQuLlxuICovXG5cbmV4cG9ydCBjb25zdCBBcGlSdG1wRXhwYW5zaW9uID0gZnVuY3Rpb24oY3VycmVudFByb3ZpZGVyKXtcbiAgICByZXR1cm4ge1xuICAgICAgICBleHRlcm5hbENhbGxiYWNrQ3JlZXAgOiAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZihyZXN1bHQubmFtZSAmJiByZXN1bHQuZGF0YSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm92aWRlci50cmlnZ2VyRXZlbnRGcm9tRXh0ZXJuYWwocmVzdWx0Lm5hbWUsIHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCJpbXBvcnQgXyBmcm9tIFwidXRpbHMvdW5kZXJzY29yZVwiO1xuXG5pbXBvcnQge1xuICAgIENPTlRFTlRfVElNRV9NT0RFX0NIQU5HRUQsIFNZU1RFTV9URVhUXG59IGZyb20gXCJhcGkvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGJyaWVmICAgVGhpcyBpbml0aWFsaXplcyB0aGUgaW5wdXQgb3B0aW9ucy5cbiAqIEBwYXJhbSAgIG9wdGlvbnNcbiAqXG4gKiAqL1xuY29uc3QgQ29uZmlndXJhdG9yID0gZnVuY3Rpb24ob3B0aW9ucywgcHJvdmlkZXIpe1xuXG4gICAgY29uc3QgY29tcG9zZVNvdXJjZU9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICAgICAgY29uc3QgRGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBtZWRpYUNvbnRhaW5lciA6IFwiXCIsXG4gICAgICAgICAgICBwbGF5YmFja1JhdGVzOiBbMiwgMS41LCAxLCAwLjUsIDAuMjVdLFxuICAgICAgICAgICAgcGxheWJhY2tSYXRlOiAxLFxuICAgICAgICAgICAgbXV0ZTogZmFsc2UsXG4gICAgICAgICAgICB2b2x1bWU6IDEwMCxcbiAgICAgICAgICAgIGxvb3AgOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRyb2xzIDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9TdGFydCA6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b0ZhbGxiYWNrOiB0cnVlLFxuICAgICAgICAgICAgdGltZWNvZGUgOiB0cnVlLFxuICAgICAgICAgICAgc291cmNlSW5kZXggOiAwLFxuICAgICAgICAgICAgYnJvd3NlciA6IFwiXCIsXG4gICAgICAgICAgICBoaWRlUGxheWxpc3RJY29uIDogZmFsc2UsXG4gICAgICAgICAgICBydG1wQnVmZmVyVGltZSA6IDEsXG4gICAgICAgICAgICBydG1wQnVmZmVyVGltZU1heCA6IDMsXG4gICAgICAgICAgICBhZENsaWVudCA6IFwiZ29vZ2xlaW1hXCIsXG4gICAgICAgICAgICBjdXJyZW50UHJvdG9jb2xPbmx5IDogZmFsc2UsXG4gICAgICAgICAgICBzeXN0ZW1UZXh0IDogbnVsbCxcbiAgICAgICAgICAgIGxhbmcgOiBcImVuXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb3dlcmNhc2VWYWwgPSB2YWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAobG93ZXJjYXNlVmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb3dlcmNhc2VWYWwgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih2YWwpKSAmJiAhaXNOYU4ocGFyc2VGbG9hdCh2YWwpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9uc1trZXldID0gc2VyaWFsaXplKG9wdGlvbnNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2VyaWFsaXplKG9wdGlvbnMpO1xuICAgICAgICBsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICBsZXQgdXNlckN1c3R1bVN5c3RlbVRleHQgPSBbXTtcbiAgICAgICAgaWYoY29uZmlnLnN5c3RlbVRleHQpe1xuICAgICAgICAgICAgdXNlckN1c3R1bVN5c3RlbVRleHQgPSBfLmlzQXJyYXkoY29uZmlnLnN5c3RlbVRleHQpID8gY29uZmlnLnN5c3RlbVRleHQgOiBbY29uZmlnLnN5c3RlbVRleHRdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHVzZXJDdXN0dW1TeXN0ZW1UZXh0Lmxlbmd0aDsgaSArKyl7XG4gICAgICAgICAgICBpZih1c2VyQ3VzdHVtU3lzdGVtVGV4dFtpXS5sYW5nKXtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN5c3RlbVRleHQgPSBfLmZpbmRXaGVyZShTWVNURU1fVEVYVCAsIHtcImxhbmdcIjogdXNlckN1c3R1bVN5c3RlbVRleHRbaV0ubGFuZ30pO1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTeXN0ZW1UZXh0KXtcbiAgICAgICAgICAgICAgICAgICAgLy92YWxpZGF0ZSAmIHVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRTeXN0ZW1UZXh0LCB1c2VyQ3VzdHVtU3lzdGVtVGV4dFtpXSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTeXN0ZW1UZXh0ID0gXy5maW5kV2hlcmUoU1lTVEVNX1RFWFQgLCB7XCJsYW5nXCI6IFwiZW5cIn0pO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3lzdGVtVGV4dC5sYW5nID0gdXNlckN1c3R1bVN5c3RlbVRleHRbaV0ubGFuZztcbiAgICAgICAgICAgICAgICAgICAgU1lTVEVNX1RFWFQucHVzaChPYmplY3QuYXNzaWduKHVzZXJDdXN0dW1TeXN0ZW1UZXh0W2ldLCBjdXJyZW50U3lzdGVtVGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25maWcuc3lzdGVtVGV4dCA9IF8uZmluZFdoZXJlKFNZU1RFTV9URVhUICwge1wibGFuZ1wiOiBjb25maWcubGFuZ30pO1xuXG4gICAgICAgIGxldCBwbGF5YmFja1JhdGVzID0gY29uZmlnLnBsYXliYWNrUmF0ZXM7XG5cbiAgICAgICAgcGxheWJhY2tSYXRlcyA9IHBsYXliYWNrUmF0ZXMuZmlsdGVyKHJhdGUgPT4gXy5pc051bWJlcihyYXRlKSAmJiByYXRlID49IDAuMjUgJiYgcmF0ZSA8PSA0KS5tYXAocmF0ZSA9PiBNYXRoLnJvdW5kKHJhdGUgKiA0KSAvIDQpO1xuXG4gICAgICAgIGlmIChwbGF5YmFja1JhdGVzLmluZGV4T2YoMSkgPCAwKSB7XG4gICAgICAgICAgICBwbGF5YmFja1JhdGVzLnB1c2goMSk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWJhY2tSYXRlcy5zb3J0KCk7XG5cbiAgICAgICAgY29uZmlnLnBsYXliYWNrUmF0ZXMgPSBwbGF5YmFja1JhdGVzO1xuXG4gICAgICAgIGNvbmZpZy5ydG1wQnVmZmVyVGltZSA9IGNvbmZpZy5ydG1wQnVmZmVyVGltZSA+IDEwID8gMTAgOiBjb25maWcucnRtcEJ1ZmZlclRpbWU7XG4gICAgICAgIGNvbmZpZy5ydG1wQnVmZmVyVGltZU1heCA9IGNvbmZpZy5ydG1wQnVmZmVyVGltZU1heCA+IDUwID8gNTAgOiBjb25maWcucnRtcEJ1ZmZlclRpbWVNYXg7XG5cblxuICAgICAgICBpZiAoY29uZmlnLnBsYXliYWNrUmF0ZXMuaW5kZXhPZihjb25maWcucGxheWJhY2tSYXRlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbmZpZy5wbGF5YmFja1JhdGUgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uZmlnUGxheWxpc3QgPSBjb25maWcucGxheWxpc3Q7XG4gICAgICAgIGlmICghY29uZmlnUGxheWxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IF8ucGljayhjb25maWcsIFtcbiAgICAgICAgICAgICAgICAndGl0bGUnLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgJ3R5cGUnLFxuICAgICAgICAgICAgICAgICdpbWFnZScsXG4gICAgICAgICAgICAgICAgJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICdzb3VyY2VzJyxcbiAgICAgICAgICAgICAgICAndHJhY2tzJyxcbiAgICAgICAgICAgICAgICAnaG9zdCcsXG4gICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAnc3RyZWFtJyxcbiAgICAgICAgICAgICAgICAnYWRUYWdVcmwnXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgY29uZmlnLnBsYXlsaXN0ID0gWyBvYmogXTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmlzQXJyYXkoY29uZmlnUGxheWxpc3QucGxheWxpc3QpKSB7XG4gICAgICAgICAgICBjb25maWcuZmVlZERhdGEgPSBjb25maWdQbGF5bGlzdDtcbiAgICAgICAgICAgIGNvbmZpZy5wbGF5bGlzdCA9IGNvbmZpZ1BsYXlsaXN0LnBsYXlsaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy5kdXJhdGlvbjtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkNvbmZpZ3VyYXRvciBsb2FkZWQuXCIsIG9wdGlvbnMpO1xuICAgIGxldCBzcGVjID0gY29tcG9zZVNvdXJjZU9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAvL3NwZWMuaXNGdWxsc2NyZWVuID0gZmFsc2U7IC8vSUUgMTEgY2FuJ3QgY2hlY2sgY3VycmVudCBmdWxsc2NyZWVuIHN0YXRlLlxuXG4gICAgY29uc3QgdGhhdCA9IHt9O1xuICAgIHRoYXQuZ2V0Q29uZmlnID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3BlYztcbiAgICB9O1xuICAgIHRoYXQuZ2V0QWRDbGllbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzcGVjLmFkQ2xpZW50O1xuICAgIH07XG4gICAgdGhhdC5zZXRDb25maWcgPSAoY29uZmlnLCB2YWx1ZSkgPT4ge1xuICAgICAgICBzcGVjW2NvbmZpZ10gPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgdGhhdC5nZXRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzcGVjLm1lZGlhQ29udGFpbmVyO1xuICAgIH07XG4gICAgLyp0aGF0LmlzRnVsbHNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNwZWMuaXNGdWxsc2NyZWVuO1xuICAgIH1cbiAgICB0aGF0LnNldEZ1bGxzY3JlZW4gPSAoaXNGdWxsc2NyZWVuKSA9PiB7XG4gICAgICAgIHJldHVybiBzcGVjLmlzRnVsbHNjcmVlbiA9IGlzRnVsbHNjcmVlbjtcbiAgICB9Ki9cblxuICAgIHRoYXQuZ2V0UGxheWJhY2tSYXRlID0oKT0+e1xuICAgICAgICByZXR1cm4gc3BlYy5wbGF5YmFja1JhdGU7XG4gICAgfTtcbiAgICB0aGF0LnNldFBsYXliYWNrUmF0ZSA9KHBsYXliYWNrUmF0ZSk9PntcbiAgICAgICAgc3BlYy5wbGF5YmFja1JhdGUgPSBwbGF5YmFja1JhdGU7XG4gICAgICAgIHJldHVybiBwbGF5YmFja1JhdGU7XG4gICAgfTtcblxuICAgIHRoYXQuZ2V0UXVhbGl0eUxhYmVsID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3BlYy5xdWFsaXR5TGFiZWw7XG4gICAgfTtcbiAgICB0aGF0LnNldFF1YWxpdHlMYWJlbCA9IChuZXdMYWJlbCkgPT4ge1xuICAgICAgICBzcGVjLnF1YWxpdHlMYWJlbCA9IG5ld0xhYmVsO1xuICAgIH07XG5cbiAgICB0aGF0LmlzQ3VycmVudFByb3RvY29sT25seSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNwZWMuY3VycmVudFByb3RvY29sT25seTtcbiAgICB9O1xuICAgIC8qdGhhdC5nZXRTb3VyY2VMYWJlbCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNwZWMuc291cmNlTGFiZWw7XG4gICAgfTtcbiAgICB0aGF0LnNldFNvdXJjZUxhYmVsID0gKG5ld0xhYmVsKSA9PiB7XG4gICAgICAgIHNwZWMuc291cmNlTGFiZWwgPSBuZXdMYWJlbDtcbiAgICB9OyovXG5cbiAgICB0aGF0LmdldFNvdXJjZUluZGV4ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3BlYy5zb3VyY2VJbmRleDtcbiAgICB9O1xuICAgIHRoYXQuc2V0U291cmNlSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICAgICAgc3BlYy5zb3VyY2VJbmRleCA9IGluZGV4O1xuICAgIH07XG4gICAgdGhhdC5zZXRUaW1lY29kZU1vZGUgPSAodGltZWNvZGUpID0+IHtcbiAgICAgICAgaWYoc3BlYy50aW1lY29kZSAhPT0gdGltZWNvZGUpe1xuICAgICAgICAgICAgc3BlYy50aW1lY29kZSA9IHRpbWVjb2RlO1xuICAgICAgICAgICAgcHJvdmlkZXIudHJpZ2dlcihDT05URU5UX1RJTUVfTU9ERV9DSEFOR0VELCB0aW1lY29kZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoYXQuaXNUaW1lY29kZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzcGVjLnRpbWVjb2RlO1xuICAgIH07XG4gICAgdGhhdC5nZXRSdG1wQnVmZmVyVGltZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNwZWMucnRtcEJ1ZmZlclRpbWU7XG4gICAgfTtcbiAgICB0aGF0LmdldFJ0bXBCdWZmZXJUaW1lTWF4ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3BlYy5ydG1wQnVmZmVyVGltZU1heDtcbiAgICB9O1xuXG4gICAgdGhhdC5pc011dGUgPSAoKSA9PntcbiAgICAgICAgcmV0dXJuIHNwZWMubXV0ZTtcbiAgICB9O1xuICAgIHRoYXQuZ2V0Vm9sdW1lID0gKCkgPT57XG4gICAgICAgIHJldHVybiBzcGVjLnZvbHVtZTtcbiAgICB9O1xuICAgIHRoYXQuc2V0Vm9sdW1lID0gKHZvbHVtZSkgPT57XG4gICAgICAgIHNwZWMudm9sdW1lID0gdm9sdW1lO1xuICAgIH07XG4gICAgdGhhdC5pc0xvb3AgPSAoKSA9PntcbiAgICAgICAgcmV0dXJuIHNwZWMubG9vcDtcbiAgICB9O1xuICAgIHRoYXQuaXNBdXRvU3RhcnQgPSAoKSA9PntcbiAgICAgICAgcmV0dXJuIHNwZWMuYXV0b1N0YXJ0O1xuICAgIH07XG4gICAgdGhhdC5pc0NvbnRyb2xzID0gKCkgPT57XG4gICAgICAgIHJldHVybiBzcGVjLmNvbnRyb2xzO1xuICAgIH07XG5cbiAgICB0aGF0LmdldFBsYXliYWNrUmF0ZXMgPSgpPT57XG4gICAgICAgIHJldHVybiBzcGVjLnBsYXliYWNrUmF0ZXM7XG4gICAgfTtcbiAgICB0aGF0LmdldEJyb3dzZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzcGVjLmJyb3dzZXI7XG4gICAgfTtcbiAgICB0aGF0LmdldFN5c3RlbVRleHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzcGVjLnN5c3RlbVRleHQ7XG4gICAgfTtcbiAgICB0aGF0LmdldExhbmd1YWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3BlYy5sYW5nO1xuICAgIH07XG5cbiAgICB0aGF0LmdldFBsYXlsaXN0ID0oKT0+e1xuICAgICAgICByZXR1cm4gc3BlYy5wbGF5bGlzdDtcbiAgICB9O1xuICAgIHRoYXQuc2V0UGxheWxpc3QgPShwbGF5bGlzdCk9PntcbiAgICAgICAgaWYoXy5pc0FycmF5KHBsYXlsaXN0KSl7XG4gICAgICAgICAgICBzcGVjLnBsYXlsaXN0ID0gcGxheWxpc3Q7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc3BlYy5wbGF5bGlzdCA9IFtwbGF5bGlzdF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwZWMucGxheWxpc3Q7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGF0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJhdG9yO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gMy4uXG4gKi9cblxuLyoqXG4gKiBAYnJpZWYgICBUaGlzIG1vZHVsZSBwcm92aWRlIGN1c3RvbSBldmVudHMuXG4gKiBAcGFyYW0gICBvYmplY3QgICAgQW4gb2JqZWN0IHRoYXQgcmVxdWlyZXMgY3VzdG9tIGV2ZW50cy5cbiAqXG4gKiAqL1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSBmdW5jdGlvbihvYmplY3Qpe1xuICAgIGxldCB0aGF0ID0gb2JqZWN0O1xuICAgIGxldCBfZXZlbnRzID1bXTtcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudHMgPSBmdW5jdGlvbihldmVudHMsIGFyZ3MsIGNvbnRleHQpe1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBsZW5ndGggPSBldmVudHMubGVuZ3RoO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKyspe1xuICAgICAgICAgICAgbGV0IGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgICAgICAgICAgZXZlbnQubGlzdGVuZXIuYXBwbHkoICggZXZlbnQuY29udGV4dCB8fCBjb250ZXh0ICksIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoYXQub24gPSBmdW5jdGlvbihuYW1lLCBsaXN0ZW5lciwgY29udGV4dCl7XG4gICAgICAgIChfZXZlbnRzW25hbWVdIHx8IChfZXZlbnRzW25hbWVdPVtdKSApLnB1c2goeyBsaXN0ZW5lcjogbGlzdGVuZXIgICwgY29udGV4dCA6IGNvbnRleHR9KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgfTtcbiAgICB0aGF0LnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgaWYoIV9ldmVudHMpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IF9ldmVudHNbbmFtZV07XG4gICAgICAgIGNvbnN0IGFsbEV2ZW50cyA9IF9ldmVudHMuYWxsO1xuXG4gICAgICAgIGlmKGV2ZW50cyl7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnRzKGV2ZW50cywgYXJncywgdGhhdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoYWxsRXZlbnRzKXtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudHMoYWxsRXZlbnRzLCBhcmd1bWVudHMsIHRoYXQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGF0Lm9mZiA9IGZ1bmN0aW9uKG5hbWUsIGxpc3RlbmVyLCBjb250ZXh0KXtcbiAgICAgICAgaWYoIV9ldmVudHMpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuYW1lICYmICFsaXN0ZW5lciAmJiAhY29udGV4dCkgIHtcbiAgICAgICAgICAgIF9ldmVudHMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmFtZXMgPSBuYW1lID8gW25hbWVdIDogT2JqZWN0LmtleXMoX2V2ZW50cyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBuYW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IF9ldmVudHNbbmFtZV07XG4gICAgICAgICAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0YWluID0gX2V2ZW50c1tuYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciAgfHwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgayA9IGV2ZW50cy5sZW5ndGg7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChsaXN0ZW5lciAmJiBsaXN0ZW5lciAhPT0gZXZlbnQubGlzdGVuZXIgJiYgbGlzdGVuZXIgIT09IGV2ZW50Lmxpc3RlbmVyLmxpc3RlbmVyICAmJiBsaXN0ZW5lciAhPT0gZXZlbnQubGlzdGVuZXIuX2xpc3RlbmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8KGNvbnRleHQgJiYgY29udGV4dCAhPT0gZXZlbnQuY29udGV4dClcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbi5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXJldGFpbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF9ldmVudHNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgIH07XG4gICAgdGhhdC5vbmNlID0gZnVuY3Rpb24obmFtZSwgbGlzdGVuZXIsIGNvbnRleHQpe1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBvbmNlQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjb3VudCsrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5vZmYobmFtZSwgb25jZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIG9uY2VDYWxsYmFjay5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgcmV0dXJuIHRoYXQub24obmFtZSwgb25jZUNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoYXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlcjtcbiIsImltcG9ydCBfIGZyb20gJ3V0aWxzL3VuZGVyc2NvcmUnO1xuXG4vKipcbiAqIEBicmllZiAgIFRoaXMgZXhlY3V0ZXMgdGhlIGlucHV0IGNvbW1hbmRzIGF0IGEgc3BlY2lmaWMgcG9pbnQgaW4gdGltZS5cbiAqIEBwYXJhbSAgIGluc3RhbmNlXG4gKiBAcGFyYW0gICBxdWV1ZWRDb21tYW5kc1xuICogKi9cbmNvbnN0IExhenlDb21tYW5kRXhlY3V0b3IgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIHF1ZXVlZENvbW1hbmRzKSB7XG4gICAgbGV0IGNvbW1hbmRRdWV1ZSA9IFtdO1xuICAgIGxldCB1bmRlY29yYXRlZE1ldGhvZHMgPSB7fTtcbiAgICBsZXQgZXhlY3V0ZU1vZGUgPSBmYWxzZTtcbiAgICBsZXQgdGhhdCA9IHt9O1xuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgbG9hZGVkLlwiKTtcbiAgICBxdWV1ZWRDb21tYW5kcy5mb3JFYWNoKChjb21tYW5kKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGluc3RhbmNlW2NvbW1hbmRdO1xuICAgICAgICB1bmRlY29yYXRlZE1ldGhvZHNbY29tbWFuZF0gPSBtZXRob2QgfHwgZnVuY3Rpb24oKXt9O1xuXG4gICAgICAgIGluc3RhbmNlW2NvbW1hbmRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgICAgICAgaWYgKCFleGVjdXRlTW9kZSkge1xuICAgICAgICAgICAgICAgIC8vY29tbWFuZFF1ZXVlLnB1c2goeyBjb21tYW5kLCBhcmdzIH0pO1xuICAgICAgICAgICAgICAgIHRoYXQuYWRkUXVldWUoY29tbWFuZCwgYXJncylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0ZVF1ZXVlZENvbW1hbmRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QuYXBwbHkodGhhdCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHZhciBleGVjdXRlUXVldWVkQ29tbWFuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlIChjb21tYW5kUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb21tYW5kLCBhcmdzIH0gPSBjb21tYW5kUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICh1bmRlY29yYXRlZE1ldGhvZHNbY29tbWFuZF0gfHwgaW5zdGFuY2VbY29tbWFuZF0pLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoYXQuc2V0RXhlY3V0ZU1vZGUgPSAobW9kZSkgPT4ge1xuICAgICAgICBleGVjdXRlTW9kZSA9IG1vZGU7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgOiBzZXRFeGVjdXRlTW9kZSgpXCIsIG1vZGUpO1xuICAgIH07XG4gICAgdGhhdC5nZXRVbmRlY29yYXRlZE1ldGhvZHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJMYXp5Q29tbWFuZEV4ZWN1dG9yIDogZ2V0VW5kZWNvcmF0ZWRNZXRob2RzKClcIiwgdW5kZWNvcmF0ZWRNZXRob2RzKTtcbiAgICAgICAgcmV0dXJuIHVuZGVjb3JhdGVkTWV0aG9kcztcbiAgICB9XG4gICAgdGhhdC5nZXRRdWV1ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgOiBnZXRRdWV1ZSgpXCIsIGdldFF1ZXVlKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmRRdWV1ZTtcbiAgICB9XG4gICAgdGhhdC5hZGRRdWV1ZSA9IGZ1bmN0aW9uKGNvbW1hbmQsIGFyZ3Mpe1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJMYXp5Q29tbWFuZEV4ZWN1dG9yIDogYWRkUXVldWUoKVwiLCBjb21tYW5kLCBhcmdzKTtcbiAgICAgICAgY29tbWFuZFF1ZXVlLnB1c2goeyBjb21tYW5kLCBhcmdzIH0pO1xuICAgIH1cblxuICAgIHRoYXQuZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJMYXp5Q29tbWFuZEV4ZWN1dG9yIDogZmx1c2goKVwiKTtcbiAgICAgICAgZXhlY3V0ZVF1ZXVlZENvbW1hbmRzKCk7XG4gICAgfTtcbiAgICB0aGF0LmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgOiBlbXB0eSgpXCIpO1xuICAgICAgICBjb21tYW5kUXVldWUubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIHRoYXQub2ZmID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgOiBvZmYoKVwiKTtcbiAgICAgICAgcXVldWVkQ29tbWFuZHMuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gdW5kZWNvcmF0ZWRNZXRob2RzW2NvbW1hbmRdO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlW2NvbW1hbmRdID0gbWV0aG9kO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB1bmRlY29yYXRlZE1ldGhvZHNbY29tbWFuZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuICAgIC8vUnVuIG9uY2UgYXQgdGhlIGVuZFxuICAgIHRoYXQucmVtb3ZlQW5kRXhjdXRlT25jZSA9IGZ1bmN0aW9uKGNvbW1hbmRfKXtcbiAgICAgICAgbGV0IGNvbW1hbmRRdWV1ZUl0ZW0gPSBfLmZpbmRXaGVyZShjb21tYW5kUXVldWUsIHtjb21tYW5kIDogY29tbWFuZF99KTtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTGF6eUNvbW1hbmRFeGVjdXRvciA6IHJlbW92ZUFuZEV4Y3V0ZU9uY2UoKVwiLCBjb21tYW5kXyk7XG4gICAgICAgIGNvbW1hbmRRdWV1ZS5zcGxpY2UoXy5maW5kSW5kZXgoY29tbWFuZFF1ZXVlLCB7Y29tbWFuZCA6IGNvbW1hbmRffSksIDEpO1xuXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHVuZGVjb3JhdGVkTWV0aG9kc1tjb21tYW5kX107XG4gICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcInJlbW92ZUNvbW1hbmQoKVwiKTtcbiAgICAgICAgICAgIGlmKGNvbW1hbmRRdWV1ZUl0ZW0pe1xuICAgICAgICAgICAgICAgIChtZXRob2R8fCBpbnN0YW5jZVtjb21tYW5kX10pLmFwcGx5KGluc3RhbmNlLCBjb21tYW5kUXVldWVJdGVtLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5zdGFuY2VbY29tbWFuZF9dID0gbWV0aG9kO1xuICAgICAgICAgICAgZGVsZXRlIHVuZGVjb3JhdGVkTWV0aG9kc1tjb21tYW5kX107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhhdC5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIkxhenlDb21tYW5kRXhlY3V0b3IgOiBkZXN0cm95KClcIik7XG4gICAgICAgIHRoYXQub2ZmKCk7XG4gICAgICAgIHRoYXQuZW1wdHkoKTtcbiAgICB9O1xuICAgIHJldHVybiB0aGF0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5Q29tbWFuZEV4ZWN1dG9yOyIsImltcG9ydCB7aXNSdG1wLCBpc1dlYlJUQywgaXNEYXNoLCBpc0hsc30gZnJvbSBcInV0aWxzL3ZhbGlkYXRvclwiO1xuaW1wb3J0IHthbmFsVXNlckFnZW50fSBmcm9tIFwidXRpbHMvYnJvd3NlclwiO1xuLyoqXG4gKiBAYnJpZWYgICBUaGlzIGZpbmRzIHRoZSBwcm92aWRlciB0aGF0IG1hdGNoZXMgdGhlIGlucHV0IHNvdXJjZS5cbiAqIEBwYXJhbVxuICogKi9cblxuY29uc3QgU3VwcG9ydENoZWNrZXIgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHRoYXQgPSB7fTtcbiAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJTdXBwb3J0Q2hlY2tlciBsb2FkZWQuXCIpO1xuICAgIGxldCB1c2VyQWdlbnRPYmplY3QgPSBhbmFsVXNlckFnZW50KCk7XG5cbiAgICBjb25zdCBzdXBwb3J0TGlzdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2h0bWw1JyxcbiAgICAgICAgICAgIGNoZWNrU3VwcG9ydDogZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IE1pbWVUeXBlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWFjOiAnYXVkaW8vbXA0JyxcbiAgICAgICAgICAgICAgICAgICAgbXA0OiAndmlkZW8vbXA0JyxcbiAgICAgICAgICAgICAgICAgICAgZjR2OiAndmlkZW8vbXA0JyxcbiAgICAgICAgICAgICAgICAgICAgbTR2OiAndmlkZW8vbXA0JyxcbiAgICAgICAgICAgICAgICAgICAgbW92OiAndmlkZW8vbXA0JyxcbiAgICAgICAgICAgICAgICAgICAgbXAzOiAnYXVkaW8vbXBlZycsXG4gICAgICAgICAgICAgICAgICAgIG1wZWc6ICdhdWRpby9tcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgb2d2OiAndmlkZW8vb2dnJyxcbiAgICAgICAgICAgICAgICAgICAgb2dnOiAndmlkZW8vb2dnJyxcbiAgICAgICAgICAgICAgICAgICAgb2dhOiAndmlkZW8vb2dnJyxcbiAgICAgICAgICAgICAgICAgICAgdm9yYmlzOiAndmlkZW8vb2dnJyxcbiAgICAgICAgICAgICAgICAgICAgd2VibTogJ3ZpZGVvL3dlYm0nLFxuICAgICAgICAgICAgICAgICAgICBmNGE6ICd2aWRlby9hYWMnLFxuICAgICAgICAgICAgICAgICAgICBtM3U4OiAnYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmwnLFxuICAgICAgICAgICAgICAgICAgICBtM3U6ICdhcHBsaWNhdGlvbi92bmQuYXBwbGUubXBlZ3VybCcsXG4gICAgICAgICAgICAgICAgICAgIGhsczogJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5tcGVndXJsJ1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlbyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpXG4gICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIGlmICghdmlkZW8uY2FuUGxheVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IHNvdXJjZS5maWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzb3VyY2UudHlwZTtcblxuICAgICAgICAgICAgICAgIGlmKCF0eXBlKXtyZXR1cm4gZmFsc2U7fVxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbWVUeXBlID0gc291cmNlLm1pbWVUeXBlIHx8IE1pbWVUeXBlc1t0eXBlXTtcblxuICAgICAgICAgICAgICAgIGlmKGlzSGxzKGZpbGUsIHR5cGUpICYmIHVzZXJBZ2VudE9iamVjdC5icm93c2VyID09PSBcIk1pY3Jvc29mdCBFZGdlXCIgKXtcbiAgICAgICAgICAgICAgICAgICAgLy9FZGdlIHN1cHBvcnRzIGhscyBuYXRpdmUgYnV0IHRoYXQncyBzdWNrcy5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc1J0bXAoZmlsZSwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGlzV2ViUlRDKGZpbGUsIHR5cGUpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbWltZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAhIXZpZGVvLmNhblBsYXlUeXBlKG1pbWVUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3dlYnJ0YycsXG4gICAgICAgICAgICBjaGVja1N1cHBvcnQ6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlbyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpXG4gICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIGlmICghdmlkZW8uY2FuUGxheVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNSdG1wKGZpbGUsIHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gc291cmNlLmZpbGU7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHNvdXJjZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgaWYoaXNXZWJSVEMoZmlsZSwgdHlwZSkpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2Rhc2gnLFxuICAgICAgICAgICAgY2hlY2tTdXBwb3J0OiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IHNvdXJjZS5maWxlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHNvdXJjZS50eXBlO1xuICAgICAgICAgICAgICAgIGlmIChpc1J0bXAoZmlsZSwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKCB3aW5kb3cuTWVkaWFTb3VyY2UgfHwgd2luZG93LldlYktpdE1lZGlhU291cmNlICkgPT09IFwiZnVuY3Rpb25cIiAmJiBpc0Rhc2goZmlsZSwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdobHMnLFxuICAgICAgICAgICAgY2hlY2tTdXBwb3J0OiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKVxuICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gc291cmNlLmZpbGU7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHNvdXJjZS50eXBlO1xuICAgICAgICAgICAgICAgIGlmIChpc1J0bXAoZmlsZSwgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vdGhpcyBtZXRob2QgZnJvbSBobHMuanNcbiAgICAgICAgICAgICAgICBjb25zdCBpc0hsc1N1cHBvcnQgPSAoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldE1lZGlhU291cmNlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5NZWRpYVNvdXJjZSB8fCB3aW5kb3cuV2ViS2l0TWVkaWFTb3VyY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lZGlhU291cmNlID0gZ2V0TWVkaWFTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZUJ1ZmZlciA9IHdpbmRvdy5Tb3VyY2VCdWZmZXIgfHwgd2luZG93LldlYktpdFNvdXJjZUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzVHlwZVN1cHBvcnRlZCA9IG1lZGlhU291cmNlICYmIHR5cGVvZiBtZWRpYVNvdXJjZS5pc1R5cGVTdXBwb3J0ZWQgPT09ICdmdW5jdGlvbicgJiYgbWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKCd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNDJFMDFFLG1wNGEuNDAuMlwiJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgU291cmNlQnVmZmVyIGlzIGV4cG9zZWQgZW5zdXJlIGl0cyBBUEkgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgLy8gc2FmYXJpIGFuZCBvbGQgdmVyc2lvbiBvZiBDaHJvbWUgZG9lIG5vdCBleHBvc2UgU291cmNlQnVmZmVyIGdsb2JhbGx5IHNvIGNoZWNraW5nIFNvdXJjZUJ1ZmZlci5wcm90b3R5cGUgaXMgaW1wb3NzaWJsZVxuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlQnVmZmVyVmFsaWRBUEkgPSAhc291cmNlQnVmZmVyIHx8IHNvdXJjZUJ1ZmZlci5wcm90b3R5cGUgJiYgdHlwZW9mIHNvdXJjZUJ1ZmZlci5wcm90b3R5cGUuYXBwZW5kQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzb3VyY2VCdWZmZXIucHJvdG90eXBlLnJlbW92ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhaXNUeXBlU3VwcG9ydGVkICYmICEhc291cmNlQnVmZmVyVmFsaWRBUEk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvL1JlbW92ZSB0aGlzICchIXZpZGVvLmNhblBsYXlUeXBlKCdhcHBsaWNhdGlvbi92bmQuYXBwbGUubXBlZ3VybCcpJyBpZiB5b3Ugd2FudCB0byB1c2UgaGxzanMuXG4gICAgICAgICAgICAgICAgLy9ZZXMgSSBuZWVkIGhsc2pzLiAyMDE5LTA2LTEyICYmICEhdmlkZW8uY2FuUGxheVR5cGUoJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5tcGVndXJsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzSGxzU3VwcG9ydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncnRtcCcsXG4gICAgICAgICAgICBjaGVja1N1cHBvcnQ6IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gc291cmNlLmZpbGU7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHNvdXJjZS50eXBlO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRlc3RGbGFzaCgpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VwcG9ydCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vSUUgb25seVxuICAgICAgICAgICAgICAgICAgICBpZihcIkFjdGl2ZVhPYmplY3RcIiBpbiB3aW5kb3cpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnQgPSAhIShuZXcgQWN0aXZlWE9iamVjdChcIlNob2Nrd2F2ZUZsYXNoLlNob2Nrd2F2ZUZsYXNoXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVzNDLCBiZXR0ZXIgc3VwcG9ydCBpbiBsZWdhY3kgYnJvd3NlclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ID0gISFuYXZpZ2F0b3IubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja1N1cHBvcnQoKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlckFnZW50T2JqZWN0LmJyb3dzZXIgPT09IFwiTWljcm9zb2Z0IEVkZ2VcIiB8fCB1c2VyQWdlbnRPYmplY3Qub3MgPT09IFwiQW5kcm9pZFwiIHx8IHVzZXJBZ2VudE9iamVjdC5vcyA9PT0gXCJpT1NcIiAgfHwgdXNlckFnZW50T2JqZWN0LmJyb3dzZXIgPT09IFwiU2FmYXJpXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1J0bXAoZmlsZSwgdHlwZSkgJiYgdGVzdEZsYXNoKCkgJiYgY2hlY2tTdXBwb3J0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgdGhhdC5maW5kUHJvdmlkZXJOYW1lQnlTb3VyY2UgPSAoc29ydWNlXykgPT4ge1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJTdXBwb3J0Q2hlY2tlciA6IGZpbmRQcm92aWRlck5hbWVCeVNvdXJjZSgpXCIsIHNvcnVjZV8pO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSAoc29ydWNlXyA9PT0gT2JqZWN0KHNvcnVjZV8pKSA/IHNvcnVjZV8gOiB7fTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN1cHBvcnRMaXN0Lmxlbmd0aDsgaSArKyl7XG4gICAgICAgICAgICBpZihzdXBwb3J0TGlzdFtpXS5jaGVja1N1cHBvcnQoc291cmNlKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRMaXN0W2ldLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoYXQuZmluZFByb3ZpZGVyTmFtZXNCeVBsYXlsaXN0ID0gKHBsYXlsaXN0SXRlbSkgPT4ge1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJTdXBwb3J0Q2hlY2tlciA6IGZpbmRQcm92aWRlck5hbWVzQnlQbGF5bGlzdCgpXCIsIHBsYXlsaXN0SXRlbSk7XG4gICAgICAgIGxldCBzdXBwb3J0TmFtZXMgPSBbXTtcbiAgICAgICAgLypmb3IgKGxldCBpID0gcGxheWxpc3RfLmxlbmd0aDsgaS0tOykge1xuXG5cbiAgICAgICAgfSovXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBwbGF5bGlzdEl0ZW07XG5cbiAgICAgICAgaWYoaXRlbSAmJiBpdGVtLnNvdXJjZXMpe1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGl0ZW0uc291cmNlcy5sZW5ndGg7IGogKyspe1xuICAgICAgICAgICAgICAgIGxldCBzb3VyY2UgPSBpdGVtLnNvdXJjZXNbal07XG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXBwb3J0ZWQgPSB0aGF0LmZpbmRQcm92aWRlck5hbWVCeVNvdXJjZShzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0TmFtZXMucHVzaChzdXBwb3J0ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydE5hbWVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgfTtcbiAgICByZXR1cm4gdGhhdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1cHBvcnRDaGVja2VyO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gNC4uXG4gKi9cbmltcG9ydCBTcnRQYXJzZXIgZnJvbSBcImFwaS9jYXB0aW9uL3BhcnNlci9TcnRQYXJzZXJcIjtcbmltcG9ydCBWVFRDdWUgZnJvbSBcInV0aWxzL2NhcHRpb25zL3Z0dEN1ZVwiO1xuLy9pbXBvcnQgUmVxdWVzdCBmcm9tIFwidXRpbHMvZG93bmxvYWRlclwiO1xuXG5jb25zdCBMb2FkZXIgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHRoYXQgPSB7fTtcblxuICAgIGNvbnN0IGNvbnZlcnRUb1ZUVEN1ZXMgPSBmdW5jdGlvbiAoY3Vlcykge1xuICAgICAgICByZXR1cm4gY3Vlcy5tYXAoY3VlID0+IG5ldyBWVFRDdWUoY3VlLnN0YXJ0LCBjdWUuZW5kLCBjdWUudGV4dCkpO1xuICAgIH1cbiAgICAvL2xhbmd1YWdlIDogZm9yIFNNSSBmb3JtYXQuXG4gICAgdGhhdC5sb2FkID0gKHRyYWNrLCBsYW5ndWFnZSwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSA9PiB7XG5cbiAgICAgICAgdmFyIHJlcXVlc3RPcHRpb25zICA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHVybCA6IHRyYWNrLmZpbGUsXG4gICAgICAgICAgICBlbmNvZGluZzogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGxvYWRSZXF1ZXN0RG93bmxvZGVyKCkudGhlbihSZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgIFJlcXVlc3QocmVxdWVzdE9wdGlvbnMsIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICAgICAgICAgIGlmKGVycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdWVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxldCB2dHRDdWVzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHkuaW5kZXhPZignV0VCVlRUJykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiV0VCVlRUIExPQURFRFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRWdHRQYXJzZXIoKS50aGVuKFdlYlZUVCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBXZWJWVFQuUGFyc2VyKHdpbmRvdywgV2ViVlRULlN0cmluZ0RlY29kZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnR0Q3VlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5vbmN1ZSA9IGZ1bmN0aW9uKGN1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2dHRDdWVzLnB1c2goY3VlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlci5vbmZsdXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlIHRyYWNrLnhocjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHZ0dEN1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgY2FsbHMgb25mbHVzaCBpbnRlcm5hbGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VyLnBhcnNlKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlIHRyYWNrLnhocjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihib2R5LmluZGV4T2YoJ1NBTUknKSA+PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIlNBTUkgTE9BREVEXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFNtaVBhcnNlcigpLnRoZW4oU21pUGFyc2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkRGF0YSA9IFNtaVBhcnNlcihib2R5LCB7Zml4ZWRMYW5nIDogbGFuZ3VhZ2V9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2dHRDdWVzID0gY29udmVydFRvVlRUQ3VlcyhwYXJzZWREYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHZ0dEN1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlIHRyYWNrLnhocjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJTUlQgTE9BREVEXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VlcyA9IFNydFBhcnNlcihib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ0dEN1ZXMgPSBjb252ZXJ0VG9WVFRDdWVzKGN1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHZ0dEN1ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy9kZWxldGUgdHJhY2sueGhyO1xuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhhdDtcbn07XG5mdW5jdGlvbiBsb2FkUmVxdWVzdERvd25sb2Rlcigpe1xuICAgIHJldHVybiByZXF1aXJlLmVuc3VyZShbJ3V0aWxzL2Rvd25sb2FkZXInXSwgZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoJ3V0aWxzL2Rvd25sb2FkZXInKS5kZWZhdWx0O1xuICAgIH0sIGZ1bmN0aW9uKGVycil7Y29uc29sZS5sb2coZXJyKTt9LCAnZG93bmxvYWRlcicpO1xufTtcbmZ1bmN0aW9uIGxvYWRWdHRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUuZW5zdXJlKFsnYXBpL2NhcHRpb24vcGFyc2VyL1Z0dFBhcnNlciddLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZSgnYXBpL2NhcHRpb24vcGFyc2VyL1Z0dFBhcnNlcicpLmRlZmF1bHQ7XG4gICAgfSwgZnVuY3Rpb24oZXJyKXtjb25zb2xlLmxvZyhlcnIpO30sICd2dHRwYXJzZXInKTtcbn1cbmZ1bmN0aW9uIGxvYWRTbWlQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUuZW5zdXJlKFsnYXBpL2NhcHRpb24vcGFyc2VyL1NtaVBhcnNlciddLCBmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZSgnYXBpL2NhcHRpb24vcGFyc2VyL1NtaVBhcnNlcicpLmRlZmF1bHQ7XG4gICAgfSwgZnVuY3Rpb24oZXJyKXtjb25zb2xlLmxvZyhlcnIpO30sICdzbWlwYXJzZXInKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBob2hvIG9uIDIwMTguIDUuIDE3Li5cbiAqL1xuaW1wb3J0IENhcHRpb25Mb2FkZXIgZnJvbSAnYXBpL2NhcHRpb24vTG9hZGVyJztcbmltcG9ydCB7UkVBRFksIEVSUk9SUywgRVJST1IsIFBMQVlFUl9DQVBUSU9OX0VSUk9SLCBDT05URU5UX01FVEEsIENPTlRFTlRfVElNRSwgQ09OVEVOVF9DQVBUSU9OX0NVRV9DSEFOR0VELCBDT05URU5UX0NBUFRJT05fQ0hBTkdFRH0gZnJvbSBcImFwaS9jb25zdGFudHNcIjtcbmltcG9ydCBfIGZyb20gXCJ1dGlscy91bmRlcnNjb3JlXCI7XG5cbmNvbnN0IGlzU3VwcG9ydCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIHJldHVybiBraW5kID09PSAnc3VidGl0bGVzJyB8fCBraW5kID09PSAnY2FwdGlvbnMnO1xufTtcblxuY29uc3QgTWFuYWdlciA9IGZ1bmN0aW9uKGFwaSwgcGxheWxpc3RJbmRleCl7XG5cbiAgICBjb25zdCB0aGF0ID0ge307XG4gICAgbGV0IGNhcHRpb25MaXN0ID0gW107XG4gICAgbGV0IGN1cnJlbnRDYXB0aW9uSW5kZXggPSAtMTtcblxuICAgIGxldCBjYXB0aW9uTG9hZGVyID0gQ2FwdGlvbkxvYWRlcigpO1xuICAgIGxldCBpc0Zpc3J0TG9hZCA9IHRydWU7XG4gICAgbGV0IGlzU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiQ2FwdGlvbiBNYW5hZ2VyID4+IFwiLCBwbGF5bGlzdEluZGV4KTtcblxuXG4gICAgbGV0IGJpbmRUcmFjayA9IGZ1bmN0aW9uKHRyYWNrLCB2dHRDdWVzKXtcbiAgICAgICAgdHJhY2suZGF0YSA9IHZ0dEN1ZXMgfHwgW107XG4gICAgICAgIHRyYWNrLm5hbWUgPSB0cmFjay5sYWJlbCB8fCB0cmFjay5uYW1lIHx8IHRyYWNrLmxhbmd1YWdlO1xuICAgICAgICB0cmFjay5pZCA9IChmdW5jdGlvbih0cmFjaywgdHJhY2tzQ291bnQpIHtcbiAgICAgICAgICAgIHZhciB0cmFja0lkO1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHRyYWNrLmtpbmQgfHwgJ2NjJztcbiAgICAgICAgICAgIGlmICh0cmFjay5kZWZhdWx0IHx8IHRyYWNrLmRlZmF1bHR0cmFjaykge1xuICAgICAgICAgICAgICAgIHRyYWNrSWQgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhY2tJZCA9IHRyYWNrLmlkIHx8IChwcmVmaXggKyB0cmFja3NDb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpc0Zpc3J0TG9hZCl7XG4gICAgICAgICAgICAgICAgLy9UaGlzIGV4ZWN1dGUgb25seSBvbi4gYW5kIHRoZW4gdXNlIGZsdXNoQ2FwdGlvbkxpc3QobGFzdENhcHRpb25JbmRleCk7XG4gICAgICAgICAgICAgICAgY2hhbmdlQ3VycmVudENhcHRpb24oY2FwdGlvbkxpc3QubGVuZ3RofHwwKTtcbiAgICAgICAgICAgICAgICBpc0Zpc3J0TG9hZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJhY2tJZDtcbiAgICAgICAgfSkodHJhY2ssIGNhcHRpb25MaXN0Lmxlbmd0aCk7XG5cbiAgICAgICAgY2FwdGlvbkxpc3QucHVzaCh0cmFjayk7XG4gICAgICAgIHJldHVybiB0cmFjay5pZDtcbiAgICB9O1xuICAgIGxldCBjaGFuZ2VDdXJyZW50Q2FwdGlvbiA9IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgY3VycmVudENhcHRpb25JbmRleCA9IGluZGV4O1xuICAgICAgICBhcGkudHJpZ2dlcihDT05URU5UX0NBUFRJT05fQ0hBTkdFRCwgY3VycmVudENhcHRpb25JbmRleCk7XG4gICAgfTtcbiAgICBpZihhcGkuZ2V0Q29uZmlnKCkucGxheWxpc3QgJiYgYXBpLmdldENvbmZpZygpLnBsYXlsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICBsZXQgcGxheWxpc3QgPSBhcGkuZ2V0Q29uZmlnKCkucGxheWxpc3RbcGxheWxpc3RJbmRleF07XG5cbiAgICAgICAgaWYocGxheWxpc3QgJiYgcGxheWxpc3QudHJhY2tzICYmIHBsYXlsaXN0LnRyYWNrcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGF5bGlzdC50cmFja3MubGVuZ3RoOyBpICsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFjayA9IHBsYXlsaXN0LnRyYWNrc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmKGlzU3VwcG9ydCh0cmFjay5raW5kKSAmJiAhIF8uZmluZFdoZXJlKHRyYWNrLCB7ZmlsZSA6IHRyYWNrLmZpbGV9KSl7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhhdC5mbHVzaENhcHRpb25MaXN0KGN1cnJlbnRDYXB0aW9uSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uTG9hZGVyLmxvYWQodHJhY2ssIHRyYWNrLmxhbmcsIGZ1bmN0aW9uKHZ0dEN1ZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodnR0Q3VlcyAmJiB2dHRDdWVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXB0aW9uSWQgPSBiaW5kVHJhY2sodHJhY2ssIHZ0dEN1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcEVycm9yID0gRVJST1JTLmNvZGVzW1BMQVlFUl9DQVBUSU9OX0VSUk9SXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBFcnJvci5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnRyaWdnZXIoRVJST1IsIHRlbXBFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBpLm9uKENPTlRFTlRfVElNRSwgZnVuY3Rpb24obWV0YSl7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IG1ldGEucG9zaXRpb247XG4gICAgICAgIGlmKGN1cnJlbnRDYXB0aW9uSW5kZXggPiAtMSAmJiBjYXB0aW9uTGlzdFtjdXJyZW50Q2FwdGlvbkluZGV4XSl7XG4gICAgICAgICAgICBsZXQgY3VycmVudEN1ZXMgPSBfLmZpbHRlcihjYXB0aW9uTGlzdFtjdXJyZW50Q2FwdGlvbkluZGV4XS5kYXRhLCBmdW5jdGlvbiAoY3VlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uID49IChjdWUuc3RhcnRUaW1lKSAmJiAoICghY3VlLmVuZFRpbWUgfHwgcG9zaXRpb24pIDw9IGN1ZS5lbmRUaW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYoY3VycmVudEN1ZXMgJiYgY3VycmVudEN1ZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgYXBpLnRyaWdnZXIoQ09OVEVOVF9DQVBUSU9OX0NVRV9DSEFOR0VELCBjdXJyZW50Q3Vlc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuICAgIHRoYXQuZmx1c2hDYXB0aW9uTGlzdCA9IChsYXN0Q2FwdGlvbkluZGV4KSA9PntcbiAgICAgICAgY2FwdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgY2hhbmdlQ3VycmVudENhcHRpb24obGFzdENhcHRpb25JbmRleCk7XG4gICAgICAgIC8vY3VycmVudENhcHRpb25JbmRleCA9IGxhc3RDYXB0aW9uSW5kZXg7XG4gICAgfTtcbiAgICB0aGF0LmdldENhcHRpb25MaXN0ID0gKCkgPT57XG4gICAgICAgIHJldHVybiBjYXB0aW9uTGlzdHx8W107XG4gICAgfTtcbiAgICB0aGF0LmdldEN1cnJlbnRDYXB0aW9uID0gKCkgPT57XG4gICAgICAgIHJldHVybiBjdXJyZW50Q2FwdGlvbkluZGV4O1xuICAgIH07XG4gICAgdGhhdC5zZXRDdXJyZW50Q2FwdGlvbiA9IChfaW5kZXgpID0+e1xuICAgICAgICBpZihfaW5kZXggPiAtMiAmJiBfaW5kZXggPCBjYXB0aW9uTGlzdC5sZW5ndGgpe1xuICAgICAgICAgICAgY2hhbmdlQ3VycmVudENhcHRpb24oX2luZGV4KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhhdC5hZGRDYXB0aW9uID0gKHRyYWNrKSA9PntcbiAgICAgICAgaWYoaXNTdXBwb3J0KHRyYWNrLmtpbmQpICYmICEgXy5maW5kV2hlcmUoY2FwdGlvbkxvYWRlciwge2ZpbGUgOiB0cmFjay5maWxlfSkpe1xuICAgICAgICAgICAgY2FwdGlvbkxvYWRlci5sb2FkKHRyYWNrLCBmdW5jdGlvbih2dHRDdWVzKXtcbiAgICAgICAgICAgICAgICBpZih2dHRDdWVzICYmIHZ0dEN1ZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRUcmFjayh0cmFjaywgdnR0Q3Vlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wRXJyb3IgPSBlcnJvcnNbUExBWUVSX0NBUFRJT05fRVJST1JdO1xuICAgICAgICAgICAgICAgIHRlbXBFcnJvci5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIGFwaS50cmlnZ2VyKEVSUk9SLCB0ZW1wRXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoYXQucmVtb3ZlQ2FwdGlvbiA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZihpbmRleCA+IC0xICYmIGluZGV4IDwgY2FwdGlvbkxpc3QubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhcHRpb25MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gY2FwdGlvbkxpc3Q7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoYXQuZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgY2FwdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgY2FwdGlvbkxvYWRlciA9IG51bGw7XG4gICAgICAgIGFwaS5vZmYoQ09OVEVOVF9USU1FLCBudWxsLCB0aGF0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoYXQ7XG59O1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNS4gMjkuLlxuICovXG5pbXBvcnQgeyBobXNUb1NlY29uZCwgdHJpbSB9IGZyb20gXCJ1dGlscy9zdHJpbmdzXCJcblxuZnVuY3Rpb24gX2VudHJ5KGRhdGEpIHtcbiAgICB2YXIgZW50cnkgPSB7fTtcbiAgICB2YXIgYXJyYXkgPSBkYXRhLnNwbGl0KCdcXHJcXG4nKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGFycmF5ID0gZGF0YS5zcGxpdCgnXFxuJyk7XG4gICAgfVxuICAgIHZhciBpZHggPSAxO1xuICAgIGlmIChhcnJheVswXS5pbmRleE9mKCcgLS0+ICcpID4gMCkge1xuICAgICAgICBpZHggPSAwO1xuICAgIH1cbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gaWR4ICsgMSAmJiBhcnJheVtpZHggKyAxXSkge1xuICAgICAgICAvLyBUaGlzIGxpbmUgY29udGFpbnMgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gICAgICAgIHZhciBsaW5lID0gYXJyYXlbaWR4XTtcbiAgICAgICAgdmFyIGluZGV4ID0gbGluZS5pbmRleE9mKCcgLS0+ICcpO1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICBlbnRyeS5zdGFydCA9IGhtc1RvU2Vjb25kKGxpbmUuc3Vic3RyKDAsIGluZGV4KSk7XG4gICAgICAgICAgICBlbnRyeS5lbmQgPSBobXNUb1NlY29uZChsaW5lLnN1YnN0cihpbmRleCArIDUpKTtcbiAgICAgICAgICAgIGVudHJ5LnRleHQgPSBhcnJheS5zbGljZShpZHggKyAxKS5qb2luKCdcXHJcXG4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50cnk7XG5cbn1cblxuY29uc3QgU3J0UGFyc2VyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBjYXB0aW9ucyA9IFtdO1xuXG4gICAgZGF0YSA9IHRyaW0oZGF0YSk7XG5cbiAgICB2YXIgbGlzdCA9IGRhdGEuc3BsaXQoJ1xcclxcblxcclxcbicpO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBsaXN0ID0gZGF0YS5zcGxpdCgnXFxuXFxuJyk7XG4gICAgfVxuXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGlzdFtpXSA9PT0gJ1dFQlZUVCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IF9lbnRyeShsaXN0W2ldKTtcbiAgICAgICAgaWYgKGVudHJ5LnRleHQpIHtcbiAgICAgICAgICAgIGNhcHRpb25zLnB1c2goZW50cnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcHRpb25zO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgU3J0UGFyc2VyOyIsIi8vIFNUQVRFXG5leHBvcnQgY29uc3QgU1RBVEVfQlVGRkVSSU5HID0gXCJidWZmZXJpbmdcIjtcbmV4cG9ydCBjb25zdCBTVEFURV9JRExFID0gXCJpZGxlXCI7XG5leHBvcnQgY29uc3QgU1RBVEVfQ09NUExFVEUgPSBcImNvbXBsZXRlXCI7XG5leHBvcnQgY29uc3QgU1RBVEVfUEFVU0VEID0gXCJwYXVzZWRcIjtcbmV4cG9ydCBjb25zdCBTVEFURV9QTEFZSU5HID0gXCJwbGF5aW5nXCI7XG5leHBvcnQgY29uc3QgU1RBVEVfRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgU1RBVEVfTE9BRElORyA9IFwibG9hZGluZ1wiO1xuZXhwb3J0IGNvbnN0IFNUQVRFX1NUQUxMRUQgPSBcInN0YWxsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFNUQVRFX0FEX0xPQURJTkcgPSBcImFkTG9hZGluZ1wiO1xuZXhwb3J0IGNvbnN0IFNUQVRFX0FEX0xPQURFRCA9IFwiYWRMb2FkZWRcIjtcbmV4cG9ydCBjb25zdCBTVEFURV9BRF9QTEFZSU5HID0gXCJhZFBsYXlpbmdcIjtcbmV4cG9ydCBjb25zdCBTVEFURV9BRF9QQVVTRUQgPSBcImFkUGF1c2VkXCI7XG5leHBvcnQgY29uc3QgU1RBVEVfQURfQ09NUExFVEUgPSBcImFkQ29tcGxldGVcIjtcbmV4cG9ydCBjb25zdCBTVEFURV9BRF9FUlJPUiA9IFwiYWRFcnJvclwiO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9BRF9DTElDSyA9IFwiYWRjbGlja1wiO1xuXG4vLyBQUk9WSURFUlxuZXhwb3J0IGNvbnN0IFBST1ZJREVSX0hUTUw1ID0gXCJodG1sNVwiO1xuZXhwb3J0IGNvbnN0IFBST1ZJREVSX1dFQlJUQyA9IFwid2VicnRjXCI7XG5leHBvcnQgY29uc3QgUFJPVklERVJfREFTSCA9IFwiZGFzaFwiO1xuZXhwb3J0IGNvbnN0IFBST1ZJREVSX0hMUyA9IFwiaGxzXCI7XG5leHBvcnQgY29uc3QgUFJPVklERVJfUlRNUCA9IFwicnRtcFwiO1xuXG4vLyBFVkVOVFNcbmV4cG9ydCBjb25zdCBDT05URU5UX0NPTVBMRVRFID0gU1RBVEVfQ09NUExFVEU7XG5leHBvcnQgY29uc3QgUkVBRFkgPSBcInJlYWR5XCI7XG5leHBvcnQgY29uc3QgREVTVFJPWSA9IFwiZGVzdHJveVwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfU0VFSyA9IFwic2Vla1wiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfQlVGRkVSX0ZVTEwgPSBcImJ1ZmZlckZ1bGxcIjtcbmV4cG9ydCBjb25zdCBESVNQTEFZX0NMSUNLID0gXCJkaXNwbGF5Q2xpY2tcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0xPQURFRCA9IFwibG9hZGVkXCI7XG5leHBvcnQgY29uc3QgUExBWUxJU1RfQ0hBTkdFRCA9IFwicGxheWxpc3RDaGFuZ2VkXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9TRUVLRUQgPSBcInNlZWtlZFwiO1xuZXhwb3J0IGNvbnN0IEFMTF9QTEFZTElTVF9FTkRFRCA9IFwiYWxsUGxheWxpc3RFbmRlZFwiO1xuZXhwb3J0IGNvbnN0IE5FVFdPUktfVU5TVEFCTEVEID0gXCJ1bnN0YWJsZU5ldHdvcmtcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcblxuLy8gU1RBVEUgT0YgUExBWUVSXG5leHBvcnQgY29uc3QgUExBWUVSX1NUQVRFID0gXCJzdGF0ZUNoYW5nZWRcIjtcbmV4cG9ydCBjb25zdCBQTEFZRVJfQ09NUExFVEUgPSBTVEFURV9DT01QTEVURTtcbmV4cG9ydCBjb25zdCBQTEFZRVJfUEFVU0UgPSBcInBhdXNlXCI7XG5leHBvcnQgY29uc3QgUExBWUVSX1BMQVkgPSBcInBsYXlcIjtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9DTElDS0VEID0gXCJjbGlja2VkXCI7XG5leHBvcnQgY29uc3QgUExBWUVSX1JFU0laRUQgPSBcInJlc2l6ZWRcIjtcbmV4cG9ydCBjb25zdCBQTEFZRVJfTE9BRElORyA9IFwibG9hZGluZ1wiO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9GVUxMU0NSRUVOX1JFUVVFU1QgPSBcImZ1bGxzY3JlZW5SZXF1ZXN0ZWRcIjtcbmV4cG9ydCBjb25zdCBQTEFZRVJfRlVMTFNDUkVFTl9DSEFOR0VEID0gXCJmdWxsc2NyZWVuQ2hhbmdlZFwiO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9XQVJOSU5HID0gXCJ3YXJuaW5nXCI7XG5cbmV4cG9ydCBjb25zdCBBRF9DSEFOR0VEID0gXCJhZENoYW5nZWRcIjtcbmV4cG9ydCBjb25zdCBBRF9USU1FID0gXCJhZFRpbWVcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0JVRkZFUiA9IFwiYnVmZmVyQ2hhbmdlZFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVElNRSA9IFwidGltZVwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfUkFURV9DSEFOR0UgPSBcInJhdGVjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1ZPTFVNRSA9IFwidm9sdW1lQ2hhbmdlZFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTVVURSA9IFwibXV0ZVwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTUVUQSA9IFwibWV0YUNoYW5nZWRcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1NPVVJDRV9DSEFOR0VEID0gXCJzb3VyY2VDaGFuZ2VkXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9MRVZFTF9DSEFOR0VEID0gXCJxdWFsaXR5TGV2ZWxDaGFuZ2VkXCI7XG5leHBvcnQgY29uc3QgUExBWUJBQ0tfUkFURV9DSEFOR0VEID0gXCJwbGF5YmFja1JhdGVDaGFuZ2VkXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9DQVBUSU9OX0NVRV9DSEFOR0VEID0gXCJjdWVDaGFuZ2VkXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9DQVBUSU9OX0NIQU5HRUQgPSBcImNhcHRpb25DaGFuZ2VkXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9USU1FX01PREVfQ0hBTkdFRCA9IFwidGltZURpc3BsYXlNb2RlQ2hhbmdlZFwiO1xuZXhwb3J0IGNvbnN0IE9NRV9QMlBfTU9ERSA9IFwicDJwTW9kZVwiO1xuXG5cbmV4cG9ydCBjb25zdCBBRF9DTElFTlRfR09PR0xFSU1BID0gXCJnb29nbGVpbWFcIjtcbmV4cG9ydCBjb25zdCBBRF9DTElFTlRfVkFTVCA9IFwidmFzdFwiO1xuXG5cbmV4cG9ydCBjb25zdCBJTklUX1VOS05XT05fRVJST1IgPSAxMDA7XG5leHBvcnQgY29uc3QgSU5JVF9VTlNVUFBPUlRfRVJST1IgPSAxMDE7XG5leHBvcnQgY29uc3QgSU5JVF9SVE1QX1NFVFVQX0VSUk9SID0gMTAyO1xuZXhwb3J0IGNvbnN0IElOSVRfREFTSF9VTlNVUFBPUlQgPSAxMDM7XG5leHBvcnQgY29uc3QgSU5JVF9BRFNfRVJST1IgPSAxMDQ7XG5leHBvcnQgY29uc3QgSU5JVF9EQVNIX05PVEZPVU5EID0gMTA1O1xuZXhwb3J0IGNvbnN0IElOSVRfSExTSlNfTk9URk9VTkQgPSAxMDY7XG5leHBvcnQgY29uc3QgUExBWUVSX1VOS05XT05fRVJST1IgPSAzMDA7XG5leHBvcnQgY29uc3QgUExBWUVSX1VOS05XT05fT1BFUkFUSU9OX0VSUk9SID0gMzAxO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9VTktOV09OX05FV1dPUktfRVJST1IgPSAzMDI7XG5leHBvcnQgY29uc3QgUExBWUVSX1VOS05XT05fREVDT0RFX0VSUk9SID0gMzAzO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9GSUxFX0VSUk9SID0gMzA0O1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9DQVBUSU9OX0VSUk9SID0gMzA1O1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9XRUJSVENfV1NfRVJST1IgPSA1MDE7XG5leHBvcnQgY29uc3QgUExBWUVSX1dFQlJUQ19BRERfSUNFQ0FORElEQVRFX0VSUk9SID0gNTAyO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9XRUJSVENfU0VUX1JFTU9URV9ERVNDX0VSUk9SID0gNTAzO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9XRUJSVENfQ1JFQVRFX0FOU1dFUl9FUlJPUiA9IDUwNDtcbmV4cG9ydCBjb25zdCBQTEFZRVJfV0VCUlRDX1NFVF9MT0NBTF9ERVNDX0VSUk9SID0gNTA1O1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9XRUJSVENfTkVUV09SS19TTE9XID0gNTEwO1xuZXhwb3J0IGNvbnN0IFBMQVlFUl9XRUJSVENfVU5FWFBFQ1RFRF9ESVNDT05ORUNUID0gNTExO1xuXG5leHBvcnQgY29uc3QgV0FSTl9NU0dfTVVURURQTEFZID0gXCJQbGVhc2UgdG91Y2ggaGVyZSB0byB0dXJuIG9uIHRoZSBzb3VuZC5cIjtcblxuXG5leHBvcnQgY29uc3QgVUlfSUNPTlMgPSB7XG4gICAgdm9sdW1lX211dGUgOiBcInZvbHVtZS1tdXRlXCIsXG4gICAgb3Bfd2FybmluZyA6IFwib3Atd2FybmluZ1wiXG59O1xuXG5cbmV4cG9ydCBjb25zdCBFUlJPUlMgPSB7Y29kZXMgOiBcIlwifTtcblxuXG5leHBvcnQgY29uc3QgU1lTVEVNX1RFWFQgPSBbXG4gICAge1xuICAgICAgICBcImxhbmdcIiA6IFwiZW5cIixcbiAgICAgICAgXCJ1aVwiIDoge1xuICAgICAgICAgICAgXCJjb250ZXh0XCIgOiBcIkFib3V0IE92ZW5QbGF5ZXJcIixcbiAgICAgICAgICAgIFwiY29udHJvbHNcIiA6IHtcbiAgICAgICAgICAgICAgICBcImxpdmVcIiA6IFwibGl2ZVwiLFxuICAgICAgICAgICAgICAgIFwibG93X2xhdGVuY3lfbGl2ZVwiIDogXCJsb3cgbGF0ZW5jeSBsaXZlXCIsXG4gICAgICAgICAgICAgICAgXCJsb3dfbGF0ZW5jeV9wMnBcIiA6IFwibG93IGxhdGVuY3kgcDJwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwbGF5bGlzdFwiIDogXCJQbGF5bGlzdFwiLFxuICAgICAgICAgICAgXCJzZXR0aW5nXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiIDogXCJTZXR0aW5nc1wiLFxuICAgICAgICAgICAgICAgIFwic3BlZWRcIiA6IFwiU3BlZWRcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiIDogXCJTb3VyY2VcIixcbiAgICAgICAgICAgICAgICBcInF1YWxpdHlcIiA6IFwiUXVhbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwiY2FwdGlvblwiIDogXCJDYXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJkaXNwbGF5XCIgOiBcIkRpc3BsYXlcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFwaVwiIDoge1xuICAgICAgICAgICAgXCJtZXNzYWdlXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJtdXRlZF9wbGF5XCIgOiBcIlBsZWFzZSB0b3VjaCBoZXJlIHRvIHR1cm4gb24gdGhlIHNvdW5kLlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlcnJvclwiOiB7XG4gICAgICAgICAgICAgICAgMTAwOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkNhbiBub3QgbG9hZCBkdWUgdG8gdW5rbm93biByZWFzb25zLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIkNhbiBub3QgbG9hZCBkdWUgdG8gdW5rbm93biByZWFzb25zLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDE6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwMSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQ2FuIG5vdCBsb2FkIGR1ZSB0byB1bnN1cHBvcnRlZCBtZWRpYS5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJDYW4gbm90IGxvYWQgZHVlIHRvIHVuc3VwcG9ydGVkIG1lZGlhLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwMixcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiRmxhc2ggZmV0Y2hpbmcgcHJvY2VzcyBhYm9ydGVkLiA8L2JyPjxhIGhyZWY9J2h0dHA6Ly93d3cuYWRvYmUuY29tL2dvL2dldGZsYXNocGxheWVyJyB0YXJnZXQ9J19zZWxmJz48aW1nIHNyYz0naHR0cDovL3d3dy5hZG9iZS5jb20vaW1hZ2VzL3NoYXJlZC9kb3dubG9hZF9idXR0b25zL2dldF9mbGFzaF9wbGF5ZXIuZ2lmJyBhbHQ9J0dldCBBZG9iZSBGbGFzaCBwbGF5ZXInPjwvYT5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJJdCBsb29rcyBsaWtlIG5vdCBmb3VuZCBzd2Ygb3IgeW91ciBlbnZpcm9ubWVudCBpcyBsb2NhbGhvc3QuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEwMzoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogMTAzLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJDYW4gbm90IGxvYWQgZHVlIHRvIGRhc2hqcy4gUGxlYXNlIGNoZWNrIHRoZSBsYXN0ZXN0IHZlcnNpb24uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiZGFzaC5qcyB2ZXJzaW9uIGlzIG9sZC4gUGxlYXNlIGNoZWNrIHRoZSBsYXN0ZXN0LlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDQ6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwNCxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQ2FuIG5vdCBsb2FkIGR1ZSB0byBnb29nbGUgaW1hIGZvciBBZHMuIFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIlBsZWFzZSBjaGVjayB0aGUgZ29vZ2xlIGltYSBsaWJyYXJ5LlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDU6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwNSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQ2FuIG5vdCBmaW5kIHRoZSBkYXNoanMuIFBsZWFzZSBjaGVjayB0aGUgZGFzaGpzLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIk5vdCBmb3VuZCBkYXNoanMuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEwNjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogMTA2LFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJDYW4gbm90IGZpbmQgdGhlIGhsc2pzLiBQbGVhc2UgY2hlY2sgdGhlIGhsc2pzLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIk5vdCBmb3VuZCBobHNqcy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMzAwOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkNhbiBub3QgcGxheSBkdWUgdG8gdW5rbm93biByZWFzb25zLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIkNhbiBub3QgcGxheSBkdWUgdG8gdW5rbm93biByZWFzb25zLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAzMDE6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDMwMSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiRmV0Y2hpbmcgcHJvY2VzcyBhYm9ydGVkIGJ5IHVzZXIuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiRmV0Y2hpbmcgcHJvY2VzcyBhYm9ydGVkIGJ5IHVzZXIuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDMwMjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogMzAyLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJTb21lIG9mIHRoZSBtZWRpYSBjb3VsZCBub3QgYmUgZG93bmxvYWRlZCBkdWUgdG8gYSBuZXR3b3JrIGVycm9yLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIkVycm9yIG9jY3VycmVkIHdoZW4gZG93bmxvYWRpbmcuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDMwMzoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogMzAzLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJVbmFibGUgdG8gbG9hZCBtZWRpYS4gVGhpcyBtYXkgYmUgZHVlIHRvIGEgc2VydmVyIG9yIG5ldHdvcmsgZXJyb3IsIG9yIGR1ZSB0byBhbiB1bnN1cHBvcnRlZCBmb3JtYXQuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiRXJyb3Igb2NjdXJyZWQgd2hlbiBkZWNvZGluZy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMzA0OiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAzMDQsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIk1lZGlhIHBsYXliYWNrIGhhcyBiZWVuIGNhbmNlbGVkLiBJdCBsb29rcyBsaWtlIHlvdXIgbWVkaWEgaXMgY29ycnVwdGVkIG9yIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmZWF0dXJlcyB5b3VyIG1lZGlhIHVzZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiTWVkaWEgcGxheWJhY2sgbm90IHN1cHBvcnRlZC5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMzA1OiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAzMDUsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkNhbiBub3QgbG9hZCBjYXB0aW9ucyBkdWUgdG8gdW5rbm93biByZWFzb25zLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIkNhbiBub3QgbG9hZCBjYXB0aW9ucyBkdWUgdG8gdW5rbm93biByZWFzb25zLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA1MDE6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDUwMSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQ29ubmVjdGlvbiB3aXRoIGxvdy1sYXRlbmN5KE9NRSkgc2VydmVyIGZhaWxlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJXZWJTb2NrZXQgY29ubmVjdGlvbiBmYWlsZWQuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDUwMjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogNTAyLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJDb25uZWN0aW9uIHdpdGggbG93LWxhdGVuY3koT01FKSBzZXJ2ZXIgZmFpbGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIldlYlJUQyBhZGRJY2VDYW5kaWRhdGUgZmFpbGVkLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA1MDM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDUwMyxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQ29ubmVjdGlvbiB3aXRoIGxvdy1sYXRlbmN5KE9NRSkgc2VydmVyIGZhaWxlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJXZWJSVEMgc2V0UmVtb3RlRGVzY3JpcHRpb24gZmFpbGVkLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA1MDQ6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDUwNCxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiQ29ubmVjdGlvbiB3aXRoIGxvdy1sYXRlbmN5KE9NRSkgc2VydmVyIGZhaWxlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJXZWJSVEMgcGVlciBjcmVhdGVPZmZlciBmYWlsZWQuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDUwNToge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogNTA1LFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJDb25uZWN0aW9uIHdpdGggbG93LWxhdGVuY3koT01FKSBzZXJ2ZXIgZmFpbGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIldlYlJUQyBzZXRMb2NhbERlc2NyaXB0aW9uIGZhaWxlZC5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNTEwOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiA1MTAsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIk5ldHdvcmsgY29ubmVjdGlvbiBpcyB1bnN0YWJsZS4gQ2hlY2sgdGhlIG5ldHdvcmsgY29ubmVjdGlvbi5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJOZXR3b3JrIGlzIHNsb3cuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDUxMToge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogNTExLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJDb25uZWN0aW9uIHdpdGggbG93LWxhdGVuY3koT01FKSB0ZXJtaW5hdGVkIHVuZXhwZWN0ZWRseS5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJVbmV4cGVjdGVkIGVuZCBvZiBjb25uZWN0aW9uLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibGFuZ1wiIDogXCJrb1wiLFxuICAgICAgICBcInVpXCIgOiB7XG4gICAgICAgICAgICBcImNvbnRleHRcIiA6IFwi7Jik67iQ7ZSM66CI7J207Ja07JeQIOq0gO2VmOyXrFwiLFxuICAgICAgICAgICAgXCJjb250cm9sc1wiIDoge1xuICAgICAgICAgICAgICAgIFwibGl2ZVwiIDogXCLrnbzsnbTruIxcIixcbiAgICAgICAgICAgICAgICBcImxvd19sYXRlbmN5X2xpdmVcIiA6IFwi7LSI7KCA7KeA7JewIOudvOydtOu4jFwiLFxuICAgICAgICAgICAgICAgIFwibG93X2xhdGVuY3lfcDJwXCIgOiBcIuy0iOyggOyngOyXsCBQMlBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBsYXlsaXN0XCIgOiBcIu2UjOugiOydtOumrOyKpO2KuFwiLFxuICAgICAgICAgICAgXCJzZXR0aW5nXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiIDogXCLshKTsoJVcIixcbiAgICAgICAgICAgICAgICBcInNwZWVkXCIgOiBcIuyerOyDnSDsho3rj4RcIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiIDogXCLshozsiqRcIixcbiAgICAgICAgICAgICAgICBcInF1YWxpdHlcIiA6IFwi7ZKI7KeIXCIsXG4gICAgICAgICAgICAgICAgXCJjYXB0aW9uXCIgOiBcIuyekOuniVwiLFxuICAgICAgICAgICAgICAgIFwiZGlzcGxheVwiIDogXCLtkZzsi5xcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImFwaVwiIDoge1xuICAgICAgICAgICAgXCJtZXNzYWdlXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJtdXRlZF9wbGF5XCIgOiBcIuuIjOufrOyEnCDshozrpqwg7Lyc6riwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVycm9yXCI6IHtcbiAgICAgICAgICAgICAgICAxMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwi7JWMIOyImCDsl4bripQg7J207Jyg66GcIOuhnOuTnCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCLslYwg7IiYIOyXhuuKlCDsnbTsnKDroZwg66Gc65OcIO2VoCDsiJgg7JeG7Iq164uI64ukLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDE6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwMSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwi7KeA7JuQ65CY7KeAIOyViuuKlCDrr7jrlJTslrTroZwg7J247ZW0IOuhnOuTnCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJDYW4gbm90IGxvYWQgZHVlIHRvIHVuc3VwcG9ydGVkIG1lZGlhLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwMixcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwi7ZSM66CI7IucIOuhnOuTnOqwgCDspJHri6gg65CY7JeI7Iq164uI64ukLiA8L2JyPjxhIGhyZWY9J2h0dHA6Ly93d3cuYWRvYmUuY29tL2dvL2dldGZsYXNocGxheWVyJyB0YXJnZXQ9J19zZWxmJz48aW1nIHNyYz0naHR0cDovL3d3dy5hZG9iZS5jb20vaW1hZ2VzL3NoYXJlZC9kb3dubG9hZF9idXR0b25zL2dldF9mbGFzaF9wbGF5ZXIuZ2lmJyBhbHQ9J0dldCBBZG9iZSBGbGFzaCBwbGF5ZXInPjwvYT5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJJdCBsb29rcyBsaWtlIG5vdCBmb3VuZCBzd2Ygb3IgeW91ciBlbnZpcm9ubWVudCBpcyBsb2NhbGhvc3QuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEwMzoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogMTAzLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJEYXNoSlProZwg7J247ZW0IOuhnOuTnCDtlaAg7IiYIOyXhuyKteuLiOuLpC4gZGFzaGpzIOuyhOyghOydhCDtmZXsnbjtlbTso7zshLjsmpQuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiZGFzaC5qcyB2ZXJzaW9uIGlzIG9sZC4gUGxlYXNlIGNoZWNrIHRoZSBsYXN0ZXN0LlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDQ6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwNCxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiR29vZ2xlIElNQSDrnbzsnbTruIzrn6zrpqzqsIAg7JeG7Ja0IOuhnOuTnCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJQbGVhc2UgY2hlY2sgdGhlIGdvb2dsZSBpbWEgbGlicmFyeS5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTA1OiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAxMDUsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkRhc2hKUyDrnbzsnbTruIzrn6zrpqzqsIAg7JeG7Ja0IOuhnOuTnCDtlaAg7IiYIOyXhuyKteuLiOuLpC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJOb3QgZm91bmQgZGFzaGpzLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDY6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDEwNixcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiSExTSlMg65287J2067iM65+s66as6rCAIOyXhuyWtCDroZzrk5wg7ZWgIOyImCDsl4bsirXri4jri6QuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiTm90IGZvdW5kIGhsc2pzLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAzMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwi7JWMIOyImCDsl4bripQg7J207Jyg66GcIOyerOyDne2VoCDsiJgg7JeG7Iq164uI64ukLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIkNhbiBub3QgcGxheSBkdWUgdG8gdW5rbm93biByZWFzb25zLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAzMDE6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDMwMSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwi7IKs7Jqp7J6Q7JeQIOydmO2VnCDtlITroZzshLjsiqQg7KSR64uoLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIkZldGNoaW5nIHByb2Nlc3MgYWJvcnRlZCBieSB1c2VyLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAzMDI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDMwMixcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwi64Sk7Yq47JuM7YGsIOyYpOulmOuhnCDsnbjtlbQg7J2867aAIOuvuOuUlOyWtOulvCDri6TsmrTroZzrk5wg7ZWgIOyImCDsl4bsirXri4jri6QuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiRXJyb3Igb2NjdXJyZWQgd2hlbiBkb3dubG9hZGluZy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMzAzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAzMDMsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIuuvuOuUlOyWtOulvOuhnOuTnCDtlaAg7IiYIOyXhuyKteuLiOuLpC4g7ISc67KEIOuYkOuKlCDrhKTtirjsm4ztgawg7Jik66WYIOuYkOuKlCDsp4Dsm5DrkJjsp4Ag7JWK64qUIO2YleyLneycvOuhnCDsnbjtlbQg67Cc7IOd7ZWgIOyImCDsnojsirXri4jri6QuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiRXJyb3Igb2NjdXJyZWQgd2hlbiBkZWNvZGluZy5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMzA0OiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAzMDQsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIuuvuOuUlOyWtCDsnqzsg53snbQg7Leo7IaM65CY7JeI7Iq164uI64ukLiDrr7jrlJTslrTqsIAg7IaQ7IOB65CY7JeI6rGw64KYIOu4jOudvOyasOyggOqwgCDrr7jrlJTslrTsl5DshJwg7IKs7Jqp7ZWY64qUIOq4sOuKpeydhCDsp4Dsm5DtlZjsp4Ag7JWK64qUIOqygyDqsJnsirXri4jri6QuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiTWVkaWEgcGxheWJhY2sgbm90IHN1cHBvcnRlZC5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMzA1OiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiAzMDUsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIuyVjCDsiJgg7JeG64qUIOydtOycoOuhnCDsnpDrp4nsnYQg66Gc65OcIO2VoCDsiJgg7JeG7Iq164uI64ukLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIkNhbiBub3QgbG9hZCBjYXB0aW9ucyBkdWUgdG8gdW5rbm93biByZWFzb25zLlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA1MDE6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IDUwMSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwi7Ju57IaM7LyTIOyXsOqysCDsi6TtjKhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJXZWJTb2NrZXQgY29ubmVjdGlvbiBmYWlsZWQuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDUwMjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogNTAyLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCLsoIDsp4Dsl7AoT01FKSDshJzrsoTsmYAg7Jew6rKw7JeQIOyLpO2MqO2WiOyKteuLiOuLpC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJXZWJSVEMgYWRkSWNlQ2FuZGlkYXRlIGZhaWxlZC5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNTAzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiA1MDMsXG4gICAgICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIuyggOyngOyXsChPTUUpIOyEnOuyhOyZgCDsl7DqsrDsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiOiBcIldlYlJUQyBzZXRSZW1vdGVEZXNjcmlwdGlvbiBmYWlsZWQuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDUwNDoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogNTA0LFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCLsoIDsp4Dsl7AoT01FKSDshJzrsoTsmYAg7Jew6rKw7JeQIOyLpO2MqO2WiOyKteuLiOuLpC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJXZWJSVEMgcGVlciBjcmVhdGVPZmZlciBmYWlsZWQuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDUwNToge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogNTA1LFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCLsoIDsp4Dsl7AoT01FKSDshJzrsoTsmYAg7Jew6rKw7JeQIOyLpO2MqO2WiOyKteuLiOuLpC5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWFzb25cIjogXCJXZWJSVEMgc2V0TG9jYWxEZXNjcmlwdGlvbiBmYWlsZWQuXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDUxMDoge1xuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogNTEwLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCLrhKTtirjsm4ztgawg7Jew6rKw7J20IOu2iOyViOygle2VqeuLiOuLpC4g64Sk7Yq47JuM7YGsIOyXsOqysOydhCDtmZXsnbjtlZjsi63si5zsmKQuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVhc29uXCI6IFwiTmV0d29yayBpcyBzbG93LlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXTsiLCIvKipcbiAqIEBicmllZiAgIOuvuOuUlOyWtCDsl5jrpqzrqLztirjrpbwg6rSA66as7ZWY64qUIOqwneyytC4g7ZiE7J6s64qUIO2VmOuKlCDsnbzsnbQg66eO7KeAIOyViuuLpC5cbiAqIEBwYXJhbSAgIHtlbGVtZW50fSAgIGNvbnRhaW5lciAgIGRvbSBlbGVtZW50XG4gKlxuICogKi9cbmltcG9ydCB7Z2V0QnJvd3Nlcn0gZnJvbSBcInV0aWxzL2Jyb3dzZXJcIjtcbmltcG9ydCB7UFJPVklERVJfREFTSCwgUFJPVklERVJfSExTLCBQUk9WSURFUl9XRUJSVEMsIFBST1ZJREVSX0hUTUw1LCBQUk9WSURFUl9SVE1QfSBmcm9tIFwiYXBpL2NvbnN0YW50c1wiO1xuaW1wb3J0IExBJCBmcm9tIFwidXRpbHMvbGlrZUEkLmpzXCI7XG5pbXBvcnQge2dldFNjcmlwdFBhdGh9IGZyb20gJ3V0aWxzL3dlYnBhY2snO1xuaW1wb3J0IHt2ZXJzaW9ufSBmcm9tICd2ZXJzaW9uJztcbi8vVG9EbyA6IFJlc3RydWN0dXJpbmdcblxuY29uc3QgTWFuYWdlciA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgYnJvd3NlckluZm8pe1xuICAgIGNvbnN0IHRoYXQgPSB7fTtcbiAgICBjb25zdCBTV0ZQYXRoID0gZ2V0U2NyaXB0UGF0aCgnb3ZlbnBsYXllci5qcycpK1wiT3ZlblBsYXllckZsYXNoLnN3Zj92PVwiK3ZlcnNpb247XG4gICAgbGV0IHJvb3RJZCA9IGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudC1pZFwiKTtcbiAgICBsZXQgJGNvbnRhaW5lciA9IExBJChjb250YWluZXIpO1xuICAgIGxldCB2aWRlb0VsZW1lbnQgPSBcIlwiO1xuXG4gICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiTWVkaWFNYW5hZ2VyIGxvYWRlZC4gYnJvd3NlciA6IFwiLCBicm93c2VySW5mbyApO1xuXG4gICAgY29uc3QgY3JlYXRlSHRtbFZpZGVvID0gZnVuY3Rpb24oaXNMb29wKXtcbiAgICAgICAgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgdmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZXJlbW90ZXBsYXliYWNrJywgJycpO1xuICAgICAgICB2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKCd3ZWJraXQtcGxheXNpbmxpbmUnLCAndHJ1ZScpO1xuICAgICAgICB2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG4gICAgICAgIGlmKGlzTG9vcCl7XG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdsb29wJywgJycpO1xuICAgICAgICB9XG4gICAgICAgICRjb250YWluZXIuYXBwZW5kKHZpZGVvRWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHZpZGVvRWxlbWVudDtcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZUZsYXNoVmlkZW8gPSBmdW5jdGlvbihpc0xvb3AsIGJ1ZmZlclRpbWUsIGJ1ZmZlclRpbWVNYXgpe1xuICAgICAgICBsZXQgbW92aWUsIGZsYXNodmFycywgYWxsb3dzY3JpcHRhY2Nlc3MsIGFsbG93ZnVsbHNjcmVlbiwgcXVhbGl0eSwgbmFtZSwgbWVudSwgcXVhbCwgYmdjb2xvciwgbG9vcCwgd21vZGUgO1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJNZWRpYU1hbmFnZXIgRmxhc2ggYnVmZmVyIHNldHRpbmcgOiBcIiwgYnVmZmVyVGltZSwgYnVmZmVyVGltZU1heCk7XG4gICAgICAgIG1vdmllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFyYW0nKTtcbiAgICAgICAgbW92aWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ21vdmllJyk7XG4gICAgICAgIG1vdmllLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBTV0ZQYXRoKTtcblxuICAgICAgICBmbGFzaHZhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXJhbScpO1xuICAgICAgICBmbGFzaHZhcnMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZsYXNodmFycycpO1xuICAgICAgICAvL3BsYXllcklkIGlzIHRvIHVzZSBTV0YgZm9yIEV4dGVybmFsSW50ZXJmYWNlLmNhbGwoKS5cbiAgICAgICAgZmxhc2h2YXJzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgcGxheWVySWQ9JHtyb290SWR9JmJ1ZmZlclRpbWU9JHtidWZmZXJUaW1lfSZidWZmZXJNYXhUaW1lPSR7YnVmZmVyVGltZU1heH1gKTtcblxuICAgICAgICBhbGxvd3NjcmlwdGFjY2VzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcmFtJyk7XG4gICAgICAgIGFsbG93c2NyaXB0YWNjZXNzLnNldEF0dHJpYnV0ZSgnbmFtZScsICdhbGxvd3NjcmlwdGFjY2VzcycpO1xuICAgICAgICBhbGxvd3NjcmlwdGFjY2Vzcy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2Fsd2F5cycpO1xuXG4gICAgICAgIGFsbG93ZnVsbHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcmFtJyk7XG4gICAgICAgIGFsbG93ZnVsbHNjcmVlbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYWxsb3dmdWxsc2NyZWVuJyk7XG4gICAgICAgIGFsbG93ZnVsbHNjcmVlbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3RydWUnKTtcblxuICAgICAgICBxdWFsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFyYW0nKTtcbiAgICAgICAgcXVhbGl0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVhbGl0eScpO1xuICAgICAgICBxdWFsaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGVpZ2h0Jyk7XG5cbiAgICAgICAgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcmFtJyk7XG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcm9vdElkK1wiLWZsYXNoXCIpO1xuXG4gICAgICAgIG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXJhbScpO1xuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZW51Jyk7XG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdmYWxzZScpO1xuXG4gICAgICAgIHF1YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXJhbScpO1xuICAgICAgICBxdWFsLnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWFsaXR5Jyk7XG4gICAgICAgIHF1YWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG5cbiAgICAgICAgYmdjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcmFtJyk7XG4gICAgICAgIGJnY29sb3Iuc2V0QXR0cmlidXRlKCduYW1lJywgJ2JnY29sb3InKTtcbiAgICAgICAgYmdjb2xvci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJyMwMDAwMDAnKTtcblxuICAgICAgICB3bW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhcmFtJyk7XG4gICAgICAgIHdtb2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd3bW9kZScpO1xuICAgICAgICB3bW9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ29wYXF1ZScpO1xuXG4gICAgICAgIC8qbGV0IGFsbG93QnV0dG9uID0gYDxhIGhyZWY9XCJodHRwOi8vd3d3LmFkb2JlLmNvbS9nby9nZXRmbGFzaHBsYXllclwiPjxpbWcgc3JjPVwiaHR0cDovL3d3dy5hZG9iZS5jb20vaW1hZ2VzL3NoYXJlZC9kb3dubG9hZF9idXR0b25zL2dldF9mbGFzaF9wbGF5ZXIuZ2lmXCIgYWx0PVwiR2V0IEFkb2JlIEZsYXNoIHBsYXllclwiPjwvYT5gO1xuICAgICAgICBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBhbGxvd0J1dHRvbjsqL1xuXG4gICAgICAgIGlmKGlzTG9vcCl7XG4gICAgICAgICAgICBsb29wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFyYW0nKTtcbiAgICAgICAgICAgIGxvb3Auc2V0QXR0cmlidXRlKCduYW1lJywgJ2xvb3AnKTtcbiAgICAgICAgICAgIGxvb3Auc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0cnVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKTtcbiAgICAgICAgdmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByb290SWQrXCItZmxhc2hcIik7XG4gICAgICAgIHZpZGVvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCByb290SWQrXCItZmxhc2hcIik7XG4gICAgICAgIHZpZGVvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgICAgdmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEwMCUnKTtcbiAgICAgICAgdmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgnc2NhbGUnLCAnZGVmYXVsdCcpO1xuICAgICAgICB2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKCd3bW9kZScsICdvcGFxdWUnKTtcblxuICAgICAgICBpZihicm93c2VySW5mby5icm93c2VyID09PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiICYmIGJyb3dzZXJJbmZvLmJyb3dzZXJNYWpvclZlcnNpb24gPD0gOSApe1xuICAgICAgICAgICAgdmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3NpZCcsICdjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDAnKTtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5hcHBlbmRDaGlsZChtb3ZpZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YScsIFNXRlBhdGgpO1xuICAgICAgICAgICAgdmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGlzTG9vcCl7XG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQobG9vcCk7XG4gICAgICAgIH1cblxuICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQod21vZGUpO1xuICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoYmdjb2xvcik7XG4gICAgICAgIHZpZGVvRWxlbWVudC5hcHBlbmRDaGlsZChxdWFsKTtcbiAgICAgICAgdmlkZW9FbGVtZW50LmFwcGVuZENoaWxkKGFsbG93ZnVsbHNjcmVlbik7XG4gICAgICAgIHZpZGVvRWxlbWVudC5hcHBlbmRDaGlsZChhbGxvd3NjcmlwdGFjY2Vzcyk7XG4gICAgICAgIHZpZGVvRWxlbWVudC5hcHBlbmRDaGlsZChmbGFzaHZhcnMpO1xuICAgICAgICAvL3ZpZGVvRWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgICAgICAkY29udGFpbmVyLmFwcGVuZCh2aWRlb0VsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiB2aWRlb0VsZW1lbnQ7XG4gICAgfTtcblxuICAgIHRoYXQuY3JlYXRlTWVkaWEgPSAocHJvdmlkZXJOYW1lICwgcGxheWVyQ29uZmlnKSAgPT4ge1xuICAgICAgICBpZiggcHJvdmlkZXJOYW1lID09PSBQUk9WSURFUl9SVE1QICl7XG4gICAgICAgICAgICBpZih2aWRlb0VsZW1lbnQpe1xuICAgICAgICAgICAgICAgIHRoYXQuZW1wdHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVGbGFzaFZpZGVvKHBsYXllckNvbmZpZy5pc0xvb3AoKSwgcGxheWVyQ29uZmlnLmdldFJ0bXBCdWZmZXJUaW1lKCksIHBsYXllckNvbmZpZy5nZXRSdG1wQnVmZmVyVGltZU1heCgpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih2aWRlb0VsZW1lbnQpe1xuICAgICAgICAgICAgICAgIC8vdGhhdC5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIC8vcmV1c2UgdmlkZW8gZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvL2JlY3Vhc2UgcGxheWxpc3QgaXMgYXV0byBuZXh0IHBsYXlpbmcuXG4gICAgICAgICAgICAgICAgLy9Pbmx5IHNhbWUgdmlkZW8gZWxlbWVudCBkb2VzIG5vdCByZXF1aXJlIFVzZXIgSW50ZXJhY3Rpb24gRXJyb3IuXG4gICAgICAgICAgICAgICAgLy9Ub0RvIDogcmVmYWN0b3JpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlkZW9FbGVtZW50O1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUh0bWxWaWRlbyhwbGF5ZXJDb25maWcuaXNMb29wKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhhdC5jcmVhdGVBZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb3AtYWRzJyk7XG4gICAgICAgICRjb250YWluZXIuYXBwZW5kKGFkQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gYWRDb250YWluZXI7XG4gICAgfTtcblxuXG4gICAgdGhhdC5lbXB0eSA9ICgpID0+e1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJNZWRpYU1hbmFnZXIgcmVtb3ZlRWxlbWVudCgpXCIpO1xuICAgICAgICAkY29udGFpbmVyLnJlbW92ZUNoaWxkKHZpZGVvRWxlbWVudCk7XG4gICAgICAgIHZpZGVvRWxlbWVudCA9IG51bGw7XG4gICAgfTtcblxuICAgIHRoYXQuZGVzdHJveSA9ICgpID0+e1xuICAgICAgICAkY29udGFpbmVyLnJlbW92ZUNoaWxkKCk7XG4gICAgICAgICRjb250YWluZXIgPSBudWxsO1xuICAgICAgICB2aWRlb0VsZW1lbnQgPSBudWxsO1xuICAgICAgICByb290SWQgPSBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhhdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7XG4iLCJpbXBvcnQgXyBmcm9tIFwidXRpbHMvdW5kZXJzY29yZVwiO1xuaW1wb3J0IHtpc1J0bXAsIGlzV2ViUlRDLCBpc0Rhc2ggfSBmcm9tIFwidXRpbHMvdmFsaWRhdG9yXCI7XG5pbXBvcnQge2V4dHJhY3RFeHRlbnNpb24gLHRyaW19IGZyb20gXCIuLi8uLi91dGlscy9zdHJpbmdzXCI7XG5pbXBvcnQgU3VwcG9ydENoZWNrZXIgZnJvbSBcIi4uL1N1cHBvcnRDaGVja2VyXCI7XG5pbXBvcnQge1BMQVlMSVNUX0NIQU5HRUR9IGZyb20gXCJhcGkvY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGJyaWVmICAgVGhpcyBtYW5hZ2VzIFBsYXlsaXN0IG9yIFNvdXJjZXMuXG4gKiBAcGFyYW1cbiAqXG4gKiAqL1xuY29uc3QgTWFuYWdlciA9IGZ1bmN0aW9uKHByb3ZpZGVyKXtcbiAgICBjb25zdCB0aGF0ID0ge307XG4gICAgbGV0IGN1cnJlbnRQbGF5bGlzdEl0ZW0gPSBbXTtcbiAgICBsZXQgc3BlYyA9IHtcbiAgICAgICAgcGxheWxpc3QgOiBbXSxcbiAgICAgICAgY3VycmVudEluZGV4IDogMFxuICAgIH07XG4gICAgbGV0IHN1cHBvcnRDaGVja2VyID0gU3VwcG9ydENoZWNrZXIoKTtcblxuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIlBsYXlsaXN0TWFuYWdlciBsb2FkZWQuXCIpO1xuXG4gICAgY29uc3QgbWFrZVByZXR0eVNvdXJjZSA9IGZ1bmN0aW9uKHNvdXJjZV8pe1xuICAgICAgICBpZiAoIXNvdXJjZV8gfHwgIXNvdXJjZV8uZmlsZSAmJiAhKHNvdXJjZV8uaG9zdCB8fCBzb3VyY2VfLmFwcGxpY2F0aW9uIHx8IHNvdXJjZV8uc3RyZWFtKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvdXJjZSA9IE9iamVjdC5hc3NpZ24oe30sIHsgJ2RlZmF1bHQnOiBmYWxzZSB9LCBzb3VyY2VfKTtcbiAgICAgICAgc291cmNlLmZpbGUgPSB0cmltKCcnICsgc291cmNlLmZpbGUpO1xuXG4gICAgICAgIGlmKHNvdXJjZS5ob3N0ICYmIHNvdXJjZS5hcHBsaWNhdGlvbiAmJiBzb3VyY2Uuc3RyZWFtKXtcbiAgICAgICAgICAgIHNvdXJjZS5maWxlID0gc291cmNlLmhvc3QgKyBcIi9cIiArIHNvdXJjZS5hcHBsaWNhdGlvbiArIFwiL3N0cmVhbS9cIiArIHNvdXJjZS5zdHJlYW07XG4gICAgICAgICAgICBkZWxldGUgc291cmNlLmhvc3Q7XG4gICAgICAgICAgICBkZWxldGUgc291cmNlLmFwcGxpY2F0aW9uO1xuICAgICAgICAgICAgZGVsZXRlIHNvdXJjZS5zdHJlYW07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtaW1ldHlwZVJlZ0V4ID0gL15bXi9dK1xcLyg/OngtKT8oW14vXSspJC87XG5cbiAgICAgICAgaWYgKG1pbWV0eXBlUmVnRXgudGVzdChzb3VyY2UudHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHR5cGUgaXMgZ2l2ZW4gYXMgYSBtaW1ldHlwZVxuICAgICAgICAgICAgc291cmNlLm1pbWVUeXBlID0gc291cmNlLnR5cGU7XG4gICAgICAgICAgICBzb3VyY2UudHlwZSA9IHNvdXJjZS50eXBlLnJlcGxhY2UobWltZXR5cGVSZWdFeCwgJyQxJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc1J0bXAoc291cmNlLmZpbGUpKXtcbiAgICAgICAgICAgIHNvdXJjZS50eXBlID0gJ3J0bXAnO1xuICAgICAgICB9ZWxzZSBpZihpc1dlYlJUQyhzb3VyY2UuZmlsZSkpe1xuICAgICAgICAgICAgc291cmNlLnR5cGUgPSAnd2VicnRjJztcbiAgICAgICAgfWVsc2UgaWYoaXNEYXNoKHNvdXJjZS5maWxlLCBzb3VyY2UudHlwZSkpe1xuICAgICAgICAgICAgc291cmNlLnR5cGUgPSAnZGFzaCc7XG4gICAgICAgIH1lbHNlIGlmICghc291cmNlLnR5cGUpIHtcbiAgICAgICAgICAgIHNvdXJjZS50eXBlID0gZXh0cmFjdEV4dGVuc2lvbihzb3VyY2UuZmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlLmxvd0xhdGVuY3kpIHtcbiAgICAgICAgICAgIHNvdXJjZS5sb3dMYXRlbmN5ID0gc291cmNlLmxvd0xhdGVuY3k7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNvdXJjZS50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3JtYWxpemUgdHlwZXNcbiAgICAgICAgc3dpdGNoIChzb3VyY2UudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbTN1OCc6XG4gICAgICAgICAgICBjYXNlICd2bmQuYXBwbGUubXBlZ3VybCc6XG4gICAgICAgICAgICAgICAgc291cmNlLnR5cGUgPSAnaGxzJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ200YSc6XG4gICAgICAgICAgICAgICAgc291cmNlLnR5cGUgPSAnYWFjJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NtaWwnOlxuICAgICAgICAgICAgICAgIHNvdXJjZS50eXBlID0gJ3J0bXAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2Vba2V5XSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG5cbiAgICB9XG5cbiAgICB0aGF0LmluaXRQbGF5bGlzdCA9KHBsYXlsaXN0LCBwbGF5ZXJDb25maWcpID0+e1xuXG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIlBsYXlsaXN0TWFuYWdlciBzZXRQbGF5bGlzdCgpIFwiLCBwbGF5bGlzdCk7XG4gICAgICAgIGNvbnN0IHByZXR0aWVkUGxheWxpc3QgPSAoXy5pc0FycmF5KHBsYXlsaXN0KSA/IHBsYXlsaXN0IDogW3BsYXlsaXN0XSkubWFwKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgaWYoIV8uaXNBcnJheShpdGVtLnRyYWNrcykpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS50cmFja3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcGxheWxpc3RJdGVtID0gT2JqZWN0LmFzc2lnbih7fSx7XG4gICAgICAgICAgICAgICAgc291cmNlczogW10sXG4gICAgICAgICAgICAgICAgdHJhY2tzOiBbXSxcbiAgICAgICAgICAgICAgICB0aXRsZSA6IFwiXCJcbiAgICAgICAgICAgIH0sIGl0ZW0gKTtcblxuICAgICAgICAgICAgaWYoKHBsYXlsaXN0SXRlbS5zb3VyY2VzID09PSBPYmplY3QocGxheWxpc3RJdGVtLnNvdXJjZXMpKSAmJiAhXy5pc0FycmF5KHBsYXlsaXN0SXRlbS5zb3VyY2VzKSkge1xuICAgICAgICAgICAgICAgIHBsYXlsaXN0SXRlbS5zb3VyY2VzID0gW21ha2VQcmV0dHlTb3VyY2UocGxheWxpc3RJdGVtLnNvdXJjZXMpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmlzQXJyYXkocGxheWxpc3RJdGVtLnNvdXJjZXMpIHx8IHBsYXlsaXN0SXRlbS5zb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsYXlsaXN0SXRlbS5zb3VyY2VzID0gW21ha2VQcmV0dHlTb3VyY2UocGxheWxpc3RJdGVtKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFfLmlzQXJyYXkocGxheWxpc3RJdGVtLnNvdXJjZXMpIHx8IHBsYXlsaXN0SXRlbS5zb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmxldmVscykge1xuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdEl0ZW0uc291cmNlcyA9IGl0ZW0ubGV2ZWxzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0SXRlbS5zb3VyY2VzID0gW21ha2VQcmV0dHlTb3VyY2UoaXRlbSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGxheWxpc3RJdGVtLnNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gcGxheWxpc3RJdGVtLnNvdXJjZXNbaV07XG4gICAgICAgICAgICAgICAgbGV0IHByZXR0eVNvdXJjZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRTb3VyY2UgPSBzb3VyY2UuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZGVmYXVsdCA9IChkZWZhdWx0U291cmNlLnRvU3RyaW5nKCkgPT09ICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlLmRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc291cmNlIGRvZXNuJ3QgaGF2ZSBhIGxhYmVsLCBudW1iZXIgaXRcbiAgICAgICAgICAgICAgICBpZiAoIXBsYXlsaXN0SXRlbS5zb3VyY2VzW2ldLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0SXRlbS5zb3VyY2VzW2ldLmxhYmVsID0gcGxheWxpc3RJdGVtLnNvdXJjZXNbaV0udHlwZStcIi1cIitpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJldHR5U291cmNlID0gbWFrZVByZXR0eVNvdXJjZShwbGF5bGlzdEl0ZW0uc291cmNlc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYoc3VwcG9ydENoZWNrZXIuZmluZFByb3ZpZGVyTmFtZUJ5U291cmNlKHByZXR0eVNvdXJjZSkpe1xuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdEl0ZW0uc291cmNlc1tpXSA9IHByZXR0eVNvdXJjZTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RJdGVtLnNvdXJjZXNbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWxpc3RJdGVtLnNvdXJjZXMgPSBwbGF5bGlzdEl0ZW0uc291cmNlcy5maWx0ZXIoc291cmNlID0+ICEhc291cmNlKTtcblxuICAgICAgICAgICAgaWYoIXBsYXlsaXN0SXRlbS50aXRsZSAmJiAgcGxheWxpc3RJdGVtLnNvdXJjZXNbMF0gJiYgcGxheWxpc3RJdGVtLnNvdXJjZXNbMF0ubGFiZWwpe1xuICAgICAgICAgICAgICAgIHBsYXlsaXN0SXRlbS50aXRsZSA9IHBsYXlsaXN0SXRlbS5zb3VyY2VzWzBdLmxhYmVsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkZWZhdWx0IOqwgCDsl4bsnYTrlYwgd2VicnRj6rCAIOyeiOuLpOuptCB3ZWJydGMgZGVmYXVsdCA6IHRydWXroZwg7J6Q64+ZIOyEpOyglVxuICAgICAgICAgICAgLypsZXQgaGF2ZURlZmF1bHQgPSBfLmZpbmQocGxheWxpc3RJdGVtLnNvdXJjZXMsIGZ1bmN0aW9uKHNvdXJjZSl7cmV0dXJuIHNvdXJjZS5kZWZhdWx0ID09IHRydWU7fSk7XG4gICAgICAgICAgICBsZXQgd2VicnRjU291cmNlID0gW107XG4gICAgICAgICAgICBpZighaGF2ZURlZmF1bHQpe1xuICAgICAgICAgICAgICAgIHdlYnJ0Y1NvdXJjZSA9IF8uZmluZChwbGF5bGlzdEl0ZW0uc291cmNlcywgZnVuY3Rpb24oc291cmNlKXtyZXR1cm4gc291cmNlLnR5cGUgPT0gXCJ3ZWJydGNcIjt9KTtcbiAgICAgICAgICAgICAgICBpZih3ZWJydGNTb3VyY2Upe1xuICAgICAgICAgICAgICAgICAgICB3ZWJydGNTb3VyY2UuZGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSovXG5cblxuICAgICAgICAgICAgZnVuY3Rpb24gZXh0cmFjdE9ubHlPbmVQcm90b2NvbChzb3VyY2VzKXtcbiAgICAgICAgICAgICAgICBpZighIXNvdXJjZXMpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGlnaFByaW9yaXR5VHlwZSA9IHBsYXlsaXN0SXRlbS5zb3VyY2VzWzBdLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHNvdXJjZXMsIHt0eXBlIDogaGlnaFByaW9yaXR5VHlwZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocGxheWVyQ29uZmlnLmlzQ3VycmVudFByb3RvY29sT25seSgpKXtcbiAgICAgICAgICAgICAgICBwbGF5bGlzdEl0ZW0uc291cmNlcyA9IGV4dHJhY3RPbmx5T25lUHJvdG9jb2wocGxheWxpc3RJdGVtLnNvdXJjZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighXy5pc0FycmF5KHBsYXlsaXN0SXRlbS50cmFja3MpKXtcbiAgICAgICAgICAgICAgICBwbGF5bGlzdEl0ZW0udHJhY2tzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihfLmlzQXJyYXkocGxheWxpc3RJdGVtLmNhcHRpb25zKSl7XG4gICAgICAgICAgICAgICAgcGxheWxpc3RJdGVtLnRyYWNrcyA9IHBsYXlsaXN0SXRlbS50cmFja3MuY29uY2F0KHBsYXlsaXN0SXRlbS5jYXB0aW9ucyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBsYXlsaXN0SXRlbS5jYXB0aW9ucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGxheWxpc3RJdGVtLnRyYWNrcyA9IHBsYXlsaXN0SXRlbS50cmFja3MubWFwKGZ1bmN0aW9uKHRyYWNrKXtcbiAgICAgICAgICAgICAgICBpZighdHJhY2sgfHwgIXRyYWNrLmZpbGUpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgICAgICAgICAgICdraW5kJzogJ2NhcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIHRyYWNrKTtcbiAgICAgICAgICAgIH0pLmZpbHRlcih0cmFjayA9PiAhIXRyYWNrKTtcbiAgICAgICAgICAgIHJldHVybiBwbGF5bGlzdEl0ZW07XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbihpdGVtKXtyZXR1cm4gaXRlbS5zb3VyY2VzICYmIGl0ZW0uc291cmNlcy5sZW5ndGggPiAwO30pfHxbXTtcbiAgICAgICAgc3BlYy5wbGF5bGlzdCA9IHByZXR0aWVkUGxheWxpc3Q7XG4gICAgICAgIHJldHVybiBwcmV0dGllZFBsYXlsaXN0O1xuICAgIH07XG4gICAgdGhhdC5nZXRQbGF5bGlzdCA9ICgpID0+IHtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiUGxheWxpc3RNYW5hZ2VyIGdldFBsYXlsaXN0KCkgXCIsIHNwZWMucGxheWxpc3QpO1xuICAgICAgICByZXR1cm4gc3BlYy5wbGF5bGlzdDtcbiAgICB9O1xuICAgIHRoYXQuZ2V0Q3VycmVudFBsYXlMaXN0ID0gKCkgPT4ge1xuICAgICAgICBpZihzcGVjLnBsYXlsaXN0W3NwZWMuY3VycmVudEluZGV4XSl7XG4gICAgICAgICAgICByZXR1cm4gc3BlYy5wbGF5bGlzdFtzcGVjLmN1cnJlbnRJbmRleF07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGF0LmdldEN1cnJlbnRQbGF5bGlzdEluZGV4ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3BlYy5jdXJyZW50SW5kZXg7XG4gICAgfTtcbiAgICB0aGF0LnNldEN1cnJlbnRQbGF5bGlzdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZihzcGVjLnBsYXlsaXN0W2luZGV4XSl7XG4gICAgICAgICAgICBzcGVjLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgcHJvdmlkZXIudHJpZ2dlcihQTEFZTElTVF9DSEFOR0VELCBzcGVjLmN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwZWMuY3VycmVudEluZGV4O1xuICAgIH07XG4gICAgdGhhdC5nZXRDdXJyZW50U291cmNlcyA9ICgpID0+IHtcbiAgICAgICAgaWYoc3BlYy5wbGF5bGlzdFtzcGVjLmN1cnJlbnRJbmRleF0pe1xuICAgICAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiUGxheWxpc3RNYW5hZ2VyIGdldEN1cnJlbnRTb3VyY2VzKCkgXCIsIHNwZWMucGxheWxpc3Rbc3BlYy5jdXJyZW50SW5kZXhdLnNvdXJjZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHNwZWMucGxheWxpc3Rbc3BlYy5jdXJyZW50SW5kZXhdLnNvdXJjZXM7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgdGhhdC5nZXRDdXJyZW50QWRUYWcgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNwZWMucGxheWxpc3Rbc3BlYy5jdXJyZW50SW5kZXhdKXtcbiAgICAgICAgICAgIHJldHVybiBzcGVjLnBsYXlsaXN0W3NwZWMuY3VycmVudEluZGV4XS5hZFRhZ1VybCB8fCBcIlwiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB0aGF0O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyO1xuIiwiaW1wb3J0IFN1cHBvcnRDaGVja2VyIGZyb20gXCJhcGkvU3VwcG9ydENoZWNrZXJcIjtcbmltcG9ydCB7QXBpUnRtcEV4cGFuc2lvbn0gZnJvbSAnYXBpL0FwaUV4cGFuc2lvbnMnO1xuaW1wb3J0IHtcbiAgICBQUk9WSURFUl9IVE1MNSwgUFJPVklERVJfV0VCUlRDLCBQUk9WSURFUl9EQVNILCBQUk9WSURFUl9ITFMsIFBST1ZJREVSX1JUTVAsIEVSUk9SUywgSU5JVF9VTlNVUFBPUlRfRVJST1Jcbn0gZnJvbSBcImFwaS9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBAYnJpZWYgICBUaGlzIG1hbmFnZXMgcHJvdmlkZXIuXG4gKiBAcGFyYW1cbiAqICovXG5jb25zdCBDb250cm9sbGVyID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgc3VwcG9ydENoYWNrZXIgPSBTdXBwb3J0Q2hlY2tlcigpO1xuICAgIGNvbnN0IFByb3ZpZGVycyA9IHt9O1xuXG4gICAgY29uc3QgdGhhdCA9IHt9O1xuICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIlByb3ZpZGVyQ29udHJvbGxlciBsb2FkZWQuXCIpO1xuXG4gICAgY29uc3QgcmVnaXN0ZVByb3ZpZGVyID0gKG5hbWUsIHByb3ZpZGVyKSA9PntcbiAgICAgICAgaWYoUHJvdmlkZXJzW25hbWVdKXtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiUHJvdmlkZXJDb250cm9sbGVyIF9yZWdpc3RlclByb3ZpZGVyKCkgXCIsIG5hbWUpO1xuICAgICAgICBQcm92aWRlcnNbbmFtZV0gPSBwcm92aWRlcjtcbiAgICB9O1xuXG4gICAgY29uc3QgUHJvdmlkZXJMb2FkZXIgPXtcbiAgICAgICAgaHRtbDU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmUuZW5zdXJlKFsnYXBpL3Byb3ZpZGVyL2h0bWw1L3Byb3ZpZGVycy9IdG1sNSddLCBmdW5jdGlvbihyZXF1aXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gcmVxdWlyZSgnYXBpL3Byb3ZpZGVyL2h0bWw1L3Byb3ZpZGVycy9IdG1sNScpLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVQcm92aWRlcihQUk9WSURFUl9IVE1MNSwgcHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7bmFtZSA6IFBST1ZJREVSX0hUTUw1LCBwcm92aWRlciA6IHByb3ZpZGVyfTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9LCdvdmVucGxheWVyLnByb3ZpZGVyLkh0bWw1J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2VicnRjIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlLmVuc3VyZShbJ2FwaS9wcm92aWRlci9odG1sNS9wcm92aWRlcnMvV2ViUlRDJ10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSByZXF1aXJlKCdhcGkvcHJvdmlkZXIvaHRtbDUvcHJvdmlkZXJzL1dlYlJUQycpLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVQcm92aWRlcihQUk9WSURFUl9XRUJSVEMsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge25hbWUgOiBQUk9WSURFUl9XRUJSVEMsIHByb3ZpZGVyIDogcHJvdmlkZXJ9O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBlcnJvcicpO1xuICAgICAgICAgICAgICAgIH0sJ292ZW5wbGF5ZXIucHJvdmlkZXIuV2ViUlRDUHJvdmlkZXInXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBkYXNoIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiByZXF1aXJlLmVuc3VyZShbJ2FwaS9wcm92aWRlci9odG1sNS9wcm92aWRlcnMvRGFzaCddLCBmdW5jdGlvbihyZXF1aXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gcmVxdWlyZSgnYXBpL3Byb3ZpZGVyL2h0bWw1L3Byb3ZpZGVycy9EYXNoJykuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZVByb3ZpZGVyKFBST1ZJREVSX0RBU0gsIHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge25hbWUgOiBQUk9WSURFUl9EQVNILCBwcm92aWRlciA6IHByb3ZpZGVyfTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9LCdvdmVucGxheWVyLnByb3ZpZGVyLkRhc2hQcm92aWRlcidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGhscyA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZS5lbnN1cmUoWydhcGkvcHJvdmlkZXIvaHRtbDUvcHJvdmlkZXJzL0hscyddLCBmdW5jdGlvbihyZXF1aXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gcmVxdWlyZSgnYXBpL3Byb3ZpZGVyL2h0bWw1L3Byb3ZpZGVycy9IbHMnKS5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlUHJvdmlkZXIoUFJPVklERVJfSExTLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtuYW1lIDogUFJPVklERVJfSExTLCBwcm92aWRlciA6IHByb3ZpZGVyfTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcbiAgICAgICAgICAgICAgICB9LCdvdmVucGxheWVyLnByb3ZpZGVyLkhsc1Byb3ZpZGVyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgcnRtcCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWlyZS5lbnN1cmUoWydhcGkvcHJvdmlkZXIvZmxhc2gvcHJvdmlkZXJzL1J0bXAnXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IHJlcXVpcmUoJ2FwaS9wcm92aWRlci9mbGFzaC9wcm92aWRlcnMvUnRtcCcpLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVQcm92aWRlcihQUk9WSURFUl9SVE1QLCBwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7bmFtZSA6IFBST1ZJREVSX1JUTVAsIHByb3ZpZGVyIDogcHJvdmlkZXJ9O1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayBlcnJvcicpO1xuICAgICAgICAgICAgICAgIH0sJ292ZW5wbGF5ZXIucHJvdmlkZXIuUnRtcFByb3ZpZGVyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHRoYXQubG9hZFByb3ZpZGVycyA9IChwbGF5bGlzdEl0ZW0pID0+e1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRQcm92aWRlck5hbWVzID0gc3VwcG9ydENoYWNrZXIuZmluZFByb3ZpZGVyTmFtZXNCeVBsYXlsaXN0KHBsYXlsaXN0SXRlbSk7XG4gICAgICAgIE92ZW5QbGF5ZXJDb25zb2xlLmxvZyhcIlByb3ZpZGVyQ29udHJvbGxlciBsb2FkUHJvdmlkZXJzKCkgXCIsIHN1cHBvcnRlZFByb3ZpZGVyTmFtZXMpO1xuICAgICAgICBpZighc3VwcG9ydGVkUHJvdmlkZXJOYW1lcyl7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoRVJST1JTLmNvZGVzW0lOSVRfVU5TVVBQT1JUX0VSUk9SXSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZFByb3ZpZGVyTmFtZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3ZpZGVyTmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIVByb3ZpZGVyTG9hZGVyW3Byb3ZpZGVyTmFtZV07XG4gICAgICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uKHByb3ZpZGVyTmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm92aWRlckxvYWRlcltwcm92aWRlck5hbWVdKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB0aGF0LmZpbmRCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJQcm92aWRlckNvbnRyb2xsZXIgZmluZEJ5TmFtZSgpIFwiLCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIFByb3ZpZGVyc1tuYW1lXTtcbiAgICB9O1xuXG4gICAgdGhhdC5nZXRQcm92aWRlckJ5U291cmNlID0gKHNvdXJjZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRQcm92aWRlck5hbWUgPSBzdXBwb3J0Q2hhY2tlci5maW5kUHJvdmlkZXJOYW1lQnlTb3VyY2Uoc291cmNlKTtcbiAgICAgICAgT3ZlblBsYXllckNvbnNvbGUubG9nKFwiUHJvdmlkZXJDb250cm9sbGVyIGdldFByb3ZpZGVyQnlTb3VyY2UoKSBcIiwgc3VwcG9ydGVkUHJvdmlkZXJOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoYXQuZmluZEJ5TmFtZShzdXBwb3J0ZWRQcm92aWRlck5hbWUpO1xuICAgIH07XG5cbiAgICB0aGF0LmlzU2FtZVByb3ZpZGVyID0gKGN1cnJlbnRTb3VyY2UsIG5ld1NvdXJjZSkgPT4ge1xuICAgICAgICBPdmVuUGxheWVyQ29uc29sZS5sb2coXCJQcm92aWRlckNvbnRyb2xsZXIgaXNTYW1lUHJvdmlkZXIoKSBcIiwgc3VwcG9ydENoYWNrZXIuZmluZFByb3ZpZGVyTmFtZUJ5U291cmNlKGN1cnJlbnRTb3VyY2UpICwgc3VwcG9ydENoYWNrZXIuZmluZFByb3ZpZGVyTmFtZUJ5U291cmNlKG5ld1NvdXJjZSkgKTtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRDaGFja2VyLmZpbmRQcm92aWRlck5hbWVCeVNvdXJjZShjdXJyZW50U291cmNlKSA9PT0gc3VwcG9ydENoYWNrZXIuZmluZFByb3ZpZGVyTmFtZUJ5U291cmNlKG5ld1NvdXJjZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGF0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcbiIsImltcG9ydCBBUEkgZnJvbSAnYXBpL0FwaSc7XG5pbXBvcnQge2lzV2ViUlRDfSBmcm9tICd1dGlscy92YWxpZGF0b3InO1xuaW1wb3J0IF8gZnJvbSAndXRpbHMvdW5kZXJzY29yZSc7XG5pbXBvcnQgTGEkIGZyb20gJ3V0aWxzL2xpa2VBJCc7XG5pbXBvcnQge2dldFNjcmlwdFBhdGh9IGZyb20gJ3V0aWxzL3dlYnBhY2snO1xuXG5cbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gZ2V0U2NyaXB0UGF0aCgnb3ZlbnBsYXllci5zZGsuanMnKTtcblxuLyoqXG4gKiBNYWluIE92ZW5QbGF5ZXJTREsgb2JqZWN0XG4gKi9cbmNvbnN0IE92ZW5QbGF5ZXJTREsgPSB3aW5kb3cuT3ZlblBsYXllclNESyA9IHt9O1xuXG5jb25zdCBwbGF5ZXJMaXN0ID0gT3ZlblBsYXllclNESy5wbGF5ZXJMaXN0ID0gW107XG5cbmV4cG9ydCBjb25zdCBjaGVja0FuZEdldENvbnRhaW5lckVsZW1lbnQgPSBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuXG4gICAgICAgIC8vIFRPRE8ocm9jayk6IFNob3VsZCBjYXVzZSBhbiBlcnJvci5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lckVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcik7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXIubm9kZVR5cGUpIHtcblxuICAgICAgICBjb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE8ocm9jayk6IFNob3VsZCBjYXVzZSBhbiBlcnJvci5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIHBsYXllciBpbnN0YW5jZSBhbmQgcmV0dXJuIGl0LlxuICpcbiAqIEBwYXJhbSAgICAgIHtzdHJpbmcgfCBkb20gZWxlbWVudH0gY29udGFpbmVyICBJZCBvZiBjb250YWluZXIgZWxlbWVudCBvciBjb250YWluZXIgZWxlbWVudFxuICogQHBhcmFtICAgICAge29iamVjdH0gb3B0aW9ucyAgVGhlIG9wdGlvbnNcbiAqL1xuT3ZlblBsYXllclNESy5jcmVhdGUgPSBmdW5jdGlvbihjb250YWluZXIsIG9wdGlvbnMpIHtcblxuICAgIGxldCBjb250YWluZXJFbGVtZW50ID0gY2hlY2tBbmRHZXRDb250YWluZXJFbGVtZW50KGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwbGF5ZXJJbnN0YW5jZSA9IEFQSShjb250YWluZXJFbGVtZW50KTtcbiAgICBwbGF5ZXJJbnN0YW5jZS5pbml0KG9wdGlvbnMpO1xuXG4gICAgcGxheWVyTGlzdC5wdXNoKHBsYXllckluc3RhbmNlKTtcblxuICAgIHJldHVybiBwbGF5ZXJJbnN0YW5jZTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgcGxheWVyIGluc3RhbmNlIGxpc3QuXG4gKlxuICogQHJldHVybiAgICAge2FycmF5fSAgVGhlIHBsYXllciBsaXN0LlxuICovXG5PdmVuUGxheWVyU0RLLmdldFBsYXllckxpc3QgPSBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiBwbGF5ZXJMaXN0O1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwbGF5ZXIgaW5zdGFuY2UgYnkgY29udGFpbmVyIGlkLlxuICpcbiAqIEBwYXJhbSAgICAgIHtzdHJpbmd9ICBjb250YWluZXJJZCAgVGhlIGNvbnRhaW5lciBpZGVudGlmaWVyXG4gKiBAcmV0dXJuICAgICB7b2JlamVjdCB8IG51bGx9ICBUaGUgcGxheWVyIGluc3RhbmNlLlxuICovXG5PdmVuUGxheWVyU0RLLmdldFBsYXllckJ5Q29udGFpbmVySWQgPSBmdW5jdGlvbihjb250YWluZXJJZCkge1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aDsgaSArKykge1xuXG4gICAgICAgIGlmIChwbGF5ZXJMaXN0W2ldLmdldENvbnRhaW5lcklkKCkgPT09IGNvbnRhaW5lcklkKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJMaXN0W2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIHBsYXllciBpbnN0YW5jZSBieSBpbmRleC5cbiAqXG4gKiBAcGFyYW0gICAgICB7bnVtYmVyfSAgaW5kZXggICBUaGUgaW5kZXhcbiAqIEByZXR1cm4gICAgIHtvYmplY3QgfCBudWxsfSAgVGhlIHBsYXllciBpbnN0YW5jZS5cbiAqL1xuT3ZlblBsYXllclNESy5nZXRQbGF5ZXJCeUluZGV4ID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgIGNvbnN0IHBsYXllckluc3RhbmNlID0gcGxheWVyTGlzdFtpbmRleF07XG5cbiAgICBpZiAocGxheWVySW5zdGFuY2UpIHtcblxuICAgICAgICByZXR1cm4gcGxheWVySW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgcGxheWVyIGluc3RhbmNlIGJ5IHBsYXllcklkLlxuICpcbiAqIEBwYXJhbSAgICAgIHtwbGF5ZXJJZH0gIGlkXG4gKiBAcmV0dXJuICAgICB7bnVsbH1cbiAqL1xuT3ZlblBsYXllclNESy5yZW1vdmVQbGF5ZXIgPSBmdW5jdGlvbihwbGF5ZXJJZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyTGlzdC5sZW5ndGg7IGkgKyspIHtcblxuICAgICAgICBpZiAocGxheWVyTGlzdFtpXS5nZXRDb250YWluZXJJZCgpID09PSBwbGF5ZXJJZCkge1xuXG4gICAgICAgICAgICBwbGF5ZXJMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB3ZWJydGMgc291cmNlIGZvciBwbGF5ZXIgc291cmNlIHR5cGUuXG4gKlxuICogQHBhcmFtICAgICAge09iamVjdCB8IEFycmF5fSAgc291cmNlICAgd2VicnRjIHNvdXJjZVxuICogQHJldHVybiAgICAge0FycmF5fSAgUGxheWVyIHNvdXJjZSBPYmplY3QuXG4gKi9cbk92ZW5QbGF5ZXJTREsuZ2VuZXJhdGVXZWJydGNVcmxzID0gZnVuY3Rpb24oc291cmNlcykge1xuICAgIHJldHVybiAoXy5pc0FycmF5KHNvdXJjZXMpID8gc291cmNlcyA6IFtzb3VyY2VzXSkubWFwKGZ1bmN0aW9uKHNvdXJjZSwgaW5kZXgpe1xuICAgICAgICBpZihzb3VyY2UuaG9zdCAmJiBpc1dlYlJUQyhzb3VyY2UuaG9zdCkgJiYgc291cmNlLmFwcGxpY2F0aW9uICYmIHNvdXJjZS5zdHJlYW0pe1xuICAgICAgICAgICAgcmV0dXJuIHtmaWxlIDogc291cmNlLmhvc3QgKyBcIi9cIiArIHNvdXJjZS5hcHBsaWNhdGlvbiArIFwiL1wiICsgc291cmNlLnN0cmVhbSwgdHlwZSA6IFwid2VicnRjXCIsIGxhYmVsIDogc291cmNlLmxhYmVsID8gc291cmNlLmxhYmVsIDogXCJ3ZWJydGMtXCIrKGluZGV4KzEpIH07XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKlxuICogV2hldGhlciBzaG93IHRoZSBwbGF5ZXIgY29yZSBsb2cgb3Igbm90LlxuICpcbiAqIEBwYXJhbSAgICAgIHtib29sZWFufSAgYm9vbGVhbiAgIHJ1biBkZWJ1ZyBtb2RlIG9yIG5vdC5cbiAqIEByZXR1cm4gICAgIHtib29sZWFufSAgcnVuIGRlYnVnIG1vZGUgb3Igbm90LlxuICovXG5PdmVuUGxheWVyU0RLLmRlYnVnID0gZnVuY3Rpb24oaXNEZWJ1Z01vZGUpIHtcbiAgICBpZihpc0RlYnVnTW9kZSl7XG4gICAgICAgIHdpbmRvdy5PdmVuUGxheWVyQ29uc29sZSA9IHtsb2cgOiB3aW5kb3dbJ2NvbnNvbGUnXVsnbG9nJ119O1xuICAgIH1lbHNle1xuICAgICAgICB3aW5kb3cuT3ZlblBsYXllckNvbnNvbGUgPSB7bG9nIDogIGZ1bmN0aW9uKCl7fX07XG4gICAgfVxuICAgIHJldHVybiBpc0RlYnVnTW9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE92ZW5QbGF5ZXJTREs7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgaG9obyBvbiAyMDE4LiA4LiAyNC4uXG4gKi9cblxuZXhwb3J0IGNvbnN0IGdldEJyb3dzZXJMYW5ndWFnZSA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IG5hdiA9IHdpbmRvdy5uYXZpZ2F0b3IsXG4gICAgICAgIGJyb3dzZXJMYW5ndWFnZVByb3BlcnR5S2V5cyA9IFsnbGFuZ3VhZ2UnLCAnYnJvd3Nlckxhbmd1YWdlJywgJ3N5c3RlbUxhbmd1YWdlJywgJ3VzZXJMYW5ndWFnZSddLFxuICAgICAgICBpLFxuICAgICAgICBsYW5ndWFnZTtcblxuICAgIC8vIHN1cHBvcnQgZm9yIEhUTUwgNS4xIFwibmF2aWdhdG9yLmxhbmd1YWdlc1wiXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobmF2Lmxhbmd1YWdlcykpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG5hdi5sYW5ndWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxhbmd1YWdlID0gbmF2Lmxhbmd1YWdlc1tpXTtcbiAgICAgICAgICAgIGlmIChsYW5ndWFnZSAmJiBsYW5ndWFnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0IGZvciBvdGhlciB3ZWxsIGtub3duIHByb3BlcnRpZXMgaW4gYnJvd3NlcnNcbiAgICBmb3IgKGkgPSAwOyBpIDwgYnJvd3Nlckxhbmd1YWdlUHJvcGVydHlLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxhbmd1YWdlID0gbmF2W2Jyb3dzZXJMYW5ndWFnZVByb3BlcnR5S2V5c1tpXV07XG4gICAgICAgIGlmIChsYW5ndWFnZSAmJiBsYW5ndWFnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcbmV4cG9ydCBjb25zdCBhbmFsVXNlckFnZW50ID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgdW5rbm93biA9ICctJztcblxuICAgIC8vIHNjcmVlblxuICAgIGxldCBzY3JlZW5TaXplID0gJyc7XG4gICAgaWYgKHNjcmVlbi53aWR0aCkge1xuICAgICAgICBsZXQgd2lkdGggPSAoc2NyZWVuLndpZHRoKSA/IHNjcmVlbi53aWR0aCA6ICcnO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNjcmVlbi5oZWlnaHQpID8gc2NyZWVuLmhlaWdodCA6ICcnO1xuICAgICAgICBzY3JlZW5TaXplICs9ICcnICsgd2lkdGggKyBcIiB4IFwiICsgaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIGJyb3dzZXJcbiAgICBsZXQgblZlciA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuICAgIGxldCBuQWd0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBsZXQgYnJvd3NlciA9IG5hdmlnYXRvci5hcHBOYW1lO1xuICAgIGxldCB2ZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcbiAgICBsZXQgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcbiAgICBsZXQgaXNXZWJ2aWV3ID0gZmFsc2U7XG4gICAgbGV0IG5hbWVPZmZzZXQsIHZlck9mZnNldCwgaXg7XG5cbiAgICAvLyBPcGVyYVxuICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdPcGVyYScpKSAhPSAtMSkge1xuICAgICAgICBicm93c2VyID0gJ09wZXJhJztcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDYpO1xuICAgICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignVmVyc2lvbicpKSAhPSAtMSkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE9wZXJhIE5leHRcbiAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignT1BSJykpICE9IC0xKSB7XG4gICAgICAgIGJyb3dzZXIgPSAnT3BlcmEnO1xuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNCk7XG4gICAgfVxuICAgIC8v7IK87ISxIOu4jOudvOyasOyggFxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1NhbXN1bmdCcm93c2VyJykpICE9IC0xKSB7XG4gICAgICAgIGJyb3dzZXIgPSAnU2Ftc3VuZ0Jyb3dzZXInO1xuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgMTUpO1xuICAgIH1cbiAgICAvLyBFZGdlXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignRWRnZScpKSAhPSAtMSkge1xuICAgICAgICBicm93c2VyID0gJ01pY3Jvc29mdCBFZGdlJztcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDUpO1xuICAgIH1cbiAgICAvLyBNU0lFXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignTVNJRScpKSAhPSAtMSkge1xuICAgICAgICBicm93c2VyID0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3Jlcic7XG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA1KTtcblxuXG4gICAgICAgIC8vd2luNyBJRTExIHVzZXJBZ2VudCBpcyB1Z2x5Li4uLlxuICAgICAgICBpZiggKG5BZ3QuaW5kZXhPZignVHJpZGVudC8nKSAhPT0gLTEpICYmIChuQWd0LmluZGV4T2YoJ3J2OicpICE9PSAtMSkgICl7XG4gICAgICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcobkFndC5pbmRleE9mKCdydjonKSArIDMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENocm9tZVxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0Nocm9tZScpKSAhPSAtMSkge1xuICAgICAgICBicm93c2VyID0gJ0Nocm9tZSc7XG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignQ3JpT1MnKSkgIT0gLTEpIHsgICAvL2lwaG9uZSAtIGNocm9tZVxuICAgICAgICBicm93c2VyID0gJ0Nocm9tZSc7XG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA2KTtcbiAgICB9XG4gICAgLy8gRmlyZWZveFxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0ZpcmVmb3gnKSkgIT0gLTEpIHtcbiAgICAgICAgYnJvd3NlciA9ICdGaXJlZm94JztcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xuICAgIH1cbiAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdGeGlPUycpKSAhPSAtMSkge1xuICAgICAgICBicm93c2VyID0gJ0ZpcmVmb3gnO1xuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNik7XG4gICAgfVxuICAgIC8vIFNhZmFyaVxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1NhZmFyaScpKSAhPSAtMSkge1xuICAgICAgICBicm93c2VyID0gJ1NhZmFyaSc7XG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcbiAgICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1ZlcnNpb24nKSkgIT0gLTEpIHtcbiAgICAgICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gTVNJRSAxMStcbiAgICBlbHNlIGlmIChuQWd0LmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xKSB7XG4gICAgICAgIGJyb3dzZXIgPSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJztcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKG5BZ3QuaW5kZXhPZigncnY6JykgKyAzKTtcbiAgICB9XG4gICAgLy8gT3RoZXIgYnJvd3NlcnNcbiAgICBlbHNlIGlmICgobmFtZU9mZnNldCA9IG5BZ3QubGFzdEluZGV4T2YoJyAnKSArIDEpIDwgKHZlck9mZnNldCA9IG5BZ3QubGFzdEluZGV4T2YoJy8nKSkpIHtcbiAgICAgICAgYnJvd3NlciA9IG5BZ3Quc3Vic3RyaW5nKG5hbWVPZmZzZXQsIHZlck9mZnNldCk7XG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyAxKTtcbiAgICAgICAgaWYgKGJyb3dzZXIudG9Mb3dlckNhc2UoKSA9PSBicm93c2VyLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGJyb3dzZXIgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZihuQWd0LmluZGV4T2YoJyB3dicpID4gMCl7XG4gICAgICAgIGlzV2VidmlldyA9IHRydWU7XG4gICAgfVxuICAgIC8vIHRyaW0gdGhlIHZlcnNpb24gc3RyaW5nXG4gICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignOycpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcbiAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCcgJykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xuICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJyknKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XG5cbiAgICBtYWpvclZlcnNpb24gPSBwYXJzZUludCgnJyArIHZlcnNpb24sIDEwKTtcbiAgICBpZiAoaXNOYU4obWFqb3JWZXJzaW9uKSkge1xuICAgICAgICB2ZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcbiAgICAgICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcbiAgICB9XG5cbiAgICAvLyBtb2JpbGUgdmVyc2lvblxuICAgIHZhciBtb2JpbGUgPSAvTW9iaWxlfG1pbml8RmVubmVjfEFuZHJvaWR8aVAoYWR8b2R8aG9uZSkvLnRlc3QoblZlcik7XG5cbiAgICAvLyBjb29raWVcbiAgICB2YXIgY29va2llRW5hYmxlZCA9IChuYXZpZ2F0b3IuY29va2llRW5hYmxlZCkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvci5jb29raWVFbmFibGVkID09ICd1bmRlZmluZWQnICYmICFjb29raWVFbmFibGVkKSB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICd0ZXN0Y29va2llJztcbiAgICAgICAgY29va2llRW5hYmxlZCA9IChkb2N1bWVudC5jb29raWUuaW5kZXhPZigndGVzdGNvb2tpZScpICE9IC0xKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBzeXN0ZW1cbiAgICB2YXIgb3MgPSB1bmtub3duO1xuICAgIHZhciBjbGllbnRTdHJpbmdzID0gW1xuICAgICAgICB7czonV2luZG93cyAxMCcsIHI6LyhXaW5kb3dzIDEwLjB8V2luZG93cyBOVCAxMC4wKS99LFxuICAgICAgICB7czonV2luZG93cyA4LjEnLCByOi8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpL30sXG4gICAgICAgIHtzOidXaW5kb3dzIDgnLCByOi8oV2luZG93cyA4fFdpbmRvd3MgTlQgNi4yKS99LFxuICAgICAgICB7czonV2luZG93cyA3JywgcjovKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvfSxcbiAgICAgICAge3M6J1dpbmRvd3MgVmlzdGEnLCByOi9XaW5kb3dzIE5UIDYuMC99LFxuICAgICAgICB7czonV2luZG93cyBTZXJ2ZXIgMjAwMycsIHI6L1dpbmRvd3MgTlQgNS4yL30sXG4gICAgICAgIHtzOidXaW5kb3dzIFhQJywgcjovKFdpbmRvd3MgTlQgNS4xfFdpbmRvd3MgWFApL30sXG4gICAgICAgIHtzOidXaW5kb3dzIDIwMDAnLCByOi8oV2luZG93cyBOVCA1LjB8V2luZG93cyAyMDAwKS99LFxuICAgICAgICB7czonV2luZG93cyBNRScsIHI6LyhXaW4gOXggNC45MHxXaW5kb3dzIE1FKS99LFxuICAgICAgICB7czonV2luZG93cyA5OCcsIHI6LyhXaW5kb3dzIDk4fFdpbjk4KS99LFxuICAgICAgICB7czonV2luZG93cyA5NScsIHI6LyhXaW5kb3dzIDk1fFdpbjk1fFdpbmRvd3NfOTUpL30sXG4gICAgICAgIHtzOidXaW5kb3dzIE5UIDQuMCcsIHI6LyhXaW5kb3dzIE5UIDQuMHxXaW5OVDQuMHxXaW5OVHxXaW5kb3dzIE5UKS99LFxuICAgICAgICB7czonV2luZG93cyBDRScsIHI6L1dpbmRvd3MgQ0UvfSxcbiAgICAgICAge3M6J1dpbmRvd3MgMy4xMScsIHI6L1dpbjE2L30sXG4gICAgICAgIHtzOidBbmRyb2lkJywgcjovQW5kcm9pZC99LFxuICAgICAgICB7czonT3BlbiBCU0QnLCByOi9PcGVuQlNEL30sXG4gICAgICAgIHtzOidTdW4gT1MnLCByOi9TdW5PUy99LFxuICAgICAgICB7czonTGludXgnLCByOi8oTGludXh8WDExKS99LFxuICAgICAgICB7czonaU9TJywgcjovKGlQaG9uZXxpUGFkfGlQb2QpL30sXG4gICAgICAgIHtzOidNYWMgT1MgWCcsIHI6L01hYyBPUyBYL30sXG4gICAgICAgIHtzOidNYWMgT1MnLCByOi8oTWFjUFBDfE1hY0ludGVsfE1hY19Qb3dlclBDfE1hY2ludG9zaCkvfSxcbiAgICAgICAge3M6J1FOWCcsIHI6L1FOWC99LFxuICAgICAgICB7czonVU5JWCcsIHI6L1VOSVgvfSxcbiAgICAgICAge3M6J0JlT1MnLCByOi9CZU9TL30sXG4gICAgICAgIHtzOidPUy8yJywgcjovT1NcXC8yL30sXG4gICAgICAgIHtzOidTZWFyY2ggQm90JywgcjovKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFzayBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvfVxuICAgIF07XG4gICAgZm9yICh2YXIgaWQgaW4gY2xpZW50U3RyaW5ncykge1xuICAgICAgICB2YXIgY3MgPSBjbGllbnRTdHJpbmdzW2lkXTtcbiAgICAgICAgaWYgKGNzLnIudGVzdChuQWd0KSkge1xuICAgICAgICAgICAgb3MgPSBjcy5zO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgb3NWZXJzaW9uID0gdW5rbm93bjtcblxuICAgIGlmICgvV2luZG93cy8udGVzdChvcykpIHtcbiAgICAgICAgb3NWZXJzaW9uID0gL1dpbmRvd3MgKC4qKS8uZXhlYyhvcylbMV07XG4gICAgICAgIG9zID0gJ1dpbmRvd3MnO1xuICAgIH1cblxuICAgIHN3aXRjaCAob3MpIHtcbiAgICAgICAgY2FzZSAnTWFjIE9TIFgnOlxuICAgICAgICAgICAgb3NWZXJzaW9uID0gL01hYyBPUyBYICgxMFtcXC5cXF9cXGRdKykvLmV4ZWMobkFndClbMV07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBbmRyb2lkJzpcbiAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9BbmRyb2lkIChbXFwuXFxfXFxkXSspLy5leGVjKG5BZ3QpWzFdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnaU9TJzpcbiAgICAgICAgICAgIG9zVmVyc2lvbiA9IC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Ly5leGVjKG5WZXIpO1xuICAgICAgICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uWzFdICsgJy4nICsgb3NWZXJzaW9uWzJdICsgJy4nICsgKG9zVmVyc2lvblszXSB8IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NyZWVuOiBzY3JlZW5TaXplLFxuICAgICAgICBicm93c2VyOiBicm93c2VyLFxuICAgICAgICBicm93c2VyVmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgYnJvd3Nlck1ham9yVmVyc2lvbjogbWFqb3JWZXJzaW9uLFxuICAgICAgICBtb2JpbGU6IG1vYmlsZSxcbiAgICAgICAgdWEgOiBuQWd0LFxuICAgICAgICBvczogb3MsXG4gICAgICAgIG9zVmVyc2lvbjogb3NWZXJzaW9uLFxuICAgICAgICBjb29raWVzOiBjb29raWVFbmFibGVkXG4gICAgfTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDEzIHZ0dC5qcyBDb250cmlidXRvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5sZXQgVlRUQ3VlID0gd2luZG93LlZUVEN1ZTtcblxudmFyIGF1dG9LZXl3b3JkID0gXCJhdXRvXCI7XG52YXIgZGlyZWN0aW9uU2V0dGluZyA9IHtcbiAgICBcIlwiOiB0cnVlLFxuICAgIFwibHJcIjogdHJ1ZSxcbiAgICBcInJsXCI6IHRydWVcbn07XG52YXIgYWxpZ25TZXR0aW5nID0ge1xuICAgIFwic3RhcnRcIjogdHJ1ZSxcbiAgICBcIm1pZGRsZVwiOiB0cnVlLFxuICAgIFwiZW5kXCI6IHRydWUsXG4gICAgXCJsZWZ0XCI6IHRydWUsXG4gICAgXCJyaWdodFwiOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBmaW5kRGlyZWN0aW9uU2V0dGluZyh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZGlyID0gZGlyZWN0aW9uU2V0dGluZ1t2YWx1ZS50b0xvd2VyQ2FzZSgpXTtcbiAgICByZXR1cm4gZGlyID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaW5kQWxpZ25TZXR0aW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBhbGlnbiA9IGFsaWduU2V0dGluZ1t2YWx1ZS50b0xvd2VyQ2FzZSgpXTtcbiAgICByZXR1cm4gYWxpZ24gPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmopIHtcbiAgICB2YXIgaSA9IDE7XG4gICAgZm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gY29iaikge1xuICAgICAgICAgICAgb2JqW3BdID0gY29ialtwXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5pZighVlRUQ3VlKXtcbiAgICBWVFRDdWUgPSBmdW5jdGlvbiAoc3RhcnRUaW1lLCBlbmRUaW1lLCB0ZXh0KSB7XG4gICAgICAgIHZhciBjdWUgPSB0aGlzO1xuICAgICAgICB2YXIgaXNJRTggPSAoL01TSUVcXHM4XFwuMC8pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIHZhciBiYXNlT2JqID0ge307XG5cbiAgICAgICAgaWYgKGlzSUU4KSB7XG4gICAgICAgICAgICBjdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjdXN0b20nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhc2VPYmouZW51bWVyYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hpbSBpbXBsZW1lbnRhdGlvbiBzcGVjaWZpYyBwcm9wZXJ0aWVzLiBUaGVzZSBwcm9wZXJ0aWVzIGFyZSBub3QgaW5cbiAgICAgICAgICogdGhlIHNwZWMuXG4gICAgICAgICAqL1xuXG4gICAgICAgICAgICAvLyBMZXRzIHVzIGtub3cgd2hlbiB0aGUgVlRUQ3VlJ3MgZGF0YSBoYXMgY2hhbmdlZCBpbiBzdWNoIGEgd2F5IHRoYXQgd2UgbmVlZFxuICAgICAgICAgICAgLy8gdG8gcmVjb21wdXRlIGl0cyBkaXNwbGF5IHN0YXRlLiBUaGlzIGxldHMgdXMgY29tcHV0ZSBpdHMgZGlzcGxheSBzdGF0ZVxuICAgICAgICAgICAgLy8gbGF6aWx5LlxuICAgICAgICBjdWUuaGFzQmVlblJlc2V0ID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZUVEN1ZSBhbmQgVGV4dFRyYWNrQ3VlIHByb3BlcnRpZXNcbiAgICAgICAgICogaHR0cDovL2Rldi53My5vcmcvaHRtbDUvd2VidnR0LyN2dHRjdWUtaW50ZXJmYWNlXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfaWQgPSBcIlwiO1xuICAgICAgICB2YXIgX3BhdXNlT25FeGl0ID0gZmFsc2U7XG4gICAgICAgIHZhciBfc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB2YXIgX2VuZFRpbWUgPSBlbmRUaW1lO1xuICAgICAgICB2YXIgX3RleHQgPSB0ZXh0O1xuICAgICAgICB2YXIgX3JlZ2lvbiA9IG51bGw7XG4gICAgICAgIHZhciBfdmVydGljYWwgPSBcIlwiO1xuICAgICAgICB2YXIgX3NuYXBUb0xpbmVzID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9saW5lID0gXCJhdXRvXCI7XG4gICAgICAgIHZhciBfbGluZUFsaWduID0gXCJzdGFydFwiO1xuICAgICAgICB2YXIgX3Bvc2l0aW9uID0gNTA7XG4gICAgICAgIHZhciBfcG9zaXRpb25BbGlnbiA9IFwibWlkZGxlXCI7XG4gICAgICAgIHZhciBfc2l6ZSA9IDUwO1xuICAgICAgICB2YXIgX2FsaWduID0gXCJtaWRkbGVcIjtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VlLFxuICAgICAgICAgICAgXCJpZFwiLCBleHRlbmQoe30sIGJhc2VPYmosIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2lkO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfaWQgPSBcIlwiICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdWUsXG4gICAgICAgICAgICBcInBhdXNlT25FeGl0XCIsIGV4dGVuZCh7fSwgYmFzZU9iaiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcGF1c2VPbkV4aXQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXVzZU9uRXhpdCA9ICEhdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdWUsXG4gICAgICAgICAgICBcInN0YXJ0VGltZVwiLCBleHRlbmQoe30sIGJhc2VPYmosIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3N0YXJ0VGltZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN0YXJ0IHRpbWUgbXVzdCBiZSBzZXQgdG8gYSBudW1iZXIuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9zdGFydFRpbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNCZWVuUmVzZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VlLFxuICAgICAgICAgICAgXCJlbmRUaW1lXCIsIGV4dGVuZCh7fSwgYmFzZU9iaiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZW5kVGltZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVuZCB0aW1lIG11c3QgYmUgc2V0IHRvIGEgbnVtYmVyLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfZW5kVGltZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdWUsXG4gICAgICAgICAgICBcInRleHRcIiwgZXh0ZW5kKHt9LCBiYXNlT2JqLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90ZXh0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGV4dCA9IFwiXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNCZWVuUmVzZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VlLFxuICAgICAgICAgICAgXCJyZWdpb25cIiwgZXh0ZW5kKHt9LCBiYXNlT2JqLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdpb247XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yZWdpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNCZWVuUmVzZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VlLFxuICAgICAgICAgICAgXCJ2ZXJ0aWNhbFwiLCBleHRlbmQoe30sIGJhc2VPYmosIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZlcnRpY2FsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGluZyA9IGZpbmREaXJlY3Rpb25TZXR0aW5nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGF2ZSB0byBjaGVjayBmb3IgZmFsc2UgYmVjYXVzZSB0aGUgc2V0dGluZyBhbiBiZSBhbiBlbXB0eSBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiQW4gaW52YWxpZCBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdmVydGljYWwgPSBzZXR0aW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdWUsXG4gICAgICAgICAgICBcInNuYXBUb0xpbmVzXCIsIGV4dGVuZCh7fSwgYmFzZU9iaiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfc25hcFRvTGluZXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zbmFwVG9MaW5lcyA9ICEhdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQmVlblJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN1ZSxcbiAgICAgICAgICAgIFwibGluZVwiLCBleHRlbmQoe30sIGJhc2VPYmosIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2xpbmU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIgJiYgdmFsdWUgIT09IGF1dG9LZXl3b3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJBbiBpbnZhbGlkIG51bWJlciBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfbGluZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdWUsXG4gICAgICAgICAgICBcImxpbmVBbGlnblwiLCBleHRlbmQoe30sIGJhc2VPYmosIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2xpbmVBbGlnbjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNldHRpbmcgPSBmaW5kQWxpZ25TZXR0aW5nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9saW5lQWxpZ24gPSBzZXR0aW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdWUsXG4gICAgICAgICAgICBcInBvc2l0aW9uXCIsIGV4dGVuZCh7fSwgYmFzZU9iaiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcG9zaXRpb247XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBvc2l0aW9uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMDAuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9wb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdWUsXG4gICAgICAgICAgICBcInBvc2l0aW9uQWxpZ25cIiwgZXh0ZW5kKHt9LCBiYXNlT2JqLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9wb3NpdGlvbkFsaWduO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGluZyA9IGZpbmRBbGlnblNldHRpbmcodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNldHRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkFuIGludmFsaWQgb3IgaWxsZWdhbCBzdHJpbmcgd2FzIHNwZWNpZmllZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3Bvc2l0aW9uQWxpZ24gPSBzZXR0aW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0JlZW5SZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdWUsXG4gICAgICAgICAgICBcInNpemVcIiwgZXh0ZW5kKHt9LCBiYXNlT2JqLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9zaXplO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaXplIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMDAuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9zaXplID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQmVlblJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN1ZSxcbiAgICAgICAgICAgIFwiYWxpZ25cIiwgZXh0ZW5kKHt9LCBiYXNlT2JqLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9hbGlnbjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNldHRpbmcgPSBmaW5kQWxpZ25TZXR0aW5nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZXR0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9hbGlnbiA9IHNldHRpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQmVlblJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE90aGVyIDx0cmFjaz4gc3BlYyBkZWZpbmVkIHByb3BlcnRpZXNcbiAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8vIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL3RoZS12aWRlby1lbGVtZW50Lmh0bWwjdGV4dC10cmFjay1jdWUtZGlzcGxheS1zdGF0ZVxuICAgICAgICBjdWUuZGlzcGxheVN0YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChpc0lFOCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZUVEN1ZSBtZXRob2RzXG4gICAgICovXG5cbiAgICBWVFRDdWUucHJvdG90eXBlLmdldEN1ZUFzSFRNTCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBBc3N1bWUgV2ViVlRULmNvbnZlcnRDdWVUb0RPTVRyZWUgaXMgb24gdGhlIGdsb2JhbC5cbiAgICAgICAgcmV0dXJuIFdlYlZUVC5jb252ZXJ0Q3VlVG9ET01UcmVlKHdpbmRvdywgdGhpcy50ZXh0KTtcbiAgICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWVFRDdWU7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNy4gMjMuLlxuICovXG5pbXBvcnQgXyBmcm9tIFwidXRpbHMvdW5kZXJzY29yZVwiO1xuXG4vKipcbiAqIEBicmllZiAgIEl0IHdhcyByZXBsYWNlIGpxdWVyeSdzIHNlbGVjdG9yLiBJdCBPZnRlbiB1c2VkIGJ5IE92ZW5UZW1wbGF0ZS4gKC92aWV3L2VuZ2luZS9PdmVuVGVtcGxhdGUuanMpXG4gKiBAcGFyYW0gICBzZWxlY3Rvck9yRWxlbWVudCAgc3RyaW5nIG9yIGVsZW1lbnRcbiAqXG4gKiAqL1xuXG5cbmNvbnN0IExhJCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3JFbGVtZW50KXtcbiAgICBjb25zdCB0aGF0ID0ge307XG4gICAgY29uc3QgcmV0dXJuTm9kZSA9IGZ1bmN0aW9uKCRlbGVtZW50ICwgc2VsZWN0b3Ipe1xuICAgICAgICBsZXQgbm9kZUxpc3QgPSAgJGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIGlmKG5vZGVMaXN0Lmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVMaXN0O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGxldCAkZWxlbWVudCA9IFwiXCI7XG5cbiAgICBpZiggXy5pc0VsZW1lbnQoc2VsZWN0b3JPckVsZW1lbnQpIHx8IF8uZXZlcnkoc2VsZWN0b3JPckVsZW1lbnQsIGZ1bmN0aW9uKGl0ZW0pe3JldHVybiBfLmlzRWxlbWVudChpdGVtKX0pKXtcbiAgICAgICAgJGVsZW1lbnQgPSBzZWxlY3Rvck9yRWxlbWVudDtcbiAgICB9ZWxzZSBpZihzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJkb2N1bWVudFwiKXtcbiAgICAgICAgJGVsZW1lbnQgPSBkb2N1bWVudDtcbiAgICB9ZWxzZSBpZihzZWxlY3Rvck9yRWxlbWVudCA9PT0gXCJ3aW5kb3dcIil7XG4gICAgICAgICRlbGVtZW50ID0gd2luZG93O1xuICAgIH1lbHNle1xuICAgICAgICAkZWxlbWVudCA9IHJldHVybk5vZGUoZG9jdW1lbnQsIHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgICB9XG5cblxuICAgIGlmKCEkZWxlbWVudCl7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qRUZGRUNUUyovXG5cbiAgICB0aGF0LnNob3cgPSAoKSA9PntcbiAgICAgICAgJGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfTtcblxuICAgIHRoYXQuaGlkZSA9ICgpID0+e1xuICAgICAgICAkZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG5cbiAgICAvKkVMRU1FTlRTKi9cblxuICAgIHRoYXQuYWRkQ2xhc3MgPSAobmFtZSkgPT57XG4gICAgICAgIGlmKCRlbGVtZW50LmNsYXNzTGlzdCl7XG4gICAgICAgICAgICAkZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBjbGFzc05hbWVzID0gJGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgIGlmKGNsYXNzTmFtZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpe1xuICAgICAgICAgICAgICAgICRlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhhdC5hZnRlciA9IChodG1sU3RyaW5nKSA9PiB7XG4gICAgICAgICRlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sU3RyaW5nKTtcbiAgICB9O1xuXG4gICAgdGhhdC5hcHBlbmQgPSAoaHRtbFN0cmluZykgPT4ge1xuICAgICAgICAkZWxlbWVudC5hcHBlbmRDaGlsZChodG1sU3RyaW5nKTtcbiAgICB9O1xuXG4gICAgdGhhdC5iZWZvcmUgPSAoaHRtbFN0cmluZykgPT4ge1xuICAgICAgICAkZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgaHRtbFN0cmluZyk7XG4gICAgfTtcblxuICAgIHRoYXQuY2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAkZWxlbWVudC5jaGlsZHJlbiB8fCBbXTtcbiAgICB9O1xuXG4gICAgLy9UaGUgY29udGFpbnMoKSBtZXRob2QgcmV0dXJucyBhIEJvb2xlYW4gdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIGEgbm9kZSBpcyBhIGRlc2NlbmRhbnQgb2YgYSBzcGVjaWZpZWQgbm9kZS5cbiAgICAvL0EgZGVzY2VuZGFudCBjYW4gYmUgYSBjaGlsZCwgZ3JhbmRjaGlsZCwgZ3JlYXQtZ3JhbmRjaGlsZCwgYW5kIHNvIG9uLlxuICAgIHRoYXQuY29udGFpbnMgPSAoZWxDaGlsZCkgPT4ge1xuICAgICAgICByZXR1cm4gJGVsZW1lbnQgIT09IGVsQ2hpbGQgJiYgJGVsZW1lbnQuY29udGFpbnMoZWxDaGlsZCk7XG4gICAgfTtcblxuICAgIHRoYXQuZW1wdHkgPSAoKSA9PiB7XG4gICAgICAgICRlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfTtcblxuXG4gICAgdGhhdC5maW5kID0gKHNlbGVjdG9yKSA9PntcbiAgICAgICAgcmV0dXJuIExhJChyZXR1cm5Ob2RlKCRlbGVtZW50LCBzZWxlY3RvcikpO1xuICAgIH07XG5cbiAgICB0aGF0LmNzcyA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZih2YWx1ZSl7XG4gICAgICAgICAgICBpZigkZWxlbWVudC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICRlbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LnN0eWxlW25hbWVdO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cblxuICAgIHRoYXQucmVtb3ZlQ2xhc3MgPSAobmFtZSkgPT57XG4gICAgICAgIGlmICgkZWxlbWVudC5jbGFzc0xpc3Qpe1xuICAgICAgICAgICAgJGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkZWxlbWVudC5jbGFzc05hbWUgPSAkZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgbmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoYXQucmVtb3ZlQXR0cmlidXRlID0gKGF0dHJOYW1lKSA9PiB7XG4gICAgICAgICRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgfTtcblxuXG5cbiAgICAvKnRoYXQuYXBwZW5kID0gKGh0bWxDb2RlKSA9PntcbiAgICAgICAgJGVsZW1lbnQuaW5uZXJIVE1MICs9IGh0bWxDb2RlO1xuICAgIH07Ki9cblxuICAgIHRoYXQudGV4dCA9ICh0ZXh0KSA9PiB7IC8vSUU4K1xuICAgICAgICBpZih0ZXh0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICRlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhhdC5odG1sID0gKGh0bWxTdHJpbmcpID0+IHtcbiAgICAgICAgJGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcbiAgICB9O1xuICAgIHRoYXQuaGFzQ2xhc3MgPSAobmFtZSkgPT4geyAvL0lFOCtcbiAgICAgICAgaWYoJGVsZW1lbnQuY2xhc3NMaXN0KXtcbiAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMobmFtZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefCApJyArIG5hbWUgKyAnKCB8JCknLCAnZ2knKS50ZXN0KCRlbGVtZW50Lm5hbWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoYXQuaXMgPSAoJHRhcmdldEVsZW1lbnQpID0+IHtcbiAgICAgICAgLyp2YXIgbWF0Y2hlcyA9IGZ1bmN0aW9uKGVsLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIChlbC5tYXRjaGVzIHx8IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IpLmNhbGwoZWwsIHNlbGVjdG9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICBtYXRjaGVzKGVsLCAnLm15LWNsYXNzJyk7Ki9cbiAgICAgICAgcmV0dXJuICRlbGVtZW50ID09PSAkdGFyZ2V0RWxlbWVudDtcbiAgICB9O1xuXG4gICAgdGhhdC5vZmZzZXQgPSAoKSA9PnsgICAgLy9JRTgrXG4gICAgICAgIHZhciByZWN0ID0gJGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoYXQud2lkdGggPSAoKSA9PiB7ICAgIC8vSUU4K1xuICAgICAgICByZXR1cm4gJGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgfTtcblxuICAgIHRoYXQuaGVpZ2h0ID0gKCkgPT4geyAgIC8vSUU4K1xuICAgICAgICByZXR1cm4gJGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH07XG5cbiAgICB0aGF0LmF0dHIgPSAoYXR0cikgPT4ge1xuICAgICAgICByZXR1cm4gJGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgIH07XG5cbiAgICB0aGF0LnJlcGxhY2UgPSAoaHRtbCkgPT4ge1xuICAgICAgICAkZWxlbWVudC5yZXBsYWNlV2l0aChodG1sKTtcbiAgICB9O1xuXG5cbiAgICB0aGF0LnJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYoJGVsZW1lbnQubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICAkZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKCRlbGVtZW50KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoYXQucmVtb3ZlQ2hpbGQgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBpZihlbGVtZW50KXtcbiAgICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHdoaWxlICgkZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5yZW1vdmVDaGlsZCgkZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIHRoYXQuZ2V0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gJGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIHRoYXQuY2xvc2VzdCA9IChzZWxlY3RvclN0cmluZykgPT4ge1xuICAgICAgICBsZXQgY2xvc2VzdEVsZW1lbnQgPSAkZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yU3RyaW5nKTtcbiAgICAgICAgaWYoY2xvc2VzdEVsZW1lbnQpe1xuICAgICAgICAgICAgcmV0dXJuIExhJChjbG9zZXN0RWxlbWVudCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoYXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYSQ7XG4iLCJpbXBvcnQgXyBmcm9tICcuL3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nID8gc3RyaW5nLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSA6IFwiXCI7XG59XG5cbi8qKlxuICogZXh0cmFjdEV4dGVuc2lvblxuICpcbiAqIEBwYXJhbSAgICAgIHtzdHJpbmd9IHBhdGggZm9yIHVybFxuICogQHJldHVybiAgICAge3N0cmluZ30gIEV4dGVuc2lvblxuICovXG5leHBvcnQgY29uc3QgZXh0cmFjdEV4dGVuc2lvbiA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZighcGF0aCB8fCBwYXRoLnN1YnN0cigwLDQpPT0ncnRtcCcpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEF6dXJlRmlsZUZvcm1hdChwYXRoKSB7XG4gICAgICAgIGxldCBleHRlbnNpb24gPSBcIlwiO1xuICAgICAgICBpZiAoKC9bKCxdZm9ybWF0PW1wZC0vaSkudGVzdChwYXRoKSkge1xuICAgICAgICAgICAgZXh0ZW5zaW9uID0gJ21wZCc7XG4gICAgICAgIH1lbHNlIGlmICgoL1soLF1mb3JtYXQ9bTN1OC0vaSkudGVzdChwYXRoKSkge1xuICAgICAgICAgICAgZXh0ZW5zaW9uID0gJ20zdTgnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHRlbnNpb247XG4gICAgfVxuXG4gICAgbGV0IGF6dXJlZEZvcm1hdCA9IGdldEF6dXJlRmlsZUZvcm1hdChwYXRoKTtcbiAgICBpZihhenVyZWRGb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGF6dXJlZEZvcm1hdDtcbiAgICB9XG4gICAgcGF0aCA9IHBhdGguc3BsaXQoJz8nKVswXS5zcGxpdCgnIycpWzBdO1xuICAgIGlmKHBhdGgubGFzdEluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBwYXRoLnN1YnN0cihwYXRoLmxhc3RJbmRleE9mKCcuJykgKyAxLCBwYXRoLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufTtcblxuXG4vKipcbiAqIG5hdHVyYWxIbXNcbiAqXG4gKiBAcGFyYW0gICAgICB7bnVtYmVyIHwgc3RyaW5nfSAgc2Vjb25kICBUaGUgc2Vjb25kXG4gKiBAcmV0dXJuICAgICB7c3RyaW5nfSAgZm9ybWF0dGVkIFN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbmF0dXJhbEhtcyhzZWNvbmQpIHtcbiAgICBsZXQgc2VjTnVtID0gcGFyc2VJbnQoc2Vjb25kLCAxMCk7XG4gICAgaWYoIXNlY29uZCl7XG4gICAgICAgIHJldHVybiBcIjAwOjAwXCI7XG4gICAgfVxuICAgIGxldCBob3VycyAgID0gTWF0aC5mbG9vcihzZWNOdW0gLyAzNjAwKTtcbiAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKHNlY051bSAtIChob3VycyAqIDM2MDApKSAvIDYwKTtcbiAgICBsZXQgc2Vjb25kcyA9IHNlY051bSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCk7XG5cbiAgICAvL2lmIChob3VycyA+IDApIHttaW51dGVzID0gXCIwXCIrbWludXRlczt9XG4gICAgaWYgKG1pbnV0ZXMgPCAxMCkge21pbnV0ZXMgPSBcIjBcIittaW51dGVzO31cbiAgICBpZiAoc2Vjb25kcyA8IDEwKSB7c2Vjb25kcyA9IFwiMFwiK3NlY29uZHM7fVxuXG4gICAgaWYgKGhvdXJzID4gMCkge1xuICAgICAgICByZXR1cm4gaG91cnMrJzonK21pbnV0ZXMrJzonK3NlY29uZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1pbnV0ZXMrJzonK3NlY29uZHM7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBobXNUb1NlY29uZChzdHIsIGZyYW1lUmF0ZSkge1xuICAgIGlmKCFzdHIpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmKF8uaXNOdW1iZXIoc3RyKSAmJiAhXy5pc05hTihzdHIpKXtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoJywnLCAnLicpO1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoJzonKTtcbiAgICBsZXQgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICBsZXQgc2VjID0gMDtcbiAgICBpZiAoc3RyLnNsaWNlKC0xKSA9PT0gJ3MnKXtcbiAgICAgICAgc2VjID0gcGFyc2VGbG9hdChzdHIpO1xuICAgIH1lbHNlIGlmIChzdHIuc2xpY2UoLTEpID09PSAnbScpe1xuICAgICAgICBzZWMgPSBwYXJzZUZsb2F0KHN0cikgKiA2MDtcbiAgICB9ZWxzZSBpZiAoc3RyLnNsaWNlKC0xKSA9PT0gJ2gnKXtcbiAgICAgICAgc2VjID0gcGFyc2VGbG9hdChzdHIpICogMzYwMDtcbiAgICB9ZWxzZSBpZiAoYXJyTGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgc2VjSW5kZXggPSBhcnJMZW5ndGggLSAxO1xuICAgICAgICBpZiAoYXJyTGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBpZiAoZnJhbWVSYXRlKSB7XG4gICAgICAgICAgICAgICAgc2VjID0gcGFyc2VGbG9hdChhcnJbc2VjSW5kZXhdKSAvIGZyYW1lUmF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlY0luZGV4IC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgc2VjICs9IHBhcnNlRmxvYXQoYXJyW3NlY0luZGV4XSk7XG4gICAgICAgIHNlYyArPSBwYXJzZUZsb2F0KGFycltzZWNJbmRleCAtIDFdKSAqIDYwO1xuICAgICAgICBpZiAoYXJyTGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgIHNlYyArPSBwYXJzZUZsb2F0KGFycltzZWNJbmRleCAtIDJdKSAqIDM2MDA7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzZWMgPSBwYXJzZUZsb2F0KHN0cik7XG4gICAgfVxuICAgIGlmIChfLmlzTmFOKHNlYykpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBzZWM7XG59IiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS45LjFcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTggSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuIWZ1bmN0aW9uKCl7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGYmJnNlbGZ8fFwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWwmJmdsb2JhbHx8dGhpc3x8e30scj1uLl8sZT1BcnJheS5wcm90b3R5cGUsbz1PYmplY3QucHJvdG90eXBlLHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbD9TeW1ib2wucHJvdG90eXBlOm51bGwsdT1lLnB1c2gsYz1lLnNsaWNlLHA9by50b1N0cmluZyxpPW8uaGFzT3duUHJvcGVydHksdD1BcnJheS5pc0FycmF5LGE9T2JqZWN0LmtleXMsbD1PYmplY3QuY3JlYXRlLGY9ZnVuY3Rpb24oKXt9LGg9ZnVuY3Rpb24obil7cmV0dXJuIG4gaW5zdGFuY2VvZiBoP246dGhpcyBpbnN0YW5jZW9mIGg/dm9pZCh0aGlzLl93cmFwcGVkPW4pOm5ldyBoKG4pfTtcInVuZGVmaW5lZFwiPT10eXBlb2YgZXhwb3J0c3x8ZXhwb3J0cy5ub2RlVHlwZT9uLl89aDooXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmIW1vZHVsZS5ub2RlVHlwZSYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPWgpLGV4cG9ydHMuXz1oKSxoLlZFUlNJT049XCIxLjkuMVwiO3ZhciB2LHk9ZnVuY3Rpb24odSxpLG4pe2lmKHZvaWQgMD09PWkpcmV0dXJuIHU7c3dpdGNoKG51bGw9PW4/MzpuKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiB1LmNhbGwoaSxuKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsdCl7cmV0dXJuIHUuY2FsbChpLG4scix0KX07Y2FzZSA0OnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXtyZXR1cm4gdS5jYWxsKGksbixyLHQsZSl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB1LmFwcGx5KGksYXJndW1lbnRzKX19LGQ9ZnVuY3Rpb24obixyLHQpe3JldHVybiBoLml0ZXJhdGVlIT09dj9oLml0ZXJhdGVlKG4scik6bnVsbD09bj9oLmlkZW50aXR5OmguaXNGdW5jdGlvbihuKT95KG4scix0KTpoLmlzT2JqZWN0KG4pJiYhaC5pc0FycmF5KG4pP2gubWF0Y2hlcihuKTpoLnByb3BlcnR5KG4pfTtoLml0ZXJhdGVlPXY9ZnVuY3Rpb24obixyKXtyZXR1cm4gZChuLHIsMS8wKX07dmFyIGc9ZnVuY3Rpb24odSxpKXtyZXR1cm4gaT1udWxsPT1pP3UubGVuZ3RoLTE6K2ksZnVuY3Rpb24oKXtmb3IodmFyIG49TWF0aC5tYXgoYXJndW1lbnRzLmxlbmd0aC1pLDApLHI9QXJyYXkobiksdD0wO3Q8bjt0Kyspclt0XT1hcmd1bWVudHNbdCtpXTtzd2l0Y2goaSl7Y2FzZSAwOnJldHVybiB1LmNhbGwodGhpcyxyKTtjYXNlIDE6cmV0dXJuIHUuY2FsbCh0aGlzLGFyZ3VtZW50c1swXSxyKTtjYXNlIDI6cmV0dXJuIHUuY2FsbCh0aGlzLGFyZ3VtZW50c1swXSxhcmd1bWVudHNbMV0scil9dmFyIGU9QXJyYXkoaSsxKTtmb3IodD0wO3Q8aTt0KyspZVt0XT1hcmd1bWVudHNbdF07cmV0dXJuIGVbaV09cix1LmFwcGx5KHRoaXMsZSl9fSxtPWZ1bmN0aW9uKG4pe2lmKCFoLmlzT2JqZWN0KG4pKXJldHVybnt9O2lmKGwpcmV0dXJuIGwobik7Zi5wcm90b3R5cGU9bjt2YXIgcj1uZXcgZjtyZXR1cm4gZi5wcm90b3R5cGU9bnVsbCxyfSxiPWZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09bj92b2lkIDA6bltyXX19LGo9ZnVuY3Rpb24obixyKXtyZXR1cm4gbnVsbCE9biYmaS5jYWxsKG4scil9LHg9ZnVuY3Rpb24obixyKXtmb3IodmFyIHQ9ci5sZW5ndGgsZT0wO2U8dDtlKyspe2lmKG51bGw9PW4pcmV0dXJuO249bltyW2VdXX1yZXR1cm4gdD9uOnZvaWQgMH0sXz1NYXRoLnBvdygyLDUzKS0xLEE9YihcImxlbmd0aFwiKSx3PWZ1bmN0aW9uKG4pe3ZhciByPUEobik7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHImJjA8PXImJnI8PV99O2guZWFjaD1oLmZvckVhY2g9ZnVuY3Rpb24obixyLHQpe3ZhciBlLHU7aWYocj15KHIsdCksdyhuKSlmb3IoZT0wLHU9bi5sZW5ndGg7ZTx1O2UrKylyKG5bZV0sZSxuKTtlbHNle3ZhciBpPWgua2V5cyhuKTtmb3IoZT0wLHU9aS5sZW5ndGg7ZTx1O2UrKylyKG5baVtlXV0saVtlXSxuKX1yZXR1cm4gbn0saC5tYXA9aC5jb2xsZWN0PWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGU9IXcobikmJmgua2V5cyhuKSx1PShlfHxuKS5sZW5ndGgsaT1BcnJheSh1KSxvPTA7bzx1O28rKyl7dmFyIGE9ZT9lW29dOm87aVtvXT1yKG5bYV0sYSxuKX1yZXR1cm4gaX07dmFyIE89ZnVuY3Rpb24oYyl7cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciB1PTM8PWFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciB1PSF3KG4pJiZoLmtleXMobiksaT0odXx8bikubGVuZ3RoLG89MDxjPzA6aS0xO2ZvcihlfHwodD1uW3U/dVtvXTpvXSxvKz1jKTswPD1vJiZvPGk7bys9Yyl7dmFyIGE9dT91W29dOm87dD1yKHQsblthXSxhLG4pfXJldHVybiB0fShuLHkocixlLDQpLHQsdSl9fTtoLnJlZHVjZT1oLmZvbGRsPWguaW5qZWN0PU8oMSksaC5yZWR1Y2VSaWdodD1oLmZvbGRyPU8oLTEpLGguZmluZD1oLmRldGVjdD1mdW5jdGlvbihuLHIsdCl7dmFyIGU9KHcobik/aC5maW5kSW5kZXg6aC5maW5kS2V5KShuLHIsdCk7aWYodm9pZCAwIT09ZSYmLTEhPT1lKXJldHVybiBuW2VdfSxoLmZpbHRlcj1oLnNlbGVjdD1mdW5jdGlvbihuLGUscil7dmFyIHU9W107cmV0dXJuIGU9ZChlLHIpLGguZWFjaChuLGZ1bmN0aW9uKG4scix0KXtlKG4scix0KSYmdS5wdXNoKG4pfSksdX0saC5yZWplY3Q9ZnVuY3Rpb24obixyLHQpe3JldHVybiBoLmZpbHRlcihuLGgubmVnYXRlKGQocikpLHQpfSxoLmV2ZXJ5PWguYWxsPWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGU9IXcobikmJmgua2V5cyhuKSx1PShlfHxuKS5sZW5ndGgsaT0wO2k8dTtpKyspe3ZhciBvPWU/ZVtpXTppO2lmKCFyKG5bb10sbyxuKSlyZXR1cm4hMX1yZXR1cm4hMH0saC5zb21lPWguYW55PWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGU9IXcobikmJmgua2V5cyhuKSx1PShlfHxuKS5sZW5ndGgsaT0wO2k8dTtpKyspe3ZhciBvPWU/ZVtpXTppO2lmKHIobltvXSxvLG4pKXJldHVybiEwfXJldHVybiExfSxoLmNvbnRhaW5zPWguaW5jbHVkZXM9aC5pbmNsdWRlPWZ1bmN0aW9uKG4scix0LGUpe3JldHVybiB3KG4pfHwobj1oLnZhbHVlcyhuKSksKFwibnVtYmVyXCIhPXR5cGVvZiB0fHxlKSYmKHQ9MCksMDw9aC5pbmRleE9mKG4scix0KX0saC5pbnZva2U9ZyhmdW5jdGlvbihuLHQsZSl7dmFyIHUsaTtyZXR1cm4gaC5pc0Z1bmN0aW9uKHQpP2k9dDpoLmlzQXJyYXkodCkmJih1PXQuc2xpY2UoMCwtMSksdD10W3QubGVuZ3RoLTFdKSxoLm1hcChuLGZ1bmN0aW9uKG4pe3ZhciByPWk7aWYoIXIpe2lmKHUmJnUubGVuZ3RoJiYobj14KG4sdSkpLG51bGw9PW4pcmV0dXJuO3I9blt0XX1yZXR1cm4gbnVsbD09cj9yOnIuYXBwbHkobixlKX0pfSksaC5wbHVjaz1mdW5jdGlvbihuLHIpe3JldHVybiBoLm1hcChuLGgucHJvcGVydHkocikpfSxoLndoZXJlPWZ1bmN0aW9uKG4scil7cmV0dXJuIGguZmlsdGVyKG4saC5tYXRjaGVyKHIpKX0saC5maW5kV2hlcmU9ZnVuY3Rpb24obixyKXtyZXR1cm4gaC5maW5kKG4saC5tYXRjaGVyKHIpKX0saC5tYXg9ZnVuY3Rpb24obixlLHIpe3ZhciB0LHUsaT0tMS8wLG89LTEvMDtpZihudWxsPT1lfHxcIm51bWJlclwiPT10eXBlb2YgZSYmXCJvYmplY3RcIiE9dHlwZW9mIG5bMF0mJm51bGwhPW4pZm9yKHZhciBhPTAsYz0obj13KG4pP246aC52YWx1ZXMobikpLmxlbmd0aDthPGM7YSsrKW51bGwhPSh0PW5bYV0pJiZpPHQmJihpPXQpO2Vsc2UgZT1kKGUsciksaC5lYWNoKG4sZnVuY3Rpb24obixyLHQpe3U9ZShuLHIsdCksKG88dXx8dT09PS0xLzAmJmk9PT0tMS8wKSYmKGk9bixvPXUpfSk7cmV0dXJuIGl9LGgubWluPWZ1bmN0aW9uKG4sZSxyKXt2YXIgdCx1LGk9MS8wLG89MS8wO2lmKG51bGw9PWV8fFwibnVtYmVyXCI9PXR5cGVvZiBlJiZcIm9iamVjdFwiIT10eXBlb2YgblswXSYmbnVsbCE9bilmb3IodmFyIGE9MCxjPShuPXcobik/bjpoLnZhbHVlcyhuKSkubGVuZ3RoO2E8YzthKyspbnVsbCE9KHQ9blthXSkmJnQ8aSYmKGk9dCk7ZWxzZSBlPWQoZSxyKSxoLmVhY2gobixmdW5jdGlvbihuLHIsdCl7KCh1PWUobixyLHQpKTxvfHx1PT09MS8wJiZpPT09MS8wKSYmKGk9bixvPXUpfSk7cmV0dXJuIGl9LGguc2h1ZmZsZT1mdW5jdGlvbihuKXtyZXR1cm4gaC5zYW1wbGUobiwxLzApfSxoLnNhbXBsZT1mdW5jdGlvbihuLHIsdCl7aWYobnVsbD09cnx8dClyZXR1cm4gdyhuKXx8KG49aC52YWx1ZXMobikpLG5baC5yYW5kb20obi5sZW5ndGgtMSldO3ZhciBlPXcobik/aC5jbG9uZShuKTpoLnZhbHVlcyhuKSx1PUEoZSk7cj1NYXRoLm1heChNYXRoLm1pbihyLHUpLDApO2Zvcih2YXIgaT11LTEsbz0wO288cjtvKyspe3ZhciBhPWgucmFuZG9tKG8saSksYz1lW29dO2Vbb109ZVthXSxlW2FdPWN9cmV0dXJuIGUuc2xpY2UoMCxyKX0saC5zb3J0Qnk9ZnVuY3Rpb24obixlLHIpe3ZhciB1PTA7cmV0dXJuIGU9ZChlLHIpLGgucGx1Y2soaC5tYXAobixmdW5jdGlvbihuLHIsdCl7cmV0dXJue3ZhbHVlOm4saW5kZXg6dSsrLGNyaXRlcmlhOmUobixyLHQpfX0pLnNvcnQoZnVuY3Rpb24obixyKXt2YXIgdD1uLmNyaXRlcmlhLGU9ci5jcml0ZXJpYTtpZih0IT09ZSl7aWYoZTx0fHx2b2lkIDA9PT10KXJldHVybiAxO2lmKHQ8ZXx8dm9pZCAwPT09ZSlyZXR1cm4tMX1yZXR1cm4gbi5pbmRleC1yLmluZGV4fSksXCJ2YWx1ZVwiKX07dmFyIGs9ZnVuY3Rpb24obyxyKXtyZXR1cm4gZnVuY3Rpb24oZSx1LG4pe3ZhciBpPXI/W1tdLFtdXTp7fTtyZXR1cm4gdT1kKHUsbiksaC5lYWNoKGUsZnVuY3Rpb24obixyKXt2YXIgdD11KG4scixlKTtvKGksbix0KX0pLGl9fTtoLmdyb3VwQnk9ayhmdW5jdGlvbihuLHIsdCl7aihuLHQpP25bdF0ucHVzaChyKTpuW3RdPVtyXX0pLGguaW5kZXhCeT1rKGZ1bmN0aW9uKG4scix0KXtuW3RdPXJ9KSxoLmNvdW50Qnk9ayhmdW5jdGlvbihuLHIsdCl7aihuLHQpP25bdF0rKzpuW3RdPTF9KTt2YXIgUz0vW15cXHVkODAwLVxcdWRmZmZdfFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl18W1xcdWQ4MDAtXFx1ZGZmZl0vZztoLnRvQXJyYXk9ZnVuY3Rpb24obil7cmV0dXJuIG4/aC5pc0FycmF5KG4pP2MuY2FsbChuKTpoLmlzU3RyaW5nKG4pP24ubWF0Y2goUyk6dyhuKT9oLm1hcChuLGguaWRlbnRpdHkpOmgudmFsdWVzKG4pOltdfSxoLnNpemU9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/MDp3KG4pP24ubGVuZ3RoOmgua2V5cyhuKS5sZW5ndGh9LGgucGFydGl0aW9uPWsoZnVuY3Rpb24obixyLHQpe25bdD8wOjFdLnB1c2gocil9LCEwKSxoLmZpcnN0PWguaGVhZD1oLnRha2U9ZnVuY3Rpb24obixyLHQpe3JldHVybiBudWxsPT1ufHxuLmxlbmd0aDwxP251bGw9PXI/dm9pZCAwOltdOm51bGw9PXJ8fHQ/blswXTpoLmluaXRpYWwobixuLmxlbmd0aC1yKX0saC5pbml0aWFsPWZ1bmN0aW9uKG4scix0KXtyZXR1cm4gYy5jYWxsKG4sMCxNYXRoLm1heCgwLG4ubGVuZ3RoLShudWxsPT1yfHx0PzE6cikpKX0saC5sYXN0PWZ1bmN0aW9uKG4scix0KXtyZXR1cm4gbnVsbD09bnx8bi5sZW5ndGg8MT9udWxsPT1yP3ZvaWQgMDpbXTpudWxsPT1yfHx0P25bbi5sZW5ndGgtMV06aC5yZXN0KG4sTWF0aC5tYXgoMCxuLmxlbmd0aC1yKSl9LGgucmVzdD1oLnRhaWw9aC5kcm9wPWZ1bmN0aW9uKG4scix0KXtyZXR1cm4gYy5jYWxsKG4sbnVsbD09cnx8dD8xOnIpfSxoLmNvbXBhY3Q9ZnVuY3Rpb24obil7cmV0dXJuIGguZmlsdGVyKG4sQm9vbGVhbil9O3ZhciBNPWZ1bmN0aW9uKG4scix0LGUpe2Zvcih2YXIgdT0oZT1lfHxbXSkubGVuZ3RoLGk9MCxvPUEobik7aTxvO2krKyl7dmFyIGE9bltpXTtpZih3KGEpJiYoaC5pc0FycmF5KGEpfHxoLmlzQXJndW1lbnRzKGEpKSlpZihyKWZvcih2YXIgYz0wLGw9YS5sZW5ndGg7YzxsOyllW3UrK109YVtjKytdO2Vsc2UgTShhLHIsdCxlKSx1PWUubGVuZ3RoO2Vsc2UgdHx8KGVbdSsrXT1hKX1yZXR1cm4gZX07aC5mbGF0dGVuPWZ1bmN0aW9uKG4scil7cmV0dXJuIE0obixyLCExKX0saC53aXRob3V0PWcoZnVuY3Rpb24obixyKXtyZXR1cm4gaC5kaWZmZXJlbmNlKG4scil9KSxoLnVuaXE9aC51bmlxdWU9ZnVuY3Rpb24obixyLHQsZSl7aC5pc0Jvb2xlYW4ocil8fChlPXQsdD1yLHI9ITEpLG51bGwhPXQmJih0PWQodCxlKSk7Zm9yKHZhciB1PVtdLGk9W10sbz0wLGE9QShuKTtvPGE7bysrKXt2YXIgYz1uW29dLGw9dD90KGMsbyxuKTpjO3ImJiF0PyhvJiZpPT09bHx8dS5wdXNoKGMpLGk9bCk6dD9oLmNvbnRhaW5zKGksbCl8fChpLnB1c2gobCksdS5wdXNoKGMpKTpoLmNvbnRhaW5zKHUsYyl8fHUucHVzaChjKX1yZXR1cm4gdX0saC51bmlvbj1nKGZ1bmN0aW9uKG4pe3JldHVybiBoLnVuaXEoTShuLCEwLCEwKSl9KSxoLmludGVyc2VjdGlvbj1mdW5jdGlvbihuKXtmb3IodmFyIHI9W10sdD1hcmd1bWVudHMubGVuZ3RoLGU9MCx1PUEobik7ZTx1O2UrKyl7dmFyIGk9bltlXTtpZighaC5jb250YWlucyhyLGkpKXt2YXIgbztmb3Iobz0xO288dCYmaC5jb250YWlucyhhcmd1bWVudHNbb10saSk7bysrKTtvPT09dCYmci5wdXNoKGkpfX1yZXR1cm4gcn0saC5kaWZmZXJlbmNlPWcoZnVuY3Rpb24obixyKXtyZXR1cm4gcj1NKHIsITAsITApLGguZmlsdGVyKG4sZnVuY3Rpb24obil7cmV0dXJuIWguY29udGFpbnMocixuKX0pfSksaC51bnppcD1mdW5jdGlvbihuKXtmb3IodmFyIHI9biYmaC5tYXgobixBKS5sZW5ndGh8fDAsdD1BcnJheShyKSxlPTA7ZTxyO2UrKyl0W2VdPWgucGx1Y2sobixlKTtyZXR1cm4gdH0saC56aXA9ZyhoLnVuemlwKSxoLm9iamVjdD1mdW5jdGlvbihuLHIpe2Zvcih2YXIgdD17fSxlPTAsdT1BKG4pO2U8dTtlKyspcj90W25bZV1dPXJbZV06dFtuW2VdWzBdXT1uW2VdWzFdO3JldHVybiB0fTt2YXIgRj1mdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24obixyLHQpe3I9ZChyLHQpO2Zvcih2YXIgZT1BKG4pLHU9MDxpPzA6ZS0xOzA8PXUmJnU8ZTt1Kz1pKWlmKHIoblt1XSx1LG4pKXJldHVybiB1O3JldHVybi0xfX07aC5maW5kSW5kZXg9RigxKSxoLmZpbmRMYXN0SW5kZXg9RigtMSksaC5zb3J0ZWRJbmRleD1mdW5jdGlvbihuLHIsdCxlKXtmb3IodmFyIHU9KHQ9ZCh0LGUsMSkpKHIpLGk9MCxvPUEobik7aTxvOyl7dmFyIGE9TWF0aC5mbG9vcigoaStvKS8yKTt0KG5bYV0pPHU/aT1hKzE6bz1hfXJldHVybiBpfTt2YXIgRT1mdW5jdGlvbihpLG8sYSl7cmV0dXJuIGZ1bmN0aW9uKG4scix0KXt2YXIgZT0wLHU9QShuKTtpZihcIm51bWJlclwiPT10eXBlb2YgdCkwPGk/ZT0wPD10P3Q6TWF0aC5tYXgodCt1LGUpOnU9MDw9dD9NYXRoLm1pbih0KzEsdSk6dCt1KzE7ZWxzZSBpZihhJiZ0JiZ1KXJldHVybiBuW3Q9YShuLHIpXT09PXI/dDotMTtpZihyIT1yKXJldHVybiAwPD0odD1vKGMuY2FsbChuLGUsdSksaC5pc05hTikpP3QrZTotMTtmb3IodD0wPGk/ZTp1LTE7MDw9dCYmdDx1O3QrPWkpaWYoblt0XT09PXIpcmV0dXJuIHQ7cmV0dXJuLTF9fTtoLmluZGV4T2Y9RSgxLGguZmluZEluZGV4LGguc29ydGVkSW5kZXgpLGgubGFzdEluZGV4T2Y9RSgtMSxoLmZpbmRMYXN0SW5kZXgpLGgucmFuZ2U9ZnVuY3Rpb24obixyLHQpe251bGw9PXImJihyPW58fDAsbj0wKSx0fHwodD1yPG4/LTE6MSk7Zm9yKHZhciBlPU1hdGgubWF4KE1hdGguY2VpbCgoci1uKS90KSwwKSx1PUFycmF5KGUpLGk9MDtpPGU7aSsrLG4rPXQpdVtpXT1uO3JldHVybiB1fSxoLmNodW5rPWZ1bmN0aW9uKG4scil7aWYobnVsbD09cnx8cjwxKXJldHVybltdO2Zvcih2YXIgdD1bXSxlPTAsdT1uLmxlbmd0aDtlPHU7KXQucHVzaChjLmNhbGwobixlLGUrPXIpKTtyZXR1cm4gdH07dmFyIE49ZnVuY3Rpb24obixyLHQsZSx1KXtpZighKGUgaW5zdGFuY2VvZiByKSlyZXR1cm4gbi5hcHBseSh0LHUpO3ZhciBpPW0obi5wcm90b3R5cGUpLG89bi5hcHBseShpLHUpO3JldHVybiBoLmlzT2JqZWN0KG8pP286aX07aC5iaW5kPWcoZnVuY3Rpb24ocix0LGUpe2lmKCFoLmlzRnVuY3Rpb24ocikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJpbmQgbXVzdCBiZSBjYWxsZWQgb24gYSBmdW5jdGlvblwiKTt2YXIgdT1nKGZ1bmN0aW9uKG4pe3JldHVybiBOKHIsdSx0LHRoaXMsZS5jb25jYXQobikpfSk7cmV0dXJuIHV9KSxoLnBhcnRpYWw9ZyhmdW5jdGlvbih1LGkpe3ZhciBvPWgucGFydGlhbC5wbGFjZWhvbGRlcixhPWZ1bmN0aW9uKCl7Zm9yKHZhciBuPTAscj1pLmxlbmd0aCx0PUFycmF5KHIpLGU9MDtlPHI7ZSsrKXRbZV09aVtlXT09PW8/YXJndW1lbnRzW24rK106aVtlXTtmb3IoO248YXJndW1lbnRzLmxlbmd0aDspdC5wdXNoKGFyZ3VtZW50c1tuKytdKTtyZXR1cm4gTih1LGEsdGhpcyx0aGlzLHQpfTtyZXR1cm4gYX0pLChoLnBhcnRpYWwucGxhY2Vob2xkZXI9aCkuYmluZEFsbD1nKGZ1bmN0aW9uKG4scil7dmFyIHQ9KHI9TShyLCExLCExKSkubGVuZ3RoO2lmKHQ8MSl0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzXCIpO2Zvcig7dC0tOyl7dmFyIGU9clt0XTtuW2VdPWguYmluZChuW2VdLG4pfX0pLGgubWVtb2l6ZT1mdW5jdGlvbihlLHUpe3ZhciBpPWZ1bmN0aW9uKG4pe3ZhciByPWkuY2FjaGUsdD1cIlwiKyh1P3UuYXBwbHkodGhpcyxhcmd1bWVudHMpOm4pO3JldHVybiBqKHIsdCl8fChyW3RdPWUuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxyW3RdfTtyZXR1cm4gaS5jYWNoZT17fSxpfSxoLmRlbGF5PWcoZnVuY3Rpb24obixyLHQpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIG4uYXBwbHkobnVsbCx0KX0scil9KSxoLmRlZmVyPWgucGFydGlhbChoLmRlbGF5LGgsMSksaC50aHJvdHRsZT1mdW5jdGlvbih0LGUsdSl7dmFyIGksbyxhLGMsbD0wO3V8fCh1PXt9KTt2YXIgZj1mdW5jdGlvbigpe2w9ITE9PT11LmxlYWRpbmc/MDpoLm5vdygpLGk9bnVsbCxjPXQuYXBwbHkobyxhKSxpfHwobz1hPW51bGwpfSxuPWZ1bmN0aW9uKCl7dmFyIG49aC5ub3coKTtsfHwhMSE9PXUubGVhZGluZ3x8KGw9bik7dmFyIHI9ZS0obi1sKTtyZXR1cm4gbz10aGlzLGE9YXJndW1lbnRzLHI8PTB8fGU8cj8oaSYmKGNsZWFyVGltZW91dChpKSxpPW51bGwpLGw9bixjPXQuYXBwbHkobyxhKSxpfHwobz1hPW51bGwpKTppfHwhMT09PXUudHJhaWxpbmd8fChpPXNldFRpbWVvdXQoZixyKSksY307cmV0dXJuIG4uY2FuY2VsPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGkpLGw9MCxpPW89YT1udWxsfSxufSxoLmRlYm91bmNlPWZ1bmN0aW9uKHQsZSx1KXt2YXIgaSxvLGE9ZnVuY3Rpb24obixyKXtpPW51bGwsciYmKG89dC5hcHBseShuLHIpKX0sbj1nKGZ1bmN0aW9uKG4pe2lmKGkmJmNsZWFyVGltZW91dChpKSx1KXt2YXIgcj0haTtpPXNldFRpbWVvdXQoYSxlKSxyJiYobz10LmFwcGx5KHRoaXMsbikpfWVsc2UgaT1oLmRlbGF5KGEsZSx0aGlzLG4pO3JldHVybiBvfSk7cmV0dXJuIG4uY2FuY2VsPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGkpLGk9bnVsbH0sbn0saC53cmFwPWZ1bmN0aW9uKG4scil7cmV0dXJuIGgucGFydGlhbChyLG4pfSxoLm5lZ2F0ZT1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4hbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSxoLmNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMsZT10Lmxlbmd0aC0xO3JldHVybiBmdW5jdGlvbigpe2Zvcih2YXIgbj1lLHI9dFtlXS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7bi0tOylyPXRbbl0uY2FsbCh0aGlzLHIpO3JldHVybiByfX0saC5hZnRlcj1mdW5jdGlvbihuLHIpe3JldHVybiBmdW5jdGlvbigpe2lmKC0tbjwxKXJldHVybiByLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LGguYmVmb3JlPWZ1bmN0aW9uKG4scil7dmFyIHQ7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIDA8LS1uJiYodD1yLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksbjw9MSYmKHI9bnVsbCksdH19LGgub25jZT1oLnBhcnRpYWwoaC5iZWZvcmUsMiksaC5yZXN0QXJndW1lbnRzPWc7dmFyIEk9IXt0b1N0cmluZzpudWxsfS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInRvU3RyaW5nXCIpLFQ9W1widmFsdWVPZlwiLFwiaXNQcm90b3R5cGVPZlwiLFwidG9TdHJpbmdcIixcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXCJoYXNPd25Qcm9wZXJ0eVwiLFwidG9Mb2NhbGVTdHJpbmdcIl0sQj1mdW5jdGlvbihuLHIpe3ZhciB0PVQubGVuZ3RoLGU9bi5jb25zdHJ1Y3Rvcix1PWguaXNGdW5jdGlvbihlKSYmZS5wcm90b3R5cGV8fG8saT1cImNvbnN0cnVjdG9yXCI7Zm9yKGoobixpKSYmIWguY29udGFpbnMocixpKSYmci5wdXNoKGkpO3QtLTspKGk9VFt0XSlpbiBuJiZuW2ldIT09dVtpXSYmIWguY29udGFpbnMocixpKSYmci5wdXNoKGkpfTtoLmtleXM9ZnVuY3Rpb24obil7aWYoIWguaXNPYmplY3QobikpcmV0dXJuW107aWYoYSlyZXR1cm4gYShuKTt2YXIgcj1bXTtmb3IodmFyIHQgaW4gbilqKG4sdCkmJnIucHVzaCh0KTtyZXR1cm4gSSYmQihuLHIpLHJ9LGguYWxsS2V5cz1mdW5jdGlvbihuKXtpZighaC5pc09iamVjdChuKSlyZXR1cm5bXTt2YXIgcj1bXTtmb3IodmFyIHQgaW4gbilyLnB1c2godCk7cmV0dXJuIEkmJkIobixyKSxyfSxoLnZhbHVlcz1mdW5jdGlvbihuKXtmb3IodmFyIHI9aC5rZXlzKG4pLHQ9ci5sZW5ndGgsZT1BcnJheSh0KSx1PTA7dTx0O3UrKyllW3VdPW5bclt1XV07cmV0dXJuIGV9LGgubWFwT2JqZWN0PWZ1bmN0aW9uKG4scix0KXtyPWQocix0KTtmb3IodmFyIGU9aC5rZXlzKG4pLHU9ZS5sZW5ndGgsaT17fSxvPTA7bzx1O28rKyl7dmFyIGE9ZVtvXTtpW2FdPXIoblthXSxhLG4pfXJldHVybiBpfSxoLnBhaXJzPWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj1oLmtleXMobiksdD1yLmxlbmd0aCxlPUFycmF5KHQpLHU9MDt1PHQ7dSsrKWVbdV09W3JbdV0sbltyW3VdXV07cmV0dXJuIGV9LGguaW52ZXJ0PWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj17fSx0PWgua2V5cyhuKSxlPTAsdT10Lmxlbmd0aDtlPHU7ZSsrKXJbblt0W2VdXV09dFtlXTtyZXR1cm4gcn0saC5mdW5jdGlvbnM9aC5tZXRob2RzPWZ1bmN0aW9uKG4pe3ZhciByPVtdO2Zvcih2YXIgdCBpbiBuKWguaXNGdW5jdGlvbihuW3RdKSYmci5wdXNoKHQpO3JldHVybiByLnNvcnQoKX07dmFyIFI9ZnVuY3Rpb24oYyxsKXtyZXR1cm4gZnVuY3Rpb24obil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDtpZihsJiYobj1PYmplY3QobikpLHI8Mnx8bnVsbD09bilyZXR1cm4gbjtmb3IodmFyIHQ9MTt0PHI7dCsrKWZvcih2YXIgZT1hcmd1bWVudHNbdF0sdT1jKGUpLGk9dS5sZW5ndGgsbz0wO288aTtvKyspe3ZhciBhPXVbb107bCYmdm9pZCAwIT09blthXXx8KG5bYV09ZVthXSl9cmV0dXJuIG59fTtoLmV4dGVuZD1SKGguYWxsS2V5cyksaC5leHRlbmRPd249aC5hc3NpZ249UihoLmtleXMpLGguZmluZEtleT1mdW5jdGlvbihuLHIsdCl7cj1kKHIsdCk7Zm9yKHZhciBlLHU9aC5rZXlzKG4pLGk9MCxvPXUubGVuZ3RoO2k8bztpKyspaWYocihuW2U9dVtpXV0sZSxuKSlyZXR1cm4gZX07dmFyIHEsSyx6PWZ1bmN0aW9uKG4scix0KXtyZXR1cm4gciBpbiB0fTtoLnBpY2s9ZyhmdW5jdGlvbihuLHIpe3ZhciB0PXt9LGU9clswXTtpZihudWxsPT1uKXJldHVybiB0O2guaXNGdW5jdGlvbihlKT8oMTxyLmxlbmd0aCYmKGU9eShlLHJbMV0pKSxyPWguYWxsS2V5cyhuKSk6KGU9eixyPU0ociwhMSwhMSksbj1PYmplY3QobikpO2Zvcih2YXIgdT0wLGk9ci5sZW5ndGg7dTxpO3UrKyl7dmFyIG89clt1XSxhPW5bb107ZShhLG8sbikmJih0W29dPWEpfXJldHVybiB0fSksaC5vbWl0PWcoZnVuY3Rpb24obix0KXt2YXIgcixlPXRbMF07cmV0dXJuIGguaXNGdW5jdGlvbihlKT8oZT1oLm5lZ2F0ZShlKSwxPHQubGVuZ3RoJiYocj10WzFdKSk6KHQ9aC5tYXAoTSh0LCExLCExKSxTdHJpbmcpLGU9ZnVuY3Rpb24obixyKXtyZXR1cm4haC5jb250YWlucyh0LHIpfSksaC5waWNrKG4sZSxyKX0pLGguZGVmYXVsdHM9UihoLmFsbEtleXMsITApLGguY3JlYXRlPWZ1bmN0aW9uKG4scil7dmFyIHQ9bShuKTtyZXR1cm4gciYmaC5leHRlbmRPd24odCxyKSx0fSxoLmNsb25lPWZ1bmN0aW9uKG4pe3JldHVybiBoLmlzT2JqZWN0KG4pP2guaXNBcnJheShuKT9uLnNsaWNlKCk6aC5leHRlbmQoe30sbik6bn0saC50YXA9ZnVuY3Rpb24obixyKXtyZXR1cm4gcihuKSxufSxoLmlzTWF0Y2g9ZnVuY3Rpb24obixyKXt2YXIgdD1oLmtleXMociksZT10Lmxlbmd0aDtpZihudWxsPT1uKXJldHVybiFlO2Zvcih2YXIgdT1PYmplY3QobiksaT0wO2k8ZTtpKyspe3ZhciBvPXRbaV07aWYocltvXSE9PXVbb118fCEobyBpbiB1KSlyZXR1cm4hMX1yZXR1cm4hMH0scT1mdW5jdGlvbihuLHIsdCxlKXtpZihuPT09cilyZXR1cm4gMCE9PW58fDEvbj09MS9yO2lmKG51bGw9PW58fG51bGw9PXIpcmV0dXJuITE7aWYobiE9bilyZXR1cm4gciE9cjt2YXIgdT10eXBlb2YgbjtyZXR1cm4oXCJmdW5jdGlvblwiPT09dXx8XCJvYmplY3RcIj09PXV8fFwib2JqZWN0XCI9PXR5cGVvZiByKSYmSyhuLHIsdCxlKX0sSz1mdW5jdGlvbihuLHIsdCxlKXtuIGluc3RhbmNlb2YgaCYmKG49bi5fd3JhcHBlZCksciBpbnN0YW5jZW9mIGgmJihyPXIuX3dyYXBwZWQpO3ZhciB1PXAuY2FsbChuKTtpZih1IT09cC5jYWxsKHIpKXJldHVybiExO3N3aXRjaCh1KXtjYXNlXCJbb2JqZWN0IFJlZ0V4cF1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm5cIlwiK249PVwiXCIrcjtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpyZXR1cm4rbiE9K24/K3IhPStyOjA9PStuPzEvK249PTEvcjorbj09K3I7Y2FzZVwiW29iamVjdCBEYXRlXVwiOmNhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpyZXR1cm4rbj09K3I7Y2FzZVwiW29iamVjdCBTeW1ib2xdXCI6cmV0dXJuIHMudmFsdWVPZi5jYWxsKG4pPT09cy52YWx1ZU9mLmNhbGwocil9dmFyIGk9XCJbb2JqZWN0IEFycmF5XVwiPT09dTtpZighaSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIG58fFwib2JqZWN0XCIhPXR5cGVvZiByKXJldHVybiExO3ZhciBvPW4uY29uc3RydWN0b3IsYT1yLmNvbnN0cnVjdG9yO2lmKG8hPT1hJiYhKGguaXNGdW5jdGlvbihvKSYmbyBpbnN0YW5jZW9mIG8mJmguaXNGdW5jdGlvbihhKSYmYSBpbnN0YW5jZW9mIGEpJiZcImNvbnN0cnVjdG9yXCJpbiBuJiZcImNvbnN0cnVjdG9yXCJpbiByKXJldHVybiExfWU9ZXx8W107Zm9yKHZhciBjPSh0PXR8fFtdKS5sZW5ndGg7Yy0tOylpZih0W2NdPT09bilyZXR1cm4gZVtjXT09PXI7aWYodC5wdXNoKG4pLGUucHVzaChyKSxpKXtpZigoYz1uLmxlbmd0aCkhPT1yLmxlbmd0aClyZXR1cm4hMTtmb3IoO2MtLTspaWYoIXEobltjXSxyW2NdLHQsZSkpcmV0dXJuITF9ZWxzZXt2YXIgbCxmPWgua2V5cyhuKTtpZihjPWYubGVuZ3RoLGgua2V5cyhyKS5sZW5ndGghPT1jKXJldHVybiExO2Zvcig7Yy0tOylpZihsPWZbY10sIWoocixsKXx8IXEobltsXSxyW2xdLHQsZSkpcmV0dXJuITF9cmV0dXJuIHQucG9wKCksZS5wb3AoKSwhMH0saC5pc0VxdWFsPWZ1bmN0aW9uKG4scil7cmV0dXJuIHEobixyKX0saC5pc0VtcHR5PWZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT1ufHwodyhuKSYmKGguaXNBcnJheShuKXx8aC5pc1N0cmluZyhuKXx8aC5pc0FyZ3VtZW50cyhuKSk/MD09PW4ubGVuZ3RoOjA9PT1oLmtleXMobikubGVuZ3RoKX0saC5pc0VsZW1lbnQ9ZnVuY3Rpb24obil7cmV0dXJuISghbnx8MSE9PW4ubm9kZVR5cGUpfSxoLmlzQXJyYXk9dHx8ZnVuY3Rpb24obil7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09cC5jYWxsKG4pfSxoLmlzT2JqZWN0PWZ1bmN0aW9uKG4pe3ZhciByPXR5cGVvZiBuO3JldHVyblwiZnVuY3Rpb25cIj09PXJ8fFwib2JqZWN0XCI9PT1yJiYhIW59LGguZWFjaChbXCJBcmd1bWVudHNcIixcIkZ1bmN0aW9uXCIsXCJTdHJpbmdcIixcIk51bWJlclwiLFwiRGF0ZVwiLFwiUmVnRXhwXCIsXCJFcnJvclwiLFwiU3ltYm9sXCIsXCJNYXBcIixcIldlYWtNYXBcIixcIlNldFwiLFwiV2Vha1NldFwiXSxmdW5jdGlvbihyKXtoW1wiaXNcIityXT1mdW5jdGlvbihuKXtyZXR1cm4gcC5jYWxsKG4pPT09XCJbb2JqZWN0IFwiK3IrXCJdXCJ9fSksaC5pc0FyZ3VtZW50cyhhcmd1bWVudHMpfHwoaC5pc0FyZ3VtZW50cz1mdW5jdGlvbihuKXtyZXR1cm4gaihuLFwiY2FsbGVlXCIpfSk7dmFyIEQ9bi5kb2N1bWVudCYmbi5kb2N1bWVudC5jaGlsZE5vZGVzO1wiZnVuY3Rpb25cIiE9dHlwZW9mLy4vJiZcIm9iamVjdFwiIT10eXBlb2YgSW50OEFycmF5JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBEJiYoaC5pc0Z1bmN0aW9uPWZ1bmN0aW9uKG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG58fCExfSksaC5pc0Zpbml0ZT1mdW5jdGlvbihuKXtyZXR1cm4haC5pc1N5bWJvbChuKSYmaXNGaW5pdGUobikmJiFpc05hTihwYXJzZUZsb2F0KG4pKX0saC5pc05hTj1mdW5jdGlvbihuKXtyZXR1cm4gaC5pc051bWJlcihuKSYmaXNOYU4obil9LGguaXNCb29sZWFuPWZ1bmN0aW9uKG4pe3JldHVybiEwPT09bnx8ITE9PT1ufHxcIltvYmplY3QgQm9vbGVhbl1cIj09PXAuY2FsbChuKX0saC5pc051bGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PT1ufSxoLmlzVW5kZWZpbmVkPWZ1bmN0aW9uKG4pe3JldHVybiB2b2lkIDA9PT1ufSxoLmhhcz1mdW5jdGlvbihuLHIpe2lmKCFoLmlzQXJyYXkocikpcmV0dXJuIGoobixyKTtmb3IodmFyIHQ9ci5sZW5ndGgsZT0wO2U8dDtlKyspe3ZhciB1PXJbZV07aWYobnVsbD09bnx8IWkuY2FsbChuLHUpKXJldHVybiExO249blt1XX1yZXR1cm4hIXR9LGgubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBuLl89cix0aGlzfSxoLmlkZW50aXR5PWZ1bmN0aW9uKG4pe3JldHVybiBufSxoLmNvbnN0YW50PWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBufX0saC5ub29wPWZ1bmN0aW9uKCl7fSxoLnByb3BlcnR5PWZ1bmN0aW9uKHIpe3JldHVybiBoLmlzQXJyYXkocik/ZnVuY3Rpb24obil7cmV0dXJuIHgobixyKX06YihyKX0saC5wcm9wZXJ0eU9mPWZ1bmN0aW9uKHIpe3JldHVybiBudWxsPT1yP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbihuKXtyZXR1cm4gaC5pc0FycmF5KG4pP3gocixuKTpyW25dfX0saC5tYXRjaGVyPWgubWF0Y2hlcz1mdW5jdGlvbihyKXtyZXR1cm4gcj1oLmV4dGVuZE93bih7fSxyKSxmdW5jdGlvbihuKXtyZXR1cm4gaC5pc01hdGNoKG4scil9fSxoLnRpbWVzPWZ1bmN0aW9uKG4scix0KXt2YXIgZT1BcnJheShNYXRoLm1heCgwLG4pKTtyPXkocix0LDEpO2Zvcih2YXIgdT0wO3U8bjt1KyspZVt1XT1yKHUpO3JldHVybiBlfSxoLnJhbmRvbT1mdW5jdGlvbihuLHIpe3JldHVybiBudWxsPT1yJiYocj1uLG49MCksbitNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKHItbisxKSl9LGgubm93PURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybihuZXcgRGF0ZSkuZ2V0VGltZSgpfTt2YXIgTD17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjeDI3O1wiLFwiYFwiOlwiJiN4NjA7XCJ9LFA9aC5pbnZlcnQoTCksVz1mdW5jdGlvbihyKXt2YXIgdD1mdW5jdGlvbihuKXtyZXR1cm4gcltuXX0sbj1cIig/OlwiK2gua2V5cyhyKS5qb2luKFwifFwiKStcIilcIixlPVJlZ0V4cChuKSx1PVJlZ0V4cChuLFwiZ1wiKTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIG49bnVsbD09bj9cIlwiOlwiXCIrbixlLnRlc3Qobik/bi5yZXBsYWNlKHUsdCk6bn19O2guZXNjYXBlPVcoTCksaC51bmVzY2FwZT1XKFApLGgucmVzdWx0PWZ1bmN0aW9uKG4scix0KXtoLmlzQXJyYXkocil8fChyPVtyXSk7dmFyIGU9ci5sZW5ndGg7aWYoIWUpcmV0dXJuIGguaXNGdW5jdGlvbih0KT90LmNhbGwobik6dDtmb3IodmFyIHU9MDt1PGU7dSsrKXt2YXIgaT1udWxsPT1uP3ZvaWQgMDpuW3JbdV1dO3ZvaWQgMD09PWkmJihpPXQsdT1lKSxuPWguaXNGdW5jdGlvbihpKT9pLmNhbGwobik6aX1yZXR1cm4gbn07dmFyIEM9MDtoLnVuaXF1ZUlkPWZ1bmN0aW9uKG4pe3ZhciByPSsrQytcIlwiO3JldHVybiBuP24rcjpyfSxoLnRlbXBsYXRlU2V0dGluZ3M9e2V2YWx1YXRlOi88JShbXFxzXFxTXSs/KSU+L2csaW50ZXJwb2xhdGU6LzwlPShbXFxzXFxTXSs/KSU+L2csZXNjYXBlOi88JS0oW1xcc1xcU10rPyklPi9nfTt2YXIgSj0vKC4pXi8sVT17XCInXCI6XCInXCIsXCJcXFxcXCI6XCJcXFxcXCIsXCJcXHJcIjpcInJcIixcIlxcblwiOlwiblwiLFwiXFx1MjAyOFwiOlwidTIwMjhcIixcIlxcdTIwMjlcIjpcInUyMDI5XCJ9LFY9L1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nLCQ9ZnVuY3Rpb24obil7cmV0dXJuXCJcXFxcXCIrVVtuXX07aC50ZW1wbGF0ZT1mdW5jdGlvbihpLG4scil7IW4mJnImJihuPXIpLG49aC5kZWZhdWx0cyh7fSxuLGgudGVtcGxhdGVTZXR0aW5ncyk7dmFyIHQsZT1SZWdFeHAoWyhuLmVzY2FwZXx8Sikuc291cmNlLChuLmludGVycG9sYXRlfHxKKS5zb3VyY2UsKG4uZXZhbHVhdGV8fEopLnNvdXJjZV0uam9pbihcInxcIikrXCJ8JFwiLFwiZ1wiKSxvPTAsYT1cIl9fcCs9J1wiO2kucmVwbGFjZShlLGZ1bmN0aW9uKG4scix0LGUsdSl7cmV0dXJuIGErPWkuc2xpY2Uobyx1KS5yZXBsYWNlKFYsJCksbz11K24ubGVuZ3RoLHI/YSs9XCInK1xcbigoX190PShcIityK1wiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiOnQ/YSs9XCInK1xcbigoX190PShcIit0K1wiKSk9PW51bGw/Jyc6X190KStcXG4nXCI6ZSYmKGErPVwiJztcXG5cIitlK1wiXFxuX19wKz0nXCIpLG59KSxhKz1cIic7XFxuXCIsbi52YXJpYWJsZXx8KGE9XCJ3aXRoKG9ianx8e30pe1xcblwiK2ErXCJ9XFxuXCIpLGE9XCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIrXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiK2ErXCJyZXR1cm4gX19wO1xcblwiO3RyeXt0PW5ldyBGdW5jdGlvbihuLnZhcmlhYmxlfHxcIm9ialwiLFwiX1wiLGEpfWNhdGNoKG4pe3Rocm93IG4uc291cmNlPWEsbn12YXIgdT1mdW5jdGlvbihuKXtyZXR1cm4gdC5jYWxsKHRoaXMsbixoKX0sYz1uLnZhcmlhYmxlfHxcIm9ialwiO3JldHVybiB1LnNvdXJjZT1cImZ1bmN0aW9uKFwiK2MrXCIpe1xcblwiK2ErXCJ9XCIsdX0saC5jaGFpbj1mdW5jdGlvbihuKXt2YXIgcj1oKG4pO3JldHVybiByLl9jaGFpbj0hMCxyfTt2YXIgRz1mdW5jdGlvbihuLHIpe3JldHVybiBuLl9jaGFpbj9oKHIpLmNoYWluKCk6cn07aC5taXhpbj1mdW5jdGlvbih0KXtyZXR1cm4gaC5lYWNoKGguZnVuY3Rpb25zKHQpLGZ1bmN0aW9uKG4pe3ZhciByPWhbbl09dFtuXTtoLnByb3RvdHlwZVtuXT1mdW5jdGlvbigpe3ZhciBuPVt0aGlzLl93cmFwcGVkXTtyZXR1cm4gdS5hcHBseShuLGFyZ3VtZW50cyksRyh0aGlzLHIuYXBwbHkoaCxuKSl9fSksaH0saC5taXhpbihoKSxoLmVhY2goW1wicG9wXCIsXCJwdXNoXCIsXCJyZXZlcnNlXCIsXCJzaGlmdFwiLFwic29ydFwiLFwic3BsaWNlXCIsXCJ1bnNoaWZ0XCJdLGZ1bmN0aW9uKHIpe3ZhciB0PWVbcl07aC5wcm90b3R5cGVbcl09ZnVuY3Rpb24oKXt2YXIgbj10aGlzLl93cmFwcGVkO3JldHVybiB0LmFwcGx5KG4sYXJndW1lbnRzKSxcInNoaWZ0XCIhPT1yJiZcInNwbGljZVwiIT09cnx8MCE9PW4ubGVuZ3RofHxkZWxldGUgblswXSxHKHRoaXMsbil9fSksaC5lYWNoKFtcImNvbmNhdFwiLFwiam9pblwiLFwic2xpY2VcIl0sZnVuY3Rpb24obil7dmFyIHI9ZVtuXTtoLnByb3RvdHlwZVtuXT1mdW5jdGlvbigpe3JldHVybiBHKHRoaXMsci5hcHBseSh0aGlzLl93cmFwcGVkLGFyZ3VtZW50cykpfX0pLGgucHJvdG90eXBlLnZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dyYXBwZWR9LGgucHJvdG90eXBlLnZhbHVlT2Y9aC5wcm90b3R5cGUudG9KU09OPWgucHJvdG90eXBlLnZhbHVlLGgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIFN0cmluZyh0aGlzLl93cmFwcGVkKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJ1bmRlcnNjb3JlXCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gaH0pfSgpO1xuIiwiaW1wb3J0IHtleHRyYWN0RXh0ZW5zaW9ufSBmcm9tIFwidXRpbHMvc3RyaW5nc1wiO1xuXG5leHBvcnQgY29uc3QgaXNSdG1wID0gZnVuY3Rpb24gKGZpbGUsIHR5cGUpIHtcbiAgICBpZihmaWxlKXtcbiAgICAgICAgcmV0dXJuIChmaWxlLmluZGV4T2YoJ3J0bXA6JykgPT0gMCB8fCB0eXBlID09ICdydG1wJyk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBpc1dlYlJUQyA9IGZ1bmN0aW9uIChmaWxlLCB0eXBlKSB7XG4gICAgaWYoZmlsZSl7XG4gICAgICAgIHJldHVybiAoZmlsZS5pbmRleE9mKCd3czonKSA9PT0gMCB8fCBmaWxlLmluZGV4T2YoJ3dzczonKSA9PT0gMCB8fCB0eXBlID09PSAnd2VicnRjJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3QgaXNIbHMgPSBmdW5jdGlvbiAoZmlsZSwgdHlwZSkge1xuICAgIGlmKGZpbGUpe1xuICAgICAgICByZXR1cm4gKCB0eXBlID09PSAnaGxzJyB8fCAgdHlwZSA9PT0gJ20zdTgnIHx8IHR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQuYXBwbGUubXBlZ3VybCcgfHwgZXh0cmFjdEV4dGVuc2lvbihmaWxlKSA9PSAnbTN1OCcpO1xuXG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBpc0Rhc2ggPSBmdW5jdGlvbiAoZmlsZSwgdHlwZSkge1xuICAgIGlmKGZpbGUpe1xuICAgICAgICByZXR1cm4gKCB0eXBlID09PSAnbXBkJyB8fCAgdHlwZSA9PT0gJ2Rhc2gnIHx8IHR5cGUgPT09ICdhcHBsaWNhdGlvbi9kYXNoK3htbCcgfHwgZXh0cmFjdEV4dGVuc2lvbihmaWxlKSA9PSAnbXBkJyk7XG5cbiAgICB9XG59O1xuIiwiLyoqXG4gKiB1dGlscyBmb3Igd2VicGFja1xuICovXG5cbmV4cG9ydCBjb25zdCBnZXRTY3JpcHRQYXRoID0gZnVuY3Rpb24oc2NyaXB0TmFtZSkge1xuICAgIGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHNjcmlwdHNbaV0uc3JjO1xuICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHNyYy5sYXN0SW5kZXhPZignLycgKyBzY3JpcHROYW1lKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNyYy5zdWJzdHIoMCwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhvaG8gb24gMjAxOC4gNi4gMjkuLlxuICovXG5leHBvcnQgY29uc3QgdmVyc2lvbiA9IF9fVkVSU0lPTl9fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==