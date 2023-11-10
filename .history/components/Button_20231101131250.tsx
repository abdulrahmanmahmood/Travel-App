type ButtonProps ={
  type:'button'| 'submit'
}


function Button({type, title, icon, variant}: ButtonProps) {
  return (
    <button type='button'>
      LOGIN    
    </button>
  )
}

export default Button