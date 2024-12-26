# Recipeasy - Recipe Discovery App

A mobile-first recipe discovery application built with React, using TheMealDB API.

## Getting Started

1. Clone repository
2. Run `npm install`
3. Run `npm start`

The app will run on [http://localhost:3000](http://localhost:3000)

## Walkthrough

1. **Onboarding**

   - Enter your name
   - Select a profile picture from the 5 options
   - Choose your favorite food category
   - Select your preferred cuisine area

2. **Home Page**

   - View your personalized "For You" category based on preferences
   - Scroll horizontally through food categories
   - See two recommended meals from your selected category
   - Find a trending meal from your preferred cuisine area

3. **Search Experience**

   - Click the search bar to navigate to search page
   - Type to instantly see search results
   - Click the filter icon in top right to access filters
   - Select multiple categories and areas to refine results
   - View up to 8 recipe cards with ratings and chefs

4. **Settings & Desktop View**
   - Click your profile picture to access settings
   - Update your name, profile picture, or preferences
   - Click "Switch to desktop" at the bottom to view desktop layout

### Implementation Notes

- Real recipe data (images, titles) from TheMealDB API
- Mock data for UX elements (chefs, ratings, cooking times)
- Mobile-first design with desktop view option

### Current Limitations

- Mock data points for meal metadata (ratings, chefs, times)
- Search currently doesn't combine with filters
- Meal detail pages not yet implemented
- Desktop/mobile switching manual (would ideally be automatic based on screen size)

## Tech Stack

- React
- Styled Components
- Express Backend (API proxy)
