import {
	Backend,
	BimaProject,
	Css,
	EperdaProject,
	FlutixProject,
	GkpdProject,
	Html,
	Javascript,
	LmsProject,
	Mobile,
	PamjayaProject,
	SppirtProject,
	Typescript,
	WebApp,
	React,
	Redux,
	Tailwind,
	NodeJs,
	Git,
	Flutter,
	PHP,
	Jquery,
	MySql,
} from "../assets"

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
]

export const services = [
	{
		title: "Web Developer",
		icon: WebApp,
	},
	{
		title: "Android Developer",
		icon: Mobile,
	},
	{
		title: "Backend Developer",
		icon: Backend,
	},
]

export type ExperienceType = {
	title: string
	company: string
	descs: Array<string>
	date: string
}

export const experiences: ExperienceType[] = [
	{
		title: "Fullstack Developer",
		company: "AMA SALAM INDONESIA",
		descs: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
		date: "Sept 2021 - March 2023",
	},
	{
		title: "Freelancer",
		company: "",
		descs: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
		date: "Jan 2019 - Current",
	},
]

export type ProjectType = {
	title: string
	desc: string
	tags: Array<string>
	image: any
	link: string
	type: "site" | "github"
}

export const projects: ProjectType[] = [
	{
		title: "Sistem e-Perda Kemendagri",
		desc: "ePerda merupakan aplikasi yang bertujuan untuk mempercepat proses fasilitasi dari Rancangan Peraturan Daerah. Melalui aplikasi ePerda ini, diharapkan dapat lebih meningkatkan efektifitas dan efisiensi kerja, karena segala prosesnya berbasis digital.",
		tags: ["#php", "#codeigniter", "#boostrap", "#jquery"],
		image: EperdaProject,
		link: "http://eperda.kemendagri.go.id/",
		type: "site",
	},
	{
		title: "LMS Flevo Academie",
		desc: "Learning Management System (LMS) merupakan sistem yang dapat mengatur kegiatan belajar mengajar, mengatur kegiatan pembelajaran, mengatur kegiatan penilaian, mengatur kegiatan pengumpulan hasil belajar, dan mengatur kegiatan pengiriman hasil belajar kepada pihak luar. Project ini diperuntukan di negara Belanda",
		tags: ["#nodejs", "#react", "#mui", "#expressjs"],
		image: LmsProject,
		link: "https://flevoacademie.nl",
		type: "site",
	},
	{
		title: "Sistem GKPD BPOM (2019)",
		desc: "Sistem Gerakan Keamanan Pangan Desa BPOM RI",
		tags: ["#php", "#codeigniter", "#boostrap", "#jquery"],
		image: GkpdProject,
		link: "https://gkpd.pom.go.id/index.php",
		type: "site",
	},
	{
		title: "Sistem SPPIRT BPOM (2019)",
		desc: "Sistem SPPIRT",
		tags: ["#php", "#codeigniter", "#boostrap", "#jquery"],
		image: SppirtProject,
		link: "https://sppirt.pom.go.id/Home",
		type: "site",
	},
	{
		title: "BIMA",
		desc: "Sistem BIMA (Basis Informasi Penelitian dan Pengabdian kepada Masyarakat) memiliki tujuan untuk mendukung program penelitian dan pengabdian meningkatkan kesejahtaraan masyarakat. Banyak persoalan yang terjadi di masyarakat. Permasalahan dan persoalan yang muncul perlu diperoleh solusi. Pemecahan solusi dapat dipecahkan lewat jalur penelitian.",
		tags: ["#react", "#frontend", "#reduxsaga"],
		image: BimaProject,
		link: "https://bima.kemdikbud.go.id",
		type: "site",
	},
	{
		title: "e-Cotoursim",
		desc: "Membangun aplikasi android dengan React Native. e-Cotoursim merupakan sebuah inovasi karya kami untuk membantu pengelolaan konten dan memebrikan informasi seperti kuliner, wisata di Bogor Raya untuk para wisatawan yang saat ini masih tahap pengembangan.",
		tags: ["#react", "#reactNative", "#android"],
		image: FlutixProject,
		link: "https://github.com/gusfat99/flutixid",
		type: "github",
	},
	{
		title: "Eoffice PAMJAYA",
		desc: "Create mail disposition office system for PAMJAYA Institution.",
		tags: ["#nextjs", "#web", "#frontend"],
		image: PamjayaProject,
		link: "https://eoffice.pamjaya.co.id/",
		type: "site",
	},
	{
		title: "Flutix ID",
		desc: "Membuat aplikasi android simulasi pemesanan tiket bioskop secara online dengan Flutter yang terintegrasi dengan firebase",
		tags: ["#flutter", "#dart", "#mobile", "#firebase"],
		image: FlutixProject,
		link: "https://github.com/gusfat99/flutixid",
		type: "github",
	},
]

export type EducationType = {
	degree: string
	school_name: string
	school_location: string
	goals: Array<string>
	date: string
}

export const educations: EducationType[] = [
	{
		degree: "Bachelor of Engineering Technology: Teknik Informatika",
		school_name: "Bogor, Ibn Khaldun University",
		school_location: "Bogor, Indonesia",
		goals: [
			"Awarded [The first winner in the Gelar Inovasi Daerah Kab. Bogor 2020 for the Student Category]",
			"Awarded [Finalist, at UMN BIOS Hackathon Competition 2020]",
			"Head of Riset dan Teknologi from Himpunan Mahasiswa Teknik Informatika UIKAOrganization (2019)",
			"Graduated with a Bachelor of Informatics Engineering with a Cum Laude degree",
		],
		date: "2017 - 2021",
	},
	{
		degree: "High School : MIPA",
		school_name: "SMA Negeri 1 Ciampea",
		school_location: "Bogor, Indonesia",
		goals: [],
		date: "2014 - 2017",
	},
]

export type TechnologyType = {
	name: string;
	icon : any
};

export const technologies : TechnologyType[] = [
	{
		name: "HTML 5",
		icon: Html,
	},
	{
		name: "CSS 3",
		icon: Css,
	},
	{
		name: "JavaScript",
		icon: Javascript,
	},
	{
		name: "TypeScript",
		icon: Typescript,
	},
	{
		name: "React",
		icon: React,
	},
	{
		name: "Flutter",
		icon : Flutter,
	},
	{
		name: "Redux Toolkit",
		icon: Redux,
	},
	{
		name: "Tailwind CSS",
		icon: Tailwind,
	},
	{
		name: "PHP",
		icon : PHP,
	},
	{
		name: "Jquery",
		icon : Jquery,
	},
	{
		name: "Node.js",
		icon: NodeJs,
	},
	{
		name: "MySQL",
		icon: MySql,
	},
	{
		name: "git",
		icon: Git,
	},
	
]
