import React, { useEffect, useRef } from 'react'
import { BiSearch, BiArrowBack } from 'react-icons/bi'
import { FiFilter } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Container } from '../Home/home.styles'
import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
} from '../shared/searchBar.styles'
import {
  InfoSection,
  UserInfo,
  Title,
  Subtitle,
  FilterButton,
  HeaderContainer,
  BackButton,
} from './search.styles'

function SearchMobile() {
  const navigate = useNavigate()
  const inputRef = useRef(null)

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
    console.log('Filter clicked')
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <Container>
      <InfoSection>
        <UserInfo>
          <div>
            <HeaderContainer>
              <BackButton onClick={handleBack}>
                <BiArrowBack size={24} />
              </BackButton>
              <Title>Search</Title>
            </HeaderContainer>
            <Subtitle>Let's get cooking</Subtitle>
          </div>
          <FilterButton onClick={handleFilterClick}>
            <FiFilter size={24} />
          </FilterButton>
        </UserInfo>
      </InfoSection>

      <SearchBarContainer isSearchPage onClick={handleContainerClick}>
        <SearchInput isSearchPage>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search recipes..."
            autoFocus
          />
        </SearchInput>
      </SearchBarContainer>
    </Container>
  )
}

export default SearchMobile
