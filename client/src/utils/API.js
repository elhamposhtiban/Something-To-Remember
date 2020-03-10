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

    // Deletes the todolist with the given id
    deleteDolist: (id) => {
        console.log("this is the id you clicking", id)
        return axios.delete("/api/dolist/" + id);
    },
    
    // update a todolist to the database
    UpdateDolist: () =>{
        return axios.put("/api/dolist");
    },

      // Saves a todolist to the database
    saveDolist: (dolistData) => {
        console.log('data in api.js', dolistData)
        return axios.post("/api/dolist", dolistData);
  }

  ///////////////////////// EXPENSES & BUDGET ////////////////////////

      // Gets the todolist 
      getAllExpenses: () => {
        return axios.get("/api/dolist" );
    },

    // Gets the todolist with the given id
    getExpenses: (id) => {
        return axios.get("/api/dolist/" + id);
    },

    // Deletes the todolist with the given id
    deleteExpenses: (id) => {
        console.log("this is the id you clicking", id)
        return axios.delete("/api/dolist/" + id);
    },
    
    // update a todolist to the database
    UpdateExpenses: () =>{
        return axios.put("/api/dolist");
    },

      // Saves a todolist to the database
    saveExpenses: (dolistData) => {
        console.log('data in api.js', dolistData)
        return axios.post("/api/dolist", dolistData);
  }

 }