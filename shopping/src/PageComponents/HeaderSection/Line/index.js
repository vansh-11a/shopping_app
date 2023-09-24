import React from 'react';

function Line({ height='1', color='#FFFFFF' , left='0' , right='0' , position='static' , top , width}) {
  const lineStyle = {
    marginRight: `${right}px`,
    marginLeft: `${left}px`,
    height: `${height}px`,
    backgroundColor: color,
    top:top,
    position : position,
    width : width,
  };

  return <div style={lineStyle}></div>;
}

export default Line;
