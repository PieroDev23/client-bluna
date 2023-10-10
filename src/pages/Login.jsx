
import React from 'react'
import Form from '../components/Form';
import { Card, CardHeader } from '@mui/material';


const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Esto centra verticalmente el contenido
};


const cardStyle = {
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Agrega sombreado al Card
    backgroundColor: 'white', // Cambia el color de fondo a blanco // Añadir espacio interior al Card
};

function Login() {
    const handleSubmit = (formData) => {
        // Lógica de autenticación aquí
        console.log('Form data:', formData);
    };

    const formFields = [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'password', label: 'Contraseña', type: 'password' },
    ];

    return (
        <Card style={cardStyle}>
            <CardHeader title={'Iniciar Sesión'} />
            <div style={containerStyle}>
                <Form
                    fields={formFields}
                    onSubmit={handleSubmit}
                    submitButtonText="Iniciar Sesión"
                />

            </div>
        </Card>
    )
}

export default Login