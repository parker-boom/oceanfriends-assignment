// Libraries
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  MdChevronRight,
  MdOutlineDinnerDining,
  MdExpandMore,
} from 'react-icons/md'

// Styles
import * as O from './onboarding.styles'

// Assets
import logo from '../Assets/logo512.png'
import pfp1 from '../Assets/pfpImages/pfp1.png'
import pfp2 from '../Assets/pfpImages/pfp2.png'
import pfp3 from '../Assets/pfpImages/pfp3.png'
import pfp4 from '../Assets/pfpImages/pfp4.png'
import pfp5 from '../Assets/pfpImages/pfp5.png'

/**
 * Constants used throughout the settings interface.
 * pfpOptions provides the available profile pictures with their IDs.
 */
const pfpOptions = [
  { id: 'pfp1', src: pfp1 },
  { id: 'pfp2', src: pfp2 },
  { id: 'pfp3', src: pfp3 },
  { id: 'pfp4', src: pfp4 },
  { id: 'pfp5', src: pfp5 },
]

/**
 * OnboardingMobile - Mobile version of the onboarding interface.
 * Provides a step-by-step setup process for new users.
 */
function OnboardingMobile() {
  const navigate = useNavigate()

  // Get categories and areas from localStorage
  const categories = JSON.parse(
    localStorage.getItem('availableCategories') || '[]',
  )
  const areas = JSON.parse(localStorage.getItem('availableAreas') || '[]')

  // Navigation state
  const [currentSlide, setCurrentSlide] = useState(0)

  // User-data state
  const [name, setName] = useState('')
  const [selectedPfp, setSelectedPfp] = useState('pfp1')

  // Preferences state
  const [favoriteCategory, setFavoriteCategory] = useState('')
  const [favoriteArea, setFavoriteArea] = useState('')

  // UI state
  const [openSection, setOpenSection] = useState('category')

  // Handler functions
  const handleCategorySelect = (category) => {
    setFavoriteCategory(category)
    setOpenSection('area')
  }

  const handleAreaSelect = (area) => {
    setFavoriteArea(area)
    setOpenSection('')
  }

  /**
   * Handles progression through onboarding slides.
   * Saves user data at appropriate steps:
   * - Slide 1 -> 2: No data saved
   * - Slide 2 -> 3: Saves name and profile picture
   * - Slide 3 -> Home: Saves preferences and marks onboarding as complete
   */
  const handleNext = () => {
    if (currentSlide === 2) {
      localStorage.setItem('favoriteCategory', favoriteCategory)
      localStorage.setItem('favoriteArea', favoriteArea)
      localStorage.setItem('onboardingComplete', 'true')
      navigate('/')
      return
    }

    if (currentSlide === 1) {
      localStorage.setItem('userName', name)
      localStorage.setItem('userPfp', selectedPfp)
    }

    setCurrentSlide((prev) => prev + 1)
  }

  const handleBack = () => {
    setCurrentSlide((prev) => prev - 1)
  }

  /**
   * Renders content based on current slide.
   * Slide 0: Welcome and app introduction
   * Slide 1: Name and profile picture selection
   * Slide 2: Food preferences with progressive disclosure
   */
  const renderContent = () => {
    switch (currentSlide) {
      // First slide: welcome & explanation
      case 0:
        return (
          <>
            <O.LogoContainer>
              <O.Logo src={logo} alt="Recipeasy Logo" />
            </O.LogoContainer>
            <O.WelcomeText>
              <span className="welcome">Welcome to</span>
              <span className="gradient-text">Recipeasy</span>
            </O.WelcomeText>
            <O.Subtitle>
              Your personal hub for discovering delicious recipes. Search by
              category or area, and easily find your next favorite meal.
            </O.Subtitle>
          </>
        )

      // Second slide: Get name & pfp
      case 1:
        return (
          <>
            <O.WaveContainer>
              <span className="wave">👋</span>
            </O.WaveContainer>
            <O.SlideTitle>Let's get to know you first</O.SlideTitle>

            <O.InputSection>
              <O.InputLabel>What's your name?</O.InputLabel>
              <O.NameInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name only"
                autoFocus
              />
            </O.InputSection>

            <O.PfpSection>
              <O.InputLabel>Choose your profile picture</O.InputLabel>
              <O.PfpGrid>
                {pfpOptions.map((pfp) => (
                  <O.PfpOption
                    key={pfp.id}
                    selected={selectedPfp === pfp.id}
                    onClick={() => setSelectedPfp(pfp.id)}
                  >
                    <img src={pfp.src} alt={`Profile ${pfp.id}`} />
                  </O.PfpOption>
                ))}
              </O.PfpGrid>
            </O.PfpSection>
          </>
        )

      // Third slide: Get favorite category & area
      case 2:
        return (
          <>
            <O.WaveContainer>
              <span className="wave">👨‍🍳</span>
            </O.WaveContainer>
            <O.SlideTitle>What kind of food excites you?</O.SlideTitle>
            <O.Description>
              Help us understand your taste! Choose your favorite type of
              cuisine and we'll use this to personalize your experience.
            </O.Description>

            <O.FilterSection>
              <O.FilterHeader
                onClick={() => setOpenSection('category')}
                isOpen={openSection === 'category'}
                hasSelection={!!favoriteCategory}
              >
                <O.FilterLabel>Category</O.FilterLabel>
                {favoriteCategory && openSection !== 'category' && (
                  <O.FilterSelection>
                    {favoriteCategory}
                    <MdExpandMore size={20} />
                  </O.FilterSelection>
                )}
              </O.FilterHeader>
              <O.FilterGrid isOpen={openSection === 'category'}>
                {categories.map((category) => (
                  <O.FilterOption
                    key={category}
                    selected={category === favoriteCategory}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </O.FilterOption>
                ))}
              </O.FilterGrid>
            </O.FilterSection>

            <O.FilterSection>
              <O.FilterHeader
                onClick={() => setOpenSection('area')}
                isOpen={openSection === 'area'}
                hasSelection={!!favoriteArea}
              >
                <O.FilterLabel>Area</O.FilterLabel>
                {favoriteArea && openSection !== 'area' && (
                  <O.FilterSelection>
                    {favoriteArea}
                    <MdExpandMore size={20} />
                  </O.FilterSelection>
                )}
              </O.FilterHeader>
              <O.FilterGrid isOpen={openSection === 'area'}>
                {areas.map((area) => (
                  <O.FilterOption
                    key={area}
                    selected={area === favoriteArea}
                    onClick={() => handleAreaSelect(area)}
                  >
                    {area}
                  </O.FilterOption>
                ))}
              </O.FilterGrid>
            </O.FilterSection>
          </>
        )
      default:
        return null
    }
  }

  // Bottom sections: progress dots & buttons
  return (
    <O.OnboardingContainer>
      <O.ContentContainer>{renderContent()}</O.ContentContainer>

      <O.BottomSection>
        <O.DotsContainer>
          <O.Dot active={currentSlide === 0} />
          <O.Dot active={currentSlide === 1} />
          <O.Dot active={currentSlide === 2} />
        </O.DotsContainer>

        <O.ButtonContainer>
          <O.NextButton
            onClick={handleNext}
            disabled={currentSlide === 1 && !name.trim()}
            style={{ opacity: currentSlide === 1 && !name.trim() ? 0.5 : 1 }}
          >
            {currentSlide === 2 ? (
              <>
                Get Cooking
                <MdOutlineDinnerDining size={20} />
              </>
            ) : (
              <>
                Next
                <MdChevronRight size={20} />
              </>
            )}
          </O.NextButton>
          {currentSlide > 0 ? (
            <O.BackButton onClick={handleBack}>Go back</O.BackButton>
          ) : (
            <O.BackButton style={{ visibility: 'hidden' }}>
              Go back
            </O.BackButton>
          )}
        </O.ButtonContainer>
      </O.BottomSection>
    </O.OnboardingContainer>
  )
}

// Used in index.js
export default OnboardingMobile
