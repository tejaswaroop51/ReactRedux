//Create a new component. This component should produce some HTML

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB_bwA3o1khhaomdDomh70CM-61ztIqc0E';


class App extends Component {

    constructor(props){

        super(props);

        this.state = {
            videos :[],
            selectedVideo: null
        };

        this.videoSearch('Cisco Systems');

    }

    videoSearch(term){

        YTSearch({key: API_KEY,term: term},(videos) => {

            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });

        });
    }

    render(){

        return(

            <div>
                <SearchBar onSearchTermChnage={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos}  onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }

}

// Take this component's generated HTML and put it in the page (in the DOM)

// <App /> is the instance of class App

ReactDom.render(<App />, document.querySelector('.container'));