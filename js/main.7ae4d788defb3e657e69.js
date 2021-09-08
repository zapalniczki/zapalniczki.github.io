/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 90670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png");

/***/ }),

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
    const response = (0, firestore_1.addDoc)(ref, payload);
    return response;
};
exports["default"] = addOrder;


/***/ }),

/***/ 8751:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const firestore_1 = __webpack_require__(84956);
const models_1 = __webpack_require__(75357);
const utils_1 = __webpack_require__(49502);
const getOrderStatus = async (payload) => {
    const db = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.doc)(db, 'orders', payload.id);
    const response = await (0, firestore_1.getDoc)(ref);
    const parsedResponse = (0, utils_1.parseApiResponse)(models_1.order, response);
    return parsedResponse;
};
exports["default"] = getOrderStatus;


/***/ }),

/***/ 80433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetOrders = void 0;
/* eslint-disable implicit-arrow-linebreak */
const firestore_1 = __webpack_require__(84956);
const models_1 = __webpack_require__(75357);
const react_query_1 = __webpack_require__(88767);
const utils_1 = __webpack_require__(49502);
const getOrders = async (status) => {
    const db = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.collection)(db, 'orders');
    let q = (0, firestore_1.query)(ref);
    if (status) {
        q = (0, firestore_1.query)(ref, (0, firestore_1.where)('status', '==', status));
    }
    const snapshot = await (0, firestore_1.getDocs)(q);
    const orders = (0, utils_1.getCollection)(snapshot, models_1.order);
    return orders;
};
const useGetOrders = (status) => {
    const queryKey = status ? `orders/${status}` : 'orders';
    return (0, react_query_1.useQuery)(queryKey, () => getOrders(status));
};
exports.useGetOrders = useGetOrders;
exports["default"] = getOrders;


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
exports["default"] = getProduct;


/***/ }),

/***/ 78487:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetProducts = void 0;
/* eslint-disable implicit-arrow-linebreak */
const firestore_1 = __webpack_require__(84956);
const models_1 = __webpack_require__(75357);
const react_query_1 = __webpack_require__(88767);
const utils_1 = __webpack_require__(49502);
const getProducts = async (payload) => {
    const db = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.collection)(db, 'products');
    let q = (0, firestore_1.query)(ref);
    if (payload.tag) {
        q = (0, firestore_1.query)(ref, (0, firestore_1.where)('tags', 'array-contains', payload.tag));
    }
    const snapshot = await (0, firestore_1.getDocs)(q);
    const products = (0, utils_1.getCollection)(snapshot, models_1.product);
    return products;
};
const useGetProducts = (tag) => (0, react_query_1.useQuery)(`products${tag ? `/${tag}` : ''}`, () => getProducts({ tag }));
exports.useGetProducts = useGetProducts;
exports["default"] = getProducts;


/***/ }),

/***/ 72934:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.triggerNewOrder = exports.getOrderStatus = exports.updateOrderStatus = exports.getOrders = exports.addOrder = exports.getProduct = exports.getProducts = void 0;
var getProducts_1 = __webpack_require__(78487);
Object.defineProperty(exports, "getProducts", ({ enumerable: true, get: function () { return __importDefault(getProducts_1).default; } }));
var getProduct_1 = __webpack_require__(54614);
Object.defineProperty(exports, "getProduct", ({ enumerable: true, get: function () { return __importDefault(getProduct_1).default; } }));
var addOrder_1 = __webpack_require__(34971);
Object.defineProperty(exports, "addOrder", ({ enumerable: true, get: function () { return __importDefault(addOrder_1).default; } }));
var getOrders_1 = __webpack_require__(80433);
Object.defineProperty(exports, "getOrders", ({ enumerable: true, get: function () { return __importDefault(getOrders_1).default; } }));
var updateOrderStatus_1 = __webpack_require__(80141);
Object.defineProperty(exports, "updateOrderStatus", ({ enumerable: true, get: function () { return __importDefault(updateOrderStatus_1).default; } }));
var getOrderStatus_1 = __webpack_require__(8751);
Object.defineProperty(exports, "getOrderStatus", ({ enumerable: true, get: function () { return __importDefault(getOrderStatus_1).default; } }));
var triggerNewOrder_1 = __webpack_require__(47700);
Object.defineProperty(exports, "triggerNewOrder", ({ enumerable: true, get: function () { return __importDefault(triggerNewOrder_1).default; } }));


/***/ }),

/***/ 47700:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const triggerNewOrder = (payload) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const path = 'https://en226xi0lt4gdzu.m.pipedream.net';
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    };
    return fetch(path, options);
};
exports["default"] = triggerNewOrder;


/***/ }),

/***/ 80141:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useUpdateOrderStatus = void 0;
/* eslint-disable implicit-arrow-linebreak */
const firestore_1 = __webpack_require__(84956);
const index_1 = __webpack_require__(17927);
const LoaderProvider_1 = __webpack_require__(30150);
const react_1 = __webpack_require__(67294);
const react_query_1 = __webpack_require__(88767);
const updateOrderStatus = async (payload) => {
    const db = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.doc)(db, 'orders', payload.id);
    const snapshot = await (0, firestore_1.updateDoc)(ref, {
        status: payload.status
    });
    return snapshot;
};
const useUpdateOrderStatus = (order, currentStatus) => {
    const { show, hide } = (0, react_1.useContext)(LoaderProvider_1.loaderContext);
    const { mutateAsync: mutateUpdateOrderStatus } = (0, react_query_1.useMutation)(updateOrderStatus);
    (0, react_1.useEffect)(() => {
        if (currentStatus.value !== order.status) {
            show();
            mutateUpdateOrderStatus({
                id: order.id,
                status: currentStatus.value
            });
            index_1.queryClient.invalidateQueries(`orders/${order.status}`);
            index_1.queryClient.invalidateQueries(`orders/${currentStatus.value}`);
            hide();
        }
    }, [currentStatus]);
};
exports.useUpdateOrderStatus = useUpdateOrderStatus;
exports["default"] = updateOrderStatus;


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
            let variantName = product.variants?.find((elem) => elem.value === variant)?.label;
            if (product.type === 'CUSTOM') {
                variantName = variant;
            }
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
                    react_1.default.createElement(components_1.ImageLoader, { alt: product.name, className: "basket-item-img", src: thumbnail })),
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
exports["default"] = BasketItem;


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
const components_1 = __webpack_require__(26789);
const utils_1 = __webpack_require__(49502);
const BasketProvider_1 = __webpack_require__(81400);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const BasketToggleProvider_1 = __webpack_require__(38823);
const routes_1 = __webpack_require__(74897);
const getProducts_1 = __webpack_require__(78487);
const Checkout = () => {
    const { t } = (0, react_i18next_1.useTranslation)('common');
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const history = (0, react_router_dom_1.useHistory)();
    const { basket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const productsQuery = (0, getProducts_1.useGetProducts)();
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
exports["default"] = Checkout;


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
exports["default"] = Header;


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
exports["default"] = SimpleButton;


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
exports["default"] = Basket;


/***/ }),

/***/ 82813:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
const logo_png_1 = __importDefault(__webpack_require__(10593));
const routes_1 = __webpack_require__(74897);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Footer = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const visibleOnlyPath = [routes_1.HOME, routes_1.PRODUCTS, routes_1.VIEW_PRODUCT, routes_1.CONTACT];
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
            react_1.default.createElement("h5", null, new Date().getFullYear())),
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
exports["default"] = Footer;


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
exports["default"] = BasketToggle;


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
exports["default"] = Logo;


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
    const { t } = (0, react_i18next_1.useTranslation)('common');
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
exports["default"] = MainMenu;


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
exports["default"] = Navigation;


/***/ }),

/***/ 11736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const routes_1 = __webpack_require__(74897);
const mainMenuLinks = [
    {
        activeClassName: 'navigation-menu-active',
        exact: true,
        to: routes_1.HOME,
        label: 'navigation.home'
    },
    {
        activeClassName: 'navigation-menu-active',
        to: routes_1.PRODUCTS,
        label: 'navigation.products'
    },
    {
        activeClassName: 'navigation-menu-active',
        to: routes_1.CONTACT,
        label: 'navigation.contact'
    }
];
exports["default"] = mainMenuLinks;


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
exports["default"] = Preloader;


/***/ }),

/***/ 18348:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const utils_1 = __webpack_require__(49502);
const routes_1 = __webpack_require__(74897);
const ProductTile = ({ product }) => {
    const history = (0, react_router_dom_1.useHistory)();
    const viewProductPath = (0, react_router_dom_1.generatePath)(routes_1.VIEW_PRODUCT, {
        id: product.id
    });
    return (react_1.default.createElement(Container, { padding: 0, "max-height": "30rem", onClick: () => history.push(viewProductPath) },
        react_1.default.createElement(ImageWrapper, null,
            react_1.default.createElement(components_1.ImageLoader, { alt: "", className: "product-card-img", src: product.gallery[0].url })),
        react_1.default.createElement(components_1.Flexbox, { backgroundColor: "background-color", flexDirection: "column", padding: "m-size" },
            react_1.default.createElement(Name, null, product.name),
            react_1.default.createElement(Price, { className: "text-subtle text-italic" }, (0, utils_1.displayMoney)(product.price)))));
};
const Container = (0, styled_components_1.default)(components_1.Tile) `
  cursor: pointer;

  &:hover {
    img {
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
exports["default"] = ProductTile;


/***/ }),

/***/ 43444:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Tile_1 = __importDefault(__webpack_require__(18348));
const ProductsList = ({ title, query }) => (react_1.default.createElement(components_1.QueryLoader, { query: query }, (products) => (react_1.default.createElement(components_1.Flexbox, { flexDirection: "column", as: "section" },
    react_1.default.createElement(components_1.SectionHead, { title: title }),
    react_1.default.createElement(components_1.Grid, null, products.map((product) => (react_1.default.createElement(Tile_1.default, { key: product.id, product: product }))))))));
exports["default"] = ProductsList;


/***/ }),

/***/ 31802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsGrid = exports.Footer = exports.Basket = exports.Navigation = exports.Preloader = void 0;
var Preloader_1 = __webpack_require__(21142);
Object.defineProperty(exports, "Preloader", ({ enumerable: true, get: function () { return __importDefault(Preloader_1).default; } }));
var Navigation_1 = __webpack_require__(8771);
Object.defineProperty(exports, "Navigation", ({ enumerable: true, get: function () { return __importDefault(Navigation_1).default; } }));
var Basket_1 = __webpack_require__(18287);
Object.defineProperty(exports, "Basket", ({ enumerable: true, get: function () { return __importDefault(Basket_1).default; } }));
var Footer_1 = __webpack_require__(82813);
Object.defineProperty(exports, "Footer", ({ enumerable: true, get: function () { return __importDefault(Footer_1).default; } }));
var ProductsGrid_1 = __webpack_require__(43444);
Object.defineProperty(exports, "ProductsGrid", ({ enumerable: true, get: function () { return __importDefault(ProductsGrid_1).default; } }));


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
exports["default"] = Badge;


/***/ }),

/***/ 77308:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const components_1 = __webpack_require__(26789);
const Banner = ({ small, img, description, title, children }) => (react_1.default.createElement(components_1.Flexbox, { height: small ? '20rem' : '40rem', backgroundColor: "color1" },
    react_1.default.createElement(Description, null,
        title,
        description && react_1.default.createElement("p", null, description),
        children),
    img && (react_1.default.createElement(ImageWrapper, null,
        react_1.default.createElement("img", { src: img, alt: "" })))));
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
exports["default"] = Banner;


/***/ }),

/***/ 84962:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const styled_system_1 = __webpack_require__(18005);
const styleProps = (0, styled_system_1.compose)(styled_system_1.layout, styled_system_1.space, styled_system_1.position, styled_system_1.flex, styled_system_1.grid, styled_system_1.border, styled_system_1.flexbox, styled_system_1.background, styled_system_1.color, styled_system_1.typography);
const Box = styled_components_1.default.div `
  ${styleProps}
`;
exports["default"] = Box;


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
      width: max-content;
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
exports["default"] = Button;


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
exports["default"] = CheckboxField;


/***/ }),

/***/ 24690:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const Tile_1 = __importDefault(__webpack_require__(18843));
const react_1 = __importDefault(__webpack_require__(67294));
const react_fontawesome_1 = __webpack_require__(67814);
const FeatureItem = ({ title, icon }) => (react_1.default.createElement(Tile_1.default, { height: "16rem", padding: 0 },
    react_1.default.createElement(Flexbox_1.default, { flexGrow: 1, alignItems: "center", justifyContent: "center" },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon, size: "2x" })),
    react_1.default.createElement(Flexbox_1.default, { backgroundColor: "background-color", flexDirection: "column", alignItems: "center", padding: "m-size" }, title)));
exports["default"] = FeatureItem;


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
exports["default"] = Flexbox;


/***/ }),

/***/ 14597:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-use-before-define */
const Box_1 = __importDefault(__webpack_require__(84962));
const react_1 = __importDefault(__webpack_require__(67294));
const Grid = ({ children, ...props }) => (react_1.default.createElement(Box_1.default, { display: "grid", gridTemplateColumns: "repeat(auto-fit, 38rem)", gridGap: GRID_GAP, ...props }, children));
const GRID_GAP = '3rem';
exports["default"] = Grid;


/***/ }),

/***/ 25109:
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
const ImageLoader = ({ objectPosition, objectFit = 'contain', src, alt = '' }) => {
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !loaded && react_1.default.createElement(Spinner, null),
        react_1.default.createElement(Image, { objectPosition: objectPosition, objectFit: objectFit, loaded: loaded, alt: alt || '', onLoad: () => setLoaded(true), src: src })));
};
const Image = styled_components_1.default.img `
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};

  animation: fadeIn 0.3s ease;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
`;
const Spinner = (0, styled_components_1.default)(icons_1.LoadingOutlined) `
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
exports["default"] = ImageLoader;


/***/ }),

/***/ 56304:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Box_1 = __importDefault(__webpack_require__(84962));
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const ImageLoader_1 = __importDefault(__webpack_require__(25109));
const Tile_1 = __importDefault(__webpack_require__(18843));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const LongProductTile = ({ product, ...props }) => {
    const history = (0, react_router_dom_1.useHistory)();
    return (react_1.default.createElement(Container, { onClick: () => {
            history.push(`/view_product/${product.id}`);
        }, justifyContent: "space-between", flexDirection: "row", height: "20rem", alignItems: "center", ...props },
        react_1.default.createElement(Box_1.default, { as: "h2" }, product.name),
        react_1.default.createElement(Flexbox_1.default, { alignItems: "center", justifyContent: "center", position: "relative", height: "100%", padding: "auto 0", width: "60rem" },
            react_1.default.createElement(ImageLoader_1.default, { src: product.gallery[0].url }))));
};
const Container = (0, styled_components_1.default)(Tile_1.default) `
  cursor: pointer;
`;
exports["default"] = LongProductTile;


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
  /* border: 3px solid blue; */
`;
exports["default"] = Page;


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
exports["default"] = QueryLoader;


/***/ }),

/***/ 11327:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const SectionHead = ({ title, link, ...props }) => (react_1.default.createElement(Flexbox_1.default, { justifyContent: "space-between", alignItems: "center", ...props },
    title && react_1.default.createElement("h2", null, title),
    link && react_1.default.createElement(LinkStyled, { to: link.to }, link.label)));
const LinkStyled = (0, styled_components_1.default)(react_router_dom_1.Link) `
  font-size: 1.8rem;
  text-decoration: underline;
`;
exports["default"] = SectionHead;


/***/ }),

/***/ 26233:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_select_1 = __importDefault(__webpack_require__(78329));
const react_1 = __importDefault(__webpack_require__(67294));
const Select = ({ placeholder, onChange, options, value }) => (react_1.default.createElement(react_select_1.default, { value: value, placeholder: placeholder, onChange: onChange, options: sortAndMapOptions(options), styles: {
        menu: (provided) => ({
            ...provided,
            zIndex: 10
        })
    } }));
const sortAndMapOptions = (options) => options
    ?.sort((a, b) => (a < b ? -1 : 1))
    .map((option) => ({
    label: option.label,
    value: option.value
}));
exports["default"] = Select;


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
exports["default"] = Separator;


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
exports["default"] = Square;


/***/ }),

/***/ 18843:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const react_1 = __importDefault(__webpack_require__(67294));
const Tile = ({ onClick, children, ...props }) => (react_1.default.createElement(Flexbox_1.default, { width: "100%", padding: "30px", background: "white", border: "1px solid", borderColor: "border-color", flexDirection: "column", onClick: onClick, ...props }, children));
exports["default"] = Tile;


/***/ }),

/***/ 26789:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Banner = exports.Grid = exports.SectionHead = exports.ImageLoader = exports.LongProductTile = exports.Select = exports.Tile = exports.Button = exports.CheckboxField = exports.Square = exports.Flexbox = exports.Separator = exports.Badge = exports.QueryLoader = exports.Box = exports.Page = void 0;
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
var Tile_1 = __webpack_require__(18843);
Object.defineProperty(exports, "Tile", ({ enumerable: true, get: function () { return __importDefault(Tile_1).default; } }));
var Select_1 = __webpack_require__(26233);
Object.defineProperty(exports, "Select", ({ enumerable: true, get: function () { return __importDefault(Select_1).default; } }));
var LongProductTile_1 = __webpack_require__(56304);
Object.defineProperty(exports, "LongProductTile", ({ enumerable: true, get: function () { return __importDefault(LongProductTile_1).default; } }));
var ImageLoader_1 = __webpack_require__(25109);
Object.defineProperty(exports, "ImageLoader", ({ enumerable: true, get: function () { return __importDefault(ImageLoader_1).default; } }));
var SectionHead_1 = __webpack_require__(11327);
Object.defineProperty(exports, "SectionHead", ({ enumerable: true, get: function () { return __importDefault(SectionHead_1).default; } }));
var Grid_1 = __webpack_require__(14597);
Object.defineProperty(exports, "Grid", ({ enumerable: true, get: function () { return __importDefault(Grid_1).default; } }));
var Banner_1 = __webpack_require__(77308);
Object.defineProperty(exports, "Banner", ({ enumerable: true, get: function () { return __importDefault(Banner_1).default; } }));


/***/ }),

/***/ 82380:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ORDER_STATUSES = [
    'OPEN',
    'PAYMENT_RECEIVED',
    'IN_PREPARATION',
    'AWAITING_FOR_PICKUP',
    'IN_DELIVERY',
    'COMPLETED'
];
exports["default"] = ORDER_STATUSES;


/***/ }),

/***/ 4264:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const PAYMENT_METHODS = ['TRANSFER'];
exports["default"] = PAYMENT_METHODS;


/***/ }),

/***/ 74897:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CONTACT = exports.ADMIN_ORDERS = exports.CHECKOUT_RESULT = exports.CHECKOUT_PAYMENT = exports.CHECKOUT_SHIPPING = exports.CHECKOUT_DELIVERY = exports.CHECKOUT_DETAILS = exports.CHECKOUT_PRODUCTS = exports.VIEW_PRODUCT = exports.PRODUCTS = exports.HOME = void 0;
exports.HOME = '/';
exports.PRODUCTS = '/products';
exports.VIEW_PRODUCT = '/view_product/:id';
exports.CHECKOUT_PRODUCTS = '/checkout/products';
exports.CHECKOUT_DETAILS = '/checkout/details';
exports.CHECKOUT_DELIVERY = '/checkout/delivery';
exports.CHECKOUT_SHIPPING = '/checkout/shipping';
exports.CHECKOUT_PAYMENT = '/checkout/payment';
exports.CHECKOUT_RESULT = '/checkout/result';
exports.ADMIN_ORDERS = '/admin_orders';
exports.CONTACT = '/contact';


/***/ }),

/***/ 68431:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config = {
    apiKey: "AIzaSyAXnOQn6hJ15jMRHqRT-1nozJ8-omP0s2E",
    authDomain: "zapalniczki-c7234.firebaseapp.com",
    databaseURL: "https://zapalniczki-c7234-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zapalniczki-c7234",
    storageBucket: "zapalniczki-c7234.appspot.com",
    messagingSenderId: "397821315416",
    appId: "1:397821315416:web:7af195e1b14c809e4f3d2d"
};
exports["default"] = config;


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
exports["default"] = useDocumentTitle;


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
exports["default"] = useScrollTop;


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
exports["default"] = useTranslation;


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
            adminOrders: pl_1.default.adminOrders,
            checkout: pl_1.default.checkout,
            common: pl_1.default.common,
            contact: pl_1.default.contact,
            home: pl_1.default.home,
            pageNotFound: pl_1.default.pageNotFound,
            products: pl_1.default.products,
            translation: pl_1.default,
            viewProduct: pl_1.default.viewProduct
        }
    }
};
i18next_1.default.init(exports.config);
exports["default"] = i18next_1.default;


/***/ }),

/***/ 57474:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const pl = {
    common: {
        orderStatuses: {
            OPEN: 'Nowe',
            PAYMENT_RECEIVED: 'Zapłacone',
            IN_PREPARATION: 'W przygotowaniu',
            AWAITING_FOR_PICKUP: 'Oczekuje na kuriera',
            IN_DELIVERY: 'W dostawie',
            COMPLETED: 'Zakończone'
        },
        navigation: {
            home: 'Strona Główna',
            products: 'Produkty',
            featured: 'Nowości',
            recommended: 'Rekomendowane',
            signUp: 'Rejestracja',
            signIn: 'Logowanie',
            contact: 'Kontakt'
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
    home: {
        tabTitle: 'Strona Główna | braty',
        banner: {
            description: 'Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.',
            buttonLabel: 'Kup teraz'
        },
        bestsellers: {
            title: 'Bestsellery',
            linkLabel: 'Zobacz wszystkie'
        },
        features: {
            title: 'Dlaczego warto kupować u nas?',
            items: {
                FREE_DELIVERY: 'Darmowa dostawa',
                QUICK_SERVICE: 'Szybka obsługa',
                RETURNS: '14 dni na zwrot',
                QUALITY: 'Gwarancja jakości',
                PICK_UP: 'Możliwość odbioru osobistego',
                CLUB: 'Zniżki dla stałych klientów'
            }
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
                INDIVIDUAL: 'Klient indywidualny',
                COMPANY: 'Firma'
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
                    min: 'Numer telefonu powinien składać się z numeru kierunkowego i 9 cyfr',
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
            title: 'Dziękujemy za złożenie zamówienia',
            tabTitle: 'Potwierdzenie zamówienia | braty.co',
            orderId: 'ID Twojego zamówienia to:',
            info: 'Na podany adres email wysłaliśmy wiadomość z potwierdzeniem. Znajdują się tam informacje o szczegółach zamówienia, dostawą i danymi do płatności.',
            actions: {
                backToHome: 'Wróć na stronę główną',
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
            goBack: 'Wróć',
            addToBasket: 'Dodaj do koszyka',
            removeFromBasket: 'Usuń z koszyka'
        },
        max10characters: 'Maksymalnie 10 znaków',
        selectPlaceholder: 'Wybierz albo wyszukaj',
        recommended: {
            title: 'Rekomendowane'
        }
    },
    adminOrders: {
        headers: {
            id: 'ID',
            status: 'Status',
            createdAt: 'Data zamówienia',
            modifiedAt: 'Data modyfikacji',
            clientType: 'Typ Klienta',
            deliveryType: 'Typ dostawy',
            total: 'Total'
        },
        emptyState: 'Nie ma żadnych zamówień'
    },
    contact: {
        title: 'Kontakt',
        tabTitle: 'Kontakt | braty',
        items: {
            CHECK_STATUS: {
                title: 'Sprawdź status zamówienia',
                info: 'ID zamówienia można znaleźć w każdej wiadomości email. Składa się z 20 znaków.',
                form: {
                    id: {
                        label: 'ID zamówienia',
                        placeholder: 'np. AAAAYYYY1111BBBB0000',
                        validation: {
                            required: 'To pole jest wymagane',
                            length: 'ID zamówienia powinien składać się z 20 znaków'
                        }
                    },
                    submit: {
                        label: 'Sprawdź'
                    }
                },
                result: {
                    info: 'Status Twojego zamówienia to',
                    statusesMeanings: {
                        OPEN: 'Co oznacza, że zamówienie zostało niedawno złożone i oczekujemy na wpłatę środków',
                        PAYMENT_RECEIVED: 'Co oznacza, że otrzymaliśmy środki i niebawem przystąpimy do jego realizacji.',
                        IN_PREPARATION: 'Co oznacza, że zamówienie jest realizowane właśnie teraz.',
                        AWAITING_FOR_PICKUP: 'Co oznacza, że zamówienie zostało skompletowane i oczekuje na kuriera.',
                        IN_DELIVERY: 'Co oznacza, że zamówienie jest w drodze.',
                        COMPLETED: 'Co oznacza, że zamówienie zostało skompletowane i dostarczone.'
                    },
                    tryNew: 'Sprawdź kolejne'
                },
                error: {
                    info: 'Podany ID zamówienia nie został znaleziony. Sprawdź podany numer i spróbuj jeszcze raz.',
                    tryNew: 'Spróbuj jeszcze raz'
                }
            },
            EMAIL: {
                title: 'E-mail',
                info: 'Kontakt w sprawie zamówień',
                email: 'xxx@xxx.com'
            },
            ADDRESS: {
                title: 'Adres',
                info: 'Wymiany, zwroty i odbiór osobisty',
                address1: 'Braty Przemysław Rychlewicz',
                address2: 'ul. Bora-Komorowskiego 12/1',
                address3: '80-366 Gdańsk',
                address4: 'Polska'
            },
            PHONE: {
                title: 'Telefon',
                info: 'Czynne od poniedziałku do piątku, w godzinach 9 do 17.',
                mobile: '+48 792 531 179'
            },
            ACCOUNT: {
                title: 'Numer konta',
                info: 'Do wpłat',
                nrb: 'XX XXXX XXXX XXXX XXXX XXXX',
                info2: 'Nazwa banku: mBank S.A.',
                info3: 'Tytuł: ID zamówienia'
            }
        }
    }
};
exports["default"] = pl;


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
/* eslint-disable import/prefer-default-export */
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
const free_solid_svg_icons_1 = __webpack_require__(51436);
const fontawesome_svg_core_1 = __webpack_require__(78947);
const app_1 = __webpack_require__(94258);
const config_2 = __importDefault(__webpack_require__(68431));
const pages_1 = __webpack_require__(23107);
webfontloader_1.default.load({
    google: {
        families: ['Roboto']
    }
});
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faTruck, free_solid_svg_icons_1.faUserClock, free_solid_svg_icons_1.faExchangeAlt, free_solid_svg_icons_1.faStar, free_solid_svg_icons_1.faBoxOpen, free_solid_svg_icons_1.faHandHoldingUsd, free_solid_svg_icons_1.faEnvelopeOpenText, free_solid_svg_icons_1.faMapMarkedAlt, free_solid_svg_icons_1.faUniversity, free_solid_svg_icons_1.faPhoneAlt, free_solid_svg_icons_1.faBox, free_solid_svg_icons_1.faCheckCircle);
exports.queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 90000
        }
    }
});
(0, app_1.initializeApp)(config_2.default);
const root = document.getElementById('app');
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
                                        react_1.default.createElement(providers_1.RemoteConfigProvider, null,
                                            react_1.default.createElement(providers_1.LoaderProvider, null,
                                                react_1.default.createElement(pages_1.App, null))))))))))))), root);


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
exports["default"] = basketItem;


/***/ }),

/***/ 75357:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.order = exports.basketItem = exports.product = void 0;
var product_1 = __webpack_require__(86866);
Object.defineProperty(exports, "product", ({ enumerable: true, get: function () { return __importDefault(product_1).default; } }));
var basketItem_1 = __webpack_require__(89347);
Object.defineProperty(exports, "basketItem", ({ enumerable: true, get: function () { return __importDefault(basketItem_1).default; } }));
// export { default as remoteConfig } from './remoteConfig'
var order_1 = __webpack_require__(38323);
Object.defineProperty(exports, "order", ({ enumerable: true, get: function () { return __importDefault(order_1).default; } }));


/***/ }),

/***/ 38323:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const paymentMethods_1 = __importDefault(__webpack_require__(4264));
const orderStatuses_1 = __importDefault(__webpack_require__(82380));
const basketItem_1 = __importDefault(__webpack_require__(89347));
const mobile = (0, zod_1.object)({
    country: (0, zod_1.string)(),
    countryCode: (0, zod_1.string)(),
    dialCode: (0, zod_1.string)(),
    value: (0, zod_1.string)()
});
const contactDetails = (0, zod_1.object)({
    city: (0, zod_1.string)(),
    email: (0, zod_1.string)(),
    fullname: (0, zod_1.string)(),
    mobile,
    nip: (0, zod_1.string)(),
    postCode: (0, zod_1.string)(),
    street: (0, zod_1.string)()
});
const customerType = (0, zod_1.enum)(['INDIVIDUAL', 'COMPANY']);
const deliveryType = (0, zod_1.enum)(['FREE_PARCEL', 'PICK_UP']);
const paymentType = (0, zod_1.enum)([...paymentMethods_1.default]);
const shipping = (0, zod_1.object)({
    city: (0, zod_1.string)(),
    postCode: (0, zod_1.string)(),
    street: (0, zod_1.string)()
});
const total = (0, zod_1.object)({
    delivery: (0, zod_1.number)(),
    products: (0, zod_1.number)(),
    sum: (0, zod_1.number)()
});
const createdAt = (0, zod_1.object)({
    seconds: (0, zod_1.number)(),
    nanoseconds: (0, zod_1.number)()
});
const modifiedAt = createdAt;
const status = (0, zod_1.enum)([...orderStatuses_1.default]);
const order = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    products: (0, zod_1.array)(basketItem_1.default).nullable(),
    customerType: customerType.nullable(),
    contactDetails: contactDetails.nullable(),
    deliveryType: deliveryType.nullable(),
    shipping: shipping.nullable(),
    paymentType: paymentType.nullable(),
    total,
    createdAt,
    modifiedAt,
    status
});
exports["default"] = order;


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
const type = (0, zod_1.enum)(['CUSTOM', 'LIST']);
const product = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    dateAdded: (0, zod_1.number)(),
    description: (0, zod_1.string)(),
    gallery: (0, zod_1.array)(galleryItem),
    isFeatured: (0, zod_1.boolean)().optional(),
    isRecommended: (0, zod_1.boolean)().optional(),
    type: type.optional(),
    tags: (0, zod_1.array)((0, zod_1.string)()).optional(),
    name: (0, zod_1.string)(),
    price: (0, zod_1.number)(),
    variantsLabel: (0, zod_1.string)().optional(),
    variants: (0, zod_1.array)(variant).optional()
});
exports["default"] = product;


/***/ }),

/***/ 19729:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const firestore_1 = __webpack_require__(84956);
const utils_1 = __webpack_require__(49502);
const zod_1 = __webpack_require__(78754);
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
    const parsedResponse = (0, utils_1.parseApiResponse)(profile, response);
    return parsedResponse;
};
exports["default"] = getProfile;


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
exports["default"] = InputColor;


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
exports["default"] = CustomCreatableSelect;


/***/ }),

/***/ 6349:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const CustomInput = ({ type = 'text', disabled, field, meta, label, placeholder, maxLength, ...props }) => {
    const touched = meta?.touched;
    const { error } = meta;
    return (react_1.default.createElement(components_1.Flexbox, { ...props, className: "input-group" },
        touched && error ? (react_1.default.createElement("span", { className: "label-input label-error" }, error)) : (react_1.default.createElement("label", { className: "label-input", htmlFor: field.name }, label)),
        react_1.default.createElement("input", { ...field, type: type, disabled: disabled, id: field.name, maxLength: maxLength, placeholder: placeholder, className: `input-form ${touched && error && 'input-error'}` })));
};
exports["default"] = CustomInput;


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
const styled_components_1 = __importDefault(__webpack_require__(91288));
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
        react_1.default.createElement(StyledPhoneInput, { isError: !!touched && !!error, disabled: disabled, country: "pl", inputClass: "input-form d-block", inputExtraProps: { required: true }, onChange: handleChange, placeholder: placeholder, disableDropdown: true, countryCodeEditable: false, value: defaultValue.value, masks: { pl: '... .. .. ..' } })));
};
const StyledPhoneInput = (0, styled_components_1.default)(react_phone_input_2_1.default) `
  border: ${(props) => (props.isError ? '1px solid red' : '1px solid blue')};
`;
exports["default"] = CustomMobileInput;


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
exports["default"] = CustomTextarea;


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
exports["default"] = AuthProvider;


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
exports["default"] = AuthStatusProvider;


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
exports["default"] = ProfileProvider;


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
exports["default"] = changeColorAlpha;


/***/ }),

/***/ 89992:
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
const updateOrderStatus_1 = __webpack_require__(80141);
const components_1 = __webpack_require__(26789);
const orderStatuses_1 = __importDefault(__webpack_require__(82380));
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const utils_1 = __webpack_require__(49502);
const Row = ({ order }) => {
    const { t } = (0, react_i18next_1.useTranslation)('common');
    const [currentStatus, setCurrentStatus] = (0, react_1.useState)({
        value: order.status,
        label: t(`orderStatuses.${order.status}`)
    });
    (0, updateOrderStatus_1.useUpdateOrderStatus)(order, currentStatus);
    return (react_1.default.createElement(components_1.Box, { as: "tr", height: "6rem" },
        react_1.default.createElement("td", null, order.id),
        react_1.default.createElement("td", null, (0, utils_1.displayDate)((0, utils_1.getDateFromTimestamp)(order.modifiedAt))),
        react_1.default.createElement("td", null, (0, utils_1.displayDate)((0, utils_1.getDateFromTimestamp)(order.createdAt))),
        react_1.default.createElement("td", null, order.customerType),
        react_1.default.createElement("td", null, order.deliveryType),
        react_1.default.createElement("td", null, (0, utils_1.displayMoney)(order.total.sum)),
        react_1.default.createElement(components_1.Box, { as: "td", minWidth: "15rem" },
            react_1.default.createElement(components_1.Select, { value: currentStatus, onChange: (option) => {
                    if (option) {
                        setCurrentStatus(option);
                    }
                }, options: getStatusesWithLabels(t) }))));
};
const getStatusesWithLabels = (t) => {
    return orderStatuses_1.default.map((status) => ({
        value: status,
        label: t(`orderStatuses.${status}`)
    }));
};
exports["default"] = Row;


/***/ }),

/***/ 8223:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
const getOrders_1 = __webpack_require__(80433);
const components_1 = __webpack_require__(26789);
const isBefore_1 = __importDefault(__webpack_require__(313));
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const utils_1 = __webpack_require__(49502);
const Row_1 = __importDefault(__webpack_require__(89992));
const Table = ({ status }) => {
    const { t } = (0, react_i18next_1.useTranslation)('adminOrders');
    const ordersQuery = (0, getOrders_1.useGetOrders)(status);
    return (react_1.default.createElement(components_1.QueryLoader, { query: ordersQuery }, (orders) => (react_1.default.createElement(components_1.Box, { as: "table", width: "100%", border: "1px solid", borderColor: "border-color" },
        orders.length > 0 && (react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null,
                    react_1.default.createElement("h5", null, t('headers.id'))),
                react_1.default.createElement("th", null,
                    react_1.default.createElement("h5", null, t('headers.modifiedAt'))),
                react_1.default.createElement("th", null,
                    react_1.default.createElement("h5", null, t('headers.createdAt'))),
                react_1.default.createElement("th", null,
                    react_1.default.createElement("h5", null, t('headers.clientType'))),
                react_1.default.createElement("th", null,
                    react_1.default.createElement("h5", null, t('headers.deliveryType'))),
                react_1.default.createElement("th", null,
                    react_1.default.createElement("h5", null, t('headers.total'))),
                react_1.default.createElement("th", null,
                    react_1.default.createElement("h5", null, t('headers.status')))))),
        react_1.default.createElement("tbody", null,
            orders
                .sort((prev, next) => {
                if ((0, isBefore_1.default)((0, utils_1.getDateFromTimestamp)(prev.modifiedAt), (0, utils_1.getDateFromTimestamp)(next.modifiedAt))) {
                    return -1;
                }
                return 1;
            })
                .map((order) => (react_1.default.createElement(Row_1.default, { key: order.id, order: order }))),
            orders.length === 0 && (react_1.default.createElement("tr", null,
                react_1.default.createElement("td", null, t('emptyState')))))))));
};
exports["default"] = Table;


/***/ }),

/***/ 53470:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-use-before-define */
const components_1 = __webpack_require__(26789);
const orderStatuses_1 = __importDefault(__webpack_require__(82380));
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const Table_1 = __importDefault(__webpack_require__(8223));
const AdminOrders = () => {
    const { t } = (0, react_i18next_1.useTranslation)('common');
    return (react_1.default.createElement(components_1.Page, null, orderStatuses_1.default.map((status, index) => (react_1.default.createElement(components_1.Tile, { key: status, marginTop: index === 0 ? 0 : '3rem' },
        react_1.default.createElement("h2", null, t(`orderStatuses.${status}`)),
        react_1.default.createElement(Table_1.default, { status: status }))))));
};
exports["default"] = AdminOrders;


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
const Contact_1 = __importDefault(__webpack_require__(54366));
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
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.AdminOrders, path: routes_1.ADMIN_ORDERS }),
            react_1.default.createElement(react_router_dom_1.Route, { component: Contact_1.default, path: routes_1.CONTACT }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, component: pages_1.Home, path: routes_1.HOME }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.PageNotFound, path: "*" })),
        react_1.default.createElement(commonComponents_1.Footer, null))));
exports["default"] = AppRouter;


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
exports["default"] = (0, root_1.hot)(App);


/***/ }),

/***/ 98409:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const Error = ({ message, setView }) => {
    const { t } = (0, react_i18next_1.useTranslation)('contact');
    return (react_1.default.createElement(components_1.Flexbox, null,
        react_1.default.createElement(components_1.Flexbox, { alignItems: "flex-start", flexDirection: "column" },
            react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5", marginBottom: "m-size" }, message),
            react_1.default.createElement(components_1.Button, { variant: "secondary", size: "small", marginTop: "m-size", onClick: () => setView({ view: 'FORM' }) }, t('items.CHECK_STATUS.error.tryNew'))),
        react_1.default.createElement(components_1.Flexbox, { marginLeft: "xxl-size", alignItems: "center", justifyContent: "center" },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "box", size: "7x" }))));
};
exports["default"] = Error;


/***/ }),

/***/ 30953:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const formik_1 = __webpack_require__(94649);
const formik_2 = __webpack_require__(63011);
const common_1 = __webpack_require__(73478);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const utils_1 = __webpack_require__(49502);
const Form = () => {
    const { t } = (0, react_i18next_1.useTranslation)('contact');
    return (react_1.default.createElement(components_1.Flexbox, { alignItems: "flex-end" },
        react_1.default.createElement(common_1.FieldWrapper, null,
            react_1.default.createElement(formik_1.Field, { name: "id" }, (props) => (react_1.default.createElement(formik_2.CustomInput, { ...props, label: (0, utils_1.getRequiredOrNot)(t('items.CHECK_STATUS.form.id.label'), true), maxLength: 20, placeholder: t('items.CHECK_STATUS.form.id.placeholder') })))),
        react_1.default.createElement(components_1.Button, { size: "small", marginLeft: "m-size", type: "submit" }, t('items.CHECK_STATUS.form.submit.label'))));
};
exports["default"] = Form;


/***/ }),

/***/ 24020:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const Result = ({ status, setView }) => {
    const { t } = (0, react_i18next_1.useTranslation)('contact');
    const { t: commonT } = (0, react_i18next_1.useTranslation)('common');
    return (react_1.default.createElement(components_1.Flexbox, { justifyContent: "space-between" },
        react_1.default.createElement(components_1.Flexbox, { flexDirection: "column" },
            react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5", marginBottom: "m-size" }, t('items.CHECK_STATUS.result.info')),
            react_1.default.createElement(components_1.Flexbox, { marginTop: 0, as: "h3" }, commonT(`orderStatuses.${status}`)),
            react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5" }, t(`items.CHECK_STATUS.result.statusesMeanings.${status}`)),
            react_1.default.createElement(components_1.Button, { variant: "secondary", size: "small", onClick: () => setView({ view: 'FORM' }) }, t('items.CHECK_STATUS.result.tryNew'))),
        react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center" },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "box", size: "7x" }))));
};
exports["default"] = Result;


/***/ }),

/***/ 17124:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const formik_1 = __webpack_require__(94649);
const react_1 = __importDefault(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const react_i18next_1 = __webpack_require__(86162);
const react_fontawesome_1 = __webpack_require__(67814);
const Form_1 = __importDefault(__webpack_require__(30953));
const Result_1 = __importDefault(__webpack_require__(24020));
const Error_1 = __importDefault(__webpack_require__(98409));
const useForm_1 = __importDefault(__webpack_require__(6512));
const CheckStatus = () => {
    const { t } = (0, react_i18next_1.useTranslation)('contact');
    const { view, setView, schema, initialValues, onSubmit } = (0, useForm_1.default)();
    if (view.view === 'RESULT') {
        return react_1.default.createElement(Result_1.default, { setView: setView, status: view.status });
    }
    if (view.view === 'ERROR') {
        return react_1.default.createElement(Error_1.default, { setView: setView, message: view.message });
    }
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: onSubmit }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
        react_1.default.createElement(components_1.Flexbox, { justifyContent: "space-between" },
            react_1.default.createElement(components_1.Flexbox, { flexDirection: "column" },
                react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5" }, t('items.CHECK_STATUS.info')),
                react_1.default.createElement(Form_1.default, null)),
            react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "box", size: "7x" })))))));
};
exports["default"] = CheckStatus;


/***/ }),

/***/ 6512:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-use-before-define */
const api_1 = __webpack_require__(72934);
const LoaderProvider_1 = __webpack_require__(30150);
const react_1 = __webpack_require__(67294);
const react_i18next_1 = __webpack_require__(86162);
const react_query_1 = __webpack_require__(88767);
const yup_1 = __webpack_require__(87561);
const useForm = () => {
    const { t } = (0, react_i18next_1.useTranslation)('contact');
    const [view, setView] = (0, react_1.useState)({ view: 'FORM' });
    const { mutateAsync: mutateGetOrderStatus } = (0, react_query_1.useMutation)(api_1.getOrderStatus);
    const initialValues = {
        id: ''
    };
    const { show, hide } = (0, react_1.useContext)(LoaderProvider_1.loaderContext);
    const schema = (0, yup_1.object)({
        id: (0, yup_1.string)()
            .required(t('items.CHECK_STATUS.form.id.validation.required'))
            .length(20, t('items.CHECK_STATUS.form.id.validation.length'))
    });
    const onSubmit = async (formValues) => {
        try {
            show();
            const order = await mutateGetOrderStatus(formValues);
            setView({ view: 'RESULT', status: 'AWAITING_FOR_PICKUP' });
            console.log('order', order);
        }
        catch (e) {
            setView({ view: 'ERROR', message: t('items.CHECK_STATUS.error.info') });
            console.log('error', e);
        }
        hide();
    };
    return {
        initialValues,
        schema,
        onSubmit,
        view,
        setView
    };
};
exports["default"] = useForm;


/***/ }),

/***/ 25018:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Tile = ({ extended, content, icon, title }) => (react_1.default.createElement(components_1.Tile, { gridColumn: extended ? '1 / span 2' : 'unset', flexDirection: "column" },
    react_1.default.createElement(components_1.Flexbox, { alignItems: "center", marginBottom: "m-size" },
        icon && react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "2x", icon: icon }),
        react_1.default.createElement(components_1.Box, { marginLeft: icon && 'm-size', as: "h2", marginY: "0" }, title)),
    content));
exports["default"] = Tile;


/***/ }),

/***/ 54366:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const CheckStatus_1 = __importDefault(__webpack_require__(17124));
const Tile_1 = __importDefault(__webpack_require__(25018));
const Contact = () => {
    const { t } = (0, react_i18next_1.useTranslation)('contact');
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)(t('tabTitle'));
    const contactMethods = useContactMethods();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Banner, { small: true, title: react_1.default.createElement("h1", null, t('title')) }),
        react_1.default.createElement(components_1.Grid, { gridTemplateColumns: "repeat(3, 1fr)", marginTop: "3rem" }, contactMethods.map(({ key, ...props }) => (react_1.default.createElement(Tile_1.default, { key: key, title: t(`items.${key}.title`), ...props }))))));
};
const useContactMethods = () => {
    const { t } = (0, react_i18next_1.useTranslation)('contact');
    return [
        {
            // icon: 'box',
            key: 'CHECK_STATUS',
            extended: true,
            content: react_1.default.createElement(CheckStatus_1.default, null)
        },
        {
            icon: 'envelope-open-text',
            key: 'EMAIL',
            content: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5" }, t('items.EMAIL.info')),
                react_1.default.createElement(components_1.Box, { as: "h5", color: "paragraph-color", marginTop: "0" }, t('items.EMAIL.email'))))
        },
        {
            icon: 'phone-alt',
            key: 'PHONE',
            content: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5" }, t('items.PHONE.info')),
                react_1.default.createElement(components_1.Box, { as: "h5", color: "paragraph-color", marginTop: "0" }, t('items.PHONE.mobile'))))
        },
        {
            icon: 'map-marked-alt',
            key: 'ADDRESS',
            content: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5" }, t('items.ADDRESS.info')),
                react_1.default.createElement(components_1.Box, { as: "h5", color: "paragraph-color", marginY: "0" }, t('items.ADDRESS.address1')),
                react_1.default.createElement(components_1.Box, { as: "h5", color: "paragraph-color", marginY: "0" }, t('items.ADDRESS.address2')),
                react_1.default.createElement(components_1.Box, { as: "h5", color: "paragraph-color", marginY: "0" }, t('items.ADDRESS.address3')),
                react_1.default.createElement(components_1.Box, { as: "h5", color: "paragraph-color", marginTop: "0" }, t('items.ADDRESS.address4'))))
        },
        {
            icon: 'university',
            key: 'ACCOUNT',
            content: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5" }, t('items.ACCOUNT.info')),
                react_1.default.createElement(components_1.Box, { as: "h5", color: "paragraph-color", marginTop: "0" }, t('items.ACCOUNT.nrb')),
                react_1.default.createElement(components_1.Box, { marginY: 0, as: "h5" }, t('items.ACCOUNT.info2')),
                react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5" }, t('items.ACCOUNT.info3'))))
        }
    ];
};
exports["default"] = Contact;


/***/ }),

/***/ 97971:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-wrap-multilines */
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const components_1 = __webpack_require__(26789);
const react_i18next_1 = __webpack_require__(86162);
const icons_1 = __webpack_require__(4747);
const banner_guy_png_1 = __importDefault(__webpack_require__(90670));
const getProducts_1 = __webpack_require__(78487);
const routes_1 = __webpack_require__(74897);
const FeatureItem_1 = __importDefault(__webpack_require__(24690));
const Home = () => {
    const { t } = (0, react_i18next_1.useTranslation)('home');
    (0, hooks_1.useDocumentTitle)(t('tabTitle'));
    (0, hooks_1.useScrollTop)();
    const productsQuery = (0, getProducts_1.useGetProducts)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Banner, { img: banner_guy_png_1.default, description: t('banner.description'), title: react_1.default.createElement("h1", { className: "text-thin" },
                react_1.default.createElement("strong", null, "See"),
                "\u00A0everything with\u00A0",
                react_1.default.createElement("strong", null, "Clarity")) },
            react_1.default.createElement("br", null),
            react_1.default.createElement(react_router_dom_1.Link, { to: routes_1.PRODUCTS, className: "button" },
                t('banner.buttonLabel'),
                react_1.default.createElement(components_1.Box, { marginLeft: "0.5rem" },
                    react_1.default.createElement(icons_1.ArrowRightOutlined, null)))),
        react_1.default.createElement(components_1.SectionHead, { marginTop: "3rem", title: t('features.title') }),
        react_1.default.createElement(components_1.Grid, null, features.map((feature) => (react_1.default.createElement(FeatureItem_1.default, { key: feature.key, icon: feature.icon, title: t(`features.items.${feature.key}`) })))),
        react_1.default.createElement(components_1.SectionHead, { marginTop: "3rem", title: t('bestsellers.title'), link: {
                to: '/products',
                label: t('bestsellers.linkLabel')
            } }),
        react_1.default.createElement(components_1.QueryLoader, { query: productsQuery }, (products) => (react_1.default.createElement(react_1.default.Fragment, null, products.map((product, index) => (react_1.default.createElement(components_1.LongProductTile, { key: product.id, product: product, marginTop: index === 0 ? 0 : '3rem' }))))))));
};
const features = [
    {
        key: 'FREE_DELIVERY',
        icon: 'truck'
    },
    {
        key: 'QUICK_SERVICE',
        icon: 'user-clock'
    },
    {
        key: 'RETURNS',
        icon: 'exchange-alt'
    },
    {
        key: 'QUALITY',
        icon: 'star'
    },
    {
        key: 'PICK_UP',
        icon: 'box-open'
    },
    {
        key: 'CLUB',
        icon: 'hand-holding-usd'
    }
];
exports["default"] = Home;


/***/ }),

/***/ 36888:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
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
exports["default"] = PageNotFound;


/***/ }),

/***/ 71117:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const commonComponents_1 = __webpack_require__(31802);
const getProducts_1 = __webpack_require__(78487);
const Products = () => {
    const { t } = (0, react_i18next_1.useTranslation)('products');
    (0, hooks_1.useDocumentTitle)(t('tabTitle'));
    (0, hooks_1.useScrollTop)();
    const productQuery = (0, getProducts_1.useGetProducts)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(commonComponents_1.ProductsGrid, { query: productQuery })));
};
exports["default"] = Products;


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
exports["default"] = BackButton;


/***/ }),

/***/ 41586:
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
const formik_1 = __webpack_require__(94649);
const useForm_1 = __importDefault(__webpack_require__(44912));
const BasketProvider_1 = __webpack_require__(81400);
const formik_2 = __webpack_require__(63011);
const common_1 = __webpack_require__(50787);
const Form = ({ product, onSelect }) => {
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    const { basket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { schema, initialValues, submitForm } = (0, useForm_1.default)(product);
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: submitForm }, ({ values }) => {
        const { variant } = values;
        const isInBasket = basket.find((item) => product.id === item.id && variant === item.variant);
        return (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement(formik_1.Field, { name: "variant" }, (fieldProps) => (react_1.default.createElement(formik_2.CustomInput, { ...fieldProps, maxLength: 10, label: product.variantsLabel ?? '', placeholder: t('max10characters') }))),
            react_1.default.createElement(common_1.SubmitButton, { disabled: !variant, separation: true, isInBasket: !!isInBasket })));
    }));
};
exports["default"] = Form;


/***/ }),

/***/ 44912:
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
    const initialValues = {
        variant: ''
    };
    const schema = (0, yup_1.object)({
        variant: (0, yup_1.string)()
    });
    const submitForm = (formValues) => {
        const { variant } = formValues;
        const isInBasket = basket.find((item) => product.id === item.id && variant === item.variant);
        setBasket((prev) => {
            if (isInBasket) {
                const productInBasket = prev.find((elem) => product.id === elem.id && variant === elem.variant);
                return prev.filter((elem) => elem !== productInBasket);
            }
            const newBasketProduct = {
                id: product.id,
                quantity: 1,
                variant,
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
exports["default"] = useForm;


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
const components_2 = __webpack_require__(26789);
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
                react_1.default.createElement(components_2.ImageLoader, { alt: name, src: selectedImage }))),
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
const GalleryImage = (0, styled_components_1.default)(components_2.ImageLoader) `
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
exports["default"] = Images;


/***/ }),

/***/ 42851:
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
const formik_1 = __webpack_require__(94649);
const useForm_1 = __importDefault(__webpack_require__(82459));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const BasketProvider_1 = __webpack_require__(81400);
const common_1 = __webpack_require__(50787);
const components_1 = __webpack_require__(26789);
const Form = ({ product, onSelect }) => {
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    const { basket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { schema, initialValues, submitForm } = (0, useForm_1.default)(product);
    if (!product.variants)
        throw new Error(`No variants in product with type: ${product.type}`);
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: submitForm }, ({ values }) => {
        const { variant } = values;
        const isInBasket = basket.find((item) => product.id === item.id && variant === item.variant);
        return (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement(formik_1.Field, { name: "variant" }, (fieldProps) => (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(VariantLabel, null, product.variantsLabel),
                react_1.default.createElement(components_1.Select, { placeholder: t('selectPlaceholder'), onChange: (option) => {
                        fieldProps.form.setFieldValue(fieldProps.field.name, option?.value);
                        onSelect(option?.value);
                    }, options: product.variants })))),
            react_1.default.createElement(common_1.SubmitButton, { separation: true, disabled: !variant, isInBasket: !!isInBasket })));
    }));
};
const sortAndMapOptions = (options) => options
    ?.sort((a, b) => (a < b ? -1 : 1))
    .map((option) => ({
    label: option.label,
    value: option.value
}));
const VariantLabel = styled_components_1.default.h5 `
  margin: 0;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors['gray-10']};
`;
exports["default"] = Form;


/***/ }),

/***/ 82459:
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
    const initialValues = {};
    const schema = (0, yup_1.object)({
        variant: (0, yup_1.string)()
    });
    const submitForm = (formValues) => {
        const { variant } = formValues;
        const isInBasket = basket.find((item) => product.id === item.id && variant === item.variant);
        setBasket((prev) => {
            if (isInBasket) {
                const productInBasket = prev.find((elem) => product.id === elem.id && variant === elem.variant);
                return prev.filter((elem) => elem !== productInBasket);
            }
            const newBasketProduct = {
                id: product.id,
                quantity: 1,
                variant,
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
exports["default"] = useForm;


/***/ }),

/***/ 60485:
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
const react_1 = __importStar(__webpack_require__(67294));
const formik_1 = __webpack_require__(94649);
const BasketProvider_1 = __webpack_require__(81400);
const useForm_1 = __importDefault(__webpack_require__(23114));
const common_1 = __webpack_require__(50787);
const Form = ({ product }) => {
    const { basket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { schema, initialValues, submitForm } = (0, useForm_1.default)(product);
    const isInBasket = basket.find((item) => product.id === item.id);
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: submitForm }, () => (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement(common_1.SubmitButton, { isInBasket: !!isInBasket })))));
};
exports["default"] = Form;


/***/ }),

/***/ 23114:
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
    const initialValues = {};
    const schema = (0, yup_1.object)({
        variant: (0, yup_1.string)()
    });
    const submitForm = () => {
        const isInBasket = basket.find((item) => product.id === item.id);
        setBasket((prev) => {
            if (isInBasket) {
                const productInBasket = prev.find((elem) => elem.id === product.id);
                return prev.filter((elem) => elem !== productInBasket);
            }
            const newBasketProduct = {
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
exports["default"] = useForm;


/***/ }),

/***/ 49521:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const getProducts_1 = __webpack_require__(78487);
const commonComponents_1 = __webpack_require__(31802);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const Recommended = () => {
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    const productsQuery = (0, getProducts_1.useGetProducts)();
    return react_1.default.createElement(commonComponents_1.ProductsGrid, { title: t('recommended.title'), query: productsQuery });
};
exports["default"] = Recommended;


/***/ }),

/***/ 58607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const SubmitButton = ({ separation, disabled, isInBasket }) => {
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    return (react_1.default.createElement(components_1.Button, { marginTop: separation ? '2rem' : 0, type: "submit", disabled: disabled, variant: isInBasket ? 'secondary' : 'primary' }, isInBasket ? t('actions.removeFromBasket') : t('actions.addToBasket')));
};
exports["default"] = SubmitButton;


/***/ }),

/***/ 50787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubmitButton = void 0;
var SubmitButton_1 = __webpack_require__(58607);
Object.defineProperty(exports, "SubmitButton", ({ enumerable: true, get: function () { return __importDefault(SubmitButton_1).default; } }));


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
const BackButton_1 = __importDefault(__webpack_require__(5429));
const Images_1 = __importDefault(__webpack_require__(16821));
const Recommended_1 = __importDefault(__webpack_require__(49521));
const NoType_1 = __importDefault(__webpack_require__(60485));
const ListType_1 = __importDefault(__webpack_require__(42851));
const CustomType_1 = __importDefault(__webpack_require__(41586));
const ViewProduct = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const { t } = (0, react_i18next_1.useTranslation)('viewProduct');
    const productQuery = (0, react_query_1.useQuery)(`product/${id}`, () => (0, api_1.getProduct)({ id }));
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useDocumentTitle)(t('tabTitle', { productName: productQuery.data?.name }));
    const [variant, setVariant] = (0, react_1.useState)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.QueryLoader, { query: productQuery }, (product) => {
            let form = react_1.default.createElement(NoType_1.default, { product: product });
            if (product.type === 'LIST') {
                form = (react_1.default.createElement(ListType_1.default, { onSelect: (value) => setVariant(value), product: product }));
            }
            if (product.type === 'CUSTOM') {
                form = (react_1.default.createElement(CustomType_1.default, { onSelect: (value) => setVariant(value), product: product }));
            }
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(BackButton_1.default, null),
                react_1.default.createElement(components_1.Tile, { flexDirection: "row" },
                    react_1.default.createElement(Images_1.default, { variant: variant, product: product }),
                    react_1.default.createElement(components_1.Flexbox, { flexGrow: 1, flexDirection: "column", marginLeft: "3rem" },
                        react_1.default.createElement(ProductName, null, product.name),
                        react_1.default.createElement(components_1.Separator, null),
                        react_1.default.createElement(Price, null, (0, utils_1.displayMoney)(product.price)),
                        react_1.default.createElement(PriceSubtext, null, t('priceSubtitle')),
                        react_1.default.createElement(components_1.Separator, null),
                        react_1.default.createElement(Description, null, product.description),
                        react_1.default.createElement(components_1.Separator, null),
                        form))));
        }),
        productQuery.isFetched && react_1.default.createElement(Recommended_1.default, null)));
};
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
exports["default"] = ViewProduct;


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
exports["default"] = Form;


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
const hooks_1 = __webpack_require__(92457);
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
exports["default"] = CheckoutDelivery;


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
exports["default"] = useForm;


/***/ }),

/***/ 47790:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable object-curly-newline */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */
const formik_1 = __webpack_require__(63011);
const formik_2 = __webpack_require__(94649);
const utils_1 = __webpack_require__(49502);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const Row_1 = __importDefault(__webpack_require__(21342));
const FieldWrapper_1 = __importDefault(__webpack_require__(65555));
const Form = ({ isIndividual }) => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { values } = (0, formik_2.useFormikContext)();
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "fullname", type: "text" }, (props) => {
                        const base = isIndividual ? 'name' : 'company';
                        return (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, utils_1.getRequiredOrNot)(t(`checkoutDetails.form.${base}.label`), true), placeholder: t(`checkoutDetails.form.${base}.placeholder`) }));
                    })),
                !isIndividual && (react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "nip", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, utils_1.getRequiredOrNot)(t('checkoutDetails.form.nip.label'), true), placeholder: t('checkoutDetails.form.nip.placeholder') })))))),
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "street", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, utils_1.getRequiredOrNot)(t('checkoutDetails.form.street.label'), true), placeholder: t('checkoutDetails.form.street.placeholder') }))))),
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "postCode", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, utils_1.getRequiredOrNot)(t('checkoutDetails.form.postCode.label'), true), placeholder: t('checkoutDetails.form.postCode.placeholder') })))),
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "city", type: "text" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, utils_1.getRequiredOrNot)(t('checkoutDetails.form.city.label'), true), placeholder: t('checkoutDetails.form.city.placeholder') }))))),
            react_1.default.createElement(Row_1.default, null,
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "email", type: "email" }, (props) => (react_1.default.createElement(formik_1.CustomInput, { ...props, label: (0, utils_1.getRequiredOrNot)(t('checkoutDetails.form.email.label'), true), placeholder: t('checkoutDetails.form.email.placeholder') })))),
                react_1.default.createElement(FieldWrapper_1.default, null,
                    react_1.default.createElement(formik_2.Field, { name: "mobile" }, (props) => (react_1.default.createElement(formik_1.CustomMobileInput, { label: (0, utils_1.getRequiredOrNot)(t('checkoutDetails.form.phone.label'), true), fieldProps: props, name: "mobile", defaultValue: values.mobile }))))))));
};
exports["default"] = Form;


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
const routes_1 = __webpack_require__(74897);
const components_1 = __webpack_require__(26789);
const CheckoutProvider_1 = __webpack_require__(50542);
const react_switch_1 = __importDefault(__webpack_require__(59936));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const common_1 = __webpack_require__(73478);
const useForm_1 = __importDefault(__webpack_require__(5696));
const Form_1 = __importDefault(__webpack_require__(47790));
const CheckoutDetails = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    (0, hooks_1.useDocumentTitle)(t('checkoutDetails.tabTitle'));
    (0, hooks_1.useScrollTop)();
    const [isIndividual, setIsIndividual] = (0, react_1.useState)(checkout.customerType === 'INDIVIDUAL' || false);
    const { onSubmitForm, initialValues, getSchema } = (0, useForm_1.default)();
    if (!checkout.products) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_PRODUCTS });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('checkoutDetails.title')),
            react_1.default.createElement(Flexbox_1.default, { marginBottom: "m-size", justifyContent: "center", alignItems: "center" },
                react_1.default.createElement(CustomTypeButton, { onClick: () => setIsIndividual(false) }, t('checkoutDetails.customerTypes.COMPANY')),
                react_1.default.createElement(react_switch_1.default, { offColor: "#e1e1e1", onColor: "#e1e1e1", checkedIcon: false, uncheckedIcon: false, onChange: (checked) => setIsIndividual(checked), checked: isIndividual }),
                react_1.default.createElement(CustomTypeButton, { onClick: () => setIsIndividual(true) }, t('checkoutDetails.customerTypes.INDIVIDUAL'))),
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: getSchema(isIndividual), onSubmit: (form) => onSubmitForm(form, isIndividual) }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                react_1.default.createElement(Form_1.default, { isIndividual: isIndividual }),
                react_1.default.createElement(common_1.Actions, null)))))));
};
const CustomTypeButton = styled_components_1.default.button `
  width: 50%;
  height: 5rem;
  background: none;
  border: none;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
`;
exports["default"] = CheckoutDetails;


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
    const onSubmitForm = (form, isIndividual) => {
        setCheckout((prev) => ({
            ...prev,
            customerType: isIndividual ? 'INDIVIDUAL' : 'COMPANY',
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
    const getSchema = (isIndividual) => {
        const base = (0, yup_1.object)().shape({
            fullname: (0, yup_1.string)().required(t(`checkoutDetails.validations.${isIndividual ? 'name' : 'company'}.required`)),
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
        return isIndividual ? base : companySchema;
    };
    return {
        onSubmitForm,
        initialValues,
        getSchema
    };
};
exports["default"] = useForm;


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
const paymentMethods_1 = __importDefault(__webpack_require__(4264));
const common_1 = __webpack_require__(73478);
const Form = () => {
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    return (react_1.default.createElement("div", { className: "checkout-shipping-wrapper" },
        react_1.default.createElement("div", { className: "checkout-shipping-form" },
            react_1.default.createElement(common_1.Row, { flexDirection: "column" }, paymentMethods_1.default.map((method, index) => (react_1.default.createElement(formik_1.Field, { name: "paymentType", key: method }, (props) => (react_1.default.createElement(components_1.CheckboxField, { ...props, id: method, isFirst: index === 0, title: t(`checkoutPayment.form.paymentType.${method}.title`), subtitle: t(`checkoutPayment.form.paymentType.${method}.subtitle`), fieldLabel: t('checkoutPayment.form.paymentType.label') })))))))));
};
exports["default"] = Form;


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
exports["default"] = CheckoutPayment;


/***/ }),

/***/ 95181:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const paymentMethods_1 = __importDefault(__webpack_require__(4264));
const react_i18next_1 = __webpack_require__(86162);
const routes_1 = __webpack_require__(74897);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const react_query_1 = __webpack_require__(88767);
const api_1 = __webpack_require__(72934);
const BasketProvider_1 = __webpack_require__(81400);
const firestore_1 = __webpack_require__(84956);
const useFormSubmit = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { setBasket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { mutateAsync: mutateAddOrder, isLoading } = (0, react_query_1.useMutation)(api_1.addOrder);
    const { mutateAsync: mutateTriggerNewOrder } = (0, react_query_1.useMutation)(api_1.triggerNewOrder);
    const onSubmit = async (form) => {
        const now = firestore_1.Timestamp.fromDate(new Date());
        const updatedCheckout = {
            total: checkout.total,
            shipping: checkout.shipping ?? null,
            deliveryType: checkout.deliveryType ?? null,
            contactDetails: checkout.contactDetails ?? null,
            customerType: checkout.customerType ?? null,
            products: checkout.products ?? null,
            paymentType: form.paymentType ?? null,
            createdAt: now,
            modifiedAt: now,
            status: 'OPEN'
        };
        const response = await mutateAddOrder(updatedCheckout);
        const locationState = {
            orderID: response.id
        };
        history.push(routes_1.CHECKOUT_RESULT, locationState);
        mutateTriggerNewOrder({
            order: updatedCheckout,
            orderID: response.id
        });
        setCheckout(CheckoutProvider_1.initState);
        setBasket([]);
    };
    const initialValues = {
        paymentType: checkout.paymentType || 'TRANSFER'
    };
    const schema = (0, yup_1.object)().shape({
        paymentType: (0, yup_1.mixed)().oneOf([...paymentMethods_1.default], t('checkoutPayment.validation.paymentType.oneOf'))
    });
    return {
        onSubmit,
        initialValues,
        schema,
        isLoading
    };
};
exports["default"] = useFormSubmit;


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
            react_1.default.createElement(components_1.Flexbox, { minHeight: "20rem", flexDirection: "column", marginTop: "2rem", alignItems: "center" },
                isBasketEmpty && (react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center", flexGrow: 1 },
                    react_1.default.createElement("h5", { className: "basket-empty-msg" }, t('checkoutProducts.emptyState')))),
                basket.map((product, index) => (react_1.default.createElement(react_1.Fragment, { key: product.id },
                    index !== 0 && react_1.default.createElement(components_1.Separator, null),
                    react_1.default.createElement(BasketItem_1.default, { product: product }))))),
            !isBasketEmpty && react_1.default.createElement(common_1.Total, null),
            react_1.default.createElement(common_1.Actions, null))));
};
exports["default"] = CheckoutProducts;


/***/ }),

/***/ 5635:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Button_1 = __importDefault(__webpack_require__(91362));
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(86162);
const react_router_dom_1 = __webpack_require__(77856);
const hooks_1 = __webpack_require__(92457);
const react_fontawesome_1 = __webpack_require__(67814);
const styled_components_1 = __webpack_require__(91288);
const common_1 = __webpack_require__(73478);
const CheckoutResult = () => {
    const { state } = (0, react_router_dom_1.useLocation)();
    const { t } = (0, react_i18next_1.useTranslation)('checkout');
    (0, hooks_1.useDocumentTitle)(t('checkoutResult.tabTitle'));
    (0, hooks_1.useScrollTop)();
    const history = (0, react_router_dom_1.useHistory)();
    if (!state?.orderID) {
        // return <Redirect to={HOME} />
    }
    const alfa = (0, styled_components_1.useTheme)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(components_1.Tile, null,
                react_1.default.createElement(components_1.Flexbox, { marginTop: "3rem", justifyContent: "center" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: alfa.colors.green, size: "5x", icon: "check-circle" })),
                react_1.default.createElement(common_1.StepTitle, null, t('checkoutResult.title')),
                react_1.default.createElement(components_1.Flexbox, { marginTop: "1rem", alignItems: "center", flexDirection: "column", justifyContent: "center" },
                    react_1.default.createElement(components_1.Box, { as: "p", marginBottom: "0" }, t('checkoutResult.orderId')),
                    react_1.default.createElement("h3", null, state.orderID)),
                react_1.default.createElement(components_1.Flexbox, { textAlign: "center", justifyContent: "center", as: "p", marginBottom: "0" }, t('checkoutResult.info')),
                react_1.default.createElement(components_1.Flexbox, { marginTop: "5rem", flexDirection: "row-reverse", justifyContent: "space-between" },
                    react_1.default.createElement(Button_1.default, { variant: "primary", onClick: () => history.push(routes_1.PRODUCTS) }, t('checkoutResult.actions.backToShop')),
                    react_1.default.createElement(Button_1.default, { variant: "secondary", onClick: () => history.push(routes_1.HOME) }, t('checkoutResult.actions.backToHome')))))));
};
exports["default"] = CheckoutResult;


/***/ }),

/***/ 14048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
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
exports["default"] = Form;


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
exports["default"] = CheckoutShipping;


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
exports["default"] = useForm;


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
exports["default"] = Actions;


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
exports["default"] = FieldWrapper;


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
exports["default"] = Row;


/***/ }),

/***/ 50685:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const StepTitle = styled_components_1.default.h2 `
  text-align: center;
  margin: 3rem 0;
`;
exports["default"] = StepTitle;


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
  padding: ${(props) => props.theme.space['m-size']};
  background: ${(props) => props.theme.colors['border-color']};
  border-radius: 50%;
  width: 3px;
  height: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors['gray-10']};
`;
exports["default"] = StepTracker;


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
exports["default"] = Total;


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
exports["default"] = Wrapper;


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
exports.Contact = exports.Home = exports.AdminOrders = exports.CheckoutResult = exports.CheckoutShipping = exports.CheckoutPayment = exports.CheckoutDelivery = exports.CheckoutDetails = exports.CheckoutProducts = exports.ViewProduct = exports.PageNotFound = exports.App = exports.Products = void 0;
var Products_1 = __webpack_require__(71117);
Object.defineProperty(exports, "Products", ({ enumerable: true, get: function () { return __importDefault(Products_1).default; } }));
var App_1 = __webpack_require__(58341);
Object.defineProperty(exports, "App", ({ enumerable: true, get: function () { return __importDefault(App_1).default; } }));
var PageNotFound_1 = __webpack_require__(36888);
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
var AdminOrders_1 = __webpack_require__(53470);
Object.defineProperty(exports, "AdminOrders", ({ enumerable: true, get: function () { return __importDefault(AdminOrders_1).default; } }));
var Home_1 = __webpack_require__(97971);
Object.defineProperty(exports, "Home", ({ enumerable: true, get: function () { return __importDefault(Home_1).default; } }));
var Contact_1 = __webpack_require__(54366);
Object.defineProperty(exports, "Contact", ({ enumerable: true, get: function () { return __importDefault(Contact_1).default; } }));


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
exports["default"] = BasketProvider;


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
exports["default"] = BasketToggleProvider;


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
    },
    paymentType: null,
    products: null,
    customerType: null,
    contactDetails: null,
    deliveryType: null,
    shipping: null
};
exports.checkoutContext = (0, react_1.createContext)({
    checkout: exports.initState,
    setCheckout: () => undefined
});
const CheckoutProvider = ({ children }) => {
    const [checkout, setCheckout] = (0, react_1.useState)(exports.initState);
    return (react_2.default.createElement(exports.checkoutContext.Provider, { value: { checkout, setCheckout } }, children));
};
exports["default"] = CheckoutProvider;


/***/ }),

/***/ 30150:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loaderContext = void 0;
const react_1 = __webpack_require__(67294);
const react_2 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const changeColorAlpha_1 = __importDefault(__webpack_require__(95420));
const icons_1 = __webpack_require__(4747);
exports.loaderContext = (0, react_1.createContext)({
    show: () => undefined,
    hide: () => undefined
});
const LoaderProvider = ({ children }) => {
    const [loaderVisible, setLoaderVisible] = (0, react_1.useState)(false);
    return (react_2.default.createElement(exports.loaderContext.Provider, { value: {
            show: () => setLoaderVisible(true),
            hide: () => setLoaderVisible(false)
        } },
        loaderVisible && (react_2.default.createElement(Loader, null,
            react_2.default.createElement(Icon, null))),
        children));
};
const Loader = styled_components_1.default.div `
  background-color: ${(props) => `${(0, changeColorAlpha_1.default)(props.theme.colors.black, 0.25)}`};
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = (0, styled_components_1.default)(icons_1.LoadingOutlined) `
  font-size: 5rem;
`;
exports["default"] = LoaderProvider;


/***/ }),

/***/ 75935:
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
exports.remoteConfigContext = void 0;
const react_1 = __importStar(__webpack_require__(67294));
exports.remoteConfigContext = (0, react_1.createContext)({});
const RemoveConfigProvider = ({ children }) => {
    const [remoteConfig] = (0, react_1.useState)({});
    // React.useEffect(() => {
    //   const rc = getRemoteConfig()
    //   rc.settings.minimumFetchIntervalMillis = 10000
    //   fetchAndActivate(rc)
    //     .then((activated) => {
    //       if (!activated) {
    //         console.log('not activated')
    //       }
    //       return getAll(rc)
    //     })
    //     .then((remoteFlags) => {
    //       console.log(remoteFlags)
    //       Object.entries(remoteFlags).map((alfa) => {
    //         const key = alfa[0]
    //         const value = alfa[1]
    //         const val = value.asString()
    //         const
    //         console.log(val)
    //         // const val = value.()
    //         // console.log(alfa, val)
    //       })
    //       // const parsed = remoteConfigSchema.safeParse(remoteFlags)
    //       // console.log('pared', parsed)
    //     })
    //     .catch((error) => console.error(error))
    // }, [])
    return (react_1.default.createElement(exports.remoteConfigContext.Provider, { value: {
            ...remoteConfig
        } }, children));
};
exports["default"] = RemoveConfigProvider;


/***/ }),

/***/ 2253:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoaderProvider = exports.RemoteConfigProvider = exports.BasketProvider = exports.CheckoutProvider = exports.BasketToggleProvider = void 0;
var BasketToggleProvider_1 = __webpack_require__(38823);
Object.defineProperty(exports, "BasketToggleProvider", ({ enumerable: true, get: function () { return __importDefault(BasketToggleProvider_1).default; } }));
var CheckoutProvider_1 = __webpack_require__(50542);
Object.defineProperty(exports, "CheckoutProvider", ({ enumerable: true, get: function () { return __importDefault(CheckoutProvider_1).default; } }));
var BasketProvider_1 = __webpack_require__(81400);
Object.defineProperty(exports, "BasketProvider", ({ enumerable: true, get: function () { return __importDefault(BasketProvider_1).default; } }));
var RemoteConfigProvider_1 = __webpack_require__(75935);
Object.defineProperty(exports, "RemoteConfigProvider", ({ enumerable: true, get: function () { return __importDefault(RemoteConfigProvider_1).default; } }));
var LoaderProvider_1 = __webpack_require__(30150);
Object.defineProperty(exports, "LoaderProvider", ({ enumerable: true, get: function () { return __importDefault(LoaderProvider_1).default; } }));


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
    black: 'rgb(0, 0, 0)',
    color2: '#f1f1f1',
    'paragraph-color': '#4a4a4a',
    green: 'rgb(59, 150, 32)',
    red: 'rgba(247, 45, 45, 0.986)',
    'nav-bg-scrolled': '#fff',
    'nav-bg': '#f8f8f8',
    'background-color': '#f9f9f9',
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
exports["default"] = theme;


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
exports["default"] = calculateTotal;


/***/ }),

/***/ 74661:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayDate = void 0;
const format_1 = __importDefault(__webpack_require__(13604));
const displayDate = (date) => (0, format_1.default)(date, 'HH:mm dd/MM/yyyy');
exports.displayDate = displayDate;
exports["default"] = exports.displayDate;


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
exports["default"] = exports.displayMoney;


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
exports["default"] = getCollection;


/***/ }),

/***/ 14959:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const firestore_1 = __webpack_require__(84956);
const getDateFromTimestamp = (timestampDate) => {
    const timestamp = new firestore_1.Timestamp(timestampDate.seconds, timestampDate.nanoseconds);
    const date = timestamp.toDate();
    return date;
};
exports["default"] = getDateFromTimestamp;


/***/ }),

/***/ 54690:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const getRequiredOrNot = (label, required) => `${required ? '* ' : ''}${label}`;
exports["default"] = getRequiredOrNot;


/***/ }),

/***/ 49502:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRequiredOrNot = exports.getDateFromTimestamp = exports.displayDate = exports.displayMoney = exports.calculateTotal = exports.getCollection = exports.parseApiResponse = void 0;
var parseApiResponse_1 = __webpack_require__(71894);
Object.defineProperty(exports, "parseApiResponse", ({ enumerable: true, get: function () { return __importDefault(parseApiResponse_1).default; } }));
var getCollection_1 = __webpack_require__(53684);
Object.defineProperty(exports, "getCollection", ({ enumerable: true, get: function () { return __importDefault(getCollection_1).default; } }));
var calculateTotal_1 = __webpack_require__(25865);
Object.defineProperty(exports, "calculateTotal", ({ enumerable: true, get: function () { return __importDefault(calculateTotal_1).default; } }));
var displayMoney_1 = __webpack_require__(14751);
Object.defineProperty(exports, "displayMoney", ({ enumerable: true, get: function () { return __importDefault(displayMoney_1).default; } }));
var displayDate_1 = __webpack_require__(74661);
Object.defineProperty(exports, "displayDate", ({ enumerable: true, get: function () { return __importDefault(displayDate_1).default; } }));
var getDateFromTimestamp_1 = __webpack_require__(14959);
Object.defineProperty(exports, "getDateFromTimestamp", ({ enumerable: true, get: function () { return __importDefault(getDateFromTimestamp_1).default; } }));
var getRequiredOrNot_1 = __webpack_require__(54690);
Object.defineProperty(exports, "getRequiredOrNot", ({ enumerable: true, get: function () { return __importDefault(getRequiredOrNot_1).default; } }));


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
        console.log(obj);
        throw new Error(parsedResponse.error.message);
    }
    else {
        throw new Error('Error Parse');
    }
}
exports["default"] = parseApiResponse;


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
//# sourceMappingURL=main.7ae4d788defb3e657e69.js.map