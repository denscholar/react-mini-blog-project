const Navbar = () => {
   
    return (
 
        <nav className="navbar">
            <h1>Dennis Blog</h1>
              <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: 'grey',
                    paddingLeft: '10px',
                    borderRadius: '8px'
                }} >New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;