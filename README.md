# demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 组件访问 State 中数据的两种方式

- 使用 `this.$store.state` 来进行访问
- 使用 `mapState` 来进行访问

> 1.从 vuex 中按需导入 mapState 函数
> `import {mapState} from 'vuex'`

> 2.通过`mapState`函数将当前组件需要的全局数据，映射到当前组件的 computed 计算属性

```vue
computed: { ...mapState(['count']) }
```

# Mutation--修改 State 中的数据

使用 Mutation，在 Motation 中添加一个方法对 state 进行修改，出发 Mutation 的方式有两种：

- 调用`this.$store.commit`方法来进行触发
- 调用`mapMutations`来进行触发

> 1.从 vuex 中按需导入 mapMutations 函数
> `import { mapMutations } from 'vuex'`

> 2.通过`mapMutations`函数将需要的 Mutations 函数，映射到当前组件的 methods 方法

```vue
methods: { ...mapMutations (['add', 'addN']) }
```

> 需要注意的是：
> **_Mutations 中不能写异步的代码，否则页面变了但是实际的值没有改变_**  
> 使用**Action**来处理异步操作

# Action--异步操作

如果通过异步操作变更数据，必须通过 Action，不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据

> 定义

```vue
actions:{ addAsync(context){ setTimeout(()=>{ context.commit('add') },1000) } }
```

> 触发方式

- 调用`this.$store.dispatch`触发 Action
- 调用`mapActions`触发 Action

> 第一种

```vue
this.$store.dispatch('addAsync')
```

> 第二种 1.从 vuex 中按需导入 mapActions 函数
> `import { mapActions } from 'vuex'`

> 2.通过`mapActions`函数将需要的 Actions 函数，映射到当前组件的 methods 方法

```vue
methods: { ...mapActions (['addAsync', 'addNAsync']) }
```

# Getter--对 store 中数据加工处理

1. Getter 加工处理 store 中的数据，生成新数据，但是不会对 store 中的数据进行修改，类似于 Vue 中的计算属性。
2. Store 中数据变化，Getter 也会跟着变化。

```vue
getters:{ showNum: state => { return '当前最新数量为' + state.count } }
```

3. 使用方式

- 通过`this.$store.getters.名称`访问
- 通过`mapGetters`访问

