import React, {  useState, useEffect } from 'react'

import { IconContext } from 'react-icons/lib'

import { useDispatch } from 'react-redux'

import { CgWebsite } from 'react-icons/cg'

import { AiFillShop } from 'react-icons/ai'

import { IoMdAnalytics } from 'react-icons/io'

import { useHistory } from "react-router-dom"

import Products from '../../Products'

import { 
    PricingSection,
    PricingWrapper,
    PricingHeader,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature,
    Button,
    Subtitle,
    Form, 
    FormInput

} from './PricingElements'

import { addToCart } from '../../actions/cartActions'

const Pricing = () => {
    const [plan, setPlan] = useState(0)
    const dispatch = useDispatch()

    let history = useHistory()

    useEffect(() => {
    }, [ history])

    const onChooseHandler = (e) => {
        e.preventDefault()
        const product = Products.find( x => x.id === plan)

        history.push(`order/${product.id}`)

        dispatch(addToCart(product))
    }
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection id='pricing'>
                <PricingWrapper>
                    <PricingHeader>Pricing</PricingHeader>
                    <Subtitle>We feel very strong about our skills when it comes to planning and designing. Here is what we love to do!</Subtitle>
                    <PricingContainer>
                        {Products.map((product, index) => (
                            <PricingCard key={index}>
                                <PricingCardInfo>
                                    <PricingCardIcon>
                                        <CgWebsite style={{display: product.id === 1 ? 'block' : 'none'}} />
                                        <AiFillShop style={{display: product.id === 2 ? 'block' : 'none'}} />
                                        <IoMdAnalytics style={{display: product.id === 3 ? 'block' : 'none'}} />
                                    </PricingCardIcon>
                                    <PricingCardPlan>{product.name}</PricingCardPlan>
                                    <PricingCardCost>R{product.price}</PricingCardCost>
                                    <PricingCardLength>{product.type}</PricingCardLength>
                                    
                                    <PricingCardFeatures>
                                        {product.items.map((item, id) => (
                                            <PricingCardFeature key={id}>{item.name}</PricingCardFeature>
                                        ))}
                                    </PricingCardFeatures>
                                    <Form onSubmit={onChooseHandler}>
                                        <FormInput type="hidden" value={product.id} />
                                        <Button primary type='submit' onClick={() => setPlan(product.id)}>Choose Plan</Button>
                                    </Form>
                                </PricingCardInfo>
                            </PricingCard>
                            
                        ))}
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}

export default Pricing
