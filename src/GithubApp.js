import React, {useState, useEffect} from "react";

function GithubApp({login}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [login]);

    if (loading) console.log('loading...');
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>
    if (!data) return null;

    return (
        <div>
            <h1>name: {data.name}</h1>
            <p>login: {data.login}</p>
            <img alt={data.login} src={data.avatar_url}/>
        </div>
    );


    return <div>No user available</div>
}

export default GithubApp;