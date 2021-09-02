/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 10593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/logo.059e10fa5fedbfb65165e7565ed3936f.png");

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

/***/ 34971:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const firestore_1 = __webpack_require__(84956);
const addOrder = (payload) => {
    const firestore = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.collection)(firestore, 'orders');
    const order = {
        ...payload,
        created: new Date()
    };
    const response = (0, firestore_1.addDoc)(ref, order);
    return response;
};
exports.default = addOrder;


/***/ }),

/***/ 54614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const firestore_1 = __webpack_require__(84956);
const models_1 = __webpack_require__(75357);
const utils_1 = __webpack_require__(49502);
const getProduct = async (payload) => {
    const firestore = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.doc)(firestore, 'products', payload.id);
    const response = await (0, firestore_1.getDoc)(ref);
    const parsedResponse = (0, utils_1.parseApiResponse)(models_1.product, response);
    return parsedResponse;
};
exports.default = getProduct;


/***/ }),

/***/ 78487:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const firestore_1 = __webpack_require__(84956);
const models_1 = __webpack_require__(75357);
const utils_1 = __webpack_require__(49502);
const getProducts = async () => {
    const db = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.collection)(db, 'products');
    const snapshot = await (0, firestore_1.getDocs)(ref);
    const products = (0, utils_1.getCollection)(snapshot, models_1.product);
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
exports.addOrder = exports.getProduct = exports.getProducts = void 0;
var getProducts_1 = __webpack_require__(78487);
Object.defineProperty(exports, "getProducts", ({ enumerable: true, get: function () { return __importDefault(getProducts_1).default; } }));
var getProduct_1 = __webpack_require__(54614);
Object.defineProperty(exports, "getProduct", ({ enumerable: true, get: function () { return __importDefault(getProduct_1).default; } }));
var addOrder_1 = __webpack_require__(34971);
Object.defineProperty(exports, "addOrder", ({ enumerable: true, get: function () { return __importDefault(addOrder_1).default; } }));


/***/ }),

/***/ 3405:
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
/* eslint-disable no-unused-expressions */
const icons_1 = __webpack_require__(4747);
const common_1 = __webpack_require__(60886);
const components_1 = __webpack_require__(26789);
const react_1 = __importStar(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const react_router_dom_1 = __webpack_require__(77856);
const BasketProvider_1 = __webpack_require__(81400);
const react_query_1 = __webpack_require__(88767);
const api_1 = __webpack_require__(72934);
const QueryLoader_1 = __importDefault(__webpack_require__(83253));
const utils_1 = __webpack_require__(49502);
const routes_1 = __webpack_require__(74897);
const BasketToggleProvider_1 = __webpack_require__(38823);
const CheckoutProvider_1 = __webpack_require__(50542);
const lodash_add_1 = __importDefault(__webpack_require__(24427));
const lodash_subtract_1 = __importDefault(__webpack_require__(81057));
const SimpleButton_1 = __importDefault(__webpack_require__(60212));
const BasketItem = ({ product: basketProduct }) => {
    const { setBasket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { closeBasket } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    const { setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { id, variant, quantity } = basketProduct;
    const productQuery = (0, react_query_1.useQuery)(`product/${id}`, () => (0, api_1.getProduct)({ id }));
    const productPath = (0, react_router_dom_1.generatePath)(routes_1.VIEW_PRODUCT, { id });
    const addQuantity = () => {
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
        setCheckout((checkoutPrev) => ({
            ...checkoutPrev,
            total: {
                ...checkoutPrev.total,
                products: (0, lodash_add_1.default)(checkoutPrev.total.products, basketProduct.price),
                sum: (0, lodash_add_1.default)(checkoutPrev.total.sum, basketProduct.price)
            }
        }));
    };
    const subtractQuantity = () => {
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
        setCheckout((checkoutPrev) => ({
            ...checkoutPrev,
            total: {
                ...checkoutPrev.total,
                products: (0, lodash_subtract_1.default)(checkoutPrev.total.products, basketProduct.price),
                sum: (0, lodash_subtract_1.default)(checkoutPrev.total.sum, basketProduct.price)
            }
        }));
    };
    const onRemoveFromBasket = () => {
        setBasket((prev) => {
            const productInBasket = findBasketItem(prev, basketProduct).product;
            return prev.filter((elem) => elem !== productInBasket);
        });
        setCheckout((checkoutPrev) => {
            const allProductsPrice = basketProduct.price * basketProduct.quantity;
            return {
                ...checkoutPrev,
                total: {
                    ...checkoutPrev.total,
                    products: (0, lodash_subtract_1.default)(checkoutPrev.total.products, allProductsPrice),
                    sum: (0, lodash_subtract_1.default)(checkoutPrev.total.sum, allProductsPrice)
                }
            };
        });
    };
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(QueryLoader_1.default, { query: productQuery }, (product) => {
            const variantName = product.variants?.find((elem) => elem.value === variant)?.label;
            const thumbnail = product.gallery.find((image) => image.variant === variant)?.url ||
                product.gallery[0].url;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(SimpleButton_1.default, { disabled: quantity === 1, gridArea: "button-minus", onClick: subtractQuantity },
                    react_1.default.createElement(icons_1.MinusOutlined, { style: { fontSize: '9px' } })),
                react_1.default.createElement(SimpleButton_1.default, { gridArea: "button-plus", onClick: addQuantity },
                    react_1.default.createElement(icons_1.PlusOutlined, { style: { fontSize: '9px' } })),
                react_1.default.createElement(components_1.Box, { width: "2rem", height: "2rem", gridArea: "quantity" },
                    react_1.default.createElement(components_1.Badge, { stanalone: true, count: quantity })),
                react_1.default.createElement(components_1.Box, { gridArea: "picture", position: "relative", width: "9rem", height: "9rem" },
                    react_1.default.createElement(common_1.ImageLoader, { alt: product.name, className: "basket-item-img", src: thumbnail })),
                react_1.default.createElement(components_1.Flexbox, { flexDirection: "column", gridArea: "name" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: productPath, onClick: closeBasket }, product.name),
                    variantName && (react_1.default.createElement(components_1.Box, { as: "span", marginTop: "0.5rem", className: "spec-title" }, variantName))),
                react_1.default.createElement(components_1.Flexbox, { alignItems: "center" },
                    react_1.default.createElement("h4", { className: "my-0" }, (0, utils_1.displayMoney)(product.price))),
                react_1.default.createElement(SimpleButton_1.default, { gridArea: "button-remove", onClick: onRemoveFromBasket },
                    react_1.default.createElement(icons_1.CloseOutlined, null))));
        })));
};
const findBasketItem = (basket, product) => {
    const index = basket.findIndex((elem) => {
        if (product.variant) {
            return elem.id === product.id && elem.variant === product.variant;
        }
        return elem.id === product.id;
    });
    return {
        product: basket[index],
        index
    };
};
const Container = styled_components_1.default.div `
  height: 100px;
  display: flex;
  align-items: center;
  /* @include bezier-transition(); */
  /* animation: slide-up 0.5s ease; */

  /* max-width: 60rem; */
  width: 100%;

  display: grid;
  grid-template-columns: 3.5rem 2rem 9rem auto 3.5rem;
  grid-gap: 0.5rem 2rem;
  grid-template-areas:
    'button-plus quantity picture name button-remove'
    'button-minus quantity picture alba button-remove';
`;
exports.default = BasketItem;


/***/ }),

/***/ 83601:
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
exports.getProductTotal = void 0;
/* eslint-disable no-use-before-define */
/* eslint-disable operator-linebreak */
const api_1 = __webpack_require__(72934);
const components_1 = __webpack_require__(26789);
const utils_1 = __webpack_require__(49502);
const BasketProvider_1 = __webpack_require__(81400);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_query_1 = __webpack_require__(88767);
const react_router_dom_1 = __webpack_require__(77856);
const BasketToggleProvider_1 = __webpack_require__(38823);
const routes_1 = __webpack_require__(74897);
const Checkout = () => {
    const { t } = (0, react_i18next_1.useTranslation)('common');
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const history = (0, react_router_dom_1.useHistory)();
    const { basket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const productsQuery = (0, react_query_1.useQuery)('productsQuery', () => (0, api_1.getProducts)());
    const { closeBasket } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    return (react_1.default.createElement(components_1.QueryLoader, { query: productsQuery }, (products) => {
        const total = (0, utils_1.calculateTotal)(basket.map((product) => (0, exports.getProductTotal)(products, product)));
        return (react_1.default.createElement(components_1.Flexbox, { background: "white", padding: "m-size", alignItems: "center", width: "100%" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("p", { className: "basket-total-title" }, t('basket.total')),
                react_1.default.createElement("h2", { className: "basket-total-amount" }, (0, utils_1.displayMoney)(total))),
            react_1.default.createElement(components_1.Button, { variant: "secondary", marginLeft: "auto", onClick: () => {
                    closeBasket();
                    history.push(routes_1.PRODUCTS);
                } }, t('basket.backToShop')),
            react_1.default.createElement(components_1.Button, { marginLeft: "10px", onClick: () => {
                    closeBasket();
                    history.push(routes_1.CHECKOUT_PRODUCTS);
                }, disabled: !basketLength || pathname === '/checkout' }, t('basket.checkout'))));
    }));
};
const getProductTotal = (products, basketItem) => {
    const price = products.find((elem) => elem.id === basketItem.id)?.price || 0;
    return price * basketItem.quantity;
};
exports.getProductTotal = getProductTotal;
exports.default = Checkout;


/***/ }),

/***/ 8558:
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
/* eslint-disable react/jsx-one-expression-per-line */
const react_1 = __importStar(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const react_i18next_1 = __webpack_require__(86162);
const BasketProvider_1 = __webpack_require__(81400);
const BasketToggleProvider_1 = __webpack_require__(38823);
const Header = () => {
    const { t } = (0, react_i18next_1.useTranslation)('common');
    const { closeBasket } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    const { clearBasket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    let countName = 'basket.products';
    if (basketLength > 4) {
        countName = 'basket.products_multiple';
    }
    else if (basketLength > 1) {
        countName = 'basket.products_plural';
    }
    return (react_1.default.createElement(components_1.Flexbox, { padding: "m-size", width: "100%", backgroundColor: "white", 
        // @ts-ignore
        zIndex: "basket", alignItems: "center" },
        react_1.default.createElement(components_1.Box, { as: "h3", flexGrow: 1 },
            t('basket.title'),
            !!basketLength && react_1.default.createElement("span", null, t(countName, { count: basketLength }))),
        !!basketLength && (react_1.default.createElement(components_1.Box, { marginRight: "1rem" },
            react_1.default.createElement("button", { className: "basket-clear button button-border button-border-gray button-small", disabled: basketLength === 0, onClick: clearBasket, type: "button" },
                react_1.default.createElement("span", null, t('basket.clear'))))),
        react_1.default.createElement("span", { className: "basket-toggle button button-border button-border-gray button-small", onClick: closeBasket, role: "presentation" }, t('basket.close'))));
};
exports.default = Header;


/***/ }),

/***/ 60212:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const SimpleButton = ({ disabled, onClick, children, ...props }) => (react_1.default.createElement(components_1.Box, { width: "3rem", height: "3rem", ...props },
    react_1.default.createElement("button", { className: "button button-border button-border-gray button-small basket-control basket-control-add", disabled: disabled, onClick: onClick, type: "button" }, children)));
exports.default = SimpleButton;


/***/ }),

/***/ 18287:
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
exports.getBasketProductKey = void 0;
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
const react_1 = __importStar(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const BasketProvider_1 = __webpack_require__(81400);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const BasketToggleProvider_1 = __webpack_require__(38823);
const react_i18next_1 = __webpack_require__(86162);
const Header_1 = __importDefault(__webpack_require__(8558));
const Checkout_1 = __importDefault(__webpack_require__(83601));
const BasketItem_1 = __importDefault(__webpack_require__(3405));
const Basket = () => {
    const { t } = (0, react_i18next_1.useTranslation)('common');
    const { isOpen } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    const { basket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    return (react_1.default.createElement(Container, { isOpen: isOpen },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(components_1.Flexbox, { flexGrow: 1, flexDirection: "column", overflowY: "auto", padding: "s-size" },
            !basketLength && (react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center", flexGrow: 1 },
                react_1.default.createElement("h5", { className: "basket-empty-msg" }, t('basket.empty')))),
            basket.map((product, index) => (react_1.default.createElement(react_1.Fragment, { key: (0, exports.getBasketProductKey)(product) },
                react_1.default.createElement(BasketItem_1.default, { product: product }),
                basketLength - 1 !== index && react_1.default.createElement(components_1.Separator, null))))),
        react_1.default.createElement(Checkout_1.default, null)));
};
const Container = styled_components_1.default.div `
  width: 60rem;
  height: 100vh;
  background: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 0;
  /* transform: translateX(100%); */
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  z-index: ${(props) => props.theme.zIndices.basket};
`;
const getBasketProductKey = (product) => `${product.id}${product.variant ? `_${product.variant}` : ''}`;
exports.getBasketProductKey = getBasketProductKey;
exports.default = Basket;


/***/ }),

/***/ 82813:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const logo_png_1 = __importDefault(__webpack_require__(10593));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Footer = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const visibleOnlyPath = [];
    const matchRoute = (0, react_router_dom_1.matchPath)(pathname, {
        path: visibleOnlyPath,
        exact: true,
        strict: false
    });
    if (!matchRoute) {
        return null;
    }
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement("div", { className: "footer-col-1" }),
        react_1.default.createElement("div", { className: "footer-col-2" },
            react_1.default.createElement(Logo, { alt: "Footer logo", src: logo_png_1.default }),
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

/***/ 85960:
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
const BasketProvider_1 = __webpack_require__(81400);
const react_1 = __importStar(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const icons_1 = __webpack_require__(4747);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const components_1 = __webpack_require__(26789);
const BasketToggleProvider_1 = __webpack_require__(38823);
const routes_1 = __webpack_require__(74897);
const BasketToggle = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const { basket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { setIsOpen } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    return (react_1.default.createElement(Container, { className: "button-link navigation-menu-link basket-toggle", disabled: basketDisabledpathnames.includes(pathname), onClick: () => setIsOpen((prev) => !prev), type: "button" },
        react_1.default.createElement(components_1.Badge, { count: basket.length },
            react_1.default.createElement(icons_1.ShoppingOutlined, { style: { fontSize: '2.4rem' } }))));
};
const Container = styled_components_1.default.button ``;
const basketDisabledpathnames = [
    routes_1.CHECKOUT_PRODUCTS,
    routes_1.CHECKOUT_DETAILS,
    routes_1.CHECKOUT_DELIVERY,
    routes_1.CHECKOUT_SHIPPING,
    routes_1.CHECKOUT_PAYMENT,
    routes_1.CHECKOUT_RESULT
];
exports.default = BasketToggle;


/***/ }),

/***/ 65129:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const logo_png_1 = __importDefault(__webpack_require__(10593));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const components_1 = __webpack_require__(26789);
const Logo = () => (react_1.default.createElement(components_1.Flexbox, { alignItems: "center", marginRight: "2rem" },
    react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
        react_1.default.createElement(Image, { alt: "Logo", src: logo_png_1.default }))));
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
const styled_components_1 = __importDefault(__webpack_require__(91288));
const mainMenuLinks_1 = __importDefault(__webpack_require__(11736));
const MainMenu = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return (react_1.default.createElement(Container, null, mainMenuLinks_1.default.map(({ label, ...link }) => (react_1.default.createElement("li", { key: link.to },
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
const styled_components_1 = __importStar(__webpack_require__(91288));
const BasketToggle_1 = __importDefault(__webpack_require__(85960));
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
  background: ${(props) => props.theme.colors['nav-bg']};
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

/***/ 74453:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Tile_1 = __importDefault(__webpack_require__(77939));
const ProductsGrid = ({ products }) => (react_1.default.createElement(Container, null, products.map((product) => (react_1.default.createElement(Tile_1.default, { key: product.id, product: product })))));
const GRID_GAP = '3rem';
const Container = styled_components_1.default.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, 38rem);
  grid-gap: ${GRID_GAP};
`;
exports.default = ProductsGrid;


/***/ }),

/***/ 77939:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(60886);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const utils_1 = __webpack_require__(49502);
const routes_1 = __webpack_require__(74897);
const components_1 = __webpack_require__(26789);
const ProductTile = ({ product }) => {
    const history = (0, react_router_dom_1.useHistory)();
    const viewProductPath = (0, react_router_dom_1.generatePath)(routes_1.VIEW_PRODUCT, {
        id: product.id
    });
    return (react_1.default.createElement(Container, { onClick: () => history.push(viewProductPath), role: "presentation" },
        react_1.default.createElement(ImageWrapper, null,
            react_1.default.createElement(common_1.ImageLoader, { alt: "", className: "product-card-img", src: product.gallery[0].url })),
        react_1.default.createElement(components_1.Flexbox, { flexDirection: "column", padding: "m-size" },
            react_1.default.createElement(Name, null, product.name),
            react_1.default.createElement(Price, { className: "text-subtle text-italic" }, (0, utils_1.displayMoney)(product.price)))));
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
const Name = styled_components_1.default.h3 `
  margin: 0;
`;
const Price = styled_components_1.default.h4 `
  text-size-adjust: 0.8;
  margin: 1rem 0 0;
`;
exports.default = ProductTile;


/***/ }),

/***/ 27787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Grid_1 = __importDefault(__webpack_require__(74453));
const ProductsList = ({ query }) => (react_1.default.createElement(components_1.QueryLoader, { query: query }, (data) => react_1.default.createElement(Grid_1.default, { products: data })));
exports.default = ProductsList;


/***/ }),

/***/ 31802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsList = exports.Footer = exports.Basket = exports.Navigation = exports.Preloader = void 0;
var Preloader_1 = __webpack_require__(21142);
Object.defineProperty(exports, "Preloader", ({ enumerable: true, get: function () { return __importDefault(Preloader_1).default; } }));
var Navigation_1 = __webpack_require__(8771);
Object.defineProperty(exports, "Navigation", ({ enumerable: true, get: function () { return __importDefault(Navigation_1).default; } }));
var Basket_1 = __webpack_require__(18287);
Object.defineProperty(exports, "Basket", ({ enumerable: true, get: function () { return __importDefault(Basket_1).default; } }));
var Footer_1 = __webpack_require__(82813);
Object.defineProperty(exports, "Footer", ({ enumerable: true, get: function () { return __importDefault(Footer_1).default; } }));
var ProductsList_1 = __webpack_require__(27787);
Object.defineProperty(exports, "ProductsList", ({ enumerable: true, get: function () { return __importDefault(ProductsList_1).default; } }));


/***/ }),

/***/ 25706:
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
const styled_components_1 = __importDefault(__webpack_require__(91288));
const styled_system_1 = __webpack_require__(18005);
const styleProps = (0, styled_system_1.compose)(styled_system_1.layout, styled_system_1.space, styled_system_1.position, styled_system_1.flex, styled_system_1.grid, styled_system_1.border, styled_system_1.flexbox, styled_system_1.background);
const Box = styled_components_1.default.div `
  ${styleProps}
`;
exports.default = Box;


/***/ }),

/***/ 91362:
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
const styled_components_1 = __importStar(__webpack_require__(91288));
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

/***/ 26055:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const components_2 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const CheckboxField = ({ id, field: { value, onChange, onBlur, name }, meta: { touched, error }, isFirst, title, subtitle, val, fieldLabel }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isFirst && (react_1.default.createElement(components_2.Flexbox, { marginBottom: "0 !important", marginRight: "auto", justifyContent: "flex-start" }, touched && error ? (react_1.default.createElement("span", { className: "label-input label-error" }, error)) : (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        react_1.default.createElement("label", { className: "label-input", htmlFor: name }, fieldLabel)))),
        react_1.default.createElement("div", { className: "checkout-checkbox-field" },
            react_1.default.createElement("input", { name: name, id: id, type: "radio", value: id, checked: id === value, onChange: onChange, onBlur: onBlur }),
            react_1.default.createElement("label", { className: "d-flex w-100", htmlFor: id },
                react_1.default.createElement("h5", { className: "d-flex-grow-1 margin-0" },
                    title,
                    subtitle && (react_1.default.createElement(components_1.Box, { marginLeft: "0.5rem", as: "span", className: "text-subtle" }, subtitle))),
                val && react_1.default.createElement("h4", { className: "margin-0" }, val)))));
};
exports.default = CheckboxField;


/***/ }),

/***/ 16827:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Flexbox = (0, styled_components_1.default)(components_1.Box).attrs(() => ({
    display: 'flex'
})) ``;
exports.default = Flexbox;


/***/ }),

/***/ 65415:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Box_1 = __importDefault(__webpack_require__(84962));
const Page = ({ children }) => (react_1.default.createElement(Container, { as: "main" },
    react_1.default.createElement(Wrapper, null, children)));
const Container = (0, styled_components_1.default)(Box_1.default) `
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
  max-width: 120rem;
  width: 100%;
`;
exports.default = Page;


/***/ }),

/***/ 83253:
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

/***/ 89854:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Separator = (0, styled_components_1.default)(components_1.Box) `
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.color2};
  margin: 2rem 0;
`;
exports.default = Separator;


/***/ }),

/***/ 75681:
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
const components_1 = __webpack_require__(26789);
const react_1 = __importStar(__webpack_require__(67294));
const Square = ({ children, ratio = 1, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    const [height, setHeight] = (0, react_1.useState)(ref.current?.getBoundingClientRect().width);
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
    return (react_1.default.createElement(components_1.Box, { ref: ref, width: "100%", height: `${height}px`, ...props }, children));
};
exports.default = Square;


/***/ }),

/***/ 26789:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button = exports.CheckboxField = exports.Square = exports.Flexbox = exports.Separator = exports.Badge = exports.QueryLoader = exports.Box = exports.Page = void 0;
var Page_1 = __webpack_require__(65415);
Object.defineProperty(exports, "Page", ({ enumerable: true, get: function () { return __importDefault(Page_1).default; } }));
var Box_1 = __webpack_require__(84962);
Object.defineProperty(exports, "Box", ({ enumerable: true, get: function () { return __importDefault(Box_1).default; } }));
var QueryLoader_1 = __webpack_require__(83253);
Object.defineProperty(exports, "QueryLoader", ({ enumerable: true, get: function () { return __importDefault(QueryLoader_1).default; } }));
var Badge_1 = __webpack_require__(25706);
Object.defineProperty(exports, "Badge", ({ enumerable: true, get: function () { return __importDefault(Badge_1).default; } }));
var Separator_1 = __webpack_require__(89854);
Object.defineProperty(exports, "Separator", ({ enumerable: true, get: function () { return __importDefault(Separator_1).default; } }));
var Flexbox_1 = __webpack_require__(16827);
Object.defineProperty(exports, "Flexbox", ({ enumerable: true, get: function () { return __importDefault(Flexbox_1).default; } }));
var Square_1 = __webpack_require__(75681);
Object.defineProperty(exports, "Square", ({ enumerable: true, get: function () { return __importDefault(Square_1).default; } }));
var CheckboxField_1 = __webpack_require__(26055);
Object.defineProperty(exports, "CheckboxField", ({ enumerable: true, get: function () { return __importDefault(CheckboxField_1).default; } }));
var Button_1 = __webpack_require__(91362);
Object.defineProperty(exports, "Button", ({ enumerable: true, get: function () { return __importDefault(Button_1).default; } }));


/***/ }),

/***/ 74897:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CHECKOUT_RESULT = exports.CHECKOUT_PAYMENT = exports.CHECKOUT_SHIPPING = exports.CHECKOUT_DELIVERY = exports.CHECKOUT_DETAILS = exports.CHECKOUT_PRODUCTS = exports.VIEW_PRODUCT = exports.PRODUCTS = void 0;
exports.PRODUCTS = '/products';
exports.VIEW_PRODUCT = '/view_product/:id';
exports.CHECKOUT_PRODUCTS = '/checkout/products';
exports.CHECKOUT_DETAILS = '/checkout/details';
exports.CHECKOUT_DELIVERY = '/checkout/delivery';
exports.CHECKOUT_SHIPPING = '/checkout/shipping';
exports.CHECKOUT_PAYMENT = '/checkout/payment';
exports.CHECKOUT_RESULT = '/checkout/result';


/***/ }),

/***/ 92457:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTranslation = exports.useScrollTop = exports.useDocumentTitle = void 0;
var useDocumentTitle_1 = __webpack_require__(6999);
Object.defineProperty(exports, "useDocumentTitle", ({ enumerable: true, get: function () { return __importDefault(useDocumentTitle_1).default; } }));
var useScrollTop_1 = __webpack_require__(42383);
Object.defineProperty(exports, "useScrollTop", ({ enumerable: true, get: function () { return __importDefault(useScrollTop_1).default; } }));
var useTranslation_1 = __webpack_require__(74806);
Object.defineProperty(exports, "useTranslation", ({ enumerable: true, get: function () { return __importDefault(useTranslation_1).default; } }));


/***/ }),

/***/ 6999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(67294);
const react_i18next_1 = __webpack_require__(86162);
const useDocumentTitle = (title) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, react_1.useLayoutEffect)(() => {
        if (title) {
            document.title = title;
        }
        else {
            document.title = t('common.companyName');
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

/***/ 74806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_i18next_1 = __webpack_require__(86162);
const config_1 = __webpack_require__(6527);
function useTranslation(ns, options) {
    const { t, i18n, ready } = (0, react_i18next_1.useTranslation)(ns, options);
    // Wrapper to silence TS errors complaining about t not always returning a string.
    const translate = (key, tOptions) => t(key, tOptions).toString();
    const withBase = (base) => (key, tOptions) => t(`${base}${config_1.config.keySeparator}${key}`, tOptions);
    return {
        t: translate,
        withBase,
        i18n,
        ready
    };
}
exports.default = useTranslation;


/***/ }),

/***/ 6527:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
const i18next_1 = __importDefault(__webpack_require__(17581));
const pl_1 = __importDefault(__webpack_require__(57474));
exports.config = {
    lng: 'pl',
    keySeparator: '.',
    resources: {
        pl: {
            translation: pl_1.default,
            products: pl_1.default.products,
            viewProduct: pl_1.default.viewProduct,
            common: pl_1.default.common,
            checkout: pl_1.default.checkout,
            pageNotFound: pl_1.default.pageNotFound
        }
    }
};
i18next_1.default.init(exports.config);
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
        },
        companyName: 'braty.co - zapalniczki'
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
    checkout: {
        steps: {
            1: 'Podsumowanie',
            2: 'Dane kontaktowe',
            3: 'Dostawa',
            5: 'Płatność'
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
        checkoutProducts: {
            title: 'Podsumowanie',
            tabTitle: 'Podsumowanie koszyka | braty.co',
            desc: 'Sprawdź produkty w Twoim koszyku.',
            productsTotal: 'Cena produktów:',
            emptyState: 'Koszyk jest pusty. Dodaj produkty do koszyka i wróć tutaj później.'
        },
        checkoutDetails: {
            title: 'Dane kontaktowe',
            tabTitle: 'Dane kontaktowe | braty.co',
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
            },
            validations: {
                name: {
                    required: 'To pole jest wymagane'
                },
                company: {
                    required: 'To pole jest wymagane'
                },
                email: {
                    email: 'Wprowadzony email jest niepoprawny',
                    required: 'To pole jest wymagane'
                },
                mobile: {
                    min: 'Numer telefonu powinien składać się z 9 cyfr',
                    required: 'Numer telefonu jest wymagany'
                },
                street: {
                    required: 'Adres jest wymagany'
                },
                postCode: {
                    matches: 'Kod pocztowy powinien mieć format XX-XXX',
                    required: 'To pole jest wymagane'
                },
                city: {
                    required: 'To pole jest wymagane'
                },
                nip: {
                    required: 'To pole jest wymagane',
                    length: 'NIP powinien mieć 10 znaków',
                    matches: 'NIP powinien zawierać tylko cyfry'
                }
            }
        },
        checkoutDelivery: {
            title: 'Dostawa',
            tabTitle: 'Dostawa | braty.co',
            form: {
                delivery: {
                    label: 'Wybierz sposób dostawy',
                    FREE_PARCEL: 'Bezpłatna dostawa',
                    PICK_UP: 'Odbiór własny'
                }
            },
            validation: {
                deliveryType: {
                    oneOf: 'Wybierz aby przejść dalej.'
                }
            }
        },
        checkoutShipping: {
            title: 'Dane do dostawy',
            tabTitle: 'Dane do dostawy | braty.co',
            form: {
                street: {
                    label: 'Ulica',
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
            },
            validation: {
                street: {
                    required: 'To pole jest wymagane'
                },
                postCode: {
                    matches: 'Kod pocztowy powinien mieć format XX-XXX',
                    required: 'To pole jest wymagane'
                },
                city: {
                    required: 'To pole jest wymagane'
                }
            }
        },
        checkoutPayment: {
            title: 'Płatność',
            tabTitle: 'Płatność | braty.co',
            form: {
                paymentType: {
                    label: 'Wybierz sposób płatności',
                    TRANSFER: {
                        title: 'Przelew tradycyjny',
                        subtitle: 'W tym momencie oferujemy tylko ten sposób płatności'
                    }
                }
            },
            validation: {
                paymentType: {
                    oneOf: "'Wybierz, aby przejść dalej.'"
                }
            }
        },
        checkoutResult: {
            title: 'Zamówienie zostało złożone',
            tabTitle: 'Potwierdzenie zamówienia | braty.co',
            orderId: 'ID Twojego zamówienia to:',
            actions: {
                backToShop: 'Kontynuuj zakupy',
                orders: 'Przejdź do zamówień',
                confirmation: 'Zobacz zamówienie'
            }
        }
    },
    products: {
        tabTitle: 'Produkty | braty.co'
    },
    pageNotFound: {
        tabTitle: '404 | braty.co',
        title: ':( Strona, której szukasz, nie istnieje.',
        buttonLabel: 'Przejdź na stronę główną'
    },
    viewProduct: {
        tabTitle: '{{productName}} | braty.co',
        priceSubtitle: 'Cena za 50 sztuk - zawiera VAT',
        actions: {
            goBack: 'Wróć do sklepu',
            addToBasket: 'Dodaj do koszyka',
            removeFromBasket: 'Usuń z koszyka'
        },
        selectPlaceholder: 'Wybierz albo wyszukaj',
        recommended: {
            title: 'Rekomendowane'
        }
    }
};
exports.default = pl;


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
const providers_1 = __webpack_require__(2253);
const profileProvider_1 = __importDefault(__webpack_require__(25866));
const react_1 = __importStar(__webpack_require__(67294));
const react_dom_1 = __webpack_require__(73935);
__webpack_require__(72225);
const react_query_1 = __webpack_require__(88767);
__webpack_require__(44814);
const webfontloader_1 = __importDefault(__webpack_require__(75933));
const styled_components_1 = __webpack_require__(91288);
const theme_1 = __importDefault(__webpack_require__(6786));
const react_i18next_1 = __webpack_require__(86162);
const config_1 = __importDefault(__webpack_require__(6527));
const pages_1 = __webpack_require__(23107);
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
                react_1.default.createElement(providers_1.BasketProvider, null,
                    react_1.default.createElement(react_query_1.QueryClientProvider, { client: exports.queryClient },
                        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
                            react_1.default.createElement(react_i18next_1.I18nextProvider, { i18n: config_1.default },
                                react_1.default.createElement(providers_1.CheckoutProvider, null,
                                    react_1.default.createElement(providers_1.BasketToggleProvider, null,
                                        react_1.default.createElement(pages_1.App, null))))))))))), root);


/***/ }),

/***/ 89347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const basketItem = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    variant: (0, zod_1.string)().optional(),
    quantity: (0, zod_1.number)(),
    // This should be removed
    price: (0, zod_1.number)()
});
exports.default = basketItem;


/***/ }),

/***/ 75357:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.basketItem = exports.product = void 0;
var product_1 = __webpack_require__(86866);
Object.defineProperty(exports, "product", ({ enumerable: true, get: function () { return __importDefault(product_1).default; } }));
var basketItem_1 = __webpack_require__(89347);
Object.defineProperty(exports, "basketItem", ({ enumerable: true, get: function () { return __importDefault(basketItem_1).default; } }));


/***/ }),

/***/ 86866:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const galleryItem = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    url: (0, zod_1.string)(),
    variant: (0, zod_1.string)().optional()
});
const variant = (0, zod_1.object)({
    value: (0, zod_1.string)(),
    label: (0, zod_1.string)()
});
const product = (0, zod_1.object)({
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
exports.default = product;


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
const styled_components_1 = __importDefault(__webpack_require__(91288));
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
const react_modal_1 = __importDefault(__webpack_require__(12692));
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
var Footer_1 = __webpack_require__(82813);
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
const CustomMobileInput = ({ placeholder, fieldProps, defaultValue, label, disabled, name }) => {
    const [field, meta, helpers] = (0, formik_1.useField)(name);
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
exports.SIGNUP_CONFIRMATION = exports.SIGNUP = exports.VIEW_PRODUCT = exports.FORGOT_PASSWORD = exports.SIGNOUT = exports.SIGNIN = exports.SEARCH = exports.EDIT_PRODUCT = exports.ADD_PRODUCT = exports.ADMIN_USERS = exports.ADMIN_PRODUCTS = exports.ADMIN_DASHBOARD = exports.ACCOUNT_EDIT = exports.ACCOUNT = exports.RECOMMENDED_PRODUCTS = exports.FEATURED_PRODUCTS = exports.SHOP = exports.HOME = void 0;
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

/***/ 95420:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function changeColorAlpha(colorValue, alpha) {
    const parts = colorValue.match(/[\d.]+/g);
    if (!parts || (parts.length !== 3 && parts.length !== 4)) {
        throw new Error('Cannot change alpha channel, invalid color value');
    }
    parts[3] = alpha.toString();
    return `rgba(${parts.join()})`;
}
exports.default = changeColorAlpha;


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
const routes_1 = __webpack_require__(74897);
const commonComponents_1 = __webpack_require__(31802);
const pages_1 = __webpack_require__(23107);
exports.history = (0, history_1.createBrowserHistory)();
// const PageNotFound = lazy(() => import('views/PageNotFound'))
const AppRouter = () => (react_1.default.createElement(react_router_dom_1.Router, { history: exports.history },
    react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(commonComponents_1.Navigation, null),
        react_1.default.createElement(commonComponents_1.Basket, null),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.Products, exact: true, path: routes_1.PRODUCTS }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.ViewProduct, path: routes_1.VIEW_PRODUCT }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.CheckoutProducts, path: routes_1.CHECKOUT_PRODUCTS }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.CheckoutDetails, path: routes_1.CHECKOUT_DETAILS }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.CheckoutDelivery, path: routes_1.CHECKOUT_DELIVERY }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.CheckoutShipping, path: routes_1.CHECKOUT_SHIPPING }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.CheckoutPayment, path: routes_1.CHECKOUT_PAYMENT }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.CheckoutResult, path: routes_1.CHECKOUT_RESULT }),
            react_1.default.createElement(pages_1.PageNotFound, null)),
        react_1.default.createElement(commonComponents_1.Footer, null))));
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
const routes_1 = __webpack_require__(5208);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const PageNotFound = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)('pageNotFound');
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)(t('tabTitle'));
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Flexbox, { justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "xxl-size", minHeight: "50rem" },
            react_1.default.createElement("h1", null, t('title')),
            react_1.default.createElement(components_1.Button, { marginTop: "3rem", onClick: () => history.push(routes_1.HOME), type: "button" }, t('buttonLabel')))));
};
exports.default = PageNotFound;


/***/ }),

/***/ 71117:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(72934);
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_query_1 = __webpack_require__(88767);
const react_i18next_1 = __webpack_require__(86162);
const commonComponents_1 = __webpack_require__(31802);
const Products = () => {
    const { t } = (0, react_i18next_1.useTranslation)('products');
    (0, hooks_1.useDocumentTitle)(t('tabTitle'));
    (0, hooks_1.useScrollTop)();
    const productQuery = (0, react_query_1.useQuery)('products', api_1.getProducts);
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(commonComponents_1.ProductsList, { query: productQuery })));
};
exports.default = Products;


/***/ }),

/***/ 5429:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const icons_1 = __webpack_require__(4747);
const components_1 = __webpack_require__(26789);
const react_router_dom_1 = __webpack_require__(77856);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const routes_1 = __webpack_require__(74897);
const BackButton = () => {
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    return (react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.PRODUCTS },
        react_1.default.createElement("h3", { style: { marginTop: 0 }, className: "button-link d-inline-flex" },
            react_1.default.createElement(components_1.Box, { marginRight: "0.5rem" },
                react_1.default.createElement(icons_1.ArrowLeftOutlined, null)),
            t('actions.goBack'))));
};
exports.default = BackButton;


/***/ }),

/***/ 14038:
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
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
const react_i18next_1 = __webpack_require__(86162);
const react_1 = __importStar(__webpack_require__(67294));
const react_select_1 = __importDefault(__webpack_require__(78329));
const formik_1 = __webpack_require__(94649);
const useForm_1 = __importDefault(__webpack_require__(20770));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const components_1 = __webpack_require__(26789);
const BasketProvider_1 = __webpack_require__(81400);
const Form = ({ product, onSelect }) => {
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    const { basket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { schema, initialValues, submitForm } = (0, useForm_1.default)(product);
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: submitForm }, ({ values }) => {
        const { variant } = values;
        const isInBasket = basket.find((item) => {
            if (variant) {
                return product.id === item.id && variant === item.variant;
            }
            return product.id === item.id;
        });
        return (react_1.default.createElement(formik_1.Form, null,
            product.variants && (react_1.default.createElement(formik_1.Field, { name: "variant" }, (fieldProps) => (react_1.default.createElement("div", null,
                react_1.default.createElement(VariantLabel, null, product.variantsLabel),
                react_1.default.createElement(react_select_1.default, { placeholder: t('selectPlaceholder'), onChange: (option) => {
                        fieldProps.form.setFieldValue(fieldProps.field.name, option?.value);
                        onSelect(option?.value);
                    }, options: sortAndMapOptions(product.variants), styles: {
                        menu: (provided) => ({ ...provided, zIndex: 10 })
                    } }))))),
            react_1.default.createElement(components_1.Button, { marginTop: product.variants ? 'm-size' : 0, type: "submit", disabled: product.variants && !variant, variant: isInBasket ? 'secondary' : 'primary' }, isInBasket
                ? t('actions.removeFromBasket')
                : t('actions.addToBasket'))));
    }));
};
const sortAndMapOptions = (options) => {
    return options
        ?.sort((a, b) => (a < b ? -1 : 1))
        .map((option) => ({
        label: option.label,
        value: option.value
    }));
};
const VariantLabel = styled_components_1.default.h5 `
  margin: 0;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors['gray-10']};
`;
exports.default = Form;


/***/ }),

/***/ 16821:
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
const components_1 = __webpack_require__(26789);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const react_1 = __importStar(__webpack_require__(67294));
const common_1 = __webpack_require__(60886);
const Images = ({ product, variant }) => {
    const { name, gallery } = product;
    const [selectedImage, setSelectedImage] = (0, react_1.useState)(gallery[0].url);
    (0, react_1.useEffect)(() => {
        const variantImage = gallery.find((img) => img.variant === variant)?.url;
        if (variantImage) {
            setSelectedImage(variantImage);
        }
    }, [variant]);
    return (react_1.default.createElement(components_1.Flexbox, { flexGrow: 4, flexDirection: "column", minWidth: "50%", maxWidth: "50%" },
        react_1.default.createElement(components_1.Square, null,
            react_1.default.createElement(ImageWrapper, null,
                react_1.default.createElement(common_1.ImageLoader, { alt: name, className: "product-modal-image", src: selectedImage }))),
        react_1.default.createElement(components_1.Separator, null),
        gallery.length !== 0 && (react_1.default.createElement(Gallery, null, gallery.map((image) => (react_1.default.createElement(GalleryImageWrapper, { key: image.id, onClick: () => setSelectedImage(image.url), role: "presentation" },
            react_1.default.createElement(GalleryImage, { src: image.url }))))))));
};
const ImageWrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  flex-grow: 1;
  position: relative;

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
`;
exports.default = Images;


/***/ }),

/***/ 49521:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(72934);
const commonComponents_1 = __webpack_require__(31802);
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_query_1 = __webpack_require__(88767);
const Recommended = () => {
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    const productsQuery = (0, react_query_1.useQuery)('productsQuery', () => (0, api_1.getProducts)());
    return (react_1.default.createElement(components_1.Flexbox, { flexDirection: "column", as: "section", marginTop: "4rem" },
        react_1.default.createElement("h2", null, t('recommended.title')),
        react_1.default.createElement(commonComponents_1.ProductsList, { query: productsQuery })));
};
exports.default = Recommended;


/***/ }),

/***/ 54097:
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
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const react_query_1 = __webpack_require__(88767);
const components_1 = __webpack_require__(26789);
const api_1 = __webpack_require__(72934);
const hooks_1 = __webpack_require__(92457);
const utils_1 = __webpack_require__(49502);
const react_i18next_1 = __webpack_require__(86162);
const Form_1 = __importDefault(__webpack_require__(14038));
const BackButton_1 = __importDefault(__webpack_require__(5429));
const Images_1 = __importDefault(__webpack_require__(16821));
const Recommended_1 = __importDefault(__webpack_require__(49521));
const ViewProduct = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    const productQuery = (0, react_query_1.useQuery)(`product/${id}`, () => (0, api_1.getProduct)({ id }));
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)(t('tabTitle', { productName: productQuery.data?.name }));
    const [variant, setVariant] = (0, react_1.useState)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.QueryLoader, { query: productQuery }, (product) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(BackButton_1.default, null),
            react_1.default.createElement(ProductModal, null,
                react_1.default.createElement(Images_1.default, { variant: variant, product: product }),
                react_1.default.createElement(components_1.Flexbox, { flexGrow: 1, flexDirection: "column", marginLeft: "3rem" },
                    react_1.default.createElement(ProductName, null, product.name),
                    react_1.default.createElement(components_1.Separator, null),
                    react_1.default.createElement(Price, null, (0, utils_1.displayMoney)(product.price)),
                    react_1.default.createElement(PriceSubtext, null, t('priceSubtitle')),
                    react_1.default.createElement(components_1.Separator, null),
                    react_1.default.createElement(Description, null, product.description),
                    react_1.default.createElement(components_1.Separator, null),
                    react_1.default.createElement(Form_1.default, { onSelect: (value) => setVariant(value), product: product })))))),
        react_1.default.createElement(Recommended_1.default, null)));
};
const ProductModal = styled_components_1.default.section `
  display: flex;
  width: 100%;
  padding: 30px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors['border-color']};
`;
const ProductName = styled_components_1.default.h1 `
  margin: 0;
`;
const Price = styled_components_1.default.h2 `
  font-size-adjust: 1.2;
  margin: 0;
`;
const PriceSubtext = styled_components_1.default.h4 `
  margin: 0;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors['gray-10']};
`;
const Description = styled_components_1.default.p `
  margin: 0;
`;
exports.default = ViewProduct;


/***/ }),

/***/ 20770:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BasketProvider_1 = __webpack_require__(81400);
const react_1 = __webpack_require__(67294);
const yup_1 = __webpack_require__(87561);
const lodash_add_1 = __importDefault(__webpack_require__(24427));
const lodash_subtract_1 = __importDefault(__webpack_require__(81057));
const CheckoutProvider_1 = __webpack_require__(50542);
const useForm = (product) => {
    const { basket, setBasket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const initialValues = product.variants
        ? {
            variant: undefined
        }
        : {};
    const schema = (0, yup_1.object)({
        variant: (0, yup_1.string)()
    });
    const submitForm = (formValues) => {
        const { variant } = formValues;
        const isInBasket = basket.find((item) => {
            if (variant) {
                return product.id === item.id && variant === item.variant;
            }
            return product.id === item.id;
        });
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
            const newBasketProduct = variant
                ? {
                    id: product.id,
                    quantity: 1,
                    variant,
                    price: product.price
                }
                : {
                    id: product.id,
                    quantity: 1,
                    price: product.price
                };
            return [...prev, newBasketProduct];
        });
        setCheckout((prev) => {
            if (isInBasket) {
                return {
                    ...prev,
                    total: {
                        ...prev.total,
                        products: (0, lodash_subtract_1.default)(prev.total.products, product.price),
                        sum: (0, lodash_subtract_1.default)(prev.total.products, product.price)
                    }
                };
            }
            return {
                ...prev,
                total: {
                    ...prev.total,
                    products: (0, lodash_add_1.default)(prev.total.products, product.price),
                    sum: (0, lodash_subtract_1.default)(prev.total.products, product.price)
                }
            };
        });
    };
    return {
        initialValues,
        schema,
        submitForm
    };
};
exports.default = useForm;


/***/ }),

/***/ 12737:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DELIVERY_METHODS = void 0;
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const formik_1 = __webpack_require__(94649);
const react_i18next_1 = __webpack_require__(86162);
const utils_1 = __webpack_require__(49502);
const common_1 = __webpack_require__(73478);
const Form = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(common_1.Row, { flexDirection: "column" }, exports.DELIVERY_METHODS.map((method, index) => (react_1.default.createElement(formik_1.Field, { name: "deliveryType", key: method.name }, (props) => (react_1.default.createElement(components_1.CheckboxField, { ...props, id: method.name, isFirst: index === 0, title: t(`checkoutDelivery.form.delivery.${method.name}`), subtitle: `${method.time}`, val: (0, utils_1.displayMoney)(method.price), fieldLabel: t('checkoutDelivery.form.delivery.label') })))))))));
};
exports.DELIVERY_METHODS = [
    {
        name: 'FREE_PARCEL',
        price: 10,
        time: '5 dni'
    },
    {
        name: 'PICK_UP',
        price: 0,
        time: '1 dzień'
    }
];
exports.default = Form;


/***/ }),

/***/ 28770:
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
const hooks_1 = __webpack_require__(8560);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const formik_1 = __webpack_require__(94649);
const react_router_dom_1 = __webpack_require__(77856);
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const CheckoutProvider_1 = __webpack_require__(50542);
const Actions_1 = __importDefault(__webpack_require__(98520));
const common_1 = __webpack_require__(73478);
const useForm_1 = __importDefault(__webpack_require__(7218));
const Form_1 = __importStar(__webpack_require__(12737));
const CheckoutDelivery = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    (0, hooks_1.useDocumentTitle)(t('checkoutDelivery.tabTitle'));
    (0, hooks_1.useScrollTop)();
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { schema, onSubmitForm, initialValues } = (0, useForm_1.default)();
    if (!checkout.contactDetails) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_DETAILS });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('checkoutDelivery.title')),
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: onSubmitForm }, ({ handleSubmit, values }) => {
                const delivery = Form_1.DELIVERY_METHODS.find((method) => method.name === values.deliveryType);
                return (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                    react_1.default.createElement(Form_1.default, null),
                    react_1.default.createElement(common_1.Total, { customDelivery: delivery?.price }),
                    react_1.default.createElement(Actions_1.default, null)));
            }))));
};
exports.default = CheckoutDelivery;


/***/ }),

/***/ 7218:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const routes_1 = __webpack_require__(74897);
const react_i18next_1 = __webpack_require__(86162);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const lodash_add_1 = __importDefault(__webpack_require__(24427));
const Form_1 = __webpack_require__(12737);
const useForm = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const history = (0, react_router_dom_1.useHistory)();
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const onSubmitForm = (form) => {
        const deliveryPrice = Form_1.DELIVERY_METHODS.find((method) => method.name === form.deliveryType)
            ?.price || 0;
        if (form.deliveryType) {
            setCheckout((prev) => ({
                ...prev,
                deliveryType: form.deliveryType,
                total: {
                    ...prev.total,
                    delivery: deliveryPrice,
                    sum: (0, lodash_add_1.default)(prev.total.products, deliveryPrice)
                }
            }));
        }
        history.push(form.deliveryType === 'FREE_PARCEL' ? routes_1.CHECKOUT_SHIPPING : routes_1.CHECKOUT_PAYMENT);
    };
    const initialValues = {
        deliveryType: checkout.deliveryType
    };
    const schema = (0, yup_1.object)().shape({
        deliveryType: (0, yup_1.mixed)().oneOf(Form_1.DELIVERY_METHODS.map((method) => method.name), t('checkoutDelivery.validation.deliveryType.oneOf'))
    });
    return {
        onSubmitForm,
        initialValues,
        schema
    };
};
exports.default = useForm;


/***/ }),

/***/ 47790:
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
const Row_1 = __importDefault(__webpack_require__(21342));
const FieldWrapper_1 = __importDefault(__webpack_require__(65555));
const Form = ({ customerType }) => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { values, resetForm } = (0, formik_2.useFormikContext)();
    (0, react_1.useEffect)(() => {
        resetForm();
    }, [customerType]);
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "fullname", type: "text" }, (props) => {
                        const base = customerType === 'INDIVIDUAL' ? 'name' : 'company';
                        return (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, getRequiredOrNot_1.default)(t(`checkoutDetails.form.${base}.label`), true), placeholder: t(`checkoutDetails.form.${base}.placeholder`) }));
                    })),
                customerType === 'COMPANY' && (react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "nip", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, getRequiredOrNot_1.default)(t('checkoutDetails.form.nip.label'), true), placeholder: t('checkoutDetails.form.nip.placeholder') })))))),
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "street", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, getRequiredOrNot_1.default)(t('checkoutDetails.form.street.label'), true), placeholder: t('checkoutDetails.form.street.placeholder') }))))),
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "postCode", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, getRequiredOrNot_1.default)(t('checkoutDetails.form.postCode.label'), true), placeholder: t('checkoutDetails.form.postCode.placeholder') })))),
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "city", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, getRequiredOrNot_1.default)(t('checkoutDetails.form.city.label'), true), placeholder: t('checkoutDetails.form.city.placeholder') }))))),
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "email", type: "email" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, getRequiredOrNot_1.default)(t('checkoutDetails.form.email.label'), true), placeholder: t('checkoutDetails.form.email.placeholder') })))),
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "mobile" }, (props) => (react_1.default.createElement(formik_1.CustomMobileInput, { label: (0, getRequiredOrNot_1.default)(t('checkoutDetails.form.phone.label'), true), fieldProps: props, name: "mobile", defaultValue: values.mobile }))))))));
};
exports.default = Form;


/***/ }),

/***/ 62989:
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
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const formik_1 = __webpack_require__(94649);
const BasketProvider_1 = __webpack_require__(81400);
const common_1 = __webpack_require__(73478);
const Form_1 = __importDefault(__webpack_require__(47790));
const useForm_1 = __importDefault(__webpack_require__(5696));
const routes_1 = __webpack_require__(74897);
const components_1 = __webpack_require__(26789);
const common_2 = __webpack_require__(73478);
const CheckoutProvider_1 = __webpack_require__(50542);
const CheckoutDetails = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    (0, hooks_1.useDocumentTitle)(t('checkoutDetails.tabTitle'));
    (0, hooks_1.useScrollTop)();
    const [customerType, setCustomerType] = (0, react_1.useState)(checkout.customerType || 'COMPANY');
    const { onSubmitForm, initialValues, getSchema } = (0, useForm_1.default)();
    if (!checkout.products) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_PRODUCTS });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_2.StepTitle, null, t('checkoutDetails.title')),
            react_1.default.createElement(Flexbox_1.default, { marginBottom: "m-size", justifyContent: "center", alignItems: "center" }, customerTypes.map((type) => (react_1.default.createElement("button", { key: type, type: "button", onClick: () => setCustomerType(type), disabled: customerType === type }, t(`checkoutDetails.customerTypes.${type.toLowerCase()}`))))),
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: getSchema(customerType), onSubmit: (form) => onSubmitForm(form, customerType) }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                react_1.default.createElement(Form_1.default, { customerType: customerType }),
                react_1.default.createElement(common_1.Actions, null)))))));
};
const customerTypes = ['COMPANY', 'INDIVIDUAL'];
exports.default = CheckoutDetails;


/***/ }),

/***/ 5696:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const react_i18next_1 = __webpack_require__(86162);
const routes_1 = __webpack_require__(74897);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const useForm = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const onSubmitForm = (form, customerType) => {
        setCheckout((prev) => ({
            ...prev,
            customerType,
            contactDetails: form
        }));
        history.push(routes_1.CHECKOUT_DELIVERY);
    };
    const initialValues = {
        fullname: checkout.contactDetails?.fullname ?? '',
        email: checkout.contactDetails?.email ?? '',
        mobile: checkout.contactDetails?.mobile || {
            country: '',
            countryCode: 'pl',
            dialCode: '48',
            value: ''
        },
        street: checkout.contactDetails?.street ?? '',
        postCode: checkout.contactDetails?.postCode ?? '',
        city: checkout.contactDetails?.city ?? '',
        nip: checkout.contactDetails?.nip ?? ''
    };
    const getSchema = (customerType) => {
        const base = (0, yup_1.object)().shape({
            fullname: (0, yup_1.string)().required(t(`checkoutDetails.validations.${customerType === 'INDIVIDUAL' ? 'name' : 'company'}.required`)),
            email: (0, yup_1.string)()
                .email(t('checkoutDetails.validations.email.email'))
                .required(t('checkoutDetails.validations.email.required')),
            mobile: (0, yup_1.object)()
                .shape({
                country: (0, yup_1.string)(),
                countryCode: (0, yup_1.string)(),
                dialCode: (0, yup_1.string)(),
                value: (0, yup_1.string)()
                    .min(11, t('checkoutDetails.validations.mobile.min'))
                    .required(t('checkoutDetails.validations.mobile.required'))
            })
                .required(t('checkoutDetails.validations.mobile.required')),
            street: (0, yup_1.string)().required(t('checkoutDetails.validations.street.required')),
            postCode: (0, yup_1.string)()
                .trim()
                .matches(/^(\d{2})-(\d{3})$/, t('checkoutDetails.validations.postCode.matches'))
                .required(t('checkoutDetails.validations.postCode.required')),
            city: (0, yup_1.string)().required(t('checkoutDetails.validations.city.required'))
        });
        const companySchema = base.shape({
            nip: (0, yup_1.string)()
                .required(t('checkoutDetails.validations.nip.required'))
                .length(10, t('checkoutDetails.validations.nip.length'))
                .matches(/^(\d{10})$/, t('checkoutDetails.validations.nip.matches'))
        });
        return customerType === 'INDIVIDUAL' ? base : companySchema;
    };
    return {
        onSubmitForm,
        initialValues,
        getSchema
    };
};
exports.default = useForm;


/***/ }),

/***/ 13897:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const formik_1 = __webpack_require__(94649);
const react_i18next_1 = __webpack_require__(86162);
const components_1 = __webpack_require__(26789);
const paymentMethods_1 = __importDefault(__webpack_require__(24502));
const common_1 = __webpack_require__(73478);
const Form = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(common_1.Row, { flexDirection: "column" }, paymentMethods_1.default.map((method, index) => (react_1.default.createElement(formik_1.Field, { name: "paymentType", key: method }, (props) => (react_1.default.createElement(components_1.CheckboxField, { ...props, id: method, isFirst: index === 0, title: t(`checkoutPayment.form.paymentType.${method}.title`), subtitle: t(`checkoutPayment.form.paymentType.${method}.subtitle`), fieldLabel: t('checkoutPayment.form.paymentType.label') })))))))));
};
exports.default = Form;


/***/ }),

/***/ 97980:
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
const react_1 = __importStar(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const react_i18next_1 = __webpack_require__(86162);
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const CheckoutProvider_1 = __webpack_require__(50542);
const common_1 = __webpack_require__(73478);
const useForm_1 = __importDefault(__webpack_require__(95181));
const Form_1 = __importDefault(__webpack_require__(13897));
const CheckoutPayment = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    (0, hooks_1.useDocumentTitle)(t('checkoutPayment.tabTitle'));
    (0, hooks_1.useScrollTop)();
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { onSubmit, initialValues, schema, isLoading } = (0, useForm_1.default)();
    if (!checkout.deliveryType) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_DELIVERY });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('checkoutPayment.title')),
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: onSubmit }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                react_1.default.createElement(Form_1.default, null),
                react_1.default.createElement(common_1.Total, null),
                react_1.default.createElement(common_1.Actions, { primaryDisabled: isLoading })))))));
};
exports.default = CheckoutPayment;


/***/ }),

/***/ 95181:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-use-before-define */
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const paymentMethods_1 = __importDefault(__webpack_require__(24502));
const react_i18next_1 = __webpack_require__(86162);
const routes_1 = __webpack_require__(74897);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const react_query_1 = __webpack_require__(88767);
const api_1 = __webpack_require__(72934);
const BasketProvider_1 = __webpack_require__(81400);
const useFormSubmit = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { setBasket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { mutateAsync: mutateAddOrder, isLoading } = (0, react_query_1.useMutation)(api_1.addOrder);
    const onSubmit = async (form) => {
        setCheckout((prev) => ({
            ...prev,
            paymentType: form.paymentType
        }));
        const response = await mutateAddOrder(checkout);
        const locationState = {
            orderID: response.id
        };
        history.push(routes_1.CHECKOUT_RESULT, locationState);
        setCheckout(CheckoutProvider_1.initState);
        setBasket([]);
    };
    const initialValues = {
        paymentType: checkout.paymentType || 'TRANSFER'
    };
    const schema = (0, yup_1.object)().shape({
        paymentType: (0, yup_1.mixed)().oneOf(paymentMethods_1.default.map((method) => method), t('checkoutPayment.validation.paymentType.oneOf'))
    });
    return {
        onSubmit,
        initialValues,
        schema,
        isLoading
    };
};
exports.default = useFormSubmit;


/***/ }),

/***/ 25147:
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
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const BasketItem_1 = __importDefault(__webpack_require__(3405));
const BasketProvider_1 = __webpack_require__(81400);
const common_1 = __webpack_require__(73478);
const StepTitle_1 = __importDefault(__webpack_require__(50685));
const CheckoutProducts = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { basket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    (0, hooks_1.useDocumentTitle)(t('checkoutProducts.tabTitle'));
    (0, hooks_1.useScrollTop)();
    const isBasketEmpty = basketLength === 0;
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(StepTitle_1.default, null, t('checkoutProducts.title')),
            !isBasketEmpty && (react_1.default.createElement("span", { className: "d-block text-center" }, t('checkoutProducts.desc'))),
            react_1.default.createElement(components_1.Flexbox, { minHeight: "20rem", flexDirection: "column", marginTop: "2rem", alignItems: "center" },
                isBasketEmpty && (react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center", flexGrow: 1 },
                    react_1.default.createElement("h5", { className: "basket-empty-msg" }, t('checkoutProducts.emptyState')))),
                basket.map((product, index) => (react_1.default.createElement(react_1.Fragment, { key: product.id },
                    index !== 0 && react_1.default.createElement(components_1.Separator, null),
                    react_1.default.createElement(BasketItem_1.default, { product: product }))))),
            !isBasketEmpty && react_1.default.createElement(common_1.Total, null),
            react_1.default.createElement(common_1.Actions, null))));
};
exports.default = CheckoutProducts;


/***/ }),

/***/ 5635:
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
const Button_1 = __importDefault(__webpack_require__(91362));
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const icons_1 = __webpack_require__(4747);
const CheckoutProvider_1 = __webpack_require__(50542);
const routes_2 = __webpack_require__(5208);
const hooks_1 = __webpack_require__(92457);
const common_1 = __webpack_require__(73478);
const CheckoutResult = () => {
    const { state } = (0, react_router_dom_1.useLocation)();
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    (0, hooks_1.useDocumentTitle)(t('checkoutResult.tabTitle'));
    (0, hooks_1.useScrollTop)();
    const history = (0, react_router_dom_1.useHistory)();
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    console.log(checkout);
    if (!state?.orderID) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_2.HOME });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('checkoutResult.title')),
            react_1.default.createElement(components_1.Flexbox, { marginTop: "3rem", justifyContent: "center" },
                react_1.default.createElement(icons_1.CheckCircleOutlined, { style: { fontSize: '8rem' } })),
            react_1.default.createElement(components_1.Flexbox, { marginTop: "3rem", alignItems: "center", flexDirection: "column", justifyContent: "center" },
                react_1.default.createElement("p", { style: { marginBottom: 0 } }, t('checkoutResult.orderId')),
                react_1.default.createElement("h3", null, state.orderID)),
            react_1.default.createElement(components_1.Flexbox, { marginTop: "5rem", flexDirection: "row-reverse", justifyContent: "space-between" },
                react_1.default.createElement(Button_1.default, { variant: "primary", onClick: () => history.push(routes_1.PRODUCTS) }, t('checkoutResult.actions.backToShop'))))));
};
exports.default = CheckoutResult;


/***/ }),

/***/ 14048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DELIVERY_METHODS = void 0;
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
const formik_1 = __webpack_require__(63011);
const formik_2 = __webpack_require__(94649);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const FieldWrapper_1 = __importDefault(__webpack_require__(65555));
const Row_1 = __importDefault(__webpack_require__(21342));
const Form = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "street" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: getRequiredOrNot(t('checkoutShipping.form.street.label'), true), placeholder: t('checkoutShipping.form.street.placeholder') }))))),
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "postCode" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: getRequiredOrNot(t('checkoutShipping.form.postCode.label'), true), placeholder: t('checkoutShipping.form.postCode.placeholder') })))),
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "city" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: getRequiredOrNot(t('checkoutShipping.form.city.label'), true), placeholder: t('checkoutShipping.form.city.placeholder') }))))))));
};
const getRequiredOrNot = (label, required) => `${required ? '* ' : ''}${label}`;
exports.DELIVERY_METHODS = {
    FREE_PARCEL: 10,
    PICK_UP: 0
};
exports.default = Form;


/***/ }),

/***/ 39150:
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
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const formik_1 = __webpack_require__(94649);
const components_1 = __webpack_require__(26789);
const CheckoutProvider_1 = __webpack_require__(50542);
const react_router_dom_1 = __webpack_require__(77856);
const routes_1 = __webpack_require__(74897);
const common_1 = __webpack_require__(73478);
const useForm_1 = __importDefault(__webpack_require__(63990));
const Form_1 = __importDefault(__webpack_require__(14048));
const CheckoutShipping = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    (0, hooks_1.useDocumentTitle)(t('checkoutShipping.tabTitle'));
    (0, hooks_1.useScrollTop)();
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { onSubmitForm, initialValues, schema } = (0, useForm_1.default)();
    if (!checkout.deliveryType) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_DELIVERY });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('checkoutShipping.title')),
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: onSubmitForm }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                react_1.default.createElement(Form_1.default, null),
                react_1.default.createElement(common_1.Actions, null)))))));
};
exports.default = CheckoutShipping;


/***/ }),

/***/ 63990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const routes_1 = __webpack_require__(74897);
const react_i18next_1 = __webpack_require__(86162);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const useForm = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const history = (0, react_router_dom_1.useHistory)();
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const onSubmitForm = (form) => {
        history.push(routes_1.CHECKOUT_PAYMENT);
        setCheckout((prev) => ({
            ...prev,
            shipping: form
        }));
    };
    const initialValues = {
        street: checkout.shipping?.street ?? '',
        postCode: checkout.shipping?.postCode ?? '',
        city: checkout.shipping?.city ?? ''
    };
    const schema = (0, yup_1.object)().shape({
        street: (0, yup_1.string)().required(t('checkoutShipping.validation.street.required')),
        postCode: (0, yup_1.string)()
            .trim()
            .matches(/^(\d{2})-(\d{3})$/, t('checkoutShipping.validation.postCode.matches'))
            .required(t('checkoutShipping.validation.postCode.required')),
        city: (0, yup_1.string)().required(t('checkoutShipping.validation.city.required'))
    });
    return {
        onSubmitForm,
        initialValues,
        schema
    };
};
exports.default = useForm;


/***/ }),

/***/ 98520:
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
const Box_1 = __importDefault(__webpack_require__(84962));
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const react_router_dom_1 = __webpack_require__(77856);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const BasketProvider_1 = __webpack_require__(81400);
const routes_1 = __webpack_require__(74897);
const CheckoutProvider_1 = __webpack_require__(50542);
const StepTracker_1 = __webpack_require__(78812);
const Actions = ({ primaryDisabled }) => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const history = (0, react_router_dom_1.useHistory)();
    const current = (0, StepTracker_1.useCheckoutStep)();
    const { basketLength, basket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const isBasketEmpty = basketLength === 0;
    const onClickPrevious = () => {
        switch (current) {
            case 1:
                history.push(routes_1.PRODUCTS);
                break;
            case 2:
                history.push(routes_1.CHECKOUT_PRODUCTS);
                break;
            case 3:
                history.push(routes_1.CHECKOUT_DETAILS);
                break;
            case 4:
                history.push(routes_1.CHECKOUT_DELIVERY);
                break;
            case 5:
                history.push(routes_1.CHECKOUT_DELIVERY);
                break;
            default:
                break;
        }
    };
    const isFirstPage = current === 1;
    const onClickNext = () => {
        if (isFirstPage) {
            history.push(routes_1.CHECKOUT_DETAILS);
            setCheckout((prev) => ({
                ...prev,
                products: basket
            }));
        }
    };
    return (react_1.default.createElement(Flexbox_1.default, { marginTop: "3rem", alignItems: "center", justifyContent: "space-between" },
        react_1.default.createElement("button", { className: "button button-muted", onClick: onClickPrevious, type: "button" },
            isFirstPage && (react_1.default.createElement(Box_1.default, { marginRight: "0.5rem" },
                react_1.default.createElement(icons_1.ShopOutlined, null))),
            t(isFirstPage ? 'actions.backToShop' : 'actions.back')),
        react_1.default.createElement("button", { disabled: isBasketEmpty || primaryDisabled, className: "button", onClick: onClickNext, type: isFirstPage ? 'button' : 'submit' },
            react_1.default.createElement(Box_1.default, { marginRight: "0.5rem" }, t(current === 4 ? 'actions.createOrder' : 'actions.next')),
            react_1.default.createElement(icons_1.ArrowRightOutlined, null))));
};
exports.default = Actions;


/***/ }),

/***/ 65555:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const FieldWrapper = styled_components_1.default.div `
  width: 100%;

  &:not(:first-child) {
    margin-left: ${(props) => props.theme.space['s-size']};
  }
`;
exports.default = FieldWrapper;


/***/ }),

/***/ 21342:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Row = (0, styled_components_1.default)(components_1.Flexbox) `
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space['m-size']};
  }
`;
exports.default = Row;


/***/ }),

/***/ 50685:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const StepTitle = styled_components_1.default.h3 `
  text-align: center;
  margin: 3rem 0;
`;
exports.default = StepTitle;


/***/ }),

/***/ 78812:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCheckoutStep = void 0;
/* eslint-disable no-use-before-define */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-confusing-arrow */
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const changeColorAlpha_1 = __importDefault(__webpack_require__(95420));
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const StepTracker = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const current = (0, exports.useCheckoutStep)();
    return (react_1.default.createElement(components_1.Flexbox, { justifyContent: "center", marginBottom: "3rem" },
        react_1.default.createElement(Wrapper, null, [1, 2, 3, 4, 5].map((step) => {
            if (step === 4) {
                return null;
            }
            return (react_1.default.createElement(components_1.Flexbox, { key: step, justifyContent: "center", className: getClassName(current, step) },
                react_1.default.createElement(components_1.Flexbox, { width: "10rem", justifyContent: "center", alignItems: "center", flexDirection: "column", zIndex: 1 },
                    react_1.default.createElement(StepIcon, { className: "checkout-header-step" }, step === 5 ? 4 : step),
                    react_1.default.createElement("h6", { className: "checkout-header-subtitle" }, t(`steps.${step}`)))));
        }))));
};
const Wrapper = styled_components_1.default.ul `
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
  padding: 0;
  margin: auto;
  position: relative;

  :before {
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    margin: auto;
    width: 85%;
    height: 3px;
    background: ${(props) => `${(0, changeColorAlpha_1.default)(props.theme.colors['border-color'], 0.06)}`};
  }
`;
const getClassName = (current, step) => {
    if (current === step || (current === 4 && step === 3)) {
        return 'is-active-step';
    }
    if (step < current) {
        return 'is-done-step';
    }
    return '';
};
const useCheckoutStep = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    let current = 0;
    if (pathname.includes(routes_1.CHECKOUT_PRODUCTS)) {
        current = 1;
    }
    else if (pathname.includes(routes_1.CHECKOUT_DETAILS)) {
        current = 2;
    }
    else if (pathname.includes(routes_1.CHECKOUT_DELIVERY)) {
        current = 3;
    }
    else if (pathname.includes(routes_1.CHECKOUT_SHIPPING)) {
        current = 4;
    }
    else if (pathname.includes(routes_1.CHECKOUT_PAYMENT)) {
        current = 5;
    }
    return current;
};
exports.useCheckoutStep = useCheckoutStep;
const StepIcon = styled_components_1.default.h4 `
  margin: 0;
  padding${(props) => props.theme.space['m-size']};
  background: ${(props) => props.theme.colors['border-color']};
  border-radius: 50%;
  width: 3px;
  height: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors['gray-10']};
`;
exports.default = StepTracker;


/***/ }),

/***/ 74953:
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
const components_1 = __webpack_require__(26789);
const utils_1 = __webpack_require__(49502);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const CheckoutProvider_1 = __webpack_require__(50542);
const lodash_add_1 = __importDefault(__webpack_require__(24427));
const Total = ({ customProducts, customDelivery }) => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { total } = checkout;
    const products = customProducts || total.products;
    const delivery = customDelivery || total.delivery;
    const sum = (0, lodash_add_1.default)(products, delivery);
    return (react_1.default.createElement(components_1.Flexbox, { marginTop: "2rem", justifyContent: "flex-end", alignItems: "center" },
        react_1.default.createElement("table", null,
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", { className: "d-block margin-0 padding-right-s text-right" }, t('total.products'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("h4", { className: "basket-total-amount text-subtle text-right margin-0" }, (0, utils_1.displayMoney)(products)))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", { className: "d-block margin-0 padding-right-s text-right" }, t('total.delivery'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("h4", { className: "basket-total-amount text-subtle text-right margin-0 " }, (0, utils_1.displayMoney)(delivery)))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", { className: "d-block margin-0 padding-right-s text-right" }, t('total.sum'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("h2", { className: "basket-total-amount text-right" }, (0, utils_1.displayMoney)(sum))))))));
};
exports.default = Total;


/***/ }),

/***/ 69152:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Wrapper = styled_components_1.default.div `
  width: 70rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
exports.default = Wrapper;


/***/ }),

/***/ 73478:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Row = exports.FieldWrapper = exports.StepTitle = exports.Wrapper = exports.StepTracker = exports.Total = exports.Actions = void 0;
var Actions_1 = __webpack_require__(98520);
Object.defineProperty(exports, "Actions", ({ enumerable: true, get: function () { return __importDefault(Actions_1).default; } }));
var Total_1 = __webpack_require__(74953);
Object.defineProperty(exports, "Total", ({ enumerable: true, get: function () { return __importDefault(Total_1).default; } }));
var StepTracker_1 = __webpack_require__(78812);
Object.defineProperty(exports, "StepTracker", ({ enumerable: true, get: function () { return __importDefault(StepTracker_1).default; } }));
var Wrapper_1 = __webpack_require__(69152);
Object.defineProperty(exports, "Wrapper", ({ enumerable: true, get: function () { return __importDefault(Wrapper_1).default; } }));
var StepTitle_1 = __webpack_require__(50685);
Object.defineProperty(exports, "StepTitle", ({ enumerable: true, get: function () { return __importDefault(StepTitle_1).default; } }));
var FieldWrapper_1 = __webpack_require__(65555);
Object.defineProperty(exports, "FieldWrapper", ({ enumerable: true, get: function () { return __importDefault(FieldWrapper_1).default; } }));
var Row_1 = __webpack_require__(21342);
Object.defineProperty(exports, "Row", ({ enumerable: true, get: function () { return __importDefault(Row_1).default; } }));


/***/ }),

/***/ 23107:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckoutResult = exports.CheckoutShipping = exports.CheckoutPayment = exports.CheckoutDelivery = exports.CheckoutDetails = exports.CheckoutProducts = exports.ViewProduct = exports.PageNotFound = exports.App = exports.Products = void 0;
var Products_1 = __webpack_require__(71117);
Object.defineProperty(exports, "Products", ({ enumerable: true, get: function () { return __importDefault(Products_1).default; } }));
var App_1 = __webpack_require__(58341);
Object.defineProperty(exports, "App", ({ enumerable: true, get: function () { return __importDefault(App_1).default; } }));
var PageNotFound_1 = __webpack_require__(13700);
Object.defineProperty(exports, "PageNotFound", ({ enumerable: true, get: function () { return __importDefault(PageNotFound_1).default; } }));
var ViewProduct_1 = __webpack_require__(54097);
Object.defineProperty(exports, "ViewProduct", ({ enumerable: true, get: function () { return __importDefault(ViewProduct_1).default; } }));
var CheckoutProducts_1 = __webpack_require__(25147);
Object.defineProperty(exports, "CheckoutProducts", ({ enumerable: true, get: function () { return __importDefault(CheckoutProducts_1).default; } }));
var CheckoutDetails_1 = __webpack_require__(62989);
Object.defineProperty(exports, "CheckoutDetails", ({ enumerable: true, get: function () { return __importDefault(CheckoutDetails_1).default; } }));
var CheckoutDelivery_1 = __webpack_require__(28770);
Object.defineProperty(exports, "CheckoutDelivery", ({ enumerable: true, get: function () { return __importDefault(CheckoutDelivery_1).default; } }));
var CheckoutPayment_1 = __webpack_require__(97980);
Object.defineProperty(exports, "CheckoutPayment", ({ enumerable: true, get: function () { return __importDefault(CheckoutPayment_1).default; } }));
var CheckoutShipping_1 = __webpack_require__(39150);
Object.defineProperty(exports, "CheckoutShipping", ({ enumerable: true, get: function () { return __importDefault(CheckoutShipping_1).default; } }));
var CheckoutResult_1 = __webpack_require__(5635);
Object.defineProperty(exports, "CheckoutResult", ({ enumerable: true, get: function () { return __importDefault(CheckoutResult_1).default; } }));


/***/ }),

/***/ 81400:
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
    setBasket: () => undefined,
    clearBasket: () => undefined,
    basketLength: 0
});
const BasketProvider = ({ children }) => {
    const [basket, setBasket] = (0, react_1.useState)([]);
    const clearBasket = () => setBasket([]);
    const basketLength = basket.length;
    console.log(basket);
    return (react_1.default.createElement(exports.basketContext.Provider, { value: { basket, setBasket, clearBasket, basketLength } }, children));
};
exports.default = BasketProvider;


/***/ }),

/***/ 38823:
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
exports.basketToggleContext = void 0;
const react_1 = __importStar(__webpack_require__(67294));
exports.basketToggleContext = (0, react_1.createContext)({
    isOpen: false,
    setIsOpen: () => undefined,
    closeBasket: () => undefined
});
const BasketToggleProvider = ({ children }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const closeBasket = () => setIsOpen(false);
    return (react_1.default.createElement(exports.basketToggleContext.Provider, { value: {
            isOpen,
            setIsOpen,
            closeBasket
        } }, children));
};
exports.default = BasketToggleProvider;


/***/ }),

/***/ 50542:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkoutContext = exports.initState = void 0;
const react_1 = __webpack_require__(67294);
const react_2 = __importDefault(__webpack_require__(67294));
exports.initState = {
    total: {
        products: 0,
        delivery: 0,
        sum: 0
    }
};
exports.checkoutContext = (0, react_1.createContext)({
    checkout: exports.initState,
    setCheckout: () => undefined
});
const CheckoutProvider = ({ children }) => {
    const [checkout, setCheckout] = (0, react_1.useState)(exports.initState);
    console.log('checkoutProvider', checkout);
    return (react_2.default.createElement(exports.checkoutContext.Provider, { value: { checkout, setCheckout } }, children));
};
exports.default = CheckoutProvider;


/***/ }),

/***/ 2253:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BasketProvider = exports.CheckoutProvider = exports.BasketToggleProvider = void 0;
var BasketToggleProvider_1 = __webpack_require__(38823);
Object.defineProperty(exports, "BasketToggleProvider", ({ enumerable: true, get: function () { return __importDefault(BasketToggleProvider_1).default; } }));
var CheckoutProvider_1 = __webpack_require__(50542);
Object.defineProperty(exports, "CheckoutProvider", ({ enumerable: true, get: function () { return __importDefault(CheckoutProvider_1).default; } }));
var BasketProvider_1 = __webpack_require__(81400);
Object.defineProperty(exports, "BasketProvider", ({ enumerable: true, get: function () { return __importDefault(BasketProvider_1).default; } }));


/***/ }),

/***/ 6786:
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
    'nav-bg': '#f8f8f8',
    'background-color-01': '#f2f2f2',
    'gray-10': '#818181'
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

/***/ 25865:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const calculateTotal = (arr) => {
    if (!arr || arr?.length === 0)
        return 0;
    const total = arr.reduce((acc, val) => acc + val, 0);
    return parseFloat(total.toFixed(2));
};
exports.default = calculateTotal;


/***/ }),

/***/ 14751:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayMoney = void 0;
const displayMoney = (n) => {
    const format = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN'
    });
    // or use toLocaleString()
    return format.format(n);
};
exports.displayMoney = displayMoney;
exports.default = exports.displayMoney;


/***/ }),

/***/ 53684:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(49502);
function getCollection(snapshot, schema) {
    const records = [];
    snapshot.forEach((elem) => {
        const parsedElem = (0, utils_1.parseApiResponse)(schema, elem);
        records.push(parsedElem);
    });
    return records;
}
exports.default = getCollection;


/***/ }),

/***/ 49502:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayMoney = exports.calculateTotal = exports.getCollection = exports.parseApiResponse = void 0;
var parseApiResponse_1 = __webpack_require__(71894);
Object.defineProperty(exports, "parseApiResponse", ({ enumerable: true, get: function () { return __importDefault(parseApiResponse_1).default; } }));
var getCollection_1 = __webpack_require__(53684);
Object.defineProperty(exports, "getCollection", ({ enumerable: true, get: function () { return __importDefault(getCollection_1).default; } }));
var calculateTotal_1 = __webpack_require__(25865);
Object.defineProperty(exports, "calculateTotal", ({ enumerable: true, get: function () { return __importDefault(calculateTotal_1).default; } }));
var displayMoney_1 = __webpack_require__(14751);
Object.defineProperty(exports, "displayMoney", ({ enumerable: true, get: function () { return __importDefault(displayMoney_1).default; } }));


/***/ }),

/***/ 71894:
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
//# sourceMappingURL=main.4d057115ece8739858da.js.map