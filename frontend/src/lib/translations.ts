export const translations = {
    en: {
        header: {
            logout: "Logout",
            logoutWarning: "Are you sure you want to log out?"
        },
        loginForm: {
            header: "Log in",
            errorMessage: "Check username and password!",
            username: "Username",
            password: "Password",
            rememberMe: "Remember me",
            forgotPassword: "Did you forget password?",
            login: "Login"
        },
        confirmModal: {
            cancel: "Cancel",
            confirm: "Confirm"
        },
        newProjectModal: {
            noNameError: "Project needs a name!",
            header: "Create a new project",
            placeholderText: "Name the project",
            cancel: "Cancel",
            createNew: "Create new",
            nameTakenError: "Name is already in use!"
        },
        projectList: {
            confirmDelete: "Are you sure you want to delete project",
            searchPlaceholder: "Find a project by name...",
            projectName: "Project's name",
            version: "Version",
            createdAt: "Created at",
            modifiedAt: "Modified at",
            versionCreatedAt: "Version Created at",
            noProjectsCouldBeFound: "No projects could be found."
        },
        printUtils: {
            projectReport: "Project Report",
            projectId: "Project ID",
            version: "Version",
            createdDate: "Created Date",
            versionCreatedDate: "Version Created Date",
            lastEditedDate: "Last Edited Date",
            className: "Class Name",
            componentType: "Component Type",
            dataElements: "Data Elements",
            readingReferences: "Reading References",
            writingReferences: "Writing References",
            functionalMultiplier: "Functional Multiplier",
            operations: "Operations",
            degreeOfCompletion: "Degree Of Completion",
            functionalPoints: "Functional Points",
            comment: "Comment",
            totalFunctionalPoints: "Total Functional Points",
        },
        functionalClassComponent: {
            //creates an object where keys and their values are the same
            classNameOptions: Object.fromEntries(
                [
                    "Interactive end-user navigation and query service",
                    "Interactive end-user input service",
                    "Non-interactive end-user output service",
                    "Interface service to other applications",
                    "Interface service from other applications",
                    "Data storage service",
                    "Algorithmic or manipulation service",
                ].map(key => [key, key])
            ),
            //creates an object where keys and their values are the same
            componentTypeOptions: Object.fromEntries(
                [
                    "function designators",
                    "log-in log-out functions",
                    "function lists",
                    "selection lists",
                    "data inquiries",
                    "generation indicators",
                    "browsing lists",
                    "1-functional",
                    "2-functional",
                    "3-functional",
                    "forms",
                    "reports",
                    "emails for text messages",
                    "monitor screens",
                    "messages to other applications",
                    "batch records to other applications",
                    "signals to devices or other applications",
                    "messages from other applications",
                    "batch records from other applications",
                    "signals from devices or other applications",
                    "entities or classes",
                    "other record types",
                    "security routines",
                    "calculation routines",
                    "simulation routines",
                    "formatting routines",
                    "database cleaning routines",
                    "other manipulation routines",
                ].map(key => [key, key])
            ),
            parameters: {
                dataElements: "Data Elements",
                writingReferences: "Writing References",
                readingReferences: "Reading References",
                operations: "Operations"
            },
            commentPlaceholder: "Comment",
            functionalPointText: "FP",
            functionalPointReadyText: "TP (Complete)",
            classNamePlaceholder: "Select Classname",
            componentTypePlaceholder: "Select Component Type",
            degreeOfCompletionPlaceholder: "Degree of Completion",
            confirmDeleteMessage: "Are you sure you want to delete component"
        },
        projectPage: {
            saveProject: "Save",
            newFunctionalComponent: "New Functional Component",
            noProject: "No project information to show!",
            saveProjectAsVersion: "Save version ",
            saveVersionWarningBeginning: "Are you sure you want to save the project as version",
            saveVersionWarningEnd: "Older versions cannot be modified.",
            projectSaved: "Project saved!",
            selectProjectVersion: "Select Project Version",
            version: "Version",
            nameOfProject: "Project name",
            expandAll: "Expand all",
            collapseAll: "Collapse all"
        },
        functionalPointSummary: {
            total: "Total",
            functionalPointText: "FP",
            csv: "Export CSV",
            pdf: "Export PDF"
        }
    },
    fi: {
        header: {
            logout: "Kirjaudu ulos",
            logoutWarning: "Oletko varma, että haluat kirjautua ulos?"
        },
        loginForm: {
            header: "Kirjaudu sisään",
            errorMessage: "Tarkista käyttäjänimi ja salasana!",
            username: "Käyttäjänimi",
            password: "Salasana",
            rememberMe: "Muista minut",
            forgotPassword: "Unohditko salasanan?",
            login: "Kirjaudu"
        },
        confirmModal: {
            cancel: "Peruuta",
            confirm: "Vahvista"
        },
        newProjectModal: {
            noNameError: "Projekti tarvitsee nimen!",
            header: "Luo uusi projekti",
            placeholderText: "Anna projektille nimi",
            cancel: "Peruuta",
            createNew: "Luo uusi",
            nameTakenError: "Nimi on jo käytössä!"
        },
        projectList: {
            confirmDelete: "Oletko varma, että haluat poistaa projektin",
            searchPlaceholder: "Etsi projekti nimellä...",
            projectName: "Projektin nimi",
            version: "Versio",
            createdAt: "Luotu",
            modifiedAt: "Muokattu",
            versionCreatedAt: "Versio Luotu",
            noProjectsCouldBeFound: "Projekteja ei löytynyt."
        },
        printUtils: {
            projectReport: "Projektiraportti",
            projectId: "Projektin ID",
            version: "Versio",
            createdDate: "Luotu",
            versionCreatedDate: "Versio Luotu",
            lastEditedDate: "Muokattu",
            className: "Toiminto-\nluokka",
            componentType: "Toiminto-\ntyyppi",
            dataElements: "Tieto-\nelementit",
            readingReferences: "Luku-\nviittaukset",
            writingReferences: "Kirjoitus-\nviittaukset",
            functionalMultiplier: "Toiminto-\nkerroin",
            operations: "Operaatiot",
            degreeOfCompletion: "Valmistumis-\naste",
            functionalPoints: "Toiminto-\npisteet",
            comment: "Kommentti",
            totalFunctionalPoints: "Toimintopisteet Yhteensä",
        },
        functionalClassComponent: {
            classNameOptions: {
                "Interactive end-user navigation and query service": "Vuorovaikutteinen navigointi- tai kyselytoiminto",
                "Interactive end-user input service": "Vuorovaikutteinen syöttötoiminto",
                "Non-interactive end-user output service": "Yksisuuntainen tulostetoiminto",
                "Interface service to other applications": "Lähetettävä liittymätoiminto",
                "Interface service from other applications": "Vastaanotettava liittymätoiminto",
                "Data storage service": "Tiedonvarastointitoiminto",
                "Algorithmic or manipulation service": "Algoritminen toiminto tai käsittelytoiminto",
            },
            componentTypeOptions: {
                "function designators": "toiminto-osoittimet",
                "log-in log-out functions": "kirjautumistoiminnot",
                "function lists": "toimintovalikot",
                "selection lists": "valintalistat",
                "data inquiries": "kyselynäytöt",
                "generation indicators": "toimintojen käynnistysnäytöt",
                "browsing lists": "selailunäytöt",
                "1-functional": "1-toimiset",
                "2-functional": "2-toimiset",
                "3-functional": "3-toimiset",
                "forms": "Lomaketulosteet",
                "reports": "Raportit",
                "emails for text messages": "Sähköposti- tai tekstiviestit",
                "monitor screens": "Näyttötulosteet",
                "messages to other applications": "Lähetettävät sanomat",
                "batch records to other applications": "Lähetettävät erätietueet",
                "signals to devices or other applications": "Lähetettävät signaalit",
                "messages from other applications": "Vastaanotettavat sanomat",
                "batch records from other applications": "Vastaanotettavat erätietueet",
                "signals from devices or other applications": "Vastaanotettavat signaalit",
                "entities or classes": "Käsitteet tai luokat",
                "other record types": "Muut tietuetyypit",
                "security routines": "Turvallisuusrutiinit",
                "calculation routines": "Laskentarutiinit",
                "simulation routines": "Simulointirutiinit",
                "formatting routines": "Muotoilurutiinit",
                "database cleaning routines": "Tietokannan hoitorutiinit",
                "other manipulation routines": "Muut käsittelyrutiinit"
            },
            parameters: {
                dataElements: "Tietoelementit",
                writingReferences: "Kirjoitusviittaukset",
                readingReferences: "Lukuviittaukset",
                operations: "Operaatiot"
            },
            commentPlaceholder: "Kommentti",
            functionalPointText: "TP",
            functionalPointReadyText: "TP (Valmis)",
            classNamePlaceholder: "Valitse toimintoluokka",
            componentTypePlaceholder: "Valitse toimintotyyppi",
            degreeOfCompletionPlaceholder: "Valmistumisaste",
            confirmDeleteMessage: "Oletko varma, että haluat poistaa komponentin"
        },
        projectPage: {
            saveProject: "Tallenna",
            newFunctionalComponent: "Uusi funktionaalinen komponentti",
            noProject: "Ei näytettäviä projektitietoja!",
            saveProjectAsVersion: "Tallenna versiona ",
            saveVersionWarningBeginning: "Oletko varma, että haluat tallentaa projektin versiona",
            saveVersionWarningEnd: "Vanhoja versioita ei voi enää muokata.",
            projectSaved: "Projekti tallennettu!",
            selectProjectVersion: "Valitse Projektiversio",
            version: "Versio",
            nameOfProject: "Projektin nimi",
            expandAll: "Laajenna kaikki",
            collapseAll: "Pienennä kaikki"
        },
        functionalPointSummary: {
            total: "Yhteensä",
            functionalPointText: "TP",
            csv: "Luo CSV",
            pdf: "Luo PDF"
        }
    },
}
