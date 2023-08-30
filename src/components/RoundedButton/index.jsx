import React from 'react'
import './styles.css'

export default function RoundedButton({ value, onPress, variant, useId, sx }) {

  return (
    <button type='button' style={sx && sx} id={!useId && "btn"} className={ variant ? variant : 'default-btn' } onClick={ onPress }>
      { value }
    </button>
  )
}
