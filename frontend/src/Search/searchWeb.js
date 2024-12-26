import React, { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import { MdArrowForward } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { RiFilterOffLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
import FilterWeb from './filterWeb'

// Styles
import * as H from '../Home/home.styles'
import * as Shared from '../shared/searchBar.styles'
import * as S from './search.styles'

// Assets
import logo from '../Assets/logo512.png'
import pfp1 from '../Assets/pfpImages/pfp1.png'
import pfp2 from '../Assets/pfpImages/pfp2.png'
import pfp3 from '../Assets/pfpImages/pfp3.png'
import pfp4 from '../Assets/pfpImages/pfp4.png'
import pfp5 from '../Assets/pfpImages/pfp5.png'

// Mock data for chefs (reused from mobile)
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

// Profile Picture Mapping
const pfpMap = {
  pfp1: pfp1,
  pfp2: pfp2,
  pfp3: pfp3,
  pfp4: pfp4,
  pfp5: pfp5,
}

function SearchWeb() {
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
  const [showFilter, setShowFilter] = useState(false)

  // Load filters on mount AND when localStorage changes
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

    // Initial load
    loadFilters()

    // Set up storage event listener
    const handleStorageChange = (e) => {
      if (e.key === 'selectedCategories' || e.key === 'selectedAreas') {
        loadFilters()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
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
      console.log('Search response:', data)
      const limitedResults = data.slice(0, 12) // Show more results on desktop
      console.log('Limited results:', limitedResults)

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
      console.log('Result metadata:', newMetadata)

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

  // useEffect with handleSearch - trigger search on mount and filter changes
  useEffect(() => {
    if (searchTerm.trim()) {
      handleSearch()
    }
  }, [handleSearch, searchTerm, activeFilters])

  // Focus on input
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Handle Filter Click
  const handleFilterClick = () => {
    setShowFilter(true)
  }

  // Handle Filter Close
  const handleFilterClose = () => {
    setShowFilter(false)
    // Load the latest filters
    const savedCategories = JSON.parse(
      localStorage.getItem('selectedCategories') || '[]',
    )
    const savedAreas = JSON.parse(localStorage.getItem('selectedAreas') || '[]')
    setActiveFilters({
      categories: savedCategories,
      areas: savedAreas,
    })
    // Trigger a new search with updated filters
    handleSearch()
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

  // Add profile click handler
  const handleProfileClick = () => {
    navigate('/settings')
  }

  const userPfp = localStorage.getItem('userPfp')

  return (
    <>
      {/* Fixed Header */}
      <H.WebHeader>
        <H.WebLogo onClick={handleBack} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Recipeasy" height="40" />
          Recipeasy
        </H.WebLogo>
        <H.ProfilePic
          src={pfpMap[userPfp]}
          alt="Profile"
          onClick={handleProfileClick}
        />
      </H.WebHeader>

      {/* Main Content */}
      <H.WebContainer>
        <S.WebSearchSection>
          <S.WebSearchTitle>
            <span>🔍</span>
            Let's Get Searching
          </S.WebSearchTitle>
          <Shared.SearchBarContainer isSearchPage>
            <Shared.SearchInput isSearchPage>
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
          <S.WebFilterButton
            onClick={handleFilterClick}
            hasFilters={
              activeFilters.categories.length > 0 ||
              activeFilters.areas.length > 0
            }
          >
            {activeFilters.categories.length > 0 ||
            activeFilters.areas.length > 0 ? (
              <>
                <S.FilterContent>
                  <FiFilter size={16} />
                  <S.FilterText>
                    {[...activeFilters.categories, ...activeFilters.areas].join(
                      ', ',
                    )}
                  </S.FilterText>
                </S.FilterContent>
                <MdArrowForward size={16} />
              </>
            ) : (
              <>
                <FiFilter size={16} />
                Filter
              </>
            )}
          </S.WebFilterButton>
        </S.WebSearchSection>

        {/* Results Grid */}
        {isLoading ? (
          <S.LoadingSpinner />
        ) : (
          <>
            {results.length > 0 && (
              <S.WebResultsHeader>
                <S.ResultsCount>{results.length} recipes</S.ResultsCount>
              </S.WebResultsHeader>
            )}
            <S.WebResultsContainer>
              {console.log('Rendering results container with:', results)}
              {results.map((result) => {
                console.log('Rendering result:', result)
                return (
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
                )
              })}
            </S.WebResultsContainer>
          </>
        )}

        {/* Filter Modal */}
        {showFilter && (
          <S.WebFilterOverlay>
            <FilterWeb onClose={handleFilterClose} />
          </S.WebFilterOverlay>
        )}
      </H.WebContainer>

      {/* Coming Soon Modal */}
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
    </>
  )
}

export default SearchWeb
