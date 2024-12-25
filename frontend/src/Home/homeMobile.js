import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { MdChevronRight } from 'react-icons/md'
import {
  Container,
  InfoSection,
  SearchSection,
  CategorySection,
  AreaSection,
  UserInfo,
  Greeting,
  Question,
  ProfilePic,
  SearchBarButton,
  SearchIcon,
  SearchPlaceholder,
  CategoryScroll,
  CategoryButton,
  HeartIcon,
  LoadingIndicator,
  MealGrid,
  MealCard,
  MealImage,
  MealInfo,
  MealTitle,
  MealMetadata,
  Rating,
  Time,
  AreaTitle,
  AreaCard,
  ChefImage,
  AreaContent,
  AreaMealTitle,
  ChefName,
  AreaMetadata,
  ChevronIcon,
  MainAreaCard,
  SeeMoreButton,
} from './home.styles'

// Profile Picture Imports
import pfp1 from '../Assets/pfpImages/pfp1.png'
import pfp2 from '../Assets/pfpImages/pfp2.png'
import pfp3 from '../Assets/pfpImages/pfp3.png'
import pfp4 from '../Assets/pfpImages/pfp4.png'
import pfp5 from '../Assets/pfpImages/pfp5.png'

// More explicit mapping
const pfpMap = {
  pfp1: pfp1,
  pfp2: pfp2,
  pfp3: pfp3,
  pfp4: pfp4,
  pfp5: pfp5,
}

const AREA_TITLES = ['🔥 Hot in Your Collection ']

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

const MEAL_EMOJIS = ['🔥', '💫', '⭐', '💯', '✨', '🌟']

function HomeMobile() {
  const navigate = useNavigate()
  const [randomQuestion, setRandomQuestion] = useState('')
  const userName = localStorage.getItem('userName')
  const userPfp = localStorage.getItem('userPfp')
  console.log('Current userPfp:', userPfp)
  console.log('Available pfp:', pfpMap[userPfp])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('For You')
  const favoriteCategory = localStorage.getItem('favoriteCategory')
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

  const handleSearchClick = () => {
    navigate('/search')
  }

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

  const [areaTitle] = useState(
    () => AREA_TITLES[Math.floor(Math.random() * AREA_TITLES.length)],
  )

  const [chefName] = useState(
    () => CHEF_NAMES[Math.floor(Math.random() * CHEF_NAMES.length)],
  )

  const [mealEmoji] = useState(
    () => MEAL_EMOJIS[Math.floor(Math.random() * MEAL_EMOJIS.length)],
  )

  // Add this new effect to fetch area meal
  useEffect(() => {
    const fetchAreaMeal = async () => {
      try {
        const userArea = localStorage.getItem('favoriteArea')
        const response = await fetch(
          `http://localhost:5000/api/filter?area=${userArea}`,
        )
        const data = await response.json()

        // Randomly select one meal
        const randomIndex = Math.floor(Math.random() * data.length)
        const selectedMeal = data[randomIndex]

        // Add mock rating and time
        const mealWithMockData = {
          ...selectedMeal,
          rating: (Math.random() * 2 + 3).toFixed(1),
          time: `${Math.floor(Math.random() * 30 + 10)} Mins`,
        }

        setAreaMeal(mealWithMockData)
      } catch (error) {
        console.error('Failed to fetch area meal:', error)
      }
    }

    fetchAreaMeal()
  }, [])

  return (
    <Container>
      <InfoSection>
        <UserInfo>
          <div>
            <Greeting>Hello {userName}!</Greeting>
            <Question>{randomQuestion}</Question>
          </div>
          <ProfilePic
            src={pfpMap[userPfp]}
            alt="Profile"
            onClick={handleProfileClick}
            onError={(e) => {
              console.error('Image failed to load:', pfpMap[userPfp])
              e.target.onerror = null
            }}
          />
        </UserInfo>
      </InfoSection>

      <SearchSection>
        <SearchBarButton onClick={handleSearchClick}>
          <SearchIcon>
            <BiSearch size={20} />
          </SearchIcon>
          <SearchPlaceholder>Search recipes...</SearchPlaceholder>
        </SearchBarButton>
      </SearchSection>

      <CategorySection>
        <CategoryScroll>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
              {category === 'For You' && (
                <HeartIcon active={selectedCategory === category}>
                  <AiFillStar size={14} />
                </HeartIcon>
              )}
              {category === favoriteCategory && category !== 'For You' && (
                <HeartIcon active={selectedCategory === category}>
                  <AiFillHeart size={14} />
                </HeartIcon>
              )}
            </CategoryButton>
          ))}
        </CategoryScroll>

        {loading ? (
          <LoadingIndicator>Loading...</LoadingIndicator>
        ) : (
          <MealGrid>
            {meals.slice(0, 2).map((meal) => (
              <MealCard key={meal.idMeal}>
                <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
                <MealInfo>
                  <MealTitle>{meal.strMeal}</MealTitle>
                  <MealMetadata>
                    <Rating>⭐ {meal.rating}</Rating>
                    <Time>⏱️ {meal.time}</Time>
                  </MealMetadata>
                </MealInfo>
              </MealCard>
            ))}
          </MealGrid>
        )}
      </CategorySection>

      <AreaSection>
        <AreaTitle>{areaTitle}</AreaTitle>
        {areaMeal && (
          <AreaContent>
            <MainAreaCard>
              <ChefImage>
                <img src={areaMeal.strMealThumb} alt={areaMeal.strMeal} />
              </ChefImage>
              <div>
                <AreaMealTitle>
                  <h3>{areaMeal.strMeal}</h3>
                  <span>{mealEmoji}</span>
                </AreaMealTitle>
                <ChefName>By {chefName}</ChefName>
                <AreaMetadata>
                  <Rating>⭐ {areaMeal.rating}</Rating>
                  <Time>⏱️ {areaMeal.time}</Time>
                </AreaMetadata>
              </div>
            </MainAreaCard>
            <SeeMoreButton>
              <div>
                <MdChevronRight size={24} />
              </div>
            </SeeMoreButton>
          </AreaContent>
        )}
      </AreaSection>
    </Container>
  )
}

export default HomeMobile
