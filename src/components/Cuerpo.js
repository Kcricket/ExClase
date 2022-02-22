import React from 'react';

class Cuerpo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {names: ["juan", "pedro", "alberto"]}
      this.addName = this.addName.bind(this);
      this.changeName = this.changeName.bind(this);

    }; 

    addName(){
      console.log(this)
      var joined = this.state.names.concat("Este e un nuevo nombre")
      this.setState({ names: joined});
    }




    render() {
      const listItems = this.state.names.map((name, index) =>  <li key={index}>{name}</li>);

      return (
        <div className="tm-container">
          {listItems}
          <button onClick={this.addName}>Add Name</button>
          <button onClick={this.changeName}>Change title</button>

        </div>
      );
    }
    changeName(){
      this.props.changeNameX()
    }
}

export default Cuerpo;