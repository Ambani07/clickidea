import React from 'react'
import { IconContext } from 'react-icons/lib'
import { GiCrystalBars, GiCutDiamond, GiRock } from 'react-icons/gi'

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

} from './PricingElements'

const index = () => {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection id='pricing'>
                <PricingWrapper>
                    <PricingHeader>Pricing</PricingHeader>
                    <Subtitle>We feel very strong about our skills when it comes to planning and designing. Here is what we love to do!</Subtitle>
                    <PricingContainer>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiRock />
                                </PricingCardIcon>
                                <PricingCardPlan>Website</PricingCardPlan>
                                <PricingCardCost>R799.99</PricingCardCost>
                                <PricingCardLength>once-off</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Free Hosting For 1 year</PricingCardFeature>
                                    <PricingCardFeature>50 emails</PricingCardFeature>
                                    <PricingCardFeature>Custom Domain</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars />
                                </PricingCardIcon>
                                <PricingCardPlan>E-Commerce</PricingCardPlan>
                                <PricingCardCost>R299.99</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Free Hosting</PricingCardFeature>
                                    <PricingCardFeature>50 emails</PricingCardFeature>
                                    <PricingCardFeature>Umlimited Upload</PricingCardFeature>
                                    <PricingCardFeature>Free Updates</PricingCardFeature>
                                    <PricingCardFeature>Basic SEO Setup</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond />
                                </PricingCardIcon>
                                <PricingCardPlan>Marketing & SEO</PricingCardPlan>
                                <PricingCardCost>R250.00</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Social Account Setup</PricingCardFeature>
                                    <PricingCardFeature>Social Media Ads</PricingCardFeature>
                                    <PricingCardFeature>24/7 Support</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}

export default index
