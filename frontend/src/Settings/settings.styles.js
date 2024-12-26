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
  flex-direction: column;
  padding: 12px 24px;
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

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 5px;
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

export const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #29942e;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  align-self: center;
  margin-top: 8px;

  &:hover {
    opacity: 0.8;
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

export const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: 90%;
  max-width: 300px;
`

export const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`

export const ModalButtons = styled.div`
  display: flex;
  gap: 16px;
`

export const ModalButton = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:first-child {
    background: #29942e;
    color: white;

    &:hover {
      opacity: 0.9;
    }
  }

  &:last-child {
    background: #f5f5f5;
    color: #666;

    &:hover {
      background: #e0e0e0;
    }
  }
`

// Web-specific styled components
export const WebContainer = styled.div`
  min-height: 100vh;
  padding: 48px 48px 0 48px;
  margin: 0 auto;
`

export const WebHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;
  max-width: 800px;
  margin: 0 auto 48px;
  position: relative;
`

export const WebTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(45deg, #29942e, #45a049);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const WebSubtitle = styled.p`
  font-size: 20px;
  color: #666;
  margin: 12px 0 0 0;
`

export const WebLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  img {
    opacity: 0.9;
  }
`

export const WebSettingsIcon = styled.div`
  color: #29942e;
  opacity: 0.8;
`

export const WebContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`

export const WebSection = styled.div`
  margin-bottom: 36px;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const WebSectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #1e1e1e;
`

export const WebNameInput = styled(NameInput)`
  padding: 20px;
  font-size: 18px;
  border-radius: 16px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;

  &:focus {
    border-color: #29942e;
    box-shadow: 0 4px 12px rgba(41, 148, 46, 0.1);
  }
`

export const WebPfpGrid = styled(PfpGrid)`
  gap: 24px;
  justify-content: flex-start;
`

export const WebPfpOption = styled(PfpOption)`
  width: 80px;
  height: 80px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: #29942e;
  }
`

export const WebDivider = styled(Divider)`
  margin: 36px auto;
  max-width: 800px;
  opacity: 0.6;
`

export const WebFavoritesLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
  color: #1e1e1e;
  margin-bottom: 24px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const WebFilterSection = styled(FilterSection)`
  margin-bottom: 24px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const WebFilterHeader = styled(FilterHeader)`
  padding: 16px;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      !props.isOpen && props.hasSelection ? '#eeeeee' : '#f5f5f5'};
  }
`

export const WebFilterLabel = styled(FilterLabel)`
  font-size: 24px;
`

export const WebFilterSelection = styled(FilterSelection)`
  font-size: 18px;
`

export const WebFilterGrid = styled(FilterGrid)`
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 16px;
  max-height: ${(props) => (props.isOpen ? '300px' : '0')};
  padding-right: 16px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #29942e;
    border-radius: 4px;
    opacity: 0.8;
  }
`

export const WebFilterOption = styled(FilterOption)`
  padding: 12px 24px;
  font-size: 16px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(41, 148, 46, 0.1);
  }
`

export const WebButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 48px auto;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
`

export const WebActionButtons = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`

export const WebSaveButton = styled.button`
  padding: 20px 96px;
  border: none;
  border-radius: 16px;
  background: #29942e;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`

export const WebCancelButton = styled.button`
  width: 64px;
  border: none;
  border-radius: 16px;
  background: #f5f5f5;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }
`

export const WebSwitchButton = styled.button`
  background: none;
  border: none;
  color: #29942e;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`
