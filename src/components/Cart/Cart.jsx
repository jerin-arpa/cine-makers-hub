import PropTypes from 'prop-types';

const Cart = ({ selectedActors, remaining, totalCost }) => {

    return (
        <div>
            <div className='border-2 border-gray-300 mb-5 rounded-lg py-5'>
                <h1 className='text-center text-xl font-bold mb-5'>Total Budget: $30000</h1>
                <h2 className='text-center text-xl font-bold mb-5'>Total Cost: ${totalCost}</h2>
                <h2 className='text-center text-xl font-bold mb-5'>Remaining: ${remaining}</h2>
            </div>

            <div className='border-2 border-gray-300 rounded-lg py-5'>
                <h1 className='text-center text-xl font-bold mb-5'>Total Actors: {selectedActors.length}</h1>


                <div className='flex justify-center'>
                    <div>
                        {
                            selectedActors.map((actor, idx) => (
                                <div key={idx}>
                                    <li>{actor.name}</li>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectedActors: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired,
}

export default Cart;