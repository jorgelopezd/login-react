import React, { useState } from 'react'; 
import Socialbutton from "./Socialbutton.jsx";
import Formulario from "./Formulario.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Alert from "./Alert.jsx";

function Registro() {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    return (
        <> 
        <main>
            <div className='socials'> 
                <Socialbutton 
                    title="Crea una cuenta"
                    img={
                        <div className="socialicons">
                            <FontAwesomeIcon icon={faFacebook} size="2xl" />
                            <FontAwesomeIcon icon={faGithub} size="2xl"/>
                            <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                        </div>
                    }
                    description="o Usa tu email para registrarte"/>
            </div>
            <Formulario setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} />
            {errorMessage && <Alert message={errorMessage} type="error" />} 
            {successMessage && <Alert message={successMessage} type="success" />}
        </main>
        </>
    );
}

export default Registro;


