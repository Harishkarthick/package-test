import React from "react";
import styled from "styled-components";
import PropType from 'prop-types';

const Fancy = ({label, onClick, ...props}) => {
    return <button {...props} onClick={onClick}>{label}</button>
}

Fancy.prototype = {
    label : PropType.string.isRequired,
    onClick : PropType.func.isRequired
}

export {Fancy};