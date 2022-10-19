
export type TranslationKeys = {
    Common: {
        Discard: string
        Save: string
    },
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
        },
        ConfigCard: {
            Title: string
            Content: string
        }
    },
    Projects: {
        Info: {
            Description: string
        },
        New: {
            Title: string,
            Label: string,
            AlreadyExists: string
            NoSpaces: string
        },
        Overview: {
            DeleteProject: string,
            Entries: string,
            EntriesTable: {
                Key: string,
                Category: string,
                Entry: string,
                CiteCount: string
            },
            Types: string,
            TypesTable: {
                Name: string,
                EntryExample: string,
                CitaviType: string
            }
        }
    },
    Config: {
        Title: string
        DarkMode: string
        AutoOpen: string
    }
}

export const i18nDictionary: TranslationKeys = {
    Common: {
        Discard: 'Common.Discard',
        Save: 'Common.Save'
    },
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
        },
        ConfigCard: {
            Title: 'Home.ConfigCard.Title',
            Content: 'Home.ConfigCard.Content'
        }
    },
    Projects: {
        Info: {
            Description: 'Projects.Info.Description'
        },
        New: {
            Title: 'Projects.New.Title',
            Label: 'Projects.New.Label',
            AlreadyExists: 'Projects.New.AlreadyExists',
            NoSpaces: 'Projects.New.NoSpaces'
        },
        Overview: {
            DeleteProject: 'Projects.Overview.DeleteProject',
            Entries: 'Projects.Overview.Entries',
            EntriesTable: {
                Key: 'Projects.Overview.EntriesTable.Key',
                Category: 'Projects.Overview.EntriesTable.Category',
                Entry: 'Projects.Overview.EntriesTable.Entry',
                CiteCount: 'Projects.Overview.EntriesTable.CiteCount'
            },
            Types: 'Projects.Overview.Types',
            TypesTable: {
                Name: 'Projects.Overview.TypesTable.Name',
                EntryExample: 'Projects.Overview.TypesTable.EntryExample',
                CitaviType: 'Projects.Overview.TypesTable.CitaviType'
            }
        }
    },
    Config: {
        Title: 'Config.Title',
        DarkMode: 'Config.DarkMode',
        AutoOpen: 'Config.AutoOpen'
    }
}