import G1 from "../assets/image/m.jpg"
import G2 from "../assets/image/bo.jpg"
import G3 from "../assets/image/tb.jpg"
import G4 from "../assets/image/f.jpg"
import G5 from "../assets/image/e.jpg"
import G6 from "../assets/image/c.jpg"
import G7 from "../assets/image/fl.jpg"
import G8 from "../assets/image/ba.jpg"
import Imagecard from "./Imagecard"

var imageslist = [
    {
        "img": G1,
        "title": "Mountain Lake",
        "desc": "A serene take surrounded by majestic"
    },
    {
        "img": G2,
        "title": "Boat",
        "desc": "A peaceful bot floation on calm"
    },
    {
        "img": G3,
        "title": "tropical Beach",
        "desc": "Golden sunset over a peaceful tropical"
    },
    {
        "img": G4,
        "title": "Forest Trail",
        "desc": "A calm walking trail through a lush"
    },
    {
        "img": G5,
        "title": "Elephant",
        "desc": "A beautiful elephant an its natural"
    },
    {
        "img": G6,
        "title": "City Skyline",
        "desc": "A stunning city skyline lit up charming"
    },
    {
        "img": G7,
        "title": "Flower Bloom",
        "desc": "Fresh flowers bringing color nd life"
    },
    {
        "img": G8,
        "title": "Costal View",
        "desc": "Breathtaking view of the ocean and rocky cliffs"
    }
]

function Image(){
    return(
        <div className="gallery">
            {
                imageslist.map((image) =>{
                    return <Imagecard img={image.img} title={image.title} desc={image.desc}></Imagecard>
                })
            }

        </div>
    )
}

export default Image