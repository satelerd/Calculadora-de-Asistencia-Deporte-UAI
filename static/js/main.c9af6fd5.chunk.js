(this["webpackJsonpcalc-asist-deporte"]=this["webpackJsonpcalc-asist-deporte"]||[]).push([[0],[,,,,,,,,,function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),a=t(4),i=t.n(a),r=(t(9),t(2)),j=(t(10),t(0));var d=function(e){var s=e.onClick;return Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:s,children:"Calcular"})})};t(12);var l=function(e,s){for(var t=Number(e),c=Number(s),n=new Date,a=n.getDate(),i=n.getMonth()+1,r={enero:21,febrero:20,marzo:23,abril:22,mayo:21,junio:22,julio:9},d=26-t,l=1,o=0,b=Object.keys(r);o<b.length;o++){var u=b[o];if(i>l)l+=1;else if(l!==i)r[u];else{if(l++,r[u]-a<0)continue;r[u]-a}}var O=Object.keys(r).length-l+1,h=8*O+(8-c);return t>26||t<0||isNaN(t)?Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"ERROR"})," ",Object(j.jsx)("br",{}),"Debes ingresar un numero ",Object(j.jsx)("span",{children:"entre 0 y 26"})," en la caja de asistencias ",Object(j.jsx)("span",{children:"este semestre"})," (lee los requisitos)."]})}):c>8||c<0||isNaN(c)?Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"ERROR"})," ",Object(j.jsx)("br",{}),"Debes ingresar un numero entre ",Object(j.jsx)("span",{children:"0 y 8"})," en la caja de asistencias ",Object(j.jsx)("span",{children:"este mes"})," (lee los requisitos)."]})}):t<c?Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"ERROR"})," ",Object(j.jsx)("br",{}),"Revisa tus datos, tus ",Object(j.jsx)("span",{children:"asistencias"})," totales ",Object(j.jsx)("span",{children:"debe ser mayor"})," o igual a tus asistencias ",Object(j.jsx)("span",{children:"este mes"})]})}):h>=d?0===d?Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["\xa1\xa1FELICIDADES!!",Object(j.jsx)("br",{}),"Ya pasate el ramo \ud83d\udcaa\ud83c\udffd"]})}):8===c?Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Aun tienes tiempo \ud83d\ude05",Object(j.jsx)("br",{}),"Debes tomar ",Object(j.jsxs)("span",{children:[d," asistencias"]}),", y seg\xfan los requisitos, te quedan ",Object(j.jsxs)("span",{children:[h," posibles asistencias"]})," dentro de los pr\xf3ximos ",O," meses que quedan para poder pasar el ramo."]})}):Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Aun tienes tiempo \ud83d\ude05",Object(j.jsx)("br",{}),"Debes tomar ",Object(j.jsxs)("span",{children:[d," asistencias"]}),", y seg\xfan los requisitos, te quedan ",Object(j.jsxs)("span",{children:[h," posibles asistencias"]})," dentro de este y los pr\xf3ximos ",O," meses que quedan para poder pasar el ramo."]})}):Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:["Lamento informarte que estas pa la cagada \ud83d\ude2c",Object(j.jsx)("br",{}),"Debes tomar ",Object(j.jsxs)("span",{children:[d," asistencias"]}),", y seg\xfan los requisitos, solo quedan ",Object(j.jsxs)("span",{children:[h," posibles asistencias"]})," dentro de este y los pr\xf3ximos ",O," meses... F en el chat",Object(j.jsx)("br",{}),"Partiste a enviarle un dm a ",Object(j.jsx)("a",{href:"https://www.instagram.com/uai_deportestgo/",children:"@uai_deportestgo"})]})})};t(13);var o=function(e){var s=e.title,t=e.body,c=e.space;return Object(j.jsx)("div",{className:"card border-dark shadow",children:Object(j.jsxs)("div",{className:"card-body text-center",children:[Object(j.jsx)("div",{className:"card-title",children:s}),Object(j.jsxs)("div",{className:"card-text",children:[t,c]})]})})};t(14);var b=function(e){var s=e.info;return Object(j.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)(o,{title:s[0].title,body:s[0].body})},s[0].id),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)(o,{title:s[1].title,body:s[1].body})},s[1].id)]})};var u=function(){var e=Object(c.useState)(),s=Object(r.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(),i=Object(r.a)(a,2),u=i[0],O=i[1],h=[{id:1,title:Object(j.jsx)("h5",{children:"\xbfCuantas asistencias de deportes llevas este semestre?"}),body:Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"number",className:"w-50",onChange:function(e){return n(e.target.value)}})})},{id:2,title:Object(j.jsx)("h5",{children:"\xbfCuantas asistencias de deportes llevas este mes?"}),body:Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"number",className:"w-50",onChange:function(e){return O(e.target.value)}})})}],x=Object(c.useState)(),p=Object(r.a)(x,2),m=p[0],v=p[1],y=[{id:1,title:Object(j.jsx)("h4",{children:"Resultado"}),body:m},{id:2,title:Object(j.jsx)("h4",{children:"Requisitos para aprobar deporte"}),body:"Para aprobar deportes se necesitan cumplir con 26 asistencias, contabilizando solo 1 asistencia diaria y 8 asistencias por mes. El plazo para cumplir las asistencias es hasta el 13 de julio."}];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Calculadora de Asistencias Deportes UAI"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"requisitos-card container",children:Object(j.jsx)(o,{title:y[1].title,body:y[1].body})}),Object(j.jsx)("div",{className:"input-cards",children:Object(j.jsx)(b,{info:h})}),Object(j.jsx)("div",{className:"boton d-flex justify-content-center",children:Object(j.jsx)(d,{onClick:function(){v(l(t,u))},children:"Calcular"})}),Object(j.jsx)("div",{className:"resultados-card container",children:Object(j.jsx)(o,{title:y[0].title,body:y[0].body})}),Object(j.jsx)("div",{children:Object(j.jsxs)("h6",{children:["Si tienes dudas/ideas o encuentras un error me puedes enviar un dm ",Object(j.jsx)("span",{children:"\ud83d\ude4c\ud83c\udffc"}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"https://www.instagram.com/sateler/",children:"@sateler"})]})})]})]})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,a=s.getLCP,i=s.getTTFB;t(e),c(e),n(e),a(e),i(e)}))};t(15);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),O()}],[[16,1,2]]]);
//# sourceMappingURL=main.c9af6fd5.chunk.js.map