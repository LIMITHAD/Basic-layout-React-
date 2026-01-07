import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Header/>
           <div class="container text-center mt-4 mr-8 ml-8">
                <h4>contact US</h4>
                <div class="row justify-content-center">
                  <div class="col-6">
                <form action="">
                  <div class="mb-3">
                    <label for="name" class="form-label">NAME</label>
                    <input type="text" id="name" name="name" class="form-control"/>
                  </div>
                  <div>
                    <label for="Email" class="form-label">Email</label>
                    <input type="text" id="email" name="email" class="form-control"/>
                  </div>
                  <div>
                    <label for="message" class="form-label">message</label>
                    <textarea name="message id=message" class="form-control"></textarea>
                  </div>
                  <div>
                    <botton class="bg-info text-white form-control mt-2">submit</botton>
                  </div>
                  </form>
                  </div>
                  <div class="mt-4">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.762935648163!2d77.27223147603837!3d11.497017816376363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9215d6d1b28f9%3A0xf48946a7dfcfeb1a!2sBannari%20Amman%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1766218143161!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  </div>
     </div>

      <Footer/>
    </div>
  )
}

export default Contact