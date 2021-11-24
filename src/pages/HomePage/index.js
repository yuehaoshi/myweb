import styles from './home.module.scss';
//import React, { Component } from 'react';
import image from "../../assets/images/min.JPG";
import WorkLists from "../../components/WorkLists";
import worksData from "../works.json";

export default () => {
    return <div className = {styles.wrap}>
    
        {/* Self introduction*/ }
        <section className = {styles.brief}>
            <img src={ image } alt= 'Oops, this disappeared..'/>
            <h2>Yuehao Shi</h2>
            <ul>
                <li>software engineer</li>
                <li>environmental engineer</li>
            </ul>
            <p>I am an amature as a software engineer and love learning!</p>
            <p>I stayed in environmental engineering field for years in the past, and hope to be a connecter between environmtnal engineering and computer science :P</p>
            <p>Contact me at ashimoon97@gmail.com</p>
        </section>

        {/* Work List*/ }
        <section className = {styles.work}>
            <div className = {styles.title}>
                <h3>A selection of my work</h3>
                <p>Welcome to click and review details!</p>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>
    </div>
}