# How to run a broadcaster node

Starting livepeer with the `-broadcaster` flag starts the node in broadcaster mode
enabling you to stream livepeer video into the Livepeer network.

`livepeer -network -ethUrl <ETH_RPC_URL> -broadcaster -currentManifest`

An Ethereum RPC provider needs to be specified via the `-ethUrl` flag when
starting `livepeer` in order to connect to mainnet or Rinkeby.

If you do not want to run your own Ethereum node, you can use services such as
[Infura](https://infura.io/) or [Alchemy](https://alchemyapi.io/) that host
Ethereum nodes on behalf of users.

ie `https://infura.io/v3/[PRODUCT_ID]`

See the [Infura docs](https://infura.io/docs/gettingStarted/makeRequests.md) for
more details on how to obtain a `<PROJECT_ID>`.

Next, learn how to deposit broadcasting funds.
