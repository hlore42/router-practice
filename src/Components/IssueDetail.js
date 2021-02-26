import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function IssueDetail() {
    const [issue, setIssue] = useState([]);
    const { id } = useParams();

    const fetchIssue = () => {
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${id}`)
            .then(res => res.json())
            .then(data => {
                setIssue(data)
            })
    }
    useEffect(() => {
        fetchIssue();
    }, [id])
    if (!issue) {
        return ''
    }
    return (
        <div>
            <h1> {issue.title}  </h1>
        </div>
    )
}

export default IssueDetail;