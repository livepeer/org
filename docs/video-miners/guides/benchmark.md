# Benchmark transcoding

- [Benchmark transcoding](#benchmark-transcoding)
  - [Pre-requisites](#pre-requisites)
  - [Download the test stream](#download-the-test-stream)
  - [Run livepeer_bench](#run-livepeer_bench)

## Pre-requisites

- Make sure `livepeer_bench` is installed by following the [installation guide](https://github.com/livepeer/go-livepeer/blob/master/doc/install.md). `livepeer_bench` is included in all binary releases and can also be built using the build from source instructions

## Download the test stream

A test stream will be used for benchmarking transcoding.

```bash
wget -c https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz
tar -xvf bbb_1080p_30fps_1min_2sec_hls.tar.gz
ls bbb/   # Should print the stream *.ts segments and source.m3u8 manifest
```

## Run livepeer_bench

The number and type of output renditions will affect benchmark results. The following instructions will use a [common output rendition configuration](https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json). Make sure to copy and paste the JSON file for that configuration into a file called `transcodingOptions.json`.

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS> 
```

- `-nvidia` is used to specify a comma delimited string of Nvidia GPU IDs. The flag is only required when transcoding with Nvidia GPUs
- `-concurrentSessions` is used to specify the number of concurrent transcoding sessions. The default value is 1

The first few lines of the output should show the source file, the output rendition profiles, and number of concurrent sessions:

```bash
*---------------------*----------------------------------------------*
| Source File         | .../go-livepeer/bbb/source.m3u8              |
| Transcoding Options | P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 |
| Concurrent Sessions | 1                                            |
*---------------------*----------------------------------------------*
```

As each segment gets transcoded, the segment-wise transcoding metrics will be output in CSV format:

```bash
timestamp,session,segment,transcode_time
2020-12-03 02:21:25.7953,0,0,0.2782
2020-12-03 02:21:25.917,0,1,0.1216
2020-12-03 02:21:26.0199,0,2,0.1029
2020-12-03 02:21:26.1123,0,3,0.09238
2020-12-03 02:21:26.207,0,4,0.09467
2020-12-03 02:21:26.3012,0,5,0.0941
2020-12-03 02:21:26.4,0,6,0.09877
2020-12-03 02:21:26.5025,0,7,0.1025
2020-12-03 02:21:26.6073,0,8,0.1047
2020-12-03 02:21:26.7085,0,9,0.1013
2020-12-03 02:21:26.8179,0,10,0.1093
2020-12-03 02:21:26.9216,0,11,0.1036
2020-12-03 02:21:27.0175,0,12,0.09585
2020-12-03 02:21:27.1185,0,13,0.101
2020-12-03 02:21:27.2134,0,14,0.0949
2020-12-03 02:21:27.3171,0,15,0.1037
2020-12-03 02:21:27.42,0,16,0.1028
2020-12-03 02:21:27.5236,0,17,0.1035
2020-12-03 02:21:27.627,0,18,0.1034
2020-12-03 02:21:27.7622,0,19,0.1352
2020-12-03 02:21:27.8608,0,20,0.09819
2020-12-03 02:21:27.9576,0,21,0.09678
2020-12-03 02:21:28.0526,0,22,0.09495
2020-12-03 02:21:28.148,0,23,0.09533
2020-12-03 02:21:28.2408,0,24,0.09276
2020-12-03 02:21:28.3362,0,25,0.09531
2020-12-03 02:21:28.4292,0,26,0.09297
2020-12-03 02:21:28.5288,0,27,0.09961
2020-12-03 02:21:28.6285,0,28,0.09969
2020-12-03 02:21:28.6961,0,29,0.06757
```

When all the transcoding sessions end it will output the total time taken for transcoding, total number of segments in the stream, and the total duration of the segments:

```bash
Took 3.281 seconds to transcode 30 segments of total duration 60s (1 concurrent sessions)
```

**Note**: This benchmark only gauges local transcoding capacity. Generally, you want the transcode time to at least be lower than the total segment duration which means that you are transcoding locally in under real-time. That being said, the lower the transcode time is relative to the total segment duration, the better because overall transcoding performance on the network depends on how fast video is transcoded *and* how fast video is uploaded/downloaded from an orchestrator.

If you want to get a rough idea of how many streams you can transcode simultaneously, you can increase the number of concurrent sessions via `-concurrentSessions` and compare the total time taken.

To export the segment-wise CSV data to a file `output.csv` and analyze it with other tools:

```bash
livepeer_bench \
    -in bbb/source.m3u8 \
    -transcodingOptions transcodingOptions.json \
    -nvidia <NVIDIA_GPU_IDs> # Only required for transcoding with GPUs
    -concurrentSessions <CONCURRENT_SESSIONS> > output.csv

*---------------------*----------------------------------------------*
| Source File         | .../go-livepeer/bbb/source.m3u8              |
| Transcoding Options | P240p30fps16x9,P360p30fps16x9,P720p30fps16x9 |
| Concurrent Sessions | 1                                            |
*---------------------*----------------------------------------------*
Took 3.281 seconds to transcode 30 segments of total duration 60s (1 concurrent sessions)
```