import React, {Component} from 'react'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import IntlMessages from '../../components/utility/intlMessages'
import Wrapper from './Exchange.style.js'
import ImageBibox from '../../image/exchanges/bibox.png'
import ImageHitbtc from '../../image/exchanges/hitbtc.png'
import ImageIdex from '../../image/exchanges/idex.png'
import Button from '../../components/uielements/button'


class Exchange extends Component {

  render() {
    return(
      <LayoutContentWrapper>
        <LayoutContent>
          <Wrapper>
            <div className="headline">
              <IntlMessages id="crypto20.exchange_listings" />
            </div>
            <div className="content">
              <IntlMessages id="crypto20.exchange_heading" />
            </div>

            <div className="headline">
              <img alt="#" src={ImageBibox} />
              <a href="https://www.bibox.com/login/register?id=11135832&lang=en" target="_blank" rel="noopener noreferrer">
                <Button title="sign up to Bibox">
                  <IntlMessages id="crypto20.exchange_bibox" />
                </Button>
              </a>
            </div>

            <div className="headline">
              <img alt="#" src={ImageHitbtc} />
              <a href="https://hitbtc.com/?ref_id=5a43d911e5745" target="_blank" rel="noopener noreferrer">
                <Button title="sign up to">
                  <IntlMessages id="crypto20.exchange_hitbtc" />
                </Button>
              </a>
            </div>

            <div className="headline">
              <img alt="#" src={ImageIdex} />
              <a href="https://idex.market/eth/c20" target="_blank" rel="noopener noreferrer">
                <Button title="sign up to">
                  <IntlMessages id="crypto20.exchange_idex" />
                </Button>
              </a>
            </div>

          </Wrapper>
        </LayoutContent>
      </LayoutContentWrapper>
    )
  }
}
export default Exchange