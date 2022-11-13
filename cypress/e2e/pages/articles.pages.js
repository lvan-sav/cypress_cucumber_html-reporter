const { ArticleBase } = require('./support.bases.pages')


class ChannelBillingArticlePage extends ArticleBase {

}

class MoveTwillioArticlePage extends ArticleBase {

}

class SipTrunkingArticlePage extends ArticleBase {

    
}

module.exports = {
    SipTrunkingArticlePage: SipTrunkingArticlePage,
    sipTrunkingArticlePage: new SipTrunkingArticlePage,

    MoveTwillioArticlePage: MoveTwillioArticlePage,
    moveTwilioArticlePage: new MoveTwillioArticlePage,

    ChannelBillingArticlePage: ChannelBillingArticlePage,
    channelBillingArticlePage: new ChannelBillingArticlePage
}