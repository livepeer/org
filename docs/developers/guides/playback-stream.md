# How to playback your stream

Make sure you have used `-currentManifest` to start your Livepeer node. You can watch your stream via:

Use `http://localhost:8935/stream/current.m3u8` as the URL for the video stream, replacing `localhost` with the IP of your server if running yoru Broadcaster node remotely. 

Playing the stream using the `ffplay` FFMPEG command.

`ffplay http://localhost:8935/stream/current.m3u8`
