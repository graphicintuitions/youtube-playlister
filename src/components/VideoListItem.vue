<template>
    <li>
        <div class="video-thumb">
            <a v-on:click="showVideo" :href="url" target="_blank"><img :src="thumb"></a>
        </div>
        <div class="video-desc">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <p><a v-on:click="showVideo" :href="url" target="_blank">Play Video</a></p>
        </div>
        <div v-if="useModal">
            <modal v-if="showModal" @close="showModal = false">
                <div slot="body" v-html="embedCode"></div>
            </modal>
        </div>
    </li>
</template>

<script>
import Modal from './Modal'

export default {
  name: 'VideoListItem',
  props: {
    title: String, 
    description: String,
    thumb: String,
    videoId: String,
    useModal: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    Modal
  },
  computed: {
    url() { 
      return 'https://www.youtube.com/watch?v=' + this.videoId 
    }, 
    embedCode() {
      return '<div class="video-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.videoId + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
    },
  },
  methods: {
    showVideo(event) {
      if(this.useModal){
        event.preventDefault();
        this.showModal = true;
      }
    }
  }
}
</script>

<style>
    .video-wrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        padding-top: 25px;
        height: 0;
    }

    .video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li:after {
        content: "";
        display: table;
        clear: both;
        margin-bottom: 40px;
    }

    h3 {
        margin-top: 0;
    }

    .video-thumb {
        max-width: 33.333%;
        float: left;
    }

    .video-thumb img {
        width: 100%;
    }

    .video-desc {
        padding-left: 40px;
        max-width: 66.666%;
        float: left;
    }
</style>
