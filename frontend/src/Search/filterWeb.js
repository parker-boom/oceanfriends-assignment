// Libraries
import React, { useState, useEffect } from 'react'
import { IoRestaurantOutline } from 'react-icons/io5'
import { TbWorld } from 'react-icons/tb'
import { RiFilterOffLine } from 'react-icons/ri'

// Styles
import * as F from './filter.styles'

/**
 * FilterWeb - Desktop version of the recipe filter interface.
 * Provides a modal-based filter experience with expanded viewing area.
 * Features:
 * - Side-by-side category and area sections
 * - Favorite options prioritized
 * - Immediate visual feedback
 * - Persistent filter storage
 * - Modal-based interaction
 */
function FilterWeb({ onClose }) {
  // Category-related state
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const favoriteCategory = localStorage.getItem('favoriteCategory')

  // Area-related state
  const [areas, setAreas] = useState([])
  const [selectedAreas, setSelectedAreas] = useState([])
  const favoriteArea = localStorage.getItem('favoriteArea')

  /**
   * Loads previously selected filters from localStorage.
   * Ensures filter persistence across modal opens/closes.
   */
  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem('selectedCategories') || '[]',
    )
    const savedAreas = JSON.parse(localStorage.getItem('selectedAreas') || '[]')
    setSelectedCategories(savedCategories)
    setSelectedAreas(savedAreas)
  }, [])

  /**
   * Fetches available filter options from the API.
   * Categories and areas are fetched together to minimize API calls.
   */
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

  // Handler functions
  const handleCategorySelect = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    )
  }

  const handleAreaSelect = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    )
  }

  const handleResetAll = () => {
    setSelectedCategories([])
    setSelectedAreas([])
    localStorage.removeItem('selectedCategories')
    localStorage.removeItem('selectedAreas')
  }

  const handleApplyFilters = () => {
    localStorage.setItem(
      'selectedCategories',
      JSON.stringify(selectedCategories),
    )
    localStorage.setItem('selectedAreas', JSON.stringify(selectedAreas))
    onClose()
  }

  /**
   * Helper function to sort items with user's favorite option first.
   * Used for both category and area lists to prioritize preferred options.
   */
  const sortWithFavoriteFirst = (items, favorite) => {
    return items.sort((a, b) => {
      if (a === favorite) return -1
      if (b === favorite) return 1
      return a.localeCompare(b)
    })
  }

  return (
    <F.WebFilterContainer>
      <F.WebFilterContent>
        {/* Category Section */}
        <F.WebFilterSection>
          <F.WebFilterHeader>
            <F.FilterLabelContainer>
              <IoRestaurantOutline size={20} />
              <F.FilterLabel>Category</F.FilterLabel>
            </F.FilterLabelContainer>
            <F.FilterSubLabel>
              Type of dish (starter, main, dessert)
            </F.FilterSubLabel>
          </F.WebFilterHeader>
          <F.WebFilterGrid>
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
          </F.WebFilterGrid>
        </F.WebFilterSection>

        {/* Area Section */}
        <F.WebFilterSection>
          <F.WebFilterHeader>
            <F.FilterLabelContainer>
              <TbWorld size={20} />
              <F.FilterLabel>Area</F.FilterLabel>
            </F.FilterLabelContainer>
            <F.FilterSubLabel>
              Cuisine origin (Chinese, Indian, American)
            </F.FilterSubLabel>
          </F.WebFilterHeader>
          <F.WebFilterGrid>
            {sortWithFavoriteFirst(areas, favoriteArea).map((area) => (
              <F.FilterOption
                key={area}
                selected={selectedAreas.includes(area)}
                onClick={() => handleAreaSelect(area)}
              >
                {area}
              </F.FilterOption>
            ))}
          </F.WebFilterGrid>
        </F.WebFilterSection>
      </F.WebFilterContent>

      {/* Action Buttons */}
      <F.WebFilterActions>
        <F.WebResetButton onClick={handleResetAll}>
          <RiFilterOffLine size={16} />
          Reset Filters
        </F.WebResetButton>
        <F.WebApplyButton onClick={handleApplyFilters}>
          Apply Filters
        </F.WebApplyButton>
      </F.WebFilterActions>
    </F.WebFilterContainer>
  )
}

// Used in index.js, accessed only through search
export default FilterWeb
