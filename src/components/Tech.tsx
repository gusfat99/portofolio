import { BallCanvas } from "."
import { technologies } from "../constants"

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap mt-40  max-w-7xl mx-auto justify-center gap-10">
			{technologies.map((technology) => (
				<div className="w-28 h-28" key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	)
}

export default Tech
