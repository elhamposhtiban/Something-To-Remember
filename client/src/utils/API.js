import axios from "axios";

export default {
    

    // Gets the todolist 
    getAllDolist: () => {
        return axios.get("/api/dolist" );
    },

    // Gets the todolist with the given id
    getDolist: (id) => {
        return axios.get("/api/dolist/" + id);
    },

    getAllByUserIdDolist: (user_id) => {
        
        console.log('i am dolist user Id associate', user_id)
        return axios.get ("/api/dolist/user/"+ user_id)
    },

    // Deletes the todolist with the given id
    deleteDolist: (id) => {
        console.log("this is the id you clicking", id)
        return axios.delete("/api/dolist/" + id);
    },
    
    // update a todolist to the database
    UpdateDolist: (id, data) =>{
        console.log("hi i can read update api from client side", id, data)
        return axios.put("/api/dolist/" + id, data);
    },

      // Saves a todolist to the database
    saveDolist: (dolistData) => {
        console.log('data in api.js', dolistData)
        return axios.post("/api/dolist", dolistData);
  },

  ///////////////////////// EXPENSES & BUDGET ////////////////////////

      // Gets the expenses 
    getAllExpenses: () => {
        return axios.get("/api/expenses" );
    },

    // Gets the expenses with the given id
    getExpenses: (id) => {
        return axios.get("/api/expenses/" + id);
    },

    
    getAllByUserIdExpenses: (user_id) => {
        
        console.log('hi i am  user id for expenses', user_id)
        return axios.get ("/api/expenses/user/"+ user_id)
    },

    // Deletes the expenses with the given id
    deleteExpenses: (id) => {
        console.log("this is the id you clicking", id)
        return axios.delete("/api/expenses/" + id);
    },
    
    // update a expenses to the database
    UpdateExpenses: (id) =>{
        return axios.put("/api/expenses/" + id);
    },

      // Saves a expenses to the database
    saveExpenses: (expensesData) => {
        console.log('data in api.js', expensesData)
        return axios.post("/api/expenses", expensesData);
  },


  ///////////////////////////////////// WEDDING PROFILE ///////////////////////////////////
      // Gets the todolist 
    getAllWedding: () => {
        return axios.get("/api/wedding" );
    },

    getAllByUserIdWedding: (user_id) => {
    return axios.get ("/api/wedding/user/"+ user_id)
    },

    // Gets the toWedding with the given id
    getWedding: (id) => {
        return axios.get("/api/wedding/" + id);
    },

    // Deletes the toWedding with the given id
    deleteWedding: (id) => {
        console.log("this is the id you clicking", id)
        return axios.delete("/api/wedding/" + id);
    },
    
    // update a toWedding to the database
    UpdateWedding: (id, data) =>{
        console.log("hi i can read update api from client side", id, data)
        return axios.put("/api/wedding/" + id, data);
    },

      // Saves a toWedding to the database
    saveWedding: (weddingData) => {
        console.log('data in api.js', weddingData)
        return axios.post("/api/wedding", weddingData);
  },

 }