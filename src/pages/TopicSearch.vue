<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-05 17:50:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-07 17:06:33
 -->
<template>
    <div>
        <TopicSearchBox></TopicSearchBox>
        <PopularSearches></PopularSearches>
        <HotTopic></HotTopic>
    </div>
            
</template>
            
<script>

import TopicSearchBox from '../components/TopicSearchBox';
import PopularSearches from '../components/PopularSearches';
import HotTopic from '../components/HotTopic';

export default {
   data() {
      return {
      }
   },
    components:{
       TopicSearchBox,PopularSearches,HotTopic
   },
}
</script>
            
<style scoped>
            
</style>
