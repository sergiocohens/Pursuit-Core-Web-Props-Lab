import React from 'react'
import Donation from './Donation.jsx'

const RecentDonations = (props) => {
  const donationsList = props.donations.map(donationObj => {
    return (
      <Donation
        name={donationObj.name}
        caption={donationObj.caption}
        amount={donationObj.amount}
      />
    )
  })

  return (
    <ul class="col-4 list-unstyled recent-donations">
      <h5 class='my-4'>Recent Donations</h5>
      {donationsList}
    </ul>
  )
}

export default RecentDonations
