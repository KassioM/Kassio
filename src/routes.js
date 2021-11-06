import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

//Pages

    //Home

    import Header from './pages/Header/Header';
    import About from './pages/About';
    import Technologies from './pages/Technologies/Technologies';
    import Projects from './pages/Projects';
    import Contact from './pages/Contact';
    import ReturnTop from './pages/ReturnTop'

    //Not Found
    
    import NotFound from './pages/NotFound';

const Routes = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <Router>
            <Switch>
                
                <Route path="/" exact >

                    <div data-aos="fade-in">
                        <Header />
                    </div>
                        
                    <div data-aos="fade-in">
                        <About />
                    </div>

                    <div data-aos="fade-in">
                        <Technologies />
                    </div>

                    <div data-aos="fade-in">
                        <Projects />
                    </div>

                    <div data-aos="fade-in">
                        <Contact />
                    </div>

                    <ReturnTop />
                    
                </Route>

                <Route path="*" exact >
                    <NotFound />
                </Route>

            </Switch>
        </Router>
    )
}

export default Routes;
