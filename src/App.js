import React, {Component} from 'react';
import {IntlProvider} from "react-intl"
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import MLSQLHeader from './components/MLSQLHeader'
import MLSQLApp from './components/MLSQLApp'
import { getBrowserLanguage } from './util'

class App extends Component {
    state = {
        lang: "zh",
        messages: zh_CN
    }

    handleLocaleChange = (lang) => {
        this.setState({ lang, messages: lang === "zh" ? zh_CN : en_US });
    }

    componentDidMount () {
        const language = getBrowserLanguage()
        this.setState({lang: language.includes('zh') ? 'zh' : 'en'})
    }

    render() {
        return (
            <IntlProvider locale={this.state.lang} messages={this.state.messages}>
            <div className="App">
                <MLSQLHeader onLocaleChange={this.handleLocaleChange} />
                <MLSQLApp/>
            </div>
            </IntlProvider>
        );
    }
}

export default App;
