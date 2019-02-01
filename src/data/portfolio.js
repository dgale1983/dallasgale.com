// HIA
import hiaLogo from '../images/logos/hia-wh.png'
import hiaHomepage from '../images/portfolio/hia/homepage.jpg'
import hiaTalk from '../images/portfolio/HIA/hiatalk-1-2.jpg'
import hiaPortal from "../images/portfolio/HIA/portal1.jpg"

// My Local Group
import mlgLogo from '../images/logos/mlg-words.png'
import mlaHomepage from '../images/portfolio/MLG/mla.jpg'
import kbHomepage from '../images/portfolio/MLG/kb-homepage.jpg'
import fhlHomepage from '../images/portfolio/MLG/fhl.jpg'
import mlbHomepage from '../images/portfolio/MLG/mlb-homepage.jpg'

// Gee Digital
import geeLogo from '../images/logos/gee-wh.png'
import autopHomepage from '../images/portfolio/GEE/autophoto.jpg'
import mmHomepage from '../images/portfolio/GEE/majormedia.jpg'

// Me
import dgLogo from '../images/logos/dg.png';
import esnHomepage from '../images/portfolio/ESN/landing.jpg'
// import mlbHomepage from '../images/portfolio/MLG/mlb-homepage.jpg'



const PortfolioData = [
    {
        id: 1,
        date: 2018,
        project: "Company Website",
        url: "https://www.hia.ai",
        details: "Responsive re-design & build of the company website. A PWA using WordPress CMS with pre-compiled modular JS, jQuery & sass.",
        tools: "ES6 JS, jQuery, SASS, Gulp, WordPress, Lighthouse auditing",
        employer: "HIA Technologies",
        employerLogo: hiaLogo,
        thumbnail: null,
        images: [
            ".../images/portfolio/HIA/homepage2.jpg",
            ".../images/portfolio/HIA/homepage3.jpg"
        ],
        hero: hiaHomepage,
        all: true,
        cms: true,
        webDesign: true,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: false,
        angular: false
    },
    {
        id: 2,
        date: "2018",
        project: "HIA Talk app",
        url: null,
        details: "App design & development using Unity Game Engine, C#, Adobe Photoshop & Adobe XD for wire-frames.",
        "tools": "ES6 JS, jQuery, SASS, Gulp, WordPress, Lighthouse auditing",
        employer: "HIA Technologies",
        employerLogo: hiaLogo,         
        thumbnail: "",
        images: [
            "../images/portfolio/HIA/hiatalk-3-4.jpg"
        ],
        hero: hiaTalk,
        all: true,
        cms: false,
        webDesign: true,
        webDev: true,
        appDev: true,
        uiDesign: true,
        unity: true,
        react: false,
        angular: false
    },
    {
        id: 3,
        date: "2018",
        project: "Client Portal",
        url: null,
        details: "Wire-frame & design ( development in progress ). .NET with React, Telerik graphs & charts and REST api.",
        employer: "HIA Technologies",
        employerLogo: hiaLogo,         
        thumbnail: "",
        images: [
            "../images/portfolio/HIA/portal2.jpg",
            "../images/portfolio/HIA/portal3.jpg"
        ],
        hero: hiaPortal,
        all: true,
        cms: false,
        webDesign: true,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: true,
        angular: false       
    },
    {
        id: 4,
        date: "2017",
        project: "My Local Aggregation",
        url: "https://www.mylocalaggregation.com.au",
        details: "Design & development of the site using Umbraco CMS, C#, Razor, sass, jQuery & JS.",
        employer: "My Local Group",
        employerLogo: mlgLogo,         
        thumbnail: "",
        images: [ null ],
        hero: mlaHomepage,
        all: true,
        cms: true,
        webDesign: false,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: false,
        angular: false
    },
    {
        id: 5,
        date: "2017",
        project: "Chief Knowledge Base",
        url: "https://kb.chief.net.au",
        details: "Design & development of the site using Umbraco CMS, C#, Razor, sass, jQuery & JS.",
        employer: "My Local Group",
        employerLogo: mlgLogo,         
        thumbnail: "",
        images: [ null ],
        hero: kbHomepage,
        all: true,
        cms: true,
        webDesign: true,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: false,
        angular: false
    },
    {
        id: 6,
        date: "2016",
        project: "Footy Home Loans",
        url: null,
        details: "Design & development of the SPA using Angular framework with JS & sass.",
        employer: "My Local Group",
        employerLogo: mlgLogo,         
        thumbnail: "",
        images: [ null ],
        hero: fhlHomepage,
        all: true,
        cms: false,
        webDesign: false,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: false,
        angular: true
    },
    {
        id: 7,
        date: "2017",
        project: "My Local Broker",
        details: "Design & development of the site using Umbraco CMS, C#, Razor, sass, jQuery & JS.",
        employer: "My Local Group",
        url: "https://www.mylocalbroker.com.au",
        employerLogo: mlgLogo,         
        thumbnail: "",
        images: [ null ],
        hero: mlbHomepage,
        all: true,
        cms: true,
        webDesign: false,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: false,
        angular: false
    },
    {
        id: 8,
        date: "2014",
        project: "Auto-Photo",
        url: null,
        details: "Design & development using vanilla JS, jQuery, sass.",
        employer: "GEE Digital",
        employerLogo: geeLogo,         
        thumbnail: "",
        images: [ null ],
        hero: autopHomepage,
        all: true,
        cms: false,
        webDesign: true,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: false,
        angular: false
    },
    {
        id: 9,
        date: "2014",
        project: "Major Media",
        url: "https://www.majormedia.com.au",
        details: "Responsive site development using JS, jQuery, sass & Bootstrap.",
        employer: "GEE Digital",
        employerLogo: "../images/logos/gee-wh.png",         
        thumbnail: "",
        images: [ null ],
        hero: mmHomepage,
        all: true,
        cms: false,
        webDesign: true,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: false,
        angular: false
    },
    {
        id: 11,
        date: "2013",
        project: "Eye Spy Nature - My photography site",
        url: "https://www.eyespynature.net",
        details: "Design & development of my photography site using React, sass, graphQL & Gatsby with Contentful ( headless CMS ).",
        employer: "Myself",
        employerLogo: dgLogo,         
        thumbnail: "",
        images: [ null ],
        hero: esnHomepage,
        all: true,
        cms: true,
        webDesign: true,
        webDev: true,
        appDev: false,
        uiDesign: true,
        unity: false,
        react: true,
        angular: false
    }
]

export default PortfolioData;