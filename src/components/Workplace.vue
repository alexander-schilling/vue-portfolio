<template>
  <div
    class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3"
    v-bind:class="{ 'ml-auto': first, 'mr-auto': last }"
  >
    <b-card
      :img-src="imgSrc"
      img-alt="Image"
      img-top
      bg-variant="dark"
      text-variant="white"
      no-body
      class="h-100"
    >
      <b-card-body>
        <b-card-title>
          {{ title }}
          <a v-if="website" :href="website">
            <font-awesome-icon :icon="['fas', 'globe']" />
          </a>
          <a v-if="linkedin" :href="linkedin" class="ml-3">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </b-card-title>
        <b-card-sub-title class="mb-2">{{ subtitle }}</b-card-sub-title>
        <b-card-text class="text-justify">
          <span v-html="description"></span>
        </b-card-text>
      </b-card-body>

      <b-list-group flush v-if="listOthers && listOthers.length > 0">
        <b-list-group-item
          class="list-group-item"
          v-for="(item, index) in listOthers"
          :key="`${title}_${index}`"
        >
          <span v-html="item"></span>
        </b-list-group-item>
      </b-list-group>

      <template #footer>
        <small class="text-muted">{{ date.toUpperCase() }}</small>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Workplace",
  props: {
    first: {
      type: Boolean,
    },
    last: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "Workplace",
      required: true,
    },
    subtitle: {
      type: String,
      default: "Software Developer",
      required: true,
    },
    imgSrc: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    listOthers: {
      type: Array[String],
    },
    date: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
};
</script>

<style>
.list-group-item {
  background-color: transparent;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
