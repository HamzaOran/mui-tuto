'use client';

import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

import MenuButton from './game-button';
import { Colors } from '../theme/colors';

const MainMenuFrame = styled(Box, {
  name: 'MainMenuFrameComponent',
  slot: 'Root',
})(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 8px',
  gap: 4,
  boxShadow: `2px 2px 2px 2px ${Colors.info}`,
}));

function MainMenu() {
  const handleButtonClick = (param: string) => {
    console.log(param);
  };
  return (
    <Box>
      <MainMenuFrame>
        <MenuButton title="new game" onButtonClick={handleButtonClick} />
        <MenuButton title="Continue" onButtonClick={handleButtonClick} />
        <MenuButton title="options" onButtonClick={handleButtonClick} />
        <MenuButton title="quit" onButtonClick={handleButtonClick} />
      </MainMenuFrame>
    </Box>
  );
}

export default MainMenu;
