import React from 'react'

const CardTwo = () => {
    return (
        /**
         * A function that creates a card for the Plus plan.           
         * @returns {JSX.Element} A card for the Plus plan.           
         */
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                    <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        <li><span><i class="bi bi-check2"></i></span>  <strong>5 Users</strong></li>
                        <li><span><i class="bi bi-check2"></i></span>  50GB Storage</li>
                        <li><span><i class="bi bi-check2"></i></span>  Unlimited Public Projects</li>
                        <li><span><i class="bi bi-check2"></i></span>  Community Access</li>
                        <li><span><i class="bi bi-check2"></i></span>  Unlimited Private Projects</li>
                        <li><span><i class="bi bi-check2"></i></span>  Dedicated Phone Support</li>
                        <li><span><i class="bi bi-check2"></i></span>  Free Subdomain</li>
                        <li class="text-muted"><span><i class="bi bi-x-lg"></i></span>  Monthly Status Reports</li>
                    </ul>
                    <div class="d-grid">
                        <a href="#!" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTwo;