import React, { useState } from 'react';
import CalculatorMinus from '../Minus/CalculateMinus';
import CalculatorPLus from '../PLus/CalculatePlus';
import CalculatorPodel from '../Podel/CalculatePodel';
import CalculatorUmnoj from '../Umnoj/CalculateUmnoj';



const Full = () => {
 

  return (
    <div>
        <CalculatorMinus/>
        <CalculatorPLus/>
        <CalculatorPodel/>
        <CalculatorUmnoj/>
      
    </div>
  );
};

export default Full;