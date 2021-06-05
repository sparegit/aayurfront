import React from 'react'

function Card(props) {
    return (
      <div className="card" style ={{width:"18rem"}}>
      <img className="card-img-top" src="https://images.financialexpress.com/2020/09/ayurveda-l-pti-1200.jpeg" alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.med.medicineName}</h5>
        <p className="card-text">Rs.{props.med.medicineCost}</p>
      </div>
    </div>
    )
}

export default Card
