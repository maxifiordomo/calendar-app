import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'

export const NewFab = () => {

    const dispatch = useDispatch()

    const handleFab = () => {
        dispatch(uiOpenModal())
    }

    return (
        <button
            className="btn btn-primary Fab"
            onClick={handleFab}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}

