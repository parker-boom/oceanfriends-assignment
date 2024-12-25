// Libraries
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { IoRestaurantOutline } from 'react-icons/io5'
import { TbWorld } from 'react-icons/tb'
import { RiFilterOffLine } from 'react-icons/ri'

// Styles
import * as F from './filter.styles'

function FilterMobile() {
  // State
  const navigate = useNavigate()

  // Area
  const [selectedAreas, setSelectedAreas] = useState([])
  const [areas, setAreas] = useState([])
  const favoriteArea = localStorage.getItem('favoriteArea')

  // Category
  const [openSection, setOpenSection] = useState('category')
  const [categories, setCategories] = useState([])
  const favoriteCategory = localStorage.getItem('favoriteCategory')
  const [selectedCategories, setSelectedCategories] = useState([])

  // Load saved filters on mount
  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem('selectedCategories') || '[]',
    )
    const savedAreas = JSON.parse(localStorage.getItem('selectedAreas') || '[]')
    setSelectedCategories(savedCategories)
    setSelectedAreas(savedAreas)
  }, [])

  // Fetch filter options
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/options')
        const data = await response.json()
        setCategories(data.categories.map((c) => c.strCategory))
        setAreas(data.areas.map((a) => a.strArea))
      } catch (error) {
        console.error('Failed to fetch filters:', error)
      }
    }
    fetchFilters()
  }, [])

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    )
  }

  // Handle area selection
  const handleAreaSelect = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    )
  }

  // Reset all filters
  const handleResetAll = () => {
    setSelectedCategories([])
    setSelectedAreas([])
    localStorage.removeItem('selectedCategories')
    localStorage.removeItem('selectedAreas')
  }

  // Apply filters
  const handleApplyFilters = () => {
    localStorage.setItem(
      'selectedCategories',
      JSON.stringify(selectedCategories),
    )
    localStorage.setItem('selectedAreas', JSON.stringify(selectedAreas))
    navigate('/search')
  }

  // Helper to sort items with favorite first
  const sortWithFavoriteFirst = (items, favorite) => {
    return items.sort((a, b) => {
      if (a === favorite) return -1
      if (b === favorite) return 1
      return a.localeCompare(b)
    })
  }

  return (
    <F.FilterContainer>
      {/* Header & Back Button */}
      <F.HeaderSection>
        <F.BackButton onClick={() => navigate('/search')}>
          <BiArrowBack size={24} />
        </F.BackButton>
        <F.Title>Filter Search</F.Title>
      </F.HeaderSection>

      <F.FilterContent>
        {/* Category Selection */}
        <F.FilterSection>
          <F.FilterBox>
            <F.FilterHeader
              onClick={() =>
                setOpenSection((prev) =>
                  prev === 'category' ? '' : 'category',
                )
              }
              isOpen={openSection === 'category'}
              hasSelection={selectedCategories.length > 0}
            >
              <div>
                <F.FilterLabelContainer>
                  <IoRestaurantOutline size={20} />
                  <F.FilterLabel>Category</F.FilterLabel>
                </F.FilterLabelContainer>
                <F.FilterSubLabel>
                  Type of dish (starter, main, dessert)
                </F.FilterSubLabel>
                {selectedCategories.length > 0 &&
                  openSection !== 'category' && (
                    <F.SelectedPreview>
                      {selectedCategories.slice(0, 2).join(', ')}
                      {selectedCategories.length > 2 &&
                        ` +${selectedCategories.length - 2}`}
                    </F.SelectedPreview>
                  )}
              </div>
              {openSection === 'category' ? (
                <MdExpandLess size={24} />
              ) : (
                <MdExpandMore size={24} />
              )}
            </F.FilterHeader>
            <F.FilterGrid isOpen={openSection === 'category'}>
              {sortWithFavoriteFirst(categories, favoriteCategory).map(
                (category) => (
                  <F.FilterOption
                    key={category}
                    selected={selectedCategories.includes(category)}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </F.FilterOption>
                ),
              )}
            </F.FilterGrid>
          </F.FilterBox>
        </F.FilterSection>

        {/* Area Selection */}
        <F.FilterSection>
          <F.FilterBox>
            <F.FilterHeader
              onClick={() =>
                setOpenSection((prev) => (prev === 'area' ? '' : 'area'))
              }
              isOpen={openSection === 'area'}
              hasSelection={selectedAreas.length > 0}
            >
              <div>
                <F.FilterLabelContainer>
                  <TbWorld size={20} />
                  <F.FilterLabel>Area</F.FilterLabel>
                </F.FilterLabelContainer>
                <F.FilterSubLabel>
                  Cuisine origin (Chinese, Indian, American)
                </F.FilterSubLabel>
                {selectedAreas.length > 0 && openSection !== 'area' && (
                  <F.SelectedPreview>
                    {selectedAreas.slice(0, 2).join(', ')}
                    {selectedAreas.length > 2 &&
                      ` +${selectedAreas.length - 2}`}
                  </F.SelectedPreview>
                )}
              </div>
              {openSection === 'area' ? (
                <MdExpandLess size={24} />
              ) : (
                <MdExpandMore size={24} />
              )}
            </F.FilterHeader>
            <F.FilterGrid isOpen={openSection === 'area'}>
              {sortWithFavoriteFirst(areas, favoriteArea).map((area) => (
                <F.FilterOption
                  key={area}
                  selected={selectedAreas.includes(area)}
                  onClick={() => handleAreaSelect(area)}
                >
                  {area}
                </F.FilterOption>
              ))}
            </F.FilterGrid>
          </F.FilterBox>
        </F.FilterSection>

        {/* Reset Button */}
        {(selectedCategories.length > 0 || selectedAreas.length > 0) && (
          <F.ResetButton onClick={handleResetAll}>
            <RiFilterOffLine size={20} />
            Reset All Filters
          </F.ResetButton>
        )}
      </F.FilterContent>

      {/* Apply Button */}
      <F.ApplyButton
        onClick={handleApplyFilters}
        disabled={selectedCategories.length === 0 && selectedAreas.length === 0}
      >
        Apply Filters
      </F.ApplyButton>
    </F.FilterContainer>
  )
}

// Used in index.js, accessesed only through search
export default FilterMobile
