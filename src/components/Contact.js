import 'tachyons'

export const ContactUs = () => {
    return (
        <div className="contactDiv">
            <div className='formDiv'>
            <form>
                <h2>contact us</h2>
                <input type='text' name='name' placeholder='Full Name'/><br/>
                <input type='text' name='email' placeholder='Email'/><br/>
                <textarea type='' name='textArea' placeholder='I Love climbing because...'/><br/>
                <input type='submit' value='Submit'/>
            </form>
            </div>
        </div>
    )
}



