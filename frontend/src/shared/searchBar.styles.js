import styled from 'styled-components'
import { staggeredFadeIn } from './animations.styles'

export const SearchBarContainer = styled.div`
  position: ${(props) => (props.isSearchPage ? 'sticky' : 'relative')};
  top: ${(props) => (props.isSearchPage ? '0' : 'auto')};
  z-index: 10;
  background: white;
  padding: 0 24px;
  min-height: 10vh;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  ${(props) => !props.isSearchPage && staggeredFadeIn(0.2)}
`

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 12px rgba(41, 148, 46, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  transform-origin: top;

  ${(props) =>
    props.isSearchPage &&
    `
    cursor: text;
    background: white;
    border-color: rgba(41, 148, 46, 0.2);
    box-shadow: 0 6px 16px rgba(41, 148, 46, 0.15);
    transform: scale(1.02);
  `}

  &:focus-within {
    border-color: rgba(41, 148, 46, 0.3);
    box-shadow: 0 8px 20px rgba(41, 148, 46, 0.2);
  }

  input {
    border: none;
    background: transparent;
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    color: #1e1e1e;
    padding: 0;
    margin-left: ${(props) => (props.isSearchPage ? '0' : '12px')};

    &::placeholder {
      color: #666666;
    }

    &:focus {
      outline: none;
    }
  }
`

export const SearchIcon = styled.div`
  color: #29942e;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.isSearchPage ? 0 : 1)};
  transition: opacity 0.2s ease;
  width: ${(props) => (props.isSearchPage ? 0 : 'auto')};
  margin-right: ${(props) => (props.isSearchPage ? 0 : '12px')};
`

export const SearchOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  color: #29942e;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: all 0.2s ease;
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`
