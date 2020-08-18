import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>I am an experienced content writer and web developer with 4 years worth of experience.
                 It wouldn't be an exaggeration to say I've written about everything. Be it Religion, technology, art, 
                 philosophy, entertainment. You name it! My web developing skills encompass all popular frameworks. 
                 Specializing in React, I will not only make responsively optimized websites but extremely aesthetics ones as well. Something I've mastered in Graphic Design as you'll see in my gigs.
                 My goal is to establish an immutable clientele. You won't have to look anywhere else.</p>
            </Content>
        </div>
    );

}

export default AboutPage;