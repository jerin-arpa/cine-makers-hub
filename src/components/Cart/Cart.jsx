import PropTypes from 'prop-types';

const Cart = ({ selectedActors }) => {
    console.log(selectedActors);

    return (
        <div>
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
    );
};

Cart.propTypes = {
    selectedActors: PropTypes.array.isRequired,
}

export default Cart;