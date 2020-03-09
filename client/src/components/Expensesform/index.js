import React, {useState} from "react";


const Expensesform = (


) => {

    return( 
      
      <form>
        <div className="form-group form-dolist">

            <label className ="Dolist-label" htmlFor="budget"> Specify your total budget($)</label>
            <input
              id="budget"
              name= "budget"
              type="number"
              className="form-control input-dolist"
              placeholder="budget"
            />

            <label className ="Dolist-label" htmlFor="item-name">Item Name</label>
            <input
              id="item-name"
              name= "item"
              type="text"
              className="form-control input-dolist"
              placeholder="Item Name"
            />
            
            <label className ="Dolist-label" htmlFor="amount">Amount Paid</label>
            <input
              id="amount"
              name= "amount"
              type="number"
              className="form-control input-dolist"
              placeholder="amount"
            />

            <label for="blood-input"><strong>Category</strong></label>
            <select id="blood-input" class="form-control">
                <option selected>Choose...</option>
                <option> Reception Venue & Rentals </option>
                <option> Ceremony Location Fee </option>
                <option> Food & Service</option>
                <option> Photographer & Videographer </option>
                <option> Decorations & flowerset </option>
                <option> Music  </option>
                <option> Makeup artist & hair styling </option>
                <option> Bride Gown & Alterations </option>
                <option> Bride's Accessories</option>
                <option> Bride's Bouquet</option>
                <option> Bridesmaid</option>
                <option> Groom's Tux or Suit </option>
                <option> Groom's Accessories </option>
                <option> Groomsmen  </option>
                <option> Honeymoon </option>
                <option> Others</option>
            </select>

            <label className ="Dolist-label" htmlFor="description">note</label>
            <textarea 
            className="form-control input-dolist"
            name="description"
            id="note"
            placeholder="add you note"
            />
            
            <button 
            type="button"
            className="btn btn-success toDolist-btn">
             save
            </button>
      
        </div>
    </form>
    
    )
}

export default Expensesform;



