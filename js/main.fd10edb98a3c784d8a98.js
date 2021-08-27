/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 26380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png");

/***/ }),

/***/ 45939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png");

/***/ }),

/***/ 87958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png");

/***/ }),

/***/ 24309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/defaultAvatar.4e9edb2a624547982816014bf128fcd5.jpg");

/***/ }),

/***/ 51893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/defaultBanner.accdc757f2c48d61f24c4fbcef2742fd.jpg");

/***/ }),

/***/ 60297:
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

/***/ 10234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 61594:
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
const common_1 = __webpack_require__(23211);
const config_1 = __importDefault(__webpack_require__(6527));
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_2 = __webpack_require__(78603);
const AppRouter_1 = __importDefault(__webpack_require__(5460));
const theme_1 = __importDefault(__webpack_require__(38523));
const styled_components_1 = __webpack_require__(29958);
const root_1 = __webpack_require__(71570);
const App = ({ store, persistor }) => (react_1.default.createElement(react_1.StrictMode, null,
    react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(react_2.PersistGate, { loading: react_1.default.createElement(common_1.Preloader, null), persistor: persistor },
            react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
                react_1.default.createElement(react_i18next_1.I18nextProvider, { i18n: config_1.default },
                    react_1.default.createElement(AppRouter_1.default, null)))))));
exports.default = (0, root_1.hot)(App);


/***/ }),

/***/ 62437:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const routes_1 = __webpack_require__(74897);
const logo_full_png_1 = __importDefault(__webpack_require__(60297));
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const UserAvatar_1 = __importDefault(__webpack_require__(12583));
const AdminNavigation = () => {
    const { isAuthenticating, profile } = (0, react_redux_1.useSelector)((state) => ({
        isAuthenticating: state.app.isAuthenticating,
        profile: state.profile
    }));
    return (react_1.default.createElement("nav", { className: "navigation navigation-admin" },
        react_1.default.createElement("div", { className: "logo" },
            react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.ADMIN_DASHBOARD, style: { display: 'flex', alignItems: 'center' } },
                react_1.default.createElement("img", { alt: "Logo", src: logo_full_png_1.default }),
                react_1.default.createElement("h3", null, "ADMIN PANEL"))),
        react_1.default.createElement("ul", { className: "navigation-menu" },
            react_1.default.createElement("li", { className: "navigation-menu-item" },
                react_1.default.createElement(UserAvatar_1.default, { isAuthenticating: isAuthenticating, profile: profile })))));
};
exports.default = AdminNavigation;


/***/ }),

/***/ 27209:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const routes_1 = __webpack_require__(74897);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const SideNavigation = () => (react_1.default.createElement("aside", { className: "sidenavigation" },
    react_1.default.createElement("div", { className: "sidenavigation-wrapper" },
        react_1.default.createElement("div", { className: "sidenavigation-item" },
            react_1.default.createElement(react_router_dom_1.NavLink, { activeClassName: "sidenavigation-menu-active", className: "sidenavigation-menu", to: routes_1.ADMIN_PRODUCTS }, "Products")))));
exports.default = SideNavigation;


/***/ }),

/***/ 10945:
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

/***/ 16820:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-unused-expressions */
const icons_1 = __webpack_require__(70930);
const common_1 = __webpack_require__(23211);
const Box_1 = __importDefault(__webpack_require__(31285));
const utils_1 = __webpack_require__(10901);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const basketActions_1 = __webpack_require__(78057);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Square_1 = __importDefault(__webpack_require__(95204));
const react_router_dom_1 = __webpack_require__(77856);
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const SimpleButton_1 = __importDefault(__webpack_require__(32309));
const BasketItem = ({ product }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const onAddQty = () => {
        dispatch((0, basketActions_1.addQtyItem)(product));
    };
    const onMinusQty = () => {
        if (product.quantity !== 1) {
            dispatch((0, basketActions_1.minusQtyItem)(product));
        }
    };
    const onRemoveFromBasket = () => dispatch((0, basketActions_1.removeFromBasket)(product));
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(SimpleButton_1.default, { disabled: product.quantity === 1, gridArea: "button-minus", onClick: onMinusQty },
            react_1.default.createElement(icons_1.MinusOutlined, { style: { fontSize: '9px' } })),
        react_1.default.createElement(SimpleButton_1.default, { gridArea: "button-plus", onClick: onAddQty },
            react_1.default.createElement(icons_1.PlusOutlined, { style: { fontSize: '9px' } })),
        react_1.default.createElement(Box_1.default, { width: "2rem", height: "2rem", gridArea: "quantity" },
            react_1.default.createElement(common_1.Badge, { stanalone: true, count: product.quantity })),
        react_1.default.createElement(Box_1.default, { gridArea: "picture", position: "relative", width: "9rem", height: "9rem" },
            react_1.default.createElement(Square_1.default, null,
                react_1.default.createElement(common_1.ImageLoader, { alt: product.name ?? '', className: "basket-item-img", src: product.gallery[0].url }))),
        react_1.default.createElement(Flexbox_1.default, { flexDirection: "column", gridArea: "name" },
            react_1.default.createElement(react_router_dom_1.Link, { to: `/product/${product.id}`, onClick: () => document.body.classList.remove('is-basket-open') }, product.name),
            product.variant && (react_1.default.createElement(Box_1.default, { as: "span", marginTop: "0.5rem", className: "spec-title" }, product.variant))),
        react_1.default.createElement(Flexbox_1.default, { alignItems: "center" },
            react_1.default.createElement("h4", { className: "my-0" }, (0, utils_1.displayMoney)(product.price)),
            react_1.default.createElement(Box_1.default, { marginLeft: "0.5rem" },
                react_1.default.createElement("span", { className: "spec-title" }, `(x ${product.quantity})`))),
        react_1.default.createElement(SimpleButton_1.default, { gridArea: "button-remove", onClick: onRemoveFromBasket },
            react_1.default.createElement(icons_1.CloseOutlined, null))));
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
BasketItem.propTypes = {
    product: prop_types_1.default.shape({
        id: prop_types_1.default.string,
        name: prop_types_1.default.string,
        brand: prop_types_1.default.string,
        price: prop_types_1.default.number,
        quantity: prop_types_1.default.number,
        description: prop_types_1.default.string,
        keywords: prop_types_1.default.arrayOf(prop_types_1.default.string),
        selectedSize: prop_types_1.default.string,
        selectedColor: prop_types_1.default.string,
        imageCollection: prop_types_1.default.arrayOf(prop_types_1.default.string),
        sizes: prop_types_1.default.arrayOf(prop_types_1.default.number),
        image: prop_types_1.default.string,
        imageUrl: prop_types_1.default.string,
        isFeatured: prop_types_1.default.bool,
        isRecommended: prop_types_1.default.bool,
        availableColors: prop_types_1.default.arrayOf(prop_types_1.default.string)
    }).isRequired
};
exports.default = BasketItem;


/***/ }),

/***/ 15826:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const useBasketClickToggle_1 = __importDefault(__webpack_require__(51250));
const BasketToggle = ({ children }) => {
    const onClickToggle = (0, useBasketClickToggle_1.default)();
    document.addEventListener('click', (e) => {
        const closest = e.target.closest('.basket');
        const toggle = e.target.closest('.basket-toggle');
        const closeToggle = e.target.closest('.basket-item-remove');
        if (!closest &&
            document.body.classList.contains('is-basket-open') &&
            !toggle &&
            !closeToggle) {
            document.body.classList.remove('is-basket-open');
        }
    });
    return react_1.default.createElement(react_1.default.Fragment, null, children({ onClickToggle }));
};
exports.default = BasketToggle;


/***/ }),

/***/ 62030:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Button_1 = __importDefault(__webpack_require__(11790));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const routes_1 = __webpack_require__(74897);
const utils_1 = __webpack_require__(10901);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const useBasketClickToggle_1 = __importDefault(__webpack_require__(51250));
const Checkout = ({ basket, onCheckOut }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const history = (0, react_router_dom_1.useHistory)();
    const onClickToggle = (0, useBasketClickToggle_1.default)();
    return (react_1.default.createElement(Flexbox_1.default, { background: "white", padding: "m-size", alignItems: "center", 
        // justifyContent="space-between"
        width: "100%" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("p", { className: "basket-total-title" }, t('common.basket.total')),
            react_1.default.createElement("h2", { className: "basket-total-amount" }, (0, utils_1.displayMoney)((0, utils_1.calculateTotal)(basket.map((product) => product.price * product.quantity))))),
        react_1.default.createElement(Button_1.default, { variant: "secondary", marginLeft: "auto", onClick: () => {
                onClickToggle();
                history.push(routes_1.SHOP);
            } }, t('common.basket.backToShop')),
        react_1.default.createElement(Button_1.default, { marginLeft: "10px", onClick: onCheckOut, disabled: basket.length === 0 || pathname === '/checkout' }, t('common.basket.checkout'))));
};
exports.default = Checkout;


/***/ }),

/***/ 59247:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/jsx-one-expression-per-line */
const react_1 = __importDefault(__webpack_require__(67294));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const react_i18next_1 = __webpack_require__(86162);
const useBasketClickToggle_1 = __importDefault(__webpack_require__(51250));
const Box_1 = __importDefault(__webpack_require__(31285));
const Header = ({ basket, onClearBasket }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const onClickToggle = (0, useBasketClickToggle_1.default)();
    return (react_1.default.createElement(Flexbox_1.default, { padding: "m-size", width: "100%", backgroundColor: "white", 
        // @ts-ignore
        zIndex: "basket", alignItems: "center" },
        react_1.default.createElement(Box_1.default, { as: "h3", flexGrow: 1 },
            t('common.basket.title'),
            !!basket.length && (react_1.default.createElement("span", null, t(basket.length > 4
                ? 'common.basket.products_multiple'
                : basket.length > 1
                    ? 'common.basket.products_plural'
                    : 'common.basket.products', { count: basket.length })))),
        !!basket.length && (react_1.default.createElement(Box_1.default, { marginRight: "1rem" },
            react_1.default.createElement("button", { className: "basket-clear button button-border button-border-gray button-small", disabled: basket.length === 0, onClick: onClearBasket, type: "button" },
                react_1.default.createElement("span", null, t('common.basket.clear'))))),
        react_1.default.createElement("span", { className: "basket-toggle button button-border button-border-gray button-small", onClick: onClickToggle, role: "presentation" }, t('common.basket.close'))));
};
exports.default = Header;


/***/ }),

/***/ 40136:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const common_1 = __webpack_require__(23211);
const routes_1 = __webpack_require__(74897);
const react_router_dom_1 = __webpack_require__(77856);
const react_i18next_1 = __webpack_require__(86162);
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const Modal = ({ isOpenModal, onCloseModal }) => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const onSignInClick = () => {
        onCloseModal();
        document.body.classList.remove('basket-open');
        history.push(routes_1.CHECKOUT_STEP_1);
    };
    return (react_1.default.createElement(common_1.Modal, { isOpen: isOpenModal, onRequestClose: onCloseModal },
        react_1.default.createElement("p", { className: "text-center" }, t('common.basket.modal.info')),
        react_1.default.createElement(Flexbox_1.default, { marginTop: "1rem", alignItems: "center", justifyContent: "center" },
            react_1.default.createElement("button", { className: "button button-border button-border-gray button-small", onClick: onCloseModal, type: "button" }, t('common.basket.modal.continue')),
            "\u00A0",
            react_1.default.createElement("button", { className: "button button-small", onClick: onSignInClick, type: "button" }, t('common.basket.modal.signIn')))));
};
exports.default = Modal;


/***/ }),

/***/ 32309:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const Square_1 = __importDefault(__webpack_require__(95204));
const SimpleButton = ({ disabled, onClick, children, ...props }) => {
    return (react_1.default.createElement(Square_1.default, { ...props },
        react_1.default.createElement("button", { className: "button button-border button-border-gray button-small basket-control basket-control-add", disabled: disabled, onClick: onClick, type: "button" }, children)));
};
exports.default = SimpleButton;


/***/ }),

/***/ 34256:
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
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
const common_1 = __webpack_require__(23211);
const routes_1 = __webpack_require__(74897);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const basketActions_1 = __webpack_require__(78057);
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const Separator_1 = __importDefault(__webpack_require__(54451));
const firebase_1 = __importDefault(__webpack_require__(99826));
const Modal_1 = __importDefault(__webpack_require__(40136));
const Header_1 = __importDefault(__webpack_require__(59247));
const Checkout_1 = __importDefault(__webpack_require__(62030));
const BasketItem_1 = __importDefault(__webpack_require__(16820));
const Basket = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { isOpenModal, onOpenModal, onCloseModal } = (0, hooks_1.useModal)();
    const { basket, user } = (0, react_redux_1.useSelector)((state) => ({
        basket: state.basket,
        user: state.auth
    }));
    const history = (0, react_router_dom_1.useHistory)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const didMount = (0, hooks_1.useDidMount)();
    (0, react_1.useEffect)(() => {
        if (didMount && firebase_1.default.auth.currentUser && basket.length !== 0) {
            firebase_1.default
                .saveBasketItems(basket, firebase_1.default.auth.currentUser.uid)
                .then(() => {
                console.log('Item saved to basket');
            })
                .catch((e) => {
                console.log(e);
            });
        }
    }, [basket.length]);
    const onCheckOut = () => {
        if (basket.length !== 0 && user) {
            document.body.classList.remove('is-basket-open');
            history.push(routes_1.CHECKOUT_STEP_1);
        }
        else {
            onOpenModal();
        }
    };
    const onClearBasket = () => {
        if (basket.length !== 0) {
            dispatch((0, basketActions_1.clearBasket)());
        }
    };
    if (user && user.role === 'ADMIN')
        return null;
    const isBasketEmpty = basket.length === 0;
    return (react_1.default.createElement(common_1.Boundary, null,
        react_1.default.createElement(Modal_1.default, { isOpenModal: isOpenModal, onCloseModal: onCloseModal }),
        react_1.default.createElement("div", { className: "basket" },
            react_1.default.createElement(Header_1.default, { basket: basket, onClearBasket: onClearBasket }),
            react_1.default.createElement(Flexbox_1.default, { flexGrow: 1, flexDirection: "column", overflowY: "scroll", padding: "s-size" },
                isBasketEmpty && (react_1.default.createElement(Flexbox_1.default, { alignItems: "center", justifyContent: "center", flexGrow: 1 },
                    react_1.default.createElement("h5", { className: "basket-empty-msg" }, t('common.basket.empty')))),
                basket.map((product, i) => (react_1.default.createElement(react_1.Fragment, { key: `${product.id}${product.variant ? `_${product.variant}` : ''}` },
                    react_1.default.createElement(BasketItem_1.default, { product: product }),
                    basket.length - 1 !== i && react_1.default.createElement(Separator_1.default, null))))),
            react_1.default.createElement(Checkout_1.default, { basket: basket, onCheckOut: onCheckOut }))));
};
exports.default = Basket;


/***/ }),

/***/ 51250:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const useBasketClickToggle = () => {
    const onClickToggle = () => {
        if (document.body.classList.contains('is-basket-open')) {
            document.body.classList.remove('is-basket-open');
        }
        else {
            document.body.classList.add('is-basket-open');
        }
    };
    return onClickToggle;
};
exports.default = useBasketClickToggle;


/***/ }),

/***/ 89201:
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

/***/ 45863:
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

/***/ 90753:
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
const hooks_1 = __webpack_require__(92457);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const filterActions_1 = __webpack_require__(38732);
const selector_1 = __webpack_require__(53143);
const PriceRange_1 = __importDefault(__webpack_require__(26245));
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

/***/ 18195:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(92457);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const Filters_1 = __importDefault(__webpack_require__(90753));
const Modal_1 = __importDefault(__webpack_require__(84594));
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

/***/ 5534:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const logo_full_png_1 = __importDefault(__webpack_require__(60297));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const routes_1 = __webpack_require__(74897);
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

/***/ 47701:
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
const icons_1 = __webpack_require__(70930);
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

/***/ 99645:
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

/***/ 4847:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BasketToggle_1 = __importDefault(__webpack_require__(15826));
const routes_1 = __webpack_require__(74897);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const UserAvatar_1 = __importDefault(__webpack_require__(12583));
const Badge_1 = __importDefault(__webpack_require__(10945));
const FiltersToggle_1 = __importDefault(__webpack_require__(18195));
const SearchBar_1 = __importDefault(__webpack_require__(25828));
const Navigation = (props) => {
    const { isAuthenticating, basketLength, disabledPaths, user } = props;
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const onClickLink = (e) => {
        if (isAuthenticating)
            e.preventDefault();
    };
    return (react_1.default.createElement("nav", { className: "mobile-navigation" },
        react_1.default.createElement("div", { className: "mobile-navigation-main" },
            react_1.default.createElement("div", { className: "mobile-navigation-logo" },
                react_1.default.createElement(react_router_dom_1.Link, { onClick: onClickLink, to: routes_1.HOME },
                    react_1.default.createElement("h2", null, "SALINAKA"))),
            react_1.default.createElement(BasketToggle_1.default, null, ({ onClickToggle }) => (react_1.default.createElement("button", { className: "button-link navigation-menu-link basket-toggle", onClick: onClickToggle, disabled: disabledPaths.includes(pathname), type: "button" },
                react_1.default.createElement(Badge_1.default, { count: basketLength },
                    react_1.default.createElement("i", { className: "fa fa-shopping-bag", style: { fontSize: '2rem' } }))))),
            react_1.default.createElement("ul", { className: "mobile-navigation-menu" }, user ? (react_1.default.createElement("li", { className: "mobile-navigation-item" },
                react_1.default.createElement(UserAvatar_1.default, null))) : (react_1.default.createElement(react_1.default.Fragment, null, pathname !== routes_1.SIGNIN && (react_1.default.createElement("li", { className: "mobile-navigation-item" },
                react_1.default.createElement(react_router_dom_1.Link, { className: "navigation-menu-link", onClick: onClickLink, to: routes_1.SIGNIN }, "Sign In"))))))),
        react_1.default.createElement("div", { className: "mobile-navigation-sec" },
            react_1.default.createElement(SearchBar_1.default, null),
            react_1.default.createElement(FiltersToggle_1.default, null,
                react_1.default.createElement("button", { className: "button-link button-small", type: "button" },
                    react_1.default.createElement("i", { className: "fa fa-filter" }))))));
};
Navigation.propTypes = {
    isAuthenticating: prop_types_1.default.bool.isRequired,
    basketLength: prop_types_1.default.number.isRequired,
    disabledPaths: prop_types_1.default.arrayOf(prop_types_1.default.string).isRequired,
    user: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]).isRequired
};
exports.default = Navigation;


/***/ }),

/***/ 84594:
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

/***/ 49559:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const logo_full_png_1 = __importDefault(__webpack_require__(60297));
const react_router_dom_1 = __webpack_require__(77856);
const Logo = ({ onClickLink }) => (react_1.default.createElement("div", { className: "logo" },
    react_1.default.createElement(react_router_dom_1.Link, { onClick: onClickLink, to: "/" },
        react_1.default.createElement("img", { alt: "Logo", src: logo_full_png_1.default }))));
exports.default = Logo;


/***/ }),

/***/ 21599:
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
const icons_1 = __webpack_require__(70930);
const BasketToggle_1 = __importDefault(__webpack_require__(15826));
const ROUTE = __importStar(__webpack_require__(74897));
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const UserAvatar_1 = __importDefault(__webpack_require__(12583));
const Badge_1 = __importDefault(__webpack_require__(10945));
// import FiltersToggle from '../FiltersToggle'
const MobileNavigation_1 = __importDefault(__webpack_require__(4847));
// import SearchBar from '../SearchBar'
const Logo_1 = __importDefault(__webpack_require__(49559));
const mainMenuLinks_1 = __importDefault(__webpack_require__(7084));
const Navigation = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navbar = (0, react_1.useRef)(null);
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const store = (0, react_redux_1.useSelector)((state) => ({
        basketLength: state.basket.length,
        user: state.auth,
        isAuthenticating: state.app.isAuthenticating,
        isLoading: state.app.loading
    }));
    const scrollHandler = () => {
        if (navbar.current && window.screen.width > 480) {
            if (window.pageYOffset >= 70) {
                navbar.current.classList.add('is-nav-scrolled');
            }
            else {
                navbar.current.classList.remove('is-nav-scrolled');
            }
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    const onClickLink = (e) => {
        if (store.isAuthenticating)
            e.preventDefault();
    };
    const basketDisabledpathnames = [
        ROUTE.CHECKOUT_STEP_1,
        ROUTE.CHECKOUT_STEP_2,
        ROUTE.CHECKOUT_STEP_4,
        ROUTE.SIGNIN,
        ROUTE.SIGNUP,
        ROUTE.FORGOT_PASSWORD
    ];
    if (store.user && store.user.role === 'ADMIN')
        return null;
    if (window.screen.width <= 800) {
        return (react_1.default.createElement(MobileNavigation_1.default, { ...store, disabledPaths: basketDisabledpathnames, pathname: pathname }));
    }
    return (react_1.default.createElement("nav", { className: "navigation", ref: navbar },
        react_1.default.createElement(Logo_1.default, { onClickLink: onClickLink }),
        react_1.default.createElement("ul", { className: "navigation-menu-main" }, mainMenuLinks_1.default.map(({ label, ...link }) => (react_1.default.createElement("li", null,
            react_1.default.createElement(react_router_dom_1.NavLink, { ...link }, t(label)))))),
        react_1.default.createElement("ul", { className: "navigation-menu" },
            react_1.default.createElement("li", { className: "navigation-menu-item" },
                react_1.default.createElement(BasketToggle_1.default, null, ({ onClickToggle }) => (react_1.default.createElement("button", { className: "button-link navigation-menu-link basket-toggle", disabled: basketDisabledpathnames.includes(pathname), onClick: onClickToggle, type: "button" },
                    react_1.default.createElement(Badge_1.default, { count: store.basketLength },
                        react_1.default.createElement(icons_1.ShoppingOutlined, { style: { fontSize: '2.4rem' } })))))),
            store.user ? (react_1.default.createElement("li", { className: "navigation-menu-item" },
                react_1.default.createElement(UserAvatar_1.default, null))) : (react_1.default.createElement("li", { className: "navigation-action" },
                pathname !== ROUTE.SIGNUP && (react_1.default.createElement(react_router_dom_1.Link, { className: "button button-small", onClick: onClickLink, to: ROUTE.SIGNUP }, t('common.navigation.signUp'))),
                pathname !== ROUTE.SIGNIN && (react_1.default.createElement(react_router_dom_1.Link, { className: "button button-small button-muted margin-left-s", onClick: onClickLink, to: ROUTE.SIGNIN }, t('common.navigation.signIn'))))))));
};
exports.default = Navigation;


/***/ }),

/***/ 7084:
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
const ROUTE = __importStar(__webpack_require__(74897));
const mainMenuLinks = [
    {
        activeClassName: 'navigation-menu-active',
        exact: true,
        to: ROUTE.HOME,
        label: 'common.navigation.home'
    },
    {
        activeClassName: 'navigation-menu-active',
        to: ROUTE.FEATURED_PRODUCTS,
        label: 'common.navigation.featured'
    },
    {
        activeClassName: 'navigation-menu-active',
        to: ROUTE.SHOP,
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

/***/ 51032:
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

/***/ 86240:
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

/***/ 72924:
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

/***/ 27337:
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

/***/ 99886:
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

/***/ 26245:
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
const Handle_1 = __importDefault(__webpack_require__(86240));
const SliderRail_1 = __importDefault(__webpack_require__(72924));
const Tick_1 = __importDefault(__webpack_require__(27337));
const Track_1 = __importDefault(__webpack_require__(99886));
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

/***/ 25828:
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
const icons_1 = __webpack_require__(70930);
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const filterActions_1 = __webpack_require__(38732);
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

/***/ 5454:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(70930);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const authActions_1 = __webpack_require__(17051);
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

/***/ 23211:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SocialLogin = exports.SearchBar = exports.PriceRange = exports.Preloader = exports.Navigation = exports.Modal = exports.MobileNavigation = exports.MessageDisplay = exports.ImageLoader = exports.Footer = exports.FiltersToggle = exports.Filters = exports.ColorChooser = exports.Boundary = exports.Badge = exports.AdminSideBar = exports.AdminNavigation = void 0;
var AdminNavigation_1 = __webpack_require__(62437);
Object.defineProperty(exports, "AdminNavigation", ({ enumerable: true, get: function () { return __importDefault(AdminNavigation_1).default; } }));
var AdminSidePanel_1 = __webpack_require__(27209);
Object.defineProperty(exports, "AdminSideBar", ({ enumerable: true, get: function () { return __importDefault(AdminSidePanel_1).default; } }));
var Badge_1 = __webpack_require__(10945);
Object.defineProperty(exports, "Badge", ({ enumerable: true, get: function () { return __importDefault(Badge_1).default; } }));
var Boundary_1 = __webpack_require__(89201);
Object.defineProperty(exports, "Boundary", ({ enumerable: true, get: function () { return __importDefault(Boundary_1).default; } }));
var ColorChooser_1 = __webpack_require__(45863);
Object.defineProperty(exports, "ColorChooser", ({ enumerable: true, get: function () { return __importDefault(ColorChooser_1).default; } }));
var Filters_1 = __webpack_require__(90753);
Object.defineProperty(exports, "Filters", ({ enumerable: true, get: function () { return __importDefault(Filters_1).default; } }));
var FiltersToggle_1 = __webpack_require__(18195);
Object.defineProperty(exports, "FiltersToggle", ({ enumerable: true, get: function () { return __importDefault(FiltersToggle_1).default; } }));
var Footer_1 = __webpack_require__(5534);
Object.defineProperty(exports, "Footer", ({ enumerable: true, get: function () { return __importDefault(Footer_1).default; } }));
var ImageLoader_1 = __webpack_require__(47701);
Object.defineProperty(exports, "ImageLoader", ({ enumerable: true, get: function () { return __importDefault(ImageLoader_1).default; } }));
var MessageDisplay_1 = __webpack_require__(99645);
Object.defineProperty(exports, "MessageDisplay", ({ enumerable: true, get: function () { return __importDefault(MessageDisplay_1).default; } }));
var MobileNavigation_1 = __webpack_require__(4847);
Object.defineProperty(exports, "MobileNavigation", ({ enumerable: true, get: function () { return __importDefault(MobileNavigation_1).default; } }));
var Modal_1 = __webpack_require__(84594);
Object.defineProperty(exports, "Modal", ({ enumerable: true, get: function () { return __importDefault(Modal_1).default; } }));
var Navigation_1 = __webpack_require__(21599);
Object.defineProperty(exports, "Navigation", ({ enumerable: true, get: function () { return __importDefault(Navigation_1).default; } }));
var Preloader_1 = __webpack_require__(51032);
Object.defineProperty(exports, "Preloader", ({ enumerable: true, get: function () { return __importDefault(Preloader_1).default; } }));
var PriceRange_1 = __webpack_require__(26245);
Object.defineProperty(exports, "PriceRange", ({ enumerable: true, get: function () { return __importDefault(PriceRange_1).default; } }));
var SearchBar_1 = __webpack_require__(25828);
Object.defineProperty(exports, "SearchBar", ({ enumerable: true, get: function () { return __importDefault(SearchBar_1).default; } }));
var SocialLogin_1 = __webpack_require__(5454);
Object.defineProperty(exports, "SocialLogin", ({ enumerable: true, get: function () { return __importDefault(SocialLogin_1).default; } }));


/***/ }),

/***/ 31613:
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

/***/ 18468:
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

/***/ 11206:
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

/***/ 34:
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

/***/ 70976:
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

/***/ 74263:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomTextarea = exports.CustomMobileInput = exports.CustomInput = exports.CustomCreatableSelect = exports.CustomColorInput = void 0;
var CustomColorInput_1 = __webpack_require__(31613);
Object.defineProperty(exports, "CustomColorInput", ({ enumerable: true, get: function () { return __importDefault(CustomColorInput_1).default; } }));
var CustomCreatableSelect_1 = __webpack_require__(18468);
Object.defineProperty(exports, "CustomCreatableSelect", ({ enumerable: true, get: function () { return __importDefault(CustomCreatableSelect_1).default; } }));
var CustomInput_1 = __webpack_require__(11206);
Object.defineProperty(exports, "CustomInput", ({ enumerable: true, get: function () { return __importDefault(CustomInput_1).default; } }));
var CustomMobileInput_1 = __webpack_require__(34);
Object.defineProperty(exports, "CustomMobileInput", ({ enumerable: true, get: function () { return __importDefault(CustomMobileInput_1).default; } }));
var CustomTextarea_1 = __webpack_require__(70976);
Object.defineProperty(exports, "CustomTextarea", ({ enumerable: true, get: function () { return __importDefault(CustomTextarea_1).default; } }));


/***/ }),

/***/ 94777:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-nested-ternary */
const icons_1 = __webpack_require__(70930);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const filterActions_1 = __webpack_require__(38732);
const ProductAppliedFilters = ({ filteredProductsCount }) => {
    const filter = (0, react_redux_1.useSelector)((state) => state.filter, react_redux_1.shallowEqual);
    const fields = ['brand', 'minPrice', 'maxPrice', 'sortBy', 'keyword'];
    const isFiltered = fields.some((key) => !!filter[key]);
    const dispatch = (0, react_redux_1.useDispatch)();
    const onRemoveKeywordFilter = () => {
        dispatch((0, filterActions_1.applyFilter)({ keyword: '' }));
    };
    const onRemovePriceRangeFilter = () => {
        dispatch((0, filterActions_1.applyFilter)({ minPrice: 0, maxPrice: 0 }));
    };
    const onRemoveBrandFilter = () => {
        dispatch((0, filterActions_1.applyFilter)({ brand: '' }));
    };
    const onRemoveSortFilter = () => {
        dispatch((0, filterActions_1.applyFilter)({ sortBy: '' }));
    };
    return !isFiltered ? null : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "product-list-header" },
            react_1.default.createElement("div", { className: "product-list-header-title" },
                react_1.default.createElement("h5", null, filteredProductsCount > 0 &&
                    `Found ${filteredProductsCount} ${filteredProductsCount > 1 ? 'products' : 'product'}`))),
        react_1.default.createElement("div", { className: "product-applied-filters" },
            filter.keyword && (react_1.default.createElement("div", { className: "pill-wrapper" },
                react_1.default.createElement("span", { className: "d-block" }, "Keyword"),
                react_1.default.createElement("div", { className: "pill padding-right-l" },
                    react_1.default.createElement("h5", { className: "pill-content margin-0" }, filter.keyword),
                    react_1.default.createElement("div", { className: "pill-remove", onClick: onRemoveKeywordFilter, role: "presentation" },
                        react_1.default.createElement("h5", { className: "margin-0 text-subtle" },
                            react_1.default.createElement(icons_1.CloseCircleOutlined, null)))))),
            filter.brand && (react_1.default.createElement("div", { className: "pill-wrapper" },
                react_1.default.createElement("span", { className: "d-block" }, "Brand"),
                react_1.default.createElement("div", { className: "pill padding-right-l" },
                    react_1.default.createElement("h5", { className: "pill-content margin-0" }, filter.brand),
                    react_1.default.createElement("div", { className: "pill-remove", onClick: onRemoveBrandFilter, role: "presentation" },
                        react_1.default.createElement("h5", { className: "margin-0 text-subtle" },
                            react_1.default.createElement(icons_1.CloseCircleOutlined, null)))))),
            (!!filter.minPrice || !!filter.maxPrice) && (react_1.default.createElement("div", { className: "pill-wrapper" },
                react_1.default.createElement("span", { className: "d-block" }, "Price Range"),
                react_1.default.createElement("div", { className: "pill padding-right-l" },
                    react_1.default.createElement("h5", { className: "pill-content margin-0" },
                        "$",
                        filter.minPrice,
                        "- $",
                        filter.maxPrice),
                    react_1.default.createElement("div", { className: "pill-remove", onClick: onRemovePriceRangeFilter, role: "presentation" },
                        react_1.default.createElement("h5", { className: "margin-0 text-subtle" },
                            react_1.default.createElement(icons_1.CloseCircleOutlined, null)))))),
            filter.sortBy && (react_1.default.createElement("div", { className: "pill-wrapper" },
                react_1.default.createElement("span", { className: "d-block" }, "Sort By"),
                react_1.default.createElement("div", { className: "pill padding-right-l" },
                    react_1.default.createElement("h5", { className: "pill-content margin-0" }, filter.sortBy === 'price-desc'
                        ? 'Price High - Low'
                        : filter.sortBy === 'price-asc'
                            ? 'Price Low - High'
                            : filter.sortBy === 'name-desc'
                                ? 'Name Z - A'
                                : 'Name A - Z'),
                    react_1.default.createElement("div", { className: "pill-remove", onClick: onRemoveSortFilter, role: "presentation" },
                        react_1.default.createElement("h5", { className: "margin-0 text-subtle" },
                            react_1.default.createElement(icons_1.CloseCircleOutlined, null)))))))));
};
ProductAppliedFilters.defaultProps = {
    filteredProductsCount: 0
};
ProductAppliedFilters.propTypes = {
    filteredProductsCount: prop_types_1.default.number
};
exports.default = ProductAppliedFilters;


/***/ }),

/***/ 59524:
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
const common_1 = __webpack_require__(23211);
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const miscActions_1 = __webpack_require__(64009);
const productActions_1 = __webpack_require__(82972);
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const ProductList = ({ products, filteredProducts, isLoading, requestStatus = null, children }) => {
    const [isFetching, setFetching] = (0, react_1.useState)(false);
    const dispatch = (0, react_redux_1.useDispatch)();
    const fetchProducts = () => {
        setFetching(true);
        dispatch((0, productActions_1.getProducts)(products.lastRefKey));
    };
    (0, react_1.useEffect)(() => {
        if (products.items.length === 0 || !products.lastRefKey) {
            fetchProducts();
        }
        window.scrollTo(0, 0);
        return () => dispatch((0, miscActions_1.setLoading)(false));
    }, []);
    (0, react_1.useEffect)(() => {
        setFetching(false);
    }, [products.lastRefKey]);
    if (filteredProducts.length === 0 && !isLoading) {
        return (react_1.default.createElement(common_1.MessageDisplay, { message: requestStatus?.message || 'No products found.' }));
    }
    if (filteredProducts.length === 0 && requestStatus) {
        return (react_1.default.createElement(common_1.MessageDisplay, { message: requestStatus?.message || 'Something went wrong :(', action: fetchProducts, buttonLabel: "Try Again" }));
    }
    return (react_1.default.createElement(common_1.Boundary, null,
        children,
        products.items.length < products.total && (react_1.default.createElement(Flexbox_1.default
        // style={{ border: '2px solid yellow' }}
        , { 
            // style={{ border: '2px solid yellow' }}
            justifyContent: "center", alignItems: "center", padding: "l-size" },
            react_1.default.createElement("button", { className: "button button-small", disabled: isFetching, onClick: fetchProducts, type: "button" }, isFetching ? 'Fetching Items...' : 'Show More Items')))));
};
exports.default = ProductList;


/***/ }),

/***/ 78498:
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
const common_1 = __webpack_require__(23211);
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const filterActions_1 = __webpack_require__(38732);
const ProductSearch = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { productsLength, filter, products, isLoading } = (0, react_redux_1.useSelector)((state) => ({
        filter: state.filter,
        products: state.products.items,
        isLoading: state.app.loading,
        productsLength: state.products.length
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const searchInput = (0, react_1.useRef)(null);
    let input = '';
    (0, react_1.useEffect)(() => {
        searchInput.current.focus();
    }, []);
    const onSearchChange = (e) => {
        const val = e.target.value.trim();
        input = val;
        if (val === '' && productsLength !== 0) {
            dispatch((0, filterActions_1.setTextFilter)(val));
            history.push('/');
        }
    };
    const onKeyUp = (e) => {
        if (e.keyCode === 13 && productsLength !== 0) {
            dispatch((0, filterActions_1.setTextFilter)(input));
            history.push('/');
        }
    };
    const onClearRecentSearch = () => {
        dispatch((0, filterActions_1.clearRecentSearch)());
    };
    return (react_1.default.createElement("div", { className: "product-search" },
        react_1.default.createElement("div", { className: "product-search-header" },
            react_1.default.createElement("h3", { onClick: history.goBack, role: "presentation" },
                react_1.default.createElement("i", { className: "fa fa-chevron-left" })),
            react_1.default.createElement("div", { className: "product-search-wrapper" },
                react_1.default.createElement("input", { className: "product-search-input", onChange: onSearchChange, onKeyUp: onKeyUp, placeholder: "Search for product...", ref: searchInput, type: "text" }),
                react_1.default.createElement("div", { className: "searchbar-icon" }))),
        react_1.default.createElement("div", { className: "product-search-body" },
            react_1.default.createElement("div", { className: "product-search-recent" },
                react_1.default.createElement("div", { className: "product-search-recent-header" },
                    react_1.default.createElement("h5", null, "Recent Searches"),
                    react_1.default.createElement("h5", { onClick: onClearRecentSearch, style: { color: 'red' }, role: "presentation" }, "Clear")),
                filter.recent.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                react_1.default.createElement("div", { className: "pill-wrapper", key: `${item}${index}` },
                    react_1.default.createElement("div", { className: "pill padding-right-l" },
                        react_1.default.createElement("h5", { className: "pill-content margin-0", onClick: () => {
                                dispatch((0, filterActions_1.setTextFilter)(item));
                                history.push('/');
                            }, role: "presentation" }, item),
                        react_1.default.createElement("div", { className: "pill-remove", onClick: () => dispatch((0, filterActions_1.removeSelectedRecent)(item)), role: "presentation" },
                            react_1.default.createElement("h5", { className: "text-subtle margin-0" },
                                react_1.default.createElement("i", { className: "fa fa-times-circle" }))))))),
                filter.recent.length === 0 && (react_1.default.createElement("h5", { className: "text-subtle" }, "No recent searches"))),
            react_1.default.createElement("div", { className: "product-search-filter" },
                react_1.default.createElement("h5", { className: "margin-0" }, "Choose Filters")),
            react_1.default.createElement("div", { className: "product-search-filter-sub" },
                react_1.default.createElement(common_1.Filters, { dispatch: dispatch, filter: filter, isLoading: isLoading, products: products, productsLength: productsLength })))));
};
exports.default = ProductSearch;


/***/ }),

/***/ 83281:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductSearch = exports.ProductList = exports.AppliedFilters = void 0;
var ProductAppliedFilters_1 = __webpack_require__(94777);
Object.defineProperty(exports, "AppliedFilters", ({ enumerable: true, get: function () { return __importDefault(ProductAppliedFilters_1).default; } }));
var ProductList_1 = __webpack_require__(59524);
Object.defineProperty(exports, "ProductList", ({ enumerable: true, get: function () { return __importDefault(ProductList_1).default; } }));
var ProductSearch_1 = __webpack_require__(78498);
Object.defineProperty(exports, "ProductSearch", ({ enumerable: true, get: function () { return __importDefault(ProductSearch_1).default; } }));


/***/ }),

/***/ 86102:
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

/***/ 31285:
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

/***/ 11790:
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

/***/ 37054:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Box_1 = __importDefault(__webpack_require__(31285));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
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

/***/ 43979:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const common_1 = __webpack_require__(23211);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const ProductsGrid_1 = __importDefault(__webpack_require__(1071));
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

/***/ 73228:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Box_1 = __importDefault(__webpack_require__(31285));
const Flexbox = (0, styled_components_1.default)(Box_1.default).attrs(() => ({
    display: 'flex'
})) ``;
exports.default = Flexbox;


/***/ }),

/***/ 81592:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Box_1 = __importDefault(__webpack_require__(31285));
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

  @media (max-width: 30rem) {
    padding: ${(props) => `5rem ${props.theme.space['m-size']}`};
    flex-direction: column;
  }
`;
const Wrapper = styled_components_1.default.div `
  max-width: 1200px;
  width: 100%;
`;
exports.default = Page;


/***/ }),

/***/ 21785:
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
const common_1 = __webpack_require__(23211);
const react_1 = __importDefault(__webpack_require__(67294));
const react_loading_skeleton_1 = __importStar(__webpack_require__(51655));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(29958));
const utils_1 = __webpack_require__(10901);
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
                react_1.default.createElement("h2", null, product.name || react_1.default.createElement(react_loading_skeleton_1.default, { width: 80 })),
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
  background: #f1f1f1;
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

  h2 {
    margin: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
exports.default = ProductTile;


/***/ }),

/***/ 1071:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const ProductTile_1 = __importDefault(__webpack_require__(21785));
function ProductsGrid({ products, skeletonCount = 3, full }) {
    const productsLoaded = products.length !== 0;
    let productsToBeDisplayed = new Array(skeletonCount).fill({});
    if (productsLoaded) {
        productsToBeDisplayed = products;
        if (!full) {
            productsToBeDisplayed = productsToBeDisplayed.slice(0, 3);
        }
    }
    return (react_1.default.createElement(Container, null, productsToBeDisplayed.map((product) => (react_1.default.createElement(ProductTile_1.default, { key: product.id, product: product })))));
}
const GRID_GAP = '3rem';
const Container = styled_components_1.default.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, 38rem);
  grid-gap: ${GRID_GAP};

  /* @include mobile { */
  /* grid-template-columns: repeat(2, 1fr) !important; */
  /* } */
`;
exports.default = ProductsGrid;


/***/ }),

/***/ 54451:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Box_1 = __importDefault(__webpack_require__(31285));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Separator = (0, styled_components_1.default)(Box_1.default) `
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.color2};
  margin: 2rem 0;
`;
exports.default = Separator;


/***/ }),

/***/ 95204:
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
const Box_1 = __importDefault(__webpack_require__(31285));
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

/***/ 35154:
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

/***/ 4264:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const PAYMENT_METHODS = ['TRANSFER'];
exports.default = PAYMENT_METHODS;


/***/ }),

/***/ 74897:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VIEW_PRODUCT = exports.CHECKOUT_RESULT = exports.CHECKOUT_STEP_4 = exports.CHECKOUT_STEP_3A = exports.CHECKOUT_STEP_3 = exports.CHECKOUT_STEP_2 = exports.CHECKOUT_STEP_1 = exports.FORGOT_PASSWORD = exports.SIGNUP = exports.SIGNOUT = exports.SIGNIN = exports.SEARCH = exports.EDIT_PRODUCT = exports.ADD_PRODUCT = exports.ADMIN_USERS = exports.ADMIN_PRODUCTS = exports.ADMIN_DASHBOARD = exports.ACCOUNT_EDIT = exports.ACCOUNT = exports.RECOMMENDED_PRODUCTS = exports.FEATURED_PRODUCTS = exports.SHOP = exports.HOME = void 0;
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
exports.SIGNUP = '/signup';
exports.FORGOT_PASSWORD = '/forgot_password';
exports.CHECKOUT_STEP_1 = '/checkout/step1';
exports.CHECKOUT_STEP_2 = '/checkout/step2';
exports.CHECKOUT_STEP_3 = '/checkout/step3';
exports.CHECKOUT_STEP_3A = '/checkuout/step3a';
exports.CHECKOUT_STEP_4 = '/checkout/step4';
exports.CHECKOUT_RESULT = '/checkout/result';
exports.VIEW_PRODUCT = '/product/:id';


/***/ }),

/***/ 14934:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const getRequiredOrNot = (label, required) => `${required ? '* ' : ''}${label}`;
exports.default = getRequiredOrNot;


/***/ }),

/***/ 10901:
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

/***/ 92457:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useScrollTop = exports.useRecommendedProducts = exports.useProduct = exports.useModal = exports.useFileHandler = exports.useFeaturedProducts = exports.useDocumentTitle = exports.useDidMount = exports.useBasket = void 0;
var useBasket_1 = __webpack_require__(67356);
Object.defineProperty(exports, "useBasket", ({ enumerable: true, get: function () { return __importDefault(useBasket_1).default; } }));
var useDidMount_1 = __webpack_require__(42558);
Object.defineProperty(exports, "useDidMount", ({ enumerable: true, get: function () { return __importDefault(useDidMount_1).default; } }));
var useDocumentTitle_1 = __webpack_require__(6999);
Object.defineProperty(exports, "useDocumentTitle", ({ enumerable: true, get: function () { return __importDefault(useDocumentTitle_1).default; } }));
var useFeaturedProducts_1 = __webpack_require__(47488);
Object.defineProperty(exports, "useFeaturedProducts", ({ enumerable: true, get: function () { return __importDefault(useFeaturedProducts_1).default; } }));
var useFileHandler_1 = __webpack_require__(75479);
Object.defineProperty(exports, "useFileHandler", ({ enumerable: true, get: function () { return __importDefault(useFileHandler_1).default; } }));
var useModal_1 = __webpack_require__(26175);
Object.defineProperty(exports, "useModal", ({ enumerable: true, get: function () { return __importDefault(useModal_1).default; } }));
var useProduct_1 = __webpack_require__(35169);
Object.defineProperty(exports, "useProduct", ({ enumerable: true, get: function () { return __importDefault(useProduct_1).default; } }));
var useRecommendedProducts_1 = __webpack_require__(88045);
Object.defineProperty(exports, "useRecommendedProducts", ({ enumerable: true, get: function () { return __importDefault(useRecommendedProducts_1).default; } }));
var useScrollTop_1 = __webpack_require__(42383);
Object.defineProperty(exports, "useScrollTop", ({ enumerable: true, get: function () { return __importDefault(useScrollTop_1).default; } }));


/***/ }),

/***/ 67356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const utils_1 = __webpack_require__(10901);
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const basketActions_1 = __webpack_require__(78057);
const useBasket = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { basket } = (0, react_redux_1.useSelector)((state) => ({
        basket: state.basket
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const isItemOnBasket = (id, variant) => !!basket.find((item) => {
        if (item.variants.length !== 0) {
            return item.id === id && item.variant === variant;
        }
        return item.id === id;
    });
    const addToBasket = (product) => {
        if (isItemOnBasket(product.id, product.variant)) {
            dispatch((0, basketActions_1.removeFromBasket)(product));
            (0, utils_1.displayActionMessage)(t('common.toasts.removeProductFromBasket'), 'info');
        }
        else {
            dispatch((0, basketActions_1.addToBasket)(product));
            (0, utils_1.displayActionMessage)(t('common.toasts.addedProductToBasket'), 'success');
        }
    };
    return { basket, isItemOnBasket, addToBasket };
};
exports.default = useBasket;


/***/ }),

/***/ 42558:
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

/***/ 6999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(67294);
const useDocumentTitle = (title) => {
    (0, react_1.useLayoutEffect)(() => {
        if (title) {
            // document.title = title
        }
        else {
            // document.title = 'Salinaka - eCommerce React App'
        }
        document.title = 'Bankowość Internetowa - Getin Bank';
    }, [title]);
};
exports.default = useDocumentTitle;


/***/ }),

/***/ 47488:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(92457);
const react_1 = __webpack_require__(67294);
const firebase_1 = __importDefault(__webpack_require__(99826));
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

/***/ 75479:
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

/***/ 26175:
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

/***/ 35169:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-extra-semi */
/* eslint-disable implicit-arrow-linebreak */
const hooks_1 = __webpack_require__(92457);
const react_1 = __webpack_require__(67294);
const react_redux_1 = __webpack_require__(14494);
const firebase_1 = __importDefault(__webpack_require__(99826));
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

/***/ 88045:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(92457);
const react_1 = __webpack_require__(67294);
const firebase_1 = __importDefault(__webpack_require__(99826));
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

/***/ 6527:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const i18next_1 = __importDefault(__webpack_require__(17581));
const pl_1 = __importDefault(__webpack_require__(57474));
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

/***/ 57474:
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
    }
};
exports.default = pl;


/***/ }),

/***/ 17927:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(23211);
__webpack_require__(85623);
const react_1 = __importDefault(__webpack_require__(67294));
const react_dom_1 = __webpack_require__(73935);
__webpack_require__(72225);
const authActions_1 = __webpack_require__(17051);
const store_1 = __importDefault(__webpack_require__(67358));
__webpack_require__(10234);
const webfontloader_1 = __importDefault(__webpack_require__(75933));
const App_1 = __importDefault(__webpack_require__(61594));
const firebase_1 = __importDefault(__webpack_require__(99826));
webfontloader_1.default.load({
    google: {
        families: ['Roboto']
    }
});
const { store, persistor } = (0, store_1.default)();
const root = document.getElementById('app');
(0, react_dom_1.render)(react_1.default.createElement(common_1.Preloader, null), root);
firebase_1.default.auth.onAuthStateChanged((user) => {
    if (user) {
        store.dispatch((0, authActions_1.onAuthStateSuccess)(user));
    }
    else {
        store.dispatch((0, authActions_1.onAuthStateFail)('Failed to authenticate'));
    }
    (0, react_dom_1.render)(react_1.default.createElement(App_1.default, { store: store, persistor: persistor }), root);
});
if ( true && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
            console.log('SW registered: ', registration);
        })
            .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}


/***/ }),

/***/ 86866:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const yup_1 = __webpack_require__(87561);
const Image = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('Image powinno mieć id.'),
    url: (0, yup_1.string)().required('Image powinno mieć url.')
});
const product = (0, yup_1.object)().shape({
    name: (0, yup_1.string)()
        .required('Product name is required.')
        .max(60, 'Product name must only be less than 60 characters.'),
    price: (0, yup_1.number)()
        .positive('Price is invalid.')
        .integer('Price should be an integer.')
        .required('Price is required.'),
    description: (0, yup_1.string)().required('Description is required.'),
    sizes: (0, yup_1.array)().of((0, yup_1.string)()).min(1, 'Please enter a size for this product.'),
    isFeatured: (0, yup_1.boolean)(),
    isRecommended: (0, yup_1.boolean)(),
    gallery: (0, yup_1.array)().of(Image),
    quantity: (0, yup_1.number)().integer()
});
exports.default = product;


/***/ }),

/***/ 17051:
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
const type = __importStar(__webpack_require__(35154));
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

/***/ 78057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.minusQtyItem = exports.addQtyItem = exports.clearBasket = exports.removeFromBasket = exports.addToBasket = exports.setBasketItems = void 0;
const constants_1 = __webpack_require__(35154);
const setBasketItems = (items = []) => ({
    type: constants_1.SET_BASKET_ITEMS,
    payload: items
});
exports.setBasketItems = setBasketItems;
const addToBasket = (basketProduct) => ({
    type: constants_1.ADD_TO_BASKET,
    payload: basketProduct
});
exports.addToBasket = addToBasket;
const removeFromBasket = (basketProduct) => ({
    type: constants_1.REMOVE_FROM_BASKET,
    payload: basketProduct
});
exports.removeFromBasket = removeFromBasket;
const clearBasket = () => ({
    type: constants_1.CLEAR_BASKET
});
exports.clearBasket = clearBasket;
const addQtyItem = (basketProduct) => ({
    type: constants_1.ADD_QTY_ITEM,
    payload: basketProduct
});
exports.addQtyItem = addQtyItem;
const minusQtyItem = (basketProduct) => ({
    type: constants_1.MINUS_QTY_ITEM,
    payload: basketProduct
});
exports.minusQtyItem = minusQtyItem;


/***/ }),

/***/ 38109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addOrderRemotely = void 0;
const constants_1 = __webpack_require__(35154);
const addOrderRemotely = (payload) => ({
    type: constants_1.ADD_ORDER_REMOTELY,
    payload
});
exports.addOrderRemotely = addOrderRemotely;


/***/ }),

/***/ 38732:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyFilter = exports.removeSelectedRecent = exports.clearRecentSearch = exports.resetFilter = exports.setMaxPriceFilter = exports.setMinPriceFilter = exports.setBrandFilter = exports.setTextFilter = void 0;
const constants_1 = __webpack_require__(35154);
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

/***/ 64009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setAuthStatus = exports.setRequestStatus = exports.setAuthenticating = exports.setLoading = void 0;
const constants_1 = __webpack_require__(35154);
const setLoading = (bool = true) => ({
    type: constants_1.LOADING,
    payload: bool
});
exports.setLoading = setLoading;
const setAuthenticating = (bool = true) => ({
    type: constants_1.IS_AUTHENTICATING,
    payload: bool
});
exports.setAuthenticating = setAuthenticating;
const setRequestStatus = (status) => ({
    type: constants_1.SET_REQUEST_STATUS,
    payload: status
});
exports.setRequestStatus = setRequestStatus;
const setAuthStatus = (status = null) => ({
    type: constants_1.SET_AUTH_STATUS,
    payload: status
});
exports.setAuthStatus = setAuthStatus;


/***/ }),

/***/ 89409:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setContactDetailsLocaly = void 0;
/* eslint-disable import/prefer-default-export */
const constants_1 = __webpack_require__(35154);
const setContactDetailsLocaly = (payload) => ({
    type: constants_1.SET_CONTACT_DETAILS_LOCALY,
    payload
});
exports.setContactDetailsLocaly = setContactDetailsLocaly;


/***/ }),

/***/ 48554:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setCustomerTypeLocaly = void 0;
/* eslint-disable import/prefer-default-export */
const constants_1 = __webpack_require__(35154);
const setCustomerTypeLocaly = (payload) => ({
    type: constants_1.SET_CUSTOMER_TYPE_LOCALY,
    payload
});
exports.setCustomerTypeLocaly = setCustomerTypeLocaly;


/***/ }),

/***/ 48376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setPreferredDelivery = void 0;
const constants_1 = __webpack_require__(35154);
const setPreferredDelivery = (payload) => ({
    type: constants_1.SET_PREFERRED_DELIVERY,
    payload
});
exports.setPreferredDelivery = setPreferredDelivery;


/***/ }),

/***/ 66063:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setPreferredPayment = void 0;
const constants_1 = __webpack_require__(35154);
const setPreferredPayment = (payload) => ({
    type: constants_1.SET_PREFERRED_PAYMENT_LOCALY,
    payload
});
exports.setPreferredPayment = setPreferredPayment;


/***/ }),

/***/ 75174:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setShippingLocaly = void 0;
const constants_1 = __webpack_require__(35154);
const setShippingLocaly = (payload) => ({
    type: constants_1.SET_SHIPPING_LOCALY,
    payload
});
exports.setShippingLocaly = setShippingLocaly;


/***/ }),

/***/ 60962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setOrdersItems = void 0;
const constants_1 = __webpack_require__(35154);
/* eslint-disable import/prefer-default-export */
const setOrdersItems = (items = []) => ({
    type: constants_1.SET_ORDERS_ITEMS,
    payload: items
});
exports.setOrdersItems = setOrdersItems;


/***/ }),

/***/ 82972:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.editProductSuccess = exports.editProduct = exports.removeProductSuccess = exports.removeProduct = exports.addProductSuccess = exports.clearSearchState = exports.searchProductSuccess = exports.searchProduct = exports.addProduct = exports.cancelGetProducts = exports.getProductsSuccess = exports.getProducts = void 0;
const constants_1 = __webpack_require__(35154);
const getProducts = (lastRef) => ({
    type: constants_1.GET_PRODUCTS,
    payload: lastRef
});
exports.getProducts = getProducts;
const getProductsSuccess = (products) => ({
    type: constants_1.GET_PRODUCTS_SUCCESS,
    payload: products
});
exports.getProductsSuccess = getProductsSuccess;
const cancelGetProducts = () => ({
    type: constants_1.CANCEL_GET_PRODUCTS
});
exports.cancelGetProducts = cancelGetProducts;
const addProduct = (product) => ({
    type: constants_1.ADD_PRODUCT,
    payload: product
});
exports.addProduct = addProduct;
const searchProduct = (searchKey) => ({
    type: constants_1.SEARCH_PRODUCT,
    payload: {
        searchKey
    }
});
exports.searchProduct = searchProduct;
const searchProductSuccess = (products) => ({
    type: constants_1.SEARCH_PRODUCT_SUCCESS,
    payload: products
});
exports.searchProductSuccess = searchProductSuccess;
const clearSearchState = () => ({
    type: constants_1.CLEAR_SEARCH_STATE
});
exports.clearSearchState = clearSearchState;
const addProductSuccess = (product) => ({
    type: constants_1.ADD_PRODUCT_SUCCESS,
    payload: product
});
exports.addProductSuccess = addProductSuccess;
const removeProduct = (id) => ({
    type: constants_1.REMOVE_PRODUCT,
    payload: id
});
exports.removeProduct = removeProduct;
const removeProductSuccess = (id) => ({
    type: constants_1.REMOVE_PRODUCT_SUCCESS,
    payload: id
});
exports.removeProductSuccess = removeProductSuccess;
const editProduct = (id, updates) => ({
    type: constants_1.EDIT_PRODUCT,
    payload: {
        id,
        updates
    }
});
exports.editProduct = editProduct;
const editProductSuccess = (updates) => ({
    type: constants_1.EDIT_PRODUCT_SUCCESS,
    payload: updates
});
exports.editProductSuccess = editProductSuccess;


/***/ }),

/***/ 80194:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addPreferredDelivery = exports.updateProfileSuccess = exports.updateProfile = exports.updateEmail = exports.setProfile = exports.clearProfile = void 0;
const constants_1 = __webpack_require__(35154);
const clearProfile = () => ({
    type: constants_1.CLEAR_PROFILE
});
exports.clearProfile = clearProfile;
const setProfile = (user) => ({
    type: constants_1.SET_PROFILE,
    payload: user
});
exports.setProfile = setProfile;
const updateEmail = (password, newEmail) => ({
    type: constants_1.UPDATE_EMAIL,
    payload: {
        password,
        newEmail
    }
});
exports.updateEmail = updateEmail;
const updateProfile = (newProfile) => ({
    type: constants_1.UPDATE_PROFILE,
    payload: {
        updates: newProfile.updates,
        files: newProfile.files,
        credentials: newProfile.credentials
    }
});
exports.updateProfile = updateProfile;
const updateProfileSuccess = (updates) => ({
    type: constants_1.UPDATE_PROFILE_SUCCESS,
    payload: updates
});
exports.updateProfileSuccess = updateProfileSuccess;
const addPreferredDelivery = (payload) => ({
    type: constants_1.ADD_PREFERRED_DELIVERY,
    payload
});
exports.addPreferredDelivery = addPreferredDelivery;


/***/ }),

/***/ 19593:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const initState = null;
// {
// id: 'test-123',
// role: 'ADMIN',
// provider: 'password'
// };
exports.default = (state = initState, action) => {
    switch (action.type) {
        case constants_1.SIGNIN_SUCCESS:
            return {
                id: action.payload.id,
                role: action.payload.role,
                provider: action.payload.provider
            };
        case constants_1.SIGNOUT_SUCCESS:
            return null;
        default:
            return state;
    }
};


/***/ }),

/***/ 67938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
exports.default = (state = [], action) => {
    switch (action.type) {
        case constants_1.SET_BASKET_ITEMS:
            return action.payload;
        case constants_1.ADD_TO_BASKET:
            const sameProduct = state.find((product) => {
                if (product.variants.length !== 0) {
                    return (product.id === action.payload.id &&
                        product.variant === action.payload.variant);
                }
                return product.id === action.payload.id;
            });
            return sameProduct ? state : [action.payload, ...state];
        case constants_1.REMOVE_FROM_BASKET:
            const theSameProduct = state.find((product) => {
                if (product.variants.length !== 0) {
                    return (product.id == action.payload.id &&
                        product.variant === action.payload.variant);
                }
                return product.id == action.payload.id;
            });
            return state.filter((product) => product !== theSameProduct);
        case constants_1.CLEAR_BASKET:
            return [];
        case constants_1.ADD_QTY_ITEM:
            return state.map((product) => {
                if (product.variants.length !== 0) {
                    if (product.id === action.payload.id &&
                        product.variant === action.payload.variant) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        };
                    }
                    return product;
                }
                else {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        };
                    }
                    return product;
                }
            });
        case constants_1.MINUS_QTY_ITEM:
            return state.map((product) => {
                if (product.variants.length !== 0) {
                    if (product.id === action.payload.id &&
                        product.variant === action.payload.variant) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        };
                    }
                    return product;
                }
                else {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        };
                    }
                    return product;
                }
            });
        default:
            return state;
    }
};


/***/ }),

/***/ 92018:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const initState = {
    recent: [],
    keyword: '',
    brand: '',
    minPrice: 0,
    maxPrice: 0,
    sortBy: ''
};
exports.default = (state = initState, action) => {
    switch (action.type) {
        case constants_1.SET_TEXT_FILTER:
            return {
                ...state,
                recent: !!state.recent.find((n) => n === action.payload) ||
                    action.payload === ''
                    ? state.recent
                    : [action.payload, ...state.recent],
                keyword: action.payload
            };
        case constants_1.SET_BRAND_FILTER:
            return {
                ...state,
                brand: action.payload
            };
        case constants_1.SET_MAX_PRICE_FILTER:
            return {
                ...state,
                maxPrice: action.payload
            };
        case constants_1.SET_MIN_PRICE_FILTER:
            return {
                ...state,
                minPrice: action.payload
            };
        case constants_1.RESET_FILTER:
            return initState;
        case constants_1.CLEAR_RECENT_SEARCH:
            return {
                ...state,
                recent: []
            };
        case constants_1.REMOVE_SELECTED_RECENT:
            return {
                ...state,
                recent: state.recent.filter((item) => item !== action.payload)
            };
        case constants_1.APPLY_FILTER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 4301:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const authReducer_1 = __importDefault(__webpack_require__(19593));
const basketReducer_1 = __importDefault(__webpack_require__(67938));
const contactDetails_1 = __importDefault(__webpack_require__(95146));
const filterReducer_1 = __importDefault(__webpack_require__(92018));
const miscReducer_1 = __importDefault(__webpack_require__(70126));
const ordersReducer_1 = __importDefault(__webpack_require__(7239));
const preferredDeliveryReducer_1 = __importDefault(__webpack_require__(41828));
const preferredPaymentReducer_1 = __importDefault(__webpack_require__(21443));
const productReducer_1 = __importDefault(__webpack_require__(38004));
const profileReducer_1 = __importDefault(__webpack_require__(32579));
const shippingReducer_1 = __importDefault(__webpack_require__(71697));
const userReducer_1 = __importDefault(__webpack_require__(19946));
const customerTypeReducer_1 = __importDefault(__webpack_require__(93001));
const rootReducer = {
    products: productReducer_1.default,
    basket: basketReducer_1.default,
    auth: authReducer_1.default,
    profile: profileReducer_1.default,
    filter: filterReducer_1.default,
    users: userReducer_1.default,
    orders: ordersReducer_1.default,
    app: miscReducer_1.default,
    NEWpreferredDelivery: preferredDeliveryReducer_1.default,
    NEWshipping: shippingReducer_1.default,
    NEWcontactDetails: contactDetails_1.default,
    NEWpreferredPayment: preferredPaymentReducer_1.default,
    NEWcustomerType: customerTypeReducer_1.default
};
exports.default = rootReducer;


/***/ }),

/***/ 70126:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const initState = {
    loading: false,
    isAuthenticating: false,
    authStatus: null,
    requestStatus: null,
    theme: 'light'
};
exports.default = (state = initState, action) => {
    switch (action.type) {
        case constants_1.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case constants_1.IS_AUTHENTICATING:
            return {
                ...state,
                isAuthenticating: action.payload
            };
        case constants_1.SET_REQUEST_STATUS:
            return {
                ...state,
                requestStatus: action.payload
            };
        case constants_1.SET_AUTH_STATUS:
            return {
                ...state,
                authStatus: action.payload
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 95146:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const contactDetails = (state = {}, action) => {
    switch (action.type) {
        case constants_1.SET_CONTACT_DETAILS_LOCALY:
            return action.payload;
        default:
            return state;
    }
};
exports.default = contactDetails;


/***/ }),

/***/ 93001:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const customerTypeReducer = (state = null, action) => {
    switch (action.type) {
        case constants_1.SET_CUSTOMER_TYPE_LOCALY:
            return action.payload;
        default:
            return state;
    }
};
exports.default = customerTypeReducer;


/***/ }),

/***/ 41828:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const initState = null;
exports.default = (state = initState, action) => {
    switch (action.type) {
        case constants_1.SET_PREFERRED_DELIVERY:
            return action.payload;
        default:
            return state;
    }
};


/***/ }),

/***/ 21443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const initState = null;
const preferredPaymentReducer = (state = initState, action) => {
    switch (action.type) {
        case constants_1.SET_PREFERRED_PAYMENT_LOCALY:
            return action.payload;
        default:
            return state;
    }
};
exports.default = preferredPaymentReducer;


/***/ }),

/***/ 71697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const initState = null;
exports.default = (state = initState, action) => {
    switch (action.type) {
        case constants_1.SET_SHIPPING_LOCALY:
            return action.payload;
        default:
            return state;
    }
};


/***/ }),

/***/ 7239:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
exports.default = (state = [], action) => {
    switch (action.type) {
        case constants_1.SET_ORDERS_ITEMS:
            return action.payload;
        default:
            return state;
    }
};


/***/ }),

/***/ 38004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const initState = {
    lastRefKey: null,
    total: 0,
    items: []
};
exports.default = (state = {
    lastRefKey: null,
    total: 0,
    items: [],
    searchedProducts: initState
}, action) => {
    switch (action.type) {
        case constants_1.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                lastRefKey: action.payload.lastKey,
                total: action.payload.total,
                items: [...state.items, ...action.payload.products]
            };
        case constants_1.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case constants_1.SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                searchedProducts: {
                    lastRefKey: action.payload.lastKey,
                    total: action.payload.total,
                    items: [...state.searchedProducts.items, ...action.payload.products]
                }
            };
        case constants_1.CLEAR_SEARCH_STATE:
            return {
                ...state,
                searchedProducts: initState
            };
        case constants_1.REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                items: state.items.filter((product) => product.id !== action.payload)
            };
        case constants_1.EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                items: state.items.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            ...action.payload.updates
                        };
                    }
                    return product;
                })
            };
        default:
            return state;
    }
};


/***/ }),

/***/ 32579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
// import profile from 'static/profile.jpg';
// import banner from 'static/banner.jpg';
// const initState = {
//   fullname: 'Pedro Juan',
//   email: 'juanpedro@gmail.com',
//   address: '',
//   mobile: {},
//   avatar: profile,
//   banner,
//   dateJoined: 1954234787348
// };
exports.default = (state = {}, action) => {
    switch (action.type) {
        case constants_1.SET_PROFILE:
            return action.payload;
        case constants_1.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case constants_1.CLEAR_PROFILE:
            return {};
        default:
            return state;
    }
};


/***/ }),

/***/ 19946:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
// const initState = [
//   {
//     firstname: 'Gago',
//     lastname: 'Ka',
//     email: 'gagoka@mail.com',
//     password: 'gagooo',
//     avatar: '',
//     banner: '',
//     dateJoined: 0
//   }
// ];
exports.default = (state = {}, action) => {
    switch (action.type) {
        case constants_1.ADD_USER:
            return [...state, action.payload];
        case constants_1.EDIT_USER:
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        ...action.payload
                    };
                }
                return user;
            });
        case constants_1.DELETE_USER:
            return state.filter((user) => user.id !== action.payload);
        default:
            return state;
    }
};


/***/ }),

/***/ 29186:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const routes_1 = __webpack_require__(74897);
const defaultAvatar_jpg_1 = __importDefault(__webpack_require__(24309));
const defaultBanner_jpg_1 = __importDefault(__webpack_require__(51893));
const effects_1 = __webpack_require__(34857);
const authActions_1 = __webpack_require__(17051);
const basketActions_1 = __webpack_require__(78057);
const contactDetailsActions_1 = __webpack_require__(89409);
const filterActions_1 = __webpack_require__(38732);
const miscActions_1 = __webpack_require__(64009);
const profileActions_1 = __webpack_require__(80194);
const AppRouter_1 = __webpack_require__(5460);
const firebase_1 = __importDefault(__webpack_require__(99826));
const ordersActions_1 = __webpack_require__(60962);
function* handleError(e) {
    const obj = { success: false, type: 'auth', isError: true };
    yield (0, effects_1.put)((0, miscActions_1.setAuthenticating)(false));
    switch (e.code) {
        case 'auth/network-request-failed':
            yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)({
                ...obj,
                message: 'Problem z siecią. Spróbuj ponownie'
            }));
            break;
        case 'auth/email-already-in-use':
            yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)({
                ...obj,
                message: 'Email jest już zarejestrowany. Przejdź do strony logowania.'
            }));
            break;
        case 'auth/wrong-password':
            yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)({ ...obj, message: 'Incorrect email or password' }));
            break;
        case 'auth/user-not-found':
            yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)({ ...obj, message: 'Incorrect email or password' }));
            break;
        case 'auth/reset-password-error':
            yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)({
                ...obj,
                message: 'Failed to send password reset email. Did you type your email correctly?'
            }));
            break;
        default:
            yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)({ ...obj, message: e.message }));
            break;
    }
}
function* initRequest() {
    yield (0, effects_1.put)((0, miscActions_1.setAuthenticating)());
    yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)());
}
function* authSaga({ type, payload }) {
    switch (type) {
        case constants_1.SIGNIN:
            try {
                yield initRequest();
                yield (0, effects_1.call)(firebase_1.default.signIn, payload.email, payload.password);
            }
            catch (e) {
                yield handleError(e);
            }
            break;
        case constants_1.SIGNUP:
            try {
                yield initRequest();
                const ref = yield (0, effects_1.call)(firebase_1.default.createAccount, payload.email, payload.password);
                const user = {
                    user: {
                        email: payload.email
                    },
                    role: 'USER',
                    avatar: defaultAvatar_jpg_1.default,
                    banner: defaultBanner_jpg_1.default,
                    dateJoined: ref.user.metadata.creationTime || new Date().getTime()
                };
                yield (0, effects_1.call)(firebase_1.default.addUser, ref.user.uid, user);
                yield (0, effects_1.put)((0, profileActions_1.setProfile)(user));
                yield (0, effects_1.put)((0, miscActions_1.setAuthenticating)(false));
            }
            catch (e) {
                yield handleError(e);
            }
            break;
        case constants_1.SIGNOUT: {
            try {
                yield initRequest();
                yield (0, effects_1.call)(firebase_1.default.signOut);
                yield (0, effects_1.put)((0, basketActions_1.clearBasket)());
                yield (0, effects_1.put)((0, profileActions_1.clearProfile)());
                yield (0, effects_1.put)((0, filterActions_1.resetFilter)());
                yield (0, effects_1.put)((0, authActions_1.signOutSuccess)());
                yield (0, effects_1.put)((0, miscActions_1.setAuthenticating)(false));
                yield (0, effects_1.call)(AppRouter_1.history.push, routes_1.SIGNIN);
            }
            catch (e) {
                console.log(e);
            }
            break;
        }
        case constants_1.RESET_PASSWORD: {
            try {
                yield initRequest();
                yield (0, effects_1.call)(firebase_1.default.passwordReset, payload);
                yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)({
                    success: true,
                    type: 'reset',
                    message: 'Password reset email has been sent to your provided email.'
                }));
                yield (0, effects_1.put)((0, miscActions_1.setAuthenticating)(false));
            }
            catch (e) {
                handleError({ code: 'auth/reset-password-error' });
            }
            break;
        }
        case constants_1.ON_AUTHSTATE_SUCCESS: {
            const snapshot = yield (0, effects_1.call)(firebase_1.default.getUser, payload.uid);
            if (snapshot.data()) {
                // if user exists in database
                const user = snapshot.data();
                yield (0, effects_1.put)((0, profileActions_1.setProfile)(user));
                yield (0, effects_1.put)((0, contactDetailsActions_1.setContactDetailsLocaly)(user.user));
                const userOrders = yield (0, effects_1.call)(firebase_1.default.getUserOrders, payload.uid);
                yield (0, effects_1.put)((0, ordersActions_1.setOrdersItems)(userOrders));
                // yield put(setContactDetailsLocaly(user.contactDetails))
                // yield put(setBasketItems(user.basket))
                yield (0, effects_1.put)((0, authActions_1.signInSuccess)({
                    id: payload.uid,
                    role: user.role,
                    provider: payload.providerData[0].providerId
                }));
            }
            yield (0, effects_1.put)((0, miscActions_1.setAuthStatus)({
                success: true,
                type: 'auth',
                isError: false,
                message: 'Successfully signed in. Redirecting...'
            }));
            yield (0, effects_1.put)((0, miscActions_1.setAuthenticating)(false));
            break;
        }
        case constants_1.ON_AUTHSTATE_FAIL: {
            yield (0, effects_1.put)((0, profileActions_1.clearProfile)());
            yield (0, effects_1.put)((0, authActions_1.signOutSuccess)());
            break;
        }
        case constants_1.SET_AUTH_PERSISTENCE: {
            try {
                yield (0, effects_1.call)(firebase_1.default.setAuthPersistence);
            }
            catch (e) {
                console.log(e);
            }
            break;
        }
        default: {
            throw new Error('Unexpected Action Type.');
        }
    }
}
exports.default = authSaga;


/***/ }),

/***/ 82534:
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
const ACTION = __importStar(__webpack_require__(35154));
const effects_1 = __webpack_require__(34857);
const authSaga_1 = __importDefault(__webpack_require__(29186));
const orderSaga_1 = __importDefault(__webpack_require__(47175));
const productSaga_1 = __importDefault(__webpack_require__(72457));
const profileSaga_1 = __importDefault(__webpack_require__(87065));
const shippingSaga_1 = __importDefault(__webpack_require__(58207));
function* rootSaga() {
    yield (0, effects_1.takeLatest)([
        ACTION.SIGNIN,
        ACTION.SIGNUP,
        ACTION.SIGNOUT,
        ACTION.SIGNIN_WITH_GOOGLE,
        ACTION.SIGNIN_WITH_FACEBOOK,
        ACTION.SIGNIN_WITH_GITHUB,
        ACTION.ON_AUTHSTATE_CHANGED,
        ACTION.ON_AUTHSTATE_SUCCESS,
        ACTION.ON_AUTHSTATE_FAIL,
        ACTION.SET_AUTH_PERSISTENCE,
        ACTION.RESET_PASSWORD
    ], authSaga_1.default);
    yield (0, effects_1.takeLatest)([
        ACTION.ADD_PRODUCT,
        ACTION.SEARCH_PRODUCT,
        ACTION.REMOVE_PRODUCT,
        ACTION.EDIT_PRODUCT,
        ACTION.GET_PRODUCTS
    ], productSaga_1.default);
    yield (0, effects_1.takeLatest)([ACTION.UPDATE_EMAIL, ACTION.UPDATE_PROFILE, ACTION.ADD_PREFERRED_DELIVERY], profileSaga_1.default);
    yield (0, effects_1.takeLatest)([ACTION.ADD_ORDER_REMOTELY], orderSaga_1.default);
    yield (0, effects_1.takeLatest)([ACTION.SET_SHIPPING_LOCALY], shippingSaga_1.default);
}
exports.default = rootSaga;


/***/ }),

/***/ 47175:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
const constants_1 = __webpack_require__(35154);
const utils_1 = __webpack_require__(10901);
const effects_1 = __webpack_require__(34857);
const basketActions_1 = __webpack_require__(78057);
const miscActions_1 = __webpack_require__(64009);
const ordersActions_1 = __webpack_require__(60962);
const AppRouter_1 = __webpack_require__(5460);
const firebase_1 = __importDefault(__webpack_require__(99826));
function* initRequest() {
    yield (0, effects_1.put)((0, miscActions_1.setLoading)(true));
    yield (0, effects_1.put)((0, miscActions_1.setRequestStatus)(null));
}
function* handleError(e) {
    yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
    yield (0, effects_1.put)((0, miscActions_1.setRequestStatus)(e?.message || 'Failed to fetch products'));
    console.log('ERROR: ', e);
}
function* handleAction(location, message, status) {
    if (location)
        yield (0, effects_1.call)(AppRouter_1.history.push, location);
    yield (0, effects_1.call)(utils_1.displayActionMessage, message, status);
}
function* orderSaga({ type, payload }) {
    switch (type) {
        case constants_1.ADD_ORDER_REMOTELY: {
            try {
                yield initRequest();
                //
                const orderId = yield (0, effects_1.call)(firebase_1.default.generateKey);
                const userId = payload.auth.id;
                //
                const order = {
                    products: payload.basket.map((product) => ({
                        id: product.id,
                        variant: product.variant,
                        price: product.price,
                        quantity: product.quantity
                    })),
                    total: payload.total,
                    dateCreated: new Date(),
                    paymentType: payload.paymentType,
                    deliveryType: payload.deliveryType,
                    contactDetails: payload.contactDetails,
                    shipping: payload.deliveryType === 'PICK_UP' ? null : payload.shipping
                };
                yield (0, effects_1.call)(firebase_1.default.addOrder, orderId, order);
                //
                const profileOrder = order;
                yield (0, effects_1.call)(firebase_1.default.addOrderToProfile, userId, orderId, profileOrder);
                //
                const userOrders = yield (0, effects_1.call)(firebase_1.default.getUserOrders, userId);
                yield (0, effects_1.put)((0, ordersActions_1.setOrdersItems)(userOrders));
                //
                yield (0, effects_1.put)((0, basketActions_1.clearBasket)());
            }
            catch (e) {
                console.log('addOrderError in Saga', e);
            }
            break;
        }
        default: {
            throw new Error(`Unexpected action type ${type}`);
        }
    }
}
exports.default = orderSaga;


/***/ }),

/***/ 72457:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable indent */
const constants_1 = __webpack_require__(35154);
const routes_1 = __webpack_require__(74897);
const utils_1 = __webpack_require__(10901);
const effects_1 = __webpack_require__(34857);
const miscActions_1 = __webpack_require__(64009);
const AppRouter_1 = __webpack_require__(5460);
const firebase_1 = __importDefault(__webpack_require__(99826));
const productActions_1 = __webpack_require__(82972);
function* initRequest() {
    yield (0, effects_1.put)((0, miscActions_1.setLoading)(true));
    yield (0, effects_1.put)((0, miscActions_1.setRequestStatus)(null));
}
function* handleError(e) {
    yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
    yield (0, effects_1.put)((0, miscActions_1.setRequestStatus)(e?.message || 'Failed to fetch products'));
    console.log('ERROR: ', e);
}
function* handleAction(location, message, status) {
    if (location)
        yield (0, effects_1.call)(AppRouter_1.history.push, location);
    yield (0, effects_1.call)(utils_1.displayActionMessage, message, status);
}
function* productSaga({ type, payload }) {
    switch (type) {
        case constants_1.GET_PRODUCTS:
            try {
                yield initRequest();
                const state = yield (0, effects_1.select)();
                const result = yield (0, effects_1.call)(firebase_1.default.getProducts, payload);
                if (result.products.length === 0) {
                    handleError('No items found.');
                }
                else {
                    yield (0, effects_1.put)((0, productActions_1.getProductsSuccess)({
                        products: result.products,
                        lastKey: result.lastKey
                            ? result.lastKey
                            : state.products.lastRefKey,
                        total: result.total ? result.total : state.products.total
                    }));
                    yield (0, effects_1.put)((0, miscActions_1.setRequestStatus)(''));
                }
                // yield put({ type: SET_LAST_REF_KEY, payload: result.lastKey });
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
            }
            catch (e) {
                console.log(e);
                yield handleError(e);
            }
            break;
        case constants_1.ADD_PRODUCT: {
            try {
                yield initRequest();
                const { gallery } = payload;
                const key = yield (0, effects_1.call)(firebase_1.default.generateKey);
                let images = [];
                if (gallery.length !== 0) {
                    const imageKeys = yield (0, effects_1.all)(gallery.map(() => firebase_1.default.generateKey));
                    const imageUrls = yield (0, effects_1.all)(gallery.map((img, i) => firebase_1.default.storeImage(imageKeys[i](), 'products', img.file)));
                    images = imageUrls.map((url, i) => ({
                        id: imageKeys[i](),
                        url
                    }));
                }
                const product = {
                    ...payload,
                    gallery: images
                };
                yield (0, effects_1.call)(firebase_1.default.addProduct, key, product);
                yield (0, effects_1.put)((0, productActions_1.addProductSuccess)({
                    id: key,
                    ...product
                }));
                yield handleAction(routes_1.ADMIN_PRODUCTS, 'Item succesfully added', 'success');
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
            }
            catch (e) {
                yield handleError(e);
                yield handleAction(undefined, `Item failed to add: ${e?.message}`, 'error');
            }
            break;
        }
        case constants_1.EDIT_PRODUCT: {
            try {
                yield initRequest();
                const { gallery } = payload.updates;
                let newUpdates = { ...payload.updates };
                if (gallery.length > 1) {
                    const existingUploads = [];
                    const newUploads = [];
                    gallery.forEach((img) => {
                        if (img.file) {
                            newUploads.push(img);
                        }
                        else {
                            existingUploads.push(img);
                        }
                    });
                    const imageKeys = yield (0, effects_1.all)(newUploads.map(() => firebase_1.default.generateKey));
                    const imageUrls = yield (0, effects_1.all)(newUploads.map((img, i) => firebase_1.default.storeImage(imageKeys[i](), 'products', img.file)));
                    const images = imageUrls.map((url, i) => ({
                        id: imageKeys[i](),
                        url
                    }));
                    newUpdates = {
                        ...newUpdates,
                        gallery: [...existingUploads, ...images]
                    };
                }
                else {
                    newUpdates = {
                        ...newUpdates
                    };
                    // add image thumbnail to image collection from newUpdates to
                    // make sure you're adding the url not the file object.
                }
                yield (0, effects_1.call)(firebase_1.default.editProduct, payload.id, newUpdates);
                yield (0, effects_1.put)((0, productActions_1.editProductSuccess)({
                    id: payload.id,
                    updates: newUpdates
                }));
                yield handleAction(routes_1.ADMIN_PRODUCTS, 'Item succesfully edited', 'success');
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
            }
            catch (e) {
                yield handleError(e);
                yield handleAction(undefined, `Item failed to edit: ${e.message}`, 'error');
            }
            break;
        }
        case constants_1.REMOVE_PRODUCT: {
            try {
                yield initRequest();
                yield (0, effects_1.call)(firebase_1.default.removeProduct, payload);
                yield (0, effects_1.put)((0, productActions_1.removeProductSuccess)(payload));
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
                yield handleAction(routes_1.ADMIN_PRODUCTS, 'Item succesfully removed', 'success');
            }
            catch (e) {
                yield handleError(e);
                yield handleAction(undefined, `Item failed to remove: ${e.message}`, 'error');
            }
            break;
        }
        case constants_1.SEARCH_PRODUCT: {
            try {
                yield initRequest();
                // clear search data
                yield (0, effects_1.put)((0, productActions_1.clearSearchState)());
                const state = yield (0, effects_1.select)();
                const result = yield (0, effects_1.call)(firebase_1.default.searchProducts, payload.searchKey);
                if (result.products.length === 0) {
                    yield handleError({ message: 'No product found.' });
                    yield (0, effects_1.put)((0, productActions_1.clearSearchState)());
                }
                else {
                    yield (0, effects_1.put)((0, productActions_1.searchProductSuccess)({
                        products: result.products,
                        lastKey: result.lastKey
                            ? result.lastKey
                            : state.products.searchedProducts.lastRefKey,
                        total: result.total
                            ? result.total
                            : state.products.searchedProducts.total
                    }));
                    yield (0, effects_1.put)((0, miscActions_1.setRequestStatus)(''));
                }
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
            }
            catch (e) {
                yield handleError(e);
            }
            break;
        }
        default: {
            throw new Error(`Unexpected action type ${type}`);
        }
    }
}
exports.default = productSaga;


/***/ }),

/***/ 87065:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
const routes_1 = __webpack_require__(74897);
const utils_1 = __webpack_require__(10901);
const effects_1 = __webpack_require__(34857);
const preferredDeliveryActions_1 = __webpack_require__(48376);
const AppRouter_1 = __webpack_require__(5460);
const firebase_1 = __importDefault(__webpack_require__(99826));
const miscActions_1 = __webpack_require__(64009);
const profileActions_1 = __webpack_require__(80194);
function* profileSaga({ type, payload }) {
    switch (type) {
        case constants_1.ADD_PREFERRED_DELIVERY:
            try {
                yield (0, effects_1.put)((0, preferredDeliveryActions_1.setPreferredDelivery)(payload.deliveryType));
                yield (0, effects_1.call)(firebase_1.default.updateProfile, payload.id, {
                    preferred_delivery: payload.deliveryType
                });
            }
            catch (e) {
                console.error(e);
            }
            break;
        case constants_1.UPDATE_EMAIL: {
            try {
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
                yield (0, effects_1.call)(firebase_1.default.updateEmail, payload.password, payload.newEmail);
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
                yield (0, effects_1.call)(AppRouter_1.history.push, '/profile');
                yield (0, effects_1.call)(utils_1.displayActionMessage, 'Email Updated Successfully!', 'success');
            }
            catch (e) {
                console.log(e.message);
            }
            break;
        }
        case constants_1.UPDATE_PROFILE: {
            try {
                const state = yield (0, effects_1.select)();
                const { email, password } = payload.credentials;
                const { avatarFile, bannerFile } = payload.files;
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(true));
                // if email & password exist && the email has been edited
                // update the email
                if (email && password && email !== state.profile.email) {
                    yield (0, effects_1.call)(firebase_1.default.updateEmail, password, email);
                }
                if (avatarFile || bannerFile) {
                    const bannerURL = bannerFile
                        ? yield (0, effects_1.call)(firebase_1.default.storeImage, state.auth.id, 'banner', bannerFile)
                        : payload.updates.banner;
                    const avatarURL = avatarFile
                        ? yield (0, effects_1.call)(firebase_1.default.storeImage, state.auth.id, 'avatar', avatarFile)
                        : payload.updates.avatar;
                    const updates = {
                        ...payload.updates,
                        avatar: avatarURL,
                        banner: bannerURL
                    };
                    yield (0, effects_1.call)(firebase_1.default.updateProfile, state.auth.id, updates);
                    yield (0, effects_1.put)((0, profileActions_1.updateProfileSuccess)(updates));
                }
                else {
                    yield (0, effects_1.call)(firebase_1.default.updateProfile, state.auth.id, payload.updates);
                    yield (0, effects_1.put)((0, profileActions_1.updateProfileSuccess)(payload.updates));
                }
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
                yield (0, effects_1.call)(AppRouter_1.history.push, routes_1.ACCOUNT);
                yield (0, effects_1.call)(utils_1.displayActionMessage, 'Profile Updated Successfully!', 'success');
            }
            catch (e) {
                yield (0, effects_1.put)((0, miscActions_1.setLoading)(false));
                if (e.code === 'auth/wrong-password') {
                    yield (0, effects_1.call)(utils_1.displayActionMessage, 'Wrong password, profile update failed :(', 'error');
                }
                else {
                    yield (0, effects_1.call)(utils_1.displayActionMessage, `:( Failed to update profile. ${e.message ? e.message : ''}`, 'error');
                }
            }
            break;
        }
        default: {
            throw new Error('Unexpected action type.');
        }
    }
}
exports.default = profileSaga;


/***/ }),

/***/ 58207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const constants_1 = __webpack_require__(35154);
function* shippingSaga({ type, payload }) {
    switch (type) {
        case constants_1.SET_SHIPPING_LOCALY:
            try {
                // yield put(setShippingLocaly(payload))
            }
            catch (e) {
                console.error(e);
            }
            break;
        default: {
            throw new Error('Unexpected action type.');
        }
    }
}
exports.default = shippingSaga;


/***/ }),

/***/ 67358:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const redux_1 = __webpack_require__(14890);
const redux_persist_1 = __webpack_require__(72042);
const storage_1 = __importDefault(__webpack_require__(76734));
const redux_saga_1 = __importDefault(__webpack_require__(30797));
const reducers_1 = __importDefault(__webpack_require__(4301));
const sagas_1 = __importDefault(__webpack_require__(82534));
const sagaMiddleware = (0, redux_saga_1.default)();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const authPersistConfig = {
    key: 'root',
    storage: storage_1.default,
    whitelist: ['auth', 'profile', 'basket', 'checkout']
};
const store = (0, redux_1.createStore)((0, redux_persist_1.persistCombineReducers)(authPersistConfig, reducers_1.default), composeEnhancer((0, redux_1.applyMiddleware)(sagaMiddleware)));
const persistor = (0, redux_persist_1.persistStore)(store);
const configureStore = () => {
    sagaMiddleware.run(sagas_1.default);
    return {
        store,
        persistor
    };
};
exports.default = configureStore;


/***/ }),

/***/ 40258:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
const common_1 = __webpack_require__(23211);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const AdminRoute = ({ isAuth, role, component: Component, ...rest }) => (react_1.default.createElement(react_router_dom_1.Route, { ...rest, component: (props) => isAuth && role === 'ADMIN' ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(common_1.AdminNavigation, null),
        react_1.default.createElement("main", { className: "content-admin" },
            react_1.default.createElement(common_1.AdminSideBar, null),
            react_1.default.createElement("div", { className: "content-admin-wrapper" },
                react_1.default.createElement(Component, { ...props }))))) : (react_1.default.createElement(react_router_dom_1.Redirect, { to: "/" })) }));
const mapStateToProps = ({ auth }) => ({
    isAuth: !!auth,
    role: auth?.role || ''
});
AdminRoute.defaultProps = {
    isAuth: false,
    role: 'USER'
};
AdminRoute.propTypes = {
    isAuth: prop_types_1.default.bool,
    role: prop_types_1.default.string,
    component: prop_types_1.default.func.isRequired,
    // eslint-disable-next-line react/require-default-props
    rest: prop_types_1.default.any
};
exports.default = (0, react_redux_1.connect)(mapStateToProps)(AdminRoute);


/***/ }),

/***/ 5460:
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
exports.history = void 0;
const Basket_1 = __importDefault(__webpack_require__(34256));
const common_1 = __webpack_require__(23211);
const ROUTES = __importStar(__webpack_require__(74897));
const history_1 = __webpack_require__(90071);
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const views_1 = __webpack_require__(41174);
const AdminRoute_1 = __importDefault(__webpack_require__(40258));
const ClientRoute_1 = __importDefault(__webpack_require__(75919));
const PublicRoute_1 = __importDefault(__webpack_require__(92706));
exports.history = (0, history_1.createBrowserHistory)();
// const PageNotFound = lazy(() => import('views/PageNotFound'))
const AppRouter = () => {
    const store = (0, react_redux_1.useSelector)((stor) => ({
        ...stor
    }));
    console.log('+', store);
    return (react_1.default.createElement(react_router_dom_1.Router, { history: exports.history },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(common_1.Navigation, null),
            react_1.default.createElement(Basket_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { component: views_1.Search, exact: true, path: ROUTES.SEARCH }),
                react_1.default.createElement(react_router_dom_1.Route, { component: views_1.Home, exact: true, path: ROUTES.HOME }),
                react_1.default.createElement(react_router_dom_1.Route, { component: views_1.Shop, exact: true, path: ROUTES.SHOP }),
                react_1.default.createElement(react_router_dom_1.Route, { component: views_1.FeaturedProducts, exact: true, path: ROUTES.FEATURED_PRODUCTS }),
                react_1.default.createElement(react_router_dom_1.Route, { component: views_1.RecommendedProducts, exact: true, path: ROUTES.RECOMMENDED_PRODUCTS }),
                react_1.default.createElement(PublicRoute_1.default, { component: views_1.SignUp, path: ROUTES.SIGNUP }),
                react_1.default.createElement(PublicRoute_1.default, { component: views_1.SignIn, exact: true, path: ROUTES.SIGNIN }),
                react_1.default.createElement(PublicRoute_1.default, { component: views_1.ForgotPassword, path: ROUTES.FORGOT_PASSWORD }),
                react_1.default.createElement(react_router_dom_1.Route, { component: views_1.ViewProduct, path: ROUTES.VIEW_PRODUCT }),
                react_1.default.createElement(ClientRoute_1.default, { component: views_1.UserAccount, exact: true, path: ROUTES.ACCOUNT }),
                react_1.default.createElement(ClientRoute_1.default, { component: views_1.EditAccount, exact: true, path: ROUTES.ACCOUNT_EDIT }),
                react_1.default.createElement(ClientRoute_1.default, { component: views_1.CheckoutStep1, path: ROUTES.CHECKOUT_STEP_1 }),
                react_1.default.createElement(ClientRoute_1.default, { component: views_1.CheckoutStep2, path: ROUTES.CHECKOUT_STEP_2 }),
                react_1.default.createElement(ClientRoute_1.default, { component: views_1.CheckoutStep3, path: ROUTES.CHECKOUT_STEP_3 }),
                react_1.default.createElement(ClientRoute_1.default, { component: views_1.CheckoutStep3a, path: ROUTES.CHECKOUT_STEP_3A }),
                react_1.default.createElement(ClientRoute_1.default, { component: views_1.CheckoutStep4, path: ROUTES.CHECKOUT_STEP_4 }),
                react_1.default.createElement(ClientRoute_1.default, { component: views_1.CheckoutResult, path: ROUTES.CHECKOUT_RESULT }),
                react_1.default.createElement(AdminRoute_1.default, { component: views_1.Dashboard, exact: true, path: ROUTES.ADMIN_DASHBOARD }),
                react_1.default.createElement(AdminRoute_1.default, { component: views_1.Products, path: ROUTES.ADMIN_PRODUCTS }),
                react_1.default.createElement(AdminRoute_1.default, { component: views_1.AddProduct, path: ROUTES.ADD_PRODUCT }),
                react_1.default.createElement(AdminRoute_1.default, { component: views_1.EditProduct, path: `${ROUTES.EDIT_PRODUCT}/:id` }),
                react_1.default.createElement(PublicRoute_1.default, { component: views_1.PageNotFound })),
            react_1.default.createElement(common_1.Footer, null))));
};
exports.default = AppRouter;


/***/ }),

/***/ 75919:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
const routes_1 = __webpack_require__(74897);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const Page_1 = __importDefault(__webpack_require__(81592));
const PrivateRoute = ({ isAuth, role, component: Component, ...rest }) => (react_1.default.createElement(react_router_dom_1.Route, { ...rest, component: (props) => {
        if (isAuth && role === 'USER') {
            return (react_1.default.createElement(Page_1.default, null,
                react_1.default.createElement(Component, { ...props })));
        }
        if (isAuth && role === 'ADMIN') {
            return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.ADMIN_DASHBOARD });
        }
        return (react_1.default.createElement(react_router_dom_1.Redirect, { to: {
                pathname: routes_1.SIGNIN,
                // eslint-disable-next-line react/prop-types
                state: { from: props.location }
            } }));
    } }));
PrivateRoute.defaultProps = {
    isAuth: false,
    role: 'USER'
};
PrivateRoute.propTypes = {
    isAuth: prop_types_1.default.bool,
    role: prop_types_1.default.string,
    component: prop_types_1.default.func.isRequired,
    // eslint-disable-next-line react/require-default-props
    rest: prop_types_1.default.any
};
const mapStateToProps = ({ auth }) => ({
    isAuth: !!auth,
    role: auth?.role || ''
});
exports.default = (0, react_redux_1.connect)(mapStateToProps)(PrivateRoute);


/***/ }),

/***/ 92706:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
const routes_1 = __webpack_require__(74897);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const Page_1 = __importDefault(__webpack_require__(81592));
const PublicRoute = ({ isAuth, role, component: Component, path, ...rest }) => (react_1.default.createElement(react_router_dom_1.Route, { ...rest, 
    // eslint-disable-next-line consistent-return
    render: (props) => {
        // eslint-disable-next-line react/prop-types
        const { from } = props.location.state || { from: { pathname: '/' } };
        if (isAuth && role === 'ADMIN') {
            return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.ADMIN_DASHBOARD });
        }
        if (isAuth && role === 'USER' && (path === routes_1.SIGNIN || path === routes_1.SIGNUP)) {
            return react_1.default.createElement(react_router_dom_1.Redirect, { to: from });
        }
        return (react_1.default.createElement(Page_1.default, null,
            react_1.default.createElement(Component, { ...props })));
    } }));
PublicRoute.defaultProps = {
    isAuth: false,
    role: 'USER',
    path: '/'
};
PublicRoute.propTypes = {
    isAuth: prop_types_1.default.bool,
    role: prop_types_1.default.string,
    component: prop_types_1.default.func.isRequired,
    path: prop_types_1.default.string,
    // eslint-disable-next-line react/require-default-props
    rest: prop_types_1.default.any
};
const mapStateToProps = ({ auth }) => ({
    isAuth: !!auth,
    role: auth?.role || ''
});
exports.default = (0, react_redux_1.connect)(mapStateToProps)(PublicRoute);


/***/ }),

/***/ 53143:
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

/***/ 86566:
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

/***/ 99826:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-unused-vars */
const app_1 = __importDefault(__webpack_require__(15503));
__webpack_require__(77397);
__webpack_require__(69433);
__webpack_require__(30332);
const config_1 = __importDefault(__webpack_require__(86566));
class Firebase {
    constructor() {
        app_1.default.initializeApp(config_1.default);
        this.storage = app_1.default.storage();
        this.db = app_1.default.firestore();
        this.auth = app_1.default.auth();
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
    'paragraph-color': '#4a4a4a'
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

/***/ 24904:
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
const icons_1 = __webpack_require__(70930);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const authActions_1 = __webpack_require__(17051);
const ForgotPassword = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { authStatus, isAuthenticating } = (0, react_redux_1.useSelector)((state) => ({
        isAuthenticating: state.app.isAuthenticating,
        authStatus: state.app.authStatus
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const didMount = (0, hooks_1.useDidMount)();
    const [forgotPWStatus, setForgotPWStatus] = (0, react_1.useState)({});
    const [isSendingForgotPWRequest, setIsSending] = (0, react_1.useState)(false);
    const [field, setField] = (0, react_1.useState)({});
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)('Forgot Password | Salinaka');
    (0, react_1.useEffect)(() => {
        if (didMount) {
            setForgotPWStatus(authStatus);
            setIsSending(isAuthenticating);
        }
    }, [authStatus, isAuthenticating]);
    const onEmailChange = (value, error) => {
        setField({ email: value, error });
    };
    const onSubmitEmail = () => {
        if (!!field.email && !field.error) {
            dispatch((0, authActions_1.resetPassword)(field.email));
        }
    };
    return (react_1.default.createElement("div", { className: "forgot_password" },
        forgotPWStatus.message && (react_1.default.createElement("h5", { className: `text-center ${authStatus?.success ? 'toast-success' : 'toast-error'}` }, authStatus.message)),
        react_1.default.createElement("h3", null, t('forgotPasswordPage.title')),
        react_1.default.createElement("p", null, t('forgotPasswordPage.info')),
        react_1.default.createElement("br", null),
        react_1.default.createElement("input", { field: "email", required: true, className: "input-form", label: "* Email", maxLength: 40, onChange: onEmailChange, placeholder: t('forgotPasswordPage.placeholder'), readOnly: isSendingForgotPWRequest || authStatus?.success, type: "email", style: { width: '100%' } }),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("button", { className: "button w-100-mobile", disabled: isSendingForgotPWRequest || authStatus?.success, onClick: onSubmitEmail, type: "button" },
            isSendingForgotPWRequest ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.CheckOutlined, null),
            "\u00A0",
            isSendingForgotPWRequest
                ? t('forgotPasswordPage.loadingLabel')
                : t('forgotPasswordPage.buttonLabel'))));
};
exports.default = ForgotPassword;


/***/ }),

/***/ 42942:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/jsx-wrap-multilines */
const routes_1 = __webpack_require__(74897);
const hooks_1 = __webpack_require__(92457);
const banner_girl_png_1 = __importDefault(__webpack_require__(45939));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const Page_1 = __importDefault(__webpack_require__(81592));
const Banner_1 = __importDefault(__webpack_require__(86102));
const Display_1 = __importDefault(__webpack_require__(43979));
const react_i18next_1 = __webpack_require__(86162);
const icons_1 = __webpack_require__(70930);
const Box_1 = __importDefault(__webpack_require__(31285));
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

/***/ 30044:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const product_1 = __webpack_require__(83281);
const Box_1 = __importDefault(__webpack_require__(31285));
const Page_1 = __importDefault(__webpack_require__(81592));
const ProductsGrid_1 = __importDefault(__webpack_require__(1071));
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const selector_1 = __webpack_require__(53143);
const Shop = () => {
    (0, hooks_1.useDocumentTitle)('Shop | Salinaka');
    (0, hooks_1.useScrollTop)();
    const store = (0, react_redux_1.useSelector)((state) => ({
        filteredProducts: (0, selector_1.selectFilter)(state.products.items, state.filter),
        products: state.products,
        requestStatus: state.app.requestStatus,
        isLoading: state.app.loading
    }), react_redux_1.shallowEqual);
    return (react_1.default.createElement(Page_1.default, null,
        react_1.default.createElement(Box_1.default, { as: "section", position: "relative" },
            react_1.default.createElement(product_1.AppliedFilters, { filteredProductsCount: store.filteredProducts.length }),
            react_1.default.createElement(product_1.ProductList, { ...store },
                react_1.default.createElement(ProductsGrid_1.default, { full: true, skeletonCount: 6, products: store.filteredProducts })))));
};
exports.default = Shop;


/***/ }),

/***/ 48942:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const react_redux_1 = __webpack_require__(14494);
const authActions_1 = __webpack_require__(17051);
const yup_1 = __webpack_require__(87561);
const useForm = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const getSchema = () => (0, yup_1.object)().shape({
        email: (0, yup_1.string)()
            .email('Email is not valid.')
            .required('Email is required.'),
        password: (0, yup_1.string)().required('Password is required.')
    });
    const submitForm = (form) => {
        dispatch((0, authActions_1.signIn)(form));
    };
    const getInitialValues = () => ({
        email: '',
        password: ''
    });
    return { submitForm, getInitialValues, getSchema };
};
exports.default = useForm;


/***/ }),

/***/ 50666:
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
const icons_1 = __webpack_require__(70930);
const formik_1 = __webpack_require__(74263);
const Button_1 = __importDefault(__webpack_require__(11790));
const routes_1 = __webpack_require__(74897);
const formik_2 = __webpack_require__(94649);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const miscActions_1 = __webpack_require__(64009);
const form_1 = __importDefault(__webpack_require__(48942));
const SignIn = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const history = (0, react_router_dom_1.useHistory)();
    const { authStatus, isAuthenticating } = (0, react_redux_1.useSelector)((state) => ({
        authStatus: state.app.authStatus,
        isAuthenticating: state.app.isAuthenticating
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const { getInitialValues, getSchema, submitForm } = (0, form_1.default)();
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)('Sign In | Salinaka');
    (0, react_1.useEffect)(() => () => {
        dispatch((0, miscActions_1.setAuthStatus)());
        dispatch((0, miscActions_1.setAuthenticating)(false));
    }, []);
    return (react_1.default.createElement("div", { className: "auth-content" },
        authStatus?.success && (react_1.default.createElement("div", { className: "loader" },
            react_1.default.createElement("h3", { className: "toast-success auth-success" },
                authStatus.message,
                react_1.default.createElement(icons_1.LoadingOutlined, null)))),
        !authStatus?.success && (react_1.default.createElement(react_1.default.Fragment, null,
            authStatus?.message && (react_1.default.createElement("h5", { className: "text-center toast-error" }, authStatus?.message)),
            react_1.default.createElement("div", { className: `auth ${authStatus?.message && !authStatus?.success && 'input-error'}` },
                react_1.default.createElement("div", { className: "auth-main" },
                    react_1.default.createElement("h3", null, t('signInPage.title')),
                    react_1.default.createElement(formik_2.Formik, { initialValues: getInitialValues(), validateOnChange: true, validationSchema: getSchema(), onSubmit: submitForm }, () => (react_1.default.createElement(formik_2.Form, null,
                        react_1.default.createElement("div", { className: "auth-field" },
                            react_1.default.createElement(formik_2.Field, { disabled: isAuthenticating, name: "email", type: "email" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { label: t('signInPage.form.email.label'), placeholder: t('signInPage.form.email.placeholder'), ...props })))),
                        react_1.default.createElement("div", { className: "auth-field" },
                            react_1.default.createElement(formik_2.Field, { disabled: isAuthenticating, name: "password", type: "password" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { label: t('signInPage.form.password.label'), placeholder: t('signInPage.form.password.placeholder'), ...props })))),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("div", { className: "auth-field auth-action" },
                            react_1.default.createElement(react_router_dom_1.Link, { onClick: (e) => {
                                    if (isAuthenticating)
                                        e.preventDefault();
                                }, style: { textDecoration: 'underline' }, to: routes_1.FORGOT_PASSWORD },
                                react_1.default.createElement("span", null, t('signInPage.forgotPassword'))),
                            react_1.default.createElement(Button_1.default, { disabled: isAuthenticating, type: "submit" },
                                t(isAuthenticating
                                    ? 'signInPage.signIning'
                                    : 'signInPage.signIn'),
                                "\u00A0",
                                isAuthenticating ? (react_1.default.createElement(icons_1.LoadingOutlined, null)) : (react_1.default.createElement(icons_1.ArrowRightOutlined, null))))))))),
            react_1.default.createElement("div", { className: "auth-message" },
                react_1.default.createElement("span", { className: "auth-info" },
                    react_1.default.createElement("strong", null, t('signInPage.notSignedup'))),
                react_1.default.createElement(Button_1.default, { size: "small", disabled: isAuthenticating, onClick: () => history.push(routes_1.SIGNUP), type: "button", variant: "ternary" }, t('signInPage.signUp')))))));
};
exports.default = SignIn;


/***/ }),

/***/ 88467:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const authActions_1 = __webpack_require__(17051);
const yup_1 = __webpack_require__(87561);
const useForm = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const submitForm = (form) => {
        dispatch((0, authActions_1.signUp)({
            email: form.email.trim().toLowerCase(),
            password: form.password.trim()
        }));
    };
    const getInitialValues = () => ({
        email: '',
        password: ''
    });
    const getSchema = () => (0, yup_1.object)().shape({
        email: (0, yup_1.string)()
            .email(t('signUpPage.validations.email.email'))
            .required(t('signUpPage.validations.email.required')),
        password: (0, yup_1.string)()
            .required(t('signUpPage.validations.password.required'))
            .min(8, t('signUpPage.validations.password.min'))
            .matches(/[A-Z\W]/g, t('signUpPage.validations.password.matches'))
    });
    return { submitForm, getInitialValues, getSchema };
};
exports.default = useForm;


/***/ }),

/***/ 29216:
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
const icons_1 = __webpack_require__(70930);
const formik_1 = __webpack_require__(74263);
const Box_1 = __importDefault(__webpack_require__(31285));
const Button_1 = __importDefault(__webpack_require__(11790));
const routes_1 = __webpack_require__(74897);
const formik_2 = __webpack_require__(94649);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const miscActions_1 = __webpack_require__(64009);
const form_1 = __importDefault(__webpack_require__(88467));
const SignUp = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const { isAuthenticating, authStatus } = (0, react_redux_1.useSelector)((state) => ({
        isAuthenticating: state.app.isAuthenticating,
        authStatus: state.app.authStatus
    }));
    const dispatch = (0, react_redux_1.useDispatch)();
    const { submitForm, getInitialValues, getSchema } = (0, form_1.default)();
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)('Sign Up | Salinaka');
    (0, react_1.useEffect)(() => () => {
        dispatch((0, miscActions_1.setAuthStatus)());
        dispatch((0, miscActions_1.setAuthenticating)(false));
    }, []);
    return (react_1.default.createElement("div", { className: "auth-content" },
        authStatus?.success && (react_1.default.createElement("div", { className: "loader" },
            react_1.default.createElement("h3", { className: "toast-success auth-success" },
                authStatus?.message,
                react_1.default.createElement(icons_1.LoadingOutlined, null)))),
        !authStatus?.success && (react_1.default.createElement(react_1.default.Fragment, null,
            authStatus?.message && (react_1.default.createElement("h5", { className: "text-center toast-error" }, authStatus?.message)),
            react_1.default.createElement("div", { className: `auth ${authStatus?.message && !authStatus?.success && 'input-error'}` },
                react_1.default.createElement("div", { className: "auth-main" },
                    react_1.default.createElement("h3", null, t('signUpPage.title')),
                    react_1.default.createElement(formik_2.Formik, { initialValues: getInitialValues(), validateOnChange: true, validationSchema: getSchema(), onSubmit: submitForm }, () => (react_1.default.createElement(formik_2.Form, null,
                        react_1.default.createElement("div", { className: "auth-field" },
                            react_1.default.createElement(formik_2.Field, { name: "email", disabled: isAuthenticating }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: `* ${t('signUpPage.email.label')}`, placeholder: t('signUpPage.email.placeholder') })))),
                        react_1.default.createElement("div", { className: "auth-field" },
                            react_1.default.createElement(formik_2.Field, { disabled: isAuthenticating, name: "password" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { type: "password", ...props, label: `* ${t('signUpPage.password.label')}`, placeholder: t('signUpPage.password.placeholder') })))),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("div", { className: "auth-field auth-action auth-action-signup" },
                            react_1.default.createElement(Button_1.default, { disabled: isAuthenticating, type: "submit" },
                                t(isAuthenticating
                                    ? 'signUpPage.signingUp'
                                    : 'signUpPage.signUp'),
                                react_1.default.createElement(Box_1.default, { marginLeft: "0.5rem" }, isAuthenticating ? (react_1.default.createElement(icons_1.LoadingOutlined, null)) : (react_1.default.createElement(icons_1.ArrowRightOutlined, null)))))))))),
            react_1.default.createElement("div", { className: "auth-message" },
                react_1.default.createElement("span", { className: "auth-info" },
                    react_1.default.createElement("strong", null, t('signUpPage.haveAccount'))),
                react_1.default.createElement(Button_1.default, { disabled: isAuthenticating, onClick: () => history.push(routes_1.SIGNIN), type: "button", variant: "ternary", size: "small" }, t('signUpPage.signIn')))))));
};
exports.default = SignUp;


/***/ }),

/***/ 867:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const SingleDetail = ({ label, value }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    if (!value)
        return null;
    return (react_1.default.createElement(Flexbox_1.default, { flexDirection: "column" },
        react_1.default.createElement("span", null, label),
        value ? (react_1.default.createElement("h5", null, value)) : (react_1.default.createElement("h5", { className: "text-subtle text-italic" }, t('profilePage.account.noValue')))));
};
exports.default = SingleDetail;


/***/ }),

/***/ 8018:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable indent */
const common_1 = __webpack_require__(23211);
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const utils_1 = __webpack_require__(10901);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const SingleDetail_1 = __importDefault(__webpack_require__(867));
const Profile = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { profile, contactDetails, custmerType } = (0, react_redux_1.useSelector)((state) => ({
        profile: state.profile,
        contactDetails: state.NEWcontactDetails,
        custmerType: state.NEWcustomerType
    }));
    return (react_1.default.createElement(Flexbox_1.default, { flexDirection: "column", marginX: "auto" },
        react_1.default.createElement("div", { className: "user-profile-banner" },
            react_1.default.createElement("div", { className: "user-profile-banner-wrapper" },
                react_1.default.createElement(common_1.ImageLoader, { alt: "Banner", className: "user-profile-banner-img", src: profile.banner })),
            react_1.default.createElement("div", { className: "user-profile-avatar-wrapper" },
                react_1.default.createElement(common_1.ImageLoader, { alt: "Avatar", className: "user-profile-img", src: profile.avatar }))),
        react_1.default.createElement("div", { className: "user-profile-details" },
            react_1.default.createElement("h2", { className: "user-profile-name" }, contactDetails.fullname),
            react_1.default.createElement(SingleDetail_1.default, { label: t('profilePage.account.fields.customerType'), value: custmerType
                    ? t(`profilePage.account.customerTypes.${custmerType}`)
                    : null }),
            react_1.default.createElement(SingleDetail_1.default, { label: t('profilePage.account.fields.email'), value: contactDetails.email }),
            react_1.default.createElement(SingleDetail_1.default, { label: t('profilePage.account.fields.phone'), value: contactDetails?.mobile?.value }),
            react_1.default.createElement(SingleDetail_1.default, { label: t('profilePage.account.fields.street'), value: contactDetails.street }),
            react_1.default.createElement(SingleDetail_1.default, { label: t('profilePage.account.fields.postCode'), value: contactDetails.postCode }),
            react_1.default.createElement(SingleDetail_1.default, { label: t('profilePage.account.fields.city'), value: contactDetails.city }),
            react_1.default.createElement(SingleDetail_1.default, { label: t('profilePage.account.fields.dateJoined'), value: (0, utils_1.displayDate)(profile.dateJoined) }))));
};
exports.default = (0, react_router_dom_1.withRouter)(Profile);


/***/ }),

/***/ 54295:
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
/* eslint-disable react/no-multi-comp */
const icons_1 = __webpack_require__(70930);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const UserTab_1 = __importDefault(__webpack_require__(49430));
const Profile = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(__webpack_require__(8018))));
const UserOrdersTab = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(__webpack_require__(29687))));
const UserAccount = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)('My Account | Salinaka');
    return (react_1.default.createElement(UserTab_1.default, null,
        react_1.default.createElement("div", { index: 2, label: t('profilePage.tabs.orders') },
            react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(Loader, null) },
                react_1.default.createElement(UserOrdersTab, null))),
        react_1.default.createElement("div", { index: 0, label: t('profilePage.tabs.account') },
            react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(Loader, null) },
                react_1.default.createElement(Profile, null)))));
};
const Loader = () => (react_1.default.createElement("div", { className: "loader", style: { minHeight: '80vh' } },
    react_1.default.createElement(icons_1.LoadingOutlined, null),
    react_1.default.createElement("h6", null, "Loading ... ")));
exports.default = UserAccount;


/***/ }),

/***/ 12583:
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
/* eslint-disable indent */
const icons_1 = __webpack_require__(70930);
const routes_1 = __webpack_require__(74897);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const authActions_1 = __webpack_require__(17051);
const UserNav = () => {
    const { profile, isAuthenticating } = (0, react_redux_1.useSelector)((state) => ({
        profile: state.profile,
        isAuthenticating: state.app.isAuthenticating
    }));
    const userNav = (0, react_1.useRef)(null);
    const dispatch = (0, react_redux_1.useDispatch)();
    const toggleDropdown = (e) => {
        const closest = e.target.closest('div.user-nav');
        try {
            if (!closest && userNav.current.classList.contains('user-sub-open')) {
                userNav.current.classList.remove('user-sub-open');
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener('click', toggleDropdown);
        return () => document.removeEventListener('click', toggleDropdown);
    }, []);
    const onClickNav = () => {
        userNav.current.classList.toggle('user-sub-open');
    };
    return isAuthenticating ? (react_1.default.createElement("div", { className: "user-nav" },
        react_1.default.createElement("span", null, "Signing Out"),
        "\u00A0",
        react_1.default.createElement(icons_1.LoadingOutlined, null))) : (react_1.default.createElement("div", { className: "user-nav", onClick: onClickNav, onKeyDown: () => { }, ref: userNav, role: "button", tabIndex: 0 },
        react_1.default.createElement("h5", { className: "text-overflow-ellipsis" }, profile.fullname && profile.fullname.split(' ')[0]),
        react_1.default.createElement("div", { className: "user-nav-img-wrapper" },
            react_1.default.createElement("img", { alt: "", className: "user-nav-img", src: profile.avatar })),
        react_1.default.createElement(icons_1.DownOutlined, { style: { fontSize: '1.2rem', marginLeft: '1rem' } }),
        react_1.default.createElement("div", { className: "user-nav-sub" },
            profile.role !== 'ADMIN' && (react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.ACCOUNT, className: "user-nav-sub-link" },
                "View Account",
                react_1.default.createElement(icons_1.UserOutlined, null))),
            react_1.default.createElement("h6", { className: "user-nav-sub-link margin-0 d-flex", onClick: () => dispatch((0, authActions_1.signOut)()), role: "presentation" },
                "Sign Out",
                react_1.default.createElement(icons_1.LogoutOutlined, null)))));
};
UserNav.propType = {
    profile: prop_types_1.default.object.isRequired
};
exports.default = (0, react_router_dom_1.withRouter)(UserNav);


/***/ }),

/***/ 29687:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const UserOrdersTab = () => (react_1.default.createElement("div", { className: "loader", style: { minHeight: '80vh' } },
    react_1.default.createElement("h3", null, "My Orders"),
    react_1.default.createElement("strong", null,
        react_1.default.createElement("span", { className: "text-subtle" }, "You don't have any orders"))));
exports.default = UserOrdersTab;


/***/ }),

/***/ 49430:
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
const UserTab = (props) => {
    const { children } = props;
    const [activeTab, setActiveTab] = (0, react_1.useState)(children[0].props.index || 0);
    const onClickTabItem = (index) => setActiveTab(index);
    return (react_1.default.createElement("div", { className: "user-tab" },
        react_1.default.createElement("div", { className: "user-tab-nav" },
            react_1.default.createElement("ul", { className: "user-tab-menu" }, children.map((child) => (react_1.default.createElement("li", { className: `user-tab-item ${child.props.index === activeTab ? 'user-tab-active' : ''}`, key: child.props.label, role: "presentation", onClick: () => onClickTabItem(child.props.index) }, child.props.label))))),
        react_1.default.createElement("div", { className: "user-tab-content" }, children.map((child) => {
            if (child.props.index !== activeTab)
                return null;
            return child.props.children;
        }))));
};
UserTab.propTypes = {
    children: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.node), prop_types_1.default.node])
        .isRequired
};
exports.default = UserTab;


/***/ }),

/***/ 78837:
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
const icons_1 = __webpack_require__(70930);
const common_1 = __webpack_require__(23211);
const formik_1 = __webpack_require__(94649);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const ConfirmModal = ({ onConfirmUpdate, modal }) => {
    const [password, setPassword] = (0, react_1.useState)('');
    const { values } = (0, formik_1.useFormikContext)();
    return (react_1.default.createElement(common_1.Modal, { isOpen: modal.isOpenModal, onRequestClose: modal.onCloseModal },
        react_1.default.createElement("div", { className: "text-center padding-l" },
            react_1.default.createElement("h4", null, "Confirm Update"),
            react_1.default.createElement("p", null,
                "To continue updating profile including your \u00A0",
                react_1.default.createElement("strong", null, "email"),
                ",",
                react_1.default.createElement("br", null),
                "please confirm by entering your password"),
            react_1.default.createElement("input", { className: "input-form d-block", onChange: (e) => setPassword(e.target.value), placeholder: "Enter your password", required: true, type: "password", value: password })),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", { className: "d-flex-center" },
            react_1.default.createElement("button", { className: "button", onClick: () => {
                    onConfirmUpdate(values, password);
                    modal.onCloseModal();
                }, type: "button" },
                react_1.default.createElement(icons_1.CheckOutlined, null),
                "\u00A0 Confirm")),
        react_1.default.createElement("button", { className: "modal-close-button button button-border button-border-gray button-small", onClick: modal.onCloseModal, type: "button" },
            react_1.default.createElement(icons_1.CloseOutlined, null))));
};
ConfirmModal.propTypes = {
    onConfirmUpdate: prop_types_1.default.func.isRequired,
    modal: prop_types_1.default.shape({
        onCloseModal: prop_types_1.default.func,
        isOpenModal: prop_types_1.default.bool
    }).isRequired
};
exports.default = ConfirmModal;


/***/ }),

/***/ 45043:
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
const icons_1 = __webpack_require__(70930);
const common_1 = __webpack_require__(23211);
const formik_1 = __webpack_require__(94649);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const miscActions_1 = __webpack_require__(64009);
const profileActions_1 = __webpack_require__(80194);
const Yup = __importStar(__webpack_require__(87561));
const ConfirmModal_1 = __importDefault(__webpack_require__(78837));
const FormSchema = Yup.object().shape({
    fullname: Yup.string()
        .min(4, 'Full name should be at least 4 characters.')
        .max(60, 'Full name should be only be 4 characters long.')
        .required('Full name is required'),
    email: Yup.string()
        .email('Email is not valid.')
        .required('Email is required.'),
    address: Yup.string(),
    mobile: Yup.object().shape({
        country: Yup.string(),
        countryCode: Yup.string(),
        dialCode: Yup.string(),
        value: Yup.string()
    })
});
const EditProfile = () => {
    (0, hooks_1.useDocumentTitle)('Edit Account | Salinaka');
    (0, hooks_1.useScrollTop)();
    const modal = (0, hooks_1.useModal)();
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => () => {
        dispatch((0, miscActions_1.setLoading)(false));
    }, []);
    const { profile, auth, isLoading } = (0, react_redux_1.useSelector)((state) => ({
        profile: state.profile,
        auth: state.auth,
        isLoading: state.app.loading
    }));
    const initFormikValues = {
        fullname: profile.fullname || '',
        email: profile.email || '',
        address: profile.address || '',
        mobile: profile.mobile || {}
    };
    const { imageFile, isFileLoading, onFileChange } = (0, hooks_1.useFileHandler)({
        avatar: {},
        banner: {}
    });
    const update = (form, credentials = {}) => {
        dispatch((0, profileActions_1.updateProfile)({
            updates: {
                fullname: form.fullname,
                email: form.email,
                address: form.address,
                mobile: form.mobile,
                avatar: profile.avatar,
                banner: profile.banner
            },
            files: {
                bannerFile: imageFile.banner.file,
                avatarFile: imageFile.avatar.file
            },
            credentials
        }));
    };
    const onConfirmUpdate = (form, password) => {
        if (password) {
            update(form, { email: form.email, password });
        }
    };
    const onSubmitUpdate = (form) => {
        // check if data has changed
        const fieldsChanged = Object.keys(form).some((key) => profile[key] !== form[key]);
        if (fieldsChanged ||
            Boolean(imageFile.banner.file || imageFile.avatar.file)) {
            if (form.email !== profile.email) {
                modal.onOpenModal();
            }
            else {
                update(form);
            }
        }
    };
    return (react_1.default.createElement(common_1.Boundary, null,
        react_1.default.createElement("div", { className: "edit-user" },
            react_1.default.createElement("h3", { className: "text-center" }, "Edit Account Details"),
            react_1.default.createElement(formik_1.Formik, { initialValues: initFormikValues, validateOnChange: true, validationSchema: FormSchema, onSubmit: onSubmitUpdate }, () => (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "user-profile-banner" },
                    react_1.default.createElement("div", { className: "user-profile-banner-wrapper" },
                        react_1.default.createElement(common_1.ImageLoader, { alt: "Banner", className: "user-profile-banner-img", src: imageFile.banner.url || profile.banner }),
                        isFileLoading ? (react_1.default.createElement("div", { className: "loading-wrapper" },
                            react_1.default.createElement(icons_1.LoadingOutlined, null))) : (react_1.default.createElement("label", { className: "edit-button edit-banner-button", htmlFor: "edit-banner" },
                            react_1.default.createElement("input", { accept: "image/x-png,image/jpeg", disabled: isLoading, hidden: true, id: "edit-banner", onChange: (e) => onFileChange(e, { name: 'banner', type: 'single' }), type: "file" }),
                            react_1.default.createElement(icons_1.EditOutlined, null)))),
                    react_1.default.createElement("div", { className: "user-profile-avatar-wrapper" },
                        react_1.default.createElement(common_1.ImageLoader, { alt: "Avatar", className: "user-profile-img", src: imageFile.avatar.url || profile.avatar }),
                        isFileLoading ? (react_1.default.createElement("div", { className: "loading-wrapper" },
                            react_1.default.createElement(icons_1.LoadingOutlined, null))) : (react_1.default.createElement("label", { className: "edit-button edit-avatar-button", htmlFor: "edit-avatar" },
                            react_1.default.createElement("input", { accept: "image/x-png,image/jpeg", disabled: isLoading, hidden: true, id: "edit-avatar", onChange: (e) => onFileChange(e, { name: 'avatar', type: 'single' }), type: "file" }),
                            react_1.default.createElement(icons_1.EditOutlined, null))))),
                react_1.default.createElement(ConfirmModal_1.default, { onConfirmUpdate: onConfirmUpdate, modal: modal })))))));
};
exports.default = EditProfile;


/***/ }),

/***/ 73566:
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
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-wrap-multilines */
const icons_1 = __webpack_require__(70930);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const productActions_1 = __webpack_require__(82972);
const ProductForm = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(__webpack_require__(6475))));
const AddProduct = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)('Add New Product | Salinaka');
    const isLoading = (0, react_redux_1.useSelector)((state) => state.app.loading);
    const dispatch = (0, react_redux_1.useDispatch)();
    const onSubmit = (product) => {
        dispatch((0, productActions_1.addProduct)(product));
    };
    return (react_1.default.createElement("div", { className: "product-form-container" },
        react_1.default.createElement("h2", null, t('addProductPage.title')),
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", { className: "loader", style: { minHeight: '80vh' } },
                react_1.default.createElement("h6", null, t('common.loading')),
                react_1.default.createElement("br", null),
                react_1.default.createElement(icons_1.LoadingOutlined, null)) },
            react_1.default.createElement(ProductForm, { isLoading: isLoading, onSubmit: onSubmit }))));
};
exports.default = (0, react_router_dom_1.withRouter)(AddProduct);


/***/ }),

/***/ 7167:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const Dashboard = () => {
    (0, hooks_1.useDocumentTitle)('Welcome | Admin Dashboard');
    (0, hooks_1.useScrollTop)();
    return (react_1.default.createElement("div", { className: "loader" },
        react_1.default.createElement("h2", null, "Welcome to admin dashboard")));
};
exports.default = Dashboard;


/***/ }),

/***/ 91712:
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
const icons_1 = __webpack_require__(70930);
const hooks_1 = __webpack_require__(92457);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const productActions_1 = __webpack_require__(82972);
const ProductForm = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(__webpack_require__(6475))));
const EditProduct = ({ match }) => {
    (0, hooks_1.useDocumentTitle)('Edit Product | Salinaka');
    (0, hooks_1.useScrollTop)();
    const { product, error, isLoading } = (0, hooks_1.useProduct)(match.params.id);
    const dispatch = (0, react_redux_1.useDispatch)();
    const onSubmitForm = (updates) => {
        dispatch((0, productActions_1.editProduct)(product.id, updates));
    };
    return (react_1.default.createElement("div", { className: "product-form-container" },
        error && react_1.default.createElement(react_router_dom_1.Redirect, { to: "/dashboard/products" }),
        react_1.default.createElement("h2", null, "Edit Product"),
        product && (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", { className: "loader", style: { minHeight: '80vh' } },
                react_1.default.createElement("h6", null, "Loading ... "),
                react_1.default.createElement("br", null),
                react_1.default.createElement(icons_1.LoadingOutlined, null)) },
            react_1.default.createElement(ProductForm, { isLoading: isLoading, onSubmit: onSubmitForm, product: product })))));
};
EditProduct.propTypes = {
    match: prop_types_1.default.shape({
        params: prop_types_1.default.shape({
            id: prop_types_1.default.string
        })
    }).isRequired
};
exports.default = (0, react_router_dom_1.withRouter)(EditProduct);


/***/ }),

/***/ 23742:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/forbid-prop-types */
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const components_1 = __webpack_require__(14510);
const Table = ({ filteredProducts }) => (react_1.default.createElement("div", null,
    filteredProducts.length > 0 && (react_1.default.createElement("div", { className: "grid grid-product grid-count-6" },
        react_1.default.createElement("div", { className: "grid-col" }),
        react_1.default.createElement("div", { className: "grid-col" },
            react_1.default.createElement("h5", null, "Name")),
        react_1.default.createElement("div", { className: "grid-col" },
            react_1.default.createElement("h5", null, "Price")),
        react_1.default.createElement("div", { className: "grid-col" },
            react_1.default.createElement("h5", null, "Date Added")))),
    filteredProducts.length === 0
        ? new Array(10).fill({}).map((product, index) => (react_1.default.createElement(components_1.ProductItem
        // eslint-disable-next-line react/no-array-index-key
        , { 
            // eslint-disable-next-line react/no-array-index-key
            key: `product-skeleton ${index}`, product: product })))
        : filteredProducts.map((product) => (react_1.default.createElement(components_1.ProductItem, { key: product.id, product: product })))));
Table.propTypes = {
    filteredProducts: prop_types_1.default.array.isRequired
};
exports.default = Table;


/***/ }),

/***/ 78226:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/jsx-props-no-spreading */
const common_1 = __webpack_require__(23211);
const product_1 = __webpack_require__(83281);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const selector_1 = __webpack_require__(53143);
const components_1 = __webpack_require__(14510);
const Table_1 = __importDefault(__webpack_require__(23742));
const Products = () => {
    (0, hooks_1.useDocumentTitle)('Product List | Salinaka Admin');
    (0, hooks_1.useScrollTop)();
    const store = (0, react_redux_1.useSelector)((state) => ({
        filteredProducts: (0, selector_1.selectFilter)(state.products.items, state.filter),
        requestStatus: state.app.requestStatus,
        isLoading: state.app.loading,
        products: state.products
    }));
    return (react_1.default.createElement(common_1.Boundary, null,
        react_1.default.createElement(components_1.ProductsNavbar, { productsCount: store.products.items.length, totalProductsCount: store.products.total }),
        react_1.default.createElement("div", { className: "product-admin-items" },
            react_1.default.createElement(product_1.ProductList, { ...store },
                react_1.default.createElement(product_1.AppliedFilters, { filter: store.filter }),
                react_1.default.createElement(Table_1.default, { filteredProducts: store.filteredProducts })))));
};
exports.default = (0, react_router_dom_1.withRouter)(Products);


/***/ }),

/***/ 6475:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
const icons_1 = __webpack_require__(70930);
const common_1 = __webpack_require__(23211);
const formik_1 = __webpack_require__(74263);
const formik_2 = __webpack_require__(94649);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const product_1 = __importDefault(__webpack_require__(86866));
const react_i18next_1 = __webpack_require__(86162);
const ProductForm = ({ product, onSubmit, isLoading }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const initFormikValues = {
        name: product?.name || '',
        price: product?.price || 0,
        description: product?.description || '',
        variants: product?.variants || [],
        isFeatured: product?.isFeatured || false,
        isRecommended: product?.isRecommended || false,
        gallery: product?.gallery || [],
        quantity: 0
    };
    const { imageFile, isFileLoading, onFileChange, removeImage } = (0, hooks_1.useFileHandler)({
        gallery: product?.gallery || []
    });
    const onSubmitForm = (form) => {
        if (initFormikValues.gallery.length !== 0 ||
            imageFile.gallery.length !== 0) {
            const vals = {
                ...form,
                name_lower: form.name.toLowerCase(),
                dateAdded: new Date().getTime(),
                gallery: imageFile.gallery
            };
            onSubmit(vals);
        }
        else {
            alert('Dodaj co najmniej jedno zdjęcie!');
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(formik_2.Formik, { initialValues: initFormikValues, validateOnChange: true, validationSchema: product_1.default, onSubmit: onSubmitForm }, ({ values, setValues }) => (react_1.default.createElement(formik_2.Form, { className: "product-form" },
            react_1.default.createElement("div", { className: "product-form-inputs" },
                react_1.default.createElement("div", { className: "product-form-field" },
                    react_1.default.createElement(formik_2.Field, { disabled: isLoading, name: "name", type: "text", label: `* ${t('addProductPage.form.productName')}`, component: formik_1.CustomInput })),
                react_1.default.createElement("div", { className: "product-form-field" },
                    react_1.default.createElement(formik_2.Field, { disabled: isLoading, name: "description", id: "description", rows: 3, label: `* ${t('addProductPage.form.description')}`, component: formik_1.CustomTextarea })),
                react_1.default.createElement("div", { className: "product-form-field" },
                    react_1.default.createElement(formik_2.Field, { disabled: isLoading, name: "price", id: "price", type: "number", label: `* ${t('addProductPage.form.price')}`, component: formik_1.CustomInput })),
                react_1.default.createElement("div", { className: "product-form-field" },
                    react_1.default.createElement(formik_1.CustomCreatableSelect, { defaultValue: values.variants.map((key) => ({
                            value: key,
                            label: key
                        })), name: "variants", iid: "variants", type: "text", isMulti: true, disabled: isLoading, placeholder: t('addProductPage.form.variants.placeholder'), label: `* ${t('addProductPage.form.variants.label')}` })),
                react_1.default.createElement("div", { className: "product-form-field" },
                    react_1.default.createElement("span", { className: "d-block padding-s" }, t('addProductPage.form.gallery.label')),
                    !isFileLoading && (react_1.default.createElement("label", { htmlFor: "product-input-file-collection" },
                        react_1.default.createElement("input", { disabled: isLoading, hidden: true, id: "product-input-file-collection", multiple: true, onChange: (e) => onFileChange(e, {
                                name: 'gallery',
                                type: 'multiple'
                            }), readOnly: isLoading, type: "file" }),
                        t('addProductPage.form.gallery.placeholder')))),
                react_1.default.createElement("div", { className: "product-form-collection" },
                    react_1.default.createElement(react_1.default.Fragment, null, imageFile.gallery.length >= 1 &&
                        imageFile.gallery.map((image) => (react_1.default.createElement("div", { className: "product-form-collection-image", key: image.id },
                            react_1.default.createElement(common_1.ImageLoader, { alt: "", src: image.url }),
                            react_1.default.createElement("button", { className: "product-form-delete-image", onClick: () => removeImage({
                                    id: image.id,
                                    name: 'gallery'
                                }), title: "Delete Image", type: "button" }, "XXX")))))),
                react_1.default.createElement("br", null),
                react_1.default.createElement("div", { className: "d-flex" },
                    react_1.default.createElement("div", { className: "product-form-field" },
                        react_1.default.createElement("input", { checked: values.isFeatured, id: "featured", onChange: (e) => setValues({ ...values, isFeatured: e.target.checked }), type: "checkbox" }),
                        react_1.default.createElement("label", { htmlFor: "featured" },
                            react_1.default.createElement("h5", { className: "d-flex-grow-1 margin-0" }, t('addProductPage.form.featured.label')))),
                    react_1.default.createElement("div", { className: "product-form-field" },
                        react_1.default.createElement("input", { checked: values.isRecommended, id: "recommended", onChange: (e) => setValues({
                                ...values,
                                isRecommended: e.target.checked
                            }), type: "checkbox" }),
                        react_1.default.createElement("label", { htmlFor: "recommended" },
                            react_1.default.createElement("h5", { className: "d-flex-grow-1 margin-0" }, t('addProductPage.form.recommended.label'))))),
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                react_1.default.createElement("div", { className: "product-form-field product-form-submit" },
                    react_1.default.createElement("button", { className: "button", disabled: isLoading, type: "submit" },
                        isLoading ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.CheckOutlined, null),
                        "\u00A0",
                        isLoading
                            ? 'Saving Product'
                            : t('addProductPage.actions.save')))))))));
};
exports.default = ProductForm;


/***/ }),

/***/ 18186:
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
const common_1 = __webpack_require__(23211);
const routes_1 = __webpack_require__(74897);
const utils_1 = __webpack_require__(10901);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const react_loading_skeleton_1 = __importStar(__webpack_require__(51655));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const productActions_1 = __webpack_require__(82972);
const ProductItem = ({ product }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const history = (0, react_router_dom_1.useHistory)();
    const productRef = (0, react_1.useRef)(null);
    const onClickEdit = () => {
        history.push(`${routes_1.EDIT_PRODUCT}/${product.id}`);
    };
    const onDeleteProduct = () => {
        productRef.current.classList.toggle('item-active');
    };
    const onConfirmDelete = () => {
        dispatch((0, productActions_1.removeProduct)(product.id));
        (0, utils_1.displayActionMessage)('Item successfully deleted');
        productRef.current.classList.remove('item-active');
    };
    const onCancelDelete = () => {
        productRef.current.classList.remove('item-active');
    };
    return (react_1.default.createElement(react_loading_skeleton_1.SkeletonTheme, { color: "#e1e1e1", highlightColor: "#f2f2f2" },
        react_1.default.createElement("div", { className: `item item-products ${!product.id && 'item-loading'}`, ref: productRef },
            react_1.default.createElement("div", { className: "grid grid-count-6" },
                react_1.default.createElement("div", { className: "grid-col item-img-wrapper" }, product.image ? (react_1.default.createElement(common_1.ImageLoader, { alt: product.name, className: "item-img", src: product.image })) : (react_1.default.createElement(react_loading_skeleton_1.default, { width: 50, height: 30 }))),
                react_1.default.createElement("div", { className: "grid-col" },
                    react_1.default.createElement("span", { className: "text-overflow-ellipsis" }, product.name || react_1.default.createElement(react_loading_skeleton_1.default, { width: 50 }))),
                react_1.default.createElement("div", { className: "grid-col" },
                    react_1.default.createElement("span", null, product.price ? ((0, utils_1.displayMoney)(product.price)) : (react_1.default.createElement(react_loading_skeleton_1.default, { width: 30 })))),
                react_1.default.createElement("div", { className: "grid-col" },
                    react_1.default.createElement("span", null, product.dateAdded ? ((0, utils_1.displayDate)(product.dateAdded)) : (react_1.default.createElement(react_loading_skeleton_1.default, { width: 30 }))))),
            product.id && (react_1.default.createElement("div", { className: "item-action" },
                react_1.default.createElement("button", { className: "button button-border button-small", onClick: onClickEdit, type: "button" }, "Edit"),
                "\u00A0",
                react_1.default.createElement("button", { className: "button button-border button-small button-danger", onClick: onDeleteProduct, type: "button" }, "Delete"),
                react_1.default.createElement("div", { className: "item-action-confirm" },
                    react_1.default.createElement("h5", null, "Are you sure you want to delete this?"),
                    react_1.default.createElement("button", { className: "button button-small button-border", onClick: onCancelDelete, type: "button" }, "No"),
                    "\u00A0",
                    react_1.default.createElement("button", { className: "button button-small button-danger", onClick: onConfirmDelete, type: "button" }, "Yes")))))));
};
ProductItem.propTypes = {
    product: prop_types_1.default.shape({
        id: prop_types_1.default.string,
        name: prop_types_1.default.string,
        brand: prop_types_1.default.string,
        price: prop_types_1.default.number,
        maxQuantity: prop_types_1.default.number,
        description: prop_types_1.default.string,
        keywords: prop_types_1.default.arrayOf(prop_types_1.default.string),
        imageCollection: prop_types_1.default.arrayOf(prop_types_1.default.object),
        sizes: prop_types_1.default.arrayOf(prop_types_1.default.string),
        image: prop_types_1.default.string,
        imageUrl: prop_types_1.default.string,
        isFeatured: prop_types_1.default.bool,
        isRecommended: prop_types_1.default.bool,
        dateAdded: prop_types_1.default.number,
        availableColors: prop_types_1.default.arrayOf(prop_types_1.default.string)
    }).isRequired
};
exports.default = (0, react_router_dom_1.withRouter)(ProductItem);


/***/ }),

/***/ 99963:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(70930);
const common_1 = __webpack_require__(23211);
const routes_1 = __webpack_require__(74897);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const ProductsNavbar = (props) => {
    const { productsCount, totalProductsCount } = props;
    const history = (0, react_router_dom_1.useHistory)();
    return (react_1.default.createElement("div", { className: "product-admin-header" },
        react_1.default.createElement("h3", { className: "product-admin-header-title" },
            "Products \u00A0 (",
            `${productsCount} / ${totalProductsCount}`,
            ")"),
        react_1.default.createElement(common_1.SearchBar, null),
        "\u00A0",
        react_1.default.createElement(common_1.FiltersToggle, null,
            react_1.default.createElement("button", { className: "button-muted button-small", type: "button" },
                react_1.default.createElement(icons_1.FilterOutlined, null),
                "\u00A0More Filters")),
        react_1.default.createElement("button", { className: "button button-small", onClick: () => history.push(routes_1.ADD_PRODUCT), type: "button" },
            react_1.default.createElement(icons_1.PlusOutlined, null),
            "\u00A0 Add New Product")));
};
ProductsNavbar.propTypes = {
    productsCount: prop_types_1.default.number.isRequired,
    totalProductsCount: prop_types_1.default.number.isRequired
};
exports.default = ProductsNavbar;


/***/ }),

/***/ 14510:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsNavbar = exports.ProductItem = exports.ProductForm = void 0;
var ProductForm_1 = __webpack_require__(6475);
Object.defineProperty(exports, "ProductForm", ({ enumerable: true, get: function () { return __importDefault(ProductForm_1).default; } }));
var ProductItem_1 = __webpack_require__(18186);
Object.defineProperty(exports, "ProductItem", ({ enumerable: true, get: function () { return __importDefault(ProductItem_1).default; } }));
var ProductsNavbar_1 = __webpack_require__(99963);
Object.defineProperty(exports, "ProductsNavbar", ({ enumerable: true, get: function () { return __importDefault(ProductsNavbar_1).default; } }));


/***/ }),

/***/ 59024:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Button_1 = __importDefault(__webpack_require__(11790));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const routes_1 = __webpack_require__(74897);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const icons_1 = __webpack_require__(70930);
const react_redux_1 = __webpack_require__(14494);
const Checkout_1 = __importDefault(__webpack_require__(80772));
const Wrapper_1 = __importDefault(__webpack_require__(91747));
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

/***/ 59317:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const BasketItem_1 = __importDefault(__webpack_require__(16820));
const Actions_1 = __importDefault(__webpack_require__(23247));
const WithCheckout_1 = __importDefault(__webpack_require__(96802));
const StepTracker_1 = __importDefault(__webpack_require__(91293));
const ShippingTotal_1 = __importDefault(__webpack_require__(46191));
const Checkout_1 = __importDefault(__webpack_require__(80772));
const Wrapper_1 = __importDefault(__webpack_require__(91747));
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

/***/ 3294:
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
const formik_1 = __webpack_require__(74263);
const formik_2 = __webpack_require__(94649);
const getRequiredOrNot_1 = __importDefault(__webpack_require__(14934));
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

/***/ 96634:
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
const common_1 = __webpack_require__(23211);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const routes_1 = __webpack_require__(74897);
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const formik_1 = __webpack_require__(94649);
const Actions_1 = __importDefault(__webpack_require__(23247));
const WithCheckout_1 = __importDefault(__webpack_require__(96802));
const StepTracker_1 = __importDefault(__webpack_require__(91293));
const Checkout_1 = __importDefault(__webpack_require__(80772));
const Wrapper_1 = __importDefault(__webpack_require__(91747));
const Form_1 = __importDefault(__webpack_require__(3294));
const useFormSubmit_1 = __importDefault(__webpack_require__(48962));
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

/***/ 48962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const routes_1 = __webpack_require__(74897);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const contactDetailsActions_1 = __webpack_require__(89409);
const customerTypeActions_1 = __webpack_require__(48554);
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

/***/ 95219:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DELIVERY_METHODS = void 0;
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const react_1 = __importDefault(__webpack_require__(67294));
const formik_1 = __webpack_require__(94649);
const react_i18next_1 = __webpack_require__(86162);
const utils_1 = __webpack_require__(10901);
const CheckboxField_1 = __importDefault(__webpack_require__(37054));
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

/***/ 67613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formSchema = void 0;
/* eslint-disable no-undef */
const routes_1 = __webpack_require__(74897);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const preferredDeliveryActions_1 = __webpack_require__(48376);
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

/***/ 79770:
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
const common_1 = __webpack_require__(23211);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const formik_1 = __webpack_require__(94649);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const routes_1 = __webpack_require__(74897);
const Actions_1 = __importDefault(__webpack_require__(23247));
const WithCheckout_1 = __importDefault(__webpack_require__(96802));
const StepTracker_1 = __importDefault(__webpack_require__(91293));
const Checkout_1 = __importDefault(__webpack_require__(80772));
const Wrapper_1 = __importDefault(__webpack_require__(91747));
const ShippingTotal_1 = __importDefault(__webpack_require__(46191));
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
const form_1 = __importStar(__webpack_require__(67613));
const OrderDetails_1 = __importStar(__webpack_require__(95219));
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

/***/ 53054:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DELIVERY_METHODS = void 0;
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
const formik_1 = __webpack_require__(74263);
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

/***/ 16596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formSchema = void 0;
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
const routes_1 = __webpack_require__(74897);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const shippingActions_1 = __webpack_require__(75174);
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

/***/ 29343:
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
const common_1 = __webpack_require__(23211);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const formik_1 = __webpack_require__(94649);
const WithCheckout_1 = __importDefault(__webpack_require__(96802));
const StepTracker_1 = __importDefault(__webpack_require__(91293));
const Checkout_1 = __importDefault(__webpack_require__(80772));
const Wrapper_1 = __importDefault(__webpack_require__(91747));
const ShippingTotal_1 = __importDefault(__webpack_require__(46191));
const form_1 = __importStar(__webpack_require__(16596));
const OrderDetails_1 = __importDefault(__webpack_require__(53054));
const Actions_1 = __importDefault(__webpack_require__(23247));
const OrderDetails_2 = __webpack_require__(95219);
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

/***/ 29465:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const react_1 = __importDefault(__webpack_require__(67294));
const formik_1 = __webpack_require__(94649);
const react_i18next_1 = __webpack_require__(86162);
const CheckboxField_1 = __importDefault(__webpack_require__(37054));
const paymentMethods_1 = __importDefault(__webpack_require__(4264));
const OrderDetails = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(Flexbox_1.default, { margin: "0 1.2rem", flexDirection: "column", className: "checkout-fieldset" }, paymentMethods_1.default.map((method, index) => (react_1.default.createElement(formik_1.Field, { name: "paymentType", key: method }, (props) => (react_1.default.createElement(CheckboxField_1.default, { ...props, id: method, isFirst: index === 0, title: t(`checkoutPage.step4.form.paymentType.${method}.title`), subtitle: t(`checkoutPage.step4.form.paymentType.${method}.subtitle`), fieldLabel: t('checkoutPage.step4.form.paymentType.label') })))))))));
};
exports.default = OrderDetails;


/***/ }),

/***/ 8697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formSchema = void 0;
const routes_1 = __webpack_require__(74897);
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const checkoutActions_1 = __webpack_require__(38109);
const prefferedPaymentActions_1 = __webpack_require__(66063);
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

/***/ 73954:
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
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const WithCheckout_1 = __importDefault(__webpack_require__(96802));
const StepTracker_1 = __importDefault(__webpack_require__(91293));
const form_1 = __importStar(__webpack_require__(8697));
const Actions_1 = __importDefault(__webpack_require__(23247));
const ShippingTotal_1 = __importDefault(__webpack_require__(46191));
const Checkout_1 = __importDefault(__webpack_require__(80772));
const Wrapper_1 = __importDefault(__webpack_require__(91747));
const react_i18next_1 = __webpack_require__(86162);
const OrderDetails_1 = __importDefault(__webpack_require__(29465));
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

/***/ 23247:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(70930);
const Box_1 = __importDefault(__webpack_require__(31285));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const routes_1 = __webpack_require__(74897);
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

/***/ 80772:
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

/***/ 46191:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const utils_1 = __webpack_require__(10901);
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

/***/ 91293:
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

/***/ 96802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const routes_1 = __webpack_require__(74897);
const utils_1 = __webpack_require__(10901);
const react_1 = __importDefault(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const react_router_dom_1 = __webpack_require__(77856);
const OrderDetails_1 = __webpack_require__(95219);
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

/***/ 91747:
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

/***/ 81703:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(92457);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importDefault(__webpack_require__(67294));
const PageNotFound = ({ history }) => {
    (0, hooks_1.useScrollTop)();
    return (react_1.default.createElement("div", { className: "page-not-found" },
        react_1.default.createElement("h1", null, ":( Page you are looking for doesn't exists."),
        react_1.default.createElement("br", null),
        react_1.default.createElement("button", { className: "button", onClick: history.goBack, type: "button" }, "Go back")));
};
PageNotFound.propTypes = {
    history: prop_types_1.default.shape({
        goBack: prop_types_1.default.func
    }).isRequired
};
exports.default = PageNotFound;


/***/ }),

/***/ 84473:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(92457);
const banner_guy_png_1 = __importDefault(__webpack_require__(87958));
const react_1 = __importDefault(__webpack_require__(67294));
const Banner_1 = __importDefault(__webpack_require__(86102));
const Page_1 = __importDefault(__webpack_require__(81592));
const Display_1 = __importDefault(__webpack_require__(43979));
const react_i18next_1 = __webpack_require__(86162);
const FeaturedProducts = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useDocumentTitle)('Featured Products | Salinaka');
    (0, hooks_1.useScrollTop)();
    const { featuredProducts, fetchFeaturedProducts, isLoading, error } = (0, hooks_1.useFeaturedProducts)();
    return (react_1.default.createElement(Page_1.default, null,
        react_1.default.createElement(Banner_1.default, { title: react_1.default.createElement("h1", null, t('featuredPage.banner.title')), img: banner_guy_png_1.default }),
        react_1.default.createElement(Display_1.default, { full: true, error: error, isLoading: isLoading, fetchProducts: fetchFeaturedProducts, products: featuredProducts })));
};
exports.default = FeaturedProducts;


/***/ }),

/***/ 41174:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageNotFound = exports.Shop = exports.ViewProduct = exports.Search = exports.RecommendedProducts = exports.Home = exports.FeaturedProducts = exports.CheckoutResult = exports.CheckoutStep4 = exports.CheckoutStep3a = exports.CheckoutStep3 = exports.CheckoutStep2 = exports.CheckoutStep1 = exports.SignUp = exports.SignIn = exports.ForgotPassword = exports.Products = exports.EditProduct = exports.Dashboard = exports.AddProduct = exports.UserAccount = exports.EditAccount = void 0;
var edit_account_1 = __webpack_require__(45043);
Object.defineProperty(exports, "EditAccount", ({ enumerable: true, get: function () { return __importDefault(edit_account_1).default; } }));
var UserAccount_1 = __webpack_require__(54295);
Object.defineProperty(exports, "UserAccount", ({ enumerable: true, get: function () { return __importDefault(UserAccount_1).default; } }));
var AddProduct_1 = __webpack_require__(73566);
Object.defineProperty(exports, "AddProduct", ({ enumerable: true, get: function () { return __importDefault(AddProduct_1).default; } }));
var Dashboard_1 = __webpack_require__(7167);
Object.defineProperty(exports, "Dashboard", ({ enumerable: true, get: function () { return __importDefault(Dashboard_1).default; } }));
var EditProduct_1 = __webpack_require__(91712);
Object.defineProperty(exports, "EditProduct", ({ enumerable: true, get: function () { return __importDefault(EditProduct_1).default; } }));
var Products_1 = __webpack_require__(78226);
Object.defineProperty(exports, "Products", ({ enumerable: true, get: function () { return __importDefault(Products_1).default; } }));
var ForgotPassword_1 = __webpack_require__(24904);
Object.defineProperty(exports, "ForgotPassword", ({ enumerable: true, get: function () { return __importDefault(ForgotPassword_1).default; } }));
var Signin_1 = __webpack_require__(50666);
Object.defineProperty(exports, "SignIn", ({ enumerable: true, get: function () { return __importDefault(Signin_1).default; } }));
var Signup_1 = __webpack_require__(29216);
Object.defineProperty(exports, "SignUp", ({ enumerable: true, get: function () { return __importDefault(Signup_1).default; } }));
var Step1_1 = __webpack_require__(59317);
Object.defineProperty(exports, "CheckoutStep1", ({ enumerable: true, get: function () { return __importDefault(Step1_1).default; } }));
var Step2_1 = __webpack_require__(96634);
Object.defineProperty(exports, "CheckoutStep2", ({ enumerable: true, get: function () { return __importDefault(Step2_1).default; } }));
var Step3_1 = __webpack_require__(79770);
Object.defineProperty(exports, "CheckoutStep3", ({ enumerable: true, get: function () { return __importDefault(Step3_1).default; } }));
var Step3a_1 = __webpack_require__(29343);
Object.defineProperty(exports, "CheckoutStep3a", ({ enumerable: true, get: function () { return __importDefault(Step3a_1).default; } }));
var Step4_1 = __webpack_require__(73954);
Object.defineProperty(exports, "CheckoutStep4", ({ enumerable: true, get: function () { return __importDefault(Step4_1).default; } }));
var Result_1 = __webpack_require__(59024);
Object.defineProperty(exports, "CheckoutResult", ({ enumerable: true, get: function () { return __importDefault(Result_1).default; } }));
var featured_1 = __webpack_require__(84473);
Object.defineProperty(exports, "FeaturedProducts", ({ enumerable: true, get: function () { return __importDefault(featured_1).default; } }));
var Home_1 = __webpack_require__(42942);
Object.defineProperty(exports, "Home", ({ enumerable: true, get: function () { return __importDefault(Home_1).default; } }));
var recommended_1 = __webpack_require__(26231);
Object.defineProperty(exports, "RecommendedProducts", ({ enumerable: true, get: function () { return __importDefault(recommended_1).default; } }));
var search_1 = __webpack_require__(40170);
Object.defineProperty(exports, "Search", ({ enumerable: true, get: function () { return __importDefault(search_1).default; } }));
var view_product_1 = __webpack_require__(90736);
Object.defineProperty(exports, "ViewProduct", ({ enumerable: true, get: function () { return __importDefault(view_product_1).default; } }));
var Shop_1 = __webpack_require__(30044);
Object.defineProperty(exports, "Shop", ({ enumerable: true, get: function () { return __importDefault(Shop_1).default; } }));
var PageNotFound_1 = __webpack_require__(81703);
Object.defineProperty(exports, "PageNotFound", ({ enumerable: true, get: function () { return __importDefault(PageNotFound_1).default; } }));


/***/ }),

/***/ 26231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const hooks_1 = __webpack_require__(92457);
const banner_girl_1_png_1 = __importDefault(__webpack_require__(26380));
const react_1 = __importDefault(__webpack_require__(67294));
const Banner_1 = __importDefault(__webpack_require__(86102));
const Display_1 = __importDefault(__webpack_require__(43979));
const Page_1 = __importDefault(__webpack_require__(81592));
const react_i18next_1 = __webpack_require__(86162);
const RecommendedProducts = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, hooks_1.useDocumentTitle)('Recommended Products | Salinaka');
    (0, hooks_1.useScrollTop)();
    const { recommendedProducts, fetchRecommendedProducts, isLoading, error } = (0, hooks_1.useRecommendedProducts)();
    return (react_1.default.createElement(Page_1.default, null,
        react_1.default.createElement(Banner_1.default, { title: react_1.default.createElement("h1", null, t('recommendedPage.banner.title')), img: banner_girl_1_png_1.default }),
        react_1.default.createElement(Display_1.default, { error: error, isLoading: isLoading, fetchProducts: fetchRecommendedProducts, products: recommendedProducts })));
};
exports.default = RecommendedProducts;


/***/ }),

/***/ 40170:
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
/* eslint-disable react/jsx-props-no-spreading */
const icons_1 = __webpack_require__(70930);
const common_1 = __webpack_require__(23211);
const hooks_1 = __webpack_require__(92457);
const prop_types_1 = __importDefault(__webpack_require__(45697));
const react_1 = __importStar(__webpack_require__(67294));
const react_redux_1 = __webpack_require__(14494);
const miscActions_1 = __webpack_require__(64009);
const productActions_1 = __webpack_require__(82972);
const Page_1 = __importDefault(__webpack_require__(81592));
const ProductsGrid_1 = __importDefault(__webpack_require__(1071));
const Search = ({ match }) => {
    const { searchKey } = match.params;
    const dispatch = (0, react_redux_1.useDispatch)();
    const didMount = (0, hooks_1.useDidMount)(true);
    const store = (0, react_redux_1.useSelector)((state) => ({
        isLoading: state.app.loading,
        products: state.products.searchedProducts.items,
        basket: state.basket,
        requestStatus: state.app.requestStatus
    }));
    (0, react_1.useEffect)(() => {
        if (didMount && !store.isLoading) {
            dispatch((0, productActions_1.searchProduct)(searchKey));
        }
    }, [searchKey]);
    (0, react_1.useEffect)(() => () => {
        dispatch((0, miscActions_1.setRequestStatus)(''));
    }, []);
    if (store.requestStatus && !store.isLoading) {
        return (react_1.default.createElement(Page_1.default, null,
            react_1.default.createElement(common_1.MessageDisplay, { message: store.requestStatus, desc: "Try using correct filters or keyword." })));
    }
    if (!store.requestStatus && !store.isLoading) {
        return (react_1.default.createElement(common_1.Boundary, null,
            react_1.default.createElement(Page_1.default, null,
                react_1.default.createElement("section", { className: "product-list-wrapper product-list-search" },
                    !store.requestStatus && (react_1.default.createElement("div", { className: "product-list-header" },
                        react_1.default.createElement("div", { className: "product-list-header-title" },
                            react_1.default.createElement("h5", null, `Found ${store.products.length} ${store.products.length > 1 ? 'products' : 'product'} with keyword ${searchKey}`)))),
                    react_1.default.createElement(ProductsGrid_1.default, { products: store.products })))));
    }
    return (react_1.default.createElement(Page_1.default, null,
        react_1.default.createElement("div", { className: "loader" },
            react_1.default.createElement("h4", null, "Searching Product..."),
            react_1.default.createElement("br", null),
            react_1.default.createElement(icons_1.LoadingOutlined, { style: { fontSize: '3rem' } }))));
};
Search.propTypes = {
    match: prop_types_1.default.shape({
        params: prop_types_1.default.shape({
            searchKey: prop_types_1.default.string
        })
    }).isRequired
};
exports.default = Search;


/***/ }),

/***/ 22986:
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
const react_i18next_1 = __webpack_require__(86162);
const utils_1 = __webpack_require__(10901);
const react_select_1 = __importDefault(__webpack_require__(78329));
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const Form = ({ product }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [variant, setVariant] = (0, react_1.useState)(null);
    const { addToBasket, isItemOnBasket } = (0, hooks_1.useBasket)();
    const onSelectedSizeChange = (newValue) => {
        setVariant(newValue.value);
    };
    const handleAddToBasket = () => {
        addToBasket({
            ...product,
            quantity: 1,
            variant
        });
    };
    const isInBasket = isItemOnBasket(product.id, variant);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        product.variants.length !== 0 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", null,
                react_1.default.createElement("span", { className: "text-subtle" }, t('productPage.optionLabel')),
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_select_1.default, { placeholder: "--Select Size--", onChange: onSelectedSizeChange, options: product.variants
                        .sort((a, b) => (a < b ? -1 : 1))
                        .map((option) => ({ label: option, value: option })), styles: {
                        menu: (provided) => ({ ...provided, zIndex: 10 })
                    } })))),
        react_1.default.createElement("h1", null, (0, utils_1.displayMoney)(product.price)),
        react_1.default.createElement("div", { className: "product-modal-action" },
            react_1.default.createElement("button", { className: `button button-small ${isInBasket ? 'button-border button-border-gray' : ''}`, onClick: handleAddToBasket, type: "button" }, isInBasket
                ? t('productPage.removeFromBasket')
                : t('productPage.addToBasket')))));
};
exports.default = Form;


/***/ }),

/***/ 90736:
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
const icons_1 = __webpack_require__(70930);
const common_1 = __webpack_require__(23211);
const routes_1 = __webpack_require__(74897);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const Display_1 = __importDefault(__webpack_require__(43979));
const Page_1 = __importDefault(__webpack_require__(81592));
const react_i18next_1 = __webpack_require__(86162);
const Box_1 = __importDefault(__webpack_require__(31285));
const styled_components_1 = __importDefault(__webpack_require__(29958));
const Flexbox_1 = __importDefault(__webpack_require__(73228));
const Square_1 = __importDefault(__webpack_require__(95204));
const Form_1 = __importDefault(__webpack_require__(22986));
const ViewProduct = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { id } = (0, react_router_dom_1.useParams)();
    const { product, isLoading, error } = (0, hooks_1.useProduct)(id);
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)(`View ${product?.name || 'Item'}`);
    const [selectedImage, setSelectedImage] = (0, react_1.useState)((product && product.gallery && product.gallery[0].url) || '');
    const { recommendedProducts, fetchRecommendedProducts, isLoading: isLoadingFeatured, error: errorFeatured } = (0, hooks_1.useRecommendedProducts)(6);
    (0, react_1.useEffect)(() => {
        setSelectedImage(product && product.gallery && product.gallery[0].url);
    }, [product]);
    return (react_1.default.createElement(Page_1.default, null,
        isLoading && (react_1.default.createElement("div", { className: "loader" },
            react_1.default.createElement("h4", null, "Loading Product..."),
            react_1.default.createElement("br", null),
            react_1.default.createElement(icons_1.LoadingOutlined, { style: { fontSize: '3rem' } }))),
        error && react_1.default.createElement(common_1.MessageDisplay, { message: error }),
        product && !isLoading && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.SHOP },
                react_1.default.createElement("h3", { className: "button-link d-inline-flex" },
                    react_1.default.createElement(Box_1.default, { marginRight: "0.5rem" },
                        react_1.default.createElement(icons_1.ArrowLeftOutlined, null)),
                    t('productPage.goBack'))),
            react_1.default.createElement(ProductModal, null,
                react_1.default.createElement(Flexbox_1.default, { flexDirection: "column", width: "40%", maxWidth: "500px" },
                    react_1.default.createElement(Square_1.default, null,
                        react_1.default.createElement(ImageWrapper, null,
                            react_1.default.createElement(common_1.ImageLoader, { alt: product.name, className: "product-modal-image", src: selectedImage }))),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("div", { className: "divider" }),
                    react_1.default.createElement("br", null),
                    product.gallery.length !== 0 && (react_1.default.createElement(Gallery, null, product.gallery.map((image) => (react_1.default.createElement(GalleryImageWrapper, { key: image.id, onClick: () => setSelectedImage(image.url), role: "presentation" },
                        react_1.default.createElement(GalleryImage, { src: image.url }))))))),
                react_1.default.createElement(Details, null,
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("span", { className: "text-subtle" }, product.brand),
                    react_1.default.createElement("h1", { className: "margin-top-0" }, product.name),
                    react_1.default.createElement("span", null, product.description),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("div", { className: "divider" }),
                    react_1.default.createElement(Form_1.default, { product: product }))),
            react_1.default.createElement(Display_1.default, { marginTop: "10rem", title: t('productPage.recommended.title'), error: errorFeatured, isLoading: isLoadingFeatured, fetchProducts: fetchRecommendedProducts, products: recommendedProducts })))));
};
const ProductModal = styled_components_1.default.div `
  padding: 30px;
  width: 100%;
  display: flex;
  background: #fff;
  border: 1px solid #e1e1e1;

  /* @include tablet {
    flex-direction: column;
    margin: 0;
  } */

  & * {
    /* border: 1px solid red; */
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
const GalleryImage = (0, styled_components_1.default)(common_1.ImageLoader) `
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Details = styled_components_1.default.div `
  margin-left: 3rem;
  flex-grow: 1;

  /* @include tablet {
    width: 100%;
    padding: ${(props) => props.theme.space['m-size']};
    padding-bottom: ${(props) => props.theme.space['l-size']};
    order: 3;
  } */
`;
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
exports.default = ViewProduct;


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
//# sourceMappingURL=main.fd10edb98a3c784d8a98.js.map