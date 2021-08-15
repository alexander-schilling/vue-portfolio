<template>
  <b-card bg-variant="dark" text-variant="white" header-class="p-0">
    <template #header>
      <b-carousel
        v-if="images"
        v-model="slide"
        :interval="10000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <template v-for="(image, index) in images">
          <b-carousel-slide :key="'carousel-slide' + index">
            <template #img>
              <b-img :src="image.src" fluid center></b-img>
            </template>
          </b-carousel-slide>
        </template>
      </b-carousel>

      <b-embed
        v-if="embed"
        type="iframe"
        :aspect="aspect"
        :src="embed"
      ></b-embed>
      <b-embed v-if="video" type="video" :aspect="aspect" controls>
        <source :src="video" :type="videotype" />
      </b-embed>
    </template>

    <b-card-text>
      <h4>
        {{ title }}
        <b-button
          v-if="!nomodal"
          variant="outline-primary"
          @click="modalShow = !modalShow"
          >{{ $t("buttons.expand") }}
        </b-button>
      </h4>
    </b-card-text>

    <hr />

    <b-card-text class="text-justify">
      {{ description }}
    </b-card-text>

    <b-modal
      v-model="modalShow"
      :title="title"
      size="xl"
      header-bg-variant="dark"
      body-bg-variant="dark"
      footer-bg-variant="dark"
    >
      <b-container>
        <b-row class="mb-3">
          <b-col>
            <b-carousel
              v-if="images"
              v-model="slide"
              :interval="10000"
              controls
              indicators
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <template v-for="(image, index) in images">
                <b-carousel-slide
                  :key="'modal-carousel-slide' + index"
                  :caption="image.caption"
                  :text="image.text"
                >
                  <template #img>
                    <b-img :src="image.src" fluid center></b-img>
                  </template>
                </b-carousel-slide>
              </template>
            </b-carousel>

            <b-embed
              v-if="embed"
              type="iframe"
              :aspect="aspect"
              :src="embed"
              allowfullscreen
            ></b-embed>
            <b-embed v-if="video" type="video" :aspect="aspect" controls>
              <source :src="video" :type="videotype" />
            </b-embed>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <p>{{ description }}</p>
          </b-col>
        </b-row>
      </b-container>

      <template #modal-footer>
        <b-button class="mt-2" block @click="modalShow = !modalShow">
          {{ $t("buttons.close") }}
        </b-button>
      </template>
    </b-modal>
  </b-card>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
    embed: {
      type: String,
    },
    video: {
      type: String,
    },
    videotype: {
      type: String,
      default: "video/mp4",
    },
    aspect: {
      type: String,
      default: "16by9",
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    nomodal: {
      type: Boolean,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      modalShow: false,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.carousel-caption {
  margin-top: 10px;
  position: relative;
  left: auto;
  right: auto;
}
</style>
