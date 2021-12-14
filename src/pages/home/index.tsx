import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'


const navigation = [
    { name: 'Technologies', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Blog', href: '#' },
]
const ourtech=[

    {
        id:"1",
        img:"https://www.parity.io/static/0834012136fa4e447d987fe83390868e/e3509/logo-coinbase.png"

    },

    {
        id:"2",
        img:"https://www.parity.io/static/810a07b1a0d67839e38d05e755bdb975/e3509/logo-etherscan.png"

    },

    {
        id:"3",
        img:"https://www.parity.io/static/ad4356e9aba424265798f12170a83db9/e3509/logo-infura.png"

    },

    {
        id:"4",
        img:"https://www.parity.io/static/4a04a323dae933f308b4d6b72612eae3/3ed5d/logo-google.png"

    },

    {
        id:"5",
        img:"https://www.parity.io/static/d606c20ec38a80a106dcab9f83238954/3ed5d/logo-kaspersky.png"

    },

    {
        id:"6",
        img:"https://www.parity.io/static/39e42a56ba90d46b2eb237861bc671d6/e3509/logo-kraken.png"

    },

    {
        id:"7",
        img:"https://www.parity.io/static/e776ef7132d62915f2e409422b4f61bf/3ed5d/logo-microsoft.png"

    },

    {
        id:"8",
        img:"https://www.parity.io/static/65ef45d71f51826aa4096578f0e5fbc4/3ed5d/logo-mycrypto.png"

    },

    {
        id:"9",
        img:"https://www.parity.io/static/dcc635911d5f75acca01a005b3d9807d/3ed5d/logo-wfp.png"

    },
]
const news=[
    {
        href:"",
        img:"https://www.parity.io/images/substrate-builders-program-december-24.png",
        h1:"December 07, 2021",
        h2:"Substrate Builders Program Milestone Update: December 2021",
    },
    {
        href:"",
        img:"https://www.parity.io/images/subspace-2-12.png",
        h1:"November 30, 2021",
        h2:"Subspace: Archiving Kusama with OnFinality",
    },
    {
        href:"",
        img:"https://www.parity.io/images/sbp-nov-update-24.png",
        h1:"November 16, 2021",
        h2:"Substrate Builders Program Milestone Update: November 2021",
    },
]
const toend=[
    {
        title:"COMPANY",
        h1:"About Matataki",
        h1url:"#",
        h2:"Manual",
        h2url:"#",
        h3:"Update record",
        h3url:"#",
        h4:"Any feedback",
        h4url:"#"
    },
    {
        title:"TECHNOLOGIES",
        h1:"Playerlink",
        h1url:"https://www.playerlink.io/",
        h2:"Matters",
        h2url:"",
        h3:"Maskbook",
        h3url:""
    },
    {
        title:"SOLUTIONS",
        h1:"Discord",
        h1url:"https://discord.gg/gJuDTcdUjj",
        h2:"Twitter",
        h2url:"#",
        h3:"Instagram",
        h3url:"#",
        h4:'Medium',
        h4url:""
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <header>
                <Popover className="relative ">
                    <div
                        className="flex  fixed z-40 inset-x-0 bg-black  bg-opacity-75 justify-between items-center p-3 md:p-3 sm:px-6 md:justify-start md:space-x-10 lg:px-32 ">
                        <div className="flex justify-start lg:w-0 lg:flex-auto">
                            <a href="home">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-10 w-auto"
                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918369386992128010/viewfile.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex -mr-2 -my-2 md:hidden">
                            <Popover.Button
                                className="bg-white rounded-md p-2  inline-flex items-center  justify-center text-black text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                            </Popover.Button>

                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10  ">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href}
                                   className="text-xl rounded-lg p-2 font-medium text-gray-50 md:text-sm xl:text-xl active:bg-red-50 hover:bg-blue-500">
                                    {item.name}
                                </a>
                            ))}
                        </Popover.Group>
                        <div
                            className="hidden md:flex text-gray-50 items-center justify-end md:flex-1  text-2xl ">
                            <a className="mr-5 hover:text-blue-400" href=""><i className="fa fa-twitter " aria-hidden="true"></i></a>
                            <a className="mr-5 hover:text-blue-400" href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>
                            <a className="mr-5 hover:text-blue-400" href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>

                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div
                                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 ">
                                    <div className="flex items-center justify-between ">
                                        <div>
                                            <a href="home">
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367494304038982/viewfile.png"
                                                    alt="Workflow"
                                                /></a>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5 ">
                                    {navigation.map((item) => (
                                        <div key={item.name} className="m-3   text-center ">
                                            <a
                                                href={item.href}
                                                className="p-0.5  text-2xl rounded-lg bg-indigo-300 font-medium text-gray-50  "
                                            >
                                                {item.name}
                                            </a></div>
                                    ))}

                                    <div className="mt-6">
                                        <p className="mt-6 text-center text-xl font-medium text-gray-500">
                                            <a className="m-5" href=""><i className="fa fa-twitter"
                                                                          aria-hidden="true"></i></a>
                                            <a className="m-5" href=""><i className="fa fa-telegram"
                                                                          aria-hidden="true"></i></a>
                                            <a className="m-5" href=""><i className="fa fa-envelope-o"
                                                                          aria-hidden="true"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>

            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
                        <div className=" mx-auto pt-14 md:pt-16 ">
                            <div className="relative   sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://img.tukuppt.com/bg_grid/00/03/39/trTD0kQKQJ.jpg!/fh/350"
                                        alt="People working on laptops"
                                    />

                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-40 lg:px-56">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl ">
                                        <span className="block text-black  font-light">Blockchain Infrastructure for the Decentralised Web</span>
                                    </h1>
                                    <p className="mt-6 text-center text-2xl   font-extralight">
                                        From the Substrate blockchain framework to Polkadot, the sharded protocol
                                        enabling blockchains to operate seamlessly together at scale, Parity builds the
                                        foundation of Web 3.0.
                                    </p>
                                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto  ">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white transform duration-500 hover:shadow-2xl hover:-translate-y-1 sm:px-8"
                                            >
                                                LEARN MORE ABOUT PARITY
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* two*/}
                    <div className="bg-gray-100 py-20 px-2 xl:px-44">
                        <div className="flex ">
                            <img className="w-5/12 h-3/5 hidden md:flex"
                                 src="https://www.parity.io/static/intro-image-1-9cbc671d6094f647358aae6c64513c5f.jpg"
                                 alt=""/>
                            <div className="px-6 font-light lg:w-6/12 xl:pt-5   ">
                                <h1 className="text-xl text-black md:text-3xl font-normal md:font-light">Laying the
                                    foundation for a better web</h1>
                                <h2 className="py-6 text-lg ">The internet is too important to billions of people for it
                                    to be at the mercy of a few powerful companies.</h2>
                                <h3>We are developing the technology to disrupt centralised online services and enable
                                    institutional innovation.</h3>
                                <div className="w-12 border-b border-blue-600 my-10"></div>
                                <h4 className="font-normal text-gray-500 text-sm leading-relaxed">What if we no longer
                                    had to route our interactions through centralised services? What if data breaches
                                    were a remnant of an old flawed infrastructure? Each piece of Parity s technology is
                                    a step towards a society run on peer-to-peer networks instead of by a handful of
                                    corporations.</h4>
                            </div>
                        </div>
                        <img className="my-20  md:hidden"
                             src="https://www.parity.io/static/intro-image-2-39037e7654641ddd371e25e62b567df7.jpg"
                             alt=""/>
                        <div className="flex md:mt-32">
                            <div className="px-6 font-light lg:w-6/12 xl:pt-5   ">
                                <h1 className="text-xl  md:text-3xl  text-black font-normal md:font-light">
                                    Groundbreaking distributed tech.<br/> We are pioneers in:

                                </h1>
                                <h2 className="my-6 text-lg ">
                                    <div>— On-chain governance protocol upgrades</div>
                                    <div>— Proof-of-Authority consensus</div>
                                    <div>— Private Ethereum transactions</div>
                                    <div>— Warp sync and pruning</div>
                                    <div>— Rust and Wasm in blockchain</div>
                                </h2>

                                <div className="w-12 border-b border-blue-600 my-10"></div>
                                <h3 className="font-normal text-gray-500 text-sm leading-relaxed">Nearly all of our work
                                    is provided open source. Community contributors are a crucial part of development.
                                    Come build technology for a fairer society with us.</h3>
                            </div>
                            <img className="w-5/12 h-3/5 hidden md:flex"
                                 src="https://www.parity.io/static/intro-image-2-39037e7654641ddd371e25e62b567df7.jpg"
                                 alt=""/>

                        </div>
                    </div>
                    {/*three*/}
                    <div>
                        <div className="md:flex xl:h-96 overflow-hidden">
                            <img className="md:w-6/12 xl:w-6/12 "
                                 src="https://www.parity.io/static/world-food-programme-0588440cd84fbbb137d3a80c4261f1d1.jpg"
                                 alt=""/>
                            <div className="md:w-6/12 xl:w-8/12 p-6 xl:px-32 font-light">
                                <h1 className="text-xs my-6">BUILD ON PARITY TECH</h1>
                                <h2 className="text-2xl  text-black font-normal">106,000 refugees aided with Parity
                                    blockchain tech</h2>
                                <h3 className="text-gray-500 text-xl my-6">Parity developed blockchain technology for
                                    the UN World Food Programme to make the transfer of cash assistance faster, cheaper,
                                    and more secure. By the end of 2018, the technology will help over 106,000 refugees
                                    receive assistance.</h3>
                                <a href="" className="text-xs text-red-400 font-semibold">Read more »</a>

                            </div>
                        </div>
                    </div>
                    {/*four*/}
                    <div className="bg-gray-200 px-6 py-20 xl:px-36">
                        <div className="text-center text-xl md:text-3xl xl:mx-64">
                            <h1>Open-source technologies for a society run on peer-to-peer networks</h1>
                        </div>
                        <div className="md:flex   mt-24">
                            {/*1*/}
                            <div className="bg-white  text-center md:w-1/3  hover:shadow-2xl transition duration-500 rounded-lg">
                                <a href="">
                                    <div className="py-10 px-4 ">
                                        <div className="flex justify-center">
                                            <img className="h-16 w-48"
                                                 src="https://www.parity.io/static/d4b24e21224e974e233fe7789acaff33/substrate-logo-light.svg"
                                                 alt=""/></div>
                                        <h1 className="py-6">Substrate</h1>
                                        <h2>
                                            A framework for building blockchains and spawning decentralized innovation.
                                        </h2>
                                    </div>
                                </a>
                            </div>

                            {/*2*/}
                            <div className="bg-white my-6 md:my-0 md:mx-6 text-center md:w-1/3  hover:shadow-2xl transition duration-500 rounded-lg">
                                <a href="">
                                    <div className="py-10 px-4 ">

                                        <div className="flex justify-center">
                                            <img className="h-16 w-auto"
                                                 src="https://www.parity.io/static/8fef9f82619085908b484bd9f0036d91/icon-polkadot.svg"
                                                 alt=""/></div>
                                        <h1 className="py-6">Polkadot</h1>
                                        <h2>
                                            The next-generation platform for connecting independent blockchains
                                            together.
                                        </h2>
                                    </div>
                                </a>
                            </div>
                            {/*3*/}
                            <div  className="bg-white  text-center md:w-1/3  hover:shadow-2xl transition duration-500 rounded-lg">
                                <a href="">
                                    <div className="py-10 px-4 ">
                                        <div className="flex justify-center">
                                            <img className="h-16 w-auto"
                                                 src="https://www.parity.io/static/6050b977b06c4e5a13d753e50a79182a/icon-parity-signer.png"
                                                 alt=""/></div>
                                        <h1 className="py-6">Parity Signer</h1>
                                        <h2>
                                            A secure offline wallet for your mobile device
                                        </h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-10   flex justify-center">
                            <a
                                href="#"
                                className="bg-yellow-200 text-black flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm   transform duration-500 hover:shadow-2xl hover:-translate-y-1 sm:px-8"
                            >
                                See All Technologies
                            </a>
                        </div>
                    </div>
                    {/*our tech*/}
                    <div className="bg-gray-100">
                        <div className="max-w-7xl mx-auto py-16 px-1 sm:px-6 md:px-12 xl:px-60">
                            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                Some of the organizations using our tech
                            </p>
                            <div className="flex flex-wrap mt-12 justify-center opacity-50 ">
                                {ourtech.map((item)=>(

                                    <div key={item.id} className="w-24 mx-3 my-1 h-auto gatsby-image-wrapper">
                                        <img src={item.img} alt=""/>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                    {/*team*/}
                    <div className="bg-gray-200 px-6 py-20 xl:px-96 text-center">
                        <div>
                            <h1 className="text-3xl">Technology developed by a team of the world’s top blockchain engineers</h1>
                            <h2 className="text-gray-600 my-6 text-lg font-light">60+ developers across fifteen countries. A no-bullshit culture of getting stuff done.</h2>
                            <h3 className="text-blue-400 hover:underline"><a href="">Join the team.</a></h3>
                        </div>
                        <div>
                            <div className="mt-10   flex justify-center">
                                <a
                                    href="#"
                                    className="bg-blue-400 text-white flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm   transform duration-500 hover:shadow-2xl hover:-translate-y-1 sm:px-8"
                                >
                                    LEARN MORE ABOUT THE TEAM
                                </a>
                            </div>

                        </div>
                    </div>
                    {/*Five*/}
                    <div className="bg-gray-300 px-6 py-20 xl:px-48">
                        <div className=" text-xl ">
                            <h1>From the blog</h1>
                        </div>
                        <div className="md:flex    mt-24">
                            {/*1*/}
                            {news.map((item)=>(
                            <div key={item.h1} className="bg-white my-6 md:my-0 md:mr-6  md:w-1/3  hover:shadow-2xl transition duration-500 rounded-lg">
                                <a href={item.href}>
                                    <div className="">
                                        <div className="flex justify-center">
                                            <img className="rounded-t-lg"
                                                 src={item.img}
                                                 alt=""/></div>
                                        <div className="px-4 pt-3">
                                        <h1 className="text-gray-600">{item.h1}</h1>
                                        <h2 className="text-base py-3">
                                            {item.h2}
                                        </h2>
                                            <h3 className="pb-6 text-red-400 hover:underline">Read More</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>))}

                        </div>
                        <div className="text-center">
                            <div className="mt-20 mb-6 text-4xl font-light">
                                How can Parity help your project?
                            </div>
                            <div className="   flex justify-center">
                                <a
                                    href="#"
                                    className="bg-yellow-200 text-black flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm   transform duration-500 hover:shadow-2xl hover:-translate-y-1 sm:px-8"
                                >
                                    See our Technologies
                                </a>
                            </div>
                            <div className="mt-3 text-xs flex justify-center"><div>or check out Parity`s </div>
                                <div className="ml-1 text-red-400 underline"><a href="">custom solutions</a></div></div>

                        </div>
                        <div className="text-center pt-16 ">
                        <div className="font-extrabold">
                            Subscription
                        </div>
                        <div className="text-xl md:text-4xl mt-6 font-extrabold">
                            Stay up to date on Web3Games
                        </div>
                        <div className="mt-5 md:flex justify-center">
                            <input type="text"
                                   className="bg-gray-600 text-lg rounded-full p-3 md:p-2  w-9/12 lg:w-8/12 xl:w-5/12 border hover:border-indigo-500 "
                                   placeholder="Email"/>
                            <p className="flex justify-center text-center text-base font-medium text-gray-500">
                                <button  className="text-lg whitespace-nowrap border-2 border-yellow-400 inline-flex items-center md:-ml-44 md:mt-1 md:mb-1 mt-6 py-3 px-10 justify-center md:px-10  border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-white transform duration-500 hover:shadow-2xl "
                                >
                                    Subscribe
                                </button>
                            </p>
                        </div>
                            </div>

                    </div>

                    {/* Logo cloud */}

                    {/*end*/}
                    <div className="bg-gray-100">
                        <div className="pt-12 pb-12 px-8 py-16 lg:px-36 xl:px-48 bg-gray-800">
                            <div className="flex justify-center mb-16">
                                <img
                                    className="w-72  "
                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367143777673216/viewfile.png"
                                    alt=""/>
                            </div>
                            <div className="md:flex md:justify-between">
                                {toend.map((ends) => (
                                    <div key={ends.title} className="">
                                        <div className="mb-6">
                                            <h1 className="flex justify-center text-xl font-bold text-gray-200 mb-4">
                                                {ends.title}
                                            </h1>
                                            <h2 className="">
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h1url}>{ends.h1}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h2url}>{ends.h2}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h3url}>{ends.h3}</a></p>
                                                <p className="flex mb-2 justify-center text-gray-400 hover:text-gray-50 delay-75">
                                                    <a href={ends.h4url}>{ends.h4}</a></p>

                                            </h2>
                                        </div>
                                    </div>))}
                                <div>
                                    <h1 className="flex justify-center text-xl font-bold text-gray-200 mb-4">
                                        CONTACT</h1>
                                    <div className="text-center grid text-white text-2xl  grid-cols-4">
                                        <a className="mx-3 mb-2 hover:text-blue-400"
                                           href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>

                                        <a className="mx-3 mb-2  hover:text-blue-400"
                                           href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>

                                        <a className="mx-3 mb-2  hover:text-blue-400"
                                           href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>

                                        <a className="mx-3 mb-2  hover:text-blue-400"
                                           href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>


                                    </div>


                                </div>

                            </div>
                            <p className=" text-center p-5 text-left mt-16 text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                ©2021 CRYPTOFISHING, A PLAYERLINK COMPANY. All RIGHTS RESERVED.
                            </p>

                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    );
}
