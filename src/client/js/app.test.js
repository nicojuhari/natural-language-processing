const { showErrorMessage, sendRequestOnLocalServer } = require('./app');

test('Show error message => remove class hide', () => {
    document.body.innerHTML = `<div id="error-message" class="full-screen hide">
                                    <div class="em-wrapper">
                                        <div class="em-close">&times;</div>
                                        <div class="em-text">
                                            <!-- the error message will be added here dynamically -->
                                        </div>
                                    </div>
                                </div>`;
    expect(showErrorMessage('Placeholder text'));
})

test('Send request to local server', () => {
    expect(
        sendRequestOnLocalServer({url: 'https://blog.udacity.com/2019/09/introducing-the-new-front-end-and-full-stack-web-developer-nanodegree-programs.html'})
        );
})