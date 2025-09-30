// keystatic.config.ts
import {config, fields, collection, singleton} from '@keystatic/core';

const projectsSchema = collection({
    label: 'Projekty',
    slugField: 'title',
    path: 'src/content/projects/*',
    format: {contentField: 'content'},
    schema: {
        title: fields.slug({name: {label: 'Tytuł'}}),
        metaTitle: fields.text({label: 'Meta tytuł'}),
        metaDescription: fields.text({label: 'Meta opis', multiline: true}),
        content: fields.markdoc({label: 'Content', extension: "md"}),
        images: fields.array(
            fields.object({
                src: fields.text({label: 'Link do obrazu'}),
                alt: fields.text({label: 'Opis obrazu'}),
            }),
            {
                label: 'Zdjęcia',
                itemLabel: (item) => item.fields.alt.value || item.fields.src.value,
            }
        ),
    },
});

const servicesSchema = collection({
    label: 'Oferta',
    slugField: 'title',
    path: 'src/content/services/*',
    format: {contentField: 'content'},
    schema: {
        title: fields.slug({name: {label: 'Nazwa zasobu'}}),
        metaTitle: fields.text({label: 'Meta tytuł'}),
        metaDescription: fields.text({label: 'Meta opis', multiline: true}),
        content: fields.markdoc({label: 'Content', extension: 'md'}),
        images: fields.array(
            fields.object({
                src: fields.text({label: 'Link do obrazu'}),
                alt: fields.text({label: 'Opis obrazu'}),
            }),
            {
                label: 'Zdjęcia',
                itemLabel: (item) => item.fields.alt.value || item.fields.src.value,
            }
        ),
    },
});

const headerSchema = singleton({
    label: 'Nagłówek',
    path: 'src/content/config/header',
    schema: {
        title: fields.text({label: 'Nazwa strony'}),
        logo: fields.object({
            src: fields.text({label: 'Link do logo'}),
            alt: fields.text({label: 'Opis logo'}),
        }),
        links: fields.array(
            fields.object({
                name: fields.text({label: 'Nazwa linku'}),
                url: fields.text({label: 'Adres linku'}),
            }),
            {
                label: 'Linki',
                itemLabel: (props) => props.fields.name.value,
            }
        ),
    },
});

const heroSchema = singleton({
    label: 'Hero',
    path: 'src/content/config/hero',
    schema: {
        owner: fields.text({label: 'Właściciel'}),
        company: fields.text({label: 'Nazwa firmy'}),
        location: fields.text({label: 'Położenie'}),
        offer: fields.text({label: 'Oferta'}),
        description: fields.text({label: 'Opis', multiline: true}),
        button: fields.object({
            text: fields.text({label: 'Tekst przycisku'}),
            path: fields.text({label: 'Adres linku'}),
        }),
        image: fields.object({
            src: fields.text({label: 'Link do obrazu'}),
            alt: fields.text({label: 'Opis obrazu'}),
        }),
    },
});

const highlightsSchema = singleton({
    label: 'Wyróżnienia',
    path: 'src/content/config/highlights',
    schema: {
        items: fields.array(
            fields.object({
                title: fields.text({label: 'Tytuł'}),
                first: fields.text({label: 'Pierwsza linia'}),
                second: fields.text({label: 'Druga linia'}),
                icon: fields.object({
                    src: fields.text({label: 'Link do iconki'}),
                    alt: fields.text({label: 'Opis ikonki'}),
                }),
            }),
            {
                label: 'Wyróżnienia',
                itemLabel: (props) => props.fields.title.value,
            }
        ),
    },
});

const aboutSchema = singleton({
    label: 'O nas',
    path: 'src/content/config/about',
    schema: {
        subject: fields.text({label: 'Kategoria'}),
        title: fields.text({label: 'Tytuł'}),
        description: fields.text({label: 'Opis', multiline: true}),
        button: fields.object({
            text: fields.text({label: 'Tekst przycisku'}),
            path: fields.text({label: 'Adres linku'}),
        }),
        image: fields.object({
            src: fields.text({label: 'Link do obrazu'}),
            alt: fields.text({label: 'Opis obrazu'}),
        }),
    },
});

const offeringsSchema = singleton({
    label: 'Oferta',
    path: 'src/content/config/offerings',
    schema: {
        subject: fields.text({label: 'Kategoria'}),
        title: fields.text({label: 'Tytuł'}),
        description: fields.text({label: 'Opis', multiline: true}),
        items: fields.array(
            fields.object({
                title: fields.text({label: 'Tytuł'}),
                description: fields.text({label: 'Opis', multiline: true}),
                image: fields.object({
                    src: fields.text({label: 'Link do obrazu'}),
                    alt: fields.text({label: 'Opis obrazu'}),
                }),
                url: fields.text({label: 'Link'}),
            }),
            {
                label: 'Oferty',
                itemLabel: (props) => props.fields.title.value,
            }
        ),
    },
});

const advantagesSchema = singleton({
    label: 'Dlaczego my',
    path: 'src/content/config/advantages',
    schema: {
        subject: fields.text({label: 'Kategoria'}),
        title: fields.text({label: 'Tytuł'}),
        description: fields.text({label: 'Opis', multiline: true}),
        button: fields.object({
            text: fields.text({label: 'Tekst przycisku'}),
            path: fields.text({label: 'Adres linku'}),
        }),
        items: fields.array(
            fields.object({
                title: fields.text({label: 'Tytuł'}),
                description: fields.text({label: 'Opis', multiline: true}),
                image: fields.object({
                    src: fields.text({label: 'Link do ikony'}),
                    alt: fields.text({label: 'Opis ikony'}),
                }),
            }),
            {
                label: 'Zalety',
                itemLabel: (props) => props.fields.title.value,
            }
        ),
    },
});

const faqSchema = singleton({
    label: 'FAQ',
    path: 'src/content/config/faq',
    schema: {
        subject: fields.text({label: 'Kategoria'}),
        title: fields.text({label: 'Tytuł'}),
        description: fields.text({label: 'Opis', multiline: true}),
        questions: fields.array(
            fields.object({
                question: fields.text({label: 'Pytanie'}),
                answer: fields.text({label: 'Odpowiedź', multiline: true}),
            }),
            {
                label: 'Pytania',
                itemLabel: (props) => props.fields.question.value,
            }
        ),
    },
});

const portfolioSchema = singleton({
    label: 'Portfolio',
    path: 'src/content/config/portfolio',
    schema: {
        subject: fields.text({label: 'Kategoria'}),
        title: fields.text({label: 'Tytuł'}),
        description: fields.text({label: 'Opis', multiline: true}),
        button: fields.text({label: 'Tekst przycisku'}),
        images: fields.array(
            fields.object({
                src: fields.text({label: 'Link do obrazu'}),
                alt: fields.text({label: 'Opis obrazu'}),
            }),
            {
                label: 'Projekty',
                itemLabel: (props) => props.fields.alt.value,
            }
        ),
    }
});

const partnersSchema = singleton({
    label: 'Partnerzy',
    path: 'src/content/config/partners',
    schema: {
        subject: fields.text({label: 'Kategoria'}),
        title: fields.text({label: 'Tytuł'}),
        description: fields.text({label: 'Opis', multiline: true}),
        button: fields.text({label: 'Tekst przycisku'}),
        items: fields.array(
            fields.object({
                title: fields.text({label: 'Nazwa firmy'}),
                description: fields.text({label: 'Opis', multiline: true}),
                url: fields.text({label: 'Adres strony'}),
                image: fields.object({
                    src: fields.text({label: 'Link do obrazu'}),
                    alt: fields.text({label: 'Opis obrazu'}),
                }),
            }),
            {
                label: 'Firmy',
                itemLabel: (props) => props.fields.title.value,
            }
        ),
    },
});

const contactSchema = singleton({
    label: 'Kontakt',
    path: 'src/content/config/contact',
    schema: {
        subject: fields.text({label: 'Kategoria'}),
        title: fields.text({label: 'Tytuł'}),
        description: fields.text({label: 'Opis', multiline: true}),
        contact: fields.object({
            email: fields.text({label: 'Adres email'}),
            phone: fields.text({label: 'Numer telefonu'}),
        }),
        address: fields.object({
            town: fields.text({label: 'Miejscowość'}),
            number: fields.text({label: 'Numer domu'}),
            commune: fields.text({label: 'Gmina'}),
            zipCode: fields.text({label: 'Kod pocztowy'}),
            province: fields.text({label: 'Województwo'}),
        }),
        icons: fields.array(
            fields.object({
                src: fields.text({label: 'Link do obrazu'}),
                alt: fields.text({label: 'Opis obrazu'}),
            }),
            {
                label: 'Ikony',
                itemLabel: (props) => props.fields.alt.value,
            }
        ),
        companyHeading: fields.text({label: 'Tytuł firmy'}),
        companyLocation: fields.text({label: 'Położenie'}),
        companyDescription: fields.text({label: 'Opis firmy', multiline: true}),
        listHeading: fields.text({label: 'Tytuł ofert'}),
        formHeading: fields.text({label: 'Tytuł formularza'}),
    },
});

const footerSchema = singleton({
    label: 'Stopka',
    path: 'src/content/config/footer',
    schema: {
        name: fields.text({label: 'Nazwa firmy'}),
        description: fields.text({label: 'Opis firmy'}),
        icon: fields.object({
            src: fields.text({label: 'Link do logo'}),
            alt: fields.text({label: 'Opis logo'}),
            url: fields.text({label: 'Adres firmy'}),
        }),
    },
});

export default config({
    storage: {
        kind: 'github',
        repo: "kmlab-webdev/wsol-landing-page",
    },
    collections: {
        projects: projectsSchema,
        service: servicesSchema,
    },
    singletons: {
        header: headerSchema,
        hero: heroSchema,
        highlights: highlightsSchema,
        about: aboutSchema,
        offerings: offeringsSchema,
        advantages: advantagesSchema,
        faq: faqSchema,
        portfolio: portfolioSchema,
        partners: partnersSchema,
        contact: contactSchema,
        footer: footerSchema,
    }
});