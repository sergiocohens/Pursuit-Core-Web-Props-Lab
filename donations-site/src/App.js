import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecentDonations from './Components/RecentDonations.jsx'
import Progress from './Components/Progress.jsx'
import DonationsForm from './Components/DonationsForm.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      raisedAmount: 0,
      goalAmount: 3000,
      donations: [],
      donationAmount: 0,
      donorName: '',
      donationCaption: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  
    const { raisedAmount, donationCaption, donationAmount, donorName, donations } = this.state

    donations.push({
      name: donorName,
      amount: donationAmount,
      caption: donationCaption
    })

    this.setState({
      raisedAmount: raisedAmount + parseInt(donationAmount)
    })
  }

  handleDonationAmount = (e) => {
    this.setState({
      donationAmount: e.target.value
    })
  }

  handleDonationCaption = (e) => {
    this.setState({
      donationCaption: e.target.value
    })
  }

  handleDonorName = (e) => {
    this.setState({
      donorName: e.target.value
    })
  }

  render() {
    const { raisedAmount, goalAmount, donationAmount, donorName, donationCaption, donations } = this.state
    return (
      <div className="App">
      <head>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"></link>
        <title>Go Fund Me</title>
      </head>
      <body>
        <section class="jumbotron text-center">
          <h1 class="jumbotron-heading">Go Fund Me</h1>
          <p class="lead text-muted">Help me go on a vacation to a beach somewhere</p>
        </section>
        <div class='container'>
          <div class='row'>
            <RecentDonations
              donations={donations}
            />
            <div class='col-8'>
            <Progress
              raisedAmount={raisedAmount}
              goalAmount={goalAmount}
            />
              <hr />
            <DonationsForm
              donationAmount={donationAmount}
              handleDonationAmount={this.handleDonationAmount}
              donorName={donorName}
              handleDonorName={this.handleDonorName}
              donationCaption={donationCaption}
              handleDonationCaption={this.handleDonationCaption}
              handleSubmit={this.handleSubmit}
            />
            </div>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
          crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
          crossorigin="anonymous"></script>
      </body>
      </div>
    )
  }
}

export default App;
