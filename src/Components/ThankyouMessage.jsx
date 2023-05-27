import React from 'react'
import AnotherUserParticipation from './AnotherUserParticipation'
import UserParticipation from './UserParticipation'



const msg="Thank you for your vote"

function ThankyouMessage() {
  return (
    <div>
      <UserParticipation msg/>
      <AnotherUserParticipation msg/>
    
    </div>
  )
}

export default ThankyouMessage
