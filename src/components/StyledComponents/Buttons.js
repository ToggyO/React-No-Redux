import styled from 'styled-components';

/* eslint-disable */
export const ApplyButton = styled.button`
  background-color: ${props => props.theme.colors.buttons.applyButton.base} !important;
  color: ${props => props.theme.colors.buttons.applyButton.buttonFontBase};

  &:disabled {
    background-color: ${props => props.theme.colors.buttons.applyButton.disabled} !important;
    color: ${props => props.theme.colors.buttons.applyButton.buttonFontDisabled};
  }

  &:hover:enabled {
    background-color: ${props => props.theme.colors.buttons.applyButton.hoverEnabled} !important;
    color: ${props => props.theme.colors.buttons.applyButton.buttonFontHover};
  }

  &:active:enabled {
    background-color: ${props => props.theme.colors.buttons.applyButton.activeEnabled} !important;
    color: ${props => props.theme.colors.buttons.applyButton.buttonFontActive};
  }
`;

export const PrimaryColorFilledButton = styled.button`
  background-color: ${props => props.theme.colors.buttons.primaryColorFilledButton.base} !important;
  color: ${props => props.theme.colors.buttons.primaryColorFilledButton.buttonFontBase};

  &:disabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorFilledButton.disabled} !important;
    color: ${props => props.theme.colors.buttons.primaryColorFilledButton.buttonFontDisabled};
  }

  &:hover:enabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorFilledButton.hoverEnabled} !important;
    color: ${props => props.theme.colors.buttons.primaryColorFilledButton.buttonFontHover};
  }

  &:active:enabled {
    background-color: ${props =>
      props.theme.colors.buttons.primaryColorFilledButton.activeEnabled} !important;
    color: ${props => props.theme.colors.buttons.primaryColorFilledButton.buttonFontActive};
  }
`;

export const PrimaryColorOutlinedButton = styled.button`
  background-color: ${props => props.theme.colors.buttons.primaryColorOutlinedButton.base} !important;
  color: ${props => props.theme.colors.buttons.primaryColorOutlinedButton.buttonFontBase};

  &:disabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorOutlinedButton.disabled} !important;
  }

  &:hover:enabled {
    background-color: ${props =>
      props.theme.colors.buttons.primaryColorOutlinedButton.hoverEnabled} !important;
  }

  &:active:enabled {
    background-color: ${props =>
      props.theme.colors.buttons.primaryColorOutlinedButton.activeEnabled} !important;
  }
`;

export const DeleteButton = styled.button`
  border: 1px solid ${props => props.theme.colors.buttons.deleteButton.base} !important;
  color: ${props => props.theme.colors.buttons.deleteButton.buttonFontBase};

  &:disabled {
    background-color: ${props => props.theme.colors.buttons.deleteButton.buttonFontHover} !important;
    color: ${props => props.theme.colors.buttons.deleteButton.buttonFontDisabled};
  }

  &:hover:enabled {
    background-color: ${props => props.theme.colors.buttons.deleteButton.hoverEnabled} !important;
    color: ${props => props.theme.colors.buttons.deleteButton.buttonFontHover};
  }

  &:active:enabled {
    background-color: ${props => props.theme.colors.buttons.deleteButton.activeEnabled} !important;
    color: ${props => props.theme.colors.buttons.deleteButton.buttonFontActive};
  }
`;
