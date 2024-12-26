import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { MdChevronRight } from 'react-icons/md'

import * as H from './home.styles'
import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
  SearchOverlay,
} from '../shared/searchBar.styles'

import logo from '../Assets/logo512.png'

import pfp1 from '../Assets/pfpImages/pfp1.png'
import pfp2 from '../Assets/pfpImages/pfp2.png'
import pfp3 from '../Assets/pfpImages/pfp3.png'
import pfp4 from '../Assets/pfpImages/pfp4.png'
import pfp5 from '../Assets/pfpImages/pfp5.png'

const pfpMap = {
  pfp1: pfp1,
  pfp2: pfp2,
  pfp3: pfp3,
  pfp4: pfp4,
  pfp5: pfp5,
}

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

const MEAL_EMOJIS = ['🔥', '⭐', '💯', '✨', '🌟']

function HomeWeb() {
  const navigate = useNavigate()

  const userName = localStorage.getItem('userName')
  const userPfp = localStorage.getItem('userPfp')

  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('For You')
  const favoriteCategory = localStorage.getItem('favoriteCategory')

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [areaMeal, setAreaMeal] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/options')
        const data = await response.json()
        const allCategories = data.categories.map((cat) => cat.strCategory)

        const favoriteCategory = localStorage.getItem('favoriteCategory')
        let orderedCategories = ['For You']

        if (favoriteCategory && favoriteCategory !== 'For You') {
          orderedCategories.push(favoriteCategory)
          orderedCategories = [
            ...orderedCategories,
            ...allCategories.filter((cat) => cat !== favoriteCategory),
          ]
        } else {
          orderedCategories = ['For You', ...allCategories]
        }

        setCategories(orderedCategories)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    }

    fetchCategories()
  }, [])

  const handleCategorySelect = React.useCallback(async (category) => {
    setSelectedCategory(category)
    setLoading(true)

    try {
      const categoryToFetch =
        category === 'For You'
          ? localStorage.getItem('favoriteCategory')
          : category

      const response = await fetch(
        `http://localhost:5000/api/filter?category=${categoryToFetch}`,
      )
      const data = await response.json()
      const mockedMeals = addMockData(data)

      const mealsToShow =
        category === 'For You' ? mockedMeals.slice(-4) : mockedMeals.slice(0, 4)

      setMeals(mealsToShow)
    } catch (error) {
      console.error('Failed to fetch meals:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleCategorySelect('For You')
  }, [handleCategorySelect])

  const handleSearchClick = () => {
    navigate('/search')
  }

  const handleProfileClick = () => {
    navigate('/settings')
  }

  const addMockData = (meals) => {
    return meals.map((meal) => ({
      ...meal,
      rating: (Math.random() * 2 + 3).toFixed(1),
      time: `${Math.floor(Math.random() * 30 + 10)} Mins`,
    }))
  }

  const [chefName] = useState(
    () => CHEF_NAMES[Math.floor(Math.random() * CHEF_NAMES.length)],
  )

  const [mealEmoji] = useState(
    () => MEAL_EMOJIS[Math.floor(Math.random() * MEAL_EMOJIS.length)],
  )

  useEffect(() => {
    const fetchAreaMeal = async () => {
      try {
        const userArea = localStorage.getItem('favoriteArea')
        const response = await fetch(
          `http://localhost:5000/api/filter?area=${userArea}`,
        )
        const data = await response.json()

        const randomIndex = Math.floor(Math.random() * data.length)
        const selectedMeal = data[randomIndex]

        const mealWithMockData = {
          ...selectedMeal,
          rating: (Math.random() * 0.4 + 4.5).toFixed(1),
          time: `${Math.floor(Math.random() * 30 + 10)} Mins`,
        }

        setAreaMeal(mealWithMockData)
      } catch (error) {
        console.error('Failed to fetch area meal:', error)
      }
    }

    fetchAreaMeal()
  }, [])

  const [showComingSoon, setShowComingSoon] = useState(false)
  const [showTrendingComingSoon, setShowTrendingComingSoon] = useState(false)

  return (
    <>
      <H.WebHeader>
        <H.WebLogo>
          <img src={logo} alt="Recipeasy" height="40" />
          Recipeasy
        </H.WebLogo>
        <H.ProfilePic
          src={pfpMap[userPfp]}
          alt="Profile"
          onClick={handleProfileClick}
        />
      </H.WebHeader>

      <H.WebContainer>
        <H.WebSearchSection>
          <H.WebSectionTitle>
            <span>🔍</span>
            Search for Recipes
          </H.WebSectionTitle>
          <SearchBarContainer>
            <SearchInput>
              <SearchIcon>
                <BiSearch size={24} />
              </SearchIcon>
              <input
                placeholder="Search recipes..."
                disabled
                style={{ cursor: 'pointer' }}
              />
              <SearchOverlay onClick={handleSearchClick} />
            </SearchInput>
          </SearchBarContainer>
        </H.WebSearchSection>

        <H.WebCategorySection>
          <H.WebSectionTitle>
            <span>💯</span>
            Popular Categories
          </H.WebSectionTitle>
          <H.CategoryScroll>
            {categories.map((category) => (
              <H.CategoryButton
                key={category}
                active={selectedCategory === category}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
                {category === 'For You' && (
                  <H.HeartIcon active={selectedCategory === category}>
                    <AiFillStar size={14} />
                  </H.HeartIcon>
                )}
                {category === favoriteCategory && category !== 'For You' && (
                  <H.HeartIcon active={selectedCategory === category}>
                    <AiFillHeart size={14} />
                  </H.HeartIcon>
                )}
              </H.CategoryButton>
            ))}
          </H.CategoryScroll>

          {loading ? (
            <H.LoadingPlaceholder>
              <H.LoadingIndicator>Loading...</H.LoadingIndicator>
            </H.LoadingPlaceholder>
          ) : (
            <H.MealGrid>
              {meals.map((meal) => (
                <H.MealCard
                  key={meal.idMeal}
                  onClick={() => setShowComingSoon(true)}
                >
                  <H.MealImage src={meal.strMealThumb} alt={meal.strMeal} />
                  <H.MealInfo>
                    <H.MealTitle>{meal.strMeal}</H.MealTitle>
                    <H.MealMetadata>
                      <H.Rating>⭐ {meal.rating}</H.Rating>
                      <H.Time>⏱️ {meal.time}</H.Time>
                    </H.MealMetadata>
                  </H.MealInfo>
                </H.MealCard>
              ))}
            </H.MealGrid>
          )}
        </H.WebCategorySection>

        <H.WebFeaturedSection>
          <H.WebSectionTitle>
            <span>🔥</span>
            Picked Just For You
          </H.WebSectionTitle>
          {areaMeal && (
            <H.MainAreaCard onClick={() => setShowComingSoon(true)}>
              <H.ChefImage>
                <img src={areaMeal.strMealThumb} alt={areaMeal.strMeal} />
              </H.ChefImage>
              <div>
                <H.AreaMealTitle>
                  <h3>{areaMeal.strMeal}</h3>
                  <span>{mealEmoji}</span>
                </H.AreaMealTitle>
                <H.ChefName>By {chefName}</H.ChefName>
                <H.AreaMetadata>
                  <H.Rating>⭐ {areaMeal.rating}</H.Rating>
                  <H.Time>⏱️ {areaMeal.time}</H.Time>
                </H.AreaMetadata>
              </div>
            </H.MainAreaCard>
          )}
          <H.WebTrendingPreview onClick={() => setShowTrendingComingSoon(true)}>
            <MdChevronRight size={48} color="#29942e" />
            <h3>Discover Trending</h3>
            <p>Explore what's popular right now</p>
          </H.WebTrendingPreview>
        </H.WebFeaturedSection>
      </H.WebContainer>

      {showComingSoon && (
        <H.ModalOverlay>
          <H.ComingSoonModal>
            <H.ComingSoonTitle>Coming Soon! 🚧</H.ComingSoonTitle>
            <H.ComingSoonSubtitle>
              Full information on meals will be added soon
            </H.ComingSoonSubtitle>
            <H.OkayButton onClick={() => setShowComingSoon(false)}>
              Okay
            </H.OkayButton>
          </H.ComingSoonModal>
        </H.ModalOverlay>
      )}

      {showTrendingComingSoon && (
        <H.ModalOverlay>
          <H.ComingSoonModal>
            <H.ComingSoonTitle>Coming Soon! 🚧</H.ComingSoonTitle>
            <H.ComingSoonSubtitle>
              Full discovery page for trending meals coming soon
            </H.ComingSoonSubtitle>
            <H.OkayButton onClick={() => setShowTrendingComingSoon(false)}>
              Okay
            </H.OkayButton>
          </H.ComingSoonModal>
        </H.ModalOverlay>
      )}
    </>
  )
}

export default HomeWeb
