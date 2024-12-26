import styled from 'styled-components'
import { staggeredFadeIn, fadeInUp } from '../shared/animations.styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
`

export const InfoSection = styled.div`
  ${staggeredFadeIn(0.1)}
  min-height: 15vh;
  padding: 24px;
  background: #ffffff;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`

export const Greeting = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  color: #000000;
`

export const Question = styled.p`
  font-size: 16px;
  color: #666666;
  margin: 8px 0 0 0;
`

export const ProfilePic = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const SearchSection = styled.div`
  min-height: 10vh;
  padding: 0 24px;
  background: #ffffff;
`

export const CategorySection = styled.div`
  ${staggeredFadeIn(0.3)}
  min-height: 300px;
  padding: 5px 24px;
  background: #ffffff;
`

export const AreaSection = styled.div`
  ${staggeredFadeIn(0.4)}
  min-height: 20vh;
  padding: 24px 24px 35px;
  background: #ffffff;
`

export const AreaTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 16px 0;
  color: #000000;
`

export const AreaContent = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const MainAreaCard = styled.div`
  flex: 0.85;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  }
`

export const SeeMoreButton = styled.div`
  flex: 0.15;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > div {
    background: #29942e;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(41, 148, 46, 0.2);
    transition: all 0.2s ease;

    &:hover {
      transform: translateX(2px);
      box-shadow: 0 6px 16px rgba(41, 148, 46, 0.3);
    }
  }
`

export const ChefImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background: #f5f5f5;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AreaMealTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 8px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    color: #000000;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
  }

  span {
    font-size: 24px;
    flex-shrink: 0;
  }
`

export const ChefName = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0 0 12px 0;
`

export const AreaMetadata = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #666666;
`

export const ChevronIcon = styled.div`
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  background: #29942e;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(41, 148, 46, 0.2);
`

export const SearchBarButton = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(41, 148, 46, 0.1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(41, 148, 46, 0.03);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(41, 148, 46, 0.15);
    border-color: rgba(0, 0, 0, 0.15);

    &:before {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.98) translateY(0);
    box-shadow: 0 2px 8px rgba(41, 148, 46, 0.1);
    background: #eeeeee;
    border-color: rgba(0, 0, 0, 0.2);
  }
`

export const SearchIcon = styled.div`
  color: #29942e;
  margin-right: 12px;
  display: flex;
  align-items: center;
`

export const SearchPlaceholder = styled.div`
  color: #666666;
  font-size: 16px;
  font-weight: 500;
`

export const CategoryScroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 8px 0;
  gap: 12px;
  -webkit-overflow-scrolling: touch;
  margin: 0 -24px;
  padding: 8px 24px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const CategoryButton = styled.button`
  padding: 8px 16px;
  border-radius: 100px;
  white-space: nowrap;
  border: none;
  background: ${(props) => (props.active ? '#29942e' : '#f5f5f5')};
  color: ${(props) => (props.active ? 'white' : '#666666')};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
    background: ${(props) => (props.active ? '#29942e' : '#eeeeee')};
  }

  &:active {
    transform: translateY(0px);
  }
`

export const HeartIcon = styled.span`
  color: ${(props) => (props.active ? 'white' : '#666666')};
  display: flex;
  align-items: center;
`

export const LoadingIndicator = styled.div`
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  padding: 16px 0;
`

export const MealGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px 0;
  height: 220px;
  animation: ${fadeInUp} 0.3s ease forwards;
`

export const MealCard = styled.div`
  height: 180px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2px);
  }
`

export const MealImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  flex-shrink: 0;
`

export const MealInfo = styled.div`
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MealTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MealMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`

export const Rating = styled.span`
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Time = styled.span`
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const LoadingPlaceholder = styled.div`
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  transition: opacity 0.3s ease;
`

export const ComingSoonModal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: 90%;
  max-width: 300px;
  animation: ${fadeInUp} 0.3s ease forwards;
`

export const ComingSoonTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`

export const ComingSoonSubtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 24px;
`

export const OkayButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #29942e;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

// Web-specific styled components
export const WebHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  z-index: 1000;
`

export const WebLogo = styled.div`
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(45deg, #29942e, #45a049);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const WebContainer = styled.div`
  padding: 104px 48px 48px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 36px;
  min-height: 100vh;
  overflow-x: hidden;
`

export const WebSectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 28px;
  }
`

export const WebSearchSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 0;
  text-align: center;

  ${WebSectionTitle} {
    justify-content: center;
    margin-bottom: 16px;
  }
`

export const WebCategorySection = styled(CategorySection)`
  padding: 0;

  ${WebSectionTitle} {
    margin-bottom: 12px;
  }

  ${CategoryScroll} {
    margin: 0;
    padding: 16px 0;
    justify-content: flex-start;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ${MealGrid} {
    grid-template-columns: repeat(4, 1fr);
    height: auto;
    gap: 24px;
  }

  ${MealCard} {
    height: 240px;
  }

  ${MealImage} {
    height: 160px;
  }

  ${MealTitle} {
    font-size: 16px;
  }

  ${MealMetadata} {
    font-size: 14px;
  }
`

export const WebFeaturedSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-top: 24px;

  ${WebSectionTitle} {
    grid-column: 1 / -1;
    margin-bottom: 5px;
  }

  ${MainAreaCard} {
    height: 100%;
    padding: 24px;
  }

  ${ChefImage} {
    width: 180px;
    height: 180px;
  }

  ${AreaMealTitle} h3 {
    font-size: 24px;
  }

  ${ChefName} {
    font-size: 16px;
  }

  ${AreaMetadata} {
    font-size: 16px;
  }
`

export const WebTrendingPreview = styled.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    color: #29942e;
  }

  p {
    font-size: 16px;
    color: #666666;
    margin: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  }
`
