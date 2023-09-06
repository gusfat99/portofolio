import React from "react"
import { Tilt } from "react-tilt"
import { ProjectType } from "../constants"
import { Github } from "../assets"

interface ProjectCardProps {
	item: ProjectType;
	shownDescFull: boolean;
	onReadMore: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, shownDescFull, onReadMore }) => {
	return (
		<Tilt className="xs:w-[350px] w-full">
			<div className="w-full rounded-[10px] bg-primary shadow-card flex justify-between gap-[12px] flex-col px-[8px] py-[8px]">
				<div className="w-full h-[185px] relative">
					<img
						src={item.image}
						alt={item.title}
						className={`w-full  h-full object-${item.fit} rounded-[10px]`}
					/>
					<div
						onClick={() => window.open(item.link, "_blank")}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center absolute top-1 right-1 cursor-pointer"
					>
						<img
							src={Github}
							alt="source code"
							className={`w-1/2 h-1/2 object-contain`}
						/>
					</div>
				</div>
				<h3 className={`text-secondary font-bold text-[16px]`}>
					{item.title}
				</h3>
				<div className="text-secondary min-h-[80px] text-[12px] max-w-3xl leading-[18px]">
					{shownDescFull ? (
						item.desc
					) : (
						<>
							{item.desc.substring(0, 125) + "..."}{" "}
							{item.desc.length > 125 ? (
								<div onClick={onReadMore} className="text-fb hover:cursor-pointer underline">
									read more
								</div>
							) : (
								<></>
							)}
						</>
					)}
				</div>
				<div className="flex flex-row gap-[3px] flex-wrap">
					{item.tags.map((tag) => (
						<span key={tag} className="text-warning text-[12px] ">{tag}</span>
					))}
				</div>
			</div>
		</Tilt>
	)
}

export default ProjectCard
