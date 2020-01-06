import styled from 'styled-components';

export const ApplyButton = styled.button`
  background-color: ${props => props.theme.colors.buttons.applyButton.base};
  color: ${props => props.theme.colors.buttons.applyButton.buttonFontBase};

  &:disabled {
    background-color: ${props => props.theme.colors.buttons.applyButton.disabled};
    color: ${props => props.theme.colors.buttons.applyButton.buttonFontDisabled};
  }

  &:hover:enabled {
    background-color: ${props => props.theme.colors.buttons.applyButton.hoverEnabled};
    color: ${props => props.theme.colors.buttons.applyButton.buttonFontHover};
  }

  &:active:enabled {
    background-color: ${props => props.theme.colors.buttons.applyButton.activeEnabled};
    color: ${props => props.theme.colors.buttons.applyButton.buttonFontActive};
  }
`;

export const PrimaryColorFilledButton = styled.button`
  background-color: ${props => props.theme.colors.buttons.primaryColorFilledButton.base};
  color: ${props => props.theme.colors.buttons.primaryColorFilledButton.buttonFontBase};

  &:disabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorFilledButton.disabled};
    color: ${props => props.theme.colors.buttons.primaryColorFilledButton.buttonFontDisabled};
  }

  &:hover:enabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorFilledButton.hoverEnabled};
    color: ${props => props.theme.colors.buttons.primaryColorFilledButton.buttonFontHover};
  }

  &:active:enabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorFilledButton.activeEnabled};
    color: ${props => props.theme.colors.buttons.primaryColorFilledButton.buttonFontActive};
  }
`;

export const PrimaryColorOutlinedButton = styled.button`
  background-color: ${props => props.theme.colors.buttons.primaryColorOutlinedButton.base};
  color: ${props => props.theme.colors.buttons.primaryColorOutlinedButton.buttonFontBase};

  &:disabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorOutlinedButton.disabled};
  }

  &:hover:enabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorOutlinedButton.hoverEnabled};
  }

  &:active:enabled {
    background-color: ${props => props.theme.colors.buttons.primaryColorOutlinedButton.activeEnabled};
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
