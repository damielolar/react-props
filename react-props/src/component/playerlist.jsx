// src/PlayersList.js
import React from "react";
import Players from '../component/player'
import BasicExample from "./playercard";

const PlayersList = () => {
return (
<div style={{ display:'flex', mt:'1cm', gap:'50px',alignItems: 'center', justifyContent:'center'}}>
    {Players.map((Players, index) => (
    <BasicExample key={index} {...Players} />
    ))}
</div>
);
};

export default PlayersList;
