import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../theme/colors';

const GameButton = styled(Button, {
  name: 'GameButtonComponent',
  slot: 'Root',
})(({}) => ({
  color: Colors.white,
}));

function MenuButton({
  title,
  onButtonClick,
}: {
  title: string;
  onButtonClick: (param: string) => void;
}) {
  return <GameButton onClick={() => onButtonClick(title)}>{title}</GameButton>;
}

export default MenuButton;
