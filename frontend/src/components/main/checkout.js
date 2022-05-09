import React from 'react'

const Checkout = () => {
  return (
       
      <div className="container" >
      <div className="py-5 text-center" sx={{mb:18}}>
        
        <h2 Style={{color:"black"}}>Checkout Page</h2>
        
      </div>
    
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Flower Name</h6>
                <small className="text-muted">Shop Name</small>
                <small className="text-muted">Quantity</small>
              </div>
              <span className="text-muted">Price</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">Flower Name</h6>
                <small className="text-muted">Shop Name</small>
                <small className="text-muted">Quantity</small>
              </div>
              <span className="text-muted">Price</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">Flower Name</h6>
                <small className="text-muted">Shop Name</small>
                <small className="text-muted">Quantity</small>
              </div>
              <span className="text-muted">Price</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total Price </span>
              <strong>Price</strong>
            </li>
          </ul>
    
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code"/>
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">Redeem</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
    
            <div className="mb-3">
              <label for="username">Username</label>
              <div className="input-group">
                <input type="text" className="form-control" id="username" placeholder="Username" required/>
                <div className="invalid-feedback" style={{width: "100%"}}>
                  Your username is required.
                </div>
              </div>
            </div>
    
            <div className="mb-3">
              <label for="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
    
            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
    
            <div className="mb-3">
              <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder=""/>
            </div>
    
            <div className="row">
            <div className="col-md-3 mb-3">
                <label for="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="" required/>
                <div className="invalid-feedback">
                  Please enter city Name.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address"/>
              <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info"/>
              <label className="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
          </form>
        <hr/>
        </div>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto" sx={{mb:25}}>
      <button class="btn btn-secondary btn-lg" type="button">Proceed to Checkout</button>
      </div>
      <br/>
      <br/>
    </div>

  );
};

export default Checkout;
