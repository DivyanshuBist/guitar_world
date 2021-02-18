import react from 'react';
import data from "./data" 
function App() {
  return (
    <div className="main_container">
      <header className='row'>
        <div className="header_left">
            <a className="name" href="/">
                <img className="header_img" src="/image/guitar.png" alt=""/>
                <span >GUITAR WORLD</span>
             </a>
        </div>
        <div className="header_right">
            <a href="/Cart">Cart</a>
            <a href="/SignIn">SignIn</a>
        </div>
    </header>
    <main>
        <div className="row center">
          {
            data.products.map((product)=>(
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt={product.name}/>
                </a>  
                <div className="card-body">
                <a href={`/product/${product._id}`}><h2>{product.name}</h2></a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                    </div>
                    <div className="price">Rs.{product.price}</div>                   
                </div>        
            </div>
            ))
          }
            
        </div>
    </main>
    <footer className='row center f'>
        <div>All Rights Reserved</div>
        <div> Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
</div>
  );
}

export default App;
