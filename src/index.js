const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


/* ______________________________ */

const navLinks = document.querySelectorAll("nav a");

const logoImg = document.querySelector("#logo-img");
const ctaImg = document.querySelector("#cta-img");
const accentImg = document.querySelector("#middle-img");

const ctaHeader = document.querySelector(".cta h1");
const ctaButton = document.querySelector("button");

const midHeaders = document.querySelectorAll("h4");
const midContent = document.querySelectorAll(".text-content p");

const contactHead = document.querySelector(".contact h4");
const contactAdd = document.querySelectorAll(".contact p");

const footer = document.querySelector("footer a");


navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

logoImg.src = siteContent["images"]["logo-img"];
ctaImg.src = siteContent["images"]["cta-img"];
accentImg.src = siteContent["images"]["accent-img"];

ctaHeader.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];

midHeaders[0].textContent = siteContent["main-content"]["features-h4"];
midHeaders[1].textContent = siteContent["main-content"]["about-h4"];
midHeaders[2].textContent = siteContent["main-content"]["services-h4"];
midHeaders[3].textContent = siteContent["main-content"]["product-h4"];
midHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

midContent[0].textContent = siteContent["main-content"]["features-content"];
midContent[1].textContent = siteContent["main-content"]["about-content"];
midContent[2].textContent = siteContent["main-content"]["services-content"];
midContent[3].textContent = siteContent["main-content"]["product-content"];
midContent[4].textContent = siteContent["main-content"]["vision-content"];

contactHead.textContent = siteContent["contact"]["contact-h4"];
contactAdd[0].textContent = siteContent["contact"]["address"];
contactAdd[1].textContent = siteContent["contact"]["phone"];
contactAdd[2].textContent = siteContent["contact"]["email"];

footer.textContent = siteContent["footer"]["copyright"];

navLinks.forEach(navLinks => navLinks.className = "italic");

footer.className = "bold";