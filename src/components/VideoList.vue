<template>
    <div id="yt-playlist-videos">
        <ul>
            <VideoListItem
                    v-for="video in videos"
                    :key="video.id"
                    :title="video.snippet.title"
                    :description="video.snippet.description"
                    :video-id="video.snippet.resourceId.videoId"
                    :use-modal="useModal"
                    :thumb="video.snippet.thumbnails.high.url"/>
        </ul>
    </div>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: {
    apiKey: String,
    playlistId: String,
    useModal: {
      default: false,
      type: Boolean,
    }
  },
  mounted () {
    fetch(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=' + this.playlistId +
      '&key=' + this.apiKey)
      .then(response => (response.json().then(videos => (this.videos = videos.items))))
  },
  data () {
    return {
      videos: [],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    #yt-playlist-videos * {
        box-sizing: border-box;
    }
</style>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        margin-top: 40px;
        padding: 0;
        text-align: left;
    }

</style>
