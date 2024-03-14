import React from 'react';
import Footer from '../Components/Footer';
import ContactData from '../Components/Contact/ContactData';
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10 md:gap-0 py-11 md:px-11 px-5'>
                <ContactData/>
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;