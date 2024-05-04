import React, { Component } from 'react'



export default class MenuCard extends Component {
  render() {
    return (
      <div class="row row-cols-1 row-cols-md-4 g-2">
        <div class="col">
          <div class="card h-30 w-55">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Relationship</h5>
              <p class="card-text">Therapy helps you build relationships with your partner, family, and loved ones. It can help you move on from the ones that no longer work and stay for the ones that are worth it.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Depression</h5>
              <p class="card-text">Overcome the grip of depression with our compassionate and effective therapy services. Our expert therapists work through evidence-based approaches to help you regain your joy, find inner strength, and live a fulfilling life.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-90">
            <img src="..." class="card-img-top" alt="/Downloads" />
            <div class="card-body">
              <h6 class="card-title">Confidence</h6>
              <small class="card-text text-xs">Overcome the grip of depression with our compassionate and effective therapy services. Our expert therapists work through evidence-based approaches to help you regain your joy, find inner strength, and live a fulfilling life.</small>
            </div>
          </div>
        </div>
      </div>

    )
  }
}













