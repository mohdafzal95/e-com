import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../context';
import './styles.css'

export const Card = ({ item }) => {

    const context = useContext(Context);

    const { title, price, images  } = item;

    const showProduct = (productDetail) => {
        context.closeCheckoutSideMenu()
        context.openProductDetail();
        context.setShowProductDetail(productDetail);
    }

    

    

    return (
        <div className='border-2  bg-white border-black shadow-md cursor-pointer w-56 h-60 rounded-lg relative '>
            <figure
                className='relative mb-2 w-full h-4/5'
                onClick={() => showProduct(item)}
            >
                <img src={images[0]} alt={`image ${title}`} className='w-full h-full object-contain rounded-lg' />
            </figure>
            <p className='flex justify-between px-1 items-center '>
                <span className='text-sm font-normal'>
                    {title.length > 25 ? (title.substring(0, 24)) + '...' : title}
                </span>
                <span className='text-lg font-normal'>${price}</span>
            </p>
            
        </div>
    )
};

Card.propTypes = {
    item: PropTypes.object
}