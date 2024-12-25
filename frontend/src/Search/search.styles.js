import styled from 'styled-components'

export const InfoSection = styled.div`
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

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: #666666;
  margin: 8px 0 0 0;
`

export const FilterButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #29942e;

  &:hover {
    transform: scale(1.05);
    background: #eaeaea;
  }

  &:active {
    transform: scale(0.95);
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`

export const BackButton = styled.div`
  color: #29942e;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  margin: -8px;

  &:active {
    transform: scale(0.95);
  }
`

export const ActiveFiltersBar = styled.div`
  margin: 0px 24px 12px;
  padding: 8px 12px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(41, 148, 46, 0.1);
`

export const FilterList = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
  overflow: hidden;
  color: #29942e;
  font-weight: 500;
`

export const ResetFiltersButton = styled.button`
  background: white;
  border: 1px solid #e0e0e0;
  color: #666666;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  margin-left: 12px;

  &:hover {
    background: #f8f8f8;
    border-color: #d0d0d0;
  }

  &:active {
    transform: scale(0.98);
  }
`

export const ResultsContainer = styled.div`
  padding: 5px 24px 24px 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  overflow-y: auto;
  max-height: 500px;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 100px;
  margin-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const ResultItem = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const ResultImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ResultOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 60%,
    transparent 100%
  );
  color: white;
`

export const ResultTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ResultChef = styled.p`
  margin: 0;
  font-size: 12px;
  opacity: 0.8;
`

export const RatingBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 215, 78, 0.95);
  padding: 4px 8px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: 12px;
  color: #000000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`

export const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid #f5f5f5;
  border-top: 2px solid #29942e;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 24px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const ResultsHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
`

export const ResultsCount = styled.span`
  font-size: 14px;
  color: #666666;
  font-weight: 500;
  text-align: center;
`
