import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

const Formulario = ({ setErrorMessage, setSuccessMessage }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const validarDatos = (e) => {
        e.preventDefault();
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (
            nombre === '' || !emailPattern.test(email) || contraseña === '' || confirmar === '' || !passwordPattern.test(contraseña) || contraseña !== confirmar
            ) {
                setErrorMessage( 'Completa todos los campos correctamente!'
                );
                setSuccessMessage(''); 
                return;
            }
            setErrorMessage('');
            setSuccessMessage('¡Registro completado con éxito!');
            setNombre('');
            setEmail('');
            setContraseña('');
            setConfirmar('');
        };

return (
    <>
        <Form className="formulario" onSubmit={validarDatos}>
            <div className="form-group">
                <input
                    type="text"
                    name="nombre"
                    placeholder='Ingrese su nombre'
                    className="form-control"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    placeholder='tuemail@ejemplo.com'
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="contraseña"
                    placeholder='Contraseña'
                    className="form-control"
                    onChange={(e) => {
                        setContraseña(e.target.value);
                        setPasswordsMatch(e.target.value === confirmar);
                        }}
                    value={contraseña}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="confirmar"
                    placeholder='Confirmar Contraseña'
                    className={`form-control ${!passwordsMatch ? 'is-invalid' : ''}`}
                    onChange={(e) => {
                        setConfirmar(e.target.value);
                        setPasswordsMatch(e.target.value === contraseña);
                        }}
                    value={confirmar}
                />
                {!passwordsMatch && (
                    <div className="invalid-feedback">Las contraseñas no coinciden.</div>
                )}
            </div>
            <Button type="submit" className="btn" onClick={validarDatos}>
                Registrarse
            </Button>
        </Form>
    </>
    );
};

export default Formulario;
