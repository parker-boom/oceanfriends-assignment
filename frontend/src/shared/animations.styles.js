/**
 * Shared animation styles that create fluid transitions throughout the app.
 * These animations help maintain visual continuity between different views
 * and states. The staggered fade-in effect is particularly used to create
 * a cohesive feel when moving between home and search layouts, ensuring
 * elements enter the view in a natural, coordinated way.
 */

import { keyframes, css } from 'styled-components'

// Fade in from bottom animation
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// Staggered animation helper
export const staggeredFadeIn = (delay = 0) => css`
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: ${delay}s;
`
