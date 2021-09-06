import React, {useState} from 'react';
import Select from 'react-select';

export const MajorSelect = () => {
    const [major, setMajor] = useState('');

    const handleOnChange = option => {
        this.setState();
    }

    return (
        <Select onChange={handleOnChange}/>
    );
}