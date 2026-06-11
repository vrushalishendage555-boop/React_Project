import "./style.css";

let Home = () => {
  return (
    <>
      {/* TOP BAR */}
      <section className="container-fluid p-0">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-white bg-dark p-2 text-center">

          <div className="d-flex flex-column flex-md-row align-items-center gap-2">
            <div className="d-flex align-items-center">
              <i className="bi bi-envelope fs-5 me-2"></i>
              <span>info@company.gmail.com</span>
            </div>

            <div className="d-flex align-items-center">
              <i className="bi bi-telephone fs-5 ms-md-3 me-2"></i>
              <span>100-200-3000</span>
            </div>
          </div>

          <div className="mt-2 mt-md-0">
            <i className="bi bi-facebook mx-2"></i>
            <i className="bi bi-instagram mx-2"></i>
            <i className="bi bi-linkedin mx-2"></i>
            <i className="bi bi-twitter mx-2"></i>
          </div>

        </div>

        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg fw-bold fs-5 bg-dark">

          <a className="navbar-brand text-success fs-2 ms-3 fw-bold">
            Zay
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navid"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navid">
            <ul className="navbar-nav ms-auto text-center">

              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">Home</a>
              </li>

              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">About</a>
              </li>

              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">Shop</a>
              </li>

              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>

            </ul>
          </div>

          <div className="d-none d-lg-flex text-white me-3">
            <i className="bi bi-cart fs-4 mx-2"></i>
            <i className="bi bi-search fs-4 mx-2"></i>
            <i className="bi bi-person fs-4 mx-2"></i>
          </div>

        </nav>
      </section>

      {/* CAROUSEL */}
      <section className="container-fluid mb-5">
        <div id="carouselExampleCaptions" className="carousel slide">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="/images/banner_img_01.jpg" className=" imgcaro" />

              <div className="carousel-caption text-dark">
                <h1>Zay eCommerce</h1>
                <h3>Tiny and Perfect eCommerce Template</h3>
                <p>Modern responsive eCommerce UI template.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/images/banner_img_02.jpg" className=" imgcaro" />
              <div className="carousel-caption text-dark">
                <h1>Proident occaecat</h1>
                <h3>Aliquip ex ea commodo</h3>
              </div>
            </div>

            <div className="carousel-item">
              <img src="/images/banner_img_03.jpg" className=" imgcaro" />
              <div className="carousel-caption text-dark">
                <h1>Reprehenderit</h1>
                <h3>Ullamco laboris nisi</h3>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container mb-5">
        <div className="text-center mb-4">
          <h2>Categories of The Month</h2>
          <p>Best products collection</p>
        </div>

        <div className="row text-center">

          <div className="col-12 col-md-4 mb-4">
            <img src="/images/category_img_01.jpg" className="img-fluid imgsec2" />
            <h5>Watches</h5>
            <button className="btn btn-success">Go Shop</button>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <img src="/images/category_img_02.jpg" className="img-fluid imgsec2" />
            <h5>Shoes</h5>
            <button className="btn btn-success">Go Shop</button>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <img src="/images/category_img_03.jpg" className="img-fluid imgsec2" />
            <h5>Accessories</h5>
            <button className="btn btn-success">Go Shop</button>
          </div>

        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container mb-5">
        <div className="text-center mb-4">
          <h2>Featured Products</h2>
          <p>Best selling items</p>
        </div>

        <div className="row">

          <div className="col-12 col-md-4 mb-3">
            <div className="card p-3 h-100">
              <img src="/images/feature_prod_01.jpg" className="img-fluid" />
              <h4>Gym Weight</h4>
              <p>$240</p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <div className="card p-3 h-100">
              <img src="/images/feature_prod_02.jpg" className="img-fluid" />
              <h4>Nike Shoes</h4>
              <p>$480</p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <div className="card p-3 h-100">
              <img src="/images/feature_prod_03.jpg" className="img-fluid" />
              <h4>Summer Shoes</h4>
              <p>$380</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <section className="container-fluid bg-dark text-white p-4">
        <div className="row text-center text-md-start">

          <div className="col-12 col-md-4 mb-3">
            <h4>Zay Shop</h4>
            <p>Contact info here</p>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <h4>Products</h4>
            <p>Luxury | Shoes | Accessories</p>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <h4>Links</h4>
            <p>Home | About | Contact</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;