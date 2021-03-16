# How to deposit and withdraw funds for broadcasting

## Depositing broadcasting funds

You will need to deposit funds used to pay for transcoding work done on the Livepeer network.
The operators responsible for transcoding your live video are called Orchestrators. Orchestrators get
paid in a cryptocurrency called Ethereum (ETH).

If you haven't already, you need to acquire ETH to pay for transcoding. Visit https://ethereum.org/en/get-eth/ to learn more.

After acquiring ETH, in a separate terminal window other than the
one that is running livepeer, run:

`$ livepeer_cli`

This command starts the CLI interactive wizard which can be used to issue
commands to be executed by your broadcaster node.

Select the following option:

`1. Invoke "deposit broadcasting funds" (ETH)`

You will be prompted to entire the amount of ETH to
allocate for your deposit and reserve. 
- Deposit funds are used to pay any active Orchestrator on
the network. 
- Reserve funds guarantee active orchestrators up to a fixed cap to
ensure that Orchestrators are paid fairly even if a broadcaster depletes its
primary deposit. 

If you want to learn more about the distinction between the deposit and the reserve, read this [blog post](https://medium.com/livepeer-blog/streamflow-probabilistic-micropayments-f3a647672462) about the probabilistic micropayment protocol that Broadcasters use to pay
Orchestrators

After answering the wizard’s prompt, you should see a transaction submitted by
your node. After the transaction confirms, you can see your updated deposit and
reserve by refreshing the wizard.

Your broadcasting wallet is loaded up and you are ready to begin
Broadcasting video into the Livepeer transcoding network.

Next, learn how to configure your broadcasting preferences.
