import { Tilt } from "react-tilt"

interface ServiceCardProps {
	icon: string
	title: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<div className="w-full rounded-[20px] shadow-card">
				<div className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<img
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain"
					/>

					<h3 className="text-secondary text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</div>
		</Tilt>
	)
}

export default ServiceCard
