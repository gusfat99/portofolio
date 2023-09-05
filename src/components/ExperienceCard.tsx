import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { ExperienceType } from "../constants"
import { Laptop } from "../assets"

interface ExperienceCardProps {
	experience: ExperienceType
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#3A3F47",
				color: "#E3E8EB",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #3A3F47" }}
			date={experience?.date}
			dateClassName="text-secondary"
			iconStyle={{
				background: "#f8b501",
			}}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={Laptop}
						alt={"works"}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">
					{experience.title}
				</h3>
				<p
					className="text-warning text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.descs.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	)
}

export default ExperienceCard
