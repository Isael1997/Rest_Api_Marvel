import React from "react";
import {Link, Navigate, NavLink} from 'react-router-dom';

export default function Cards({imageSource, title}){
    return (
        <div className="card text-center bg-dark ">
        <div className="overflow">
            <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem possimus non nostrum beatae amet dolor aut iusto ab incidunt vero laudantium provident quisquam commodi
            </p>
            <NavLink
                to='/pages/page_marvel'
                target="_blank"
                className="btn btn-primary border-0"
                rel="noreferrer"
            >
                Go to {title}
            </NavLink>
        </div>
    </div>
    );
}