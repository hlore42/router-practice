import React, { useEffect, useState } from 'react';
import Issue from './issue';

function IssueList() {
    const [issues, setIssues] = useState([]);

    //https://api.github.com/repos/facebook/create-react-app/issues 
    const fetchIssues = () => {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                setIssues(data)
            })
    }
    useEffect(() => {
        fetchIssues();
    }, [])
    return (
        <div>
            { issues.map(issue => {
                return (<Issue key={issue.id} issue={issue} />)
            })}
        </div>
    )
}

export default IssueList;