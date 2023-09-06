import { Link } from "react-router-dom"
import { Close, Menu } from "../assets"
import { navLinks } from "../constants"
import { styles } from "../styles"

interface NavbarAppPropos {
	setActive: (arg1: string) => void;
	setToggle: (arg1: boolean) => void;
	active: string
	scrolled: boolean
	toggle: boolean
}

const NavbarApp: React.FC<NavbarAppPropos> = ({
	setActive,
	setToggle,
	active,
	scrolled,
	toggle,
}) => {
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
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? Close : Menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title
											? "text-primary"
											: "text-tertiary"
									}`}
									onClick={() => {
										setToggle(!toggle)
										setActive(nav.title)
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavbarApp
