import React from 'react'

const CardOne = () => {
    return (
        /**
         * A function that creates a card for the free plan.           
         * @returns A card for the free plan.           
         */
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                    <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        <li><span><i class="bi bi-check2"></i></span>  Single User</li>
                        <li><span><i class="bi bi-check2"></i></span>  5GB Storage</li>
                        <li><span><i class="bi bi-check2"></i></span>  Unlimited Public Projects</li>
                        <li><span><i class="bi bi-check2"></i></span>  Community Access</li>
                        <li class="text-muted"><span><i class="bi bi-x-lg"></i></span>  Unlimited Private Projects</li>
                        <li class="text-muted"><span><i class="bi bi-x-lg"></i></span>  Dedicated Phone Support</li>
                        <li class="text-muted"><span><i class="bi bi-x-lg"></i></span>  Free Subdomain</li>
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

export default CardOne