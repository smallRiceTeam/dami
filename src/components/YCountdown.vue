<!--
 * @Author: yx
 * @Date: 2019-11-29 17:19:30
 * @LastEditors: yx
 * @LastEditTime: 2019-11-29 17:59:38
 * @Description: 
 -->

<template>
  <div>
    <div class="time">
      <span>{{this.day}}天</span>
      <span>{{this.hour}}:</span> 
      <span>{{this.min}}:</span> 
      <span>{{this.sec}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'YCountdown',
  // props:['msg'],
  data() {
    return {
      // aim_time: String,
      day: 0,
      hour: 0,
      min: 0,
      sec: 0
    };
  },
  props: {
    msg: String
  },
  created() {
    this.intervalId = setInterval(() => {
      this.countDown(this.msg);
    }, 50);
  },
  methods: {
    //参数为 目的时间   即该倒计时功能到 这个时间 终止
    countDown(aim_time) {
      var myTime = new Date();
      var now = myTime.getTime();
      var end = new Date(Date.parse(aim_time.replace(/-/g, "/"))).getTime();
      var leftTime = end - now;
      var day, hour, min, sec, ms;
      if (leftTime >= 0) {
        day = Math.floor(leftTime / 1000 / 60 / 60 / 24);

        hour = Math.floor((leftTime / 1000 / 60 / 60) % 24); //需要显示天数 则用这一行  11天 10 时 41 分 14 秒
        // hour = Math.floor(((leftTime / 1000 / 60 / 60) % 24) + day * 24);     //如果不需要显示天数 则用这一行     243 时 41 分 14 秒

        min = Math.floor((leftTime / 1000 / 60) % 60);
        sec = Math.floor((leftTime / 1000) % 60);
        ms = Math.floor(leftTime % 1000);
        if (day < 10) {
          day = "0" + day;
        }
        if (ms < 100) {
          ms = "0" + ms;
        }
        if (sec < 10) {
          sec = "0" + sec;
        }
        if (min < 10) {
          min = "0" + min;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
      } else {
        // alert("已截止");
      }
      this.day = day;
      this.hour = hour;
      this.min = min;
      this.sec = sec;
      // document.getElementById('millisec').innerHTML = ms    //毫秒
    }
  },
  beforeDestroy() {
    //退出页面前关闭定时器
    clearInterval(this.intervalId);
  }
};
</script>
<style lang='scss' scoped>

</style>
