import React from 'react'
import { connect } from 'react-redux'
import { selectCharacter } from '../../actions/index'

const ChracterList = (props) => {

  const RenderCharacters = () => {
    return props.characters.map((character) => {
        return ( 
            <div className='item' key={character.id}>
                <div className='right floated content'>
                    <button className='ui button primary' onClick={() => props.selectCharacter(character)}>Select</button>
                </div>
                <div className='content'>
                    <div className='header'>{character.characterName}</div>
                </div>
            </div>
         )
    })
  }

  return (
    <div><RenderCharacters/></div>
  )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps,{
    selectCharacter
})(ChracterList);