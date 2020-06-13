import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

const List = ({ expenses, handleClearExpenses }) => (
  <div>
    <ListGroup>
      {expenses.map(item => (
        <ListGroupItem key={item.id}>
          {item.name} - $ {item.amount}
            <Button type="submit" color="danger" onClick={() => handleClearExpenses(item.id)}>
                Delete
            </Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List
