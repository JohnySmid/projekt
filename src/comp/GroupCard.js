import { useState } from 'react';

const SingleGroup = {
    studenti: [
        {'id': 1, name: "Lukáš", surname: "Špánik", email: "s@seznam.cz"},
        {'id': 2, name: "Jan", surname: "Šmíd", email: "s@seznam.cz"},
        {'id': 3, name: "Peter", surname: "Walker", email: "w@seznam.cz"},
    ]
}

export const GroupCard = ({title}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
  
    const handleAddStudent = (event) => {
        // prevence reloadu stranky, umozni nam submit
      event.preventDefault();

      const newStudent = {
        id: SingleGroup.studenti.length + 1,
        name,
        surname,
        email,
      };
  
      SingleGroup.studenti.push(newStudent);
      setName('');
      setSurname('');
      setEmail('');
    };

    return (
    <div className="container">
        <h2>{title}</h2>
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
            <tr>
                <td>-</td>
                <td><input type="text" value={name} onChange={(event) => setName(event.target.value)} /></td>
                <td><input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} /></td>
                <td><input type="text" value={email} onChange={(event) => setEmail(event.target.value)} /></td>
                <td><button onClick={handleAddStudent}>Add</button></td>
            
            </tr>
        </tbody>
        </table>
    </div>
    )
};