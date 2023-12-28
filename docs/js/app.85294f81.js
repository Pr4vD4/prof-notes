(function(){"use strict";var t={3219:function(t,e,n){var i=n(9242),s=n(3396);function a(t,e){const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(n)}var o=n(89);const r={},l=(0,o.Z)(r,[["render",a]]);var c=l,d=n(2483),h=n(7139);const g={class:"title text-center"},u={id:"game",ref:"game"},p=(0,s.uE)('<div class="clef-container drag-container opacity-0" data-v-075157e2></div><div class="lines" data-v-075157e2><hr id="line-5" data-v-075157e2><hr id="line-4" data-v-075157e2><hr id="line-3" data-v-075157e2><hr id="line-2" data-v-075157e2><hr id="line-1" data-v-075157e2></div>',2),m=[p];function f(t,e,n,i,a,o){const r=(0,s.up)("CongratulationsMessage");return(0,s.wg)(),(0,s.iD)(s.HY,null,[a.success?((0,s.wg)(),(0,s.j4)(r,{key:0,id:n.id},null,8,["id"])):(0,s.kq)("",!0),(0,s._)("div",g," Гамма "+(0,h.zw)(a.names[n.id]),1),(0,s._)("div",u,m,512),(0,s._)("button",{type:"button",onClick:e[0]||(e[0]=(...t)=>o.toggleGrid&&o.toggleGrid(...t)),class:"btn btn-light toggle-grid"},(0,h.zw)(a.grid?"Скрыть сетку":"Показать сетку"),1)],64)}var v=n(7327),w=n(2124),y=n(7809),x=n.n(y);class C{constructor(t,e){(0,v.Z)(this,"addEvents",(t=>{let e=this.gameElement.querySelectorAll(".drag-item");x()();e.forEach((e=>{e.addEventListener("touchmove",this.drag),e.addEventListener("touchend",(e=>{this.checkContainerCollision(e,t)}))}))})),(0,v.Z)(this,"drag",(t=>{this.position[0]+t.target.getBoundingClientRect().width/2<window.innerWidth&&this.position[0]-t.target.getBoundingClientRect().width/2>0&&this.position[1]-t.target.getBoundingClientRect().height/2>0&&this.position[1]+t.target.getBoundingClientRect().height/2<window.innerHeight&&(0,w.Z)({targets:t.target,translateX:`calc(${this.position[0]-t.target.getBoundingClientRect().width/2}px )`,translateY:`calc(${this.position[1]-t.target.getBoundingClientRect().height/2}px )`,easing:"linear",duration:20,update:()=>{}})})),(0,v.Z)(this,"checkContainerCollision",((t,e)=>{let n=document.elementsFromPoint(this.position[0],this.position[1]).filter((t=>t.classList.contains("drag-container")))[0];if(n)this.fixToContainer(t.target,n);else try{this.levelDeleteNote(n,t.target)}catch(i){}E(this.level,this.levelMap)&&(e.success=!0)})),(0,v.Z)(this,"fixToContainer",((t,e)=>{const n=e.getBoundingClientRect();if(t.classList.contains("clef")||t.classList.contains("clef-bas")){if((0,w.Z)({targets:t,translateX:n.x+t.getBoundingClientRect().width/2+"px",translateY:`calc(${n.y-t.getBoundingClientRect().height/2}px + 1vh)`}),e.classList.contains("clef-container")){this.gameElement.querySelectorAll(".note, .note-crossed").forEach((t=>{t.classList.remove("d-none")}))}}else this.levelAppend(e,t),(0,w.Z)({targets:t,translateX:n.x+n.width/2-t.getBoundingClientRect().width/2+"px",translateY:n.y+"px"});console.log(this.level.toString())})),(0,v.Z)(this,"levelAppend",((t,e)=>{e.dataset.currentPos===t.dataset.pos||this.gameElement.querySelector(`div[data-current-pos='${e.dataset.currentPos}']`)||this.levelDeleteNote(t,e),e.dataset.currentNote=t.dataset.note,e.dataset.currentPos=t.dataset.pos,this.level[t.dataset.pos]=t.dataset.note})),(0,v.Z)(this,"levelDeleteNote",((t,e)=>{this.level[+e.dataset.currentPos]=null})),this.gameElement=t,this.position=x()(),this.levelMap=e,this.level=[null,null,null,null,null,null,null],this.createGrid(),this.createNotes(),this.success=!1}createGrid(){let t=this.gameElement.querySelector("#line-1").getBoundingClientRect().top,e=this.gameElement.querySelector(".clef-container");for(let n=0;n<13;n++)for(let e=0;e<7;e++){let i=document.createElement("div");i.dataset.note=String(n%7),i.dataset.pos=String(e),i.classList.add("note-container","drag-container","opacity-0"),i.style.left=`calc((90%/7) * ${e} + 10%)`,i.style.top=`calc(${t}px + (2.5vh / 2 * 3) - (2.5vh * ${n}))`,this.gameElement.append(i)}e.style.top=`calc(${t}px - (2.5vh * 4))`}createClef(){const t=window.screen;let e=document.createElement("div");e.classList.add("drag-item","clef"),e.style.transform=`translateX(${t.width/100*45}px) translateY(${t.height/100*55}px)`,this.gameElement.append(e)}createClefBas(){const t=window.screen;let e=document.createElement("div");e.classList.add("drag-item","clef-bas"),e.style.transform=`translateX(${t.width/100*45}px) translateY(${t.height/100*55}px)`,this.gameElement.append(e)}createNotes(){const t=window.screen;for(let n=0;n<6;n++){let e=document.createElement("div");e.classList.add("drag-item","note","d-none"),e.style.transform=`translateX(${t.width/100*(20+60/7*n)}px) translateY(${t.height/100*80}px)`,this.gameElement.append(e)}let e=document.createElement("div");e.classList.add("drag-item","note-crossed","d-none"),e.style.transform=`translateX(${t.width/100*(20+60/7*6)}px) translateY(${t.height/100*80}px)`,this.gameElement.append(e)}}function E(t,e){return t.toString()===e.toString()}const b=t=>((0,s.dD)("data-v-35c03dbc"),t=t(),(0,s.Cn)(),t),$={class:"message"},L={class:"message-box d-flex flex-column justify-content-center align-items-center"},k={class:"h1"},_={class:"d-flex justify-content-center w-100 mt-5"},B=b((()=>(0,s._)("button",{onclick:"window.location.reload()",class:"toMenu bg-warning m-1"},"На главную",-1)));function S(t,e,n,i,a,o){return(0,s.wg)(),(0,s.iD)("div",$,[(0,s._)("div",L,[(0,s._)("div",k,[(0,s.Uk)("Вы успешно справились! "),(0,s._)("div",_,[B,0==n.id?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:e[0]||(e[0]=t=>o.nextLvl()),class:"to-next m-1"},"Далее")):(0,s.kq)("",!0)])])])])}n(560);var O={name:"CongratulationsMessage",props:{id:String},methods:{nextLvl(){D.push({name:"home",params:{id:+this.id+1}})}}};const Z=(0,o.Z)(O,[["render",S],["__scopeId","data-v-35c03dbc"]]);var R=Z,j={name:"HomeView",components:{CongratulationsMessage:R},data(){return{game:{},success:!1,grid:!1,levelMaps:[[5,6,0,1,2,3,4],[5,6,0,1,2,3,4]],names:["ля минор","до мажор"]}},props:{id:String},mounted(){this.game=new C(this.$refs.game,this.levelMaps[this.id]),0==this.id?this.game.createClef():this.game.createClefBas(),this.game.addEvents(this),console.log(this)},watch:{"game.success"(t){console.log(1),this.success=t},id(){window.location.reload(),console.log(this.id),this.success=!1,this.game=new C(this.$refs.game,this.levelMaps[this.id]),this.game.addEvents(this)}},methods:{toggleGrid(){let t=this.$refs.game.querySelectorAll(".drag-container");this.grid?t.forEach((t=>{t.classList.add("opacity-0")})):t.forEach((t=>{t.classList.remove("opacity-0")})),this.grid=!this.grid}}};const M=(0,o.Z)(j,[["render",f],["__scopeId","data-v-075157e2"]]);var q=M;const P=[{path:"/:id",name:"home",props:!0,component:q}],Y=(0,d.p7)({history:(0,d.PO)("/prof-notes/"),routes:P});var D=Y;(0,i.ri)(c).use(D).mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,a){if(!i){var o=1/0;for(d=0;d<t.length;d++){i=t[d][0],s=t[d][1],a=t[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(r=!1,a<o&&(o=a));if(r){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[i,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,o=i[0],r=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var d=l(n)}for(e&&e(i);c<o.length;c++)a=o[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},i=self["webpackChunkprof_notes"]=self["webpackChunkprof_notes"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3219)}));i=n.O(i)})();
//# sourceMappingURL=app.85294f81.js.map