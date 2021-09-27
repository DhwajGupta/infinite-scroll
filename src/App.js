import React, { Suspense } from 'react'

import Routes from './routes'
import { Loader } from './components/common/index'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes />
    </Suspense>
  )
}

export default App
