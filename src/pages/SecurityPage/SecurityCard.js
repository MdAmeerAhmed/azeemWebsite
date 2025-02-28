import React from 'react'
import Title from "../Title";
import Security from '../Security';
import Approach from '../../Component/Approach';
function SecurityCard() {
  return (
     <>
     <Title title="Security" page="Security" />
     <Security />
     <Approach/>
     </>
  )
}

export default SecurityCard;