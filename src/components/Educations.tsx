import { VerticalTimeline } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { EducationCard } from "."
import { educations } from "../constants"
import { styles } from "../styles"

const Educations = () => {
	return (
		<div className="mt-40 mb-20">
			<span className="hash-span" id={"educations"}>
				&nbsp;
			</span>
			<p className={`${styles.sectionSubText} text-center`}>
				My Educations
			</p>
			<h2 className={`${styles.sectionHeadText} text-center`}>
				Educations
			</h2>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline lineColor="#f8b501" layout="1-column-left">
					{educations.map((education, index) => (
						<EducationCard
							key={`education-${index}`}
							education={education}
						/>
					))}
				</VerticalTimeline>
			</div>
		</div>
	)
}

export default Educations
