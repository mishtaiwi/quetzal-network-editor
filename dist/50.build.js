"use strict";(self.webpackChunkquetzal_network_editor=self.webpackChunkquetzal_network_editor||[]).push([[50],{36759:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(87537),i=n.n(a),s=n(23645),A=n.n(s)()(i());A.push([e.id,".layout[data-v-ce2e6be0]{background-color:var(--v-white-base);display:flex;height:100%;align-items:center;flex-direction:column;overflow-y:scroll;padding-top:15px;padding-bottom:60px}div.gallery[data-v-ce2e6be0]{margin:5px;background-color:var(--v-white-base);border:1px solid var(--v-lightgrey-base);float:left;width:50rem}div.gallery[data-v-ce2e6be0]:hover{border:1px solid var(--v-darkgrey-base)}div.gallery img[data-v-ce2e6be0]{width:100%;height:auto}div.desc[data-v-ce2e6be0]{padding:15px;text-align:center}.image-fit[data-v-ce2e6be0]{height:100%;width:100%;object-fit:cover}","",{version:3,sources:["webpack://./src/pages/ResultPicture.vue"],names:[],mappings:"AAGA,yBACE,oCAAA,CACA,YAAA,CACA,WAAA,CACA,kBAAA,CACA,qBAAA,CACA,iBAAA,CACA,gBAAA,CACA,mBAAA,CAEF,6BACE,UAAA,CACA,oCAAA,CACA,wCAAA,CACA,UAAA,CACA,WAAA,CAGF,mCACE,uCAAA,CAGF,iCACE,UAAA,CACA,WAAA,CAGF,0BACE,YAAA,CACA,iBAAA,CAEF,4BACE,WAAA,CACA,UAAA,CACA,gBAAA",sourcesContent:['@import "@scss/variables.scss";\n\n\n.layout {\n  background-color:var(--v-white-base);\n  display: flex;\n  height: 100%;\n  align-items: center;\n  flex-direction: column;\n  overflow-y: scroll;\n  padding-top: 15px;\n  padding-bottom: 60px;\n}\ndiv.gallery {\n  margin: 5px;\n  background-color: var(--v-white-base);\n  border: 1px solid var(--v-lightgrey-base);\n  float: left;\n  width: 50rem;\n}\n\ndiv.gallery:hover {\n  border: 1px solid var(--v-darkgrey-base);\n}\n\ndiv.gallery img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n.image-fit{\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n'],sourceRoot:""}]);const r=A},40050:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=function(){var e=this,t=e._self._c;return t("section",{staticClass:"layout"},[0===e.imgs.length?t("p",[e._v("\n    "+e._s(e.$gettext(e.message))+"\n  ")]):e._e(),e._v(" "),e._l(e.imgs,(function(e,n){return t("div",{key:n,staticClass:"gallery"},[t("v-img",{attrs:{src:e,alt:"image",contain:""}})],1)}))],2)};a._withStripped=!0;var i=n(60887);const s={name:"ResultPicture",components:{},data:()=>({imgs:[],message:""}),watch:{},async created(){this.$store.commit("changeLoading",!0);const e=this.$store.getters.model,t=this.$store.getters.scenario,n=(await i.Z.listFiles(e,t+"/outputs")).filter((e=>e.endsWith(".png")));for(const e of n){const t=await i.Z.getImagesURL(this.$store.getters.model,e);this.imgs.push(t)}this.$store.commit("changeLoading",!1),0===this.imgs.length&&(this.message="Nothing to display")},methods:{}};var A=n(93379),r=n.n(A),o=n(7795),l=n.n(o),d=n(90569),c=n.n(d),g=n(3565),C=n.n(g),h=n(19216),v=n.n(h),m=n(44589),p=n.n(m),u=n(36759),b={};b.styleTagTransform=p(),b.setAttributes=C(),b.insert=c().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=v(),r()(u.Z,b),u.Z&&u.Z.locals&&u.Z.locals;const f=(0,n(51900).Z)(s,a,[],!1,null,"ce2e6be0",null).exports}}]);
//# sourceMappingURL=50.build.js.map