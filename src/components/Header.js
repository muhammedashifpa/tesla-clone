import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
function Header() {
    const [burgerStatus,setBurgerStatus]= useState(false);
    const cars = useSelector(selectCars)
    console.log(cars)
    return (
        <Container>
            <a>
                <img id='logo' src="images/logo.svg" alt=""/>
            </a>
            <Menu>
                {cars && cars.map((car, index)=>
                    <a key={index} href="">{car}</a>
                )}
                {/* <a href="">Model&nbsp;S</a>
                <a href="">Model&nbsp;3</a>
                <a href="">Model&nbsp;X</a>
                <a href="">Model&nbsp;Y</a>
                <a href="">Solar&nbsp;Roof</a>
                <a href="">Solar&nbsp;Panels</a> */}

            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Account</a>
                <a href="">Menu</a> 
                <CustomeMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus} id='nav'>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>   
                {cars && cars.map((car, index)=>
                    <li><a key={index} href="">{car}</a></li>
                )}
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade-In</a></li>
                <li><a href="">Test Drive</a></li>
                <li><a href="">Cybertruck</a></li>
                <li><a href="">Roadster</a></li>
                <li><a href="">Semi</a></li>
                <li><a href="">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
    @media (max-width:1200px){
        justify-content:space-between;
    }

`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        padding:0 10px;
        color:#181b21;
    }
    @media (max-width:1200px){
        display:none;
    }
`
const RightMenu = styled.div`

display:flex;
align-items:center;

a{
    font-weight:600;
    padding:0 10px;
    color:#181b21;
}
`
const CustomeMenu = styled(MenuIcon)`
    cursor:pointer;
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
    transition:transform 0.2s;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
    `
const CloseWrapper = styled.div`
    display:flex;
    justify-content:end;
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`