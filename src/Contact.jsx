import './style.css'

let Contact = () =>{
    return(
        <>
           <section className="container-fluid">
    
<div className='d-flex justify-content-between text-white bg-dark  '>
   <div className="d-lg-flex justify-content-evenely align-items-center m-1">
     <i className="bi bi-envelope fs-2 ms-1"></i>
    <p className='ms-1'>info@company.gmail.com</p>
    <i className="bi bi-telephone-x fs-2 ms-1"></i>
    <p className='ms-1'>100-200-3000</p>
</div>
<div className="">
    <i class="bi bi-facebook fs-5 ms-2"></i>
<i class="bi bi-instagram fs-5 ms-2"></i>
<i class="bi bi-linkedin fs-5 ms-2"></i>
<i class="bi bi-twitter fs-5 ms-2"></i>
   </div>


</div>

<div className='navdiv'>

     <nav className="navbar navbar-expand-lg fw-bold fs-4">

        <a href="#" target="_blank" class="navbar-brand  text-success fs-1  ms-5 fw-bold"> Zay</a>

        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navid"><i class="bi bi-list"></i></button>


      <div className="collapse navbar-collapse ms-auto " id="navid" >
          <ul className="navbar-nav nav text-end">

           
            <li className="nav-item  ms-5">
        <a className="nav-link " href="#">Home </a>
          </li>

             <li className="nav-item  ms-5">

               <a className="nav-link " href="#">About</a>
               
                </li>
                
    <li className="nav-item  ms-5">
        <a className="nav-link " href="#">Shop </a>
          </li>

             <li className="nav-item  ms-5">

               <a className="nav-link " href="#">Contact</a>
               
                </li>
                
            </ul>
      </div>

<div className='d-md-none d-xl-block'>

    <i className="bi bi-cart fs-3 ms-2"></i>
    <i className="bi bi-search fs-3 ms-2"></i>
    <i className="bi bi-person fs-3 ms-2"></i>
</div>



           </nav>     
</div>





        </section>
        <br/>

<br/>
{/* second section */}

<section className="container-fluid contsec mb-5">

<div className="mb-5">
  <div className="text-center p-4 ">
  <h2 className="fs-1 mt-5">Contact Us</h2>
  
  <p  className="fs-5 mt-3">Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>

</div>
</div>

<section className="contdiv mb-5">
 <i className="bi bi-geo-alt conticon "></i>
</section>

<br/>

<br/>



<section className='container-fluid border border-2 border-black'>
<div>
  <form className="form-control text-center p-2">

   <div className="d-flex justify-content-center text-center p-1">
     <label for="name">Name</label>
    <input type="text" id="Name" placeholder="Enter Name" className="p-2 continp" />

         <label for="name">Email</label>
    <input type="text" id="Email" placeholder="Enter Email" className="p-2 continp" />


   </div>
   <br/>

<br/>
   <div>
     <label for="name">Subject</label>
    <input type="text" placeholder="Subject" className="p-2 continp1" />
   </div>
   <br/>
   <br/>
   <div>

 <label for="name">Message</label>
    <input type="text" placeholder="Message" className="p-2 continp2" />

   </div>
   <br/>

<br/>
<a href="#" className="btn btn-success p-2 text-end fs-5"> Lets Talk</a>
  </form>
</div>

  </section>
</section>
<br/>
<br/>
<br/>


{/* <section className='container-fluid sec4 mt-5'>


 <div className='d-md-flex justify-content-around'>
   <div  className='text-white m-2 p-2'>

    <h3>Zay Shop</h3>
<hr/>
<div className='d-flex justify-content-center'>
  <i class="bi bi-geo-alt fs-5"></i>
  <p className='fs-5'> 123 Consectetur at ligula 10660</p>
</div>

<div className='d-flex justify-content-center'>
  <i class="bi bi-telephone fs-5"></i>
  <p className='fs-5'>100-200-3000</p>
</div>

<div className='d-flex justify-content-center'>
   <i class="bi bi-envelope fs-5"></i>
  <p className='fs-5'>info@gmail.com</p>
</div>
    
  </div>

  <div className='text-white m-2 p-2'>

<h3>Products</h3>
<hr/>

<div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Luxury</a></div>
<div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Sports Wear</a></div>
<div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Men Shoes</a></div>
<div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Women Shoes</a></div>
<div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Popular Dress</a></div>
<div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Gym Accesories</a></div>
<div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Sport Shoes</a></div>

  </div>

  <div className='text-white m-2 p-2'>
    <h3>Further Info</h3>
    <hr/>

    <div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Home</a></div>

    <div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>About Us</a></div>


    <div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Shop Locations</a></div>


    <div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>FAQ</a></div>


    <div><a href="#" className='text-decoration-none text-white fs-5 ancky1'>Contacts</a></div>

  </div>
 </div>
<hr/>

<hr/>
<div className='d-flex justify-content-around'>
  <div className='text-white'>
     <i class="bi bi-facebook fs-4 ms-4"></i>
<i class="bi bi-instagram fs-4 ms-4"></i>
<i class="bi bi-linkedin fs-4 ms-4"></i>
<i class="bi bi-twitter fs-4 ms-4"></i>
  </div>
  <div className='p-2'>
    <input type="text" placeholder='email address' className='p-2'/>
    <input type="text" placeholder='Subscribe' className='p-2 bg-success text-black w-25'/>

   
  </div>
</div>
<br/>

<div className='bg-dark text-white p-2'>
  <p className='fs-5'>Copyright © 2021 Company Name | Designed by<a href="#">TemplateMo</a> </p>
</div>
</section> */}





        </>
    )
}
export default Contact;