type ButtonProps ={
  type:'button'| 'submit',
  title:string,
  <icon:image></icon:image>
}


function Button({type, title, icon, variant}: ButtonProps) {
  return (
    <button type='button'>
      LOGIN    
    </button>
  )
}

export default Button