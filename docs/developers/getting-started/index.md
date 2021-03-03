---
description:
---

# Getting Started

In this tutorial we'll go over how to get started adding a live-stream to your
application using Livepeer.

## Installation

First, download the latest mainnet compatible release for your platform from the
[releases](https://github.com/livepeer/go-livepeer/releases) page. If you are
using OSX, download `livepeer-darwin-amd64.tar.gz`. If you are using Linux,
download `livepeer-linux-amd64.tar.gz`.

To download the file using wget:

```
$ wget https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-<YOUR PLATFORM>-amd64.tar.gz
```

After downloading the file, untar the archive and move the `livepeer` binary so
that it is executable within your `$PATH`:

```
$ tar -zxvf livepeer-<YOUR_PLATFORM>-amd64.tar.gz
$ mv livepeer-<YOUR_PLATFORM>-amd64/livepeer /usr/local/bin
$ mv livepeer-<YOUR_PLATFORM>-amd64/livepeer_cli /usr/local/bin
```

## Run a broadcaster node

Starting livepeer with the -broadcaster flag starts the node in broadcaster mode
enabling you to stream livepeer video into the Livepeer network.

`livepeer -network rinkeby -ethUrl <ETH_RPC_URL> -broadcaster -currentManifest`

An Ethereum RPC provider needs to be specified via the `-ethUrl` flag when
starting `livepeer` in order to connect to mainnet or Rinkeby.

If you do not want to run your own Ethereum node, you can use services such as
[Infura](https://infura.io/) or [Alchemy](https://alchemyapi.io/) that host
Ethereum nodes on behalf of users.

ie `https://rinkeby.infura.io/v3/[PRODUCT_ID]`

See the [Infura docs](https://infura.io/docs/gettingStarted/makeRequests.md) for
more details on how to obtain a `<PROJECT_ID>`.

Note: for the sake of this guide, we'll be live streaming using the Rinkeby
testnet network. You can think of this network like a sandbox environment for
testing your live streams. If you're live-streaming in a production setting make
sure to change the network to "mainnet".

## Deposit funds for broadcasting

You will need to deposit funds used to pay the node operators on the network
(orchestrators) responsible for transcoding your live video. Node operators get
paid in a cryptocurrency called Ether (ETH).

Since were using the rinkeby network you'll need get some (free) test ETH. You
can get some [here](https://faucet.rinkeby.io/).

Once you've acquired your test ETH, in a separate terminal window other than the
one that is running livepeer, run:

`$ livepeer_cli`

This command starts the CLI interactive wizard which can be used to issue
commands to be executed by your broadcaster node.

Select the following option:

`1. Invoke "deposit broadcasting funds" (ETH)`

Upon selecting the option, you should be prompted to entire the amount of ETH to
allocate for your deposit and reserve. Broadcasting funds are split into a
deposit and a reserve. Deposit funds are used to pay any active orchestrator on
the network. Reserve funds guarantee active orchestrators up to a fixed cap to
ensure that orchestrators are paid fairly even if a broadcaster depletes its
primary deposit. The distinction between the deposit and the reserve arises from
the probabilistic micropayment protocol that broadcasters use to pay
orchestrators - see this blog post for more details.

After answering the wizard’s prompt, you should see a transaction submitted by
your node. After the transaction confirms, you can see your updated deposit and
reserve by refreshing the wizard.

Congrts. Your broadcasting wallet is loaded up and you're ready to begin
broadcasting.

## Start broadcasting

Livepeer supports live streaming using the RTMP protocol, which is supported by
most broadcast software/hardware as well as open source software for mobile
applications.

For this guide, we recommend [OBS](https://obsproject.com/download). Once you
have it downloaded and installed follow these steps to start live streaming:

1. Navigate to Settings -> Stream
2. Enter the RTMP Server URL provided by your broadcaster node
   (`rtmp://127.0.0.1:1935`)
3. At the bottom of the window is a box called 'Sources'. Click on the + (or
   right click inside the box) and pick the source you want. As a few examples,
   select Game Capture if you're capturing a game, Window for non-game
   applications, or Video Capture Device for a webcam or capture card.
4. Double check that all your settings are how you want them in Settings ->
   Output. Then, just hit Start Streaming.

## Play live stream

To play back your live stream, use the playback url that was created for you by
your broadcaster node.

`http://localhost:8935/stream/current.m3u8`

```html
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

<video id="my-player" controls style="width: 100%; max-width: 500px" />

<script>
  const videoEl = document.querySelector("#my-player");
  const src = "http://localhost:8935/stream/current.m3u8";
  if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
    // Some browers (safari and ie edge) support HLS natively
    videoEl.src = src;
  } else if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(videoEl);
  } else {
    console.error("This is a legacy browser that doesn't support MSE");
  }
</script>
```
