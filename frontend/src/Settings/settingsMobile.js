// Libraries
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiPencil } from 'react-icons/bi'
import { IoMdSettings } from 'react-icons/io'
import { MdExpandMore, MdClose } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'

// Styles
import * as S from './settings.styles'

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
 * categories and areas match the API's available options for user preferences.
 */
const pfpOptions = [
  { id: 'pfp1', src: pfp1 },
  { id: 'pfp2', src: pfp2 },
  { id: 'pfp3', src: pfp3 },
  { id: 'pfp4', src: pfp4 },
  { id: 'pfp5', src: pfp5 },
]

const categories = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat',
  'Lamb',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
  'Misc.',
]

const areas = [
  'American',
  'British',
  'Canadian',
  'Chinese',
  'Croatian',
  'Dutch',
  'Egyptian',
  'Filipino',
  'French',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Jamaican',
  'Japanese',
  'Kenyan',
  'Malaysian',
  'Mexican',
  'Moroccan',
  'Polish',
  'Portuguese',
  'Russian',
  'Spanish',
  'Thai',
  'Tunisian',
  'Turkish',
  'Ukrainian',
  'Vietnamese',
]

/**
 * SettingsMobile - Mobile version of the settings interface.
 * Provides a compact, touch-friendly layout optimized for smaller screens.
 * Features:
 * - One-handed name editing
 * - Scrollable profile picture selection
 * - Collapsible preference sections
 * - Layout switching capability
 * - Persistent storage of user choices
 */
function SettingsMobile() {
  const navigate = useNavigate()

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
  const [isEditing, setIsEditing] = useState(false)
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
   * Switches the application to desktop layout.
   * Updates localStorage and triggers a page reload for the change.
   */
  const handleSwitchToDesktop = () => {
    localStorage.setItem('isMobile', 'false')
    window.location.reload()
  }

  return (
    <S.Container>
      {/* Header */}
      <S.Header>
        <div>
          <S.Title>Settings</S.Title>
          <S.Subtitle>Switching things up</S.Subtitle>
        </div>
        <S.GearIcon>
          <IoMdSettings size={50} />
        </S.GearIcon>
      </S.Header>

      <S.Content>
        {/* Name & PFP */}
        <S.Section>
          <S.SectionTitle>Name</S.SectionTitle>
          <S.NameInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={name}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
          />
          {!isEditing && (
            <S.PencilIcon>
              <BiPencil size={20} />
            </S.PencilIcon>
          )}
        </S.Section>

        <S.Section>
          <S.SectionTitle>Profile Picture</S.SectionTitle>
          <S.PfpGrid>
            {pfpOptions.map((pfp) => (
              <S.PfpOption
                key={pfp.id}
                selected={selectedPfp === pfp.id}
                onClick={() => setSelectedPfp(pfp.id)}
              >
                <img src={pfp.src} alt={`Profile ${pfp.id}`} />
              </S.PfpOption>
            ))}
          </S.PfpGrid>
        </S.Section>

        <S.Divider />

        {/* Favorites */}
        <S.FilterSection>
          <S.FilterHeader
            onClick={() =>
              setOpenSection(openSection === 'category' ? '' : 'category')
            }
            isOpen={openSection === 'category'}
            hasSelection={!!favoriteCategory}
          >
            <S.FilterLabel>Category</S.FilterLabel>
            {favoriteCategory && openSection !== 'category' && (
              <S.FilterSelection>
                {favoriteCategory}
                <MdExpandMore size={20} />
              </S.FilterSelection>
            )}
          </S.FilterHeader>
          <S.FilterGrid isOpen={openSection === 'category'}>
            {categories.map((category) => (
              <S.FilterOption
                key={category}
                selected={category === favoriteCategory}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </S.FilterOption>
            ))}
          </S.FilterGrid>
        </S.FilterSection>

        <S.FilterSection>
          <S.FilterHeader
            onClick={() => setOpenSection(openSection === 'area' ? '' : 'area')}
            isOpen={openSection === 'area'}
            hasSelection={!!favoriteArea}
          >
            <S.FilterLabel>Area</S.FilterLabel>
            {favoriteArea && openSection !== 'area' && (
              <S.FilterSelection>
                {favoriteArea}
                <MdExpandMore size={20} />
              </S.FilterSelection>
            )}
          </S.FilterHeader>
          <S.FilterGrid isOpen={openSection === 'area'}>
            {areas.map((area) => (
              <S.FilterOption
                key={area}
                selected={area === favoriteArea}
                onClick={() => handleAreaSelect(area)}
              >
                {area}
              </S.FilterOption>
            ))}
          </S.FilterGrid>
        </S.FilterSection>
      </S.Content>

      {/* Action Buttons */}
      <S.ButtonContainer>
        <S.ActionButtons>
          <S.CancelButton onClick={() => navigate('/')}>
            <MdClose size={24} />
          </S.CancelButton>
          <S.SaveButton onClick={handleSave}>Save Changes</S.SaveButton>
        </S.ActionButtons>
        <S.SwitchButton onClick={() => setShowModal(true)}>
          Switch to desktop
        </S.SwitchButton>
      </S.ButtonContainer>

      {/* Popup for switching to desktop */}
      {showModal && (
        <S.ModalOverlay>
          <S.Modal>
            <S.ModalTitle>Switch to Desktop Layout?</S.ModalTitle>
            <S.ModalButtons>
              <S.ModalButton onClick={handleSwitchToDesktop}>Yes</S.ModalButton>
              <S.ModalButton onClick={() => setShowModal(false)}>
                No
              </S.ModalButton>
            </S.ModalButtons>
          </S.Modal>
        </S.ModalOverlay>
      )}
    </S.Container>
  )
}

// Used in index.js
export default SettingsMobile
