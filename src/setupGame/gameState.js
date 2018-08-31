import store from 'store'
import { get } from 'lodash'

const appName = 'memoryGame'

//Function: startUp
//Description: sets up the game
const startUp = () => {
  if (!store.get(appName)) {
    store.set(appName, {
      settings: {},
      state: null
    })
  }
}

//Function: loadGame
//Description: Call the startup function and load the game  with the current state elements
const loadGame = () => {
  startUp()

  return store.get(appName).state
}

//Function: saveGame
//Description: save the current state of the game
const saveGame = (state) => {
  startUp()

  const currState = store.get(appName)
  const newState = {...currState, state}

  store.set(appName, newState)
}

//Function: clearGame
//Description: Used to clear the game when the start over button is pressed and a level is chosen
const clearGame = () => {
  startUp()

  const currState = store.get(appName)
  const newState = {...currState, state: null}

  store.set(appName, newState)
}

//Function: SaveSettings
//Description: Save the current settings to the game
const saveSettings = (settings) => {
  startUp()

  const currSettings = store.get(appName)
  const newSettings = {...currSettings, settings}

  store.set(appName, newSettings)
}


//Function: loadSettings
//Description: load the settings onto the game
const loadSettings = (value) => {
  startUp()

  const storedSettings = store.get(appName).settings

  return value
    ? get(store.get(appName).settings, value)
    : storedSettings
}

export {
  clearGame,
  saveGame,
  saveSettings,
  loadGame,
  loadSettings

}
