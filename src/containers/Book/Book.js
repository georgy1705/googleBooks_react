import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from '../../components/UI/Loader/Loader'
import { fetchBookById } from '../../store/actions/book'
import classes from './Book.module.scss'


class Book extends Component {

    componentDidMount() {
        this.props.fetchBookById(this.props.match.params.id)
    }

    render() {
        return (
            <div className={classes.Book}>
                {this.props.loading || !this.props.book ?
                    <Loader /> :
                    <div className="container-fluid" style={{height: '100%'}}>
                        <div className="row" style={{height: '100%'}}>
                            <div className="col-sm-5 border bg-light align-items-center d-flex justify-content-center" style={{textAlign: 'center'}}>
                                    <img className={classes.detailImg}
                                    src={this.props.book.volumeInfo.imageLinks === undefined ? "" : `${this.props.book.volumeInfo.imageLinks.thumbnail}`}
                                    alt={this.props.book.volumeInfo.title}
                                    />                          
                            </div>
                            <div className="col-sm-7">
                                <p style={{color: 'gray', marginTop: 40}}>{this.props.book.volumeInfo.categories || "Not Found"}</p>
                                <p style={{color: 'black', marginTop: 40, fontSize: 19, fontWeight: 'bold'}}>{this.props.book.volumeInfo.title || "Not Found"}</p>
                                <p style={{color: 'gray'}}><u>
                                    {this.props.book.volumeInfo.authors ?
                                    this.props.book.volumeInfo.authors.join(', ') :
                                    "Not Found"}</u>
                                </p>
                                <div className="p-3 border" style={{marginTop:30, fontSize: 17}}>{this.props.book.volumeInfo.description}</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.books.book,
        loading: state.books.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBookById: id => dispatch(fetchBookById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)