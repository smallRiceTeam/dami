<!--
 * @Description: 
 * @Author: 张涛
 * @Date: 2019-12-03 09:40:55
 * @LastEditors: 张涛
 * @LastEditTime: 2019-12-05 16:52:11
 -->
<template>
   <div>
      <searchFor></searchFor>
      <SearchContent></SearchContent>
      <Searchhistory></Searchhistory>
   </div> 
</template>
            
<script>

import searchFor from '../components/searchFor';
import SearchContent from '../components/SearchContent';
import Searchhistory from '../components/Searchhistory';

export default {
   data() {
      return {
      }
   },
   
   components:{
        searchFor,SearchContent,Searchhistory
   },
}
</script>
            
<style scoped lang="scss">
            
</style>
