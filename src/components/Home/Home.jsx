import React from 'react'
import { connect } from 'react-redux';
import styles from './Home.module.css';

function Home(props) {

   
    return (
        <div>
            <h1>Home page</h1>
            <NewsPreview />
        </div>
    )
}

const NewsPreview = () => {
    return <div className = {styles.previewBlock}>
        <div>
            <p><img src="https://i.ytimg.com/vi/LoZiD6NcLZE/hqdefault.jpg" alt=""/></p>
            <p className = {styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        previews: state.homePage.newsPreview
    }
}

export default connect()(Home);
