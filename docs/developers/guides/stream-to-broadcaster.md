# How to send video to a broadcaster node

It is far more convenient to broadcast using existing tools that have features for screen capture, composites, overlays, multiple video and audio sources, etc. One such tool is [OBS](https://obsproject.com/). 

To use OBS, you have to change two settings:

- Settings -> Stream -> URL. 
  - Set it as rtmp://localhost:1935 if running yoru broadcaster node locally
  - If running a remote Livepeer node server, replace `localhost` with the IP address of the server.
- Settings -> Output -> Output Mode. Set it to Advanced. Ensure the following settings are enabled:
  - Encoder: x264
  - Rate Control: CBR
  - Keyframe Interval: 4
- Start streaming as usual.
- 
If the broadcast is successful, you should see a log in the terminal like:

`Video Created With ManifestID: 710ed610`

If you have used `-currentManifest` to start your Livepeer node, you can verify that the broadcast is successful by running curl http://localhost:8935/stream/current.m3u8. It should return a valid HLS playlist like:

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:PROGRAM-ID=0,BANDWIDTH=4000000,RESOLUTION=1120x700
710ed610/source.m3u8
```

## Using FFMPEG

To broadcast using ffmpeg, use the following commands. Again, if running a remote Livepeer node server, replace `localhost` with the IP address of the server.

For Mac:

`ffmpeg -f avfoundation -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 1000k -x264-params keyint=60:min-keyint=60 -acodec aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/movie`

For Linux:

`ffmpeg -f dshow -framerate 30 -pixel_format uyvy422 -i "0:0" -vcodec libx264 -tune zerolatency -b 1000k -x264-params keyint=60:min-keyint=60 -acodec aac -ac 1 -b:a 96k -f flv rtmp://localhost:1935/movie`

You can now verify if the broadcast is successful.

Next, learn how to playback your transcoded stream.
