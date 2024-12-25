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
