webpackJsonp([1],{0:function(t,s){},"34KM":function(t,s){},"45XW":function(t,s){},"8lhw":function(t,s){},CtLV:function(t,s){},ITe7:function(t,s){},LApn:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("woOf"),n=e.n(a),o={props:["size","score"],computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]};var r=e("VU/8")(o,l,!1,function(t){e("du/7")},null,null).exports,c={props:{seller:{}},data:function(){return{detailshow:!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},methods:{Dshow:function(){this.detailshow=!0},closeDetail:function(){this.detailshow=!1}},components:{star:r}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"littleHeader"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"descripttion"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(" "+t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-content",on:{click:t.Dshow}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.Dshow}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:"",width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailshow,expression:"detailshow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wraper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wraper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.closeDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var d={name:"App",data:function(){return{seller:{id:(t={},(s=window.location.search.match(/[?&][^?&]+=[^?&]+/g))&&s.forEach(function(s){var e=s.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);t[i]=a}),t).id}};var t,s},created:function(){var t=this;this.$http.get("/api/seller?id="+this.seller.id).then(function(s){0===(s=s.body).errno&&(t.seller=n()({},t.seller,s.data),console.log(t.seller.id))})},components:{sHeader:e("VU/8")(c,v,!1,function(t){e("uLNG")},null,null).exports}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("sHeader",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("卖家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]};var p=e("VU/8")(d,u,!1,function(t){e("fPZh")},null,null).exports,h=e("/ocq"),_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(t){e("Z3J2")},null,null).exports;var f={props:{food:{type:Object}},methods:{addCar:function(){this.food.count?this.food.count++:i.a.set(this.food,"count",1)},decCar:function(){this.food.count&&this.food.count--}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"carcontrol"},[e("transition",{attrs:{name:"slide-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"carDec icon-remove_circle_outline",on:{click:function(s){return s.stopPropagation(),t.decCar(s)}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"carCou"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"carAdd icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.addCar(s)}}})],1)},staticRenderFns:[]};var m=e("VU/8")(f,C,!1,function(t){e("SxeL")},null,null).exports,g=e("GQaK"),w={components:{carcontrol:m},data:function(){return{fold:!0}},props:{selectFoods:{type:Array,default:function(){return[]}},deliveryprice:{type:Number,default:0},minprice:{type:Number,default:0}},methods:{pay:function(){this.totalPrice<this.minprice||window.alert("需要支付"+this.totalPrice+"元")},hideList:function(){this.fold=!0},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},toggleList:function(){this.totalCount&&(this.fold=!this.fold)}},computed:{listShow:function(){var t=this;if(0===this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){var s=document.getElementsByClassName("list-content")[0];t.scroll?t.scroll.refresh():t.scroll=new g.a(s,{click:!0})}),s},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minprice+"元起送":this.totalPrice<this.minprice?"还差"+(this.minprice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minprice?"notenough":"enough"}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"log",class:{highlight:t.totalCount>0}},[e("span",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v(" 另需配送费 "+t._s(t.deliveryprice)+" 元 ")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n                "+t._s(t.payDesc)+"\n            ")])])]),t._v(" "),e("div",{staticClass:"ball-container"}),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcar-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"carcontrol-wrapper"},[e("carcontrol",{attrs:{food:s}})],1)])}))])])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",attrs:{transition:"fade"},on:{click:t.hideList}})])],1)},staticRenderFns:[]};var x=e("VU/8")(w,y,!1,function(t){e("rXBg")},null,null).exports;function k(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:b(a))}return s}function b(t){return("00"+t).substr(t.length)}var T={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var F=e("VU/8")({},T,!1,function(t){e("ITe7")},null,null).exports,$={data:function(){return{selecttype:this.selectType,onlycontent:this.onlyContent}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t,s){s._constructed&&(console.log(1),this.selecttype=t,this.$emit("ratingtypeselect",t))},toggleContent:function(t){t._constructed&&(this.onlycontent=!this.onlycontent,this.$emit("contenttoggle",this.onlycontent))}},props:{ratings:{default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{}}}}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2==t.selecttype},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0==t.selecttype},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1==t.selecttype},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlycontent},on:{click:function(s){t.toggleContent(s)}}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var E=e("VU/8")($,N,!1,function(t){e("CtLV")},null,null).exports,S={components:{carcontrol:m,split:F,ratingselect:E},data:function(){return{showFlag:!1,selectType:2,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},props:["food"],filters:{formatDate:function(t){return k(new Date(t),"yyyy-MM-dd hh:mm")}},methods:{showcontent:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},showtype:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)},addFirst:function(t){t._countructed||i.a.set(this.food,"count",1)},show:function(t,s){var e=this,i=document.getElementsByClassName("food1")[0];this.showFlag=!0,this.selectType=2,this.onlyConten=!1,this.$nextTick(function(){e.scroll?e.scroll.refresh():e.scroll=new g.a(i,{click:!0})})},hide:function(){this.showFlag=!1}}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"food1"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"carcontrol-wrapper"},[e("carcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count||food.count===0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("\r\n            加入购物车\r\n         ")])]),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{ratingtypeselect:t.showtype,contenttoggle:t.showcontent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v("\r\n                             "+t._s(s.text)+"\r\n                         ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings ||!food.ratings.length"}],staticClass:"no-rating"},[t._v("\r\n                     暂无评价\r\n                 ")])])],1)],1)])])},staticRenderFns:[]};var M={props:["seller"],data:function(){return{goods:[],listHeight:[],scrollY:0,current:0,selectedFood:{},food:""}},components:{shopcar:x,carcontrol:m,Food:e("VU/8")(S,P,!1,function(t){e("45XW")},null,null).exports},mounted:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("/api/goods").then(function(s){0===(s=s.body).errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})},methods:{selectFood:function(t){this.selectedFood=t,this.$refs.Food.show()},selectMune:function(t){var s=document.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(s,300)},_initScroll:function(){var t=this,s=document.getElementsByClassName("menu-wrapper")[0],e=document.getElementsByClassName("foods-wrapper")[0];this.menuScroll=new g.a(s,{}),this.foodsScroll=new g.a(e,{probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=document.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMune(i)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n         ")])])}))]),t._v(" "),e("div",{staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"foods-item border-1px",on:{click:function(e){t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"64",src:s.icon,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"carcontrol-wrapper"},[e("carcontrol",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("shopcar",{attrs:{"select-foods":t.selectFoods,deliveryprice:t.seller.deliveryPrice,minprice:t.seller.minPrice}}),t._v(" "),e("Food",{ref:"Food",attrs:{food:t.selectedFood}})],1)},staticRenderFns:[]};var H=e("VU/8")(M,R,!1,function(t){e("x9KF")},null,null).exports,D={filters:{formatDate:function(t){return k(new Date(t),"yyyy-MM-dd hh:mm")}},data:function(){return{ratings:[],selectType:2,onlyContent:!1,desc:{all:"全部",positive:"满意",negative:"不满意"}}},created:function(){var t=this;this.$http.get("/api/ratings").then(function(s){t.selectType=2,t.onlyConten=!1,0===(s=s.body).errno&&(t.ratings=s.data,t.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new g.a(t.$refs.mybox,{click:!0})}))})},methods:{showcontent:function(t){var s=this;console.log("showcontent"),this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},showtype:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},components:{star:r,split:F,ratingselect:E},props:{seller:{type:Object}}},V={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"mybox",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("评分高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("\n                         服务态度                     \n                     ")]),t._v(" "),e("star",{staticClass:"star",attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("\n                         商品评分                    \n                     ")]),t._v(" "),e("star",{staticClass:"star",attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("\n                         送达时间                    \n                     ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{ratings:t.ratings,desc:t.desc,"select-type":t.selectType,"only-content":t.onlyContent},on:{ratingtypeselect:t.showtype,contenttoggle:t.showcontent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.ratings&&t.ratings.length,expression:"ratings && ratings.length"}]},t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{staticClass:"star",attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),t._v(" "),e("div",{staticClass:"time"},[t._v("\n                              "+t._s(t._f("formatDate")(s.rateTime))+"\n                          ")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))])])])}))])],1)])},staticRenderFns:[]};var U=e("VU/8")(D,V,!1,function(t){e("8lhw")},null,null).exports,L=e("mvHQ"),A=e.n(L);var B={data:function(){var t,s,e,i;return{favorite:(t=this.seller.id,s="favorite",e=!1,(i=localStorage._seller_)&&(i=JSON.parse(i)[t])&&i[s]||e)}},computed:{favoriteText:function(){return this.favorite?"收藏":"未收藏"}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$nextTick(function(){if(t.seller.pics){var s=126*t.seller.pics.length-6;t.$refs.piclist.style.width=s+"px",t.$nextTick(function(){t.picScroll=new g.a(t.$refs.picwrapper,{scrollX:!0,eventPassthrough:"vertical"})})}})},mounted:function(){var t=this;this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new g.a(t.$refs.seller,{click:!0})})},props:{seller:{type:Object}},components:{star:r,split:F},methods:{fav:function(){var t,s,e,i;this.favorite=!this.favorite,t=this.seller.id,s="favorite",e=this.favorite,(i=localStorage._seller_)?(i=JSON.parse(i))[t]||(i[t]={}):(i={})[t]={},i[t][s]=e,localStorage._seller_=A()(i)}}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{staticClass:"star",attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.ratingCount))]),t._v(" "),e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n                   ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n                   ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n                   ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.fav}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("span",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picwrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"piclist",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90",alt:""}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item"},[t._v(t._s(s))])}))])],1)])},staticRenderFns:[]};var z=e("VU/8")(B,O,!1,function(t){e("LApn")},null,null).exports;i.a.use(h.a);var j=new h.a({linkActiveClass:"active",routes:[{path:"/",name:"goods",redirect:"/goods"},{path:"/goods",name:"goods",component:H},{path:"/ratings",name:"ratings",component:U},{path:"/seller",name:"seller",component:z}]}),I=e("8+8L");e("34KM");i.a.config.productionTip=!1,i.a.use(I.a),new i.a({el:"#app",router:j,components:{App:p},template:"<App/>"})},SxeL:function(t,s){},Z3J2:function(t,s){},"du/7":function(t,s){},fPZh:function(t,s){},rXBg:function(t,s){},uLNG:function(t,s){},x9KF:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.bfda35506bf109db6018.js.map