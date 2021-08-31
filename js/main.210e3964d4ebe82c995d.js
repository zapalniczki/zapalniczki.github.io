/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 54973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png");

/***/ }),

/***/ 51946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png");

/***/ }),

/***/ 80703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo-wordmark.c9095b79e4c1cb5d9f82799542443b19.png");

/***/ }),

/***/ 44814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 78487:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.product = void 0;
const firestore_1 = __webpack_require__(84956);
const zod_1 = __webpack_require__(78754);
const getCollection_1 = __importDefault(__webpack_require__(47220));
const galleryItem = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    url: (0, zod_1.string)()
});
const variant = (0, zod_1.object)({
    value: (0, zod_1.string)(),
    name: (0, zod_1.string)()
});
exports.product = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    dateAdded: (0, zod_1.number)(),
    description: (0, zod_1.string)(),
    gallery: (0, zod_1.array)(galleryItem),
    isFeatured: (0, zod_1.boolean)().optional(),
    isRecommended: (0, zod_1.boolean)().optional(),
    name: (0, zod_1.string)(),
    price: (0, zod_1.number)(),
    variantsLabel: (0, zod_1.string)().optional(),
    variants: (0, zod_1.array)(variant).optional()
});
const getProducts = async () => {
    const db = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.collection)(db, 'products');
    const snapshot = await (0, firestore_1.getDocs)(ref);
    const products = (0, getCollection_1.default)(snapshot, exports.product);
    return products;
};
exports.default = getProducts;


/***/ }),

/***/ 72934:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getProducts = void 0;
var getProducts_1 = __webpack_require__(78487);
Object.defineProperty(exports, "getProducts", ({ enumerable: true, get: function () { return __importDefault(getProducts_1).default; } }));


/***/ }),

/***/ 14250:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-use-before-define */
const basketProvider_1 = __webpack_require__(69507);
const react_1 = __importStar(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const icons_1 = __webpack_require__(4747);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Badge_1 = __importDefault(__webpack_require__(63759));
const useBasketToggle_1 = __importDefault(__webpack_require__(98715));
const BasketToggle = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const { basket } = (0, react_1.useContext)(basketProvider_1.basketContext);
    const { setBasketOpen } = (0, useBasketToggle_1.default)();
    return (react_1.default.createElement(Container, { className: "button-link navigation-menu-link basket-toggle", disabled: basketDisabledpathnames.includes(pathname), onClick: () => setBasketOpen((prev) => !prev), type: "button" },
        react_1.default.createElement(Badge_1.default, { count: basket.length },
            react_1.default.createElement(icons_1.ShoppingOutlined, { style: { fontSize: '2.4rem' } }))));
};
const Container = styled_components_1.default.button ``;
const basketDisabledpathnames = [
    // ROUTE.CHECKOUT_STEP_1,
    // ROUTE.CHECKOUT_STEP_2,
    // ROUTE.CHECKOUT_STEP_4,
    '/dff'
    // ROUTE.SIGNUP,
    // ROUTE.FORGOT_PASSWORD
];
exports.default = BasketToggle;


/***/ }),

/***/ 98715:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(67294);
const useBasketToggle = () => {
    const [basketOpen, setBasketOpen] = (0, react_1.useState)(false);
    return {
        basketOpen,
        setBasketOpen
    };
};
exports.default = useBasketToggle;


/***/ }),

/***/ 65129:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const logo_full_png_1 = __importDefault(__webpack_require__(51946));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const Logo = () => (react_1.default.createElement(Flexbox_1.default, { alignItems: "center", marginRight: "2rem" },
    react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
        react_1.default.createElement(Image, { alt: "Logo", src: logo_full_png_1.default }))));
const Image = styled_components_1.default.img `
  height: 100%;
  width: 15rem;
  height: inherit;
  object-fit: contain;

  a {
    display: block;
    height: 100%;
  }
`;
exports.default = Logo;


/***/ }),

/***/ 19324:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const mainMenuLinks_1 = __importDefault(__webpack_require__(11736));
const MainMenu = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement(Container, null, mainMenuLinks_1.default.map(({ label, ...link }) => (react_1.default.createElement("li", null,
        react_1.default.createElement(react_router_dom_1.NavLink, { ...link }, t(label)))))));
};
const Container = styled_components_1.default.ul `
  padding-left: 0;
  margin-right: 2rem;
  flex-grow: 1;

  li {
    display: inline-block;

    a {
      padding: 10px 15px;
      font-size: 1.4rem;
      opacity: 0.5;

      &:hover {
        background: ${(props) => props.theme.colors['background-color-01']};
      }
    }
  }
`;
exports.default = MainMenu;


/***/ }),

/***/ 8771:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NavigationMenuItem = void 0;
const react_1 = __importStar(__webpack_require__(67294));
const styled_components_1 = __importStar(__webpack_require__(29958));
const BasketToggle_1 = __importDefault(__webpack_require__(14250));
const Logo_1 = __importDefault(__webpack_require__(65129));
const MainMenu_1 = __importDefault(__webpack_require__(19324));
const Navigation = () => {
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const scrollHandler = () => {
            if (window.pageYOffset >= 70) {
                setIsExpanded(true);
            }
            else {
                setIsExpanded(false);
            }
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    return (react_1.default.createElement(Container, { isExpanded: isExpanded },
        react_1.default.createElement(Logo_1.default, null),
        react_1.default.createElement(MainMenu_1.default, null),
        react_1.default.createElement(NavigationMenu, null,
            react_1.default.createElement(exports.NavigationMenuItem, null,
                react_1.default.createElement(BasketToggle_1.default, null)))));
};
const Container = styled_components_1.default.nav `
  width: 100%;
  height: 10rem;
  background: ${(props) => props.theme.colors['background-color']};
  display: flex;
  align-items: center;
  padding: 0.5rem 5rem;
  padding-top: 3rem;
  position: absolute;
  top: 0;
  transform: translateY(0);
  z-index: ${(props) => props.theme.zIndices.navigation};
  box-shadow: none;
  /* @include bezier-transition(transform, 0.3s, ease); */

  ${(props) => {
    if (props.isExpanded) {
        return (0, styled_components_1.css) `
        position: fixed;
        /* animation: slide-down 0.3s ease 1; */
        /* animation-fill-mode: forwards; */
        top: 0;
        height: 6rem;
        padding-top: 0.5rem;
        background ${props.theme.colors['nav-bg-scrolled']};
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.02);
      `;
    }
    return undefined;
}}
`;
const NavigationMenu = styled_components_1.default.ul `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  text-align: right;
`;
exports.NavigationMenuItem = styled_components_1.default.li `
  display: inline-block;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
exports.default = Navigation;


/***/ }),

/***/ 11736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const routes_1 = __webpack_require__(74897);
const mainMenuLinks = [
    // {
    //   activeClassName: 'navigation-menu-active',
    //   exact: true,
    //   to: ROUTE.HOME,
    //   label: 'common.navigation.home'
    // },
    // {
    //   activeClassName: 'navigation-menu-active',
    //   to: ROUTE.FEATURED_PRODUCTS,
    //   label: 'common.navigation.featured'
    // },
    {
        activeClassName: 'navigation-menu-active',
        to: routes_1.PRODUCTS,
        label: 'common.navigation.products'
    }
    // {
    //   activeClassName: 'navigation-menu-active',
    //   to: ROUTE.RECOMMENDED_PRODUCTS,
    //   label: 'common.navigation.recommended'
    // }
];
exports.default = mainMenuLinks;


/***/ }),

/***/ 21142:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const logo_wordmark_png_1 = __importDefault(__webpack_require__(80703));
const Preloader = () => (react_1.default.createElement("div", { className: "preloader" },
    react_1.default.createElement("svg", { className: "logo-symbol", viewBox: "0 0 41.25 41.25" },
        react_1.default.createElement("circle", { cx: "20.62", cy: "20.62", r: "20.62" }),
        react_1.default.createElement("circle", { className: "fill-white", cx: "29.97", cy: "14.93", r: "6.58" })),
    react_1.default.createElement("img", { alt: "Salinaka logo wordmark", src: logo_wordmark_png_1.default })));
exports.default = Preloader;


/***/ }),

/***/ 31802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nagivation = exports.Preloader = void 0;
var Preloader_1 = __webpack_require__(21142);
Object.defineProperty(exports, "Preloader", ({ enumerable: true, get: function () { return __importDefault(Preloader_1).default; } }));
var Navigation_1 = __webpack_require__(8771);
Object.defineProperty(exports, "Nagivation", ({ enumerable: true, get: function () { return __importDefault(Navigation_1).default; } }));


/***/ }),

/***/ 63759:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const Badge = ({ count, children, stanalone }) => (react_1.default.createElement("div", { className: "badge" },
    children,
    count >= 1 && (react_1.default.createElement("span", { className: `badge-count${!stanalone ? ' badge-count-position' : ''}` }, count))));
exports.default = Badge;


/***/ }),

/***/ 84962:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const styled_system_1 = __webpack_require__(18005);
const styleProps = (0, styled_system_1.compose)(styled_system_1.layout, styled_system_1.space, styled_system_1.position, styled_system_1.flex, styled_system_1.grid, styled_system_1.border, styled_system_1.flexbox, styled_system_1.background);
const Box = styled_components_1.default.div `
  ${styleProps}
`;
exports.default = Box;


/***/ }),

/***/ 65415:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Box_1 = __importDefault(__webpack_require__(84962));
const Page = ({ children }) => (react_1.default.createElement(Container, null,
    react_1.default.createElement(Wrapper, null, children)));
const Container = (0, styled_components_1.default)(Box_1.default).attrs(() => ({
    as: 'main'
})) `
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: ${(props) => `${props.theme.space.top} ${props.theme.space['pad-desktop']}`};
  padding-top: 12rem;
  display: flex;
  flex-direction: column;
  /* animation: fadeIn 0.5s ease; */
  align-items: center;
`;
const Wrapper = styled_components_1.default.div `
  max-width: 1200px;
  width: 100%;
`;
exports.default = Page;


/***/ }),

/***/ 69559:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
function QueryLoader({ children, query, Loader }) {
    if (query.isFetching) {
        if (Loader) {
            return Loader;
        }
        else {
            return react_1.default.createElement("p", null, "\u0142adowanie...");
        }
    }
    else if (query.isSuccess) {
        // if (Loader) {
        //   return Loader;
        // }
        return react_1.default.createElement(react_1.default.Fragment, null, children(query.data));
    }
    else {
        return react_1.default.createElement("p", null, "ERROR");
    }
}
exports.default = QueryLoader;


/***/ }),

/***/ 26789:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Badge = exports.QueryLoader = exports.Box = exports.Page = void 0;
var Page_1 = __webpack_require__(65415);
Object.defineProperty(exports, "Page", ({ enumerable: true, get: function () { return __importDefault(Page_1).default; } }));
var Box_1 = __webpack_require__(84962);
Object.defineProperty(exports, "Box", ({ enumerable: true, get: function () { return __importDefault(Box_1).default; } }));
var QueryLoader_1 = __webpack_require__(69559);
Object.defineProperty(exports, "QueryLoader", ({ enumerable: true, get: function () { return __importDefault(QueryLoader_1).default; } }));
var Badge_1 = __webpack_require__(63759);
Object.defineProperty(exports, "Badge", ({ enumerable: true, get: function () { return __importDefault(Badge_1).default; } }));


/***/ }),

/***/ 74897:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PRODUCTS = void 0;
exports.PRODUCTS = '/products';


/***/ }),

/***/ 92457:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useScrollTop = exports.useDocumentTitle = void 0;
var useDocumentTitle_1 = __webpack_require__(6999);
Object.defineProperty(exports, "useDocumentTitle", ({ enumerable: true, get: function () { return __importDefault(useDocumentTitle_1).default; } }));
var useDocumentTitle_2 = __webpack_require__(6999);
Object.defineProperty(exports, "useScrollTop", ({ enumerable: true, get: function () { return __importDefault(useDocumentTitle_2).default; } }));


/***/ }),

/***/ 6999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(67294);
const useDocumentTitle = (title) => {
    (0, react_1.useLayoutEffect)(() => {
        if (title) {
            document.title = title;
        }
        else {
            document.title = 'Salinaka - eCommerce React App';
        }
    }, [title]);
};
exports.default = useDocumentTitle;


/***/ }),

/***/ 42383:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(67294);
const useScrollTop = () => {
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
};
exports.default = useScrollTop;


/***/ }),

/***/ 17927:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.queryClient = void 0;
__webpack_require__(85623);
const authProvider_1 = __importDefault(__webpack_require__(66025));
const authStatusProvider_1 = __importDefault(__webpack_require__(67655));
const basketProvider_1 = __importDefault(__webpack_require__(69507));
const profileProvider_1 = __importDefault(__webpack_require__(25866));
const react_1 = __importStar(__webpack_require__(67294));
const react_dom_1 = __webpack_require__(73935);
__webpack_require__(72225);
const react_query_1 = __webpack_require__(88767);
__webpack_require__(44814);
const webfontloader_1 = __importDefault(__webpack_require__(75933));
const styled_components_1 = __webpack_require__(29958);
const theme_1 = __importDefault(__webpack_require__(38523));
const react_i18next_1 = __webpack_require__(86162);
const config_1 = __importDefault(__webpack_require__(41512));
const App_1 = __importDefault(__webpack_require__(58341));
webfontloader_1.default.load({
    google: {
        families: ['Roboto']
    }
});
const root = document.getElementById('app');
exports.queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 90000
        }
    }
});
(0, react_dom_1.render)(react_1.default.createElement(react_1.StrictMode, null,
    react_1.default.createElement(authStatusProvider_1.default, null,
        react_1.default.createElement(authProvider_1.default, null,
            react_1.default.createElement(profileProvider_1.default, null,
                react_1.default.createElement(basketProvider_1.default, null,
                    react_1.default.createElement(react_query_1.QueryClientProvider, { client: exports.queryClient },
                        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
                            react_1.default.createElement(react_i18next_1.I18nextProvider, { i18n: config_1.default },
                                react_1.default.createElement(App_1.default, null))))))))), root);


/***/ }),

/***/ 47220:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const parseApiResponse_1 = __importDefault(__webpack_require__(24050));
function getCollection(snapshot, schema) {
    const records = [];
    snapshot.forEach((elem) => {
        const parsedElem = (0, parseApiResponse_1.default)(schema, elem);
        records.push(parsedElem);
    });
    return records;
}
exports.default = getCollection;


/***/ }),

/***/ 47515:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const firestore_1 = __webpack_require__(84956);
const getProducts_1 = __webpack_require__(78487);
const parseApiResponse_1 = __importDefault(__webpack_require__(24050));
const getProduct = async (payload) => {
    const firestore = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.doc)(firestore, 'products', payload.id);
    const response = await (0, firestore_1.getDoc)(ref);
    const parsedResponse = (0, parseApiResponse_1.default)(getProducts_1.product, response);
    return parsedResponse;
};
exports.default = getProduct;


/***/ }),

/***/ 19729:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const firestore_1 = __webpack_require__(84956);
const zod_1 = __webpack_require__(78754);
const parseApiResponse_1 = __importDefault(__webpack_require__(24050));
const profile = (0, zod_1.object)({
    email: (0, zod_1.string)(),
    role: (0, zod_1.enum)(['USER', 'ADMIN']),
    avatar: (0, zod_1.string)(),
    banner: (0, zod_1.string)(),
    dateJoined: (0, zod_1.number)()
});
const getProfile = async (payload) => {
    const firestore = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.doc)(firestore, 'users', payload.id);
    const response = await (0, firestore_1.getDoc)(ref);
    const parsedResponse = (0, parseApiResponse_1.default)(profile, response);
    return parsedResponse;
};
exports.default = getProfile;


/***/ }),

/***/ 24050:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function parseApiResponse(schema, response) {
    if (response.exists()) {
        const data = response.data();
        const { id } = response;
        const obj = { ...data, id };
        const parsedResponse = schema.safeParse(obj);
        if (parsedResponse.success) {
            return parsedResponse.data;
        }
        throw new Error(parsedResponse.error.message);
    }
    else {
        throw new Error('Error Parse');
    }
}
exports.default = parseApiResponse;


/***/ }),

/***/ 98920:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const routes_1 = __webpack_require__(5208);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const SideNavigation = () => (react_1.default.createElement("aside", { className: "sidenavigation" },
    react_1.default.createElement("div", { className: "sidenavigation-wrapper" },
        react_1.default.createElement("div", { className: "sidenavigation-item" },
            react_1.default.createElement(react_router_dom_1.NavLink, { activeClassName: "sidenavigation-menu-active", className: "sidenavigation-menu", to: routes_1.ADMIN_PRODUCTS }, "Products")))));
exports.default = SideNavigation;


/***/ }),

/***/ 48215:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-unused-expressions */
const icons_1 = __webpack_require__(4747);
const common_1 = __webpack_require__(60886);
const Box_1 = __importDefault(__webpack_require__(84962));
const utils_1 = __webpack_require__(79941);
const react_1 = __importStar(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Square_1 = __importDefault(__webpack_require__(5974));
const react_router_dom_1 = __webpack_require__(77856);
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const basketProvider_1 = __webpack_require__(69507);
const react_query_1 = __webpack_require__(88767);
const getProduct_1 = __importDefault(__webpack_require__(47515));
const QueryLoader_1 = __importDefault(__webpack_require__(69559));
const SimpleButton_1 = __importDefault(__webpack_require__(34066));
const BasketItem = ({ product: { id, quantity, variant } }) => {
    const { setBasket } = (0, react_1.useContext)(basketProvider_1.basketContext);
    const productQuery = (0, react_query_1.useQuery)(`product/${id}`, () => (0, getProduct_1.default)({ id }));
    const onAddQty = () => {
        setBasket((prev) => {
            const index = prev.findIndex((elem) => {
                if (variant) {
                    return elem.id === id && elem.variant === variant;
                }
                return elem.id === id;
            });
            const result = [...prev];
            result[index].quantity = quantity + 1;
            return result;
        });
    };
    const onMinusQty = () => {
        setBasket((prev) => {
            const index = prev.findIndex((elem) => {
                if (variant) {
                    return elem.id === id && elem.variant === variant;
                }
                return elem.id === id;
            });
            const result = [...prev];
            result[index].quantity = quantity - 1;
            return result;
        });
    };
    const onRemoveFromBasket = () => {
        setBasket((prev) => {
            const productInBasket = prev.find((elem) => {
                if (variant) {
                    return elem.id === id && elem.variant === variant;
                }
                return elem.id === id;
            });
            return prev.filter((elem) => elem !== productInBasket);
        });
    };
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(QueryLoader_1.default, { query: productQuery }, (product) => {
            const variantName = product.variants?.find((elem) => elem.value === variant)?.name;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(SimpleButton_1.default, { disabled: quantity === 1, gridArea: "button-minus", onClick: onMinusQty },
                    react_1.default.createElement(icons_1.MinusOutlined, { style: { fontSize: '9px' } })),
                react_1.default.createElement(SimpleButton_1.default, { gridArea: "button-plus", onClick: onAddQty },
                    react_1.default.createElement(icons_1.PlusOutlined, { style: { fontSize: '9px' } })),
                react_1.default.createElement(Box_1.default, { width: "2rem", height: "2rem", gridArea: "quantity" },
                    react_1.default.createElement(common_1.Badge, { stanalone: true, count: quantity })),
                react_1.default.createElement(Box_1.default, { gridArea: "picture", position: "relative", width: "9rem", height: "9rem" },
                    react_1.default.createElement(Square_1.default, null,
                        react_1.default.createElement(common_1.ImageLoader, { alt: product.name ?? '', className: "basket-item-img", src: product.gallery[0].url }))),
                react_1.default.createElement(Flexbox_1.default, { flexDirection: "column", gridArea: "name" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: `/product/${product.id}`, onClick: () => document.body.classList.remove('is-basket-open') }, product.name),
                    variantName && (react_1.default.createElement(Box_1.default, { as: "span", marginTop: "0.5rem", className: "spec-title" }, variantName))),
                react_1.default.createElement(Flexbox_1.default, { alignItems: "center" },
                    react_1.default.createElement("h4", { className: "my-0" }, (0, utils_1.displayMoney)(product.price))),
                react_1.default.createElement(SimpleButton_1.default, { gridArea: "button-remove", onClick: onRemoveFromBasket },
                    react_1.default.createElement(icons_1.CloseOutlined, null))));
        })));
};
const Container = styled_components_1.default.div `
  height: 100px;
  display: flex;
  align-items: center;
  /* @include bezier-transition(); */
  /* animation: slide-up 0.5s ease; */

  display: grid;
  grid-template-columns: 3.5rem 2rem 9rem auto 3.5rem;
  grid-gap: 0.5rem 2rem;
  grid-template-areas:
    'button-plus quantity picture name button-remove'
    'button-minus quantity picture alba button-remove';
`;
exports.default = BasketItem;


/***/ }),

/***/ 34066:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const Square_1 = __importDefault(__webpack_require__(5974));
const SimpleButton = ({ disabled, onClick, children, ...props }) => {
    return (react_1.default.createElement(Square_1.default, { ...props },
        react_1.default.createElement("button", { className: "button button-border button-border-gray button-small basket-control basket-control-add", disabled: disabled, onClick: onClick, type: "button" }, children)));
};
exports.default = SimpleButton;


/***/ }),

/***/ 46152:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
class Boundary extends react_1.Component {
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    componentDidCatch(error) {
        console.log(error);
    }
    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (react_1.default.createElement("div", { className: "loader" },
                react_1.default.createElement("h3", null, ":( Something went wrong.")));
        }
        return children;
    }
}
Boundary.propTypes = {
    children: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.node), prop_types_1.default.node])
        .isRequired
};
exports.default = Boundary;


/***/ }),

/***/ 53243:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const ColorChooser = ({ availableColors, onSelectedColorChange }) => {
    const [selectedColor, setSelectedColor] = (0, react_1.useState)('');
    const setColor = (color) => {
        setSelectedColor(color);
        onSelectedColorChange(color);
    };
    return (react_1.default.createElement("div", { className: "color-chooser" }, availableColors.map((color) => (react_1.default.createElement("div", { className: selectedColor === color
            ? 'color-item color-item-selected'
            : 'color-item', key: color, onClick: () => setColor(color), style: { backgroundColor: color }, role: "presentation" })))));
};
ColorChooser.propTypes = {
    availableColors: prop_types_1.default.arrayOf(prop_types_1.default.string).isRequired,
    onSelectedColorChange: prop_types_1.default.func.isRequired
};
exports.default = ColorChooser;


/***/ }),

/***/ 83979:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-nested-ternary */
const hooks_1 = __webpack_require__(8560);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const filterActions_1 = __webpack_require__(39242);
const selector_1 = __webpack_require__(11306);
const PriceRange_1 = __importDefault(__webpack_require__(14558));
const Filters = ({ closeModal }) => {
    const { filter, isLoading, products } = (0, react_redux_1.useSelector)((state) => ({
        filter: state.filter,
        isLoading: state.app.loading,
        products: state.products.items
    }));
    const [field, setFilter] = (0, react_1.useState)({
        brand: filter.brand,
        minPrice: filter.minPrice,
        maxPrice: filter.maxPrice,
        sortBy: filter.sortBy
    });
    const dispatch = (0, react_redux_1.useDispatch)();
    const history = (0, react_router_dom_1.useHistory)();
    const didMount = (0, hooks_1.useDidMount)();
    const max = (0, selector_1.selectMax)(products);
    const min = (0, selector_1.selectMin)(products);
    (0, react_1.useEffect)(() => {
        if (didMount && window.screen.width <= 480) {
            history.push('/');
        }
        if (didMount && closeModal)
            closeModal();
        setFilter(filter);
        window.scrollTo(0, 0);
    }, [filter]);
    const onPriceChange = (minVal, maxVal) => {
        setFilter({ ...field, minPrice: minVal, maxPrice: maxVal });
    };
    const onBrandFilterChange = (e) => {
        const val = e.target.value;
        setFilter({ ...field, brand: val });
    };
    const onSortFilterChange = (e) => {
        setFilter({ ...field, sortBy: e.target.value });
    };
    const onApplyFilter = () => {
        const isChanged = Object.keys(field).some((key) => field[key] !== filter[key]);
        if (field.minPrice > field.maxPrice) {
            return;
        }
        if (isChanged) {
            dispatch((0, filterActions_1.applyFilter)(field));
        }
        else {
            closeModal();
        }
    };
    const onResetFilter = () => {
        const filterFields = ['brand', 'minPrice', 'maxPrice', 'sortBy'];
        if (filterFields.some((key) => !!filter[key])) {
            dispatch((0, filterActions_1.resetFilter)());
        }
        else {
            closeModal();
        }
    };
    return (react_1.default.createElement("div", { className: "filters" },
        react_1.default.createElement("div", { className: "filters-field" },
            react_1.default.createElement("span", null, "Brand"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            products.length === 0 && isLoading ? (react_1.default.createElement("h5", { className: "text-subtle" }, "Loading Filter")) : (react_1.default.createElement("select", { className: "filters-brand", value: field.brand, disabled: isLoading || products.length === 0, onChange: onBrandFilterChange },
                react_1.default.createElement("option", { value: "" }, "All Brands"),
                react_1.default.createElement("option", { value: "salt" }, "Salt Maalat"),
                react_1.default.createElement("option", { value: "betsin" }, "Betsin Maalat"),
                react_1.default.createElement("option", { value: "black" }, "Black Kibal"),
                react_1.default.createElement("option", { value: "sexbomb" }, "Sexbomb")))),
        react_1.default.createElement("div", { className: "filters-field" },
            react_1.default.createElement("span", null, "Sort By"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("select", { className: "filters-sort-by d-block", value: field.sortBy, disabled: isLoading || products.length === 0, onChange: onSortFilterChange },
                react_1.default.createElement("option", { value: "" }, "None"),
                react_1.default.createElement("option", { value: "name-asc" }, "Name Ascending A - Z"),
                react_1.default.createElement("option", { value: "name-desc" }, "Name Descending Z - A"),
                react_1.default.createElement("option", { value: "price-desc" }, "Price High - Low"),
                react_1.default.createElement("option", { value: "price-asc" }, "Price Low - High"))),
        react_1.default.createElement("div", { className: "filters-field" },
            react_1.default.createElement("span", null, "Price Range"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            (products.length === 0 && isLoading) || max === 0 ? (react_1.default.createElement("h5", { className: "text-subtle" }, "Loading Filter")) : products.length === 1 ? (react_1.default.createElement("h5", { className: "text-subtle" }, "No Price Range")) : (react_1.default.createElement(PriceRange_1.default, { min: min, max: max, initMin: field.minPrice, initMax: field.maxPrice, isLoading: isLoading, onPriceChange: onPriceChange, productsCount: products.length }))),
        react_1.default.createElement("div", { className: "filters-action" },
            react_1.default.createElement("button", { className: "filters-button button button-small", disabled: isLoading || products.length === 0, onClick: onApplyFilter, type: "button" }, "Apply filters"),
            react_1.default.createElement("button", { className: "filters-button button button-border button-small", disabled: isLoading || products.length === 0, onClick: onResetFilter, type: "button" }, "Reset filters"))));
};
Filters.propTypes = {
    closeModal: prop_types_1.default.func.isRequired
};
exports.default = (0, react_router_dom_1.withRouter)(Filters);


/***/ }),

/***/ 24940:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(8560);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const Filters_1 = __importDefault(__webpack_require__(83979));
const Modal_1 = __importDefault(__webpack_require__(78522));
const FiltersToggle = ({ children }) => {
    const { isOpenModal, onOpenModal, onCloseModal } = (0, hooks_1.useModal)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "filters-toggle", onClick: onOpenModal, role: "presentation" }, children),
        react_1.default.createElement(Modal_1.default, { isOpen: isOpenModal, onRequestClose: onCloseModal },
            react_1.default.createElement("div", { className: "filters-toggle-sub" },
                react_1.default.createElement(Filters_1.default, { closeModal: onCloseModal })),
            react_1.default.createElement("button", { className: "modal-close-button", onClick: onCloseModal, type: "button" },
                react_1.default.createElement("i", { className: "fa fa-times-circle" })))));
};
FiltersToggle.propTypes = {
    children: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.node), prop_types_1.default.node])
        .isRequired
};
exports.default = FiltersToggle;


/***/ }),

/***/ 89098:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const logo_full_png_1 = __importDefault(__webpack_require__(51946));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const routes_1 = __webpack_require__(5208);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Footer = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const visibleOnlyPath = [
        routes_1.HOME,
        routes_1.SHOP,
        routes_1.FEATURED_PRODUCTS,
        routes_1.RECOMMENDED_PRODUCTS,
        routes_1.VIEW_PRODUCT,
        routes_1.CHECKOUT_STEP_1,
        routes_1.CHECKOUT_STEP_2,
        routes_1.CHECKOUT_STEP_3,
        routes_1.CHECKOUT_STEP_3A,
        routes_1.CHECKOUT_STEP_4,
        routes_1.CHECKOUT_RESULT
    ];
    const matchRoute = (0, react_router_dom_1.matchPath)(pathname, {
        path: visibleOnlyPath,
        exact: true,
        strict: false
    });
    if (!matchRoute)
        return null;
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement("div", { className: "footer-col-1" }),
        react_1.default.createElement("div", { className: "footer-col-2" },
            react_1.default.createElement(Logo, { alt: "Footer logo", src: logo_full_png_1.default }),
            react_1.default.createElement("h5", null,
                "\u00A9\u00A0",
                new Date().getFullYear())),
        react_1.default.createElement("div", { className: "footer-col-3" })));
};
const Container = styled_components_1.default.footer `
  position: relative;
  padding: ${(props) => `0 ${props.theme.space['xxl-size']}`};
  margin-top: ${(props) => props.theme.space['xl-size']};
  background: ${(props) => props.theme.colors['off-white']};
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* @include mobile {
    padding: 0;
    padding-top: 2.5rem;
    flex-direction: column;
    text-align: center;
  } */

  a {
    text-decoration: underline;
  }
`;
const Logo = styled_components_1.default.img `
  width: 15rem;
  height: 6rem;
  object-fit: contain;
`;
exports.default = Footer;


/***/ }),

/***/ 1221:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(4747);
const react_1 = __importStar(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const ImageLoader = ({ src, alt = '', className = 'image-loader' }) => {
    const loadedImages = {};
    // @ts-ignore
    const [loaded, setLoaded] = (0, react_1.useState)(loadedImages[src]);
    const onLoad = () => {
        // @ts-ignore
        loadedImages[src] = true;
        setLoaded(true);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !loaded && (react_1.default.createElement(icons_1.LoadingOutlined, { style: {
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                margin: 'auto'
            } })),
        react_1.default.createElement(Image, { alt: alt || '', className: `${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading'}`, onLoad: onLoad, src: src })));
};
const Image = styled_components_1.default.img `
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
exports.default = ImageLoader;


/***/ }),

/***/ 33131:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const MessageDisplay = ({ message, description, buttonLabel, action }) => (react_1.default.createElement("div", { className: "loader" },
    react_1.default.createElement("h2", { className: "text-center", style: { wordBreak: 'break-all' } }, message || 'Message'),
    description && react_1.default.createElement("span", null, description),
    react_1.default.createElement("br", null),
    action && (react_1.default.createElement("button", { className: "button button-small", onClick: action, type: "button" }, buttonLabel || 'Okay'))));
MessageDisplay.defaultProps = {
    description: undefined,
    buttonLabel: 'Okay',
    action: undefined
};
MessageDisplay.propTypes = {
    message: prop_types_1.default.string.isRequired,
    description: prop_types_1.default.string,
    buttonLabel: prop_types_1.default.string,
    action: prop_types_1.default.func
};
exports.default = MessageDisplay;


/***/ }),

/***/ 78522:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_modal_1 = __importDefault(__webpack_require__(83253));
const Modal = ({ isOpen, onRequestClose, afterOpenModal, overrideStyle, children }) => {
    const defaultStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            position: 'fixed',
            padding: '50px 20px',
            transition: 'all .5s ease',
            zIndex: 9999,
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 5px 10px rgba(0, 0, 0, .1)',
            animation: 'scale .3s ease',
            ...overrideStyle
        }
    };
    react_modal_1.default.setAppElement('#app');
    return (react_1.default.createElement(react_modal_1.default, { closeTimeoutMS: 300, contentLabel: "Product Modal", isOpen: isOpen, onAfterOpen: afterOpenModal, onRequestClose: onRequestClose, shouldCloseOnOverlayClick: true, style: defaultStyle }, children));
};
Modal.defaultProps = {
    overrideStyle: {},
    afterOpenModal: () => { }
};
Modal.propTypes = {
    isOpen: prop_types_1.default.bool.isRequired,
    onRequestClose: prop_types_1.default.func.isRequired,
    afterOpenModal: prop_types_1.default.func,
    // eslint-disable-next-line react/forbid-prop-types
    overrideStyle: prop_types_1.default.object,
    children: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.node), prop_types_1.default.node])
        .isRequired
};
exports.default = Modal;


/***/ }),

/***/ 42301:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
class Handle extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseOver: false
        };
    }
    onMouseEnter() {
        this.setState({ mouseOver: true });
    }
    onMouseLeave() {
        this.setState({ mouseOver: false });
    }
    render() {
        const { domain: [min, max], handle: { id, value, percent }, isActive, disabled, getHandleProps } = this.props;
        const { mouseOver } = this.state;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            (mouseOver || isActive) && !disabled ? (react_1.default.createElement("div", { style: {
                    left: `${percent}%`,
                    position: 'absolute',
                    marginLeft: '-11px',
                    marginTop: '-35px'
                } },
                react_1.default.createElement("div", { className: "tooltip" },
                    react_1.default.createElement("span", { className: "tooltiptext" },
                        "Value:",
                        value)))) : null,
            react_1.default.createElement("div", { style: {
                    left: `${percent}%`,
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    zIndex: 400,
                    width: 26,
                    height: 42,
                    cursor: 'pointer',
                    // border: '1px solid grey',
                    backgroundColor: 'none'
                }, ...getHandleProps(id, {
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave
                }) }),
            react_1.default.createElement("div", { role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value, label: "Slider", style: {
                    left: `${percent}%`,
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    zIndex: 300,
                    width: 24,
                    height: 24,
                    border: 0,
                    borderRadius: '50%',
                    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
                    backgroundColor: disabled ? '#666' : '#1a1a1a'
                } })));
    }
}
Handle.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    domain: prop_types_1.default.array.isRequired,
    handle: prop_types_1.default.shape({
        id: prop_types_1.default.string.isRequired,
        value: prop_types_1.default.number.isRequired,
        percent: prop_types_1.default.number.isRequired
    }).isRequired,
    getHandleProps: prop_types_1.default.func.isRequired,
    isActive: prop_types_1.default.bool.isRequired,
    disabled: prop_types_1.default.bool
};
Handle.defaultProps = {
    disabled: false
};
exports.default = Handle;


/***/ }),

/***/ 17400:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/jsx-props-no-spreading */
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const railOuterStyle = {
    position: 'absolute',
    transform: 'translate(0%, -50%)',
    width: '100%',
    height: 42,
    borderRadius: 7,
    cursor: 'pointer'
    // border: '1px solid grey',
};
const railInnerStyle = {
    position: 'absolute',
    width: '100%',
    height: 14,
    transform: 'translate(0%, -50%)',
    borderRadius: 7,
    pointerEvents: 'none',
    backgroundColor: '#d0d0d0'
};
const SliderRail = ({ getRailProps }) => (react_1.default.createElement("div", null,
    react_1.default.createElement("div", { style: railOuterStyle, ...getRailProps() }),
    react_1.default.createElement("div", { style: railInnerStyle })));
SliderRail.propTypes = {
    getRailProps: prop_types_1.default.func.isRequired
};
exports.default = SliderRail;


/***/ }),

/***/ 54135:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const Tick = ({ tick, count, format }) => (react_1.default.createElement("div", null,
    react_1.default.createElement("div", { style: {
            position: 'absolute',
            marginTop: 17,
            width: 1,
            height: 5,
            backgroundColor: 'rgb(200,200,200)',
            left: `${tick.percent}%`
        } }),
    react_1.default.createElement("div", { style: {
            position: 'absolute',
            marginTop: 25,
            fontSize: 10,
            textAlign: 'center',
            marginLeft: `${-(100 / count) / 2}%`,
            width: `${100 / count}%`,
            left: `${tick.percent}%`
        } }, format(tick.value))));
Tick.propTypes = {
    tick: prop_types_1.default.shape({
        id: prop_types_1.default.string.isRequired,
        value: prop_types_1.default.number.isRequired,
        percent: prop_types_1.default.number.isRequired
    }).isRequired,
    count: prop_types_1.default.number.isRequired,
    format: prop_types_1.default.func
};
Tick.defaultProps = {
    format: (d) => d
};
exports.default = Tick;


/***/ }),

/***/ 61178:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const Track = ({ source, target, getTrackProps, disabled }) => (react_1.default.createElement("div", { style: {
        position: 'absolute',
        transform: 'translate(0%, -50%)',
        height: 14,
        zIndex: 1,
        backgroundColor: disabled ? '#ffd993' : '#ffa500',
        borderRadius: 7,
        cursor: 'pointer',
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
    }, ...getTrackProps() }));
Track.propTypes = {
    source: prop_types_1.default.shape({
        id: prop_types_1.default.string.isRequired,
        value: prop_types_1.default.number.isRequired,
        percent: prop_types_1.default.number.isRequired
    }).isRequired,
    target: prop_types_1.default.shape({
        id: prop_types_1.default.string.isRequired,
        value: prop_types_1.default.number.isRequired,
        percent: prop_types_1.default.number.isRequired
    }).isRequired,
    getTrackProps: prop_types_1.default.func.isRequired,
    disabled: prop_types_1.default.bool
};
Track.defaultProps = {
    disabled: false
};
exports.default = Track;


/***/ }),

/***/ 14558:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const react_compound_slider_1 = __webpack_require__(33354);
const Handle_1 = __importDefault(__webpack_require__(42301));
const SliderRail_1 = __importDefault(__webpack_require__(17400));
const Tick_1 = __importDefault(__webpack_require__(54135));
const Track_1 = __importDefault(__webpack_require__(61178));
const sliderStyle = {
    position: 'relative',
    width: '100%'
};
const PriceRange = ({ min, max, initMin, initMax, productsCount, onPriceChange }) => {
    const [state, setState] = (0, react_1.useState)({
        domain: [min, max],
        values: [initMin || min, initMax || max],
        update: [min, max].slice(),
        inputMin: initMin || min,
        inputMax: initMax || max,
        inputError: false,
        reversed: false
    });
    const onUpdate = (update) => {
        setState(() => ({
            ...state,
            update,
            inputMin: update[0],
            inputMax: update[1]
        }));
    };
    const onChange = (values) => {
        setState(() => ({
            ...state,
            values,
            inputMin: values[0],
            inputMax: values[1]
        }));
        if (values[0] < values[1])
            onPriceChange(...values);
    };
    const inputClassName = () => state.inputError
        ? 'price-range-input price-input-error'
        : 'price-range-input';
    return (react_1.default.createElement("div", { style: { height: 120, width: '100%' } },
        react_1.default.createElement("div", { className: "price-range-control" },
            react_1.default.createElement("input", { className: inputClassName(), disabled: productsCount === 0, max: max, min: min, type: "number", readOnly: true, value: state.inputMin }),
            "\u2014",
            react_1.default.createElement("input", { className: inputClassName(), disabled: productsCount === 0, max: max, min: min, type: "number", readOnly: true, value: state.inputMax })),
        react_1.default.createElement(react_compound_slider_1.Slider, { mode: 1, step: 1, domain: state.domain, rootStyle: sliderStyle, onUpdate: onUpdate, onChange: onChange, values: state.values },
            react_1.default.createElement(react_compound_slider_1.Rail, null, ({ getRailProps }) => react_1.default.createElement(SliderRail_1.default, { getRailProps: getRailProps })),
            react_1.default.createElement(react_compound_slider_1.Handles, null, ({ handles, activeHandleID, getHandleProps }) => (react_1.default.createElement("div", { className: "slider-handles" }, handles.map((handle) => (react_1.default.createElement(Handle_1.default, { key: handle.id, handle: handle, domain: state.domain, isActive: handle.id === activeHandleID, getHandleProps: getHandleProps })))))),
            react_1.default.createElement(react_compound_slider_1.Tracks, { left: false, right: false }, ({ tracks, getTrackProps }) => (react_1.default.createElement("div", { className: "slider-tracks" }, tracks.map(({ id, source, target }) => (react_1.default.createElement(Track_1.default, { key: id, source: source, target: target, getTrackProps: getTrackProps })))))),
            react_1.default.createElement(react_compound_slider_1.Ticks, { count: 5 }, ({ ticks }) => (react_1.default.createElement("div", { className: "slider-ticks" }, ticks.map((tick) => (react_1.default.createElement(Tick_1.default, { key: tick.id, tick: tick, count: ticks.length })))))))));
};
PriceRange.defaultProps = {
    initMin: undefined,
    initMax: undefined
};
PriceRange.propTypes = {
    initMin: prop_types_1.default.number,
    initMax: prop_types_1.default.number,
    min: prop_types_1.default.number.isRequired,
    max: prop_types_1.default.number.isRequired,
    productsCount: prop_types_1.default.number.isRequired,
    onPriceChange: prop_types_1.default.func.isRequired
};
exports.default = PriceRange;


/***/ }),

/***/ 60152:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/no-array-index-key */
const icons_1 = __webpack_require__(4747);
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const filterActions_1 = __webpack_require__(39242);
const SearchBar = () => {
    const [searchInput, setSearchInput] = (0, react_1.useState)('');
    const { filter, isLoading } = (0, react_redux_1.useSelector)((state) => ({
        filter: state.filter,
        isLoading: state.app.loading
    }));
    const searchbarRef = (0, react_1.useRef)(null);
    const history = (0, react_router_dom_1.useHistory)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const isMobile = window.screen.width <= 800;
    const onSearchChange = (e) => {
        const val = e.target.value.trimStart();
        setSearchInput(val);
    };
    const onKeyUp = (e) => {
        if (e.keyCode === 13) {
            // dispatch(setTextFilter(searchInput));
            e.target.blur();
            searchbarRef.current.classList.remove('is-open-recent-search');
            if (isMobile) {
                history.push('/');
            }
            history.push(`/search/${searchInput.trim().toLowerCase()}`);
        }
    };
    const recentSearchClickHandler = (e) => {
        const searchBar = e.target.closest('.searchbar');
        if (!searchBar) {
            searchbarRef.current.classList.remove('is-open-recent-search');
            document.removeEventListener('click', recentSearchClickHandler);
        }
    };
    const onFocusInput = (e) => {
        e.target.select();
        if (filter.recent.length !== 0) {
            searchbarRef.current.classList.add('is-open-recent-search');
            document.addEventListener('click', recentSearchClickHandler);
        }
    };
    const onClickRecentSearch = (keyword) => {
        // dispatch(setTextFilter(keyword));
        searchbarRef.current.classList.remove('is-open-recent-search');
        history.push(`/search/${keyword.trim().toLowerCase()}`);
    };
    const onClearRecent = () => {
        dispatch((0, filterActions_1.clearRecentSearch)());
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "searchbar", ref: searchbarRef },
            react_1.default.createElement(icons_1.SearchOutlined, { className: "searchbar-icon" }),
            react_1.default.createElement("input", { className: "search-input searchbar-input", onChange: onSearchChange, onKeyUp: onKeyUp, onFocus: onFocusInput, placeholder: "Search product...", readOnly: isLoading, type: "text", value: searchInput }),
            filter.recent.length !== 0 && (react_1.default.createElement("div", { className: "searchbar-recent" },
                react_1.default.createElement("div", { className: "searchbar-recent-header" },
                    react_1.default.createElement("h5", null, "Recent Search"),
                    react_1.default.createElement("h5", { className: "searchbar-recent-clear text-subtle", onClick: onClearRecent, role: "presentation" }, "Clear")),
                filter.recent.map((item, index) => (react_1.default.createElement("div", { className: "searchbar-recent-wrapper", key: `search-${item}-${index}` },
                    react_1.default.createElement("h5", { className: "searchbar-recent-keyword margin-0", onClick: () => onClickRecentSearch(item), role: "presentation" }, item),
                    react_1.default.createElement("span", { className: "searchbar-recent-button text-subtle", onClick: () => dispatch((0, filterActions_1.removeSelectedRecent)(item)), role: "presentation" }, "X")))))))));
};
exports.default = SearchBar;


/***/ }),

/***/ 71486:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(4747);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const authActions_1 = __webpack_require__(12927);
const SocialLogin = ({ isLoading }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const onSignInWithGoogle = () => {
        dispatch((0, authActions_1.signInWithGoogle)());
    };
    const onSignInWithFacebook = () => {
        dispatch((0, authActions_1.signInWithFacebook)());
    };
    const onSignInWithGithub = () => {
        dispatch((0, authActions_1.signInWithGithub)());
    };
    return (react_1.default.createElement("div", { className: "auth-provider" },
        react_1.default.createElement("button", { className: "button auth-provider-button provider-facebook", disabled: isLoading, onClick: onSignInWithFacebook, type: "button" },
            react_1.default.createElement(icons_1.FacebookOutlined, null),
            "Continue with Facebook"),
        react_1.default.createElement("button", { className: "button auth-provider-button provider-google", disabled: isLoading, onClick: onSignInWithGoogle, type: "button" },
            react_1.default.createElement(icons_1.GoogleOutlined, null),
            "Continue with Google"),
        react_1.default.createElement("button", { className: "button auth-provider-button provider-github", disabled: isLoading, onClick: onSignInWithGithub, type: "button" },
            react_1.default.createElement(icons_1.GithubFilled, null),
            "Continue with GitHub")));
};
SocialLogin.propTypes = {
    isLoading: prop_types_1.default.bool.isRequired
};
exports.default = SocialLogin;


/***/ }),

/***/ 60886:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocialLogin = exports.SearchBar = exports.PriceRange = exports.Modal = exports.MessageDisplay = exports.ImageLoader = exports.Footer = exports.FiltersToggle = exports.Filters = exports.ColorChooser = exports.Boundary = exports.AdminSideBar = void 0;
var AdminSidePanel_1 = __webpack_require__(98920);
Object.defineProperty(exports, "AdminSideBar", ({ enumerable: true, get: function () { return __importDefault(AdminSidePanel_1).default; } }));
var Boundary_1 = __webpack_require__(46152);
Object.defineProperty(exports, "Boundary", ({ enumerable: true, get: function () { return __importDefault(Boundary_1).default; } }));
var ColorChooser_1 = __webpack_require__(53243);
Object.defineProperty(exports, "ColorChooser", ({ enumerable: true, get: function () { return __importDefault(ColorChooser_1).default; } }));
var Filters_1 = __webpack_require__(83979);
Object.defineProperty(exports, "Filters", ({ enumerable: true, get: function () { return __importDefault(Filters_1).default; } }));
var FiltersToggle_1 = __webpack_require__(24940);
Object.defineProperty(exports, "FiltersToggle", ({ enumerable: true, get: function () { return __importDefault(FiltersToggle_1).default; } }));
var Footer_1 = __webpack_require__(89098);
Object.defineProperty(exports, "Footer", ({ enumerable: true, get: function () { return __importDefault(Footer_1).default; } }));
var ImageLoader_1 = __webpack_require__(1221);
Object.defineProperty(exports, "ImageLoader", ({ enumerable: true, get: function () { return __importDefault(ImageLoader_1).default; } }));
var MessageDisplay_1 = __webpack_require__(33131);
Object.defineProperty(exports, "MessageDisplay", ({ enumerable: true, get: function () { return __importDefault(MessageDisplay_1).default; } }));
var Modal_1 = __webpack_require__(78522);
Object.defineProperty(exports, "Modal", ({ enumerable: true, get: function () { return __importDefault(Modal_1).default; } }));
var PriceRange_1 = __webpack_require__(14558);
Object.defineProperty(exports, "PriceRange", ({ enumerable: true, get: function () { return __importDefault(PriceRange_1).default; } }));
var SearchBar_1 = __webpack_require__(60152);
Object.defineProperty(exports, "SearchBar", ({ enumerable: true, get: function () { return __importDefault(SearchBar_1).default; } }));
var SocialLogin_1 = __webpack_require__(71486);
Object.defineProperty(exports, "SocialLogin", ({ enumerable: true, get: function () { return __importDefault(SocialLogin_1).default; } }));


/***/ }),

/***/ 13148:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const InputColor = (props) => {
    const { name, form, push, remove } = props;
    const [selectedColor, setSelectedColor] = react_1.default.useState('');
    const handleColorChange = (e) => {
        const val = e.target.value;
        setSelectedColor(val);
    };
    const handleAddSelectedColor = () => {
        if (!form.values[name].includes(selectedColor)) {
            push(selectedColor);
            setSelectedColor('');
        }
    };
    return (react_1.default.createElement("div", { className: "d-flex" },
        react_1.default.createElement("div", { className: "input-group product-form-field" },
            react_1.default.createElement("div", { className: "d-flex" },
                form.touched[name] && form.errors[name] ? (react_1.default.createElement("span", { className: "label-input label-error" }, form.errors[name])) : (react_1.default.createElement("label", { className: "label-input", htmlFor: name }, "Available Colors")),
                selectedColor && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: "color-item", style: { background: selectedColor } }),
                    react_1.default.createElement("h4", { className: "text-link", onClick: handleAddSelectedColor, style: { textDecoration: 'underline' }, role: "presentation" },
                        react_1.default.createElement("i", { className: "fa fa-check" }),
                        "Add Selected Color")))),
            react_1.default.createElement("input", { name: name, type: "color", onChange: handleColorChange, id: name })),
        react_1.default.createElement("div", { className: "product-form-field" },
            react_1.default.createElement("span", { className: "d-block padding-s" }, "Selected Color(s)"),
            react_1.default.createElement("div", { className: "color-chooser" }, form.values[name]?.map((color, index) => (react_1.default.createElement("div", { key: color, onClick: () => remove(index), className: "color-item color-item-deletable", title: `Remove ${color}`, style: { backgroundColor: color }, role: "presentation" })))))));
};
InputColor.propTypes = {
    name: prop_types_1.default.string.isRequired,
    form: prop_types_1.default.shape({
        values: prop_types_1.default.object,
        touched: prop_types_1.default.object,
        errors: prop_types_1.default.object
    }).isRequired,
    push: prop_types_1.default.func.isRequired,
    remove: prop_types_1.default.func.isRequired
};
exports.default = InputColor;


/***/ }),

/***/ 31361:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/forbid-prop-types */
const formik_1 = __webpack_require__(94649);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const creatable_1 = __importDefault(__webpack_require__(49153));
const CustomCreatableSelect = (props) => {
    const [field, meta, helpers] = (0, formik_1.useField)(props);
    const { options, defaultValue, label, placeholder, isMulti, type, iid } = props;
    const { touched, error } = meta;
    const { setValue } = helpers;
    const handleChange = (newValue) => {
        if (Array.isArray(newValue)) {
            const arr = newValue.map((fieldKey) => fieldKey.value);
            setValue(arr);
        }
        else {
            setValue(newValue.value);
        }
    };
    const handleKeyDown = (e) => {
        if (type === 'number') {
            const { key } = e.nativeEvent;
            if (/\D/.test(key) && key !== 'Backspace') {
                e.preventDefault();
            }
        }
    };
    return (react_1.default.createElement("div", { className: "input-group" },
        touched && error ? (react_1.default.createElement("span", { className: "label-input label-error" }, error)) : (react_1.default.createElement("label", { className: "label-input", htmlFor: field.name }, label)),
        react_1.default.createElement(creatable_1.default, { isMulti: isMulti, placeholder: placeholder, name: field.name, onChange: handleChange, onKeyDown: handleKeyDown, defaultValue: defaultValue, options: options, instanceId: iid, styles: {
                menu: (provided) => ({
                    ...provided,
                    zIndex: 10
                }),
                container: (provided) => ({
                    ...provided,
                    marginBottom: '1.2rem'
                }),
                control: (provided) => ({
                    ...provided,
                    border: touched && error ? '1px solid red' : '1px solid #cacaca'
                })
            } })));
};
CustomCreatableSelect.defaultProps = {
    isMulti: false,
    placeholder: '',
    iid: '',
    options: [],
    type: 'string'
};
CustomCreatableSelect.propTypes = {
    options: prop_types_1.default.arrayOf(prop_types_1.default.object),
    defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.array])
        .isRequired,
    label: prop_types_1.default.string.isRequired,
    placeholder: prop_types_1.default.string,
    isMulti: prop_types_1.default.bool,
    type: prop_types_1.default.string,
    iid: prop_types_1.default.string
};
exports.default = CustomCreatableSelect;


/***/ }),

/***/ 6349:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const CustomInput = ({ type = 'text', disabled, field, meta, label, placeholder }) => {
    const touched = meta?.touched;
    const { error } = meta;
    return (react_1.default.createElement("div", { className: "input-group" },
        touched && error ? (react_1.default.createElement("span", { className: "label-input label-error" }, error)) : (react_1.default.createElement("label", { className: "label-input", htmlFor: field.name }, label)),
        react_1.default.createElement("input", { ...field, type: type, disabled: disabled, id: field.name, placeholder: placeholder, className: `input-form ${touched && error && 'input-error'}` })));
};
exports.default = CustomInput;


/***/ }),

/***/ 89882:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/forbid-prop-types */
const formik_1 = __webpack_require__(94649);
const react_1 = __importDefault(__webpack_require__(67294));
const react_phone_input_2_1 = __importDefault(__webpack_require__(67555));
const CustomMobileInput = ({ disabled, ...props }) => {
    const [field, meta, helpers] = (0, formik_1.useField)(props);
    const { label, placeholder, defaultValue } = props;
    const { touched, error } = meta;
    const { setValue } = helpers;
    const handleChange = (value, data) => {
        const mob = {
            dialCode: data.dialCode,
            countryCode: data.countryCode,
            country: data.name,
            value
        };
        setValue(mob);
    };
    return (react_1.default.createElement("div", { className: "input-group" },
        touched && error ? (react_1.default.createElement("span", { className: "label-input label-error" }, error?.value || error?.dialCode)) : (react_1.default.createElement("label", { className: "label-input", htmlFor: field.name }, label)),
        react_1.default.createElement(react_phone_input_2_1.default, { disabled: disabled, country: "pl", inputClass: "input-form d-block", style: {
                border: touched && error ? '1px solid red' : '1px solid #cacaca'
            }, inputExtraProps: { required: true }, onChange: handleChange, placeholder: placeholder, disableDropdown: true, countryCodeEditable: false, value: defaultValue.value, masks: { pl: '... .. .. ..' } })));
};
exports.default = CustomMobileInput;


/***/ }),

/***/ 86423:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const CustomTextarea = ({ field, form: { touched, errors }, label, ...props }) => (react_1.default.createElement("div", { className: "input-group" },
    touched[field.name] && errors[field.name] ? (react_1.default.createElement("span", { className: "label-input label-error" }, errors[field.name])) : (react_1.default.createElement("label", { className: "label-input", htmlFor: field.name }, label)),
    react_1.default.createElement("textarea", { name: field.name, cols: 30, rows: 4, id: field.name, className: `input-form ${touched[field.name] && errors[field.name] && 'input-error'}`, ...field, ...props })));
CustomTextarea.propTypes = {
    label: prop_types_1.default.string.isRequired,
    field: prop_types_1.default.object.isRequired,
    form: prop_types_1.default.object.isRequired
};
exports.default = CustomTextarea;


/***/ }),

/***/ 63011:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomTextarea = exports.CustomMobileInput = exports.CustomInput = exports.CustomCreatableSelect = exports.CustomColorInput = void 0;
var CustomColorInput_1 = __webpack_require__(13148);
Object.defineProperty(exports, "CustomColorInput", ({ enumerable: true, get: function () { return __importDefault(CustomColorInput_1).default; } }));
var CustomCreatableSelect_1 = __webpack_require__(31361);
Object.defineProperty(exports, "CustomCreatableSelect", ({ enumerable: true, get: function () { return __importDefault(CustomCreatableSelect_1).default; } }));
var CustomInput_1 = __webpack_require__(6349);
Object.defineProperty(exports, "CustomInput", ({ enumerable: true, get: function () { return __importDefault(CustomInput_1).default; } }));
var CustomMobileInput_1 = __webpack_require__(89882);
Object.defineProperty(exports, "CustomMobileInput", ({ enumerable: true, get: function () { return __importDefault(CustomMobileInput_1).default; } }));
var CustomTextarea_1 = __webpack_require__(86423);
Object.defineProperty(exports, "CustomTextarea", ({ enumerable: true, get: function () { return __importDefault(CustomTextarea_1).default; } }));


/***/ }),

/***/ 9982:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Banner = ({ img, description, title, children }) => (react_1.default.createElement(Container, null,
    react_1.default.createElement(Description, null,
        title,
        description && react_1.default.createElement("p", null, description),
        children),
    react_1.default.createElement(ImageWrapper, null,
        react_1.default.createElement("img", { src: img, alt: "" }))));
const Container = styled_components_1.default.div `
  width: 100%;
  height: 40rem;
  background: ${(props) => props.theme.colors.color1};
  display: flex;

  /* @include mobile {
    height: auto;
    flex-direction: column;
  } */
`;
const Description = styled_components_1.default.div `
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  flex-basis: 50%;

  /* @include mobile {
    padding: 5rem 0;
  } */

  h1 {
    font-size: 4.8rem;
    margin-bottom: 1rem;
    width: 80%;

    /* @include mobile {
      width: 100%;
    } */
  }
`;
const ImageWrapper = styled_components_1.default.div `
  position: relative;
  width: 100%;
  height: 100%;
  flex-basis: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* transform: translateX(5rem); */
  }
`;
exports.default = Banner;


/***/ }),

/***/ 79125:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importStar(__webpack_require__(29958));
const styled_system_1 = __webpack_require__(18005);
const Button = ({ variant = 'primary', disabled, onClick, children, type = 'button', size = 'large', ...props }) => (react_1.default.createElement(Container, { ...props, size: size, variant: variant, disabled: disabled, onClick: onClick, type: type }, children));
const Container = styled_components_1.default.button `
  background: ${(props) => props.theme.colors['button-color']};
  padding: ${(props) => props.theme.space['m-size']};
  border: 1px solid ${(props) => props.theme.colors['button-color']};
  color: ${(props) => props.theme.colors['white']};
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* @include bezier-transition(all, 0.3s, ease); */

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors['button-hover']};
    border: 1px solid ${(props) => props.theme.colors['button-hover']};
    text-decoration: none;
  }

  ${(props) => props.variant === 'secondary' &&
    (0, styled_components_1.css) `
      background: transparent;
      border: 1px solid ${(props) => props.theme.colors['button-color']};
      color: ${(props) => props.theme.colors['button-color']};

      &:hover {
        background: ${(props) => props.theme.colors['border-color']};
        border: 1px solid ${(props) => props.theme.colors['button-color']};
      }
    `}

  ${(props) => props.variant === 'ternary' &&
    (0, styled_components_1.css) `
      background: transparent;
      border: 1px solid ${(props) => props.theme.colors['border-color']};
      color: ${(props) => props.theme.colors['paragraph-color']};

      &:hover {
        border: 1px solid ${(props) => props.theme.colors['border-color']};
        background: ${(props) => props.theme.colors['border-color']};
      }
    `}


    ${(props) => props.size === 'small' &&
    (0, styled_components_1.css) `
      font-size: ${(props) => props.theme.fontSizes['font-small']};
      padding: ${(props) => `${props.theme.space['s-size']} ${props.theme.space['m-size']}`};
    `}

  ${(props) => props.disabled &&
    (0, styled_components_1.css) `
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
      }
    `}

  ${styled_system_1.space}
`;
exports.default = Button;


/***/ }),

/***/ 75177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Box_1 = __importDefault(__webpack_require__(84962));
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const react_1 = __importDefault(__webpack_require__(67294));
const CheckboxField = ({ id, field: { value, onChange, onBlur, name }, meta: { touched, error }, isFirst, title, subtitle, val, fieldLabel }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isFirst && (react_1.default.createElement(Flexbox_1.default, { marginBottom: "0 !important", marginRight: "auto", justifyContent: "flex-start" }, touched && error ? (react_1.default.createElement("span", { className: "label-input label-error" }, error)) : (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        react_1.default.createElement("label", { className: "label-input", htmlFor: name }, fieldLabel)))),
        react_1.default.createElement("div", { style: { margin: '0' }, className: "checkout-field" },
            react_1.default.createElement("div", { className: "checkout-checkbox-field" },
                react_1.default.createElement("input", { name: name, id: id, type: "radio", value: id, checked: id === value, onChange: onChange, onBlur: onBlur }),
                react_1.default.createElement("label", { className: "d-flex w-100", htmlFor: id },
                    react_1.default.createElement("h5", { className: "d-flex-grow-1 margin-0" },
                        title,
                        subtitle && (react_1.default.createElement(Box_1.default, { marginLeft: "0.5rem", as: "span", className: "text-subtle" }, subtitle))),
                    val && react_1.default.createElement("h4", { className: "margin-0" }, val))))));
};
exports.default = CheckboxField;


/***/ }),

/***/ 40648:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const common_1 = __webpack_require__(60886);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const ProductsGrid_1 = __importDefault(__webpack_require__(33985));
const Display = ({ title, link, error, isLoading, fetchProducts, products, full, ...props }) => {
    return (react_1.default.createElement(Container, { ...props },
        react_1.default.createElement(Header, null,
            title && react_1.default.createElement("h1", null, title),
            link && link),
        error && !isLoading ? (react_1.default.createElement(common_1.MessageDisplay, { message: error, action: fetchProducts, buttonLabel: "Try Again" })) : (react_1.default.createElement(ProductsGrid_1.default, { full: full, products: products }))));
};
const Container = styled_components_1.default.div `
  margin-top: 10rem;

  /* @include mobile {
    margin: 0;
  } */
`;
const Header = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
    font-size: 1.8rem;
  }
`;
exports.default = Display;


/***/ }),

/***/ 77704:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Box_1 = __importDefault(__webpack_require__(84962));
const Flexbox = (0, styled_components_1.default)(Box_1.default).attrs(() => ({
    display: 'flex'
})) ``;
exports.default = Flexbox;


/***/ }),

/***/ 76868:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(60886);
const react_1 = __importDefault(__webpack_require__(67294));
const react_loading_skeleton_1 = __importStar(__webpack_require__(51655));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const utils_1 = __webpack_require__(79941);
const ProductTile = ({ product }) => {
    const history = (0, react_router_dom_1.useHistory)();
    const onClickItem = () => {
        if (!product)
            return;
        history.push(`/product/${product.id}`);
    };
    return (react_1.default.createElement(react_loading_skeleton_1.SkeletonTheme, { color: "#e1e1e1", highlightColor: "#f2f2f2" },
        react_1.default.createElement(Container, { onClick: onClickItem, role: "presentation" },
            react_1.default.createElement(ImageWrapper, null, product.gallery ? (react_1.default.createElement(common_1.ImageLoader, { alt: "", className: "product-card-img", src: product.gallery[0].url })) : (react_1.default.createElement(react_loading_skeleton_1.default, { width: "100%", height: "100%" }))),
            react_1.default.createElement(InfoWrapper, null,
                react_1.default.createElement("h3", null, product.name || react_1.default.createElement(react_loading_skeleton_1.default, { width: 80 })),
                react_1.default.createElement("p", { className: "text-subtle text-italic" }, product.price ? ((0, utils_1.displayMoney)(product.price)) : (react_1.default.createElement(react_loading_skeleton_1.default, { width: 40 })))))));
};
const Container = styled_components_1.default.div `
  width: 100%;
  max-height: 30rem;
  border: 1px solid ${(props) => props.theme.colors['border-color']};

  &:hover {
    cursor: pointer;

    & > * img {
      transform: scale(1.1);
    }
  }
`;
const ImageWrapper = styled_components_1.default.div `
  width: 100%;
  height: 20rem;
  background: ${(props) => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  padding: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* @include bezier-transition; */
  }
`;
const InfoWrapper = styled_components_1.default.div `
  padding: 1.5rem;

  h3 {
    margin: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
exports.default = ProductTile;


/***/ }),

/***/ 33985:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const ProductTile_1 = __importDefault(__webpack_require__(76868));
const ProductsGrid = ({ products, skeletonCount = 3, full }) => {
    const productsLoaded = products.length !== 0;
    let productsToBeDisplayed = new Array(skeletonCount).fill({});
    if (productsLoaded) {
        productsToBeDisplayed = products;
        if (!full) {
            productsToBeDisplayed = productsToBeDisplayed.slice(0, 3);
        }
    }
    return (react_1.default.createElement(Container, null, productsToBeDisplayed.map((product) => (react_1.default.createElement(ProductTile_1.default, { key: product.id, product: product })))));
};
const GRID_GAP = '3rem';
const Container = styled_components_1.default.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, 38rem);
  grid-gap: ${GRID_GAP};
`;
exports.default = ProductsGrid;


/***/ }),

/***/ 32641:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Box_1 = __importDefault(__webpack_require__(84962));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Separator = (0, styled_components_1.default)(Box_1.default) `
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.color2};
  margin: 2rem 0;
`;
exports.default = Separator;


/***/ }),

/***/ 5974:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(67294));
const Box_1 = __importDefault(__webpack_require__(84962));
const Square = ({ children, ratio = 1, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    const [height, setHeight] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const handleResize = () => {
            const rect = ref.current?.getBoundingClientRect();
            if (rect) {
                setHeight(rect.width * ratio);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [ref, ratio]);
    return (react_1.default.createElement(Box_1.default, { ref: ref, width: "100%", height: `${height}px`, ...props }, children));
};
exports.default = Square;


/***/ }),

/***/ 6401:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REGISTER_USER = exports.REMOVE_SELECTED_RECENT = exports.CLEAR_RECENT_SEARCH = exports.APPLY_FILTER = exports.RESET_FILTER = exports.SET_MAX_PRICE_FILTER = exports.SET_MIN_PRICE_FILTER = exports.SET_BRAND_FILTER = exports.SET_TEXT_FILTER = exports.CLEAR_PROFILE = exports.UPDATE_PROFILE_SUCCESS = exports.UPDATE_PROFILE = exports.SET_PROFILE = exports.UPDATE_EMAIL = exports.RESET_PASSWORD = exports.ON_AUTHSTATE_FAIL = exports.ON_AUTHSTATE_SUCCESS = exports.SET_AUTH_PERSISTENCE = exports.ON_AUTHSTATE_CHANGED = exports.SIGNIN_WITH_GITHUB = exports.SIGNIN_WITH_FACEBOOK = exports.SIGNIN_WITH_GOOGLE = exports.SET_AUTH_STATUS = exports.SIGNOUT_SUCCESS = exports.SIGNOUT = exports.SIGNUP_SUCCESS = exports.SIGNUP = exports.SIGNIN_SUCCESS = exports.SIGNIN = exports.MINUS_QTY_ITEM = exports.ADD_QTY_ITEM = exports.CLEAR_BASKET = exports.REMOVE_FROM_BASKET = exports.ADD_TO_BASKET = exports.SET_BASKET_ITEMS = exports.SET_ORDERS_ITEMS = exports.ADD_ORDER_REMOTELY = exports.SET_LAST_REF_KEY = exports.CLEAR_SEARCH_STATE = exports.CANCEL_GET_PRODUCTS = exports.EDIT_PRODUCT_SUCCESS = exports.EDIT_PRODUCT = exports.REMOVE_PRODUCT_SUCCESS = exports.REMOVE_PRODUCT = exports.ADD_PRODUCT_SUCCESS = exports.ADD_PRODUCT = exports.GET_PRODUCTS_SUCCESS = exports.SEARCH_PRODUCT_SUCCESS = exports.SEARCH_PRODUCT = exports.GET_PRODUCTS = void 0;
exports.SET_CUSTOMER_TYPE_LOCALY = exports.SET_PREFERRED_DELIVERY = exports.ADD_PREFERRED_DELIVERY = exports.SET_PREFERRED_PAYMENT_LOCALY = exports.SET_CONTACT_DETAILS_LOCALY = exports.SET_SHIPPING_LOCALY = exports.SET_REQUEST_STATUS = exports.IS_AUTHENTICATING = exports.LOADING = exports.EDIT_USER = exports.DELETE_USER = exports.ADD_USER = exports.GET_USER = void 0;
exports.GET_PRODUCTS = 'GET_PRODUCTS';
exports.SEARCH_PRODUCT = 'SEARCH_PRODUCT';
exports.SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
exports.GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
exports.ADD_PRODUCT = 'ADD_PRODUCT';
exports.ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
exports.REMOVE_PRODUCT = 'REMOVE_PRODUCT';
exports.REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
exports.EDIT_PRODUCT = 'EDIT_PRODUCT';
exports.EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
exports.CANCEL_GET_PRODUCTS = 'CANCEL_GET_PRODUCTS';
exports.CLEAR_SEARCH_STATE = 'CLEAR_SEARCH_STATE';
exports.SET_LAST_REF_KEY = 'SET_LAST_REF_KEY';
exports.ADD_ORDER_REMOTELY = 'ADD_ORDER_REMOTELY';
exports.SET_ORDERS_ITEMS = 'SET_ORDERS_ITEMS';
exports.SET_BASKET_ITEMS = 'SET_BASKET_ITEMS';
exports.ADD_TO_BASKET = 'ADD_TO_BASKET';
exports.REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
exports.CLEAR_BASKET = 'CLEAR_BASKET';
exports.ADD_QTY_ITEM = 'ADD_QTY_ITEM';
exports.MINUS_QTY_ITEM = 'MINUS_QTY_ITEM';
exports.SIGNIN = 'SIGNIN';
exports.SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
exports.SIGNUP = 'SIGNUP';
exports.SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
exports.SIGNOUT = 'SIGNOUT';
exports.SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
exports.SET_AUTH_STATUS = 'SET_AUTH_STATUS';
exports.SIGNIN_WITH_GOOGLE = 'SIGNIN_WITH_GOOGLE';
exports.SIGNIN_WITH_FACEBOOK = 'SIGNIN_WITH_FACEBOOK';
exports.SIGNIN_WITH_GITHUB = 'SIGNIN_WITH_GITHUB';
exports.ON_AUTHSTATE_CHANGED = 'ON_AUTHSTATE_CHANGED';
exports.SET_AUTH_PERSISTENCE = 'SET_AUTH_PERSISTENCE';
exports.ON_AUTHSTATE_SUCCESS = 'ON_AUTHSTATE_SUCCESS';
exports.ON_AUTHSTATE_FAIL = 'ON_AUTHSTATE_FAIL';
exports.RESET_PASSWORD = 'RESET_PASSWORD';
exports.UPDATE_EMAIL = 'UPDATE_EMAIL';
exports.SET_PROFILE = 'SET_PROFILE';
exports.UPDATE_PROFILE = 'UPDATE_PROFILE';
exports.UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
exports.CLEAR_PROFILE = 'CLEAR_PROFILE';
exports.SET_TEXT_FILTER = 'SET_TEXT_FILTER';
exports.SET_BRAND_FILTER = 'SET_BRAND_FILTER';
exports.SET_MIN_PRICE_FILTER = 'SET_MIN_PRICE_FILTER';
exports.SET_MAX_PRICE_FILTER = 'SET_MAX_PRICE_FILTER';
exports.RESET_FILTER = 'RESET_FILTER';
exports.APPLY_FILTER = 'APPLY_FILTER';
exports.CLEAR_RECENT_SEARCH = 'CLEAR_RECENT_SEARCH';
exports.REMOVE_SELECTED_RECENT = 'REMOVE_SELECTED_RECENT';
exports.REGISTER_USER = 'REGISTER_USER';
exports.GET_USER = 'GET_USER';
exports.ADD_USER = 'ADD_USER';
exports.DELETE_USER = 'DELETE_USER';
exports.EDIT_USER = 'EDIT_USER';
exports.LOADING = 'LOADING';
exports.IS_AUTHENTICATING = 'IS_AUTHENTICATING';
exports.SET_REQUEST_STATUS = 'SET_REQUEST_STATUS';
// SHIPPING
exports.SET_SHIPPING_LOCALY = 'SET_SHIPPING_LOCALY';
// CONTACT DETAILS
exports.SET_CONTACT_DETAILS_LOCALY = 'SET_CONTACT_DETAILS_LOCALY';
// PREFERRED_PAYMENT
exports.SET_PREFERRED_PAYMENT_LOCALY = 'SET_PREFERRED_PAYMENT_LOCALY';
// PREFERRED_DELIVERY
exports.ADD_PREFERRED_DELIVERY = 'ADD_PREFERRED_DELIVERY';
exports.SET_PREFERRED_DELIVERY = 'SET_PREFERRED_DELIVERY';
// CUSTOMER TYPE
exports.SET_CUSTOMER_TYPE_LOCALY = 'SET_CUSTOMER_TYPE_LOCALY';


/***/ }),

/***/ 24502:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const PAYMENT_METHODS = ['TRANSFER'];
exports.default = PAYMENT_METHODS;


/***/ }),

/***/ 5208:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SIGNUP_CONFIRMATION = exports.SIGNUP = exports.VIEW_PRODUCT = exports.CHECKOUT_RESULT = exports.CHECKOUT_STEP_4 = exports.CHECKOUT_STEP_3A = exports.CHECKOUT_STEP_3 = exports.CHECKOUT_STEP_2 = exports.CHECKOUT_STEP_1 = exports.FORGOT_PASSWORD = exports.SIGNOUT = exports.SIGNIN = exports.SEARCH = exports.EDIT_PRODUCT = exports.ADD_PRODUCT = exports.ADMIN_USERS = exports.ADMIN_PRODUCTS = exports.ADMIN_DASHBOARD = exports.ACCOUNT_EDIT = exports.ACCOUNT = exports.RECOMMENDED_PRODUCTS = exports.FEATURED_PRODUCTS = exports.SHOP = exports.HOME = void 0;
exports.HOME = '/';
exports.SHOP = '/shop';
exports.FEATURED_PRODUCTS = '/featured';
exports.RECOMMENDED_PRODUCTS = '/recommended';
exports.ACCOUNT = '/account';
exports.ACCOUNT_EDIT = '/account/edit';
exports.ADMIN_DASHBOARD = '/admin/dashboard';
exports.ADMIN_PRODUCTS = '/admin/products';
exports.ADMIN_USERS = '/admin/users';
exports.ADD_PRODUCT = '/admin/add';
exports.EDIT_PRODUCT = '/admin/edit';
exports.SEARCH = '/search/:searchKey';
exports.SIGNIN = '/signin';
exports.SIGNOUT = '/signout';
exports.FORGOT_PASSWORD = '/forgot_password';
exports.CHECKOUT_STEP_1 = '/checkout/step1';
exports.CHECKOUT_STEP_2 = '/checkout/step2';
exports.CHECKOUT_STEP_3 = '/checkout/step3';
exports.CHECKOUT_STEP_3A = '/checkuout/step3a';
exports.CHECKOUT_STEP_4 = '/checkout/step4';
exports.CHECKOUT_RESULT = '/checkout/result';
exports.VIEW_PRODUCT = '/product/:id';
// NEW
exports.SIGNUP = '/signup';
exports.SIGNUP_CONFIRMATION = '/signup_confirmation';


/***/ }),

/***/ 2406:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const getRequiredOrNot = (label, required) => `${required ? '* ' : ''}${label}`;
exports.default = getRequiredOrNot;


/***/ }),

/***/ 79941:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayActionMessage = exports.calculateTotal = exports.displayMoney = exports.displayDate = void 0;
const displayDate = (timestamp) => {
    const date = new Date(timestamp);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${day}, ${year}`;
};
exports.displayDate = displayDate;
const displayMoney = (n) => {
    const format = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN'
    });
    // or use toLocaleString()
    return format.format(n);
};
exports.displayMoney = displayMoney;
const calculateTotal = (arr) => {
    if (!arr || arr?.length === 0)
        return 0;
    const total = arr.reduce((acc, val) => acc + val, 0);
    return parseFloat(total.toFixed(2));
};
exports.calculateTotal = calculateTotal;
const displayActionMessage = (msg, status = 'info') => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.className = `toast toast-${status}`;
    span.className = 'toast-msg';
    span.textContent = msg;
    div.appendChild(span);
    if (document.querySelector('.toast')) {
        // @ts-ignore
        document.body.removeChild(document.querySelector('.toast'));
        document.body.appendChild(div);
    }
    else {
        document.body.appendChild(div);
    }
    setTimeout(() => {
        try {
            document.body.removeChild(div);
        }
        catch (e) {
            console.log(e);
        }
    }, 3000);
};
exports.displayActionMessage = displayActionMessage;


/***/ }),

/***/ 8560:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useScrollTop = exports.useRecommendedProducts = exports.useProduct = exports.useModal = exports.useFileHandler = exports.useFeaturedProducts = exports.useDocumentTitle = exports.useDidMount = void 0;
var useDidMount_1 = __webpack_require__(47995);
Object.defineProperty(exports, "useDidMount", ({ enumerable: true, get: function () { return __importDefault(useDidMount_1).default; } }));
var useDocumentTitle_1 = __webpack_require__(6999);
Object.defineProperty(exports, "useDocumentTitle", ({ enumerable: true, get: function () { return __importDefault(useDocumentTitle_1).default; } }));
var useFeaturedProducts_1 = __webpack_require__(90220);
Object.defineProperty(exports, "useFeaturedProducts", ({ enumerable: true, get: function () { return __importDefault(useFeaturedProducts_1).default; } }));
var useFileHandler_1 = __webpack_require__(16139);
Object.defineProperty(exports, "useFileHandler", ({ enumerable: true, get: function () { return __importDefault(useFileHandler_1).default; } }));
var useModal_1 = __webpack_require__(55623);
Object.defineProperty(exports, "useModal", ({ enumerable: true, get: function () { return __importDefault(useModal_1).default; } }));
var useProduct_1 = __webpack_require__(90160);
Object.defineProperty(exports, "useProduct", ({ enumerable: true, get: function () { return __importDefault(useProduct_1).default; } }));
var useRecommendedProducts_1 = __webpack_require__(98943);
Object.defineProperty(exports, "useRecommendedProducts", ({ enumerable: true, get: function () { return __importDefault(useRecommendedProducts_1).default; } }));
var useScrollTop_1 = __webpack_require__(42383);
Object.defineProperty(exports, "useScrollTop", ({ enumerable: true, get: function () { return __importDefault(useScrollTop_1).default; } }));


/***/ }),

/***/ 47995:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(67294);
const useDidMount = (initState = false) => {
    const [didMount, setDidMount] = (0, react_1.useState)(initState);
    (0, react_1.useEffect)(() => {
        setDidMount(true);
        return () => {
            setDidMount(false);
        };
    }, []);
    return didMount;
};
exports.default = useDidMount;


/***/ }),

/***/ 90220:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(8560);
const react_1 = __webpack_require__(67294);
const firebase_1 = __importDefault(__webpack_require__(39609));
const useFeaturedProducts = (itemsCount) => {
    const [featuredProducts, setFeaturedProducts] = (0, react_1.useState)([]);
    const [isLoading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const didMount = (0, hooks_1.useDidMount)(true);
    const fetchFeaturedProducts = async () => {
        try {
            setLoading(true);
            setError('');
            const docs = await firebase_1.default.getFeaturedProducts(itemsCount);
            if (docs.empty) {
                if (didMount) {
                    setError('No featured products found.');
                    setLoading(false);
                }
            }
            else {
                const items = [];
                docs.forEach((snap) => {
                    const data = snap.data();
                    items.push({ id: snap.ref.id, ...data });
                });
                if (didMount) {
                    setFeaturedProducts(items);
                    setLoading(false);
                }
            }
        }
        catch (e) {
            if (didMount) {
                setError('Failed to fetch featured products');
                setLoading(false);
            }
        }
    };
    (0, react_1.useEffect)(() => {
        if (featuredProducts.length === 0 && didMount) {
            fetchFeaturedProducts();
        }
    }, []);
    return {
        featuredProducts,
        fetchFeaturedProducts,
        isLoading,
        error
    };
};
exports.default = useFeaturedProducts;


/***/ }),

/***/ 16139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-alert */
const react_1 = __webpack_require__(67294);
const uuid_1 = __webpack_require__(21614);
const useFileHandler = (initState) => {
    const [imageFile, setImageFile] = (0, react_1.useState)(initState);
    const [isFileLoading, setFileLoading] = (0, react_1.useState)(false);
    console.log(imageFile);
    const removeImage = ({ id, name }) => {
        const items = imageFile[name].filter((item) => item.id !== id);
        setImageFile({
            ...imageFile,
            [name]: items
        });
    };
    const onFileChange = (event, { name, type }) => {
        const val = event.target.value;
        const img = event.target.files[0];
        const size = img.size / 1024 / 1024;
        const regex = /(\.jpg|\.jpeg|\.png)$/i;
        setFileLoading(true);
        if (!regex.exec(val)) {
            alert('File type must be JPEG or PNG', 'error');
            setFileLoading(false);
        }
        else if (size > 0.5) {
            alert('File size exceeded 500kb, consider optimizing your image', 'error');
            setFileLoading(false);
        }
        else if (type === 'multiple') {
            Array.from(event.target.files).forEach((file) => {
                const reader = new FileReader();
                reader.addEventListener('load', (e) => {
                    setImageFile((oldFiles) => ({
                        ...oldFiles,
                        [name]: [
                            ...oldFiles[name],
                            { file, url: e.target.result, id: (0, uuid_1.v4)() }
                        ]
                    }));
                });
                reader.readAsDataURL(file);
            });
            setFileLoading(false);
        }
        else {
            const reader = new FileReader();
            reader.addEventListener('load', (e) => {
                setImageFile({
                    ...imageFile,
                    [name]: { file: img, url: e.target.result }
                });
                setFileLoading(false);
            });
            reader.readAsDataURL(img);
        }
    };
    return {
        imageFile,
        setImageFile,
        isFileLoading,
        onFileChange,
        removeImage
    };
};
exports.default = useFileHandler;


/***/ }),

/***/ 55623:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(67294);
const useModal = () => {
    const [isOpenModal, setModalOpen] = (0, react_1.useState)(false);
    const onOpenModal = () => {
        setModalOpen(true);
    };
    const onCloseModal = () => {
        setModalOpen(false);
    };
    return { isOpenModal, onOpenModal, onCloseModal };
};
exports.default = useModal;


/***/ }),

/***/ 90160:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-extra-semi */
/* eslint-disable implicit-arrow-linebreak */
const hooks_1 = __webpack_require__(8560);
const react_1 = __webpack_require__(67294);
const react_redux_1 = __webpack_require__(14494);
const firebase_1 = __importDefault(__webpack_require__(39609));
const useProduct = (id) => {
    const storeProduct = (0, react_redux_1.useSelector)((state) => state.products.items.find((item) => item.id === id));
    const [product, setProduct] = (0, react_1.useState)(storeProduct);
    const [isLoading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const didMount = (0, hooks_1.useDidMount)(true);
    (0, react_1.useEffect)(() => {
        ;
        (async () => {
            try {
                if (!product || product.id !== id) {
                    setLoading(true);
                    const doc = await firebase_1.default.getSingleProduct(id);
                    if (doc.exists) {
                        const data = { ...doc.data(), id: doc.ref.id };
                        if (didMount) {
                            // @ts-ignore
                            setProduct(data);
                            setLoading(false);
                        }
                    }
                    else {
                        setError('Product not found.');
                    }
                }
            }
            catch (err) {
                if (didMount) {
                    setLoading(false);
                    setError(err?.message || 'Something went wrong.');
                }
            }
        })();
    }, [id]);
    return { product, isLoading, error };
};
exports.default = useProduct;


/***/ }),

/***/ 98943:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(8560);
const react_1 = __webpack_require__(67294);
const firebase_1 = __importDefault(__webpack_require__(39609));
const useRecommendedProducts = (itemsCount) => {
    const [recommendedProducts, setRecommendedProducts] = (0, react_1.useState)([]);
    const [isLoading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const didMount = (0, hooks_1.useDidMount)(true);
    const fetchRecommendedProducts = async () => {
        try {
            setLoading(true);
            setError('');
            const docs = await firebase_1.default.getRecommendedProducts(itemsCount);
            if (docs.empty) {
                if (didMount) {
                    setError('No recommended products found.');
                    setLoading(false);
                }
            }
            else {
                const items = [];
                docs.forEach((snap) => {
                    const data = snap.data();
                    items.push({ id: snap.ref.id, ...data });
                });
                if (didMount) {
                    setRecommendedProducts(items);
                    setLoading(false);
                }
            }
        }
        catch (e) {
            if (didMount) {
                setError('Failed to fetch recommended products');
                setLoading(false);
            }
        }
    };
    (0, react_1.useEffect)(() => {
        if (recommendedProducts.length === 0 && didMount) {
            fetchRecommendedProducts();
        }
    }, []);
    return {
        recommendedProducts,
        fetchRecommendedProducts,
        isLoading,
        error
    };
};
exports.default = useRecommendedProducts;


/***/ }),

/***/ 41512:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const i18next_1 = __importDefault(__webpack_require__(17581));
const pl_1 = __importDefault(__webpack_require__(47425));
const config = {
    lng: 'pl',
    debug: true,
    resources: {
        pl: {
            translation: pl_1.default
        }
    }
};
i18next_1.default.init(config);
exports.default = i18next_1.default;


/***/ }),

/***/ 47425:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const pl = {
    common: {
        navigation: {
            home: 'Strona Główna',
            products: 'Produkty',
            featured: 'Nowości',
            recommended: 'Rekomendowane',
            signUp: 'Rejestracja',
            signIn: 'Logowanie'
        },
        basket: {
            close: 'Zamknij',
            clear: 'Wyczyść',
            empty: 'Twój koszyk jest pusty',
            title: 'Mój koszyk ',
            total: 'Suma',
            checkout: 'Złóż zamówienie',
            backToShop: 'Wróć do sklepu',
            products: '({{count}} produkt)',
            products_plural: '({{count}} produkty)',
            products_multiple: '({{count}} produktów)',
            modal: {
                info: 'Musisz się zalogować żeby kontynuować',
                continue: 'Wróć do sklepu',
                signIn: 'Zaloguj się'
            }
        },
        loading: 'Ładowanie',
        toasts: {
            addedProductToBasket: 'Dodano produkt do koszyka',
            removeProductFromBasket: 'Usunięto produkt z koszyka'
        }
    },
    profilePage: {
        tabs: {
            account: 'Profil',
            orders: 'Zamówienia'
        },
        account: {
            noValue: 'Brak',
            fields: {
                customerType: 'Typ konta',
                phone: 'Numer telefonu',
                email: 'Email',
                street: 'Adres',
                postCode: 'Kod pocztowy',
                city: 'Miasto',
                dateJoined: 'Data założenia konta'
            },
            customerTypes: {
                INDIVIDUAL: 'Klient Indywidualny',
                COMPANY: 'Firma'
            }
        }
    },
    signUpPage: {
        name: { label: 'Imię i nazwisko / Nazwa firmy', placeholder: 'Adam Nowak' },
        email: { label: 'Adres email', placeholder: 'test@example.com' },
        password: { label: 'Hasło', placeholder: 'Twoje hasło' },
        signUp: 'Zarejestruj się',
        signingUp: 'Poczekaj chwilę',
        haveAccount: 'Masz konto?',
        signIn: 'Zaloguj się',
        title: 'Zarejestuj nowe konto',
        validations: {
            email: {
                email: 'Email nie jest prawidłowy',
                required: 'Email jest wymagany'
            },
            password: {
                required: 'Hasło jest wymagane',
                min: 'Minimalna liczba znaków to 8',
                matches: 'Hasło powinno zawierać co najmniej 1 wielką literę'
            }
        }
    },
    signupConfirmationPage: {
        title: 'Potwierdź adres email',
        info: 'Na podany adres email wysłaliśmy wiadomość z linkiem do potwierdzenia konta.'
    },
    forgotPasswordPage: {
        title: 'Nie pamiętasz hasła?',
        info: 'Wprowadż adres e-mail a my wyślemy wiadomość z linkiem do zresetowania hasła.',
        placeholder: 'Twój e-mail',
        buttonLabel: 'Zresetuj hasło',
        loadingLabel: 'Przetwarzanie'
    },
    signInPage: {
        title: 'Zaloguj się',
        form: {
            email: {
                label: 'Email',
                placeholder: ''
            },
            password: {
                label: 'Hasło',
                placeholder: ''
            }
        },
        forgotPassword: 'Nie pamiętasz hasła?',
        notSignedup: 'Potrzebujesz konta?',
        signIn: 'Zaloguj się',
        signIning: 'Poczekaj chwilę',
        signUp: 'Zarejestruj się'
    },
    addProductPage: {
        title: 'Dodaj produkt',
        form: {
            productName: 'Nazwa produktu',
            description: 'Opis',
            price: 'Cena',
            variants: {
                label: 'Dostępne opcje',
                placeholder: ''
            },
            mainPicture: {
                label: 'Zdjęcie główne',
                placeholder: 'Wybierz zdjęcie'
            },
            gallery: {
                label: 'Galeria',
                placeholder: 'Wybierz zdjęcia'
            },
            featured: {
                label: 'Dodaj do nowych'
            },
            recommended: {
                label: 'Dodaj do rekomendowanych'
            }
        },
        actions: {
            save: 'Zapisz'
        }
    },
    homePage: {
        banner: {
            description: 'Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.',
            buttonLabel: 'Kup teraz'
        },
        featuredProducts: {
            title: 'Nowości',
            buttonLabel: 'Zobacz Wszystkie'
        },
        recommendedProducts: {
            title: 'Bestsellery',
            buttonLabel: 'Zobacz Wszystkie'
        }
    },
    featuredPage: {
        banner: {
            title: 'Nowości'
        }
    },
    recommendedPage: {
        banner: {
            title: 'Bestsellery'
        }
    },
    productPage: {
        goBack: 'Wróć do sklepu',
        addToBasket: 'Dodaj do koszyka',
        removeFromBasket: 'Usuń z koszyka',
        optionLabel: 'Napis widoczny na zapalniczce',
        recommended: {
            title: 'Rekomendowane'
        }
    },
    checkoutPage: {
        steps: {
            1: 'Podsumowanie',
            2: 'Dane kontaktowe',
            3: 'Dostawa',
            4: 'Płatność'
        },
        actions: {
            backToShop: 'Wróć do sklepu',
            back: 'Wróć',
            next: 'Dalej',
            createOrder: 'Złóż zamówienie'
        },
        total: {
            delivery: 'Dostawa',
            products: 'Produkty',
            sum: 'Suma'
        },
        step1: {
            title: 'Podsumowanie',
            desc: 'Sprawdź produkty w Twoim koszyku.',
            productsTotal: 'Cena produktów:'
        },
        step2: {
            title: 'Dane kontaktowe',
            form: {
                name: {
                    label: 'Imię i nazwisko',
                    placeholder: ''
                },
                company: {
                    label: 'Nazwa firmy',
                    placeholder: ''
                },
                email: {
                    label: 'Adres email',
                    placeholder: ''
                },
                phone: {
                    label: 'Numer telefonu',
                    placeholder: ''
                },
                street: {
                    label: 'Adres',
                    placeholder: ''
                },
                postCode: {
                    label: 'Kod pocztowy',
                    placeholder: ''
                },
                city: {
                    label: 'Miasto',
                    placeholder: ''
                },
                nip: {
                    label: 'NIP',
                    placeholder: ''
                }
            },
            customerTypes: {
                individual: 'Klient indywidualny',
                company: 'Firma'
            }
        },
        step3: {
            title: 'Dostawa',
            form: {
                delivery: {
                    label: 'Wybierz sposób dostawy',
                    FREE_PARCEL: {
                        title: 'Bezpłatna dostawa',
                        time: '7 dni'
                    },
                    PICK_UP: {
                        title: 'Odbiór własny',
                        time: '0 dni'
                    }
                }
            }
        },
        step3a: {
            title: 'Dane do dostawy',
            form: {
                street: {
                    label: 'Ulica',
                    placeholder: ''
                },
                houseNr: {
                    label: 'Nr domu',
                    placeholder: ''
                },
                postCode: {
                    label: 'Kod pocztowy',
                    placeholder: ''
                },
                city: {
                    label: 'Miasto',
                    placeholder: ''
                }
            }
        },
        step4: {
            title: 'Płatność',
            form: {
                paymentType: {
                    label: 'Wybierz sposób płatności',
                    TRANSFER: {
                        title: 'Przelew tradycyjny',
                        subtitle: 'W tym momencie oferujemy tylko ten sposób płatności'
                    }
                }
            }
        },
        result: {
            title: 'Zamówienie zostało złożone',
            orderId: 'ID Twojego zamówienia to:',
            actions: {
                backToShop: 'Wróć do zakupów',
                orders: 'Przejdź do zamówień',
                confirmation: 'Zobacz zamówienie'
            }
        }
    },
    products: {
        tabTitle: 'Produkty'
    },
    pageNotFound: {
        tabTitle: '',
        title: ':( Strona, której szukasz, nie istnieje.',
        buttonLabel: 'Wróć'
    }
};
exports.default = pl;


/***/ }),

/***/ 66025:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authContext = void 0;
const react_1 = __importStar(__webpack_require__(67294));
exports.authContext = (0, react_1.createContext)({
    auth: undefined,
    setAuth: () => undefined
});
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = (0, react_1.useState)(undefined);
    return (react_1.default.createElement(exports.authContext.Provider, { value: { auth, setAuth } }, children));
};
exports.default = AuthProvider;


/***/ }),

/***/ 67655:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authStatusContext = void 0;
const react_1 = __importStar(__webpack_require__(67294));
exports.authStatusContext = (0, react_1.createContext)({
    authStatus: {
        isSuccess: false,
        isAuthenticating: false,
        isError: false
    },
    setAuthStatus: () => undefined
});
const AuthStatusProvider = ({ children }) => {
    const [authStatus, setAuthStatus] = (0, react_1.useState)({
        isSuccess: false,
        isAuthenticating: false,
        isError: false
    });
    return (react_1.default.createElement(exports.authStatusContext.Provider, { value: { authStatus, setAuthStatus } }, children));
};
exports.default = AuthStatusProvider;


/***/ }),

/***/ 69507:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.basketContext = void 0;
const react_1 = __importStar(__webpack_require__(67294));
exports.basketContext = (0, react_1.createContext)({
    basket: [],
    setBasket: () => undefined
});
const BasketProvider = ({ children }) => {
    const [basket, setBasket] = (0, react_1.useState)([]);
    return (react_1.default.createElement(exports.basketContext.Provider, { value: { basket, setBasket } }, children));
};
exports.default = BasketProvider;


/***/ }),

/***/ 25866:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.profileContext = void 0;
const react_1 = __importStar(__webpack_require__(67294));
exports.profileContext = (0, react_1.createContext)({
    profile: undefined,
    setProfile: () => undefined
});
const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = (0, react_1.useState)(undefined);
    return (react_1.default.createElement(exports.profileContext.Provider, { value: { profile, setProfile } }, children));
};
exports.default = ProfileProvider;


/***/ }),

/***/ 12927:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetPassword = exports.onAuthStateFail = exports.onAuthStateSuccess = exports.onAuthStateChanged = exports.signOutSuccess = exports.signOut = exports.setAuthPersistence = exports.signInSuccess = exports.signUp = exports.signInWithGithub = exports.signInWithFacebook = exports.signInWithGoogle = exports.signIn = void 0;
const type = __importStar(__webpack_require__(6401));
const signIn = (payload) => ({
    type: type.SIGNIN,
    payload
});
exports.signIn = signIn;
const signInWithGoogle = () => ({
    type: type.SIGNIN_WITH_GOOGLE
});
exports.signInWithGoogle = signInWithGoogle;
const signInWithFacebook = () => ({
    type: type.SIGNIN_WITH_FACEBOOK
});
exports.signInWithFacebook = signInWithFacebook;
const signInWithGithub = () => ({
    type: type.SIGNIN_WITH_GITHUB
});
exports.signInWithGithub = signInWithGithub;
const signUp = (payload) => ({
    type: type.SIGNUP,
    payload
});
exports.signUp = signUp;
const signInSuccess = (auth) => ({
    type: type.SIGNIN_SUCCESS,
    payload: auth
});
exports.signInSuccess = signInSuccess;
const setAuthPersistence = () => ({
    type: type.SET_AUTH_PERSISTENCE
});
exports.setAuthPersistence = setAuthPersistence;
const signOut = () => ({
    type: type.SIGNOUT
});
exports.signOut = signOut;
const signOutSuccess = () => ({
    type: type.SIGNOUT_SUCCESS
});
exports.signOutSuccess = signOutSuccess;
const onAuthStateChanged = () => ({
    type: type.ON_AUTHSTATE_CHANGED
});
exports.onAuthStateChanged = onAuthStateChanged;
const onAuthStateSuccess = (user) => ({
    type: type.ON_AUTHSTATE_SUCCESS,
    payload: user
});
exports.onAuthStateSuccess = onAuthStateSuccess;
const onAuthStateFail = (error) => ({
    type: type.ON_AUTHSTATE_FAIL,
    payload: error
});
exports.onAuthStateFail = onAuthStateFail;
const resetPassword = (email) => ({
    type: type.RESET_PASSWORD,
    payload: email
});
exports.resetPassword = resetPassword;


/***/ }),

/***/ 35490:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addOrderRemotely = void 0;
const constants_1 = __webpack_require__(6401);
const addOrderRemotely = (payload) => ({
    type: constants_1.ADD_ORDER_REMOTELY,
    payload
});
exports.addOrderRemotely = addOrderRemotely;


/***/ }),

/***/ 39242:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyFilter = exports.removeSelectedRecent = exports.clearRecentSearch = exports.resetFilter = exports.setMaxPriceFilter = exports.setMinPriceFilter = exports.setBrandFilter = exports.setTextFilter = void 0;
const constants_1 = __webpack_require__(6401);
const setTextFilter = (keyword) => ({
    type: constants_1.SET_TEXT_FILTER,
    payload: keyword
});
exports.setTextFilter = setTextFilter;
const setBrandFilter = (brand) => ({
    type: constants_1.SET_BRAND_FILTER,
    payload: brand
});
exports.setBrandFilter = setBrandFilter;
const setMinPriceFilter = (min) => ({
    type: constants_1.SET_MIN_PRICE_FILTER,
    payload: min
});
exports.setMinPriceFilter = setMinPriceFilter;
const setMaxPriceFilter = (max) => ({
    type: constants_1.SET_MAX_PRICE_FILTER,
    payload: max
});
exports.setMaxPriceFilter = setMaxPriceFilter;
const resetFilter = () => ({
    type: constants_1.RESET_FILTER
});
exports.resetFilter = resetFilter;
const clearRecentSearch = () => ({
    type: constants_1.CLEAR_RECENT_SEARCH
});
exports.clearRecentSearch = clearRecentSearch;
const removeSelectedRecent = (keyword) => ({
    type: constants_1.REMOVE_SELECTED_RECENT,
    payload: keyword
});
exports.removeSelectedRecent = removeSelectedRecent;
const applyFilter = (filters) => ({
    type: constants_1.APPLY_FILTER,
    payload: filters
});
exports.applyFilter = applyFilter;


/***/ }),

/***/ 37003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setContactDetailsLocaly = void 0;
/* eslint-disable import/prefer-default-export */
const constants_1 = __webpack_require__(6401);
const setContactDetailsLocaly = (payload) => ({
    type: constants_1.SET_CONTACT_DETAILS_LOCALY,
    payload
});
exports.setContactDetailsLocaly = setContactDetailsLocaly;


/***/ }),

/***/ 79508:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setCustomerTypeLocaly = void 0;
/* eslint-disable import/prefer-default-export */
const constants_1 = __webpack_require__(6401);
const setCustomerTypeLocaly = (payload) => ({
    type: constants_1.SET_CUSTOMER_TYPE_LOCALY,
    payload
});
exports.setCustomerTypeLocaly = setCustomerTypeLocaly;


/***/ }),

/***/ 25019:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setPreferredDelivery = void 0;
const constants_1 = __webpack_require__(6401);
const setPreferredDelivery = (payload) => ({
    type: constants_1.SET_PREFERRED_DELIVERY,
    payload
});
exports.setPreferredDelivery = setPreferredDelivery;


/***/ }),

/***/ 21075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setPreferredPayment = void 0;
const constants_1 = __webpack_require__(6401);
const setPreferredPayment = (payload) => ({
    type: constants_1.SET_PREFERRED_PAYMENT_LOCALY,
    payload
});
exports.setPreferredPayment = setPreferredPayment;


/***/ }),

/***/ 2345:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setShippingLocaly = void 0;
const constants_1 = __webpack_require__(6401);
const setShippingLocaly = (payload) => ({
    type: constants_1.SET_SHIPPING_LOCALY,
    payload
});
exports.setShippingLocaly = setShippingLocaly;


/***/ }),

/***/ 11306:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectMin = exports.selectMax = exports.selectFilter = void 0;
/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
const selectFilter = (products, filter) => {
    if (!products || products.length === 0)
        return [];
    const keyword = filter.keyword.toLowerCase();
    return products
        .filter((product) => {
        const isInRange = filter.maxPrice
            ? product.price >= filter.minPrice && product.price <= filter.maxPrice
            : true;
        const matchKeyword = product.keywords
            ? product.keywords.includes(keyword)
            : true;
        // const matchName = product.name ? product.name.toLowerCase().includes(keyword) : true;
        const matchDescription = product.description
            ? product.description.toLowerCase().includes(keyword)
            : true;
        const matchBrand = product.brand
            ? product.brand.toLowerCase().includes(filter.brand)
            : true;
        return (matchKeyword || matchDescription) && matchBrand && isInRange;
    })
        .sort((a, b) => {
        if (filter.sortBy === 'name-desc') {
            return a.name < b.name ? 1 : -1;
        }
        else if (filter.sortBy === 'name-asc') {
            return a.name > b.name ? 1 : -1;
        }
        else if (filter.sortBy === 'price-desc') {
            return a.price < b.price ? 1 : -1;
        }
        return a.price > b.price ? 1 : -1;
    });
};
exports.selectFilter = selectFilter;
// Select product with highest price
const selectMax = (products) => {
    if (!products || products.length === 0)
        return 0;
    let high = products[0];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > high.price) {
            high = products[i];
        }
    }
    return Math.floor(high.price);
};
exports.selectMax = selectMax;
// Select product with lowest price
const selectMin = (products) => {
    if (!products || products.length === 0)
        return 0;
    let low = products[0];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price < low.price) {
            low = products[i];
        }
    }
    return Math.floor(low.price);
};
exports.selectMin = selectMin;


/***/ }),

/***/ 37181:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const firebaseConfig = {
    apiKey: "AIzaSyAXnOQn6hJ15jMRHqRT-1nozJ8-omP0s2E",
    authDomain: "zapalniczki-c7234.firebaseapp.com",
    databaseURL: "https://zapalniczki-c7234-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zapalniczki-c7234",
    storageBucket: "zapalniczki-c7234.appspot.com",
    messagingSenderId: "397821315416",
    appId: "1:397821315416:web:7af195e1b14c809e4f3d2d"
};
exports.default = firebaseConfig;


/***/ }),

/***/ 39609:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-unused-vars */
const app_1 = __importStar(__webpack_require__(15503));
const auth_1 = __webpack_require__(2571);
const firestore_1 = __webpack_require__(84956);
const storage_1 = __webpack_require__(5308);
const config_1 = __importDefault(__webpack_require__(37181));
class Firebase {
    constructor() {
        (0, app_1.initializeApp)(config_1.default);
        this.storage = (0, storage_1.getStorage)();
        this.db = (0, firestore_1.getFirestore)();
        this.auth = (0, auth_1.getAuth)();
    }
    // AUTH ACTIONS ------------
    createAccount = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    signInWithGoogle = () => this.auth.signInWithPopup(new app_1.default.auth.GoogleAuthProvider());
    signInWithFacebook = () => this.auth.signInWithPopup(new app_1.default.auth.FacebookAuthProvider());
    signInWithGithub = () => this.auth.signInWithPopup(new app_1.default.auth.GithubAuthProvider());
    signOut = () => this.auth.signOut();
    passwordReset = (email) => this.auth.sendPasswordResetEmail(email);
    addUser = (id, user) => this.db.collection('users').doc(id).set(user);
    getUser = (userId) => this.db.collection('users').doc(userId).get();
    getUserOrders = (userId) => {
        let didTimeout = false;
        return new Promise((resolve, reject) => {
            ;
            (async () => {
                const timeout = setTimeout(() => {
                    didTimeout = true;
                    reject(new Error('Request timeout, please try again'));
                }, 15000);
                try {
                    const query = this.db
                        .collection(`users/${userId}/orders`)
                        .orderBy('dateCreated', 'desc');
                    const snapshot = await query.get();
                    clearTimeout(timeout);
                    if (!didTimeout) {
                        const orders = [];
                        snapshot.forEach((doc) => orders.push({ id: doc.id, ...doc.data() }));
                        resolve(orders);
                    }
                }
                catch (e) {
                    if (didTimeout)
                        return;
                    reject(e?.message || ':( Failed to profile.');
                }
            })();
        });
    };
    passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);
    changePassword = (currentPassword, newPassword) => new Promise((resolve, reject) => {
        this.reauthenticate(currentPassword)
            .then(() => {
            const user = this.auth.currentUser;
            user
                .updatePassword(newPassword)
                .then(() => {
                resolve('Password updated successfully!');
            })
                .catch((error) => reject(error));
        })
            .catch((error) => reject(error));
    });
    reauthenticate = (currentPassword) => {
        const user = this.auth.currentUser;
        const cred = app_1.default.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    };
    updateEmail = (currentPassword, newEmail) => new Promise((resolve, reject) => {
        this.reauthenticate(currentPassword)
            .then(() => {
            const user = this.auth.currentUser;
            user
                .updateEmail(newEmail)
                .then(() => {
                resolve('Email Successfully updated');
            })
                .catch((error) => reject(error));
        })
            .catch((error) => reject(error));
    });
    updateProfile = (id, updates) => this.db.collection('users').doc(id).update(updates);
    addOrderToProfile = (userId, orderId, order) => this.db
        .collection('users')
        .doc(userId)
        .collection('orders')
        .doc(orderId)
        .set(order);
    onAuthStateChanged = () => new Promise((resolve, reject) => {
        this.auth.onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            }
            else {
                reject(new Error('Auth State Changed failed'));
            }
        });
    });
    saveBasketItems = (items, userId) => this.db.collection('users').doc(userId).update({ basket: items });
    setAuthPersistence = () => this.auth.setPersistence(app_1.default.auth.Auth.Persistence.LOCAL);
    // // PRODUCT ACTIONS --------------
    getSingleProduct = (id) => this.db.collection('products').doc(id).get();
    getProducts = (lastRefKey) => {
        let didTimeout = false;
        return new Promise((resolve, reject) => {
            ;
            (async () => {
                if (lastRefKey) {
                    try {
                        const query = this.db
                            .collection('products')
                            .orderBy(app_1.default.firestore.FieldPath.documentId())
                            .startAfter(lastRefKey)
                            .limit(12);
                        const snapshot = await query.get();
                        const products = [];
                        snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
                        const lastKey = snapshot.docs[snapshot.docs.length - 1];
                        resolve({ products, lastKey });
                    }
                    catch (e) {
                        reject(e?.message || ':( Failed to fetch products.');
                    }
                }
                else {
                    const timeout = setTimeout(() => {
                        didTimeout = true;
                        reject(new Error('Request timeout, please try again'));
                    }, 15000);
                    try {
                        const totalQuery = await this.db.collection('products').get();
                        const total = totalQuery.docs.length;
                        const query = this.db
                            .collection('products')
                            .orderBy(app_1.default.firestore.FieldPath.documentId())
                            .limit(12);
                        const snapshot = await query.get();
                        clearTimeout(timeout);
                        if (!didTimeout) {
                            const products = [];
                            snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
                            const lastKey = snapshot.docs[snapshot.docs.length - 1];
                            resolve({ products, lastKey, total });
                        }
                    }
                    catch (e) {
                        if (didTimeout)
                            return;
                        reject(e?.message || ':( Failed to fetch products.');
                    }
                }
            })();
        });
    };
    searchProducts = (searchKey) => {
        let didTimeout = false;
        return new Promise((resolve, reject) => {
            ;
            (async () => {
                const productsRef = this.db.collection('products');
                const timeout = setTimeout(() => {
                    didTimeout = true;
                    reject(new Error('Request timeout, please try again'));
                }, 15000);
                try {
                    const searchedNameRef = productsRef
                        .orderBy('name_lower')
                        .where('name_lower', '>=', searchKey)
                        .where('name_lower', '<=', `${searchKey}\uf8ff`)
                        .limit(12);
                    const searchedKeywordsRef = productsRef
                        .orderBy('dateAdded', 'desc')
                        .where('keywords', 'array-contains-any', searchKey.split(' '))
                        .limit(12);
                    // const totalResult = await totalQueryRef.get();
                    const nameSnaps = await searchedNameRef.get();
                    const keywordsSnaps = await searchedKeywordsRef.get();
                    // const total = totalResult.docs.length;
                    clearTimeout(timeout);
                    if (!didTimeout) {
                        const searchedNameProducts = [];
                        const searchedKeywordsProducts = [];
                        let lastKey = null;
                        if (!nameSnaps.empty) {
                            nameSnaps.forEach((doc) => {
                                searchedNameProducts.push({ id: doc.id, ...doc.data() });
                            });
                            lastKey = nameSnaps.docs[nameSnaps.docs.length - 1];
                        }
                        if (!keywordsSnaps.empty) {
                            keywordsSnaps.forEach((doc) => {
                                searchedKeywordsProducts.push({ id: doc.id, ...doc.data() });
                            });
                        }
                        // MERGE PRODUCTS
                        const mergedProducts = [
                            ...searchedNameProducts,
                            ...searchedKeywordsProducts
                        ];
                        const hash = {};
                        mergedProducts.forEach((product) => {
                            hash[product.id] = product;
                        });
                        resolve({ products: Object.values(hash), lastKey });
                    }
                }
                catch (e) {
                    if (didTimeout)
                        return;
                    reject(e);
                }
            })();
        });
    };
    getFeaturedProducts = (itemsCount = 12) => this.db
        .collection('products')
        .where('isFeatured', '==', true)
        .limit(itemsCount)
        .get();
    getRecommendedProducts = (itemsCount = 12) => this.db
        .collection('products')
        .where('isRecommended', '==', true)
        .limit(itemsCount)
        .get();
    addProduct = (id, product) => this.db.collection('products').doc(id).set(product);
    addOrder = (id, order) => this.db.collection('orders').doc(id).set(order);
    generateKey = () => this.db.collection('products').doc().id;
    storeImage = async (id, folder, imageFile) => {
        const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
        const downloadURL = await snapshot.ref.getDownloadURL();
        return downloadURL;
    };
    deleteImage = (id) => this.storage.ref('products').child(id).delete();
    editProduct = (id, updates) => this.db.collection('products').doc(id).update(updates);
    removeProduct = (id) => this.db.collection('products').doc(id).delete();
}
const firebaseInstance = new Firebase();
exports.default = firebaseInstance;


/***/ }),

/***/ 22439:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/jsx-wrap-multilines */
const routes_1 = __webpack_require__(5208);
const hooks_1 = __webpack_require__(8560);
const banner_girl_png_1 = __importDefault(__webpack_require__(54973));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const Page_1 = __importDefault(__webpack_require__(65415));
const Banner_1 = __importDefault(__webpack_require__(9982));
const Display_1 = __importDefault(__webpack_require__(40648));
const react_i18next_1 = __webpack_require__(86162);
const icons_1 = __webpack_require__(4747);
const Box_1 = __importDefault(__webpack_require__(84962));
const Home = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useDocumentTitle)('Salinaka | Home');
    (0, hooks_1.useScrollTop)();
    const { featuredProducts, fetchFeaturedProducts, isLoading: isLoadingFeatured, error: errorFeatured } = (0, hooks_1.useFeaturedProducts)(6);
    const { recommendedProducts, fetchRecommendedProducts, isLoading: isLoadingRecommended, error: errorRecommended } = (0, hooks_1.useRecommendedProducts)(6);
    return (react_1.default.createElement(Page_1.default, null,
        react_1.default.createElement(Banner_1.default, { img: banner_girl_png_1.default, description: t('homePage.banner.description'), title: react_1.default.createElement("h1", { className: "text-thin" },
                react_1.default.createElement("strong", null, "See"),
                "\u00A0everything with\u00A0",
                react_1.default.createElement("strong", null, "Clarity")) },
            react_1.default.createElement("br", null),
            react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.SHOP, className: "button" },
                t('homePage.banner.buttonLabel'),
                react_1.default.createElement(Box_1.default, { marginLeft: "0.5rem" },
                    react_1.default.createElement(icons_1.ArrowRightOutlined, null)))),
        react_1.default.createElement(Display_1.default, { title: t('homePage.featuredProducts.title'), link: react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.FEATURED_PRODUCTS }, t('homePage.featuredProducts.buttonLabel')), error: errorFeatured, isLoading: isLoadingFeatured, fetchProducts: fetchFeaturedProducts, products: featuredProducts }),
        react_1.default.createElement(Display_1.default, { title: t('homePage.recommendedProducts.title'), link: react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.RECOMMENDED_PRODUCTS }, t('homePage.featuredProducts.buttonLabel')), error: errorRecommended, isLoading: isLoadingRecommended, fetchProducts: fetchRecommendedProducts, products: recommendedProducts })));
};
exports.default = Home;


/***/ }),

/***/ 29130:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Button_1 = __importDefault(__webpack_require__(79125));
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const routes_1 = __webpack_require__(5208);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const icons_1 = __webpack_require__(4747);
const react_redux_1 = __webpack_require__(14494);
const Checkout_1 = __importDefault(__webpack_require__(434));
const Wrapper_1 = __importDefault(__webpack_require__(82196));
const Result = () => {
    const { orders } = (0, react_redux_1.useSelector)((store) => ({
        orders: store.orders
    }));
    const { t } = (0, react_i18next_1.useTranslation)();
    const history = (0, react_router_dom_1.useHistory)();
    if (!orders.length)
        return null;
    return (react_1.default.createElement(Checkout_1.default, null,
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement(Flexbox_1.default, { justifyContent: "center" },
                react_1.default.createElement("h1", null, t('checkoutPage.result.title'))),
            react_1.default.createElement(Flexbox_1.default, { justifyContent: "center" },
                react_1.default.createElement(icons_1.CheckCircleOutlined, { style: { fontSize: '8rem' } })),
            react_1.default.createElement(Flexbox_1.default, { alignItems: "center", flexDirection: "column", justifyContent: "center" },
                react_1.default.createElement("p", { style: { marginBottom: 0 } }, t('checkoutPage.result.orderId')),
                react_1.default.createElement("h3", null, orders[0].id)),
            react_1.default.createElement(Flexbox_1.default, { justifyContent: "space-between" },
                react_1.default.createElement(Button_1.default, { variant: "secondary", onClick: () => history.push(routes_1.SHOP) }, t('checkoutPage.result.actions.backToShop')),
                react_1.default.createElement(Button_1.default, { marginLeft: "1rem", onClick: () => history.push(routes_1.ACCOUNT) }, t('checkoutPage.result.actions.confirmation'))))));
};
exports.default = Result;


/***/ }),

/***/ 68562:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const hooks_1 = __webpack_require__(8560);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const BasketItem_1 = __importDefault(__webpack_require__(48215));
const Actions_1 = __importDefault(__webpack_require__(98756));
const WithCheckout_1 = __importDefault(__webpack_require__(70617));
const StepTracker_1 = __importDefault(__webpack_require__(66765));
const ShippingTotal_1 = __importDefault(__webpack_require__(2902));
const Checkout_1 = __importDefault(__webpack_require__(434));
const Wrapper_1 = __importDefault(__webpack_require__(82196));
const Step1 = ({ total }) => {
    const { basket } = (0, react_redux_1.useSelector)((store) => ({
        basket: store.basket
    }));
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useDocumentTitle)('Check Out Step 1 | Salinaka');
    (0, hooks_1.useScrollTop)();
    const isBasketEmpty = basket.length === 0;
    return (react_1.default.createElement(Checkout_1.default, null,
        react_1.default.createElement(StepTracker_1.default, { current: 1 }),
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement("h3", { className: "text-center" }, t('checkoutPage.step1.title')),
            react_1.default.createElement("span", { className: "d-block text-center" }, t('checkoutPage.step1.desc')),
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", { className: "checkout-items" },
                isBasketEmpty && (react_1.default.createElement(Flexbox_1.default, { alignItems: "center", justifyContent: "center", flexGrow: 1 },
                    react_1.default.createElement("h5", { className: "basket-empty-msg" }, t('common.basket.empty')))),
                basket.map((product) => (react_1.default.createElement(BasketItem_1.default, { key: product.id, product: product })))),
            !isBasketEmpty && react_1.default.createElement(ShippingTotal_1.default, { total: total }),
            react_1.default.createElement(Actions_1.default, { step: 1 }))));
};
exports.default = (0, WithCheckout_1.default)(Step1);


/***/ }),

/***/ 97481:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
const formik_1 = __webpack_require__(63011);
const formik_2 = __webpack_require__(94649);
const getRequiredOrNot_1 = __importDefault(__webpack_require__(2406));
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const Form = ({ customerType }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { values, resetForm, initialValues } = (0, formik_2.useFormikContext)();
    const { hasPreviousOrder } = (0, react_redux_1.useSelector)((store) => ({
        hasPreviousOrder: store.orders.length > 0
    }));
    (0, react_1.useEffect)(() => {
        resetForm();
    }, [customerType]);
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement("div", { className: "checkout-fieldset" },
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "fullname", type: "text" }, (props) => {
                        const base = customerType === 'INDIVIDUAL' ? 'name' : 'company';
                        return (react_1.default.createElement(formik_1.CustomInput, { ...props, style: { textTransform: 'capitalize' }, disabled: hasPreviousOrder && initialValues.fullname, label: (0, getRequiredOrNot_1.default)(t(`checkoutPage.step2.form.${base}.label`), true), placeholder: t(`checkoutPage.step2.form.${base}.placeholder`) }));
                    })),
                customerType === 'COMPANY' && (react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "nip", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, disabled: hasPreviousOrder && initialValues.nip, label: (0, getRequiredOrNot_1.default)(t('checkoutPage.step2.form.nip.label'), true), placeholder: t('checkoutPage.step2.form.nip.placeholder') })))))),
            react_1.default.createElement("div", { className: "checkout-fieldset" },
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "street", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, disabled: hasPreviousOrder && initialValues.street, label: (0, getRequiredOrNot_1.default)(t('checkoutPage.step2.form.street.label'), true), placeholder: t('checkoutPage.step2.form.street.placeholder') }))))),
            react_1.default.createElement("div", { className: "checkout-fieldset" },
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "postCode", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, disabled: hasPreviousOrder && initialValues.postCode, label: (0, getRequiredOrNot_1.default)(t('checkoutPage.step2.form.postCode.label'), true), placeholder: t('checkoutPage.step2.form.postCode.placeholder') })))),
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "city", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, disabled: hasPreviousOrder && initialValues.city, label: (0, getRequiredOrNot_1.default)(t('checkoutPage.step2.form.city.label'), true), placeholder: t('checkoutPage.step2.form.city.placeholder') }))))),
            react_1.default.createElement("div", { className: "checkout-fieldset" },
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "email", type: "email" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, disabled: true, label: (0, getRequiredOrNot_1.default)(t('checkoutPage.step2.form.email.label'), true), placeholder: t('checkoutPage.step2.form.email.placeholder') })))),
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_1.CustomMobileInput, { label: (0, getRequiredOrNot_1.default)(t('checkoutPage.step2.form.phone.label'), true), disabled: hasPreviousOrder && initialValues.mobile.value, name: "mobile", defaultValue: values.mobile }))))));
};
exports.default = Form;


/***/ }),

/***/ 45713:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-use-before-define */
const common_1 = __webpack_require__(60886);
const hooks_1 = __webpack_require__(8560);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const routes_1 = __webpack_require__(5208);
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const formik_1 = __webpack_require__(94649);
const Actions_1 = __importDefault(__webpack_require__(98756));
const WithCheckout_1 = __importDefault(__webpack_require__(70617));
const StepTracker_1 = __importDefault(__webpack_require__(66765));
const Checkout_1 = __importDefault(__webpack_require__(434));
const Wrapper_1 = __importDefault(__webpack_require__(82196));
const Form_1 = __importDefault(__webpack_require__(97481));
const useFormSubmit_1 = __importDefault(__webpack_require__(80830));
const Step2 = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { customerType: customerTypeReducer } = (0, react_redux_1.useSelector)((store) => ({
        customerType: store.NEWcustomerType
    }));
    const [customerType, setCustomerType] = (0, react_1.useState)(customerTypeReducer || 'COMPANY');
    const { onSubmitForm, getInitialValues, getSchema } = (0, useFormSubmit_1.default)();
    const { basket } = (0, react_redux_1.useSelector)((store) => ({
        basket: store.basket
    }));
    (0, hooks_1.useDocumentTitle)('Check Out Step 2 | Salinaka');
    (0, hooks_1.useScrollTop)();
    if (basket.length === 0) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_STEP_1 });
    }
    return (react_1.default.createElement(common_1.Boundary, null,
        react_1.default.createElement(Checkout_1.default, null,
            react_1.default.createElement(StepTracker_1.default, { current: 2 }),
            react_1.default.createElement(Wrapper_1.default, null,
                react_1.default.createElement("h3", { className: "text-center" }, t('checkoutPage.step2.title')),
                !customerTypeReducer && (react_1.default.createElement(Flexbox_1.default, { justifyContent: "center", alignItems: "center" },
                    react_1.default.createElement("button", { type: "button", onClick: () => setCustomerType('COMPANY'), disabled: customerType === 'COMPANY' }, t('checkoutPage.step2.customerTypes.company')),
                    react_1.default.createElement("button", { type: "button", onClick: () => setCustomerType('INDIVIDUAL'), disabled: customerType === 'INDIVIDUAL' }, t('checkoutPage.step2.customerTypes.individual')))),
                react_1.default.createElement(formik_1.Formik, { initialValues: getInitialValues(), validateOnChange: true, validationSchema: getSchema(customerType), onSubmit: (form) => onSubmitForm(form, customerType) }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                    react_1.default.createElement(Form_1.default, { customerType: customerType }),
                    react_1.default.createElement(Actions_1.default, { step: 2 }))))))));
};
exports.default = (0, WithCheckout_1.default)(Step2);


/***/ }),

/***/ 80830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const routes_1 = __webpack_require__(5208);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const contactDetailsActions_1 = __webpack_require__(37003);
const customerTypeActions_1 = __webpack_require__(79508);
const yup_1 = __webpack_require__(87561);
const useFormSubmit = () => {
    const { contactDetails } = (0, react_redux_1.useSelector)((store) => ({
        contactDetails: store.NEWcontactDetails
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const history = (0, react_router_dom_1.useHistory)();
    const onSubmitForm = (form, customerType) => {
        dispatch((0, customerTypeActions_1.setCustomerTypeLocaly)(customerType));
        dispatch((0, contactDetailsActions_1.setContactDetailsLocaly)(form));
        history.push(routes_1.CHECKOUT_STEP_3);
    };
    const getInitialValues = () => ({
        fullname: contactDetails.fullname ?? '',
        email: contactDetails.email ?? '',
        mobile: contactDetails.mobile || {
            country: '',
            countryCode: 'pl',
            dialCode: '48',
            value: ''
        },
        street: contactDetails.street ?? '',
        postCode: contactDetails.postCode ?? '',
        city: contactDetails.city ?? '',
        nip: contactDetails.nip ?? ''
    });
    const getSchema = (customerType) => {
        const base = (0, yup_1.object)().shape({
            fullname: (0, yup_1.string)()
                .required('To pole jest wymagane')
                .matches(/^(\w){3,} (\w){3,}$/, 'To pole powinno zawierać imię i nazwisko'),
            email: (0, yup_1.string)()
                .email('Wprowadzony email jest niepoprawny')
                .required('To pole jest wymagane'),
            mobile: (0, yup_1.object)()
                .shape({
                country: (0, yup_1.string)(),
                countryCode: (0, yup_1.string)(),
                dialCode: (0, yup_1.string)(),
                value: (0, yup_1.string)()
                    .min(11, 'Numer telefonu powinien składać się z 9 cyfr')
                    .required('Numer telefonu jest wymagany')
            })
                .required('Numer telefonu jest wymagany'),
            street: (0, yup_1.string)().required('Adres jest wymagany'),
            postCode: (0, yup_1.string)()
                .trim()
                .matches(/^(\d{2})-(\d{3})$/, 'Kod pocztowy powinien mieć format XX-XXX')
                .required('To pole jest wymagane'),
            city: (0, yup_1.string)().required('To pole jest wymagane')
        });
        const companySchema = base.shape({
            nip: (0, yup_1.string)()
                .required('To pole jest wymagane')
                .length(10, 'NIP powinien mieć 10 znaków')
                .matches(/^(\d{10})$/, 'NIP powinien zawierać tylko cyfry')
        });
        return customerType === 'INDIVIDUAL' ? base : companySchema;
    };
    return {
        onSubmitForm,
        getInitialValues,
        getSchema
    };
};
exports.default = useFormSubmit;


/***/ }),

/***/ 45270:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DELIVERY_METHODS = void 0;
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const react_1 = __importDefault(__webpack_require__(67294));
const formik_1 = __webpack_require__(94649);
const react_i18next_1 = __webpack_require__(86162);
const utils_1 = __webpack_require__(79941);
const CheckboxField_1 = __importDefault(__webpack_require__(75177));
const OrderDetails = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(Flexbox_1.default, { margin: "0 1.2rem", flexDirection: "column", className: "checkout-fieldset" }, Object.entries(exports.DELIVERY_METHODS).map(([key, price], index) => (react_1.default.createElement(formik_1.Field, { name: "deliveryType", key: key }, (props) => (react_1.default.createElement(CheckboxField_1.default, { ...props, id: key, isFirst: index === 0, title: t(`checkoutPage.step3.form.delivery.${key}.title`), subtitle: t(`checkoutPage.step3.form.delivery.${key}.time`), val: (0, utils_1.displayMoney)(price), fieldLabel: t('checkoutPage.step3.form.delivery.label') })))))))));
};
exports.DELIVERY_METHODS = {
    FREE_PARCEL: 10,
    PICK_UP: 0
};
exports.default = OrderDetails;


/***/ }),

/***/ 70632:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formSchema = void 0;
/* eslint-disable no-undef */
const routes_1 = __webpack_require__(5208);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const preferredDeliveryActions_1 = __webpack_require__(25019);
const yup_1 = __webpack_require__(87561);
exports.formSchema = (0, yup_1.object)().shape({
    deliveryType: (0, yup_1.mixed)().oneOf(['FREE_PARCEL', 'PICK_UP'], 'Wybierz jedną, aby przejść dalej.')
});
const useFormSubmit = () => {
    const { preferredDelivery } = (0, react_redux_1.useSelector)((store) => ({
        preferredDelivery: store.NEWpreferredDelivery
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const history = (0, react_router_dom_1.useHistory)();
    const onSubmitForm = (form) => {
        if (form.deliveryType) {
            dispatch((0, preferredDeliveryActions_1.setPreferredDelivery)(form.deliveryType));
        }
        history.push(form.deliveryType === 'FREE_PARCEL' ? routes_1.CHECKOUT_STEP_3A : routes_1.CHECKOUT_STEP_4);
    };
    const getInitialValues = () => ({
        deliveryType: preferredDelivery || null
    });
    return {
        onSubmitForm,
        getInitialValues
    };
};
exports.default = useFormSubmit;


/***/ }),

/***/ 718:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(60886);
const hooks_1 = __webpack_require__(8560);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const formik_1 = __webpack_require__(94649);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const routes_1 = __webpack_require__(5208);
const Actions_1 = __importDefault(__webpack_require__(98756));
const WithCheckout_1 = __importDefault(__webpack_require__(70617));
const StepTracker_1 = __importDefault(__webpack_require__(66765));
const Checkout_1 = __importDefault(__webpack_require__(434));
const Wrapper_1 = __importDefault(__webpack_require__(82196));
const ShippingTotal_1 = __importDefault(__webpack_require__(2902));
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
const form_1 = __importStar(__webpack_require__(70632));
const OrderDetails_1 = __importStar(__webpack_require__(45270));
const Step3 = ({ total }) => {
    const { contactDetails: { email, mobile, fullname } } = (0, react_redux_1.useSelector)((store) => ({
        contactDetails: store.NEWcontactDetails
    }));
    const { onSubmitForm, getInitialValues } = (0, form_1.default)();
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useDocumentTitle)('Check Out Step 2 | Salinaka');
    (0, hooks_1.useScrollTop)();
    if (!email || !mobile || !fullname) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_STEP_2 });
    }
    return (react_1.default.createElement(common_1.Boundary, null,
        react_1.default.createElement(Checkout_1.default, null,
            react_1.default.createElement(StepTracker_1.default, { current: 3 }),
            react_1.default.createElement(Wrapper_1.default, null,
                react_1.default.createElement("h3", { className: "text-center" }, t('checkoutPage.step3.title')),
                react_1.default.createElement(formik_1.Formik, { initialValues: getInitialValues(), validateOnChange: true, validationSchema: form_1.formSchema, onSubmit: onSubmitForm }, ({ handleSubmit, values }) => {
                    const delivery = values.deliveryType
                        ? OrderDetails_1.DELIVERY_METHODS[values.deliveryType]
                        : 0;
                    return (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                        react_1.default.createElement(OrderDetails_1.default, null),
                        react_1.default.createElement(ShippingTotal_1.default, { total: {
                                ...total,
                                delivery,
                                sum: total.products + delivery
                            } }),
                        react_1.default.createElement(Actions_1.default, { step: 3 })));
                })))));
};
exports.default = (0, WithCheckout_1.default)(Step3);


/***/ }),

/***/ 12486:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DELIVERY_METHODS = void 0;
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
const formik_1 = __webpack_require__(63011);
const formik_2 = __webpack_require__(94649);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const OrderDetails = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement("div", { className: "checkout-fieldset" },
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "street" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: getRequiredOrNot(t('checkoutPage.step3a.form.street.label'), true), placeholder: t('checkoutPage.step3a.form.street.placeholder') })))),
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "houseNr" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: getRequiredOrNot(t('checkoutPage.step3a.form.houseNr.label'), true), placeholder: t('checkoutPage.step3a.form.houseNr.placeholder') }))))),
            react_1.default.createElement("div", { className: "checkout-fieldset" },
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "postCode" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: getRequiredOrNot(t('checkoutPage.step3a.form.postCode.label'), true), placeholder: t('checkoutPage.step3a.form.postCode.placeholder') })))),
                react_1.default.createElement("div", { className: "d-block checkout-field" },
                    react_1.default.createElement(formik_2.Field, { name: "city" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: getRequiredOrNot(t('checkoutPage.step3a.form.city.label'), true), placeholder: t('checkoutPage.step3a.form.city.placeholder') }))))))));
};
const getRequiredOrNot = (label, required) => `${required ? '* ' : ''}${label}`;
exports.DELIVERY_METHODS = {
    FREE_PARCEL: 10,
    PICK_UP: 0
};
exports.default = OrderDetails;


/***/ }),

/***/ 96258:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formSchema = void 0;
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
const routes_1 = __webpack_require__(5208);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const shippingActions_1 = __webpack_require__(2345);
const yup_1 = __webpack_require__(87561);
exports.formSchema = (0, yup_1.object)().shape({
    street: (0, yup_1.string)().required('To pole jest wymagane.'),
    houseNr: (0, yup_1.string)().required('To pole jest wymagane.'),
    postCode: (0, yup_1.string)().required('To pole jest wymagane.'),
    city: (0, yup_1.string)().required('To pole jest wymagane.')
});
const useFormSubmit = () => {
    const { shipping } = (0, react_redux_1.useSelector)((store) => ({
        shipping: store.NEWshipping
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const history = (0, react_router_dom_1.useHistory)();
    const onSubmitForm = (form) => {
        dispatch((0, shippingActions_1.setShippingLocaly)(form));
        history.push(routes_1.CHECKOUT_STEP_4);
    };
    const getInitialValues = () => shipping || {
        street: '',
        houseNr: '',
        postCode: '',
        city: ''
    };
    return {
        onSubmitForm,
        getInitialValues
    };
};
exports.default = useFormSubmit;


/***/ }),

/***/ 83201:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(60886);
const hooks_1 = __webpack_require__(8560);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const formik_1 = __webpack_require__(94649);
const WithCheckout_1 = __importDefault(__webpack_require__(70617));
const StepTracker_1 = __importDefault(__webpack_require__(66765));
const Checkout_1 = __importDefault(__webpack_require__(434));
const Wrapper_1 = __importDefault(__webpack_require__(82196));
const ShippingTotal_1 = __importDefault(__webpack_require__(2902));
const form_1 = __importStar(__webpack_require__(96258));
const OrderDetails_1 = __importDefault(__webpack_require__(12486));
const Actions_1 = __importDefault(__webpack_require__(98756));
const OrderDetails_2 = __webpack_require__(45270);
const Step3a = ({ total }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { onSubmitForm, getInitialValues } = (0, form_1.default)();
    (0, hooks_1.useDocumentTitle)('Check Out Step 2 | Salinaka');
    (0, hooks_1.useScrollTop)();
    return (react_1.default.createElement(common_1.Boundary, null,
        react_1.default.createElement(Checkout_1.default, null,
            react_1.default.createElement(StepTracker_1.default, { current: 3 }),
            react_1.default.createElement(Wrapper_1.default, null,
                react_1.default.createElement("h3", { className: "text-center" }, t('checkoutPage.step3a.title')),
                react_1.default.createElement(formik_1.Formik, { initialValues: getInitialValues(), validateOnChange: true, validationSchema: form_1.formSchema, onSubmit: onSubmitForm }, ({ handleSubmit }) => {
                    const delivery = OrderDetails_2.DELIVERY_METHODS.FREE_PARCEL;
                    return (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                        react_1.default.createElement(OrderDetails_1.default, null),
                        react_1.default.createElement(ShippingTotal_1.default, { total: {
                                ...total,
                                delivery,
                                sum: total.products + delivery
                            } }),
                        react_1.default.createElement(Actions_1.default, { step: 101 })));
                })))));
};
exports.default = (0, WithCheckout_1.default)(Step3a);


/***/ }),

/***/ 86864:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const react_1 = __importDefault(__webpack_require__(67294));
const formik_1 = __webpack_require__(94649);
const react_i18next_1 = __webpack_require__(86162);
const CheckboxField_1 = __importDefault(__webpack_require__(75177));
const paymentMethods_1 = __importDefault(__webpack_require__(24502));
const OrderDetails = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(Flexbox_1.default, { margin: "0 1.2rem", flexDirection: "column", className: "checkout-fieldset" }, paymentMethods_1.default.map((method, index) => (react_1.default.createElement(formik_1.Field, { name: "paymentType", key: method }, (props) => (react_1.default.createElement(CheckboxField_1.default, { ...props, id: method, isFirst: index === 0, title: t(`checkoutPage.step4.form.paymentType.${method}.title`), subtitle: t(`checkoutPage.step4.form.paymentType.${method}.subtitle`), fieldLabel: t('checkoutPage.step4.form.paymentType.label') })))))))));
};
exports.default = OrderDetails;


/***/ }),

/***/ 86962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formSchema = void 0;
const routes_1 = __webpack_require__(5208);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const checkoutActions_1 = __webpack_require__(35490);
const prefferedPaymentActions_1 = __webpack_require__(21075);
const yup_1 = __webpack_require__(87561);
exports.formSchema = (0, yup_1.object)().shape({
    paymentType: (0, yup_1.mixed)().oneOf(['TRANSFER'], 'Wybierz jedną, aby przejść dalej.')
});
const useFormSubmit = (total, basket, auth) => {
    const history = (0, react_router_dom_1.useHistory)();
    const { paymentType, deliveryType, contactDetails, shipping } = (0, react_redux_1.useSelector)((store) => ({
        paymentType: store.NEWpreferredPayment,
        deliveryType: store.NEWpreferredDelivery,
        contactDetails: store.NEWcontactDetails,
        shipping: store.NEWshipping
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const onSubmit = (form) => {
        dispatch((0, prefferedPaymentActions_1.setPreferredPayment)(form.paymentType));
        dispatch((0, checkoutActions_1.addOrderRemotely)({
            total,
            basket,
            auth,
            paymentType: form.paymentType,
            deliveryType,
            contactDetails,
            shipping
        }));
        history.push(routes_1.CHECKOUT_RESULT);
    };
    const getInitialValues = () => ({
        paymentType: paymentType || 'TRANSFER'
    });
    return {
        onSubmit,
        getInitialValues
    };
};
exports.default = useFormSubmit;


/***/ }),

/***/ 39243:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const formik_1 = __webpack_require__(94649);
const hooks_1 = __webpack_require__(8560);
const react_1 = __importDefault(__webpack_require__(67294));
const WithCheckout_1 = __importDefault(__webpack_require__(70617));
const StepTracker_1 = __importDefault(__webpack_require__(66765));
const form_1 = __importStar(__webpack_require__(86962));
const Actions_1 = __importDefault(__webpack_require__(98756));
const ShippingTotal_1 = __importDefault(__webpack_require__(2902));
const Checkout_1 = __importDefault(__webpack_require__(434));
const Wrapper_1 = __importDefault(__webpack_require__(82196));
const react_i18next_1 = __webpack_require__(86162);
const OrderDetails_1 = __importDefault(__webpack_require__(86864));
const react_redux_1 = __webpack_require__(14494);
const Payment = ({ auth, total }) => {
    const { deliveryType, basket } = (0, react_redux_1.useSelector)((store) => ({
        deliveryType: store.NEWpreferredDelivery,
        basket: store.basket
    }));
    const { t } = (0, react_i18next_1.useTranslation)();
    const { onSubmit, getInitialValues } = (0, form_1.default)(total, basket, auth);
    (0, hooks_1.useDocumentTitle)('Check Out Final Step | Salinaka');
    (0, hooks_1.useScrollTop)();
    // if (!deliveryType) {
    //   return <Redirect to={CHECKOUT_STEP_4} />
    // }
    return (react_1.default.createElement(Checkout_1.default, null,
        react_1.default.createElement(StepTracker_1.default, { current: 4 }),
        react_1.default.createElement(Wrapper_1.default, null,
            react_1.default.createElement("h3", { className: "text-center" }, t('checkoutPage.step4.title')),
            react_1.default.createElement(formik_1.Formik, { initialValues: getInitialValues(), validateOnChange: true, validationSchema: form_1.formSchema, onSubmit: onSubmit }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                react_1.default.createElement(OrderDetails_1.default, null),
                react_1.default.createElement(ShippingTotal_1.default, { total: total }),
                react_1.default.createElement(Actions_1.default, { step: 4 })))))));
};
exports.default = (0, WithCheckout_1.default)(Payment);


/***/ }),

/***/ 98756:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(4747);
const Box_1 = __importDefault(__webpack_require__(84962));
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const routes_1 = __webpack_require__(5208);
const react_router_dom_1 = __webpack_require__(77856);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const Actions = ({ step }) => {
    const { basket } = (0, react_redux_1.useSelector)((store) => ({
        basket: store.basket
    }));
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const isBasketEmpty = basket.length === 0;
    const onClickPrevious = () => {
        switch (step) {
            case 1:
                history.push('/');
                break;
            case 2:
                history.push(routes_1.CHECKOUT_STEP_1);
                break;
            case 3:
                history.push(routes_1.CHECKOUT_STEP_2);
                break;
            case 101:
                history.push(routes_1.CHECKOUT_STEP_3);
                break;
            default:
                history.push(routes_1.CHECKOUT_STEP_3);
                break;
        }
    };
    const isFirstPage = step === 1;
    const onClickNext = () => {
        if (isFirstPage) {
            history.push(routes_1.CHECKOUT_STEP_2);
        }
    };
    return (react_1.default.createElement(Flexbox_1.default, { marginTop: "2rem", alignItems: "center", justifyContent: "space-between" },
        react_1.default.createElement("button", { className: "button button-muted", onClick: onClickPrevious, type: "button" },
            isFirstPage && (react_1.default.createElement(Box_1.default, { marginRight: "0.5rem" },
                react_1.default.createElement(icons_1.ShopOutlined, null))),
            t(isFirstPage
                ? 'checkoutPage.actions.backToShop'
                : 'checkoutPage.actions.back')),
        react_1.default.createElement("button", { disabled: isBasketEmpty, className: "button", onClick: onClickNext, type: isFirstPage ? 'button' : 'submit' },
            react_1.default.createElement(Box_1.default, { marginRight: "0.5rem" }, t(step === 4
                ? 'checkoutPage.actions.createOrder'
                : 'checkoutPage.actions.next')),
            react_1.default.createElement(icons_1.ArrowRightOutlined, null))));
};
exports.default = Actions;


/***/ }),

/***/ 434:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Checkout = styled_components_1.default.div `
  width: 100%;
`;
exports.default = Checkout;


/***/ }),

/***/ 2902:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const utils_1 = __webpack_require__(79941);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const ShippingTotal = ({ total }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement(Flexbox_1.default, { marginTop: "2rem", justifyContent: "flex-end", alignItems: "center", paddingRight: "m-size" },
        react_1.default.createElement("table", null,
            react_1.default.createElement("tbody", null,
                total.products !== undefined && (react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", { className: "d-block margin-0 padding-right-s text-right" }, t('checkoutPage.total.products'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("h4", { className: "basket-total-amount text-subtle text-right margin-0" }, (0, utils_1.displayMoney)(total.products))))),
                total.delivery !== undefined && (react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", { className: "d-block margin-0 padding-right-s text-right" }, t('checkoutPage.total.delivery'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("h4", { className: "basket-total-amount text-subtle text-right margin-0 " }, (0, utils_1.displayMoney)(total.delivery))))),
                total.sum !== undefined && (react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", { className: "d-block margin-0 padding-right-s text-right" }, t('checkoutPage.total.sum'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("h2", { className: "basket-total-amount text-right" }, (0, utils_1.displayMoney)(total.sum)))))))));
};
exports.default = ShippingTotal;


/***/ }),

/***/ 66765:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-confusing-arrow */
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const StepTracker = ({ current }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const getClassName = (step) => current === step ? 'is-active-step' : step < current ? 'is-done-step' : '';
    return (react_1.default.createElement("div", { className: "checkout-header" },
        react_1.default.createElement("ul", { className: "checkout-header-menu" }, [1, 2, 3, 4].map((step) => (react_1.default.createElement("li", { className: `checkout-header-list ${getClassName(step)}` },
            react_1.default.createElement("div", { className: "checkout-header-item" },
                react_1.default.createElement("div", { className: "checkout-header-icon" },
                    react_1.default.createElement("h4", { className: "checkout-header-step" }, step)),
                react_1.default.createElement("h6", { className: "checkout-header-subtitle" }, t(`checkoutPage.steps.${step}`)))))))));
};
exports.default = StepTracker;


/***/ }),

/***/ 70617:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const routes_1 = __webpack_require__(5208);
const utils_1 = __webpack_require__(79941);
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const OrderDetails_1 = __webpack_require__(45270);
const WithCheckout = (Component) => (0, react_router_dom_1.withRouter)((props) => {
    const path = (0, react_router_dom_1.useLocation)();
    const { auth, basket, preferredDelivery } = (0, react_redux_1.useSelector)((store) => ({
        auth: store.auth,
        basket: store.basket,
        preferredDelivery: store.NEWpreferredDelivery
    }));
    const isAuth = !!auth.id && !!auth.role;
    if (!isAuth) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.SIGNIN });
    }
    const isFirstPageOfCheckout = path.pathname === routes_1.CHECKOUT_STEP_1;
    if (basket.length === 0 && !isFirstPageOfCheckout) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_STEP_1 });
    }
    const products = (0, utils_1.calculateTotal)(basket.map((product) => product.price * product.quantity));
    const delivery = preferredDelivery ? OrderDetails_1.DELIVERY_METHODS[preferredDelivery] : 0;
    const total = {
        products,
        delivery,
        sum: products + delivery
    };
    return react_1.default.createElement(Component, { ...props, auth: auth, total: total });
});
exports.default = WithCheckout;


/***/ }),

/***/ 82196:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Wrapper = styled_components_1.default.div `
  width: 70rem;
  margin: auto;
  min-height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
exports.default = Wrapper;


/***/ }),

/***/ 13043:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageNotFound = exports.Product = exports.Home = exports.CheckoutResult = exports.CheckoutStep4 = exports.CheckoutStep3a = exports.CheckoutStep3 = exports.CheckoutStep2 = exports.CheckoutStep1 = void 0;
var Step1_1 = __webpack_require__(68562);
Object.defineProperty(exports, "CheckoutStep1", ({ enumerable: true, get: function () { return __importDefault(Step1_1).default; } }));
var Step2_1 = __webpack_require__(45713);
Object.defineProperty(exports, "CheckoutStep2", ({ enumerable: true, get: function () { return __importDefault(Step2_1).default; } }));
var Step3_1 = __webpack_require__(718);
Object.defineProperty(exports, "CheckoutStep3", ({ enumerable: true, get: function () { return __importDefault(Step3_1).default; } }));
var Step3a_1 = __webpack_require__(83201);
Object.defineProperty(exports, "CheckoutStep3a", ({ enumerable: true, get: function () { return __importDefault(Step3a_1).default; } }));
var Step4_1 = __webpack_require__(39243);
Object.defineProperty(exports, "CheckoutStep4", ({ enumerable: true, get: function () { return __importDefault(Step4_1).default; } }));
var Result_1 = __webpack_require__(29130);
Object.defineProperty(exports, "CheckoutResult", ({ enumerable: true, get: function () { return __importDefault(Result_1).default; } }));
var Home_1 = __webpack_require__(22439);
Object.defineProperty(exports, "Home", ({ enumerable: true, get: function () { return __importDefault(Home_1).default; } }));
var Product_1 = __webpack_require__(74058);
Object.defineProperty(exports, "Product", ({ enumerable: true, get: function () { return __importDefault(Product_1).default; } }));
var PageNotFound_1 = __webpack_require__(13700);
Object.defineProperty(exports, "PageNotFound", ({ enumerable: true, get: function () { return __importDefault(PageNotFound_1).default; } }));


/***/ }),

/***/ 62493:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.history = void 0;
const history_1 = __webpack_require__(90071);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const views_1 = __webpack_require__(13043);
const routes_1 = __webpack_require__(74897);
const Navigation_1 = __importDefault(__webpack_require__(8771));
const Products_1 = __importDefault(__webpack_require__(71117));
exports.history = (0, history_1.createBrowserHistory)();
// const PageNotFound = lazy(() => import('views/PageNotFound'))
const AppRouter = () => (react_1.default.createElement(react_router_dom_1.Router, { history: exports.history },
    react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Navigation_1.default, null),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { component: Products_1.default, exact: true, path: routes_1.PRODUCTS }),
            react_1.default.createElement(views_1.PageNotFound, null)))));
exports.default = AppRouter;


/***/ }),

/***/ 58341:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/forbid-prop-types */
const react_1 = __importStar(__webpack_require__(67294));
const AppRouter_1 = __importDefault(__webpack_require__(62493));
const root_1 = __webpack_require__(71570);
const react_query_1 = __webpack_require__(88767);
const auth_1 = __webpack_require__(2571);
const authProvider_1 = __webpack_require__(66025);
const profileProvider_1 = __webpack_require__(25866);
const getProfile_1 = __importDefault(__webpack_require__(19729));
const commonComponents_1 = __webpack_require__(31802);
const App = () => {
    const { auth, setAuth } = (0, react_1.useContext)(authProvider_1.authContext);
    const { setProfile } = (0, react_1.useContext)(profileProvider_1.profileContext);
    const { mutateAsync: mutateGetProfile } = (0, react_query_1.useMutation)(getProfile_1.default);
    (0, react_1.useEffect)(() => {
        const auth2 = (0, auth_1.getAuth)();
        auth2.onAuthStateChanged(async (user) => {
            if (user) {
                setAuth(user);
                const alfa = await mutateGetProfile({ id: user.uid });
                setProfile(alfa);
            }
            else {
                setAuth(null);
            }
        });
    }, []);
    if (auth === undefined) {
        return react_1.default.createElement(commonComponents_1.Preloader, null);
    }
    return react_1.default.createElement(AppRouter_1.default, null);
};
exports.default = (0, root_1.hot)(App);


/***/ }),

/***/ 13700:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(8560);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const PageNotFound = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useScrollTop)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(Container, null,
            react_1.default.createElement("h1", null, t('pageNotFound.title')),
            react_1.default.createElement("br", null),
            react_1.default.createElement("button", { className: "button", onClick: history.goBack, type: "button" }, t('pageNotFound.buttonLabel')))));
};
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${(props) => props.theme.space['xxl-size']};
  margin: auto;
`;
exports.default = PageNotFound;


/***/ }),

/***/ 65606:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Tile_1 = __importDefault(__webpack_require__(18416));
const ProductsGrid = ({ products }) => (react_1.default.createElement(Container, null, products.map((product) => (react_1.default.createElement(Tile_1.default, { key: product.id, product: product })))));
const GRID_GAP = '3rem';
const Container = styled_components_1.default.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, 38rem);
  grid-gap: ${GRID_GAP};
`;
exports.default = ProductsGrid;


/***/ }),

/***/ 18416:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(60886);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const utils_1 = __webpack_require__(79941);
const ProductTile = ({ product }) => {
    const history = (0, react_router_dom_1.useHistory)();
    const onClick = () => {
        if (!product)
            return;
        history.push(`/product/${product.id}`);
    };
    return (react_1.default.createElement(Container, { onClick: onClick, role: "presentation" },
        react_1.default.createElement(ImageWrapper, null,
            react_1.default.createElement(common_1.ImageLoader, { alt: "", className: "product-card-img", src: product.gallery[0].url })),
        react_1.default.createElement(InfoWrapper, null,
            react_1.default.createElement("h3", null, product.name),
            react_1.default.createElement("p", { className: "text-subtle text-italic" }, (0, utils_1.displayMoney)(product.price)))));
};
const Container = styled_components_1.default.div `
  width: 100%;
  max-height: 30rem;
  border: 1px solid ${(props) => props.theme.colors['border-color']};

  &:hover {
    cursor: pointer;

    & > * img {
      transform: scale(1.1);
    }
  }
`;
const ImageWrapper = styled_components_1.default.div `
  width: 100%;
  height: 20rem;
  background: ${(props) => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  padding: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* @include bezier-transition; */
  }
`;
const InfoWrapper = styled_components_1.default.div `
  padding: 1.5rem;

  h3 {
    margin: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
exports.default = ProductTile;


/***/ }),

/***/ 60199:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Grid_1 = __importDefault(__webpack_require__(65606));
const ProductsList = ({ query }) => (react_1.default.createElement(components_1.QueryLoader, { query: query }, (data) => react_1.default.createElement(Grid_1.default, { products: data })));
exports.default = ProductsList;


/***/ }),

/***/ 71117:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(72934);
const Page_1 = __importDefault(__webpack_require__(65415));
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_query_1 = __webpack_require__(88767);
const react_i18next_1 = __webpack_require__(86162);
const ProductsList_1 = __importDefault(__webpack_require__(60199));
const Products = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useDocumentTitle)('dfff' ?? 0);
    (0, hooks_1.useScrollTop)();
    const productQuery = (0, react_query_1.useQuery)('products', api_1.getProducts);
    return (react_1.default.createElement(Page_1.default, null,
        react_1.default.createElement(ProductsList_1.default, { query: productQuery })));
};
exports.default = Products;


/***/ }),

/***/ 38523:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const colors = {
    'border-color': '#e1e1e1',
    'button-color': '#101010',
    'button-hover': 'rgba(16, 16, 16, 0.9)',
    color1: '#f3f3f3',
    'off-white': '#f0f0f0',
    white: 'rgb(255, 255, 255)',
    color2: '#f1f1f1',
    'paragraph-color': '#4a4a4a',
    green: 'rgb(59, 150, 32)',
    red: 'rgba(247, 45, 45, 0.986)',
    'nav-bg-scrolled': '#fff',
    'background-color-01': '#f2f2f2'
};
const zIndices = {
    toast: 100,
    modal: 80,
    basket: 60,
    navigation: 55,
    filter: 40,
    search: 30,
    content: 10
};
const fontSizes = {
    baseFontSize: '1.6rem',
    'font-small': '1.2rem',
    'font-medium': '1.5rem',
    'font-large': '2rem',
    'font-xlarge': '4rem'
};
const space = {
    'nav-height': '6rem',
    'xs-size': '1rem',
    's-size': '1.2rem',
    'm-size': '1.6rem',
    'l-size': '3.2rem',
    'xl-size': '4.8rem',
    'xxl-size': '5.6rem',
    top: '10rem',
    'top-mobile': '8.5rem',
    bottom: '15rem',
    'line-height': '2.4rem',
    'pad-desktop': '10rem'
};
const theme = {
    colors,
    space,
    zIndices,
    fontSizes
};
exports.default = theme;


/***/ }),

/***/ 8558:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(4747);
const Box_1 = __importDefault(__webpack_require__(84962));
const react_router_dom_1 = __webpack_require__(77856);
const react_1 = __importDefault(__webpack_require__(67294));
const routes_1 = __webpack_require__(5208);
const react_i18next_1 = __webpack_require__(86162);
const BackButton = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.SHOP },
        react_1.default.createElement("h3", { className: "button-link d-inline-flex" },
            react_1.default.createElement(Box_1.default, { marginRight: "0.5rem" },
                react_1.default.createElement(icons_1.ArrowLeftOutlined, null)),
            t('productPage.goBack'))));
};
exports.default = BackButton;


/***/ }),

/***/ 80678:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
const react_i18next_1 = __webpack_require__(86162);
const utils_1 = __webpack_require__(79941);
const react_1 = __importDefault(__webpack_require__(67294));
const react_select_1 = __importDefault(__webpack_require__(78329));
const formik_1 = __webpack_require__(94649);
const useForm_1 = __importDefault(__webpack_require__(33602));
const Form = ({ product }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { schema, initialValues, handleAddProductToBasket, getIsInBasket, setVariant, submitForm, variant } = (0, useForm_1.default)(product);
    const isInBasket = getIsInBasket();
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: submitForm }, () => (react_1.default.createElement(formik_1.Form, null,
        product.variants && (react_1.default.createElement(formik_1.Field, { name: "email", type: "email" }, (fieldProps) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", { className: "text-subtle" }, t('productPage.optionLabel')),
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_select_1.default, { placeholder: product.variantsLabel ?? 'Wybierz', onChange: (option) => 
                    // fieldProps.field.onChange('dlggdk')
                    setVariant(option?.value), options: product?.variants
                        .sort((a, b) => (a < b ? -1 : 1))
                        .map((option) => ({
                        label: option.name,
                        value: option.value
                    })), styles: {
                        menu: (provided) => ({ ...provided, zIndex: 10 })
                    } })))))),
        react_1.default.createElement("h1", null, (0, utils_1.displayMoney)(product.price)),
        react_1.default.createElement("div", { className: "product-modal-action" },
            react_1.default.createElement("button", { disabled: product.variants && !variant, className: `button button-small ${isInBasket ? 'button-border button-border-gray' : ''}`, onClick: handleAddProductToBasket, type: "button" }, isInBasket
                ? t('productPage.removeFromBasket')
                : t('productPage.addToBasket')))))));
};
exports.default = Form;


/***/ }),

/***/ 45668:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(77704));
const Square_1 = __importDefault(__webpack_require__(5974));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const react_1 = __importStar(__webpack_require__(67294));
const common_1 = __webpack_require__(60886);
const Separator_1 = __importDefault(__webpack_require__(32641));
const Images = ({ name, gallery }) => {
    const [selectedImage, setSelectedImage] = (0, react_1.useState)(gallery[0].url);
    return (react_1.default.createElement(Flexbox_1.default, { flexDirection: "column", width: "40%", maxWidth: "500px" },
        react_1.default.createElement(Square_1.default, null,
            react_1.default.createElement(ImageWrapper, null,
                react_1.default.createElement(common_1.ImageLoader, { alt: name, className: "product-modal-image", src: selectedImage }))),
        react_1.default.createElement(Separator_1.default, null),
        gallery.length !== 0 && (react_1.default.createElement(Gallery, null, gallery.map((image) => (react_1.default.createElement(GalleryImageWrapper, { key: image.id, onClick: () => setSelectedImage(image.url), role: "presentation" },
            react_1.default.createElement(GalleryImage, { src: image.url }))))))));
};
const ImageWrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  flex-grow: 1;
  position: relative;

  /* background: #f8f8f8; */

  /* @include mobile {
  width: 100%;
  height: 20rem;
  margin: auto;
} */

  input[type='color'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: hue;
  }
`;
const Gallery = styled_components_1.default.div `
  width: 100%;
  background: #fff;
  padding: 5px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, 60px);
  grid-template-rows: repeat(auto-fit, 60px);
  grid-gap: 5px;

  /* @include tablet {
    width: 100%;
    height: auto;
    order: 2;
    overflow-x: scroll;
    overflow-y: unset;
    flex-direction: row;
  } */

  /* &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1a1a1a;
    outline: 1px solid #f8f8f8;
    // border-radius: .6rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  } */
`;
const GalleryImage = (0, styled_components_1.default)(common_1.ImageLoader) `
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const GalleryImageWrapper = styled_components_1.default.div `
  min-width: 100%;
  max-width: 100%;
  min-height: 60px;
  max-height: 60px;
  border: 1px solid #e1e1e1;
  margin-right: 5px;
  position: relative;

  &:hover {
    cursor: pointer;
    background: #fff;
  }

  &:last-child {
    margin-right: 0;
  }

  /* @include tablet {
    order: 1;
    width: 100px;
  } */
`;
exports.default = Images;


/***/ }),

/***/ 74058:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(8560);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const Page_1 = __importDefault(__webpack_require__(65415));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const react_query_1 = __webpack_require__(88767);
const getProduct_1 = __importDefault(__webpack_require__(47515));
const QueryLoader_1 = __importDefault(__webpack_require__(69559));
const Form_1 = __importDefault(__webpack_require__(80678));
const BackButton_1 = __importDefault(__webpack_require__(8558));
const Images_1 = __importDefault(__webpack_require__(45668));
const Product = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const { product } = (0, hooks_1.useProduct)(id);
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)(`View ${product?.name || 'Item'}`);
    const productQuery = (0, react_query_1.useQuery)(`product/${id}`, () => (0, getProduct_1.default)({ id }));
    return (react_1.default.createElement(Page_1.default, null,
        react_1.default.createElement(QueryLoader_1.default, { query: productQuery }, (data) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(BackButton_1.default, null),
            react_1.default.createElement(ProductModal, null,
                react_1.default.createElement(Images_1.default, { ...data }),
                react_1.default.createElement(Details, null,
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("h1", { className: "margin-top-0" }, data.name),
                    react_1.default.createElement("span", null, data.description),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("div", { className: "divider" }),
                    react_1.default.createElement(Form_1.default, { product: data }))))))));
};
const ProductModal = styled_components_1.default.div `
  padding: 30px;
  width: 100%;
  display: flex;
  background: #fff;
  border: 1px solid #e1e1e1;
`;
const Details = styled_components_1.default.div `
  margin-left: 3rem;
  flex-grow: 1;
`;
exports.default = Product;


/***/ }),

/***/ 33602:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const basketProvider_1 = __webpack_require__(69507);
const react_1 = __webpack_require__(67294);
const yup_1 = __webpack_require__(87561);
const useForm = (product) => {
    const [variant, setVariant] = (0, react_1.useState)(undefined);
    const { basket, setBasket } = (0, react_1.useContext)(basketProvider_1.basketContext);
    const getIsInBasket = () => basket.find((item) => {
        if (variant) {
            return product.id === item.id && variant === item.variant;
        }
        return product.id === item.id;
    });
    const isInBasket = getIsInBasket();
    const handleAddProductToBasket = () => {
        setBasket((prev) => {
            if (isInBasket) {
                const productInBasket = prev.find((elem) => {
                    if (variant) {
                        return product.id === elem.id && variant === elem.variant;
                    }
                    return elem.id === product.id;
                });
                return prev.filter((elem) => elem !== productInBasket);
            }
            const newBasketProduct = {
                id: product.id,
                quantity: 1,
                variant
            };
            return [...prev, newBasketProduct];
        });
    };
    const initialValues = product.variants
        ? {
            variant: undefined
        }
        : {};
    const schemaWhenVariants = (0, yup_1.object)({
        variant: (0, yup_1.string)()
    });
    const schemaWhenNoVariants = (0, yup_1.object)({});
    const schema = product.variants ? schemaWhenVariants : schemaWhenNoVariants;
    const submitForm = () => { };
    return {
        handleAddProductToBasket,
        getIsInBasket,
        setVariant,
        variant,
        initialValues,
        schema,
        submitForm
    };
};
exports.default = useForm;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkecommerce_react"] = self["webpackChunkecommerce_react"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [736], () => (__webpack_require__(63658)))
/******/ 	__webpack_require__.O(undefined, [736], () => (__webpack_require__(26981)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(17927)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.210e3964d4ebe82c995d.js.map