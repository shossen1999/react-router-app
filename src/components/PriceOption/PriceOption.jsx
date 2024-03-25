import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
  const {name, price,features}=option;

    return (
        <div className='bg-blue-500 text-white p-6 flex flex-col rounded-xl text-center '>

            <h2 className='mb-6'>
                <span className='text-6xl font-bold  '>{price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h4 className='text-2xl mb-4'>{name}</h4>

           <div className='pl-6 flex-grow'>
           {
                features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
            }

           </div>
           <button className='bg-green-500 w-full mt-12 py-2 rounded-lg  hover:bg-green-900 font-bold '>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes ={
    option:PropTypes.object
}

export default PriceOption;