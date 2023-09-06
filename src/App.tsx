import { BrowserRouter } from "react-router-dom"
import {
	NavbarApp,
	Hero,
	About,
	Experiences,
	Projects,
	Educations,
	Contact,
	Tech,
} from "./components"
import { useEffect, useState, useRef } from "react"

function App() {
	const [active, setActive] = useState("")
	const [toggle, setToggle] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const aboutRef = useRef<any>(null)
	const contactRef = useRef<any>(null)
	const workRef = useRef<any>(null)

	useEffect(() => {
		const handleScroll = () => {
			let scrollTop = window.scrollY
			scrollTop = parseFloat(scrollTop.toFixed(0))
			const bias = 20

			if (scrollTop > 100) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}

			console.log("contactRef", contactRef?.current?.offsetTop)
			console.log("scrollTop", scrollTop+90)
			if (
				scrollTop >= aboutRef?.current?.offsetTop - bias &&
				scrollTop < workRef?.current.offsetTop - bias
			) {
				setActive("About")
			} else if (
				scrollTop >= workRef?.current?.offsetTop - bias &&
				scrollTop < contactRef.current.offsetTop - 90
			) {
				setActive("Work")
			} else if ((scrollTop + 90) >= contactRef?.current?.offsetTop) {
				setActive("Contact")
			} else {
				setActive("")
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<NavbarApp
						setActive={setActive}
						toggle={toggle}
						scrolled={scrolled}
						active={active}
						setToggle={setToggle}
					/>
					<Hero />
				</div>
				<About refs={aboutRef} />
				<Experiences />
				<Tech />
				<Projects refs={workRef} />
				<Educations />
				<Contact refs={contactRef} />
				<div className="bg-secondary h-[58px]  flex justify-center items-center">
					<span className="text-primary">
						@{new Date().getFullYear()} Bagus Fatwan Alfiat
					</span>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
