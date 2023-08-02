import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDetails } from '../Store/Slices/StudentSlice';

const MessageParser = ({ children, actions }) => {
    const [nameAgeChecker, setNameAgeChecker] = useState("Enter Your Name")
    const dispatch = useDispatch();

    const parse = (message) => {

        try {
            const nameAsked = children.props.state.messages.find((message) => message.message === nameAgeChecker)


            if (nameAsked.message === "Enter Your Name") {
                actions.nameEntered();
                dispatch(addDetails({ name: message }));
                // dispatch(addDetails(message));
                setNameAgeChecker("Enter Your Age")
            }

            if (/^\d+(\.\d+)?$/.test(message) && nameAsked.message === "Enter Your Age") {
                dispatch(addDetails({ age: message }));
                // dispatch(addDetails(message));
                actions.thankYou();
            }

        } catch (error) {
            actions.invalidChecker()
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;