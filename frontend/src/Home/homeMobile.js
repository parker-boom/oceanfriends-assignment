// Libraries
import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { MdChevronRight } from 'react-icons/md'

// Styles
import * as H from './home.styles'
import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
  SearchOverlay,
} from '../shared/searchBar.styles'

// Profile Picture Imports
import pfp1 from '../Assets/pfpImages/pfp1.png'
import pfp2 from '../Assets/pfpImages/pfp2.png'
import pfp3 from '../Assets/pfpImages/pfp3.png'
import pfp4 from '../Assets/pfpImages/pfp4.png'
import pfp5 from '../Assets/pfpImages/pfp5.png'

// Profile Picture Mapping
const pfpMap = {
  pfp1: pfp1,
  pfp2: pfp2,
  pfp3: pfp3,
  pfp4: pfp4,
  pfp5: pfp5,
}

// Chef Names (mock data)
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

const MEAL_EMOJIS = ['🔥', '��', '⭐', '💯', '✨', '🌟']

function HomeMobile() {
  // Navigation
  const navigate = useNavigate()

  // Random Question
  const [randomQuestion, setRandomQuestion] = useState('')

  // User Name and Profile Picture
  const userName = localStorage.getItem('userName')
  const userPfp = localStorage.getItem('userPfp')
  console.log('Current userPfp:', userPfp)
  console.log('Available pfp:', pfpMap[userPfp])

  // Categories
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('For You')
  const favoriteCategory = localStorage.getItem('favoriteCategory')

  // Meals
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [areaMeal, setAreaMeal] = useState(null)

  const questions = useMemo(
    () => [
      'What are you cooking today?',
      'Ready to try something new?',
      'Looking for recipe inspiration?',
      "What's on the menu today?",
      'Time to discover new flavors?',
    ],
    [],
  )

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setRandomQuestion(questions[randomIndex])
  }, [questions])

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/options')
        const data = await response.json()
        const allCategories = data.categories.map((cat) => cat.strCategory)

        // Reorder categories to put favorite after "For You"
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

  // Load initial meals
  useEffect(() => {
    handleCategorySelect('For You')
  }, [])

  // Navigate to search page (search bar)
  const handleSearchClick = () => {
    navigate('/search')
  }

  // Navigate to settings page (profile picture)
  const handleProfileClick = () => {
    navigate('/settings')
  }

  const addMockData = (meals) => {
    return meals.map((meal) => ({
      ...meal,
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0-5.0
      time: `${Math.floor(Math.random() * 30 + 10)} Mins`, // Random time between 10-40 mins
    }))
  }

  // Update data based on category
  const handleCategorySelect = async (category) => {
    setSelectedCategory(category)
    setLoading(true)

    try {
      // If "For You" is selected, use the user's favorite category
      const categoryToFetch =
        category === 'For You'
          ? localStorage.getItem('favoriteCategory')
          : category

      const response = await fetch(
        `http://localhost:5000/api/filter?category=${categoryToFetch}`,
      )
      const data = await response.json()
      const mockedMeals = addMockData(data)

      // Show last 2 meals for "For You", first 2 for specific categories
      const mealsToShow =
        category === 'For You' ? mockedMeals.slice(-2) : mockedMeals.slice(0, 2)

      setMeals(mealsToShow)
    } catch (error) {
      console.error('Failed to fetch meals:', error)
    } finally {
      setLoading(false)
    }
  }

  // Chef Name (mock data)
  const [chefName] = useState(
    () => CHEF_NAMES[Math.floor(Math.random() * CHEF_NAMES.length)],
  )

  // Meal Emoji
  const [mealEmoji] = useState(
    () => MEAL_EMOJIS[Math.floor(Math.random() * MEAL_EMOJIS.length)],
  )

  // Fetch area meal
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

        // Mock rating for area meal
        const mealWithMockData = {
          ...selectedMeal,
          rating: (Math.random() * 0.4 + 4.5).toFixed(1), // Random between 4.5-4.9 (popular meal)
          time: `${Math.floor(Math.random() * 30 + 10)} Mins`,
        }

        setAreaMeal(mealWithMockData)
      } catch (error) {
        console.error('Failed to fetch area meal:', error)
      }
    }

    fetchAreaMeal()
  }, [])

  // Add loading state for initial page load
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    // Simulate minimum loading time for smooth animation
    const timer = setTimeout(() => {
      setPageLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Update the loading check in render
  if (pageLoading) {
    return null // Or a loading skeleton if you prefer
  }

  return (
    <H.Container>
      {/* Info Section with Name, Subtitle, and Settings (PFP) */}
      <H.InfoSection>
        <H.UserInfo>
          <div>
            <H.Greeting>Hello {userName}!</H.Greeting>
            <H.Question>{randomQuestion}</H.Question>
          </div>
          <H.ProfilePic
            src={pfpMap[userPfp]}
            alt="Profile"
            onClick={handleProfileClick}
            onError={(e) => {
              console.error('Image failed to load:', pfpMap[userPfp])
              e.target.onerror = null
            }}
          />
        </H.UserInfo>
      </H.InfoSection>

      {/* Search Bar (opens search page with transition)*/}
      <SearchBarContainer>
        <SearchInput>
          <SearchIcon>
            <BiSearch size={20} />
          </SearchIcon>
          <input
            placeholder="Search recipes..."
            disabled
            style={{ cursor: 'pointer' }}
          />
          <SearchOverlay onClick={handleSearchClick} />
        </SearchInput>
      </SearchBarContainer>

      {/* Category Section (displays meals based on category) */}
      <H.CategorySection>
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
            {meals.slice(0, 2).map((meal) => (
              <H.MealCard key={meal.idMeal}>
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
      </H.CategorySection>

      {/* Area Section (displays random favorite area meal) */}
      <H.AreaSection>
        <H.AreaTitle>{'🔥 Your Next Favorite Dish'}</H.AreaTitle>
        {areaMeal && (
          <H.AreaContent>
            <H.MainAreaCard>
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
            <H.SeeMoreButton>
              <div>
                <MdChevronRight size={24} />
              </div>
            </H.SeeMoreButton>
          </H.AreaContent>
        )}
      </H.AreaSection>
    </H.Container>
  )
}

// Used in index.js
export default HomeMobile
