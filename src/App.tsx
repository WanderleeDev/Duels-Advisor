import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store'
import { router } from './routes/routes'
import Loader from './shared/ui/Loader'

export default function App () {
  return (
    <Provider store={store}>
      <ErrorBoundary message='Error'>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  )
}
