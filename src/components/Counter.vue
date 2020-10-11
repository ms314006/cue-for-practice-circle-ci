<template>
  <div>
    <p>當前點擊次數：{{ $store.getters.count }}</p>
    <button @click="$store.dispatch('increment')">
      點我加 1
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter"
};
</script>
