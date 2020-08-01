import React from 'react'
import UpperOption from './UpperOption'
import TwitterTags from './TwitterTags'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { headerTwitts, twitterStyle, twitterItem } from './styles'
import { twitterTags as tags } from '../MainSection/info'


class HeaderTweets extends React.PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={headerTwitts}>
                <UpperOption fontSize="1.2rem" sentence="Trending Twitts" icon={faTwitter} iconStyle={twitterStyle} itemStyle={twitterItem} link="/twitts/Florida"/>
                <TwitterTags tags={tags} />
            </div>
        )
    }
}

export default HeaderTweets