import React, { Component } from 'react';  

class addUserForms extends Component {
    render() {
        return(
            <form className="form formControl row g-3">
                <div class="col-auto col-xs-12">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" className="form-control" id="staticEmail2" placeholder="name"/>
                </div>
                <div class="col-auto col-xs-12">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="col-auto col-xs-12">
                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                <input type="text" className="form-control" id="staticEmail2"/>
                </div>
                <div class="col-auto col-xs-12">
                <label for="exampleFormControlInput1" class="form-label">Birthdate</label>
                <input type="text" className="form-control" id="staticEmail2" placeholder="0000/00/00"/>
                </div>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Open this select menu</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
                </select>
                <div class="col-auto">
                <button type="submit" className="btn btn-primary mb-3">register</button>
                </div>
            </form>
        )
        
    }
    
}  
export default addUserForms;
        
      