import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  margin-top: 20px;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin: 0;
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 8px 0 0 0;
`

export const GearIcon = styled.div`
  color: #29942e;
  margin-top: 8px;
`

export const Content = styled.div`
  flex: 1;
  padding: 0 24px;
  overflow-y: auto;
  padding-bottom: 10px;
`

export const Section = styled.div`
  margin-bottom: 12px;
  position: relative;
`

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const NameInput = styled.input`
  width: 100%;
  padding: 16px;
  padding-right: 48px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #29942e;
  }
`

export const PencilIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50px;
  color: #666;
  pointer-events: none;
`

export const PfpGrid = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`

export const PfpOption = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid ${(props) => (props.selected ? '#29942e' : '#e0e0e0')};
  padding: 3px;
  background: none;
  cursor: pointer;
  transition: border-color 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &:hover {
    border-color: ${(props) => (props.selected ? '#29942e' : '#ccc')};
  }
`

export const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 24px 0;
`

export const FilterSection = styled.div`
  margin-bottom: 8px;
`

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
  border-radius: 12px;
  background: ${(props) =>
    !props.isOpen && props.hasSelection ? '#f5f5f5' : 'transparent'};
  transition: background 0.3s ease;
`

export const FilterLabel = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #1e1e1e;
`

export const FilterSelection = styled.div`
  color: #29942e;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
  margin-top: 12px;
  padding-right: 10px;
  max-height: ${(props) => (props.isOpen ? '200px' : '0')};
  overflow-y: auto;
  overflow-x: hidden;
  transition: max-height 0.3s ease;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 4px;
  }
`

export const FilterOption = styled.button`
  width: 100%;
  padding: 8px 16px;
  border-radius: 100px;
  border: 2px solid ${(props) => (props.selected ? '#29942e' : '#e0e0e0')};
  background: ${(props) => (props.selected ? '#29942e' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#1e1e1e')};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    border-color: #29942e;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  background: white;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  z-index: 10;

  @media (min-width: 430px) {
    width: 430px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 32px 32px;
  }
`

export const SaveButton = styled.button`
  flex: 1;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: #29942e;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`

export const CancelButton = styled.button`
  width: 52px;
  border: none;
  border-radius: 12px;
  background: #f5f5f5;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`
