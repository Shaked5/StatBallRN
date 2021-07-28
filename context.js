import React from 'react';

const StatBallContext = React.createContext({});

function StatBallProvider({ children }) {
    const [user, setUser] = React.useState(null);
    const [players, setPlayers] = React.useState(null);
    const [Games, setGames] = React.useState(null);

    const value = { user, setUser, players, setPlayers, Games, setGames };

    return <StatBallContext.Provider value={value}>{children}</StatBallContext.Provider>;

}
export { StatBallContext, StatBallProvider };