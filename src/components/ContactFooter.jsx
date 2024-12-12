import '../styles/ContactFooter.css'

function ContactFooter(){
    return(
        <>
            <div className="contactItem">
                <div className="text">
                    Developed by Daniel Lin 2024
                </div>
                <div className="linkContainer">
                    <a href="https://www.linkedin.com/in/daniel-lin-swe/" className='link' target="_blank" rel="noopener noreferrer">
                        <strong>LINKEDIN</strong>
                    </a>
                    <a href="https://github.com/dlin1765" className='link' target="_blank" rel="noopener noreferrer">
                        <strong>GITHUB</strong>
                    </a>
                    <a href="mailto:dannylin1765@gmail.com" className='link' target="_blank" rel="noopener noreferrer">
                        <strong>EMAIL</strong>
                    </a>
                </div>
            </div>
        </>
    );

}   

export default ContactFooter