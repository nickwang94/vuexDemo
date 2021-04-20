<template>
  <div>
    <h3>{{ showNum }}</h3>
    <button @click="btnHander1">-1</button>
    <button @click="btnHander2">-N</button>
    <button @click="btnHander3">-1 Async</button>
    <button @click="btnHander4">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    btnHander1 () {
      this.sub()
    },
    btnHander2 () {
      this.subN(3)
    },
    btnHander3 () {
      this.subAsync()
    },
    btnHander4 () {
      this.subNAsync(3)
    }
  }
}
</script>
