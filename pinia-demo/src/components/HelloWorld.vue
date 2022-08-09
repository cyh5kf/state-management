<template>
<div>
<h2>{{msg}}</h2>
<h2>{{count}}</h2>
<button @click="addOne">+1</button>
<button @click="onObjClick">修改所有状态</button>
<button @click="actionClick">action修改所有状态</button>
<div>{{store.getCountBuff}}</div>
<div>{{store.getCountBuff}}</div>
<div>{{store.getCountBuff}}</div>
<div>{{store.getCountBuff}}</div>
<div>{{store.getMsgWithThis}}</div>
<h2>Store 互相调用</h2>
<ul>
  <li v-for="item in store.getAllanStoreList" :key="item">{{item}}</li>
</ul>
</div>
</template>

<script setup lang="ts">
  import { mainStore } from '../store';
  import { storeToRefs} from 'pinia'
  const store = mainStore()
  // const { msg } = store
  const {msg, count} = storeToRefs(store)
  const addOne = () => {
    store.count++
  }
  const onObjClick = () => {
    store.$patch((state) => {
      state.count = state.count + 2;
      state.msg = state.msg === 'Hello, world!' ? '疫情快过去吧' : 'Hello, world!';
    })
  }
  const actionClick = () => { 
  store.changeState()
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
