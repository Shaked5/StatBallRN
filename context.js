import React from 'react';

const StatBallContext = React.createContext({});

function StatBallProvider({ children }) {
    const [user, setUser] = React.useState(null);
    const [players, setPlayers] = React.useState(null);
    const [Games, setGames] = React.useState(null);
    const [EPlayer, setEPlayer] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false);
    const [playerList, setPlayerList] = React.useState([]);

    const value = { user, setUser, players, setPlayers, Games, setGames, EPlayer, setEPlayer, openModal, setOpenModal, playerList, setPlayerList };
    return <StatBallContext.Provider value={value}>{children}</StatBallContext.Provider>;

}
export { StatBallContext, StatBallProvider };