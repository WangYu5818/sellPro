<template>
    <div class="ratings" ref="mybox">
        <div class="ratings-content">
             <div class="overview">
                 <div class="overview-left">
                     <h1 class="score">{{seller.score}}</h1>
                     <div class="title">综合评分</div>
                     <div class="rank">评分高于周边商家{{seller.rankRate}}%</div>
                 </div>
                 <div class="overview-right">
                     <div class="score-wrapper">
                         <span class="title">
                             服务态度                     
                         </span>
                         <star class="star" :size="36" :score="seller.serviceScore"></star>
                         <span class="score">{{seller.serviceScore}}</span>
                     </div>
                     <div class="score-wrapper">
                          <span class="title">
                             商品评分                    
                         </span>
                         <star class="star" :size="36" :score="seller.foodScore"></star>
                         <span class="score">{{seller.foodScore}}</span>
                     </div>
                     <div class="delivery-wrapper">
                          <span class="title">
                             送达时间                    
                         </span>
                         <span class="time">{{seller.deliveryTime}}分钟</span>
                     </div>
                 </div>
             </div>
             <split></split>
             <ratingselect v-on:ratingtypeselect="showtype" v-on:contenttoggle="showcontent" :ratings="ratings" :desc="desc" :select-type="selectType" :only-content="onlyContent"></ratingselect>     


                 <div class="rating-wrapper">
                <ul v-show="ratings && ratings.length">
                      <li v-for="rating in ratings" v-show="needShow(rating.rateType,rating.text)" class="rating-item">
                          <div class="avatar">
                              <img width="28" height="28" :src="rating.avatar" >
                          </div>
                          <div class="content">
                              <h1 class="name">{{rating.username}}</h1>
                              <div class="star-wrapper">
                                  <star class="star" :size="24" :score="rating.score"></star>
                                  <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
                              </div>
                              <div class="time">
                                  {{rating.rateTime | formatDate}}
                              </div>
                              <p class="text">{{rating.text}}</p>
                          </div>
                      </li>
                  </ul> 
              </div> 

        </div>
    </div>
</template>
<script>
import star from '../star/star';
import split from '@/components/split/split';
import ratingselect from '@/components/ratingselect/ratingselect';
import {formatDate} from '../../common/js/date.js';
import BScroll from 'better-scroll';

const ALL = 2;
const ERR_OK = 0;

export default{
    filters:{
   formatDate:function(time){
      let date = new Date(time);
      return formatDate(date,'yyyy-MM-dd hh:mm')
   }
},
    
    data(){
        return {
            ratings:[],
            selectType:ALL,
            onlyContent:false,
            desc:{  
                all:'全部',
                positive:'满意',
                negative:'不满意'
            }
        };  
    },
      created(){
        this.$http.get('/api/ratings').then((response)=>{
        this.selectType = ALL;
        this.onlyConten = false;
            response = response.body;
            if(response.errno === ERR_OK){
           this.ratings = response.data;
           this.$nextTick(() => {
                         if(!this.scroll){
              this.scroll = new BScroll(this.$refs.mybox,{
                  click:true
              });
            }else{
                this.scroll.refresh();
            };
           })
      }
        })
    },
    methods:{
        showcontent:function(data){
            console.log('showcontent');
      this.onlyContent = data;
      this.$nextTick(()=>{
      this.scroll.refresh();

      })
    },
    showtype:function(data){
        this.selectType = data;
        this.$nextTick(()=>{
      this.scroll.refresh();

      })
    },
        needShow(type,text){
       if(this.onlyContent && !text){
        return false;
       }  
       if(this.selectType===ALL){
           return true;
       }else{
           return type ===this.selectType;
       }
    }
    },
    components:{
        star,
        split,
        ratingselect
    },
    props:{
        seller:{
            type:Object
        }
    }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'
.ratings
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .overview
    display flex
    padding 18px 0
    .overview-left
      flex 0 0 137px
      padding-bottom 6px 0
      width 137px
      border-right 1px solid rgba(7,17,27,0.1)
      text-align center
      @media only screen and (max-width:320) {
          flex 0 0 120px
          width 120px
      }
      .score
        margin-bottom 6px
        line-height 28px
        font-size 24px
        color rgb(255,153,0)
      .title
        font-size 12px
        line-height 12px
        color rgb(7,17,27)
        margin-bottom 8px
      .rank
        line-height 10px
        font-size 10px
        color rgb(147,153,159)
        
    .overview-right
      flex 1
      padding 6px 0 6px 24px
      @media only screen and (max-width:320){
          padding-left 2px
      }
      .score-wrapper
        line-height 18px
        margin-bottom 8px
        font-size 0
        .title
          line-height 18px
          display inline-block
          vertical-align top
          font-size 12px
          color rgb(7,17,27)
        .star
          display inline-block
          margin 0 12px
          vertical-align top
          @media only screen and (max-width:320){
              margin 0 0
          }
        .score
          line-height 18px
          display inline-block
          vertical-align top
          font-size 12px
          color rgb(255,153,159)
      .delivery-wrapper
        font-size 0
        .title
          font-size 12px
          line-height 12px
          color rgb(7,17,27)
          margin-bottom 8px
        .time
          font-size 12px
          color rgb(147,153,159)
          margin-left 4px
  .rating-wrapper
      padding 0 18px
      .rating-item
          display flex
          padding 18px 0
          border-1px(rgba(7,17,27,0.1))
          .avatar
              flex 0 0 28px
              width 28px
              margin-right 12px
              img
                border-radius 50%
          .content
              position relative
              flex 1
              .name
                  margin-bottom  4px
                  line-height 12px
                  font-size 10px
                  color rgb(7,17,27)
              .star-wrapper
                  font-size 0
                  margin-bottom 6px
                  .star
                      display inline-block 
                      margin-right 6px
                      vertical-align top
                  .delivery
                      display inline-block
                      font-size 10px
                      line-height 12px
                      vertical-align top
                      color rgb(147,153,159)
              .text
                 line-height 18px 
                 color rgb(7,17,27)
                 font-size 12px
                 margin-top 8px
                 margin-bottom 10px
              .time
                  position absolute
                  top 0
                  right 0
                  line-height 12px
                  font-size 10px
                  color rgb(147,153,159)


</style>
