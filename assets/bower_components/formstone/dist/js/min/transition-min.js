!function(t,e,r){"use strict";function n(t,r){if(r){t.$target=this.find(t.target),t.$check=t.target?t.$target:this,t.callback=r,t.styles=l(t.$check),t.timer=null;var n=t.$check.css(e.transition+"-duration"),a=parseFloat(n);e.support.transition&&n&&a?this.on(p.transitionEnd,t,i):t.timer=f.startTimer(t.timer,50,function(){s(t)},!0)}}function a(t){f.clearTimer(t.timer,!0),this.off(p.namespace)}function i(e){e.stopPropagation(),e.preventDefault();var r=e.data,n=e.originalEvent,a=r.target?r.$target:r.$el;r.property&&n.propertyName!==r.property||!t(n.target).is(a)||o(r)}function o(t){t.always||t.$el[u.namespace]("destroy"),t.callback.apply(t.$el)}function s(t){var e=l(t.$check);c(t.styles,e)||o(t),t.styles=e}function l(e){var r,n,a,i={};if(e instanceof t&&(e=e[0]),y.getComputedStyle){r=y.getComputedStyle(e,null);for(var o=0,s=r.length;s>o;o++)n=r[o],a=r.getPropertyValue(n),i[n]=a}else if(e.currentStyle){r=e.currentStyle;for(n in r)r[n]&&(i[n]=r[n])}return i}function c(e,r){if(t.type(e)!==t.type(r))return!1;for(var n in e)if(!e.hasOwnProperty(n)||!r.hasOwnProperty(n)||e[n]!==r[n])return!1;return!0}var u=e.Plugin("transition",{widget:!0,defaults:{always:!1,property:null,target:null},methods:{_construct:n,_destruct:a,resolve:o}}),p=u.events,f=u.functions,y=e.window}(jQuery,Formstone);