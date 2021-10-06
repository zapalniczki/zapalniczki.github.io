const pl = {
  COMMON: {
    soon: 'Wkrótce',

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
      links: {
        home: 'Strona Główna',
        products: 'Produkty',
        howToCreateOrder: 'Jak złożyć zamówienie',
        deliveryAndPayments: 'Dostawa i płatności',
        contact: 'Kontakt'
      },
      adminLinks: {
        orders: 'Zamówienia',
        newsletterUsers: 'Użytkownicy newslettera',
        callbacks: 'Prośby o kontakt',
        deliveryTypes: 'Metody dostawy',
        paymentTypes: 'Metody płatności'
      },
      allRightsReserved: '© {{year}} Braty - Wszelkie prawa zastrzeżone',
      documents: 'Dokumenty'
    },

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

    customerTypes: {
      INDIVIDUAL: 'Klient indywidualny',
      COMPANY: 'Firma'
    },

    ORDER_STATUSES: {
      OPEN: 'Nowe',
      CONFIRMED: 'Potwierdzone',
      PAYMENT_RECEIVED: 'Zapłacone',
      IN_PREPARATION: 'W przygotowaniu',
      AWAITING_FOR_PICKUP: 'Oczekuje na kuriera',
      IN_DELIVERY: 'W dostawie',
      COMPLETED: 'Zakończone'
    },

    navigation: {
      home: 'Strona Główna',
      products: 'Produkty',
      HOW_TO_CREATE_ORDER: 'Jak złożyć zamówienie',
      deliveryAndPayments: 'Dostawa i płatności',
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
    },

    VALIDATIONS: {
      EMAIL: {
        email: 'Wprowadzony email jest niepoprawny',
        required: 'Proszę podać adres e-mail'
      },
      PHONE: {
        required: 'Proszę podać numer telefonu',
        matches: 'Numer telefonu może zawierać cyfry, spacje i znak +',
        min: 'Numer telefonu powinien składać się z numeru kierunkowego i 9 cyfr'
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
          default:
            'W tym momencie nie udało się ustalić przyczyny. Zadzwoń na 792 531 179, a my to dla Ciebie zrobimy.'
        }
      }
    },

    CALL_ME_BACK: {
      FORM: {
        title: 'Jeżeli masz jakikolwiek problem lub nie ma Twojego produktu...',
        subtitle:
          'Zadzwoń na +48 792 531 179 albo podaj swój numer telefonu, a my odzwonimy.',
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
    title: 'Podsumowanie',
    desc: 'Sprawdź produkty w Twoim koszyku.',
    productsTotal: 'Cena produktów:',
    emptyState:
      'Koszyk jest pusty. Dodaj produkty do koszyka i wróć tutaj później.'
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
    orderId: 'Numer referencyjny zamówienia to:',
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
    title: 'Zamówienia',
    STATUSES_INFO: {
      OPEN: 'Zamówienia, które dostały dopiero złożone. Oczekują na potwierdzenie przez nas zamówienia z klientem',
      CONFIRMED:
        'Zamówienia, które zostały potwierdzone i oczekują na płatność. Zmiana statusu po zaksięgowaniu "SUMA" na koncie.',
      PAYMENT_RECEIVED:
        'Zamówienia, które zostały opłacone. Zmiana statusu po zazieleniu wszystkich w "MATRYCE".',
      IN_PREPARATION:
        'Zamówienia, które można zrealizować. Zmiana statusu po ukończeniu produkcji.',
      AWAITING_FOR_PICKUP:
        'Zamówienia, które są wyprodukowane. Zmiana statusu po wprowadzeniu "NUMER PACZKI".',
      IN_DELIVERY:
        'Zamówienia, które są odebrane przez kuriera. Zmiana statusu po otrzymaniu paczki przez klienta.',
      COMPLETED: 'Zamówienia, które są ukończone.'
    },
    headers: {
      id: 'Numer referencyjny',
      status: 'Zmień status ',
      customerName: 'Nazwa klienta',
      customerPhone: 'Telefon',
      customerEmail: 'Email',
      createdAt: 'Data zamówienia',
      updatedAt: 'Data modyfikacji',
      deliveryType: 'Typ dostawy',
      sum: 'Suma',
      boxesCount: 'Liczba pudełek',
      molds: 'Matryce',
      orderTime: 'Czas zamówienia',
      deliveryId: 'Numer paczki'
    },
    IS_COMPANY: {
      yes: 'Tak',
      no: 'Nie'
    },
    emptyState: 'Nie ma żadnych zamówień'
  },

  ADMIN_NEWSLETTER_USERS: {
    title: 'Użytkownicy newslettera',
    LIST: {
      title: 'Lista',
      HEADERS: {
        email: 'Adres email',
        created_at: 'Data utworzenia',
        updated_at: 'Data modyfikacji',
        consent: 'Zgoda',
        edit: 'Edycja'
      }
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
    HEADERS: {
      created_at: 'Data utworzenia',
      updated_at: 'Data modyfikacji',
      phone_number: 'Numer telefonu',
      done: 'Wykonano'
    }
  },

  ADMIN_DELIVERY_TYPES: {
    title: 'Metody dostawy',
    HEADERS: {
      created_at: 'Data utworzenia',
      updated_at: 'Data modyfikacji',
      label: 'Etykieta',
      price: 'Cena',
      time: 'Czas',
      requires_address: 'Wymaga adresu',
      is_enabled: 'Włączone',
      frontend_icon_name: 'Ikona'
    }
  },

  ADMIN_PAYMENT_TYPES: {
    title: 'Metody płatności',
    HEADERS: {
      created_at: 'Data utworzenia',
      updated_at: 'Data modyfikacji',
      label: 'Etykieta',
      price: 'Cena',
      time: 'Czas',
      is_enabled: 'Włączone',
      frontend_icon_name: 'Ikona'
    }
  },

  CONTACT: {
    title: 'Kontakt',
    items: {
      CHECK_STATUS: {
        title: 'Sprawdź status zamówienia',
        form: {
          id: {
            label: 'Numer referencyjny zamówienia',
            placeholder: 'Znajduje się w tytule każdej wiadomości email',
            validation: {
              required: 'To pole jest wymagane',
              length:
                'Numer referencyjny zamówienia powinien składać się z 36 znaków'
            }
          },

          submit: {
            label: 'Sprawdź'
          }
        },
        result: {
          info: 'Status Twojego zamówienia to',
          statusesMeanings: {
            OPEN: 'Co oznacza, że zamówienie zostało niedawno złożone i niebawem skontaktujemy się z Tobą w celu potwierdzenia.',
            CONFIRMED:
              'Co oznacza, ze zamówienie zostało potwierdzone i oczekujemy na wpłatę środków.',
            PAYMENT_RECEIVED:
              'Co oznacza, że otrzymaliśmy środki i niebawem przystąpimy do jego realizacji.',
            IN_PREPARATION:
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
          info: 'Podany numer referencyjny nie został znaleziony. Sprawdź podany numer i spróbuj jeszcze raz.',
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
          description:
            'Całkowity czas realizacji zależy od zamówienia. Zadzwoń na +48 792 531 179 i upewnj się, że zamówienie będzie na czas.'
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
