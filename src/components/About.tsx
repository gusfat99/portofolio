import { ServiceCard } from "."
import { services } from "../constants"
import { styles } from "../styles"

const About = () => {
	return (
		<div className={`mt-20 max-w-7xl mx-auto ${styles.paddingX}`}>
			 <span className='hash-span' id={"about"}>
          &nbsp;
        </span>
			<p className={styles.sectionSubText}>Introduction</p>
			<h2 className={styles.sectionHeadText}>Overview.</h2>
			<p
				className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}
			>
				Software development professional with experience in developing and designing web applications using HTML, CSS, JavaScript, ReactJs/Nextjs, PHP,Codeigniter, Laravel/Lumen, and Node.js/Express.js. Adept at developing and deploying complex backend systems, web ervices and databases and also Mobile Apps using (React Native or Flutter).
			</p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						title={service.title}
						icon={service.icon}
					/>
				))}
			</div>
		</div>
	)
}

export default About
