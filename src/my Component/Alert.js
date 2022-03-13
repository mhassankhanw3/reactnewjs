import React from 'react'

function Alert(props) {

    const Capitalize = (letter) => {
        // const str = word.toLowerCase();
    return letter.charAt(0).toUpperCase() + letter.slice(1);
}
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg} 
  
</div>
  )
}

export default Alert