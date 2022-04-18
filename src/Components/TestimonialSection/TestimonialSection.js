//Testimonial Section of the Landing Page

import React from "react";
import styles from "./TestimonialSection.module.css";
import TestimonialCard from "../Cards/TestimonialCard";
import amadiChisom from "../../Asset/Images/amadiChisom.svg";
import amaHarvey from "../../Asset/Images/amaHarvey.svg";
import jubileeEdeh from "../../Asset/Images/jubileeEdeh.svg";
import edozieOnyeanusi from "../../Asset/Images/edozieOnyeanusi.svg";

const TestimonialSection = () => {
    const properties = [
        {
            image: amadiChisom,
            text: '“Moving my materials with Haulk may compete comfortably as one of the best decisons I have ever made”.',
            name: '~ Amadi Chisom'

        }, 
        {
            image: jubileeEdeh,
            text: '“I was skeptical at first but omo Haulk na baba”.',
            name: '~ Jubilee Edeh'
        }, 
        {
            image: amaHarvey,
            text: '“I think it is the fact that they can deliver anywhere and on time for me”.',
            name: '~ Ama Harvey'
        }, 
        {
            image: edozieOnyeanusi,
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