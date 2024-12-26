// Libraries
import React, { useEffect, useRef, useState } from 'react'
import { BiSearch, BiArrowBack } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import { MdArrowForward } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

// Styles
import { Container } from '../Home/home.styles'
import * as Shared from '../shared/searchBar.styles'
import * as S from './search.styles'

// Icons
import { RiFilterOffLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

// Mock data for chefs
const CHEF_NAMES = [
  'Chef Isabella Chen',
  'Chef Marcus Thompson',
  'Chef Sofia Rodriguez',
  'Chef James Kim',
  'Chef Olivia Bennett',
  'Chef Lucas Patel',
  'Chef Emma Martinez',
  'Chef Daniel Lee',
  'Chef Sarah Johnson',
  'Chef Michael Wong',
]

function SearchMobile() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    areas: [],
  })
  const [results, setResults] = useState([])
  const [resultMetadata, setResultMetadata] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)

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

  // Generate random rating and chef name
  const generateRating = () => (Math.random() * 1.3 + 3.6).toFixed(1)
  const getRandomChef = () =>
    CHEF_NAMES[Math.floor(Math.random() * CHEF_NAMES.length)]

  // Handle Search
  const handleSearch = React.useCallback(async () => {
    if (!searchTerm.trim()) return

    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      params.set('term', searchTerm.trim())
      if (activeFilters.categories.length) {
        params.set('categories', activeFilters.categories.join(','))
      }
      if (activeFilters.areas.length) {
        params.set('areas', activeFilters.areas.join(','))
      }

      const response = await fetch(`http://localhost:5000/api/search?${params}`)
      const data = await response.json()
      const limitedResults = data.slice(0, 8)

      const newMetadata = limitedResults.reduce(
        (acc, result) => ({
          ...acc,
          [result.id]: {
            rating: generateRating(),
            chef: getRandomChef(),
          },
        }),
        {},
      )

      setResults(limitedResults)
      setResultMetadata(newMetadata)
    } catch (error) {
      console.error('Search failed:', error)
    } finally {
      setIsLoading(false)
    }
  }, [searchTerm, activeFilters])

  // Handle Key Press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // useEffect with handleSearch
  useEffect(() => {
    if (searchTerm.trim()) {
      handleSearch()
    }
  }, [handleSearch, searchTerm, activeFilters])

  // Focus on input
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Handle Container Click
  const handleContainerClick = (e) => {
    // Ensure click propagates to input
    if (e.target !== inputRef.current) {
      inputRef.current?.focus()
    }
  }

  // Handle Filter Click
  const handleFilterClick = () => {
    navigate('/search/filter')
  }

  // Handle Back to Home
  const handleBack = () => {
    navigate('/')
  }

  // Handle Reset Filters
  const handleResetFilters = () => {
    localStorage.removeItem('selectedCategories')
    localStorage.removeItem('selectedAreas')
    setActiveFilters({ categories: [], areas: [] })
  }

  // Load filters when returning from filter page
  useEffect(() => {
    const loadFilters = () => {
      const savedCategories = JSON.parse(
        localStorage.getItem('selectedCategories') || '[]',
      )
      const savedAreas = JSON.parse(
        localStorage.getItem('selectedAreas') || '[]',
      )
      setActiveFilters({
        categories: savedCategories,
        areas: savedAreas,
      })
    }

    loadFilters()
  }, [])

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
          <Shared.SearchIcon isSearchPage>
            <BiSearch size={20} />
          </Shared.SearchIcon>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
          <Shared.SearchButton
            visible={searchTerm.length > 0}
            onClick={handleSearch}
          >
            <MdArrowForward size={24} />
          </Shared.SearchButton>
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

      {/* Results Count */}
      {!isLoading && results.length > 0 && (
        <S.ResultsHeader>
          <S.ResultsCount>{results.length} recipes</S.ResultsCount>
        </S.ResultsHeader>
      )}

      {/* Results Section */}
      {isLoading ? (
        <S.LoadingSpinner />
      ) : (
        <S.ResultsContainer>
          {results.map((result) => (
            <S.ResultItem
              key={result.id}
              onClick={() => setShowComingSoon(true)}
            >
              <S.ResultImage>
                <img src={result.image} alt={result.title} />
              </S.ResultImage>
              <S.RatingBadge>
                <AiFillStar size={16} />
                {resultMetadata[result.id]?.rating}
              </S.RatingBadge>
              <S.ResultOverlay>
                <S.ResultTitle>{result.title}</S.ResultTitle>
                <S.ResultChef>
                  By {resultMetadata[result.id]?.chef}
                </S.ResultChef>
              </S.ResultOverlay>
            </S.ResultItem>
          ))}
        </S.ResultsContainer>
      )}

      {showComingSoon && (
        <S.ModalOverlay>
          <S.ComingSoonModal>
            <S.ComingSoonTitle>Coming Soon! 🚧</S.ComingSoonTitle>
            <S.ComingSoonSubtitle>
              Full recipe details will be added soon
            </S.ComingSoonSubtitle>
            <S.OkayButton onClick={() => setShowComingSoon(false)}>
              Okay
            </S.OkayButton>
          </S.ComingSoonModal>
        </S.ModalOverlay>
      )}
    </Container>
  )
}

export default SearchMobile
