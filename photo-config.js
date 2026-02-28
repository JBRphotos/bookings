/* ============================================================
   ★ JBR PHOTOS — PHOTO REFERENCE LIST ★
   ============================================================
   
   This file controls ALL photo references across your website.
   Both index.html and portfolio.html read from this file.
   
   TO UPDATE YOUR SITE'S PHOTOS:
   1. Edit this file on GitHub
   2. Change the photo paths/numbers below
   3. Commit — both pages update automatically!
   
   PHOTO NAMING FORMAT:
   All photos use: photo1.jpg, photo2.jpg, photo3.jpg, etc.
   They live in folders: images/sports/, images/portraits/, 
   images/creative/, images/gallery/
   
   ADDING NEW PHOTOS:
   Upload photos to the right GitHub folder using the naming
   format above (photo6.jpg, photo7.jpg, etc.) and they will
   automatically appear wherever that folder is referenced.
   
   ============================================================ */


/* ─────────────────────────────────────────────
   SECTION 1: HOMEPAGE (index.html)
   ───────────────────────────────────────────── */

const homepageConfig = {

    /* HERO BACKGROUND
       The big full-screen photo at the top of the homepage.
       Change the path to any image in your images folder.
       ---------------------------------------------------- */
    heroImage: 'images/hero.jpg',

    /* ABOUT SECTION PHOTO
       The photo next to your bio text.
       ---------------------------------------------------- */
    aboutImage: 'images/about.jpg',

    /* PORTFOLIO CAROUSEL
       These folders feed the scrolling portfolio preview.
       The carousel automatically loads ALL photos from each
       folder (up to 50 per folder) and shuffles them.
       Add or remove folders as needed.
       ---------------------------------------------------- */
    portfolioCarouselFolders: [
        'images/sports',
        'images/portraits',
        'images/creative'
    ],

    /* GALLERY / SHOP CAROUSEL
       This folder feeds the scrolling shop preview.
       ---------------------------------------------------- */
    galleryCarouselFolder: 'images/gallery'
};


/* ─────────────────────────────────────────────
   SECTION 2: PORTFOLIO PAGE (portfolio.html)
   ───────────────────────────────────────────── */

/* ACCORDION BANNER IMAGES
   The big background photo behind each section header
   (Sports, Portraits, Creative) when you see the 
   expandable rows.
   ---------------------------------------------------- */
const bannerImages = {
    sports:    'images/sports/photo5.jpg',
    portraits: 'images/portraits/photo7.jpg',
    creative:  'images/creative/photo3.jpg'
};

/* ALBUM CARD COVERS
   The clickable thumbnail that represents each album.
   This is the preview image visitors see before opening.
   ---------------------------------------------------- */
const albumCovers = {
    'hive-athletics':  'images/sports/photo2.jpg',
    'artistic-sports': 'images/sports/photo4.jpg',
    'graduation':      'images/portraits/photo7.jpg',
    'composites':      'images/portraits/photo2.jpg',
    'family':          'images/portraits/photo4.jpg',
    'animals':         'images/creative/photo2.jpg',
    'travel':          'images/creative/photo3.jpg',
    'lifestyle':       'images/creative/photo5.jpg',
    'still-life':      'images/creative/photo4.jpg'
};

/* ALBUM PHOTO RANGES
   Controls which numbered photos appear in each album.
   
   folder = which images folder to pull from
   start  = first photo number
   end    = last photo number
   title  = the album name displayed on the site
   
   EXAMPLE: If you upload photo1.jpg through photo30.jpg
   to the sports folder and want:
     - Hive Athletics to show photos 1–15
     - Artistic to show photos 16–30
   Just change the start/end numbers below.
   
   Photos that don't exist are automatically skipped.
   Gaps are fine — if photo8.jpg is missing, it just 
   skips it with no errors.
   ---------------------------------------------------- */
const albumConfig = {

    // ── SPORTS ALBUMS ──
    'hive-athletics':  { folder: 'images/sports',    start: 1,  end: 25, title: 'Hive Athletics' },
    'artistic-sports': { folder: 'images/sports',    start: 26, end: 50, title: 'Artistic' },

    // ── PORTRAIT ALBUMS ──
    'graduation':      { folder: 'images/portraits', start: 1,  end: 20, title: 'Graduation' },
    'composites':      { folder: 'images/portraits', start: 21, end: 35, title: 'Composites' },
    'family':          { folder: 'images/portraits', start: 36, end: 50, title: 'Family' },

    // ── CREATIVE ALBUMS ──
    'animals':         { folder: 'images/creative',  start: 1,  end: 12, title: 'Animals' },
    'travel':          { folder: 'images/creative',  start: 13, end: 25, title: 'Travel' },
    'lifestyle':       { folder: 'images/creative',  start: 26, end: 38, title: 'Lifestyle' },
    'still-life':      { folder: 'images/creative',  start: 39, end: 50, title: 'Still Life' }
};


/* ─────────────────────────────────────────────
   SECTION 3: MAX PHOTOS PER FOLDER
   ───────────────────────────────────────────── 
   The maximum photo number the site will try to load
   from any folder. Set to 50 so you can add photos
   up to photo50.jpg without changing code. Increase
   this number if you ever need more than 50.
   ---------------------------------------------------- */
const MAX_PHOTOS = 50;
