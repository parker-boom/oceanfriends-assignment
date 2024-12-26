import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdSettings } from 'react-icons/io'
import { MdExpandMore, MdClose } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'

// Styles
import * as S from './settings.styles'

// Assets
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
 * SettingsWeb - Desktop version of the settings interface.
 * Provides a full-width layout with enhanced visual organization.
 * Features:
 * - Seamless name editing
 * - Grid-based profile picture selection
 * - Expandable preference sections with icons
 * - Layout switching capability
 * - Persistent storage of user choices
 */
function SettingsWeb() {
  const navigate = useNavigate()

  // Get categories and areas from localStorage
  const categories = JSON.parse(
    localStorage.getItem('availableCategories') || '[]',
  )
  const areas = JSON.parse(localStorage.getItem('availableAreas') || '[]')

  // User-related state
  const [name, setName] = useState(localStorage.getItem('userName') || '')
  const [selectedPfp, setSelectedPfp] = useState(
    localStorage.getItem('userPfp') || 'pfp1',
  )

  // Preferences state
  const [favoriteCategory, setFavoriteCategory] = useState(
    localStorage.getItem('favoriteCategory') || '',
  )
  const [favoriteArea, setFavoriteArea] = useState(
    localStorage.getItem('favoriteArea') || '',
  )

  // UI state
  const [openSection, setOpenSection] = useState('')
  const [setIsEditing] = useState(false)
  const [showModal, setShowModal] = useState(false)

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
   * Saves all user preferences to localStorage and returns to home.
   * Handles name, profile picture, and favorite food preferences.
   */
  const handleSave = () => {
    localStorage.setItem('userName', name)
    localStorage.setItem('userPfp', selectedPfp)
    localStorage.setItem('favoriteCategory', favoriteCategory)
    localStorage.setItem('favoriteArea', favoriteArea)
    navigate('/')
  }

  /**
   * Switches the application to mobile layout.
   * Updates localStorage and triggers a page reload for the change.
   */
  const handleSwitchToMobile = () => {
    localStorage.setItem('isMobile', 'true')
    window.location.reload()
  }

  return (
    <S.WebContainer>
      <S.WebHeader>
        <div>
          <S.WebTitle>Settings</S.WebTitle>
          <S.WebSubtitle>Switching things up</S.WebSubtitle>
        </div>
        <S.WebSettingsIcon>
          <IoMdSettings size={50} />
        </S.WebSettingsIcon>
      </S.WebHeader>

      <S.WebContent>
        {/* Name & PFP */}
        <S.WebSection>
          <S.WebSectionTitle>Name</S.WebSectionTitle>
          <S.WebNameInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={name}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
          />
        </S.WebSection>

        <S.WebSection>
          <S.WebSectionTitle>Profile Picture</S.WebSectionTitle>
          <S.WebPfpGrid>
            {pfpOptions.map((pfp) => (
              <S.WebPfpOption
                key={pfp.id}
                selected={selectedPfp === pfp.id}
                onClick={() => setSelectedPfp(pfp.id)}
              >
                <img src={pfp.src} alt={`Profile ${pfp.id}`} />
              </S.WebPfpOption>
            ))}
          </S.WebPfpGrid>
        </S.WebSection>

        <S.WebDivider />

        {/* Favorites */}
        <S.WebFavoritesLabel>
          <AiFillHeart size={24} color="#29942e" />
          Update your favorites
        </S.WebFavoritesLabel>

        <S.WebFilterSection>
          <S.WebFilterHeader
            onClick={() =>
              setOpenSection(openSection === 'category' ? '' : 'category')
            }
            isOpen={openSection === 'category'}
            hasSelection={!!favoriteCategory}
          >
            <S.WebFilterLabel>Category</S.WebFilterLabel>
            {favoriteCategory && openSection !== 'category' && (
              <S.WebFilterSelection>
                {favoriteCategory}
                <MdExpandMore size={24} />
              </S.WebFilterSelection>
            )}
          </S.WebFilterHeader>
          <S.WebFilterGrid isOpen={openSection === 'category'}>
            {categories.map((category) => (
              <S.WebFilterOption
                key={category}
                selected={category === favoriteCategory}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </S.WebFilterOption>
            ))}
          </S.WebFilterGrid>
        </S.WebFilterSection>

        <S.WebFilterSection>
          <S.WebFilterHeader
            onClick={() => setOpenSection(openSection === 'area' ? '' : 'area')}
            isOpen={openSection === 'area'}
            hasSelection={!!favoriteArea}
          >
            <S.WebFilterLabel>Area</S.WebFilterLabel>
            {favoriteArea && openSection !== 'area' && (
              <S.WebFilterSelection>
                {favoriteArea}
                <MdExpandMore size={24} />
              </S.WebFilterSelection>
            )}
          </S.WebFilterHeader>
          <S.WebFilterGrid isOpen={openSection === 'area'}>
            {areas.map((area) => (
              <S.WebFilterOption
                key={area}
                selected={area === favoriteArea}
                onClick={() => handleAreaSelect(area)}
              >
                {area}
              </S.WebFilterOption>
            ))}
          </S.WebFilterGrid>
        </S.WebFilterSection>
      </S.WebContent>

      {/* Action Buttons */}
      <S.WebButtonContainer>
        <S.WebActionButtons>
          <S.WebCancelButton onClick={() => navigate('/')}>
            <MdClose size={28} />
          </S.WebCancelButton>
          <S.WebSaveButton onClick={handleSave}>Save Changes</S.WebSaveButton>
        </S.WebActionButtons>
        <S.WebSwitchButton onClick={() => setShowModal(true)}>
          Switch to mobile
        </S.WebSwitchButton>
      </S.WebButtonContainer>

      {/* Popup for switching to mobile */}
      {showModal && (
        <S.ModalOverlay>
          <S.Modal>
            <S.ModalTitle>Switch to Mobile Layout?</S.ModalTitle>
            <S.ModalButtons>
              <S.ModalButton onClick={handleSwitchToMobile}>Yes</S.ModalButton>
              <S.ModalButton onClick={() => setShowModal(false)}>
                No
              </S.ModalButton>
            </S.ModalButtons>
          </S.Modal>
        </S.ModalOverlay>
      )}
    </S.WebContainer>
  )
}

export default SettingsWeb
