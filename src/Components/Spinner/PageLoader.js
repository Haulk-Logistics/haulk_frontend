import React from 'react'
import Spinners from './Spinners'
import style from "./Spinner.module.css"

const PageLoader = () => {
    return (
        <div className={style.Loader__Container}>
            <Spinners />
        </div>
    )
}

export default PageLoader