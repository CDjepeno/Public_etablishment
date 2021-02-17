import { FormikProps, withFormik } from 'formik';
import React from 'react'
import { Badge, Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';


interface Props {
    handleAdd: any
}

interface OtherProps {
    handleAdd?: any
}

interface FormValues {
    name: string;
    mail: string;
    message: any;
}

interface MyFormProps {
    initialName?: string;
    initialEmail?: string;
    initialMessage?: string;
    handleAdd?: any
}

const handleAdd = (name: string, mail: string, message: string) => {

    console.log(name);
    

}


const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleAdd,
        isSubmitting,
    } = props;

    const handleFormValidation = (e: any) => {
        e.preventDefault();

        console.log(values.name, values.mail, values.message);      
    }

    return ( <> 
        <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Nom</Form.Label> <Badge variant="warning">(min de 5 caractères)=</Badge>
                <Form.Control 
                    type="type" 
                    placeholder="Votre nom" 
                    name="name" 
                    onChange={handleChange}  
                    value={values.name}
                    onBlur={handleBlur} 
                />
                {touched.name && errors.name && <span style={{color:"red"}}>{errors.name}</span>}
            </Form.Group>
            <Form.Group controlId="mail">
                <Form.Label>Mail</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Votre email" 
                    name="mail" 
                    onChange={handleChange} 
                    value={values.mail}
                    onBlur={handleBlur}
                />
                {touched.mail && errors.mail && <span style={{color:"red"}}>{errors.mail}</span>}
            </Form.Group>
            <Form.Group controlId="Message">
                <Form.Label>Message</Form.Label> <Badge variant="warning">(entre 100 et 200 caractères)=</Badge>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    name="message" 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                />
                {touched.message && errors.message && <span style={{color:"red"}}>{errors.message}</span>}
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleFormValidation}>
                Valider
            </Button>
        </Form>
    </>);
};
 
const ContactForm = withFormik<MyFormProps, FormValues, Props>({
    mapPropsToValues: props => ({
        name: props.initialName || "",
        mail: props.initialEmail || "",
        message: props.initialMessage || ""
    }),

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(5,"votre nom doit comporter au moins 3 caractères")
            .required("Le nom est obligatoire"),
        mail: Yup.string()
            .email("L'email n'a pas le bon format")
            .required("L'email est obligatoire"),
        message: Yup.string()
            .min(100,"Votre message doit comporter au moins 50 caractères")
            .max(200,"Votre message doit comporter au maximum 500 caractères")
            .required("Le message est obligatoire")
    }),

    handleSubmit({ name, mail, message }: FormValues , { props, setSubmitting, setErrors }) {
        // console.log(name, mail, message);
        console.log("ok");

        // handleAdd()
    }
})(InnerForm)
 
export default ContactForm;