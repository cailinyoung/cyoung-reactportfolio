import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className ="header-color" title={<Link style={{textDecoration: 'none', color:'white'}}to='/'>CAILIN YOUNG</Link>} scroll>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer" title="Hello!">
            <Navigation>
              <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
