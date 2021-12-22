import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import NavBar from './components/navBar';

class App extends Component {
  state = {
    habits: [
      {id:1, name: "Reading", count:0}
      , {id:2, name: "Running", count:0}
      , {id:3, name: "Cooking", count:0}
    ]
  }
  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      } 

      return item;
    });

    this.setState({habits});
  }

  handleDecrement = (habit) => {
      const habits = this.state.habits.map(item => {
        if(item.id == habit.id){
          const count = habit.count - 1;
          return {...habit, count: count < 0 ? 0 : count }
        }

        return item;
      });

      this.setState({habits});
  }

  handleDelete = (habit) => {
      const habits = [...this.state.habits].filter(item => {
          return item.id != habit.id;
      });
      
      this.setState({habits});
  }

  handleOnAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name, count:0}];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if(item.count != 0){
        return {...item, count: 0};
      }

      return item;
    });
    this.setState({habits});
  }

  render() {
    return (
      <>
      <NavBar totalCnt={this.state.habits.filter(item => item.count > 0).length}></NavBar>
      <Habits habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete} 
        onAdd={this.handleOnAdd}
        onReset={this.handleReset}/>
      </>      
    );
  }
}

export default App;