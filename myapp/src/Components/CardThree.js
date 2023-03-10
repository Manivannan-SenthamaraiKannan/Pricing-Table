import React from 'react'

const CardThree = () => {
    return (
        /**
         * A function that creates a card for the Pro plan.           
         * @returns A card for the Pro plan.           
         */
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                    <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        <li><span><i class="bi bi-check2"></i></span>  <strong>Unlimited Users</strong></li>
                        <li><span><i class="bi bi-check2"></i></span>  150GB Storage</li>
                        <li><span><i class="bi bi-check2"></i></span>  Unlimited Public Projects</li>
                        <li><span><i class="bi bi-check2"></i></span>  Community Access</li>
                        <li><span><i class="bi bi-check2"></i></span>  Unlimited Private Projects</li>
                        <li><span><i class="bi bi-check2"></i></span>  Dedicated Phone Support</li>
                        <li><span><i class="bi bi-check2"></i></span>  <strong>Unlimited</strong> Free Subdomains</li>
                        <li><span><i class="bi bi-check2"></i></span>  Monthly Status Reports</li>
                    </ul>
                    <div class="d-grid">
                        <a href="#!" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardThree