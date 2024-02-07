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
				<nav className='fw-bold m-5 mb-0'>
					Navbar 
					<span className="rounded-circle bg-dark text-light px-2 p-1 ms-2">
						{ itemsCount }
					</span>
				</nav>
			
				<div className="ms-5">
					<button 
						className="btn btn-primary my-5"
						onClick={() => { setItemsCount(0), setCount1(0), setCount2(0), setCount3(0), setCount4(0) }}
					>
						Reset
					</button>

					<ul className='list-group mt-3'>
						{/* Item 1 */}
						<li 
							className={displayItem1 + "list-group-item align-items-start justify-content-between border-0"} 
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
									className={`btn btn-dark py-2 mx-2 fw-bold + ${count1 == 0 ? ' disabled' : null}`}
									onClick={() => {
										count1 > 0 ? setCount1(count1 => count1 -= 1) : null
										handleCountChange(count1, '-')
									}} 
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
						</li>

						{/* Item 2 */}
						<li 
							className={displayItem2 + "list-group-item align-items-start justify-content-between border-0"} 
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
									className={`btn btn-dark py-2 mx-2 fw-bold + ${count2 == 0 ? ' disabled' : null}`}
									onClick={() => {
										count2 > 0 ? setCount2(count2 => count2 -= 1) : null
										handleCountChange(count2, '-')
									}} 
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
						</li>

						{/* Item 3 */}
						<li 
							className={displayItem3 + "list-group-item align-items-start justify-content-between border-0"} 
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
									className={`btn btn-dark py-2 mx-2 fw-bold + ${count3 == 0 ? ' disabled' : null}`}
									onClick={() => {
										count3 > 0 ? setCount3(count3 => count3 -= 1) : null
										handleCountChange(count3, '-')
									}} 
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
						</li>

						{/* Item 4 */}
						<li 
							className={displayItem4 + "list-group-item align-items-start justify-content-between border-0"} 
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
									className={`btn btn-dark py-2 mx-2 fw-bold + ${count4 == 0 ? ' disabled' : null}`}
									onClick={() => {
										count4 > 0 ? setCount4(count4 => count4 -= 1) : null
										handleCountChange(count4, '-')
									}} 
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
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default App
