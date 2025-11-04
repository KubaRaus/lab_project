import { Dropdown, DropdownButton } from 'react-bootstrap';

function TableHeader({ label, onSort }) {
  return (
    <th>
      <DropdownButton
        id={`dropdown-${label}`}
        title={label}
        variant="success"
        size="sm"
      >
        <Dropdown.Item onClick={() => onSort('asc')}>
          Ascending order
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onSort('desc')}>
          Descending order
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onSort('natural')}>
          Natural order
        </Dropdown.Item>
      </DropdownButton>
    </th>
  );
}

export default TableHeader;
