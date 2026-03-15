/*  ┌─────────────────────────────────────────────────────────────┐
    │              ★  JBR PHOTOS — SITE TEXT  ★                   │
    │                                                             │
    │   Controls ALL text across the website.                     │
    │   For IMAGES, see photo-config.js                           │
    │                                                             │
    │   Edit on GitHub → Commit → Site updates automatically.     │
    │   Or use the Admin Panel text editor to change everything.  │
    └─────────────────────────────────────────────────────────────┘ */

var siteText = {

    homepage: {
        heroTitle:       'Jesse Reilly',
        heroSubtitle:    'Sports & Portrait Photography | Capturing Moments That Matter',
        heroButtonText:  'Book a Session',
        aboutHeading:    'About Me',
        aboutSubheading: 'Photographer based in the NYC area',
        aboutName:       'Hi, I\'m Jesse',
        aboutParagraph1: 'I\'m a photographer specializing in sports and portraits, blending creativity with storytelling to capture moments as they naturally unfold.',
        aboutParagraph2: 'My work is driven by curiosity and observation, focusing on movement, emotion, and the small details that bring energy and authenticity to an image.',
        aboutParagraph3: 'I currently work with local sports leagues and offer graduation portrait sessions, creating work that feels thoughtful, expressive, and true to the moment.',
        portfolioHeading:    'Portfolio',
        portfolioSubheading: 'Explore my work across sports, portraits, and creative photography',
        portfolioButtonText: 'View Full Portfolio',
        shopHeading:     'Shop Prints',
        shopSubheading:  'Featured Photos',
        shopDescription: 'Available as high-quality prints',
        shopButtonText:  'Visit Full Shop',
        contactHeading:    'Get In Touch',
        contactSubheading: 'Ready to work together?',
        contactEmail:      'jbrphotos3650@gmail.com',
        contactInstagram:  'Follow on Instagram',
        contactButtonText: 'Book a Session'
    },

    portfolio: {
        pageTitle:     'Portfolio',
        pageSubtitle:  'Explore my work across sports, portraits, and creative photography',
        ctaHeading:    'Ready to Book?',
        ctaSubheading: 'Let\'s create something amazing together',
        ctaButtonText: 'Book a Session'
    },

    booking: {
        pageTitle:    'Jesse Reilly Photography',
        pageSubtitle: 'Portrait Sessions',
        bookingLogo:  'images/logo.png',
        labelName:    'Full Name',
        labelEmail:   'Email Address',
        labelPhone:   'Phone Number',
        labelDate:    'Preferred Date(s)',
        labelType:    'Session Type',
        labelMessage: 'Special Requests or Notes',
        submitButton: 'Submit Booking Request',
        sessionTypes: [
            'Sports Photography',
            'Portrait Session',
            'Graduation Photos',
            'Family Photos',
            'Event Coverage',
            'Other'
        ],
        sessionCards: [
            {
                id: 'portrait',
                icon: '📸',
                title: 'Portrait Session',
                description: 'Professional portraits that capture your personality and style',
                packagesTitle: 'Portrait Session Packages',
                packages: [
                    { name: 'Mini Session', price: '$175', features: ['⏱️ 25 minutes', '📍 1 location', '📸 10 edited photos'] },
                    { name: 'Standard Session', price: '$250', features: ['⏱️ 45 minutes', '📍 1 location', '📸 20 edited photos'] },
                    { name: 'Signature Session', price: '$375', features: ['⏱️ 75 minutes', '📍 2 locations', '📸 30 edited photos'] }
                ]
            },
            {
                id: 'graduation',
                icon: '🎓',
                title: 'Graduation Session',
                description: 'Celebrate your achievement with professional graduation portraits',
                packagesTitle: 'Graduation Session Packages',
                packages: [
                    { name: 'Mini Session', price: '$175', features: ['⏱️ 25 minutes', '📍 1 location', '📸 10 edited photos'] },
                    { name: 'Standard Session', price: '$250', features: ['⏱️ 45 minutes', '📍 1 location', '📸 20 edited photos'] },
                    { name: 'Signature Session', price: '$375', features: ['⏱️ 75 minutes', '📍 2 locations', '📸 30 edited photos'] }
                ]
            }
        ],
        addons: [
            'Extra edited photos - $8 each or $40 for 6',
            'Advanced retouching - $5 per photo',
            'Rush delivery (48 hours) - $40',
            'Small group add-on - $25'
        ]
    },

    clientGalleries: [
    ],

    gallery: {
        pageTitle:        'Client Gallery',
        pageSubtitle:     'Enter your access code to view your photos',
        galleryLogo:      'images/logo.png',
        accessHeading:    'Access Your Photos',
        accessSubtext:    'Enter the access code provided by your photographer',
        placeholder:      'Enter access code',
        buttonText:       'View Gallery',
        errorText:        'Invalid access code. Please try again.',
        photosReadyText:  'Your photos are ready to view',
        downloadBtnText:  'Download All Photos',
        downloadNote:     'Click to download your full photo collection as a ZIP file',
        noPhotosText:     'No photos available yet. Check back soon!',
        footerText:       '\u00A9 2026 Jesse Reilly Photography. All rights reserved.'
    },

    footer: {
        copyrightText: '\u00A9 2026 Jesse Reilly Photography. All rights reserved.'
    }

};
