import React from 'react'

export default ({ location, type }) => {
    if (!location || !type) {
        return null
    }
    
    return (
    <div>
        {type}
        <div className='name'>Name: {location.name}</div>
        <div className='address'>Address: {location.address}</div>
        <div className='city'>City: {location.city}</div>
        <div className='state'>State: {location.state}</div>
    </div>
    )
}
