import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Graduation } from "../assets"
import { EducationType } from "../constants"

interface EducationCardProps {
	education: EducationType
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#3A3F47",
				color: "#E3E8EB",
         }}
         
			contentArrowStyle={{ borderRight: "7px solid  #3A3F47" }}
         date={education?.date}
			dateClassName="text-primary"
			iconStyle={{
				background: "#f8b501",
			}}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={Graduation}
						alt={"graduation"}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
         
		>
			<div>
				<h3 className="text-primary text-[24px] font-bold">
					{education.degree}
				</h3>
				<p
					className="text-warning text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{education.school_name} - {education.school_location}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{education.goals.map((goal, index) => (
					<li
						key={`education-goal-${index}`}
						className="text-primary text-[14px] pl-1 tracking-wider"
					>
						{goal}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	)
}

export default EducationCard
