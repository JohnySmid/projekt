
export const PPTable = ({ presence }) => {
    
    console.log(presence.user.email)

    return (
      <table className="table table-hover table-light">
        <tbody>
          <tr>
            <td>{presence.presenceType.name}</td>
            <td>{presence.invitationType.name}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  
  
  
  
  