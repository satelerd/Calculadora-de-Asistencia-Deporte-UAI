(this["webpackJsonpcalc-asist-deporte"]=this["webpackJsonpcalc-asist-deporte"]||[]).push([[0],[,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(4),n=s.n(i),r=(s(9),s(2)),l=(s(10),s(0));var d=function(e){var t=e.onClick;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:t,children:"Calcular"})})};s(12);var o=function(e,t){for(var s=e,c=t,a=new Date,i=a.getDate(),n=a.getMonth()+1,r={enero:21,febrero:20,marzo:23,abril:22,mayo:21,junio:22,julio:9},d=26-s,o=1,j=0,b=Object.keys(r);j<b.length;j++){var u=b[j];if(n>o)o+=1;else if(o!==n)r[u];else{if(o++,r[u]-i<0)continue;r[u]-i}}var h=Object.keys(r).length-o+1,O=8*h+(8-c);return O>=d?Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Aun tienes tiempo \ud83d\ude05 ",Object(l.jsx)("br",{}),"Debes tomar ",Object(l.jsxs)("span",{children:[d," asistencias"]}),", y seg\xfan los requisitos, te quedan ",Object(l.jsxs)("span",{children:[O," posibles asistencias"]})," dentro de este y los pr\xf3ximos ",h," meses que quedan para poder pasar el ramo."]})}):"Lamento informarte que estas pa la cagada... Necesitas hacer "+d+" asistencias en tan solo "+O+" asistencias posibles :("};s(13);var j=function(e){var t=e.title,s=e.body,c=e.space;return Object(l.jsx)("div",{className:"card border-dark shadow",children:Object(l.jsxs)("div",{className:"card-body text-center",children:[Object(l.jsx)("div",{className:"card-title",children:t}),Object(l.jsxs)("div",{className:"card-text",children:[s,c]})]})})};s(14);var b=function(e){var t=e.info;return Object(l.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(j,{title:t[0].title,body:t[0].body})},t[0].id),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(j,{title:t[1].title,body:t[1].body})},t[1].id)]})};var u=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(0),n=Object(r.a)(i,2),u=n[0],h=n[1],O=[{id:1,title:Object(l.jsx)("h5",{children:"\xbfCuantas asistencias de deportes llevas este semestre?"}),body:Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"number",className:"w-50",onChange:function(e){return a(e.target.value)}})})},{id:2,title:Object(l.jsx)("h5",{children:"\xbfCuantas asistencias de deportes llevas este mes?"}),body:Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"number",className:"w-50",onChange:function(e){return h(e.target.value)}})})}],x=Object(c.useState)(),p=Object(r.a)(x,2),v=p[0],m=p[1],f=[{id:1,title:Object(l.jsx)("h4",{children:"Resultado"}),body:v},{id:2,title:Object(l.jsx)("h4",{children:"Requisitos para aprobar deporte"}),body:"Para aprovar deportes se necesitan cumplir con 26 asistencias, contabilizando solo 1 asistencia diaria y 8 asistencias por mes. El plazo para cumplir las asistencias es hasta el 13 de julio."}];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Calculadora de Asistencias Deportes UAI"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"requisitos-card container",children:Object(l.jsx)(j,{title:f[1].title,body:f[1].body})}),Object(l.jsx)("div",{className:"input-cards",children:Object(l.jsx)(b,{info:O})}),Object(l.jsx)("div",{className:"boton d-flex justify-content-center",children:Object(l.jsx)(d,{onClick:function(){m(o(s,u))},children:"Calcular"})}),Object(l.jsx)("div",{className:"resultados-card container",children:Object(l.jsx)(j,{title:f[0].title,body:f[0].body})})]})]})},h=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};s(15);n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.ffe22cce.chunk.js.map