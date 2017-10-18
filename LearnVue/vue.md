
   # vue 的生命周期：钩子函数
   ## create：=》实例已经创建
   ## beforecompile:编译之前
   ## compiled:编译之后
   ## ready:文本节点插入到文档中
   ## beforeDestroy:销毁之前
   ## destory:销毁
 # vue实例的简单方法
 ```
  vm.$el =就是元素
  vm.$data->就是数据
  vm.$mount->手动挂载
  vm.$options->获取自定义属性
  vm.$destroy->=销毁对象
  vm.$log->查看现在的数据状态
  ```
# v-bind 缩写
```<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```

# v-on 缩写
```
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```

