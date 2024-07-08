import React from 'react';
import './MainContent.css';
import Trips from './trip';
const MainContent = () => {
    return (
        <main className="main-content">
            {/* <section className="hero">
                <h1>Rishikesh Adventure</h1>
                <p>Explore the beauty and thrill of Rishikesh with our exclusive packages.</p>
            </section>
            <section className="gallery">
                <h2>Gallery</h2>
                <div className="images">
                    <div className="gallery-box">
                        <img src="https://media.istockphoto.com/id/655235152/photo/hindu-god-statue-lord-shiva-sculpture-sitting-in-meditation-india-2011.jpg?s=1024x1024&w=is&k=20&c=MaFtK3M-wgD_JEYD5hRF1zdEgBxv5I5tESU6LkFsPxQ=" alt="Scenic View 1" />
                    </div>
                    <div className="gallery-box">
                        <img src="https://media.istockphoto.com/id/845169996/photo/dusk-time-at-rishikesh-holy-town-and-travel-destination-in-india-colorful-sky-and-clouds.jpg?s=1024x1024&w=is&k=20&c=j7YblXiLMaYAvxVaqtuhCvqtmRJgFmyA618Ub5JB5xU=" alt="Scenic View 2" />
                    </div>
                    <div className="gallery-box">
                        <img src="https://media.istockphoto.com/id/1270273473/photo/river-ganga-in-rishikesh-during-monsoon.jpg?s=1024x1024&w=is&k=20&c=Lk38K9SkQ0UpyPIC0gwBUAhcRXLFETQ1S-QgFMIJtfI=" alt="Scenic View 3" />
                    </div>
                    <div className="gallery-box">
                        <img src="https://media.istockphoto.com/id/514794340/photo/woman-in-cafe.jpg?s=1024x1024&w=is&k=20&c=y0NpCZ077oIJOqGdkrQ3VoduVAbi_OaNoWLHHKKBUv4=" alt="Scenic View 4" />
                    </div>
                    <div className="gallery-box">
                        <img src="https://media.istockphoto.com/id/962532640/photo/prayer-lamps-india-rishikesh-ganges-offering-prayers.jpg?s=1024x1024&w=is&k=20&c=LHag3ij1dUGKqQksynxRkjsUcfLph-XWW_T_iwhz66k=" alt="Scenic View 5" />
                    </div>
                    <div className="gallery-box">
                        <img src="https://media.istockphoto.com/id/1513771536/photo/river-ganges-flowing-in-haridwar-during-rainy-season-perspective-view.jpg?s=1024x1024&w=is&k=20&c=RMxOzfFQHB29zUNo31MWu96uPmay6oUps2FnFrq4yj8=" alt="Scenic View 6" />
                    </div>
                </div>
            </section> */}
            <section className="details">
                    <Trips/>
            </section>
        </main>
    );
};

export default MainContent;
