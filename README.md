# Youtube Playlister
This script allows you to show a list of youtube videos on your site by simply embedding a script and defining a custom component.

## Getting Started
Upload ```dist/youtube-playlister.js``` file to publically accessible place. Also see the ```demo/``` directory for a full example.
 
```html
<youtube-playlist 
    use-modal="true" 
    playlist-id="my-playlist-id"
    api-key="my-youtube-api-key">
</youtube-playlist>
<script src="my-path-to/youtube-playlister.js"></script>
```

## Development
This uses [Vue](https://vuejs.org/) and [Vue Custom Element](https://github.com/karol-f/vue-custom-element) in order to provide a custom element on the page that you can simply configure. 
  
To test your components :

- Launch webpack : `npm run dev` (watch mode)
- Open `demo/example.html` in a browser
- Edit `src/main.js` or your component file
- Refresh the page

## Bundle a release

```
npm run build
```

File will be placed in `dist/youtube-playlister.js`.

Refer to `webpack.config.js` for customization options.