import { useContext,useState } from "react";
import React from 'react';

const StatBallContext = useContext({});

function StatBallProvider({children}){
    const [user , setUser] = useState(null);
    const [players , setPlayers] = useState(null);
    const [Games, setGames] = useState(null);

    const value = {user, setUser , players, setPlayers, Games, setGames};

    return <StatBallContext.Provider value={value}>{children}</StatBallContext.Provider>

}
export {StatBallContext, StatBallProvider};