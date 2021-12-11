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
                This project is to make visualization about solar energy application potential, including explanation of solar energy distribution by solar-earth system model visualization, solar intensity map visualization as well as solar panel installation and usage suggestion for specific locations. The whole project is to be divided into three parts:
                </p>
                <p>
                <b>Part 1. Solar Energy Distribution Explanation</b>
                </p>
                <p>
                The first part is to explain solar energy distribution with a visualization model for solar-earth system. In this part, a model of solar-sun 3D system is going to be constructed to illustrate why solar energy is distributed unevenly on the earth. The idea of solar system simulation model comes from the code developed by Aman Kharwal (Kharwal, 2020). 
                </p>
                <p>
                To simulate the solar-earth system, two functions, “spheres” and “orbits” were defined to represent the shape and movement trace of sun and earth with “graph_objects” module in Python Plotly. To better illustrate the visualization effect, the diameter of the earth sphere was made ten times larger than the real size. The system then was constructed with “Layout” method in graph_objects module by applying the sizes of sun and earth in “spheres” function and the distance between sun and earth into the “orbits” function. The generated system is shown as Figure 1 below:
                </p>
                <img src="https://raw.githubusercontent.com/yuehaoshi/myweb/gh-pages/Pics/SolarVis%20Project/SolarVis1.png" alt = 'Oops, this disappeared..' width = "600" align = "center"/>
                <p><center>Figure 1: Model of earth-solar system</center></p>
                <p>
                The goal of this part of the project was to visually illustrate why solar energy varies in the different time and location of the earth surface. To achieve this goal, the color of the earth was modified as gradient color, with brighter color on the side of the earth towards sun, and darker color on the side of the earth backwards to the sun. The surface color of the earth was set to be positively related to the coordinate of the point on the sphere. More specifically, the color of each pixel on the surface of the sphere was set to be proportional to “x0**2 - y0**2 - z0**2”, where x0, y0, and z0 were the coordinates to each point.
After changing the surface color, the solar-earth system was shown in the Figure 2 below, where the surface of the earth was brighter in the side closer to the sun and vice versa. This model shows the basic principle of the solar energy application in different places of the earth: generally speaking, the equator area where can get most of the direct sunlight, has more sunlight intensity compared to polar areas of the earth, thus has more efficiency if applied infrastructures by solar energy industry.
                </p>
                <img src="https://raw.githubusercontent.com/yuehaoshi/myweb/gh-pages/Pics/SolarVis%20Project/SolarVis2.png" alt = 'Oops, this disappeared..' width = "600" align = "center"/>
                <p><center>Figure 2: Visualization about sunlight effect to earth</center></p>
                <p>
                <b>Part 2: Peak Sun Hour (PSH) Distribution in Different US States</b>
                </p>
                <p>
                The second part of this project is to visualize the solar energy usage potential, defined as peak sun hour (PSH), of different state in the United States. Peak sun hour is a term related to the expected energy production of solar energy in one place. Since different states in the US are in different latitude with various topographic and climatic condition, the potential of solar energy usage is unevenly distributed. To be specific, since the majority states of the US are in the north hemisphere, south states and states with more sunny days would have higher PSHs. 
                </p>
                <p>
                The first step of this part was to import the data of state boundaries in the US. The geography information was retrieved through the Boundary Shapefile from United States Census Bureau in 2018. The Boundary Shapefile file was imported through “mpl_toolkits.basecamp” module in Python, which shows the boundary of states, as shown in Figure 3 below.
                </p>
                <img src="https://raw.githubusercontent.com/yuehaoshi/myweb/gh-pages/Pics/SolarVis%20Project/SolarVis3.png" alt = 'Oops, this disappeared..' width = "600" align = "center"/>
                <p><center>Figure 3: States boundary of US</center></p>
                <p>
                The next step was to implement the information of PSH into different colors on the boundary map. This step was achieved by the “Polygon” method in “matplotlib” method in Python. The PSH data were acquired from Renogy (Renogy, 2013). To match the PSH value with corresponding state by state name, the values of PSHs were shown in the “YlOrRd” colormap, with higher PSH having darker red color. Meanwhile, the state of Hawaii and Alaska were also move to the left bottom corner of the map to make the map in a proper scale. By setting the original boundary to be transparent and adding the corresponding color legend bar, the generated map was shown as Figure 4 below.
                </p>
                <img src="https://raw.githubusercontent.com/yuehaoshi/myweb/gh-pages/Pics/SolarVis%20Project/SolarVis4.png" alt = 'Oops, this disappeared..' width = "600" align = "center"/>
                <p><center>Figure 4: PSH map for each state</center></p>
                <p>
                To better illustrate the solar energy usage potential of the states, the map was divided into five different solar energy application level. This step was inspired by the application of drawing contours in UIUC CS519 class. The generated map in the last step was saved and each pixel of it was read and stored in a new list containing the RGB values. The RGB values were then converted into each unique value by “65536 * R + 256 * G + B”, which was later used as the parameter to draw a contour based on different color level with “contour” method in “matplotlib” module in Python. The contour was divided in five different level. The colormap used for this figure was “summer”, where the darker green region in the map indicates better potential and benefits for developing solar panel as a kind of “green energy” implementation.
                </p>
                <img src="https://raw.githubusercontent.com/yuehaoshi/myweb/gh-pages/Pics/SolarVis%20Project/SolarVis5.png" alt = 'Oops, this disappeared..' width = "600" align = "center"/>
                <p><center>Figure 5: Solar Energy Usage Potential Regions</center></p>
                <p>
                <b>Part 3: Best Solar Panel Usage Angle</b>
                </p>
                <p>
                The last part of this project is to make a visualization for the solar intensity changing with different tilts and azimuths of the installation of the solar panel. As the rotation and revolution of earth, the sunlight intensity of one place is also changing, which is impacted not only by the latitude of the position, but also the sunlight irradiate angles, which are solar azimuth and solar elevation. Thus, the optimal position for a solar energy to maximize the sunlight intensity should be also changing with the sunlight irradiate angles. More specific, the equation used to decide the best solar panel working angles is:
                </p>
                <p>
                <center><b>S_module=S_incident * [cos⁡(α) * sin⁡(β) * cos⁡(Ψ-Θ) + sin⁡(α) * cos⁡(β)]</b></center>
                </p>
                <p>
                Where:
                </p>
                <p>
                S_module:	Light intensity on solar panel,
                </p>
                <p>
                S_incident:	Sunlight intensity,
                </p>
                <p>
                α:		Sun elevation angle,
                </p>
                <p>
                Θ:		Sun azimuth angle,
                </p>
                <p>
                β:		Solar panel tilt angle,
                </p>
                <p>
                Ψ:		Solar panel azimuth angle (PVEducation, n.a.)
                </p>
                <p>
                Among those parameters, α, Θ can be calculated through the latitude and time of the solar panel installation position, and S_incident can be measured or inferred from historical data. To simplify this equation, once the position and time are known, the light intensity on solar panel can be represented as a function related to solar panel tilt and azimuth, which is: S_module=f(β,Ψ). Take the sunlight data of Chicago in 11/29/2021 as an example, at 12:00pm, the solar azimuth will be 185.43 and the solar elevation will be 26.39, calculated by the “Solar Position Calculator” provided by NOAA (Cornwall et al, 2021). Using this information, the relationship between solar panel light intensity and installation angles can be depicted.
                </p>
                <p>
                The first step of this part was to calculate the solar panel light intensity using the equation mentioned above in tilts between 0 to 90 degrees as well as azimuths between 90 to 270 degrees. The intensity as well as the corresponding tilt and azimuth are then drawn using the “Layout” method in the “graph_objects” module. The colormap used in this plotting was “Portland”, where the warmer color in the contour corresponds the higher solar intensity, which is the ideal angle the solar panel should face to acquire the higher efficiency. The contour was shown in the Figure 6 below. The idea of showing the solar panel installation angles instruction was acquired by the code from Alan Mitchell (Mitchell, 2017)
                </p>
                <img src="https://raw.githubusercontent.com/yuehaoshi/myweb/gh-pages/Pics/SolarVis%20Project/SolarVis6.png" alt = 'Oops, this disappeared..' width = "600" align = "center"/>
                <p><center>Figure 6: Solar panel light intensity in different tilts and azimuths</center></p>
                <p>
                To better illustrate the relationship between installation tilt and the expected energy produced, the contour was represented into 3d axis using “plotly.graph_objects” module. By converting to the 3d visualization, the impact of tilts and azimuths can be better shown for the user to get the best installation angles. The updated 3d plotting was shown in the Figure 7 below.
                </p>
                <img src="https://raw.githubusercontent.com/yuehaoshi/myweb/gh-pages/Pics/SolarVis%20Project/SolarVis7.png" alt = 'Oops, this disappeared..' width = "600" align = "center"/>
                <p><center>Figure 7: Solar panel light intensity in different tilts and azimuths in 3D</center></p>
            </section>
            <reference className={ styles.reference }>
                <h3>References:</h3>
                <p>
                1. Cornwall, C. et al (2021, November 28). Solar Position Calculator, Retrieved November 28, 2021, from https://gml.noaa.gov/grad/solcalc/azel.html.
                </p>
                <p>
                2. Kharwal, A. (2020, October 22). Visualize a solar system with python. Data Science | Machine Learning | Python | C++ | Coding | Programming | JavaScript. Retrieved November 15, 2021, from https://thecleverprogrammer.com/2020/10/07/visualize-a-solar-system-with-python/. 
                </p>
                <p>
                3. Renogy. (2013) Average Peak Sun Hours by State
                </p> 
                <p>
                4. Mitchell, A. (2017). Data and Sample code for Creating a Solar Contour Plot — misc-docs 1.0.0 documentation. Misc-Docs. https://miscellaneous-analysis-north-project-documentation.readthedocs.io/en/latest/solar-contour-plot.html
                </p>
                <p>
                5. PVEducation, Arbitrary orientation and tilt. PVEducation. (n.d.). Retrieved November 29, 2021, from https://www.pveducation.org/pvcdrom/properties-of-sunlight/arbitrary-orientation-and-tilt.  
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
               <p>Some day in the future :D</p>
               <p>Have a nice day!🌻</p>
            </div>
            <section className={ styles.content }>
            </section>
        </div>
    </div>
    }
}