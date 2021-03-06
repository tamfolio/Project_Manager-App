import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
    <div className='container section project-details'>
        <div className="card z-depth-0">
            <div className="card-content">
                <div className="card-title">Project Title - {id}</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum libero harum labore impedit, ipsa sit accusamus quasi molestiae deleniti eum, molestias reiciendis deserunt magni aperiam sapiente illo eius vitae eligendi?</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Tamilore</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails