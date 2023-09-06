import { styles } from "../styles"
import MySelf from "../assets/myself.png"
import { ButtonSocmed } from "."
import { FB, Github, Github2, IG, Linkin } from "../assets"

const Hero = () => {
	return (
		<section
			className={`relative w-full h-[624px] bg-gradient-to-b from-transparent to-primary mx-auto`}
		>
			<div
				className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-warning" />
					<div className="w-1 sm:h-80 h-40 warning-gradient" />
				</div>
				<div className="flex flex-col gap-5">
					<h1 className={`${styles.heroHeadText}`}>
						Hi, I'm{" "}
						<span className="text-secondary">
							Bagus Fatwan Alfiat
						</span>
					</h1>
					<p className={`${styles.heroSubText} text-white-100`}>
						I am a Frontend, Backend and Mobile{" "}
						<br className="sm:block hidden" />
						Application Developer from Bogor
					</p>
					<div className="flex flex-row gap-5">
						<ButtonSocmed
							icon={IG}
							color="ig"
							className="hover:border-ig"
							link="https://www.instagram.com/bagusfatwan_/"
						/>
						<ButtonSocmed
							icon={FB}
							color="fb"
							className="hover:border-fb"
							link="https://www.facebook.com/sikece.haha/"
						/>
						<ButtonSocmed
							icon={Linkin}
							color="Linkin"
							className="hover:border-linkedin"
							link="https://www.linkedin.com/in/bagus-fatwan-alfiat-515505176/"
						/>
						<ButtonSocmed
							icon={Github2}
							color="Github"
							className="hover:border-black"
							link="https://github.com/gusfat99"
						/>
					</div>
					<div>
						<button
							onClick={() => {
								window.open(
									"https://drive.usercontent.google.com/download?id=1j5cL5L3vExQjL4_tANUcebEdkrXD4xgA&export=download&authuser=0&confirm=t&uuid=54bff80f-675b-4de1-b2b9-ec76f01d5af5&at=APZUnTV8yDZfH5eS0oTdIDIXPnIm:1693922228231",
									"_blank"
								)
							}}
							className="border-secondary hover:bg-secondary hover:text-primary border text-secondary rounded-lg p-[8px]"
						>
							Download CV
						</button>
					</div>
				</div>
				<div className="w-1/3 h-330 overflow-hidden hidden md:block">
					<img src={MySelf} alt="my-self" className="w-full h-auto" />
				</div>
			</div>

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-warning flex justify-center items-start p-2"></div>
				</a>
			</div>
		</section>
	)
}

export default Hero
