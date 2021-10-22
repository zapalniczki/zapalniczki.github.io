const phoneNumer = '+48 792 531 179'
const companyName = 'Braty'
const domain = 'braty.co'

const pl = {
  COMMON: {
    LINKS: {
      home: 'Strona Główna',
      products: 'Produkty',
      howToCreateOrder: 'Jak złożyć zamówienie',
      deliveryAndPayments: 'Dostawa i płatności',
      contact: 'Kontakt',
      orders: 'Zamówienia',
      documents: 'Dokumenty',

      adminOrders: 'Zamówienia',
      adminNewsletterUsers: 'Użytkownicy newslettera',
      adminCallbacks: 'Prośby o kontakt',
      adminDeliveryTypes: 'Metody dostawy',
      adminPaymentTypes: 'Metody płatności',
      adminMolds: 'Matryce',
      adminIcons: 'Ikony',
      adminLabels: 'Etykiety'
    },

    soon: 'Wkrótce',
    emptyState: 'Nic nie znaleziono',

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
      icon: 'Ikona'

      // molds: 'Matryce'
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
      allRightsReserved: `{{version}} © {{year}} ${companyName} - Wszelkie prawa zastrzeżone`
    },

    checkoutSteps: {
      1: 'Produkty',
      2: 'Dane do faktury',
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

    customerTypes: {
      INDIVIDUAL: 'Klient indywidualny',
      COMPANY: 'Firma'
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
      AWAITING_FOR_PICKUP: 'Oczekuje na kuriera',
      IN_DELIVERY: 'W dostawie',
      COMPLETED: 'Zakończone'
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

    companyName: domain,

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
    },

    VALIDATIONS: {
      DELIVERY_TYPE: {
        required: 'Wybierz aby przejść dalej.'
      },
      PAYMENT_TYPE: {
        required: 'Wybierz aby przejść dalej.'
      },
      STREET_ADDRESS: {
        required: 'Proszę podać adres'
      },
      CITY: {
        required: 'Proszę podać miejscowość'
      },
      NIP: {
        required: 'Proszę podać prawidłowy NIP',
        length: 'NIP powinien mieć 10 znaków',
        matches: 'NIP powinien zawierać tylko cyfry'
      },
      POST_CODE: {
        matches: 'Kod pocztowy powinien mieć format XX-XXX',
        required: 'Proszę podać kod pocztowy'
      },
      FULL_NAME: {
        required: 'To pole jest wymagane'
      },
      COMPANY: {
        required: 'To pole jest wymagane'
      },
      EMAIL: {
        email: 'Wprowadzony email jest niepoprawny',
        required: 'Proszę podać adres e-mail'
      },
      PHONE: {
        required: 'Proszę podać numer telefonu',
        matches: 'Numer telefonu może zawierać cyfry, spacje i znak +',
        min: 'Numer telefonu powinien składać się z numeru kierunkowego i 9 cyfr'
      },
      ORDER_ID: {
        required: 'To pole jest wymagane',
        length: 'Numer referencyjny zamówienia powinien składać się z 36 znaków'
      }
    },

    INPUTS: {
      SUBMIT: {
        label: 'Sprawdź'
      },
      PAYMENT_TYPE: {
        label: 'Wybierz sposób płatności'
      },

      DELIVERY_TYPE: {
        label: 'Wybierz sposób dostawy'
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
        placeholder: ''
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
        label: 'Numer referencyjny zamówienia',
        placeholder: 'Znajduje się w tytule każdej wiadomości email'
      }
    },

    NEWSLETTER: {
      FORM: {
        title: 'Zapisz się do newslettera i zyskaj 10zł rabatu',
        subtitle:
          'Będziesz na bieżąco z nowymi produktami oraz ofertami specjalnymi',
        info: 'Naciskając przycisk "Potwierdzam i wysyłam" wyrażasz zgodę na przesyłanie informacji handlowych.',
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
        tryAgain: 'Spróbuj jeszcze raz',
        codes: {
          23505: 'Podany adres e-mail jest już zarejestrowany',
          default: `W tym momencie nie udało się ustalić przyczyny. Zadzwoń na ${phoneNumer}, a my to dla Ciebie zrobimy.`
        }
      }
    },

    CALL_ME_BACK: {
      FORM: {
        title: 'Jeżeli masz jakikolwiek problem lub nie ma Twojego produktu...',
        subtitle: `Zadzwoń na ${phoneNumer} albo podaj swój numer telefonu, a my odzwonimy.`,
        FORM: {
          PHONE: {
            placeholder: 'Twój numer telefonu'
          },
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

  HOME: {
    title: 'Strona Główna',
    banner: {
      title: 'Twoje miejsce w Twoim punkcie',
      description:
        'Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.',
      buttonLabel: 'Produkty'
    },

    FEATURED: {
      title: 'Nowości'
    },

    bestsellers: {
      title: 'Bestsellery',
      linkLabel: 'Zobacz wszystkie'
    }
  },

  CHECKOUT_PRODUCTS: {
    title: 'Produkty',
    desc: 'Sprawdź produkty w Twoim koszyku.',
    emptyState:
      'Koszyk jest pusty. Dodaj produkty do koszyka i wróć tutaj później.'
  },

  CHECKOUT_DETAILS: {
    title: 'Dane do faktury'
  },

  CHECKOUT_DELIVERY: {
    title: 'Dostawa',
    sameAddress: 'Czy adres dostawy różni się od adresu na fakturze?'
  },

  CHECKOUT_SHIPPING: {
    title: 'Dane do dostawy'
  },

  CHECKOUT_PAYMENT: {
    title: 'Płatność'
  },

  CHECKOUT_RESULT: {
    title: 'Zamówienie zostało złożone',
    orderId: 'Numer referencyjny zamówienia to:',
    PAYMENT_INFO: {
      short:
        'Na podany adres email wysłaliśmy wiadomość z potwierdzeniem, w której znajdziesz informacje potrzebne do płatności. Po zaksięgowaniu środków na koncie, poinformujemy Cię o tym i przystąpimy do realizacji zamówienia.',
      long: 'Na podany adres email wysłaliśmy wiadomość z potwierdzeniem. Skontaktujemy się z Tobą następnego dnia roboczego i potwierdziny czas realizacji zamówienia.'
    },
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
    searchPlaceholder: 'Wyszukaj',
    CALLBACK: {
      title: 'Nie widzisz potrzebnego produktu?',
      subtitle: 'Wpisz swój numer, a my odzwonimy.'
    }
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
      IN_PROGRESS: 'Produkt dostępny',
      UNDONE: 'Produkt średnio dostępny'
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
    title: 'Zamówienia',
    emptyState: 'Nie ma żadnych zamówień',

    STATUSES_INFO: {
      OPEN: 'Zamówienia, które dostały dopiero złożone. Oczekują na potwierdzenie przez nas zamówienia z klientem',
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
      COMPLETED: 'Zamówienia, które są ukończone.'
    },
    IS_COMPANY: {
      yes: 'Tak',
      no: 'Nie'
    },
    EDIT_MODAL: {
      buttonLabel: 'Edytuj',
      title: 'Edycja zamówienia',
      FORM: {
        STATUS: {
          label: 'Status zamówienia'
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
    title: 'Kontakt',
    items: {
      CHECK_STATUS: {
        title: 'Sprawdź status zamówienia',
        result: {
          statusesMeanings: {
            OPEN: 'Co oznacza, że zamówienie zostało niedawno złożone i niebawem skontaktujemy się z Tobą w celu potwierdzenia.',
            CONFIRMED:
              'Co oznacza, ze zamówienie zostało potwierdzone i oczekujemy na wpłatę środków.',
            PAYMENT_RECEIVED:
              'Co oznacza, że otrzymaliśmy środki i niebawem przystąpimy do jego realizacji.',
            PRODUCTION:
              'Co oznacza, że zamówienie jest realizowane właśnie teraz.',
            AWAITING_FOR_PICKUP:
              'Co oznacza, że zamówienie zostało skompletowane i oczekuje na kuriera.',
            IN_DELIVERY: 'Co oznacza, że zamówienie jest w drodze.',
            COMPLETED:
              'Co oznacza, że zamówienie zostało skompletowane i dostarczone.'
          },
          tryNew: 'Sprawdź kolejne'
        },
        error: {
          title: 'Podany numer referencyjny nie został znaleziony',
          info: 'Sprawdź podany numer i spróbuj jeszcze raz.',
          tryNew: 'Spróbuj ponownie'
        }
      },

      EMAIL: {
        title: 'E-mail',
        info: 'Kontakt w sprawie zamówień',
        email: `kontakt@${domain}`
      },

      DOWNLOAD_INVOICE: {
        title: 'Pobierz fakturę',
        result: {
          info: 'Faktura jest gotowa do pobrania',
          followLink: 'Przejdź do faktury',
          new: 'Sprawdź kolejną'
        },
        error: {
          title: 'Faktura nie jest gotowa',
          info: `Dla podanego numeru referencyjnego nie znaleźliśmy faktury. Sprawdź podany numer i spróbuj jeszcze raz.`,
          new: 'Spróbuj ponownie'
        }
      },

      ADDRESS: {
        title: 'Adres',
        info: 'Wymiany, zwroty i odbiór osobisty',
        address1: `${companyName} Przemysław Rychlewicz`,
        address2: 'ul. Bora-Komorowskiego 12/1',
        address3: '80-366 Gdańsk',
        address4: 'Polska'
      },

      PHONE: {
        title: 'Telefon',
        info: 'Czynne od poniedziałku do piątku, w godzinach 9:00 do 17:00.',
        mobile: phoneNumer
      },

      ACCOUNT: {
        title: 'Numer konta',
        info: 'Do wpłat',
        nrb: '31 1140 2004 0000 3402 8090 0648',
        info2: 'Nazwa banku: mBank S.A.',
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
      cookiesPolicy: 'Polityka Cookies'
    }
  }
}

export default pl
