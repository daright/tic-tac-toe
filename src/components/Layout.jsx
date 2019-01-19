import React from 'react';
import Header from './Header';
import MenuLayout from './MenuLayout';

export default function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <MenuLayout>{props.children}</MenuLayout>
        </React.Fragment>
    );
}
