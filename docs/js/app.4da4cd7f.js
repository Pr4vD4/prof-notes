(function(){"use strict";var t={1858:function(t,e,n){var i=n(9242),a=n(3396);function s(t,e){const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(n)}var o=n(89);const r={},l=(0,o.Z)(r,[["render",s]]);var c=l,d=n(2483),g=n(7139);const h={class:"title text-center"},u={id:"game",ref:"game"},f=(0,a.uE)('<div class="clef-container drag-container opacity-0" data-v-e1f4d904></div><div class="lines" data-v-e1f4d904><hr id="line-5" data-v-e1f4d904><hr id="line-4" data-v-e1f4d904><hr id="line-3" data-v-e1f4d904><hr id="line-2" data-v-e1f4d904><hr id="line-1" data-v-e1f4d904></div>',2),p=[f];function m(t,e,n,i,s,o){const r=(0,a.up)("CongratulationsMessage");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s.success?((0,a.wg)(),(0,a.j4)(r,{key:0,id:s.id},null,8,["id"])):(0,a.kq)("",!0),(0,a._)("div",h," Гамма "+(0,g.zw)(s.names[s.id]),1),(0,a._)("div",u,p,512),(0,a._)("button",{type:"button",onClick:e[0]||(e[0]=(...t)=>o.toggleGrid&&o.toggleGrid(...t)),class:"btn btn-light toggle-grid"},(0,g.zw)(s.grid?"Скрыть сетку":"Показать сетку"),1)],64)}var v=n(7327),w=n(2124),x=n(7809),y=n.n(x);class C{constructor(t,e){(0,v.Z)(this,"addEvents",(t=>{let e=this.gameElement.querySelectorAll(".drag-item");y()();e.forEach((e=>{e.addEventListener("touchmove",this.drag),e.addEventListener("touchend",(e=>{this.checkContainerCollision(e,t)}))}))})),(0,v.Z)(this,"drag",(t=>{this.position[0]+t.target.getBoundingClientRect().width/2<window.innerWidth&&this.position[0]-t.target.getBoundingClientRect().width/2>0&&this.position[1]-t.target.getBoundingClientRect().height/2>0&&this.position[1]+t.target.getBoundingClientRect().height/2<window.innerHeight&&(0,w.Z)({targets:t.target,translateX:`calc(${this.position[0]-t.target.getBoundingClientRect().width/2}px )`,translateY:`calc(${this.position[1]-t.target.getBoundingClientRect().height/2}px )`,easing:"linear",duration:20,update:()=>{}})})),(0,v.Z)(this,"checkContainerCollision",((t,e)=>{let n=document.elementsFromPoint(this.position[0],this.position[1]).filter((t=>t.classList.contains("drag-container")))[0];if(n)this.fixToContainer(t.target,n);else try{this.levelDeleteNote(n,t.target)}catch(i){}0==localStorage.id?b(this.level,this.levelMap)&&(e.success=!0):b(this.level,this.levelMap)&&document.querySelector(".sharp").dataset.currentNote==this.levelMap[6]&&(e.success=!0)})),(0,v.Z)(this,"fixToContainer",((t,e)=>{const n=e.getBoundingClientRect();if(t.classList.contains("clef")||t.classList.contains("clef-bas")){if((0,w.Z)({targets:t,translateX:n.x+t.getBoundingClientRect().width/2+"px",translateY:`calc(${n.y-t.getBoundingClientRect().height/2}px + 1vh)`}),e.classList.contains("clef-container")){this.gameElement.querySelectorAll(".note, .sharp").forEach((t=>{t.classList.remove("d-none")}))}}else t.classList.contains("sharp")?(t.dataset.currentNote=e.dataset.note,t.dataset.currentPos=e.dataset.pos,(0,w.Z)({targets:t,translateX:n.x+n.width/2-t.getBoundingClientRect().width/2-60+"px",translateY:n.y-10+"px"})):(this.levelAppend(e,t),(0,w.Z)({targets:t,translateX:n.x+n.width/2-t.getBoundingClientRect().width/2+"px",translateY:n.y+"px"}));console.log(this.level.toString())})),(0,v.Z)(this,"levelAppend",((t,e)=>{e.dataset.currentPos===t.dataset.pos||this.gameElement.querySelector(`div[data-current-pos='${e.dataset.currentPos}']`)||this.levelDeleteNote(t,e),e.dataset.currentNote=t.dataset.note,e.dataset.currentPos=t.dataset.pos,this.level[t.dataset.pos]=t.dataset.note})),(0,v.Z)(this,"levelDeleteNote",((t,e)=>{this.level[+e.dataset.currentPos]=null})),this.gameElement=t,this.position=y()(),this.levelMap=e,this.level=[null,null,null,null,null,null,null],this.createGrid(),this.createNotes(),this.success=!1}createGrid(){let t=this.gameElement.querySelector("#line-1").getBoundingClientRect().top,e=this.gameElement.querySelector(".clef-container");for(let n=0;n<13;n++)for(let e=0;e<7;e++){let i=document.createElement("div");i.dataset.note=String(n%7),i.dataset.pos=String(e),i.classList.add("note-container","drag-container","opacity-0"),i.style.left=`calc((90%/7) * ${e} + 10%)`,i.style.top=`calc(${t}px + (2.5vh / 2 * 3) - (2.5vh * ${n}))`,this.gameElement.append(i)}e.style.top=`calc(${t}px - (2.5vh * 4))`}createClef(){const t=window.screen;let e=document.createElement("div");e.classList.add("drag-item","clef"),e.style.transform=`translateX(${t.width/100*45}px) translateY(${t.height/100*55}px)`,this.gameElement.append(e)}createClefBas(){const t=window.screen;let e=document.createElement("div");e.classList.add("drag-item","clef-bas"),e.style.transform=`translateX(${t.width/100*45}px) translateY(${t.height/100*55}px)`,this.gameElement.append(e)}createNotes(){const t=window.screen;for(let e=0;e<7;e++){let n=document.createElement("div");n.classList.add("drag-item","note","d-none"),n.style.transform=`translateX(${t.width/100*(20+60/7*e)}px) translateY(${t.height/100*80}px)`,this.gameElement.append(n)}if(1==localStorage.id){let e=document.createElement("div");e.classList.add("drag-item","sharp","d-none"),e.style.transform=`translateX(${t.width/100*50}px) translateY(${t.height/100*90}px)`,this.gameElement.append(e)}}}function b(t,e){return t.toString()===e.toString()}const E=t=>((0,a.dD)("data-v-ff8b39f6"),t=t(),(0,a.Cn)(),t),S={class:"message"},$={class:"message-box d-flex flex-column justify-content-center align-items-center"},L={class:"h1"},k={class:"d-flex justify-content-center w-100 mt-5"},_=E((()=>(0,a._)("button",{onclick:"localStorage.id = 0; window.location.reload()",class:"toMenu bg-warning m-1"},"На главную",-1)));function B(t,e,n,i,s,o){return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",$,[(0,a._)("div",L,[(0,a.Uk)("Вы успешно справились! "),(0,a._)("div",k,[_,0==s.id?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:e[0]||(e[0]=t=>o.nextLvl()),class:"to-next m-1"},"Далее")):(0,a.kq)("",!0)])])])])}var Z={name:"CongratulationsMessage",data(){return{id:Number(localStorage.id)}},methods:{nextLvl(){localStorage.id=Number(localStorage.id)+1,window.location.reload()}},mounted(){1===Number(localStorage.id)&&(localStorage.id=0)}};const M=(0,o.Z)(Z,[["render",B],["__scopeId","data-v-ff8b39f6"]]);var N=M,O={name:"HomeView",components:{CongratulationsMessage:N},data(){return{id:localStorage.getItem("id"),game:{},success:!1,grid:!1,levelMaps:[[5,6,0,1,2,3,4],[2,3,4,5,6,0,1]],names:["ля минор","соль мажор"]}},setup(){localStorage.getItem("id")||localStorage.setItem("id",0)},mounted(){this.game=new C(this.$refs.game,this.levelMaps[this.id]),0==this.id?this.game.createClef():this.game.createClefBas(),this.game.addEvents(this),console.log(this)},watch:{"game.success"(t){console.log(1),t&&(localStorage.id=Number(localStorage.id)+1),this.success=t},id(){window.location.reload(),console.log(this.id),this.success=!1,this.game=new C(this.$refs.game,this.levelMaps[this.id]),this.game.addEvents(this)}},methods:{toggleGrid(){let t=this.$refs.game.querySelectorAll(".drag-container");this.grid?t.forEach((t=>{t.classList.add("opacity-0")})):t.forEach((t=>{t.classList.remove("opacity-0")})),this.grid=!this.grid}}};const R=(0,o.Z)(O,[["render",m],["__scopeId","data-v-e1f4d904"]]);var j=R;const q=[{path:"/",name:"home",component:j}],P=(0,d.p7)({history:(0,d.PO)("/prof-notes/"),routes:q});var Y=P;(0,i.ri)(c).use(Y).mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,s){if(!i){var o=1/0;for(d=0;d<t.length;d++){i=t[d][0],a=t[d][1],s=t[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(r=!1,s<o&&(o=s));if(r){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,o=i[0],r=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var d=l(n)}for(e&&e(i);c<o.length;c++)s=o[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},i=self["webpackChunkprof_notes"]=self["webpackChunkprof_notes"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1858)}));i=n.O(i)})();
//# sourceMappingURL=app.4da4cd7f.js.map