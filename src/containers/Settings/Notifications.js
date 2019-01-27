import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, Fields, FieldArray, reduxForm, isDirty } from 'redux-form'
import { Tag, Spin } from 'antd'
import actions from '../../redux/notifications/actions'
import NotificationsWrapper from './Notifications.style'
import Input, { formInput } from '../../components/uielements/input'
import Checkbox from '../../components/uielements/checkbox'
import Button from '../../components/uielements/button'
import IntlMessages from '../../components/utility/intlMessages'

const { fetchSubscriptions, updateSubscriptions } = actions
const renderLabel = (field) => {
  return(
    <div className="category">
      {field.input.value}
    </div>
  )
}

const renderItemName = (field) => {
  return(
    <span className="item-label">
      {field.input.value}
    </span>
  )
}

const renderCheckbox = (field)  => {
  return(
  <div className="checkbox">
    <Checkbox onChange={field.input.onChange} checked={field.input.value} />
  </div>
  )
}

const renderItems = ({fields}) => (
  <React.Fragment>
      { fields.map((item, index) => (
        <div className="item-row">
          <Field component={renderItemName} type="text"  name={`${item}.name`}  />
          <Field component={renderCheckbox}   name={`${item}.subscribed`}  />
        </div>
      )
      )}
  </React.Fragment>
)


const renderSubscriptions = ({ fields }) => (
  <React.Fragment>
      { fields.map((subscription, index) => (

            <div className="susbscription-list">
               <Field component={renderLabel} type="text"  name={`${subscription}.category`}  />
               <FieldArray name={`${subscription}.items`} component={renderItems}/>
            </div>  
        
          )

      )}
  </React.Fragment>
)

class NotificationHandler extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.updateSubscriptions(values)
  }

  render() { 
    return (
      <NotificationsComponent 
      onSubmit={this.handleSubmit}
      isLoading={this.props.isLoading}
      initialValues={this.props.initialValues}
      fetchSubscriptions={this.props.fetchSubscriptions}
      isDirty={this.props.isDirty}
      />
    )

  }
}

class Notifications extends Component {

  componentDidMount() {
    this.props.fetchSubscriptions()
  }

  render() {
    const { isDirty, handleSubmit, isLoading } = this.props
    
    return (
      <NotificationsWrapper onSubmit={handleSubmit}>
        <div className="header">
          <IntlMessages id="notifications.explainer" />
        </div>

        <React.Fragment>
          <FieldArray name="subscriptions" component={renderSubscriptions}/>
          <Button type="normal" disabled={!isDirty} loading={isLoading} htmlType="submit" className="submit-button"><IntlMessages id="notifications.saveChanges" /></Button>
        </React.Fragment>

      </NotificationsWrapper>
    );
  }
}

let NotificationsComponent = reduxForm({
  form: 'Notifications',
  enableReinitialize: true,
})(Notifications)


export default connect(
  state => ({
    isLoading: state.App.get('isLoading'),
    isDirty: isDirty('Notifications')(state),
    initialValues: {
      subscriptions: state.Notifications.get('subscriptions')
    }
  }),
  { updateSubscriptions, fetchSubscriptions }
)(NotificationHandler)
