import Image from "next/image";

type ButtonProps ={
  type:'button'| 'submit';
  title:string;
  icon?:string;
  variant:'btn_dark_green'

}


function Button({type, title, icon, variant}: ButtonProps) {
  return (
    <button type={type}>

      {icon && <Image src={icon} alt={title} width={}/>} 
    </button>
  )
}

export default Button