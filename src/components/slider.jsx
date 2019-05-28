import React from "react";
import styled from "styled-components";
import Slider from "nw-react-slider";

const MySlider = () => {
    return(
        <Slider
            value={0}
            min={0}
            max={100}
            ticks
            markers={[{value: 3, label: 'Three'}, {value: 8, label: 'Eight'}]}
            onChange={this.handleChange}/>
    )
}


export default MySlider;