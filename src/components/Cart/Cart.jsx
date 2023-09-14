import PropTypes from 'prop-types';

const Cart = ({ selectedActors }) => {
    console.log(selectedActors);

    return (
        <div>
            <h1>Thi is Cart</h1>

            {
                selectedActors.map((actor, idx) => (
                    <div key={idx}>
                        <li>{actor.name}</li>
                    </div>
                ))
            }
        </div>
    );
};

Cart.propTypes = {
    selectedActors: PropTypes.array.isRequired,
}

export default Cart;