export const selectCharacter = (character) => {
    return {
        type: 'SELECT_CHARACTER',
        payload: character
    }
}