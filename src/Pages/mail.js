import React, {Component} from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';

import InboxPage from './inbox';
import DraftPage from './draft';
import TrashPage from './trash';
import SentPage from './sent';

class MailPage extends Component{
    render(){
        return(
            <div>
                <div className='header'></div>
                <div className='body'>
                    <div className='sidebar'>
                        <div>
                            <NavLink to="/mail/inbox" className="button">Go To Inbox Page</NavLink>
                        </div>
                        <div>
                            <NavLink to="/mail/draft" className="button">Go To Draft Page</NavLink>
                        </div>
                        <div>
                            <NavLink to="/mail/trash" className="button">Go To Trash Page</NavLink>
                        </div>
                        <div>
                            <NavLink to="/mail/sent" className="button">Go To Sent Page</NavLink>
                        </div>
                    </div>
                    <div className='content'>
                        <Routes>
                            <Route path="/mail/inbox" element={InboxPage}></Route>
                            <Route path="/mail/draft" element={DraftPage}></Route>
                            <Route path="/mail/trash" element={TrashPage}></Route>
                            <Route path="/mail/sent" element={SentPage}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }
}
export default MailPage;