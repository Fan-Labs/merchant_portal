import React, {Component} from 'react'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import IntlMessages from '../../components/utility/intlMessages'
import Wrapper from './Liquidate.style.js'

class Liquidate extends Component {

  render() {
    return(
      <LayoutContentWrapper>
        <LayoutContent>
          <Wrapper>
            <div className="headline">
              <IntlMessages id="crypto20.liquidate" />
            </div>
            <div className="warning">
              <IntlMessages id="crypto20.liquidate_warning" />
            </div>
            <div className="content">
              The withdrawal functionality is directly coded into the smart contract. Any whitelisted Ethereum address can withdraw at any time - we provide a simple interface here to allow ease of access.
              <br/>
              Verified token holders are able to whitelist their own ethereum addresses which can then be used to withdraw the Net Asset Value of their C20 tokens (in ETH). This withdrawal functionality enforces a lower price bound on the C20 token's exchange value. We directly link the underlying asset value of the fund to all tokens via regular price updates.
              <br/><br/>
              Withdrawing ETH by liquidating your tokens is a simple 3 step process.
              <br/>
              <ul>
                <li><b>Step 0: </b>Make sure you have a whitelisted Ethereum address that has a balance of C20 tokens. You are able to whitelist an address within your account page once you have logged in and are verified.</li>
                <li><b>Step 1: </b>Request a withdrawal by specifying the number of tokens you wish to liquidate. You ae not able to cancel a request once it's made.</li>
                <li><b>Step 2: </b>Wait for the next price update event, this occurs every hour. The smart contract uses a forward pricing policy, which means that your withdrawal is processed at the next token price update event.<br/>As a result, you may get slightly more or less ETH than what the NAV indicates at the time of the withdraw request.</li>
                <li><b>Step 3: </b>Withdraw your ETH. Upon clicking withdraw, your tokens are sent to the fund managers and ETH is transferred to your account.</li>
              </ul>
              <br/>*Note that we never need to know your private keys, all transactional information is handled by Metamask or an Ethereum client of your choice. Anyone is free to create their own Dapp interacting with our <a href="https://github.com/cryptotwenty/">smart contract.</a>
            </div>
            <iframe title="withdraw"
              className="dapp-frame"
              src="https://s3.amazonaws.com/cdn.invictuscapital.com/html/withdrawDapp.html"
              >
            </iframe>
            <div className="headline">
              FAQ
            </div>
            <div className="content">
              <b>How does this DAPP work?</b><br/><br/>
              The above withdraw DAPP takes your Ethereum address from Metamask; this address is then used to make the transactions that interact with the smart contract. There are only two transactions that need to be made; requestWithdraw, and withdraw. These transactions must be ordered as in the steps outlined above, but they can be made from any account that is able to interact directly wiith the smart contract (such as MyEtherWallet).

              <br/><br/><b>What is a whitelisted address?</b><br/><br/>
              A whitelisted address is one that is linked to a verified (KYC'd) profile. This status is stored directly within the smart contract. All CRYPTO20 ICO investors' receiving Ethereum addresses are already whitelisted.

              <br/><br/><b>How is the withdraw DAPP related to the Invictus portal?</b><br/><br/>
              The withdraw DAPP can be seen as completely standalone from the Invitus portal. We only host it here for convenience.

              The addresses of all ICO investors are already whitelisted and can be used to withdraw ETH using the smart contract directly. For new investors and those looking to send to new Ethereum addresses, these addresses must first be whitelisted before they are able to be used for withdrawals.

              <br/><br/><b>Why is my address not whitelisted?</b><br/><br/>
              Either that address is not whitelisted or you have not selected the correct account within Metamask.
            </div>
          </Wrapper>
        </LayoutContent>
      </LayoutContentWrapper>
    )
  }

}
export default Liquidate

