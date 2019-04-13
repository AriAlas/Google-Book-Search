import axios from "axios";



export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyArXXFvgrBaIeOGFldxF7anJobdiKWblQU");
  },
  getOneBook: function(id) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/" + id);
  },
  saveBook : function(bookData){
    return axios.post("/api/books", bookData);
  },
  getSavedBooks: function(){
    return axios.get("/api/books");
  },
  deleteSavedBook: function(id){
    return axios.delete("/api/books/" + id);
  }
};
