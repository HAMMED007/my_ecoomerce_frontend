import { Link } from 'react-router-dom';
import background from './banner.png';
import shop1 from './shop/product1.jpeg'
import { useEffect, useState } from 'react';

function Shop() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        apiCall();
    }, [])
    async function apiCall() {
        await fetch('http://localhost:8080/api/products')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                setProducts(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (<div>
        <section className="page-banner-area bgs-cover py-135 rpy-100" style={{ backgroundImage: `url(${background})` }}>
            <div className="container">
                <div className="banner-inner text-white text-center">
                    <h1 className="page-title wow fadeInUp delay-0-2s">Catalog</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Catalog</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>

        <section className="shop-page-area py-130 rpy-100">
            <div className="container">
                <div className="row" >
                    {products?.map(product => {
                        return (
                            <div key={product?.id} className="col-lg-3" >
                                <div className="product-item wow fadeInUp delay-0-2s">
                                    <div className="image">
                                        <img src={shop1} alt="Product" />
                                    </div>
                                    <div className="content">
                                        <div className="title-price">
                                            <h5>{product.name}</h5>
                                            <div className="description">{product.description}</div>
                                            <div className="price">{product.price}</div>
                                            <p>{product.releaseDate}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>


                {/* your code can delete now safely  */}
                {/* 
                <div className="row">

                    <div className="col-lg-3">
                        <div className="product-item wow fadeInUp delay-0-2s">
                            <div className="image">
                                <img src={shop1} alt="Product" />

                            </div>
                            <div className="content">
                                <div className="title-price">
                                    <h5>Mockup Design</h5>
                                    <div className="description">Description</div>
                                    <div className="price">35.98</div>
                                    <p>Release Date</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3"> <div className="product-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src={shop1} alt="Product" />

                        </div>
                        <div className="content">
                            <div className="title-price">
                                <h5>Mockup Design</h5>
                                <div className="description">Description</div>
                                <div className="price">35.98</div>
                                <p>Release Date</p>
                            </div>
                        </div>

                    </div></div>
                    <div className="col-lg-3"> <div className="product-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src={shop1} alt="Product" />

                        </div>
                        <div className="content">
                            <div className="title-price">
                                <h5>Mockup Design</h5>
                                <div className="description">Description</div>
                                <div className="price">35.98</div>
                                <p>Release Date</p>
                            </div>
                        </div>

                    </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-item wow fadeInUp delay-0-2s">
                            <div className="image">
                                <img src={shop1} alt="Product" />

                            </div>
                            <div className="content">
                                <div className="title-price">
                                    <h5>Mockup Design</h5>
                                    <div className="description">Description</div>
                                    <div className="price">35.98</div>
                                    <p>Release Date</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="product-item wow fadeInUp delay-0-2s">
                            <div className="image">
                                <img src={shop1} alt="Product" />

                            </div>
                            <div className="content">
                                <div className="title-price">
                                    <h5>Mockup Design</h5>
                                    <div className="description">Description</div>
                                    <div className="price">35.98</div>
                                    <p>Release Date</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3"> <div className="product-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src={shop1} alt="Product" />

                        </div>
                        <div className="content">
                            <div className="title-price">
                                <h5>Mockup Design</h5>
                                <div className="description">Description</div>
                                <div className="price">35.98</div>
                                <p>Release Date</p>
                            </div>
                        </div>

                    </div></div>
                    <div className="col-lg-3"> <div className="product-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src={shop1} alt="Product" />

                        </div>
                        <div className="content">
                            <div className="title-price">
                                <h5>Mockup Design</h5>
                                <div className="description">Description</div>
                                <div className="price">35.98</div>
                                <p>Release Date</p>
                            </div>
                        </div>

                    </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-item wow fadeInUp delay-0-2s">
                            <div className="image">
                                <img src={shop1} alt="Product" />

                            </div>
                            <div className="content">
                                <div className="title-price">
                                    <h5>Mockup Design</h5>
                                    <div className="description">Description</div>
                                    <div className="price">35.98</div>
                                    <p>Release Date</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="product-item wow fadeInUp delay-0-2s">
                            <div className="image">
                                <img src={shop1} alt="Product" />

                            </div>
                            <div className="content">
                                <div className="title-price">
                                    <h5>Mockup Design</h5>
                                    <div className="description">Description</div>
                                    <div className="price">35.98</div>
                                    <p>Release Date</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3"> <div className="product-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src={shop1} alt="Product" />

                        </div>
                        <div className="content">
                            <div className="title-price">
                                <h5>Mockup Design</h5>
                                <div className="description">Description</div>
                                <div className="price">35.98</div>
                                <p>Release Date</p>
                            </div>
                        </div>

                    </div></div>
                    <div className="col-lg-3"> <div className="product-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src={shop1} alt="Product" />

                        </div>
                        <div className="content">
                            <div className="title-price">
                                <h5>Mockup Design</h5>
                                <div className="description">Description</div>
                                <div className="price">35.98</div>
                                <p>Release Date</p>
                            </div>
                        </div>

                    </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-item wow fadeInUp delay-0-2s">
                            <div className="image">
                                <img src={shop1} alt="Product" />

                            </div>
                            <div className="content">
                                <div className="title-price">
                                    <h5>Mockup Design</h5>
                                    <div className="description">Description</div>
                                    <div className="price">35.98</div>
                                    <p>Release Date</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="product-item wow fadeInUp delay-0-2s">
                            <div className="image">
                                <img src={shop1} alt="Product" />

                            </div>
                            <div className="content">
                                <div className="title-price">
                                    <h5>Mockup Design</h5>
                                    <div className="description">Description</div>
                                    <div className="price">35.98</div>
                                    <p>Release Date</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3"> <div className="product-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src={shop1} alt="Product" />

                        </div>
                        <div className="content">
                            <div className="title-price">
                                <h5>Mockup Design</h5>
                                <div className="description">Description</div>
                                <div className="price">35.98</div>
                                <p>Release Date</p>
                            </div>
                        </div>

                    </div></div>
                    <div className="col-lg-3"> <div className="product-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img src={shop1} alt="Product" />

                        </div>
                        <div className="content">
                            <div className="title-price">
                                <h5>Mockup Design</h5>
                                <div className="description">Description</div>
                                <div className="price">35.98</div>
                                <p>Release Date</p>
                            </div>
                        </div>

                    </div>
                    </div>

                </div> */}


            </div>
        </section>
    </div>
    );
}
export default Shop;