function properties( imgSrc, hSize, vSize )
    {
        if ( document.images )
            {
                this.image = new Image( hSize, vSize );
                this.image.src = imgSrc;
            }
    }

if ( document.images )
    {
        rollovers = new Array();
        
        rollovers.notesOff = new properties( '../img/notes_off.gif', 73, 20 );
        rollovers.notesOn  = new properties( '../img/notes_on.gif',  73, 20 );
        
        rollovers.projectsOff = new properties( '../img/projects_off.gif', 86, 20 );
        rollovers.projectsOn  = new properties( '../img/projects_on.gif',  86, 20 );
        
        rollovers.galleryOff = new properties( '../img/gallery_off.gif', 79, 20 );
        rollovers.galleryOn  = new properties( '../img/gallery_on.gif',  79, 20 );
        
        rollovers.msxOff = new properties( '../img/msx_off.gif', 65, 20 );
        rollovers.msxOn  = new properties( '../img/msx_on.gif',  65, 20 );
        
        rollovers.downloadOff = new properties( '../img/download_off.gif', 95, 20 );
        rollovers.downloadOn  = new properties( '../img/download_on.gif',  95, 20 );
        
        rollovers.aboutOff = new properties( '../img/about_off.gif', 73, 20 );
        rollovers.aboutOn  = new properties( '../img/about_on.gif',  73, 20 );
        
    }

function swap( which, state )
    {
        if ( document.images )
            {
                document[which].src = rollovers[which + state].image.src;
                return true;
            }

    }
    
// End
