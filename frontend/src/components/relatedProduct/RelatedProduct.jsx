import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Item from '../Item/Item';

const getRelatedProduct = (category, products, id) => {
    const category_products = products.filter((product) => product.category === category);

    const related_products = [];
    const random_product_ids = [];

    while (related_products.length < 4 && category_products.length > 0) {
        const random_product = category_products[Math.floor(Math.random() * category_products.length)];
        if (random_product && !random_product_ids.includes(random_product.id) && random_product.id !== id) {
            related_products.push(random_product);
            random_product_ids.push(random_product.id);
        }
    }
    return related_products;
};

const RelatedProduct = ({ category, id }) => {
    const { all_products } = useContext(ShopContext);
    const related_products = getRelatedProduct(category, all_products, id);

    return (
        <div className="mb-10">
            <h1 className="text-4xl my-20 text-center font-semibold">Related Products</h1>
            <hr className="border-4 border-blue-800 w-20 mx-auto -mt-12 mb-12" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                {related_products.map((product) => {
                    return <Item key={product.id} ItemObj={product} />;
                })}
            </div>
        </div>
    );
};

export default RelatedProduct;
