<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <div v-text="formatRange()"></div>
  </div>
</template>

<script>
import { increment, decrement } from './logics';
import { formatRange } from "../../logics/formatRange.ts"
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    formatRange() {
      return formatRange(new Date('1995-12-17T03:24:00'),  new Date('1999-12-17T03:24:00'))
    },
    increment() {
      this.count = increment(this.count);
    },
    decrement() {
      this.count = decrement(this.count);
    }
  }
}
</script>
