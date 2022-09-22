
const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.surname}</td>
    </tr>
  );
}



const Friends = (props) => {
  let users = props.function();
  let userCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < userCount; i++) {
    userRow.push(<TableRow key={i} index={i} name={users[i].name} surname={users[i].surname} />);
  }

	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Имя</th>
					<th scope="col">Фамилия</th>
				</tr>
			</thead>
			<tbody>
        {userRow}
			</tbody>
		</table>
	);
};

export default Friends;
