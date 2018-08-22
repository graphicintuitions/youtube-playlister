import Vue from 'vue'
import VueCustomElement from 'vue-custom-element'
import VideoList from './components/VideoList'
import 'document-register-element/build/document-register-element'

Vue.use(VueCustomElement)

Vue.customElement('youtube-playlist', VideoList, {
  props: {
    apiKey: String,
    playlistId: String,
    useModal: {
      default: false,
      type: Boolean,
    }
  },
})