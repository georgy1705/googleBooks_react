import React, { Component } from "react";
import classes from './BooksList.module.scss'
import { connect } from "react-redux";
import { Loader } from "../../components/UI/Loader/Loader";
import { fetchBooks, paginate } from "../../store/actions/book";


class BooksList extends Component {


    handleClick = e => {
        e.preventDefault()
        this.props.paginate(this.props.stepPaginate+29);
        this.props.fetchBooks()
      }

    numberResults = () => {
        if (this.props.books !== undefined && this.props.books !== [] && this.props.books.length !== 0) {
            return (
                <p style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>Found {this.props.totalItems} results</p>
            )
        }
        
    }

    paginateResult = () => {
            if (this.props.stepPaginate < this.props.totalItems) {
                this.renderBooks()
                return (
                        (this.props.books && this.props.books.length !== 0 && this.props.books.length === 30)  && !this.props.loading ?
                            <button className="btn btn-success" style={{
                                position: 'relative',
                                marginTop: 35, 
                                marginBottom: 40, 
                                left:'50%'
                            }} 
                                onClick={e => this.handleClick(e)}
                            >
                                Load more
                            </button>
                            : null
                )
        }
             
    }

    renderBooks = () => {
        console.log(this.props.books);

        if (this.props.books !== undefined) {
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
                            <p className="card-text" style={{color: 'gray'}}>{book.volumeInfo.authors ?
                            book.volumeInfo.authors.join(', ') :
                            "Not Found"}</p>
                        </div>
                    </div>
                )    
        })
    }   else {
            return (
            <h3 style={{
                position: 'absolute',
                right: 0,
                left: 0,
                display: 'flex',
                justifyContent:'center', 
                fontWeight: 'bold', 
                marginTop: 20}}
            >
                Ничего не найдено
            </h3>) 
        }
    }
    
    

    render() {
        return ( 
                this.props.loading || this.props.books === [] ?
                <Loader /> : 
                <div>
                    {this.numberResults()}
                    <div className={classes.BooksList}>
                        {
                            this.renderBooks()
                        }    
                    </div>
                    {this.paginateResult()}  
                </div>
                
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
        loading: state.books.loading,
        totalItems: state.books.totalItems,
        stepPaginate: state.books.stepPaginate,
        fetchBooks: state.books.fetchBooks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        paginate: val => dispatch(paginate(val)),
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)