import React, {useState} from "react";
import { faList} from "@fortawesome/free-solid-svg-icons";
import { faDollarSign} from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Expensesform = ()  => {

    const [showExpenses, setShowExpenses] = useState(false)


   const showHandler = () => {
     setShowExpenses(!showExpenses);
   }

    return( 
            
<section className="section-budget">

        <div className="row">
            <div className="col-1-of-2">
                <button 
                type="button"
                className="btn btn-success  budget-manage-btn"
                onClick= {showHandler}>
                    add your budget
                </button>
            </div>
            <div className= "col-2-of-2">
                
                <label className ="Dolist-label" htmlFor="budget"> Specify your total budget($)</label>
                <input
                    id="budget"
                    name= "budget"
                    type="number"
                    className="form-control input-dolist"
                    placeholder="budget"
                />
            </div>
        </div>

{showExpenses &&  

<div className="row">

    <div className="budget">

        <div className="budget__form">

            <form  className="form">

                <div className=" u-margin-bottom-medium">
                    <h2 className="heading-secondary">
                      set Your budget
                    </h2>
                </div>

                <div className="form__group input-group">

                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        <FontAwesomeIcon className="form__icon" icon={faShoppingBag} />
                        </span>
                    </div>

                    <input 
                    type="text"
                    id="item"
                    className="form__input"
                    name= "item"
                    placeholder="Item Name"
                    required/>
                    <label htmlFor="item" className="form__label">Item Name</label>

                </div>

                <div className="form__group input-group">

                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        <FontAwesomeIcon className="form__icon" icon={faDollarSign} />
                        </span>
                    </div>

                    <input 
                    id="amount"
                    name= "amount"
                    type="number"
                    placeholder="Amount Paid"
                    className="form__input"
                    required/>
                    <label htmlFor="name" className="form__label">Amount Paid</label>
                
                </div>

                <div className="form__group input-group">

                    <div className="input-group-prepend mb-5">
                        <span className="input-group-text">
                        <FontAwesomeIcon className="form__icon" icon={faList} />
                        </span>
                    </div>

                    <select name="category" id="category" className="form__input mb-5">
                        <option selected>category</option>
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


                    <label htmlFor="category" className="form__label">category</label>

                </div>
                <div className="form__group input-group u-margin-bottom-medium">

                    <div className="input-group-prepend">
                        <span className=" input-group-text">
                        <FontAwesomeIcon className="form__icon" icon={faComment} />
                        </span>
                    </div>

                    <textarea
                    type="text"
                    name="note" 
                    placeholder="note" 
                    id="note-input" 
                    className="form__input"
                    required></textarea>
                    <label htmlFor="note-input" className="form__label"> Note </label>
                </div>

                <div className="form__group">
                    <button className="btn btn--pink" type="submit" value="register">save</button>
                </div>

            </form>
          </div>
        </div>
    </div>
}
</section>


      
      )
    }

    


export default Expensesform;









// <form>
// <div className="form-group form-dolist">

//     <label className ="Dolist-label" htmlFor="item-name">Item Name</label>
//     <input
//       id="item-name"
//       name= "item"
//       type="text"
//       className="form-control input-dolist"
//       placeholder="Item Name"
//     />
    
//     <label className ="Dolist-label" htmlFor="amount">Amount Paid</label>
//     <input
//       id="amount"
//       name= "amount"
//       type="number"
//       className="form-control input-dolist"
//       placeholder="amount"
//     />

//     <label for="blood-input"><strong>Category</strong></label>
//     <select id="blood-input" class="form-control">
//         <option selected>Choose...</option>
//         <option> Reception Venue & Rentals </option>
//         <option> Ceremony Location Fee </option>
//         <option> Food & Service</option>
//         <option> Photographer & Videographer </option>
//         <option> Decorations & flowerset </option>
//         <option> Music  </option>
//         <option> Makeup artist & hair styling </option>
//         <option> Bride Gown & Alterations </option>
//         <option> Bride's Accessories</option>
//         <option> Bride's Bouquet</option>
//         <option> Bridesmaid</option>
//         <option> Groom's Tux or Suit </option>
//         <option> Groom's Accessories </option>
//         <option> Groomsmen  </option>
//         <option> Honeymoon </option>
//         <option> Others</option>
//     </select>

//     <label className ="Dolist-label" htmlFor="description">note</label>
//     <textarea 
//     className="form-control input-dolist"
//     name="description"
//     id="note"
//     placeholder="add you note"
//     />
    
//     <button 
//     type="button"
//     className="btn btn-success toDolist-btn">
//      save
//     </button>

// </div>
// </form> 