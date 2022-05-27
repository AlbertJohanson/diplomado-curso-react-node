import { combineReducers } from "redux";

const characterReducer = () => {
  return [
    {
      characterName: "Leia Organa",
      playedBy: "Carrie Fisher",
      id: 1,
    },
    {
      characterName: "Luke Skywalker",
      playedBy: "Mark Hamill",
      id: 2,
    },
    {
      characterName: "C-3PO",
      playedBy: "Anthony Daniels",
      id: 3,
    },
    {
      characterName: "R2-D2",
      playedBy: "Kenny Baker",
      id: 4,
    },
    {
      characterName: "Han Solo",
      playedBy: "Harrison Ford",
      id: 5,
    },
  ];
};

const selectedCharacterReducer = (selectedCharacter = null, action) => {
  switch (action.type) {
    case "SELECT_CHARACTER": {
      return action.payload;
    }

    default: {
      return selectedCharacter;
    }
  }
};

export default combineReducers({
    characters: characterReducer,
    selectedCharacter: selectedCharacterReducer
});
