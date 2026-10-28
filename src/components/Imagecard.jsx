function Imagecard(image){
    return(
        <div className="card">
            <div className="card_img">
                <img src={image.img} alt=""></img>
            </div>
            <div className="card_info">
                <h3>{image.title}</h3>
                <p>{image.desc}</p>
            </div>
        </div>
    )
}

export default Imagecard