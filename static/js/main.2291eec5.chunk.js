(this["webpackJsonpnasa-app"]=this["webpackJsonpnasa-app"]||[]).push([[0],{19:function(e,a,t){e.exports=t(31)},24:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c);t(24);var s=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"Astronomy Picture of the Day"),r.a.createElement("h1",{className:"navbar__nasa-heading"},"NASA API"))},o=t(7),m=t(1);function i(){return r.a.createElement("div",{className:"app-descr"},r.a.createElement("h2",null,"This app shows Astronomy Picture of the Day"),r.a.createElement(o.b,{className:"btn",to:"nasa-pod"},"Get started"))}var u=t(13),p=t.n(u),b=t(18),d=t(9);function E(){for(var e=Object(n.useState)("./img/nasa-image.png"),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),m=s[0],i=s[1],u=Object(n.useState)(""),E=Object(d.a)(u,2),h=E[0],f=E[1],v=(new Date).getFullYear(),k=[],y=[],g=1;g<=31;g++)k.push(g);for(var N=1996;N<=v-1;N++)y.push(N);var w=r.a.createRef(),_=r.a.createRef(),J=r.a.createRef(),j="nnkr1eH8UxErndoIzsJRidacRRezP9iZzH7BjB7E";function A(){return(A=Object(b.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(j,"&date=").concat(J.current.value,"-").concat(_,"-").concat(w.current.value));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t.url),f(t.explanation);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"main-generator__block"},r.a.createElement("h3",null,"Choose a date to get a Picture of that Day"),r.a.createElement("div",{className:"date-selection"},r.a.createElement("div",{className:"date-selection__select"},r.a.createElement("label",null,"Day"),r.a.createElement("select",{name:"day-selection",defaultValue:1,ref:w},k.map((function(e,a){return r.a.createElement("option",{key:e+a,value:e},e)})))),r.a.createElement("div",{className:"date-selection__select"},r.a.createElement("label",null,"Month"),r.a.createElement("select",{name:"month-selection",defaultValue:"January",ref:_},["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e,a){return r.a.createElement("option",{key:e+a,value:e},e)})))),r.a.createElement("div",{className:"date-selection__select"},r.a.createElement("label",null,"Year"),r.a.createElement("select",{name:"year-selection",defaultValue:1996,ref:J},y.map((function(e,a){return r.a.createElement("option",{key:e+a,value:e},e)})))),r.a.createElement("button",{className:"btn-go",id:"btn-get",onClick:function(){switch(_.current.value){case"January":_=1;break;case"February":_=2;break;case"March":_=3;break;case"April":_=4;break;case"May":_=5;break;case"June":_=6;break;case"July":_=7;break;case"August":_=8;break;case"September":_=9;break;case"October":_=10;break;case"November":_=11;break;case"December":_=12}!function(){A.apply(this,arguments)}(),i("It can take some time")}},"Go")),r.a.createElement("p",{className:"alert-for-time"},m),r.a.createElement("img",{src:t,className:"image-generated",alt:"Nasa Day Picture"}),r.a.createElement("div",{className:"description-for-image"},r.a.createElement("p",null,h)),r.a.createElement("div",{className:"go-home-block"},r.a.createElement(o.b,{className:"btn",to:"/"},"Home")))}function h(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://github.com/maximjiculWork?tab=repositories",target:"_blank"},"\xa9 Maxim Jicul"))}var f=function(){return r.a.createElement(o.a,{basename:"/nasa-api"},r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(m.a,{exact:!0,path:"/",component:i}),r.a.createElement(m.a,{path:"/nasa-pod",component:E}),r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.2291eec5.chunk.js.map