import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

interface IRange {
    min: number
    max: number
    value: number[]
    onChange: any
}

const RangeComponent: React.FC<IRange> = ({ min, max, value, onChange }) => {
    const setValue = (value: number[]) => {
        onChange(value)
    }

    return (
        <div
            className='w-full lg:w-1/2'
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}
        >
            <Range
                values={value}
                min={min}
                max={max}
                onChange={(value) => setValue(value)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: "36px",
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: "8px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                    values: value,
                                    colors: ["#CF2C2C", "#222222"],
                                    min: min,
                                    max: max
                                }),
                                alignSelf: "center"
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "15px",
                            width: "15px",
                            borderRadius: "999px",
                            backgroundColor: isDragged ? "#CF2C2C" : "#FFF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            outline: "none"
                        }}
                    >
                        <output className='font-bold whitespace-nowrap' style={{
                            position: 'absolute',
                            top: '20px',
                            color: isDragged ? "#CF2C2C" : '#FFF',
                            fontWeight: 'bold',
                            fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                            padding: '4px',
                            borderRadius: '4px',
                        }} id="output">
                            {value[0]} дней
                        </output>
                    </div>
                )}
            />
        </div>
    )
}

export default RangeComponent