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
      title: 'Dane kontaktowe',
      address: 'Adres',
      shippings: 'Adres do wysyłki',
      nip: 'NIP'
    },

    TOAST: {
      success: 'Udało się!',
      error: 'Nie udało się'
    },

    LINKS: {
      home: 'Home',
      products: 'Products',
      howToCreateOrder: 'How to order',
      deliveryAndPayments: 'Delivery and payments',
      contact: 'Contact',
      orders: 'Orders',
      documents: 'Terms and conditions',
      christmas2021: 'Christmas Offer',

      adminOrders: 'Orders',
      adminNewsletterUsers: 'Newsletter users',
      adminCallbacks: 'Contact request',
      adminDeliveryTypes: 'Delivery methods',
      adminPaymentTypes: 'Payments methods',
      adminMolds: 'Molds',
      adminIcons: 'Icons',
      adminLabels: 'Labels'
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

    nrb,
    bankName,
    fullCompanyName,
    LANGUAGE_TOGGLE_LABEL: {
      pl: 'polski',
      en: 'english'
    },
    basketToggleLabel: 'Koszyk',
    profileToggleLabel: 'Profil użytkownika',
    signoutToggleLabel: 'Wyloguj',
    soon: 'Wkrótce',
    productsEmptyState: 'Nie znaleziono żadnych produktów',
    productsLoadMore: 'Pokaż więcej produktów',
    productsSingle: '{{count}} produkt',
    productsFew: '{{count}} produkty',
    productsMultiple: '{{count}} produktów',
    preloaderInfo: 'Ładowanie strony',
    loading: 'Ładowanie',
    companyName: domain,
    tableEmpty: 'Tabela jest pusta',
    productNameBase: 'Zapalniczka',
    unit: '(50 sztuk)',
    fetchErrorMessage: 'Nie udało się wczytać treści',
    fetchErrorRetry: 'Spróbuj ponownie',

    TABLE_HEADERS: {
      boxes_count: 'Liczba pudełek',
      consent: 'Zgoda',
      created_at: 'Data utworzenia',
      customer_email: 'Email',
      customer_name: 'Nazwa klienta',
      customer_phone: 'Telefon',
      delivery_id: 'Numer paczki',
      delivery_type: 'Typ dostawy',
      done: 'Wykonano',
      edit: 'Edycja',
      email: 'Adres email',
      frontend_icon_name: 'Ikona',
      id: 'Numer referencyjny',
      is_company: 'Czy firma?',
      is_enabled: 'Włączone',
      label: 'Etykieta',
      order_time: 'Czas zamówienia',
      phone_number: 'Numer telefonu',
      price: 'Cena',
      requires_address: 'Wymaga adresu',
      status: 'Status',
      sum: 'Suma',
      time: 'Czas',
      updated_at: 'Data modyfikacji',
      icon: 'Ikona',
      client: 'Klient',
      products: 'Produkty',
      product_name: 'Nazwa produktu',
      product_image: '',
      product_price: 'Cena',
      product_total: 'Total',
      molds: 'Matryce'
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
      OPEN: 'Nowe',
      CONFIRMED: 'Potwierdzone',
      PAYMENT_RECEIVED: 'Zapłacone',
      PRODUCTION: 'Produkcja',
      AWAITING_FOR_PICKUP: 'Oczekuje na dostawę',
      IN_DELIVERY: 'W dostawie',
      COMPLETED: 'Zakończone',
      REJECTED: 'Odrzucone'
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
        required: 'Proszę podać adres'
      },
      CITY: {
        required: 'Proszę podać miejscowość'
      },
      NIP: {
        required: 'Proszę podać NIP',
        length: 'NIP powinien zawierać 10 cyft',
        matches: 'NIP powinien zawierać tylko cyfry',
        invalid: 'NIP jest nieprawidłowy'
      },
      POST_CODE: {
        matches: 'Kod pocztowy powinien mieć format XX-XXX',
        required: 'Proszę podać kod pocztowy'
      },
      FULL_NAME: {
        required: 'Name and surname are required'
      },
      COMPANY: {
        required: 'Company name is required'
      },
      EMAIL: {
        email: 'Wprowadzony email jest niepoprawny',
        required: 'Proszę podać adres e-mail'
      },
      PHONE: {
        required: 'Proszę podać numer telefonu',
        matches:
          'Numer telefonu powinien składać się z numeru kierunkowego (48) i 9 cyfr'
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
        label: 'Imię i nazwisko',
        placeholder: ''
      },
      COMPANY: {
        label: 'Nazwa firmy',
        placeholder: ''
      },
      EMAIL: {
        label: 'Adres email',
        placeholder: ''
      },
      PHONE: {
        label: 'Numer telefonu',
        placeholder: 'Twój '
      },
      PHONE_NOT_MOBILE: {
        label: '',
        placeholder: 'Twój numer telefonu'
      },
      STREET_ADDRESS: {
        label: 'Adres (ulica, numer domu/mieszkania)',
        placeholder: ''
      },
      POST_CODE: {
        label: 'Kod pocztowy',
        placeholder: ''
      },
      CITY: {
        label: 'Miasto',
        placeholder: ''
      },
      NIP: {
        label: 'NIP',
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

    bestsellers: {
      title: 'Bestsellers',
      linkLabel: 'See all'
    },

    CHRISTMAS_2021: {
      title: 'Christmas',
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
    heading: "Ups! Pge wasn't found",
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
        info: 'Open for enquiries Monday to Friday between 9:00 and 17:00',
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
    title: 'Zamówienie',
    SECTIONS: {
      ORDER_ID: {
        label: 'Numer referencyjny zamówienia'
      },

      PRODUCTS: {
        title: 'Produkty'
      },

      STATUS: {
        title: 'Status zamówienia'
      },

      BILLING: {
        title: 'Szczegóły rozliczenia',
        LABELS: {
          products_price: 'Cena produktów',
          delivery_price: 'Dostawa',
          payment_price: 'Płatność',
          discount: 'Rabat',
          grand_total: 'Łącznie to zapłaty',
          vat: 'W tym VAT'
        }
      },

      PAYMENT: {
        title: 'Dane do płatności',
        info: 'Zamówienie należy opłacić w ciągu 5 dni roboczych od potwierdzenia przez nas czasu realizacji.',
        LABELS: {
          nrb: 'Numer konta',
          amount: 'Kwota do zapłaty',
          title: 'Tytuł płatności',
          recipient: 'Odbiorca płatności',
          bankName: 'Nazwa banku'
        }
      },

      INVOICE: {
        title: 'Faktura',
        empty:
          'Dokument nie jest jeszcze dostępny. Wróć tutaj ponownie za jakiś czas.',
        info: 'Dokument jest dostępny.',
        goToInvoice: 'Przejdź do faktury'
      },

      DETAILS: {
        title: 'Szczegóły',
        LABELS: {
          created_at: 'Złożenie zamówienia',
          updated_at: 'Ostatnia modyfikacja',
          product_count: 'Liczba pudełek'
        }
      },

      PARCEL_DETAILS: {
        title: 'Przesyłka',
        LABELS: {
          parcel_id: 'Numer referencyjny',
          follow_parcel: 'Śledź paczkę'
        }
      },

      SHIPPING: {
        title: 'Dostawa',
        LABELS: {
          delivery_type: 'Typ',
          shipping_address: 'Adres'
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
  }
}

export default en