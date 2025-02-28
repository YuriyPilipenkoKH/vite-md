import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useModalStore } from './store/useModalStore'
import MainModal from './components/modals/MainModal'
import ThemeChanger from './components/button/ThemeChanger'

function App() {
  const [count, setCount] = useState(0)
  const {modalIsOpen, onModalOpen} = useModalStore()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ThemeChanger/>
      <h1>Vite + React</h1>
      <div className="card flex flex-col gap-5">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={onModalOpen}>
          Modal
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      { modalIsOpen && <MainModal/>}
    </>
  )
}

export default App
