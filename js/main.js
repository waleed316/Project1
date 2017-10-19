/**!
 * MixItUp v2.1.11
 *
 * @copyright Copyright 2015 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(a,b){"use strict";a.MixItUp=function(){var b=this;b._execAction("_constructor",0),a.extend(b,{selectors:{target:".mix",filter:".filter",sort:".sort"},animation:{enable:!0,effects:"fade scale",duration:600,easing:"ease",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",queue:!0,queueLimit:1,animateChangeLayout:!1,animateResizeContainer:!0,animateResizeTargets:!1,staggerSequence:!1,reverseOut:!1},callbacks:{onMixLoad:!1,onMixStart:!1,onMixBusy:!1,onMixEnd:!1,onMixFail:!1,_user:!1},controls:{enable:!0,live:!1,toggleFilterButtons:!1,toggleLogic:"or",activeClass:"active"},layout:{display:"inline-block",containerClass:"",containerClassFail:"fail"},load:{filter:"all",sort:!1},_$body:null,_$container:null,_$targets:null,_$parent:null,_$sortButtons:null,_$filterButtons:null,_suckMode:!1,_mixing:!1,_sorting:!1,_clicking:!1,_loading:!0,_changingLayout:!1,_changingClass:!1,_changingDisplay:!1,_origOrder:[],_startOrder:[],_newOrder:[],_activeFilter:null,_toggleArray:[],_toggleString:"",_activeSort:"default:asc",_newSort:null,_startHeight:null,_newHeight:null,_incPadding:!0,_newDisplay:null,_newClass:null,_targetsBound:0,_targetsDone:0,_queue:[],_$show:a(),_$hide:a()}),b._execAction("_constructor",1)},a.MixItUp.prototype={constructor:a.MixItUp,_instances:{},_handled:{_filter:{},_sort:{}},_bound:{_filter:{},_sort:{}},_actions:{},_filters:{},extend:function(b){for(var c in b)a.MixItUp.prototype[c]=b[c]},addAction:function(b,c,d,e){a.MixItUp.prototype._addHook("_actions",b,c,d,e)},addFilter:function(b,c,d,e){a.MixItUp.prototype._addHook("_filters",b,c,d,e)},_addHook:function(b,c,d,e,f){var g=a.MixItUp.prototype[b],h={};f=1===f||"post"===f?"post":"pre",h[c]={},h[c][f]={},h[c][f][d]=e,a.extend(!0,g,h)},_init:function(b,c){var d=this;if(d._execAction("_init",0,arguments),c&&a.extend(!0,d,c),d._$body=a("body"),d._domNode=b,d._$container=a(b),d._$container.addClass(d.layout.containerClass),d._id=b.id,d._platformDetect(),d._brake=d._getPrefixedCSS("transition","none"),d._refresh(!0),d._$parent=d._$targets.parent().length?d._$targets.parent():d._$container,d.load.sort&&(d._newSort=d._parseSort(d.load.sort),d._newSortString=d.load.sort,d._activeSort=d.load.sort,d._sort(),d._printSort()),d._activeFilter="all"===d.load.filter?d.selectors.target:"none"===d.load.filter?"":d.load.filter,d.controls.enable&&d._bindHandlers(),d.controls.toggleFilterButtons){d._buildToggleArray();for(var e=0;e<d._toggleArray.length;e++)d._updateControls({filter:d._toggleArray[e],sort:d._activeSort},!0)}else d.controls.enable&&d._updateControls({filter:d._activeFilter,sort:d._activeSort});d._filter(),d._init=!0,d._$container.data("mixItUp",d),d._execAction("_init",1,arguments),d._buildState(),d._$targets.css(d._brake),d._goMix(d.animation.enable)},_platformDetect:function(){var a=this,c=["Webkit","Moz","O","ms"],d=["webkit","moz"],e=window.navigator.appVersion.match(/Chrome\/(\d+)\./)||!1,f="undefined"!=typeof InstallTrigger,g=function(a){for(var b=0;b<c.length;b++)if(c[b]+"Transition"in a.style)return{prefix:"-"+c[b].toLowerCase()+"-",vendor:c[b]};return"transition"in a.style?"":!1},h=g(a._domNode);a._execAction("_platformDetect",0),a._chrome=e?parseInt(e[1],10):!1,a._ff=f?parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]):!1,a._prefix=h.prefix,a._vendor=h.vendor,a._suckMode=window.atob&&a._prefix?!1:!0,a._suckMode&&(a.animation.enable=!1),a._ff&&a._ff<=4&&(a.animation.enable=!1);for(var i=0;i<d.length&&!window.requestAnimationFrame;i++)window.requestAnimationFrame=window[d[i]+"RequestAnimationFrame"];"function"!=typeof Object.getPrototypeOf&&("object"==typeof"test".__proto__?Object.getPrototypeOf=function(a){return a.__proto__}:Object.getPrototypeOf=function(a){return a.constructor.prototype}),a._domNode.nextElementSibling===b&&Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var a=this.nextSibling;a;){if(1===a.nodeType)return a;a=a.nextSibling}return null}}),a._execAction("_platformDetect",1)},_refresh:function(a,c){var d=this;d._execAction("_refresh",0,arguments),d._$targets=d._$container.find(d.selectors.target);for(var e=0;e<d._$targets.length;e++){var f=d._$targets[e];if(f.dataset===b||c){f.dataset={};for(var g=0;g<f.attributes.length;g++){var h=f.attributes[g],i=h.name,j=h.value;if(i.indexOf("data-")>-1){var k=d._helpers._camelCase(i.substring(5,i.length));f.dataset[k]=j}}}f.mixParent===b&&(f.mixParent=d._id)}if(d._$targets.length&&a||!d._origOrder.length&&d._$targets.length){d._origOrder=[];for(var e=0;e<d._$targets.length;e++){var f=d._$targets[e];d._origOrder.push(f)}}d._execAction("_refresh",1,arguments)},_bindHandlers:function(){var c=this,d=a.MixItUp.prototype._bound._filter,e=a.MixItUp.prototype._bound._sort;c._execAction("_bindHandlers",0),c.controls.live?c._$body.on("click.mixItUp."+c._id,c.selectors.sort,function(){c._processClick(a(this),"sort")}).on("click.mixItUp."+c._id,c.selectors.filter,function(){c._processClick(a(this),"filter")}):(c._$sortButtons=a(c.selectors.sort),c._$filterButtons=a(c.selectors.filter),c._$sortButtons.on("click.mixItUp."+c._id,function(){c._processClick(a(this),"sort")}),c._$filterButtons.on("click.mixItUp."+c._id,function(){c._processClick(a(this),"filter")})),d[c.selectors.filter]=d[c.selectors.filter]===b?1:d[c.selectors.filter]+1,e[c.selectors.sort]=e[c.selectors.sort]===b?1:e[c.selectors.sort]+1,c._execAction("_bindHandlers",1)},_processClick:function(c,d){var e=this,f=function(c,d,f){var g=a.MixItUp.prototype;g._handled["_"+d][e.selectors[d]]=g._handled["_"+d][e.selectors[d]]===b?1:g._handled["_"+d][e.selectors[d]]+1,g._handled["_"+d][e.selectors[d]]===g._bound["_"+d][e.selectors[d]]&&(c[(f?"remove":"add")+"Class"](e.controls.activeClass),delete g._handled["_"+d][e.selectors[d]])};if(e._execAction("_processClick",0,arguments),!e._mixing||e.animation.queue&&e._queue.length<e.animation.queueLimit){if(e._clicking=!0,"sort"===d){var g=c.attr("data-sort");(!c.hasClass(e.controls.activeClass)||g.indexOf("random")>-1)&&(a(e.selectors.sort).removeClass(e.controls.activeClass),f(c,d),e.sort(g))}if("filter"===d){var h,i=c.attr("data-filter"),j="or"===e.controls.toggleLogic?",":"";e.controls.toggleFilterButtons?(e._buildToggleArray(),c.hasClass(e.controls.activeClass)?(f(c,d,!0),h=e._toggleArray.indexOf(i),e._toggleArray.splice(h,1)):(f(c,d),e._toggleArray.push(i)),e._toggleArray=a.grep(e._toggleArray,function(a){return a}),e._toggleString=e._toggleArray.join(j),e.filter(e._toggleString)):c.hasClass(e.controls.activeClass)||(a(e.selectors.filter).removeClass(e.controls.activeClass),f(c,d),e.filter(i))}e._execAction("_processClick",1,arguments)}else"function"==typeof e.callbacks.onMixBusy&&e.callbacks.onMixBusy.call(e._domNode,e._state,e),e._execAction("_processClickBusy",1,arguments)},_buildToggleArray:function(){var a=this,b=a._activeFilter.replace(/\s/g,"");if(a._execAction("_buildToggleArray",0,arguments),"or"===a.controls.toggleLogic)a._toggleArray=b.split(",");else{a._toggleArray=b.split("."),!a._toggleArray[0]&&a._toggleArray.shift();for(var c,d=0;c=a._toggleArray[d];d++)a._toggleArray[d]="."+c}a._execAction("_buildToggleArray",1,arguments)},_updateControls:function(c,d){var e=this,f={filter:c.filter,sort:c.sort},g=function(a,b){try{d&&"filter"===h&&"none"!==f.filter&&""!==f.filter?a.filter(b).addClass(e.controls.activeClass):a.removeClass(e.controls.activeClass).filter(b).addClass(e.controls.activeClass)}catch(c){}},h="filter",i=null;e._execAction("_updateControls",0,arguments),c.filter===b&&(f.filter=e._activeFilter),c.sort===b&&(f.sort=e._activeSort),f.filter===e.selectors.target&&(f.filter="all");for(var j=0;2>j;j++)i=e.controls.live?a(e.selectors[h]):e["_$"+h+"Buttons"],i&&g(i,"[data-"+h+'="'+f[h]+'"]'),h="sort";e._execAction("_updateControls",1,arguments)},_filter:function(){var b=this;b._execAction("_filter",0);for(var c=0;c<b._$targets.length;c++){var d=a(b._$targets[c]);d.is(b._activeFilter)?b._$show=b._$show.add(d):b._$hide=b._$hide.add(d)}b._execAction("_filter",1)},_sort:function(){var a=this,b=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b};a._execAction("_sort",0),a._startOrder=[];for(var c=0;c<a._$targets.length;c++){var d=a._$targets[c];a._startOrder.push(d)}switch(a._newSort[0].sortBy){case"default":a._newOrder=a._origOrder;break;case"random":a._newOrder=b(a._startOrder);break;case"custom":a._newOrder=a._newSort[0].order;break;default:a._newOrder=a._startOrder.concat().sort(function(b,c){return a._compare(b,c)})}a._execAction("_sort",1)},_compare:function(a,b,c){c=c?c:0;var d=this,e=d._newSort[c].order,f=function(a){return a.dataset[d._newSort[c].sortBy]||0},g=isNaN(1*f(a))?f(a).toLowerCase():1*f(a),h=isNaN(1*f(b))?f(b).toLowerCase():1*f(b);return h>g?"asc"===e?-1:1:g>h?"asc"===e?1:-1:g===h&&d._newSort.length>c+1?d._compare(a,b,c+1):0},_printSort:function(a){var b=this,c=a?b._startOrder:b._newOrder,d=b._$parent[0].querySelectorAll(b.selectors.target),e=d.length?d[d.length-1].nextElementSibling:null,f=document.createDocumentFragment();b._execAction("_printSort",0,arguments);for(var g=0;g<d.length;g++){var h=d[g],i=h.nextSibling;"absolute"!==h.style.position&&(i&&"#text"===i.nodeName&&b._$parent[0].removeChild(i),b._$parent[0].removeChild(h))}for(var g=0;g<c.length;g++){var j=c[g];if("default"!==b._newSort[0].sortBy||"desc"!==b._newSort[0].order||a)f.appendChild(j),f.appendChild(document.createTextNode(" "));else{var k=f.firstChild;f.insertBefore(j,k),f.insertBefore(document.createTextNode(" "),j)}}e?b._$parent[0].insertBefore(f,e):b._$parent[0].appendChild(f),b._execAction("_printSort",1,arguments)},_parseSort:function(a){for(var b=this,c="string"==typeof a?a.split(" "):[a],d=[],e=0;e<c.length;e++){var f="string"==typeof a?c[e].split(":"):["custom",c[e]],g={sortBy:b._helpers._camelCase(f[0]),order:f[1]||"asc"};if(d.push(g),"default"===g.sortBy||"random"===g.sortBy)break}return b._execFilter("_parseSort",d,arguments)},_parseEffects:function(){var a=this,b={opacity:"",transformIn:"",transformOut:"",filter:""},c=function(b,c,d){if(a.animation.effects.indexOf(b)>-1){if(c){var e=a.animation.effects.indexOf(b+"(");if(e>-1){var f=a.animation.effects.substring(e),g=/\(([^)]+)\)/.exec(f),h=g[1];return{val:h}}}return!0}return!1},d=function(a,b){return b?"-"===a.charAt(0)?a.substr(1,a.length):"-"+a:a},e=function(a,e){for(var f=[["scale",".01"],["translateX","20px"],["translateY","20px"],["translateZ","20px"],["rotateX","90deg"],["rotateY","90deg"],["rotateZ","180deg"]],g=0;g<f.length;g++){var h=f[g][0],i=f[g][1],j=e&&"scale"!==h;b[a]+=c(h)?h+"("+d(c(h,!0).val||i,j)+") ":""}};return b.opacity=c("fade")?c("fade",!0).val||"0":"1",e("transformIn"),a.animation.reverseOut?e("transformOut",!0):b.transformOut=b.transformIn,b.transition={},b.transition=a._getPrefixedCSS("transition","all "+a.animation.duration+"ms "+a.animation.easing+", opacity "+a.animation.duration+"ms linear"),a.animation.stagger=c("stagger")?!0:!1,a.animation.staggerDuration=parseInt(c("stagger")&&c("stagger",!0).val?c("stagger",!0).val:100),a._execFilter("_parseEffects",b)},_buildState:function(a){var b=this,c={};return b._execAction("_buildState",0),c={activeFilter:""===b._activeFilter?"none":b._activeFilter,activeSort:a&&b._newSortString?b._newSortString:b._activeSort,fail:!b._$show.length&&""!==b._activeFilter,$targets:b._$targets,$show:b._$show,$hide:b._$hide,totalTargets:b._$targets.length,totalShow:b._$show.length,totalHide:b._$hide.length,display:a&&b._newDisplay?b._newDisplay:b.layout.display},a?b._execFilter("_buildState",c):(b._state=c,void b._execAction("_buildState",1))},_goMix:function(a){var b=this,c=function(){b._chrome&&31===b._chrome&&f(b._$parent[0]),b._setInter(),d()},d=function(){var a=window.pageYOffset,c=window.pageXOffset;document.documentElement.scrollHeight;b._getInterMixData(),b._setFinal(),b._getFinalMixData(),window.pageYOffset!==a&&window.scrollTo(c,a),b._prepTargets(),window.requestAnimationFrame?requestAnimationFrame(e):setTimeout(function(){e()},20)},e=function(){b._animateTargets(),0===b._targetsBound&&b._cleanUp()},f=function(a){var b=a.parentElement,c=document.createElement("div"),d=document.createDocumentFragment();b.insertBefore(c,a),d.appendChild(a),b.replaceChild(a,c)},g=b._buildState(!0);b._execAction("_goMix",0,arguments),!b.animation.duration&&(a=!1),b._mixing=!0,b._$container.removeClass(b.layout.containerClassFail),"function"==typeof b.callbacks.onMixStart&&b.callbacks.onMixStart.call(b._domNode,b._state,g,b),b._$container.trigger("mixStart",[b._state,g,b]),b._getOrigMixData(),a&&!b._suckMode?window.requestAnimationFrame?requestAnimationFrame(c):c():b._cleanUp(),b._execAction("_goMix",1,arguments)},_getTargetData:function(a,b){var c,d=this;a.dataset[b+"PosX"]=a.offsetLeft,a.dataset[b+"PosY"]=a.offsetTop,d.animation.animateResizeTargets&&(c=d._suckMode?{marginBottom:"",marginRight:""}:window.getComputedStyle(a),a.dataset[b+"MarginBottom"]=parseInt(c.marginBottom),a.dataset[b+"MarginRight"]=parseInt(c.marginRight),a.dataset[b+"Width"]=a.offsetWidth,a.dataset[b+"Height"]=a.offsetHeight)},_getOrigMixData:function(){var a=this,b=a._suckMode?{boxSizing:""}:window.getComputedStyle(a._$parent[0]),c=b.boxSizing||b[a._vendor+"BoxSizing"];a._incPadding="border-box"===c,a._execAction("_getOrigMixData",0),!a._suckMode&&(a.effects=a._parseEffects()),a._$toHide=a._$hide.filter(":visible"),a._$toShow=a._$show.filter(":hidden"),a._$pre=a._$targets.filter(":visible"),a._startHeight=a._incPadding?a._$parent.outerHeight():a._$parent.height();for(var d=0;d<a._$pre.length;d++){var e=a._$pre[d];a._getTargetData(e,"orig")}a._execAction("_getOrigMixData",1)},_setInter:function(){var a=this;a._execAction("_setInter",0),a._changingLayout&&a.animation.animateChangeLayout?(a._$toShow.css("display",a._newDisplay),a._changingClass&&a._$container.removeClass(a.layout.containerClass).addClass(a._newClass)):a._$toShow.css("display",a.layout.display),a._execAction("_setInter",1)},_getInterMixData:function(){var a=this;a._execAction("_getInterMixData",0);for(var b=0;b<a._$toShow.length;b++){var c=a._$toShow[b];a._getTargetData(c,"inter")}for(var b=0;b<a._$pre.length;b++){var c=a._$pre[b];a._getTargetData(c,"inter")}a._execAction("_getInterMixData",1)},_setFinal:function(){var a=this;a._execAction("_setFinal",0),a._sorting&&a._printSort(),a._$toHide.removeStyle("display"),a._changingLayout&&a.animation.animateChangeLayout&&a._$pre.css("display",a._newDisplay),a._execAction("_setFinal",1)},_getFinalMixData:function(){var a=this;a._execAction("_getFinalMixData",0);for(var b=0;b<a._$toShow.length;b++){var c=a._$toShow[b];a._getTargetData(c,"final")}for(var b=0;b<a._$pre.length;b++){var c=a._$pre[b];a._getTargetData(c,"final")}a._newHeight=a._incPadding?a._$parent.outerHeight():a._$parent.height(),a._sorting&&a._printSort(!0),a._$toShow.removeStyle("display"),a._$pre.css("display",a.layout.display),a._changingClass&&a.animation.animateChangeLayout&&a._$container.removeClass(a._newClass).addClass(a.layout.containerClass),a._execAction("_getFinalMixData",1)},_prepTargets:function(){var b=this,c={_in:b._getPrefixedCSS("transform",b.effects.transformIn),_out:b._getPrefixedCSS("transform",b.effects.transformOut)};b._execAction("_prepTargets",0),b.animation.animateResizeContainer&&b._$parent.css("height",b._startHeight+"px");for(var d=0;d<b._$toShow.length;d++){var e=b._$toShow[d],f=a(e);e.style.opacity=b.effects.opacity,e.style.display=b._changingLayout&&b.animation.animateChangeLayout?b._newDisplay:b.layout.display,f.css(c._in),b.animation.animateResizeTargets&&(e.style.width=e.dataset.finalWidth+"px",e.style.height=e.dataset.finalHeight+"px",e.style.marginRight=-(e.dataset.finalWidth-e.dataset.interWidth)+1*e.dataset.finalMarginRight+"px",e.style.marginBottom=-(e.dataset.finalHeight-e.dataset.interHeight)+1*e.dataset.finalMarginBottom+"px")}for(var d=0;d<b._$pre.length;d++){var e=b._$pre[d],f=a(e),g={x:e.dataset.origPosX-e.dataset.interPosX,y:e.dataset.origPosY-e.dataset.interPosY},c=b._getPrefixedCSS("transform","translate("+g.x+"px,"+g.y+"px)");f.css(c),b.animation.animateResizeTargets&&(e.style.width=e.dataset.origWidth+"px",e.style.height=e.dataset.origHeight+"px",e.dataset.origWidth-e.dataset.finalWidth&&(e.style.marginRight=-(e.dataset.origWidth-e.dataset.interWidth)+1*e.dataset.origMarginRight+"px"),e.dataset.origHeight-e.dataset.finalHeight&&(e.style.marginBottom=-(e.dataset.origHeight-e.dataset.interHeight)+1*e.dataset.origMarginBottom+"px"))}b._execAction("_prepTargets",1)},_animateTargets:function(){var b=this;b._execAction("_animateTargets",0),b._targetsDone=0,b._targetsBound=0,b._$parent.css(b._getPrefixedCSS("perspective",b.animation.perspectiveDistance+"px")).css(b._getPrefixedCSS("perspective-origin",b.animation.perspectiveOrigin)),b.animation.animateResizeContainer&&b._$parent.css(b._getPrefixedCSS("transition","height "+b.animation.duration+"ms ease")).css("height",b._newHeight+"px");for(var c=0;c<b._$toShow.length;c++){var d=b._$toShow[c],e=a(d),f={x:d.dataset.finalPosX-d.dataset.interPosX,y:d.dataset.finalPosY-d.dataset.interPosY},g=b._getDelay(c),h={};d.style.opacity="";for(var i=0;2>i;i++){var j=0===i?j=b._prefix:"";b._ff&&b._ff<=20&&(h[j+"transition-property"]="all",h[j+"transition-timing-function"]=b.animation.easing+"ms",h[j+"transition-duration"]=b.animation.duration+"ms"),h[j+"transition-delay"]=g+"ms",h[j+"transform"]="translate("+f.x+"px,"+f.y+"px)"}(b.effects.transform||b.effects.opacity)&&b._bindTargetDone(e),b._ff&&b._ff<=20?e.css(h):e.css(b.effects.transition).css(h)}for(var c=0;c<b._$pre.length;c++){var d=b._$pre[c],e=a(d),f={x:d.dataset.finalPosX-d.dataset.interPosX,y:d.dataset.finalPosY-d.dataset.interPosY},g=b._getDelay(c);(d.dataset.finalPosX!==d.dataset.origPosX||d.dataset.finalPosY!==d.dataset.origPosY)&&b._bindTargetDone(e),e.css(b._getPrefixedCSS("transition","all "+b.animation.duration+"ms "+b.animation.easing+" "+g+"ms")),e.css(b._getPrefixedCSS("transform","translate("+f.x+"px,"+f.y+"px)")),b.animation.animateResizeTargets&&(d.dataset.origWidth-d.dataset.finalWidth&&1*d.dataset.finalWidth&&(d.style.width=d.dataset.finalWidth+"px",d.style.marginRight=-(d.dataset.finalWidth-d.dataset.interWidth)+1*d.dataset.finalMarginRight+"px"),d.dataset.origHeight-d.dataset.finalHeight&&1*d.dataset.finalHeight&&(d.style.height=d.dataset.finalHeight+"px",d.style.marginBottom=-(d.dataset.finalHeight-d.dataset.interHeight)+1*d.dataset.finalMarginBottom+"px"))}b._changingClass&&b._$container.removeClass(b.layout.containerClass).addClass(b._newClass);for(var c=0;c<b._$toHide.length;c++){for(var d=b._$toHide[c],e=a(d),g=b._getDelay(c),k={},i=0;2>i;i++){var j=0===i?j=b._prefix:"";k[j+"transition-delay"]=g+"ms",k[j+"transform"]=b.effects.transformOut,k.opacity=b.effects.opacity}e.css(b.effects.transition).css(k),(b.effects.transform||b.effects.opacity)&&b._bindTargetDone(e)}b._execAction("_animateTargets",1)},_bindTargetDone:function(b){var c=this,d=b[0];c._execAction("_bindTargetDone",0,arguments),d.dataset.bound||(d.dataset.bound=!0,c._targetsBound++,b.on("webkitTransitionEnd.mixItUp transitionend.mixItUp",function(e){(e.originalEvent.propertyName.indexOf("transform")>-1||e.originalEvent.propertyName.indexOf("opacity")>-1)&&a(e.originalEvent.target).is(c.selectors.target)&&(b.off(".mixItUp"),d.dataset.bound="",c._targetDone())})),c._execAction("_bindTargetDone",1,arguments)},_targetDone:function(){var a=this;a._execAction("_targetDone",0),a._targetsDone++,a._targetsDone===a._targetsBound&&a._cleanUp(),a._execAction("_targetDone",1)},_cleanUp:function(){var b=this,c=b.animation.animateResizeTargets?"transform opacity width height margin-bottom margin-right":"transform opacity",d=function(){b._$targets.removeStyle("transition",b._prefix)};b._execAction("_cleanUp",0),b._changingLayout?b._$show.css("display",b._newDisplay):b._$show.css("display",b.layout.display),b._$targets.css(b._brake),b._$targets.removeStyle(c,b._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"),b._$hide.removeStyle("display"),b._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",b._prefix),b._sorting&&(b._printSort(),b._activeSort=b._newSortString,b._sorting=!1),b._changingLayout&&(b._changingDisplay&&(b.layout.display=b._newDisplay,b._changingDisplay=!1),b._changingClass&&(b._$parent.removeClass(b.layout.containerClass).addClass(b._newClass),b.layout.containerClass=b._newClass,b._changingClass=!1),b._changingLayout=!1),b._refresh(),b._buildState(),b._state.fail&&b._$container.addClass(b.layout.containerClassFail),b._$show=a(),b._$hide=a(),window.requestAnimationFrame&&requestAnimationFrame(d),b._mixing=!1,"function"==typeof b.callbacks._user&&b.callbacks._user.call(b._domNode,b._state,b),"function"==typeof b.callbacks.onMixEnd&&b.callbacks.onMixEnd.call(b._domNode,b._state,b),b._$container.trigger("mixEnd",[b._state,b]),b._state.fail&&("function"==typeof b.callbacks.onMixFail&&b.callbacks.onMixFail.call(b._domNode,b._state,b),b._$container.trigger("mixFail",[b._state,b])),b._loading&&("function"==typeof b.callbacks.onMixLoad&&b.callbacks.onMixLoad.call(b._domNode,b._state,b),b._$container.trigger("mixLoad",[b._state,b])),b._queue.length&&(b._execAction("_queue",0),b.multiMix(b._queue[0][0],b._queue[0][1],b._queue[0][2]),b._queue.splice(0,1)),b._execAction("_cleanUp",1),b._loading=!1},_getPrefixedCSS:function(a,b,c){var d=this,e={},f="",g=-1;for(g=0;2>g;g++)f=0===g?d._prefix:"",c?e[f+a]=f+b:e[f+a]=b;return d._execFilter("_getPrefixedCSS",e,arguments)},_getDelay:function(a){var b=this,c="function"==typeof b.animation.staggerSequence?b.animation.staggerSequence.call(b._domNode,a,b._state):a,d=b.animation.stagger?c*b.animation.staggerDuration:0;return b._execFilter("_getDelay",d,arguments)},_parseMultiMixArgs:function(a){for(var b=this,c={command:null,animate:b.animation.enable,callback:null},d=0;d<a.length;d++){var e=a[d];null!==e&&("object"==typeof e||"string"==typeof e?c.command=e:"boolean"==typeof e?c.animate=e:"function"==typeof e&&(c.callback=e))}return b._execFilter("_parseMultiMixArgs",c,arguments)},_parseInsertArgs:function(b){for(var c=this,d={index:0,$object:a(),multiMix:{filter:c._state.activeFilter},callback:null},e=0;e<b.length;e++){var f=b[e];"number"==typeof f?d.index=f:"object"==typeof f&&f instanceof a?d.$object=f:"object"==typeof f&&c._helpers._isElement(f)?d.$object=a(f):"object"==typeof f&&null!==f?d.multiMix=f:"boolean"!=typeof f||f?"function"==typeof f&&(d.callback=f):d.multiMix=!1}return c._execFilter("_parseInsertArgs",d,arguments)},_execAction:function(a,b,c){var d=this,e=b?"post":"pre";if(!d._actions.isEmptyObject&&d._actions.hasOwnProperty(a))for(var f in d._actions[a][e])d._actions[a][e][f].call(d,c)},_execFilter:function(a,b,c){var d=this;if(d._filters.isEmptyObject||!d._filters.hasOwnProperty(a))return b;for(var e in d._filters[a])return d._filters[a][e].call(d,c)},_helpers:{_camelCase:function(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})},_isElement:function(a){return window.HTMLElement?a instanceof HTMLElement:null!==a&&1===a.nodeType&&"string"===a.nodeName}},isMixing:function(){var a=this;return a._execFilter("isMixing",a._mixing)},filter:function(){var a=this,b=a._parseMultiMixArgs(arguments);a._clicking&&(a._toggleString=""),a.multiMix({filter:b.command},b.animate,b.callback)},sort:function(){var a=this,b=a._parseMultiMixArgs(arguments);a.multiMix({sort:b.command},b.animate,b.callback)},changeLayout:function(){var a=this,b=a._parseMultiMixArgs(arguments);a.multiMix({changeLayout:b.command},b.animate,b.callback)},multiMix:function(){var a=this,c=a._parseMultiMixArgs(arguments);if(a._execAction("multiMix",0,arguments),a._mixing)a.animation.queue&&a._queue.length<a.animation.queueLimit?(a._queue.push(arguments),a.controls.enable&&!a._clicking&&a._updateControls(c.command),a._execAction("multiMixQueue",1,arguments)):("function"==typeof a.callbacks.onMixBusy&&a.callbacks.onMixBusy.call(a._domNode,a._state,a),a._$container.trigger("mixBusy",[a._state,a]),a._execAction("multiMixBusy",1,arguments));else{a.controls.enable&&!a._clicking&&(a.controls.toggleFilterButtons&&a._buildToggleArray(),a._updateControls(c.command,a.controls.toggleFilterButtons)),a._queue.length<2&&(a._clicking=!1),delete a.callbacks._user,c.callback&&(a.callbacks._user=c.callback);var d=c.command.sort,e=c.command.filter,f=c.command.changeLayout;a._refresh(),d&&(a._newSort=a._parseSort(d),a._newSortString=d,a._sorting=!0,a._sort()),e!==b&&(e="all"===e?a.selectors.target:e,a._activeFilter=e),a._filter(),f&&(a._newDisplay="string"==typeof f?f:f.display||a.layout.display,a._newClass=f.containerClass||"",(a._newDisplay!==a.layout.display||a._newClass!==a.layout.containerClass)&&(a._changingLayout=!0,a._changingClass=a._newClass!==a.layout.containerClass,a._changingDisplay=a._newDisplay!==a.layout.display)),a._$targets.css(a._brake),a._goMix(c.animate^a.animation.enable?c.animate:a.animation.enable),a._execAction("multiMix",1,arguments)}},insert:function(){var a=this,b=a._parseInsertArgs(arguments),c="function"==typeof b.callback?b.callback:null,d=document.createDocumentFragment(),e=function(){return a._refresh(),a._$targets.length?b.index<a._$targets.length||!a._$targets.length?a._$targets[b.index]:a._$targets[a._$targets.length-1].nextElementSibling:a._$parent[0].children[0]}();if(a._execAction("insert",0,arguments),b.$object){for(var f=0;f<b.$object.length;f++){var g=b.$object[f];d.appendChild(g),d.appendChild(document.createTextNode(" "))}a._$parent[0].insertBefore(d,e)}a._execAction("insert",1,arguments),"object"==typeof b.multiMix&&a.multiMix(b.multiMix,c)},prepend:function(){var a=this,b=a._parseInsertArgs(arguments);a.insert(0,b.$object,b.multiMix,b.callback)},append:function(){var a=this,b=a._parseInsertArgs(arguments);a.insert(a._state.totalTargets,b.$object,b.multiMix,b.callback)},getOption:function(a){var c=this,d=function(a,c){for(var d=c.split("."),e=d.pop(),f=d.length,g=1,h=d[0]||c;(a=a[h])&&f>g;)h=d[g],g++;return a!==b?a[e]!==b?a[e]:a:void 0};return a?c._execFilter("getOption",d(c,a),arguments):c},setOptions:function(b){var c=this;c._execAction("setOptions",0,arguments),"object"==typeof b&&a.extend(!0,c,b),c._execAction("setOptions",1,arguments)},getState:function(){var a=this;return a._execFilter("getState",a._state,a)},forceRefresh:function(){var a=this;a._refresh(!1,!0)},destroy:function(b){var c=this,d=a.MixItUp.prototype._bound._filter,e=a.MixItUp.prototype._bound._sort;c._execAction("destroy",0,arguments),c._$body.add(a(c.selectors.sort)).add(a(c.selectors.filter)).off(".mixItUp");for(var f=0;f<c._$targets.length;f++){var g=c._$targets[f];b&&(g.style.display=""),delete g.mixParent}c._execAction("destroy",1,arguments),d[c.selectors.filter]&&d[c.selectors.filter]>1?d[c.selectors.filter]--:1===d[c.selectors.filter]&&delete d[c.selectors.filter],e[c.selectors.sort]&&e[c.selectors.sort]>1?e[c.selectors.sort]--:1===e[c.selectors.sort]&&delete e[c.selectors.sort],delete a.MixItUp.prototype._instances[c._id]}},a.fn.mixItUp=function(){var c,d=arguments,e=[],f=function(b,c){var d=new a.MixItUp,e=function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()};d._execAction("_instantiate",0,arguments),b.id=b.id?b.id:"MixItUp"+e(),d._instances[b.id]||(d._instances[b.id]=d,d._init(b,c)),d._execAction("_instantiate",1,arguments)};return c=this.each(function(){if(d&&"string"==typeof d[0]){var c=a.MixItUp.prototype._instances[this.id];if("isLoaded"===d[0])e.push(c?!0:!1);else{var g=c[d[0]](d[1],d[2],d[3]);g!==b&&e.push(g)}}else f(this,d[0])}),e.length?e.length>1?e:e[0]:c},a.fn.removeStyle=function(c,d){return d=d?d:"",this.each(function(){for(var e=this,f=c.split(" "),g=0;g<f.length;g++)for(var h=0;4>h;h++){switch(h){case 0:var i=f[g];break;case 1:var i=a.MixItUp.prototype._helpers._camelCase(i);break;case 2:var i=d+f[g];break;case 3:var i=a.MixItUp.prototype._helpers._camelCase(d+f[g])}if(e.style[i]!==b&&"unknown"!=typeof e.style[i]&&e.style[i].length>0&&(e.style[i]=""),!d&&1===h)break}e.attributes&&e.attributes.style&&e.attributes.style!==b&&""===e.attributes.style.value&&e.attributes.removeNamedItem("style")})}}(jQuery);




/*! lightgallery - v1.6.1 - 2017-09-18
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},c,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var c={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};b.prototype.init=function(){var b=this;b.s.preload>b.$items.length&&(b.s.preload=b.$items.length);var c=window.location.hash;c.indexOf("lg="+this.s.galleryId)>0&&(b.index=parseInt(c.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){b.build(b.index)}),a("body").addClass("lg-on"))),b.s.dynamic?(b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){b.build(b.index),a("body").addClass("lg-on")})):b.$items.on("click.lgcustom",function(c){try{c.preventDefault(),c.preventDefault()}catch(a){c.returnValue=!1}b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||b.$items.index(this),a("body").hasClass("lg-on")||(b.build(b.index),a("body").addClass("lg-on"))})},b.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1?(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()):c.$slide.on("click.lg",function(){c.$el.trigger("onSlideClick.lg")}),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.$outer.on("mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(c.hideBartimeout),c.hideBartimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},c.s.hideBarsDelay)}),c.$outer.trigger("mousemove.lg")},b.prototype.structure=function(){var b,c="",d="",e=0,f="",g=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),e=0;e<this.$items.length;e++)c+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(d='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(f='<div class="lg-sub-html"></div>'),b='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+c+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+d+f+"</div></div>",a("body").append(b),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),g.setTop(),a(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){g.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var h=this.$outer.find(".lg-inner");h.css("transition-timing-function",this.s.cssEasing),h.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){a(".lg-backdrop").addClass("in")}),setTimeout(function(){g.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(window).scrollTop()},b.prototype.setTop=function(){if("100%"!==this.s.height){var b=a(window).height(),c=(b-parseInt(this.s.height,10))/2,d=this.$outer.find(".lg");b>=parseInt(this.s.height,10)?d.css("top",c+"px"):d.css("top","0px")}},b.prototype.doCss=function(){var a=function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;for(c=0;c<a.length;c++)if(a[c]in b.style)return!0};return!!a()},b.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a)return c?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(b+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},b.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},b.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if("undefined"!=typeof e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),"undefined"!=typeof e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},b.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},b.prototype.loadContent=function(b,c,d){var e,f,g,h,i,j,k=this,l=!1,m=function(b){for(var c=[],d=[],e=0;e<b.length;e++){var g=b[e].split(" ");""===g[0]&&g.splice(0,1),d.push(g[0]),c.push(g[1])}for(var h=a(window).width(),i=0;i<c.length;i++)if(parseInt(c[i],10)>h){f=d[i];break}};if(k.s.dynamic){if(k.s.dynamicEl[b].poster&&(l=!0,g=k.s.dynamicEl[b].poster),j=k.s.dynamicEl[b].html,f=k.s.dynamicEl[b].src,k.s.dynamicEl[b].responsive){var n=k.s.dynamicEl[b].responsive.split(",");m(n)}h=k.s.dynamicEl[b].srcset,i=k.s.dynamicEl[b].sizes}else{if(k.$items.eq(b).attr("data-poster")&&(l=!0,g=k.$items.eq(b).attr("data-poster")),j=k.$items.eq(b).attr("data-html"),f=k.$items.eq(b).attr("href")||k.$items.eq(b).attr("data-src"),k.$items.eq(b).attr("data-responsive")){var o=k.$items.eq(b).attr("data-responsive").split(",");m(o)}h=k.$items.eq(b).attr("data-srcset"),i=k.$items.eq(b).attr("data-sizes")}var p=!1;k.s.dynamic?k.s.dynamicEl[b].iframe&&(p=!0):"true"===k.$items.eq(b).attr("data-iframe")&&(p=!0);var q=k.isVideo(f,b);if(!k.$slide.eq(b).hasClass("lg-loaded")){if(p)k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+k.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+f+'"  allowfullscreen="true"></iframe></div></div>');else if(l){var r="";r=q&&q.youtube?"lg-has-youtube":q&&q.vimeo?"lg-has-vimeo":"lg-has-html5",k.$slide.eq(b).prepend('<div class="lg-video-cont '+r+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+g+'" /></div></div>')}else q?(k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),k.$el.trigger("hasVideo.lg",[b,f,j])):k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+f+'" /></div>');if(k.$el.trigger("onAferAppendSlide.lg",[b]),e=k.$slide.eq(b).find(".lg-object"),i&&e.attr("sizes",i),h){e.attr("srcset",h);try{picturefill({elements:[e[0]]})}catch(a){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&k.addHtml(b),k.$slide.eq(b).addClass("lg-loaded")}k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){var c=0;d&&!a("body").hasClass("lg-from-hash")&&(c=d),setTimeout(function(){k.$slide.eq(b).addClass("lg-complete"),k.$el.trigger("onSlideItemLoad.lg",[b,d||0])},c)}),q&&q.html5&&!l&&k.$slide.eq(b).addClass("lg-complete"),c===!0&&(k.$slide.eq(b).hasClass("lg-complete")?k.preload(b):k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){k.preload(b)}))},b.prototype.slide=function(b,c,d,e){var f=this.$outer.find(".lg-current").index(),g=this;if(!g.lGalleryOn||f!==b){var h=this.$slide.length,i=g.lGalleryOn?this.s.speed:0;if(!g.lgBusy){if(this.s.download){var j;j=g.s.dynamic?g.s.dynamicEl[b].downloadUrl!==!1&&(g.s.dynamicEl[b].downloadUrl||g.s.dynamicEl[b].src):"false"!==g.$items.eq(b).attr("data-download-url")&&(g.$items.eq(b).attr("data-download-url")||g.$items.eq(b).attr("href")||g.$items.eq(b).attr("data-src")),j?(a("#lg-download").attr("href",j),g.$outer.removeClass("lg-hide-download")):g.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[f,b,c,d]),g.lgBusy=!0,clearTimeout(g.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){g.addHtml(b)},i),this.arrowDisable(b),e||(b<f?e="prev":b>f&&(e="next")),c){this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");var k,l;h>2?(k=b-1,l=b+1,0===b&&f===h-1?(l=0,k=h-1):b===h-1&&0===f&&(l=0,k=h-1)):(k=0,l=1),"prev"===e?g.$slide.eq(l).addClass("lg-next-slide"):g.$slide.eq(k).addClass("lg-prev-slide"),g.$slide.eq(b).addClass("lg-current")}else g.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===e?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(f).addClass("lg-next-slide")):(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(f).addClass("lg-prev-slide")),setTimeout(function(){g.$slide.removeClass("lg-current"),g.$slide.eq(b).addClass("lg-current"),g.$outer.removeClass("lg-no-trans")},50);g.lGalleryOn?(setTimeout(function(){g.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])},this.s.speed)):(g.loadContent(b,!0,g.s.backdropDuration),g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])),g.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}g.index=b}},b.prototype.goToNextSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):c?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},b.prototype.goToPrevSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):c?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},b.prototype.keyPress=function(){var b=this;this.$items.length>1&&a(window).on("keyup.lg",function(a){b.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),b.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),b.goToNextSlide()))}),a(window).on("keydown.lg",function(a){b.s.escKey===!0&&27===a.keyCode&&(a.preventDefault(),b.$outer.hasClass("lg-thumb-open")?b.$outer.removeClass("lg-thumb-open"):b.destroy())})},b.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},b.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},b.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},b.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},b.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},b.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},b.prototype.enableDrag=function(){var b=this,c=0,d=0,e=!1,f=!1;b.s.enableDrag&&b.doCss()&&(b.$slide.on("mousedown.lg",function(d){b.$outer.hasClass("lg-zoomed")||(a(d.target).hasClass("lg-object")||a(d.target).hasClass("lg-video-play"))&&(d.preventDefault(),b.lgBusy||(b.manageSwipeClass(),c=d.pageX,e=!0,b.$outer.scrollLeft+=1,b.$outer.scrollLeft-=1,b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),b.$el.trigger("onDragstart.lg")))}),a(window).on("mousemove.lg",function(a){e&&(f=!0,d=a.pageX,b.touchMove(c,d),b.$el.trigger("onDragmove.lg"))}),a(window).on("mouseup.lg",function(g){f?(f=!1,b.touchEnd(d-c),b.$el.trigger("onDragend.lg")):(a(g.target).hasClass("lg-object")||a(g.target).hasClass("lg-video-play"))&&b.$el.trigger("onSlideClick.lg"),e&&(e=!1,b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},b.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?b=this.$slide.length-1:this.index===this.$slide.length-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},b.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},b.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},b.prototype.destroy=function(b){var c=this;b||(c.$el.trigger("onBeforeClose.lg"),a(window).scrollTop(c.prevScrollTop)),b&&(c.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(c.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){c.modules[a]&&c.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(c.hideBartimeout),this.hideBartimeout=!1,a(window).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),c.$outer&&c.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){c.$outer&&c.$outer.remove(),a(".lg-backdrop").remove(),b||c.$el.trigger("onCloseAfter.lg")},c.s.backdropDuration+50)},a.fn.lightGallery=function(c){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly")}else a.data(this,"lightGallery",new b(this,c))})},a.fn.lightGallery.modules={}}()});



/**
 * Owl Carousel v2.3.0
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {
    
        /**
         * Creates a carousel.
         * @class The Owl Carousel.
         * @public
         * @param {HTMLElement|jQuery} element - The element to create the carousel for.
         * @param {Object} [options] - The options
         */
        function Owl(element, options) {
    
            /**
             * Current settings for the carousel.
             * @public
             */
            this.settings = null;
    
            /**
             * Current options set by the caller including defaults.
             * @public
             */
            this.options = $.extend({}, Owl.Defaults, options);
    
            /**
             * Plugin element.
             * @public
             */
            this.$element = $(element);
    
            /**
             * Proxied event handlers.
             * @protected
             */
            this._handlers = {};
    
            /**
             * References to the running plugins of this carousel.
             * @protected
             */
            this._plugins = {};
    
            /**
             * Currently suppressed events to prevent them from being retriggered.
             * @protected
             */
            this._supress = {};
    
            /**
             * Absolute current position.
             * @protected
             */
            this._current = null;
    
            /**
             * Animation speed in milliseconds.
             * @protected
             */
            this._speed = null;
    
            /**
             * Coordinates of all items in pixel.
             * @todo The name of this member is missleading.
             * @protected
             */
            this._coordinates = [];
    
            /**
             * Current breakpoint.
             * @todo Real media queries would be nice.
             * @protected
             */
            this._breakpoint = null;
    
            /**
             * Current width of the plugin element.
             */
            this._width = null;
    
            /**
             * All real items.
             * @protected
             */
            this._items = [];
    
            /**
             * All cloned items.
             * @protected
             */
            this._clones = [];
    
            /**
             * Merge values of all items.
             * @todo Maybe this could be part of a plugin.
             * @protected
             */
            this._mergers = [];
    
            /**
             * Widths of all items.
             */
            this._widths = [];
    
            /**
             * Invalidated parts within the update process.
             * @protected
             */
            this._invalidated = {};
    
            /**
             * Ordered list of workers for the update process.
             * @protected
             */
            this._pipe = [];
    
            /**
             * Current state information for the drag operation.
             * @todo #261
             * @protected
             */
            this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            };
    
            /**
             * Current state information and their tags.
             * @type {Object}
             * @protected
             */
            this._states = {
                current: {},
                tags: {
                    'initializing': [ 'busy' ],
                    'animating': [ 'busy' ],
                    'dragging': [ 'interacting' ]
                }
            };
    
            $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
                this._handlers[handler] = $.proxy(this[handler], this);
            }, this));
    
            $.each(Owl.Plugins, $.proxy(function(key, plugin) {
                this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                    = new plugin(this);
            }, this));
    
            $.each(Owl.Workers, $.proxy(function(priority, worker) {
                this._pipe.push({
                    'filter': worker.filter,
                    'run': $.proxy(worker.run, this)
                });
            }, this));
    
            this.setup();
            this.initialize();
        }
    
        /**
         * Default options for the carousel.
         * @public
         */
        Owl.Defaults = {
            items: 3,
            loop: false,
            center: false,
            rewind: false,
    
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            freeDrag: false,
    
            margin: 0,
            stagePadding: 0,
    
            merge: false,
            mergeFit: true,
            autoWidth: false,
    
            startPosition: 0,
            rtl: false,
    
            smartSpeed: 250,
            fluidSpeed: false,
            dragEndSpeed: false,
    
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: window,
    
            fallbackEasing: 'swing',
    
            info: false,
    
            nestedItemSelector: false,
            itemElement: 'div',
            stageElement: 'div',
    
            refreshClass: 'owl-refresh',
            loadedClass: 'owl-loaded',
            loadingClass: 'owl-loading',
            rtlClass: 'owl-rtl',
            responsiveClass: 'owl-responsive',
            dragClass: 'owl-drag',
            itemClass: 'owl-item',
            stageClass: 'owl-stage',
            stageOuterClass: 'owl-stage-outer',
            grabClass: 'owl-grab'
        };
    
        /**
         * Enumeration for width.
         * @public
         * @readonly
         * @enum {String}
         */
        Owl.Width = {
            Default: 'default',
            Inner: 'inner',
            Outer: 'outer'
        };
    
        /**
         * Enumeration for types.
         * @public
         * @readonly
         * @enum {String}
         */
        Owl.Type = {
            Event: 'event',
            State: 'state'
        };
    
        /**
         * Contains all registered plugins.
         * @public
         */
        Owl.Plugins = {};
    
        /**
         * List of workers involved in the update process.
         */
        Owl.Workers = [ {
            filter: [ 'width', 'settings' ],
            run: function() {
                this._width = this.$element.width();
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                cache.current = this._items && this._items[this.relative(this._current)];
            }
        }, {
            filter: [ 'items', 'settings' ],
            run: function() {
                this.$stage.children('.cloned').remove();
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                var margin = this.settings.margin || '',
                    grid = !this.settings.autoWidth,
                    rtl = this.settings.rtl,
                    css = {
                        'width': 'auto',
                        'margin-left': rtl ? margin : '',
                        'margin-right': rtl ? '' : margin
                    };
    
                !grid && this.$stage.children().css(css);
    
                cache.css = css;
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    merge = null,
                    iterator = this._items.length,
                    grid = !this.settings.autoWidth,
                    widths = [];
    
                cache.items = {
                    merge: false,
                    width: width
                };
    
                while (iterator--) {
                    merge = this._mergers[iterator];
                    merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
    
                    cache.items.merge = merge > 1 || cache.items.merge;
    
                    widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
                }
    
                this._widths = widths;
            }
        }, {
            filter: [ 'items', 'settings' ],
            run: function() {
                var clones = [],
                    items = this._items,
                    settings = this.settings,
                    // TODO: Should be computed from number of min width items in stage
                    view = Math.max(settings.items * 2, 4),
                    size = Math.ceil(items.length / 2) * 2,
                    repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                    append = '',
                    prepend = '';
    
                repeat /= 2;
    
                while (repeat > 0) {
                    // Switch to only using appended clones
                    clones.push(this.normalize(clones.length / 2, true));
                    append = append + items[clones[clones.length - 1]][0].outerHTML;
                    clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                    prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
                    repeat -= 1;
                }
    
                this._clones = clones;
    
                $(append).addClass('cloned').appendTo(this.$stage);
                $(prepend).addClass('cloned').prependTo(this.$stage);
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function() {
                var rtl = this.settings.rtl ? 1 : -1,
                    size = this._clones.length + this._items.length,
                    iterator = -1,
                    previous = 0,
                    current = 0,
                    coordinates = [];
    
                while (++iterator < size) {
                    previous = coordinates[iterator - 1] || 0;
                    current = this._widths[this.relative(iterator)] + this.settings.margin;
                    coordinates.push(previous + current * rtl);
                }
    
                this._coordinates = coordinates;
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function() {
                var padding = this.settings.stagePadding,
                    coordinates = this._coordinates,
                    css = {
                        'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                        'padding-left': padding || '',
                        'padding-right': padding || ''
                    };
    
                this.$stage.css(css);
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                var iterator = this._coordinates.length,
                    grid = !this.settings.autoWidth,
                    items = this.$stage.children();
    
                if (grid && cache.items.merge) {
                    while (iterator--) {
                        cache.css.width = this._widths[this.relative(iterator)];
                        items.eq(iterator).css(cache.css);
                    }
                } else if (grid) {
                    cache.css.width = cache.items.width;
                    items.css(cache.css);
                }
            }
        }, {
            filter: [ 'items' ],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr('style');
            }
        }, {
            filter: [ 'width', 'items', 'settings' ],
            run: function(cache) {
                cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
                cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
                this.reset(cache.current);
            }
        }, {
            filter: [ 'position' ],
            run: function() {
                this.animate(this.coordinates(this._current));
            }
        }, {
            filter: [ 'width', 'position', 'items', 'settings' ],
            run: function() {
                var rtl = this.settings.rtl ? 1 : -1,
                    padding = this.settings.stagePadding * 2,
                    begin = this.coordinates(this.current()) + padding,
                    end = begin + this.width() * rtl,
                    inner, outer, matches = [], i, n;
    
                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    inner = this._coordinates[i - 1] || 0;
                    outer = Math.abs(this._coordinates[i]) + padding * rtl;
    
                    if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                        || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                        matches.push(i);
                    }
                }
    
                this.$stage.children('.active').removeClass('active');
                this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
    
                this.$stage.children('.center').removeClass('center');
                if (this.settings.center) {
                    this.$stage.children().eq(this.current()).addClass('center');
                }
            }
        } ];
    
        /**
         * Initializes the carousel.
         * @protected
         */
        Owl.prototype.initialize = function() {
            this.enter('initializing');
            this.trigger('initialize');
    
            this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
    
            if (this.settings.autoWidth && !this.is('pre-loading')) {
                var imgs, nestedSelector, width;
                imgs = this.$element.find('img');
                nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
                width = this.$element.children(nestedSelector).width();
    
                if (imgs.length && width <= 0) {
                    this.preloadAutoWidthImages(imgs);
                }
            }
    
            this.$element.addClass(this.options.loadingClass);
    
            // create stage
            this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
                .wrap('<div class="' + this.settings.stageOuterClass + '"/>');
    
            // append stage
            this.$element.append(this.$stage.parent());
    
            // append content
            this.replace(this.$element.children().not(this.$stage.parent()));
    
            // check visibility
            if (this.$element.is(':visible')) {
                // update view
                this.refresh();
            } else {
                // invalidate width
                this.invalidate('width');
            }
    
            this.$element
                .removeClass(this.options.loadingClass)
                .addClass(this.options.loadedClass);
    
            // register event handlers
            this.registerEventHandlers();
    
            this.leave('initializing');
            this.trigger('initialized');
        };
    
        /**
         * Setups the current settings.
         * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
         * @todo Support for media queries by using `matchMedia` would be nice.
         * @public
         */
        Owl.prototype.setup = function() {
            var viewport = this.viewport(),
                overwrites = this.options.responsive,
                match = -1,
                settings = null;
    
            if (!overwrites) {
                settings = $.extend({}, this.options);
            } else {
                $.each(overwrites, function(breakpoint) {
                    if (breakpoint <= viewport && breakpoint > match) {
                        match = Number(breakpoint);
                    }
                });
    
                settings = $.extend({}, this.options, overwrites[match]);
                if (typeof settings.stagePadding === 'function') {
                    settings.stagePadding = settings.stagePadding();
                }
                delete settings.responsive;
    
                // responsive class
                if (settings.responsiveClass) {
                    this.$element.attr('class',
                        this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                    );
                }
            }
    
            this.trigger('change', { property: { name: 'settings', value: settings } });
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate('settings');
            this.trigger('changed', { property: { name: 'settings', value: this.settings } });
        };
    
        /**
         * Updates option logic if necessery.
         * @protected
         */
        Owl.prototype.optionsLogic = function() {
            if (this.settings.autoWidth) {
                this.settings.stagePadding = false;
                this.settings.merge = false;
            }
        };
    
        /**
         * Prepares an item before add.
         * @todo Rename event parameter `content` to `item`.
         * @protected
         * @returns {jQuery|HTMLElement} - The item container.
         */
        Owl.prototype.prepare = function(item) {
            var event = this.trigger('prepare', { content: item });
    
            if (!event.data) {
                event.data = $('<' + this.settings.itemElement + '/>')
                    .addClass(this.options.itemClass).append(item)
            }
    
            this.trigger('prepared', { content: event.data });
    
            return event.data;
        };
    
        /**
         * Updates the view.
         * @public
         */
        Owl.prototype.update = function() {
            var i = 0,
                n = this._pipe.length,
                filter = $.proxy(function(p) { return this[p] }, this._invalidated),
                cache = {};
    
            while (i < n) {
                if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                    this._pipe[i].run(cache);
                }
                i++;
            }
    
            this._invalidated = {};
    
            !this.is('valid') && this.enter('valid');
        };
    
        /**
         * Gets the width of the view.
         * @public
         * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
         * @returns {Number} - The width of the view in pixel.
         */
        Owl.prototype.width = function(dimension) {
            dimension = dimension || Owl.Width.Default;
            switch (dimension) {
                case Owl.Width.Inner:
                case Owl.Width.Outer:
                    return this._width;
                default:
                    return this._width - this.settings.stagePadding * 2 + this.settings.margin;
            }
        };
    
        /**
         * Refreshes the carousel primarily for adaptive purposes.
         * @public
         */
        Owl.prototype.refresh = function() {
            this.enter('refreshing');
            this.trigger('refresh');
    
            this.setup();
    
            this.optionsLogic();
    
            this.$element.addClass(this.options.refreshClass);
    
            this.update();
    
            this.$element.removeClass(this.options.refreshClass);
    
            this.leave('refreshing');
            this.trigger('refreshed');
        };
    
        /**
         * Checks window `resize` event.
         * @protected
         */
        Owl.prototype.onThrottledResize = function() {
            window.clearTimeout(this.resizeTimer);
            this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
        };
    
        /**
         * Checks window `resize` event.
         * @protected
         */
        Owl.prototype.onResize = function() {
            if (!this._items.length) {
                return false;
            }
    
            if (this._width === this.$element.width()) {
                return false;
            }
    
            if (!this.$element.is(':visible')) {
                return false;
            }
    
            this.enter('resizing');
    
            if (this.trigger('resize').isDefaultPrevented()) {
                this.leave('resizing');
                return false;
            }
    
            this.invalidate('width');
    
            this.refresh();
    
            this.leave('resizing');
            this.trigger('resized');
        };
    
        /**
         * Registers event handlers.
         * @todo Check `msPointerEnabled`
         * @todo #261
         * @protected
         */
        Owl.prototype.registerEventHandlers = function() {
            if ($.support.transition) {
                this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
            }
    
            if (this.settings.responsive !== false) {
                this.on(window, 'resize', this._handlers.onThrottledResize);
            }
    
            if (this.settings.mouseDrag) {
                this.$element.addClass(this.options.dragClass);
                this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
                this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
            }
    
            if (this.settings.touchDrag){
                this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
                this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
            }
        };
    
        /**
         * Handles `touchstart` and `mousedown` events.
         * @todo Horizontal swipe threshold as option
         * @todo #261
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragStart = function(event) {
            var stage = null;
    
            if (event.which === 3) {
                return;
            }
    
            if ($.support.transform) {
                stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
                stage = {
                    x: stage[stage.length === 16 ? 12 : 4],
                    y: stage[stage.length === 16 ? 13 : 5]
                };
            } else {
                stage = this.$stage.position();
                stage = {
                    x: this.settings.rtl ?
                        stage.left + this.$stage.width() - this.width() + this.settings.margin :
                        stage.left,
                    y: stage.top
                };
            }
    
            if (this.is('animating')) {
                $.support.transform ? this.animate(stage.x) : this.$stage.stop()
                this.invalidate('position');
            }
    
            this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
    
            this.speed(0);
    
            this._drag.time = new Date().getTime();
            this._drag.target = $(event.target);
            this._drag.stage.start = stage;
            this._drag.stage.current = stage;
            this._drag.pointer = this.pointer(event);
    
            $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
    
            $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
                var delta = this.difference(this._drag.pointer, this.pointer(event));
    
                $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
    
                if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                    return;
                }
    
                event.preventDefault();
    
                this.enter('dragging');
                this.trigger('drag');
            }, this));
        };
    
        /**
         * Handles the `touchmove` and `mousemove` events.
         * @todo #261
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragMove = function(event) {
            var minimum = null,
                maximum = null,
                pull = null,
                delta = this.difference(this._drag.pointer, this.pointer(event)),
                stage = this.difference(this._drag.stage.start, delta);
    
            if (!this.is('dragging')) {
                return;
            }
    
            event.preventDefault();
    
            if (this.settings.loop) {
                minimum = this.coordinates(this.minimum());
                maximum = this.coordinates(this.maximum() + 1) - minimum;
                stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
            } else {
                minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
                maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
                pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
                stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
            }
    
            this._drag.stage.current = stage;
    
            this.animate(stage.x);
        };
    
        /**
         * Handles the `touchend` and `mouseup` events.
         * @todo #261
         * @todo Threshold for click event
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragEnd = function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event)),
                stage = this._drag.stage.current,
                direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
    
            $(document).off('.owl.core');
    
            this.$element.removeClass(this.options.grabClass);
    
            if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
                this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
                this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
                this.invalidate('position');
                this.update();
    
                this._drag.direction = direction;
    
                if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                    this._drag.target.one('click.owl.core', function() { return false; });
                }
            }
    
            if (!this.is('dragging')) {
                return;
            }
    
            this.leave('dragging');
            this.trigger('dragged');
        };
    
        /**
         * Gets absolute position of the closest item for a coordinate.
         * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
         * @protected
         * @param {Number} coordinate - The coordinate in pixel.
         * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
         * @return {Number} - The absolute position of the closest item.
         */
        Owl.prototype.closest = function(coordinate, direction) {
            var position = -1,
                pull = 30,
                width = this.width(),
                coordinates = this.coordinates();
    
            if (!this.settings.freeDrag) {
                // check closest item
                $.each(coordinates, $.proxy(function(index, value) {
                    // on a left pull, check on current index
                    if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                        position = index;
                    // on a right pull, check on previous index
                    // to do so, subtract width from value and set position = index + 1
                    } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                        position = index + 1;
                    } else if (this.op(coordinate, '<', value)
                        && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                        position = direction === 'left' ? index + 1 : index;
                    }
                    return position === -1;
                }, this));
            }
    
            if (!this.settings.loop) {
                // non loop boundries
                if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                    position = coordinate = this.minimum();
                } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                    position = coordinate = this.maximum();
                }
            }
    
            return position;
        };
    
        /**
         * Animates the stage.
         * @todo #270
         * @public
         * @param {Number} coordinate - The coordinate in pixels.
         */
        Owl.prototype.animate = function(coordinate) {
            var animate = this.speed() > 0;
    
            this.is('animating') && this.onTransitionEnd();
    
            if (animate) {
                this.enter('animating');
                this.trigger('translate');
            }
    
            if ($.support.transform3d && $.support.transition) {
                this.$stage.css({
                    transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                    transition: (this.speed() / 1000) + 's'
                });
            } else if (animate) {
                this.$stage.animate({
                    left: coordinate + 'px'
                }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
            } else {
                this.$stage.css({
                    left: coordinate + 'px'
                });
            }
        };
    
        /**
         * Checks whether the carousel is in a specific state or not.
         * @param {String} state - The state to check.
         * @returns {Boolean} - The flag which indicates if the carousel is busy.
         */
        Owl.prototype.is = function(state) {
            return this._states.current[state] && this._states.current[state] > 0;
        };
    
        /**
         * Sets the absolute position of the current item.
         * @public
         * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
         * @returns {Number} - The absolute position of the current item.
         */
        Owl.prototype.current = function(position) {
            if (position === undefined) {
                return this._current;
            }
    
            if (this._items.length === 0) {
                return undefined;
            }
    
            position = this.normalize(position);
    
            if (this._current !== position) {
                var event = this.trigger('change', { property: { name: 'position', value: position } });
    
                if (event.data !== undefined) {
                    position = this.normalize(event.data);
                }
    
                this._current = position;
    
                this.invalidate('position');
    
                this.trigger('changed', { property: { name: 'position', value: this._current } });
            }
    
            return this._current;
        };
    
        /**
         * Invalidates the given part of the update routine.
         * @param {String} [part] - The part to invalidate.
         * @returns {Array.<String>} - The invalidated parts.
         */
        Owl.prototype.invalidate = function(part) {
            if ($.type(part) === 'string') {
                this._invalidated[part] = true;
                this.is('valid') && this.leave('valid');
            }
            return $.map(this._invalidated, function(v, i) { return i });
        };
    
        /**
         * Resets the absolute position of the current item.
         * @public
         * @param {Number} position - The absolute position of the new item.
         */
        Owl.prototype.reset = function(position) {
            position = this.normalize(position);
    
            if (position === undefined) {
                return;
            }
    
            this._speed = 0;
            this._current = position;
    
            this.suppress([ 'translate', 'translated' ]);
    
            this.animate(this.coordinates(position));
    
            this.release([ 'translate', 'translated' ]);
        };
    
        /**
         * Normalizes an absolute or a relative position of an item.
         * @public
         * @param {Number} position - The absolute or relative position to normalize.
         * @param {Boolean} [relative=false] - Whether the given position is relative or not.
         * @returns {Number} - The normalized position.
         */
        Owl.prototype.normalize = function(position, relative) {
            var n = this._items.length,
                m = relative ? 0 : this._clones.length;
    
            if (!this.isNumeric(position) || n < 1) {
                position = undefined;
            } else if (position < 0 || position >= n + m) {
                position = ((position - m / 2) % n + n) % n + m / 2;
            }
    
            return position;
        };
    
        /**
         * Converts an absolute position of an item into a relative one.
         * @public
         * @param {Number} position - The absolute position to convert.
         * @returns {Number} - The converted position.
         */
        Owl.prototype.relative = function(position) {
            position -= this._clones.length / 2;
            return this.normalize(position, true);
        };
    
        /**
         * Gets the maximum position for the current item.
         * @public
         * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
         * @returns {Number}
         */
        Owl.prototype.maximum = function(relative) {
            var settings = this.settings,
                maximum = this._coordinates.length,
                iterator,
                reciprocalItemsWidth,
                elementWidth;
    
            if (settings.loop) {
                maximum = this._clones.length / 2 + this._items.length - 1;
            } else if (settings.autoWidth || settings.merge) {
                iterator = this._items.length;
                if (iterator) {
                    reciprocalItemsWidth = this._items[--iterator].width();
                    elementWidth = this.$element.width();
                    while (iterator--) {
                        reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                        if (reciprocalItemsWidth > elementWidth) {
                            break;
                        }
                    }
                }
                maximum = iterator + 1;
            } else if (settings.center) {
                maximum = this._items.length - 1;
            } else {
                maximum = this._items.length - settings.items;
            }
    
            if (relative) {
                maximum -= this._clones.length / 2;
            }
    
            return Math.max(maximum, 0);
        };
    
        /**
         * Gets the minimum position for the current item.
         * @public
         * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
         * @returns {Number}
         */
        Owl.prototype.minimum = function(relative) {
            return relative ? 0 : this._clones.length / 2;
        };
    
        /**
         * Gets an item at the specified relative position.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
         */
        Owl.prototype.items = function(position) {
            if (position === undefined) {
                return this._items.slice();
            }
    
            position = this.normalize(position, true);
            return this._items[position];
        };
    
        /**
         * Gets an item at the specified relative position.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
         */
        Owl.prototype.mergers = function(position) {
            if (position === undefined) {
                return this._mergers.slice();
            }
    
            position = this.normalize(position, true);
            return this._mergers[position];
        };
    
        /**
         * Gets the absolute positions of clones for an item.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
         */
        Owl.prototype.clones = function(position) {
            var odd = this._clones.length / 2,
                even = odd + this._items.length,
                map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
    
            if (position === undefined) {
                return $.map(this._clones, function(v, i) { return map(i) });
            }
    
            return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
        };
    
        /**
         * Sets the current animation speed.
         * @public
         * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
         * @returns {Number} - The current animation speed in milliseconds.
         */
        Owl.prototype.speed = function(speed) {
            if (speed !== undefined) {
                this._speed = speed;
            }
    
            return this._speed;
        };
    
        /**
         * Gets the coordinate of an item.
         * @todo The name of this method is missleanding.
         * @public
         * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
         * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
         */
        Owl.prototype.coordinates = function(position) {
            var multiplier = 1,
                newPosition = position - 1,
                coordinate;
    
            if (position === undefined) {
                return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                    return this.coordinates(index);
                }, this));
            }
    
            if (this.settings.center) {
                if (this.settings.rtl) {
                    multiplier = -1;
                    newPosition = position + 1;
                }
    
                coordinate = this._coordinates[position];
                coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
            } else {
                coordinate = this._coordinates[newPosition] || 0;
            }
    
            coordinate = Math.ceil(coordinate);
    
            return coordinate;
        };
    
        /**
         * Calculates the speed for a translation.
         * @protected
         * @param {Number} from - The absolute position of the start item.
         * @param {Number} to - The absolute position of the target item.
         * @param {Number} [factor=undefined] - The time factor in milliseconds.
         * @returns {Number} - The time in milliseconds for the translation.
         */
        Owl.prototype.duration = function(from, to, factor) {
            if (factor === 0) {
                return 0;
            }
    
            return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
        };
    
        /**
         * Slides to the specified item.
         * @public
         * @param {Number} position - The position of the item.
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.to = function(position, speed) {
            var current = this.current(),
                revert = null,
                distance = position - this.relative(current),
                direction = (distance > 0) - (distance < 0),
                items = this._items.length,
                minimum = this.minimum(),
                maximum = this.maximum();
    
            if (this.settings.loop) {
                if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                    distance += direction * -1 * items;
                }
    
                position = current + distance;
                revert = ((position - minimum) % items + items) % items + minimum;
    
                if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                    current = revert - distance;
                    position = revert;
                    this.reset(current);
                }
            } else if (this.settings.rewind) {
                maximum += 1;
                position = (position % maximum + maximum) % maximum;
            } else {
                position = Math.max(minimum, Math.min(maximum, position));
            }
    
            this.speed(this.duration(current, position, speed));
            this.current(position);
    
            if (this.$element.is(':visible')) {
                this.update();
            }
        };
    
        /**
         * Slides to the next item.
         * @public
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.next = function(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) + 1, speed);
        };
    
        /**
         * Slides to the previous item.
         * @public
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.prev = function(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) - 1, speed);
        };
    
        /**
         * Handles the end of an animation.
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onTransitionEnd = function(event) {
    
            // if css2 animation then event object is undefined
            if (event !== undefined) {
                event.stopPropagation();
    
                // Catch only owl-stage transitionEnd event
                if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                    return false;
                }
            }
    
            this.leave('animating');
            this.trigger('translated');
        };
    
        /**
         * Gets viewport width.
         * @protected
         * @return {Number} - The width in pixel.
         */
        Owl.prototype.viewport = function() {
            var width;
            if (this.options.responsiveBaseElement !== window) {
                width = $(this.options.responsiveBaseElement).width();
            } else if (window.innerWidth) {
                width = window.innerWidth;
            } else if (document.documentElement && document.documentElement.clientWidth) {
                width = document.documentElement.clientWidth;
            } else {
                console.warn('Can not detect viewport width.');
            }
            return width;
        };
    
        /**
         * Replaces the current content.
         * @public
         * @param {HTMLElement|jQuery|String} content - The new content.
         */
        Owl.prototype.replace = function(content) {
            this.$stage.empty();
            this._items = [];
    
            if (content) {
                content = (content instanceof jQuery) ? content : $(content);
            }
    
            if (this.settings.nestedItemSelector) {
                content = content.find('.' + this.settings.nestedItemSelector);
            }
    
            content.filter(function() {
                return this.nodeType === 1;
            }).each($.proxy(function(index, item) {
                item = this.prepare(item);
                this.$stage.append(item);
                this._items.push(item);
                this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
            }, this));
    
            this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
    
            this.invalidate('items');
        };
    
        /**
         * Adds an item.
         * @todo Use `item` instead of `content` for the event arguments.
         * @public
         * @param {HTMLElement|jQuery|String} content - The item content to add.
         * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
         */
        Owl.prototype.add = function(content, position) {
            var current = this.relative(this._current);
    
            position = position === undefined ? this._items.length : this.normalize(position, true);
            content = content instanceof jQuery ? content : $(content);
    
            this.trigger('add', { content: content, position: position });
    
            content = this.prepare(content);
    
            if (this._items.length === 0 || position === this._items.length) {
                this._items.length === 0 && this.$stage.append(content);
                this._items.length !== 0 && this._items[position - 1].after(content);
                this._items.push(content);
                this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
            } else {
                this._items[position].before(content);
                this._items.splice(position, 0, content);
                this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
            }
    
            this._items[current] && this.reset(this._items[current].index());
    
            this.invalidate('items');
    
            this.trigger('added', { content: content, position: position });
        };
    
        /**
         * Removes an item by its position.
         * @todo Use `item` instead of `content` for the event arguments.
         * @public
         * @param {Number} position - The relative position of the item to remove.
         */
        Owl.prototype.remove = function(position) {
            position = this.normalize(position, true);
    
            if (position === undefined) {
                return;
            }
    
            this.trigger('remove', { content: this._items[position], position: position });
    
            this._items[position].remove();
            this._items.splice(position, 1);
            this._mergers.splice(position, 1);
    
            this.invalidate('items');
    
            this.trigger('removed', { content: null, position: position });
        };
    
        /**
         * Preloads images with auto width.
         * @todo Replace by a more generic approach
         * @protected
         */
        Owl.prototype.preloadAutoWidthImages = function(images) {
            images.each($.proxy(function(i, element) {
                this.enter('pre-loading');
                element = $(element);
                $(new Image()).one('load', $.proxy(function(e) {
                    element.attr('src', e.target.src);
                    element.css('opacity', 1);
                    this.leave('pre-loading');
                    !this.is('pre-loading') && !this.is('initializing') && this.refresh();
                }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
            }, this));
        };
    
        /**
         * Destroys the carousel.
         * @public
         */
        Owl.prototype.destroy = function() {
    
            this.$element.off('.owl.core');
            this.$stage.off('.owl.core');
            $(document).off('.owl.core');
    
            if (this.settings.responsive !== false) {
                window.clearTimeout(this.resizeTimer);
                this.off(window, 'resize', this._handlers.onThrottledResize);
            }
    
            for (var i in this._plugins) {
                this._plugins[i].destroy();
            }
    
            this.$stage.children('.cloned').remove();
    
            this.$stage.unwrap();
            this.$stage.children().contents().unwrap();
            this.$stage.children().unwrap();
            this.$stage.remove();
            this.$element
                .removeClass(this.options.refreshClass)
                .removeClass(this.options.loadingClass)
                .removeClass(this.options.loadedClass)
                .removeClass(this.options.rtlClass)
                .removeClass(this.options.dragClass)
                .removeClass(this.options.grabClass)
                .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
                .removeData('owl.carousel');
        };
    
        /**
         * Operators to calculate right-to-left and left-to-right.
         * @protected
         * @param {Number} [a] - The left side operand.
         * @param {String} [o] - The operator.
         * @param {Number} [b] - The right side operand.
         */
        Owl.prototype.op = function(a, o, b) {
            var rtl = this.settings.rtl;
            switch (o) {
                case '<':
                    return rtl ? a > b : a < b;
                case '>':
                    return rtl ? a < b : a > b;
                case '>=':
                    return rtl ? a <= b : a >= b;
                case '<=':
                    return rtl ? a >= b : a <= b;
                default:
                    break;
            }
        };
    
        /**
         * Attaches to an internal event.
         * @protected
         * @param {HTMLElement} element - The event source.
         * @param {String} event - The event name.
         * @param {Function} listener - The event handler to attach.
         * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
         */
        Owl.prototype.on = function(element, event, listener, capture) {
            if (element.addEventListener) {
                element.addEventListener(event, listener, capture);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, listener);
            }
        };
    
        /**
         * Detaches from an internal event.
         * @protected
         * @param {HTMLElement} element - The event source.
         * @param {String} event - The event name.
         * @param {Function} listener - The attached event handler to detach.
         * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
         */
        Owl.prototype.off = function(element, event, listener, capture) {
            if (element.removeEventListener) {
                element.removeEventListener(event, listener, capture);
            } else if (element.detachEvent) {
                element.detachEvent('on' + event, listener);
            }
        };
    
        /**
         * Triggers a public event.
         * @todo Remove `status`, `relatedTarget` should be used instead.
         * @protected
         * @param {String} name - The event name.
         * @param {*} [data=null] - The event data.
         * @param {String} [namespace=carousel] - The event namespace.
         * @param {String} [state] - The state which is associated with the event.
         * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
         * @returns {Event} - The event arguments.
         */
        Owl.prototype.trigger = function(name, data, namespace, state, enter) {
            var status = {
                item: { count: this._items.length, index: this.current() }
            }, handler = $.camelCase(
                $.grep([ 'on', name, namespace ], function(v) { return v })
                    .join('-').toLowerCase()
            ), event = $.Event(
                [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
                $.extend({ relatedTarget: this }, status, data)
            );
    
            if (!this._supress[name]) {
                $.each(this._plugins, function(name, plugin) {
                    if (plugin.onTrigger) {
                        plugin.onTrigger(event);
                    }
                });
    
                this.register({ type: Owl.Type.Event, name: name });
                this.$element.trigger(event);
    
                if (this.settings && typeof this.settings[handler] === 'function') {
                    this.settings[handler].call(this, event);
                }
            }
    
            return event;
        };
    
        /**
         * Enters a state.
         * @param name - The state name.
         */
        Owl.prototype.enter = function(name) {
            $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
                if (this._states.current[name] === undefined) {
                    this._states.current[name] = 0;
                }
    
                this._states.current[name]++;
            }, this));
        };
    
        /**
         * Leaves a state.
         * @param name - The state name.
         */
        Owl.prototype.leave = function(name) {
            $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
                this._states.current[name]--;
            }, this));
        };
    
        /**
         * Registers an event or state.
         * @public
         * @param {Object} object - The event or state to register.
         */
        Owl.prototype.register = function(object) {
            if (object.type === Owl.Type.Event) {
                if (!$.event.special[object.name]) {
                    $.event.special[object.name] = {};
                }
    
                if (!$.event.special[object.name].owl) {
                    var _default = $.event.special[object.name]._default;
                    $.event.special[object.name]._default = function(e) {
                        if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                            return _default.apply(this, arguments);
                        }
                        return e.namespace && e.namespace.indexOf('owl') > -1;
                    };
                    $.event.special[object.name].owl = true;
                }
            } else if (object.type === Owl.Type.State) {
                if (!this._states.tags[object.name]) {
                    this._states.tags[object.name] = object.tags;
                } else {
                    this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
                }
    
                this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                    return $.inArray(tag, this._states.tags[object.name]) === i;
                }, this));
            }
        };
    
        /**
         * Suppresses events.
         * @protected
         * @param {Array.<String>} events - The events to suppress.
         */
        Owl.prototype.suppress = function(events) {
            $.each(events, $.proxy(function(index, event) {
                this._supress[event] = true;
            }, this));
        };
    
        /**
         * Releases suppressed events.
         * @protected
         * @param {Array.<String>} events - The events to release.
         */
        Owl.prototype.release = function(events) {
            $.each(events, $.proxy(function(index, event) {
                delete this._supress[event];
            }, this));
        };
    
        /**
         * Gets unified pointer coordinates from event.
         * @todo #261
         * @protected
         * @param {Event} - The `mousedown` or `touchstart` event.
         * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
         */
        Owl.prototype.pointer = function(event) {
            var result = { x: null, y: null };
    
            event = event.originalEvent || event || window.event;
    
            event = event.touches && event.touches.length ?
                event.touches[0] : event.changedTouches && event.changedTouches.length ?
                    event.changedTouches[0] : event;
    
            if (event.pageX) {
                result.x = event.pageX;
                result.y = event.pageY;
            } else {
                result.x = event.clientX;
                result.y = event.clientY;
            }
    
            return result;
        };
    
        /**
         * Determines if the input is a Number or something that can be coerced to a Number
         * @protected
         * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
         * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
         */
        Owl.prototype.isNumeric = function(number) {
            return !isNaN(parseFloat(number));
        };
    
        /**
         * Gets the difference of two vectors.
         * @todo #261
         * @protected
         * @param {Object} - The first vector.
         * @param {Object} - The second vector.
         * @returns {Object} - The difference.
         */
        Owl.prototype.difference = function(first, second) {
            return {
                x: first.x - second.x,
                y: first.y - second.y
            };
        };
    
        /**
         * The jQuery Plugin for the Owl Carousel
         * @todo Navigation plugin `next` and `prev`
         * @public
         */
        $.fn.owlCarousel = function(option) {
            var args = Array.prototype.slice.call(arguments, 1);
    
            return this.each(function() {
                var $this = $(this),
                    data = $this.data('owl.carousel');
    
                if (!data) {
                    data = new Owl(this, typeof option == 'object' && option);
                    $this.data('owl.carousel', data);
    
                    $.each([
                        'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                    ], function(i, event) {
                        data.register({ type: Owl.Type.Event, name: event });
                        data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                            if (e.namespace && e.relatedTarget !== this) {
                                this.suppress([ event ]);
                                data[event].apply(this, [].slice.call(arguments, 1));
                                this.release([ event ]);
                            }
                        }, data));
                    });
                }
    
                if (typeof option == 'string' && option.charAt(0) !== '_') {
                    data[option].apply(data, args);
                }
            });
        };
    
        /**
         * The constructor for the jQuery Plugin
         * @public
         */
        $.fn.owlCarousel.Constructor = Owl;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * AutoRefresh Plugin
     * @version 2.1.0
     * @author Artus Kolanowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the auto refresh plugin.
         * @class The Auto Refresh Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var AutoRefresh = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Refresh interval.
             * @protected
             * @type {number}
             */
            this._interval = null;
    
            /**
             * Whether the element is currently visible or not.
             * @protected
             * @type {Boolean}
             */
            this._visible = null;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoRefresh) {
                        this.watch();
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
    
            // register event handlers
            this._core.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        AutoRefresh.Defaults = {
            autoRefresh: true,
            autoRefreshInterval: 500
        };
    
        /**
         * Watches the element.
         */
        AutoRefresh.prototype.watch = function() {
            if (this._interval) {
                return;
            }
    
            this._visible = this._core.$element.is(':visible');
            this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
        };
    
        /**
         * Refreshes the element.
         */
        AutoRefresh.prototype.refresh = function() {
            if (this._core.$element.is(':visible') === this._visible) {
                return;
            }
    
            this._visible = !this._visible;
    
            this._core.$element.toggleClass('owl-hidden', !this._visible);
    
            this._visible && (this._core.invalidate('width') && this._core.refresh());
        };
    
        /**
         * Destroys the plugin.
         */
        AutoRefresh.prototype.destroy = function() {
            var handler, property;
    
            window.clearInterval(this._interval);
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Lazy Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the lazy plugin.
         * @class The Lazy Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Lazy = function(carousel) {
    
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Already loaded items.
             * @protected
             * @type {Array.<jQuery>}
             */
            this._loaded = [];
    
            /**
             * Event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                    if (!e.namespace) {
                        return;
                    }
    
                    if (!this._core.settings || !this._core.settings.lazyLoad) {
                        return;
                    }
    
                    if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                        var settings = this._core.settings,
                            n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                            i = ((settings.center && n * -1) || 0),
                            position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                            clones = this._core.clones().length,
                            load = $.proxy(function(i, v) { this.load(v) }, this);
    
                        while (i++ < n) {
                            this.load(clones / 2 + this._core.relative(position));
                            clones && $.each(this._core.clones(this._core.relative(position)), load);
                            position++;
                        }
                    }
                }, this)
            };
    
            // set the default options
            this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
    
            // register event handler
            this._core.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        Lazy.Defaults = {
            lazyLoad: false
        };
    
        /**
         * Loads all resources of an item at the specified position.
         * @param {Number} position - The absolute position of the item.
         * @protected
         */
        Lazy.prototype.load = function(position) {
            var $item = this._core.$stage.children().eq(position),
                $elements = $item && $item.find('.owl-lazy');
    
            if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
                return;
            }
    
            $elements.each($.proxy(function(index, element) {
                var $element = $(element), image,
                    url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');
    
                this._core.trigger('load', { element: $element, url: url }, 'lazy');
    
                if ($element.is('img')) {
                    $element.one('load.owl.lazy', $.proxy(function() {
                        $element.css('opacity', 1);
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this)).attr('src', url);
                } else {
                    image = new Image();
                    image.onload = $.proxy(function() {
                        $element.css({
                            'background-image': 'url("' + url + '")',
                            'opacity': '1'
                        });
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this);
                    image.src = url;
                }
            }, this));
    
            this._loaded.push($item.get(0));
        };
    
        /**
         * Destroys the plugin.
         * @public
         */
        Lazy.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this.handlers) {
                this._core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * AutoHeight Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the auto height plugin.
         * @class The Auto Height Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var AutoHeight = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoHeight) {
                        this.update();
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
                        this.update();
                    }
                }, this),
                'loaded.owl.lazy': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoHeight
                        && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                        this.update();
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
    
            // register event handlers
            this._core.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        AutoHeight.Defaults = {
            autoHeight: false,
            autoHeightClass: 'owl-height'
        };
    
        /**
         * Updates the view.
         */
        AutoHeight.prototype.update = function() {
            var start = this._core._current,
                end = start + this._core.settings.items,
                visible = this._core.$stage.children().toArray().slice(start, end),
                heights = [],
                maxheight = 0;
    
            $.each(visible, function(index, item) {
                heights.push($(item).height());
            });
    
            maxheight = Math.max.apply(null, heights);
    
            this._core.$stage.parent()
                .height(maxheight)
                .addClass(this._core.settings.autoHeightClass);
        };
    
        AutoHeight.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Video Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the video plugin.
         * @class The Video Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Video = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Cache all video URLs.
             * @protected
             * @type {Object}
             */
            this._videos = {};
    
            /**
             * Current playing item.
             * @protected
             * @type {jQuery}
             */
            this._playing = null;
    
            /**
             * All event handlers.
             * @todo The cloned content removale is too late
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace) {
                        this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
                    }
                }, this),
                'resize.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                        e.preventDefault();
                    }
                }, this),
                'refreshed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.is('resizing')) {
                        this._core.$stage.find('.cloned .owl-video-frame').remove();
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name === 'position' && this._playing) {
                        this.stop();
                    }
                }, this),
                'prepared.owl.carousel': $.proxy(function(e) {
                    if (!e.namespace) {
                        return;
                    }
    
                    var $element = $(e.content).find('.owl-video');
    
                    if ($element.length) {
                        $element.css('display', 'none');
                        this.fetch($element, $(e.content));
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Video.Defaults, this._core.options);
    
            // register event handlers
            this._core.$element.on(this._handlers);
    
            this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
                this.play(e);
            }, this));
        };
    
        /**
         * Default options.
         * @public
         */
        Video.Defaults = {
            video: false,
            videoHeight: false,
            videoWidth: false
        };
    
        /**
         * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
         * @protected
         * @param {jQuery} target - The target containing the video data.
         * @param {jQuery} item - The item containing the video.
         */
        Video.prototype.fetch = function(target, item) {
                var type = (function() {
                        if (target.attr('data-vimeo-id')) {
                            return 'vimeo';
                        } else if (target.attr('data-vzaar-id')) {
                            return 'vzaar'
                        } else {
                            return 'youtube';
                        }
                    })(),
                    id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
                    width = target.attr('data-width') || this._core.settings.videoWidth,
                    height = target.attr('data-height') || this._core.settings.videoHeight,
                    url = target.attr('href');
    
            if (url) {
    
                /*
                        Parses the id's out of the following urls (and probably more):
                        https://www.youtube.com/watch?v=:id
                        https://youtu.be/:id
                        https://vimeo.com/:id
                        https://vimeo.com/channels/:channel/:id
                        https://vimeo.com/groups/:group/videos/:id
                        https://app.vzaar.com/videos/:id
    
                        Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
                */
    
                id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
    
                if (id[3].indexOf('youtu') > -1) {
                    type = 'youtube';
                } else if (id[3].indexOf('vimeo') > -1) {
                    type = 'vimeo';
                } else if (id[3].indexOf('vzaar') > -1) {
                    type = 'vzaar';
                } else {
                    throw new Error('Video URL not supported.');
                }
                id = id[6];
            } else {
                throw new Error('Missing video URL.');
            }
    
            this._videos[url] = {
                type: type,
                id: id,
                width: width,
                height: height
            };
    
            item.attr('data-video', url);
    
            this.thumbnail(target, this._videos[url]);
        };
    
        /**
         * Creates video thumbnail.
         * @protected
         * @param {jQuery} target - The target containing the video data.
         * @param {Object} info - The video info object.
         * @see `fetch`
         */
        Video.prototype.thumbnail = function(target, video) {
            var tnLink,
                icon,
                path,
                dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
                customTn = target.find('img'),
                srcType = 'src',
                lazyClass = '',
                settings = this._core.settings,
                create = function(path) {
                    icon = '<div class="owl-video-play-icon"></div>';
    
                    if (settings.lazyLoad) {
                        tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                    } else {
                        tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                    }
                    target.after(tnLink);
                    target.after(icon);
                };
    
            // wrap video content into owl-video-wrapper div
            target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
    
            if (this._core.settings.lazyLoad) {
                srcType = 'data-src';
                lazyClass = 'owl-lazy';
            }
    
            // custom thumbnail
            if (customTn.length) {
                create(customTn.attr(srcType));
                customTn.remove();
                return false;
            }
    
            if (video.type === 'youtube') {
                path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
                create(path);
            } else if (video.type === 'vimeo') {
                $.ajax({
                    type: 'GET',
                    url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                    jsonp: 'callback',
                    dataType: 'jsonp',
                    success: function(data) {
                        path = data[0].thumbnail_large;
                        create(path);
                    }
                });
            } else if (video.type === 'vzaar') {
                $.ajax({
                    type: 'GET',
                    url: '//vzaar.com/api/videos/' + video.id + '.json',
                    jsonp: 'callback',
                    dataType: 'jsonp',
                    success: function(data) {
                        path = data.framegrab_url;
                        create(path);
                    }
                });
            }
        };
    
        /**
         * Stops the current video.
         * @public
         */
        Video.prototype.stop = function() {
            this._core.trigger('stop', null, 'video');
            this._playing.find('.owl-video-frame').remove();
            this._playing.removeClass('owl-video-playing');
            this._playing = null;
            this._core.leave('playing');
            this._core.trigger('stopped', null, 'video');
        };
    
        /**
         * Starts the current video.
         * @public
         * @param {Event} event - The event arguments.
         */
        Video.prototype.play = function(event) {
            var target = $(event.target),
                item = target.closest('.' + this._core.settings.itemClass),
                video = this._videos[item.attr('data-video')],
                width = video.width || '100%',
                height = video.height || this._core.$stage.height(),
                html;
    
            if (this._playing) {
                return;
            }
    
            this._core.enter('playing');
            this._core.trigger('play', null, 'video');
    
            item = this._core.items(this._core.relative(item.index()));
    
            this._core.reset(item.index());
    
            if (video.type === 'youtube') {
                html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
                    video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
            } else if (video.type === 'vimeo') {
                html = '<iframe src="//player.vimeo.com/video/' + video.id +
                    '?autoplay=1" width="' + width + '" height="' + height +
                    '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            } else if (video.type === 'vzaar') {
                html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
                    '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
                    'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
            }
    
            $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
    
            this._playing = item.addClass('owl-video-playing');
        };
    
        /**
         * Checks whether an video is currently in full screen mode or not.
         * @todo Bad style because looks like a readonly method but changes members.
         * @protected
         * @returns {Boolean}
         */
        Video.prototype.isInFullScreen = function() {
            var element = document.fullscreenElement || document.mozFullScreenElement ||
                    document.webkitFullscreenElement;
    
            return element && $(element).parent().hasClass('owl-video-frame');
        };
    
        /**
         * Destroys the plugin.
         */
        Video.prototype.destroy = function() {
            var handler, property;
    
            this._core.$element.off('click.owl.video');
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Video = Video;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Animate Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the animate plugin.
         * @class The Navigation Plugin
         * @param {Owl} scope - The Owl Carousel
         */
        var Animate = function(scope) {
            this.core = scope;
            this.core.options = $.extend({}, Animate.Defaults, this.core.options);
            this.swapping = true;
            this.previous = undefined;
            this.next = undefined;
    
            this.handlers = {
                'change.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name == 'position') {
                        this.previous = this.core.current();
                        this.next = e.property.value;
                    }
                }, this),
                'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                    if (e.namespace) {
                        this.swapping = e.type == 'translated';
                    }
                }, this),
                'translate.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                        this.swap();
                    }
                }, this)
            };
    
            this.core.$element.on(this.handlers);
        };
    
        /**
         * Default options.
         * @public
         */
        Animate.Defaults = {
            animateOut: false,
            animateIn: false
        };
    
        /**
         * Toggles the animation classes whenever an translations starts.
         * @protected
         * @returns {Boolean|undefined}
         */
        Animate.prototype.swap = function() {
    
            if (this.core.settings.items !== 1) {
                return;
            }
    
            if (!$.support.animation || !$.support.transition) {
                return;
            }
    
            this.core.speed(0);
    
            var left,
                clear = $.proxy(this.clear, this),
                previous = this.core.$stage.children().eq(this.previous),
                next = this.core.$stage.children().eq(this.next),
                incoming = this.core.settings.animateIn,
                outgoing = this.core.settings.animateOut;
    
            if (this.core.current() === this.previous) {
                return;
            }
    
            if (outgoing) {
                left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
                previous.one($.support.animation.end, clear)
                    .css( { 'left': left + 'px' } )
                    .addClass('animated owl-animated-out')
                    .addClass(outgoing);
            }
    
            if (incoming) {
                next.one($.support.animation.end, clear)
                    .addClass('animated owl-animated-in')
                    .addClass(incoming);
            }
        };
    
        Animate.prototype.clear = function(e) {
            $(e.target).css( { 'left': '' } )
                .removeClass('animated owl-animated-out owl-animated-in')
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut);
            this.core.onTransitionEnd();
        };
    
        /**
         * Destroys the plugin.
         * @public
         */
        Animate.prototype.destroy = function() {
            var handler, property;
    
            for (handler in this.handlers) {
                this.core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Autoplay Plugin
     * @version 2.1.0
     * @author Bartosz Wojciechowski
     * @author Artus Kolanowski
     * @author David Deutsch
     * @author Tom De Caluwé
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        /**
         * Creates the autoplay plugin.
         * @class The Autoplay Plugin
         * @param {Owl} scope - The Owl Carousel
         */
        var Autoplay = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * The autoplay timeout id.
             * @type {Number}
             */
            this._call = null;
    
            /**
             * Depending on the state of the plugin, this variable contains either
             * the start time of the timer or the current timer value if it's
             * paused. Since we start in a paused state we initialize the timer
             * value.
             * @type {Number}
             */
            this._time = 0;
    
            /**
             * Stores the timeout currently used.
             * @type {Number}
             */
            this._timeout = 0;
    
            /**
             * Indicates whenever the autoplay is paused.
             * @type {Boolean}
             */
            this._paused = true;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name === 'settings') {
                        if (this._core.settings.autoplay) {
                            this.play();
                        } else {
                            this.stop();
                        }
                    } else if (e.namespace && e.property.name === 'position' && this._paused) {
                        // Reset the timer. This code is triggered when the position
                        // of the carousel was changed through user interaction.
                        this._time = 0;
                    }
                }, this),
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.autoplay) {
                        this.play();
                    }
                }, this),
                'play.owl.autoplay': $.proxy(function(e, t, s) {
                    if (e.namespace) {
                        this.play(t, s);
                    }
                }, this),
                'stop.owl.autoplay': $.proxy(function(e) {
                    if (e.namespace) {
                        this.stop();
                    }
                }, this),
                'mouseover.owl.autoplay': $.proxy(function() {
                    if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                        this.pause();
                    }
                }, this),
                'mouseleave.owl.autoplay': $.proxy(function() {
                    if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                        this.play();
                    }
                }, this),
                'touchstart.owl.core': $.proxy(function() {
                    if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                        this.pause();
                    }
                }, this),
                'touchend.owl.core': $.proxy(function() {
                    if (this._core.settings.autoplayHoverPause) {
                        this.play();
                    }
                }, this)
            };
    
            // register event handlers
            this._core.$element.on(this._handlers);
    
            // set default options
            this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
        };
    
        /**
         * Default options.
         * @public
         */
        Autoplay.Defaults = {
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            autoplaySpeed: false
        };
    
        /**
         * Transition to the next slide and set a timeout for the next transition.
         * @private
         * @param {Number} [speed] - The animation speed for the animations.
         */
        Autoplay.prototype._next = function(speed) {
            this._call = window.setTimeout(
                $.proxy(this._next, this, speed),
                this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
            );
    
            if (this._core.is('busy') || this._core.is('interacting') || document.hidden) {
                return;
            }
            this._core.next(speed || this._core.settings.autoplaySpeed);
        }
    
        /**
         * Reads the current timer value when the timer is playing.
         * @public
         */
        Autoplay.prototype.read = function() {
            return new Date().getTime() - this._time;
        };
    
        /**
         * Starts the autoplay.
         * @public
         * @param {Number} [timeout] - The interval before the next animation starts.
         * @param {Number} [speed] - The animation speed for the animations.
         */
        Autoplay.prototype.play = function(timeout, speed) {
            var elapsed;
    
            if (!this._core.is('rotating')) {
                this._core.enter('rotating');
            }
    
            timeout = timeout || this._core.settings.autoplayTimeout;
    
            // Calculate the elapsed time since the last transition. If the carousel
            // wasn't playing this calculation will yield zero.
            elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
    
            if (this._paused) {
                // Start the clock.
                this._time = this.read();
                this._paused = false;
            } else {
                // Clear the active timeout to allow replacement.
                window.clearTimeout(this._call);
            }
    
            // Adjust the origin of the timer to match the new timeout value.
            this._time += this.read() % timeout - elapsed;
    
            this._timeout = timeout;
            this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
        };
    
        /**
         * Stops the autoplay.
         * @public
         */
        Autoplay.prototype.stop = function() {
            if (this._core.is('rotating')) {
                // Reset the clock.
                this._time = 0;
                this._paused = true;
    
                window.clearTimeout(this._call);
                this._core.leave('rotating');
            }
        };
    
        /**
         * Pauses the autoplay.
         * @public
         */
        Autoplay.prototype.pause = function() {
            if (this._core.is('rotating') && !this._paused) {
                // Pause the clock.
                this._time = this.read();
                this._paused = true;
    
                window.clearTimeout(this._call);
            }
        };
    
        /**
         * Destroys the plugin.
         */
        Autoplay.prototype.destroy = function() {
            var handler, property;
    
            this.stop();
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Navigation Plugin
     * @version 2.1.0
     * @author Artus Kolanowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
        'use strict';
    
        /**
         * Creates the navigation plugin.
         * @class The Navigation Plugin
         * @param {Owl} carousel - The Owl Carousel.
         */
        var Navigation = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Indicates whether the plugin is initialized or not.
             * @protected
             * @type {Boolean}
             */
            this._initialized = false;
    
            /**
             * The current paging indexes.
             * @protected
             * @type {Array}
             */
            this._pages = [];
    
            /**
             * All DOM elements of the user interface.
             * @protected
             * @type {Object}
             */
            this._controls = {};
    
            /**
             * Markup for an indicator.
             * @protected
             * @type {Array.<String>}
             */
            this._templates = [];
    
            /**
             * The carousel element.
             * @type {jQuery}
             */
            this.$element = this._core.$element;
    
            /**
             * Overridden methods of the carousel.
             * @protected
             * @type {Object}
             */
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            };
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'prepared.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.dotsData) {
                        this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                            $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                    }
                }, this),
                'added.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.dotsData) {
                        this._templates.splice(e.position, 0, this._templates.pop());
                    }
                }, this),
                'remove.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.dotsData) {
                        this._templates.splice(e.position, 1);
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name == 'position') {
                        this.draw();
                    }
                }, this),
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && !this._initialized) {
                        this._core.trigger('initialize', null, 'navigation');
                        this.initialize();
                        this.update();
                        this.draw();
                        this._initialized = true;
                        this._core.trigger('initialized', null, 'navigation');
                    }
                }, this),
                'refreshed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._initialized) {
                        this._core.trigger('refresh', null, 'navigation');
                        this.update();
                        this.draw();
                        this._core.trigger('refreshed', null, 'navigation');
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
    
            // register event handlers
            this.$element.on(this._handlers);
        };
    
        /**
         * Default options.
         * @public
         * @todo Rename `slideBy` to `navBy`
         */
        Navigation.Defaults = {
            nav: false,
            navText: [
                '<span aria-label="' + 'prev' + '">&#x2039;</span>',
                '<span aria-label="' + 'next' + '">&#x203a;</span>'
            ],
            navSpeed: false,
            navElement: 'button role="presentation"',
            navContainer: false,
            navContainerClass: 'owl-nav',
            navClass: [
                'owl-prev',
                'owl-next'
            ],
            slideBy: 1,
            dotClass: 'owl-dot',
            dotsClass: 'owl-dots',
            dots: true,
            dotsEach: false,
            dotsData: false,
            dotsSpeed: false,
            dotsContainer: false
        };
    
        /**
         * Initializes the layout of the plugin and extends the carousel.
         * @protected
         */
        Navigation.prototype.initialize = function() {
            var override,
                settings = this._core.settings;
    
            // create DOM structure for relative navigation
            this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
                : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
    
            this._controls.$previous = $('<' + settings.navElement + '>')
                .addClass(settings.navClass[0])
                .html(settings.navText[0])
                .prependTo(this._controls.$relative)
                .on('click', $.proxy(function(e) {
                    this.prev(settings.navSpeed);
                }, this));
            this._controls.$next = $('<' + settings.navElement + '>')
                .addClass(settings.navClass[1])
                .html(settings.navText[1])
                .appendTo(this._controls.$relative)
                .on('click', $.proxy(function(e) {
                    this.next(settings.navSpeed);
                }, this));
    
            // create DOM structure for absolute navigation
            if (!settings.dotsData) {
                this._templates = [ $('<button>')
                    .addClass(settings.dotClass)
                    .append($('<span>'))
                    .prop('outerHTML') ];
            }
    
            this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
                : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
    
            this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
                var index = $(e.target).parent().is(this._controls.$absolute)
                    ? $(e.target).index() : $(e.target).parent().index();
    
                e.preventDefault();
    
                this.to(index, settings.dotsSpeed);
            }, this));
    
            /*$el.on('focusin', function() {
                $(document).off(".carousel");
    
                $(document).on('keydown.carousel', function(e) {
                    if(e.keyCode == 37) {
                        $el.trigger('prev.owl')
                    }
                    if(e.keyCode == 39) {
                        $el.trigger('next.owl')
                    }
                });
            });*/
    
            // override public methods of the carousel
            for (override in this._overrides) {
                this._core[override] = $.proxy(this[override], this);
            }
        };
    
        /**
         * Destroys the plugin.
         * @protected
         */
        Navigation.prototype.destroy = function() {
            var handler, control, property, override;
    
            for (handler in this._handlers) {
                this.$element.off(handler, this._handlers[handler]);
            }
            for (control in this._controls) {
                if (control === '$relative' && settings.navContainer) {
                    this._controls[control].html('');
                } else {
                    this._controls[control].remove();
                }
            }
            for (override in this.overides) {
                this._core[override] = this._overrides[override];
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        /**
         * Updates the internal state.
         * @protected
         */
        Navigation.prototype.update = function() {
            var i, j, k,
                lower = this._core.clones().length / 2,
                upper = lower + this._core.items().length,
                maximum = this._core.maximum(true),
                settings = this._core.settings,
                size = settings.center || settings.autoWidth || settings.dotsData
                    ? 1 : settings.dotsEach || settings.items;
    
            if (settings.slideBy !== 'page') {
                settings.slideBy = Math.min(settings.slideBy, settings.items);
            }
    
            if (settings.dots || settings.slideBy == 'page') {
                this._pages = [];
    
                for (i = lower, j = 0, k = 0; i < upper; i++) {
                    if (j >= size || j === 0) {
                        this._pages.push({
                            start: Math.min(maximum, i - lower),
                            end: i - lower + size - 1
                        });
                        if (Math.min(maximum, i - lower) === maximum) {
                            break;
                        }
                        j = 0, ++k;
                    }
                    j += this._core.mergers(this._core.relative(i));
                }
            }
        };
    
        /**
         * Draws the user interface.
         * @todo The option `dotsData` wont work.
         * @protected
         */
        Navigation.prototype.draw = function() {
            var difference,
                settings = this._core.settings,
                disabled = this._core.items().length <= settings.items,
                index = this._core.relative(this._core.current()),
                loop = settings.loop || settings.rewind;
    
            this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
    
            if (settings.nav) {
                this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
                this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
            }
    
            this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
    
            if (settings.dots) {
                difference = this._pages.length - this._controls.$absolute.children().length;
    
                if (settings.dotsData && difference !== 0) {
                    this._controls.$absolute.html(this._templates.join(''));
                } else if (difference > 0) {
                    this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
                } else if (difference < 0) {
                    this._controls.$absolute.children().slice(difference).remove();
                }
    
                this._controls.$absolute.find('.active').removeClass('active');
                this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
            }
        };
    
        /**
         * Extends event data.
         * @protected
         * @param {Event} event - The event object which gets thrown.
         */
        Navigation.prototype.onTrigger = function(event) {
            var settings = this._core.settings;
    
            event.page = {
                index: $.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: settings && (settings.center || settings.autoWidth || settings.dotsData
                    ? 1 : settings.dotsEach || settings.items)
            };
        };
    
        /**
         * Gets the current page position of the carousel.
         * @protected
         * @returns {Number}
         */
        Navigation.prototype.current = function() {
            var current = this._core.relative(this._core.current());
            return $.grep(this._pages, $.proxy(function(page, index) {
                return page.start <= current && page.end >= current;
            }, this)).pop();
        };
    
        /**
         * Gets the current succesor/predecessor position.
         * @protected
         * @returns {Number}
         */
        Navigation.prototype.getPosition = function(successor) {
            var position, length,
                settings = this._core.settings;
    
            if (settings.slideBy == 'page') {
                position = $.inArray(this.current(), this._pages);
                length = this._pages.length;
                successor ? ++position : --position;
                position = this._pages[((position % length) + length) % length].start;
            } else {
                position = this._core.relative(this._core.current());
                length = this._core.items().length;
                successor ? position += settings.slideBy : position -= settings.slideBy;
            }
    
            return position;
        };
    
        /**
         * Slides to the next item or page.
         * @public
         * @param {Number} [speed=false] - The time in milliseconds for the transition.
         */
        Navigation.prototype.next = function(speed) {
            $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
        };
    
        /**
         * Slides to the previous item or page.
         * @public
         * @param {Number} [speed=false] - The time in milliseconds for the transition.
         */
        Navigation.prototype.prev = function(speed) {
            $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
        };
    
        /**
         * Slides to the specified item or page.
         * @public
         * @param {Number} position - The position of the item or page.
         * @param {Number} [speed] - The time in milliseconds for the transition.
         * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
         */
        Navigation.prototype.to = function(position, speed, standard) {
            var length;
    
            if (!standard && this._pages.length) {
                length = this._pages.length;
                $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
            } else {
                $.proxy(this._overrides.to, this._core)(position, speed);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Hash Plugin
     * @version 2.1.0
     * @author Artus Kolanowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
        'use strict';
    
        /**
         * Creates the hash plugin.
         * @class The Hash Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Hash = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;
    
            /**
             * Hash index for the items.
             * @protected
             * @type {Object}
             */
            this._hashes = {};
    
            /**
             * The carousel element.
             * @type {jQuery}
             */
            this.$element = this._core.$element;
    
            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                'initialized.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                        $(window).trigger('hashchange.owl.navigation');
                    }
                }, this),
                'prepared.owl.carousel': $.proxy(function(e) {
                    if (e.namespace) {
                        var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
    
                        if (!hash) {
                            return;
                        }
    
                        this._hashes[hash] = e.content;
                    }
                }, this),
                'changed.owl.carousel': $.proxy(function(e) {
                    if (e.namespace && e.property.name === 'position') {
                        var current = this._core.items(this._core.relative(this._core.current())),
                            hash = $.map(this._hashes, function(item, hash) {
                                return item === current ? hash : null;
                            }).join();
    
                        if (!hash || window.location.hash.slice(1) === hash) {
                            return;
                        }
    
                        window.location.hash = hash;
                    }
                }, this)
            };
    
            // set default options
            this._core.options = $.extend({}, Hash.Defaults, this._core.options);
    
            // register the event handlers
            this.$element.on(this._handlers);
    
            // register event listener for hash navigation
            $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
                var hash = window.location.hash.substring(1),
                    items = this._core.$stage.children(),
                    position = this._hashes[hash] && items.index(this._hashes[hash]);
    
                if (position === undefined || position === this._core.current()) {
                    return;
                }
    
                this._core.to(this._core.relative(position), false, true);
            }, this));
        };
    
        /**
         * Default options.
         * @public
         */
        Hash.Defaults = {
            URLhashListener: false
        };
    
        /**
         * Destroys the plugin.
         * @public
         */
        Hash.prototype.destroy = function() {
            var handler, property;
    
            $(window).off('hashchange.owl.navigation');
    
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != 'function' && (this[property] = null);
            }
        };
    
        $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
    
    })(window.Zepto || window.jQuery, window, document);
    
    /**
     * Support Plugin
     *
     * @version 2.1.0
     * @author Vivid Planet Software GmbH
     * @author Artus Kolanowski
     * @author David Deutsch
     * @license The MIT License (MIT)
     */
    ;(function($, window, document, undefined) {
    
        var style = $('<support>').get(0).style,
            prefixes = 'Webkit Moz O ms'.split(' '),
            events = {
                transition: {
                    end: {
                        WebkitTransition: 'webkitTransitionEnd',
                        MozTransition: 'transitionend',
                        OTransition: 'oTransitionEnd',
                        transition: 'transitionend'
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: 'webkitAnimationEnd',
                        MozAnimation: 'animationend',
                        OAnimation: 'oAnimationEnd',
                        animation: 'animationend'
                    }
                }
            },
            tests = {
                csstransforms: function() {
                    return !!test('transform');
                },
                csstransforms3d: function() {
                    return !!test('perspective');
                },
                csstransitions: function() {
                    return !!test('transition');
                },
                cssanimations: function() {
                    return !!test('animation');
                }
            };
    
        function test(property, prefixed) {
            var result = false,
                upper = property.charAt(0).toUpperCase() + property.slice(1);
    
            $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
                if (style[property] !== undefined) {
                    result = prefixed ? property : true;
                    return false;
                }
            });
    
            return result;
        }
    
        function prefixed(property) {
            return test(property, true);
        }
    
        if (tests.csstransitions()) {
            /* jshint -W053 */
            $.support.transition = new String(prefixed('transition'))
            $.support.transition.end = events.transition.end[ $.support.transition ];
        }
    
        if (tests.cssanimations()) {
            /* jshint -W053 */
            $.support.animation = new String(prefixed('animation'))
            $.support.animation.end = events.animation.end[ $.support.animation ];
        }
    
        if (tests.csstransforms()) {
            /* jshint -W053 */
            $.support.transform = new String(prefixed('transform'));
            $.support.transform3d = tests.csstransforms3d();
        }
    
})(window.Zepto || window.jQuery, window, document);
    













    