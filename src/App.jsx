import { useState, useEffect } from 'react'

function App() {
  const [itemsCount, setItemsCount ] = useState([0,0,0,0])
  const [count1, setCount1 ] = useState(0)
  const [count2, setCount2 ] = useState(0)
  const [count3, setCount3 ] = useState(0)
  const [count4, setCount4 ] = useState(0)
  const [displayItem1, setDisplayItem1] = useState('d-flex ')
  const [displayItem2, setDisplayItem2] = useState('d-flex ')
  const [displayItem3, setDisplayItem3] = useState('d-flex ')
  const [displayItem4, setDisplayItem4] = useState('d-flex ')
  const [disableButton, setDisableButton] = useState(false)

  // useEffect(() => {}, [displayItem])

  const styles = {
    font: {fontFamily: 'sans-serif'},
    width: {
      minWidth: '400px', 
      width: '50vw',
    },
  }

  return (
    <div className="w-75" style={styles.font}>
      <div className="container">
        <nav className='fw-bold m-3'>
          Navbar 
          <span className="rounded-circle bg-dark text-light px-2 p-1 ms-2">
            {itemsCount[0]+itemsCount[0]+itemsCount[0]+itemsCount[0]}
          </span>
        </nav>
      
        <div className="mt-3 ms-5">
          <button 
            className="btn btn-primary mt-4"
            onClick={() => { setItemsCount(0), setCount1(0), setCount2(0), setCount3(0), setCount4(0) }}
          >
            Reset
          </button>
          {/* 1 */}
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
                onClick={() => {
                  setItemsCount(itemsCount => itemsCount[0] = 1)
                  setCount1(count1 => count1 += 1)
                }} 
                className="btn btn-dark py-2 mx-2 fw-bold"
              >
                +
              </button>

              <button
                type='button'
                className="btn btn-dark py-2 mx-2 fw-bold"
                onClick={() => {
                  count1 > 0 ? 
                    setCount1(count1 => count1 -= 1) && setDisableButton(false) 
                    : setDisableButton(true) && setItemsCount(itemsCount => itemsCount[0] = 0)
                }} 
                disabled = {disableButton}
              >
                &minus;
              </button>

              <button 
                className="btn btn-danger py-2 mx-2 fw-bold"
                onClick={() => setDisplayItem1('d-none ')}
              >
                Delete
              </button>
            </div>
          </div>
          {/* 2 */}
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
                onClick={() => setCount2(count2 => count2 += 1)} 
                className="btn btn-dark py-2 mx-2 fw-bold"
              >
                +
              </button>

              <button
                type='button'
                onClick={() => setCount2(count2 => count2 -= 1)} 
                className="btn btn-dark py-2 mx-2 fw-bold"
              >
                &minus;
              </button>

              <button 
                className="btn btn-danger py-2 mx-2 fw-bold"
                onClick={() => setDisplayItem2('d-none ')}
              >
                Delete
              </button>
            </div>

          </div>
          {/* 3 */}
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
                onClick={() => setCount3(count3 => count3 += 1)} 
                className="btn btn-dark py-2 mx-2 fw-bold"
              >
                +
              </button>

              <button
                type='button'
                onClick={() => setCount3(count3 => count3 -= 1)} 
                className='btn btn-dark py-2 mx-2 fw-bold'
              >
                &minus;
              </button>

              <button 
                className="btn btn-danger py-2 mx-2 fw-bold"
                onClick={() => setDisplayItem3('d-none ')}
              >
                Delete
              </button>
            </div>

          </div>
          {/* 4 */}
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
                onClick={() => setCount4(count4 => count4 += 1)} 
                className="btn btn-dark py-2 mx-2 fw-bold"
              >
                +
              </button>

              <button
                type='button'
                onClick={() => setCount4(count4 => count4 -= 1)} 
                className="btn btn-dark py-2 mx-2 fw-bold"
              >
                &minus;
              </button>

              <button 
                className="btn btn-danger py-2 mx-2 fw-bold"
                onClick={() => setDisplayItem4('d-none ')}
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
