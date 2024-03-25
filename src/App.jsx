import { useState } from 'react'
import { Button } from "@thcode-society/thc-library";

import './styles/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
				Component Library Button test:
				<br />
				<Button
					primary
					label={`The count: ${count}`}
					onClick={() => setCount((count) => count + 1)} />
      </div>
    </>
  )
}

export default App
