type ButtonProps ={
  type:'button'| 'submit',
  title:''
}


function Button({type, title, icon, variant}: ButtonProps) {
  return (
    <button type='button'>
      LOGIN    
    </button>
  )
}

export default Button