import styled from 'styled-components';

export const PrimaryColorBlock = styled.div`
  background-color: ${props => props.theme.colors.primaryColor};
`;

export const PrimaryColorBlockFlagged = styled.div`
  background-color: ${props =>
    props.flag ? props.theme.colors.sidebarCheckedFont : props.theme.colors.primaryColor};
`;

export const SecondaryColorBlock = styled.div`
  background-color: ${props => props.theme.colors.secondaryColor};
`;

export const SecondaryColorBlockFlagged = styled.div`
  background-color: ${props =>
    props.flag ? props.theme.colors.sidebarCheckedFont : props.theme.colors.secondaryColor};
`;

export const SecondaryColorHeadlineFlagged = styled.h1`
  color: ${props => (props.flag ? props.theme.colors.sidebarCheckedFont : props.theme.colors.secondaryColor)};
`;

export const FillContainerPrimaryColor = styled.div`
  transition: fill 0.2s ease-in-out, opacity 0.2s ease;
  fill: ${props => props.theme.colors.primaryColor};
`;

export const FillContainerSecondaryColor = styled.div`
  transition: fill 0.2s ease-in-out, opacity 0.2s ease;
  fill: ${props => props.theme.colors.secondaryColor};
`;

export const PreloaderColorSchemeBlock = styled.div`
  background-color: ${props => props.theme.colors.preloader[props.colorScheme].overlay};
`;

export const StyledSvg = styled.svg`
  fill: ${props => props.theme.colors.preloader[props.colorScheme].image};
`;

export const ModalBaseColorBlock = styled.div`
  background-color: ${props => props.theme.colors.modal.base};
`;

export const ModalSecondaryColorBlock = styled.div`
  background-color: ${props => props.theme.colors.modal.secondary};
`;

export const ModalSecondaryColorBlockHover = styled.div`
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: ${props => props.theme.colors.modal.secondaryHover};
  }
`;

export const ModalFontPrimaryColorBlock = styled.div`
  color: ${props => props.theme.colors.modal.primaryFont};
`;

export const ModalFontSecondaryColorBlock = styled.div`
  color: ${props => props.theme.colors.modal.secondaryFont};
`;

export const ModalColorButton = styled.button`
  color: ${props => props.theme.colors.modal.primaryFont} !important;
  &:hover {
    background-color: ${props => props.theme.colors.modal.secondaryHover};
  }
`;

export const ModalBorderColorBlock = styled.div`
  border-color: ${props => props.theme.colors.modal.border} !important;
`;

export const PrimaryColorLabel = styled.label`
  color: ${props => props.theme.colors.input.font};
`;

export const PrimaryColorLink = styled.div`
  color: ${props => props.theme.colors.input.font};
`;
