import { useRef, useEffect, useState } from 'react';
import { select, pack, hierarchy, shuffle } from 'd3';

// Custom hook for responsive chart
const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null);
    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setDimensions(entry.contentRect);
            });
        });
        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserve(observeTarget);
        };
    }, [ref]);

    return dimensions;
};

const EvIncentivesViz = () => {

    // Refs for wrapper and chart
    const wrapperRef = useRef(null);
    const incentivesRef = useRef(null);

    // For responsive chart
    const dimensions = useResizeObserver(wrapperRef);

    const myPack = (size) => {
        return pack()
            .size(size)
            .padding(10)
    }

    const makeHeirarchy = (data) => {
        return hierarchy({ children: data }).sum(d => d.Max_Incentive);
    }

    const [incentives, setIncentives] = useState([]);

    useEffect(() => {
        // Initially when the component renders the unmounted variable set to false.
        let unmounted = false;

        const getIncentives = async () => {
            // Set the state only when the component is mounted
            if (!unmounted) {
                const url = "/api/incentives";
                const res = await fetch(url);
                const data = await res.json();

                setIncentives(data.filter(incentive => incentive.Condition === "New"));
            }
        };

        getIncentives();
        // After this component gets unmounted unsubscribe any background calls.
        return () => {
            unmounted = true;
        };
    }, [])

    useEffect(() => {
        if (!dimensions) return;

        const svg = select(incentivesRef.current);
        svg.selectAll("*").remove();

        let heirarchicalData = makeHeirarchy(shuffle(incentives));
        let packLayout = myPack([dimensions.width, dimensions.height]);
        const root = packLayout(heirarchicalData);

        const leaf = svg.selectAll("g")
            .data(root.leaves())
            .join("g")
            .attr("transform", d => `translate(${d.x + 1}, ${d.y + 1})`)
            .attr("fill", leaf => leaf.data.Color);

        leaf.append("circle")
            .attr("r", d => {
                if(isNaN(d.r)) {
                    return 0;
                }
                return d.r;
            })

        svg.selectAll("g")
            .data(incentives)
            .append("text")
            .text(incentive => incentive.Max_Incentive + ' CAD')
            .attr("fill", value => value.TextColor)
            .attr("stroke", value => value.TextColor)
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .attr("font-size", value => {
                if(dimensions.width >= 425) {
                    if(value.Max_Incentive === 8000) {
                        return 45;
                    }
                    if(value.Max_Incentive === 5000) {
                        return 35;
                    }
                    if(value.Max_Incentive === 3000) {
                        return 25;
                    }
                }
                else if (dimensions.width <= 425){
                    if(value.Max_Incentive === 8000) {
                        return 35;
                    }
                    if(value.Max_Incentive === 5000) {
                        return 25;
                    }
                    if(value.Max_Incentive === 3000) {
                        return 15;
                    }
                }
                else if (dimensions.width <= 350) {
                    if(value.Max_Incentive === 8000) {
                        return 25;
                    }
                    if(value.Max_Incentive === 5000) {
                        return 15;
                    }
                    if(value.Max_Incentive === 3000) {
                        return 10;
                    }
                }
            })

    }, [incentives, dimensions])

    return (
        <>
            <div ref={wrapperRef}>
                <svg ref={incentivesRef}></svg>
            </div>

            <ul>
                {
                    incentives.map((incentive, index) => {
                        return (
                            <li key={index}>
                                <span style={{backgroundColor: `${incentive.Color}`}}></span>
                                <span>{incentive.Province}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default EvIncentivesViz
