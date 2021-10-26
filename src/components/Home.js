import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Section
            title="Model-S"
            description="Order Online for Tuchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            />
            <Section
            title="Model-Y"
            description="Order Online for Tuchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            />
            <Section
            title="Model-3"
            description="Order Online for Tuchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            />
            <Section
            title="Model-X"
            description="Order Online for Tuchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            />
            <Section
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            backgroundImg="solar-panel.jpg"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            />
            <Section
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
            />
            <Section
            title="Accessories"
            description="Produce Clean Energy From Your Roof"
            backgroundImg="Accessories.jpg"
            leftBtnTxt="Custom Order"
            />
        </Container>
    )
}

export default Home
const Container = styled.div `
    height:100vh;
`
