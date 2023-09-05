import React from "react"

interface ButtonSocmedProps {
   link: string;
   icon: any;
   color: string;
   className?: string;
}

const ButtonSocmed: React.FC<ButtonSocmedProps> = ({ link, icon, className }) => {
	return (
		<div
			onClick={() => {
				window.open(link, "_blank")
			}}
         className={`flex hover:cursor-pointer border-2 justify-center justify-items-center p-[8px] bg-primary border-secondary hover:border-fb overflow-hidden rounded-full ${className}`}
         
		>
			<img alt={link} src={icon} className="w-[24px] object-contain" />
		</div>
	)
}

export default ButtonSocmed
