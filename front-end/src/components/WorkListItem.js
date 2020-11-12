import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';

class WorkListItem extends Component {

    render() {
        return (
            <a class="thumbnail" href="works_detail.html">
                <img src="http://placehold.it/200x200" alt="Work"/>
                <div>
                    <div class="small">August 21st, 2019</div>
                    <h4>My girl is the best ♥</h4>
                </div>
            </a>
        );
    }
};

export default withRouter(WorkListItem);
