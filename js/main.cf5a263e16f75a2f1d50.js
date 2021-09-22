/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        .select('id, label, price, time, requires_address, isAvailable, frontend_icon_name');
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
      ),
      mold: molds (
        status,
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
exports.getMolds = exports.updateOrderStatus = exports.getOrders = void 0;
var getOrders_1 = __webpack_require__(80433);
Object.defineProperty(exports, "getOrders", ({ enumerable: true, get: function () { return __importDefault(getOrders_1).default; } }));
var updateOrderStatus_1 = __webpack_require__(80141);
Object.defineProperty(exports, "updateOrderStatus", ({ enumerable: true, get: function () { return __importDefault(updateOrderStatus_1).default; } }));
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
// TRIGGER NEW ORDER
__exportStar(__webpack_require__(47700), exports);


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
        .select('id, label, is_available');
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTriggerNewOrder = void 0;
const react_query_1 = __webpack_require__(88767);
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
const useTriggerNewOrder = () => {
    const { mutateAsync } = (0, react_query_1.useMutation)(triggerNewOrder);
    return (payload) => mutateAsync(payload);
};
exports.useTriggerNewOrder = useTriggerNewOrder;
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
exports.PAYMENT_METHODS = void 0;
exports.PAYMENT_METHODS = ['TRANSFER'];


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
            STANDARD_TRANSFER: {
                title: 'Przelew tradycyjny',
                subtitle: 'W tym momencie oferujemy tylko ten sposób płatności'
            }
        },
        customerTypes: {
            INDIVIDUAL: 'Klient indywidualny',
            COMPANY: 'Firma'
        },
        deliveryTypes: {
            FREE_DELIVERY: 'Bezpłatna dostawa',
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
            title: 'Twoje miejsce w Twoim punkcie',
            description: 'Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.',
            buttonLabel: 'Produkty'
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
        avilability: {
            DONE: 'Produkt łatwo dostępny',
            IN_PROGRESS: 'Produkt średnio dostępny',
            NULL: 'Minimalny czas realizacji to 7 dni'
        },
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
                email: 'kontakt@braty.co'
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
                    title: 'Czas produkcji',
                    description: 'Zależy głównie od liczby zamówionych pudełek oraz czy zamawiasz u nas pierwszy raz.'
                },
                DELIVERY: {
                    title: 'Czas dostawy',
                    description: 'Wysyłka zazwyczaj następuje następnego dnia roboczego.'
                },
                TOTAL: {
                    description: 'Całkowity czas realizacji zależy od zamówienia. Zadzwoń na +48 792 531 179 i upewnj się, że zamówienie będzie na czas.'
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
        react_1.default.createElement(components_1.QueryLoader, { query: productQuery }, (product) => {
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
exports.BasketItem = void 0;
const react_1 = __importStar(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const BasketProvider_1 = __webpack_require__(81400);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const BasketToggleProvider_1 = __webpack_require__(38823);
const react_i18next_1 = __webpack_require__(26828);
const Header_1 = __importDefault(__webpack_require__(8558));
const Checkout_1 = __importDefault(__webpack_require__(83601));
const BasketItem_1 = __importDefault(__webpack_require__(3405));
exports.BasketItem = BasketItem_1.default;
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
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const Features = () => {
    const { t: commonT } = (0, react_i18next_1.useTranslation)('COMMON');
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.SectionHead, { marginTop: "xxl-size", title: commonT('features.title') }),
        react_1.default.createElement(components_1.Grid, null, features.map((feature) => (react_1.default.createElement(components_1.FeatureItem, { key: feature.key, title: commonT(`features.items.${feature.key}`) },
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
            react_1.default.createElement(components_1.Text, { marginTop: "l-size", type: "caption" }, new Date().getFullYear()))));
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
        react_1.default.createElement(StyledLink, { isActive: !!(0, react_router_dom_1.matchPath)(pathname, { path: link.to, exact: link.exact }), ...link },
            react_1.default.createElement(components_1.Text, { fontWeight: "bold", type: "subtitle-2" }, t(label))))))));
};
const StyledLink = (0, styled_components_1.default)(components_1.Link) `
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
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

/***/ 97598:
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
    const viewProductPath = (0, react_router_dom_1.generatePath)(routes_1.VIEW_PRODUCT, {
        id: product.id
    });
    return (react_1.default.createElement(Container, { to: viewProductPath, as: react_router_dom_1.Link, "max-height": "30rem" },
        react_1.default.createElement(ImageWrapper, null,
            react_1.default.createElement(components_1.ImageLoader, { alt: "", src: product.gallery[0] })),
        react_1.default.createElement(components_1.Flexbox, { backgroundColor: "background-color", flexDirection: "column", padding: "m-size", width: "100%" },
            react_1.default.createElement(components_1.Text, { fontWeight: "bold", type: "subtitle-1" }, product.name),
            react_1.default.createElement(components_1.Text, { type: "body-2" }, (0, utils_1.displayMoney)(product.price)))));
};
const Container = (0, styled_components_1.default)(components_1.Tile) `
  color: unset;
  cursor: pointer;
  justify-content: space-between;
  text-decoration: none;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors['border-color']};

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
  }
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
exports.ReadPrivacyPolicy = exports.ReadTermsAndConditions = exports.Features = exports.ProductsGrid = exports.Footer = exports.Basket = exports.Navigation = exports.Preloader = void 0;
var Preloader_1 = __webpack_require__(97598);
Object.defineProperty(exports, "Preloader", ({ enumerable: true, get: function () { return __importDefault(Preloader_1).default; } }));
var Navigation_1 = __webpack_require__(8771);
Object.defineProperty(exports, "Navigation", ({ enumerable: true, get: function () { return __importDefault(Navigation_1).default; } }));
var Basket_1 = __webpack_require__(18287);
Object.defineProperty(exports, "Basket", ({ enumerable: true, get: function () { return __importDefault(Basket_1).default; } }));
__exportStar(__webpack_require__(18287), exports);
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

/***/ 79139:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const BackButton = ({ to, label, ...props }) => (react_1.default.createElement(components_1.Box, { paddingY: "xs-size", ...props },
    react_1.default.createElement(components_1.Link, { icon: "arrow-left", to: to }, label)));
exports["default"] = BackButton;


/***/ }),

/***/ 25706:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Badge = ({ count, children, stanalone = false }) => (react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center", position: "relative" },
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

/***/ 77308:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const components_1 = __webpack_require__(26789);
const Box_1 = __importDefault(__webpack_require__(84962));
const Banner = ({ small, description, title, children, background, horizonal, ...props }) => (react_1.default.createElement(components_1.Flexbox, { ...props, position: "relative", height: small ? '20rem' : '40rem', backgroundColor: "background-color-01", justifyContent: "center", alignItems: "center" },
    react_1.default.createElement(components_1.Flexbox, { paddingX: horizonal ? 'xxl-size' : 0, width: horizonal ? '100%' : '70rem', zIndex: 1, flexDirection: horizonal ? 'row' : 'column', justifyContent: horizonal ? 'space-between' : 'center', alignItems: "center" },
        title,
        description && (react_1.default.createElement(components_1.Text, { textAlign: "center", marginTop: "m-size", marginBottom: "l-size", type: "body-2" }, description)),
        children),
    react_1.default.createElement(Box_1.default, { position: "absolute", left: "0", top: "0", width: "100%", height: "100%" }, background)));
exports["default"] = Banner;


/***/ }),

/***/ 30624:
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
const YourPlaceInYourPoint = () => (react_1.default.createElement(StyledSvg, { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", width: "100%", height: "100%", version: "1.1", shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd", viewBox: "0 0 10160 3386.7", xmlnsXlink: "http://www.w3.org/1999/xlink" },
    react_1.default.createElement("g", { id: "Warstwa_x0020_1" },
        react_1.default.createElement("metadata", { id: "CorelCorpID_0Corel-Layer" }),
        react_1.default.createElement("rect", { fill: "#F2F2F2", x: "-0.04", y: "0.02", width: "10160", height: "3386.67" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M7583.38 2428.71l16.84 0 0 -51.22 180.45 0 0 51.22 16.84 0c0,16.31 18.91,29.66 42,29.66l0 552.02 -298.13 0 0 -552.02c23.09,0 42,-13.35 42,-29.66z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M7583.38 2423.71l11.84 0 0 -51.22 190.45 0 0 51.22 16.84 0 0 5c0,6.43 3.93,12.43 10.21,16.87 6.79,4.79 16.29,7.79 26.79,7.79l5 0 0 562.02 -308.13 0 0 -562.02 5 0c10.5,0 20,-3 26.79,-7.79 6.28,-4.44 10.21,-10.44 10.21,-16.87l0 -5 5 0zm16.84 10l-12.32 0c-1.54,7.84 -6.62,14.82 -13.99,20.03 -7.27,5.14 -16.9,8.6 -27.53,9.43l0 542.22 288.13 0 0 -542.22c-10.63,-0.83 -20.26,-4.29 -27.53,-9.43 -7.37,-5.21 -12.45,-12.19 -13.99,-20.03l-17.32 0 0 -51.22 -170.45 0 0 51.22 -5 0z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "9107.31,1576.62 9280.16,1576.62 9280.16,1833.56 9107.31,1833.56 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9107.31 1571.62l177.85 0 0 266.94 -182.85 0 0 -266.94 5 0zm167.85 10l-162.85 0 0 246.94 162.85 0 0 -246.94z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "8818.05,2478.24 8986.63,2478.24 8986.63,2858.19 8929.01,2858.19 8929.01,3013.91 8818.05,3013.91 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M8818.05 2473.24l173.58 0 0 389.95 -57.62 0 0 155.72 -120.96 0 0 -545.67 5 0zm163.58 10l-158.58 0 0 525.67 100.96 0 0 -155.72 57.62 0 0 -369.95z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "9400.84,2478.24 9581.07,2478.24 9581.07,3013.91 9458.45,3013.91 9458.45,2858.19 9400.84,2858.19 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9400.84 2473.24l185.23 0 0 545.67 -132.62 0 0 -155.72 -57.61 0 0 -389.95 5 0zm175.23 10l-170.23 0 0 369.95 57.61 0 0 155.72 112.62 0 0 -525.67z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M8402.68 3013.91l526.33 0 0 361.26 -526.33 0 0 -361.26zm1055.77 0l526.33 0 0 361.26 -526.33 0 0 -361.26z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M8402.68 3008.91l531.33 0 0 371.26 -536.33 0 0 -371.26 5 0zm521.33 10l-516.33 0 0 351.26 516.33 0 0 -351.26zm534.44 -10l531.33 0 0 371.26 -536.33 0 0 -371.26 5 0zm521.33 10l-516.33 0 0 351.26 516.33 0 0 -351.26z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "8986.63,1833.56 9400.84,1833.56 9400.84,2858.19 8986.63,2858.19 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M8986.63 1828.56l419.21 0 0 1034.63 -424.21 0 0 -1034.63 5 0zm409.21 10l-404.21 0 0 1014.63 404.21 0 0 -1014.63z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "9140.01,1459.8 9247.46,1459.8 9247.46,1571.92 9140.01,1571.92 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9140.01 1454.8l112.45 0 0 122.12 -117.45 0 0 -122.12 5 0zm102.45 10l-97.45 0 0 102.12 97.45 0 0 -102.12z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "9132.22,1384.09 9255.24,1384.09 9255.24,1444.82 9132.22,1444.82 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9132.22 1379.09l128.02 0 0 70.73 -133.02 0 0 -70.73 5 0zm118.02 10l-113.02 0 0 50.73 113.02 0 0 -50.73z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9176.21 1324.37l35.04 0c0,24.4 19.99,44.38 44.38,44.38l0 0 -123.8 0 0 0c24.4,0 44.38,-19.98 44.38,-44.38z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9176.21 1319.37l40.04 0 0 5c0,10.81 4.45,20.67 11.57,27.81 7.14,7.12 17,11.57 27.81,11.57l0 10 -123.8 0 0 -10c10.81,0 20.67,-4.45 27.8,-11.58 7.14,-7.14 11.58,-16.99 11.58,-27.8l0 -5 5 0zm30.29 10l-25.54 0c-1.18,11.6 -6.42,22.05 -14.25,29.88 -1.61,1.61 -3.34,3.12 -5.17,4.5l64.4 0c-1.82,-1.38 -3.55,-2.89 -5.17,-4.5 -7.84,-7.86 -13.08,-18.29 -14.27,-29.88z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 1280.77c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 1275.77c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.07 1473.09c22.14,0 40.1,17.95 40.1,40.1 0,22.14 -17.96,40.09 -40.1,40.09 -22.14,0 -40.1,-17.95 -40.1,-40.09 0,-22.15 17.96,-40.1 40.1,-40.1z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.07 1468.09c12.43,0 23.71,5.05 31.87,13.21 8.18,8.18 13.23,19.46 13.23,31.89 0,12.45 -5.05,23.73 -13.21,31.89 -8.14,8.14 -19.44,13.2 -31.89,13.2 -12.45,0 -23.75,-5.06 -31.89,-13.2 -8.16,-8.16 -13.21,-19.44 -13.21,-31.89 0,-12.43 5.05,-23.71 13.21,-31.87 8.18,-8.18 19.46,-13.23 31.89,-13.23zm24.82 20.28c-6.34,-6.35 -15.13,-10.28 -24.82,-10.28 -9.69,0 -18.48,3.93 -24.81,10.27 -6.36,6.35 -10.29,15.14 -10.29,24.83 0,9.67 3.94,18.46 10.29,24.81 6.34,6.34 15.14,10.28 24.81,10.28 9.67,0 18.47,-3.94 24.81,-10.28 6.35,-6.35 10.29,-15.14 10.29,-24.81 0,-9.69 -3.93,-18.48 -10.28,-24.82z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9111.59 1519.47c3.87,0 7.01,11.33 7.01,25.3 0,13.98 -3.14,25.31 -7.01,25.31 -3.87,0 -7,-11.33 -7,-25.31 0,-13.97 3.13,-25.3 7,-25.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9111.59 1515.66c3.86,0 6.88,3.91 8.62,10.21 1.36,4.9 2.2,11.61 2.2,18.9 0,7.3 -0.84,14 -2.2,18.91 -1.74,6.3 -4.76,10.21 -8.62,10.21 -3.84,0 -6.87,-3.91 -8.61,-10.21 -1.36,-4.91 -2.2,-11.61 -2.2,-18.91 0,-7.3 0.84,-14 2.2,-18.9 1.74,-6.3 4.77,-10.21 8.61,-10.21zm1.3 12.23l-1.3 -4.61 -1.29 4.61c-1.17,4.24 -1.9,10.21 -1.9,16.88 0,6.67 0.73,12.65 1.9,16.89l1.29 4.61 1.3 -4.61c1.17,-4.24 1.9,-10.22 1.9,-16.89 0,-6.66 -0.73,-12.64 -1.9,-16.88z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9273.54 1520.25c3.87,0 7.01,11.33 7.01,25.3 0,13.97 -3.14,25.3 -7.01,25.3 -3.86,0 -7,-11.33 -7,-25.3 0,-13.97 3.14,-25.3 7,-25.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9273.54 1516.44c3.86,0 6.88,3.91 8.62,10.21 1.36,4.9 2.2,11.61 2.2,18.9 0,7.29 -0.84,13.99 -2.2,18.9 -1.74,6.3 -4.76,10.21 -8.62,10.21 -3.85,0 -6.87,-3.91 -8.61,-10.22 -1.36,-4.9 -2.2,-11.6 -2.2,-18.89 0,-7.29 0.84,-13.99 2.2,-18.89 1.74,-6.31 4.76,-10.22 8.61,-10.22zm1.3 12.23l-1.3 -4.61 -1.29 4.62c-1.17,4.22 -1.9,10.21 -1.9,16.87 0,6.66 0.73,12.65 1.9,16.87l1.29 4.62 1.3 -4.61c1.17,-4.24 1.9,-10.22 1.9,-16.88 0,-6.66 -0.73,-12.64 -1.9,-16.88z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "8929.01,2858.19 9458.45,2858.19 9458.45,3375.17 8929.01,3375.17 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M8929.01 2853.19l534.44 0 0 526.98 -539.44 0 0 -526.98 5 0zm524.44 10l-519.44 0 0 506.98 519.44 0 0 -506.98z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M8999.82 1701.02c7.05,0 12.76,26.18 12.76,58.49 0,32.31 -5.71,58.49 -12.76,58.49 -7.04,0 -12.75,-26.18 -12.75,-58.49 0,-32.31 5.71,-58.49 12.75,-58.49z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M8999.82 1697.21c5.56,0 10.03,7.7 12.74,20.14 2.36,10.83 3.83,25.75 3.83,42.16 0,16.41 -1.47,31.33 -3.83,42.16 -2.71,12.44 -7.18,20.14 -12.74,20.14 -5.56,0 -10.03,-7.71 -12.74,-20.14 -2.35,-10.83 -3.82,-25.76 -3.82,-42.16 0,-16.4 1.47,-31.33 3.82,-42.16 2.71,-12.43 7.18,-20.14 12.74,-20.14zm5.3 21.74c-1.9,-8.72 -3.82,-14.12 -5.3,-14.12 -1.48,0 -3.4,5.41 -5.3,14.12 -2.24,10.32 -3.64,24.67 -3.64,40.56 0,15.89 1.4,30.24 3.64,40.56 1.9,8.71 3.82,14.12 5.3,14.12 1.48,0 3.4,-5.4 5.3,-14.12 2.25,-10.31 3.65,-24.67 3.65,-40.56 0,-15.9 -1.4,-30.25 -3.65,-40.56z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9063.27 1701.02c7.05,0 12.76,26.18 12.76,58.49 0,32.31 -5.71,58.49 -12.76,58.49 -7.05,0 -12.76,-26.18 -12.76,-58.49 0,-32.31 5.71,-58.49 12.76,-58.49z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9063.27 1697.21c5.56,0 10.03,7.7 12.74,20.14 2.36,10.83 3.83,25.75 3.83,42.16 0,16.41 -1.47,31.33 -3.83,42.16 -2.71,12.44 -7.18,20.14 -12.74,20.14 -5.55,0 -10.03,-7.7 -12.74,-20.14 -2.36,-10.83 -3.83,-25.75 -3.83,-42.16 0,-16.41 1.47,-31.33 3.83,-42.16 2.71,-12.44 7.19,-20.14 12.74,-20.14zm5.3 21.74c-1.9,-8.72 -3.82,-14.12 -5.3,-14.12 -1.47,0 -3.4,5.4 -5.3,14.12 -2.25,10.31 -3.65,24.66 -3.65,40.56 0,15.89 1.4,30.25 3.65,40.56 1.9,8.72 3.83,14.12 5.3,14.12 1.48,0 3.4,-5.4 5.3,-14.12 2.25,-10.31 3.65,-24.67 3.65,-40.56 0,-15.9 -1.4,-30.25 -3.65,-40.56z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9325.28 1701.02c7.05,0 12.76,26.18 12.76,58.49 0,32.31 -5.71,58.49 -12.76,58.49 -7.05,0 -12.76,-26.18 -12.76,-58.49 0,-32.31 5.71,-58.49 12.76,-58.49z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9325.28 1697.21c5.56,0 10.03,7.7 12.74,20.14 2.36,10.83 3.83,25.75 3.83,42.16 0,16.41 -1.47,31.33 -3.83,42.16 -2.71,12.44 -7.18,20.14 -12.74,20.14 -5.55,0 -10.03,-7.7 -12.74,-20.14 -2.36,-10.83 -3.83,-25.75 -3.83,-42.16 0,-16.41 1.47,-31.33 3.83,-42.16 2.71,-12.44 7.19,-20.14 12.74,-20.14zm5.3 21.74c-1.9,-8.72 -3.82,-14.12 -5.3,-14.12 -1.47,0 -3.4,5.4 -5.3,14.12 -2.25,10.31 -3.65,24.66 -3.65,40.56 0,15.89 1.4,30.25 3.65,40.56 1.9,8.72 3.83,14.12 5.3,14.12 1.48,0 3.4,-5.4 5.3,-14.12 2.25,-10.31 3.65,-24.67 3.65,-40.56 0,-15.9 -1.4,-30.25 -3.65,-40.56z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9381.63 1701.02c7.05,0 12.76,26.18 12.76,58.49 0,32.31 -5.71,58.49 -12.76,58.49 -7.05,0 -12.76,-26.18 -12.76,-58.49 0,-32.31 5.71,-58.49 12.76,-58.49z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9381.63 1697.21c5.56,0 10.03,7.7 12.74,20.14 2.36,10.83 3.83,25.75 3.83,42.16 0,16.41 -1.47,31.33 -3.83,42.16 -2.71,12.44 -7.18,20.14 -12.74,20.14 -5.55,0 -10.03,-7.7 -12.74,-20.14 -2.36,-10.83 -3.83,-25.75 -3.83,-42.16 0,-16.41 1.47,-31.33 3.83,-42.16 2.71,-12.44 7.19,-20.14 12.74,-20.14zm5.3 21.74c-1.9,-8.72 -3.82,-14.12 -5.3,-14.12 -1.47,0 -3.4,5.4 -5.3,14.12 -2.25,10.31 -3.65,24.66 -3.65,40.56 0,15.89 1.4,30.25 3.65,40.56 1.9,8.72 3.83,14.12 5.3,14.12 1.48,0 3.4,-5.4 5.3,-14.12 2.25,-10.31 3.65,-24.67 3.65,-40.56 0,-15.9 -1.4,-30.25 -3.65,-40.56z" }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9326.19 1889.91l2.47 371.75 -2.47 -371.75zm2.89 431.05l1.22 183.9 -1.22 -183.9zm-182.46 -431.05l2.48 371.75 -2.48 -371.75zm2.87 431.05l3.07 458.64 -3.07 -458.64zm92.16 -431.05l0.38 57.43 -0.38 -57.43zm0.77 116.73l1.7 255.02 -1.7 -255.02zm2.1 314.32l3.07 458.64 -3.07 -458.64zm86.17 243.2l1.43 215.44 -1.43 -215.44zm-265.76 -674.25l0.38 57.43 -0.38 -57.43zm0.77 116.73l1.71 255.02 -1.71 -255.02zm2.1 314.32l3.07 458.64 -3.07 -458.64z" })),
        react_1.default.createElement("path", { id: "windows", fill: "#FFED00", fillRule: "nonzero", d: "M9336.15 1889.87l2.47 371.75 -19.92 0.08 -2.47 -371.75 19.92 -0.08zm2.89 431.05l1.22 183.9 -19.92 0.08 -1.22 -183.9 19.92 -0.08zm-182.46 -431.05l2.48 371.75 -19.92 0.08 -2.48 -371.75 19.92 -0.08zm2.87 431.05l3.07 458.64 -19.92 0.08 -3.07 -458.64 19.92 -0.08zm92.16 -431.05l0.38 57.43 -19.92 0.08 -0.38 -57.43 19.92 -0.08zm0.77 116.73l1.7 255.02 -19.92 0.08 -1.7 -255.02 19.92 -0.08zm2.1 314.32l3.07 458.64 -19.92 0.08 -3.07 -458.64 19.92 -0.08zm86.17 243.2l1.43 215.44 -19.92 0.08 -1.43 -215.44 19.92 -0.08zm-265.76 -674.25l0.38 57.43 -19.92 0.08 -0.38 -57.43 19.92 -0.08zm0.77 116.73l1.71 255.02 -19.92 0.08 -1.71 -255.02 19.92 -0.08zm2.1 314.32l3.07 458.64 -19.92 0.08 -3.07 -458.64 19.92 -0.08z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "8905.94,2391.77 8925.21,2415.94 8944.47,2440.12 8905.94,2440.12 8867.41,2440.12 8886.67,2415.94 " }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M8908.92 2389.4l43.45 54.53 -92.87 0 46.44 -58.27 2.98 3.74zm13.31 28.91l-16.29 -20.43 -30.63 38.43 61.26 0 -14.34 -18z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "9499.88,2391.77 9519.15,2415.94 9538.41,2440.12 9499.88,2440.12 9461.35,2440.12 9480.61,2415.94 " }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M9502.86 2389.4l43.45 54.53 -92.87 0 46.44 -58.27 2.98 3.74zm13.31 28.91l-16.29 -20.43 -30.63 38.43 61.26 0 -14.34 -18z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M8174.47 2428.71l214.13 0c0,23.1 18.9,42 42,42l0 539.68 -298.13 0 0 -539.68c23.1,0 42,-18.9 42,-42z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M8174.47 2423.71l219.13 0 0 5c0,10.16 4.18,19.42 10.88,26.12 6.69,6.72 15.95,10.88 26.12,10.88l5 0 0 549.68 -308.13 0 0 -549.68 5 0c10.17,0 19.43,-4.16 26.12,-10.86 6.72,-6.71 10.88,-15.97 10.88,-26.14l0 -5 5 0zm209.4 10l-204.67 0c-1.17,10.93 -6.13,20.78 -13.53,28.18 -7.42,7.42 -17.27,12.38 -28.2,13.55l0 529.95 288.13 0 0 -529.95c-10.93,-1.17 -20.78,-6.13 -28.19,-13.54 -7.4,-7.38 -12.37,-17.24 -13.54,-28.19z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M7890.2 2428.71l22.45 0 0 -29.48c12.29,0 22.36,-6.09 22.36,-13.54l101.6 0c0,7.45 10.06,13.54 22.35,13.54l0 29.48 22.44 0c0,16.88 22.81,30.7 50.67,30.7l0 550.98 -292.54 0 0 -550.98c27.86,0 50.67,-13.82 50.67,-30.7z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M7890.2 2423.71l17.45 0 0 -29.48 5 0c5.24,0 9.92,-1.25 13.21,-3.24 2.55,-1.56 4.15,-3.46 4.15,-5.3l0 -5 111.6 0 0 5c0,1.84 1.6,3.74 4.14,5.28 3.3,2.02 7.97,3.26 13.21,3.26l5 0 0 29.48 22.44 0 0 5c0,6.57 4.79,12.77 12.47,17.42 8.42,5.1 20.18,8.28 33.2,8.28l5 0 0 560.98 -302.54 0 0 -560.98 5 0c13.02,0 24.78,-3.18 33.2,-8.28 7.68,-4.65 12.47,-10.85 12.47,-17.42l0 -5 5 0zm22.45 10l-17.98 0c-1.77,8.25 -7.86,15.54 -16.78,20.94 -8.8,5.33 -20.49,8.88 -33.36,9.62l0 541.12 282.54 0 0 -541.12c-12.87,-0.74 -24.56,-4.29 -33.36,-9.62 -8.92,-5.4 -15.01,-12.69 -16.78,-20.94l-22.97 0 0 -29.79c-5.1,-0.63 -9.72,-2.2 -13.36,-4.4 -3.82,-2.29 -6.64,-5.34 -8.03,-8.83l-93.52 0c-1.39,3.5 -4.22,6.54 -8.03,8.84 -3.64,2.19 -8.27,3.76 -13.37,4.39l0 29.79 -5 0z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "7690.46,2284.21 7750.76,2311.47 7811.06,2338.74 7690.46,2338.74 7569.86,2338.74 7630.16,2311.47 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M7692.51 2279.66l141.71 64.08 -287.53 0 143.77 -65.01 2.05 0.93zm56.2 36.36l-58.25 -26.33 -97.43 44.05 194.86 0 -39.18 -17.72z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "7984.52,2295.35 8007.13,2322.61 8029.75,2349.88 7984.52,2349.88 7939.3,2349.88 7961.91,2322.61 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M7988.37 2292.17l52.01 62.71 -111.72 0 55.86 -67.36 3.85 4.65zm14.91 33.62l-18.76 -22.62 -34.59 41.71 69.18 0 -15.83 -19.09z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "8287.79,2307.58 8355.73,2348.43 8423.68,2389.3 8287.79,2389.3 8151.9,2389.3 8219.85,2348.43 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M8290.35 2303.3l151.31 91 -307.75 0 153.88 -92.54 2.56 1.54zm62.82 49.41l-65.38 -39.31 -117.9 70.9 235.8 0 -52.52 -31.59z" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "7558.06,2570.45 7822.83,2570.45 7822.83,2580.45 7558.06,2580.45 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "7886.93,2581.51 8075.22,2581.51 8075.22,2591.51 7886.93,2591.51 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "7886.61,2761.58 8071.82,2761.58 8071.82,2771.58 7886.61,2771.58 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "8142.87,2587.05 8407.65,2587.05 8407.65,2597.05 8142.87,2597.05 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M7942.99 2512.43l0 164.98 -10 0 0 -164.98 10 0zm0 175.39l0 277.57 -10 0 0 -277.57 10 0z" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "8033.12,2511.74 8033.12,2965.39 8023.12,2965.39 8023.12,2511.74 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M8229.27 2511.12l0 221.23 -10 0 0 -221.23 10 0zm0 239.23l0 215.04 -10 0 0 -215.04 10 0z" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "7557.96,2756.03 7822.74,2756.03 7822.74,2766.03 7557.96,2766.03 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "8339.1,2511.12 8339.1,2965.39 8329.1,2965.39 8329.1,2511.12 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M7695.78 2511.12l0 146.49 -10 0 0 -146.49 10 0zm0 186.65l0 153.73 -10 0 0 -153.73 10 0zm0 167.58l0 100.04 -10 0 0 -100.04 10 0z" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "8150.82,2853.48 8415.6,2853.48 8415.6,2863.48 8150.82,2863.48 " }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M6749.87 3052.57c37.51,0 68.33,28.63 71.81,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.8,-65.22z" }),
            react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M6893.95 3142.65c37.51,0 68.33,28.62 71.8,65.22l-143.6 0c3.47,-36.6 34.29,-65.22 71.8,-65.22z" }),
            react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M6749.87 3142.65c37.51,0 68.33,28.62 71.81,65.22l-143.61 0c3.48,-36.6 34.3,-65.22 71.8,-65.22z" }),
            react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M6749.87 3222.69c37.51,0 68.33,28.62 71.81,65.21l-143.61 0c3.48,-36.59 34.3,-65.21 71.8,-65.21z" }),
            react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M6748.83 3303.88c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
            react_1.default.createElement("g", { id: "_2973655341776" },
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7770 3052.57c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7915.1 3052.57c37.5,0 68.32,28.63 71.8,65.22l-143.6 0c3.47,-36.59 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7625.92 3052.57c37.51,0 68.32,28.63 71.8,65.22l-143.6 0c3.47,-36.59 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8204.76 3052.57c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8349.86 3052.57c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8061.42 3052.57c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7770 3142.65c37.5,0 68.32,28.62 71.8,65.22l-143.61 0c3.48,-36.6 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7915.1 3142.65c37.5,0 68.32,28.62 71.8,65.22l-143.6 0c3.47,-36.6 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7625.92 3142.65c37.51,0 68.32,28.62 71.8,65.22l-143.6 0c3.47,-36.6 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8204.76 3142.65c37.5,0 68.32,28.62 71.8,65.22l-143.61 0c3.48,-36.6 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8349.86 3142.65c37.5,0 68.32,28.62 71.8,65.22l-143.61 0c3.48,-36.6 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8061.42 3142.65c37.5,0 68.32,28.62 71.8,65.22l-143.61 0c3.48,-36.6 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7770 3222.69c37.5,0 68.32,28.62 71.8,65.21l-143.61 0c3.48,-36.59 34.3,-65.21 71.81,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7915.1 3222.69c37.5,0 68.32,28.62 71.8,65.21l-143.6 0c3.47,-36.59 34.29,-65.21 71.8,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7625.92 3222.69c37.51,0 68.32,28.62 71.8,65.21l-143.6 0c3.47,-36.59 34.29,-65.21 71.8,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8204.76 3222.69c37.5,0 68.32,28.62 71.8,65.21l-143.61 0c3.48,-36.59 34.3,-65.21 71.81,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8349.86 3222.69c37.5,0 68.32,28.62 71.8,65.21l-143.61 0c3.48,-36.59 34.3,-65.21 71.81,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8061.42 3222.69c37.5,0 68.32,28.62 71.8,65.21l-143.61 0c3.48,-36.59 34.3,-65.21 71.81,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7768.95 3303.88c37.51,0 68.33,28.63 71.81,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7914.05 3303.88c37.51,0 68.33,28.63 71.81,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7624.88 3303.88c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8203.71 3303.88c37.51,0 68.33,28.63 71.81,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8348.81 3303.88c37.51,0 68.33,28.63 71.81,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M8060.37 3303.88c37.51,0 68.33,28.63 71.81,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M6893.95 3052.57c37.51,0 68.33,28.63 71.8,65.22l-143.6 0c3.47,-36.59 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7039.05 3052.57c37.51,0 68.33,28.63 71.8,65.22l-143.6 0c3.48,-36.59 34.3,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7328.71 3052.57c37.51,0 68.33,28.63 71.8,65.22l-143.6 0c3.47,-36.59 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7473.81 3052.57c37.51,0 68.33,28.63 71.8,65.22l-143.6 0c3.47,-36.59 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7185.37 3052.57c37.51,0 68.33,28.63 71.8,65.22l-143.6 0c3.48,-36.59 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7039.05 3142.65c37.51,0 68.33,28.62 71.8,65.22l-143.6 0c3.48,-36.6 34.3,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7328.71 3142.65c37.51,0 68.33,28.62 71.8,65.22l-143.6 0c3.47,-36.6 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7473.81 3142.65c37.51,0 68.33,28.62 71.8,65.22l-143.6 0c3.47,-36.6 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7185.37 3142.65c37.51,0 68.33,28.62 71.8,65.22l-143.6 0c3.48,-36.6 34.29,-65.22 71.8,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M6893.95 3222.69c37.51,0 68.33,28.62 71.8,65.21l-143.6 0c3.47,-36.59 34.29,-65.21 71.8,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7039.05 3222.69c37.51,0 68.33,28.62 71.8,65.21l-143.6 0c3.48,-36.59 34.3,-65.21 71.8,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7328.71 3222.69c37.51,0 68.33,28.62 71.8,65.21l-143.6 0c3.47,-36.59 34.29,-65.21 71.8,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7473.81 3222.69c37.51,0 68.33,28.62 71.8,65.21l-143.6 0c3.47,-36.59 34.29,-65.21 71.8,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7185.37 3222.69c37.51,0 68.33,28.62 71.8,65.21l-143.6 0c3.48,-36.59 34.29,-65.21 71.8,-65.21z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M6892.91 3303.88c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7038.01 3303.88c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7327.67 3303.88c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7472.77 3303.88c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }),
                react_1.default.createElement("path", { fill: "#B2B3B3", fillOpacity: "0.780392", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", strokeOpacity: "0.780392", d: "M7184.33 3303.88c37.5,0 68.32,28.63 71.8,65.22l-143.61 0c3.48,-36.59 34.3,-65.22 71.81,-65.22z" }))),
        react_1.default.createElement("path", { fill: "#434242", fillOpacity: "0.258824", d: "M7038.99 2230.74l-8.36 8.89 0 6.61 -65.11 59.86 -43.7 248.54 -4.4 11.04 -41.1 29.98 2.16 8.57 43.27 -23.02 106.87 -241.93 95.94 290.14 32.85 91.58 46.82 110.1 -28.16 1.12 2.56 34.42 32.19 2.57 5.14 17.83 14.19 0 0 22.94 -6.45 2.54 -1.29 155.47 75.93 0 -9.39 -150.98 55.73 -1.96 0 -66.24 -16.94 -1.13 -2.12 9.88 -46.34 -0.44 76 -186.65 10.48 -1.89 7.33 18.37 -5.68 4.42 7.88 31.4 33.44 -19.42 -9.98 -30.2 -12.13 5.27 -7.63 -38.34 -23.28 -57.39 -8.43 1.85 0.85 4.69 -21.38 13.61 -260.74 -342.81 -14.15 -15.94 -5.28 -12.56 -7.59 -0.79 0 0zm8.36 17.97l15.87 26.1 254.22 333.95 -136.9 87.09 -146.83 -373.67 9.64 -65.71 4 -7.76 0 0zm-18.66 8.09l-12.8 61.6 -0.65 1.42 -39.23 -11.73 52.68 -51.29zm-56.61 57.06l40.81 12.31 -85.09 213.48 44.28 -225.79 0 0zm376.92 280.39l8.51 47.77 -3.22 1.05 -18.48 -28.31 -6.16 -8.1 19.36 -12.41 -0.01 0zm-28.63 18.37l6.64 8.71 20.64 23.96 -9.24 3.08 -4.18 10.09 -16.79 0.91 -1.4 -8.46 -34.13 3.38 0.15 21.34 -87.81 17.97 126.12 -80.98zm-38.27 69.8l0.14 23.16 25.56 1.31 -67.39 122.8 -17.05 0.69 -28.48 -98.01 -11.77 -29.91 98.99 -20.04z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 1228.27c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 1223.27c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 1176.46c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 1171.46c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 1125.83c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 1120.83c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 1075.12c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 1070.12c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 1018.89c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 1013.89c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 964.87c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 959.87c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 914.16c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 909.16c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M9193.73 861.29c10.32,0 18.69,8.36 18.69,18.68 0,10.32 -8.37,18.68 -18.69,18.68 -10.32,0 -18.68,-8.36 -18.68,-18.68 0,-10.32 8.36,-18.68 18.68,-18.68z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M9193.73 856.29c6.52,0 12.45,2.66 16.74,6.93 4.29,4.27 6.95,10.21 6.95,16.75 0,6.54 -2.66,12.48 -6.93,16.75 -4.31,4.27 -10.24,6.93 -16.76,6.93 -6.54,0 -12.48,-2.66 -16.75,-6.93 -4.27,-4.27 -6.93,-10.21 -6.93,-16.75 0,-6.54 2.66,-12.48 6.93,-16.75 4.27,-4.27 10.21,-6.93 16.75,-6.93zm9.68 14c-2.47,-2.46 -5.91,-4 -9.68,-4 -3.77,0 -7.2,1.54 -9.67,4.01 -2.47,2.47 -4.01,5.9 -4.01,9.67 0,3.77 1.54,7.2 4.01,9.67 2.47,2.47 5.9,4.01 9.67,4.01 3.77,0 7.21,-1.54 9.69,-4 2.46,-2.48 4,-5.91 4,-9.68 0,-3.77 -1.54,-7.2 -4.01,-9.68z" }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { fill: "#9D9E9E", fillOpacity: "0.560784", d: "M2103.95 2792.15l3135.1 0 0 592.38 -140.35 0 0 -267.63c0,-106.24 -86.92,-193.18 -193.16,-193.18l0 0c-106.24,0 -193.17,86.94 -193.17,193.18l0 267.63 -114.86 0 0 -267.63c0,-106.24 -86.93,-193.18 -193.17,-193.18l0 0c-106.25,0 -193.17,86.94 -193.17,193.18l0 267.63 -106.64 0 0 -267.63c0,-106.24 -86.92,-193.18 -193.17,-193.18l0 0c-106.24,0 -193.16,86.94 -193.16,193.18l0 267.63 -117.1 0 0 -267.63c0,-106.24 -86.92,-193.18 -193.17,-193.18l0 0c-106.24,0 -193.16,86.94 -193.16,193.18l0 267.63 -114.71 0 0 -267.63c0,-106.24 -86.92,-193.18 -193.16,-193.18l0 0c-106.25,0 -193.17,86.94 -193.17,193.18l0 267.63 -115.26 0 0 -267.63c0,-106.24 -86.94,-193.18 -193.18,-193.18l0 0c-106.25,0 -193.16,86.94 -193.16,193.18l0 267.63 -108.18 0 0 -592.38zm2555.5 94.92l2.96 0c12.93,0 23.51,10.59 23.51,23.52l0 48.84 -20.76 17.11 -9.67 0 -20.23 -16.97 0 -48.31c0,-13.3 10.89,-24.19 24.19,-24.19zm-70.8 -0.59l2.96 0c12.93,0 23.51,10.58 23.51,23.52l0 38.95 -50.66 -32.44 0 -5.84c0,-13.31 10.88,-24.19 24.19,-24.19zm145.08 -2.22l-2.96 0c-12.94,0 -23.52,10.58 -23.52,23.52l0 38.95 50.66 -32.44 0 -5.84c0,-13.31 -10.88,-24.19 -24.18,-24.19zm-581.4 2.81l2.96 0c12.93,0 23.51,10.59 23.51,23.52l0 48.84 -20.76 17.11 -9.67 0 -20.23 -16.97 0 -48.31c0,-13.3 10.89,-24.19 24.19,-24.19zm-70.8 -0.59l2.96 0c12.93,0 23.51,10.58 23.51,23.52l0 38.95 -50.66 -32.44 0 -5.84c0,-13.31 10.88,-24.19 24.19,-24.19zm145.08 -2.22l-2.96 0c-12.94,0 -23.52,10.58 -23.52,23.52l0 38.95 50.66 -32.44 0 -5.84c0,-13.31 -10.88,-24.19 -24.18,-24.19zm-576.99 2.81l2.96 0c12.93,0 23.51,10.59 23.51,23.52l0 48.84 -20.76 17.11 -9.67 0 -20.23 -16.97 0 -48.31c0,-13.3 10.89,-24.19 24.19,-24.19zm-70.8 -0.59l2.96 0c12.93,0 23.51,10.58 23.51,23.52l0 38.95 -50.66 -32.44 0 -5.84c0,-13.31 10.88,-24.19 24.19,-24.19zm145.08 -2.22l-2.96 0c-12.94,0 -23.52,10.58 -23.52,23.52l0 38.95 50.66 -32.44 0 -5.84c0,-13.31 -10.88,-24.19 -24.18,-24.19zm-576.99 2.81l2.96 0c12.93,0 23.51,10.59 23.51,23.52l0 48.84 -20.76 17.11 -9.67 0 -20.23 -16.97 0 -48.31c0,-13.3 10.89,-24.19 24.19,-24.19zm-70.8 -0.59l2.96 0c12.93,0 23.51,10.58 23.51,23.52l0 38.95 -50.66 -32.44 0 -5.84c0,-13.31 10.88,-24.19 24.19,-24.19zm145.08 -2.22l-2.96 0c-12.94,0 -23.52,10.58 -23.52,23.52l0 38.95 50.66 -32.44 0 -5.84c0,-13.31 -10.88,-24.19 -24.18,-24.19zm-563.76 2.81l2.96 0c12.93,0 23.51,10.59 23.51,23.52l0 48.84 -20.76 17.11 -9.67 0 -20.23 -16.97 0 -48.31c0,-13.3 10.89,-24.19 24.19,-24.19zm-70.8 -0.59l2.96 0c12.93,0 23.51,10.58 23.51,23.52l0 38.95 -50.66 -32.44 0 -5.84c0,-13.31 10.88,-24.19 24.19,-24.19zm145.08 -2.22l-2.96 0c-12.94,0 -23.52,10.58 -23.52,23.52l0 38.95 50.66 -32.44 0 -5.84c0,-13.31 -10.88,-24.19 -24.18,-24.19z" }),
            react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M2103.95 2788.34l3138.91 0 0 600 -147.97 0 0 -271.44c0,-52.07 -21.31,-99.43 -55.62,-133.74 -34.31,-34.33 -81.65,-55.63 -133.73,-55.63 -52.08,0 -99.42,21.3 -133.73,55.62 -34.33,34.32 -55.63,81.67 -55.63,133.75l0 271.44 -122.48 0 0 -271.44c0,-52.08 -21.3,-99.43 -55.62,-133.74 -34.32,-34.33 -81.66,-55.63 -133.74,-55.63 -52.08,0 -99.42,21.3 -133.73,55.62 -34.33,34.32 -55.63,81.67 -55.63,133.75l0 271.44 -114.26 0 0 -271.44c0,-52.08 -21.3,-99.43 -55.62,-133.74 -34.32,-34.33 -81.66,-55.63 -133.74,-55.63 -52.08,0 -99.42,21.3 -133.73,55.62 -34.31,34.32 -55.62,81.68 -55.62,133.75l0 271.44 -124.72 0 0 -271.44c0,-52.08 -21.3,-99.43 -55.62,-133.74 -34.32,-34.33 -81.66,-55.63 -133.74,-55.63 -52.08,0 -99.42,21.3 -133.73,55.62 -34.31,34.32 -55.62,81.68 -55.62,133.75l0 271.44 -122.33 0 0 -271.44c0,-52.07 -21.31,-99.43 -55.62,-133.74 -34.31,-34.33 -81.65,-55.63 -133.73,-55.63 -52.08,0 -99.42,21.3 -133.73,55.62 -34.33,34.32 -55.63,81.67 -55.63,133.75l0 271.44 -122.88 0 0 -271.44c0,-52.07 -21.32,-99.43 -55.63,-133.74 -34.31,-34.31 -81.67,-55.63 -133.74,-55.63 -52.07,0 -99.42,21.31 -133.73,55.62 -34.31,34.31 -55.62,81.67 -55.62,133.75l0 271.44 -115.8 0 0 -600 3.81 0zm3131.29 7.62l-3127.48 0 0 584.76 100.56 0 0 -263.82c0,-54.15 22.17,-103.42 57.86,-139.12 35.69,-35.7 84.95,-57.87 139.11,-57.87 54.16,0 103.41,22.18 139.11,57.87 35.7,35.71 57.88,84.96 57.88,139.12l0 263.82 107.64 0 0 -263.82c0,-54.14 22.17,-103.41 57.87,-139.11 35.71,-35.71 84.96,-57.88 139.11,-57.88 54.15,0 103.41,22.17 139.1,57.88 35.7,35.68 57.87,84.95 57.87,139.11l0 263.82 107.09 0 0 -263.82c0,-54.16 22.17,-103.43 57.86,-139.12 35.7,-35.7 84.95,-57.87 139.11,-57.87 54.14,0 103.4,22.17 139.1,57.87 35.71,35.71 57.88,84.98 57.88,139.12l0 263.82 109.48 0 0 -263.82c0,-54.16 22.17,-103.43 57.86,-139.12 35.7,-35.7 84.95,-57.87 139.11,-57.87 54.14,0 103.4,22.17 139.1,57.87 35.71,35.71 57.88,84.98 57.88,139.12l0 263.82 99.02 0 0 -263.82c0,-54.14 22.17,-103.41 57.87,-139.11 35.71,-35.71 84.96,-57.88 139.11,-57.88 54.14,0 103.4,22.17 139.1,57.87 35.71,35.71 57.88,84.98 57.88,139.12l0 263.82 107.24 0 0 -263.82c0,-54.14 22.17,-103.41 57.87,-139.11 35.71,-35.71 84.96,-57.88 139.11,-57.88 54.15,0 103.41,22.17 139.1,57.88 35.7,35.68 57.87,84.95 57.87,139.11l0 263.82 132.73 0 0 -584.76zm-575.79 87.3l2.96 0c7.5,0 14.35,3.09 19.29,8.03 4.94,4.94 8.03,11.79 8.03,19.3l0 50.61 -23.22 19.15 -12.39 0 -22.67 -19.01 0 -50.08c0,-7.67 3.16,-14.69 8.23,-19.76 5.08,-5.08 12.1,-8.24 19.77,-8.24zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.39,5.98 -3.69,3.68 -5.99,8.79 -5.99,14.4l0 46.54 17.8 14.93 6.95 0 18.29 -15.08 0 -47.06c0,-5.42 -2.23,-10.36 -5.79,-13.92 -3.56,-3.56 -8.5,-5.79 -13.91,-5.79zm-73.76 -8.21l2.96 0c7.51,0 14.35,3.09 19.29,8.03 4.95,4.95 8.03,11.8 8.03,19.3l0 45.9 -58.28 -37.32 0 -7.91c0,-7.68 3.16,-14.7 8.22,-19.77 5.08,-5.07 12.08,-8.23 19.78,-8.23zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.4,5.98 -3.68,3.68 -5.98,8.79 -5.98,14.4l0 3.77 43.04 27.56 0 -32c0,-5.43 -2.22,-10.37 -5.78,-13.92 -3.57,-3.56 -8.5,-5.79 -13.92,-5.79zm142.12 -2.22l-2.96 0c-5.42,0 -10.36,2.23 -13.92,5.79 -3.57,3.55 -5.79,8.49 -5.79,13.92l0 32 43.04 -27.56 0 -3.77c0,-5.61 -2.3,-10.72 -5.98,-14.4 -3.68,-3.68 -8.79,-5.98 -14.39,-5.98zm-2.96 -7.62l2.96 0c7.69,0 14.71,3.16 19.77,8.22 5.06,5.08 8.22,12.1 8.22,19.78l0 7.91 -58.28 37.32 0 -45.9c0,-7.5 3.08,-14.35 8.04,-19.29 4.93,-4.95 11.78,-8.04 19.29,-8.04zm-578.44 2.81l2.96 0c7.5,0 14.35,3.09 19.29,8.03 4.94,4.94 8.03,11.79 8.03,19.3l0 50.61 -23.22 19.15 -12.39 0 -22.67 -19.01 0 -50.08c0,-7.67 3.16,-14.69 8.23,-19.76 5.08,-5.08 12.1,-8.24 19.77,-8.24zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.39,5.98 -3.69,3.68 -5.99,8.79 -5.99,14.4l0 46.54 17.8 14.93 6.95 0 18.29 -15.08 0 -47.06c0,-5.42 -2.23,-10.36 -5.79,-13.92 -3.56,-3.56 -8.5,-5.79 -13.91,-5.79zm-73.76 -8.21l2.96 0c7.51,0 14.35,3.09 19.29,8.03 4.95,4.95 8.03,11.8 8.03,19.3l0 45.9 -58.28 -37.32 0 -7.91c0,-7.68 3.16,-14.7 8.22,-19.77 5.08,-5.07 12.08,-8.23 19.78,-8.23zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.4,5.98 -3.68,3.68 -5.98,8.79 -5.98,14.4l0 3.77 43.04 27.56 0 -32c0,-5.43 -2.22,-10.37 -5.78,-13.92 -3.57,-3.56 -8.5,-5.79 -13.92,-5.79zm142.12 -2.22l-2.96 0c-5.42,0 -10.36,2.23 -13.92,5.79 -3.57,3.55 -5.79,8.49 -5.79,13.92l0 32 43.04 -27.56 0 -3.77c0,-5.61 -2.3,-10.72 -5.98,-14.4 -3.68,-3.68 -8.79,-5.98 -14.39,-5.98zm-2.96 -7.62l2.96 0c7.69,0 14.71,3.16 19.77,8.22 5.06,5.08 8.22,12.1 8.22,19.78l0 7.91 -58.28 37.32 0 -45.9c0,-7.5 3.08,-14.35 8.04,-19.29 4.93,-4.95 11.78,-8.04 19.29,-8.04zm-574.03 2.81l2.96 0c7.5,0 14.35,3.09 19.29,8.03 4.94,4.94 8.03,11.79 8.03,19.3l0 50.61 -23.22 19.15 -12.39 0 -22.67 -19.01 0 -50.08c0,-7.67 3.16,-14.69 8.23,-19.76 5.08,-5.08 12.1,-8.24 19.77,-8.24zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.39,5.98 -3.69,3.68 -5.99,8.79 -5.99,14.4l0 46.54 17.8 14.93 6.95 0 18.29 -15.08 0 -47.06c0,-5.42 -2.23,-10.36 -5.79,-13.92 -3.56,-3.56 -8.5,-5.79 -13.91,-5.79zm-73.76 -8.21l2.96 0c7.51,0 14.35,3.09 19.29,8.03 4.95,4.95 8.03,11.8 8.03,19.3l0 45.9 -58.28 -37.32 0 -7.91c0,-7.68 3.16,-14.7 8.22,-19.77 5.08,-5.07 12.08,-8.23 19.78,-8.23zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.4,5.98 -3.68,3.68 -5.98,8.79 -5.98,14.4l0 3.77 43.04 27.56 0 -32c0,-5.43 -2.22,-10.37 -5.78,-13.92 -3.57,-3.56 -8.5,-5.79 -13.92,-5.79zm142.12 -2.22l-2.96 0c-5.42,0 -10.36,2.23 -13.92,5.79 -3.57,3.55 -5.79,8.49 -5.79,13.92l0 32 43.04 -27.56 0 -3.77c0,-5.61 -2.3,-10.72 -5.98,-14.4 -3.68,-3.68 -8.79,-5.98 -14.39,-5.98zm-2.96 -7.62l2.96 0c7.69,0 14.71,3.16 19.77,8.22 5.06,5.08 8.22,12.1 8.22,19.78l0 7.91 -58.28 37.32 0 -45.9c0,-7.5 3.08,-14.35 8.04,-19.29 4.93,-4.95 11.78,-8.04 19.29,-8.04zm-574.03 2.81l2.96 0c7.5,0 14.35,3.09 19.29,8.03 4.94,4.94 8.03,11.79 8.03,19.3l0 50.61 -23.22 19.15 -12.39 0 -22.67 -19.01 0 -50.08c0,-7.67 3.16,-14.69 8.23,-19.76 5.08,-5.08 12.1,-8.24 19.77,-8.24zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.39,5.98 -3.69,3.68 -5.99,8.79 -5.99,14.4l0 46.54 17.8 14.93 6.95 0 18.29 -15.08 0 -47.06c0,-5.42 -2.23,-10.36 -5.79,-13.92 -3.56,-3.56 -8.5,-5.79 -13.91,-5.79zm-73.76 -8.21l2.96 0c7.51,0 14.35,3.09 19.29,8.03 4.95,4.95 8.03,11.8 8.03,19.3l0 45.9 -58.28 -37.32 0 -7.91c0,-7.68 3.16,-14.7 8.22,-19.77 5.08,-5.07 12.08,-8.23 19.78,-8.23zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.4,5.98 -3.68,3.68 -5.98,8.79 -5.98,14.4l0 3.77 43.04 27.56 0 -32c0,-5.43 -2.22,-10.37 -5.78,-13.92 -3.57,-3.56 -8.5,-5.79 -13.92,-5.79zm142.12 -2.22l-2.96 0c-5.42,0 -10.36,2.23 -13.92,5.79 -3.57,3.55 -5.79,8.49 -5.79,13.92l0 32 43.04 -27.56 0 -3.77c0,-5.61 -2.3,-10.72 -5.98,-14.4 -3.68,-3.68 -8.79,-5.98 -14.39,-5.98zm-2.96 -7.62l2.96 0c7.69,0 14.71,3.16 19.77,8.22 5.06,5.08 8.22,12.1 8.22,19.78l0 7.91 -58.28 37.32 0 -45.9c0,-7.5 3.08,-14.35 8.04,-19.29 4.93,-4.95 11.78,-8.04 19.29,-8.04zm-560.8 2.81l2.96 0c7.5,0 14.35,3.09 19.29,8.03 4.94,4.94 8.03,11.79 8.03,19.3l0 50.61 -23.22 19.15 -12.39 0 -22.67 -19.01 0 -50.08c0,-7.67 3.16,-14.69 8.23,-19.76 5.08,-5.08 12.1,-8.24 19.77,-8.24zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.39,5.98 -3.69,3.68 -5.99,8.79 -5.99,14.4l0 46.54 17.8 14.93 6.95 0 18.29 -15.08 0 -47.06c0,-5.42 -2.23,-10.36 -5.79,-13.92 -3.56,-3.56 -8.5,-5.79 -13.91,-5.79zm-73.76 -8.21l2.96 0c7.51,0 14.35,3.09 19.29,8.03 4.95,4.95 8.03,11.8 8.03,19.3l0 45.9 -58.28 -37.32 0 -7.91c0,-7.68 3.16,-14.7 8.22,-19.77 5.08,-5.07 12.08,-8.23 19.78,-8.23zm2.96 7.62l-2.96 0c-5.61,0 -10.72,2.3 -14.4,5.98 -3.68,3.68 -5.98,8.79 -5.98,14.4l0 3.77 43.04 27.56 0 -32c0,-5.43 -2.22,-10.37 -5.78,-13.92 -3.57,-3.56 -8.5,-5.79 -13.92,-5.79zm142.12 -2.22l-2.96 0c-5.42,0 -10.36,2.23 -13.92,5.79 -3.57,3.55 -5.79,8.49 -5.79,13.92l0 32 43.04 -27.56 0 -3.77c0,-5.61 -2.3,-10.72 -5.98,-14.4 -3.68,-3.68 -8.79,-5.98 -14.39,-5.98zm-2.96 -7.62l2.96 0c7.69,0 14.71,3.16 19.77,8.22 5.06,5.08 8.22,12.1 8.22,19.78l0 7.91 -58.28 37.32 0 -45.9c0,-7.5 3.08,-14.35 8.04,-19.29 4.93,-4.95 11.78,-8.04 19.29,-8.04z" })),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "324.89,1299.29 346.94,1609.03 368.99,1918.77 324.89,1918.77 280.78,1918.77 302.83,1609.03 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M328.69 1299.02c14.8,207.84 29.12,415.76 44.4,623.56l-96.4 0 48.21 -676.92 3.79 53.36zm14.45 310.28l-18.25 -256.37 -40.02 562.03 80.03 0 -21.76 -305.66z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2167.34c1.28,0 2.31,1.03 2.31,2.3 0,1.27 -1.03,2.3 -2.31,2.3 -1.27,0 -2.3,-1.03 -2.3,-2.3 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2163.53c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.69 -0.69,3.21 -1.8,4.32 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.68,0 -3.18,-0.69 -4.28,-1.76 -1.14,-1.17 -1.83,-2.67 -1.83,-4.35 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm-0.99 7.12l0.99 0.41 0 -1.38 -0.99 0.97zm0.99 0.41l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.38 -0.99 0.41 0.99 0.97zm1.43 0.04l-1.39 0 1 -0.97 0.39 0.97zm-1.47 0l-1.37 0 0.4 0.99 0.97 -0.99zm-0.97 -0.99l-0.4 0.99 1.37 0 -0.97 -0.99zm1.05 0.99l1.39 0 -0.39 0.97 -1 -0.97zm-0.04 -1.43l0 1.39 0.97 -1 -0.97 -0.39z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2174.44c1.28,0 2.31,1.03 2.31,2.3 0,1.27 -1.03,2.3 -2.31,2.3 -1.27,0 -2.3,-1.03 -2.3,-2.3 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2170.63c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.69 -0.69,3.21 -1.8,4.32 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.68,0 -3.18,-0.69 -4.28,-1.76 -1.14,-1.17 -1.83,-2.67 -1.83,-4.35 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm-0.99 7.12l0.99 0.41 0 -1.38 -0.99 0.97zm0.99 0.41l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.38 -0.99 0.41 0.99 0.97zm1.43 0.04l-1.39 0 1 -0.97 0.39 0.97zm-1.47 0l-1.37 0 0.4 0.99 0.97 -0.99zm-0.97 -0.99l-0.4 0.99 1.37 0 -0.97 -0.99zm1.05 0.99l1.39 0 -0.39 0.97 -1 -0.97zm-0.04 -1.43l0 1.39 0.97 -1 -0.97 -0.39z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2180.38c1.28,0 2.31,1.03 2.31,2.3 0,1.27 -1.03,2.3 -2.31,2.3 -1.27,0 -2.3,-1.03 -2.3,-2.3 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2176.57c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.69 -0.69,3.21 -1.8,4.32 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.68,0 -3.18,-0.69 -4.28,-1.76 -1.14,-1.17 -1.83,-2.67 -1.83,-4.35 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm-0.99 7.12l0.99 0.41 0 -1.38 -0.99 0.97zm0.99 0.41l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.38 -0.99 0.41 0.99 0.97zm1.43 0.04l-1.39 0 1 -0.97 0.39 0.97zm-1.47 0l-1.37 0 0.4 0.99 0.97 -0.99zm-0.97 -0.99l-0.4 0.99 1.37 0 -0.97 -0.99zm1.05 0.99l1.39 0 -0.39 0.97 -1 -0.97zm-0.04 -1.43l0 1.39 0.97 -1 -0.97 -0.39z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2187.29c1.28,0 2.31,1.03 2.31,2.3 0,1.27 -1.03,2.3 -2.31,2.3 -1.27,0 -2.3,-1.03 -2.3,-2.3 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2183.48c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.69 -0.69,3.21 -1.8,4.32 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.68,0 -3.18,-0.69 -4.28,-1.76 -1.14,-1.17 -1.83,-2.67 -1.83,-4.35 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm-0.99 7.12l0.99 0.41 0 -1.38 -0.99 0.97zm0.99 0.41l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.38 -0.99 0.41 0.99 0.97zm1.43 0.04l-1.39 0 1 -0.97 0.39 0.97zm-1.47 0l-1.37 0 0.4 0.99 0.97 -0.99zm-0.97 -0.99l-0.4 0.99 1.37 0 -0.97 -0.99zm1.05 0.99l1.39 0 -0.39 0.97 -1 -0.97zm-0.04 -1.43l0 1.39 0.97 -1 -0.97 -0.39z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2193.81c1.28,0 2.31,1.03 2.31,2.3 0,1.27 -1.03,2.3 -2.31,2.3 -1.27,0 -2.3,-1.03 -2.3,-2.3 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2190c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.69 -0.69,3.21 -1.8,4.32 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.68,0 -3.18,-0.69 -4.28,-1.76 -1.14,-1.17 -1.83,-2.67 -1.83,-4.35 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm-0.99 7.12l0.99 0.41 0 -1.38 -0.99 0.97zm0.99 0.41l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.38 -0.99 0.41 0.99 0.97zm1.43 0.04l-1.39 0 1 -0.97 0.39 0.97zm-1.47 0l-1.37 0 0.4 0.99 0.97 -0.99zm-0.97 -0.99l-0.4 0.99 1.37 0 -0.97 -0.99zm1.05 0.99l1.39 0 -0.39 0.97 -1 -0.97zm-0.04 -1.43l0 1.39 0.97 -1 -0.97 -0.39z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2200.33c1.28,0 2.31,1.03 2.31,2.3 0,1.27 -1.03,2.3 -2.31,2.3 -1.27,0 -2.3,-1.03 -2.3,-2.3 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2196.52c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.69 -0.69,3.21 -1.8,4.32 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.68,0 -3.18,-0.69 -4.28,-1.76 -1.14,-1.17 -1.83,-2.67 -1.83,-4.35 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm-0.99 7.12l0.99 0.41 0 -1.38 -0.99 0.97zm0.99 0.41l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.38 -0.99 0.41 0.99 0.97zm1.43 0.04l-1.39 0 1 -0.97 0.39 0.97zm-1.47 0l-1.37 0 0.4 0.99 0.97 -0.99zm-0.97 -0.99l-0.4 0.99 1.37 0 -0.97 -0.99zm1.05 0.99l1.39 0 -0.39 0.97 -1 -0.97zm-0.04 -1.43l0 1.39 0.97 -1 -0.97 -0.39z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2206.66c1.28,0 2.31,1.03 2.31,2.3 0,1.27 -1.03,2.3 -2.31,2.3 -1.27,0 -2.3,-1.03 -2.3,-2.3 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2202.85c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.69 -0.69,3.21 -1.8,4.32 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.68,0 -3.18,-0.69 -4.28,-1.76 -1.14,-1.17 -1.83,-2.67 -1.83,-4.35 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm-0.99 7.12l0.99 0.41 0 -1.38 -0.99 0.97zm0.99 0.41l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.38 -0.99 0.41 0.99 0.97zm1.43 0.04l-1.39 0 1 -0.97 0.39 0.97zm-1.47 0l-1.37 0 0.4 0.99 0.97 -0.99zm-0.97 -0.99l-0.4 0.99 1.37 0 -0.97 -0.99zm1.05 0.99l1.39 0 -0.39 0.97 -1 -0.97zm-0.04 -1.43l0 1.39 0.97 -1 -0.97 -0.39z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2213.18c1.28,0 2.31,1.03 2.31,2.3 0,1.28 -1.03,2.31 -2.31,2.31 -1.27,0 -2.3,-1.03 -2.3,-2.31 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2209.37c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.68 -0.69,3.22 -1.8,4.33 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.69,0 -3.21,-0.69 -4.32,-1.8 -1.08,-1.08 -1.79,-2.64 -1.79,-4.32 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm1.01 5.1l-0.99 0.99 1.4 0.02 -0.41 -1.01zm-1.02 1.04l-1 0.98 1.01 0.41 -0.01 -1.39zm0.01 1.39l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.37 -0.99 0.41 0.99 0.96zm-0.03 0.05l-1.38 -0.01 0.4 1.01 0.98 -1zm-1.38 -0.01l1.37 0 -0.97 -0.99 -0.4 0.99zm1.42 -0.03l1 -0.98 -1.01 -0.4 0.01 1.38zm0.03 0.03l1.38 0 -0.38 0.97 -1 -0.97z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2219.51c1.28,0 2.31,1.03 2.31,2.3 0,1.28 -1.03,2.31 -2.31,2.31 -1.27,0 -2.3,-1.03 -2.3,-2.31 0,-1.27 1.03,-2.3 2.3,-2.3z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2215.7c1.68,0 3.24,0.71 4.32,1.79 1.11,1.11 1.8,2.63 1.8,4.32 0,1.68 -0.69,3.22 -1.8,4.33 -1.08,1.08 -2.64,1.79 -4.32,1.79 -1.69,0 -3.21,-0.69 -4.32,-1.8 -1.08,-1.08 -1.79,-2.64 -1.79,-4.32 0,-1.64 0.69,-3.18 1.76,-4.28 1.17,-1.14 2.67,-1.83 4.35,-1.83zm1.01 5.1l-0.99 0.99 1.4 0.02 -0.41 -1.01zm-1.02 1.04l-1 0.98 1.01 0.41 -0.01 -1.39zm0.01 1.39l0.97 -0.38 -0.97 -1 0 1.38zm0 -1.46l0 -1.37 -0.99 0.41 0.99 0.96zm-0.03 0.05l-1.38 -0.01 0.4 1.01 0.98 -1zm-1.38 -0.01l1.37 0 -0.97 -0.99 -0.4 0.99zm1.42 -0.03l1 -0.98 -1.01 -0.4 0.01 1.38zm0.03 0.03l1.38 0 -0.38 0.97 -1 -0.97z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M783.59 2225.27c2.12,0 3.83,1.71 3.83,3.83 0,2.11 -1.71,3.83 -3.83,3.83 -2.11,0 -3.83,-1.72 -3.83,-3.83 0,-2.12 1.72,-3.83 3.83,-3.83z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M783.59 2221.46c2.1,0 4.03,0.87 5.4,2.24 1.37,1.37 2.24,3.3 2.24,5.4 0,2.09 -0.86,3.99 -2.22,5.37 -1.39,1.4 -3.32,2.27 -5.42,2.27 -2.09,0 -3.99,-0.86 -5.37,-2.22 -1.41,-1.43 -2.27,-3.33 -2.27,-5.42 0,-2.1 0.87,-4.03 2.24,-5.4 1.41,-1.38 3.31,-2.24 5.4,-2.24z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", points: "187.04,2243.99 187.56,2243.99 220.99,2229.98 254.94,2215.75 322.84,2215.75 390.74,2215.75 424.69,2229.98 458.13,2243.99 458.64,2243.99 458.64,2244.21 458.64,2491.69 645.5,2491.69 645.5,2243.99 917.1,2243.99 917.1,3393.4 187.04,3393.4 187.04,2244.21 " }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "754.31,1986.34 779.04,1986.31 803.78,1986.27 816.2,1997.31 828.62,2008.35 816.31,2019.42 804.01,2030.49 779.28,2030.53 754.54,2030.56 742.12,2019.53 729.7,2008.49 742.01,1997.42 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M754.31 1982.54l50.92 -0.08 29.1 25.87 -28.85 25.95 -52.37 0.08 -29.11 -25.86 28.85 -25.96 1.46 0zm24.73 7.57l-23.26 0.03 -20.37 18.33 20.57 18.29 46.57 -0.07 20.36 -18.32 -20.58 -18.3 -23.29 0.04z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.16 2005.76c22.5,0 40.74,6.93 40.74,15.48 0,2.7 -1.81,5.23 -4.99,7.44l0 24.52 1.29 1.15 12.42 11.03 -12.31 11.08 -12.3 11.07 -24.74 0.03 -24.73 0.04 -12.42 -11.04 -12.42 -11.04 12.31 -11.07 1.4 -1.26 0 -24.51c-3.18,-2.21 -4.99,-4.74 -4.99,-7.44 0,-8.55 18.24,-15.48 40.74,-15.48z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M779.16 2001.95c11.7,0 22.38,1.83 30.15,4.78 8.89,3.38 14.4,8.5 14.4,14.51 0,2.1 -0.68,4.11 -1.91,5.95 -0.79,1.18 -1.83,2.32 -3.08,3.37l0 20.94 15.61 13.86 -28.85 25.96 -52.38 0.08 -29.1 -25.87 15.6 -14.03 0 -20.94c-1.25,-1.05 -2.29,-2.19 -3.08,-3.37 -1.23,-1.84 -1.91,-3.85 -1.91,-5.95 0,-6.01 5.51,-11.13 14.39,-14.51 7.77,-2.95 18.46,-4.78 30.16,-4.78zm27.46 11.9c-6.95,-2.64 -16.67,-4.28 -27.46,-4.28 -10.79,0 -20.51,1.64 -27.46,4.28 -5.84,2.23 -9.47,4.88 -9.47,7.39 0,0.55 0.22,1.15 0.61,1.73 0.57,0.85 1.51,1.74 2.73,2.58l1.65 1.14 0 28.18 -11.81 10.63 20.58 18.3 46.56 -0.07 20.37 -18.33 -11.82 -10.51 0 -28.2 1.65 -1.14c1.23,-0.85 2.16,-1.73 2.73,-2.58 0.39,-0.58 0.61,-1.18 0.61,-1.73 0,-2.51 -3.63,-5.16 -9.47,-7.39z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "748.4,1969.06 809.91,1969.06 809.91,1992.69 748.4,1992.69 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M748.4 1965.25l65.32 0 0 31.25 -69.13 0 0 -31.25 3.81 0zm57.7 7.62l-53.89 0 0 16.01 53.89 0 0 -16.01z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.16 1905.14c22.99,0 41.62,14.31 41.62,31.96 0,5.64 -1.9,10.93 -5.23,15.53 3.97,2.22 6.25,4.84 6.25,7.65 0,8.1 -19.09,14.66 -42.64,14.66 -23.55,0 -42.64,-6.56 -42.64,-14.66 0,-2.81 2.28,-5.43 6.25,-7.66 -3.33,-4.59 -5.23,-9.89 -5.23,-15.52 0,-17.65 18.63,-31.96 41.62,-31.96z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M779.16 1901.33c12.34,0 23.58,3.89 31.74,10.15 8.45,6.49 13.69,15.55 13.69,25.62 0,3.16 -0.54,6.27 -1.53,9.24 -0.6,1.79 -1.38,3.53 -2.31,5.19 0.93,0.75 1.74,1.54 2.41,2.35 1.59,1.94 2.45,4.11 2.45,6.4 0,5.86 -5.76,10.77 -15.06,13.97 -8.08,2.77 -19.19,4.5 -31.39,4.5 -12.2,0 -23.31,-1.73 -31.39,-4.5 -9.3,-3.2 -15.06,-8.11 -15.06,-13.97 0,-2.29 0.86,-4.46 2.45,-6.4 0.66,-0.81 1.47,-1.59 2.41,-2.35 -0.92,-1.66 -1.7,-3.39 -2.3,-5.18 -1,-2.97 -1.54,-6.08 -1.54,-9.25 0,-10.07 5.24,-19.13 13.69,-25.62 8.16,-6.26 19.4,-10.15 31.74,-10.15zm27.12 16.19c-6.89,-5.29 -16.49,-8.57 -27.12,-8.57 -10.63,0 -20.23,3.28 -27.12,8.57 -6.59,5.06 -10.69,12 -10.69,19.58 0,2.36 0.39,4.66 1.12,6.81 0.76,2.27 1.92,4.46 3.38,6.48l2.51 3.45 -3.74 2.1c-1.58,0.88 -2.81,1.83 -3.56,2.75 -0.47,0.59 -0.73,1.13 -0.73,1.59 0,2.23 3.8,4.66 9.92,6.77 7.32,2.51 17.56,4.08 28.91,4.08 11.36,0 21.59,-1.57 28.91,-4.08 6.12,-2.11 9.92,-4.54 9.92,-6.77 0,-0.46 -0.26,-1 -0.73,-1.58 -0.75,-0.93 -1.98,-1.87 -3.56,-2.75l-3.72 -2.09 2.49 -3.45c1.46,-2.02 2.62,-4.21 3.39,-6.5 0.72,-2.15 1.11,-4.45 1.11,-6.81 0,-7.58 -4.1,-14.52 -10.69,-19.58z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.16 1832.05c2.1,0 3.8,6.32 3.8,14.12 0,7.8 -1.7,14.13 -3.8,14.13 -2.1,0 -3.8,-6.33 -3.8,-14.13 0,-7.8 1.7,-14.12 3.8,-14.12z" }),
        react_1.default.createElement("path", { fill: "#B2B3B3", fillRule: "nonzero", d: "M779.16 1828.24c2.98,0 5.21,2.67 6.37,6.96 0.75,2.86 1.24,6.75 1.24,10.97 0,4.22 -0.49,8.11 -1.24,10.96 -1.16,4.31 -3.38,6.98 -6.37,6.98 -3,0 -5.21,-2.67 -6.37,-6.97 -0.75,-2.86 -1.24,-6.75 -1.24,-10.97 0,-4.22 0.49,-8.11 1.24,-10.96 1.16,-4.3 3.38,-6.97 6.37,-6.97zm0 7.83c0.24,-0.13 0.35,-0.21 0,-0.21 -0.35,0 -0.25,0.08 0,0.21zm0 20.42c0.35,0 0.24,-0.08 0,-0.22 -0.25,0.14 -0.35,0.22 0,0.22z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.16 1869.24c2.1,0 3.8,6.32 3.8,14.12 0,7.8 -1.7,14.12 -3.8,14.12 -2.1,0 -3.8,-6.32 -3.8,-14.12 0,-7.8 1.7,-14.12 3.8,-14.12z" }),
        react_1.default.createElement("path", { fill: "#B2B3B3", fillRule: "nonzero", d: "M779.16 1865.43c2.98,0 5.21,2.67 6.37,6.96 0.75,2.86 1.24,6.75 1.24,10.97 0,4.22 -0.49,8.11 -1.24,10.96 -1.16,4.3 -3.39,6.97 -6.37,6.97 -2.99,0 -5.21,-2.67 -6.37,-6.96 -0.75,-2.86 -1.24,-6.75 -1.24,-10.97 0,-4.22 0.49,-8.11 1.24,-10.96 1.16,-4.3 3.38,-6.97 6.37,-6.97zm0 7.83c0.24,-0.13 0.35,-0.21 0,-0.21 -0.35,0 -0.25,0.08 0,0.21zm0 20.41c0.35,0 0.24,-0.08 0,-0.21 -0.25,0.13 -0.35,0.21 0,0.21z" }),
        react_1.default.createElement("path", { fill: "#2B2A29", d: "M674.97 2103.54c1.23,0 2.24,3.68 2.24,8.23 0,4.54 -1.01,8.22 -2.24,8.22 -1.24,0 -2.25,-3.68 -2.25,-8.22 0,-4.55 1.01,-8.23 2.25,-8.23z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M674.97 2099.73c2.54,0 4.4,2.01 5.26,5.26 0.48,1.81 0.79,4.22 0.79,6.78 0,2.55 -0.31,4.97 -0.8,6.79 -0.85,3.23 -2.71,5.24 -5.25,5.24 -2.56,0 -4.37,-2 -5.25,-5.22 -0.5,-1.82 -0.81,-4.25 -0.81,-6.81 0,-2.56 0.31,-4.99 0.81,-6.82 0.88,-3.22 2.69,-5.22 5.25,-5.22z" }),
        react_1.default.createElement("path", { fill: "#2B2A29", d: "M674.97 2083.85c1.23,0 2.24,3.68 2.24,8.22 0,4.55 -1.01,8.23 -2.24,8.23 -1.24,0 -2.25,-3.68 -2.25,-8.23 0,-4.54 1.01,-8.22 2.25,-8.22z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M674.97 2080.04c2.54,0 4.4,2.01 5.26,5.24 0.48,1.83 0.79,4.24 0.79,6.79 0,2.56 -0.31,4.97 -0.8,6.78 -0.85,3.25 -2.71,5.26 -5.25,5.26 -2.56,0 -4.37,-2 -5.25,-5.22 -0.5,-1.82 -0.81,-4.26 -0.81,-6.82 0,-2.56 0.31,-4.98 0.81,-6.81 0.88,-3.22 2.69,-5.22 5.25,-5.22z" }),
        react_1.default.createElement("path", { fill: "#2B2A29", d: "M674.97 2062.41c1.23,0 2.24,3.68 2.24,8.23 0,4.54 -1.01,8.22 -2.24,8.22 -1.24,0 -2.25,-3.68 -2.25,-8.22 0,-4.55 1.01,-8.23 2.25,-8.23z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M674.97 2058.6c2.54,0 4.4,2.01 5.26,5.26 0.48,1.81 0.79,4.22 0.79,6.78 0,2.55 -0.31,4.97 -0.8,6.79 -0.85,3.23 -2.71,5.24 -5.25,5.24 -2.56,0 -4.37,-2 -5.25,-5.22 -0.5,-1.82 -0.81,-4.25 -0.81,-6.81 0,-2.56 0.31,-4.99 0.81,-6.82 0.88,-3.22 2.69,-5.22 5.25,-5.22z" }),
        react_1.default.createElement("path", { fill: "#2B2A29", d: "M877.44 2101.58c1.24,0 2.24,3.69 2.24,8.23 0,4.54 -1,8.23 -2.24,8.23 -1.24,0 -2.25,-3.69 -2.25,-8.23 0,-4.54 1.01,-8.23 2.25,-8.23z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M877.44 2097.77c2.54,0 4.4,2.01 5.26,5.24 0.48,1.83 0.79,4.25 0.79,6.8 0,2.55 -0.31,4.98 -0.8,6.8 -0.85,3.23 -2.71,5.24 -5.25,5.24 -2.56,0 -4.37,-2 -5.25,-5.22 -0.5,-1.82 -0.81,-4.26 -0.81,-6.82 0,-2.56 0.31,-4.99 0.81,-6.82 0.88,-3.22 2.69,-5.22 5.25,-5.22z" }),
        react_1.default.createElement("path", { fill: "#2B2A29", d: "M877.44 2081.89c1.24,0 2.24,3.69 2.24,8.23 0,4.54 -1,8.22 -2.24,8.22 -1.24,0 -2.25,-3.68 -2.25,-8.22 0,-4.54 1.01,-8.23 2.25,-8.23z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M877.44 2078.08c2.54,0 4.4,2.01 5.26,5.24 0.48,1.83 0.79,4.25 0.79,6.8 0,2.55 -0.31,4.98 -0.8,6.8 -0.86,3.22 -2.72,5.23 -5.25,5.23 -2.56,0 -4.37,-2 -5.25,-5.22 -0.5,-1.82 -0.81,-4.25 -0.81,-6.81 0,-2.56 0.31,-4.99 0.81,-6.82 0.88,-3.22 2.69,-5.22 5.25,-5.22z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M877.44 2060.45c1.24,0 2.24,3.69 2.24,8.23 0,4.54 -1,8.23 -2.24,8.23 -1.24,0 -2.25,-3.69 -2.25,-8.23 0,-4.54 1.01,-8.23 2.25,-8.23z" }),
        react_1.default.createElement("path", { fill: "#B2B3B3", fillRule: "nonzero", d: "M877.44 2056.64c2.54,0 4.4,2.01 5.26,5.24 0.48,1.83 0.79,4.25 0.79,6.8 0,2.55 -0.31,4.98 -0.8,6.8 -0.85,3.23 -2.71,5.24 -5.25,5.24 -2.56,0 -4.37,-2 -5.25,-5.22 -0.5,-1.82 -0.81,-4.26 -0.81,-6.82 0,-2.56 0.31,-4.99 0.81,-6.82 0.88,-3.22 2.69,-5.22 5.25,-5.22z" }),
        react_1.default.createElement("path", { fill: "#2B2A29", d: "M674.89 2045.85c3.15,0 5.71,2.55 5.71,5.7 0,3.15 -2.56,5.7 -5.71,5.7 -3.15,0 -5.7,-2.55 -5.7,-5.7 0,-3.15 2.55,-5.7 5.7,-5.7z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M674.89 2042.04c2.61,0 4.99,1.08 6.72,2.79 1.72,1.71 2.8,4.11 2.8,6.72 0,2.61 -1.08,5.01 -2.79,6.72 -1.74,1.71 -4.12,2.79 -6.73,2.79 -2.63,0 -5.01,-1.08 -6.72,-2.79 -1.71,-1.71 -2.79,-4.09 -2.79,-6.72 0,-2.61 1.08,-5.01 2.79,-6.72 1.71,-1.71 4.09,-2.79 6.72,-2.79zm1.35 8.17c-0.33,-0.33 -0.81,-0.55 -1.35,-0.55 -0.52,0 -1.01,0.22 -1.34,0.55 -0.33,0.33 -0.55,0.82 -0.55,1.34 0,0.52 0.22,1.01 0.55,1.34 0.33,0.33 0.82,0.55 1.34,0.55 0.54,0 1.02,-0.22 1.35,-0.55 0.33,-0.33 0.55,-0.82 0.55,-1.34 0,-0.52 -0.22,-1.01 -0.55,-1.34z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M878.05 2043.68c3.15,0 5.7,2.55 5.7,5.7 0,3.15 -2.55,5.7 -5.7,5.7 -3.15,0 -5.7,-2.55 -5.7,-5.7 0,-3.15 2.55,-5.7 5.7,-5.7z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M878.05 2039.87c2.61,0 5.01,1.08 6.72,2.79 1.71,1.71 2.79,4.11 2.79,6.72 0,2.63 -1.08,5.01 -2.79,6.72 -1.71,1.71 -4.11,2.79 -6.72,2.79 -2.63,0 -5.01,-1.08 -6.72,-2.79 -1.71,-1.71 -2.79,-4.09 -2.79,-6.72 0,-2.61 1.08,-5.01 2.79,-6.72 1.71,-1.71 4.09,-2.79 6.72,-2.79zm1.34 8.17c-0.33,-0.33 -0.82,-0.55 -1.34,-0.55 -0.52,0 -1.01,0.22 -1.34,0.55 -0.33,0.33 -0.55,0.82 -0.55,1.34 0,0.52 0.22,1.01 0.55,1.34 0.33,0.33 0.82,0.55 1.34,0.55 0.52,0 1.01,-0.22 1.34,-0.55 0.33,-0.33 0.55,-0.82 0.55,-1.34 0,-0.52 -0.22,-1.01 -0.55,-1.34z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M780.37 2056.57l0.01 0c52.21,0 94.92,42.71 94.92,94.92l0 78.68 -192.29 0 0 -76.24c0,-53.55 43.81,-97.36 97.36,-97.36z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M780.37 2052.76c27.15,0 51.84,11.12 69.73,29 17.89,17.9 29.01,42.59 29.01,69.73l0 82.49 -199.91 0 0 -80.05c0,-27.81 11.39,-53.12 29.72,-71.45 18.33,-18.33 43.63,-29.72 71.45,-29.72zm0.01 7.62c-25.75,0 -49.15,10.53 -66.08,27.47 -16.95,16.96 -27.48,40.36 -27.48,66.08l0 72.43 184.67 0 0 -74.87c0,-25.06 -10.26,-47.85 -26.76,-64.35 -16.5,-16.5 -39.29,-26.76 -64.35,-26.76z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M636.61 2200.95l14.07 0 0 -27.07 -9.77 0c0.18,-25.78 16.89,-46.62 37.48,-46.62 20.58,0 37.29,20.84 37.47,46.62l-11.13 0 0 27.07 150.99 0 0 -27.07 -9.77 0c0.18,-25.78 16.89,-46.62 37.48,-46.62 20.58,0 37.29,20.84 37.47,46.62l-11.13 0 0 27.07 13.66 0 0 30.42 -286.82 0 0 -30.42z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M636.61 2197.14l10.26 0 0 -19.45 -9.78 0 0.02 -3.82c0.09,-13.78 4.66,-26.3 11.94,-35.36 7.47,-9.3 17.85,-15.06 29.34,-15.06 11.49,0 21.86,5.75 29.34,15.06 7.27,9.06 11.84,21.58 11.93,35.36l0.03 3.82 -11.15 0 0 19.45 143.37 0 0 -19.45 -9.78 0 0.02 -3.82c0.09,-13.78 4.66,-26.3 11.94,-35.36 7.47,-9.3 17.85,-15.06 29.34,-15.06 11.49,0 21.86,5.75 29.34,15.06 7.27,9.06 11.84,21.58 11.93,35.36l0.03 3.82 -11.15 0 0 19.45 13.66 0 0 38.04 -294.44 0 0 -38.04 3.81 0zm14.07 7.62l-10.26 0 0 22.8 279.2 0 0 -22.8 -13.66 0 0 -34.69 10.98 0c-0.79,-10.47 -4.52,-19.85 -10.09,-26.8 -6.06,-7.54 -14.34,-12.2 -23.42,-12.2 -9.08,0 -17.37,4.67 -23.42,12.2 -5.59,6.94 -9.31,16.34 -10.1,26.8l9.62 0 0 34.69 -158.61 0 0 -34.69 10.98 0c-0.79,-10.47 -4.52,-19.85 -10.09,-26.8 -6.06,-7.54 -14.34,-12.2 -23.42,-12.2 -9.08,0 -17.37,4.67 -23.42,12.2 -5.59,6.94 -9.31,16.34 -10.1,26.8l9.62 0 0 34.69 -3.81 0z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", points: "180.3,2055.34 216.24,2040.69 252.18,2026.04 324.05,2026.04 395.93,2026.04 431.86,2040.69 467.8,2055.34 441.1,2066.22 441.1,2255.92 207.01,2255.92 207.01,2066.22 " }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "180.79,1913.71 282.46,1913.71 298.72,1900.54 327.13,1877.53 355.55,1900.54 371.81,1913.71 473.47,1913.71 473.47,1954.39 180.79,1954.39 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M180.79 1909.9l100.33 0 46.01 -37.27 46.02 37.27 104.13 0 0 48.3 -300.3 0 0 -48.3 3.81 0zm101.67 7.62l-97.86 0 0 33.06 285.06 0 0 -33.06 -99.18 0 -43.35 -35.1 -43.33 35.1 -1.34 0z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "180.79,1948.35 282.46,1948.35 298.72,1935.18 327.13,1912.16 355.55,1935.18 371.81,1948.35 473.47,1948.35 473.47,1989.02 180.79,1989.02 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M180.79 1944.54l100.33 0 46.01 -37.28 46.02 37.28 104.13 0 0 48.29 -300.3 0 0 -48.29 3.81 0zm101.67 7.62l-97.86 0 0 33.05 285.06 0 0 -33.05 -99.18 0 -43.35 -35.11 -43.33 35.11 -1.34 0z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "180.79,1984.07 282.46,1984.07 298.72,1969.84 327.13,1944.99 355.55,1969.84 371.81,1984.07 473.47,1984.07 473.47,2028.01 372.39,2028.01 370.98,2026.7 327.41,1986.11 283.85,2026.7 282.45,2028.01 180.79,2028.01 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M180.79 1980.26l100.26 0 46.08 -40.32 46.09 40.32 104.06 0 0 51.56 -106.37 0 -43.5 -40.52 -43.48 40.52 -106.95 0 0 -51.56 3.81 0zm101.67 7.62l-97.86 0 0 36.32 96.37 0 46.44 -43.29 46.46 43.29 95.79 0 0 -36.32 -99.26 0 -43.27 -37.84 -43.25 37.84 -1.42 0z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "249.78,1742.55 260.65,1826.54 271.53,1910.53 249.78,1910.53 228.02,1910.53 238.9,1826.54 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M253.55 1742.07l22.31 172.27 -52.16 0 26.09 -201.39 3.76 29.12zm3.33 84.95l-7.1 -54.87 -17.43 134.57 34.85 0 -10.32 -79.7z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "398.2,1742.55 409.08,1826.54 419.95,1910.53 398.2,1910.53 376.44,1910.53 387.32,1826.54 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M401.97 1742.07l22.31 172.27 -52.16 0 26.08 -201.38 3.77 29.11zm3.34 84.95l-7.11 -54.89 -17.43 134.59 34.85 0 -10.31 -79.7z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "452.19,1910.12 456.1,1937.24 460.02,1964.36 452.19,1964.36 444.37,1964.36 448.28,1937.24 " }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M455.96 1909.58l8.46 58.59 -24.44 0 12.21 -84.74 3.77 26.15zm-3.63 28.2l-0.14 -0.97 -3.42 23.74 6.85 0 -3.29 -22.77z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "481.42,1890.19 485.34,1917.31 489.25,1944.44 481.42,1944.44 473.6,1944.44 477.51,1917.31 " }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M485.19 1889.65l8.46 58.6 -24.44 0 12.21 -84.72 3.77 26.12zm-3.62 28.2l-0.15 -1 -3.42 23.78 6.85 0 -3.28 -22.78z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "430.43,1825.27 439.41,1887.51 448.39,1949.76 430.43,1949.76 412.48,1949.76 421.45,1887.51 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M434.2 1824.73l18.59 128.84 -44.7 0 22.34 -154.97 3.77 26.13zm1.44 63.32l-5.21 -36.11 -13.55 94.01 27.11 0 -8.35 -57.9z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "222.2,1840.08 231.18,1902.33 240.16,1964.57 222.2,1964.57 204.24,1964.57 213.22,1902.33 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M225.97 1839.54l18.59 128.84 -44.71 0 22.35 -154.98 3.77 26.14zm1.44 63.33l-5.21 -36.12 -13.56 94.01 27.12 0 -8.35 -57.89z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "176.04,1895.14 179.95,1922.26 183.86,1949.39 176.04,1949.39 168.21,1949.39 172.12,1922.26 " }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M179.81 1894.6l8.45 58.6 -24.44 0 12.23 -84.72 3.76 26.12zm-3.63 28.2l-0.14 -1 -3.43 23.78 6.85 0 -3.28 -22.78z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "204.81,1922.06 208.72,1949.18 212.63,1976.31 204.81,1976.31 196.98,1976.31 200.89,1949.18 " }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M208.58 1921.52l8.45 58.6 -24.44 0 12.23 -84.72 3.76 26.12zm-3.63 28.2l-0.14 -1 -3.43 23.78 6.85 0 -3.28 -22.78z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M398.2 1734.38c4.35,0 7.87,3.53 7.87,7.88 0,4.35 -3.52,7.88 -7.87,7.88 -4.35,0 -7.88,-3.53 -7.88,-7.88 0,-4.35 3.53,-7.88 7.88,-7.88z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M398.2 1730.57c3.2,0 6.13,1.32 8.24,3.43 2.12,2.12 3.44,5.05 3.44,8.26 0,3.21 -1.32,6.15 -3.43,8.25 -2.12,2.12 -5.05,3.44 -8.25,3.44 -3.21,0 -6.15,-1.32 -8.25,-3.43 -2.12,-2.11 -3.44,-5.05 -3.44,-8.26 0,-3.21 1.31,-6.14 3.43,-8.26 2.1,-2.11 5.04,-3.43 8.26,-3.43zm2.87 8.8c-0.71,-0.72 -1.75,-1.18 -2.87,-1.18 -1.13,0 -2.16,0.45 -2.88,1.18 -0.73,0.74 -1.19,1.77 -1.19,2.89 0,1.13 0.45,2.16 1.18,2.88 0.73,0.74 1.76,1.19 2.89,1.19 1.12,0 2.16,-0.46 2.87,-1.18 0.74,-0.73 1.19,-1.76 1.19,-2.89 0,-1.13 -0.46,-2.17 -1.19,-2.89z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M249.77 1740.38c4.36,0 7.88,3.52 7.88,7.87 0,4.35 -3.52,7.88 -7.88,7.88 -4.35,0 -7.87,-3.53 -7.87,-7.88 0,-4.35 3.52,-7.87 7.87,-7.87z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M249.77 1736.57c3.22,0 6.16,1.32 8.26,3.42 2.12,2.12 3.43,5.04 3.43,8.26 0,3.21 -1.32,6.15 -3.43,8.25 -2.12,2.12 -5.05,3.44 -8.26,3.44 -3.2,0 -6.14,-1.32 -8.24,-3.43 -2.12,-2.11 -3.44,-5.05 -3.44,-8.26 0,-3.2 1.32,-6.13 3.42,-8.25 2.13,-2.11 5.05,-3.43 8.26,-3.43zm2.88 8.8c-0.72,-0.72 -1.75,-1.18 -2.88,-1.18 -1.14,0 -2.16,0.46 -2.88,1.18 -0.72,0.72 -1.18,1.76 -1.18,2.88 0,1.13 0.45,2.16 1.18,2.88 0.73,0.74 1.76,1.19 2.88,1.19 1.13,0 2.17,-0.46 2.88,-1.18 0.74,-0.73 1.19,-1.76 1.19,-2.89 0,-1.13 -0.46,-2.15 -1.19,-2.88z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M430.44 1825.93c4.35,0 7.87,3.53 7.87,7.88 0,4.35 -3.52,7.87 -7.87,7.87 -4.36,0 -7.88,-3.52 -7.88,-7.87 0,-4.35 3.52,-7.88 7.88,-7.88z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M430.44 1822.12c3.2,0 6.13,1.32 8.24,3.43 2.12,2.12 3.44,5.05 3.44,8.26 0,3.21 -1.32,6.13 -3.42,8.25 -2.13,2.11 -5.06,3.43 -8.26,3.43 -3.22,0 -6.16,-1.32 -8.26,-3.42 -2.12,-2.12 -3.43,-5.04 -3.43,-8.26 0,-3.21 1.32,-6.14 3.43,-8.25 2.11,-2.12 5.05,-3.44 8.26,-3.44zm2.87 8.8c-0.71,-0.72 -1.75,-1.18 -2.87,-1.18 -1.13,0 -2.16,0.45 -2.88,1.18 -0.73,0.72 -1.19,1.76 -1.19,2.89 0,1.13 0.46,2.15 1.19,2.88 0.72,0.72 1.75,1.18 2.88,1.18 1.12,0 2.16,-0.46 2.88,-1.18 0.72,-0.72 1.18,-1.74 1.18,-2.88 0,-1.13 -0.46,-2.17 -1.19,-2.89z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M222.2 1838.04c4.35,0 7.88,3.52 7.88,7.87 0,4.35 -3.53,7.88 -7.88,7.88 -4.35,0 -7.87,-3.53 -7.87,-7.88 0,-4.35 3.52,-7.87 7.87,-7.87z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M222.2 1834.23c3.21,0 6.14,1.32 8.25,3.43 2.12,2.12 3.44,5.05 3.44,8.25 0,3.22 -1.32,6.16 -3.44,8.25 -2.11,2.13 -5.04,3.44 -8.25,3.44 -3.2,0 -6.14,-1.32 -8.24,-3.43 -2.12,-2.11 -3.44,-5.05 -3.44,-8.26 0,-3.2 1.32,-6.13 3.42,-8.25 2.13,-2.11 5.05,-3.43 8.26,-3.43zm2.88 8.8c-0.71,-0.72 -1.75,-1.18 -2.88,-1.18 -1.14,0 -2.16,0.46 -2.88,1.18 -0.72,0.72 -1.18,1.76 -1.18,2.88 0,1.13 0.45,2.16 1.18,2.88 0.73,0.74 1.76,1.19 2.88,1.19 1.12,0 2.15,-0.46 2.88,-1.19 0.74,-0.72 1.19,-1.75 1.19,-2.88 0,-1.12 -0.46,-2.16 -1.19,-2.88z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M481.42 1882.31c4.36,0 7.88,3.53 7.88,7.88 0,4.35 -3.52,7.88 -7.88,7.88 -4.35,0 -7.87,-3.53 -7.87,-7.88 0,-4.35 3.52,-7.88 7.87,-7.88z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M481.42 1878.5c3.21,0 6.14,1.32 8.25,3.43 2.12,2.12 3.44,5.05 3.44,8.26 0,3.21 -1.32,6.15 -3.43,8.25 -2.12,2.12 -5.05,3.44 -8.26,3.44 -3.2,0 -6.14,-1.32 -8.24,-3.43 -2.12,-2.11 -3.44,-5.05 -3.44,-8.26 0,-3.21 1.32,-6.14 3.43,-8.25 2.11,-2.12 5.05,-3.44 8.25,-3.44zm2.88 8.8c-0.71,-0.72 -1.75,-1.18 -2.88,-1.18 -1.12,0 -2.15,0.45 -2.87,1.18 -0.73,0.72 -1.19,1.76 -1.19,2.89 0,1.13 0.45,2.16 1.18,2.88 0.73,0.74 1.76,1.19 2.88,1.19 1.13,0 2.17,-0.46 2.88,-1.18 0.74,-0.73 1.19,-1.76 1.19,-2.89 0,-1.13 -0.46,-2.17 -1.19,-2.89z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M176.04 1887.26c4.35,0 7.87,3.53 7.87,7.88 0,4.35 -3.52,7.88 -7.87,7.88 -4.35,0 -7.88,-3.53 -7.88,-7.88 0,-4.35 3.53,-7.88 7.88,-7.88z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", fillRule: "nonzero", d: "M176.04 1883.45c3.2,0 6.13,1.32 8.24,3.43 2.12,2.12 3.44,5.05 3.44,8.26 0,3.21 -1.32,6.15 -3.43,8.25 -2.12,2.12 -5.05,3.44 -8.25,3.44 -3.21,0 -6.15,-1.32 -8.25,-3.43 -2.12,-2.11 -3.44,-5.05 -3.44,-8.26 0,-3.21 1.31,-6.14 3.43,-8.26 2.1,-2.11 5.04,-3.43 8.26,-3.43zm2.87 8.8c-0.71,-0.72 -1.75,-1.18 -2.87,-1.18 -1.13,0 -2.16,0.45 -2.88,1.18 -0.73,0.74 -1.19,1.77 -1.19,2.89 0,1.13 0.45,2.16 1.18,2.88 0.73,0.74 1.76,1.19 2.89,1.19 1.12,0 2.16,-0.46 2.87,-1.18 0.74,-0.73 1.19,-1.76 1.19,-2.89 0,-1.13 -0.46,-2.17 -1.19,-2.89z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", fillRule: "nonzero", points: "252.49,1687.44 254.66,1817.81 247.06,1817.93 244.89,1687.56 " }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", fillRule: "nonzero", points: "400.91,1689.55 403.08,1827.6 395.48,1827.72 393.31,1689.67 " }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", fillRule: "nonzero", points: "433.15,1757.99 435.32,1896.04 427.72,1896.16 425.55,1758.11 " }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", fillRule: "nonzero", points: "224.92,1762.87 227.09,1900.92 219.49,1901.04 217.32,1762.99 " }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "324.88,1620.83 353.29,1630.33 381.69,1639.84 370.84,1655.22 359.99,1670.6 324.88,1670.6 289.78,1670.6 278.93,1655.22 268.08,1639.84 296.48,1630.33 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M326.09 1617.23l61.66 20.64 -25.79 36.54 -74.14 0 -25.79 -36.54 62.85 -21.04 1.21 0.4zm25.99 16.7l-27.2 -9.1 -50.75 16.99 17.62 24.97 66.27 0 17.62 -24.97 -23.56 -7.89z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M324.89 1279.36c10.35,0 18.74,8.39 18.74,18.74 0,10.35 -8.39,18.74 -18.74,18.74 -10.36,0 -18.74,-8.39 -18.74,-18.74 0,-10.35 8.38,-18.74 18.74,-18.74z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M324.89 1275.55c6.21,0 11.86,2.53 15.94,6.61 4.08,4.08 6.61,9.72 6.61,15.94 0,6.21 -2.53,11.86 -6.61,15.94 -4.08,4.08 -9.73,6.61 -15.94,6.61 -6.22,0 -11.86,-2.53 -15.94,-6.61 -4.08,-4.08 -6.61,-9.72 -6.61,-15.94 0,-6.22 2.53,-11.86 6.61,-15.94 4.08,-4.08 9.72,-6.61 15.94,-6.61zm10.56 11.99c-2.69,-2.69 -6.44,-4.37 -10.56,-4.37 -4.13,0 -7.87,1.68 -10.56,4.37 -2.69,2.69 -4.37,6.43 -4.37,10.56 0,4.13 1.68,7.87 4.37,10.56 2.69,2.69 6.43,4.37 10.56,4.37 4.12,0 7.87,-1.68 10.56,-4.37 2.69,-2.69 4.37,-6.44 4.37,-10.56 0,-4.13 -1.68,-7.87 -4.37,-10.56z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M327.7 2069.87l0 0c9.18,0 16.68,7.5 16.68,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.66,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M327.7 2066.06c5.62,0 10.76,2.31 14.46,6.03 3.71,3.69 6.03,8.82 6.03,14.45l0 57.4 -40.96 0 0 -57.4c0,-5.62 2.31,-10.76 6.01,-14.46 3.7,-3.7 8.84,-6.02 14.46,-6.02zm9.09 11.39c-2.31,-2.32 -5.54,-3.77 -9.09,-3.77 -3.53,0 -6.76,1.46 -9.08,3.78 -2.32,2.32 -3.77,5.55 -3.77,9.08l0 49.78 25.72 0 0 -49.78c0,-3.54 -1.46,-6.76 -3.78,-9.09z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M327.7 2154.24l0 0c9.18,0 16.68,7.5 16.68,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.66,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M327.7 2150.43c5.62,0 10.76,2.31 14.46,6.03 3.71,3.69 6.03,8.82 6.03,14.45l0 57.4 -40.96 0 0 -57.4c0,-5.62 2.31,-10.76 6.01,-14.46 3.7,-3.7 8.84,-6.02 14.46,-6.02zm9.09 11.39c-2.31,-2.32 -5.54,-3.77 -9.09,-3.77 -3.53,0 -6.76,1.46 -9.08,3.78 -2.32,2.32 -3.77,5.55 -3.77,9.08l0 49.78 25.72 0 0 -49.78c0,-3.54 -1.46,-6.76 -3.78,-9.09z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M327.7 2298.21l0 0c9.18,0 16.68,7.5 16.68,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.66,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M327.7 2294.4c5.62,0 10.76,2.31 14.46,6.03 3.71,3.69 6.03,8.82 6.03,14.45l0 57.4 -40.96 0 0 -57.4c0,-5.62 2.31,-10.76 6.01,-14.46 3.7,-3.7 8.84,-6.02 14.46,-6.02zm9.09 11.39c-2.31,-2.32 -5.54,-3.77 -9.09,-3.77 -3.53,0 -6.76,1.46 -9.08,3.78 -2.32,2.32 -3.77,5.55 -3.77,9.08l0 49.78 25.72 0 0 -49.78c0,-3.54 -1.46,-6.76 -3.78,-9.09z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M327.7 2412.15l0 0c9.18,0 16.68,7.5 16.68,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.66,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M327.7 2408.34c5.62,0 10.76,2.31 14.46,6.03 3.71,3.69 6.03,8.82 6.03,14.45l0 57.4 -40.96 0 0 -57.4c0,-5.62 2.31,-10.76 6.01,-14.46 3.7,-3.7 8.84,-6.02 14.46,-6.02zm9.09 11.39c-2.31,-2.32 -5.54,-3.77 -9.09,-3.77 -3.53,0 -6.76,1.46 -9.08,3.78 -2.32,2.32 -3.77,5.55 -3.77,9.08l0 49.78 25.72 0 0 -49.78c0,-3.54 -1.46,-6.76 -3.78,-9.09z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", d: "M327.7 2521.65l0 0c9.18,0 16.68,7.5 16.68,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.66,-16.67z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M327.7 2638.05l0 0c9.18,0 16.68,7.5 16.68,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.66,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M327.7 2634.24c5.62,0 10.76,2.31 14.46,6.03 3.71,3.69 6.03,8.82 6.03,14.45l0 57.4 -40.96 0 0 -57.4c0,-5.62 2.31,-10.76 6.01,-14.46 3.7,-3.7 8.84,-6.02 14.46,-6.02zm9.09 11.39c-2.31,-2.32 -5.54,-3.77 -9.09,-3.77 -3.53,0 -6.76,1.46 -9.08,3.78 -2.32,2.32 -3.77,5.55 -3.77,9.08l0 49.78 25.72 0 0 -49.78c0,-3.54 -1.46,-6.76 -3.78,-9.09z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M327.7 2753.99l0 0c9.18,0 16.68,7.5 16.68,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.66,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M327.7 2750.18c5.62,0 10.76,2.31 14.46,6.03 3.71,3.69 6.03,8.82 6.03,14.45l0 57.4 -40.96 0 0 -57.4c0,-5.62 2.31,-10.76 6.01,-14.46 3.7,-3.7 8.84,-6.02 14.46,-6.02zm9.09 11.39c-2.31,-2.32 -5.54,-3.77 -9.09,-3.77 -3.53,0 -6.76,1.46 -9.08,3.78 -2.32,2.32 -3.77,5.55 -3.77,9.08l0 49.78 25.72 0 0 -49.78c0,-3.54 -1.46,-6.76 -3.78,-9.09z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M327.7 2858.07l0 0c9.18,0 16.68,7.5 16.68,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.66,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M327.7 2854.26c5.62,0 10.76,2.31 14.46,6.03 3.71,3.69 6.03,8.82 6.03,14.45l0 57.4 -40.96 0 0 -57.4c0,-5.62 2.31,-10.76 6.01,-14.46 3.7,-3.7 8.84,-6.02 14.46,-6.02zm9.09 11.39c-2.31,-2.32 -5.54,-3.77 -9.09,-3.77 -3.53,0 -6.76,1.46 -9.08,3.78 -2.32,2.32 -3.77,5.55 -3.77,9.08l0 49.78 25.72 0 0 -49.78c0,-3.54 -1.46,-6.76 -3.78,-9.09z" }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "541.08,2694.75 568.48,2694.75 618.73,2745 618.73,2957.76 488.36,2957.76 488.36,2747.48 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M541.08 2690.94l28.97 0 52.49 52.49 0 218.14 -137.99 0 0 -215.66 54.96 -54.97 1.57 0zm25.83 7.62l-24.26 0 -50.48 50.49 0 204.9 122.75 0 0 -207.38 -48.01 -48.01z" }),
        react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", x1: "261.39", y1: "2046.16", x2: "261.39", y2: "2234.79" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "389.04,2041.81 389.04,2230.45 381.42,2230.45 381.42,2041.81 " }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.26 2298.21l0 0c9.17,0 16.67,7.5 16.67,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.67,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M779.26 2294.4c5.62,0 10.76,2.32 14.46,6.02 3.7,3.7 6.02,8.84 6.02,14.46l0 57.4 -40.96 0 0 -57.4c0,-5.61 2.31,-10.75 6.03,-14.45 3.69,-3.71 8.82,-6.03 14.45,-6.03zm9.08 11.4c-2.32,-2.32 -5.55,-3.78 -9.08,-3.78 -3.54,0 -6.76,1.46 -9.08,3.78 -2.33,2.31 -3.78,5.54 -3.78,9.08l0 49.78 25.72 0 0 -49.78c0,-3.53 -1.46,-6.76 -3.78,-9.08z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.26 2412.15l0 0c9.17,0 16.67,7.5 16.67,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.67,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M779.26 2408.34c5.62,0 10.76,2.32 14.46,6.02 3.7,3.7 6.02,8.84 6.02,14.46l0 57.4 -40.96 0 0 -57.4c0,-5.61 2.31,-10.75 6.03,-14.45 3.69,-3.71 8.82,-6.03 14.45,-6.03zm9.08 11.4c-2.32,-2.32 -5.55,-3.78 -9.08,-3.78 -3.54,0 -6.76,1.46 -9.08,3.78 -2.33,2.31 -3.78,5.54 -3.78,9.08l0 49.78 25.72 0 0 -49.78c0,-3.53 -1.46,-6.76 -3.78,-9.08z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.26 2521.65l0 0c9.17,0 16.67,7.5 16.67,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.67,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M779.26 2517.84c5.62,0 10.76,2.32 14.46,6.02 3.7,3.7 6.02,8.84 6.02,14.46l0 57.4 -40.96 0 0 -57.4c0,-5.61 2.31,-10.75 6.03,-14.45 3.69,-3.71 8.82,-6.03 14.45,-6.03zm9.08 11.4c-2.32,-2.32 -5.55,-3.78 -9.08,-3.78 -3.54,0 -6.76,1.46 -9.08,3.78 -2.33,2.31 -3.78,5.54 -3.78,9.08l0 49.78 25.72 0 0 -49.78c0,-3.53 -1.46,-6.76 -3.78,-9.08z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.26 2638.05l0 0c9.17,0 16.67,7.5 16.67,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.67,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M779.26 2634.24c5.62,0 10.76,2.32 14.46,6.02 3.7,3.7 6.02,8.84 6.02,14.46l0 57.4 -40.96 0 0 -57.4c0,-5.61 2.31,-10.75 6.03,-14.45 3.69,-3.71 8.82,-6.03 14.45,-6.03zm9.08 11.4c-2.32,-2.32 -5.55,-3.78 -9.08,-3.78 -3.54,0 -6.76,1.46 -9.08,3.78 -2.33,2.31 -3.78,5.54 -3.78,9.08l0 49.78 25.72 0 0 -49.78c0,-3.53 -1.46,-6.76 -3.78,-9.08z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", d: "M779.26 2753.99l0 0c9.17,0 16.67,7.5 16.67,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.67,-16.67z" }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M779.26 2750.18c5.62,0 10.76,2.32 14.46,6.02 3.7,3.7 6.02,8.84 6.02,14.46l0 57.4 -40.96 0 0 -57.4c0,-5.61 2.31,-10.75 6.03,-14.45 3.69,-3.71 8.82,-6.03 14.45,-6.03zm9.08 11.4c-2.32,-2.32 -5.55,-3.78 -9.08,-3.78 -3.54,0 -6.76,1.46 -9.08,3.78 -2.33,2.31 -3.78,5.54 -3.78,9.08l0 49.78 25.72 0 0 -49.78c0,-3.53 -1.46,-6.76 -3.78,-9.08z" }),
        react_1.default.createElement("path", { fill: "#9D9E9E", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", d: "M779.26 2858.07l0 0c9.17,0 16.67,7.5 16.67,16.67l0 53.59 -33.34 0 0 -53.59c0,-9.17 7.5,-16.67 16.67,-16.67z" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "213.63,2382.22 435.25,2382.22 435.25,2389.84 213.63,2389.84 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "213.63,2495.2 435.25,2495.2 435.25,2502.82 213.63,2502.82 " }),
        react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", x1: "217.97", y1: "2611.99", x2: "439.59", y2: "2611.99" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "215.8,2727.68 437.42,2727.68 437.42,2735.3 215.8,2735.3 " }),
        react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", x1: "215.8", y1: "2844.48", x2: "437.42", y2: "2844.48" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "224.49,2960.17 446.11,2960.17 446.11,2967.79 224.49,2967.79 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "669.91,2382.22 891.53,2382.22 891.53,2389.84 669.91,2389.84 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "669.91,2495.2 891.53,2495.2 891.53,2502.82 669.91,2502.82 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "674.26,2608.18 895.88,2608.18 895.88,2615.8 674.26,2615.8 " }),
        react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "7.62", strokeMiterlimit: "22.9256", x1: "672.08", y1: "2731.49", x2: "893.7", y2: "2731.49" }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "672.08,2840.67 893.7,2840.67 893.7,2848.29 672.08,2848.29 " }),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", fillRule: "nonzero", points: "680.77,2960.17 902.39,2960.17 902.39,2967.79 680.77,2967.79 " }),
        react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "552.07,2386.17 582.62,2458.93 613.18,2531.69 552.07,2531.69 490.96,2531.69 521.52,2458.93 " }),
        react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M555.58 2384.7l63.33 150.8 -133.67 0 66.83 -159.16 3.51 8.36zm23.53 75.7l-27.04 -64.4 -55.38 131.88 110.76 0 -28.34 -67.48z" }),
        react_1.default.createElement("line", { fill: "none", stroke: "#9D9E9E", strokeWidth: "7.62", strokeMiterlimit: "22.9256", x1: "551.22", y1: "2302.39", x2: "551.22", y2: "2390.59" }),
        react_1.default.createElement("line", { fill: "none", stroke: "#9D9E9E", strokeWidth: "7.62", strokeMiterlimit: "22.9256", x1: "522.55", y1: "2329.95", x2: "579.88", y2: "2329.95" }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { fill: "#9D9E9E", d: "M1618.83 2474.69l-189.6 200.3 135.85 237.4 104.38 182.42 76.74 -137.11 122.56 -218.97 -249.93 -264.04zm853.95 915.72l12.86 0 -31.45 -33.22 18.59 33.22z" }),
            react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M1618.82 2480.97l-184.23 194.65 234.83 410.38 194.01 -346.63 -244.61 -258.4zm-192.73 191.05l192.73 -203.62c85.01,89.95 169.99,180.01 255.29,269.67 -68.33,121.78 -136.4,243.7 -204.6,365.55 -81.97,-143.01 -164.14,-285.99 -245.63,-429.26l2.21 -2.34zm1049.24 714.05l0.25 0 -0.62 -0.66 0.37 0.66zm10.31 8.68l-15.4 0 -36.82 -65.79 62.28 65.79 -10.06 0z" }),
            react_1.default.createElement("path", { fill: "#FEFEFE", d: "M1618.83 2474.69l-126.76 133.91 38.94 47.39 42.48 -62.32 65.16 116.14 33.99 -84.98c0,0 59.49,65.15 67.99,-8.5 0.45,-3.9 0.75,-7.89 0.95,-11.96l-122.75 -129.68z" }),
            react_1.default.createElement("path", { fill: "#2B2A29", fillRule: "nonzero", d: "M1618.82 2480.97l-120.99 127.83 32.85 39.98 43.18 -63.34 64.14 114.34 33.13 -82.83 4.65 4.89c0.14,0.16 53.15,58.14 60.54,-6l0.84 -9.86 -118.34 -125.01zm-129.88 124.66l129.88 -137.23 127.17 134.34 -0.47 8 -0.59 6.09c-8.04,69.73 -55.49,30.38 -70.72,15.74l-34.9 87.27 -66.18 -117.95 -41.8 61.31 -45.02 -54.8 2.63 -2.77z" }),
            react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "1988.4,2524.99 1746.2,2957.7 1669.46,3094.81 1838.61,3390.41 1988.4,3390.41 2472.78,3390.41 2230.59,2957.7 " }),
            react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M1988.39 2533.87l-313.94 560.91 166.68 291.29 624.26 0 -477 -852.2zm-245.98 421.71l245.98 -439.48c163.93,292.88 327.99,585.69 491.79,878.65l-644.08 0c-57.43,-99.8 -114.67,-199.85 -171.62,-299.92l77.93 -139.25z" }),
            react_1.default.createElement("polygon", { fill: "#FEFEFE", points: "1975.26,2548.45 1881.35,2716.23 1924.74,2846.42 2004.06,2750.11 2207.11,2915.75 1989.86,2527.6 " }),
            react_1.default.createElement("path", { fill: "#2B2A29", fillRule: "nonzero", d: "M1979.02 2550.61l-92.96 166.08 40.32 120.94 77.08 -93.61 188.75 153.99 -202.76 -362.27 -10.43 14.87zm-101.46 163.5c36.54,-65.27 69.94,-133.59 112.73,-194.64 77.11,138.08 154.45,276.04 231.74,414.03l-217.37 -177.32 -81.54 99.01c-15.54,-46.44 -31.19,-92.9 -46.48,-139.43l0.92 -1.65z" }),
            react_1.default.createElement("polygon", { fill: "#9D9E9E", points: "1291.55,2434.38 1018.02,2912.39 744.49,3390.41 1291.55,3390.41 1838.61,3390.41 1565.08,2912.39 " }),
            react_1.default.createElement("path", { fill: "#FEFEFE", fillRule: "nonzero", d: "M1291.55 2443.11l-539.58 942.96 1079.16 0 -539.58 -942.96zm-277.3 467.13l277.3 -484.61c184.75,323.09 369.39,646.27 554.56,969.12l-1109.11 0 277.25 -484.51z" }),
            react_1.default.createElement("polygon", { fill: "#FEFEFE", points: "1291.55,2434.38 1142.53,2694.8 1182.85,2737.81 1239.51,2652.82 1375.48,2834.12 1395.3,2717.98 1480.28,2771.8 1482.33,2767.78 " }),
            react_1.default.createElement("path", { fill: "#2B2A29", fillRule: "nonzero", d: "M1291.55 2443.11l-143.66 251.07 34.39 36.69 57.02 -85.54 133.59 178.14 19.24 -112.64 82.53 52.27 -183.11 -319.99zm-152.78 249.54l152.79 -267.02c65.08,114.07 130.23,228.18 195.7,342.02l-5.27 10.35 -83.51 -52.88 -20.42 119.64 -138.34 -184.45 -56.28 84.44 -46.25 -49.33 1.58 -2.77z" })),
        react_1.default.createElement("g", null,
            react_1.default.createElement("path", { fill: "#9D9E9E", fillOpacity: "0.639216", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", strokeOpacity: "0.639216", d: "M5104.44 3336.71c0,0 -88.44,-62.05 -153.82,-134.15 -37.55,-41.42 -67.51,-86.16 -68.7,-124.37 52.36,-127.63 497.4,-255.23 968.61,-238.88 471.21,16.36 769,127.61 854.08,196.33 134.2,108.41 -32.02,261.08 -130.89,304.33 0,0 101.44,-3.27 140.71,49.09 -160.35,3.27 -703.56,-85.08 -1724.52,16.36 -3.27,-71.99 114.53,-68.71 114.53,-68.71z" }),
            react_1.default.createElement("path", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", d: "M5104.44 3336.71c0,0 647.38,-148.21 1469.28,3.26" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "4933.2", y1: "3039.85", x2: "4967.57", y2: "3079.11" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "5015.01", y1: "2995.67", x2: "5042.82", y2: "3038.21" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "5111.55", y1: "2958.03", x2: "5129.54", y2: "3012.03" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "5232.62", y1: "2925.31", x2: "5248.99", y2: "2980.94" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "5358.6", y1: "2895.86", x2: "5368.42", y2: "2956.4" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "5507.5", y1: "2872.95", x2: "5515.67", y2: "2935.13" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "5677.66", y1: "2856.59", x2: "5680.93", y2: "2917.13" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "5838.01", y1: "2853.32", x2: "5836.37", y2: "2907.32" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "5977.08", y1: "2859.86", x2: "5967.27", y2: "2920.41" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "6094.88", y1: "2871.32", x2: "6075.25", y2: "2931.85" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "6211.05", y1: "2890.95", x2: "6196.33", y2: "2949.85" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "6374.67", y1: "2925.31", x2: "6358.3", y2: "2982.58" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "6531.74", y1: "2977.67", x2: "6492.47", y2: "3021.85" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "6646.27", y1: "3026.76", x2: "6607", y2: "3070.94" }),
            react_1.default.createElement("line", { fill: "none", stroke: "#FEFEFE", strokeWidth: "10", strokeMiterlimit: "22.9256", x1: "6722.71", y1: "3105.96", x2: "6676.56", y2: "3127.52" })),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", points: "991.75,3050.04 1031.67,3124.5 1071.59,3198.96 1018.37,3198.96 1031.67,3223.78 1071.59,3298.24 1002.6,3298.24 1003.01,3301.5 1014.27,3391.91 991.75,3391.91 969.23,3391.91 980.49,3301.5 980.9,3298.24 911.91,3298.24 951.83,3223.78 965.14,3198.96 911.91,3198.96 951.83,3124.5 " }),
        react_1.default.createElement("path", { fill: "#2B2A29", fillRule: "nonzero", d: "M996.15 3047.7l83.77 156.27 -53.23 0 53.23 99.26 -71.65 0 11.66 93.68 -56.35 0 11.66 -93.68 -71.64 0 53.21 -99.26 -53.21 0 88.17 -164.46 4.38 8.19zm31.13 79.14l-35.52 -66.27 -71.52 133.4 53.22 0 -53.22 99.26 66.34 0c-4.05,31.2 -7.81,62.46 -11.69,93.68l33.72 0c-3.88,-31.22 -7.68,-62.47 -11.67,-93.68l66.32 0 -53.21 -99.26 53.22 0 -35.99 -67.13z" }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("polygon", { fill: "#FEFEFE", points: "802.71,3045.76 842.63,3120.22 882.55,3194.68 829.32,3194.68 842.63,3219.49 882.55,3293.96 813.56,3293.96 813.97,3297.21 825.23,3387.62 802.71,3387.62 780.19,3387.62 791.45,3297.21 791.86,3293.96 722.87,3293.96 762.79,3219.49 776.1,3194.68 722.87,3194.68 762.79,3120.22 " }),
            react_1.default.createElement("path", { fill: "#2B2A29", fillRule: "nonzero", d: "M806.48 3043.74l83.21 155.23 -53.22 0 53.22 99.27 -71.27 0 11.66 93.67 -54.73 0 11.65 -93.67 -71.26 0 53.21 -99.27 -53.21 0 86.98 -162.25 3.76 7.02zm32.39 78.48l-36.16 -67.44 -72.7 135.61 53.23 0 -53.23 99.28 66.71 0c-3.99,31.2 -7.79,62.44 -11.67,93.66l35.32 0 -11.66 -93.66 66.7 0 -53.22 -99.28 53.22 0 -36.54 -68.17z" })),
        react_1.default.createElement("polygon", { fill: "#FEFEFE", points: "604.84,3050.04 644.75,3124.5 684.67,3198.96 631.45,3198.96 644.75,3223.78 684.67,3298.24 615.68,3298.24 616.09,3301.5 627.35,3391.91 604.84,3391.91 582.32,3391.91 593.58,3301.5 593.99,3298.24 525,3298.24 564.92,3223.78 578.22,3198.96 525,3198.96 564.92,3124.5 " }),
        react_1.default.createElement("path", { fill: "#2B2A29", fillRule: "nonzero", d: "M609.23 3047.7l83.78 156.27 -53.24 0 53.24 99.27 -71.67 0 11.67 93.67 -56.34 0 11.66 -93.67 -71.66 0 53.21 -99.27 -53.21 0 88.18 -164.46 4.38 8.19zm31.13 79.15l-35.52 -66.28 -71.52 133.4 53.24 0 -53.24 99.27 66.33 0c-3.99,31.21 -7.79,62.45 -11.67,93.67l33.71 0 -11.66 -93.67 66.32 0 -53.22 -99.27 53.22 0 -35.99 -67.12z" }))));
const blink = (0, styled_components_1.keyframes) `
 0% {
    filter: blur(5px) brightness(1);
  }

  3% {
    filter: blur(5px) brightness(0);
  }

  6% {
    filter: blur(5px) brightness(0);
  }

  7% {
    filter: blur(5px) brightness(1);
  }

  8% {
    filter: blur(5px) brightness(0);
  }

  9% {
    filter: blur(5px) brightness(1);
  }

  10% {
    filter: blur(5px) brightness(0);
  }

  20% {
    filter: blur(5px) brightness(1);
  }

  50% {
    filter: blur(5px) brightness(1);
  }

  99% {
    filter: blur(5px) brightness(0);
  }

  100% {
    filter: blur(5px) brightness(1);
  }
`;
const StyledSvg = styled_components_1.default.svg `
  & #windows {
    animation: ${blink} 10s linear infinite alternate;
    animation-delay: 5s;
    filter: blur(0px) brightness(1);
  }
`;
exports["default"] = YourPlaceInYourPoint;


/***/ }),

/***/ 29205:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(67294));
const Banner_1 = __importDefault(__webpack_require__(77308));
const YourPlaceInYourPoint_1 = __importDefault(__webpack_require__(30624));
const BannerWithPicture = ({ children, ...props }) => (react_1.default.createElement(Banner_1.default, { background: react_1.default.createElement(YourPlaceInYourPoint_1.default, null), ...props }, children));
exports["default"] = BannerWithPicture;


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
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __importStar(__webpack_require__(91288));
const styled_system_1 = __webpack_require__(18005);
const Button = ({ variant = 'primary', disabled, onClick, children, type = 'button', size = 'large', icon, ...props }) => (react_1.default.createElement(Container, { ...props, size: size, variant: variant, disabled: disabled, onClick: onClick, type: type },
    children && (react_1.default.createElement(components_1.Text, { white: variant === 'primary', type: "button" }, children)),
    icon && (react_1.default.createElement(components_1.Box, { marginLeft: children ? 'm-size' : 0 },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon })))));
const Container = styled_components_1.default.button `
  background: ${(props) => props.theme.colors['button-color']};
  padding: ${(props) => props.theme.space['m-size']};
  border: 1px solid ${(props) => props.theme.colors['button-color']};
  color: ${(props) => props.theme.colors['white']};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_content_loader_1 = __importDefault(__webpack_require__(24561));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const ContentLoader = ({ children, ...props }) => {
    return (react_1.default.createElement(components_1.Box, { width: "100%", height: "100%", position: "relative" },
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
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const FeatureItem = ({ title, subtitle, children }) => (react_1.default.createElement(components_1.Tile, { height: subtitle ? '23.53rem' : '20rem', padding: 0 },
    react_1.default.createElement(components_1.Flexbox, { flexGrow: 1, alignItems: "center", justifyContent: "center" }, children),
    react_1.default.createElement(components_1.Flexbox, { backgroundColor: "background-color", flexDirection: "column", alignItems: "center", padding: "m-size" },
        react_1.default.createElement(components_1.Text, { type: "subtitle-1" }, title),
        subtitle && react_1.default.createElement(components_1.Text, { type: "subtitle-2" }, subtitle))));
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
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Grid = ({ children, ...props }) => (react_1.default.createElement(components_1.Box, { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: GRID_GAP, ...props }, children));
const GRID_GAP = '3rem';
exports["default"] = Grid;


/***/ }),

/***/ 4567:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __webpack_require__(91288);
const Heading = ({ children, level, ...props }) => {
    const { fontSizes, fontWeigths, letterSpacings } = (0, styled_components_1.useTheme)();
    let fontSize, fontWeight, letterSpacing;
    switch (level) {
        case 1:
            fontSize = fontSizes['new-huge-s-size'];
            fontWeight = fontWeigths['light'];
            letterSpacing = letterSpacings[100];
            break;
        case 2:
            fontSize = fontSizes['new-large-l-size'];
            fontWeight = fontWeigths['light'];
            letterSpacing = letterSpacings[200];
            break;
        case 3:
            fontSize = fontSizes['new-large-m-size'];
            fontWeight = fontWeigths['regular'];
            letterSpacing = letterSpacings[300];
            break;
        case 4:
            fontSize = fontSizes['new-large-s-size'];
            fontWeight = fontWeigths['regular'];
            letterSpacing = letterSpacings[600];
            break;
        case 5:
            fontSize = fontSizes['new-medium-l-size'];
            fontWeight = fontWeigths['regular'];
            letterSpacing = letterSpacings[300];
            break;
        case 6:
            fontSize = fontSizes['new-medium-m-size'];
            fontWeight = fontWeigths['medium'];
            letterSpacing = letterSpacings[500];
            break;
    }
    return (react_1.default.createElement(components_1.Box, { as: `h${level}`, margin: "0", fontSize: fontSize, fontWeight: fontWeight, letterSpacing: letterSpacing, ...props }, children));
};
exports["default"] = Heading;


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
const react_1 = __importStar(__webpack_require__(67294));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const ImageLoader = ({ objectPosition, objectFit = 'contain', src, alt = '' }) => {
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
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
// const StyledSpinner = styled(Spinner)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `
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
const react_fontawesome_1 = __webpack_require__(67814);
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const Link = ({ icon, children, ...props }) => (react_1.default.createElement(Container, { ...props },
    icon && react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon }),
    react_1.default.createElement(components_1.Text, { fontWeight: icon ? 'bold' : 'unset', marginLeft: icon ? 's-size' : 0, type: "subtitle-1" }, children)));
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
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Logo = ({ expanded }) => (react_1.default.createElement(components_1.Box, { height: !expanded ? '6rem' : '4.5rem' },
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
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const LongProductTile = ({ product, ...props }) => {
    const history = (0, react_router_dom_1.useHistory)();
    const imageUrl = product.gallery[0];
    return (react_1.default.createElement(Container, { onClick: () => {
            history.push(`/view_product/${product.id}`);
        }, justifyContent: "space-between", flexDirection: "row", height: "20rem", alignItems: "center", ...props },
        react_1.default.createElement(components_1.Box, { as: "h2" }, product.name),
        imageUrl && (react_1.default.createElement(components_1.Flexbox, { alignItems: "center", justifyContent: "center", position: "relative", height: "100%", padding: "auto 0", width: "60rem" },
            react_1.default.createElement(components_1.ImageLoader, { src: imageUrl })))));
};
const Container = (0, styled_components_1.default)(components_1.Tile) `
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
const formik_1 = __webpack_require__(94649);
const react_1 = __importDefault(__webpack_require__(67294));
const react_phone_input_2_1 = __importDefault(__webpack_require__(67555));
const styled_components_1 = __importDefault(__webpack_require__(91288));
const MobileInput = ({ fieldProps, placeholder, label, disabled }) => {
    const { meta, field } = fieldProps;
    const [, , helpers] = (0, formik_1.useField)(fieldProps.field.name);
    const { touched, error } = meta;
    const { setValue } = helpers;
    return (react_1.default.createElement(components_1.Flexbox, { flexDirection: "column" },
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
const react_1 = __importDefault(__webpack_require__(67294));
const SectionHead = ({ title, link, ...props }) => (react_1.default.createElement(components_1.Flexbox, { marginBottom: "m-size", justifyContent: "space-between", alignItems: "center", ...props },
    title && react_1.default.createElement(components_1.Heading, { level: 5 }, title),
    link && (react_1.default.createElement(components_1.Link, { underline: true, to: link.to }, link.label))));
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
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Spinner = ({ small, ...props }) => (react_1.default.createElement(components_1.Box, { ...props, opacity: 0.5 },
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

/***/ 98299:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const styled_components_1 = __webpack_require__(91288);
const Text = ({ children, type, ...props }) => {
    const { fontSizes, fontWeigths, letterSpacings } = (0, styled_components_1.useTheme)();
    let fontSize, fontWeight, letterSpacing;
    switch (type) {
        case 'subtitle-1':
            fontSize = fontSizes['new-medium-s-size'];
            fontWeight = fontWeigths['regular'];
            letterSpacing = letterSpacings[500];
            break;
        case 'subtitle-2':
            fontSize = fontSizes['new-small-l-size'];
            fontWeight = fontWeigths['medium'];
            letterSpacing = letterSpacings[400];
            break;
        case 'body-1':
            fontSize = fontSizes['new-medium-s-size'];
            fontWeight = fontWeigths['regular'];
            letterSpacing = letterSpacings[800];
            break;
        case 'body-2':
        default:
            fontSize = fontSizes['new-small-l-size'];
            fontWeight = fontWeigths['regular'];
            letterSpacing = letterSpacings[600];
            break;
        case 'button':
            fontSize = fontSizes['new-small-l-size'];
            fontWeight = fontWeigths['medium'];
            letterSpacing = letterSpacings[900];
            break;
        case 'caption':
            fontSize = fontSizes['new-small-m-size'];
            fontWeight = fontWeigths['regular'];
            letterSpacing = letterSpacings[700];
            break;
        case 'overline':
            fontSize = fontSizes['new-small-s-size'];
            fontWeight = fontWeigths['regular'];
            letterSpacing = letterSpacings[1000];
            break;
    }
    return (react_1.default.createElement(components_1.Box, { as: "p", margin: 0, fontSize: fontSize, fontWeight: fontWeight, letterSpacing: letterSpacing, color: props.white ? 'white' : 'black', ...props }, children));
};
exports["default"] = Text;


/***/ }),

/***/ 18843:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const Tile = ({ onClick, children, ...props }) => (react_1.default.createElement(components_1.Flexbox, { width: "100%", padding: "l-size", background: "white", border: "1px solid", borderColor: "border-color", flexDirection: "column", onClick: onClick, ...props }, children));
exports["default"] = Tile;


/***/ }),

/***/ 29839:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const TitleAndLinkBanner = ({ title, link: { to, label } }) => {
    const history = (0, react_router_dom_1.useHistory)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.Banner, { horizonal: true, marginTop: "xxl-size", small: true, title: react_1.default.createElement(components_1.Heading, { level: 5 }, title) },
            react_1.default.createElement(components_1.Button, { icon: "arrow-right", onClick: () => history.push(to) }, label))));
};
exports["default"] = TitleAndLinkBanner;


/***/ }),

/***/ 26789:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BannerWithPicture = exports.BackButton = exports.FeatureItem = exports.Heading = exports.Text = exports.ContentLoader = exports.ExternalLink = exports.TitleAndLinkBanner = exports.Link = exports.InputLabel = exports.MobileInput = exports.Logo = exports.Input = exports.Spinner = exports.Banner = exports.Grid = exports.SectionHead = exports.ImageLoader = exports.LongProductTile = exports.Select = exports.Tile = exports.Button = exports.CheckboxField = exports.Square = exports.Flexbox = exports.Separator = exports.Badge = exports.QueryLoader = exports.Box = exports.Page = void 0;
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
var Text_1 = __webpack_require__(98299);
Object.defineProperty(exports, "Text", ({ enumerable: true, get: function () { return __importDefault(Text_1).default; } }));
var Heading_1 = __webpack_require__(4567);
Object.defineProperty(exports, "Heading", ({ enumerable: true, get: function () { return __importDefault(Heading_1).default; } }));
var FeatureItem_1 = __webpack_require__(24690);
Object.defineProperty(exports, "FeatureItem", ({ enumerable: true, get: function () { return __importDefault(FeatureItem_1).default; } }));
var BackButton_1 = __webpack_require__(79139);
Object.defineProperty(exports, "BackButton", ({ enumerable: true, get: function () { return __importDefault(BackButton_1).default; } }));
var BannerWithPicture_1 = __webpack_require__(29205);
Object.defineProperty(exports, "BannerWithPicture", ({ enumerable: true, get: function () { return __importDefault(BannerWithPicture_1).default; } }));


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
        families: ['Roboto:300,400,500,700']
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
    isAvailable: (0, zod_1.boolean)().nullable(),
    frontend_icon_name: (0, zod_1.string)()
});
exports["default"] = deliveryType;


/***/ }),

/***/ 11594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const zod_1 = __webpack_require__(78754);
const paymentType = (0, zod_1.object)({
    id: (0, zod_1.string)(),
    label: (0, zod_1.string)(),
    is_available: (0, zod_1.boolean)().nullable()
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
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.Contact, path: routes_1.CONTACT }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.DeliveryAndPayments, path: routes_1.DELIVERY_AND_PAYMENTS }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.HowToCreateOrder, path: routes_1.HOW_TO_CREATE_ORDER }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.TermsAndConditions, path: routes_1.TERMS_AND_CONDITIONS }),
            react_1.default.createElement(react_router_dom_1.Route, { component: pages_1.PrivacyPolicy, path: routes_1.PRIVACY_POLICY }),
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
        react_1.default.createElement(components_1.Heading, { level: 6, marginLeft: icon && 'm-size' }, title)),
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
        react_1.default.createElement(components_1.Banner, { horizonal: true, small: true, title: react_1.default.createElement(components_1.Heading, { level: 4 }, t('title')) }),
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
                react_1.default.createElement(components_1.Text, { type: "body-2" }, t('items.EMAIL.info')),
                react_1.default.createElement(components_1.Text, { marginTop: "s-size", type: "subtitle-2" }, t('items.EMAIL.email'))))
        },
        {
            icon: 'phone-alt',
            key: 'PHONE',
            content: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Text, { type: "body-2" }, t('items.PHONE.info')),
                react_1.default.createElement(components_1.Text, { marginTop: "s-size", type: "subtitle-2" }, t('items.PHONE.mobile'))))
        },
        {
            icon: 'map-marked-alt',
            key: 'ADDRESS',
            content: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Text, { type: "body-2" }, t('items.ADDRESS.info')),
                react_1.default.createElement(components_1.Text, { marginTop: "s-size", type: "subtitle-2", lineHeight: "1.21" }, t('items.ADDRESS.address1')),
                react_1.default.createElement(components_1.Text, { type: "subtitle-2", lineHeight: "1.21" }, t('items.ADDRESS.address2')),
                react_1.default.createElement(components_1.Text, { type: "subtitle-2", lineHeight: "1.21" }, t('items.ADDRESS.address3')),
                react_1.default.createElement(components_1.Text, { type: "subtitle-2", lineHeight: "1.21" }, t('items.ADDRESS.address4'))))
        },
        {
            icon: 'university',
            key: 'ACCOUNT',
            content: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(components_1.Text, { type: "body-2" }, t('items.ACCOUNT.info')),
                react_1.default.createElement(components_1.Text, { marginTop: "s-size", type: "subtitle-2" }, t('items.ACCOUNT.nrb')),
                react_1.default.createElement(components_1.Text, { marginTop: "s-size", type: "body-2" }, t('items.ACCOUNT.info2')),
                react_1.default.createElement(components_1.Text, { type: "body-2" }, t('items.ACCOUNT.info3'))))
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
            title && (react_1.default.createElement(components_1.Text, { type: "subtitle-2", marginBottom: "xs-size" }, title)),
            react_1.default.createElement(components_1.Text, { type: "body-2", lineHeight: "1.21" }, description))));
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
const api_1 = __webpack_require__(72934);
const commonComponents_1 = __webpack_require__(31802);
const components_1 = __webpack_require__(26789);
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
    const deliveryTypesQuery = (0, api_1.useGetDeliveryTypes)();
    const paymentTypesQuery = (0, api_1.useGetPaymentTypes)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.Banner, { horizonal: true, small: true, title: react_1.default.createElement(components_1.Heading, { level: 4 }, t('title')) }),
        react_1.default.createElement(components_1.SectionHead, { marginTop: "xxl-size", title: t('processingTime.title') }),
        react_1.default.createElement(components_1.Grid, { gridTemplateColumns: "1fr 5rem 1fr 5rem 1fr" },
            react_1.default.createElement(Option_1.default, { icon: "calendar-alt", title: t('processingTime.items.PRODUCTION.title'), description: t('processingTime.items.PRODUCTION.description') }),
            react_1.default.createElement(components_1.Flexbox, { alignSelf: "center" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "3x", icon: "plus" })),
            react_1.default.createElement(Option_1.default, { icon: "truck-loading", title: t('processingTime.items.DELIVERY.title'), description: t('processingTime.items.DELIVERY.description') }),
            react_1.default.createElement(components_1.Flexbox, { alignSelf: "center" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "3x", icon: "equals" })),
            react_1.default.createElement(Option_1.default, { icon: "boxes", description: t('processingTime.items.TOTAL.description') })),
        react_1.default.createElement(components_1.SectionHead, { marginTop: "xxl-size", title: t('payments.title') }),
        react_1.default.createElement(components_1.QueryLoader, { query: paymentTypesQuery }, (paymentMethods) => (react_1.default.createElement(components_1.Grid, null, paymentMethods
            .filter((type) => type.is_available)
            .map((feature) => (react_1.default.createElement(components_1.FeatureItem, { key: feature.id, title: commonT(`paymentTypes.${feature.label}.title`) },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: "exchange-alt", size: "3x" }))))))),
        react_1.default.createElement(components_1.SectionHead, { marginTop: "xxl-size", title: t('delivery.title') }),
        react_1.default.createElement(components_1.QueryLoader, { query: deliveryTypesQuery }, (deliveryTypes) => (react_1.default.createElement(components_1.Grid, null, deliveryTypes
            .filter((type) => type.isAvailable)
            .map((type) => (react_1.default.createElement(components_1.FeatureItem, { key: type.id, title: commonT(`deliveryTypes.${type.label}`), subtitle: `${(0, utils_1.displayMoney)(type.price)} - ${type.time}` },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: type.frontend_icon_name, size: "3x" }))))))),
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
const hooks_1 = __webpack_require__(92457);
const react_1 = __importDefault(__webpack_require__(67294));
const react_router_dom_1 = __webpack_require__(77856);
const components_1 = __webpack_require__(26789);
const react_i18next_1 = __webpack_require__(26828);
const routes_1 = __webpack_require__(74897);
const Bestsellers_1 = __importDefault(__webpack_require__(67810));
const Home = () => {
    const { t } = (0, react_i18next_1.useTranslation)('HOME');
    const history = (0, react_router_dom_1.useHistory)();
    (0, hooks_1.useTabTitle)(t('title'));
    (0, hooks_1.useScrollTop)();
    return (react_1.default.createElement(components_1.Page, null,
        react_1.default.createElement(components_1.BannerWithPicture
        // img={bannerImg}
        , { 
            // img={bannerImg}
            description: t('banner.description'), title: react_1.default.createElement(components_1.Heading, { textAlign: "center", level: 3 },
                react_1.default.createElement("strong", null, "Twoje"),
                "\u00A0miejsce w\u00A0",
                react_1.default.createElement("strong", null, "Twoim"),
                "\u00A0punkcie") },
            react_1.default.createElement(components_1.Button, { size: "small", onClick: () => history.push(routes_1.PRODUCTS), icon: "arrow-right" }, t('banner.buttonLabel'))),
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
        react_1.default.createElement(components_1.Banner, { horizonal: true, small: true, title: react_1.default.createElement(components_1.Heading, { level: 4 }, t('title')) }),
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
const Search = ({ value, onChange }) => {
    const { t } = (0, react_i18next_1.useTranslation)('PRODUCTS');
    return (react_1.default.createElement(components_1.Flexbox, { width: "25rem" },
        react_1.default.createElement(StyledInput, { onChange: (e) => onChange(e.target.value), value: value, placeholder: t('searchPlaceholder') }),
        react_1.default.createElement(components_1.Button, { marginLeft: "m-size", size: "small", variant: "ternary", onClick: () => onChange(''), icon: value ? 'times' : 'search' })));
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
                isFiltered && (react_1.default.createElement(components_1.BackButton, { to: routes_1.PRODUCTS, label: t('showAllLabel') })),
                !isFiltered && (react_1.default.createElement(components_1.Flexbox, { flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" },
                    react_1.default.createElement(Search_1.default, { value: query, onChange: (value) => setQuery(value) }),
                    !query && (react_1.default.createElement(components_1.Text, { type: "subtitle-1", fontWeight: "bold", marginRight: "m-size" }, count === 1
                        ? t('productsSingle', { count })
                        : count && count < 5
                            ? t('productsFew', { count })
                            : t('productsMultiple', { count }))))),
                react_1.default.createElement(commonComponents_1.ProductsGrid, { searchQuery: query, 
                    // marginTop="l-size"
                    query: productsQuery })));
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
    return (react_1.default.createElement(components_1.Flexbox, { flexGrow: 1, flexDirection: "column", marginLeft: "xl-size" },
        react_1.default.createElement(components_1.Heading, { level: 4 }, product.name),
        react_1.default.createElement(components_1.Separator, null),
        react_1.default.createElement(components_1.Flexbox, null,
            react_1.default.createElement(components_1.Text, { type: "caption" }, t('color')),
            react_1.default.createElement(components_1.Text, { marginLeft: "s-size", type: "subtitle-2" }, t('colorValueTODO'))),
        react_1.default.createElement(components_1.Flexbox, null,
            react_1.default.createElement(components_1.Text, { type: "caption" }, t('label')),
            react_1.default.createElement(components_1.Text, { marginLeft: "s-size", type: "subtitle-2" }, product.label.label)),
        react_1.default.createElement(components_1.Flexbox, null,
            react_1.default.createElement(components_1.Text, { type: "caption" }, t('icon')),
            react_1.default.createElement(components_1.Text, { marginLeft: "s-size", type: "subtitle-2" }, product.icon.label)),
        react_1.default.createElement(components_1.Separator, null),
        react_1.default.createElement(components_1.Text, { type: "body-2" }, product.description),
        react_1.default.createElement(components_1.Separator, null),
        react_1.default.createElement(components_1.Heading, { level: 5 }, (0, utils_1.displayMoney)(product.price)),
        react_1.default.createElement(components_1.Text, { type: "caption" }, t('priceSubtitle')),
        react_1.default.createElement(components_1.Separator, null),
        react_1.default.createElement(NoType_1.default, { product: product })));
};
exports["default"] = Info;


/***/ }),

/***/ 79784:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const components_1 = __webpack_require__(26789);
const react_1 = __importDefault(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const AvilabilityIndicator = ({ mold }) => {
    const { t } = (0, react_i18next_1.useTranslation)('VIEW_PRODUCT');
    const status = !mold ? 'NULL' : mold.status;
    return (react_1.default.createElement(components_1.Flexbox, { marginTop: "s-size", alignItems: "center" },
        react_1.default.createElement(Dot, { status: status }),
        react_1.default.createElement(components_1.Text, { type: "caption", marginLeft: "s-size" }, t(`avilability.${status}`))));
};
const Dot = styled_components_1.default.div `
  width: ${(props) => props.theme.space['m-size']};
  height: ${(props) => props.theme.space['m-size']};
  background: ${(props) => {
    if (props.status === 'NULL') {
        return props.theme.colors.red;
    }
    else if (props.status === 'IN_PROGRESS') {
        return props.theme.colors.yellow;
    }
    else {
        return props.theme.colors.green;
    }
}};
  border-radius: 50%;
`;
exports["default"] = AvilabilityIndicator;


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
const AvilabilityIndicator_1 = __importDefault(__webpack_require__(79784));
const Form = ({ product }) => {
    const { basket } = (0, react_1.useContext)(BasketProvider_1.basketContext);
    const { schema, initialValues, submitForm } = (0, useForm_1.default)(product);
    const isInBasket = basket.find((item) => product.id === item.id);
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, validateOnChange: true, validationSchema: schema, onSubmit: submitForm }, () => (react_1.default.createElement(formik_1.Form, null,
        react_1.default.createElement(common_1.SubmitButton, { isInBasket: !!isInBasket }),
        react_1.default.createElement(AvilabilityIndicator_1.default, { mold: product.mold })))));
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
    return (react_1.default.createElement(components_1.Button, { marginTop: separation ? '2rem' : 0, type: "submit", disabled: disabled, variant: isInBasket ? 'secondary' : 'primary', size: "small" }, isInBasket ? t('actions.removeFromBasket') : t('actions.addToBasket')));
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
            react_1.default.createElement(components_1.BackButton, { marginBottom: "s-size", to: routes_1.PRODUCTS, label: t('actions.goBack') }),
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
            react_1.default.createElement(components_1.Flexbox, { marginBottom: "m-size", justifyContent: "center", alignItems: "center" },
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
    const triggerNewOrder = (0, api_1.useTriggerNewOrder)();
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
        triggerNewOrder({
            order,
            order_id: orderId,
            to: order.email
        });
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
const commonComponents_1 = __webpack_require__(31802);
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
                    react_1.default.createElement(components_1.Text, { type: "caption" }, t('emptyState')))),
                basket.map((product) => (react_1.default.createElement(react_1.Fragment, { key: product.id },
                    react_1.default.createElement(commonComponents_1.BasketItem, { product: product }))))),
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
                    react_1.default.createElement(components_1.Button, { variant: "primary", onClick: () => history.push(routes_1.PRODUCTS) }, t('actions.backToShop')),
                    react_1.default.createElement(components_1.Button, { variant: "secondary", onClick: () => history.push(routes_1.HOME) }, t('actions.backToHome')))))));
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_router_dom_1 = __webpack_require__(77856);
const react_1 = __importStar(__webpack_require__(67294));
const react_i18next_1 = __webpack_require__(26828);
const BasketProvider_1 = __webpack_require__(81400);
const routes_1 = __webpack_require__(74897);
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
    return (react_1.default.createElement(components_1.Flexbox, { marginTop: "3rem", alignItems: "center", justifyContent: "space-between" },
        react_1.default.createElement(components_1.Button, { variant: "secondary", onClick: onClickPrevious, type: "button" }, t(isFirstPage ? 'checkoutActions.backToShop' : 'checkoutActions.back')),
        react_1.default.createElement(components_1.Button, { disabled: isBasketEmpty || primaryDisabled, onClick: onClickNext, type: isFirstPage ? 'button' : 'submit', icon: "arrow-right" },
            react_1.default.createElement(components_1.Box, { marginRight: "s-size" }, t(current === 5
                ? 'checkoutActions.createOrder'
                : 'checkoutActions.next')))));
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
const components_1 = __webpack_require__(26789);
const styled_components_1 = __importDefault(__webpack_require__(91288));
const StepTitle = (0, styled_components_1.default)(components_1.Heading).attrs(() => ({
    level: 5,
    textAlign: 'center'
})) ``;
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
                    react_1.default.createElement(components_1.Text, { marginTop: "s-size", type: "caption" }, t(`checkoutSteps.${step}`)))));
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

  &:focus {
    outline: solid 0.3rem;
    outline-color: ${(props) => props.theme.colors['yellow-outline']};
  }
}

html {
  font-size: 0.625em;
}

body {
  min-height: 100vh;
  height: 100%;

  font-family: 'Roboto';
  font-size: ${(props) => props.theme.fontSizes.baseFontSize};

  background: ${(props) => props.theme.colors['background-color']};
  overflow-x: hidden;
  margin: 0;
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
    'yellow-outline': 'rgb(255, 221, 0)',
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
    'font-xlarge': '4rem',
    'new-huge-s-size': '9.6rem',
    'new-large-l-size': '6.0rem',
    'new-large-m-size': '4.8rem',
    'new-large-s-size': '3.4rem',
    'new-medium-l-size': '2.4rem',
    'new-medium-m-size': '2.0rem',
    'new-medium-s-size': '1.6rem',
    'new-small-l-size': '1.4rem',
    'new-small-m-size': '1.2rem',
    'new-small-s-size': '1.0rem'
};
const letterSpacings = {
    100: '-0.15rem',
    200: '-0.05rem',
    300: '0',
    400: '0.01rem',
    500: '0.015rem',
    600: '0.025rem',
    700: '0.04rem',
    800: '0.05rem',
    900: '0.125rem',
    1000: '0.15rem'
};
const fontWeigths = {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700'
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
    fontSizes,
    fontWeigths,
    letterSpacings
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
//# sourceMappingURL=main.cf5a263e16f75a2f1d50.js.map