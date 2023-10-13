import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormModal from './FormModal';

const Registration=()=>{
    const initialValues = {
        name: '',
        email: '',
        password:'',
        repeatepassword:'',
        dateOfBirth: '',
        gender: '',
        number:''
    }
        const [formData, setFormData] = useState();
        const [showModal, setShowModal] = useState(false);

      const validationSchema = Yup.object().shape({
        name: Yup.string().required('Имя обязательно'),
        email: Yup.string().email('Неверный email').required('Email обязателен'),
        password: Yup.string().required('Пароль обязателен').min(6, 'Пароль должен содержать минимум 8 символов')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ') ,
        repeatepassword: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
        dateOfBirth: Yup.date().required('Дата рождения обязательна').max(new Date(), 'Дата рождения не может быть в будущем')
        .test(
            'is-valid-age',
            'Вы должны быть старше 18 лет',
             function (value) {
            const currentDate = new Date();
            const eighteenYearsAgo = new Date();
            eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18);
            return value <= eighteenYearsAgo;      }        )   ,
        gender: Yup.string().required('Пол обязателен'),
        number: Yup.string().required('Пол обязателен')
        .matches(/^[0-9]{9}$/, 'Номер телефона должен содержать ровно 9 цифр')
      })

      const handleSubmit = values => {
        const formData={
            name: values.name,
            email: values.email,
            password: values.password,
            repeatepassword: values.repeatepassword,
            dateOfBirth: values.dateOfBirth,
            gender: values.gender,
            number: values.number
        }
        setFormData(formData)
        console.log(formData)
        setShowModal(true);
      }
      
      const closeModal = () => {
        setShowModal(false);
      };
    
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
         <>
            <Form>
            <div>
              <label htmlFor='name'>Имя</label>
              <Field type='text' id='name' name='name' autoComplete='name'/>
              <ErrorMessage name='name' component='div' />
            </div>
    
            <div>
              <label htmlFor='email'>Email</label>
              <Field type='email' id='email' name='email' autoComplete='email' />
              <ErrorMessage name='email' component='div' />
            </div>

            <div>
              <label htmlFor='password'>Password</label>
              <Field type='password' id='password' name='password' autoComplete='current-password' />
              <ErrorMessage name='password' component='div' />
            </div>

            <div>
              <label htmlFor='repeatepassword'>repeate Password</label>
              <Field type='repeatepassword' id='repeatepassword' name='repeatepassword' autoComplete='current-password' />
              <ErrorMessage name='repeatepassword' component='div' />
            </div>
    
            <div>
              <label htmlFor='dateOfBirth'>Date of Birth</label>
              <Field type='date' id='dateOfBirth' name='dateOfBirth' />
              <ErrorMessage name='dateOfBirth' component='div' />
            </div>
    
            <div>
              <label>
                <Field type='radio' name='gender' value='male' autoComplete='male' />
                Мужчина
              </label>
              <label>
                <Field type='radio' name='gender' value='female' autoComplete='female' />
                Женщина
              </label>
              <ErrorMessage name='gender' component='div' />
            </div>

            <div>
              <label htmlFor='number'>Number of phone</label>
              <Field type='number' id='number' name='number' autoComplete='number' />
              <ErrorMessage name='number' component='div' />
            </div>
    
            <button type='submit' onClick={handleSubmit}>Зарегистрироваться</button>
            
          </Form>   
            <FormModal isOpen={showModal} data={formData} onRequestClose={closeModal} />
          </>
        </Formik>
      )
    }
   
export default Registration;

