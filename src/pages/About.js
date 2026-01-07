import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <Header/>
      <div className="container">
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">about</li>
  </ol>
</nav>
</div>
<div className="container mt-4">
<h4>About our BIT campus</h4>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil sequi similique quaerat itaque facilis?</p>
<div className="row">
  <div className="col-5 border solid">
      <h4>hands on learning</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, minima!</p>
  </div>
  <div className="col-6 border solid">
       <h4>front-end focus</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ducimus?</p>
  </div>
</div>
</div>
<div className="container mt-4">
<div className="row">
  <div className="col-8">
     <h3>What students will practice</h3>
     <table className="table table-bordered table-hover">
      <tr>
        <th className="bg-dark text-light" >topic</th>
        <th className="bg-dark text-light">status</th>
      </tr>
      <tr>
        <td>bootstrap Grid</td>
        <td><span className="badge bg-success text-light" >completed</span></td>
      </tr>
      <tr>
        <td>Components</td>
        <td><span className="badge bg-warning text-light" >In progress</span></td>
      </tr>
      <tr>
        <td>responsive layout</td>
        <td><span className="badge bg-info text-light" >Upcoming</span></td>
      </tr>
     </table>
     </div>
     <div className="col-4">
       <h3>Learning progress></h3>
       <p>HTML</p>
        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar text-bg-success" style={{width: "25%"}}>82%</div>
</div>
<p>bootstrap</p>
<div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar text-bg-info" style={{width: "50%"}}>60%</div>
</div>
     </div>
</div>
</div>
<div className="container mt-5">
  <button className="btn btn-info">Mission</button>
  <button className="btn text-info">Vision</button>
  <p className="P mt-2">our mission is to train interns with practical fronted skills</p>
</div>
<div className="container mt-4">
        <strong>Frequently Asked Questions</strong>
    <div className="accordion" id="accordionPanelsStayOpenExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          Do we write custom CSS?
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
        <div className="accordion-body">
          No.we use only bootstrap utility classes.
        </div>
      </div>
    </div>
  </div>

</div>
      <Footer/>
    </div>
  )
}

export default About