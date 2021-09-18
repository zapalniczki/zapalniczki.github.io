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

/***/ 34971:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addOrder = void 0;
const supabase_1 = __importDefault(__webpack_require__(81091));
const addOrder = async (payload) => {
    // ADDRESS
    const { data: address, error: addressError } = await supabase_1.default
        .from('address')
        .upsert({
        street: payload.address.street,
        street_no: payload.address.streetNo,
        adress_cdn: payload.address.adressCdn,
        post_code: payload.address.postCode,
        city: payload.address.city
    })
        .single();
    if (addressError) {
        throw new Error(addressError.message);
    }
    if (!address) {
        throw new Error('addOrderSupabase/address error');
    }
    // SHIPPING
    const { data: shipping, error: shippingError } = await supabase_1.default
        .from('address')
        .upsert({
        street: payload.address.street,
        street_no: payload.address.streetNo,
        adress_cdn: payload.address.adressCdn,
        post_code: payload.address.postCode,
        city: payload.address.city
    })
        .single();
    if (shippingError) {
        throw new Error(shippingError.message);
    }
    if (!shipping) {
        throw new Error('addOrderSupabase/shipping error');
    }
    // USER
    const { data: userData, error: userError } = await supabase_1.default
        .from('user')
        .insert([
        {
            is_company: payload.isCompany,
            full_name: payload.fullname,
            address_id: address.id,
            shipping_id: shipping.id,
            phone: payload.phone,
            email: payload.email,
            preferred_payment: payload.paymentType,
            preferred_delivery: payload.deliveryType
        }
    ])
        .single();
    if (userError) {
        throw new Error(userError.message);
    }
    if (!userData) {
        throw new Error('addOrderSupabase/user error');
    }
    // ORDER
    const { data: order, error: orderError } = await supabase_1.default
        .from('order')
        .insert([
        {
            status: 'OPEN',
            user_id: userData.id,
            shipping_id: shipping.id,
            delivery_type: payload.deliveryType,
            payment_type: payload.paymentType,
            total: payload.total
        }
    ])
        .single();
    if (orderError) {
        throw new Error(orderError.message);
    }
    if (!order) {
        throw new Error('addOrderSupabase/order error');
    }
    // ORDER_ITEM
    const { data: orderItem, error: orderItemError } = await supabase_1.default
        .from('order_item')
        .insert(payload.products.map((product) => ({
        product_id: product.id,
        quantity: product.quantity,
        order_id: order.id
    })));
    if (orderItemError) {
        throw new Error(orderItemError.message);
    }
    if (!orderItem) {
        throw new Error('addOrderSupabase/orderItem error');
    }
    return order.id;
};
exports.addOrder = addOrder;


/***/ }),

/***/ 60442:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetDeliveryTypes = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getDeliveryTypes = async () => {
    const { data, error } = await supabase_1.default
        .from('delivery_type')
        .select('id, label, price, time, requires_address, isAvailable');
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getDeliveryTypes');
    }
    return data;
};
const useGetDeliveryTypes = () => (0, react_query_1.useQuery)('deliveryTypes', getDeliveryTypes);
exports.useGetDeliveryTypes = useGetDeliveryTypes;
exports["default"] = getDeliveryTypes;


/***/ }),

/***/ 69501:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetCollectionProducts = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getCollectionProducts = async (params) => {
    const { data, error } = await supabase_1.default
        .from('products')
        .select('id, price, name, gallery')
        .filter('collection_id', 'eq', params.collectionId);
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getCollectionProducts');
    }
    return data;
};
const useGetCollectionProducts = (params) => {
    return (0, react_query_1.useQuery)(['products', params], () => getCollectionProducts(params));
};
exports.useGetCollectionProducts = useGetCollectionProducts;


/***/ }),

/***/ 49455:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetLabelProducts = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getLabelProducts = async (params) => {
    const { data, error } = await supabase_1.default
        .from('products')
        .select('id, price, name, gallery')
        .filter('label_id', 'eq', params.labelId);
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getLabelProduct');
    }
    return data;
};
const useGetLabelProducts = (params) => {
    return (0, react_query_1.useQuery)(['products', params], () => getLabelProducts(params));
};
exports.useGetLabelProducts = useGetLabelProducts;


/***/ }),

/***/ 99780:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMoldsQueryKey = exports.useGetMolds = void 0;
const firestore_1 = __webpack_require__(84956);
const models_1 = __webpack_require__(75357);
const react_query_1 = __webpack_require__(88767);
const utils_1 = __webpack_require__(49502);
const getMolds = async () => {
    const db = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.collection)(db, 'molds');
    const snapshot = await (0, firestore_1.getDocs)(ref);
    const orders = (0, utils_1.getCollection)(snapshot, models_1.mold);
    return orders;
};
const useGetMolds = () => (0, react_query_1.useQuery)(exports.getMoldsQueryKey, getMolds);
exports.useGetMolds = useGetMolds;
exports.getMoldsQueryKey = 'molds';
exports["default"] = getMolds;


/***/ }),

/***/ 8751:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetOrderStatus = exports.getOrderStatus = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getOrderStatus = async (params) => {
    const { data, error } = await supabase_1.default
        .from('order')
        .select('status')
        .eq('id', params.id)
        .single();
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getProducts');
    }
    return data;
};
exports.getOrderStatus = getOrderStatus;
const useGetOrderStatus = () => {
    const { mutateAsync } = (0, react_query_1.useMutation)(exports.getOrderStatus);
    return (params) => mutateAsync(params);
};
exports.useGetOrderStatus = useGetOrderStatus;


/***/ }),

/***/ 80433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOrdersQueryKey = exports.useGetOrders = void 0;
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
    const queryKey = (0, exports.getOrdersQueryKey)(status);
    return (0, react_query_1.useQuery)(queryKey, () => getOrders(status));
};
exports.useGetOrders = useGetOrders;
const getOrdersQueryKey = (status) => status ? `orders/${status}` : 'orders';
exports.getOrdersQueryKey = getOrdersQueryKey;
exports["default"] = getOrders;


/***/ }),

/***/ 33924:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetOtherIcons = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getOtherIcons = async (params) => {
    const { data, error } = await supabase_1.default
        .from('products')
        .select('id, price, name, gallery')
        .filter('label_id', 'eq', params.labelId)
        .filter('icon_id', 'neq', params.iconId);
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getOtherIcons');
    }
    return data;
};
const useGetOtherIcons = (params) => {
    return (0, react_query_1.useQuery)(['products', params], () => getOtherIcons(params));
};
exports.useGetOtherIcons = useGetOtherIcons;


/***/ }),

/***/ 89983:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetOtherPlaces = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getOtherPlaces = async (params) => {
    const { data, error } = await supabase_1.default
        .from('products')
        .select('id, price, name, gallery')
        .filter('collection_id', 'eq', params.collectionId)
        .filter('label_id', 'neq', params.labelId);
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getOtherIcons');
    }
    return data;
};
const useGetOtherPlaces = (params) => {
    return (0, react_query_1.useQuery)(['products', params], () => getOtherPlaces(params));
};
exports.useGetOtherPlaces = useGetOtherPlaces;


/***/ }),

/***/ 54614:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetProduct = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getProduct = async ({ id }) => {
    const { data, error } = await supabase_1.default
        .from('products')
        .select(`
      id,
      price,
      name,
      gallery,
      description,
      label: labels (
        label,
        id
      ),
      icon: icons (
        label,
        id
      ),
      collection: collections (
        label,
        id
      )
      `)
        .eq('id', id)
        .single();
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getProduct');
    }
    return data;
};
const useGetProduct = (payload) => {
    return (0, react_query_1.useQuery)(['product', payload], () => getProduct(payload));
};
exports.useGetProduct = useGetProduct;


/***/ }),

/***/ 78487:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetProducts = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getProducts = async () => {
    const { data, error } = await supabase_1.default
        .from('products')
        .select('id, price, name, gallery, label_id, icon_id, collection_id');
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getProducts');
    }
    return data;
};
const useGetProducts = () => (0, react_query_1.useQuery)('products', getProducts);
exports.useGetProducts = useGetProducts;


/***/ }),

/***/ 72934:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMolds = exports.triggerNewOrder = exports.updateOrderStatus = exports.getOrders = void 0;
var getOrders_1 = __webpack_require__(80433);
Object.defineProperty(exports, "getOrders", ({ enumerable: true, get: function () { return __importDefault(getOrders_1).default; } }));
var updateOrderStatus_1 = __webpack_require__(80141);
Object.defineProperty(exports, "updateOrderStatus", ({ enumerable: true, get: function () { return __importDefault(updateOrderStatus_1).default; } }));
var triggerNewOrder_1 = __webpack_require__(47700);
Object.defineProperty(exports, "triggerNewOrder", ({ enumerable: true, get: function () { return __importDefault(triggerNewOrder_1).default; } }));
var getMolds_1 = __webpack_require__(99780);
Object.defineProperty(exports, "getMolds", ({ enumerable: true, get: function () { return __importDefault(getMolds_1).default; } }));
// PRODUCTS
__exportStar(__webpack_require__(69501), exports);
__exportStar(__webpack_require__(49455), exports);
__exportStar(__webpack_require__(33924), exports);
__exportStar(__webpack_require__(89983), exports);
__exportStar(__webpack_require__(54614), exports);
__exportStar(__webpack_require__(78487), exports);
// PAYMENT TYPES
__exportStar(__webpack_require__(358), exports);
// DELIVERY TYPES
__exportStar(__webpack_require__(60442), exports);
// ORDERS
__exportStar(__webpack_require__(34971), exports);
__exportStar(__webpack_require__(8751), exports);


/***/ }),

/***/ 358:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useGetPaymentTypes = void 0;
const react_query_1 = __webpack_require__(88767);
const supabase_1 = __importDefault(__webpack_require__(81091));
const getPaymentTypes = async () => {
    const { data, error } = await supabase_1.default
        .from('payment_type')
        .select('id, label');
    if (error) {
        throw new Error(error.message);
    }
    if (!data) {
        throw new Error('No data in getPaymentTypes');
    }
    return data;
};
const useGetPaymentTypes = () => (0, react_query_1.useQuery)('paymentTypes', getPaymentTypes);
exports.useGetPaymentTypes = useGetPaymentTypes;
exports["default"] = getPaymentTypes;


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
const firestore_1 = __webpack_require__(84956);
const index_1 = __webpack_require__(17927);
const LoaderProvider_1 = __webpack_require__(30150);
const react_1 = __webpack_require__(67294);
const react_query_1 = __webpack_require__(88767);
const updateOrderStatus = async (payload) => {
    const db = (0, firestore_1.getFirestore)();
    const ref = (0, firestore_1.doc)(db, 'orders', payload.id);
    const snapshot = await (0, firestore_1.updateDoc)(ref, {
        status: payload.status,
        modifiedAt: firestore_1.Timestamp.fromDate(new Date())
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

/***/ 42636:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DELIVERY_METHODS = exports.PAYMENT_METHODS = void 0;
exports.PAYMENT_METHODS = ['TRANSFER'];
exports.DELIVERY_METHODS = [
    {
        name: 'FREE_PARCEL',
        price: 0,
        time: '3 - 5 dni roboczych',
        icon: 'truck'
    },
    {
        name: 'PICK_UP',
        price: 0,
        time: 'Czas na realizację',
        icon: 'box-open'
    }
];


/***/ }),

/***/ 52007:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const pl = {
    COMMON: {
        checkoutSteps: {
            1: 'Podsumowanie',
            2: 'Dane kontaktowe',
            3: 'Dostawa',
            5: 'Płatność'
        },
        checkoutTotal: {
            delivery: 'Dostawa',
            products: 'Produkty',
            sum: 'Suma'
        },
        checkoutActions: {
            backToShop: 'Wróć do sklepu',
            back: 'Wróć',
            next: 'Dalej',
            createOrder: 'Zamawiam i płacę'
        },
        paymentTypes: {
            TRANSFER: {
                title: 'Przelew tradycyjny',
                subtitle: 'W tym momencie oferujemy tylko ten sposób płatności'
            }
        },
        customerTypes: {
            INDIVIDUAL: 'Klient indywidualny',
            COMPANY: 'Firma'
        },
        deliveryTypes: {
            FREE_PARCEL: 'Bezpłatna dostawa',
            PICK_UP: 'Odbiór własny'
        },
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
            deliveryAndPayments: 'Dostawa i płatności',
            contact: 'Kontakt',
            HOW_TO_CREATE_ORDER: 'Jak złożyć zamówienie'
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
        companyName: 'braty.co',
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
        },
        readTermAndConditions: {
            title: 'Koniecznie przeczytaj regulamin',
            buttonLabel: 'Przejdź do regulaminu'
        },
        readPrivacyPolicy: {
            title: 'Koniecznie przeczytaj politykę prywatności',
            buttonLabel: 'Przejdź do polityki prywatnści'
        }
    },
    // profilePage: {
    //   tabs: {
    //     account: 'Profil',
    //     orders: 'Zamówienia'
    //   },
    //   account: {
    //     noValue: 'Brak',
    //     fields: {
    //       customerType: 'Typ konta',
    //       phone: 'Numer telefonu',
    //       email: 'Email',
    //       street: 'Adres',
    //       postCode: 'Kod pocztowy',
    //       city: 'Miasto',
    //       dateJoined: 'Data założenia konta'
    //     },
    //     customerTypes: {
    //       INDIVIDUAL: 'Klient Indywidualny',
    //       COMPANY: 'Firma'
    //     }
    //   }
    // },
    // signUpPage: {
    //   name: { label: 'Imię i nazwisko / Nazwa firmy', placeholder: 'Adam Nowak' },
    //   email: { label: 'Adres email', placeholder: 'test@example.com' },
    //   password: { label: 'Hasło', placeholder: 'Twoje hasło' },
    //   signUp: 'Zarejestruj się',
    //   signingUp: 'Poczekaj chwilę',
    //   haveAccount: 'Masz konto?',
    //   signIn: 'Zaloguj się',
    //   title: 'Zarejestuj nowe konto',
    //   validations: {
    //     email: {
    //       email: 'Email nie jest prawidłowy',
    //       required: 'Email jest wymagany'
    //     },
    //     password: {
    //       required: 'Hasło jest wymagane',
    //       min: 'Minimalna liczba znaków to 8',
    //       matches: 'Hasło powinno zawierać co najmniej 1 wielką literę'
    //     }
    //   }
    // },
    // signupConfirmationPage: {
    //   title: 'Potwierdź adres email',
    //   info: 'Na podany adres email wysłaliśmy wiadomość z linkiem do potwierdzenia konta.'
    // },
    // forgotPasswordPage: {
    //   title: 'Nie pamiętasz hasła?',
    //   info: 'Wprowadż adres e-mail a my wyślemy wiadomość z linkiem do zresetowania hasła.',
    //   placeholder: 'Twój e-mail',
    //   buttonLabel: 'Zresetuj hasło',
    //   loadingLabel: 'Przetwarzanie'
    // },
    // signInPage: {
    //   title: 'Zaloguj się',
    //   form: {
    //     email: {
    //       label: 'Email',
    //       placeholder: ''
    //     },
    //     password: {
    //       label: 'Hasło',
    //       placeholder: ''
    //     }
    //   },
    //   forgotPassword: 'Nie pamiętasz hasła?',
    //   notSignedup: 'Potrzebujesz konta?',
    //   signIn: 'Zaloguj się',
    //   signIning: 'Poczekaj chwilę',
    //   signUp: 'Zarejestruj się'
    // },
    // ADD_PRODUCT_PAGE: {
    //   title: 'Dodaj produkt',
    //   form: {
    //     productName: 'Nazwa produktu',
    //     description: 'Opis',
    //     price: 'Cena',
    //     variants: {
    //       label: 'Dostępne opcje',
    //       placeholder: ''
    //     },
    //     mainPicture: {
    //       label: 'Zdjęcie główne',
    //       placeholder: 'Wybierz zdjęcie'
    //     },
    //     gallery: {
    //       label: 'Galeria',
    //       placeholder: 'Wybierz zdjęcia'
    //     },
    //     featured: {
    //       label: 'Dodaj do nowych'
    //     },
    //     recommended: {
    //       label: 'Dodaj do rekomendowanych'
    //     }
    //   },
    //   actions: {
    //     save: 'Zapisz'
    //   }
    // },
    HOME: {
        title: 'Strona Główna',
        banner: {
            description: 'Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.',
            buttonLabel: 'Kup teraz'
        },
        bestsellers: {
            title: 'Bestsellery',
            linkLabel: 'Zobacz wszystkie'
        }
    },
    CHECKOUT_PRODUCTS: {
        title: 'Podsumowanie',
        desc: 'Sprawdź produkty w Twoim koszyku.',
        productsTotal: 'Cena produktów:',
        emptyState: 'Koszyk jest pusty. Dodaj produkty do koszyka i wróć tutaj później.'
    },
    CHECKOUT_DETAILS: {
        title: 'Dane kontaktowe',
        form: {
            fullName: {
                label: 'Imię i nazwisko',
                placeholder: '',
                validations: {
                    required: 'To pole jest wymagane'
                }
            },
            email: {
                label: 'Adres email',
                placeholder: '',
                validations: {
                    email: 'Wprowadzony email jest niepoprawny',
                    required: 'Proszę podać adres e-mail'
                }
            },
            phone: {
                label: 'Numer telefonu',
                placeholder: '',
                validations: {
                    min: 'Numer telefonu powinien składać się z numeru kierunkowego i 9 cyfr',
                    required: 'Proszę podać numer telefonu'
                }
            },
            street: {
                label: 'Ulica',
                placeholder: '',
                validations: {
                    required: 'Proszę podać adres'
                }
            },
            streetNr: {
                label: 'Numer domu',
                placeholder: '',
                validations: {
                    required: 'Proszę podać numer domu lub ulicy'
                }
            },
            addressCdn: {
                label: 'Adres c.d.',
                placeholder: '',
                validations: {}
            },
            postCode: {
                label: 'Kod pocztowy',
                placeholder: '',
                validations: {
                    matches: 'Kod pocztowy powinien mieć format XX-XXX',
                    required: 'Proszę podać kod pocztowy'
                }
            },
            city: {
                label: 'Miasto',
                placeholder: '',
                validations: {
                    required: 'Proszę podać miejscowość'
                }
            },
            nip: {
                label: 'NIP',
                placeholder: '',
                validations: {
                    required: 'Proszę podać prawidłowy NIP',
                    length: 'NIP powinien mieć 10 znaków',
                    matches: 'NIP powinien zawierać tylko cyfry'
                }
            }
        }
    },
    CHECKOUT_DELIVERY: {
        title: 'Dostawa',
        form: {
            deliveryType: {
                label: 'Wybierz sposób dostawy',
                validations: {
                    required: 'Wybierz aby przejść dalej.'
                }
            }
        }
    },
    CHECKOUT_SHIPPING: {
        title: 'Dane do dostawy',
        form: {
            street: {
                label: 'Ulica',
                placeholder: '',
                validations: {
                    required: 'Proszę podać adres'
                }
            },
            streetNr: {
                label: 'Numer domu',
                placeholder: '',
                validations: {
                    required: 'Proszę podać numer domu lub ulicy'
                }
            },
            addressCdn: {
                label: 'Adres c.d.',
                placeholder: '',
                validations: {}
            },
            postCode: {
                label: 'Kod pocztowy',
                placeholder: '',
                validations: {
                    matches: 'Kod pocztowy powinien mieć format XX-XXX',
                    required: 'Proszę podać kod pocztowy'
                }
            },
            city: {
                label: 'Miasto',
                placeholder: '',
                validations: {
                    required: 'Proszę podać miejscowość'
                }
            }
        }
    },
    CHECKOUT_PAYMENT: {
        title: 'Płatność',
        form: {
            paymentType: {
                label: 'Wybierz sposób płatności',
                validations: {
                    required: 'Wybierz, aby przejść dalej.'
                }
            }
        }
    },
    CHECKOUT_RESULT: {
        title: 'Dziękujemy za złożenie zamówienia',
        orderId: 'ID Twojego zamówienia to:',
        info: 'Na podany adres email wysłaliśmy wiadomość z potwierdzeniem. Znajdują się tam informacje o szczegółach zamówienia, dostawy i danymi do płatności.',
        actions: {
            backToHome: 'Wróć na stronę główną',
            backToShop: 'Kontynuuj zakupy',
            orders: 'Przejdź do zamówień',
            confirmation: 'Zobacz zamówienie'
        }
    },
    PRODUCTS: {
        title: 'Produkty',
        showAllLabel: 'Pokaż wszystkie',
        productsSingle: '{{count}} produkt',
        productsFew: '{{count}} produkty',
        productsMultiple: '{{count}} produktów',
        searchPlaceholder: 'Wyszukaj'
    },
    PAGE_NOT_FOUND: {
        title: '404 ',
        heading: ':( Strona, której szukasz, nie istnieje.',
        buttonLabel: 'Przejdź na stronę główną'
    },
    VIEW_PRODUCT: {
        title: '{{productName}}',
        icon: 'ikona',
        label: 'napis',
        color: 'kolor',
        colorValueTODO: 'drewno mix',
        priceSubtitle: 'Cena za 50 sztuk - zawiera VAT',
        actions: {
            goBack: 'Wróć',
            addToBasket: 'Dodaj do koszyka',
            removeFromBasket: 'Usuń z koszyka'
        },
        max10characters: 'Maksymalnie 10 znaków',
        selectPlaceholder: 'Wybierz albo wyszukaj',
        otherIcons: {
            title: 'Inne ikony',
            linkLabel: 'Zobacz wszystkie'
        },
        otherPlaces: {
            title: 'Inne miejsca',
            linkLabel: 'Zobacz wszystkie'
        }
    },
    ADMIN_ORDERS: {
        statusesInfo: {
            OPEN: 'Zamówienia, które dostały dopiero złożone. Zmiana statusu po zaksięgowaniu "SUMA" na koncie.',
            PAYMENT_RECEIVED: 'Zamówienia, które zostały opłacone. Zmiana statusu po zazieleniu wszystkich w "MATRYCE".',
            IN_PREPARATION: 'Zamówienia, które można zrealizować. Zmiana statusu po ukończeniu produkcji.',
            AWAITING_FOR_PICKUP: 'Zamówienia, które są wyprodukowane. Zmiana statusu po wprowadzeniu "NUMER PACZKI".',
            IN_DELIVERY: 'Zamówienia, które są odebrane przez kuriera. Zmiana statusu po otrzymaniu paczki przez klienta.',
            COMPLETED: 'Zamówienia, które są ukończone.'
        },
        headers: {
            id: 'Id zamówienia',
            status: 'Zmień status ',
            customerName: 'Nazwa klienta',
            customerPhone: 'Telefon',
            customerEmail: 'Email',
            createdAt: 'Data zamówienia',
            modifiedAt: 'Data modyfikacji',
            customerType: 'Typ Klienta',
            deliveryType: 'Typ dostawy',
            sum: 'Suma',
            boxesCount: 'Liczba pudełek',
            molds: 'Matryce',
            orderTime: 'Czas zamówienia',
            deliveryId: 'Numer paczki'
        },
        emptyState: 'Nie ma żadnych zamówień'
    },
    CONTACT: {
        title: 'Kontakt',
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
                email: 'sklep.braty@gmail.com'
            },
            GET_INVOICE: {
                title: 'Pobierz fakturę'
            },
            ADDRESS: {
                title: 'Adres',
                info: 'Wymiany, zwroty i odbiór osobisty',
                address1: 'BRATY Przemysław Rychlewicz',
                address2: 'ul. Bora-Komorowskiego 12/1',
                address3: '80-366 Gdańsk',
                address4: 'Polska'
            },
            PHONE: {
                title: 'Telefon',
                info: 'Czynne od poniedziałku do piątku, w godzinach 9:00 do 17:00.',
                mobile: '+48 792 531 179'
            },
            ACCOUNT: {
                title: 'Numer konta',
                info: 'Do wpłat',
                nrb: '31 1140 2004 0000 3402 8090 0648',
                info2: 'Nazwa banku: mBank S.A.',
                info3: 'Tytuł: ID zamówienia'
            }
        }
    },
    DELIVERY_AND_PAYMENTS: {
        title: 'Dostawa i płatności',
        processingTime: {
            title: 'Czas realizacji',
            items: {
                PRODUCTION: {
                    title: 'Czas produkcji X-X dni roboczych',
                    description: 'Zależy głównie od liczby zamówionych pudełek oraz czy zamawiasz u nas pierwszy raz.'
                },
                DELIVERY: {
                    title: 'Czas dostawy X-X dni roboczych',
                    description: 'Wysyłka zazwyczaj następuje następnego dnia roboczego.'
                },
                TOTAL: {
                    title: 'Łącznie X-XX dni roboczych',
                    description: 'Całkowity czas realizacji zależy od zamówienia. Zadzwoń na +48 XXX XXX XXX i upewnj się, że zamówienie będzie na czas.'
                }
            }
        },
        payments: {
            title: 'Rodzaje płatności'
        },
        delivery: {
            title: 'Sposoby dostawy'
        }
    },
    HOW_TO_CREATE_ORDER: {
        title: 'Jak złożyć zamówienie',
        MAKE_ORDER_STEPS: {
            title: 'Jak złożyć zamówienie',
            steps: {
                FIND_PRODUCT: 'Przejdź do zakładki PŁATNOŚCI i znajdź interesujący Cię produkt.',
                ADD_TO_BASKET: 'Po zweryfikowaniu produktu, jego opisu i ceny, dodaj produkt do koszyka za pomocą przycisku DODAJ DO KOSZYKA.'
            }
        }
    },
    TERMS_AND_CONDITIONS: {
        title: 'Regulamin',
        linkLabel: 'Aktualna wersja dokumentu'
    },
    PRIVACY_POLICY: {
        title: 'Polityka prywatności'
    }
};
exports["default"] = pl;


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
const components_1 = __webpack_require__(26789);
const react_1 = __importStar(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const react_router_dom_1 = __webpack_require__(77856);
const BasketProvider_1 = __webpack_require__(81400);
const QueryLoader_1 = __importDefault(__webpack_require__(83253));
const utils_1 = __webpack_require__(49502);
const routes_1 = __webpack_require__(74897);
const BasketToggleProvider_1 = __webpack_require__(38823);
const react_fontawesome_1 = __webpack_require__(67814);
const SimpleButton_1 = __importDefault(__webpack_require__(60212));
const api_1 = __webpack_require__(72934);
const lodash_add_1 = __importDefault(__webpack_require__(24427));
const CheckoutProvider_1 = __webpack_require__(50542);
const lodash_subtract_1 = __importDefault(__webpack_require__(81057));
const BasketItem = ({ product: basketProduct }) => {
    const { setBasket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { closeBasket } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    const { setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { id, quantity } = basketProduct;
    const productQuery = (0, api_1.useGetProduct)({ id });
    const productPath = (0, react_router_dom_1.generatePath)(routes_1.VIEW_PRODUCT, { id });
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(QueryLoader_1.default, { query: productQuery }, (product) => {
            const modifyQuantity = (addition) => {
                setBasket((prev) => {
                    if (addition === undefined) {
                        const productInBasket = findBasketItem(prev, basketProduct).product;
                        return prev.filter((elem) => elem !== productInBasket);
                    }
                    else {
                        const index = findBasketItem(prev, basketProduct).index;
                        const result = [...prev];
                        result[index].quantity = quantity + (addition ? 1 : -1);
                        return result;
                    }
                });
                setCheckout((checkoutPrev) => {
                    const productTotal = product.price * basketProduct.quantity;
                    return {
                        ...checkoutPrev,
                        totalNew: addition === undefined
                            ? (0, lodash_subtract_1.default)(checkoutPrev.totalNew, productTotal)
                            : addition
                                ? (0, lodash_add_1.default)(checkoutPrev.totalNew, product.price)
                                : (0, lodash_subtract_1.default)(checkoutPrev.totalNew, product.price)
                    };
                });
            };
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(SimpleButton_1.default, { disabled: quantity === 1, gridArea: "button-minus", onClick: () => modifyQuantity(false) },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "minus", size: "1x" })),
                react_1.default.createElement(SimpleButton_1.default, { gridArea: "button-plus", onClick: () => modifyQuantity(true) },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "plus", size: "1x" })),
                react_1.default.createElement(components_1.Box, { gridArea: "picture", position: "relative", width: "9rem", height: "9rem", border: "1px solid", borderColor: "border-color" },
                    react_1.default.createElement(components_1.ImageLoader, { alt: product.name, src: product.gallery[0] })),
                react_1.default.createElement(components_1.Flexbox, { flexDirection: "column", gridArea: "name" },
                    react_1.default.createElement(components_1.Link, { to: productPath, onClick: closeBasket }, product.name)),
                react_1.default.createElement(components_1.Flexbox, { alignItems: "center" },
                    react_1.default.createElement(components_1.Box, { as: "h4", margin: "0", marginRight: "m-size" }, (0, utils_1.displayMoney)(product.price)),
                    react_1.default.createElement(components_1.Badge, { stanalone: true, count: quantity })),
                react_1.default.createElement(SimpleButton_1.default, { gridArea: "button-remove", onClick: () => modifyQuantity(undefined) },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "times", size: "1x" }))));
        })));
};
const findBasketItem = (basket, product) => {
    const index = basket.findIndex((elem) => elem.id === product.id);
    return {
        product: basket[index],
        index
    };
};
const Container = (0, styled_components_1.default)(components_1.Tile) `
  padding: ${(props) => props.theme.space['s-size']};
  min-height: 11.6rem;
  display: flex;
  align-items: center;
  /* @include bezier-transition(); */
  /* animation: slide-up 0.5s ease; */
  width: 100%;
  margin-bottom: ${(props) => props.theme.space['m-size']};
  display: grid;
  grid-template-columns: max-content 9rem auto max-content;
  grid-template-rows: repeat(2, 4.6rem);
  grid-gap: 0.5rem 2rem;
  grid-template-areas:
    'button-plus picture name button-remove'
    'button-minus picture alba button-remove';
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
const components_1 = __webpack_require__(26789);
const utils_1 = __webpack_require__(49502);
const BasketProvider_1 = __webpack_require__(81400);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const react_router_dom_1 = __webpack_require__(77856);
const BasketToggleProvider_1 = __webpack_require__(38823);
const routes_1 = __webpack_require__(74897);
const api_1 = __webpack_require__(72934);
const CheckoutProvider_1 = __webpack_require__(50542);
const Checkout = () => {
    const { t } = (0, react_i18next_1.useTranslation)('COMMON');
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const history = (0, react_router_dom_1.useHistory)();
    const { basket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const productsQuery = (0, api_1.useGetProducts)();
    const { closeBasket } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    const { setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    return (react_1.default.createElement(components_1.QueryLoader, { query: productsQuery }, (products) => {
        const total = (0, utils_1.calculateTotal)(basket.map((product) => (0, exports.getProductTotal)(products, product)));
        return (react_1.default.createElement(components_1.Flexbox, { background: "white", padding: "m-size", alignItems: "center", width: "100%" },
            react_1.default.createElement("div", null,
                react_1.default.createElement(components_1.Box, { as: "p", margin: "0", fontSize: "font-small" }, t('basket.total')),
                react_1.default.createElement(components_1.Box, { as: "h2", margin: "0" }, (0, utils_1.displayMoney)(total))),
            react_1.default.createElement(components_1.Button, { variant: "secondary", marginLeft: "auto", onClick: () => {
                    closeBasket();
                    history.push(routes_1.PRODUCTS);
                } }, t('basket.backToShop')),
            react_1.default.createElement(components_1.Button, { marginLeft: "m-size", onClick: () => {
                    setCheckout((prev) => ({
                        ...prev,
                        totalNew: total,
                        products2: basket
                    }));
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
const react_1 = __importStar(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const react_i18next_1 = __webpack_require__(26828);
const BasketProvider_1 = __webpack_require__(81400);
const BasketToggleProvider_1 = __webpack_require__(38823);
const CheckoutProvider_1 = __webpack_require__(50542);
const Header = () => {
    const { t } = (0, react_i18next_1.useTranslation)('COMMON');
    const { closeBasket } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    const { clearBasket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
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
        !!basketLength && (react_1.default.createElement(components_1.Button, { marginRight: "s-size", size: "small", variant: "secondary", onClick: () => {
                clearBasket();
                setCheckout((prev) => ({
                    ...prev,
                    totalNew: 0
                }));
            }, type: "button" }, t('basket.clear'))),
        react_1.default.createElement(components_1.Button, { size: "small", variant: "secondary", onClick: closeBasket, type: "button" }, t('basket.close'))));
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
const SimpleButton = ({ disabled, onClick, children, ...props }) => (react_1.default.createElement(components_1.Box, { ...props },
    react_1.default.createElement(components_1.Button, { size: "small", variant: "ternary", disabled: disabled, onClick: onClick, type: "button" }, children)));
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
const react_1 = __importStar(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const BasketProvider_1 = __webpack_require__(81400);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const BasketToggleProvider_1 = __webpack_require__(38823);
const react_i18next_1 = __webpack_require__(26828);
const Header_1 = __importDefault(__webpack_require__(8558));
const Checkout_1 = __importDefault(__webpack_require__(83601));
const BasketItem_1 = __importDefault(__webpack_require__(3405));
const react_dom_1 = __webpack_require__(73935);
const Basket = () => {
    const { t } = (0, react_i18next_1.useTranslation)('COMMON');
    const { isOpen, setIsOpen } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    const { basket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (event.target instanceof HTMLElement &&
                !(0, react_dom_1.findDOMNode)(ref.current)?.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });
    return (react_1.default.createElement(Container, { ref: ref, isOpen: isOpen },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(components_1.Flexbox, { flexGrow: 1, flexDirection: "column", overflowY: "auto", padding: "s-size" },
            !basketLength && (react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center", flexGrow: 1 },
                react_1.default.createElement(components_1.Box, { as: "h5", color: "gray-10" }, t('basket.empty')))),
            basket.map((product) => (react_1.default.createElement(react_1.Fragment, { key: product.id },
                react_1.default.createElement(BasketItem_1.default, { product: product }))))),
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
exports["default"] = Basket;


/***/ }),

/***/ 67759:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const FeatureItem_1 = __importDefault(__webpack_require__(24690));
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const Features = () => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.SectionHead, { marginTop: "xxl-size", title: commonT('features.title') }),
        react_1.default.createElement(components_1.Grid, null, features.map((feature) => (react_1.default.createElement(FeatureItem_1.default, { key: feature.key, title: commonT(`features.items.${feature.key}`) },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: feature.icon, size: "3x" })))))));
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
exports["default"] = Features;


/***/ }),

/***/ 82813:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const Footer = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const visibleOnlyPath = [
        routes_1.HOME,
        routes_1.PRODUCTS,
        routes_1.VIEW_PRODUCT,
        routes_1.HOW_TO_CREATE_ORDER,
        routes_1.DELIVERY_AND_PAYMENTS,
        routes_1.TERMS_AND_CONDITIONS,
        routes_1.PRIVACY_POLICY,
        routes_1.CONTACT
    ];
    const matchRoute = (0, react_router_dom_1.matchPath)(pathname, {
        path: visibleOnlyPath,
        exact: true,
        strict: false
    });
    if (!matchRoute) {
        return null;
    }
    return (react_1.default.createElement(components_1.Flexbox, { paddingX: "xxl-size", paddingY: "l-size", backgroundColor: "off-white", justifyContent: "center", alignItems: "center" },
        react_1.default.createElement(components_1.Flexbox, { flexDirection: "column", alignItems: "center", justifyContent: "center" },
            react_1.default.createElement(components_1.Logo, null),
            react_1.default.createElement(components_1.Box, { marginTop: "l-size" }, new Date().getFullYear()))));
};
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const BasketProvider_1 = __webpack_require__(81400);
const react_1 = __importStar(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const components_1 = __webpack_require__(26789);
const BasketToggleProvider_1 = __webpack_require__(38823);
const routes_1 = __webpack_require__(74897);
const react_fontawesome_1 = __webpack_require__(67814);
const BasketToggle = () => {
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const { basket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { setIsOpen } = (0, react_1.useContext)(BasketToggleProvider_1.basketToggleContext);
    return (react_1.default.createElement(components_1.Button, { variant: "quaternary", disabled: basketDisabledpathnames.includes(pathname), onClick: () => setIsOpen((prev) => !prev), type: "button", padding: "s-size" },
        react_1.default.createElement(components_1.Badge, { count: basket.length },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "shopping-basket", size: "2x" }))));
};
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

/***/ 19324:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const mainMenuLinks_1 = __importDefault(__webpack_require__(11736));
const MainMenu = () => {
    const { t } = (0, react_i18next_1.useTranslation)('COMMON');
    const { pathname } = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement(components_1.Flexbox, { as: "ul", paddingLeft: 0, marginY: "0", marginX: "m-size", flexGrow: 1 }, mainMenuLinks_1.default.map(({ label, ...link }) => (react_1.default.createElement(components_1.Box, { display: "inline-block", as: "li", key: link.to },
        react_1.default.createElement(StyledLink, { isActive: !!(0, react_router_dom_1.matchPath)(pathname, { path: link.to, exact: link.exact }), ...link }, t(label)))))));
};
const StyledLink = (0, styled_components_1.default)(components_1.Link) `
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  font-size: 1.4rem;
  padding: ${(props) => `${props.theme.space['xs-size']} ${props.theme.space['m-size']}`};

  &:hover {
    background: ${(props) => props.theme.colors['background-color-01']};
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
const styled_components_1 = __importDefault(__webpack_require__(91288));
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const BasketToggle_1 = __importDefault(__webpack_require__(85960));
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
        react_1.default.createElement(components_1.Link, { to: routes_1.HOME },
            react_1.default.createElement(components_1.Logo, { expanded: isExpanded })),
        react_1.default.createElement(MainMenu_1.default, null),
        react_1.default.createElement(NavigationMenu, null,
            react_1.default.createElement(exports.NavigationMenuItem, null,
                react_1.default.createElement(BasketToggle_1.default, null)))));
};
const Container = styled_components_1.default.nav `
  width: 100%;
  background: ${(props) => props.theme.colors[props.isExpanded ? 'nav-bg-scrolled' : 'nav-bg']};
  display: flex;
  align-items: center;
  padding: ${(props) => {
    if (props.isExpanded) {
        return `0 ${props.theme.space['xl-size']}`;
    }
    return `${props.theme.space['l-size']} ${props.theme.space['xl-size']}`;
}};
  position: ${(props) => (props.isExpanded ? 'fixed' : 'absolute')};
  top: 0;
  transform: translateY(0);
  z-index: ${(props) => props.theme.zIndices.navigation};
  box-shadow: ${(props) => props.isExpanded && '0 5px 10px rgba(0, 0, 0, 0.02)'};
  /* @include bezier-transition(transform, 0.3s, ease); */
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
        exact: true,
        to: routes_1.HOME,
        label: 'navigation.home'
    },
    {
        to: routes_1.PRODUCTS,
        label: 'navigation.products'
    },
    {
        to: routes_1.HOW_TO_CREATE_ORDER,
        label: 'navigation.HOW_TO_CREATE_ORDER'
    },
    {
        to: routes_1.DELIVERY_AND_PAYMENTS,
        label: 'navigation.deliveryAndPayments'
    },
    {
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
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Preloader = () => (react_1.default.createElement(components_1.Flexbox, { width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" },
    react_1.default.createElement(components_1.Spinner, null)));
exports["default"] = Preloader;


/***/ }),

/***/ 80652:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const components_2 = __webpack_require__(26789);
const TileLoader = () => {
    return (react_1.default.createElement(components_1.Box, { border: "1px solid red", width: "100%", height: "30rem" },
        react_1.default.createElement(components_2.ContentLoader, { gradientRatio: 1, viewBox: "0 0 292.8 380", height: "100%" })));
};
exports["default"] = TileLoader;


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
            react_1.default.createElement(components_1.ImageLoader, { alt: "", src: product.gallery[0] })),
        react_1.default.createElement(components_1.Flexbox, { backgroundColor: "background-color", flexDirection: "column", padding: "m-size" },
            react_1.default.createElement(Name, null, product.name),
            react_1.default.createElement(Price, null, (0, utils_1.displayMoney)(product.price)))));
};
const Container = (0, styled_components_1.default)(components_1.Tile) `
  cursor: pointer;
  justify-content: space-between;

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
  color: ${(props) => props.theme.colors['gray-10']};
  font-style: italic;
`;
exports["default"] = ProductTile;


/***/ }),

/***/ 67455:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const TIle_loader_1 = __importDefault(__webpack_require__(80652));
const Loader = () => (react_1.default.createElement(components_1.Grid, null,
    react_1.default.createElement(TIle_loader_1.default, null),
    react_1.default.createElement(TIle_loader_1.default, null),
    react_1.default.createElement(TIle_loader_1.default, null)));
exports["default"] = Loader;


/***/ }),

/***/ 43444:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const index_loader_1 = __importDefault(__webpack_require__(67455));
const Tile_1 = __importDefault(__webpack_require__(18348));
const ProductsList = ({ searchQuery, link, title, query, ...props }) => query.data?.length ? (react_1.default.createElement(components_1.Flexbox, { flexDirection: "column", as: "section", ...props },
    react_1.default.createElement(components_1.SectionHead, { title: title, link: link }),
    react_1.default.createElement(components_1.QueryLoader, { Loader: react_1.default.createElement(index_loader_1.default, null), query: query }, (products) => (react_1.default.createElement(components_1.Grid, null, products
        .filter((product) => {
        if (searchQuery) {
            return product.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
        }
        return true;
    })
        .map((product) => (react_1.default.createElement(Tile_1.default, { key: product.id, product: product })))))))) : null;
exports["default"] = ProductsList;


/***/ }),

/***/ 2158:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const ReadPrivacyPolicy = () => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    return (react_1.default.createElement(components_1.TitleAndLinkBanner, { title: commonT('readPrivacyPolicy.title'), link: {
            to: routes_1.TERMS_AND_CONDITIONS,
            label: commonT('readPrivacyPolicy.buttonLabel')
        } }));
};
exports["default"] = ReadPrivacyPolicy;


/***/ }),

/***/ 46554:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const ReadTermsAndConditions = () => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    return (react_1.default.createElement(components_1.TitleAndLinkBanner, { title: commonT('readTermAndConditions.title'), link: {
            to: routes_1.TERMS_AND_CONDITIONS,
            label: commonT('readTermAndConditions.buttonLabel')
        } }));
};
exports["default"] = ReadTermsAndConditions;


/***/ }),

/***/ 31802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReadPrivacyPolicy = exports.ReadTermsAndConditions = exports.Features = exports.ProductsGrid = exports.Footer = exports.Basket = exports.Navigation = exports.Preloader = void 0;
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
var Features_1 = __webpack_require__(67759);
Object.defineProperty(exports, "Features", ({ enumerable: true, get: function () { return __importDefault(Features_1).default; } }));
var ReadTermsAndConditions_1 = __webpack_require__(46554);
Object.defineProperty(exports, "ReadTermsAndConditions", ({ enumerable: true, get: function () { return __importDefault(ReadTermsAndConditions_1).default; } }));
var ReadPrivacyPolicy_1 = __webpack_require__(2158);
Object.defineProperty(exports, "ReadPrivacyPolicy", ({ enumerable: true, get: function () { return __importDefault(ReadPrivacyPolicy_1).default; } }));


/***/ }),

/***/ 25706:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Badge = ({ count, children, stanalone = false }) => (react_1.default.createElement(Flexbox_1.default, { alignItems: "center", justifyContent: "center", position: "relative" },
    children,
    count >= 1 && react_1.default.createElement(Count, { stanalone: stanalone }, count)));
const Count = styled_components_1.default.span `
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.1rem;
  font-weight: bold;
  position: ${(props) => !props.stanalone && 'absolute'};
  top: ${(props) => !props.stanalone && '-1.2rem'};
  right: ${(props) => !props.stanalone && '-1.5rem'};
`;
exports["default"] = Badge;


/***/ }),

/***/ 57048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const _1 = __importDefault(__webpack_require__(77308));
const BannerWithPicture = ({ children, img, ...props }) => (react_1.default.createElement(_1.default, { leftChildren: children, ...props },
    react_1.default.createElement(ImageWrapper, null,
        react_1.default.createElement("img", { src: img, alt: "" }))));
const ImageWrapper = styled_components_1.default.div `
  position: relative;
  width: 100%;
  height: 100%;
  /* flex-basis: 100%; */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* transform: translateX(5rem); */
  }
`;
exports["default"] = BannerWithPicture;


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
const Box_1 = __importDefault(__webpack_require__(84962));
const Banner = ({ small, description, title, children, leftChildren, ...props }) => (react_1.default.createElement(components_1.Flexbox, { ...props, height: small ? '20rem' : '40rem', backgroundColor: "background-color-01" },
    react_1.default.createElement(Description, { fullWidth: !children },
        title,
        description && react_1.default.createElement(Box_1.default, { as: "p" }, description),
        leftChildren),
    react_1.default.createElement(components_1.Flexbox, { marginX: "auto", alignItems: "center" }, children)));
const Description = styled_components_1.default.div `
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  flex-basis: ${(props) => (props.fullWidth ? '100%' : '50%')};

  h1 {
    font-size: 4.8rem;
    width: 80%;
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

    ${(props) => props.variant === 'quaternary' &&
    (0, styled_components_1.css) `
      background: transparent;
      border-color: transparent;
      color: ${(props) => props.theme.colors['paragraph-color']};

      &:hover {
        background: transparent;
        border-color: transparent;
      }
    `}


    ${(props) => props.size === 'small' &&
    (0, styled_components_1.css) `
      font-size: ${(props) => props.theme.fontSizes['font-small']};
      padding: ${(props) => `${props.theme.space['xs-size']} ${props.theme.space['m-size']}`};
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
const Input_1 = __webpack_require__(99482);
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const CheckboxField = ({ id, field: { value, onChange, onBlur, name }, meta: { touched, error }, isFirst, title, subtitle, val, fieldLabel }) => (react_1.default.createElement(react_1.default.Fragment, null,
    isFirst && (react_1.default.createElement(components_2.Flexbox, { marginBottom: "0", marginRight: "auto", justifyContent: "flex-start" }, touched && error ? (react_1.default.createElement(components_1.InputLabel, { error: true }, error)) : (react_1.default.createElement(components_1.InputLabel, { htmlFor: name }, fieldLabel)))),
    react_1.default.createElement(Container, { backgroundColor: "background-color-01", padding: "s-size", marginBottom: "m-size", position: "relative" },
        react_1.default.createElement(Input_1.StyledInput, { name: name, id: id, type: "radio", value: id, checked: id === value, onChange: onChange, onBlur: onBlur }),
        react_1.default.createElement(components_2.Flexbox, { as: "label", padding: "0", width: "100%", htmlFor: id, justifyContent: "space-between" },
            react_1.default.createElement(components_2.Flexbox, { as: "h4", marginRight: "auto", alignItems: "center" },
                title,
                subtitle && (react_1.default.createElement(components_1.Box, { marginLeft: "s-size", as: "span", fontStyle: "italic" }, subtitle))),
            val && react_1.default.createElement("h4", null, val)))));
const Container = (0, styled_components_1.default)(components_2.Flexbox) `
  cursor: pointer;
`;
exports["default"] = CheckboxField;


/***/ }),

/***/ 28284:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Box_1 = __importDefault(__webpack_require__(84962));
const react_1 = __importDefault(__webpack_require__(67294));
const react_content_loader_1 = __importDefault(__webpack_require__(24561));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const ContentLoader = ({ children, ...props }) => {
    return (react_1.default.createElement(Box_1.default, { width: "100%", height: "100%", position: "relative" },
        react_1.default.createElement(Container, { gradientRatio: 1.3, width: "100%", height: "100%", ...props }, children)));
};
const Container = (0, styled_components_1.default)(react_content_loader_1.default) `
  /* position: absolute;

  left: 0;
  top: 0; */
`;
exports["default"] = ContentLoader;


/***/ }),

/***/ 61009:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const ExternalLink = ({ children, to }) => {
    return (react_1.default.createElement(Container, { target: "_blank", rel: "noopener noreferrer", href: to },
        children,
        ' '));
};
const Container = styled_components_1.default.a `
  color: ${(props) => props.theme.colors.black};
`;
exports["default"] = ExternalLink;


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
const FeatureItem = ({ title, subtitle, children }) => (react_1.default.createElement(Tile_1.default, { height: subtitle ? '23.53rem' : '20rem', padding: 0 },
    react_1.default.createElement(Flexbox_1.default, { flexGrow: 1, alignItems: "center", justifyContent: "center" }, children),
    react_1.default.createElement(Flexbox_1.default, { backgroundColor: "background-color", flexDirection: "column", alignItems: "center", padding: "m-size", paddingBottom: subtitle && '0' }, title),
    subtitle && (react_1.default.createElement(Flexbox_1.default, { as: "h5", margin: "0", backgroundColor: "background-color", flexDirection: "column", alignItems: "center", padding: "xs-size" }, subtitle))));
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
const Box_1 = __importDefault(__webpack_require__(84962));
const react_1 = __importDefault(__webpack_require__(67294));
const Grid = ({ children, ...props }) => (react_1.default.createElement(Box_1.default, { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: GRID_GAP, ...props }, children));
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
const Spinner_1 = __importDefault(__webpack_require__(80927));
const react_1 = __importStar(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const ImageLoader = ({ objectPosition, objectFit = 'contain', src, alt = '' }) => {
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !loaded && react_1.default.createElement(StyledSpinner, { small: true }),
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
const StyledSpinner = (0, styled_components_1.default)(Spinner_1.default) `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
exports["default"] = ImageLoader;


/***/ }),

/***/ 99482:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StyledInput = void 0;
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Input = ({ type = 'text', disabled, field, meta, label, placeholder, maxLength, ...props }) => {
    const touched = meta?.touched;
    const { error } = meta;
    return (react_1.default.createElement(components_1.Flexbox, { ...props, flexDirection: "column" },
        touched && error ? (react_1.default.createElement(components_1.InputLabel, { error: true }, error)) : (react_1.default.createElement(components_1.InputLabel, { htmlFor: field.name }, label)),
        react_1.default.createElement(exports.StyledInput, { ...field, type: type, disabled: disabled, id: field.name, maxLength: maxLength, placeholder: placeholder })));
};
exports.StyledInput = styled_components_1.default.input `
  height: 3.5rem;
  position: relative;
  cursor: pointer;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors['border-color']};

  &[type='checkbox'],
  &[type='radio'] {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  &[type='checkbox'] + label:before,
  &[type='radio'] + label:before {
    content: '';
    -webkit-appearance: none;
    background-color: ${(props) => props.theme.colors['white']};
    border: 2px solid;
    border-color: ${(props) => props.theme.colors['border-color-focus']};
    padding: 1rem;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin: auto 0.5rem auto 0;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &[type='checkbox'] + label:after,
  &[type='radio'] + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 2.2rem;
    bottom: 0;
    margin: auto;
    width: 3px;
    height: 1rem;
    border: solid;
    border-color: ${(props) => props.theme.colors['border-color']};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }

  &[type='checkbox']:hover + label:before,
  &[type='radio']:hover + label:before {
    border: 2px solid;
    border-color: ${(props) => props.theme.colors['border-color-focus']};
  }

  &[type='checkbox']:checked + label:before,
  &[type='radio']:checked + label:before {
    border: 2px solid;
    border-color: ${(props) => props.theme.colors['black']};
    background: ${(props) => props.theme.colors['black']};
  }

  &[type='checkbox']:checked + label:after,
  &[type='radio']:checked + label:after {
    border: solid;
    border-color: ${(props) => props.theme.colors['white']};
    border-width: 0 2px 2px 0;
  }

  * {
    cursor: pointer;
  }
`;
exports["default"] = Input;


/***/ }),

/***/ 21775:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Label = styled_components_1.default.label `
  font-size: ${(props) => props.theme.fontSizes['font-small']};
  border: none;
  background: none;
  padding: 1rem 1.2rem;
  color: ${(props) => props.theme.colors[props.error ? 'red' : 'label-color']};
  border: none;
`;
exports["default"] = Label;


/***/ }),

/***/ 23898:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Link = ({ ...props }) => react_1.default.createElement(Container, { ...props });
const Container = (0, styled_components_1.default)(react_router_dom_1.Link) `
  display: flex;
  align-items: center;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  color: ${(props) => props.theme.colors.black};
`;
exports["default"] = Link;


/***/ }),

/***/ 94112:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Box_1 = __importDefault(__webpack_require__(84962));
const react_1 = __importDefault(__webpack_require__(67294));
const Logo = ({ expanded }) => (react_1.default.createElement(Box_1.default, { height: !expanded ? '6rem' : '4.5rem' },
    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", 
        // width="120px"
        // height="60px"
        // preserveAspectRatio=""
        height: "100%", width: "auto", version: "1.1", style: {
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'crisp-edges',
            fillRule: 'evenodd',
            clipRule: 'evenodd'
        }, viewBox: "0 0 6000 3000", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        react_1.default.createElement("g", { id: "Warstwa_x0020_1" },
            react_1.default.createElement("metadata", { id: "CorelCorpID_0Corel-Layer" }),
            react_1.default.createElement("path", { fill: "#0A0A0A", className: "fil0", d: "M435.71 935.58c15.34,-4.61 39.9,-9.59 73.66,-14.98 33.76,-5.37 68.27,-8.05 103.57,-8.05 33.75,0 64.07,2.29 90.93,6.9 26.85,4.61 49.49,13.81 67.9,27.64 18.42,13.8 32.22,32.61 41.42,56.39 9.22,23.78 13.83,54.86 13.83,93.22l0 225.57c38.34,-15.34 74.81,-26.09 109.32,-32.22 34.54,-6.14 72.51,-9.22 113.93,-9.22 73.66,0 143.49,13.05 209.47,39.13 65.98,26.1 124.3,64.07 174.94,113.95 50.63,49.86 90.54,111.64 119.68,185.28 29.17,73.66 43.74,158.83 43.74,255.5 0,99.76 -14.96,186.83 -44.88,261.25 -29.93,74.42 -71.74,136.2 -125.45,185.3 -53.71,49.1 -119.29,86.32 -196.81,111.64 -77.49,25.32 -163.03,37.97 -256.64,37.97 -101.28,0 -187.21,-11.9 -257.79,-35.68 -70.59,-23.78 -130.45,-53.32 -179.55,-88.61 -67.51,-47.57 -101.27,-108.96 -101.27,-184.16l0 -1226.82zm538.61 1226.82c70.58,0 125.44,-24.14 164.59,-72.49 39.12,-48.34 58.68,-120.07 58.68,-215.22 0,-96.67 -19.95,-168.79 -59.85,-216.35 -39.88,-47.59 -93.59,-71.37 -161.11,-71.37 -30.71,0 -57.17,3.07 -79.41,9.22 -22.25,6.12 -46.42,15.34 -72.52,27.61l0 501.8c16.88,10.73 37.22,19.56 61,26.46 23.78,6.9 53.32,10.34 88.62,10.34zm1132.48 269.33c-15.34,4.59 -39.52,9.2 -72.52,13.81 -32.97,4.61 -67.12,6.9 -102.42,6.9 -33.75,0 -64.07,-2.29 -90.93,-6.9 -26.85,-4.61 -49.49,-13.81 -67.9,-27.64 -18.42,-13.8 -32.59,-32.59 -42.56,-56.39 -9.98,-23.78 -14.98,-54.86 -14.98,-93.22l0 -690.52c0,-35.29 6.54,-65.61 19.56,-90.93 13.05,-25.32 31.86,-47.95 56.39,-67.9 24.57,-19.96 54.86,-37.98 90.94,-54.08 36.05,-16.12 74.8,-30.32 116.24,-42.59 41.42,-12.29 84.4,-21.87 128.89,-28.78 44.51,-6.9 89,-10.36 133.51,-10.36 73.64,0 131.96,14.19 174.94,42.58 42.95,28.39 64.44,74.81 64.44,139.28 0,21.46 -3.07,42.56 -9.2,63.29 -6.14,20.71 -13.83,39.52 -23.02,56.39 -32.22,0 -65.22,1.54 -98.98,4.61 -33.76,3.05 -66.76,7.66 -98.98,13.81 -32.22,6.12 -62.54,12.66 -90.91,19.56 -28.39,6.9 -52.56,14.95 -72.51,24.17l0 784.91zm925.3 -246.3c26.08,0 54.86,-2.68 86.32,-8.05 31.44,-5.37 54.86,-12.66 70.2,-21.88l0 -184.13 -165.74 13.81c-42.95,3.07 -78.24,12.27 -105.88,27.61 -27.61,15.36 -41.42,38.37 -41.42,69.07 0,30.69 11.88,55.62 35.69,74.81 23.78,19.17 64.05,28.76 120.83,28.76zm-18.41 -904.6c82.85,0 158.44,8.44 226.71,25.32 68.3,16.88 126.62,42.59 174.94,77.13 48.34,34.51 85.56,78.24 111.63,131.2 26.1,52.93 39.15,115.46 39.15,187.59l0 515.58c0,39.9 -11.14,72.52 -33.39,97.83 -22.24,25.32 -48.71,47.2 -79.42,65.62 -99.73,59.83 -240.13,89.75 -421.21,89.75 -81.32,0 -154.61,-7.68 -219.81,-23.02 -65.22,-15.34 -121.23,-38.37 -168.03,-69.05 -46.81,-30.69 -82.88,-69.81 -108.2,-117.4 -25.32,-47.56 -37.98,-102.81 -37.98,-165.71 0,-105.88 31.47,-187.23 94.37,-243.99 62.93,-56.78 160.37,-92.07 292.33,-105.88l301.55 -32.22 0 -16.12c0,-44.51 -19.56,-76.34 -58.71,-95.52 -39.13,-19.19 -95.52,-28.78 -169.18,-28.78 -58.32,0 -115.08,6.15 -170.32,18.42 -55.25,12.27 -105.13,27.61 -149.62,46.02 -19.95,-13.8 -36.83,-34.9 -50.63,-63.29 -13.81,-28.39 -20.74,-57.93 -20.74,-88.61 0,-39.91 9.61,-71.74 28.78,-95.52 19.18,-23.78 48.71,-44.12 88.62,-61 44.51,-16.88 97.05,-29.15 157.66,-36.83 60.64,-7.69 117.79,-11.52 171.5,-11.52zm1109.45 768.79c0,39.9 12.66,68.29 37.98,85.17 25.32,16.88 61,25.32 107.03,25.32 23.02,0 46.81,-1.93 71.37,-5.76 24.54,-3.82 46.02,-8.82 64.44,-14.95 13.8,16.88 25.71,35.66 35.68,56.4 9.98,20.7 14.96,45.63 14.96,74.8 0,58.3 -21.86,105.89 -65.59,142.72 -43.74,36.83 -120.86,55.24 -231.35,55.24 -135.03,0 -238.99,-30.71 -311.89,-92.07 -72.88,-61.4 -109.32,-161.13 -109.32,-299.24l0 -985.16c16.87,-4.61 41.05,-9.58 72.51,-14.97 31.44,-5.37 64.83,-8.05 100.13,-8.05 67.51,0 120.07,11.9 157.66,35.68 37.59,23.79 56.39,74.03 56.39,150.77l0 147.32 301.53 0c9.22,16.88 18.02,37.98 26.49,63.29 8.44,25.32 12.66,53.32 12.66,84.01 0,53.71 -11.91,92.46 -35.69,116.25 -23.78,23.78 -55.64,35.68 -95.54,35.68l-209.45 0 0 347.55zm630.69 98.98c-16.88,-38.37 -34.91,-81.32 -54.08,-128.88 -19.19,-47.59 -39.15,-102.06 -59.85,-163.45 -20.71,-61.37 -42.2,-131.57 -64.45,-210.59 -22.27,-79.03 -45.66,-169.96 -70.22,-272.77 21.49,-21.49 50.27,-40.29 86.32,-56.39 36.08,-16.12 75.59,-24.17 118.54,-24.17 53.71,0 98.23,11.12 133.52,33.36 35.29,22.27 61.37,64.08 78.25,125.45l181.83 633 9.22 0c18.42,-52.18 36.44,-108.96 54.08,-170.33 17.66,-61.39 34.93,-124.68 51.81,-189.91 16.87,-65.22 32.61,-130.42 47.17,-195.64 14.58,-65.22 27.24,-129.3 37.97,-192.2 55.25,-29.15 115.86,-43.73 181.87,-43.73 53.7,0 98.19,11.51 133.49,34.53 35.29,23.01 52.93,62.91 52.93,119.69 0,41.42 -5.37,89.37 -16.1,143.86 -10.76,54.47 -24.93,112.4 -42.59,173.79 -17.63,61.37 -38.37,124.66 -62.15,189.88 -23.78,65.23 -48.71,129.28 -74.8,192.21 -26.08,62.9 -52.93,122.37 -80.57,178.37 -27.61,56.03 -54.46,106.27 -80.56,150.78 -42.96,75.18 -82.86,136.57 -119.69,184.13 -36.83,47.57 -72.12,84.79 -105.88,111.64 -33.76,26.86 -67.52,45.27 -101.27,55.25 -33.76,9.97 -69.06,14.95 -105.89,14.95 -64.44,0 -116.61,-19.17 -156.51,-57.54 -39.91,-38.37 -63.69,-88.22 -71.37,-149.61 49.12,-38.37 98.22,-80.96 147.32,-127.74 49.1,-46.81 93.61,-94.76 133.49,-143.86 -26.07,-7.68 -54.07,-25.71 -84,-54.1 -29.93,-28.39 -62.54,-81.71 -97.83,-159.98z" }),
            react_1.default.createElement("path", { fill: "#E6070F", className: "fil1", d: "M5108.91 97.13c277.72,0 502.83,225.11 502.83,502.82 0,239.7 -167.69,440.19 -392.19,490.58l0 -417.4 -221.28 0 0 417.4c-224.49,-50.39 -392.18,-250.88 -392.18,-490.58 0,-277.71 225.11,-502.82 502.82,-502.82z" })))));
exports["default"] = Logo;


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
    const imageUrl = product.gallery[0];
    return (react_1.default.createElement(Container, { onClick: () => {
            history.push(`/view_product/${product.id}`);
        }, justifyContent: "space-between", flexDirection: "row", height: "20rem", alignItems: "center", ...props },
        react_1.default.createElement(Box_1.default, { as: "h2" }, product.name),
        imageUrl && (react_1.default.createElement(Flexbox_1.default, { alignItems: "center", justifyContent: "center", position: "relative", height: "100%", padding: "auto 0", width: "60rem" },
            react_1.default.createElement(ImageLoader_1.default, { src: imageUrl })))));
};
const Container = (0, styled_components_1.default)(Tile_1.default) `
  cursor: pointer;
`;
exports["default"] = LongProductTile;


/***/ }),

/***/ 7623:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const formik_1 = __webpack_require__(94649);
const react_1 = __importDefault(__webpack_require__(67294));
const react_phone_input_2_1 = __importDefault(__webpack_require__(67555));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const MobileInput = ({ fieldProps, placeholder, label, disabled }) => {
    const { meta, field } = fieldProps;
    const [, , helpers] = (0, formik_1.useField)(fieldProps.field.name);
    const { touched, error } = meta;
    const { setValue } = helpers;
    return (react_1.default.createElement(Flexbox_1.default, { flexDirection: "column" },
        error ? (react_1.default.createElement(components_1.InputLabel, { error: true }, error)) : (react_1.default.createElement(components_1.InputLabel, { htmlFor: field.name }, label)),
        react_1.default.createElement(StyledPhoneInput, { isError: !!touched && !!error, disabled: disabled, country: "pl", inputClass: "input-form d-block", placeholder: placeholder, disableDropdown: true, countryCodeEditable: false, masks: { pl: '... .. .. ..' }, onChange: (value) => setValue(value), value: field.value ?? '' })));
};
const StyledPhoneInput = (0, styled_components_1.default)(react_phone_input_2_1.default) `
  border: ${(props) => (props.isError ? '1px solid red' : '1px solid blue')};
  width: 100%;
`;
exports["default"] = MobileInput;


/***/ }),

/***/ 65415:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
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
  padding-top: calc(12rem + 2rem);
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
const components_1 = __webpack_require__(26789);
const Box_1 = __importDefault(__webpack_require__(84962));
const react_1 = __importDefault(__webpack_require__(67294));
const SectionHead = ({ title, link, ...props }) => (react_1.default.createElement(components_1.Flexbox, { justifyContent: "space-between", alignItems: "center", ...props },
    title && react_1.default.createElement("h2", null, title),
    link && (react_1.default.createElement(components_1.Link, { underline: true, to: link.to },
        react_1.default.createElement(Box_1.default, { fontSize: "font-large" }, link.label)))));
exports["default"] = SectionHead;


/***/ }),

/***/ 26233:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_select_1 = __importDefault(__webpack_require__(85555));
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
  background: ${(props) => props.theme.colors['border-color']};
  margin: ${(props) => `${props.theme.space['m-size']} 0`};
`;
exports["default"] = Separator;


/***/ }),

/***/ 80927:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_fontawesome_1 = __webpack_require__(67814);
const Box_1 = __importDefault(__webpack_require__(84962));
const react_1 = __importDefault(__webpack_require__(67294));
const Spinner = ({ small, ...props }) => (react_1.default.createElement(Box_1.default, { ...props, opacity: 0.5 },
    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { spin: true, icon: "spinner", size: small ? '2x' : '3x' })));
exports["default"] = Spinner;


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
const Tile = ({ onClick, children, ...props }) => (react_1.default.createElement(Flexbox_1.default, { width: "100%", padding: "l-size", background: "white", border: "1px solid", borderColor: "border-color", flexDirection: "column", onClick: onClick, ...props }, children));
exports["default"] = Tile;


/***/ }),

/***/ 29839:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const TitleAndLinkBanner = ({ title, link: { to, label } }) => {
    const history = (0, react_router_dom_1.useHistory)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.Banner, { marginTop: "xxl-size", small: true, title: react_1.default.createElement("h2", null, title) },
            react_1.default.createElement(components_1.Button, { onClick: () => history.push(to) },
                label,
                react_1.default.createElement(components_1.Box, { marginLeft: "m-size" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "arrow-right" }))))));
};
exports["default"] = TitleAndLinkBanner;


/***/ }),

/***/ 26789:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentLoader = exports.ExternalLink = exports.TitleAndLinkBanner = exports.Link = exports.InputLabel = exports.MobileInput = exports.Logo = exports.Input = exports.Spinner = exports.Banner = exports.Grid = exports.SectionHead = exports.ImageLoader = exports.LongProductTile = exports.Select = exports.Tile = exports.Button = exports.CheckboxField = exports.Square = exports.Flexbox = exports.Separator = exports.Badge = exports.QueryLoader = exports.Box = exports.Page = void 0;
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
var Spinner_1 = __webpack_require__(80927);
Object.defineProperty(exports, "Spinner", ({ enumerable: true, get: function () { return __importDefault(Spinner_1).default; } }));
var Input_1 = __webpack_require__(99482);
Object.defineProperty(exports, "Input", ({ enumerable: true, get: function () { return __importDefault(Input_1).default; } }));
var Logo_1 = __webpack_require__(94112);
Object.defineProperty(exports, "Logo", ({ enumerable: true, get: function () { return __importDefault(Logo_1).default; } }));
var MobileInput_1 = __webpack_require__(7623);
Object.defineProperty(exports, "MobileInput", ({ enumerable: true, get: function () { return __importDefault(MobileInput_1).default; } }));
var InputLabel_1 = __webpack_require__(21775);
Object.defineProperty(exports, "InputLabel", ({ enumerable: true, get: function () { return __importDefault(InputLabel_1).default; } }));
var Link_1 = __webpack_require__(23898);
Object.defineProperty(exports, "Link", ({ enumerable: true, get: function () { return __importDefault(Link_1).default; } }));
var TitleAndLinkBanner_1 = __webpack_require__(29839);
Object.defineProperty(exports, "TitleAndLinkBanner", ({ enumerable: true, get: function () { return __importDefault(TitleAndLinkBanner_1).default; } }));
var ExternalLink_1 = __webpack_require__(61009);
Object.defineProperty(exports, "ExternalLink", ({ enumerable: true, get: function () { return __importDefault(ExternalLink_1).default; } }));
var ContentLoader_1 = __webpack_require__(28284);
Object.defineProperty(exports, "ContentLoader", ({ enumerable: true, get: function () { return __importDefault(ContentLoader_1).default; } }));


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

/***/ 74897:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PRIVACY_POLICY = exports.TERMS_AND_CONDITIONS = exports.HOW_TO_CREATE_ORDER = exports.CONTACT = exports.DELIVERY_AND_PAYMENTS = exports.ADMIN_ORDERS = exports.CHECKOUT_RESULT = exports.CHECKOUT_PAYMENT = exports.CHECKOUT_SHIPPING = exports.CHECKOUT_DELIVERY = exports.CHECKOUT_DETAILS = exports.CHECKOUT_PRODUCTS = exports.VIEW_PRODUCT = exports.PRODUCTS = exports.HOME = void 0;
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
exports.DELIVERY_AND_PAYMENTS = '/delivery_and_payments';
exports.CONTACT = '/contact';
exports.HOW_TO_CREATE_ORDER = '/how_to_create_order';
exports.TERMS_AND_CONDITIONS = '/terms_and_conditions';
exports.PRIVACY_POLICY = '/privacy_policy';


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
exports.useTabTitle = exports.useTranslation = exports.useScrollTop = exports.useDocumentTitle = void 0;
var useDocumentTitle_1 = __webpack_require__(6999);
Object.defineProperty(exports, "useDocumentTitle", ({ enumerable: true, get: function () { return __importDefault(useDocumentTitle_1).default; } }));
var useScrollTop_1 = __webpack_require__(42383);
Object.defineProperty(exports, "useScrollTop", ({ enumerable: true, get: function () { return __importDefault(useScrollTop_1).default; } }));
var useTranslation_1 = __webpack_require__(74806);
Object.defineProperty(exports, "useTranslation", ({ enumerable: true, get: function () { return __importDefault(useTranslation_1).default; } }));
var useTabTitle_1 = __webpack_require__(92827);
Object.defineProperty(exports, "useTabTitle", ({ enumerable: true, get: function () { return __importDefault(useTabTitle_1).default; } }));


/***/ }),

/***/ 6999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __webpack_require__(67294);
const react_i18next_1 = __webpack_require__(26828);
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
const useScrollTop = (...trackedProps) => {
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, [...trackedProps]);
};
exports["default"] = useScrollTop;


/***/ }),

/***/ 92827:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_i18next_1 = __webpack_require__(26828);
const useDocumentTitle_1 = __importDefault(__webpack_require__(6999));
const useTabTitle = (title) => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    const tabTitle = title + ' | ' + commonT('companyName');
    (0, useDocumentTitle_1.default)(tabTitle);
};
exports["default"] = useTabTitle;


/***/ }),

/***/ 74806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_i18next_1 = __webpack_require__(26828);
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
const pl_1 = __importDefault(__webpack_require__(52007));
exports.config = {
    lng: 'pl',
    keySeparator: '.',
    resources: {
        pl: {
            // translation: pl,
            ADMIN_ORDERS: pl_1.default.ADMIN_ORDERS,
            CHECKOUT_PRODUCTS: pl_1.default.CHECKOUT_PRODUCTS,
            CHECKOUT_DETAILS: pl_1.default.CHECKOUT_DETAILS,
            CHECKOUT_PAYMENT: pl_1.default.CHECKOUT_PAYMENT,
            CHECKOUT_DELIVERY: pl_1.default.CHECKOUT_DELIVERY,
            CHECKOUT_RESULT: pl_1.default.CHECKOUT_RESULT,
            CHECKOUT_SHIPPING: pl_1.default.CHECKOUT_SHIPPING,
            COMMON: pl_1.default.COMMON,
            CONTACT: pl_1.default.CONTACT,
            HOME: pl_1.default.HOME,
            PAGE_NOT_FOUND: pl_1.default.PAGE_NOT_FOUND,
            PRODUCTS: pl_1.default.PRODUCTS,
            VIEW_PRODUCT: pl_1.default.VIEW_PRODUCT,
            DELIVERY_AND_PAYMENTS: pl_1.default.DELIVERY_AND_PAYMENTS,
            HOW_TO_CREATE_ORDER: pl_1.default.HOW_TO_CREATE_ORDER,
            TERMS_AND_CONDITIONS: pl_1.default.TERMS_AND_CONDITIONS,
            PRIVACY_POLICY: pl_1.default.PRIVACY_POLICY
        }
    }
};
i18next_1.default.init(exports.config);
exports["default"] = i18next_1.default;


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
const providers_1 = __webpack_require__(2253);
const react_1 = __importStar(__webpack_require__(67294));
const react_dom_1 = __webpack_require__(73935);
__webpack_require__(72225);
const react_query_1 = __webpack_require__(88767);
const webfontloader_1 = __importDefault(__webpack_require__(75933));
const styled_components_1 = __webpack_require__(91288);
const theme_1 = __importDefault(__webpack_require__(6786));
const react_i18next_1 = __webpack_require__(26828);
const config_1 = __importDefault(__webpack_require__(6527));
const free_solid_svg_icons_1 = __webpack_require__(51436);
const fontawesome_svg_core_1 = __webpack_require__(78947);
const app_1 = __webpack_require__(94258);
const config_2 = __importDefault(__webpack_require__(68431));
const GlobalStyle_1 = __importDefault(__webpack_require__(81804));
const pages_1 = __webpack_require__(23107);
webfontloader_1.default.load({
    google: {
        families: ['Roboto', 'Tajawal']
    }
});
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faTruck, free_solid_svg_icons_1.faUserClock, free_solid_svg_icons_1.faExchangeAlt, free_solid_svg_icons_1.faStar, free_solid_svg_icons_1.faBoxOpen, free_solid_svg_icons_1.faHandHoldingUsd, free_solid_svg_icons_1.faEnvelopeOpenText, free_solid_svg_icons_1.faMapMarkedAlt, free_solid_svg_icons_1.faUniversity, free_solid_svg_icons_1.faPhoneAlt, free_solid_svg_icons_1.faBox, free_solid_svg_icons_1.faCheckCircle, free_solid_svg_icons_1.faPlus, free_solid_svg_icons_1.faEquals, free_solid_svg_icons_1.faCalendarAlt, free_solid_svg_icons_1.faTruckLoading, free_solid_svg_icons_1.faBoxes, free_solid_svg_icons_1.faArrowRight, free_solid_svg_icons_1.faMinus, free_solid_svg_icons_1.faTimes, free_solid_svg_icons_1.faArrowLeft, free_solid_svg_icons_1.faStoreAlt, free_solid_svg_icons_1.faShoppingBasket, free_solid_svg_icons_1.faSpinner, free_solid_svg_icons_1.faQuestion, free_solid_svg_icons_1.faSearch);
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
    react_1.default.createElement(providers_1.AuthProvider, null,
        react_1.default.createElement(providers_1.BasketProvider, null,
            react_1.default.createElement(react_query_1.QueryClientProvider, { client: exports.queryClient },
                react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme_1.default },
                    react_1.default.createElement(react_i18next_1.I18nextProvider, { i18n: config_1.default },
                        react_1.default.createElement(providers_1.CheckoutProvider, null,
                            react_1.default.createElement(providers_1.BasketToggleProvider, null,
                                react_1.default.createElement(providers_1.RemoteConfigProvider, null,
                                    react_1.default.createElement(providers_1.LoaderProvider, null,
                                        react_1.default.createElement(GlobalStyle_1.default, null),
                                        react_1.default.createElement(pages_1.App, null))))))))))), root);


/***/ }),

/***/ 89347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const basketItem = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    quantity: (0, zod_1.number)()
});
exports["default"] = basketItem;


/***/ }),

/***/ 75357:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timestampDate = exports.mold = exports.order = exports.basketItem = void 0;
var basketItem_1 = __webpack_require__(89347);
Object.defineProperty(exports, "basketItem", ({ enumerable: true, get: function () { return __importDefault(basketItem_1).default; } }));
var order_1 = __webpack_require__(38323);
Object.defineProperty(exports, "order", ({ enumerable: true, get: function () { return __importDefault(order_1).default; } }));
var mold_1 = __webpack_require__(74240);
Object.defineProperty(exports, "mold", ({ enumerable: true, get: function () { return __importDefault(mold_1).default; } }));
var timestampDate_1 = __webpack_require__(51364);
Object.defineProperty(exports, "timestampDate", ({ enumerable: true, get: function () { return __importDefault(timestampDate_1).default; } }));
// NEW
__exportStar(__webpack_require__(11594), exports);
__exportStar(__webpack_require__(72173), exports);


/***/ }),

/***/ 74240:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const status = (0, zod_1.enum)(['IN_PROGRESS', 'DONE']);
const mold = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    productId: (0, zod_1.string)(),
    variant: (0, zod_1.string)(),
    status
});
exports["default"] = mold;


/***/ }),

/***/ 72173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const deliveryType = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    label: (0, zod_1.string)(),
    price: (0, zod_1.number)(),
    time: (0, zod_1.string)(),
    requires_address: (0, zod_1.boolean)().nullable(),
    isAvailable: (0, zod_1.boolean)().nullable()
});
exports["default"] = deliveryType;


/***/ }),

/***/ 11594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const paymentType = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    label: (0, zod_1.string)()
});
exports["default"] = paymentType;


/***/ }),

/***/ 38323:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const config_1 = __webpack_require__(42636);
const orderStatuses_1 = __importDefault(__webpack_require__(82380));
const basketItem_1 = __importDefault(__webpack_require__(89347));
const timestampDate_1 = __importDefault(__webpack_require__(51364));
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
const paymentType = (0, zod_1.enum)([...config_1.PAYMENT_METHODS]);
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
const status = (0, zod_1.enum)([...orderStatuses_1.default]);
const order = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    products: (0, zod_1.array)(basketItem_1.default).nullable(),
    customerType: customerType.nullable(),
    contactDetails: contactDetails.nullable(),
    deliveryType: deliveryType.nullable(),
    shipping: shipping.nullable(),
    paymentType: paymentType.nullable(),
    invoice: (0, zod_1.string)().nullable(),
    total,
    createdAt: timestampDate_1.default,
    modifiedAt: timestampDate_1.default,
    status
});
exports["default"] = order;


/***/ }),

/***/ 51364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const timestapDate = (0, zod_1.object)({
    seconds: (0, zod_1.number)(),
    nanoseconds: (0, zod_1.number)()
});
exports["default"] = timestapDate;


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
// @ts-check
const updateOrderStatus_1 = __webpack_require__(80141);
const components_1 = __webpack_require__(26789);
const orderStatuses_1 = __importDefault(__webpack_require__(82380));
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const utils_1 = __webpack_require__(49502);
const lodash_uniq_1 = __importDefault(__webpack_require__(97644));
const date_fns_1 = __webpack_require__(18290);
const getMolds_1 = __webpack_require__(99780);
const Row = ({ order, columns }) => {
    const { t } = (0, react_i18next_1.useTranslation)('COMMON');
    const [currentStatus, setCurrentStatus] = (0, react_1.useState)({
        value: order.status,
        label: t(`orderStatuses.${order.status}`)
    });
    const orderInfo = useOrderInfo(order);
    (0, updateOrderStatus_1.useUpdateOrderStatus)(order, currentStatus);
    return (react_1.default.createElement(components_1.Box, { as: "tr", height: "6rem" },
        columns.map((column) => (react_1.default.createElement("td", { key: column }, orderInfo[column]))),
        react_1.default.createElement(components_1.Box, { as: "td", minWidth: "15rem" },
            react_1.default.createElement(components_1.Select, { value: currentStatus, onChange: (option) => {
                    if (option) {
                        setCurrentStatus(option);
                    }
                }, options: getStatusesWithLabels(t) }))));
};
const useOrderInfo = (order) => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    const query = (0, getMolds_1.useGetMolds)();
    const moldsData = query.data;
    return {
        id: order.id,
        modifiedAt: (0, utils_1.displayDate)((0, utils_1.getDateFromTimestamp)(order.modifiedAt)),
        createdAt: (0, utils_1.displayDate)((0, utils_1.getDateFromTimestamp)(order.createdAt)),
        customerType: commonT('customerTypes.' + order.customerType),
        boxesCount: order.products
            ?.map((product) => product.quantity)
            .reduce((prev, curr) => prev + curr, 0),
        customerName: order.contactDetails?.fullname,
        customerEmail: order.contactDetails?.email,
        customerPhone: order.contactDetails?.mobile.value,
        deliveryType: commonT('deliveryMethods.' + order.deliveryType),
        sum: (0, utils_1.displayMoney)(order.total.sum),
        molds: (0, lodash_uniq_1.default)(order.products?.map((product) => ({
            productId: product.id
        }))).map((mold) => {
            const displayName = mold.productId;
            let status = null;
            if (moldsData) {
                const alfa = moldsData.find((dbMold) => dbMold.productId === mold.productId);
                status = alfa?.status || null;
            }
            let color = 'red';
            if (status === 'DONE') {
                color = 'green';
            }
            if (status === 'IN_PROGRESS') {
                color = 'yellow';
            }
            return (react_1.default.createElement(components_1.Box, { color: color, key: displayName }, displayName));
        }),
        orderTime: (0, date_fns_1.differenceInDays)((0, utils_1.getDateFromTimestamp)(order.modifiedAt), (0, utils_1.getDateFromTimestamp)(order.createdAt)),
        deliveryId: 'XXX XXX XXX XXX XXX'
    };
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
const getOrders_1 = __webpack_require__(80433);
const components_1 = __webpack_require__(26789);
const isBefore_1 = __importDefault(__webpack_require__(313));
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const utils_1 = __webpack_require__(49502);
const Row_1 = __importDefault(__webpack_require__(89992));
const Table = ({ status, columns }) => {
    const { t } = (0, react_i18next_1.useTranslation)('ADMIN_ORDERS');
    const ordersQuery = (0, getOrders_1.useGetOrders)(status);
    return (react_1.default.createElement(components_1.QueryLoader, { query: ordersQuery }, (orders) => {
        return (react_1.default.createElement(components_1.Box, { as: "table", width: "100%", border: "1px solid", borderColor: "border-color" },
            orders.length > 0 && (react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    columns.map((column) => (react_1.default.createElement(components_1.Box, { as: "th", backgroundColor: "background-color-01", key: column },
                        react_1.default.createElement("h5", null, t(`headers.${column}`))))),
                    react_1.default.createElement(components_1.Box, { as: "th", backgroundColor: "background-color-01" },
                        react_1.default.createElement("h5", null, t('headers.status')))))),
            react_1.default.createElement("tbody", null,
                sortOrders(orders).map((order) => (react_1.default.createElement(Row_1.default, { columns: columns, key: order.id, order: order }))),
                !orders.length && (react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null, t('emptyState')))))));
    }));
};
const sortOrders = (orders) => orders.sort((prev, next) => (0, isBefore_1.default)((0, utils_1.getDateFromTimestamp)(prev.modifiedAt), (0, utils_1.getDateFromTimestamp)(next.modifiedAt))
    ? -1
    : 1);
exports["default"] = Table;


/***/ }),

/***/ 53470:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const orderStatuses_1 = __importDefault(__webpack_require__(82380));
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const Table_1 = __importDefault(__webpack_require__(8223));
const AdminOrders = () => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    const { t } = (0, react_i18next_1.useTranslation)('ADMIN_ORDERS');
    return (react_1.default.createElement(components_1.Page, null, orderStatuses_1.default.map((status, index) => (react_1.default.createElement(components_1.Tile, { key: status, marginTop: index === 0 ? 0 : '3rem' },
        react_1.default.createElement(components_1.Box, { as: "h2", marginY: "m-size" }, commonT(`orderStatuses.${status}`)),
        react_1.default.createElement(components_1.Box, { as: "h5", margin: 0, marginBottom: "m-size" }, t(`statusesInfo.${status}`)),
        react_1.default.createElement(Table_1.default, { columns: statusToColumns[status], status: status }))))));
};
const statusToColumns = {
    OPEN: [
        'id',
        'createdAt',
        'customerType',
        'customerName',
        'customerPhone',
        'customerEmail',
        'sum'
    ],
    PAYMENT_RECEIVED: ['id', 'modifiedAt', 'boxesCount', 'molds'],
    IN_PREPARATION: [
        'id',
        'modifiedAt',
        'createdAt',
        'customerType',
        'deliveryType',
        'sum'
    ],
    AWAITING_FOR_PICKUP: ['id', 'modifiedAt', 'deliveryType', 'deliveryId'],
    IN_DELIVERY: ['id', 'modifiedAt', 'deliveryType', 'deliveryId'],
    COMPLETED: ['id', 'modifiedAt', 'createdAt', 'orderTime', 'sum']
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
const DeliveryAndPayments_1 = __importDefault(__webpack_require__(1698));
const HowToCreateOrder_1 = __importDefault(__webpack_require__(64103));
const TermsAndConditions_1 = __importDefault(__webpack_require__(3036));
const PrivacyPolicy_1 = __importDefault(__webpack_require__(51578));
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
            react_1.default.createElement(react_router_dom_1.Route, { component: DeliveryAndPayments_1.default, path: routes_1.DELIVERY_AND_PAYMENTS }),
            react_1.default.createElement(react_router_dom_1.Route, { component: HowToCreateOrder_1.default, path: routes_1.HOW_TO_CREATE_ORDER }),
            react_1.default.createElement(react_router_dom_1.Route, { component: TermsAndConditions_1.default, path: routes_1.TERMS_AND_CONDITIONS }),
            react_1.default.createElement(react_router_dom_1.Route, { component: PrivacyPolicy_1.default, path: routes_1.PRIVACY_POLICY }),
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
const react_1 = __importStar(__webpack_require__(67294));
const AppRouter_1 = __importDefault(__webpack_require__(62493));
const auth_1 = __webpack_require__(98278);
const AuthProvider_1 = __webpack_require__(8995);
const commonComponents_1 = __webpack_require__(31802);
const App = () => {
    const { auth, setAuth } = (0, react_1.useContext)(AuthProvider_1.authContext);
    (0, react_1.useEffect)(() => {
        (0, auth_1.getAuth)().onAuthStateChanged(async (user) => {
            if (user) {
                // setAuth(user)
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
exports["default"] = App;


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
const react_i18next_1 = __webpack_require__(26828);
const Error = ({ message, setView }) => {
    const { t } = (0, react_i18next_1.useTranslation)('CONTACT');
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
const common_1 = __webpack_require__(73478);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const utils_1 = __webpack_require__(49502);
const Form = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CONTACT');
    return (react_1.default.createElement(components_1.Flexbox, { alignItems: "flex-end" },
        react_1.default.createElement(common_1.FieldWrapper, null,
            react_1.default.createElement(formik_1.Field, { name: "id" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t('items.CHECK_STATUS.form.id.label'), true), maxLength: 36, placeholder: t('items.CHECK_STATUS.form.id.placeholder') })))),
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
const react_i18next_1 = __webpack_require__(26828);
const Result = ({ status, setView }) => {
    const { t } = (0, react_i18next_1.useTranslation)('CONTACT');
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    return (react_1.default.createElement(components_1.Flexbox, { justifyContent: "space-between" },
        react_1.default.createElement(components_1.Flexbox, { flexDirection: "column" },
            react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5", marginBottom: "m-size" }, t('items.CHECK_STATUS.result.info')),
            react_1.default.createElement(components_1.Flexbox, { marginTop: 0, as: "h3" }, commonT(`orderStatuses.${status}`)),
            react_1.default.createElement(components_1.Box, { marginTop: 0, as: "h5" }, t(`items.CHECK_STATUS.result.statusesMeanings.${status}`)),
            react_1.default.createElement(components_1.Button, { variant: "secondary", size: "small", onClick: () => setView({ view: 'FORM' }) }, t('items.CHECK_STATUS.result.tryNew'))),
        react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center" },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "box", size: "6x" }))));
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
const react_i18next_1 = __webpack_require__(26828);
const react_fontawesome_1 = __webpack_require__(67814);
const Form_1 = __importDefault(__webpack_require__(30953));
const Result_1 = __importDefault(__webpack_require__(24020));
const Error_1 = __importDefault(__webpack_require__(98409));
const useForm_1 = __importDefault(__webpack_require__(6512));
const CheckStatus = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CONTACT');
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
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "box", size: "6x" })))))));
};
exports["default"] = CheckStatus;


/***/ }),

/***/ 6512:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(72934);
const LoaderProvider_1 = __webpack_require__(30150);
const react_1 = __webpack_require__(67294);
const react_i18next_1 = __webpack_require__(26828);
const yup_1 = __webpack_require__(87561);
const useForm = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CONTACT');
    const [view, setView] = (0, react_1.useState)({ view: 'FORM' });
    const getOrderStatus = (0, api_1.useGetOrderStatus)();
    const initialValues = {
        id: ''
    };
    const { show, hide } = (0, react_1.useContext)(LoaderProvider_1.loaderContext);
    const schema = (0, yup_1.object)({
        id: (0, yup_1.string)()
            .required(t('items.CHECK_STATUS.form.id.validation.required'))
            .length(36, t('items.CHECK_STATUS.form.id.validation.length'))
    });
    const onSubmit = async (formValues) => {
        try {
            show();
            const order = await getOrderStatus(formValues);
            setView({
                view: 'RESULT',
                status: order.status
            });
        }
        catch (e) {
            setView({
                view: 'ERROR',
                message: t('items.CHECK_STATUS.error.info')
            });
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
const Tile = ({ extended, content, icon, title }) => (react_1.default.createElement(components_1.Tile, { gridColumn: extended ? 'auto / span 2' : 'auto', flexDirection: "column" },
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
const commonComponents_1 = __webpack_require__(31802);
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const CheckStatus_1 = __importDefault(__webpack_require__(17124));
const Tile_1 = __importDefault(__webpack_require__(25018));
const Contact = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CONTACT');
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    const contactMethods = useContactMethods();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Banner, { small: true, title: react_1.default.createElement("h1", null, t('title')) }),
        react_1.default.createElement(components_1.Grid, { gridTemplateColumns: "repeat(3, 1fr)", marginTop: "xxl-size" }, contactMethods.map(({ key, ...props }) => (react_1.default.createElement(Tile_1.default, { key: key, title: t(`items.${key}.title`), ...props })))),
        react_1.default.createElement(commonComponents_1.ReadTermsAndConditions, null)));
};
const useContactMethods = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CONTACT');
    return [
        {
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
        // {
        //   key: 'GET_INVOICE',
        //   extended: true,
        //   content: <CheckStatus />
        // },
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

/***/ 46629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Option = ({ icon, title, description }) => {
    return (react_1.default.createElement(components_1.Flexbox, { padding: "m-size", alignItems: "center", border: "1px solid", borderColor: "border-color" },
        react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center", marginRight: "l-size" },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon, size: "3x" })),
        react_1.default.createElement(components_1.Flexbox, { flexDirection: "column" },
            react_1.default.createElement(components_1.Box, { marginTop: "0", marginBottom: "m-size", as: "h4" }, title),
            react_1.default.createElement(components_1.Box, { fontWeight: "400", margin: "0", as: "h5" }, description))));
};
exports["default"] = Option;


/***/ }),

/***/ 1698:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_fontawesome_1 = __webpack_require__(67814);
const config_1 = __webpack_require__(42636);
const commonComponents_1 = __webpack_require__(31802);
const components_1 = __webpack_require__(26789);
const FeatureItem_1 = __importDefault(__webpack_require__(24690));
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const utils_1 = __webpack_require__(49502);
const Option_1 = __importDefault(__webpack_require__(46629));
const DeliveryAndPayments = () => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    const { t } = (0, react_i18next_1.useTranslation)('DELIVERY_AND_PAYMENTS');
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useTabTitle)(t('title'));
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Banner, { small: true, title: react_1.default.createElement("h1", null, t('title')) }),
        react_1.default.createElement(components_1.SectionHead, { marginTop: "xxl-size", title: t('processingTime.title') }),
        react_1.default.createElement(components_1.Grid, { gridTemplateColumns: "1fr 5rem 1fr 5rem 1fr" },
            react_1.default.createElement(Option_1.default, { icon: "calendar-alt", title: t('processingTime.items.PRODUCTION.title'), description: t('processingTime.items.PRODUCTION.description') }),
            react_1.default.createElement(components_1.Flexbox, { alignSelf: "center" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "3x", icon: "plus" })),
            react_1.default.createElement(Option_1.default, { icon: "truck-loading", title: t('processingTime.items.DELIVERY.title'), description: t('processingTime.items.DELIVERY.description') }),
            react_1.default.createElement(components_1.Flexbox, { alignSelf: "center" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "3x", icon: "equals" })),
            react_1.default.createElement(Option_1.default, { icon: "boxes", title: t('processingTime.items.TOTAL.title'), description: t('processingTime.items.TOTAL.description') })),
        react_1.default.createElement(components_1.SectionHead, { marginTop: "xxl-size", title: t('payments.title') }),
        react_1.default.createElement(components_1.Grid, null, config_1.PAYMENT_METHODS.map((feature) => (react_1.default.createElement(FeatureItem_1.default, { key: feature, title: commonT(`paymentTypes.${feature}.title`) },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "exchange-alt", size: "3x" }))))),
        react_1.default.createElement(components_1.SectionHead, { marginTop: "xxl-size", title: t('delivery.title') }),
        react_1.default.createElement(components_1.Grid, null, config_1.DELIVERY_METHODS.map((feature) => (react_1.default.createElement(FeatureItem_1.default, { key: feature.name, title: commonT(`deliveryTypes.${feature.name}`), subtitle: `${(0, utils_1.displayMoney)(feature.price)} - ${feature.time}` },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: feature.icon, size: "3x" }))))),
        react_1.default.createElement(commonComponents_1.ReadTermsAndConditions, null)));
};
exports["default"] = DeliveryAndPayments;


/***/ }),

/***/ 67810:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(72934);
const commonComponents_1 = __webpack_require__(31802);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const Bestsellers = () => {
    const { t } = (0, hooks_1.useTranslation)('HOME');
    const productsQuery = (0, api_1.useGetProducts)();
    return (react_1.default.createElement(commonComponents_1.ProductsGrid, { marginTop: "xxl-size", title: t('bestsellers.title'), query: productsQuery }));
};
exports["default"] = Bestsellers;


/***/ }),

/***/ 97971:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// @ts-nocheck
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const components_1 = __webpack_require__(26789);
const react_i18next_1 = __webpack_require__(26828);
const banner_guy_png_1 = __importDefault(__webpack_require__(90670));
const routes_1 = __webpack_require__(74897);
const react_fontawesome_1 = __webpack_require__(67814);
const BannerWithPicture_1 = __importDefault(__webpack_require__(57048));
const Bestsellers_1 = __importDefault(__webpack_require__(67810));
const Home = () => {
    const { t } = (0, react_i18next_1.useTranslation)('HOME');
    const history = (0, react_router_dom_1.useHistory)();
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(BannerWithPicture_1.default, { img: banner_guy_png_1.default, description: t('banner.description'), title: react_1.default.createElement(components_1.Box, { marginBottom: "0", as: "h1", fontWeight: 400 },
                react_1.default.createElement("strong", null, "See"),
                "\u00A0everything with\u00A0",
                react_1.default.createElement("strong", null, "Clarity")) },
            react_1.default.createElement(components_1.Button, { onClick: () => history.push(routes_1.PRODUCTS) },
                t('banner.buttonLabel'),
                react_1.default.createElement(components_1.Box, { marginLeft: "m-size" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "arrow-right" })))),
        react_1.default.createElement(Bestsellers_1.default, null)));
};
exports["default"] = Home;


/***/ }),

/***/ 64103:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const commonComponents_1 = __webpack_require__(31802);
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
// import MakeOrderSteps from './MakeOrderSteps'
const HowToCreateOrder = () => {
    const { t } = (0, hooks_1.useTranslation)('HOW_TO_CREATE_ORDER');
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useTabTitle)(t('title'));
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Banner, { small: true, title: react_1.default.createElement("h1", null, t('title')) }),
        react_1.default.createElement(commonComponents_1.Features, null),
        react_1.default.createElement(commonComponents_1.ReadTermsAndConditions, null),
        react_1.default.createElement(commonComponents_1.ReadPrivacyPolicy, null)));
};
exports["default"] = HowToCreateOrder;


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
const react_i18next_1 = __webpack_require__(26828);
const react_router_dom_1 = __webpack_require__(77856);
const PageNotFound = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)('PAGE_NOT_FOUND');
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useTabTitle)(t('title'));
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Flexbox, { justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "xxl-size", minHeight: "50rem" },
            react_1.default.createElement("h1", null, t('title')),
            react_1.default.createElement(components_1.Button, { marginTop: "3rem", onClick: () => history.push(routes_1.HOME), type: "button" }, t('buttonLabel')))));
};
exports["default"] = PageNotFound;


/***/ }),

/***/ 51578:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const PrivacyPolicy = () => {
    const { t } = (0, react_i18next_1.useTranslation)('PRIVACY_POLICY');
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Banner, { small: true, title: react_1.default.createElement("h1", null, t('title')) })));
};
exports["default"] = PrivacyPolicy;


/***/ }),

/***/ 973:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_i18next_1 = __webpack_require__(26828);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const react_1 = __importDefault(__webpack_require__(67294));
const react_fontawesome_1 = __webpack_require__(67814);
const Search = ({ value, onChange }) => {
    const { t } = (0, react_i18next_1.useTranslation)('PRODUCTS');
    return (react_1.default.createElement(components_1.Flexbox, { width: "25rem" },
        react_1.default.createElement(StyledInput, { onChange: (e) => onChange(e.target.value), value: value, placeholder: t('searchPlaceholder') }),
        react_1.default.createElement(components_1.Button, { marginLeft: "m-size", size: "small", variant: "ternary", onClick: () => onChange('') },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: value ? 'times' : 'search', size: "1x" }))));
};
const StyledInput = styled_components_1.default.input `
  border: none;
  height: 4rem;
  width: 100%;
  padding: ${(props) => `0 ${props.theme.space['s-size']}`};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors['border-color']};
  font-size: 1.7rem;
`;
exports["default"] = Search;


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
const react_i18next_1 = __webpack_require__(26828);
const commonComponents_1 = __webpack_require__(31802);
const react_router_dom_1 = __webpack_require__(77856);
const BackButton_1 = __importDefault(__webpack_require__(5429));
const routes_1 = __webpack_require__(74897);
const Search_1 = __importDefault(__webpack_require__(973));
const react_2 = __webpack_require__(67294);
const api_1 = __webpack_require__(72934);
const Products = () => {
    const { state } = (0, react_router_dom_1.useLocation)();
    const { t } = (0, react_i18next_1.useTranslation)('PRODUCTS');
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    const [query, setQuery] = (0, react_2.useState)('');
    let productsQuery;
    if (state?.labelId) {
        productsQuery = (0, api_1.useGetLabelProducts)({ labelId: state.labelId });
    }
    else if (state?.collectionId) {
        productsQuery = (0, api_1.useGetCollectionProducts)({
            collectionId: state.collectionId
        });
    }
    else {
        productsQuery = (0, api_1.useGetProducts)();
    }
    const isFiltered = state?.labelId || state?.collectionId;
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.QueryLoader, { query: productsQuery }, (data) => {
            const count = data.length;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                isFiltered && (react_1.default.createElement(BackButton_1.default, { to: routes_1.PRODUCTS, label: t('showAllLabel') })),
                !isFiltered && (react_1.default.createElement(components_1.Flexbox, { justifyContent: "space-between", alignItems: "center" },
                    react_1.default.createElement(components_1.Box, { as: "h3", margin: "0", width: "max-width", marginRight: "m-size" }, count === 1
                        ? t('productsSingle', { count })
                        : count && count < 5
                            ? t('productsFew', { count })
                            : t('productsMultiple', { count })),
                    react_1.default.createElement(Search_1.default, { value: query, onChange: (value) => setQuery(value) }))),
                react_1.default.createElement(commonComponents_1.ProductsGrid, { searchQuery: query, marginTop: "l-size", query: productsQuery })));
        })));
};
exports["default"] = Products;


/***/ }),

/***/ 3036:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const components_2 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const TermsAndConditions = () => {
    const { t } = (0, react_i18next_1.useTranslation)('TERMS_AND_CONDITIONS');
    (0, hooks_1.useScrollTop)();
    (0, hooks_1.useTabTitle)(t('title'));
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Banner, { small: true, title: react_1.default.createElement("h1", null, t('title')) }),
        react_1.default.createElement(components_1.Box, { marginTop: "xxl-size" },
            react_1.default.createElement(components_2.ExternalLink, { to: "https://drive.google.com/file/d/1csQd4cWoBWJh26xaFo-ZWasBoZPk-8FK/view?usp=sharing" }, t('linkLabel')))));
};
exports["default"] = TermsAndConditions;


/***/ }),

/***/ 5429:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_fontawesome_1 = __webpack_require__(67814);
const BackButton = ({ to, label }) => (react_1.default.createElement(components_1.Box, { marginY: "m-size" },
    react_1.default.createElement(components_1.Link, { to: to },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "arrow-left" }),
        react_1.default.createElement(components_1.Box, { as: "h3", marginY: 0, marginLeft: "s-size" }, label))));
exports["default"] = BackButton;


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
const Images = ({ product }) => {
    const { name, gallery } = product;
    const [selectedImage, setSelectedImage] = (0, react_1.useState)(gallery[0]);
    (0, react_1.useEffect)(() => {
        const url = gallery[0];
        if (url) {
            setSelectedImage(url);
        }
    }, [product]);
    const width = '60%';
    return (react_1.default.createElement(components_1.Flexbox, { flexGrow: 4, flexDirection: "column", minWidth: width, maxWidth: width },
        react_1.default.createElement(components_1.Flexbox, { display: "flex" },
            gallery.length > 1 && (react_1.default.createElement(components_1.Flexbox, { flexDirection: "column", width: "6rem", height: "100%" }, gallery.map((image) => (react_1.default.createElement(GalleryImageWrapper, { key: image, onClick: () => setSelectedImage(image), role: "presentation" },
                react_1.default.createElement(components_2.ImageLoader, { src: image })))))),
            react_1.default.createElement(ImageWrapper, null,
                react_1.default.createElement(components_2.ImageLoader, { alt: name, src: selectedImage })))));
};
const ImageWrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  flex-grow: 1;
  position: relative;
  padding: ${(props) => `0 ${props.theme.space['xxxl-size']}`};
`;
const GalleryImageWrapper = styled_components_1.default.div `
  min-width: 100%;
  max-width: 100%;
  min-height: 6rem;
  max-height: 6rem;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors['border-color']};
  position: relative;

  &:hover {
    cursor: pointer;
    background: #fff;
  }

  &:not(:first-child) {
    margin-top: ${(props) => props.theme.space['s-size']};
  }
`;
exports["default"] = Images;


/***/ }),

/***/ 16858:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const utils_1 = __webpack_require__(49502);
const NoType_1 = __importDefault(__webpack_require__(60485));
const Info = ({ product }) => {
    const { t } = (0, react_i18next_1.useTranslation)('VIEW_PRODUCT');
    const form = react_1.default.createElement(NoType_1.default, { product: product });
    return (react_1.default.createElement(components_1.Flexbox, { flexGrow: 1, flexDirection: "column", marginLeft: "xl-size" },
        react_1.default.createElement(components_1.Box, { as: "h1", margin: 0 }, product.name),
        react_1.default.createElement(components_1.Separator, null),
        react_1.default.createElement(components_1.Flexbox, null,
            react_1.default.createElement(components_1.Box, { color: "gray-10", as: "h4", margin: 0 }, t('color')),
            react_1.default.createElement(components_1.Box, { as: "h4", marginY: 0, marginLeft: "s-size" }, t('colorValueTODO'))),
        react_1.default.createElement(components_1.Flexbox, { marginTop: "xxs-size" },
            react_1.default.createElement(components_1.Box, { color: "gray-10", as: "h4", margin: 0 }, t('label')),
            react_1.default.createElement(components_1.Box, { as: "h4", marginY: 0, marginLeft: "s-size" }, product.label.label)),
        react_1.default.createElement(components_1.Flexbox, { marginTop: "xxs-size" },
            react_1.default.createElement(components_1.Box, { color: "gray-10", as: "h4", margin: 0 }, t('icon')),
            react_1.default.createElement(components_1.Box, { as: "h4", marginY: 0, marginLeft: "s-size" }, product.icon.label)),
        react_1.default.createElement(components_1.Separator, null),
        react_1.default.createElement(components_1.Box, { as: "h2", margin: 0 }, (0, utils_1.displayMoney)(product.price)),
        react_1.default.createElement(components_1.Box, { as: "h4", margin: 0, color: "gray-10" }, t('priceSubtitle')),
        react_1.default.createElement(components_1.Separator, null),
        react_1.default.createElement(components_1.Box, { as: "p", margin: 0 }, product.description),
        react_1.default.createElement(components_1.Separator, null),
        form));
};
exports["default"] = Info;


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
const CheckoutProvider_1 = __webpack_require__(50542);
const lodash_subtract_1 = __importDefault(__webpack_require__(81057));
const lodash_add_1 = __importDefault(__webpack_require__(24427));
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
            else {
                const newBasketProduct = {
                    id: product.id,
                    quantity: 1
                };
                return [...prev, newBasketProduct];
            }
        });
        setCheckout((prev) => ({
            ...prev,
            totalNew: isInBasket
                ? (0, lodash_subtract_1.default)(prev.totalNew, isInBasket.quantity * product.price)
                : (0, lodash_add_1.default)(prev.totalNew, product.price)
        }));
    };
    return {
        initialValues,
        schema,
        submitForm
    };
};
exports["default"] = useForm;


/***/ }),

/***/ 72421:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(72934);
const commonComponents_1 = __webpack_require__(31802);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const OtherIcons = ({ labelId, iconId }) => {
    const { t } = (0, react_i18next_1.useTranslation)('VIEW_PRODUCT');
    const productsQuery = (0, api_1.useGetOtherIcons)({ labelId, iconId });
    return (react_1.default.createElement(commonComponents_1.ProductsGrid, { marginTop: "xxl-size", title: t('otherIcons.title'), query: productsQuery, link: {
            to: {
                pathname: '/products',
                state: {
                    labelId
                }
            },
            label: t('otherIcons.linkLabel')
        } }));
};
exports["default"] = OtherIcons;


/***/ }),

/***/ 1427:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const api_1 = __webpack_require__(72934);
const commonComponents_1 = __webpack_require__(31802);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const OtherPlaces = ({ labelId, collectionId }) => {
    const { t } = (0, react_i18next_1.useTranslation)('VIEW_PRODUCT');
    const productsQuery = (0, api_1.useGetOtherPlaces)({ labelId, collectionId });
    return (react_1.default.createElement(commonComponents_1.ProductsGrid, { marginTop: "xxl-size", title: t('otherPlaces.title'), query: productsQuery, link: {
            to: {
                pathname: '/products',
                state: {
                    collectionId
                }
            },
            label: t('otherIcons.linkLabel')
        } }));
};
exports["default"] = OtherPlaces;


/***/ }),

/***/ 58607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const SubmitButton = ({ separation, disabled, isInBasket }) => {
    const { t } = (0, react_i18next_1.useTranslation)('VIEW_PRODUCT');
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


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const components_1 = __webpack_require__(26789);
const hooks_1 = __webpack_require__(92457);
const react_i18next_1 = __webpack_require__(26828);
const BackButton_1 = __importDefault(__webpack_require__(5429));
const Images_1 = __importDefault(__webpack_require__(16821));
const OtherIcons_1 = __importDefault(__webpack_require__(72421));
const routes_1 = __webpack_require__(74897);
const Info_1 = __importDefault(__webpack_require__(16858));
const api_1 = __webpack_require__(72934);
const OtherPlaces_1 = __importDefault(__webpack_require__(1427));
const ViewProduct = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const { t } = (0, react_i18next_1.useTranslation)('VIEW_PRODUCT');
    const productQuery = (0, api_1.useGetProduct)({ id });
    (0, hooks_1.useScrollTop)(id);
    (0, hooks_1.useDocumentTitle)(t('title', {
        productName: productQuery.data ? productQuery.data.name : 'Produkt'
    }));
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.QueryLoader, { query: productQuery }, (product) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(BackButton_1.default, { to: routes_1.PRODUCTS, label: t('actions.goBack') }),
            react_1.default.createElement(components_1.Tile, { flexDirection: "row" },
                react_1.default.createElement(Images_1.default, { product: product }),
                react_1.default.createElement(Info_1.default, { product: product })),
            react_1.default.createElement(OtherIcons_1.default, { labelId: product.label.id, iconId: product.icon.id }),
            react_1.default.createElement(OtherPlaces_1.default, { collectionId: product.collection.id, labelId: product.label.id }))))));
};
exports["default"] = ViewProduct;


/***/ }),

/***/ 12737:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const formik_1 = __webpack_require__(94649);
const react_i18next_1 = __webpack_require__(26828);
const utils_1 = __webpack_require__(49502);
const common_1 = __webpack_require__(73478);
const Form = ({ deliveryTypes }) => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_DELIVERY');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(common_1.Row, { flexDirection: "column" }, deliveryTypes
            .filter((type) => type.isAvailable)
            .map((type, index) => (react_1.default.createElement(formik_1.Field, { name: "deliveryType", key: type.label }, (props) => (react_1.default.createElement(components_1.CheckboxField, { ...props, id: type.label, isFirst: index === 0, title: commonT(`deliveryTypes.${type.label}`), subtitle: `${type.time}`, val: (0, utils_1.displayMoney)(type.price), fieldLabel: t('form.deliveryType.label') }))))))));
};
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
const react_i18next_1 = __webpack_require__(26828);
const formik_1 = __webpack_require__(94649);
const react_router_dom_1 = __webpack_require__(77856);
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const CheckoutProvider_1 = __webpack_require__(50542);
const Actions_1 = __importDefault(__webpack_require__(98520));
const common_1 = __webpack_require__(73478);
const useForm_1 = __importDefault(__webpack_require__(7218));
const Form_1 = __importDefault(__webpack_require__(12737));
const api_1 = __webpack_require__(72934);
const CheckoutDelivery = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_DELIVERY');
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    const deliveryTypesQuery = (0, api_1.useGetDeliveryTypes)();
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { schema, onSubmitForm, initialValues } = (0, useForm_1.default)();
    if (!checkout.contactDetails2) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_DETAILS });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('title')),
            react_1.default.createElement(components_1.QueryLoader, { query: deliveryTypesQuery }, (deliveryTypes) => (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: (values) => onSubmitForm(values, deliveryTypes) }, ({ handleSubmit, values }) => {
                const delivery = deliveryTypes.find((type) => type.label === values.deliveryType);
                return (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                    react_1.default.createElement(Form_1.default, { deliveryTypes: deliveryTypes }),
                    react_1.default.createElement(common_1.Total, { customDelivery: delivery?.price }),
                    react_1.default.createElement(Actions_1.default, null)));
            }))))));
};
exports["default"] = CheckoutDelivery;


/***/ }),

/***/ 7218:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const routes_1 = __webpack_require__(74897);
const react_i18next_1 = __webpack_require__(26828);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const lodash_add_1 = __importDefault(__webpack_require__(24427));
const useForm = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_DELIVERY');
    const history = (0, react_router_dom_1.useHistory)();
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const onSubmitForm = (form, deliveryTypes) => {
        const selectedDeliveryType = deliveryTypes.find((method) => method.label === form.deliveryType);
        if (selectedDeliveryType) {
            setCheckout((prev) => ({
                ...prev,
                deliveryType2: selectedDeliveryType.id,
                totalNew: (0, lodash_add_1.default)(prev.totalNew, selectedDeliveryType.price)
            }));
        }
        if (selectedDeliveryType?.requires_address) {
            history.push(routes_1.CHECKOUT_SHIPPING);
        }
        else {
            history.push(routes_1.CHECKOUT_PAYMENT);
        }
    };
    const initialValues = {
        deliveryType: checkout.deliveryType2 ?? ''
    };
    const schema = (0, yup_1.object)().shape({
        deliveryType: (0, yup_1.string)().required(t('form.deliveryType.validations.required'))
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
const formik_1 = __webpack_require__(94649);
const utils_1 = __webpack_require__(49502);
const react_1 = __importDefault(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const react_i18next_1 = __webpack_require__(26828);
const Row_1 = __importDefault(__webpack_require__(21342));
const FieldWrapper_1 = __importDefault(__webpack_require__(65555));
const Form = ({ isCompany: isCompany }) => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_DETAILS');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "fullName", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t(`form.fullName.label`), true), placeholder: t(`form.fullName.placeholder`) })))),
            isCompany && (react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "nip", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t('form.nip.label'), true), maxLength: 10, placeholder: t('form.nip.placeholder') })))))),
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(FieldWrapper_1.default, { width: "75%" },
                react_1.default.createElement(formik_1.Field, { name: "street", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t('form.street.label'), true), placeholder: t('form.street.placeholder') })))),
            react_1.default.createElement(FieldWrapper_1.default, { width: "25%" },
                react_1.default.createElement(formik_1.Field, { name: "streetNo", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t('form.streetNr.label'), true), placeholder: t('form.streetNr.placeholder') }))))),
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "addressCdn", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t('form.addressCdn.label')), maxLength: 6, placeholder: t('form.addressCdn.placeholder') }))))),
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "postCode", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t('form.postCode.label'), true), maxLength: 6, placeholder: t('form.postCode.placeholder') })))),
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "city", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t('form.city.label'), true), placeholder: t('form.city.placeholder') }))))),
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "email", type: "email" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: (0, utils_1.getRequiredOrNot)(t('form.email.label'), true), placeholder: t('form.email.placeholder') })))),
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "phone" }, (props) => (react_1.default.createElement(components_1.MobileInput, { label: (0, utils_1.getRequiredOrNot)(t('form.phone.label'), true), fieldProps: props })))))));
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
const hooks_1 = __webpack_require__(92457);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
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
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_DETAILS');
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    const [isCompany, setIsCompany] = (0, react_1.useState)(checkout.contactDetails2?.isCompany || true);
    const { onSubmitForm, initialValues, getSchema } = (0, useForm_1.default)();
    if (!checkout.products2) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_PRODUCTS });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('title')),
            react_1.default.createElement(Flexbox_1.default, { marginBottom: "m-size", justifyContent: "center", alignItems: "center" },
                react_1.default.createElement(CustomTypeButton, { onClick: () => setIsCompany(true) }, commonT('customerTypes.COMPANY')),
                react_1.default.createElement(react_switch_1.default, { offColor: "#e1e1e1", onColor: "#e1e1e1", checkedIcon: false, uncheckedIcon: false, onChange: (checked) => setIsCompany(!checked), checked: !isCompany }),
                react_1.default.createElement(CustomTypeButton, { onClick: () => setIsCompany(false) }, commonT('customerTypes.INDIVIDUAL'))),
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: getSchema(isCompany), onSubmit: (form) => onSubmitForm(form, isCompany) }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                react_1.default.createElement(Form_1.default, { isCompany: isCompany }),
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
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const react_i18next_1 = __webpack_require__(26828);
const routes_1 = __webpack_require__(74897);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const useForm = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_DETAILS');
    const history = (0, react_router_dom_1.useHistory)();
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const onSubmitForm = (form, isCompany) => {
        setCheckout((prev) => ({
            ...prev,
            contactDetails2: {
                ...form,
                isCompany
            }
        }));
        history.push(routes_1.CHECKOUT_DELIVERY);
    };
    const initialValues = {
        fullName: checkout.contactDetails2?.fullName ?? '',
        nip: checkout.contactDetails2?.nip ?? '',
        street: checkout.contactDetails2?.street ?? '',
        streetNo: checkout.contactDetails2?.streetNo ?? '',
        addressCdn: checkout.contactDetails2?.addressCdn ?? '',
        postCode: checkout.contactDetails2?.postCode ?? '',
        city: checkout.contactDetails2?.city ?? '',
        email: checkout.contactDetails2?.email ?? '',
        phone: checkout.contactDetails2?.phone ?? ''
    };
    const getSchema = (isCompany) => {
        const base = (0, yup_1.object)().shape({
            fullName: (0, yup_1.string)().required(t('form.fullName.validations.required')),
            email: (0, yup_1.string)()
                .email(t('form.email.validations.email'))
                .required(t('form.email.validations.required')),
            phone: (0, yup_1.string)()
                .min(11, t('form.phone.validations.min'))
                .required(t('form.phone.validations.required')),
            street: (0, yup_1.string)().required(t('form.street.validations.required')),
            streetNo: (0, yup_1.string)().required(t('form.streetNr.validations.required')),
            addressCdn: (0, yup_1.string)(),
            postCode: (0, yup_1.string)()
                .trim()
                .matches(/^(\d{2})-(\d{3})$/, t('form.postCode.validations.matches'))
                .required(t('form.postCode.validations.required')),
            city: (0, yup_1.string)().required(t('form.city.validations.required'))
        });
        const companySchema = base.shape({
            nip: (0, yup_1.string)()
                .required(t('form.nip.validations.required'))
                .length(10, t('form.nip.validations.length'))
                .matches(/^(\d{10})$/, t('form.nip.validations.matches'))
        });
        return isCompany ? companySchema : base;
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
const react_i18next_1 = __webpack_require__(26828);
const components_1 = __webpack_require__(26789);
const common_1 = __webpack_require__(73478);
const Form = ({ paymentTypes }) => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_PAYMENT');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(common_1.Row, { flexDirection: "column" }, paymentTypes.map((type, index) => (react_1.default.createElement(formik_1.Field, { name: "paymentType", key: type.label }, (props) => (react_1.default.createElement(components_1.CheckboxField, { ...props, id: type.id, isFirst: index === 0, title: commonT(`paymentTypes.${type.label}.title`), subtitle: commonT(`paymentTypes.${type.label}.subtitle`), fieldLabel: t('form.paymentType.label') }))))))));
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
const react_i18next_1 = __webpack_require__(26828);
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const CheckoutProvider_1 = __webpack_require__(50542);
const common_1 = __webpack_require__(73478);
const useForm_1 = __importDefault(__webpack_require__(95181));
const Form_1 = __importDefault(__webpack_require__(13897));
const api_1 = __webpack_require__(72934);
const CheckoutPayment = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_PAYMENT');
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    const paymentTypesQuery = (0, api_1.useGetPaymentTypes)();
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { onSubmit, initialValues, schema, isLoading } = (0, useForm_1.default)();
    if (!checkout.deliveryType2) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_DELIVERY });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('title')),
            react_1.default.createElement(components_1.QueryLoader, { query: paymentTypesQuery }, (paymentTypes) => (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: onSubmit }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                react_1.default.createElement(Form_1.default, { paymentTypes: paymentTypes }),
                react_1.default.createElement(common_1.Total, null),
                react_1.default.createElement(common_1.Actions, { primaryDisabled: isLoading })))))))));
};
exports["default"] = CheckoutPayment;


/***/ }),

/***/ 95181:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const react_i18next_1 = __webpack_require__(26828);
const routes_1 = __webpack_require__(74897);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const react_query_1 = __webpack_require__(88767);
const api_1 = __webpack_require__(72934);
const BasketProvider_1 = __webpack_require__(81400);
const LoaderProvider_1 = __webpack_require__(30150);
const useFormSubmit = () => {
    const history = (0, react_router_dom_1.useHistory)();
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_PAYMENT');
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { setBasket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { show, hide } = (0, react_1.useContext)(LoaderProvider_1.loaderContext);
    const { mutateAsync: mutateAddOrderSupabase, isLoading } = (0, react_query_1.useMutation)(api_1.addOrder);
    const { mutateAsync: mutateTriggerNewOrder } = (0, react_query_1.useMutation)(api_1.triggerNewOrder);
    const onSubmit = async (form) => {
        show();
        const order = {
            email: checkout.contactDetails2?.email ?? '',
            deliveryType: checkout.deliveryType2 ?? '',
            paymentType: form.paymentType ?? '',
            total: checkout.totalNew ?? 0,
            phone: checkout.contactDetails2?.phone ?? '',
            fullname: checkout.contactDetails2?.fullName ?? '',
            products: checkout.products2 || [],
            address: {
                street: checkout.contactDetails2?.street ?? '',
                streetNo: checkout.contactDetails2?.streetNo ?? '',
                adressCdn: checkout.contactDetails2?.addressCdn ?? '',
                postCode: checkout.contactDetails2?.postCode ?? '',
                city: checkout.contactDetails2?.city ?? ''
            },
            shipping: {
                street: checkout.shipping2?.street ?? '',
                streetNo: checkout.shipping2?.streetNo ?? '',
                adressCdn: checkout.shipping2?.addressCdn ?? '',
                postCode: checkout.shipping2?.postCode ?? '',
                city: checkout.shipping2?.city ?? ''
            }
        };
        const orderId = await mutateAddOrderSupabase(order);
        const locationState = {
            orderID: orderId
        };
        // mutateTriggerNewOrder({
        //   order,
        //   orderID: orderId
        // })
        setCheckout(CheckoutProvider_1.initState);
        setBasket([]);
        hide();
        history.push(routes_1.CHECKOUT_RESULT, locationState);
    };
    const initialValues = {
        paymentType: checkout.paymentType2 ?? ''
    };
    const schema = (0, yup_1.object)().shape({
        paymentType: (0, yup_1.string)().required(t('form.paymentType.validations.required'))
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
const react_i18next_1 = __webpack_require__(26828);
const BasketItem_1 = __importDefault(__webpack_require__(3405));
const BasketProvider_1 = __webpack_require__(81400);
const common_1 = __webpack_require__(73478);
const StepTitle_1 = __importDefault(__webpack_require__(50685));
const CheckoutProducts = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_PRODUCTS');
    const { basket, basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    const isBasketEmpty = !basketLength;
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(StepTitle_1.default, null, t('title')),
            react_1.default.createElement(components_1.Flexbox, { minHeight: "20rem", flexDirection: "column", marginTop: "2rem", alignItems: "center" },
                isBasketEmpty && (react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center", flexGrow: 1 },
                    react_1.default.createElement(components_1.Box, { as: "h5", color: "gray-10" }, t('emptyState')))),
                basket.map((product) => (react_1.default.createElement(react_1.Fragment, { key: product.id },
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
const react_i18next_1 = __webpack_require__(26828);
const react_router_dom_1 = __webpack_require__(77856);
const hooks_1 = __webpack_require__(92457);
const react_fontawesome_1 = __webpack_require__(67814);
const styled_components_1 = __webpack_require__(91288);
const common_1 = __webpack_require__(73478);
const CheckoutResult = () => {
    const { state } = (0, react_router_dom_1.useLocation)();
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_RESULT');
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    const history = (0, react_router_dom_1.useHistory)();
    if (!state?.orderID) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.HOME });
    }
    const alfa = (0, styled_components_1.useTheme)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(components_1.Tile, null,
                react_1.default.createElement(components_1.Flexbox, { marginTop: "3rem", justifyContent: "center" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: alfa.colors.green, size: "5x", icon: "check-circle" })),
                react_1.default.createElement(common_1.StepTitle, null, t('title')),
                react_1.default.createElement(components_1.Flexbox, { marginTop: "1rem", alignItems: "center", flexDirection: "column", justifyContent: "center" },
                    react_1.default.createElement(components_1.Box, { as: "p", marginBottom: "0" }, t('orderId')),
                    react_1.default.createElement("h3", null, state.orderID)),
                react_1.default.createElement(components_1.Flexbox, { textAlign: "center", justifyContent: "center", as: "p", marginBottom: "0" }, t('info')),
                react_1.default.createElement(components_1.Flexbox, { marginTop: "5rem", flexDirection: "row-reverse", justifyContent: "space-between" },
                    react_1.default.createElement(Button_1.default, { variant: "primary", onClick: () => history.push(routes_1.PRODUCTS) }, t('actions.backToShop')),
                    react_1.default.createElement(Button_1.default, { variant: "secondary", onClick: () => history.push(routes_1.HOME) }, t('actions.backToHome')))))));
};
exports["default"] = CheckoutResult;


/***/ }),

/***/ 14048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const formik_1 = __webpack_require__(94649);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const FieldWrapper_1 = __importDefault(__webpack_require__(65555));
const Row_1 = __importDefault(__webpack_require__(21342));
const Form = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_SHIPPING');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(FieldWrapper_1.default, { width: "75%" },
                react_1.default.createElement(formik_1.Field, { name: "street" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: getRequiredOrNot(t('form.street.label'), true), placeholder: t('form.street.placeholder') })))),
            react_1.default.createElement(FieldWrapper_1.default, { width: "25%" },
                react_1.default.createElement(formik_1.Field, { name: "streetNo", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: getRequiredOrNot(t('form.streetNr.label'), true), placeholder: t('form.streetNr.placeholder') }))))),
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "addressCdn", type: "text" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: getRequiredOrNot(t('form.addressCdn.label')), maxLength: 6, placeholder: t('form.addressCdn.placeholder') }))))),
        react_1.default.createElement(Row_1.default, null,
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "postCode" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: getRequiredOrNot(t('form.postCode.label'), true), placeholder: t('form.postCode.placeholder') })))),
            react_1.default.createElement(FieldWrapper_1.default, null,
                react_1.default.createElement(formik_1.Field, { name: "city" }, (props) => (react_1.default.createElement(components_1.Input, { ...props, label: getRequiredOrNot(t('form.city.label'), true), placeholder: t('form.city.placeholder') })))))));
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
const react_i18next_1 = __webpack_require__(26828);
const formik_1 = __webpack_require__(94649);
const components_1 = __webpack_require__(26789);
const CheckoutProvider_1 = __webpack_require__(50542);
const react_router_dom_1 = __webpack_require__(77856);
const routes_1 = __webpack_require__(74897);
const common_1 = __webpack_require__(73478);
const useForm_1 = __importDefault(__webpack_require__(63990));
const Form_1 = __importDefault(__webpack_require__(14048));
const CheckoutShipping = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_SHIPPING');
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { onSubmitForm, initialValues, schema } = (0, useForm_1.default)();
    if (!checkout.deliveryType2) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: routes_1.CHECKOUT_DELIVERY });
    }
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(common_1.StepTracker, null),
        react_1.default.createElement(common_1.Wrapper, null,
            react_1.default.createElement(common_1.StepTitle, null, t('title')),
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: onSubmitForm }, ({ handleSubmit }) => (react_1.default.createElement(formik_1.Form, { onSubmit: handleSubmit },
                react_1.default.createElement(Form_1.default, null),
                react_1.default.createElement(common_1.Actions, null)))))));
};
exports["default"] = CheckoutShipping;


/***/ }),

/***/ 63990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_router_dom_1 = __webpack_require__(77856);
const yup_1 = __webpack_require__(87561);
const routes_1 = __webpack_require__(74897);
const react_i18next_1 = __webpack_require__(26828);
const react_1 = __webpack_require__(67294);
const CheckoutProvider_1 = __webpack_require__(50542);
const useForm = () => {
    const { t } = (0, react_i18next_1.useTranslation)('CHECKOUT_SHIPPING');
    const history = (0, react_router_dom_1.useHistory)();
    const { checkout, setCheckout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const onSubmitForm = (form) => {
        setCheckout((prev) => ({
            ...prev,
            shipping2: form
        }));
        history.push(routes_1.CHECKOUT_PAYMENT);
    };
    const initialValues = {
        street: checkout.shipping2?.street ?? '',
        streetNo: checkout.shipping2?.streetNo ?? '',
        addressCdn: checkout.shipping2?.addressCdn ?? '',
        postCode: checkout.shipping2?.postCode ?? '',
        city: checkout.shipping2?.city ?? ''
    };
    const schema = (0, yup_1.object)().shape({
        street: (0, yup_1.string)().required(t('form.street.validations.required')),
        streetNo: (0, yup_1.string)().required(t('form.streetNr.validations.required')),
        addressCdn: (0, yup_1.string)(),
        postCode: (0, yup_1.string)()
            .trim()
            .matches(/^(\d{2})-(\d{3})$/, t('form.postCode.validations.matches'))
            .required(t('form.postCode.validations.required')),
        city: (0, yup_1.string)().required(t('form.city.validations.required'))
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
const Box_1 = __importDefault(__webpack_require__(84962));
const Flexbox_1 = __importDefault(__webpack_require__(16827));
const react_router_dom_1 = __webpack_require__(77856);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const BasketProvider_1 = __webpack_require__(81400);
const routes_1 = __webpack_require__(74897);
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const StepTracker_1 = __webpack_require__(78812);
const Actions = ({ primaryDisabled }) => {
    const { t } = (0, react_i18next_1.useTranslation)('COMMON');
    const history = (0, react_router_dom_1.useHistory)();
    const current = (0, StepTracker_1.useCheckoutStep)();
    const { basketLength } = (0, react_1.useContext)(BasketProvider_1.basketContext);
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
        }
    };
    return (react_1.default.createElement(Flexbox_1.default, { marginTop: "3rem", alignItems: "center", justifyContent: "space-between" },
        react_1.default.createElement(components_1.Button, { variant: "secondary", onClick: onClickPrevious, type: "button" },
            isFirstPage && (react_1.default.createElement(Box_1.default, { marginRight: "m-size" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "store-alt" }))),
            t(isFirstPage ? 'checkoutActions.backToShop' : 'checkoutActions.back')),
        react_1.default.createElement(components_1.Button, { disabled: isBasketEmpty || primaryDisabled, onClick: onClickNext, type: isFirstPage ? 'button' : 'submit' },
            react_1.default.createElement(Box_1.default, { marginRight: "s-size" }, t(current === 5
                ? 'checkoutActions.createOrder'
                : 'checkoutActions.next')),
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "arrow-right" }))));
};
exports["default"] = Actions;


/***/ }),

/***/ 65555:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const FieldWrapper = (0, styled_components_1.default)(components_1.Box) `
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
const components_1 = __webpack_require__(26789);
const routes_1 = __webpack_require__(74897);
const utils_1 = __webpack_require__(49502);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const StepTracker = () => {
    const { t } = (0, react_i18next_1.useTranslation)('COMMON');
    const current = (0, exports.useCheckoutStep)();
    return (react_1.default.createElement(components_1.Flexbox, { justifyContent: "center", marginBottom: "3rem" },
        react_1.default.createElement(Wrapper, null, [1, 2, 3, 4, 5].map((step) => {
            if (step === 4) {
                return null;
            }
            return (react_1.default.createElement(components_1.Flexbox, { key: step, justifyContent: "center" },
                react_1.default.createElement(components_1.Flexbox, { width: "10rem", justifyContent: "center", alignItems: "center", flexDirection: "column", zIndex: 1 },
                    react_1.default.createElement(StepIcon, { ...getProps(current, step) }, step === 5 ? 4 : step),
                    react_1.default.createElement(components_1.Box, { as: "h5", margin: "0", marginTop: "s-size", textAlign: "center" }, t(`checkoutSteps.${step}`)))));
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
    background: ${(props) => `${(0, utils_1.changeColorAlpha)(props.theme.colors['border-color'], 0.6)}`};
  }
`;
const getProps = (current, step) => {
    if (current === step || (current === 4 && step === 3)) {
        return { selected: true };
    }
    if (step < current) {
        return { done: true };
    }
    return {};
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
  background: ${(props) => {
    if (props.done) {
        return props.theme.colors['green'];
    }
    else if (props.selected) {
        return props.theme.colors['gray-10'];
    }
    else {
        return props.theme.colors['background-color'];
    }
}};
  border-radius: 50%;
  width: 3px;
  height: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    if (props.done || props.selected) {
        return props.theme.colors['white'];
    }
    else {
        return props.theme.colors['black'];
    }
}};
  border: 1px solid;
  border-color: ${(props) => !props.done && !props.selected && props.theme.colors['gray-10']};
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
const react_i18next_1 = __webpack_require__(26828);
const CheckoutProvider_1 = __webpack_require__(50542);
const lodash_add_1 = __importDefault(__webpack_require__(24427));
const Total = ({ customProducts, customDelivery }) => {
    const { t } = (0, react_i18next_1.useTranslation)('COMMON');
    const { checkout } = (0, react_1.useContext)(CheckoutProvider_1.checkoutContext);
    const { totalNew } = checkout;
    const products = customProducts || totalNew;
    const delivery = customDelivery || 0;
    const sum = (0, lodash_add_1.default)(products, delivery);
    return (react_1.default.createElement(components_1.Flexbox, { marginTop: "2rem", justifyContent: "flex-end", alignItems: "center" },
        react_1.default.createElement("table", null,
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", null, t('checkoutTotal.products'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(components_1.Box, { as: "h4", margin: "0", marginLeft: "m-size" }, (0, utils_1.displayMoney)(products)))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", null, t('checkoutTotal.delivery'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(components_1.Box, { as: "h4", margin: "0", marginLeft: "m-size" }, (0, utils_1.displayMoney)(delivery)))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("span", null, t('checkoutTotal.sum'))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(components_1.Box, { as: "h3", margin: "0", marginLeft: "m-size" }, (0, utils_1.displayMoney)(sum))))))));
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
exports.PrivacyPolicy = exports.TermsAndConditions = exports.HowToCreateOrder = exports.DeliveryAndPayments = exports.Contact = exports.Home = exports.AdminOrders = exports.CheckoutResult = exports.CheckoutShipping = exports.CheckoutPayment = exports.CheckoutDelivery = exports.CheckoutDetails = exports.CheckoutProducts = exports.ViewProduct = exports.PageNotFound = exports.App = exports.Products = void 0;
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
var DeliveryAndPayments_1 = __webpack_require__(1698);
Object.defineProperty(exports, "DeliveryAndPayments", ({ enumerable: true, get: function () { return __importDefault(DeliveryAndPayments_1).default; } }));
var HowToCreateOrder_1 = __webpack_require__(64103);
Object.defineProperty(exports, "HowToCreateOrder", ({ enumerable: true, get: function () { return __importDefault(HowToCreateOrder_1).default; } }));
var TermsAndConditions_1 = __webpack_require__(3036);
Object.defineProperty(exports, "TermsAndConditions", ({ enumerable: true, get: function () { return __importDefault(TermsAndConditions_1).default; } }));
var PrivacyPolicy_1 = __webpack_require__(51578);
Object.defineProperty(exports, "PrivacyPolicy", ({ enumerable: true, get: function () { return __importDefault(PrivacyPolicy_1).default; } }));


/***/ }),

/***/ 8995:
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
const CheckoutProvider = ({ children }) => {
    const [checkout, setCheckout] = (0, react_1.useState)(exports.initState);
    console.log(checkout);
    return (react_2.default.createElement(exports.checkoutContext.Provider, { value: { checkout, setCheckout } }, children));
};
exports.initState = {
    totalNew: 0,
    products2: null,
    contactDetails2: null,
    deliveryType2: null,
    shipping2: null,
    paymentType2: null
};
exports.checkoutContext = (0, react_1.createContext)({
    checkout: exports.initState,
    setCheckout: () => undefined
});
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
const utils_1 = __webpack_require__(49502);
const components_1 = __webpack_require__(26789);
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
            react_2.default.createElement(components_1.Spinner, null))),
        children));
};
const Loader = styled_components_1.default.div `
  background-color: ${(props) => `${(0, utils_1.changeColorAlpha)(props.theme.colors.black, 0.25)}`};
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
exports.AuthProvider = exports.LoaderProvider = exports.RemoteConfigProvider = exports.BasketProvider = exports.CheckoutProvider = exports.BasketToggleProvider = void 0;
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
var AuthProvider_1 = __webpack_require__(8995);
Object.defineProperty(exports, "AuthProvider", ({ enumerable: true, get: function () { return __importDefault(AuthProvider_1).default; } }));


/***/ }),

/***/ 81804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const styled_components_1 = __webpack_require__(91288);
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
* {
  box-sizing: border-box;
}

html {
  font-size: 60.5%;
}

body {
  min-height: 100vh;
  font-family: 'Roboto';
  font-size: ${(props) => props.theme.fontSizes.baseFontSize};
  background: ${(props) => props.theme.colors['background-color']};
  font-weight: bold;
  overflow-x: hidden;
  margin: 0;
  height: 100%;
}

p {
  color: ${(props) => props.theme.colors['paragraph-color']};
  line-height: ${(props) => props.theme.space['line-height']};
}

strong {
  font-weight: bold;
}

span {
  color: ${(props) => props.theme.colors['paragraph-color']};
  font-size: ${(props) => props.theme.fontSizes['font-small']};
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: ${(props) => props.theme.colors['heading-color']};
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
`;
exports["default"] = GlobalStyle;


/***/ }),

/***/ 6786:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const colors = {
    'nav-bg': '#f8f8f8',
    'nav-bg-scrolled': '#fff',
    'background-color': '#f9f9f9',
    'background-color-01': '#f2f2f2',
    'paragraph-color': '#4a4a4a',
    'heading-color': '#1a1a1a',
    'border-color': 'rgb(225, 225, 225)',
    'border-color-focus': '#c5c5c5',
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    'off-black': '#303030',
    'off-white': '#f0f0f0',
    red: 'rgba(247, 45, 45, 0.986)',
    green: 'rgb(59, 150, 32)',
    yellow: 'rgb(228, 165, 31)',
    'gray-01': '#3a3a3a',
    'gray-10': '#818181',
    'gray-20': '#b6b6b6',
    'button-color': '#101010',
    'button-hover': 'lighten(button-color, 10%)',
    'color-success': '#000',
    'label-color': '#696868'
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
    'xxs-size': '0.5rem',
    'xs-size': '1rem',
    's-size': '1.2rem',
    'm-size': '1.6rem',
    'l-size': '3.2rem',
    'xl-size': '4.8rem',
    'xxl-size': '5.6rem',
    'xxxl-size': '10rem',
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

/***/ 81091:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const supabase_js_1 = __webpack_require__(66421);
const url = 'https://trntidugdqqpybdgwjux.supabase.co';
const publicAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDU2Nzc4MSwiZXhwIjoxOTQ2MTQzNzgxfQ.CNhmuelcBOCRu6iFnKbblzB3hKxRzvNGbkcizVB8k2M';
const supabase = (0, supabase_js_1.createClient)(url, publicAnonKey);
exports["default"] = supabase;


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

/***/ 59961:
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

/***/ 74661:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayDate = void 0;
const format_1 = __importDefault(__webpack_require__(95639));
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
exports.changeColorAlpha = exports.getRequiredOrNot = exports.getDateFromTimestamp = exports.displayDate = exports.displayMoney = exports.calculateTotal = exports.getCollection = exports.parseApiResponse = void 0;
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
var changeColorAlpha_1 = __webpack_require__(59961);
Object.defineProperty(exports, "changeColorAlpha", ({ enumerable: true, get: function () { return __importDefault(changeColorAlpha_1).default; } }));


/***/ }),

/***/ 71894:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function parseApiResponse(schema, response) {
    if (response.exists()) {
        const data = response.data();
        const { id } = response;
        const obj = {
            ...data,
            id
        };
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
/******/ 	__webpack_require__.O(undefined, [736], () => (__webpack_require__(26981)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(17927)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.12d4192c112f5896cbee.js.map