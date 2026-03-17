import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { Home, Ordini, Brand, WrapperRoute, ErrorRoute } from './routes'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WrapperRoute />,
    errorElement: <ErrorRoute />,
    children: [
      { index: true, element: <Home /> },
      { path: 'ordini', element: <Ordini /> },
      { path: 'brand', element: <Brand /> },
    ],
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
