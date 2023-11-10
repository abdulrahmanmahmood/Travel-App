import Image from "next/image";

type ButtonProps ={
  type:'button'| 'submit';
  title:string;
  icon?:string;
  variant:'btn_dark_green' | "btn_green" | "btn_white_text"

}


function Button({type, title, icon, variant}: ButtonProps) {
  return (
    <button type={type} className={`flexCenter gap-3 roudned-full border ${variant}`}>

      {icon && <Image src={icon} alt={title} width={24} height={24}/>} 
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button