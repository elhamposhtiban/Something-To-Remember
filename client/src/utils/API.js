import axios from "axios";

export default {
    

    // Gets the todolist 
    getAllDolist: () => {
        return axios.get("/api/dolist" );
    },

    // send all todolist
    sendDolist: (dolistData) => {
        console.log('data in api.js', dolistData)
        return axios.post("/api/dolist", dolistData);
    },

    // Gets the todolist with the given id
    getDolist: (id) => {
        return axios.get("/api/dolist/" + id);
    },

    // Deletes the todolist with the given id
    deleteDolist: (id) => {
        return axios.delete("/api/dolist/" + id);
    },
    
    // update a todolist to the database
    UpdateDolist: () =>{
        return axios.put("/api/dolist");
    },

      // Saves a todolist to the database
  saveDolist: function(dolistData) {
    return axios.post("/api/books", dolistData);
  }

 }