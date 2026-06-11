let Shop = () =>{
    return(
        <>
        {/* first section */}

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

<div className="navdiv">

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

<br/>{/* 
  second section */}

<section className="container-fluid mb-5">

<div>
    <h2>Categories</h2>
    

    <div className="d-flex justify-content-around">
        <p className="fs-4">Gender</p>
        <i class="bi bi-arrow-down-circle-fill fs-5"></i>
    </div>
    <div className="d-flex justify-content-around">
        <p className="fs-4">Sale</p>
        <i class="bi bi-arrow-down-circle-fill fs-5"></i>
    </div>
    <div className="d-flex justify-content-around">
        <p className="fs-4">Product</p>
        <i class="bi bi-arrow-down-circle-fill fs-5"></i>
    </div>
  <div>
      <div className="d-md-flex justify-content-around">
        <p className="fs-5">All Mens And Womens</p>
          <input type="text" placeholder="Featured" />
    </div>

   
  </div>
</div>



<div className="d-md-flex justify-content-center flex-wrap">

    <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_01.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>


     <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_02.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>



     <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_03.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>


     <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_04.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>


     <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_05.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>


     <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_06.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>

     <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_07.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>


     <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_08.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>


     <div className="shopdiv card p-2 m-2 text-center fs-5">
        <img src="/images/shop_09.jpg" className="img-fluid"/>
        <p>Oupidatat non</p>
        <p>M/L/X/XL</p>
        <p className="text-warning">    * * * * *</p>
        <p> $  250.00</p>
    </div>

</div>


</section>



  {/* third section */}

  <section className='container-fluid sec4'>


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
</section>


        
        </>
    )
}

export default Shop;