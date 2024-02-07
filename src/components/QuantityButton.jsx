import PropTypes from 'prop-types'

const QuantityButton = ({
	count,
	operation,
	setCount,
	onCountChange,
}) => (
	<>
		{operation == 'add' ?
			<button
				type='button' 
				className="btn btn-dark py-2 mx-2 fw-bold"
				onClick={() => {
					setCount(count + 1)
					onCountChange(count, '+')
				}} 
			>
				+
			</button>
			:
			<button
				type='button'
				className={`btn btn-dark py-2 mx-2 fw-bold + ${count == 0 ? ' disabled' : null}`}
				onClick={() => {
					count > 0 ? setCount(count - 1) : null
					onCountChange(count, '-')
				}} 
			>
				&minus;
			</button>
		}
	</>
)

// Props validation
QuantityButton.propTypes = {
	count: PropTypes.number.isRequired,
	operation: PropTypes.string.isRequired,
	setCount: PropTypes.func.isRequired,
	setDisplayItem: PropTypes.func.isRequired,
	onCountChange: PropTypes.func.isRequired,
}    

export default QuantityButton