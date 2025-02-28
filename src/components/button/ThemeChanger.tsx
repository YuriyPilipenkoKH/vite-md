import React from 'react'
import { useThemeStore } from '../../store/useThemeStore'
import { LuLampDesk, LuLightbulb } from "react-icons/lu";
import { FlatButton } from './Button';

const ThemeChanger = () => {
  const {theme, toggleTheme} = useThemeStore()
  return (
    <FlatButton
      className="btn btn-ghost text-[var(--text-color)]"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <LuLampDesk size={25}/> : <LuLightbulb  size={25}/>}
    </FlatButton>
  )
}

export default ThemeChanger