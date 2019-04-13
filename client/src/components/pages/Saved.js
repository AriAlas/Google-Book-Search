import React, { Component } from "react";
import API from "../../utils/API";
import SavedResults from "../SavedResults"


class Saved extends Component {
    state ={
       books : []
        
    }
    loadBooks = () => {
        API.getSavedBooks().then(res =>  this.setState({books:res.data}))
        .catch(err => console.log(err))
    }
    componentDidMount = () => {
       this.loadBooks();
       
      
    }

    deleteHandler = (e) => {
        e.preventDefault();
        var id = e.target.value;
        console.log(id);
        API.deleteSavedBook(id).then(res => this.loadBooks());
        
       
    }
    render () {
        return (
            <div className = "container">
            

            {this.state.books.length ?
                    (<div className="saveResults">
                    <h1 >Saved books</h1>
                        {this.state.books.map(book =>(
                            <SavedResults 
                            key={book._id}
                            id={book._id}
                            title={book.title}
                            author={book.author}
                            description = {book.description}
                            image = {book.image}
                            link = {book.link}
                            subtitle = {book.subtitle}
                            deleteHandler = {this.deleteHandler}
                            

                                 /> 
                        ))}
                        </div>) : (<h3>No Books Saved</h3>)  }
                




            </div>
            
        )
    }
}

export default Saved;