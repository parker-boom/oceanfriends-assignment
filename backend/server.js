// Libraries (CommonJS)
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

// Express
const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json())

// Define the base URL for the MealDB API
const MEALDB_BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

// Search endpoint
// Used to search for recipes by query
app.get('/api/search', async (req, res) => {
  try {
    const { term } = req.query
    const response = await axios.get(`${MEALDB_BASE_URL}/search.php?s=${term}`)

    const simplifiedMeals =
      response.data.meals?.map((meal) => ({
        id: meal.idMeal,
        title: meal.strMeal,
        category: meal.strCategory,
        area: meal.strArea,
        image: meal.strMealThumb,
      })) || []

    res.json(simplifiedMeals)
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
