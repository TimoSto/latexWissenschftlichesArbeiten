
export type TranslationKeys = {
    App: {
        TitleAppendixProjects: string
        Information: string
        Homepage: string
    },
    Home: {
        Welcome: string
        Description: string
        TemplateCard: {
            Title: string
            Content: string
        },
        BibCard: {
            Title: string
            Content: string
        },
        CVCard: {
            Title: string
            Content: string
        },
        ContactCard: {
            Title: string
            Content: string
        }
    },
    Projects: {
        Info: {
            Description: string
        }
    }
}

export const i18nDictionary: TranslationKeys = {
    App: {
        TitleAppendixProjects: 'App.TitleAppendixProjects',
        Information: 'App.Information',
        Homepage: 'App.Homepage'
    },
    Home: {
        Welcome: 'Home.Welcome',
        Description: 'Home.Description',
        TemplateCard: {
            Title: 'Home.TemplateCard.Title',
            Content: 'Home.TemplateCard.Content'
        },
        BibCard: {
            Title: 'Home.BibCard.Title',
            Content: 'Home.BibCard.Content'
        },
        CVCard: {
            Title: 'Home.CVCard.Title',
            Content: 'Home.CVCard.Content'
        },
        ContactCard: {
            Title: 'Home.ContactCard.Title',
            Content: 'Home.ContactCard.Content'
        }
    },
    Projects: {
        Info: {
            Description: 'Projects.Info.Description'
        }
    }
}