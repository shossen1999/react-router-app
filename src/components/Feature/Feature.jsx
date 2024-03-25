import PropTypes from 'prop-types'
import { AiOutlineCheck } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div className=' '>
            <p className='flex items-start  gap-2'><AiOutlineCheck className= 'text-black font-extrabold'></AiOutlineCheck>{feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.string
}

export default Feature;