import React from 'react'

const DonationsForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" id="nameInput" placeholder="John Doe" onChange={props.handleDonorName} value={props.donorName}/>
        </div>
        <div class="form-group">
          <label>Caption</label>
          <input type="text" class="form-control" id="captionInput" placeholder="..." onChange={props.handleDonationCaption} value={props.donationCaption}/>
        </div>
        <div class="form-group">
          <label>Amount to Donate</label>
          <input type="range" class="custom-range" id="amountInput" min="5" max="1000" onChange={props.handleDonationAmount} value={props.donationAmount}/>
          <blockquote class="blockquote text-right">
            <p class="h3 mb-0">{props.donationAmount}</p>
          </blockquote>
          </div>
        <button type='submit' class="btn btn-lg btn-success my-4">Donate</button>
      </form>
    )
  }


export default DonationsForm
