/* =============   Declaration part ============= */


const sendRequestOnLocalServer = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const data = await res.json();
        return data; 
    } catch(err) {
        showErrorMessage(err);
    }
};

/* Validate the URL */
const validateUrl = (str) => {
    const urlRegex = /^(http|https):\/\/+(www.)*([a-z0-9]{2})\S*\.[a-z]{2,10}(\/)*(\S)*?$/gm;
    const url = new RegExp(urlRegex, 'i');
    return url.test(str);
}

/* Show errors message block */
const showErrorMessage = (msg) => {
    document.querySelector('.em-text').innerHTML = msg;
    document.getElementById('error-message').classList.remove('hide');
}

const loadingGif = (hide = '') => {
    hide === 'hide' ? document.getElementById('loading-gif').classList.add('hide') : document.getElementById('loading-gif').classList.remove('hide');
};

const showOrHideResultBlock = (hide = '') => {
    hide === 'hide' ? document.querySelector('.block--result').classList.add('hide') : document.querySelector('.block--result').classList.remove('hide');
}

const displayContentByText = (data) => {
    
    //check the response for errors
    if(data.error) {
        showErrorMessage(data.error);
    }
    else {
        //get the result insert block
        const resultBlock = document.getElementById('result-message');
        
        //create the result 
        let content = ` <div class="result-message__sentiment">
                            <div class="rm-polarity">
                                <div class="rm-label">Polarity<span class="rm-value">${data.polarity}</span></div>
                                <div class="rm-label">Confidence<span class="rm-value">${data.polarity_confidence}</span></div>
                            </div>
                            <div class="rm-subject">
                                <div class="rm-label">Subjectivity<span class="rm-value">${data.subjectivity}</span></div>
                                <div class="rm-label">Confidence<span class="rm-value">${data.subjectivity_confidence}</span></div>
                            </div>
                        </div>
                        <div class="result-message__content">
                            <h3 class="block-title">Article content</h3>
                            ${data.image ? `<div class="rm-image">
                                                <img src="${data.image}" alt="${data.title}"/>
                                            </div>` : ``}
                            <h3 class="rm-title">${data.title}</h3>
                            <div class="rm-text">${data.text}</div>
                            <div class="rm-cta"><a href="${data.url}" target="blank">Go to the article!</a></div>
                        </div>`;

        //add the result to the page
        resultBlock.innerHTML = content;
        showOrHideResultBlock(); //show
    }
}


/* =============   Execution part ============= */

document.addEventListener('DOMContentLoaded', () => {
    
    //get DOM
    const callApiBtn = document.getElementById('callApi');

    //Event Listener: Click => on button
    callApiBtn.addEventListener('click', () => {
        
        //get the url from the user
        const userUrl = document.getElementById('url').value;


        //check if the URL is not empty or too short
        if(userUrl == '' || userUrl.length < 12){

            showErrorMessage('You didn\'t add the URL or is too short<br>Please check the URL and try again');
            return;

        }
        

        //validate the url from the user
        if(validateUrl(userUrl)){
            
            loadingGif(); //show loading gif
            showOrHideResultBlock('hide');
            
            // send the request to server
            sendRequestOnLocalServer('/apicall', { url: userUrl})
            .then((data) => {

                displayContentByText(data);
                loadingGif('hide'); //hide loading gif
            })
        }
        else {

            //the url from the user is not valid
            loadingGif('hide');
            showErrorMessage('Your URL is not valid<br>Please check the URL and try again');
            
        }
        
    });

})