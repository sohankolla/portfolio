
export default function Experience(props) {
    return (
        <div className="bg-transparent border-2 border-white rounded-lg p-6 mb-4 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">{props.title}</h3>
                <span className="text-sm text-gray-300">{props.startDate} - {props.endDate}</span>
            </div>
            <h4 className="text-lg text-blue-400 mb-2">{props.company}</h4>
            <p className="text-gray-300 mb-3">{props.description}</p>
            {props.technologies && (
                <div className="flex flex-wrap gap-2">
                    {props.technologies.split(',').map((tech, index) => (
                        <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}