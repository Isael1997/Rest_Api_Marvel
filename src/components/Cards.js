import React from "react";
import image from '../assets/image1.jpg';


export default function Cards(){
    return (
        <div className="card text-center bg-dark ">
        <div className="overflow">
            <img src={image} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light">
            <h4 className="card-title"></h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem possimus non nostrum beatae amet dolor aut iusto ab incidunt vero laudantium provident quisquam commodi, molestiae consequatur in nam asperiores voluptate. Voluptates sit iste esse vero, dolorum, nihil reprehenderit praesentium fugiat veritatis, quod exercitationem aspernatur doloribus beatae itaque eveniet illo nobis?
            </p>
            <a
                href='#'
                target="_blank"
                className="btn btn-primary border-0"
                rel="noreferrer"
            >
                Go to
            </a>
        </div>
    </div>
    );
}