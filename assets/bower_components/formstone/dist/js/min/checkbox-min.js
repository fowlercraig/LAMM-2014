!function(e,a,s){"use strict";function t(a){var s=this.closest("label"),t=s.length?s.eq(0):e("label[for="+this.attr("id")+"]"),o=[k.base,a.customClass].join(" "),c="";a.radio="radio"===this.attr("type"),a.group=this.attr("name"),c+='<div class="'+k.marker+'">',c+='<div class="'+k.flag+'"></div>',a.toggle&&(o+=" "+k.toggle,c+='<span class="'+[k.state,k.state_on].join(" ")+'">'+a.labels.on+"</span>",c+='<span class="'+[k.state,k.state_off].join(" ")+'">'+a.labels.off+"</span>"),a.radio&&(o+=" "+k.radio),c+="</div>",t.length?t.addClass(k.label).wrap('<div class="'+o+'"></div>').before(c):this.before('<div class=" '+o+'">'+c+"</div>"),a.$checkbox=t.length?t.parents(u.base):this.prev(u.base),a.$marker=a.$checkbox.find(u.marker),a.$states=a.$checkbox.find(u.state),a.$label=t,this.is(":checked")&&a.$checkbox.addClass(k.checked),this.is(":disabled")&&a.$checkbox.addClass(k.disabled),this.on(p.focus,a,b).on(p.blur,a,h).on(p.change,a,i).on(p.click,a,d).on(p.deselect,a,r),a.$checkbox.touch({tap:!0}).on(p.tap,a,d)}function o(e){e.$checkbox.off(p.namespace).touch("destroy"),e.$marker.remove(),e.$states.remove(),e.$label.unwrap().removeClass(k.label),this.off(p.namespace)}function c(e){this.prop("disabled",!1),e.$checkbox.removeClass(k.disabled)}function l(e){this.prop("disabled",!0),e.$checkbox.addClass(k.disabled)}function d(a){a.stopPropagation();var s=a.data;e(a.target).is(s.$el)||(a.preventDefault(),s.$el.trigger("click"))}function i(e){var a=e.data,s=a.$el.is(":disabled"),t=a.$el.is(":checked");s||(a.radio?n(e):t?n(e):r(e))}function n(a){a.data.radio&&e('input[name="'+a.data.group+'"]').not(a.data.$el).trigger("deselect"),a.data.$checkbox.addClass(k.checked)}function r(e){e.data.$checkbox.removeClass(k.checked)}function b(e){e.data.$checkbox.addClass(k.focus)}function h(e){e.data.$checkbox.removeClass(k.focus)}var f=a.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"}},classes:["label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:t,_destruct:o,enable:c,disable:l},events:{deselect:"deselect",tap:"tap"}}),u=f.classes,k=u.raw,p=f.events;f.functions}(jQuery,Formstone);