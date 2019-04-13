import React, { Component } from "react";
import API from "../../utils/API";
import SearchResults from "../SearchResults";


class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        description: "",
        image: "",
        link: "",
        search: "",
        id: "",
        subtitle:""
        
    }
    onChange = e =>{
        const value = e.target.value;
        

        this.setState({search : value});
    }
    onClick = e =>{
        e.preventDefault();
        var query = this.state.search;
        API.getBooks(query).then(res => this.setState({books: res.data.items}));
       
    }

    saveHandler = e => {
        e.preventDefault();
        var id = e.target.value;
        console.log(id);

        API.getOneBook(id).then(book => this.setState({title:book.data.volumeInfo.title, subtitle:book.data.volumeInfo.subtitle, author:book.data.volumeInfo.authors, description:book.data.volumeInfo.description, image: book.data.volumeInfo.imageLinks.smallThumbnail, link: book.data.selfLink   }))
        .then(()=>{
            var data = {
                id: this.state.id,
                title: this.state.title,
                subtitle: this.state.subtitle,
                author: this.state.author,
                image: this.state.image,
                description: this.state.description,
                link: this.state.link,

            }
console.log(data);
            API.saveBook(data).then(res => console.log(res));           
        }); 
                

    }
    render() {
        return (
            <div className="container">
                <div className="notification">
                    <h1>Book Search</h1>

                    <div className="field">
                        <label className="label">Book</label>
                        <div className="control">
                            <input className="input" type="text" name="search"  onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary" onClick={this.onClick}>Search</button> 
                        </div>
                    </div>


                </div>
                {this.state.books.length ?
                    (<div className="searchResults">
                    <h1 >Search Results</h1>
                        {this.state.books.map(book =>(
                            <SearchResults 
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description = {book.volumeInfo.description}
                            image = {book.volumeInfo.imageLinks.thumbnail}
                            link = {book.volumeInfo.infoLink}
                            subtitle = {book.volumeInfo.subtitle}
                            saveHandler = {this.saveHandler}
                            

                                 /> 
                        ))}
                        </div>) : (<h3>No Results to Display</h3>)  }
                

            </div>
        )
    }
}

export default Search;



