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

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<NavbarApp />
					<Hero />
				</div>
				<About />
				<Experiences />
				<Tech />
				<Projects />
				<Educations />
				<div className="relative z-0">
					<Contact />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
