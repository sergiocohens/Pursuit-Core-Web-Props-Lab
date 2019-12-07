import React from 'react'

const Progress = (props) => {
  return (
    <>
    <h2 class='mb-4'>Raised $ {props.raisedAmount} of <span class='text-muted'>$ {props.goalAmount}</span></h2>
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar" aria-valuenow="25"
        aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
    </>
  )
}

export default Progress
