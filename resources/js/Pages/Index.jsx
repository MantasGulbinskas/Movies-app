import React from 'react';
import Header from '@/Layouts/Header';
import Movies from '@/Components/MoviesList/Movies'
import Hero from '@/Components/HeroSection/Hero';

export default function Welcome() {
    return (
        <>
            <Header />
            <Hero />
            <Movies />
            </>
    )
}
