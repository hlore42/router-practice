import React from 'react';
import { Link } from 'react-router-dom';

function Issue(props) {
    const { issue } = props;
    return (
    <div>
        <h3><Link to={`/issues/${issue.number}`}>{ issue.title }</Link></h3>
        <span>#{issue.number} opened at { issue.created_at } by <a href={issue.user.html_url}>{issue.user.login}</a></span>
        
    </div>
    )
}
export default Issue