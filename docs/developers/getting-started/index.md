---
description:
---

# Getting Started

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
enabling you to stream video to be transcoded on the network.

`livepeer -network rinkeby -ethUrl <ETH_RPC_URL> -broadcaster`

An Ethereum RPC provider needs to be specified via the `-ethUrl` flag when
starting `livepeer` in order to connect to mainnet or Rinkeby.

If you do not want to run your own Ethereum node, you can use services such as
[Infura](https://infura.io/) or [Alchemy](https://alchemyapi.io/) that host
Ethereum nodes on behalf of users.

See the [Infura docs](https://infura.io/docs/gettingStarted/makeRequests.md) for
more details on how to obtain a `<PROJECT_ID>`.

## Deposit funds for broadcasting

You will need to deposit funds (ETH) used to pay orchestrators on the network
for transcoding video.

In a separate terminal window other than the one that is running livepeer, run:

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
