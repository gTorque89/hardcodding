import React from "react";

const Carousel = () => {
    return(
<div className="col-md-12 d-flex  justify-content-center pt-5">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="images/carousel/muchos-teclados.jpg" className="d-block w-100 img-carousel" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="images/carousel/teclado-gaming.webp" className="d-block w-100 img-carousel" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="images/carousel/teclados-mecanicos.jpg" className="d-block w-100 img-carousel" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
        
    )
}
export default Carousel;