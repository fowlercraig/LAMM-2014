/*! Formstone v0.4.3 [scrollbar.js] 2015-04-04 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){s=b.$body}function e(a){x.iterate.call(z,j)}function f(){z=a(u.base)}function g(a){var b="";b+='<div class="'+v.bar+'">',b+='<div class="'+v.track+'">',b+='<span class="'+v.handle+'"></span>',b+="</div></div>",a.paddingRight=parseInt(this.css("padding-right"),10),a.paddingBottom=parseInt(this.css("padding-bottom"),10),this.addClass([v.base,a.customClass,a.horizontal?v.horizontal:""].join(" ")).wrapInner('<div class="'+v.content+'" />').prepend(b),a.$content=this.find(u.content),a.$bar=this.find(u.bar),a.$track=this.find(u.track),a.$handle=this.find(u.handle),a.trackMargin=parseInt(a.trackMargin,10),a.$content.on(w.scroll,a,k),this.on(w.touchMouseDown,u.track,a,m).on(w.touchMouseDown,u.handle,a,n),j(a),f()}function h(a){a.$bar.remove(),a.$content.off(w.namespace).contents().unwrap(),this.removeClass([v.base,v.active,a.customClass].join(" ")).off(w.namespace)}function i(b,c,d){var e=d||b.duration,f={};if("number"!==a.type(c)){var g=a(c);if(g.length>0){var h=g.position();c=b.horizontal?h.left+b.$content.scrollLeft():h.top+b.$content.scrollTop()}else c=b.$content.scrollTop()}f[b.horizontal?"scrollLeft":"scrollTop"]=c,b.$content.stop().animate(f,e)}function j(a){a.$el.addClass(v.isSetup);var b={},c={},d={},e=0,f=!0;if(a.horizontal){a.barHeight=a.$content[0].offsetHeight-a.$content[0].clientHeight,a.frameWidth=a.$content.outerWidth(),a.trackWidth=a.frameWidth-2*a.trackMargin,a.scrollWidth=a.$content[0].scrollWidth,a.ratio=a.trackWidth/a.scrollWidth,a.trackRatio=a.trackWidth/a.scrollWidth,a.handleWidth=a.handleSize>0?a.handleSize:a.trackWidth*a.trackRatio,a.scrollRatio=(a.scrollWidth-a.frameWidth)/(a.trackWidth-a.handleWidth),a.handleBounds={left:0,right:a.trackWidth-a.handleWidth},a.$content.css({paddingBottom:a.barHeight+a.paddingBottom});var g=a.$content.scrollLeft();e=g*a.ratio,f=a.scrollWidth<=a.frameWidth,b={width:a.frameWidth},c={width:a.trackWidth,marginLeft:a.trackMargin,marginRight:a.trackMargin},d={width:a.handleWidth}}else{a.barWidth=a.$content[0].offsetWidth-a.$content[0].clientWidth,a.frameHeight=a.$content.outerHeight(),a.trackHeight=a.frameHeight-2*a.trackMargin,a.scrollHeight=a.$content[0].scrollHeight,a.ratio=a.trackHeight/a.scrollHeight,a.trackRatio=a.trackHeight/a.scrollHeight,a.handleHeight=a.handleSize>0?a.handleSize:a.trackHeight*a.trackRatio,a.scrollRatio=(a.scrollHeight-a.frameHeight)/(a.trackHeight-a.handleHeight),a.handleBounds={top:0,bottom:a.trackHeight-a.handleHeight};var h=a.$content.scrollTop();e=h*a.ratio,f=a.scrollHeight<=a.frameHeight,b={height:a.frameHeight},c={height:a.trackHeight,marginBottom:a.trackMargin,marginTop:a.trackMargin},d={height:a.handleHeight}}f?a.$el.removeClass(v.active):a.$el.addClass(v.active),a.$bar.css(b),a.$track.css(c),a.$handle.css(d),r(a,e),a.$el.removeClass(v.setup)}function k(a){x.killEvent(a);var b=a.data,c={};if(b.horizontal){var d=b.$content.scrollLeft();0>d&&(d=0),b.handleLeft=d/b.scrollRatio,b.handleLeft>b.handleBounds.right&&(b.handleLeft=b.handleBounds.right),c={left:b.handleLeft}}else{var e=b.$content.scrollTop();0>e&&(e=0),b.handleTop=e/b.scrollRatio,b.handleTop>b.handleBounds.bottom&&(b.handleTop=b.handleBounds.bottom),c={top:b.handleTop}}b.$handle.css(c)}function l(b){var c=b.originalEvent,d="undefined"!==a.type(c.targetTouches)?c.targetTouches[0]:null;return{pageX:d?d.pageX:b.clientX,pageY:d?d.pageY:b.clientY}}function m(a){x.killEvent(a);var b=a.data,c=l(a),d=b.$track.offset();b.horizontal?(b.pointerStart=c.pageX,b.handleLeft=c.pageX-d.left+y.scrollLeft()-b.handleWidth/2,r(b,b.handleLeft)):(b.pointerStart=c.pageY,b.handleTop=c.pageY-d.top+y.scrollTop()-b.handleHeight/2,r(b,b.handleTop)),o(b)}function n(a){x.killEvent(a);var b=a.data,c=l(a);b.horizontal?(b.pointerStart=c.pageX,b.handleLeft=parseInt(b.$handle.css("left"),10)):(b.pointerStart=c.pageY,b.handleTop=parseInt(b.$handle.css("top"),10)),o(b)}function o(a){a.$content.off(w.namespace),s.on(w.touchMouseMove,a,p).on(w.touchMouseUp,a,q)}function p(a){x.killEvent(a);var b=a.data,c=l(a),d=0;d=b.horizontal?b.handleLeft-(b.pointerStart-c.pageX):b.handleTop-(b.pointerStart-c.pageY),r(b,d)}function q(a){x.killEvent(a),a.data.$content.on(w.scroll,a.data,k),s.off(w.namespace)}function r(a,b){var c={};a.horizontal?(b<a.handleBounds.left&&(b=a.handleBounds.left),b>a.handleBounds.right&&(b=a.handleBounds.right),c={left:b},a.$content.scrollLeft(Math.round(b*a.scrollRatio))):(b<a.handleBounds.top&&(b=a.handleBounds.top),b>a.handleBounds.bottom&&(b=a.handleBounds.bottom),c={top:b},a.$content.scrollTop(Math.round(b*a.scrollRatio))),a.$handle.css(c)}var s,t=b.Plugin("scrollbar",{widget:!0,defaults:{customClass:"",duration:0,handleSize:0,horizontal:!1,trackMargin:0},classes:["content","bar","track","handle","horizontal","setup","active"],methods:{_setup:d,_construct:g,_destruct:h,_resize:e,scroll:i,resize:j}}),u=t.classes,v=u.raw,w=t.events,x=t.functions,y=b.$window,z=[];w.touchMouseDown=[w.touchStart,w.mouseDown].join(" "),w.touchMouseMove=[w.touchMove,w.mouseMove].join(" "),w.touchMouseUp=[w.touchEnd,w.mouseUp].join(" ")}(jQuery,Formstone);