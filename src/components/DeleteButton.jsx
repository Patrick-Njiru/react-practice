import PropTypes from 'prop-types'

const DeleteButton = ({
	count,
	setDisplayItem,
	onCountChange,
}) => (
	<button
		type='button' 
		className="btn btn-danger py-2 mx-2 fw-bold"
		onClick={() => {
			setDisplayItem('d-none ')
			count > 0 ? onCountChange(1, '-') : null
		}}
	>
		Delete
	</button>
)

// Props validation
DeleteButton.propTypes = {
	count: PropTypes.number.isRequired,
	setDisplayItem: PropTypes.func.isRequired,
	onCountChange: PropTypes.func.isRequired,
}

export default DeleteButton