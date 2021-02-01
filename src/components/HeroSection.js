import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>Personal Finance and Investment Blogs</h1>
            <p>Everything you need to become financially independent!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'
                >GET STARTED </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>KNOW MORE</Button>
            </div>
        </div>
    )
}

export default HeroSection
