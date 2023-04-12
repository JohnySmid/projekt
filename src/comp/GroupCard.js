const SingleGroup = {
    studenti: [
        {'id': 1, name: "Lukáš", surname: "Špánik", email: "s@seznam.cz"},
        {'id': 2, name: "Jan", surname: "Šmíd", email: "s@seznam.cz"},
        {'id': 3, name: "Peter", surname: "Walker", email: "w@seznam.cz"},
    ]
}

const GroupCard = () => {
    return (
        <table className="table table-hover table-stripped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Jméno</th>
                <th scope="col">Příjmení</th>
                <th scope="col">Email</th>
                <th scope="col">Nástroje</th>
            </tr>
        </thead>
        <tbody>
        {SingleGroup.studenti.map((student) => (
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.email}</td>
                <td><button onClick={() => console.log(`student s ID ${student.id}`)}>Vypis</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    )
};

export default GroupCard;