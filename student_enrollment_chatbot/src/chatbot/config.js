import { createChatBotMessage } from 'react-chatbot-kit';
import Button from '../Components/Button/Button';
import BotAvatar from '../Components/Avatar/BotAvatar/BotAvatar';
import Countdown from '../Components/Countdown/Countdown';

const config = {
    botName: "Quick Info",
    initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`, {
        widget: "button"
    })],
    widgets: [
        {
            widgetName: "button",
            widgetFunc: (props) => <Button {...props} />
        },
        {
            widgetName: "countdown",
            widgetFunc: (props) => <Countdown {...props} />
        }
    ],
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
    }
};

export default config;