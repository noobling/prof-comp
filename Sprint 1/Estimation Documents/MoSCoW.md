#App:
    **Must:**
        Have a questionnaire to enter data
        Send data to the server
        Work on iOS devices
        Have user account and login feature
           login as user
           login as researcher
    **Should:**
        Have a good UI (Using a framework)
        Work on android devices
        Check for invalid data
        Have local database(don't have to load all data every time log in)
           local database can update by 'pull to refresh'(achieved by recyclerview)
        Auto fill some data(widgets like spinner checkbox..) (click a button says 'I'm awake' then record the current time) (Perhaps record time alarm goes off if no 'snooze' is used)
    **Could:**
		Admin interface to access the data
		Web app
        Give users personalised accounts
        Voice commands
        Remind users to input data
        Give back some data to users visually
        Have personal profile page
        Have UWA sleep science logo
    **Won't:**
        Light sensor
        
#Server:
    **Must:**
        Receive + store user data
        Send data to researchers(or we can have a researchers account?)
        Convert data into an excel spreadsheet
    **Should:**
		Sanitise SQL inputs (or otherwise defend against harm)
        Be able to authenticate users
        Auto generate a new directory for new user
            CRUD operations (create, read, update, delete)
        Upload data to cloud
    **Could:**
        Authenticate researchers
    **Won't:**
        'Clean data' of anomalies
        Be a separate piece of hardware
