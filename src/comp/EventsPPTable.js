import { ButtonChange } from "./ButtonChange";


export const EventsPPTable = ({ presence }) => {
    
    console.log(presence.user.email)

    return (
      <table className="table table-hover table-light">
        <tbody>
          <tr>
            <td>{presence.presenceType.name}</td>
            <ButtonChange
            children={'Zmena presence'}
            presence = {presence.presenceType.name}
            />
            <td>{presence.invitationType.name}</td>
            <ButtonChange
            children={'Zmena ucasti'}
            presence = {presence.invitationType.name}
            />
          </tr>
        </tbody>
      </table>
    );
  };
  
  
  
  
  
  