function StatScale({scaleValue, statType}){

    const scaleType = 
            statType === 'velocity' ? (
                <div>🐎</div>
            ) : (
                <div>👊🏽</div>
            )

    const range =[1,2,3,4,5,6]

    return <div>
        {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )}
    </div>
}

export default StatScale