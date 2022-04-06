import React from 'react';
import { Destructive, Primary, PrimaryIcon, Secondary, SecondaryIcon, Tertiary, TertiaryIcon } from './Index';

const Button = () => {
  return (
    <div>
      <Primary type='submit' name='Primary Button' />
      <Secondary type='submit' name='Secondary Button' />
      <Tertiary type='submit' name='Tertiary Button' />
      <PrimaryIcon type='submit' name='Primary Icon Button' />
      <SecondaryIcon type='submit' name='Secondary Icon Button' />
      <TertiaryIcon type='submit' name='Tertiary Icon Button' />
      <Destructive type='submit' name='Destructive Button' />
    </div>
  )
}

export default Button