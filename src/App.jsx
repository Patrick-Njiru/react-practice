import { useState } from 'react'
import CartItem from './components/CartItem'


const styles = {
	font: {fontFamily: 'sans-serif'},
	width: {
		minWidth: 400, 
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
			count == 0 ? setItemsCount(itemsCount + 1) : null
		} else {
			count == 1 && itemsCount > 0 ? setItemsCount(itemsCount - 1) : null
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
							<CartItem
								count={count1}
								setCount={setCount1}
								onCountChange={handleCountChange}
								setDisplayItem={setDisplayItem1}
							/>
						</li>
						{/* Item 2 */}
						<li 
							className={displayItem2 + "list-group-item align-items-start justify-content-between border-0"} 
							style={styles.width}
						>
							<CartItem
								count={count2}
								setCount={setCount2}
								onCountChange={handleCountChange}
								setDisplayItem={setDisplayItem2}
							/>
						</li>
						{/* Item 3 */}
						<li 
							className={displayItem3 + "list-group-item align-items-start justify-content-between border-0"} 
							style={styles.width}
						>
							<CartItem
								count={count3}
								setCount={setCount3}
								onCountChange={handleCountChange}
								setDisplayItem={setDisplayItem3}
							/>
						</li>
						{/* Item 4 */}
						<li 
							className={displayItem4 + "list-group-item align-items-start justify-content-between border-0"} 
							style={styles.width}
						>
							<CartItem
								count={count4}
								setCount={setCount4}
								onCountChange={handleCountChange}
								setDisplayItem={setDisplayItem4}
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default App
