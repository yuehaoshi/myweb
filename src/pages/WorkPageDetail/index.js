//import React, { Component } from 'react';
import styles from './detail.module.scss';
import { useParams } from "react-router-dom";

export default () =>{
    let { id } = useParams();
    if (id == 1) {
        return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
               <h1>Solar Energy Visualization</h1>
               <p>Sep 2021 to Dec 2021</p>
            </div>
            <section className={ styles.content }>
                <p>
                This project is to make visualization about solar energy, including explanation of solar energy distribution by solar-earth system model visualization, solar intensity map visualization as well as solar panel installation suggestion for specific locations. The whole project is to be divided into three parts:
                </p>
                <p>
                The first part is to explain solar energy distribution with a solar-earth system model. In this part, a model of solar-sun 3D system is going to be constructed to illustrate why solar energy is distributing unevenly on the earth:
                </p>
                <p>
                Firstly, a general solar system planets and orbit traces are generated adapted from the codes by Aman Kharwal (Kharwal, 2020). After that, an abstract earth-solar system is generated. This model does not reflect the real distance or size of planets but try to show the orbit of earth to the sun. To show the effect of sunlight to earth, the earth color is represented by gradient color, with the color of the side closer to sun become lighter and back to the sun become darker. By this visualization, users can get explained why different part and time of the earth have different solar energy distributions.
                </p>
                <img src="https://raw.githubusercontent.com/Ashimoon12138/Personal-Web/main/Images/519/Picture1.png" alt = 'Oops, this disappeared..'/>
                <p>
                The second part is to introduce the definition of peak sun hour (PSH), which is positively related to the expected energy production of solar energy in a place. This part of the project is to make a visualization for the peak sun hour data for different state. The peak sun hour data are acquired from Renogy (Renogy, 2013).
                </p>
                <p>
                The first step is to draw the boundary of the states in the US using map data from U.S Census Bureau. Next, using “YlOrRd” colormap to fill the peak sun hours of each state, at the same time, move Alaska and Hawaii (which are originally outside the border of the map) into the map.
                </p>
                <img src="https://raw.githubusercontent.com/Ashimoon12138/Personal-Web/main/Images/519/Picture2.png" width = "600" alt = 'Oops, this disappeared..'/>
                <p>
                Part three is to make a contour for a specific location about the best angle for installing a solar panel. The data for solar energy with tilt and direction and the making contour code are acquired and adapted from Alan Mitchell (Mitchell, 2017). The contour is represent in “YIOrRd” colormap to be in line with user’s intuition about solar energy. To better illustrate the relationship between installation tilt and the expected energy produced, the contour is represented into 3d axis using plotly.graph_objects. Users can interact with this 3d contour by mouse cursor.
                </p>
                <img src="https://raw.githubusercontent.com/Ashimoon12138/Personal-Web/main/Images/519/Picture3.png" alt = 'Oops, this disappeared..'/>
                <p>
                Expected part four of the project is to integrate different parts into a user-friendly web application, where education about solar-earth system, representation of PSH of different states and solar panel installation contour for different locations are applied.
                </p>
            </section>
            <reference className={ styles.reference }>
                <h3>References:</h3>
                <p>
                    1. Kharwal, A. (2020, October 22). Visualize a solar system with python. Data Science | Machine Learning | Python | C++ | Coding | Programming | JavaScript. Retrieved November 15, 2021, from https://thecleverprogrammer.com/2020/10/07/visualize-a-solar-system-with-python/. 
                </p>
                <p>
                2. Renogy. (2013) Average Peak Sun Hours by State.
                </p>
                <p>
                3. Mitchell, A. (2017). Data and Sample code for Creating a Solar Contour Plot — misc-docs 1.0.0 documentation. Misc-Docs. https://miscellaneous-analysis-north-project-documentation.readthedocs.io/en/latest/solar-contour-plot.html
                </p> 
            </reference>
        </div>
    </div>
    }
    if (id == 2) {
        return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
               <h1>Movie Recommendation System</h1>
               <p>Sep 2021 to Dec 2021</p>
            </div>
            <section className={ styles.content }>
            <p>
            With the expansion of the online entertainment industry, video recommendation is becoming more and more important for video streaming platforms, through which users could get similar videos as the one they are currently viewing. The recommendation system can help users better decide which video to watch after current video based on their interest, which can give users a smooth experience for choosing and enjoying videos.
                </p>
                <p>
                Developing a video recommendation system can not only apply the knowledge the team learned from UIUC CS412 course, including data preparation and data mining, but also provide us an opportunity to address the knowledge into a simulated real-world application, which meets our interest and anticipation about the project.
                </p>
                <p>
                This project is designed to develop a movie and TV show recommendation system based on the “Netflix Movies and TV Shows” database, acquired from Kaggle. By exploring the relationship between different movies and shows, such as their directors, cast, genres and duration, the system will be able to provide recommendations for a chosen input.
                </p>
                <p>
                The team first cleans several changes for the original data and generates one-hot columns for future use for the recommendation system process. After all the methods of data preprocessing, the dataset of movies has 29440 columns, and  the dataset of TV shows has 13599 columns. 
                </p>
                <p>
                Using the currently developed recommendation system, the team randomly chose some movies and found their recommendations by running the system. Here are some of the running results. Overall, the recommended result has some similarity with the tested data. For example, as shown in the picture below, by finding the recommending result for “Chhota Bheem and the Incan Adventure”, the system returns movies with the same director, cast and release_year as the test movie, which shows the recommending system could select the movies related to the test movie through thousands of records. However, there are still lots of things that need to be improved for our system in the next phase of the project.
                </p>
                <p>
                Current developed recommendation system algorithm could return results similar to the given test, but there are still several problems, for example, sometimes it will return some unexpected results for movies with less famous directors or cast. The team will keep optimizing the recommending algorithm for our system. During the process of building our recommendation system, the team finds the previous recommendation distance algorithm with cosine similarity calculation does not drive the satisfied result, so the team changes the distance calculation by norm-2. In the later phase, the team will explore how and why changing distance calculation methods can impact the recommendation result, and will explore more calculation algorithms for comparison.
                </p>
                <p>
                Another drawback in the current recommendation system is slow running time for each recommendation. The team thinks that the huge one-hot columns in processed databases slows the running process, so optimizing the system by reducing processed database size, or any other possible factor for optimizing is planned. Currently, the recommendation system ignores the information of title and description. The team plans to build a token corpus for each video and use NLP methods to get a reasonable distance between videos on the title and description columns. The distance is calculated using averaging weight. In the next step, the team will try to give different weight to each feature empirically. For example, the weight of title, description would be more than the weight of the released year.
                </p>
                <p>
                During the work for this project, the team realizes that the data processing step is important for applications like a recommendation system, since the original data could have problems like missing data or having wrong data. Keeping too much imprecise data, such as “Null”s in some columns could cause the following work encountering difficulty in producing reasonable recommendations. At the same time, dropping all imperfect data directly at the first time would also waste some useful data that could be used for enriching the database.
                </p>
                <p>
                In terms of the Netflix dataset, though it is one of the highest rated dataset among the Kaggle dataset library, the quality is quite poor. Over 20% of records contain missing values, which leaves little space for us to do feature engineering. Besides, the dataset is not large enough. The most frequent director only appears 19 times. There are huge amounts of values that appear only once, which increases the difficulty to calculate the distance between two samples. Moreover, there are mistakes during loading data to the dataset, for example, the duration is loaded to rating. These mistakes are hard to discover, because it is not numerical for which we can clip outliers. It is impossible to scan all the string values and see if they are reasonable.
                </p>
                <p>
                Due to the page limitation for mid-term report, more details about data processing and recommendation system developing can be found in our code on google Colab platform.
                </p>
            </section>
        </div>
    </div>
    }
    if (id == 3) {
        return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
               <h1>Travel Destination Planner</h1>
               <p>June 2021 to Aug 2021</p>
            </div>
            <section className={ styles.content }>
                <p>
                The project  “Where to go” is built with SQL, python flask, and other supporting language and technical components. The user interface on the website enables users to view and search suitable destinations with preferences and check the features of their predetermined destination. Those user-friendly functions and enjoyable user experience are realized by our design of SQL queries, comprehensively searching for the raw data, carefully filtering and logically merging databases, innovative design of UI, and advanced SQL functions. For each aspect, we will illustrate it thoroughly in the following sections.
                </p>
                <p>
                The tourism industry has entered the rising trend with the pandemic trend going weaker and the increasing vaccine-taking rate. Research conducted by Hong Kong City University shows that the world's travel destinations are focused on only 39 cities and many participants expressed their difficult time in choosing destinations and ended up randomly choosing a famous city. To solve this problem, we help people to combine their preferences and minimize the range of potential choices. With entering the preference via our website, the potential cities meeting certain requirements are shown so that users are equipped with a helpful tool to make a meaningful decision.
                </p>
                <p>
                The features include Accommodations, Environments, Cuisine, Attractions of a city together with its own characteristics. The point we’d like to explain further is the importance of the ‘population’ feature in our database. According to statistical facts of normal distribution and Covid-19 infection rate model by John Hopkins, the rate is positively related to population size and density. Hence, we provide this attribute for users to make decisions based on their attitudes toward COVID-19.
                </p>
                <p>
                As stated previously, the goal of the “Where To Go” application is to provide users a platform where they can look for their travel destination with their own selected preference. Like most recommendation websites, the website starts with a table listing the most popular travel cities in the world along with their location, population, country, etc. Below the table, user exploration space (e.g., search bar) and other ideas/ inspiration for users’ reference can be found. For example, for users who are in love with nature, there is a one-click button that recommends the tropical cities where attractions with animals can be found. Aside from this, through a one-click button, the users can have access to the accommodation conditions of each city in terms of ratings, WIFI availability, etc. 
                </p>
                <p>
                Specific features include creating, read, update and delete in our application. Over the city table, users can add their cities to the table if not listed or delete the cities which are not their cakes. A special feature involved in our application is that users can update the city population over the table if any out-of-dated data is found. However,  an attribute that identifies the validation of the population is also provided. With this feature, we would like to improve our database by using up-to-date information from the user end without losing any credibility. The search/ read function is realized through a search bar where users can search for cities and get city information. Other features including travel ideas, evaluation of local accommodations, etc. can also be found.
                </p>
            </section>
        </div>
    </div>
    }
    else {
        return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
               <h1>More is comming...</h1>
               <p>Some future day</p>
               <p>Test1</p>
            </div>
            <section className={ styles.content }>
            </section>
        </div>
    </div>
    }
}