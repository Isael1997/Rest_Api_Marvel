import React from "react";


export default function Cards({imageSource, title, url}){
    return (
        <div className="card text-center bg-dark ">
        <div className="overflow">
            <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem possimus non nostrum beatae amet dolor aut iusto ab incidunt vero laudantium provident quisquam commodi, molestiae consequatur in nam asperiores voluptate. Voluptates sit iste esse vero, dolorum, nihil reprehenderit praesentium fugiat veritatis, quod exercitationem aspernatur doloribus beatae itaque eveniet illo nobis?
            </p>
            <a
                href={url}
                target="_blank"
                className="btn btn-primary border-0"
                rel="noreferrer"
            >
                Go to {title}
            </a>
        </div>
    </div>
    );
}