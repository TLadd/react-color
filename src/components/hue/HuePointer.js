import React from 'react'
import reactCSS from 'reactcss'

export const SliderPointer = () => {
  const styles = reactCSS({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  })

  return (
    <div style={ styles.picker }></div>
  )
}

export default SliderPointer
