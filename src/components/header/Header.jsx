import "./header.css"

export default function header() {
  return (
    <div className="header">  
        <div className="headerTitles">
            <span className="headerTitleSm">Welcome to...</span>
            <span className="headerTitleLg">My Blog</span>
        </div> 
        <img className="headerImg" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="" />
    </div>
  )
}

