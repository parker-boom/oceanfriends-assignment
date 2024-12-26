# Recipeasy - Recipe Discovery App

A mobile-first recipe discovery application built with React, using TheMealDB API.

## Getting Started

1. Clone repository
2. Run `npm install`
3. Run `npm start`

The app will run on [http://localhost:3000](http://localhost:3000)

## Using the App

### Core Features

- Complete onboarding by setting your name, profile picture, and favorite cuisine preferences
- Home page displays personalized recommendations based on your preferences
- Search functionality with category and area filters
- Settings page for updating preferences and switching between mobile/desktop views

### Navigation

- **Home**: View recommended recipes and trending meals
- **Search**: Access via the search bar, use filters in top right
- **Settings**: Click profile picture to access

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
