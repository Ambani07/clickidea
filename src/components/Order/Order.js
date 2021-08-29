import React, { useState, useEffect } from "react";

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';

import { AiFillDelete } from 'react-icons/ai'

import { useHistory } from "react-router-dom"

import { useAlert } from 'react-alert'


import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  TopLine,
  FormButton,
  ChoosePlan,
  ChoosePlanOptions,
  PhoneNumberFormInputError
} from "./OrderElements";

import { removeFromCart, clearCart } from '../../actions/cartActions'


function Order({id}) {
  const API_PATH = '/api/order.php';

  let history = useHistory()

  const alert = useAlert()
  //states
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formStatus, setFormStatus] = useState(false)

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  const value =  id;

  useEffect(() => {
    // orderPlan(value)
  }, [id, value, cart])

  const removeItem = (value) => {
    console.log('remove Item ', value)
    dispatch(removeFromCart(value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    var numbers = /^[+27]?[0-9]+$/;

    if(phone.includes("+27")){
        let cleanNumber = phone.replace("+27", "0")
        setPhone(cleanNumber)
        setMessage('')
    }
    
    if(phone.length !== 10 || !phone.match(numbers)) {
      setMessage('Incorrect number format')
    }else{
      setMessage('')
    }

    if (isNaN(phone)) {
        setMessage('Incorrect Phone Number. Please enter the correct numbers')
    }

    const data = {
      name,
      phone,
      email,
      items: cart.cartItems
    }

    if(message === '') {

      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: data
      })
      .then(result => {
        setFormStatus(result.data.sent)

        console.log(result)

        alert.success('Order was successful. We will contact you')

        if(formStatus) {
          setTimeout(() => {
            history.push('/')
            dispatch(clearCart())
          }, 5000);
        }
      })
      .catch(error => console.log(error.message));
    }

  }



  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <TopLine>Start Your Journey</TopLine>
              <FormH1>Order</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
              <FormLabel htmlFor="for">Phone Number</FormLabel>
              <FormInput 
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required />
                {message && (
                  <PhoneNumberFormInputError>
                    {message}
                  </PhoneNumberFormInputError>
                )}
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput 
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
              <TopLine>Order Items</TopLine>
              {cart.cartItems.map((product, index) => (
                <ChoosePlan key={index}>
                  <ChoosePlanOptions type="button" >
                    <p>{product.name}</p>
                    <p>R {product.price}</p>
                    <p>{product.type}</p>
                    <p><AiFillDelete style={{fontSize: '16px', cursor: 'pointer'}} onClick={() => removeItem(product.id)}/></p>
                  </ChoosePlanOptions>
                </ChoosePlan>
              ))}
              <FormButton type="submit">Order Now</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Order
