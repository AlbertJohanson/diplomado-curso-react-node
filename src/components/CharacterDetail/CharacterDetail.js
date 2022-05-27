import React from 'react'
import { connect } from 'react-redux'

const CharacterDetail = ({character}) => {
  if(!character) {
    return <div>Select a character</div>
  }
  return (
    <div>{character.characterName}</div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        character: state.selectedCharacter
    }
}

export default connect(mapStateToProps)(CharacterDetail)