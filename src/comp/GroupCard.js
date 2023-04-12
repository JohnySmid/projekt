const SingleGroup = {
    studenti: [
        {'id': 1, name: "Lukáš", surname: "Špánik", email: "s@seznam.cz"},
        {'id': 2, name: "Jan", surname: "Šmíd", email: "s@seznam.cz"},
        {'id': 3, name: "Peter", surname: "Walker", email: "w@seznam.cz"},
    ]
}



const GroupCard = () => {
    return (
        <div className= "card">
        <div className= "card-header">
            Hlavicka
        </div>
        <div className= "card-body">
            Telicko
            <GroupTable students ={studenti}/>
        </div>
        <div className= "card-footer">
            Paticka
        </div>
    </div>
    )
};

