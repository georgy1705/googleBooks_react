import classes from './Header.module.scss'
import React, { Component } from 'react'

import InputSearch from '../UI/InputSearch/InputSearch'
import Select from '../UI/Select/Select'
import { connect } from 'react-redux'
import { 
    selectSortChangeHandler, 
    selectCategoryChangeHandler,
    searchChangeHandler,
    resultSearch
} from '../../store/actions/values'


class Header extends Component {

    render() {
        return (
            <div className={classes.Header}>
                <h1>Search for books</h1>
                <InputSearch
                    onSubmit={e => this.props.resultSearch(e)} 
                    onChange={e => this.props.searchChangeHandler(e.target.value)} 
                />
                <div className={classes.Filter}>
                    <Select
                    label="Categories"
                    value={this.props.rightCategory}
                    onChange={e => this.props.selectCategoryChangeHandler(e.target.value)}
                    options={[
                        {text: 'all', value: 'all'},
                        {text: 'art', value: 'art'},
                        {text: 'biography', value: 'biography'},
                        {text: 'computers', value: 'computers'},
                        {text: 'history', value: 'history'},
                        {text: 'medical', value: 'medical'},
                        {text: 'poetry', value: 'poetry'}
                    ]}
                />
                <Select
                    label="Sorting by"
                    value={this.props.rightSort}
                    onChange={e => this.props.selectSortChangeHandler(e.target.value)}
                    options={[
                        {text: 'relevance', value: 'relevance'},
                        {text: 'newest', value: 'newest'},
                    ]}
                />
                </div>
                
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        rightSort: state.result.rightSort,
        rightCategory: state.result.rightCategory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectSortChangeHandler: val => dispatch(selectSortChangeHandler(val)),
        selectCategoryChangeHandler: val => dispatch(selectCategoryChangeHandler(val)),
        searchChangeHandler: val => dispatch(searchChangeHandler(val)),
        resultSearch: (e) => dispatch(resultSearch(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)