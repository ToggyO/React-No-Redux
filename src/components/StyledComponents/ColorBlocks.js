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

export const FillContainerSecondaryColor = styled.div`
  transition: fill 0.2s ease-in-out;
  fill: ${props => props.theme.colors.secondaryColor};
`;

export const PreloaderColorSchemeBlock = styled.div`
  background-color: ${props => props.theme.colors.preloader[props.colorScheme].overlay};
`;

export const StyledSvg = styled.svg`
  fill: ${props => props.theme.colors.preloader[props.colorScheme].image};
`;
