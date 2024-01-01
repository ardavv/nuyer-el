import './cardstyle.css'

export default function CardFlip({textFront, textBack}) {
    return (
        <div className="flip">
            <div className="flip-content">
                <div className="flip-front">
                    <strong className='text'>{textFront}</strong>
                </div>
                <div className="flip-back">
                    <strong>{textBack}</strong>
                </div>
            </div>
        </div>
    );
}