import { Chrono } from "react-chrono";
import { useState, useEffect } from "react";

const EvTimelineViz = () => {

    const [milestones, setMilestones] = useState([]);

    useEffect(() => {
        // Initially when the component renders the unmounted variable set to false.
        let unmounted = false;

        const getMilestones = async () => {

            // Fetch and set the state only when the component is mounted
            if (!unmounted) {
                const url = "/api/milestones";
                const res = await fetch(url);
                const data = await res.json();

                setMilestones(data);
            }
        };

        getMilestones();

        // After this component gets unmounted unsubscribe any background calls.
        return () => {
            unmounted = true;
        };
    }, []);

    return (
        <div>
            {   milestones.length > 0 ?
                <Chrono items={milestones} mode="HORIZONTAL" theme={{ "primary": "#091821", "secondary": "#bbd237" }}>
                    <div className="chrono-icons">
                        {
                            milestones.map(milestone => {
                                return (
                                    <svg viewBox="0 0 10 16.4">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <polygon className="cls-1" points="6.4 0 0 8.63 4.01 10.09 3.61 16.4 10 7.73 5.99 6.25 6.4 0" />
                                            </g>
                                        </g>
                                    </svg>
                                )
                            })
                        }
                    </div>
                </Chrono>

                :
                <p>Timeline currently unavailable</p>
            }
        </div>
    )
}

export default EvTimelineViz
