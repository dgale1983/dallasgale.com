import hiaHomepage from '../images/portfolio/hia/homepage.jpg'

const PortfolioData = [
    {
        id: 1,
        date: 2018,
        project: "Company Website",
        url: "https://www.hia.ai",
        details: "Responsive re-design & build of the company website. A PWA using WordPress CMS with pre-compiled modular JS, jQuery & sass.",
        tools: "ES6 JS, jQuery, SASS, Gulp, WordPress, Lighthouse auditing",
        employer: "HIA Technologies",
        employerLogo: "../images/logos/hia-wh.png",
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
    }
]

export default PortfolioData;