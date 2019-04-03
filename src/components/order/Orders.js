import React, { Component } from 'react'
import styled from 'styled-components'

import Location from '../location/Location'
import Button from '../button/Button'
import colors from '../../styles/colors'

class Orders extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: []
    }
  }

  componentDidMount () {
    this.props.firebase.getOrders()
      .then(orders => this.setState({orders}))
  }

  // TODO: test me
  taskCompletionHandler = id => {
    alert(`Imagine I just called a service to mark this delivery completed with an order id : ${id}!`)
  }

  createOrder = (order, i) => {
    return <OrderContainer key={generateKey(order.id, i)}>
      <Location className='location-origin' location={order.origin} type={'Origin'} />
      <Location className='location-destination' location={order.destination} type={'Destination'} />
      <Button 
        className='delivered-button'
        id={order.id}
        onClick={this.taskCompletionHandler} 
      />
    </OrderContainer>
  }

  render() {
    if (this.state.orders.length === 0) {
      return null
    }

    return (
      <div>
        <OrdersHeader>Pending Orders</OrdersHeader>
        {this.state.orders.map((order, i) => this.createOrder(order, i))}
      </div>
    )
  }
}

const OrderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px; 
  background-color: ${colors.white}
  margin-bottom: 8px;
`

const OrdersHeader = styled.div`
  margin-bottom: 8px;
`

const generateKey = (id, index) => `${id}-${index}`

export default Orders
