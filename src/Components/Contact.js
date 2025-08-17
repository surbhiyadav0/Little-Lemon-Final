
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      type: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string(),
      message: Yup.string()
        .min(25, 'Must be at least 25 characters')
        .required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      setAlert(null);
      
      // Simulate API call with 50% success/failure rate
      setTimeout(() => {
        setIsSubmitting(false);
        const isSuccess = Math.random() > 0.5;
        
        if (isSuccess) {
          setAlert({
            type: 'success',
            title: 'All good!',
            message: `Thanks for your submission ${values.name}, we will get back to you shortly!`
          });
          resetForm();
        } else {
          setAlert({
            type: 'error',
            title: 'Oops',
            message: 'Something went wrong, please try again later'
          });
        }
      }, 1500);
    }
  });

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        
        {alert && (
          <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
            <strong>{alert.title}</strong> {alert.message}
          </div>
        )}
        
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-control ${formik.touched.name && formik.errors.name ? 'error' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error-message">{formik.errors.name}</div>
            ) : null}
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'error' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>
          
          <div className="form-group">
            <label htmlFor="type" className="form-label">Type of enquiry</label>
            <select
              id="type"
              name="type"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.type}
            >
              <option value="">Select an option</option>
              <option value="freelance">Freelance project proposal</option>
              <option value="job">Job opportunity</option>
              <option value="question">General question</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`form-control ${formik.touched.message && formik.errors.message ? 'error' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className="error-message">{formik.errors.message}</div>
            ) : null}
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="spinner" /> Submitting...
              </>
            ) : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
