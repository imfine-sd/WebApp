(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"471741f2"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var u=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}s[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/WebApp/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1457:function(t,e,n){"use strict";var a=n("b4e7"),s=n.n(a);s.a},"17c4":function(t,e,n){"use strict";var a=n("b779"),s=n.n(a);s.a},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var a=n("199c"),s=n.n(a);e["default"]=s.a},2918:function(t,e,n){},"3b20":function(t,e,n){},"3dfd":function(t,e,n){"use strict";var a=n("caad0"),s=n("23be"),r=n("2877"),i=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,"1f36e8ac",null);e["default"]=i.exports},4276:function(t,e,n){},"4ceb":function(t,e,n){},"539f":function(t,e,n){"use strict";var a=n("4276"),s=n.n(a);s.a},"54b2":function(t,e,n){"use strict";var a=n("fc6a7"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("3dfd"),r=n("9483");Object(r["a"])("".concat("/WebApp/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var i=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{fluid:""}},[n("h1",[t._v("CMS")]),n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-subheader",[t._v("HLS URL :")])],1),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{label:"URL",value:"http://~~~~~~/~~~~/live/hello.m3u8"}})],1),n("v-col",[n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",fab:"",small:""}},[n("v-icon",[t._v("mdi-pencil")])],1)],1)],1),n("v-row",[n("v-col",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"items-per-page":5}})],1)],1),n("v-row",[n("v-col",[n("v-textarea",{staticClass:"mt-5",attrs:{outlined:"",label:"Text"}})],1)],1)],1)],1)},c=[],u={data:function(){return{headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}}},l=u,f=n("2877"),d=n("6544"),m=n.n(d),h=n("8336"),p=n("62ad"),g=n("a523"),v=n("8fea"),_=n("132d"),b=n("0fd9"),E=n("e0c7"),S=n("8654"),C=n("a844"),w=Object(f["a"])(l,o,c,!1,null,null,null),y=w.exports;m()(w,{VBtn:h["a"],VCol:p["a"],VContainer:g["a"],VDataTable:v["a"],VIcon:_["a"],VRow:b["a"],VSubheader:E["a"],VTextField:S["a"],VTextarea:C["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents_area",style:t.contents_style,attrs:{id:"root"}},[n("VideoView"),n("MenuBar",{staticClass:"menu"}),n("Tabs",{staticClass:"item"})],1)},j=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("video",{staticClass:"video-js vjs-default-skin vjs-16-9",attrs:{id:"hls-example",controls:""}},[n("source",{ref:"video_source",attrs:{type:"application/x-mpegURL"}})])])},M=[],T=n("5530"),$=n("2f62"),O={data:function(){return{window_width:100,window_height:50}},computed:Object(T["a"])({},Object($["b"])(["getHlsUrl"])),created:function(){var t=this;this.$store.dispatch("LOAD_HLS_URL").then((function(){t.$refs.video_source.setAttribute("src",t.getHlsUrl),window.videojs("hls-example")}))},methods:{playVideo:function(){}}},k=O,D=(n("17c4"),Object(f["a"])(k,A,M,!1,null,"5cb7610f",null)),L=D.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"shadow"},[n("p",{staticClass:"font"},[t._v("I M FINE Web App")])])])}],R={},B=R,H=(n("fd34"),Object(f["a"])(B,V,I,!1,null,"441b7692",null)),N=H.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"area"},[n("v-tabs-items",{attrs:{id:"tab_contents"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return n("v-tab-item",{key:e},[n("div",{staticClass:"tabs"},[n("Chatting"===e?"Chatting":"Emoji",{attrs:{props_height:t.contents_height}})],1)])})),1),n("v-tabs",{staticClass:"tab_menu",attrs:{"background-color":"primary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return n("v-tab",{key:e.tab},[t._v(" "+t._s(e)+" ")])})),1)],1)},U=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bg"},[n("div",{staticClass:"count"},[t._v(t._s(t.h_count))]),t._l(t.obj,(function(e,a){return n(e.component,{key:a,ref:a,refInFor:!0,tag:"component",attrs:{props_data:e.emoji},on:{end_anim:t.deleteItem}})})),n("div",{ref:"items",staticClass:"itmes"},[n("div",{ref:"glist",staticClass:"grid"},[n("v-row",t._l(9,(function(e){return n("v-col",{key:e,attrs:{cols:"4"}},[n("v-img",{staticClass:"shadow",attrs:{"aspect-ratio":"1"},on:{click:function(n){return t.addHeart(e)}}},[n("div",{staticClass:"font"},[t._v(t._s(t.getEmoji(e)))])])],1)})),1)],1)])],2)},F=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{staticClass:"icon",class:{anim:this.isAnim},style:{transition:"all "+t.getDuration+"s linear",left:t.getLeft},attrs:{id:"hid"}},[t._v(" "+t._s(t.props_data)+" ")])])},z=[],J={data:function(){return{isAnim:!1,getLeft:"0px",getDuration:0}},props:["props_data"],mounted:function(){var t=this,e=.8,n=3,a=this.getRandom(e,n);this.getDuration=a;var s=Math.floor(this.getRandom(50,window.innerWidth-50))+"px";this.getLeft=s;var r=setTimeout((function(){clearTimeout(r),t.$emit("end_anim",t.$vnode.data.ref)}),1e3*a),i=setTimeout((function(){t.isAnim=!0,clearTimeout(i)}),10)},methods:{getRandom:function(t,e){return Math.random()*(e-t)+t}}},K=J,q=(n("1457"),Object(f["a"])(K,W,z,!1,null,"621266ce",null)),Y=q.exports,Q={props:["props_height"],data:function(){return{h_count:0,imgs:[],timer:null,dic_heart:{},obj:{}}},components:{EmojiIcon:Y},mounted:function(){var t=this.$refs.glist,e=window.innerHeight-t.getBoundingClientRect().y;t.style.height=e+"px",this.$refs.bg.style.height=this.props_height+"px",this.$refs.items.style.height=this.props_height+"px",console.log(this.props_height)},methods:{addHeart:function(t){this.obj["idx"+this.h_count]={component:Y,emoji:this.getEmoji(t)},this.h_count++},deleteItem:function(t){this.$delete(this.obj,t)},getEmoji:function(t){switch(t){case 0:return"😍";case 1:return"🥳";case 2:return"✌🏻";case 3:return"😺";case 4:return"🤡";case 5:return"👍🏻";case 6:return"💋";case 7:return"⭐️";case 8:return"🌹";default:return"😍"}}}},Z=Q,X=(n("572c"),n("adda")),tt=Object(f["a"])(Z,P,F,!1,null,"46d8bd3e",null),et=tt.exports;m()(tt,{VCol:p["a"],VImg:X["a"],VRow:b["a"]});var nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bg",staticClass:"tab_bg"},[n("ChattingList",{staticClass:"list"}),n("div",{staticClass:"shadow_up"}),n("ChattingInput",{staticClass:"input"})],1)},at=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outline"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_message,expression:"user_message"}],ref:"ff",staticClass:"text_input",attrs:{type:"text"},domProps:{value:t.user_message},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)},input:function(e){e.target.composing||(t.user_message=e.target.value)}}})]),n("v-btn",{staticClass:"send_btn",staticStyle:{color:"white"},attrs:{icon:""},on:{click:t.sendMessage}},[n("v-icon",[t._v("mdi-arrow-up")])],1)],1)},rt=[],it=new a["a"],ot={data:function(){return{user_message:""}},mounted:function(){},methods:{loadMessage:function(){console.log("BB",this.$store.state.messages),this.$store.commit("ADD_MESSAGES",{message:"Hello World"}),console.log("AA",this.$store.state.messages),console.log("load!!!")},sendMessage:function(){var t=this;if(this.user_message){var e=this.user_message;this.$store.dispatch("SEND_MESSAGE",e).then((function(e){console.log("RR = ",e),e||(t.user_message="",it.$emit("updateList"))})),console.log(this.user_message)}}}},ct=ot,ut=(n("a14d"),Object(f["a"])(ct,st,rt,!1,null,"33a9f4c4",null)),lt=ut.exports;m()(ut,{VBtn:h["a"],VIcon:_["a"]});var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{ref:"rlist",staticClass:"chatting_list"},t._l(t.getMessages,(function(e){return n("li",{key:e.index},[n("div",{class:!!e.isMine&&t.msg_right},[n("div",{staticClass:"msg_item",class:e.isMine?t.msg_mine:t.msg_other},[n("div",{staticClass:"msg_top"},[n("div",{staticClass:"msg_user"},[t._v(" "+t._s(e.user)+" ")]),n("div",{staticClass:"msg_time"},[t._v(" "+t._s(t.getFormatDate(e.time))+" ")])]),n("div",{staticClass:"msg_contents"},[t._v(" "+t._s(e.message)+" ")])])])])})),0)])},dt=[],mt={data:function(){return{msg_right:"msg_right",msg_mine:"msg_mine",msg_other:"msg_other"}},computed:Object(T["a"])({},Object($["b"])(["getMessages"])),created:function(){var t=this;it.$on("updateList",(function(){t.scrollToBottom()}))},mounted:function(){var t=this,e=this.$refs.rlist,n=window.innerHeight-e.getBoundingClientRect().y-50;e.style.height=n+"px",this.$store.dispatch("LOAD_MESSAGES").then((function(){console.log("load all messsage"),t.scrollToBottom(),t.$store.dispatch("SET_MESSAGE_EVENT")}))},beforeDestroy:function(){this.$store.dispatch("DELETE_MESSAGE_EVENT")},watch:{getMessages:function(){console.log("add item"),this.$nextTick((function(){this.scrollToBottom()}))}},methods:{getFormatDate:function(t){var e=new Date(t);return e.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})},scrollToBottom:function(){var t=this.$refs.rlist;t.scrollTop=t.scrollHeight}}},ht=mt,pt=(n("c64b"),Object(f["a"])(ht,ft,dt,!1,null,"0494d2d1",null)),gt=pt.exports,vt={props:["props_height"],data:function(){return{}},components:{ChattingInput:lt,ChattingList:gt},mounted:function(){this.$refs.bg.style.height=this.props_height+"px"}},_t=vt,bt=(n("54b2"),Object(f["a"])(_t,nt,at,!1,null,"a4cf0de6",null)),Et=bt.exports,St={data:function(){return{contents_height:0,tab:0,items:["Chatting","Emoticon"]}},components:{Chatting:Et,Emoji:et},mounted:function(){var t=this.$refs.area.getBoundingClientRect().height;this.contents_height=t},watch:{tab:function(){console.log("Tab Chaged",this.tab)}}},Ct=St,wt=(n("59fc"),n("71a3")),yt=n("c671"),xt=n("fe57"),jt=n("aac8"),At=Object(f["a"])(Ct,G,U,!1,null,"080ce22e",null),Mt=At.exports;m()(At,{VTab:wt["a"],VTabItem:yt["a"],VTabs:xt["a"],VTabsItems:jt["a"]});var Tt={name:"App",components:{VideoView:L,MenuBar:N,Tabs:Mt},data:function(){return{contents_style:{height:document.documentElement.clientHeight+"px"}}},mounted:function(){this.$store.commit("SET_NAME")}},$t=Tt,Ot=(n("539f"),Object(f["a"])($t,x,j,!1,null,"34526694",null)),kt=Ot.exports;a["a"].use(i["a"]);var Dt=[{path:"/",redirect:"/client"},{path:"/client",name:"Client",component:kt},{path:"/cms",name:"CMS",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Lt=new i["a"]({routes:Dt}),Vt=Lt,It=(n("99af"),n("4160"),n("25f0"),n("159b"),n("59ca"));n("66ce");a["a"].use($["a"]);var Rt={apiKey:"AIzaSyBtnFzSNMp30pWM2CNva-U9ZM1sdE8lzts",authDomain:"fir-ca8ad.firebaseapp.com",databaseURL:"https://fir-ca8ad.firebaseio.com",projectId:"fir-ca8ad",storageBucket:"fir-ca8ad.appspot.com",messagingSenderId:"371247898053",appId:"1:371247898053:web:a657c9fb4898a89947bfac",measurementId:"G-BWCDY22QJR"};It["initializeApp"](Rt);var Bt=new $["a"].Store({state:{hrl_url:"",message_timer:null,last_timestamp:0,messages:[],user_name:""},getters:{getMessages:function(t){return t.messages},getHlsUrl:function(t){return t.hrl_url}},mutations:{ADD_MESSAGES:function(t,e){t.messages=t.messages.concat(e)},SET_NAME:function(t){t.user_name||(t.user_name=Math.random().toString(36).substring(7))},SET_HLS_URL:function(t,e){t.hrl_url=e}},actions:{LOAD_MESSAGES:function(t){var e=t.state,n=t.commit;return console.log("load message"),It["database"]().ref("/messages").orderByChild("time").once("value").then((function(t){var a=[];return t.forEach((function(t){var n=t.val();n.index=t.key;var s=n.user===e.user_name;s&&(n.isMine=!0),a.push(n)})),e.last_timestamp=a[a.length-1].time,n("ADD_MESSAGES",a),t}))},SET_MESSAGE_EVENT:function(t){var e=t.state,n=t.commit;e.message_timer=setInterval((function(){It["database"]().ref("/messages").orderByChild("time").startAt(e.last_timestamp+1).once("value").then((function(t){var a=[];t.forEach((function(t){var n=t.val();n.index=t.key;var s=n.user===e.user_name;s||a.push(t.val())})),a.length>0&&(e.last_timestamp=a[a.length-1].time,n("ADD_MESSAGES",a))}))}),2e3)},DELETE_MESSAGE_EVENT:function(t){clearTimeout(t.message_timer),t.message_timer=null},SEND_MESSAGE:function(t,e){var n=t.commit,a=t.state,s=It["database"]().ref("/messages").child("data").push().key,r="/"+s,i={index:s,user:a.user_name,time:(new Date).getTime(),message:e},o={};o["messages/"+r]=i,It["database"]().ref().update(o,(function(t){return console.log("SEND_RESULT",t),t||n("ADD_MESSAGES",Object(T["a"])(Object(T["a"])({},i),{},{isMine:!0})),t}))},LOAD_HLS_URL:function(t){var e=t.commit;return It["database"]().ref("/").once("value").then((function(t){var n=t.val()&&t.val().hrl_url||"";return e("SET_HLS_URL",n),n}))}},modules:{}}),Ht=n("f309");a["a"].use(Ht["a"]);var Nt=new Ht["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Vt,store:Bt,vuetify:Nt,render:function(t){return t(s["default"])}}).$mount("#app")},"572c":function(t,e,n){"use strict";var a=n("4ceb"),s=n.n(a);s.a},"59fc":function(t,e,n){"use strict";var a=n("2918"),s=n.n(a);s.a},"926b":function(t,e,n){},a099:function(t,e,n){},a14d:function(t,e,n){"use strict";var a=n("3b20"),s=n.n(a);s.a},b4e7:function(t,e,n){},b779:function(t,e,n){},c64b:function(t,e,n){"use strict";var a=n("926b"),s=n.n(a);s.a},caad0:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},s=[]},fc6a7:function(t,e,n){},fd34:function(t,e,n){"use strict";var a=n("a099"),s=n.n(a);s.a}});
//# sourceMappingURL=app.ccc16825.js.map