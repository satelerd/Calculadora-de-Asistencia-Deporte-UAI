(this["webpackJsonpcalc-asist-deporte"]=this["webpackJsonpcalc-asist-deporte"]||[]).push([[0],[,,,,,,,,,function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){"use strict";t.r(s);var n=t(1),c=t.n(n),i=t(4),a=t.n(i),r=(t(9),t(2)),d=(t(10),t(0));var j=function(e){var s=e.onClick;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:s,children:"Calcular"})})};t(12);var l=function(e,s){for(var t=Number(e),n=Number(s),c=new Date,i=c.getDate(),a=c.getMonth()+1,r={enero:21,febrero:20,marzo:23,abril:22,mayo:21,junio:22,julio:9},j=26-t,l=1,o=0,b=Object.keys(r);o<b.length;o++){var u=b[o];if(a>l)l+=1;else if(l!==a)r[u];else{if(l++,r[u]-i<0)continue;r[u]-i}}var h=Object.keys(r).length-l+1,p=8*h+(8-n);return t>26||t<0||isNaN(t)?Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"ERROR"})," ",Object(d.jsx)("br",{}),"Debes ingresar un numero ",Object(d.jsx)("span",{children:"entre 0 y 26"})," en la caja de asistencias ",Object(d.jsx)("span",{children:"este semestre"})," (lee los requisitos)."]})}):n>8||n<0||isNaN(n)?Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"ERROR"})," ",Object(d.jsx)("br",{}),"Debes ingresar un numero entre ",Object(d.jsx)("span",{children:"0 y 8"})," en la caja de asistencias ",Object(d.jsx)("span",{children:"este mes"})," (lee los requisitos)."]})}):t<n?Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"ERROR"})," ",Object(d.jsx)("br",{}),"Revisa tus datos, tus ",Object(d.jsx)("span",{children:"asistencias"})," totales ",Object(d.jsx)("span",{children:"debe ser mayor"})," o igual a tus asistencias ",Object(d.jsx)("span",{children:"este mes"})]})}):p>=j?0===j?Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:["\xa1\xa1FELICIDADES!!",Object(d.jsx)("br",{}),"Ya pasate el ramo \ud83d\udcaa\ud83c\udffd"]})}):8===n?Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:["Aun tienes tiempo \ud83d\ude05",Object(d.jsx)("br",{}),"Debes tomar ",Object(d.jsxs)("span",{children:[j," asistencias"]}),", y seg\xfan los requisitos, te quedan ",Object(d.jsxs)("span",{children:[p," posibles asistencias"]})," dentro de los pr\xf3ximos ",h," meses que quedan para poder pasar el ramo."]})}):Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:["Aun tienes tiempo \ud83d\ude05",Object(d.jsx)("br",{}),"Debes tomar ",Object(d.jsxs)("span",{children:[j," asistencias"]}),", y seg\xfan los requisitos, te quedan ",Object(d.jsxs)("span",{children:[p," posibles asistencias"]})," dentro de este y los pr\xf3ximos ",h," meses que quedan para poder pasar el ramo."]})}):Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:["Lamento informarte que estas pa la cagada \ud83d\ude2c",Object(d.jsx)("br",{}),"Debes tomar ",Object(d.jsxs)("span",{children:[j," asistencias"]}),", y seg\xfan los requisitos, solo quedan ",Object(d.jsxs)("span",{children:[p," posibles asistencias"]})," dentro de este y los pr\xf3ximos ",h," meses... F en el chat",Object(d.jsx)("br",{}),"Partiste a enviarle un dm a ",Object(d.jsx)("a",{href:"https://www.instagram.com/uai_deportestgo/",children:"@uai_deportestgo"})]})})};t(13);var o=function(e){var s=e.title,t=e.body,n=e.space;return Object(d.jsx)("div",{className:"card border-dark shadow",children:Object(d.jsxs)("div",{className:"card-body text-center",children:[Object(d.jsx)("div",{className:"card-title",children:s}),Object(d.jsxs)("div",{className:"card-text",children:[t,n]})]})})};t(14);var b=function(e){var s=e.info;return Object(d.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(d.jsx)("div",{className:"col",children:Object(d.jsx)(o,{title:s[0].title,body:s[0].body})},s[0].id),Object(d.jsx)("div",{className:"col",children:Object(d.jsx)(o,{title:s[1].title,body:s[1].body})},s[1].id)]})},u=new XMLHttpRequest;u.open("GET","https://api.countapi.xyz/hit/satelerd.github.ioCalculadora-de-Asistencia-Deporte-UAI/visitas"),u.responseType="json",u.send();var h=function(){var e=Object(n.useState)(),s=Object(r.a)(e,2),t=s[0],c=s[1],i=Object(n.useState)(),a=Object(r.a)(i,2),u=a[0],h=a[1],p=[{id:1,title:Object(d.jsx)("h5",{children:"\xbfCuantas asistencias de deportes llevas este semestre?"}),body:Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"number",className:"w-50",onChange:function(e){return c(e.target.value)}})})},{id:2,title:Object(d.jsx)("h5",{children:"\xbfCuantas asistencias de deportes llevas este mes?"}),body:Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"number",className:"w-50",onChange:function(e){return h(e.target.value)}})})}],O=Object(n.useState)(),x=Object(r.a)(O,2),m=x[0],v=x[1],y=[{id:1,title:Object(d.jsx)("h4",{children:"Resultado"}),body:m},{id:2,title:Object(d.jsx)("h4",{children:"Requisitos para aprobar deporte"}),body:"Para aprobar deportes se necesitan cumplir con 26 asistencias, contabilizando solo 1 asistencia diaria y 8 asistencias por mes. El plazo para cumplir las asistencias es hasta el 13 de julio."}];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Calculadora de Asistencias Deportes UAI"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"requisitos-card container",children:Object(d.jsx)(o,{title:y[1].title,body:y[1].body})}),Object(d.jsx)("div",{className:"input-cards",children:Object(d.jsx)(b,{info:p})}),Object(d.jsx)("div",{className:"boton d-flex justify-content-center",children:Object(d.jsx)(j,{onClick:function(){!function(){v(l(t,u));var e=new XMLHttpRequest;e.open("GET","https://api.countapi.xyz/hit/satelerd.github.ioCalculadora-de-Asistencia-Deporte-UAI/boton"),e.responseType="json",e.send()}()},children:"Calcular"})}),Object(d.jsx)("div",{className:"resultados-card container",children:Object(d.jsx)(o,{title:y[0].title,body:y[0].body})}),Object(d.jsx)("div",{children:Object(d.jsxs)("h6",{children:["Si tienes dudas/ideas o encuentras un error me puedes enviar un dm ",Object(d.jsx)("span",{children:"\ud83d\ude4c\ud83c\udffc"}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://www.instagram.com/sateler/",children:"@sateler"})]})})]})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(s){var t=s.getCLS,n=s.getFID,c=s.getFCP,i=s.getLCP,a=s.getTTFB;t(e),n(e),c(e),i(e),a(e)}))};t(15);a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),p()}],[[16,1,2]]]);
//# sourceMappingURL=main.5bfe9ec9.chunk.js.map