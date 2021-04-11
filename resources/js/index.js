// Id's Desktop Version

const userIcon = document.getElementById('user');
const userSettings = document.querySelector('.user-settings');
const tools = document.getElementById('tools');
const asidebar = document.querySelector('.asidebar-background');

// Theme's Selectors

const themeSelector = document.getElementById('theme-selector');
const themeSelection = document.getElementById('theme-selection');
const backArrowTheme = document.getElementById('back-arrow-theme');
const checkbox = document.querySelector('input[name="theme"]');
const galleryIcon = document.getElementById('gallery');
const galleryIconDark = document.getElementById('gallery-dark');
const loveDiv = document.getElementById('love-div');
const loveDivDark = document.getElementById('love-div-dark');
const comments = document.getElementById('comments');
const commentsDark = document.getElementById('comments-dark');
const loveIcon = document.getElementById('love')
const loveIconChecked = document.getElementById('love-checked');
const loveIconDark = document.getElementById('love-dark')
const loveIconCheckedDark = document.getElementById('love-checked-dark');
const pencil = document.getElementById('pencil');
const pencilDark = document.getElementById('pencil-dark');
const ubication = document.getElementById('ubication');
const ubicationDark = document.getElementById('ubication-dark');
const bookmarkDiv = document.getElementById('bookmark-div');
const bookmarkDivDark = document.getElementById('bookmark-div-dark');
const sortDiv = document.getElementById('sort-div');
const sortDivDark = document.getElementById('sort-div-dark');
const logoDiv = document.getElementById('logo-div');
const logoDivDark = document.getElementById('logo-div-dark');

// Id's Mobile Version

const userIconMobile = document.getElementById('user-mobile');
const bellMobile = document.getElementById('bell-mobile');
const closeIcon = document.getElementById('close');

// Navbar on Desktop Resolutions

    // Toggle the User Options

userIcon.addEventListener('click', () => {
    userSettings.classList.toggle('on');
    themeSelection.style.opacity = '0';
    themeSelection.style.visibility = 'hidden';
});

    // Show the Asidebar

tools.addEventListener('click', () => {
    asidebar.classList.toggle('on-aside');
});

    // Hide the Asidebar

asidebar.addEventListener('click', () => {
    asidebar.classList.remove('on-aside')
    userSettings.classList.remove('on');
});

// Theme Functions

themeSelector.addEventListener('click', () => {
    themeSelection.style.opacity = '1';
    themeSelection.style.visibility = 'visible';
    userSettings.classList.remove('on');
});

backArrowTheme.addEventListener('click', () => {
    themeSelection.style.opacity = '0';
    themeSelection.style.visibility = 'hidden';
    userSettings.classList.add('on');
});

        // Conditional that runs when the "love icon" has been clicked. Then, change its state.

if (loveIcon != null) {
    loveIcon.addEventListener('click', () => {
            loveIconChecked.classList.remove('off');
            loveIconChecked.classList.add('active');
            loveIcon.classList.remove('active');
            loveIcon.classList.add('off');
    });
    
    loveIconChecked.addEventListener('click', () => {
        loveIconChecked.classList.remove('active');
        loveIconChecked.classList.add('off');
        loveIcon.classList.remove('off');
        loveIcon.classList.add('active');
    });
    
    loveIconDark.addEventListener('click', () => {
        loveIconCheckedDark.classList.remove('off');
        loveIconCheckedDark.classList.add('active');
        loveIconDark.classList.remove('active');
        loveIconDark.classList.add('off');
    });
    
    loveIconCheckedDark.addEventListener('click', () => {
        loveIconCheckedDark.classList.remove('active');
        loveIconCheckedDark.classList.add('off');
        loveIconDark.classList.remove('off');
        loveIconDark.classList.add('active');
    });
}

// Dark Mode Toggle Switch

checkbox.addEventListener('change', function() {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');

    // Conditionals that check if the element it's in the current page, then apply its dark styles.


        if (loveDiv != null) {
            loveDiv.style.display = 'none';
            loveDivDark.style.display = 'block';
        }    

        if (galleryIcon != null) {
            galleryIconDark.style.display = 'block';
            galleryIcon.style.display = 'none';
        }

        if (comments != null) {
            commentsDark.style.display = 'block';
            comments.style.display = 'none';
        }

        if (ubication != null) {
            ubicationDark.style.display = 'block';
            ubication.style.display = 'none';
        }

        if (pencil != null) {
            pencilDark.style.display = 'block';
            pencil.style.display = 'none';
        }

        if (bookmarkDiv != null) {
            bookmarkDiv.style.display = 'none';
            bookmarkDivDark.style.display = 'block';
        }

        if (sortDiv != null) {
            sortDiv.style.display = 'none';
            sortDivDark.style.display = 'block';
        }

        if (logoDiv != null) {
            logoDiv.style.display = 'none';
            logoDivDark.style.display = 'block';
        }

    } else {

        // Conditional that return the page back to its original light theme.

        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        if (loveDiv != null) {
            loveDiv.style.display = 'block';
            loveDivDark.style.display = 'none';
        }    
        
        if (galleryIcon != null) {
            galleryIconDark.style.display = 'none';
            galleryIcon.style.display = 'block';
        }

        if (comments != null) {
            commentsDark.style.display = 'none';
            comments.style.display = 'block';
        }

        if (ubication != null) {
            ubicationDark.style.display = 'none';
            ubication.style.display = 'block';
        }

        if (pencil != null) {
            pencilDark.style.display = 'none';
            pencil.style.display = 'block';
        }

        if (bookmarkDiv != null) {
            bookmarkDiv.style.display = 'block';
            bookmarkDivDark.style.display = 'none';
        }
        
        if (sortDiv != null) {
            sortDiv.style.display = 'block';
            sortDivDark.style.display = 'none';
        }

        if (logoDiv != null) {
            logoDiv.style.display = 'block';
            logoDivDark.style.display = 'none';
        }
    }
});

    // Transition time of the theme from Light to Dark and viceversa.

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000);
};

// Navbar on Mobile Resolutions

    // Hide the asidebar and pass its options to the user settings menu.

userIconMobile.addEventListener('click', () => {
    userSettings.classList.toggle('on');
    userIconMobile.style.display = 'none';
    bellMobile.style.display = 'none';
    closeIcon.style.display = 'flex';
});

    // Close icon's event listener and handler.

closeIcon.addEventListener('click', () => {
    userSettings.classList.remove('on');
    userIconMobile.style.display = 'flex';
    bellMobile.style.display = 'flex';
    closeIcon.style.display = 'none';
    themeSelection.style.opacity = '0';
    themeSelection.style.visibility = 'hidden';
});