import { useState } from 'react';
import { Range } from 'react-range';

const SuperSimple = ({ onDataChange }) => {
    const [values, setValues] = useState([50]);

    const sendDataToParent = () => {
        const data = values;
        onDataChange(data);
    };

    return (
        <Range
            label="Select your value"
            step={1}
            min={0}
            max={100}
            values={values}
            onChange={(values) => {
                setValues(values);
                sendDataToParent();
            }}
            renderTrack={({ props, children }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '4px',
                        width: '100%',
                        backgroundColor: '#e9e9e9',
                        borderRadius: '5px',
                    }}
                >
                    {children}
                </div>
            )}
            renderThumb={({ props }) => (
                <div
                    {...props}
                    key={props.key}
                    style={{
                        ...props.style,
                        height: '16px',
                        width: '16px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        border: '2px solid #000',
                    }}
                />
            )}
        />
    );
};

export default SuperSimple;
