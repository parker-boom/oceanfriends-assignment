// Libraries (CommonJS)
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

// Express
const app = express()
const port = process.env.PORT || 5000

// CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  }),
)
app.use(express.json())

// Define the base URL for the MealDB API
const MEALDB_BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

// Search endpoint
// Used to search for recipes by query, uses filters
app.get('/api/search', async (req, res) => {
  try {
    const { term, categories, areas } = req.query
    let results = []

    // Star with search term
    if (term) {
      const response = await axios.get(
        `${MEALDB_BASE_URL}/search.php?s=${term}`,
      )
      results = response.data.meals || []
    }

    // Apply category filters if present
    if (categories) {
      const categoryList = categories.split(',')
      results = results.filter((meal) =>
        categoryList.includes(meal.strCategory),
      )
    }

    // Apply area filters if present
    if (areas) {
      const areaList = areas.split(',')
      results = results.filter((meal) => areaList.includes(meal.strArea))
    }

    // Return simplified results
    const simplifiedResults = results.map((meal) => ({
      id: meal.idMeal,
      title: meal.strMeal,
      category: meal.strCategory,
      area: meal.strArea,
      image: meal.strMealThumb,
    }))

    res.json(simplifiedResults)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' })
  }
})

// Filter endpoint: done by category or area
// used to filter recipes by category or area
app.get('/api/filter', async (req, res) => {
  try {
    const { category, area } = req.query
    const param = category ? `c=${category}` : `a=${area}`
    const response = await axios.get(`${MEALDB_BASE_URL}/filter.php?${param}`)

    res.json(response.data.meals || [])
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' })
  }
})

// Options endpoint: done by category or area
// used to determine the options for the filter dropdowns
app.get('/api/options', async (req, res) => {
  try {
    const [categoriesRes, areasRes] = await Promise.all([
      axios.get(`${MEALDB_BASE_URL}/list.php?c=list`),
      axios.get(`${MEALDB_BASE_URL}/list.php?a=list`),
    ])

    res.json({
      categories: categoriesRes.data.meals || [],
      areas: areasRes.data.meals || [],
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch options' })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
