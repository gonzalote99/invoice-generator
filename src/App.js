import React from "react";
import "./style.css";
import FromTo from './FromTo';
import Invoice from './Invoice';
import Table from './Table';

class App extends React.PureComponent{
  state = {
    title: localStorage.getItem('title') || 'Invoice',
    saved: 0
  }

  updateTitle = (event) => {
    const title = event.target.textContent;
    this.setTitle({title});
    localStorage.setItem('title', title);
    this.onUpdateState();
  }

  onUpdateState = () => {
    this.setState({saved: 0})
    setTimeout(() => {
      this.setState({
        saved: Date.now() + 2 * 1000
      })
      setTimeout(() => {
        if(Date.now() > this.state.saved) {
           this.setState({saved: 0})
        }
      }, 2500)
    }, 300)

  }

  render() {

    return(
      <div>
        <div className="App">
         <div className="page">
            <h1 
             contentEditable
             onBlur={this.updateTitle}
            >
              {this.state.title}
              </h1>
              <FromTo onUpdateState={this.onUpdateState} />
              <Invoice onUpdateState={this.onUpdateState} />
              <Table onUpdateState={this.onUpdateState} />

           </div>
           <img className="print" src="https://raw.githubusercontent.com/sljavi/free-invoice/b496c4dfe9ad096e741759e74d4a8f587c45eec3/src/printer.svg" onClick={() => window.print()} alt="print"   />

          </div>
          {!!this.state.saved && (<img className="save" src="https://raw.githubusercontent.com/sljavi/free-invoice/b496c4dfe9ad096e741759e74d4a8f587c45eec3/src/save.svg" alt="save" />)}

        </div>
    )
  }
}

export default App;

