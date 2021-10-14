import React from 'react';
import "./banner.css"
import bg from '../../../../images/bg.png'
import { FormControl, InputGroup,Button } from 'react-bootstrap';

const BgImage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center center',
    backgroundSize: '112%',
    backgroundRepeat: 'no-repeat',
    // padding: '160px 0'
}

const Bennar = () => {
    return (
        <div style={BgImage} className="text-center py-5">
            <h1 className="mt-5">Best food waiting for your belly</h1>
            <InputGroup className="mt-4 mb-5 w-50 mx-auto position-relative">
                <FormControl
                    className="py-2 border-0 rounded-pill pe-5"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button
                    className="rounded-pill py-2 px-4 position-absolute top-0 end-0" variant="danger" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
        </div>
    );
};

export default Bennar;