import { createSlice } from '@reduxjs/toolkit'

import { language_EN } from '../../data/language_EN'
import { language_MM } from '../../data/language_MM' 


const initialState = {
  choose_Language : language_MM
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguageEN: (state, action) => {
      state.choose_Language = language_EN
    },
    setLanguageMM: (state, action) => {
      state.choose_Language = language_MM
    }
  }
});

export const {setLanguageEN, setLanguageMM} = languageSlice.actions

export default languageSlice.reducer