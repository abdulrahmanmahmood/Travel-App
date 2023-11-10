type ButtonProps ={
  type:'button'| 'submit';
  title:string;
  icon?:string;
  variant:'btn'

}


function Button({type, title, icon, variant}: ButtonProps) {
  return (
    <button type='button'>
      LOGIN    
    </button>
  )
}

export default Button