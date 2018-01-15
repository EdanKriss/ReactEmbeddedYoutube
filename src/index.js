import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './api-key';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null
        };

        this.videoSearch('physics');
    }

    videoSearch(term) {
        YoutubeSearch({key: API_KEY, term: term}, (data) => {
            this.setState({ 
                videos: data,
                selectedVideo: data[0]
            });
        });
    }

    render() {
const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 200);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// take this components generated HTML and put it
// on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));