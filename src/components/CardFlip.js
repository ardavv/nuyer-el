import './cardstyle.css'

export default function CardFlip({textFront, textBack}) {
    return (
        <div class="flip">
            <div class="flip-content">
                <div class="flip-front">
                    <strong class='text'>{textFront}</strong>
                </div>
                <div class="flip-back">
                    <strong>{textBack}</strong>
                </div>
            </div>
        </div>
    );
}