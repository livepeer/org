# Test

- [Test](#test)
  - [Pre-requisites](#pre-requisites)
  - [Check public accessibility](#check-public-accessibility)

## Pre-requisites

- Make sure your orchestrator is running

## Check public accessibility

1. Install [grpcurl](https://github.com/fullstorydev/grpcurl#installation)

2. Clone the go-livepeer repository:

    ```bash
    git clone https://github.com/livepeer/go-livepeer
    ```

3. Query the gRPC server that should be running at your orchestrator's service address:

    ```bash
    # <SERVICE_ADDR> should be your orchestrator's service address
    grpcurl -insecure -import-path go-livepeer/net -proto lp_rpc.proto <SERVICE_ADDR> net.Orchestrator/Ping
    ```

    If the request is successful, you should see a response that looks like (the actual value does not matter):

    ```bash
    {
        "value": "xpLwLD/j/pk102yS5zsF7/EbF1FsWOo9IAYd4ojyfG4vTC/MtA/4VtwTYt1WmyCSuGdkIKhmWZ2C7ovW8CLuIhw="
    }
    ```