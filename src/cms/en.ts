import { LanguageKeys } from './pl'

const phoneNumer = '+48 792 531 179'
const companyName = 'Braty'
const fullCompanyName = `${companyName} Przemysław Rychlewicz`
const domain = 'braty.co'
const nrb = '31 1140 2004 0000 3402 8090 0648'
const bankName = 'mBank S.A.'
export const email = `kontakt@${domain}`

const en: LanguageKeys = {
  COMMON: {
    COUNTRIES: {
      GERMANY: 'Germany',
      'UNITED KINGDOM': 'United Kingdom',
      POLAND: 'Poland'
    },
    BANNERS: {
      YOUR_PLACE: {
        title: '<strong>Your</strong> place in <strong>Your</strong> point',
        subtitle:
          'Największy w Polsce wybór zapalniczek z nazwą miejscowości. Znajdź swoją zapalniczkę i razem z nami poszerzaj swoją sprzedażową.',
        buttonLabel: 'Products'
      },
      CHRISTMAS_2021: {
        tite: '<strong>Wyjątkowa</strong> oferta <strong>świąteczna</strong>',
        subtitle:
          'Jako jedyni w Polsce oferujemy zapalniczki tłoczone metodą hotstampingu z unikalnymi wzorami dedykowanymi na ten specjalny czas. Zapraszamy do zapoznania się z naszymi produktami.'
      }
    },

    COOKIES_CONSENT: {
      agree: 'I understand',
      info: 'Strona braty.co używa plików cookies. Dowiedz się więcej o celu ich używania i zmianie ustawień cookies w przeglądarce.\nKorzystając ze strony wyrażasz zgodę na używanie cookies, zgodnie z aktualnymi ustawieniami przeglądarki.'
    },

    ERRORS: {
      23505: 'Given email address is already registered',
      'Invalid login credentials': 'Invalid username or password',
      default: `Unexpected error. Try again or send us an email to${email}.`
    },

    CONTACT_DETAILS: {
      title: 'Contact details',
      address: 'Address',
      shippings: 'Shipping address',
      nip: 'VAT number'
    },

    TOAST: {
      success: 'Udało się!',
      error: 'Nie udało się'
    },

    LINKS: {
      christmas2021: 'Christmas Offer',
      companyOffer: 'Company offer',
      contact: 'Contact',
      deliveryAndPayments: 'Delivery and payments',
      documents: 'Terms and conditions',
      home: 'Home',
      howToCreateOrder: 'How to order',
      orders: 'Orders',
      products: 'Products',
      valentinesDay: "Valentine's Day",
      europe: 'Europe',

      adminOrders: 'Orders',
      adminCallbacks: 'Contact request',
      adminDeliveryTypes: 'Delivery methods',
      adminPaymentTypes: 'Payments methods',
      adminMolds: 'Molds',
      adminIcons: 'Icons',
      adminLabels: 'Labels',
      adminMarketing: 'Marketing'
    },

    QUERY_LOADER: {
      loading: 'loading...'
    },

    CAROUSEL: {
      arrows: {
        prev: 'Previous slide',
        next: 'Next slide'
      }
    },

    LANGUAGE_TOGGLE_LABEL: {
      pl: 'polski',
      en: 'english'
    },

    nrb,
    bankName,
    fullCompanyName,

    basketToggleLabel: 'Koszyk',
    profileToggleLabel: 'Profil użytkownika',
    signoutToggleLabel: 'Wyloguj',
    soon: 'Wkrótce',
    productsEmptyState: 'No results',
    productsLoadMore: 'Show more',
    productsSingle: '{{count}} product',
    productsFew: '{{count}} products',
    productsMultiple: '{{count}} products',
    preloaderInfo: 'Website loading',
    loading: 'Ładowanie',
    companyName: domain,
    tableEmpty: 'Tabela jest pusta',
    productNameBase: 'Lighter',
    unit: '(Pack of 50)',
    fetchErrorMessage: 'Nie udało się wczytać treści',
    fetchErrorRetry: 'Spróbuj ponownie',

    TABLE_HEADERS: {
      boxes_count: 'Liczba pudełek',
      client: 'Klient',
      consent: 'Zgoda',
      created_at: 'Data utworzenia',
      customer_name: 'Nazwa klienta',
      delivery_id: 'Numer paczki',
      delivery_type: 'Typ dostawy',
      done: 'Wykonano',
      edit: 'Edycja',
      email: 'Email',
      icon_name: 'Ikona',
      icon: 'Ikona',
      id: 'Numer referencyjny',
      is_company: 'Czy firma?',
      is_enabled: 'Włączone',
      label: 'Etykieta',
      notes: 'Notes',
      molds: 'Matryce',
      order_time: 'Czas zamówienia',
      name: 'Name',
      phone: 'Telefon',
      phone_number: 'Numer telefonu',
      plus_code: 'Kod plus',
      price: 'Cena',
      product_image: '',
      product_name: 'Nazwa produktu',
      product_price: 'Cena',
      product_total: 'Total',
      products: 'Produkty',
      requires_address: 'Wymaga adresu',
      sendBrochureAgreement: 'Zgoda na wysłanie katalogu',
      sendBrochureCyclicAgreement: 'Zgoda na wysyłanie katalogu cyklicznie',
      status: 'Status',
      sum: 'Suma',
      time: 'Czas',
      updated_at: 'Data modyfikacji',
      delete: 'Usuń'
    },

    MODAL: {
      FOOTER: {
        primaryLabel: 'Zapisz',
        secondaryLabel: 'Anuluj'
      },
      SUCCESS: {
        title: 'Zmiany zostały zapisane'
      },
      ERROR: {
        title: 'Nie udało się',
        buttonLabel: 'Spróbuj ponownie'
      }
    },

    FOOTER: {
      allRightsReserved: `© {{year}} ${companyName} - All Rights Reserved`
    },

    checkoutSteps: {
      1: 'Invoice',
      2: 'Delivery',
      3: 'Payment'
    },

    CHECKOUT_TOTAL: {
      title: 'Summary',
      goToCheckout: 'Go to checkout',
      goToDelivery: 'Go to delivery',
      goToPayment: 'Go to payment',
      createOrder: 'Confirm order',

      products: 'Products price',
      delivery: 'Delivery',
      payment: 'Payment',
      discount: 'Discount',
      total: 'Total',
      vat: '(including TAX)'
    },

    customerTypes: {
      INDIVIDUAL: 'Individual client',
      COMPANY: 'Company'
    },

    MOLD_STATUSES: {
      IN_PROGRESS: 'Zamówiona',
      DONE: 'Gotowa',
      UNDONE: 'Niezamówiona'
    },

    ORDER_STATUSES: {
      OPEN: 'New',
      CONFIRMED: 'Confirmed',
      PAYMENT_RECEIVED: 'Payed',
      PRODUCTION: 'Production',
      AWAITING_FOR_PICKUP: 'Delivery awaiting',
      IN_DELIVERY: 'In delivery',
      COMPLETED: 'Completed',
      REJECTED: 'Rejected'
    },

    STATUS_MEANINGS: {
      OPEN: 'What means that the order has been recently created and it is awaiting for confirmation.',
      CONFIRMED:
        'What means that the order has been confirmed and we are awaitng for payment.',
      PAYMENT_RECEIVED:
        'What means that we received payment and soon we will start preapring the order.',
      PRODUCTION: 'What means that the order is currenly beeing prepared.',
      AWAITING_FOR_PICKUP:
        'What means that the order has been prepared and it is awaiting for delivery.',
      IN_DELIVERY: 'What means that the order is beeing delivered.',
      COMPLETED: 'What means that the order has been delivered.',
      REJECTED: 'What means that the order will not be completed.'
    },

    BASKET: {
      clear: 'Clear',
      empty: 'Basket is empty',
      title: 'Basket',
      total: 'Products price',
      checkout: 'Checkout now',
      products: '({{count}} product)',
      products_plural: '({{count}} products)',
      products_multiple: '({{count}} products)',
      each: 'box'
    },

    HAMBURGER_MENU: {
      title: 'Menu'
    },

    toasts: {
      addedProductToBasket: 'Dodano produkt do koszyka',
      removeProductFromBasket: 'Usunięto produkt z koszyka'
    },

    features: {
      title: 'Dlaczego warto kupować u nas?',
      items: {
        FREE_DELIVERY: 'Darmowa dostawa',
        QUICK_SERVICE: 'Szybka obsługa',
        RETURNS: '14 dni na zwrot',
        QUALITY: 'Największy wybór miejscowości',
        PICK_UP: 'Możliwość odbioru osobistego',
        CLUB: 'Newsletter'
      }
    },

    READ_TERMS_AND_CONDITIONS: {
      title: 'Koniecznie przeczytaj regulamin',
      buttonLabel: 'Przejdź do regulaminu'
    },

    READ_PRIVACY_POLICY: {
      title: 'Koniecznie przeczytaj politykę prywatności',
      buttonLabel: 'Przejdź do polityki prywatnści'
    },

    VALIDATIONS: {
      COUNTRY: {
        required: 'Country is required'
      },
      VOUCHER_ID: {
        length: 'Promotion code should include 36 characters'
      },
      PRODUCT_QUANTITY: {
        required: 'error',
        min: 'error',
        max: 'error'
      },
      DELIVERY_TYPE: {
        required: 'Select one to go ahead'
      },
      PAYMENT_TYPE: {
        required: 'Select one to go ahead'
      },
      STREET_ADDRESS: {
        required: 'Address is required'
      },
      CITY: {
        required: 'City is required'
      },
      NIP_PL: {
        required: 'NIP is required',
        length: 'NIP should contain 10 digits',
        matches: 'NIP should contain digits only',
        invalid: 'NIP is invalid'
      },
      NIP_UK: {
        invalid: 'VAT number is invalid'
      },
      NIP_DE: {
        invalid: 'VAT number is invalid'
      },
      POST_CODE_PL: {
        matches: 'Post code should follow give format XX-XXX',
        required: 'Post code is required'
      },
      POST_CODE_UK: {
        matches: 'Post code is invalid',
        required: 'Post code is required'
      },
      POST_CODE_DE: {
        matches: 'Post code is invalid',
        required: 'Post code is required'
      },
      FULL_NAME: {
        required: 'Name and surname are required'
      },
      COMPANY: {
        required: 'Company name is required'
      },
      EMAIL: {
        email: 'Email is incorrect',
        required: 'Email is required'
      },
      PHONE: {
        required: 'Phone number is required',
        matches: 'Phone number should have at least 6 digits'
      },
      ORDER_ID: {
        required: 'Order reference number in required',
        length: 'Order reference number should have 36 characters'
      },
      PASSWORD: {
        required: 'Proszę podać hasło',
        min: 'Hasło powinno mieć co najmniej 6 znaków'
      },
      NEW_PASSWORD: {
        required: 'Proszę podać hasło',
        min: 'Hasło powinno mieć co najmniej 6 znaków'
      },
      PASSWORD_CONFIRMATION: {
        required: 'Proszę podać hasło',
        oneOf: 'Hasła powinny być takie same'
      }
    },

    INPUTS: {
      PARCEL_REF: {
        label: 'Numer paczki',
        placeholder: ''
      },
      PARCEL_LINK: {
        label: 'Link do statusu paczki',
        placeholder: ''
      },
      VOUCHER_ID: {
        label: 'Promotion code',
        placeholder: 'placeholder'
      },
      COUNTRY: {
        label: 'Country',
        placeholder: ''
      },
      SUBMIT: {
        label: 'Send'
      },
      PAYMENT_TYPE: {
        label: 'Select payment method'
      },
      DELIVERY_TYPE: {
        label: 'Select delivery method'
      },
      FULL_NAME: {
        label: 'Name and surname',
        placeholder: ''
      },
      COMPANY: {
        label: 'Company name',
        placeholder: ''
      },
      EMAIL: {
        label: 'Email address',
        placeholder: ''
      },
      PHONE: {
        label: 'Phone number',
        placeholder: 'Twój '
      },
      PHONE_NOT_MOBILE: {
        label: '',
        placeholder: 'Twój numer telefonu'
      },
      STREET_ADDRESS: {
        label: 'Address',
        placeholder: ''
      },
      POST_CODE_PL: {
        label: 'Post code',
        placeholder: ''
      },
      POST_CODE_UK: {
        label: 'Post code',
        placeholder: ''
      },
      POST_CODE_DE: {
        label: 'Post code',
        placeholder: ''
      },
      CITY: {
        label: 'City',
        placeholder: ''
      },
      NIP_PL: {
        label: 'NIP number',
        placeholder: ''
      },
      NIP_UK: {
        label: 'VAT number',
        placeholder: ''
      },
      NIP_DE: {
        label: 'VAT number',
        placeholder: ''
      },
      ORDER_ID: {
        label: 'Order reference number',
        placeholder: 'It is included in the subject of every email'
      },
      PASSWORD: {
        label: 'Hasło',
        placeholder: ''
      },
      NEW_PASSWORD: {
        label: 'Nowe hasło',
        placeholder: ''
      },
      PASSWORD_CONFIRMATION: {
        label: 'Powtórz hasło',
        placeholder: ''
      },
      NOTES: {
        label: 'Notes',
        placeholder: 'Type anything'
      },
      NAME: {
        label: 'Name',
        placeholder: ''
      },
      PLUS_CODE: {
        label: 'Plus code',
        placeholder: 'Paste plus code'
      },
      SEND_BROCHURE_AGREEMENT: {
        label: 'Agreement to send products brochure'
      },
      SEND_BROCHURE_CYCLIC_AGREEMENT: {
        label: 'Agreement to send products brochure periodically'
      }
    },

    NEWSLETTER: {
      FORM: {
        title: 'Zapisz się do newslettera i zyskaj 10zł rabatu',
        subtitle:
          'Będziesz na bieżąco z nowymi produktami oraz ofertami specjalnymi',
        info: 'Naciskając przycisk "Potwierdzam i wysyłam" potwierdzasz, że akceptujesz z Regulamin newslettera.',
        FORM: {
          EMAIL: {
            placeholder: 'Twój adres email'
          },
          SUBMIT: {
            label: 'Potwierdzam i wysyłam'
          }
        }
      },
      SUCCESS: {
        title: 'Udało się!',
        subtitle:
          'Niedługo wyślemy Tobie powitalnego emaila z kodem rabatowym do wykorzystania przy składaniu zamówienia.'
      },
      ERROR: {
        title: 'Nie udało się!',
        tryAgain: 'Spróbuj jeszcze raz'
      }
    },

    CALL_ME_BACK: {
      FORM: {
        title:
          'Jeżeli masz jakiekolwiek pytanie lub nie ma Twojego produktu...',
        subtitle: `Zadzwoń na ${phoneNumer} albo podaj swój numer telefonu, a my odzwonimy.`,
        info: 'Naciskając przycisk "Potwierdzam i wysyłam" potwierdzasz, że akceptujesz Politykę prywatności.',
        FORM: {
          SUBMIT: {
            label: 'Potwierdzam i wysyłam'
          }
        }
      },
      SUCCESS: {
        title: 'Prośba o telefon została wysłana',
        subtitle:
          'Niedługo się z Tobą skontaktujemy. Średnio zajmuje nam to 24 godziny.'
      },

      ERROR: {
        title: 'Niestety się nie udało',
        subtitle: 'Naciśnij poniższy przycisk i spróbuj ponownie.',
        buttonLabel: 'Spróbuj jeszcze raz'
      }
    }
  },

  SIGN_IN: {
    title: 'Zaloguj się'
  },

  SIGN_UP: {
    title: 'Załóż konto'
  },

  HOME: {
    title: 'Home',

    FEATURED: {
      title: 'Featured'
    },

    CATALOGUE: {
      title: 'Products Catalogue',
      linkLabel: 'View'
    },

    bestsellers: {
      title: 'Bestsellers',
      linkLabel: 'See all'
    },

    CHRISTMAS_2021: {
      title: 'Christmas',
      linkLabel: 'See all'
    },

    VALENTINES_DAY: {
      title: "Valentines's Day",
      linkLabel: 'See all'
    },

    NEW_YEARS_EVE_2022: {
      title: "New Year's Eve",
      linkLabel: 'See all'
    }
  },

  CART: {
    title: 'Basket',
    emptyState: 'Basket is empty. Add products and come back here later.'
  },

  CHECKOUT_DETAILS: {
    back: 'Go back to basket',
    title: 'Invoice'
  },

  CHECKOUT_DELIVERY: {
    back: 'Go back to invoice',
    title: 'Delivery',
    sameAddress: 'Shipping address is different than invoice address'
  },

  CHECKOUT_PAYMENT: {
    back: 'Go back do delivery',
    title: 'Payment',
    voucher: {
      applyVoucher: 'Apply a Promotion Code',
      error: 'It is not a valid promo code',
      successToastMessage: 'Promo code has been accepted'
    }
  },

  CHECKOUT_RESULT: {
    title: 'Order has been successfully created',
    PAYMENT_INFO: {
      short:
        'To given email address we have just sent a message with confirmation in which you will find payment information. After we receive found, we will inform you about it and start completing the order.',
      long: 'To given email address we have just sent a message with confirmation. We will contact you within next business day and confirm order preparation time.'
    },
    actions: {
      backToHome: 'Go to home page',
      seeOrder: 'View order'
    }
  },

  PRODUCTS: {
    title: 'Products',
    showAllLabel: 'See all',

    FILTERS: {
      title: 'Search your product',
      searchPlaceholder: 'Type product name, label or icon',
      collections: 'Collections',
      icons: 'Icons',
      search: 'Search',
      clear: 'Clear'
    }
  },

  PAGE_NOT_FOUND: {
    title: '404',
    heading: "Ups! Page wasn't found",
    buttonLabel: 'Go to home'
  },

  USER: {
    title: 'Konto użytkownika',

    ORDERS: {
      title: 'Zamówienia'
    }
  },

  VIEW_PRODUCT: {
    title: '{{productName}}',

    icon: 'icon',
    label: 'label',
    color: 'color',
    colorValueTODO: 'wood mix',

    priceSubtitle: 'Price for 1 box (50 inside) - including 23% TAX',
    avilability: {
      DONE: 'Product easily available',
      IN_PROGRESS: 'Product available',
      UNDONE: 'Product moderately available'
    },

    boxes: 'box',
    boxes_plural: 'boxes',
    boxes_multiple: 'boxes',

    actions: {
      goBack: 'Go back',
      addToBasket: 'Add to basket',
      inBasket: 'Product inside basket',
      updateInBasket: 'Update basket'
    },

    OTHER_ICONS: {
      title: 'Other icons',
      linkLabel: 'See all'
    },

    OTHER_LABELS: {
      title: 'Other labels',
      linkLabel: 'See all'
    }
  },

  ADMIN_ORDERS: {
    title: 'Zamówienia',
    emptyState: 'Nie ma żadnych zamówień',
    testData: 'Dane testowe',

    STATUSES_INFO: {
      OPEN: 'Zamówienia, które dostały dopiero złożone. Oczekują na potwierdzenie przez nas zamówienia z klientem.',
      CONFIRMED:
        'Zamówienia, które zostały potwierdzone i oczekują na płatność. Zmiana statusu po zaksięgowaniu "SUMA" na koncie.',
      PAYMENT_RECEIVED:
        'Zamówienia, które zostały opłacone. Zmiana statusu po zazieleniu wszystkich w "MATRYCE".',
      PRODUCTION:
        'Zamówienia, które można zrealizować. Zmiana statusu po ukończeniu produkcji.',
      AWAITING_FOR_PICKUP:
        'Zamówienia, które są wyprodukowane. Zmiana statusu po wprowadzeniu "NUMER PACZKI".',
      IN_DELIVERY:
        'Zamówienia, które są odebrane przez kuriera. Zmiana statusu po otrzymaniu paczki przez klienta.',
      COMPLETED: 'Zamówienia, które są ukończone.',
      REJECTED: 'Zamówienia, które zostały odrzucone i nie będą realizowane.'
    },

    IS_COMPANY: {
      yes: 'Tak',
      no: 'Nie'
    },

    EDIT_MODAL: {
      buttonLabel: 'Edytuj',
      title: 'Edycja zamówienia',
      FORM: {
        CURRENT_STATUS: {
          label: 'Obecny status'
        },
        CHANGE_STATUS: {
          label: 'Zmień na {{status}}'
        }
      }
    }
  },

  ADMIN_MARKETING: {
    title: 'Marketing',
    testDataEnabled: 'Testing data',
    FORM_MODAL: {
      titleEdit: 'Editing',
      titleAdd: 'Adding',
      buttonLabelEdit: 'Edit',
      buttonLabelAdd: 'Add'
    },
    REMOVE_MODAL: {
      title: 'Do you want to remove this entry?',
      buttonLabel: 'Remove'
    }
  },

  ADMIN_NEWSLETTER_USERS: {
    title: 'Użytkownicy newslettera',
    LIST: {
      title: 'Lista'
    },
    EDIT_MODAL: {
      buttonLabel: 'Edytuj',
      title: 'Edycja użytkownika newslettera',
      FORM: {
        CONSENT: {
          label: 'Użytkownik wyraża zgodę na przesyłanie newslettera'
        }
      }
    }
  },

  ADMIN_CALLBACKS: {
    title: 'Prośby o kontakt',
    EDIT_MODAL: {
      buttonLabel: 'Edytuj',
      title: 'Edycja prośby o kontakt',
      FORM: {
        DONE: {
          label: 'Wykonano telefonu do klienta'
        }
      }
    }
  },

  ADMIN_ICONS: {
    title: 'Ikony'
  },

  ADMIN_LABELS: {
    title: 'Etykiety'
  },

  ADMIN_DELIVERY_TYPES: {
    title: 'Metody dostawy',
    EDIT_MODAL: {
      buttonLabel: 'Edytuj',
      title: 'Edycja metody dostawy',
      FORM: {
        IS_ENABLED: {
          label: 'Metoda dostępna'
        }
      }
    }
  },

  ADMIN_PAYMENT_TYPES: {
    title: 'Metody płatności',
    EDIT_MODAL: {
      buttonLabel: 'Edytuj',
      title: 'Edycja metody płatności',
      FORM: {
        IS_ENABLED: {
          label: 'Metoda dostępna'
        }
      }
    }
  },

  ADMIN_MOLDS: {
    title: 'Matryce',
    LIST: {
      title: 'Lista'
    },
    EDIT_MODAL: {
      buttonLabel: 'Edytuj',
      title: 'Edycja matrycy',
      FORM: {
        IS_ENABLED: {
          label: 'Status matrycy'
        }
      }
    }
  },

  CONTACT: {
    title: 'Contact',
    items: {
      CHECK_STATUS: {
        title: 'Check order status',
        result: {
          tryNew: 'Check another one',
          seeOrder: 'View order'
        },
        error: {
          title: "Given reference number wasn't found",
          info: 'Check this number and try again',
          tryAgain: 'Try again'
        }
      },

      EMAIL: {
        title: 'E-mail',
        info: 'Orders and other enquiries',
        email: email,
        link: `mailto:${email}?subject=Enquiry from website`
      },

      DOWNLOAD_INVOICE: {
        title: 'Download invoice',
        result: {
          title: 'Invoice is ready to download',
          info: 'You can view document following link below',
          new: 'Try another one',
          followLink: 'See invoice'
        },
        error: {
          title: 'Invoice is not ready',
          info: "For given reference number, we couldn't find any invoice. Check it and try again.",
          new: 'Try again'
        }
      },

      ADDRESS: {
        title: 'Address',
        info: 'Exchanges, refunds and pickup in person',
        address1: fullCompanyName,
        address2: 'Bora-Komorowskiego Street, 12/1',
        address3: '80-366 Gdańsk',
        address4: 'Poland'
      },

      PHONE: {
        title: 'Telephone',
        info: 'For any enquiries',
        mobile: phoneNumer
      },

      ACCOUNT: {
        title: 'Bank account number',
        info: 'For ',
        nrb: nrb,
        info2: `Nazwa banku: ${bankName}`,
        info3: 'Tytuł: Numer referencyjny zamówienia'
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
          description:
            'Zależy głównie od liczby zamówionych pudełek oraz czy zamawiasz u nas pierwszy raz.'
        },
        DELIVERY: {
          title: 'Czas dostawy',
          description: 'Wysyłka zazwyczaj następuje następnego dnia roboczego.'
        },
        TOTAL: {
          description: `Całkowity czas realizacji zależy od zamówienia. Zadzwoń na ${phoneNumer} i upewnj się, że zamówienie będzie na czas.`
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
        FIND_PRODUCT:
          'Przejdź do zakładki PŁATNOŚCI i znajdź interesujący Cię produkt.',
        ADD_TO_BASKET:
          'Po zweryfikowaniu produktu, jego opisu i ceny, dodaj produkt do koszyka za pomocą przycisku DODAJ DO KOSZYKA.'
      }
    }
  },

  DOCUMENTS: {
    title: 'Dokumenty',
    TYPES: {
      termsAndConditions: 'Regulamin',
      privacyPolicy: 'Polityka prywatności',
      cookiesPolicy: 'Polityka Cookies',
      newsletter: 'Regulamin newslettera'
    }
  },

  ORDER: {
    title: 'Order',
    SECTIONS: {
      ORDER_ID: {
        label: 'Order reference number'
      },

      PRODUCTS: {
        title: 'Products'
      },

      STATUS: {
        title: 'Order status'
      },

      BILLING: {
        title: 'Billing',
        LABELS: {
          products_price: 'Products price',
          delivery_price: 'Delivery',
          payment_price: 'Payment',
          discount: 'Discount',
          grand_total: 'Total to pay',
          vat: '(including TAX)'
        }
      },

      PAYMENT: {
        title: 'Payment details',
        info: 'Payment should be made within 5 working days from receiving order realization time confirmation.',
        LABELS: {
          nrb: 'Account number',
          amount: 'Outstanding amount',
          title: 'Payment title',
          recipient: 'Recipeint',
          bankName: 'Bank name'
        }
      },

      INVOICE: {
        title: 'Invoice',
        empty: 'Document is not yet available. Come back here later.',
        info: 'Document is available.',
        goToInvoice: 'View invoice'
      },

      DETAILS: {
        title: 'Details',
        LABELS: {
          created_at: 'Created order',
          updated_at: 'Last modification',
          product_count: 'Boxes count'
        }
      },

      PARCEL_DETAILS: {
        title: 'Delivery',
        LABELS: {
          parcel_id: 'Reference number',
          follow_parcel: 'Follow parcel'
        }
      },

      SHIPPING: {
        title: 'Shipping',
        LABELS: {
          delivery_type: 'Type',
          shipping_address: 'Destination'
        }
      },

      VOUCHER: {
        title: 'Wykorzystany kod rabatowy',
        LABELS: {
          voucher_id: 'Kod',
          voucher_value: 'Wartość'
        }
      }
    }
  },

  EUROPE: {
    title: 'Europe'
  },

  CHRISTMAS_2021: {
    title: 'OFERTA ŚWIĄTECZNA 2021',
    HALF_BANNER: {
      title: 'NIE ZWLEKAJ ZE SWOIM ZAMÓWIENIEM',
      info: 'Oferta obowiązuje do wyczerpania zapasów'
    },
    CHRISTMAS_PRODUCTS: {
      title: 'Święta'
    },
    NEW_YEAR_PRODUCTS: {
      title: 'Nowy Rok'
    }
  },

  VALENTINES_2022: {
    title: "Valentine's Day"
  }
}

export default en
