import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Issue(props) {
    const { issue } = props;
    return (
        <Card>
            <Card.Body>
                <Card.Title><h3><Link to={`/issues/${issue.number}`}>{issue.title}</Link></h3></Card.Title>
                <Card.Text>
                    <span>#{issue.number} opened at {issue.created_at} by <a href={issue.user.html_url}>{issue.user.login}</a></span>
                </Card.Text>
            </Card.Body >
        </Card>

    )
}
export default Issue