import { Link } from "react-router-dom"
import { styles } from "../styles"
import { useState, useEffect } from "react"
import { navLinks } from "../constants"

const NavbarApp = () => {
	const [active, setActive] = useState("")
	const [toggle, setToggle] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			if (scrollTop > 100) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])
	// console.log("scrolled", scrolled)
	return (
		<nav
			className={`${
				styles.paddingX
			} w-full flex items-center py-5 fixed top-0 z-20 ${
				scrolled ? "bg-primary" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("")
						window.scrollTo(0, 0)
					}}
				>
					<p className="text-secondary text-[18px] font-bold cursor-pointer flex ">
						Gusfat.Al &nbsp;
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title
									? "text-secondary font-medium"
									: "text-tertiary"
							} hover:text-secondary text-[18px] cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default NavbarApp
