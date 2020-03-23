import React, {useState} from "react";
import PropType from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faList,
  faDollarSign, 
  faComment, 
  faShoppingBag } from "@fortawesome/free-solid-svg-icons";


const propType = {

    handleInputChangeBudget : PropType.func.isRequired,
    handleExpensesSubmit : PropType.func.isRequired,
    handleBudgetSubmit : PropType.func.isRequired,
    handleInputChange : PropType.func.isRequired,
    expensesInput : PropType.object.isRequired,
    budgetInput : PropType.string.isRequired
      }

const Expensesform = ({
    handleInputChange,
    expensesInput,
    handleExpensesSubmit,
    showBudget
})  => {

    //this is a use state for showing and hiding the budget form

   const [showExpenses, setShowExpenses] = useState(false)

   const showHandler = () => {
     setShowExpenses(!showExpenses);
   }

   console.log(expensesInput)

    return( 

        <React.Fragment>
            
        <div className="row">
            <div className="col-1-of-2">
                <button 
                type="button"
                className="btn btn--white budget-manage-btn"
                onClick= {showHandler}>
                    add your expenses
                </button>
            </div>
            <div className= "col-2-of-2">
                
            {showBudget?

            <div className="total-budget"> this is your total budget {showBudget.totalBudget} $ </div> : null
            }
            </div>
        </div>

        {showExpenses &&  

        <div className="row">

            <div className="budget">

                <div className="budget__form">

                    <form  className="form">

                        <div className=" u-margin-bottom-medium">
                            <h2 className="heading-secondary">
                            set Your expenses
                            </h2>
                        </div>

                        <div className="form__group input-group">

                            <div className="input-group-prepend ">
                                <span className="input-group-text">
                                <FontAwesomeIcon className="form__icon fa-2x" icon={faShoppingBag} />
                                </span>
                            </div>

                            <input 
                            type="text"
                            id="item"
                            className="form__input"
                            name= "itemName"
                            placeholder="Item Name"
                            value = {expensesInput.name}
                            onChange = {event => handleInputChange (event)}
                            required/>
                            <label htmlFor="item" className="form__label">Item Name</label>

                        </div>

                        <div className="form__group input-group">

                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <FontAwesomeIcon className="form__icon fa-2x" icon={faDollarSign} />
                                </span>
                            </div>

                            <input 
                            id="amount"
                            name= "amount"
                            type="number"
                            placeholder="Amount Paid"
                            className="form__input"
                            value = {expensesInput.name}
                            onChange = {event => handleInputChange (event)}
                            required/>
                            <label htmlFor="amount" className="form__label">Amount Paid</label>
                        
                        </div>

                        <div className="form__group input-group">

                            <div className="input-group-prepend mb-5">
                                <span className="input-group-text">
                                <FontAwesomeIcon className="form__icon fa-2x" icon={faList} />
                                </span>
                            </div>

                            <select name="category"
                            id="category"
                            value = {expensesInput.name}
                            onChange = {event => handleInputChange (event)}
                            className="form__input mb-5">
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

                        <label htmlFor="category" className="form__label"></label>

                        </div>
                        
                        <div className="form__group input-group u-margin-bottom-medium">

                            <div className="input-group-prepend">
                                <span className=" input-group-text">
                                <FontAwesomeIcon className="form__icon fa-2x" icon={faComment} />
                                </span>
                            </div>

                            <textarea
                            type="text"
                            name="note" 
                            placeholder="note" 
                            id="note-input" 
                            className="form__input"
                            value = {expensesInput.name}
                            onChange = {event => handleInputChange (event)}
                            required></textarea>
                            <label htmlFor="note-input" className="form__label"> Note </label>
                        </div>

                        <div className="form__group">
                            <button 
                            className="btn btn--pink"
                            type="submit"
                            onClick = {handleExpensesSubmit}
                            >save</button>
                        </div>

                    </form>
                </div>
                </div>
            </div>
        }
        </React.Fragment>
      )
    }


Expensesform.prototype = propType;
export default Expensesform;



