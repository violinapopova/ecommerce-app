import React from 'react'
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Container from './Container';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import CartItem from './CartItem';

const Header = () => {
  return (
    <header className='border-b border-b-gray-400 py-5'>
      <Container className='flex items-center justify-between gap-7 text-lightColor'>
        <HeaderMenu />
        <div className='w-auto md:w-1/3 flex items-center justify-center gap-2.5'>
          <MobileMenu />
          <Logo>
            Tulos
          </Logo>
        </div>
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar />
          <CartItem />
          <div>
            <button className='text-sm font-semibold hover:text-darkColor hoverEffect'>Login</button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;