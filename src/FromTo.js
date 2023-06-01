import React from 'react';

class FromTo extends React.PureComponent {
state = {
  fromName : localStorage.getItem('fromName') || 'your name' ,
  fromAddress : localStorage.getItem('fromAddress') || '123 street' ,
  fromTelephone : localStorage.getItem('fromTelephone') || '(+1) 423 323',
  fromEmail : localStorage.getItem('fromEmail') || 'your.email@.com' ,
  toName : localStorage.getItem('toName') || 'company name' ,
  toAddress : localStorage.getItem('toAddress') || '125 street' ,
  toTelephone : localStorage.getItem('toTelephone') || '(+2) 432 423' ,
  toEmail : localStorage.getItem('toEmail') || 'fdf@.com',
}

updateState = (key, event) => {
const value = event.target.textContext;
this.setState({[key]: value});
localStorage.setItem(key, value);
this.props.onUpdateState();
}

render() {
  return (
    <div className="from-to">
      <div className="from">
        <h3>from</h3>
        <p
         className='name'
         contentEditable
         onBlur={(event) => this.updateState('fromName', event)}
        >
          {this.state.fromName}

          </p>
          <p
         className='address'
         contentEditable
         onBlur={(event) => this.updateState('fromAddress', event)}
        >
          {this.state.fromAddress}

          </p>
          <p
         className='telephone'
         contentEditable
         onBlur={(event) => this.updateState('fromTelephone', event)}
        >
          {this.state.fromTelephone}

          </p>
          <p
         className='email'
         contentEditable
         onBlur={(event) => this.updateState('fromEmail', event)}
        >
          {this.state.fromEmail}

          </p>

        </div>
        <div className='to'>
         <h3>to</h3>
         <p
         className='name'
         contentEditable
         onBlur={(event) => this.updateState('toName', event)}
        >
          {this.state.toName}

          </p>
          <p
         className='address'
         contentEditable
         onBlur={(event) => this.updateState('toAddress', event)}
        >
          {this.state.toAddress}

          </p>
          <p
         className='telephone'
         contentEditable
         onBlur={(event) => this.updateState('toTelephone', event)}
        >
          {this.state.toTelephone}

          </p>
          <p
         className='email'
         contentEditable
         onBlur={(event) => this.updateState('toEmail', event)}
        >
          {this.state.toEmail}

          </p>
 
          </div>

      </div>
  );
}
}

export default FromTo;