<template>
  <div>
    <p data-testId="counterInformation">當前點擊次數：{{ count }}</p>
    <button @click="increment">
      點我加 1
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    }
  }
};
</script>
