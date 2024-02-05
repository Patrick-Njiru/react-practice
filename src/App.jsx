import { useState } from 'react'


const styles = {
	font: {fontFamily: 'sans-serif'},
	width: {
		minWidth: '400px', 
		width: '50vw',
	},
}

const App = () => {
	const [itemsCount, setItemsCount ] = useState(0)
	const [count1, setCount1 ] = useState(0)
	const [count2, setCount2 ] = useState(0)
	const [count3, setCount3 ] = useState(0)
	const [count4, setCount4 ] = useState(0)
	const [displayItem1, setDisplayItem1] = useState('d-flex ')
	const [displayItem2, setDisplayItem2] = useState('d-flex ')
	const [displayItem3, setDisplayItem3] = useState('d-flex ')
	const [displayItem4, setDisplayItem4] = useState('d-flex ')
  // const [disableButton, setDisableButton] = useState(false)

	const handleCountChange = (count, change) => {
		if (change == '+') {
			count == 0 ? setItemsCount(itemsCount => itemsCount += 1) : null
		} else {
			count == 1 && itemsCount > 0 ? setItemsCount(itemsCount => itemsCount -= 1) : null
		}
	}


	return (
		<div className="w-75" style={styles.font}>
			<div className="container">
				<nav className='fw-bold m-3'>
					Navbar 
					<span className="rounded-circle bg-dark text-light px-2 p-1 ms-2">
						{ itemsCount }
					</span>
				</nav>
			
				<div className="mt-3 ms-5">
					<button 
						className="btn btn-primary mt-4"
						onClick={() => { setItemsCount(0), setCount1(0), setCount2(0), setCount3(0), setCount4(0) }}
					>
						Reset
					</button>

					{/* Row 1 */}
					<div 
						className={displayItem1 + "align-items-start justify-content-between my-3"} 
						style={styles.width}
					>
						{count1 == 0 ? 
							<div className="alert bg-warning fw-bold py-0 px-2"> Zero </div> 
							: 
							<div className="alert bg-primary fw-bold py-0 px-2"> {count1} </div> 
						}

						<div className="w-75">
							<button 
								type='button' 
								className="btn btn-dark py-2 mx-2 fw-bold"
								onClick={() => {
									setCount1(count1 => count1 += 1)
									handleCountChange(count1, '+')
								}} 
							>
								+
							</button>

							<button
								type='button'
								className="btn btn-dark py-2 mx-2 fw-bold"
								onClick={() => {
									count1 > 0 ? setCount1(count1 => count1 -= 1) : null
									handleCountChange(count1, '-')
								}} 
								// disabled = {disableButton}
							>
								&minus;
							</button>

							<button
								type='button' 
								className="btn btn-danger py-2 mx-2 fw-bold"
								onClick={() => {
									setDisplayItem1('d-none ')
									count1 > 0 ? handleCountChange(1, '-') : null
								}}
							>
								Delete
							</button>
						</div>
					</div>

					{/* Row 2 */}
					<div 
						className={displayItem2 + "align-items-start justify-content-between my-3"} 
						style={styles.width}
					>
						{count2 == 0 ? 
							<div className="alert bg-warning fw-bold py-0 px-2"> Zero </div> 
							: 
							<div className="alert bg-primary fw-bold py-0 px-2"> {count2} </div> 
						}

						<div className="w-75">
							<button 
								type='button' 
								className="btn btn-dark py-2 mx-2 fw-bold"
								onClick={() => {
									setCount2(count2 => count2 += 1)
									handleCountChange(count2, '+')
								}} 
							>
								+
							</button>

							<button
								type='button'
								className="btn btn-dark py-2 mx-2 fw-bold"
								onClick={() => {
									count2 > 0 ? setCount2(count2 => count2 -= 1) : null
									handleCountChange(count2, '-')
								}} 
								// disabled = {disableButton}
							>
								&minus;
							</button>

							<button 
								type='button'
								className="btn btn-danger py-2 mx-2 fw-bold"
								onClick={() => {
									setDisplayItem2('d-none ')
									count2 > 0 ? handleCountChange(1, '-') : null
								}}
							>
								Delete
							</button>
						</div>
					</div>

					{/* Row 3 */}
					<div 
						className={displayItem3 + "align-items-start justify-content-between my-3"} 
						style={styles.width}
					>
						{count3 == 0 ? 
							<div className="alert bg-warning fw-bold py-0 px-2"> Zero </div> 
							: 
							<div className="alert bg-primary fw-bold py-0 px-2"> {count3} </div> 
						}

						<div className="w-75">
							<button 
								type='button' 
								className="btn btn-dark py-2 mx-2 fw-bold"
								onClick={() => {
									setCount3(count3 => count3 += 1)
									handleCountChange(count3, '+')
								}} 
							>
								+
							</button>

							<button
								type='button'
								className="btn btn-dark py-2 mx-2 fw-bold"
								onClick={() => {
									count3 > 0 ? setCount3(count3 => count3 -= 1) : null
									handleCountChange(count3, '-')
								}} 
								// disabled = {disableButton}
							>
								&minus;
							</button>

							<button
								type='button' 
								className="btn btn-danger py-2 mx-2 fw-bold"
								onClick={() => {
									setDisplayItem3('d-none ')
									count3 > 0 ? handleCountChange(1, '-') : null
								}}
							>
								Delete
							</button>
						</div>
					</div>

					{/* Row 4 */}
					<div 
						className={displayItem4 + "align-items-start justify-content-between my-3"} 
						style={styles.width}
					>
						{count4 == 0 ? 
							<div className="alert bg-warning fw-bold py-0 px-2"> Zero </div> 
							: 
							<div className="alert bg-primary fw-bold py-0 px-2"> {count4} </div> 
						}

						<div className="w-75">
							<button 
								type='button' 
								className="btn btn-dark py-2 mx-2 fw-bold"
								onClick={() => {
									setCount4(count4 => count4 += 1)
									handleCountChange(count4, '+')
								}} 
							>
								+
							</button>

							<button
								type='button'
								className="btn btn-dark py-2 mx-2 fw-bold"
								onClick={() => {
									count4 > 0 ? setCount4(count4 => count4 -= 1) : null
									handleCountChange(count4, '-')
								}} 
								// disabled = {disableButton}
							>
								&minus;
							</button>

							<button 
								type='button'
								className="btn btn-danger py-2 mx-2 fw-bold"
								onClick={() => {
									setDisplayItem4('d-none ')
									count1 > 0 ? handleCountChange(1, '-') : null
								}}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
