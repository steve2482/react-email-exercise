import React from 'react';

import EmailList from './email-list';
import SideBar from './sidebar';

export class EmailWindow extends React.Component {
	constructor(props) {
		super();
    this.state = {
      folder: 'inbox'
    };
    this.onFolderClick = this.onFolderClick.bind(this);
	}

  onFolderClick(e) {
    this.setState({
      folder: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <SideBar folders={this.props.emailData} />
        </div>
        <div className='email-window box'>
          <EmailList emailData={this.props.emailData} />
        </div>
      </div>
    );
  }
}