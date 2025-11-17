
export default function Project(props) {
    return (
        <div className="bg-transparent border-2 border-white rounded-lg p-6 mb-4 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-2">{props.name}</h3>
            <p className="text-gray-300 mb-4">{props.description}</p>
            
            <div className="flex gap-4 mb-4">
                {props.demoLink && (
                    <a 
                        href={props.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-4 py-2 rounded transition-colors duration-200"
                    >
                        Live Demo
                    </a>
                )}
                {props.repoLink && (
                    <a 
                        href={props.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black px-4 py-2 rounded transition-colors duration-200"
                    >
                        GitHub
                    </a>
                )}
            </div>

            {props.technologies && (
                <div className="flex flex-wrap gap-2">
                    {props.technologies.split(',').map((tech, index) => (
                        <span key={index} className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}