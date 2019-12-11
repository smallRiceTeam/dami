<template>
  <div class="address">
    <QMapHeader title="选择收货地址" :is-left="true" />
    <div class="city_search">
      <div class="search">
        <span class="city" @click="$router.push('/city')">
          {{city}}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input type="text" v-model="search_val" placeholder="小区/写字楼/学校" />
      </div>
      <QMapLocation @click="selectAddress" :address="address" />
    </div>
    <div class="area">
      <ul class="area_list" v-for="(items,index) in areaList" :key="index">
        <li @click="selectAddress(items)">
          <h4>{{items.name}}</h4>
          <p>{{items.district}}{{items.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import QMapHeader from "../components/QMapHeader";
import QMapLocation from "../components/QMapLocation";
export default {
  name: "QMap",
  components: {
    QMapHeader,
    QMapLocation
  },
  data() {
    return {
      city: "", //当前的城市；
      search_val: "",
      areaList: ""
    };
  },
  watch: {
    search_val() {
      this.searchPlace();
    }
  },
  methods: {
    searchPlace() {
      // console.log(this.search_val);
      //高德提供方法
      const self = this;
      AMap.plugin("AMap.Autocomplete", function() {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: "self.city"
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(self.search_val, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          // console.log(result);
          self.areaList = result.tips;
        });
      });
    },
    selectAddress(items) {
      if (items) {
        //设置地址,保存到vuex中进行管理
        this.$store.dispatch(
          "setAddress",
          items.district + items.address + items.name
        );
      } else {
        this.$store.dispatch("setAddress", this.address);
      }
      //存储完跳转到QShopAddress页面
      this.$router.push("/QShopAddress");
    }
  },
  computed: {
    address() {
      return this.$store.getters.location.formattedAddress;
    }
  },
  //在路由到组件前
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.city = to.params.city;
    });
  }
};
</script>

<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}

.search {
  background-color: #eee;
  height: .4rem;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: .4rem;
}
.search .city {
  padding: 0 .05rem;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}

.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>