import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
    <Header/>
    <div className="container-fluid">
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://placehold.co/1400x600" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://placehold.co/1400x600" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://placehold.co/1400x600" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
     <div className="container mt-4">
            <div className="alert alert-info text-center">
                BIT students got 1st place in <span className="badge bg-success">Smart India Hackthon</span>

            </div>

            <div className="row text-center">
                <h2>BANNARI AMMAN INSTITUTE of TECHNOLOGY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolorum doloremque quidem officia numquam similique aliquam molestiae assumenda at et harum non iste nobis, repudiandae rem? Reiciendis repudiandae ipsum accusantium exercitationem voluptatem fuga quo delectus itaque nobis nam sit quis vitae deserunt perferendis, officiis modi, dolorem dignissimos quod placeat magni accusamus? Velit ab aliquid et mollitia odit, commodi ducimus accusamus! Aspernatur consectetur a, facere quaerat maiores nostrum corporis, recusandae ab eius debitis ad nemo voluptatum quod ipsa perspiciatis officiis incidunt illum? Temporibus reiciendis dolor ducimus facilis itaque tempora! Esse aliquid perferendis recusandae fugit, itaque numquam enim eos aspernatur cumque ex?</p>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
  <img src="https://placehold.co/280x140" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
  <img src="https://placehold.co/280x140" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
  <img src="https://placehold.co/280x140" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
  <img src="https://placehold.co/280x140" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
     </div>
     </div>
    <Footer/>
    </div>
  )
}

export default Home