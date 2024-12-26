/**
 * Application entry point that handles routing and responsive layout switching.
 * Provides a consistent mobile container when viewing mobile layouts on desktop,
 * and manages the transition between mobile/desktop views. Also handles route
 * protection for onboarding flow.
 */

// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import './index.css'

// Mobile Components
import OnboardingMobile from './Onboarding/onboardingMobile'
import HomeMobile from './Home/homeMobile'
import SearchMobile from './Search/searchMobile'
import SettingsMobile from './Settings/settingsMobile'
import FilterMobile from './Search/filterMobile'

// Desktop Components
import HomeWeb from './Home/homeWeb'
import SearchWeb from './Search/searchWeb'
import SettingsWeb from './Settings/settingsWeb'

/**
 * Mobile layout wrapper components.
 * These create a phone-like container when viewing mobile layouts on desktop,
 * providing visual context and consistent width constraints.
 */
const MobileWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;
  background: #f5f5f5;
`

const MobileContainer = styled.div`
  width: 430px;
  min-height: calc(100vh - 40px);
  background: white;
  border-radius: 32px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
`

/**
 * Initializes required localStorage values if not present.
 * Sets default mobile view and onboarding status.
 * Also fetches and caches filter options from the API.
 */
const initializeLocalStorage = async () => {
  if (!localStorage.getItem('isMobile')) {
    localStorage.setItem('isMobile', 'true')
  }
  if (!localStorage.getItem('onboardingComplete')) {
    localStorage.setItem('onboardingComplete', 'false')
  }

  // Fetch and cache filter options
  try {
    const response = await fetch('http://localhost:5000/api/options')
    const data = await response.json()

    localStorage.setItem('availableCategories', JSON.stringify(data.categories))
    localStorage.setItem('availableAreas', JSON.stringify(data.areas))
  } catch (error) {
    console.error('Failed to fetch filter options:', error)
  }
}

/**
 * Route guard component that redirects to onboarding if not completed.
 * Protects main app routes until onboarding flow is finished.
 */
const ProtectedRoute = ({ children }) => {
  const onboardingComplete =
    localStorage.getItem('onboardingComplete') === 'true'
  if (!onboardingComplete) {
    return <Navigate to="/onboarding" replace />
  }
  return children
}

/**
 * Renders either mobile or desktop component based on user preference.
 * Mobile components are wrapped in a phone-like container for desktop viewing.
 */
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
        {/* Onboarding Route - Mobile Only */}
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

        {/* Protected Main Routes */}
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
          path="/search/filter"
          element={
            <ProtectedRoute>
              <ResponsiveComponent Mobile={FilterMobile} Desktop={SearchWeb} />
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

        {/* Fallback Route */}
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
