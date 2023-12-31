import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
