import styled from 'styled-components'

export const OnboardingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  flex: 1;
  padding: 24px;
`

export const BottomSection = styled.div`
  margin-top: auto;
  padding: 10px 24px;
  background: white;
`

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
`

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#29942e' : '#E0E0E0')};
  transition: background 0.3s ease;
`

export const NextButton = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: #29942e;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    opacity: 0.9;
  }
`

export const BackButton = styled.button`
  width: 100%;
  height: 48px;
  background: none;
  border: none;
  color: #29942e;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    opacity: 0.9;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`

export const LogoContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`

export const WelcomeText = styled.div`
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  .welcome {
    font-size: 28px;
    font-weight: 800;
  }

  .gradient-text {
    font-size: 40px;
    font-weight: 800;
    background: linear-gradient(135deg, #29942e, #ffd74e);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 3s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  padding: 0 24px;
`

export const WaveContainer = styled.div`
  text-align: center;
  margin-bottom: 16px;

  .wave {
    font-size: 50px;
    animation: wave 2s infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

export const SlideTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 15px;
  color: #1e1e1e;
`

export const InputSection = styled.div`
  margin-bottom: 40px;
`

export const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 25px;
  color: #1e1e1e;
`

export const NameInput = styled.input`
  width: 100%;
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #29942e;
  }
`

export const PfpSection = styled.div`
  margin-bottom: 24px;
`

export const PfpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  justify-items: center;
  margin-top: 16px;
  padding: 0 12px;

  & > :nth-last-child(-n + 2) {
    transform: translateX(60%);
  }
`

export const PfpOption = styled.button`
  width: 105px;
  height: 105px;
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

export const FilterSection = styled.div`
  margin-bottom: 5px;
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

  /* Scrollbar styling */
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

export const Description = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
`
