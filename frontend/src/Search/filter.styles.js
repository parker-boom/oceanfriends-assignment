import styled from 'styled-components'

export const FilterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
`

export const HeaderSection = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 16px;
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

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  margin: 0;
  color: #000000;
`

export const FilterContent = styled.div`
  flex: 1;
  padding: 0 24px;
`

export const FilterSection = styled.div`
  margin-bottom: 24px;
`

export const FilterBox = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #eaeaea;
`

export const FilterLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1e1e1e;
`

export const FilterSubLabel = styled.span`
  font-size: 13px;
  color: #666666;
  margin-top: 2px;
`

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  background: ${(props) => (props.isOpen ? '#f8f8f8' : 'white')};
  transition: all 0.3s ease;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &:hover {
    background: #f8f8f8;
  }
`

export const FilterLabel = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #1e1e1e;
`

export const FilterSelection = styled.div`
  color: #29942e;
  font-weight: 600;
`

export const SelectedPreview = styled.span`
  font-size: 14px;
  color: #29942e;
  font-weight: 600;
`

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 8px;
  padding: ${(props) => (props.isOpen ? '16px 24px 16px 16px' : '0 16px')};
  max-height: ${(props) => (props.isOpen ? '250px' : '0')};
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease;

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
  height: 36px;
  padding: 0 16px;
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
  flex-shrink: 0;

  &:hover {
    border-color: #29942e;
  }
`

export const ApplyButton = styled.button`
  margin: 24px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: #29942e;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:not(:disabled):active {
    transform: translateY(0);
  }
`

export const ResetButton = styled.button`
  margin: 0 auto 24px;
  padding: 12px 24px;
  width: 200px;
  border: none;
  border-radius: 8px;
  background: #e5e5e5;
  color: #444444;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #d5d5d5;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    color: #666666;
  }
`

// Web-specific filter styles
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

export const WebFilterContainer = styled.div`
  width: 900px;
  height: 600px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const WebFilterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 32px;
  flex: 1;
  overflow: hidden;
`

export const WebFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  border: 1px solid #eaeaea;
  overflow: hidden;
`

export const WebFilterHeader = styled.div`
  padding: 16px;
  background: #f8f8f8;
  border-bottom: 1px solid #eaeaea;
`

export const WebFilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  padding: 16px;
  overflow-y: auto;
  max-height: 400px;
  align-items: start;

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

export const WebFilterActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 32px;
  border-top: 1px solid #eaeaea;
  align-items: center;
`

export const WebResetButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #f5f5f5;
  color: #666666;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #eeeeee;
  }
`

export const WebApplyButton = styled.button`
  width: 200px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: #29942e;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`
