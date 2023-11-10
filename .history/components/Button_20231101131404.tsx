type ButtonProps ={
  type:'button'| 'submit',
  title:string;
  icon?:string;
  variant:string

}


function Button({type, title, icon, variant}: ButtonProps) {
  return (
    <button type='button'>
      LOGIN    
    </button>
  )
}

export default Button