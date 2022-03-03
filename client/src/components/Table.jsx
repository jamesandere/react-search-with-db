const Table = ({ data }) => {
  return (
    <table>
      <th>Name</th>
      <th>Surname</th>
      <th>Email</th>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
