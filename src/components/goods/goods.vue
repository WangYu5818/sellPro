<template>
    <div class="goods">
    <div class="menu-wrapper" >
         <ul>
           <li v-for="(item,index) in goods" class="menu-item" :class="{current:currentIndex===index}" @click="selectMune(index)">
             <span class="text border-1px">
               <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
             </span>
           </li>
         </ul>
    </div>
    <div class="foods-wrapper" >
        <ul>
          <li  v-for="item in goods" class="food-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul> 
              <li @click="selectFood(food)" v-for="food in item.foods" class="foods-item border-1px" >
                <div class="icon">
                  <img width="64" :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="carcontrol-wrapper">
                    <carcontrol  :food="food"></carcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </div>
    <shopcar :select-foods="selectFoods" :deliveryprice="seller.deliveryPrice" :minprice="seller.minPrice"></shopcar>
      <Food :food="selectedFood" ref="Food"></Food>
     </div>
     
</template>
<script>
import shopcar from '@/components/shopcar/shopcar';
import BScroll from 'better-scroll';
import carcontrol from '@/components/carcontrol/carcontrol';
import Food from '@/components/food/food';
 const ERR_OK= 0;
export default {
  props:['seller'],
  data(){
    return {
      goods:[],
      listHeight:[],
      scrollY:0,
      current:0,
      selectedFood:{},
      food:''
    }
  },
  components:{
    shopcar:shopcar,
    carcontrol:carcontrol,
    Food:Food
  },
  mounted(){
    this.classMap=['decrease','discount','special','invoice','guarantee'];
    this.$http.get('/api/goods').then((response)=>{
      response = response.body;
      if(response.errno === ERR_OK){
           this.goods = response.data;
           this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
           })
      }
    })
  },
  methods: {
    selectFood(food){
      // console.log(food)
       this.selectedFood = food;
       this.$refs.Food.show();
    },
    selectMune(index){
     let foodList = document.getElementsByClassName("food-list-hook");
     let el = foodList[index];
     this.foodsScroll.scrollToElement(el,300)
},
    _initScroll(){
      let menuwrapper = document.getElementsByClassName("menu-wrapper")[0];
      let foodswrapper = document.getElementsByClassName("foods-wrapper")[0];
       this.menuScroll = new BScroll(menuwrapper,{
       })
      this.foodsScroll = new BScroll(foodswrapper,{
         
         probeType:3
      });
      this.foodsScroll.on('scroll',(pos)=>{
           this.scrollY =Math.abs( Math.round(pos.y));
      });
    },
    _calculateHeight(){
     let foodList= document.getElementsByClassName("food-list-hook");
     let height = 0;
     this.listHeight.push(height);
      for(var i=0;i<foodList.length;i++){
        let item = foodList[i];
        height+=item.clientHeight;
        this.listHeight.push(height);
      }
   }
  },
  computed:{
     currentIndex:function(){
       for(var i=0;i<this.listHeight.length;i++){
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i+1];
          if(!height2 || (this.scrollY>=height1 && this.scrollY<height2)){
            return i;
          }
       }
       return 0;
     },
     selectFoods(){
       let foods  =[];
       this.goods.forEach((good)=>{
         good.foods.forEach((food)=>{
            if(food.count){
              foods.push(food);
            }
         })
       })
       return foods;
     }
  }
}
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'
    .goods
       position:absolute
       display :flex
       overflow: hidden
       top:174px
       bottom:46px
       width:100%
       .menu-wrapper
         flex:0 0 80px
         width:80px
         background #f3f5f7
         .menu-item
           display :table
           width: 56px
           height:54px
           line-height:14px
           padding:0 12px
           border-1px(rgba(1,17,27,0.1))
           &.current
             position:relative
             z-index:10
             margin-top:-1px
             background :#fff
             font-weight:700
             .text
               border-none()
           .icon
             display:inline-block
             vertical-align :top
             width:14px
             height:14px
             margin-right:2px
             background-size:14px 14px 
             background-repeat:no-repeat
             &.decrease
                bg-img("decrease_3")
             &.discount
                bg-img("discount_3")
             &.special
                bg-img("special_3")
             &.invoice
                bg-img("invoice_3")
             &.guarantee
                bg-img("guarantee_3")
           .text
             display :table-cell
             width:54px
             font-size:12px
             vertical-align :middle
            
       .foods-wrapper
         flex:1
         .title
           padding-left:14px
           height 26px
           line-height :26px
           border-left:2px solid #d9dde1
           font-size 12px
           color:rgb(147,153,159)
           background:#f3f5f7
         .foods-item
           display:flex
           margin:18px
           padding-bottom:18px
           border-1px(rgba(1,17,27,0.1))
           &:last-child
             border-none()
             margin-bottom:0
           .icon
             flex: 0 0 57px
             margin-right:10px
          .content
             flex:1
             .name
               font-size :14px
               margin:2px 0 8px 0
               height 14px
               line-height:14px
               color:rgb(7,17,27)
             .desc, .extra
               font-size :10px
               line-height :10px
               color:rgb(147,153,159)
             .desc
                margin-bottom:8px
             .extra
               &.count
                 margin-right:12px
             .price
                font-weight :700
                line-height :24px
                .now
                  margin-right :8px
                  font-size 14px
                  color:rgb(240,20,20)
                .old
                  text-decoration:line-through
                  font-size :10px
                  color:rgb(147,153,159)
             .carcontrol-wrapper
               position absolute
               right 0
               bottom 12px


        
</style>
