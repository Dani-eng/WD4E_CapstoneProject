const ORIGINAL_TEXT = "Hover over an image below to display here.";

function upDate(previewPic){
    const display = document.getElementById("image")

    /*Check if function is being called */
    console.log("Previewing:", previewPic.alt, previewPic.src);

    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image */

    display.style.backgroundImage = "url('" + previewPic.src + "')"; 

    /*2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    display.textContent = previewPic.alt;
  
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the original-image.  You can use the css code to see what that original URL was */

    const display = document.getElementById("image");

    display.style.backgroundImage= "url(' ')";
    
    
    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
   display.textContent = ORIGINAL_TEXT;
		
	}

    	function onFocus(){
        const display = document.getElementById("image")

    /*Check if function is being called */
    console.log("Previewing:", previewPic.alt, previewPic.src);

    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image */

    display.style.backgroundImage = "url('" + previewPic.src + "')"; 

    /*2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    display.textContent = previewPic.alt;
		
	}

    	function onBlur(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the original-image.  You can use the css code to see what that original URL was */

    const display = document.getElementById("image");

    display.style.backgroundImage= "url(' ')";
    
    
    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
   display.textContent = ORIGINAL_TEXT;
		
	}

    	function onLoad(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the original-image.  You can use the css code to see what that original URL was */

    const display = document.getElementById("image");

    display.style.backgroundImage= "url(' ')";
    
    
    /*2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
   display.textContent = ORIGINAL_TEXT;
		
	}

    function addTabIndex(){
        /*1) Select all images on page*/
        const images = document.querySelectorAll('img');
        
        /*2) Write a for-loop to loop through each image*/
        for (let i=0; i < images.length; i++){
            const img = images[i];
        /*3) Add tabindex attribute*/
            img[i].setAttribute('tabindex', 3 + i);
        /*4) Add the custom tabfocus attribute*/
            img.setAttribute('tabfocus', 'true');
        /*5) Add a focus event listener with a console.log message*/
        img.addEventListener('focus', function() {
            console.log('Event triggered: Image ${i + 1} with src "${img.src}" is now focused.');
            });
        }
    }
