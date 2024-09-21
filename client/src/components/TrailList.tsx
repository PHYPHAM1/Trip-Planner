import React from "react";

interface Trail {
    id: number,
    name: string,
    city: string,
    zip: number,
    crossstreets: string,
    address: string,
    transit: string,
    lat: number,
    lng: number,
    desc: string,
    lighting: string,
    difficulty: number,
    surface: string,
    parking: string,
    facilities: string,
    hours: number | string,
    loopcount: string,
    satImgURL: string,
    largeImgURL: string,
    thumbURL: string,
    attractions: [string],
            loops: {
                1: {
                    name: string,
                    distance: number,
                    steps: number,
                },
                2: {
                    name: string,
                    distance: number,
                    steps: number,
                },
                3: {
                    name: string,
                    distance: number,
                    steps: number,
                },
                4: {
                    name: string,
                    distance: number,
                    steps: number,
                }
}
}

interface TrailListProps {
    trail: Trail[] | null;
}
const TrailList: React.FC<TrailListProps> = ({ trail }) => {
    return(
        <>
            <h2 className="trail-search">
                All Trails:
            </h2>
            {trail && trail.map((trail) => (
                <div className="trail-result" key={trail.id}>
                    <div className="trail-id">
                        <h3>{trail.id}. {trail.name}</h3>
                    </div>
                    <div className="trail-id">
                        <h4>{trail.city}</h4>
                    </div>
                </div>
            ))}
        </>
    );
    
}

export default TrailList;