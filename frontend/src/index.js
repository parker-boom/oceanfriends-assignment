// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import styled from 'styled-components'

// Mobile Components
import OnboardingMobile from './Onboarding/onboardingMobile'
import HomeMobile from './Home/homeMobile'
import SearchMobile from './Search/searchMobile'
import SettingsMobile from './Settings/settingsMobile'

// Desktop Components
import HomeWeb from './Home/homeWeb'
import SearchWeb from './Search/searchWeb'
import SettingsWeb from './Settings/settingsWeb'

// Initialize local storage values if not present
const initializeLocalStorage = () => {
  if (!localStorage.getItem('isMobile')) {
    localStorage.setItem('isMobile', 'true')
  }
  if (!localStorage.getItem('onboardingComplete')) {
    localStorage.setItem('onboardingComplete', 'false')
  }
}

// Route guard component to handle onboarding redirect
const ProtectedRoute = ({ children }) => {
  const onboardingComplete =
    localStorage.getItem('onboardingComplete') === 'true'
  if (!onboardingComplete) {
    return <Navigate to="/onboarding" replace />
  }
  return children
}

// Styled components for mobile layout, forcing mobile view for desktop viewing
const MobileWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px 0;
  background: #f5f5f5;
`

const MobileContainer = styled.div`
  width: 430px;
  min-height: calc(100vh - 40px);
  background: white;
  padding: 0 10px;
  border-radius: 32px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

// Component selector based on mobile preference
const ResponsiveComponent = ({ Mobile, Desktop }) => {
  const isMobile = localStorage.getItem('isMobile') === 'true'
  return isMobile ? (
    <MobileWrapper>
      <MobileContainer>
        <Mobile />
      </MobileContainer>
    </MobileWrapper>
  ) : (
    <Desktop />
  )
}

function App() {
  React.useEffect(() => {
    initializeLocalStorage()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/onboarding"
          element={
            <MobileWrapper>
              <MobileContainer>
                <OnboardingMobile />
              </MobileContainer>
            </MobileWrapper>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ResponsiveComponent Mobile={HomeMobile} Desktop={HomeWeb} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <ResponsiveComponent Mobile={SearchMobile} Desktop={SearchWeb} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <ResponsiveComponent
                Mobile={SettingsMobile}
                Desktop={SettingsWeb}
              />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
