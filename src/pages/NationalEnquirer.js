import { OpenInNew } from '@mui/icons-material';
import DesignProcess from '../assets/CaseStudy/NationalEnquirer/DesignProcess.jpg'
import Persona from '../assets/CaseStudy/NationalEnquirer/Persona.jpg'
import InformationArchitecture from '../assets/CaseStudy/NationalEnquirer/InformationArchitecture.jpg'
import LowFidelity from '../assets/CaseStudy/NationalEnquirer/LowFidelity.jpg'
import MidFidelity from '../assets/CaseStudy/NationalEnquirer/MidFidelity.jpg'
import Usability1 from '../assets/CaseStudy/NationalEnquirer/Usability1.jpg'
import Usability2 from '../assets/CaseStudy/NationalEnquirer/Usability2.jpg'
import StickerSheet from '../assets/CaseStudy/NationalEnquirer/StickerSheet.jpg'
import HighFidelity from '../assets/CaseStudy/NationalEnquirer/HighFidelity.jpg'
import Final1 from '../assets/CaseStudy/NationalEnquirer/Final1.jpg'
import Final2 from '../assets/CaseStudy/NationalEnquirer/Final2.jpg'
import Final3 from '../assets/CaseStudy/NationalEnquirer/Final3.jpg'
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React from 'react';
import Footer from '../components/Footer';

//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function NationalEnquirer() {
    return (
        <>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex justify-center items-center">
                <div className="text-3xl font-extrabold text-center pt-10">
                    National Enquirer Redesign
                    <button
                        onClick={() => window.open('https://www.figma.com/proto/lrb1MNt7l3ECvOv4b6AH4Z/National-Enquirer-Redesign?type=design&node-id=278-885&scaling=scale-down&page-id=278%3A5&starting-point-node-id=278%3A16&mode=design&t=sEJ49O3kQ4AfU00s-1', "_blank", "noopener noreferrer")}
                    >
                        <OpenInNew className="ml-1 hover:text-secondary" />
                    </button>
                </div>
            </motion.div >

            {/* Container */}
            <div
                class="container mx-auto p-10 grid md:grid-cols-2 sm:grid-cols-1 gap-4 lg:justify-items-center sm:justify-items-start my-5">
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h2 class="text-1xl font-bold py-2">PROJECT OBJECTIVE</h2>
                    <p>The National Enquirer, a tabloid magazine recently acquired by a brand acquisition company, known for its controversial history, now needs a modern redesign for better reader engagement.</p>
                    <br></br>
                    <p>The objective is to enhance user satisfaction and experience through a more accessible and user-friendly design.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.1 }}>
                    <h2 class="text-1xl font-bold py-2">ROLE</h2>
                    <ul class="list-disc ml-5">
                        <li>UX/UI Design</li>
                        <li>User Research/Testing</li>
                        <li>Information Architecture</li>
                        <li>Wireframes/Prototyping</li>
                    </ul>
                    <br></br>
                    <h2 class="text-1xl font-bold py-2">TOOLS</h2>
                    <ul class="list-disc ml-5">
                        <li>Figma</li>
                        <li>Adobe Photoshop</li>
                        <li>ChatGPT</li>
                    </ul>
                </motion.div>
            </div>

            <div className="flex justify-center items-center">
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl font-extrabold text-center py-10">
                    Design Process
                    <br></br>
                    <br></br>
                    <img className="max-h-full m-auto md:w-3/4 lg:w-1/2 rounded-lg" src={DesignProcess} alt="Design Process" />
                </motion.div>
            </div >

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    User Interviews
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    In order to understand and best serve users&rsquo; needs, I asked 5 participants to download the current National Enquirer app on Android and iOS. All 5 participants were then asked what they liked and didn&rsquo;t like about the current app.
                </p>


                <div className='tableContainer md:max-w-screen-xl'>
                    <table className="border-collapse border">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 ">Key Findings</th>
                                <th className="border border-slate-600 ">Possible Solutions</th>
                            </tr>
                        </thead>
                        <tbody className="px5">
                            <tr>
                                <td className="border border-slate-600 ">Users expressed frustration of side-scrolling in order to access different articles. One user stated, "I expect to see a significant amount of content when I enter an app. I don't want to spend ages scrolling slowly just to view a couple of articles".</td>
                                <td className="border border-slate-600 ">Users expressed their preference for an engaging reading experience that includes vertical scrolling, easy social sharing, and a personalized experience.</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 ">Ability to vertical scroll in addition to numerous content shown on screen, through use of footer navigation tabs.</td>
                                <td className="border border-slate-600 ">Ability for easy sharing and a personalized “For You” tab dedicated towards the users' interests.</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 ">Users experienced a sense of pressure due to the upfront display of remaining time and content pricing, even before having the opportunity to read the article itself.</td>
                                <td className="border border-slate-600 ">Ability to read partial articles without a paywall.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>


            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    Competitive Analysis
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    Following user interviews, I conducted a competitive analysis of various tabloid competitors and news companies. A recurring theme observed across all competitors was the utilization of footer navigation tabs for easy navigation, along with a search button consistently placed in the header across all tabs. A predominant feature among them was the vertical layout structure and easy share feature.
                </p>

                <div className='tableContainer md:max-w-screen-xl'>
                    <table className="border-collapse border">
                        <thead>
                            <tr >
                                <th className="border border-slate-600 ">Companies</th>
                                <th className="border border-slate-600">New York Post</th>
                                <th className="border border-slate-600">TMZ</th>
                                <th className="border border-slate-600">BuzzFeed</th>
                                <th className="border border-slate-600">NY Daily News</th>
                            </tr>
                        </thead>
                        <tbody className="px5">
                            <tr >
                                <td className="border border-slate-600 text-center">Strengths</td>
                                <td className="border border-slate-600">
                                    <ul className="list-disc ml-5">
                                        <li>Footer navigation bar</li>
                                        <li>Dedicated categories menus</li>
                                        <li>Search button on all tabs header</li>
                                        <li>Articles are well formatted, easy to read and share</li>
                                        <li>Bookmark articles feature</li>
                                        <li>Easy share feature</li>
                                        <li>Mix of vertical and horizontal layout structure</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Footer navigation bar</li>
                                        <li>Dedicated tabs for news, videos, and photos</li>
                                        <li>Search button on all tabs header</li>
                                        <li>“Got a tip?” button for easy news tip submission</li>
                                        <li>Easy share feature</li>
                                        <li>Vertical content layout structure</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Footer navigation bar</li>
                                        <li>Dedicated categories menus</li>
                                        <li>BuzzFeed AI Quizzes & Games (Interactivity)</li>
                                        <li>Bookmark articles feature</li>
                                        <li>Easy share feature</li>
                                        <li>Dedicated videos tab</li>
                                        <li>Profile menu</li>
                                        <li>Grid and vertical layout structure</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Interests customization upon opening app</li>
                                        <li>Dedicated categories menus</li>
                                        <li>Easy to find bookmarks section</li>
                                        <li>Ability to customize your news tab</li>
                                        <li>Vertical layout structure</li>
                                        <li>Easy share feature</li>
                                        <li>Easy bookmark feature without having to click into article</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr >
                                <td className="border border-slate-600  text-center">Weakness</td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Video player contains a separate playlist menu, hard to navigate</li>
                                        <li>Difficult to find bookmarks section</li>
                                        <li>“Page Six” tab, confusing, not sure what it is suppose to be</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Unable to comment on articles and videos</li>
                                        <li>Unable to bookmark articles and videos</li>
                                        <li>Not account settings or customize profile</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Unable to comment on videos</li>
                                        <li>Difficult to find bookmarks section</li>
                                        <li>BuzzFeed shopping tab is irrelevant to a news app, should not be included</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Categories menu has a dedicated tab and is also shown on header, does not need to be in two places</li>
                                        <li>Unable to comment on articles and videos</li>
                                        <li>Inability to read articles after a few, prompting a paywall</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-black max-w-screen-md">


                </div>
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    User Persona & Journey Map
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    To prioritize a user-centered design approach, a user persona was developed to gain insight into the desires and needs of users in an improved National Enquirer app. This persona aimed to understand the mindset of users and align the design with their expectations. Furthermore, a user journey map was created to outline the step-by-step process that the user persona might undertake when downloading, reading, and engaging with the National Enquirer app.
                </p>
                <img className="max-h-full m-auto md:w-3/4 lg:w-1/2 rounded-lg pb-10" src={Persona} alt="User Persona" />

                <div className='tableContainer md:max-w-screen-xl'>
                    <table className="border-collapse border">
                        <thead>
                            <tr>
                                <th className="p-2 border border-slate-600"></th>
                                <th className="p-2 border border-slate-600">Downloading the app</th>
                                <th className="p-2 border border-slate-600">Opening the app</th>
                                <th className="p-2 border border-slate-600">Browsing the app</th>
                                <th className="p-2 border border-slate-600">Reading Content</th>
                                <th className="p-2 border border-slate-600">Social Sharing</th>
                                <th className="p-2 border border-slate-600">Subscription</th>
                            </tr>
                        </thead>
                        <tbody className="px-2 sm:px-5">
                            <tr className="text-primary">
                                <td className="p-2 border border-slate-600  text-center">Action</td>
                                <td className="p-2 border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Searches for the National Enquirer in the app store and reads app descriptions, reviews, and ratings</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Installs the app and opens it for the first time</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Attempts to navigate the app by categories, interests, and trending headlines</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Selects an article from the home screen</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Finds an interesting article she would like to share with her friends</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>The time limit ran out and prompted to subscribe</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600  text-center">Thinking</td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>This app has limited reviews, most of which complains about subscription</li>
                                        <li>There are no recent reviews, does anyone use this app?</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>This app feels outdated for my liking</li>
                                        <li>Why is there a price for subscription even before I got  a chance to read it?</li>
                                        <li>No signup or login option to be found on main screen</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Feels confused, disappointed and unengaged</li>
                                        <li>Why isn&rsquo;t there an option to see content by topics or latest news?</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>Irritated by the side scrolling content that gets cut off</li>
                                        <li>How come there is a timer on how long i can read before i have to subscribe?</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>How do i share this article?</li>
                                        <li>I don&rsquo;t see an easy way to share this, only to send the app link</li>
                                        <li>Really wish there was social media sharing icons my followers won&rsquo;t believe this!</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>I didn&rsquo;t even get to read all of it! The timer made me rush through</li>
                                        <li>Why would i pay for a subscription if i didn&rsquo;t have an enjoyable first experience?</li>
                                        <li>I think TMZ can fulfill my needs for celebrity gossip</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600  text-center">Opportunities</td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>The app should have a compelling description, positive reviews, and high ratings to attract Sarah's attention during the discovery phase</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>The app should provide a user-friendly onboarding experience with clear instructions and an option to skip if desired</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>The app can curate a visually appealing and varied selection of articles to capture Sarah's attention and encourage exploration</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>The app should provide a distraction-free reading experience with adjustable font sizes, text-search, bookmark and sharing options</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>The app should incorporate easy-to-use social sharing buttons or integrations to allow sharing content effortlessly</li>
                                    </ul>
                                </td>
                                <td className="border border-slate-600 ">
                                    <ul className="list-disc ml-5">
                                        <li>The app can offer a clear value proposition for subscriptions, such as exclusive content or an ad-free experience, while ensuring a balance between free and premium content to maintain engagement</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    How Might We
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                    With the user persona in mind, the primary focus is ensuring user satisfaction and engagement while addressing the user&rsquo;s pain points. This leads to the question: How might we effectively address Sarah&rsquo;s needs, goals, and frustrations during the redesign of the National Enquirer app?
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    Information Architecture
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    To start planning the redesign of the National Enquirer app I begin with an information architecture diagram to serve as the blueprint for my ideation.
                </p>
                <img className="max-h-full m-auto md:w-3/4 lg:w-1/2 rounded-lg" src={InformationArchitecture} alt="Information Architecture" />
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    Low-Fidelity Wireframe
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    Taking into consideration the user persona, information architecture, user pain points, and user desires, I initiated the process of designing low-fidelity wireframes on paper.
                </p>
                <img className="max-h-full m-auto md:w-3/4 lg:w-1/2 rounded-lg" src={LowFidelity} alt="Low-Fidelity Mockup" />
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    Mid-Fidelity Wireframe
                    <button
                        onClick={() => window.open('https://www.figma.com/proto/lrb1MNt7l3ECvOv4b6AH4Z/National-Enquirer-Redesign?type=design&node-id=4-6&scaling=scale-down&page-id=0%3A1&starting-point-node-id=116%3A1615', "_blank", "noopener noreferrer")}
                    >
                        <OpenInNew className="ml-1 hover:text-secondary" />
                    </button>
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    Using the low-fidelity wireframes as a guide, I begin creating a mid-fidelity wireframe within Figma for usability testing.
                </p>
                <img className="max-h-full m-auto sm:w-full md:w-3/4 rounded-lg" src={MidFidelity} alt="Mid-Fidelity Mockup" />
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    Usability Testing
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    Once the mid-fidelity wireframe was finished, it was sent to 5 participants for usability testing. I gathered valuable feedback regarding the design, and flow, and addressed any needs and pain points identified by the users. The feedback was then incorporated into the high-fidelity design, leading to several notable changes outlined below.
                </p>
                <ul class="list-disc ml-5 pb-10">
                    <li>The initial interests screen caused confusion among users due to the presence of a confirm button before selecting their interests.</li>
                    <li>The navigation buttons on the footer were a source of confusion for users.</li>
                    <li>Users observed inconsistencies in the alignment of text as well as variations in font sizes within the content.</li>
                    <li>Users observed that the hamburger icon and the filter icon were significantly larger compared to other elements in the design.</li>
                    <li>Users stated titles were hard to read.</li>
                    <li>Like & Comment icons were removed from For You page.</li>
                    <li>Users stated there was too much red within the content articles, the color was replaced with gray.</li>
                </ul>
                <img className="max-h-full m-auto md:w-3/4 lg:w-1/2 rounded-lg pb-10" src={Usability1} alt="Usability Testing Revision 1" />
                <img className="max-h-full m-auto md:w-3/4 lg:w-1/2 rounded-lg" src={Usability2} alt="Usability Testing Revision 2" />
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    Sticker Sheet
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    To ensure consistent design elements, a sticker sheet was created. This sheet allowed for the systematic recoloring of placeholder images and buttons, while also utilizing pre-made icons. By implementing this approach, future developments can maintain coherence in the overall design.
                </p>
                <img className="max-h-full m-auto md:w-3/4 lg:w-1/2 rounded-lg" src={StickerSheet} alt="Sticker Sheet" />
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    High-Fidelity
                    <button
                        onClick={() => window.open('https://www.figma.com/proto/lrb1MNt7l3ECvOv4b6AH4Z/National-Enquirer-Redesign?type=design&node-id=278-885&scaling=scale-down&page-id=278%3A5&starting-point-node-id=278%3A16', "_blank", "noopener noreferrer")}
                    >
                        <OpenInNew className="ml-1 hover:text-secondary" />
                    </button>
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl pb-10">
                    After receiving feedback on the mid-fidelity wireframes, changes were implemented into the high-fidelity design. This included recoloring and replacing placeholder icons and images. The high-fidelity design now more accurately represents the finalized look of the redesign.
                </p>
                <img className="max-h-full m-auto sm:w-full md:w-3/4 rounded-lg" src={HighFidelity} alt="High-Fidelity Mockup " />
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    Usability Testing
                </div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                    Once the high-fidelity design was completed, it was shared again with the same 5 participants for usability testing. Adjustments were made based on their feedback, primarily focusing on addressing inconsistencies in text alignment and variations in font sizes.
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">
                    Final Design
                </div>
                <div className='max-h-full m-auto w-full md:w-3/4 lg:w-1/2 rounded-lg'>
                    <Swiper
                        spaceBetween={20}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                height: 240,
                            },
                            // when window width is >= 768px
                            768: {
                                height: 768,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <div className='relative'>
                            <SwiperSlide>
                                <img src={Final1} alt={`High-Fidelity Mockups 1`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Final2} alt={`High-Fidelity Mockups 2`} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Final3} alt={`High-Fidelity Mockups 3`} />
                            </SwiperSlide>
                        </div>

                    </Swiper>
                </div>
            </motion.div>


            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center p-10">
                <div className="text-3xl font-extrabold text-center py-10">Reflection</div>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                    Undertaking my first UX Design case study was challenging but rewarding. I learned Figma on the go and grasped design principles through YouTube and LinkedIn learning. User research and usability testing were crucial, uncovering insights I missed during design. User feedback emphasized their importance.
                </p>
                <br></br>
                <p className="text-left md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                    Adopting a user-centric approach, I empathized with users as a designer. Reflecting on my experience, I'd include light and dark modes and use the iPhone 11 frame initially to ensure seamless mobile usability.
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.1 }}
                className='mb-10'>
                <Footer />
            </motion.div>

        </>
    );
}
export default NationalEnquirer;
