<template>
  <p class="text-right">
    <span v-for="index in level" :key="'complete-lvl-' + index">
      <font-awesome-icon :icon="['fas', 'circle']" />
    </span>
    <span
      v-for="index in maxLevel - level"
      :key="'incomplete-lvl-' + index"
      style="color: gray"
    >
      <font-awesome-icon :icon="['far', 'circle']" />
    </span>
  </p>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 3,
    },
    maxLevel: {
      type: Number,
      default: 5,
    },
  },
};
</script>
