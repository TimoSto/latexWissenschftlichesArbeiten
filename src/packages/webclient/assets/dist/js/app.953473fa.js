(function(){"use strict";var e={3727:function(e,t,n){var i=n(144),r=n(998),o=n(6232),a=n(5550),s=n(6190),c=n(720),E=n(4324),T=n(5808),d=n(4525),l=n(8251),u=n(3059),_=n(5554),p=n(7423),f=n(3687),h=n(7953),y=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(r.Z,[t(o.Z,{attrs:{app:"",color:"primary",dark:"","clipped-left":"",elevation:"0",fixed:"","scroll-target":"main"}},[t(a.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(h.qW,[e._v("ThesorTeX")]),t(f.Z),e.typeEditorOpen||e.entryEditorOpen?t(s.Z,{staticStyle:{"font-size":"20px"},attrs:{icon:"",title:e.splitBtnContent[1]},on:{click:e.toggleTwoThirds}},[t("span",{domProps:{innerHTML:e._s(e.splitBtnContent[0])}})]):e._e(),t(s.Z,{attrs:{icon:"",title:"Design wechseln"},on:{click:e.toggleDark}},[t(E.Z,[e._v("mdi-brightness-6")])],1),t(s.Z,{attrs:{icon:"",to:"/",title:"Startseite"}},[t(E.Z,[e._v("mdi-home")])],1)],1),t(_.Z,{attrs:{app:"",permanent:"","mini-variant":e.drawer,clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(o.Z,{attrs:{elevation:"0",color:"background"}},[e.drawer?e._e():t(h.qW,[e._v("Projekte")]),e.drawer?e._e():t(f.Z),t(s.Z,{attrs:{icon:"",to:"/new",title:"Neues Projekt erstellen"},on:{click:e.CloseEditors}},[t(E.Z,[e._v("mdi-plus")])],1)],1),t(p.Z,{staticStyle:{"overflow-y":"auto",height:"calc(100vh - 130px)",padding:"0"},attrs:{id:"scrollsidebar"}},[t(T.Z,e._l(e.projects,(function(n){return t(d.Z,{key:n,attrs:{to:"/project/"+n}},[t(l.V9,{domProps:{textContent:e._s(n)}})],1)})),1)],1)],1),t(u.Z,{attrs:{"fill-height":"",id:"main","pt-0":""}},[t(c.Z,[t("router-view")],1)],1)],1)},P=[],m=n(7462),S=i.ZP.extend({name:"App",data:()=>({drawer:!1}),methods:{toggleDark(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},toggleTwoThirds(){this.$store.commit(m.N.TOGGLE_TWO_THIRDS)},CloseEditors(){this.$store.commit(m.N.SET_TYPE_TO_EDIT,""),this.$store.commit(m.N.SET_ENTRY_TO_EDIT,"")}},created(){document.documentElement.setAttribute("lang","de"),this.$store.dispatch("GET_PROJECTS")},computed:{projects:function(){return this.$vStore.state.projects},dark(){return this.$vuetify.theme.dark},splitBtnContent(){return this.$store.state.twoThirdsActive?["&#189;","Wechsel zu 50:50-Layout"]:["&#8532;","Wechsel zu 70:30-Layout"]},typeEditorOpen(){return!!this.$store.state.typeToEdit.Name||""==this.$store.state.typeToEdit.Name},entryEditorOpen(){return!!this.$store.state.entryToEdit.Key||""==this.$store.state.entryToEdit.Key}},watch:{dark(e){e?document.head.insertAdjacentHTML("beforeend",'<style id="dark">:root{color-scheme: dark;}</style>'):document.getElementById("dark")?.remove()}}}),g=S,R=n(1001),b=(0,R.Z)(g,y,P,!1,null,"2dd2c01f",null),v=b.exports,N=n(8345),O=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e._m(0),t(T.Z,{attrs:{"two-line":""}},e._l(e.packages,(function(n,i){return t(d.Z,{key:i},[t(l.km,[t(l.V9,[e._v(" "+e._s(n[0])+" ")]),t(l.oZ,[e._v(" "+e._s(n[1])+" ")])],1)],1)})),1),t("div",{staticClass:"text-container"},[t("p",[e._v("Um Literatur-Einträge in einem Projekt zu erstellen, musst du das Projekt bearbeiten. Dann erscheint ein Bereich, in dem du Literatureinträge hinzufügen, löschen oder bearbeiten kannst.")]),t("p",[e._v("Wenn du noch Fragen hast, schau doch unter der Hilfe "),t(E.Z,[e._v("mdi-help-circle-outline")]),e._v(" oder in der "),t("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/pdf/documentation"}},[e._v("Dokumentation "),t(E.Z,{attrs:{color:"primary"}},[e._v("mdi-book-open-blank-variant")])],1),e._v(" nach.")],1),t("p",[e._v("Als Sahnehäubchen beinhaltet dieses Tool auch eine Vorlage, für einen schön "),t("router-link",{attrs:{to:"/pdf/cv"}},[e._v("gestylten Lebenslauf")]),e._v(". Um diese herunterzuladen, klicke "),t("a",{attrs:{href:"/cv?type=tex",download:"CVTemplate.tex"}},[e._v("hier")]),e._v(".")],1)])],1)},w=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"text-container",attrs:{id:"head"}},[t("p",[e._v("Mit dieser Anwendung kannst du das Erstellen von wissenschaftlichen Arbeiten mit LaTeX vereinfachen und managen. Im linken Bereich sind alle deine Projekte aufgelistet. Dort kannst du sie zur Bearbeitung auswählen oder löschen. Du kannst den Bereich über den Button oben links öffnen oder schließen. In einem solchen Projekt wird eine TeX-Datei generiert, inklusive von Style-Definitionen. Diese Style-Integrationen umfassen folgende Bereiche:")])])}],A=i.ZP.extend({name:"Welcome-View",components:{},data:()=>({packages:[["Überschriften","PFAD_ZUM_PROJECT/styPackages/ueberschriften.sty"],["Inhaltsverzeichnis","PFAD_ZUM_PROJECT/styPackages/inhaltverzeichnis.sty"],["Header/Footer","PFAD_ZUM_PROJECT/styPackages/header_footer.sty"],["Abkürzungsverzeichnis","PFAD_ZUM_PROJECT/styPackages/abk_verzeichnis.sty"],["Literaturverzeichnis/Zitate","PFAD_ZUM_PROJECT/styPackages/literatur.sty"],["Anhang","PFAD_ZUM_PROJECT/styPackages/anhang.sty"],["Codes","PFAD_ZUM_PROJECT/styPackages/codes.sty"],["HTML/CSS/JAVASCRIPT/JSON","PFAD_ZUM_PROJECT/styPackages/html.sty"]]}),methods:{}}),C=A,k=(0,R.Z)(C,O,w,!1,null,"a77ac1d2",null),D=k.exports;i.ZP.use(N.Z);const B=[{path:"/",name:"welcome",component:D},{path:"/pdf/*",name:"pdf",component:()=>n.e(443).then(n.bind(n,1535))},{path:"/project/*",name:"project",component:()=>n.e(443).then(n.bind(n,1434))},{path:"/new",name:"new",component:()=>n.e(443).then(n.bind(n,633))}],I=new N.Z({mode:"hash",routes:B});var L=I,j=n(629);const M={project:"",projects:[],bibTypes:[],bibEntries:[],typeToEdit:{},initialType:{},entryToEdit:{},initialEntry:{},twoThirdsActive:!1,errorMessage:"",snackbarMessage:"",dragNDropResp:{Message:"",Entries:[],Valid:!1,Unknown:[],Empty:[]}},F={dummy:()=>"test"};function Z(e){let t="";return e.forEach((e=>{switch(t+=e.Prefix,e.Style){case"italic":t+="<i>";break;case"bold":t+="<b>";break}switch(t+=e.Field,e.Style){case"italic":t+="</i>";break;case"bold":t+="</b>";break}t+=e.Suffix})),t}function x(e,t,n){let i="";e.forEach(((e,t)=>{switch(i+=e.Prefix,e.Style){case"italic":i+="<i>";break;case"bold":i+="<b>";break}switch(i+=n[t]?n[t]:"",e.Style){case"italic":i+="</i>";break;case"bold":i+="</b>";break}i+=e.Suffix}));let r="";const o=e.map((e=>e.Field));let a=0;return t.forEach(((t,i)=>{switch(r+=t.Prefix,t.Style){case"italic":r+="<i>";break;case"bold":r+="<b>";break}const s=o.indexOf(t.Field);switch(s>=0?(r+=n[s]?n[s]:"",a++):r+=n[e.length+i-a]?n[e.length+i-a]:"",t.Style){case"italic":r+="</i>";break;case"bold":r+="</b>";break}r+=t.Suffix}))," "===r.charAt(r.length-1)&&(r+="S. x"),[i,r]}const Y={[m.N.SET_PROJECT](e,t){e.project=t,e.typeToEdit={}},[m.N.SET_PROJECTS](e,t){e.projects=t},[m.N.SET_BIBTYPES](e,t){e.bibTypes=t},[m.N.SET_BIBENTRIES](e,t){e.bibEntries=t},[m.N.UPDATE_MODEL_FOR_TYPE](e){e.typeToEdit.Model=Z(e.typeToEdit.Fields)},[m.N.UPDATE_CITE_MODEL_FOR_TYPE](e){e.typeToEdit.CiteModel=Z(e.typeToEdit.CiteFields)},[m.N.SET_TYPE_TO_EDIT](e,t){0==t.length?(e.typeToEdit={},e.initialType={}):(e.entryToEdit={},e.initialEntry={},e.bibTypes.forEach((n=>{n.Name===t&&(e.typeToEdit=JSON.parse(JSON.stringify(n)),e.initialType=JSON.parse(JSON.stringify(n)))})))},[m.N.RM_BIB_ATTR](e,t){e.typeToEdit.Fields.splice(t,1)},[m.N.RM_CITE_ATTR](e,t){e.typeToEdit.CiteFields.splice(t,1)},[m.N.ADD_BIB_ATTR](e){e.typeToEdit.Fields.push({Field:"",Style:"normal",Prefix:"",Suffix:""})},[m.N.ADD_CITE_ATTR](e){e.typeToEdit.CiteFields.push({Field:"",Style:"normal",Prefix:"",Suffix:""})},[m.N.NEW_TYPE](e){e.typeToEdit={Name:"",Fields:[],CiteFields:[]}},[m.N.CLEANUP_FIELDS](e){const t=[];e.typeToEdit.Fields.forEach(((e,n)=>{0===e.Field.length&&t.push(n)}));for(let i=0;i<t.length;i++)e.typeToEdit.Fields.splice(t[i]-i,1);const n=[];e.typeToEdit.CiteFields.forEach(((e,t)=>{0===e.Field.length&&n.push(t)}));for(let i=0;i<n.length;i++)e.typeToEdit.CiteFields.splice(n[i]-i,1)},[m.N.TOGGLE_TWO_THIRDS](e){e.twoThirdsActive=!e.twoThirdsActive},[m.N.SET_ENTRY_TO_EDIT](e,t){0==t.length?(e.entryToEdit={},e.initialEntry={}):(e.typeToEdit={},e.initialType={},e.bibEntries.forEach((n=>{n.Key===t&&(e.entryToEdit=JSON.parse(JSON.stringify(n)),e.initialEntry=JSON.parse(JSON.stringify(n)),e.initialEntry.BibPreview="",e.initialEntry.CitePreview="")})))},[m.N.UPDATE_PREVIEW](e){e.bibTypes.forEach((t=>{if(t.Name===e.entryToEdit.Typ){const n=x(t.Fields,t.CiteFields,e.entryToEdit.Fields);e.entryToEdit.BibPreview=n[0],e.entryToEdit.CitePreview=n[1]}}))},[m.N.NEW_ENTRY](e){e.entryToEdit={Key:"",Typ:"",Fields:[],BibPreview:"",CitePreview:"",CiteNumber:0},e.initialEntry={Key:"",Typ:"",Fields:[],BibPreview:"",CitePreview:"",CiteNumber:0}},[m.N.CLEAR_ERROR](e){e.errorMessage=""},[m.N.SET_SNACKBAR](e,t){e.snackbarMessage=t},[m.N.SET_DRAG_N_DROP_RESULT](e,t){e.dragNDropResp=t,e.errorMessage=t.Valid?"":t.Message}};var J=n(2606);async function U(){const e=await fetch("/getProjects");if(!e.ok)return[];const t=await e.json();return t}async function G(e){const t=await fetch("/getBibTypes?project="+e);if(!t.ok)return[];const n=await t.json();return n.Types.forEach((e=>{e.Model=Z(e.Fields),e.CiteModel=Z(e.CiteFields)})),n.Types}async function V(e){const t=await fetch("/getBibEntries?project="+e);return t.ok?await t.json():[]}async function $(e){const t=await fetch("/createProject",{method:"POST",body:JSON.stringify({Name:e})});return!!t.ok}async function z(e){const t=await fetch("/deleteProject?project="+e);return t.ok}async function K(e){return await fetch("/saveType",{method:"POST",body:e})}async function W(e){return await fetch("/saveEntry",{method:"POST",body:e})}async function H(e,t){const n=await fetch(`/deleteType?project=${e}&type=${t}`,{method:"POST"});return n.ok}async function q(e,t){const n=await fetch(`/deleteEntry?project=${e}&entry=${t}`);return n.ok}const X=[{regex:new RegExp("(?<=Entry with key )(.*)(?= already exists. Delete the old one or rename the new one.)"),german:"Es existiert bereits ein Literatureintrag mit der ID <VALUE>. Lösche den existierenden oder benennen diesen Eintrag anders."},{regex:new RegExp("(?<=Type with name )(.*)(?= already exists. Delete the old one or rename the new one.)"),german:"Es existiert bereits ein Literaturtyp mit der Bezeichnung <VALUE>. Lösche den existierenden oder benennen diesen Literaturtyp anders."},{regex:new RegExp("(?<=Created Backup at )(.*)"),german:"Backup erfolgreich erstellt: <i><VALUE></i>"}];function Q(e){let t=e;return X.forEach((n=>{const i=e.match(n.regex);console.log(i),i&&i.length>0&&(t=n.german.replaceAll("<VALUE>",i[0]))})),t}async function ee(e){return await fetch("/backup?project="+e,{method:"POST"})}async function te(e){return await fetch("/refreshTypes?project="+e,{method:"POST"})}async function ne(e){return await fetch("/setDefault?project="+e,{method:"POST"})}async function ie(e){return await fetch("/citeCleanup?project="+e,{method:"POST"})}async function re(e,t){const n={Project:t,Entries:[]};return e.forEach((e=>{const t={Key:e.Key,Typ:e.Typ,ValuePairs:e.ValuePairs};n.Entries.push(t)})),window.fetch("/uploadEntries",{method:"POST",body:JSON.stringify(n)})}const oe={async[J.M.GET_PROJECTS]({commit:e}){const t=await U();e(m.N.SET_PROJECTS,t)},async[J.M.GET_BIBTYPES]({commit:e}){const t=await G(this.state.project);e(m.N.SET_BIBTYPES,t),M.typeToEdit&&e(m.N.SET_TYPE_TO_EDIT,M.typeToEdit.Name?M.typeToEdit.Name:"")},async[J.M.GET_BIBENTRIES]({commit:e}){const t=await V(this.state.project);e(m.N.SET_BIBENTRIES,t)},async[J.M.CREATE_PROJECT]({commit:e,dispatch:t},n){const i=await $(n);i&&(t(J.M.GET_PROJECTS),e(m.N.SET_PROJECT,n),await L.push("/project/"+n))},async[J.M.DELETE_PROJECT]({dispatch:e},t){const n=await z(t);n&&(e(J.M.GET_PROJECTS),await L.push("/"))},async[J.M.SAVE_TYPE]({dispatch:e},t){const n=await K(t);if(n.ok)e(J.M.GET_BIBTYPES),M.initialType=JSON.parse(JSON.stringify(M.typeToEdit));else{const e=await n.text();M.errorMessage=Q(e)}},async[J.M.SAVE_ENTRY]({dispatch:e},t){const n=await W(t);if(n.ok)e(J.M.GET_BIBENTRIES),M.initialEntry=JSON.parse(JSON.stringify(M.entryToEdit)),M.initialEntry.BibPreview="",M.initialEntry.CitePreview="";else{const e=await n.text();M.errorMessage=Q(e)}},async[J.M.DELETE_TYPE]({commit:e,dispatch:t},n){const i=await H(n.project,n.name);i&&(t(J.M.GET_BIBTYPES),e(m.N.SET_TYPE_TO_EDIT,""))},async[J.M.DELETE_ENTRY]({commit:e,dispatch:t},n){const i=await q(n.project,n.key);i&&(t(J.M.GET_BIBENTRIES),e(m.N.SET_ENTRY_TO_EDIT,""))},async[J.M.BACKUP_PROJECT]({commit:e}){const t=await ee(M.project);if(t.ok){const n=await t.text();e(m.N.SET_SNACKBAR,Q(n))}},async[J.M.REFRESH_TYPES]({commit:e,dispatch:t}){const n=await te(M.project);n.ok&&(t(J.M.GET_BIBTYPES),e(m.N.SET_SNACKBAR,`Die Standard-Literaturtypen für das Projekt '${M.project}' wurden auf den Standard zurückgesetzt.`))},async[J.M.SET_DEFAULT]({commit:e}){const t=await ne(M.project);t.ok&&e(m.N.SET_SNACKBAR,`Der jetzige Stand der Literaturtypen im Projekt '${M.project}' wird von nun an als Standard verwendet.`)},async[J.M.CLEANUP_CITES]({commit:e}){const t=await ie(M.project);t.ok&&e(m.N.SET_SNACKBAR,`Das Literaturverzeichnis des Projektes '${M.project}' enthält nun nurnoch die zum jetzigen Zeitpunkt zitierten Einträge.`)},async[J.M.UPLOAD_DROPPED]({commit:e,dispatch:t}){const n=await re(M.dragNDropResp.Entries,M.project);n.ok&&(e(m.N.SET_SNACKBAR,"Literatureinträge erfolgreich hinzugefügt."),e(m.N.SET_DRAG_N_DROP_RESULT,{Valid:!1,Entries:[],Message:""}),t(J.M.GET_BIBENTRIES))}},ae={install(e){Object.defineProperty(e.prototype,"$vStore",{get(){return this.$store}})}};i.ZP.use(j.ZP),i.ZP.use(ae);var se=new j.ZP.Store({state:M,getters:F,mutations:Y,actions:oe}),ce=n(1705),Ee=n(2638);i.ZP.use(ce.Z);var Te=new ce.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#009835",secondary:"#52634f",accent:Ee.Z.shades.black,error:"#ba1a1a",background:"#FFFFFF"},dark:{primary:"#2acc4a",secondary:"#b9ccb4",accent:Ee.Z.shades.white,error:"#CF6679",background:"#333333"}}},icons:{iconfont:"mdi"}});i.ZP.config.productionTip=!1,new i.ZP({router:L,store:se,vuetify:Te,render:e=>e(v)}).$mount("#app")},2606:function(e,t,n){var i;n.d(t,{M:function(){return i}}),function(e){e["GET_PROJECTS"]="GET_PROJECTS",e["GET_BIBTYPES"]="GET_BIBTYPES",e["GET_BIBENTRIES"]="GET_BIBENTRIES",e["CREATE_PROJECT"]="CREATE_PROJECT",e["DELETE_PROJECT"]="DELETE_PROJECT",e["SAVE_TYPE"]="SAVE_TYPE",e["SAVE_ENTRY"]="SAVE_ENTRY",e["DELETE_TYPE"]="DELETE_TYPE",e["DELETE_ENTRY"]="DELETE_ENTRY",e["BACKUP_PROJECT"]="BACKUP_PROJECT",e["REFRESH_TYPES"]="REFRESH_TYPES",e["SET_DEFAULT"]="SET_DEFAULT",e["CLEANUP_CITES"]="CLEANUP_CITES",e["UPLOAD_DROPPED"]="UPLOAD_DROPPED"}(i||(i={}))},7462:function(e,t,n){var i;n.d(t,{N:function(){return i}}),function(e){e["SET_PROJECT"]="SET_PROJECT",e["SET_PROJECTS"]="SET_PROJECTS",e["SET_BIBTYPES"]="SET_BIBTYPES",e["SET_BIBENTRIES"]="SET_BIBENTRIES",e["SET_TYPE_TO_EDIT"]="SET_TYPE_TO_EDIT",e["UPDATE_MODEL_FOR_TYPE"]="UPDATE_MODEL_FOR_TYPE",e["UPDATE_CITE_MODEL_FOR_TYPE"]="UPDATE_CITE_MODEL_FOR_TYPE",e["RM_BIB_ATTR"]="RM_BIB_ATTR",e["RM_CITE_ATTR"]="RM_CITE_ATTR",e["ADD_BIB_ATTR"]="ADD_BIB_ATTR",e["ADD_CITE_ATTR"]="ADD_CITE_ATTR",e["NEW_TYPE"]="NEW_TYPE",e["CLEANUP_FIELDS"]="CLEANUP_FIELDS",e["TOGGLE_TWO_THIRDS"]="TOGGLE_TWO_THIRDS",e["SET_ENTRY_TO_EDIT"]="SET_ENTRY_TO_EDIT",e["UPDATE_PREVIEW"]="UPDATE_PREVIEW",e["NEW_ENTRY"]="NEW_ENTRY",e["CLEAR_ERROR"]="CLEAR_ERROR",e["SET_SNACKBAR"]="SET_SNACKBAR",e["SET_DRAG_N_DROP_RESULT"]="SET_DRAG_N_DROP_RESULT"}(i||(i={}))}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,o){if(!i){var a=1/0;for(T=0;T<e.length;T++){i=e[T][0],r=e[T][1],o=e[T][2];for(var s=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(T--,1);var E=r();void 0!==E&&(t=E)}}return t}o=o||0;for(var T=e.length;T>0&&e[T-1][2]>o;T--)e[T]=e[T-1];e[T]=[i,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.bc6dc38c.js"}}(),function(){n.miniCssF=function(e){return"css/about.a2088f33.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="webclient:";n.l=function(i,r,o,a){if(e[i])e[i].push(r);else{var s,c;if(void 0!==o)for(var E=document.getElementsByTagName("script"),T=0;T<E.length;T++){var d=E[T];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=i),e[i]=[r];var l=function(t,n){s.onerror=s.onload=null,clearTimeout(u);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){r=a[i],o=r.getAttribute("data-href");if(o===e||o===t)return r}},i=function(i){return new Promise((function(r,o){var a=n.miniCssF(i),s=n.p+a;if(t(a,s))return r();e(i,s,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=i(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=o);var a=n.p+n.u(t),s=new Error,c=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,o,a=i[0],s=i[1],c=i[2],E=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var T=c(n)}for(t&&t(i);E<a.length;E++)o=a[E],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(T)},i=self["webpackChunkwebclient"]=self["webpackChunkwebclient"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3727)}));i=n.O(i)})();
//# sourceMappingURL=app.953473fa.js.map