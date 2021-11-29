import React from 'react'
import { connect } from "react-redux"
import { incrementByOne, decrementByOne } from "../redux/actions/counterActions"

const Counter = ({
    count,
    incrementByOne,
    decrementByOne
}) => {
    return (
        <div>
            <button onClick={() => decrementByOne()}>-</button>
            {count}
            <button onClick={() => incrementByOne()}>+</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
}


const mapDispatchToProps = dispatch => {
    return {
        incrementByOne: () => dispatch(incrementByOne()),
        decrementByOne: () => dispatch(decrementByOne())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
