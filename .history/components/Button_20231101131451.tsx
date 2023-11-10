type ButtonProps ={
  type:'button'| 'submit';
  title:string;
  icon?:string;
  variant:'btn_dark_green'

}


function Button({type, title, icon, variant}: ButtonProps) {
  return (
    <button type={type}>
      LOGIN    
    </button>
  )
}

export default Button