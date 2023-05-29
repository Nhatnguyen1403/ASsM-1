import Navigo from "navigo"; 
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import portfolio from "./pages/Portfolio";
import contact from "./pages/Contact";



const router = new Navigo("/", { linksSelector: "a" });
const app = document.querySelector("#app");

const render = (content, container) => {
    container.innerHTML = content();
};

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/Resume", () => render(Resume, app));
router.on("/Services", () => render(Services, app));
router.on("/portfolio", () => render(portfolio, app));
router.on("/contact", () => render(contact, app));

router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));

router.resolve();
