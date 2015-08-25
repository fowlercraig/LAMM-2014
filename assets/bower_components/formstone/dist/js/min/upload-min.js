!function(e,t,r){"use strict";function a(e){if(t.support.file){var r="";r+='<div class="'+m.target+'">',r+=e.label,r+="</div>",r+='<input class="'+m.input+'" type="file"',e.maxQueue>1&&(r+=" "+m.multiple),r+=">",this.addClass(m.base).append(r),e.$input=this.find(v.input),e.queue=[],e.total=0,e.uploading=!1,this.on(h.click,v.target,e,n).on(h.dragEnter,e,l).on(h.dragOver,e,u).on(h.dragLeave,e,s).on(h.drop,v.target,e,p),e.$input.on(h.change,e,i)}}function o(e){t.support.file&&(e.$input.off(h.namespace),this.off([h.click,h.dragEnter,h.dragOver,h.dragLeave,h.drop].join(" ")).removeClass(m.base).html(""))}function n(e){e.stopPropagation(),e.preventDefault();var t=e.data;t.$input.trigger(h.click)}function i(e){e.stopPropagation(),e.preventDefault();var t=e.data,r=t.$input[0].files;r.length&&f(t,r)}function l(e){e.stopPropagation(),e.preventDefault();var t=e.data;t.$el.addClass(m.dropping)}function u(e){e.stopPropagation(),e.preventDefault();var t=e.data;t.$el.addClass(m.dropping)}function s(e){e.stopPropagation(),e.preventDefault();var t=e.data;t.$el.removeClass(m.dropping)}function p(e){e.preventDefault();var t=e.data,r=e.originalEvent.dataTransfer.files;t.$el.removeClass(m.dropping),f(t,r)}function f(e,t){for(var r=[],a=0;a<t.length;a++){var o={index:e.total++,file:t[a],name:t[a].name,size:t[a].size,started:!1,complete:!1,error:!1,transfer:null};r.push(o),e.queue.push(o)}e.uploading||(q.on(h.beforeUnload,function(){return e.leave}),e.uploading=!0),e.$el.trigger(h.start,[r]),d(e)}function d(e){var t=0,r=[];for(var a in e.queue)!e.queue.hasOwnProperty(a)||e.queue[a].complete||e.queue[a].error||r.push(e.queue[a]);e.queue=r;for(var o in e.queue)if(e.queue.hasOwnProperty(o)){if(!e.queue[o].started){var n=new FormData;n.append(e.postKey,e.queue[o].file);for(var i in e.postData)e.postData.hasOwnProperty(i)&&n.append(i,e.postData[i]);g(e,e.queue[o],n)}if(t++,t>=e.maxQueue)return;a++}0===t&&(q.off(h.beforeUnload),e.uploading=!1,e.$el.trigger(h.complete))}function g(t,r,a){r.size>=t.maxSize?(r.error=!0,t.$el.trigger(h.fileError,[r,"Too large"]),d(t)):(r.started=!0,r.transfer=e.ajax({url:t.action,data:a,type:"POST",contentType:!1,processData:!1,cache:!1,xhr:function(){var a=e.ajaxSettings.xhr();return a.upload&&a.upload.addEventListener("progress",function(e){var a=0,o=e.loaded||e.position,n=e.total;e.lengthComputable&&(a=Math.ceil(o/n*100)),t.$el.trigger(h.fileProgress,[r,a])},!1),a},beforeSend:function(e){t.$el.trigger(h.fileStart,[r])},success:function(e,a,o){r.complete=!0,t.$el.trigger(h.fileComplete,[r,e]),d(t)},error:function(e,a,o){r.error=!0,t.$el.trigger(h.fileError,[r,o]),d(t)}}))}var c=t.Plugin("upload",{widget:!0,defaults:{customClass:"",action:"",label:"Drag and drop files or click to select",leave:"You have uploads pending, are you sure you want to leave this page?",maxQueue:2,maxSize:5242880,postData:{},postKey:"file"},classes:["input","target","multiple","dropping"],methods:{_construct:a,_destruct:o}}),v=c.classes,m=v.raw,h=c.events,q=(c.functions,t.$window);h.complete="complete",h.fileStart="filestart",h.fileProgress="fileprogress",h.fileComplete="filecomplete",h.fileError="fileerror",h.start="start"}(jQuery,Formstone);