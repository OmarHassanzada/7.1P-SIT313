import React from 'react';

import CoverImage from '../CoverImage';
import HeaderFreelancer from '../HeaderFreelancer';
import CardList from '../CardList';
import Button from '../Button';
import HeaderCustomer from '../HeaderCustomer';
import CustomerCardList from '../CustomerCardList';
import EmailBanner from '../EmailBanner';
import FooterBanner from '../FooterBanner';
import FooterDevLinks from '../FooterDevLinks';




function HomePage() {
    return  <div>
        <CoverImage />
        <HeaderFreelancer />
        <CardList />
        <Button />
        <HeaderCustomer />
        <CustomerCardList />
        <Button />
        <EmailBanner />
        <FooterBanner />
        <FooterDevLinks /> 
    </div>
         
}

export default HomePage;