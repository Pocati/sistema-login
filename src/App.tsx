// src/App.tsx
import GlobalStyles from './styles/GlobalStyles'
import { RoutesApp } from './routes'
import { AuthProvider } from './context/auth'

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyles />
    </AuthProvider>
  )
}

export default App