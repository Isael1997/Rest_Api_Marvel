import Cards from '../components/Cards';
import '../styles/Home.css'

//Images
import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: "Fazt Web",
        image: image1,
        url: "https://faztweb.com",
    },
];

export default function Home() {
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='row'>
                {cards.map(({ title, image, url, id }) => (
                    <div className="col-md" key={id}>
                        <Cards imageSource={image} title={title} url={url} />
                    </div>
                ))}

            </div>
        </div>
    );
}

