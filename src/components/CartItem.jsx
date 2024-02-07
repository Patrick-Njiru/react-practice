import React from 'react'
import PropTypes from 'prop-types'
import QuantityButton from './QuantityButton'
import DeleteButton from './DeleteButton'

const CartItem = ({
	count,
	setCount,
	onCountChange,
	setDisplayItem
}) => (
	<React.Fragment>
		<div className={"alert fw-bold py-0 px-2 bg-" + `${count > 0 ? 'primary' : 'warning'}`}>
			{count > 0 ? count : 'Zero'}
		</div>
		
		<div className="w-75">
			<QuantityButton
				count={count}
				operation='add'
				setCount={setCount}
				onCountChange={onCountChange}
			/>

			<QuantityButton
				count={count}
				operation='subtract'
				setCount={setCount}
				onCountChange={onCountChange}
			/>

			<DeleteButton
				count={count}
				setDisplayItem={setDisplayItem}
				onCountChange={onCountChange}
			/>

		</div>
	</React.Fragment>
)

// validation
CartItem.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired,
	onCountChange: PropTypes.func.isRequired,
	setDisplayItem: PropTypes.func.isRequired,
}

export default CartItem