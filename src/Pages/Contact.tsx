import React from 'react';
import Footer from '../Components/Footer';
import ContactData from '../Components/Contact/ContactData';
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
    return (
        <div>
            <div className='grid grid-cols-3 py-11 px-11'>
                <ContactData/>
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;