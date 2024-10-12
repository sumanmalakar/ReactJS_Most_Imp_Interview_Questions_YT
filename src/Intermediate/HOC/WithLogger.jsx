import React from 'react'

const WithLogger = (WrappedComonent) => {
  return (props) => {
    return <WrappedComonent {...props} />
  };
}

export default WithLogger