import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarPaper(props) {
    return (
        <div className="flex text-[0.7rem] font-normal">
            <Link to="/dashboard" className="text-blue-400">
                dashboard
            </Link>
            <span className="px-[5px]">{">"}</span>
            <Link to={props.link} className="text-blue-400">
                {props.page}
            </Link>
        </div>
    )
}
