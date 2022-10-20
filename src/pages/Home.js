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
    {
        id: 2,
        title: "Fazt Blog",
        image: image2,
        url: "https://blog.faztweb.com",
    },
    {
        id: 3,
        title: "Fazt Youtube",
        image: image3,
        url: "https://youtube.com/fazttech",
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

