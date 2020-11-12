import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';

class WorkListItem extends Component {

    render() {
        let image = this.props.work.headerImageURL;
        let date = this.props.work.date;
        let title = this.props.work.title;
        return (
            <NavLink class="thumbnail" href="works_detail.html">
                <img src={image} alt="Work"/>
                <div>
                    <div class="small">{date}</div>
                    <h4>{title}</h4>
                </div>
            </NavLink>
        );
    }
};

export default withRouter(WorkListItem);
