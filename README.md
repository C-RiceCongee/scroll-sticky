# scroll-percent
## INSTALL
```shell
npm i scroll-percent-changhao
```
## How To use!
main.js
```js
import Vue from 'vue'
import App from './App.vue'
import scrollPercent from "scroll-percent-changhao"
Vue.config.productionTip = false
Vue.use(scrollPercent)
new Vue({
render: h => h(App),
}).$mount('#app')
```

+ watchPercent Get scroll percent

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">

    <scroll-percent ref="st" @watchPercent="watchPercent">
      <template slot="viewElse" slot-scope="{percent}">
        <div style="position: absolute;left: 50%;top: 50%;font-size: 150px;z-index: 999;" class="1" v-show="percent>0.1&&percent<0.3">
          <h2>111</h2>
        </div>
        <div class="2" style="position: absolute;left: 50%;top: 50%;font-size: 150px;;z-index: 999;" v-show="percent>0.3&&percent<0.6">
          <h2>222</h2>
        </div>
        <div class="3" style="position: absolute;left: 50%;top: 50%;font-size: 150px;;z-index: 999;" v-show="percent>0.6">
          <h2>333</h2>
        </div>
      </template>
    </scroll-percent>

    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png"><img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png"><img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png"><img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/logo.png">

  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        images: [],
        canvasContext1: null,
      }
    },
    mounted () {
      this.loadStatic()
    },
    methods: {
      loadStatic () {
        /* eslint-disable */
        const loader = new PxLoader()
       for (let i = 0; i <= 150; i++) {
          this.images[
            i
          ] = loader.addImage(`http://cbistorge.ubtrobot.com/static/uploads/20230424/C_WG_2V1_00${(
            "00" + i
          ).slice(-3)}.png`);
        }
        this.canvasContext1 = this.$refs.st.getContext()
        loader.addCompletionListener(() => this.drawFrame(this.canvasContext1,0,this.images))
        loader.start()
      },
      drawFrame (ctx,current = 0,list = []) {
        if (!ctx) return
        const imgWidth = list[current].width
        const imgHeight = list[current].height
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const scale = Math.max(windowWidth / imgWidth, windowHeight / imgHeight);
        const width = imgWidth * scale;
        const height = imgHeight * scale;
        const x = (windowWidth - width) / 2;
        const y = (windowHeight - height) / 2;
        ctx.drawImage(list[current], x, y, width, height)
      },
      watchPercent (p=0) {
        const idx = Math.floor(this.images.length * p)
        this.drawFrame(this.canvasContext1,idx,this.images)
      }
    },
  }
</script>

<style>
</style>
```

## demo

>Here is the use of this fixed rolling component to obtain a 100% complete fixed rolling frame animation effect!

[demo gif](http://qiniuyun.quancundexiwang.wang/%E5%BD%95%E5%B1%8F_%E9%80%89%E6%8B%A9%E5%8C%BA%E5%9F%9F_20230503144245.gif)
