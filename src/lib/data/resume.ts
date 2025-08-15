import { CircleDollarSign, CodeIcon, Github, HomeIcon, NotebookIcon, ShoppingCart, Database, Youtube, Smartphone, Lightbulb, Users, Globe, HandCoins, Server, Search, CloudUpload, Workflow, ChartCandlestick, Cloud, Network, Layers, Share2 } from 'lucide-svelte';
// Navbar Icons
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import PeerListSvg from '$lib/imgs/peerlist.svg';
import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import AmazonImg from '$lib/imgs/amazon.jpg';
import KamaiImg from '$lib/imgs/kamai.jpeg';
import RakutenImg from '$lib/imgs/rakuten.png';
import InfibeamImg from '$lib/imgs/infibeam.png';
import AngelsImg from '$lib/imgs/angels.jpg';
import HPImg from '$lib/imgs/hp.jpeg';
import PuneUniversityImg from '$lib/imgs/puneuniversity.png';
import DelhiUniversityImg from '$lib/imgs/delhiuniversity.png';
import AtomicImg from '$lib/imgs/atomic.png';
import ShopifyImg from '$lib/imgs/shopify.svg';
import NvidiaImg from '$lib/imgs/nvidia.png';
import SplunkImg from '$lib/imgs/splunk.svg';
import LimeImg from '$lib/imgs/lime.svg';
import MitreMediaImg from '$lib/imgs/mitremedia.png';
import BuildSpaceImg from '$lib/imgs/buildspace.jpg';
import WaterLooImg from '$lib/imgs/waterloo.png';
import LaurierImg from '$lib/imgs/laurier.png';
import IBImg from '$lib/imgs/ib.png';
import SelfieImg from '$lib/imgs/selfie.png';

// Your resume data
export let DATA = {
	name: 'Sachin Dalal',
	initials: 'SD',
	url: 'https://github.com/SikandarJODD',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Mumbai, India',
	locationLink: 'https://www.google.com/maps/place/mumbai',
	description:
		'Tech Entrepreneur, Co-founder of a publicly listed company, ex-India head at a Global Internet Giant, Angel Investor<br><span class="text-sm font-bold">Master\'s Computers; Bachelor\'s Maths (H) (Gold Medalist)</span>',
	summary:
		'A tech entrepreneur, ex-VP @ Rakuten, Cofounder @ Infibeam.com (IPO/Public) and ex-Amazon AWS techie, I bring <b class="highlight">20 years</b> of expertise in e-commerce, payments, high-performance distributed systems, investech/fintech while leading <span class="highlight">Product Development</span>, Operations & <span class="highlight">Offshore Dev Center Management</span>.',
	avatarUrl: SelfieImg,
	skills: [
		'Tech Leadership', 
		'Platform Engineering', 
		'E-commerce', 
		'Mobile App Development', 
		'SaaS', 
		'Payments Platforms', 
		'Start-ups', 
		'Offshore Dev Center Management', 
		'SOA',
		'Web Services', 
		'Program/Project Management', 
		'Agile Methodologies', 
		'Investech',
		'Distributed Systems', 
		'Fintech',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'sachin.j22@gmail.com',
		tel: '+123456789',
		linkedin: 'linkedin.com/in/dalalsachin',
		social: {
			GitHub: {
				name: 'GitHub',
				url: '#',
				// // icon: Icons.github,
				icon: Github,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: '#',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: '#',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			PeerList: {
				name: 'PeerList',
				url: '#',
				// // icon: Icons.x,
				icon: PeerListSvg,
				navbar: true,
				dark_icon: PeerListDarkSvg
			},
			// Youtube: {
			// 	name: 'Youtube',
			// 	url: 'https://github.com/SikandarJODD',
			// 	// // icon: Icons.youtube,
			// 	icon: Youtube,
			// 	navbar: true
			// },
			email: {
				name: 'Send Email',
				url: '#',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Kamai.app',
			href: '#',
			badges: [],
			location: 'Gurugram, India',
			title: 'Founder',
			logoUrl: KamaiImg,
			start: 'May 2021',
			end: 'Oct 2022',
			description:
				'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.'
		},
		{
			company: 'Rakuten',
			badges: [],
			href: '#',
			location: 'Bengaluru, India | Tokyo, Japan',
			title: 'VP, Engineering',
			logoUrl: RakutenImg,
			start: 'January 2021',
			end: 'April 2021',
			description:
				'Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.'
		},
		{
			company: 'Infibeam.com',
			href: '#',
			badges: [],
			location: 'Delhi, India',
			title: 'Cofounder',
			logoUrl: InfibeamImg,
			start: 'January 2018',
			end: 'April 2018',
			description:
				'Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.'
		},
		{
			company: 'Amazon',
			href: '#',
			badges: [],
			location: 'Bengaluru, India',
			title: 'Tech Lead',
			logoUrl: AmazonImg,
			start: 'January 2020',
			end: 'April 2020',
			description:
				'Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.'
		},
		{
			company: 'HP',
			href: '#',
			badges: [],
			location: 'Bengaluru, India',
			title: 'Software Developer',
			logoUrl: HPImg,
			start: 'January 2019',
			end: 'April 2019',
			description:
				'Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.'
		},
		{
			company: 'NextQuant.ai, Berfila.com, etc.',
			href: '#',
			badges: [],
			location: 'India',
			title: 'Angel Investor',
			logoUrl: AngelsImg,
			start: 'May 2017',
			end: 'August 2017',
			description:
				'Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener'
		}
	],
	education: [
		{
			school: 'Pune University',
			href: '#',
			degree: 'Masters Computer Science',
			logoUrl: PuneUniversityImg,
			start: '2020',
			end: '2023',
			badges: ['Among Top Rankers']
		},
		{
			school: 'Delhi University',
			href: 'https://uwaterloo.ca',
			degree: "Bachelor's Maths (Honours)",
			logoUrl: DelhiUniversityImg,
			start: '1997',
			end: '2020',
			badges: ['Gold Medalist']
		}
	],
	projects: [
		{
			title: 'Chat Collect',
			href: 'https://chatcollect.com',
			dates: 'Jan 2024 - Feb 2024',
			active: true,
			description:
				'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Stripe',
				'Shadcn UI',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://chatcollect.com',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				}
			],
			image: '',
			video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'
		},
		{
			title: 'Magic UI',
			href: 'https://magicui.design',
			dates: 'June 2023 - Present',
			active: true,
			description: 'Designed, developed and sold animated UI components for developers.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Stripe',
				'Shadcn UI',
				'Magic UI'
			],
			links: [
				{
					type: 'Website',
					href: 'https://magicui.design',
					// icon: <Icons.globe className="size-3" />,
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/magicuidesign/magicui',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: 'https://cdn.magicui.design/bento-grid.mp4'
		},
		{
			title: 'llm.report',
			href: 'https://llm.report',
			dates: 'April 2023 - September 2023',
			active: true,
			description:
				'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://llm.report',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				},
				{
					type: 'Source',
					href: 'https://github.com/dillionverma/llm.report',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: '',
			video: 'https://cdn.llm.report/openai-demo.mp4'
		},
		{
			title: 'Automatic Chat',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description:
				'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
			technologies: [
				'Next.js',
				'Typescript',
				'PostgreSQL',
				'Prisma',
				'TailwindCSS',
				'Shadcn UI',
				'Magic UI',
				'Stripe',
				'Cloudflare Workers'
			],
			links: [
				{
					type: 'Website',
					href: 'https://automatic.chat',
					icon: Globe
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: '',
			video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		}
	],
	experience: [
		{
			title: 'Angel Investor / Consultant',
			designation: 'NextQuant.ai, Berfila.com, NebulaIQ.ai etc',
			dates: 'Sep 2023 - Till Date',
			location: 'Gurugram, India',
			description:
				'▪ Active Investor and Consultant to Fintech, D2C & Saas based startups.',
			image: AngelsImg,
			links: [
			]
		},

		{
			title: 'Kamai.com',
			designation: 'Founder',
			dates: 'Nov 2021 - May, 2023',
			location: 'Gurugram, India',
			description:
				'▪ Founded an ultra-social stock trading platform connecting fin-influencers & new-age investors, with vision of agentic ai-driven wealth management services. \
<br>▪ Secured $700K angel funding for Product-Market Fit & GTM. \
<br>▪ Built & launched Kamai.app (Flutter) with chat rooms & analytics backend, leading a 12-member team (engineers, analysts). \
<br><i>(Platform shut down due to regulatory changes related to fin-influencers & also because of investor sentiment downturn post-SVB collapse.)</i>',
			image: KamaiImg,
			links: [
				{
					title: 'Startup',
					icon: Lightbulb,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Fund Raise',
					icon: CircleDollarSign,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Flutter App / Nodejs / MySQL',
					icon: Smartphone,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Investech',
					icon: HandCoins,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
			]
		},
		{
			title: 'Rakuten',
			designation: 'VP, Engineering',
			dates: 'June 2016 - Jul, 2017',
			location: 'Tokyo, Japan / Bengaluru, India',
			description:
'▪ Built & led India\'s Product dev team from scratch, scaling to 100+ engineers & managers within months. \
<br>▪ Remotely Managed & collaborated with teams & stakeholders across Japan, Singapore & US. \
<br>▪ Generated hundreds of millions in revenue by developing new features such as Abandoned Cart Recovery (by building Hadoop based big data analytics platform) and by optimising features such as Browsing & Purchase History, Coupons etc.',
			image: RakutenImg,
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Team Building',
					icon: Users,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Revenue',
					icon: CircleDollarSign,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Offshore Dev Center',
					icon: Globe,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Ecommerce',
					icon: ShoppingCart,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Big Data / Hadoop / Kafka',
					icon: Database,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
			]
		},
		{
			title: 'Infibeam Avenues',
			designation: 'Co-founder, Office of the CEO',
			dates: 'Jan 2009 - Jan, 2016',
			location: 'Bengaluru/Gurugram, India',
			description:
			'Held multiple leadership roles since the startup\'s early days till its pre-IPO days. \
<br>\
			<br>▪ Head, Infibeam Logistics Platform \
			<br> → Grew 400-member team across Product, Engineering, Business & Operations & remotely managed 12 last-mile logistics centers across India, handling tens of thousands shipments/day. \
			<br> → Launched SaaS platform (Shipdroid) that automated and seamlessly integrated thousands of micro ecommerce merchants with multiple logistics providers for automated shipping & fulfilment. \
			<br> → Optimized lead-times to achieve 1-day deliveries and executed India\’s first iPhone midnight launch deliveries, in 2014, setting new industry benchmarks. \
			<br> → Cut operational costs by 50% through automation, optimizing security, inventory tracking, and fraud prevention. \
			<br>\
			<br>▪ Head of Product, Technology & Operations of Books/Movies/Music- \
			<br> → Launched the largest online selection of books in India in 2009-11 with 20 million titles then.  \
			<br> → Led the development of CMS infrastructure & e-commerce stack (ruby/rails), integrating it with all major national/international vendors (Ingram/Alibris). \
			<br> → 1st in India (2010) to launch technology stack of E-books\’ ecommerce (Java) with ½ million titles &  \
			 DRM (Adobe Content Server) for Indian publishers.\
			<br> \
			<br>▪ Head of Product Search & Virality - \
			<br> → Rolled out field-collapse feature to Solr\'s faceted-search for the 1st time ever on an Indian website in 2010, coupled with user behavior metrics and ranking refinement, thus improving CTR and engagement/dwell-time exponentially. \
			<br> → Stayed ahead of competition by leveraging community support through forums to patch Solr code much ahead of time to launch cutting edge features such as field collapsing. \
			<br> → Growth hacked (SEO & virality) Infibeam to millions of hits/month in 0 marketing budget.',			
			image: InfibeamImg,
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Startup',
					icon: Lightbulb,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'IPO',
					icon: ChartCandlestick,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Team Building',
					icon: Users,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Revenue',
					icon: CircleDollarSign,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Ecommerce',
					icon: ShoppingCart,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'SaaS',
					icon: CloudUpload,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Search / SEO / Conversion / Virality',
					icon: Search,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Workflow Automation',
					icon: Workflow,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Java / Ruby Rails',
					icon: Layers,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'Big Data / Mongodb / Redis',
					icon: Database,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
			]
		},
		{
			title: 'Amazon',
			designation: 'Tech Lead',
			dates: 'Apr 2005 - Jan, 2009',
			location: 'Bengaluru, India',
			description:
				'▪ Managed \‘Checkout by Amazon\’ India team while collaborating with remote US team for 3 months before exiting. Role - Product design and Scrum manager. \
<br>\
<br>▪ One of the first few hires of Amazon.com India center, Amazon Webservices division (AWS). Designed & developed core components (on java) of highly available transaction-based distributed service called FPS (Flexible Payments Service) that supported millions of transactions throughput & integrated it across multiple services of Amazon web-services such as S3, SQS, notification, monitoring, analytics, data-warehousing etc. \
<br>\
<br>▪ Slashed AWS APIs latencies by a massive 50% through deep root cause analysis & A/B testing while collaborating with remote team in Dublin/Ireland. Was awarded \'E-award\' for the same. \
<br>\
<br>▪ Was awarded with \‘Amazon.com Trainer\’ award in 2007.',
			image: AmazonImg,
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'AWS',
					icon: CloudUpload,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/justinmichaud/htn2017'
				},
				{
					title: 'Large Scale Distributed Systems',
					icon: Network,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/RTSPClient'
				},
				{
					title: 'Java / Mysql / Oracle',
					icon: Layers,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
				{
					title: 'SOA',
					icon: Share2,
					// icon: <Icons.github className="h-4 w-4" />,
					href: '#'
				},
			]
		},
		{
			title: 'HP',
			designation: 'Software Developer	',
			dates: 'Jul 2003 - Apr, 2005',
			location: 'Bengaluru, India',
			description:
				'▪ Migrated OVPA (servers’ system performance product) to ‘virtualization’ server technology (team of 4), successfully executing $1 million deal for major international banks by HP. \
				<br>▪ Was conferred E-award in 2004.',
			image: HPImg,
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
			]
		}

	]
};
