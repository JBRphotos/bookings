/*  ┌─────────────────────────────────────────────────────────────┐
    │                                                             │
    │              ★  JBR PHOTOS — SITE CONFIG  ★                 │
    │                                                             │
    │   This is the ONLY file you need to edit.                   │
    │   All pages read their photos AND text from here.           │
    │                                                             │
    │   Edit on GitHub → Commit → Site updates automatically.     │
    │                                                             │
    └─────────────────────────────────────────────────────────────┘

    ┌──────────────────────────┐
    │  QUICK REFERENCE         │
    ├──────────────────────────┤
    │                          │
    │  Add photos to site:     │
    │  → Upload photo6.jpg,    │
    │    photo7.jpg, etc. to   │
    │    the right folder.     │
    │    They appear auto.     │
    │                          │
    │  Change any text:        │
    │  → Edit "siteText"       │
    │    section below         │
    │                          │
    │  Rename an album:        │
    │  → Change its "title"    │
    │                          │
    │  Add a new section:      │
    │  → Copy a section block, │
    │    paste, edit. Create   │
    │    matching folder on    │
    │    GitHub.               │
    │                          │
    └──────────────────────────┘                                    */


/* ╔═══════════════════════════════════════════════════════════════╗
   ║                                                               ║
   ║                 S I T E   T E X T                             ║
   ║                                                               ║
   ║  All editable text across the website lives here.             ║
   ║  Change any value and both pages update.                      ║
   ║                                                               ║
   ╚═══════════════════════════════════════════════════════════════╝ */

var siteText = {

    /*  ── HOMEPAGE ────────────────────────────── */

    heroHeading:       'Jesse Reilly',
    heroSubtext:       'Sports & Portrait Photography | Capturing Moments That Matter',
    heroButtonText:    'Book a Session',

    aboutSectionTitle: 'About Me',
    aboutSectionSub:   'Photographer based in the NYC area',
    aboutHeading:      'Hi, I\'m Jesse',
    aboutParagraph1:   'I\'m a photographer specializing in sports and portraits, blending creativity with storytelling to capture moments as they naturally unfold.',
    aboutParagraph2:   'My work is driven by curiosity and observation, focusing on movement, emotion, and the small details that bring energy and authenticity to an image.',
    aboutParagraph3:   'I currently work with local sports leagues and offer graduation portrait sessions, creating work that feels thoughtful, expressive, and true to the moment.',

    portfolioTitle:    'Portfolio',
    portfolioSubtext:  'Explore my work across sports, portraits, and creative photography',
    portfolioButton:   'View Full Portfolio',

    shopTitle:         'Shop Prints',
    shopSubtitle:      'Featured Photos',
    shopSubtext:       'Available as high-quality prints',
    shopButton:        'Visit Full Shop',
    shopLink:          'https://jbrphotos.darkroom.com',

    contactTitle:      'Get In Touch',
    contactSubtext:    'Ready to work together?',
    contactEmail:      'jbrphotos3650@gmail.com',
    contactInstagram:  'https://www.instagram.com/jbrphotos',
    contactButtonText: 'Book a Session',

    footerText:        '© 2026 Jesse Reilly Photography. All rights reserved.',

    /*  ── PORTFOLIO PAGE ─────────────────────── */

    portfolioPageTitle:   'Portfolio',
    portfolioPageSubtext: 'Explore my work across sports, portraits, and creative photography',

    ctaTitle:             'Ready to Book?',
    ctaSubtext:           'Let\'s create something amazing together',
    ctaButton:            'Book a Session'
};


/* ╔═══════════════════════════════════════════════════════════════╗
   ║                                                               ║
   ║                    H O M E P A G E                            ║
   ║                    images / carousels                         ║
   ║                                                               ║
   ╚═══════════════════════════════════════════════════════════════╝ */

var homepageConfig = {

    heroImage:   'images/hero.jpg',        /*  Full-screen background       */
    aboutImage:  'images/about.jpg',       /*  Photo next to your bio       */

    /*  Folders that feed the portfolio carousel  */
    portfolioCarouselFolders: [
        'images/events',
        'images/portraits',
        'images/graduation',
        'images/family',
        'images/sports'
    ],

    /*  Folder that feeds the shop/prints carousel  */
    galleryCarouselFolder: 'images/gallery'
};


/* ╔═══════════════════════════════════════════════════════════════╗
   ║                                                               ║
   ║                  P O R T F O L I O                            ║
   ║                  sections + albums                            ║
   ║                                                               ║
   ╚═══════════════════════════════════════════════════════════════╝ */

var sections = [


/*  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃  E V E N T S                                                ┃
    ┃  Folder: images/events/                                     ┃
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ */
    {
        id:      'events',
        title:   'Events',
        banner:  'images/events/photo1.jpg',
        folder:  'images/events',
        albums: [
            /*        ID                    DISPLAY NAME       COVER PHOTO                    PHOTOS     */
            { id: 'events-album-1',  title: 'Album 1',  cover: 'images/events/photo1.jpg',   start: 1,  end: 15 },
            { id: 'events-album-2',  title: 'Album 2',  cover: 'images/events/photo16.jpg',  start: 16, end: 30 },
            { id: 'events-album-3',  title: 'Album 3',  cover: 'images/events/photo31.jpg',  start: 31, end: 50 }
        ]
    },


/*  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃  P O R T R A I T S                                          ┃
    ┃  Folder: images/portraits/                                  ┃
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ */
    {
        id:      'portraits',
        title:   'Portraits',
        banner:  'images/portraits/photo1.jpg',
        folder:  'images/portraits',
        albums: [
            { id: 'portraits-album-1',  title: 'Album 1',  cover: 'images/portraits/photo1.jpg',   start: 1,  end: 15 },
            { id: 'portraits-album-2',  title: 'Album 2',  cover: 'images/portraits/photo16.jpg',  start: 16, end: 30 },
            { id: 'portraits-album-3',  title: 'Album 3',  cover: 'images/portraits/photo31.jpg',  start: 31, end: 50 }
        ]
    },


/*  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃  G R A D U A T I O N                                        ┃
    ┃  Folder: images/graduation/                                 ┃
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ */
    {
        id:      'graduation',
        title:   'Graduation',
        banner:  'images/graduation/photo1.jpg',
        folder:  'images/graduation',
        albums: [
            { id: 'graduation-album-1',  title: 'Album 1',  cover: 'images/graduation/photo1.jpg',   start: 1,  end: 15 },
            { id: 'graduation-album-2',  title: 'Album 2',  cover: 'images/graduation/photo16.jpg',  start: 16, end: 30 },
            { id: 'graduation-album-3',  title: 'Album 3',  cover: 'images/graduation/photo31.jpg',  start: 31, end: 50 }
        ]
    },


/*  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃  F A M I L Y                                                ┃
    ┃  Folder: images/family/                                     ┃
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ */
    {
        id:      'family',
        title:   'Family',
        banner:  'images/family/photo1.jpg',
        folder:  'images/family',
        albums: [
            { id: 'family-album-1',  title: 'Album 1',  cover: 'images/family/photo1.jpg',   start: 1,  end: 15 },
            { id: 'family-album-2',  title: 'Album 2',  cover: 'images/family/photo16.jpg',  start: 16, end: 30 },
            { id: 'family-album-3',  title: 'Album 3',  cover: 'images/family/photo31.jpg',  start: 31, end: 50 }
        ]
    },


/*  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
    ┃  S P O R T S                                                ┃
    ┃  Folder: images/sports/                                     ┃
    ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ */
    {
        id:      'sports',
        title:   'Sports',
        banner:  'images/sports/photo1.jpg',
        folder:  'images/sports',
        albums: [
            { id: 'sports-album-1',  title: 'Album 1',  cover: 'images/sports/photo1.jpg',   start: 1,  end: 15 },
            { id: 'sports-album-2',  title: 'Album 2',  cover: 'images/sports/photo16.jpg',  start: 16, end: 30 },
            { id: 'sports-album-3',  title: 'Album 3',  cover: 'images/sports/photo31.jpg',  start: 31, end: 50 }
        ]
    }

];


/* ╔═══════════════════════════════════════════════════════════════╗
   ║                    S E T T I N G S                            ║
   ╚═══════════════════════════════════════════════════════════════╝ */

var MAX_PHOTOS = 50;
