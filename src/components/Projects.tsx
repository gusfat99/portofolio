import { ProjectCard } from "."
import { projects } from "../constants"
import { styles } from "../styles"
import { useState } from "react"

interface ProjectsProps {
	refs: any
}

const Projects: React.FC<ProjectsProps> = ({ refs }) => {
	const [shownReadMoreIndex, setShownReadMoreIndex] = useState<null | number>(
		null
	)
	const handleReadMore = (index: number) => {
		setShownReadMoreIndex(index)
	}

	return (
		<div
			ref={refs}
			className={`mt-40  max-w-7xl mx-auto ${styles.paddingX}`}
		>
			<span className="hash-span" id={"work"}>
				&nbsp;
			</span>
			<p className={`${styles.sectionSubText} `}>My work</p>
			<h2 className={`${styles.sectionHeadText} `}>Projects.</h2>

			<div className="w-full flex">
				<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					Following projects showcases my skills and experience
					through real-world examples of my work. Each project is
					briefly described with links to code repositories and live
					demos in it. It reflects my ability to solve complex
					problems, work with different technologies, and manage
					projects effectively.
				</p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						onReadMore={() => handleReadMore(index)}
						shownDescFull={shownReadMoreIndex === index}
						item={project}
					/>
				))}
			</div>
		</div>
	)
}

export default Projects
