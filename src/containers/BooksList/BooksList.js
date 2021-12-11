import React, { Component } from "react";
import { connect } from "react-redux";
import { Loader } from "../../components/UI/Loader/Loader";
import { fetchBooks } from "../../store/actions/book";
import classes from './BooksList.module.scss'


class BooksList extends Component {

    renderBooks = () => {
        console.log(this.props.books);

        if (this.props.books !== []) {
            return this.props.books.map((book, i) => {
                return (
                    <div className="card" style={{marginTop: 40, width: 350, margin: '15px 10px'}} key={i}>
                        <img 
                            className={"card-img-top " + classes.imgBook} 
                            src={book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`}
                            alt={book.title}
                        />
                        <div className="card-body">
                            <p className="card-text" style={{color: 'gray'}}><u>{book.volumeInfo.categories || "Not Found"}</u></p>
                            <p className="card-text"><b>{book.volumeInfo.title || "Not Found"}</b></p>
                            <p className="card-text" style={{color: 'gray'}}>{book.volumeInfo.authors.join(', ') || "Not Found"}</p>
                        </div>
                    </div>
                )    
        })
    }   else {
            return (<div><p>Ничего не найдено</p></div>) 
        }
    }
    
    

    render() {
        this.props.fetchBooks()
        return ( 
                this.props.loading ?
                <Loader /> :
                <div className={classes.BooksList}>{this.renderBooks()}</div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
        loading: state.books.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)