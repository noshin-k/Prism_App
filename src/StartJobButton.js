import React from "react";
import {Button} from '@workday/canvas-kit-react-button';

class StartJobButton extends React.Component {
    render () {
        return (
            <div>
                <Button variant={ButtonVariant.Primary}>Select Button</Button>
            </div>
        );
    }
}

export default StartJobButton;