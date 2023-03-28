import React from 'react';
//Will need to be deleted and remake
function PlannerList(props) {
  return (
    <li>
      {props.item.text}
      <button onClick={() => props.deleteItem(props.item.key)}>X</button>
    </li>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="List">
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter task"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.items.map(item => (
            <PlannerList
              key={item.key}
              item={item}
              deleteItem={this.deleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;