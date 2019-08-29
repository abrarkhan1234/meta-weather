import Page from './page'

class SignInPage extends Page {
    /**
     * define elements
     */
    get username () { return 'user-identifier-input'}
    get password () { return 'password-input' }
    get submitButton () { return 'submit-button'}


    /**
     * define or overwrite page methods
     */
    open () {
        return super.open('https://account.test.bbc.com/signin')
    }

    submit () {
        this.submitButton.click()
    }
}

export default SignInPage