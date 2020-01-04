import styled from 'styled-components';

export const PrimaryColorBlock = styled.div`
  background-color: ${props => props.theme.colors.primaryColor};
`;

export const SecondaryColorHeadline = styled.h1`
  color: ${props => (props.flag ? props.theme.colors.sidebarCheckedFont : props.theme.colors.secondaryColor)};
`;

export const FillContainer = styled.div`
  transition: fill 0.2s ease-in-out;
  fill: ${props => props.theme.colors.secondaryColor};
`;
