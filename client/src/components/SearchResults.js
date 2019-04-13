import React from "react";

function SearchResults(props) {
    return (
        <div className="container" key={props.id}>

            <div className="notification">
                <h1 className="is-size-3">{props.title}</h1>
                <h3 className="is-size-5">{props.subtitle}</h3>
                <h3 className="is-size-7">Written by {props.author}</h3>

                <article className="media">
                    <figure className="media-left">
                        <p className="image is-128x128">
                            <img src={props.image} alt={props.title} />

                        </p>

                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            {props.description}
                            </p>

                        </div>
                    </div>
                    <div className="media-right">
                    <a href={props.link} target ="blank_" className="button is-primary">View</a> {" "}
                    <button className="button is-primary" value={props.id} onClick={props.saveHandler}>Save</button>
                    </div>
                </article>


            </div>
        </div>
    )
};
export default SearchResults;