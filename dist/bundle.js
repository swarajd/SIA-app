webpackJsonp([1],[/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(t,e,n){(function(t){"use strict";n(4),n(8),n(6),t.mount("app")}).call(e,n(1))},,,,/*!****************************!*\
  !*** ./src/RiotControl.js ***!
  \****************************/
function(t,e,n){(function(t){"use strict";n(5);var e=["on","one","off","trigger"],o={_stores:[],addStore:function(t){this._stores.push(t)}};e.forEach(function(t){o[t]=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];this._stores.forEach(function(e){return e[t].apply(null,n)})}}),t.control=o,t.mixin("controlMixin",{onControl:function(e,n){t.control.on(e,n),this.on("unmount",function(){return t.control.off(e,n)})}})}).call(e,n(1))},/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
function(t,e,n){(function(t){"use strict";t.SE={STUDENTS_CHANGED:"se_students_changed"},t.VE={ADD_STUDENT:"ve_add_student",REMOVE_STUDENT:"ve_remove_student",LOAD_STUDENTS:"ve_load_students"}}).call(e,n(1))},/*!*************************!*\
  !*** ./src/riotTags.js ***!
  \*************************/
function(t,e,n){"use strict";n(21),n(22),n(20)},/*!***********************************!*\
  !*** ./src/store/studentstore.js ***!
  \***********************************/
function(t,e,n){(function(n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i="sia-students-info",a=function(){function t(){o(this,t),n.observable(this);var e=window.localStorage.getItem(i);e?this._students=e&&JSON.parse(e)||[]:this._students=[]}return r(t,[{key:"getStudentByName",value:function(t){return this._students[t]}},{key:"saveToStorage",value:function(){window.localStorage.setItem(i,JSON.stringify(this._students))}}]),t}(),u=new a;u.on(n.VE.LOAD_STUDENTS,function(){u.trigger(n.SE.STUDENTS_CHANGED,u._students)}),u.on(n.VE.ADD_STUDENT,function(t){u._students=u._students.filter(function(e){return e.name!=t.name}),u._students=u._students.concat({name:t.name,email:t.email,year:t.year,paid:t.paid}),u.saveToStorage(),u.trigger(n.SE.STUDENTS_CHANGED,u._students)}),u.on(n.VE.REMOVE_STUDENT,function(t){u._students=u._students.filter(function(e){return e.name!==t}),u.saveToStorage(),u.trigger(n.SE.STUDENTS_CHANGED,u._students)}),n.control.addStore(u),e["default"]=u,t.exports=e["default"]}).call(e,n(1))},/*!***********************!*\
  !*** ./src/stores.js ***!
  \***********************/
function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),i=o(r),a={student:i["default"]};e["default"]=a,t.exports=e["default"]},,,,/*!**********************************!*\
  !*** ./~/downloadjs/download.js ***!
  \**********************************/
function(t,e,n){var o,r,i;!function(n,a){r=[],o=a,i="function"==typeof o?o.apply(e,r):o,!(void 0!==i&&(t.exports=i))}(this,function(){return function t(e,n,o){function r(t){var e=t.split(/[:;,]/),n=e[1],o="base64"==e[2]?atob:decodeURIComponent,r=o(e.pop()),i=r.length,a=0,u=new Uint8Array(i);for(a;i>a;++a)u[a]=r.charCodeAt(a);return new g([u],{type:n})}function i(t,e){if("download"in m)return m.href=t,m.setAttribute("download",b),m.className="download-js-link",m.innerHTML="downloading...",h.body.appendChild(m),setTimeout(function(){m.click(),h.body.removeChild(m),e===!0&&setTimeout(function(){s.URL.revokeObjectURL(m.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return t=t.replace(/^data:([\w\/\-\+]+)/,c),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=h.createElement("iframe");h.body.appendChild(n),e||(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,c)),n.src=t,setTimeout(function(){h.body.removeChild(n)},333)}var a,u,l,s=window,c="application/octet-stream",d=o||c,f=e,p=!n&&!o&&f,h=document,m=h.createElement("a"),v=function(t){return String(t)},g=s.Blob||s.MozBlob||s.WebKitBlob||v,b=n||"download";if(g=g.call?g.bind(s):Blob,"true"===String(this)&&(f=[f,d],d=f[0],f=f[1]),p&&p.length<2048&&(b=p.split("/").pop().split("?")[0],m.href=p,-1!==m.href.indexOf(p))){var l=new XMLHttpRequest;return l.open("GET",p,!0),l.responseType="blob",l.onload=function(e){t(e.target.response,b,c)},l.send(),l}if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(f))return navigator.msSaveBlob?navigator.msSaveBlob(r(f),b):i(f);if(a=f instanceof g?f:new g([f],{type:d}),navigator.msSaveBlob)return navigator.msSaveBlob(a,b);if(s.URL)i(s.URL.createObjectURL(a),!0);else{if("string"==typeof a||a.constructor===v)try{return i("data:"+d+";base64,"+s.btoa(a))}catch(y){return i("data:"+d+","+encodeURIComponent(a))}u=new FileReader,u.onload=function(t){i(this.result)},u.readAsDataURL(a)}return!0}})},/*!************************************!*\
  !*** ./~/json2csv/lib/json2csv.js ***!
  \************************************/
function(t,e,n){function o(t,e){return t.data=t.data||[],Array.isArray(t.data)||(t.data=[t.data]),t.flatten&&(t.data=t.data.map(s)),t.fields||0!==t.data.length&&"object"==typeof t.data[0]?(t.fields=t.fields||Object.keys(t.data[0]),t.fieldNames&&t.fieldNames.length!==t.fields.length?e(new Error("fieldNames and fields should be of the same length, if fieldNames is provided.")):(t.fieldNames=t.fields.map(function(e,n){return t.fieldNames&&"string"==typeof e?t.fieldNames[n]:"string"==typeof e?e:e.label||e.value}),t.del=t.del||",",t.eol=t.eol||"",t.quotes="string"==typeof t.quotes?t.quotes:'"',t.doubleQuotes="string"==typeof t.doubleQuotes?t.doubleQuotes:Array(3).join(t.quotes),t.defaultValue=t.defaultValue,t.hasCSVColumnTitle=t.hasCSVColumnTitle!==!1,void e(null))):e(new Error('params should include "fields" and/or non-empty "data" array of objects'))}function r(t){var e="";return t.hasCSVColumnTitle&&t.fieldNames.forEach(function(n){""!==e&&(e+=t.del),e+=JSON.stringify(n).replace(/\"/g,t.quotes)}),e}function i(t,e){var n=t.length-1;if('"'===t[0]&&'"'===t[n]){var o=t.split("");o[0]=e,o[n]=e,t=o.join("")}return t}function a(t,e){return t.data.forEach(function(n){if(n&&Object.getOwnPropertyNames(n).length>0){var o="",r=t.newLine||u.EOL||"\n";t.fields.forEach(function(e){var r;if(!e||"string"!=typeof e&&"string"!=typeof e.value)e&&"function"==typeof e.value&&(r=e.value(n)||e["default"]);else{var a="string"==typeof e?e:e.value,u=e["default"]||t.defaultValue;r=l(n,a,u),null===r&&void 0!==u&&(r=u)}if(void 0!==r){var s=JSON.stringify(r);"object"==typeof r&&(s=JSON.stringify(s)),'"'!==t.quotes&&(s=i(s,t.quotes)),s=s.replace(/\\\\/g,"\\"),o+=s}o+=t.del}),o=o.substring(0,o.length-1),o=o.split("\\\\").map(function(e){return e.replace(/\\"/g,t.doubleQuotes)}).join("\\\\"),o=o.replace(/\\\\/g,"\\"),""!==e?e+=r+o+t.eol:e=o+t.eol}}),e}var u=n(27),l=n(16),s=n(14);t.exports=function(t,e){if(!e||"function"!=typeof e)throw new Error("Callback is required");o(t,function(n){if(n)return e(n);var o=r(t),i=a(t,o);e(null,i)})}},/*!************************************!*\
  !*** ./~/json2csv/~/flat/index.js ***!
  \************************************/
function(t,e,n){function o(t,e){function n(t,l){Object.keys(t).forEach(function(s){var c=t[s],d=e.safe&&Array.isArray(c),f=Object.prototype.toString.call(c),p=i(c),h="[object Object]"===f||"[object Array]"===f,m=l?l+o+s:s;return e.maxDepth||(r=a+1),!d&&!p&&h&&Object.keys(c).length&&r>a?(++a,n(c,m)):void(u[m]=c)})}e=e||{};var o=e.delimiter||".",r=e.maxDepth,a=1,u={};return n(t),u}function r(t,e){function n(t){var e=Number(t);return isNaN(e)||-1!==t.indexOf(".")?t:e}e=e||{};var o=e.delimiter||".",a=e.overwrite||!1,u={},l=i(t);return l||"[object Object]"!==Object.prototype.toString.call(t)?t:(Object.keys(t).forEach(function(i){for(var l=i.split(o),s=n(l.shift()),c=n(l[0]),d=u;void 0!==c;){var f=Object.prototype.toString.call(d[s]),p="[object Object]"===f||"[object Array]"===f;(a&&!p||!a&&void 0===d[s])&&(d[s]="number"!=typeof c||e.object?{}:[]),d=d[s],l.length>0&&(s=n(l.shift()),c=n(l[0]))}d[s]=r(t[i],e)}),u)}var i=n(15);t.exports=o;o.flatten=o,o.unflatten=r},/*!************************************************!*\
  !*** ./~/json2csv/~/flat/~/is-buffer/index.js ***!
  \************************************************/
function(t,e){t.exports=function(t){return!(null==t||!(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)))}},/*!******************************************!*\
  !*** ./~/json2csv/~/lodash.get/index.js ***!
  \******************************************/
function(t,e,n){function o(t,e,n){var o=null==t?void 0:r(t,i(e),e+"");return void 0===o?n:o}var r=n(17),i=n(18);t.exports=o},/*!************************************************************!*\
  !*** ./~/json2csv/~/lodash.get/~/lodash._baseget/index.js ***!
  \************************************************************/
function(t,e){function n(t,e,n){if(null!=t){void 0!==n&&n in o(t)&&(e=[n]);for(var r=0,i=e.length;null!=t&&i>r;)t=t[e[r++]];return r&&r==i?t:void 0}}function o(t){return r(t)?t:Object(t)}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=n},/*!***********************************************************!*\
  !*** ./~/json2csv/~/lodash.get/~/lodash._topath/index.js ***!
  \***********************************************************/
function(t,e,n){function o(t){return null==t?"":t+""}function r(t){if(i(t))return t;var e=[];return o(t).replace(a,function(t,n,o,r){e.push(o?r.replace(u,"$1"):n||t)}),e}var i=n(19),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,u=/\\(\\)?/g;t.exports=r},/*!****************************************************************************!*\
  !*** ./~/json2csv/~/lodash.get/~/lodash._topath/~/lodash.isarray/index.js ***!
  \****************************************************************************/
function(t,e){function n(t){return!!t&&"object"==typeof t}function o(t,e){var n=null==t?void 0:t[e];return u(n)?n:void 0}function r(t){return"number"==typeof t&&t>-1&&t%1==0&&g>=t}function i(t){return a(t)&&h.call(t)==s}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function u(t){return null==t?!1:i(t)?m.test(f.call(t)):n(t)&&c.test(t)}var l="[object Array]",s="[object Function]",c=/^\[object .+?Constructor\]$/,d=Object.prototype,f=Function.prototype.toString,p=d.hasOwnProperty,h=d.toString,m=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),v=o(Array,"isArray"),g=9007199254740991,b=v||function(t){return n(t)&&r(t.length)&&h.call(t)==l};t.exports=b},/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
function(t,e,n){(function(t){t.tag2("app",'<section> <header> <nav> <ul> <li><a href="#create">Add Student</a></li> <li><a href="#list">Students</a></li> </ul> </nav> </header> <article> <div id="mainview"></div> </article> </section>',"","",function(e){var n=this;this._currentView=null,this.resetData=function(){t.control.trigger(t.VE.RESET_DATA)},this.loadView=function(e,o){n._currentView&&n._currentView.unmount(!0),n._currentView=t.mount("div#mainview",e,{data:o})[0]},this.studyRoute=function(t,e){switch(t){case"create":n.loadView("create-view");break;case"list":n.loadView("list-view");break;default:n.loadView("create-view")}},t.route(this.studyRoute),this.on("mount",function(){t.route.start(!0)})})}).call(e,n(1))},/*!***********************************!*\
  !*** ./src/view/create-view.html ***!
  \***********************************/
function(t,e,n){(function(t){t.tag2("create-view",'<div class="grid"> <div class="grid__col grid__col--3-of-5"> <form action="" method="" class="student-form"> <input type="text" name="name" placeholder="enter a name" onkeyup="{editTxt}"> <input type="text" name="email" placeholder="enter an email" onkeyup="{editTxt}"> <input type="radio" name="year" id="freshman" onclick="{editRadio}"> <label for="freshman">Freshman</label><br> <input type="radio" name="year" id="sophomore" onclick="{editRadio}"> <label for="sophomore">Sophomore</label><br> <input type="radio" name="year" id="junior" onclick="{editRadio}"> <label for="junior">Junior</label><br> <input type="radio" name="year" id="senior" onclick="{editRadio}"> <label for="senior">Senior</label><br><br> <input type="checkbox" name="paid" id="paid" __checked="{paid}" onclick="{togglePaid}"> <label for="paid">Paid</label><br> </form> </div> <div class="grid__col grid__col--2-of-5"> <ul class="student-preview"> <li>Name: {name}</li> <li>email: {email}</li> <li>year: {year}</li> <li>paid: {paid ? \'yes\' : \'no\'}</li> </ul> </div> </div> <div class="create-footer"> <div> <button type="submit" name="create" onclick="{addStudent}">Create Student</button> </div> <div>{message}</div> </div>',"","",function(e){var n=this;this.name="",this.email="",this.year="",this.paid=!1,this.message="",this.editTxt=function(t){n[t.target.name]=t.target.value},this.editRadio=function(t){n[t.target.name]=t.target.id},this.togglePaid=function(){n.paid=!n.paid},this.addStudent=function(){n.validateForm()?(t.control.trigger(t.VE.ADD_STUDENT,{name:n.name,email:n.email,year:n.year,paid:n.paid}),n.message="it worked!"):n.message="one of the fields is incorrect"},this.validateForm=function(){var t=n.name.length>=2,e=/\S+@\S+\.\S+/,o=e.test(n.email),r=n.year.length>0;return t&&o&&r}},"{ }")}).call(e,n(1))},/*!*********************************!*\
  !*** ./src/view/list-view.html ***!
  \*********************************/
function(t,e,n){(function(t){t.tag2("list-view",'<div class="list-search-header"> <input type="text" name="name-search" placeholder="enter a name" onkeyup="{updateSearch}"> <button type="submit" name="export" class="export-btn" onclick="{exportStudents}">export all as csv</button> </div> <div class="list-contents"> <table> <thead> <tr> <th>Name</th> <th>Email</th> <th>Year</th> <th>Paid</th> <th>Delete</th> </tr> </thead> <tbody> <tr each="{_filteredStudents}"> <td>{name}</td> <td>{email}</td> <td>{year}</td> <td>{paid ? \'yes\' : \'no\'}</td> <td><button type="button" name="delete" onclick="{parent.deleteStudent}">X</button></td> </tr> </tbody> </table> </div>',"","",function(e){function o(t){return t&&t.__esModule?t:{"default":t}}var r=this,i=n(13),a=o(i),u=n(12),l=o(u);this.mixin("controlMixin"),this.search="",this._students=[],this._filteredStudents=[],this.on("mount",function(){t.control.trigger(t.VE.LOAD_STUDENTS)}),this.onControl(t.SE.STUDENTS_CHANGED,function(t){r._students=t,r._filteredStudents=r._students,r.update()}),this.updateSearch=function(t){r.search=t.target.value,0===r.search.length?r._filteredStudents=r._students:r._filteredStudents=r._students.filter(function(t){return t.name.toLowerCase().includes(r.search)})},this.deleteStudent=function(e){t.control.trigger(t.VE.REMOVE_STUDENT,e.item.name)},this.exportStudents=function(t){var e=["name","email","year","paid"];(0,a["default"])({data:r._students,fields:e},function(t,e){t&&console.log(t),console.log(e),(0,l["default"])(e,"students.csv","text/csv")})}},"{ }")}).call(e,n(1))},,,,,/*!****************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/os-browserify/browser.js ***!
  \****************************************************************/
function(t,e){e.endianness=function(){return"LE"},e.hostname=function(){return"undefined"!=typeof location?location.hostname:""},e.loadavg=function(){return[]},e.uptime=function(){return 0},e.freemem=function(){return Number.MAX_VALUE},e.totalmem=function(){return Number.MAX_VALUE},e.cpus=function(){return[]},e.type=function(){return"Browser"},e.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},e.networkInterfaces=e.getNetworkInterfaces=function(){return{}},e.arch=function(){return"javascript"},e.platform=function(){return"browser"},e.tmpdir=e.tmpDir=function(){return"/tmp"},e.EOL="\n"}]);
//# sourceMappingURL=bundle.js.map