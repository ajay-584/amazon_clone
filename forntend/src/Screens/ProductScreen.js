import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x =>x._id === props.match.params.id);
    return <div>
        <Link to="/">Back to result</Link>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                    <h4>{product.name}</h4>
                    </li>
                    <li>
                    {product.rating} Starts ({product.numRivews}) Reviews
                    </li>
                    <li>
                        <b>
                            {product.price}
                        </b>
                    </li>
                    <li>
                        Description:
                        {product.desription}
                    </li>

                </ul>
            </div>
        </div>
    </div>
}


export default ProductScreen;