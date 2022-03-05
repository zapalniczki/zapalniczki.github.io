import { BRATY_PHONE } from 'braty-common'

const pl = {
  COMMON: {
    MARKETING_STATUSES: {
      REJECTED: 'Brak zainteresowania',
      UNANSWERED: 'Nieodebrane',
      INTERESTED: 'Wysłano',
      TODO: 'To zrobienia'
    },

    COUNTRIES: {
      GERMANY: 'Niemcy',
      'UNITED KINGDOM': 'Wielka Brytania',
      POLAND: 'Polska'
    },
    BANNERS: {
      YOUR_PLACE: {
        title:
          '<strong>Twoje</strong> miejsce w <strong>Twoim</strong> punkcie',
        subtitle:
          'Największy wybór zapalniczek z nazwą miejscowości. Znajdź swoją zapalniczkę i razem z nami poszerzaj swoją ofertę sprzedażową.',
        buttonLabel: 'Produkty'
      },
      CHRISTMAS_2021: {
        tite: '<strong>Wyjątkowa</strong> oferta <strong>świąteczna</strong>',
        subtitle:
          'Jako jedyni w Polsce oferujemy zapalniczki tłoczone metodą hotstampingu z unikalnymi wzorami dedykowanymi na ten specjalny czas. Zapraszamy do zapoznania się z naszymi produktami.'
      }
    },

    COOKIES_CONSENT: {
      agree: 'Przejdź do strony',
      info: 'Strona braty.co używa plików cookies. Korzystając ze strony wyrażasz zgodę na używanie cookies, zgodnie z aktualnymi ustawieniami przeglądarki.'
    },

    ERRORS: {
      23505: 'Podany adres e-mail jest już zarejestrowany',
      'Invalid login credentials': 'Nieprawidłowa nazwa użytkownika lub hasło',
      'User already registered': 'Podany adres email jest już zajęty',
      default: `Nieoczekiwany błąd. Spróbuj ponownie lub zadzwoń na {{phone}}.`
    },

    CONTACT_DETAILS: {
      title: 'Dane kontaktowe',
      email: 'Email',
      phone: 'Telefon',
      address: 'Adres',
      shippings: 'Adres do wysyłki',
      nip: 'NIP',
      profile: 'Profil'
    },

    TOASTS: {
      success: 'Udało się!',
      error: 'Nie udało się',
      addedProductToBasket: 'Dodano produkt do koszyka',
      removeProductFromBasket: 'Usunięto produkt z koszyka',
      removedNotAvailableProductFromBasket:
        'Usunęliśmy niektóre produkty z koszyka, ponieważ nie są już dostępne'
    },

    LINKS: {
      christmas2021: 'Oferta Świąteczna',
      companyOffer: 'Oferta dla firmy',
      contact: 'Kontakt',
      deliveryAndPayments: 'Dostawa i płatności',
      documents: 'Dokumenty',
      home: 'Strona Główna',
      howToCreateOrder: 'Jak złożyć zamówienie',
      orders: 'Zamówienia',
      products: 'Produkty',
      valentinesDay: 'Walentynki 2022',
      europe: 'Europa',

      adminOrders: 'Zamówienia',
      adminCallbacks: 'Prośby o kontakt',
      adminDeliveryTypes: 'Metody dostawy',
      adminPaymentTypes: 'Metody płatności',
      adminMolds: 'Matryce',
      adminIcons: 'Ikony',
      adminLabels: 'Etykiety',
      adminMarketing: 'Marketing'
    },

    CAROUSEL: {
      arrows: {
        prev: 'Poprzedni banner',
        next: 'Następny banner'
      }
    },

    LANGUAGE_TOGGLE_LABEL: {
      pl: 'polski',
      en: 'english'
    },

    basketToggleLabel: 'Koszyk',
    profileToggleLabel: 'Profil użytkownika',
    signoutToggleLabel: 'Wyloguj',
    soon: 'Wkrótce',
    emailSubject: 'Kontakt ze strony internetowej',
    productsEmptyState: 'Nie znaleziono żadnych produktów',
    productsLoadMore: 'Pokaż więcej',
    productsSingle: '{{count}} produkt',
    productsFew: '{{count}} produkty',
    productsMultiple: '{{count}} produktów',
    loading: 'Ładowanie...',
    tableEmpty: 'Tabela jest pusta',
    productNameBase: 'Zapalniczka',
    unit: '(50 sztuk)',
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
      molds: 'Matryce',
      name: 'Nazwa',
      notes: 'Notatki',
      order_time: 'Czas zamówienia',
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
      allRightsReserved: `© {{year}} {{companyName}} - Wszelkie prawa zastrzeżone`
    },

    checkoutSteps: {
      1: 'Faktura',
      2: 'Dostawa',
      3: 'Płatność'
    },

    CHECKOUT_TOTAL: {
      title: 'Podsumowanie',
      goToCheckout: 'Przejdź do kasy',
      goToDelivery: 'Przejdź do dostawy',
      goToPayment: 'Przejdź do płatności',
      createOrder: 'Składam zamówienie',

      products: 'Cena produktów',
      delivery: 'Dostawa',
      payment: 'Płatność',
      discount: 'Obniżka',
      total: 'Łącznie do zapłaty',
      vat: '(w tym 23% VAT)',
      info: 'Informujemy, że administratorem Twoich danych jest {{address}}. Klikając przycisk "Składam zamówienie" potwierdzam, że zapoznałem/am się z regulaminem sklepu internetowego {{companyName}} i akceptuję jego treść.'
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
      AWAITING_FOR_PICKUP: 'Oczekuje na dostawę',
      IN_DELIVERY: 'W dostawie',
      COMPLETED: 'Zakończone',
      REJECTED: 'Odrzucone'
    },

    STATUS_MEANINGS: {
      OPEN: 'Co oznacza, że zamówienie zostało niedawno złożone i oczekuje na potwierdzenie czasu realizacji zamówienia.',
      CONFIRMED:
        'Co oznacza, ze zamówienie zostało potwierdzone i oczekujemy na wpłatę środków.',
      PAYMENT_RECEIVED:
        'Co oznacza, że otrzymaliśmy środki i niebawem przystąpimy do jego realizacji.',
      PRODUCTION: 'Co oznacza, że zamówienie jest realizowane właśnie teraz.',
      AWAITING_FOR_PICKUP:
        'Co oznacza, że zamówienie zostało skompletowane i oczekuje na kuriera.',
      IN_DELIVERY: 'Co oznacza, że zamówienie jest w drodze.',
      COMPLETED:
        'Co oznacza, że zamówienie zostało skompletowane i dostarczone.',
      REJECTED: 'Co oznacza, że zamówienie nie będzie realizowane'
    },

    BASKET: {
      clear: 'Wyczyść',
      empty: 'Koszyk jest pusty',
      title: 'Koszyk',
      total: 'Cena produktów',
      checkout: 'Złóż zamówienie',
      products: '({{count}} produkt)',
      products_plural: '({{count}} produkty)',
      products_multiple: '({{count}} produktów)',
      each: 'pudełko'
    },

    HAMBURGER_MENU: {
      title: 'Menu'
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
      MARKETING_STATUS: {
        required: 'Proszę podać status'
      },
      COUNTRY: {
        required: 'Proszę podać kraj'
      },
      VOUCHER_ID: {
        length: 'Kod rabatowy powinień mieć 36 znaków'
      },
      PRODUCT_QUANTITY: {
        required: 'error',
        min: 'error',
        max: 'error'
      },
      DELIVERY_TYPE: {
        required: 'Wybierz aby przejść dalej'
      },
      PAYMENT_TYPE: {
        required: 'Wybierz aby przejść dalej'
      },
      STREET_ADDRESS: {
        required: 'Proszę podać adres'
      },
      CITY: {
        required: 'Proszę podać miejscowość'
      },
      NIP_PL: {
        required: 'Proszę podać NIP',
        length: 'NIP powinien zawierać 10 cyfr',
        matches: 'NIP powinien zawierać tylko cyfry',
        invalid: 'NIP jest nieprawidłowy'
      },
      NIP_UK: {
        invalid: 'VAT jest nieprawidłowy'
      },
      NIP_DE: {
        invalid: 'VAT jest nieprawidłowy'
      },
      POST_CODE_PL: {
        matches: 'Kod pocztowy powinien mieć format XX-XXX',
        required: 'Proszę podać kod pocztowy'
      },
      POST_CODE_UK: {
        matches: 'Kod pocztowy jest nieprawidłowy',
        required: 'Proszę podać kod pocztowy'
      },
      POST_CODE_DE: {
        matches: 'Kod pocztowy jest nieprawidłowy',
        required: 'Proszę podać kod pocztowy'
      },
      FULL_NAME: {
        required: 'Proszę podać imię i nazwisko'
      },
      COMPANY: {
        required: 'Proszę podać nazwę firmy'
      },
      EMAIL: {
        email: 'Wprowadzony email jest niepoprawny',
        required: 'Proszę podać adres e-mail'
      },
      PHONE: {
        required: 'Proszę podać numer telefonu',
        matches: 'Numer telefonu powinien zawierać co najmniej 6 cyfr'
      },
      ORDER_ID: {
        required: 'Proszę podać numer referencyjny zamówienia',
        length: 'Numer referencyjny zamówienia powinien składać się z 36 znaków'
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
      MARKETING_STATUS: {
        label: 'Status',
        placeholder: ''
      },

      PARCEL_REF: {
        label: 'Numer paczki',
        placeholder: ''
      },
      PARCEL_LINK: {
        label: 'Link do statusu paczki',
        placeholder: ''
      },
      VOUCHER_ID: {
        label: 'Kod rabatowy',
        placeholder: 'placeholder'
      },
      COUNTRY: {
        label: 'Kraj',
        placeholder: ''
      },
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
      POST_CODE_PL: {
        label: 'Kod pocztowy',
        placeholder: ''
      },
      POST_CODE_UK: {
        label: 'Kod pocztowy',
        placeholder: ''
      },
      POST_CODE_DE: {
        label: 'Kod pocztowy',
        placeholder: ''
      },
      CITY: {
        label: 'Miasto',
        placeholder: ''
      },
      NIP_PL: {
        label: 'NIP',
        placeholder: ''
      },
      NIP_UK: {
        label: 'Numer VAT',
        placeholder: ''
      },
      NIP_DE: {
        label: 'Numer VAT',
        placeholder: ''
      },
      ORDER_ID: {
        label: 'Numer referencyjny zamówienia',
        placeholder: 'Znajduje się w tytule każdej wiadomości email'
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
        label: 'Notatki',
        placeholder: 'Wpisz cokolwiek'
      },
      NAME: {
        label: 'Nazwa',
        placeholder: ''
      },
      PLUS_CODE: {
        label: 'Kod Plus',
        placeholder: 'Wklej kod plus'
      },
      SEND_BROCHURE_AGREEMENT: {
        label: 'Zgoda na wysłanie katalogu produktów'
      },
      SEND_BROCHURE_CYCLIC_AGREEMENT: {
        label: 'Zgoda na wysyłanie katalogu produktów cyklicznie'
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
        subtitle: `Zadzwoń na {{phoneNumber}} albo podaj swój numer telefonu, a my odzwonimy.`,
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
    title: 'Strona Główna',

    FEATURED: {
      title: 'Nowości'
    },

    CATALOGUE: {
      title: 'Katalog produktów',
      linkLabel: 'Zobacz'
    },

    bestsellers: {
      title: 'Bestsellery',
      linkLabel: 'Zobacz wszystkie'
    },

    CHRISTMAS_2021: {
      title: 'Święta',
      linkLabel: 'Zobacz wszystkie'
    },

    VALENTINES_DAY: {
      title: 'Walentynki',
      linkLabel: 'Zobacz wszystkie'
    },

    NEW_YEARS_EVE_2022: {
      title: 'Nowy Rok',
      linkLabel: 'Zobacz wszystkie'
    }
  },

  CART: {
    title: 'Koszyk',
    emptyState:
      'Koszyk jest pusty. Dodaj produkty do koszyka i wróć tutaj później.'
  },

  CHECKOUT_DETAILS: {
    back: 'Wróć do koszyka',
    title: 'Faktura'
  },

  CHECKOUT_DELIVERY: {
    back: 'Wróć do faktury',
    title: 'Dostawa',
    sameAddress: 'Dostawa pod inny adres'
  },

  CHECKOUT_PAYMENT: {
    back: 'Wróć do dostawy',
    title: 'Płatność',
    voucher: {
      applyVoucher: 'Wykorzystaj kod',
      error: 'Kod jest nieprawidłowy',
      successToastMessage: 'Kod został zaakceptowany'
    }
  },

  CHECKOUT_RESULT: {
    MAIN: {
      title: 'Zamówienie zostało złożone',
      PAYMENT_INFO: {
        short:
          'Na podany adres email wysłaliśmy wiadomość z potwierdzeniem, w której znajdziesz informacje potrzebne do płatności. Po zaksięgowaniu środków na koncie, poinformujemy Cię o tym i przystąpimy do realizacji zamówienia.',
        long: 'Na podany adres email wysłaliśmy wiadomość z potwierdzeniem. Skontaktujemy się z Tobą w następnym dniu roboczym i potwierdzimy czas realizacji zamówienia.'
      },
      ACTIONS: {
        backToHome: 'Wróć na stronę główną',
        seeOrder: 'Zobacz zamówienie'
      }
    },

    SETTINGS: {
      title: 'Ustawienia',
      safeMyDetails: 'Zapamiętaj moje dane'
    }
  },

  PRODUCTS: {
    title: 'Produkty',
    showAllLabel: 'Pokaż wszystkie',

    FILTERS: {
      title: 'Wyszukaj swój produkt',
      searchPlaceholder: 'Wpisz nazwę produktu, miejscowość lub ikonę',
      collections: 'Kategorie',
      icons: 'Ikony',
      search: 'Szukaj',
      clear: 'Wyczyść'
    }
  },

  PAGE_NOT_FOUND: {
    title: '404',
    heading: 'Ups! Nie znaleziono strony',
    buttonLabel: 'Przejdź na stronę główną'
  },

  CUSTOMER: {
    title: 'Konto użytkownika',

    RECENT_ORDERS: {
      title: 'Ostatnie zamówienia',
      emptyState: 'Brak zamówień'
    }
  },

  VIEW_PRODUCT: {
    title: '{{productName}}',
    icon: 'ikona',
    label: 'napis',
    color: 'kolor',
    collection: 'kategoria',
    colorValueTODO: 'drewno mix',
    sku: 'SKU',
    notVisible: 'Produkt nie jest dostępny',

    priceSubtitle: 'Cena za 1 pudełko (50 sztuk) - zawiera 23% VAT',
    avilability: {
      DONE: 'Produkt łatwo dostępny',
      IN_PROGRESS: 'Produkt dostępny',
      UNDONE: 'Produkt średnio dostępny'
    },

    boxes: 'pudełko',
    boxes_plural: 'pudełka',
    boxes_multiple: 'pudełek',

    actions: {
      goBack: 'Wróć',
      addToBasket: 'Dodaj do koszyka',
      inBasket: 'Produkt w koszyku',
      updateInBasket: 'Zaktualizuj koszyk'
    },

    OTHER_ICONS: {
      title: 'Inne ikony',
      linkLabel: 'Zobacz wszystkie'
    },

    OTHER_LABELS: {
      title: 'Inne napisy',
      linkLabel: 'Zobacz wszystkie'
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
    testDataEnabled: 'Dane testowe',
    FORM_MODAL: {
      titleEdit: 'Edycja',
      titleAdd: 'Dodawanie',
      buttonLabelEdit: 'Edytuj',
      buttonLabelAdd: 'Dodaj'
    },
    REMOVE_MODAL: {
      title: 'Czy chcesz usunąć ten wpis?',
      buttonLabel: 'Usuń'
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
          tryNew: 'Sprawdź kolejne',
          seeOrder: 'Zobacz zamówienie'
        },
        error: {
          title: 'Podany numer referencyjny nie został znaleziony',
          info: 'Sprawdź podany numer i spróbuj jeszcze raz.',
          tryAgain: 'Spróbuj ponownie'
        }
      },

      EMAIL: {
        title: 'E-mail'
      },

      DOWNLOAD_INVOICE: {
        title: 'Pobierz fakturę',
        result: {
          title: 'Faktura jest gotowa do pobrania',
          info: 'Dokument możesz obejrzeć odwiedzając poniższy link',
          new: 'Sprawdź kolejną',
          followLink: 'Przejdź do faktury'
        },
        error: {
          title: 'Faktura nie jest gotowa',
          info: `Dla podanego numeru referencyjnego nie znaleźliśmy faktury. Sprawdź podany numer i spróbuj jeszcze raz.`,
          new: 'Spróbuj ponownie'
        }
      },

      ADDRESS: {
        title: 'Adres'
      },

      PHONE: {
        title: 'Telefon'
      },

      ACCOUNT: {
        title: 'Dane do płatności',
        bankName: 'Nazwa banku',
        bic: 'BIC',
        recipient: 'Recipient',
        iban: 'IBAN',
        titleRef: 'Tytuł',
        // TODO
        titleVal: 'Numer referencyjny zamówienia'
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
          description: `Całkowity czas realizacji zależy od zamówienia. Zadzwoń na ${BRATY_PHONE} i upewnj się, że zamówienie będzie na czas.`
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
    subtitle: 'Numer referencyjny zamówienia',
    SECTIONS: {
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
          vat: '(W tym 23% VAT)'
        }
      },

      PAYMENT: {
        title: 'Dane do płatności',
        info: 'Zamówienie należy opłacić w ciągu 10 dni roboczych od potwierdzenia przez nas czasu realizacji.',
        LABELS: {
          iban: 'IBAN',
          bic: 'BIC',
          amount: 'Kwota do zapłaty',
          title: 'Tytuł',
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

      SHIPPING: {
        title: 'Dostawa',
        LABELS: {
          parcel_id: 'Numer referencyjny',
          follow_parcel: 'Śledź paczkę',
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
      },

      ACTIONS: {
        title: 'Dostępne akcje',
        emptyState: 'Brak dostępnych akcji',
        copyProductsToBasket: 'Dodaj te produkty to koszyka',
        cancelOrder: 'Anuluj zamówienie'
      }
    }
  },

  EUROPE: {
    title: 'Europa',

    GERMANY: {
      title: 'Niemcy'
    },

    UNITED_KINGDOM: {
      title: 'Wielka Brytania'
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
  },

  VALENTINES_2022: {
    title: 'Walentynki 2022'
  }
}

export type LanguageKeys = typeof pl

export default pl
