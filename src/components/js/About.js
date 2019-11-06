import React from 'react';
import PageHeading from './PageHeading';

class About extends React.Component {
    
    render() {
        return (
            <div id="about-container">
                <PageHeading mainHeading="About" subText="Are you reading my journal?" />
            </div>
        )
    }
}

export default About;