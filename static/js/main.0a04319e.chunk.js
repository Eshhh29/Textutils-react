(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg-navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/#"},e.aboutText))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"bg-primary rounded mx-2",onClick:function(){e.toggleMode("primary")},style:{height:"30px",width:"30px"}}),l.a.createElement("div",{className:"bg-danger rounded mx-2",onClick:function(){e.toggleMode("danger")},style:{height:"30px",width:"30px"}}),l.a.createElement("div",{className:"bg-success rounded mx-2",onClick:function(){e.toggleMode("success")},style:{height:"30px",width:"30px"}}),l.a.createElement("div",{className:"bg-warning rounded mx-2",onClick:function(){e.toggleMode("warning")},style:{height:"30px",width:"30px"}})),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode,"?'dark:'light'}")},l.a.createElement("input",{className:"form-check-input",onClick:function(){e.toggleMode(null)},type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",for:"flexSwitchCheckDefault"},"Toggle mode")))))}function m(e){var t=Object(n.useState)("Enter text here"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{backgroundColor:"dark"===e.mode?"white":"black",color:"white"}},l.a.createElement("h1",null,e.heading," "),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){console.log("On chnage"),c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"white":"black",color:"white"},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn-btn-primary mx-2",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to uppercase")}},"Convert to uppercase"),l.a.createElement("button",{className:"btn-btn-primary mx-2",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to Lowercase")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn-btn-primary mx-2",onClick:function(e){var t=r.substring(r.length);c(t)}},"Delete")),l.a.createElement("div",{className:"container","my-6":!0},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split.length," words and ",r.length," chracters"),l.a.createElement("p",null,.008*r.length," minutes to read"),l.a.createElement("h3",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something to preview here")))}s.defaultProps={title:"Set title here"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.type)," :",e.alert.msg)};var d=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),d=Object(o.a)(c,2),u=d[0],g=d[1],b=function(e,t){g({msg:e,type:t}),setTimeout(function(){g(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:a,toggleMode:function(e){document.body.classList.remove("bg-light"),document.body.classList.remove("bg-dark"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-warning"),document.body.classList.remove("bg-success"),document.body.classList.add("bg-"+e),"light"===a?(r("dark"),document.body.style.backgroundColor="grey",b("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",b("Light mode has been enabled","sucess"))}}),l.a.createElement(i,{alert:u}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:b,heading:"Enter the text",mode:a})))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null))),u()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.0a04319e.chunk.js.map