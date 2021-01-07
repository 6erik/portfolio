import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Customisable alert component that remains hidden until called.
 *
 * @param {boolean} props.visible - The current visibility of the component.
 * @param {*} props.children - Child components.
 */
export const About = ({ visible, children }) => {
    const [isVisible, setVisibility] = useState(null);

    useEffect(() => {
        setVisibility(visible);
    }, [visible]);

    if (!isVisible) return null;

    return (
        <div>
            testing about page
        </div>
    );
};

About.propTypes = {
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};