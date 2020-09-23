import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x =>x._id === props.match.params.id);
    return <div className="back-to-result">
        <Link to="/">Back to result</Link>
        <div className="details">
        {/* =======Image section=========== */}
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            {/* =======prduct details section======== */}
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
                            Price: {product.price}
                        </b>
                    </li>
                    <li>
                        Description:
                        {product.desription}
                    </li>

                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price:{product.price}
                    </li>
                    <li>
                        Status:{product.status}
                    </li>
                    <li>
                        Qty:<select>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                        </select>
                    </li>
                    <li>
                        <button className="button">Add to Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}


export default ProductScreen;