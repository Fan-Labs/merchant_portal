import React from 'react'
import { Button, Modal } from 'antd'
import LayoutContentWrapper from '../../components/utility/layoutWrapper'
import LayoutContent from '../../components/utility/layoutContent'
import OffersWrapper from './Offers.style'
import OffersModel from '../../models/Offers/Offers'
import CreateOfferForm from './CreateOfferForm'

const Offers = ({ offers, openModal, closeModal, isModalOpen }) => (
  <LayoutContentWrapper>
    <LayoutContent>
      <OffersWrapper>
        <div className="title">Offers</div>
        Offers are your way of rewarding customers. Create them below by clicking on the add button and selecting which type of offer you would like at each of your businesses.
        <br />
        {/*JSON.stringify(offers)*/}
				<Button
					type="primary"
					shape="round"
					icon="plus"
					onClick={openModal}
				/>
				<Modal
					visible={isModalOpen}
					onCancel={closeModal}
				>
					<CreateOfferForm />
				</Modal>



      </OffersWrapper>
    </LayoutContent>
  </LayoutContentWrapper>
)


export default OffersModel(Offers);