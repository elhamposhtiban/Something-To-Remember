import React, {useState} from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Expensesform = ()  => {

    const [showExpenses, setShowExpenses] = useState(false)


   const showHandler = () => {
     setShowExpenses(!showExpenses);
   }

    return( 

        <div>
            
            <div className="row">
            <div className= "col-1-of-2">
                <button 
                type="button"
                className="btn btn-success mt-4 budget-manage-btn"
                onClick= {showHandler}>
                    add your budget
                </button>
            </div>
            <div className= "col-2-of-2">
                
                <label className ="Dolist-label mt-4" htmlFor="budget"> Specify your total budget($)</label>
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
      <form>
        <div className="form-group form-dolist">

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
}

    </div>
      
      )
    }

    


export default Expensesform;











// class App extends React.Component {
// 	state = {
// 		shown: true,
// 	};
		
// 	render() {		
// 		return (
// 			<div>
// 				<h2>this.state.shown = {this.state.shown ? "true" : "false"}</h2>
// 				<button onClick={() => this.setState({ shown: !this.state.shown })}>Toggle</button>
// 			</div>
// 		)
// 	}
// }








// <section className="section-budget">
// <div className="row">
//     <div className="budget">
//         <div className="budget__form">
//             <form action="#" className="form">
//                 <div className=" u-margin-bottom-medium">
//                     <h2 className="heading-secondary">
//                       Contact Info
//                     </h2>
//                 </div>
//                 <div className="form__group input-group">
//                   <div className="input-group-prepend">
//                     {/* <span className="input-group-text">
//                       <i className="form__icon fas fa-user fa-3x"></i>
//                     </span> */}
//                   </div>
//                     <input type="text" placeholder="full name" id="name" className="form__input" required/>
//                     <label for="name" className="form__label">Full name</label>
//                 </div>

//                 <div className="form__group input-group">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text">
//                       <i className=" form__icon far fa-envelope fa-3x"></i>
//                     </span>
//                   </div>
//                     <input type="email" placeholder="Email address" id="email" className="form__input" required/>
//                     <label for="email" className="form__label">Email address</label>
//                 </div>
//                 <div className="form__group input-group u-margin-bottom-medium">
//                   <div className="input-group-prepend">
//                     <span className=" input-group-text">
//                     <i className="fas fa-comment fa-3x"></i>
//                     </span>
//                 </div>
//                 <textarea type="text"  name="message" placeholder="Message" id="message-input" className="form__input" required></textarea>
//                     <label for="message-input" className="form__label"> Message </label>
//                 </div>
//                 <div className="form__group">
//                     <button className="btn btn--pink" type="submit" value="register">submit</button>
//                 </div>
//             </form>
//           </div>
//         </div>
//     </div>
// </section>