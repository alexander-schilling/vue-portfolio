<template>
  <span>
    <span v-for="index in level" :key="'complete-lvl-' + index">
      <font-awesome-icon :icon="['fas', 'circle']" />
    </span>
    <span v-for="index in maxLevel - level" :key="'incomplete-lvl-' + index">
      <font-awesome-icon :icon="['far', 'circle']" />
    </span>
  </span>
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
