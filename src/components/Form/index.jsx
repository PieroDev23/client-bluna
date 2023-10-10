import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form({ fields, onSubmit, submitButtonText }) {
    const initialValues = {};
    fields.forEach((field) => {
        initialValues[field.name] = '';
    });

    const [formValues, setFormValues] = React.useState(initialValues);

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <TextField
                    key={field.name}
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={formValues[field.name]}
                    onChange={handleFieldChange}
                />
            ))}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
            >
                {submitButtonText}
            </Button>
        </form>
    );
}

export default Form;
