import Index from "./components/ui/Header";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./components/ui/Theme"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {mainTabList} from "./utils/uiUtils";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router>
            <Index/>
            <Switch>
                {
                    mainTabList.map(tab => <Route key={tab.id} exact path={tab.path} component={tab.component}/>)
                }
            </Switch>
        </Router>
    </ThemeProvider>


  );
}

export default App;
