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

const EvIncentives = () => {
    // Refs for wrapper and chart
    const wrapperRef = useRef(null);
    const incentivesRef = useRef(null);

    // For responsive chart
    const dimensions = useResizeObserver(wrapperRef);

    const myPack = (size) => {
        return pack()
            .size(size)
            .padding(25)
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
        if(!dimensions) return;

        const svg = select(incentivesRef.current);
        svg.selectAll("*").remove();

        let heirarchicalData = makeHeirarchy(shuffle(incentives));
        let packLayout = myPack([dimensions.width, dimensions.height]);
        const root = packLayout(heirarchicalData);

        const leaf = svg.selectAll("g")
            .data(root.leaves())
            .join("g")
            .attr("transform", d => `translate(${d.x + 1}, ${d.y + 1})`);

        leaf.append("circle")
            .attr("r", d => d.r)
            .attr("fill-opacity", 0.7)
            .attr("fill", "navy");
    }, [incentives, dimensions])

    return (
        <section id="evIncentives">
            <h2>Federal and provincial incentives</h2>
            <div ref={wrapperRef}>
                <svg ref={incentivesRef}>

                </svg>
            </div>
        </section>
    )
}

export default EvIncentives;
