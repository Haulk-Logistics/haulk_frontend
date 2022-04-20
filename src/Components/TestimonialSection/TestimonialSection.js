//Testimonial Section of the Landing Page

import React from "react";
import styles from "./TestimonialSection.module.css";
import TestimonialCard from "../Cards/TestimonialCard";
import amadiImg from "../../Asset/Images/amadiImage.webp";
import amaImg from "../../Asset/Images/amaImage.webp";
import jubileeImg from "../../Asset/Images/jubileeImage.webp";
import edozieImg from "../../Asset/Images/edozieImage.webp";

const TestimonialSection = () => {
    const properties = [
        {
            image: amadiImg,
            text: '“Moving my materials with Haulk may compete comfortably as one of the best decisons I have ever made”.',
            name: '~ Amadi Chisom'

        }, 
        {
            image: jubileeImg,
            text: '“I was skeptical at first but omo Haulk na baba”.',
            name: '~ Jubilee Edeh'
        }, 
        {
            image: amaImg,
            text: '“I think it is the fact that they can deliver anywhere and on time for me”.',
            name: '~ Ama Harvey'
        }, 
        {
            image: edozieImg,
            text: '“Everything with Haulk is just easy, them no dey stress me. Just book a truck and you have it delivered."',
            name: '~ Chief Edozie'
        }]

    return (
        <div className = {styles.testimonial}>
            <h2>Testimonials</h2>
            <p>Why our customers trust us</p>
            <div className = {styles.testimonialGrid}>
                {/* Container for the testimonial cards */}
                <TestimonialCard
                    image = {properties[0].image}
                    text = {properties[0].text}
                    name = {properties[0].name}
                />
                <TestimonialCard
                    image = {properties[1].image}
                    text = {properties[1].text}
                    name = {properties[1].name}
                />
                <TestimonialCard
                    image = {properties[2].image}
                    text = {properties[2].text}
                    name = {properties[2].name}
                />
                <TestimonialCard
                    image = {properties[3].image}
                    text = {properties[3].text}
                    name = {properties[3].name}
                />
            </div>
        </div>
    );
}
 
export default TestimonialSection;