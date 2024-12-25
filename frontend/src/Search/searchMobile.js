import React, { useEffect, useRef, useState } from 'react'
import { BiSearch, BiArrowBack } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Container } from '../Home/home.styles'
import * as Shared from '../shared/searchBar.styles'
import * as S from './search.styles'
import { RiFilterOffLine } from 'react-icons/ri'

function SearchMobile() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    areas: [],
  })
  const [results, setResults] = useState([])

  // Load filters on mount
  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem('selectedCategories') || '[]',
    )
    const savedAreas = JSON.parse(localStorage.getItem('selectedAreas') || '[]')
    setActiveFilters({
      categories: savedCategories,
      areas: savedAreas,
    })
  }, [])

  // Search with filters
  const handleSearch = async () => {
    try {
      const params = new URLSearchParams()
      if (searchTerm) params.set('term', searchTerm)
      if (activeFilters.categories.length) {
        params.set('categories', activeFilters.categories.join(','))
      }
      if (activeFilters.areas.length) {
        params.set('areas', activeFilters.areas.join(','))
      }

      const response = await fetch(`http://localhost:5000/api/search?${params}`)
      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error('Search failed:', error)
    }
  }

  // Trigger search when filters change
  useEffect(() => {
    handleSearch()
  }, [activeFilters])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleContainerClick = (e) => {
    // Ensure click propagates to input
    if (e.target !== inputRef.current) {
      inputRef.current?.focus()
    }
  }

  const handleFilterClick = () => {
    navigate('/search/filter')
  }

  const handleBack = () => {
    navigate('/')
  }

  const handleResetFilters = () => {
    localStorage.removeItem('selectedCategories')
    localStorage.removeItem('selectedAreas')
    setActiveFilters({ categories: [], areas: [] })
  }

  return (
    <Container>
      {/* Header Section */}
      <S.InfoSection>
        <S.UserInfo>
          <div>
            <S.HeaderContainer>
              <S.BackButton onClick={handleBack}>
                <BiArrowBack size={24} />
              </S.BackButton>
              <S.Title>Search</S.Title>
            </S.HeaderContainer>
            <S.Subtitle>Let's get cooking</S.Subtitle>
          </div>
          <S.FilterButton onClick={handleFilterClick}>
            <FiFilter size={24} />
          </S.FilterButton>
        </S.UserInfo>
      </S.InfoSection>

      {/* Search Input Section */}
      <Shared.SearchBarContainer isSearchPage onClick={handleContainerClick}>
        <Shared.SearchInput isSearchPage>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search recipes..."
            autoFocus
          />
        </Shared.SearchInput>
      </Shared.SearchBarContainer>

      {/* Active Filters Section */}
      {(activeFilters.categories.length > 0 ||
        activeFilters.areas.length > 0) && (
        <S.ActiveFiltersBar>
          <S.FilterList>
            {[...activeFilters.categories, ...activeFilters.areas]
              .slice(0, 4)
              .join(', ')}
            {activeFilters.categories.length + activeFilters.areas.length > 4 &&
              '...'}
          </S.FilterList>
          <S.ResetFiltersButton onClick={handleResetFilters}>
            <RiFilterOffLine size={14} />
            Reset
          </S.ResetFiltersButton>
        </S.ActiveFiltersBar>
      )}
    </Container>
  )
}

export default SearchMobile
