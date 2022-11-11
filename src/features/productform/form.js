import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

const ProductForm = () => {
     
 const ProductSchema = Yup.object().shape({
    name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   price: Yup.string()
     .required('Required'),
     categories: Yup.string().min(2, 'Too Short!').required('Required'),
 });
 
    const handleProductsSave= (values)=> {
        const requestOptions = {
          method: 'POST',
          body:JSON.stringify(values),
          headers: {'Content-Type': 'application/json'}
        } 
        fetch('http://localhost:3000/products',requestOptions)
      }
    return(
        <div>
          <h1>Signup</h1>
          <Formik
            initialValues={{
             name: '',
             price: '',
             categories: '',
            }}
            validationSchema={ProductSchema}
            onSubmit={values => {
              handleProductsSave(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="name"  placeholder="name" />
                {errors.name && touched.name ? (
                  <div>{errors.name}</div>
                ) : null}
                <br/>
                <Field name="price"  placeholder="price"/>
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
                <br/>
                <Field name="categories" type="categories"  placeholder="categories"/>
                {errors.categories && touched.categories ? <div>{errors.categories}</div> : null}
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      );
}



 export default ProductForm