import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"
import { Call, Email, Location } from "../assets"
import { styles } from "../styles"
import { useState, useRef } from "react"

interface ContactProps {
	refs: any
}

const Contact: React.FC<ContactProps> = ({ refs }) => {
	const formRef: any = useRef()
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	})

	const [loading, setLoading] = useState<boolean>(false)

	const handleChange = (e: any) => {
		const { target } = e
		const { name, value } = target

		setForm({
			...form,
			[name]: value,
		})
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		setLoading(true)

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Bagus Fatwan Alfiat",
					from_email: form.email,
					to_email: "fatwanbagus.99@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				(_res: EmailJSResponseStatus) => {
					setLoading(false)
					alert(
						"Thank you. I will get back to you as soon as possible."
					)

					setForm({
						name: "",
						email: "",
						message: "",
					})
				},
				(error: Error) => {
					setLoading(false)
					console.error(error)

					alert("Ahh, something went wrong. Please try again.")
				}
			)
	}

	return (
		<div className={` bg-tertiary`}>
			<div
				className={`max-w-7xl mx-auto ${styles.paddingX} ${styles.paddingY}`}
			>
				<span className="p-0" ref={refs} id={"contact"} />

				<div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
					<div className="bg-secondary p-8 rounded-2xl">
						<h1 className={`${styles.heroHeadText} text-primary`}>
							Contact
						</h1>
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className=" flex flex-col gap-8"
						>
							<label className="flex flex-col">
								<span className="text-primary font-medium mb-4">
									Your Name
								</span>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									placeholder="What's your good name?"
									className="bg-tertiary py-4 px-6 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium"
								/>
							</label>
							<label className="flex flex-col">
								<span className="text-white font-medium mb-4">
									Your email
								</span>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									placeholder="What's your web address?"
									className="bg-tertiary py-4 px-6 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium"
								/>
							</label>
							<label className="flex flex-col">
								<span className="text-white font-medium mb-4">
									Your Message
								</span>
								<textarea
									rows={7}
									name="message"
									value={form.message}
									onChange={handleChange}
									placeholder="What you want to say?"
									className="bg-tertiary py-4 px-6 placeholder:text-primary text-white rounded-lg outline-none border-none font-medium"
								/>
							</label>

							<button
								disabled={loading ?? false}
								type="submit"
								className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold"
							>
								{loading ? "Sending..." : "Send"}
							</button>
						</form>
					</div>
					<div className="flex gap-[10px] flex-col ">
						<div className="p-[10px] flex flex-row gap-2 rounded-2xl bg-secondary">
							<div className="w-[48px] rounded-full p-[8px] bg-primary">
								<img
									src={Call}
									alt="call"
									className="w-full object-contain"
								/>
							</div>
							<div className="flex-col flex">
								<span className="text-primary font-medium">
									Phone
								</span>
								<span className="text-primary font-medium">
									+6285156742490
								</span>
							</div>
						</div>
						<div className="p-[10px] flex flex-row gap-2 rounded-2xl bg-secondary">
							<div className="w-[48px] rounded-full p-[8px] bg-primary">
								<img
									src={Email}
									alt="call"
									className="w-full object-contain"
								/>
							</div>
							<div className="flex-col flex">
								<span className="text-primary font-medium">
									Email
								</span>
								<span className="text-primary font-medium">
									fatwanbagus.99@gmail.com
								</span>
							</div>
						</div>
						<div className="p-[10px] flex flex-row gap-2 rounded-2xl bg-secondary">
							<div className="w-[48px] align-middle flex rounded-full p-[8px] bg-primary">
								<img
									src={Location}
									alt="call"
									className="w-full object-contain"
								/>
							</div>
							<div className="flex-col flex">
								<span className="text-primary font-medium">
									Address
								</span>
								<span className="text-primary font-medium text-[14px]">
									Pamijahan, Kab. Bogor, Jawa Barat -
									Indonesia
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
