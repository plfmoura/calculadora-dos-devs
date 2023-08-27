import React from 'react'
import './styles.css'

export default function CustomButton({ value, onPress, variant, useId }) {

  return (
    <button type='button' id={!useId && "btn"} className={ variant ? variant : 'default-btn' } onClick={ onPress }>
      { value }
    </button>
  )
}
