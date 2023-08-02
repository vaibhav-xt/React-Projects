import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {


    const enterName = () => {
        const message = createChatBotMessage("Enter Your Name")
        udpateState(message);

    }

    const nameEntered = () => {
        const message = createChatBotMessage("Enter Your Age")
        udpateState(message);
    }

    const udpateState = (message) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }

    const invalidChecker = () => {
        const message = createChatBotMessage("Try Again!")
        udpateState(message)
    }

    const thankYou = () => {
        const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit", {
            widget: "countdown"
        });
        udpateState(message);
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        enterName,
                        nameEntered,
                        invalidChecker,
                        thankYou
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;