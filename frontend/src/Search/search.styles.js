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
