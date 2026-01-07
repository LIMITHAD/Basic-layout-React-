import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
         <footer class="bg-dark text-white pt-4">
          <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                     <h5>BANNARI AMMAN INSTITUTE OF TECHNOLOGY</h5>
                     {/* <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quasi. Eveniet aliquam vero iusto labore nemo quod dolores nam earum fugiat sunt facere, in expedita totam quis illo ad assumenda. Placeat ea ipsum vero maxime ad natus architecto explicabo. Commodi illo esse saepe repudiandae reprehenderit ducimus ipsam magni aspernatur quia.</P> */}
                </div>
                <div class="col-4 text-center">
                    <h5>quick links</h5>
                    <ul class="list-unstyled">
                        <li><Link to='/' class="text-white text-decoration-none" >home</Link></li>
                        <li><Link to='/about' class="text-white text-decoration-none" >about us</Link></li>
                        <li><Link to='/contact' class="text-white text-decoration-none" >Contact</Link></li>

                    </ul>
                </div>
                <div class="col-4 text-center">
                    <h5>BIT Login</h5>
                    {/* <p>login to our LMS portal and enjoy the greater learning experience</p> */}
                    <a href="admin/login.html" class=" btn btn-primary">login</a>
                </div>
            </div>
            <hr/>
            <div class="text-center pb-3">
                &copy; 2025| Bannari amman institute of technology|all rights
                reserved
            </div>
          </div>
     </footer>
    </div>
  )
}

export default Footer