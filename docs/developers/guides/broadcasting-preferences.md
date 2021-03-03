# How to configure your broadcasting preferences

You can configure the following broadcasting preferences using the CLI wizard:

- The maximum price per pixel you are willing to pay.
- The set of video profiles that you want your input video to be transcoded into

In `livepeer_cli`, select the following option:

```
16. Set broadcast config
```

First, you will set the maximum transcoding price. You will be prompted for a
maximum price your willing to pay in wei per pixel.

Then, you will pick a set of video profiles that you would like your input video
to be transcoded to. The set of video profiles presented in the wizard
correspond to the
[standard video profiles](https://github.com/livepeer/lpms/blob/master/ffmpeg/videoprofile.go)
currently supported by the node.
