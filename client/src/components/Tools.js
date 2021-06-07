import {useState, useEffect} from 'react';

const Tools = () => {
    const [specs, setSpecs] = useState([]);

    const getSpecs = async () => {
        const response = await fetch('/api/specs')
        const fetchedSpecs = await response.json()

        setSpecs(fetchedSpecs)
    }

    useEffect(() => {
        getSpecs();
    }, [])

    return (
        <div>
            Tools Component
        </div>
    )
}

export default Tools