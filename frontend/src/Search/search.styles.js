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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 5px 24px 24px 24px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 500px;

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
  cursor: pointer;
  transition: transform 0.2s ease;
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

export const ComingSoonModal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: 90%;
  max-width: 300px;
  animation: fadeInUp 0.3s ease forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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

// Web-specific styled components
export const WebSearchSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 0;
  text-align: center;
`

export const WebSearchTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  span {
    font-size: 28px;
  }
`

export const WebFilterButton = styled.div`
  width: ${(props) => (props.hasFilters ? '350px' : '100px')};
  margin: 16px auto 0;
  padding: ${(props) => (props.hasFilters ? '12px 16px' : '10px')};
  background: #f5f5f5;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.hasFilters ? 'space-between' : 'center'};
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #666666;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    transform: translateY(-1px);
    background: #eeeeee;
  }

  &:active {
    transform: translateY(0);
  }
`

export const WebActiveFiltersBar = styled(ActiveFiltersBar)`
  max-width: 800px;
  margin: 0 auto 24px;
  padding: 12px 24px;
`

export const WebResultsHeader = styled(ResultsHeader)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: flex-start;
`

export const WebResultsContainer = styled(ResultsContainer)`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  ${ResultItem} {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 24px;
    overflow: hidden;
    background: white;
    cursor: pointer;
    transition: transform 0.2s ease;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
    }
  }

  ${ResultImage} {
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
  }

  ${ResultOverlay} {
    padding: 24px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.5) 60%,
      transparent 100%
    );
  }

  ${ResultTitle} {
    font-size: 20px;
    margin-bottom: 8px;
    -webkit-line-clamp: 2;
    line-height: 1.4;
  }

  ${ResultChef} {
    font-size: 14px;
  }

  ${RatingBadge} {
    padding: 6px 12px;
    font-size: 14px;
    right: 16px;
    top: 16px;
  }
`

export const WebFilterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const FilterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`

export const FilterText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
